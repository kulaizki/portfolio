<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let canvas: HTMLCanvasElement;
  let container: HTMLElement;
  let ctx: CanvasRenderingContext2D | null;
  let running = false;
  let frame = 1;
  let pos = { x: 0, y: 0 };
  let lines: Line[] = [];
  let isMouseInBounds = false;

  const E = {
    debug: true,
    friction: 0.5,
    trails: 80,
    size: 50,
    dampening: 0.025,
    tension: 0.99,
  };

  interface NodeType {
    x: number;
    y: number;
    vx: number;
    vy: number;
  }

  interface WaveFunction {
    phase: number;
    offset: number;
    frequency: number;
    amplitude: number;
    update(): number;
    value(): number;
  }

  class Wave implements WaveFunction {
    phase: number;
    offset: number;
    frequency: number;
    amplitude: number;

    constructor(options: Partial<WaveFunction> = {}) {
      this.phase = options.phase || 0;
      this.offset = options.offset || 0;
      this.frequency = options.frequency || 0.001;
      this.amplitude = options.amplitude || 1;
    }

    update(): number {
      this.phase += this.frequency;
      return this.offset + Math.sin(this.phase) * this.amplitude;
    }

    value(): number {
      return this.offset + Math.sin(this.phase) * this.amplitude;
    }
  }

  class Node implements NodeType {
    x = 0;
    y = 0;
    vx = 0;
    vy = 0;
  }

  class Line {
    spring: number;
    friction: number;
    nodes: Node[] = [];

    constructor(options: { spring?: number } = {}) {
      this.spring = (options.spring || 0.45) + 0.1 * Math.random() - 0.05;
      this.friction = E.friction + 0.01 * Math.random() - 0.005;
      
      for (let i = 0; i < E.size; i++) {
        const node = new Node();
        node.x = pos.x;
        node.y = pos.y;
        this.nodes.push(node);
      }
    }

    update(): void {
      let spring = this.spring;
      let node = this.nodes[0];

      node.vx += (pos.x - node.x) * spring;
      node.vy += (pos.y - node.y) * spring;

      for (let i = 0; i < this.nodes.length; i++) {
        node = this.nodes[i];
        
        if (i > 0) {
          const prevNode = this.nodes[i - 1];
          node.vx += (prevNode.x - node.x) * spring;
          node.vy += (prevNode.y - node.y) * spring;
          node.vx += prevNode.vx * E.dampening;
          node.vy += prevNode.vy * E.dampening;
        }

        node.vx *= this.friction;
        node.vy *= this.friction;
        node.x += node.vx;
        node.y += node.vy;
        spring *= E.tension;
      }
    }

    draw(): void {
      if (!ctx) return;

      let x = this.nodes[0].x;
      let y = this.nodes[0].y;

      ctx.beginPath();
      ctx.moveTo(x, y);

      for (let i = 1; i < this.nodes.length - 2; i++) {
        const current = this.nodes[i];
        const next = this.nodes[i + 1];
        x = 0.5 * (current.x + next.x);
        y = 0.5 * (current.y + next.y);
        ctx.quadraticCurveTo(current.x, current.y, x, y);
      }

      const secondLast = this.nodes[this.nodes.length - 2];
      const last = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);
      ctx.stroke();
      ctx.closePath();
    }
  }

  let colorWave: Wave;

  function initLines(): void {
    lines = [];
    for (let i = 0; i < E.trails; i++) {
      lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
    }
  }

  function handleMouseMove(e: MouseEvent | TouchEvent): void {
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    let clientX: number, clientY: number;
    
    if (e instanceof TouchEvent && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if (e instanceof MouseEvent) {
      clientX = e.clientX;
      clientY = e.clientY;
    } else {
      return;
    }
    
    // Check if mouse is within the hero section bounds
    isMouseInBounds = clientX >= rect.left && 
                     clientX <= rect.right && 
                     clientY >= rect.top && 
                     clientY <= rect.bottom;
    
    if (isMouseInBounds) {
      // Convert to coordinates relative to the hero section
      pos.x = clientX - rect.left;
      pos.y = clientY - rect.top;
      
      if (!running) {
        running = true;
        render();
      }
    }
  }

  function handleTouchStart(e: TouchEvent): void {
    if (!container || e.touches.length !== 1) return;
    
    const rect = container.getBoundingClientRect();
    const clientX = e.touches[0].clientX;
    const clientY = e.touches[0].clientY;
    
    isMouseInBounds = clientX >= rect.left && 
                     clientX <= rect.right && 
                     clientY >= rect.top && 
                     clientY <= rect.bottom;
    
    if (isMouseInBounds) {
      pos.x = clientX - rect.left;
      pos.y = clientY - rect.top;
    }
  }

  function render(): void {
    if (!ctx || !running) return;

    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    if (!isMouseInBounds) {
      requestAnimationFrame(render);
      return;
    }
    
    ctx.globalCompositeOperation = 'lighter';
    // Use sky blue hues (180-220 degrees in HSL)
    const hue = 180 + (Math.sin(colorWave.update() * 0.01) * 20 + 20);
    ctx.strokeStyle = `hsla(${hue},70%,60%,0.03)`;
    ctx.lineWidth = 8;

    for (const line of lines) {
      line.update();
      line.draw();
    }

    frame++;
    requestAnimationFrame(render);
  }

  function resizeCanvas(): void {
    if (!canvas || !container) return;
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  function handleFocus(): void {
    if (!running) {
      running = true;
      render();
    }
  }

  function handleBlur(): void {
    running = false;
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    if (!ctx) return;

    running = true;
    frame = 1;

    colorWave = new Wave({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    initLines();
    resizeCanvas();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    // Start initial render
    render();
  });

  onDestroy(() => {
    running = false;
    
    // Remove event listeners
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('touchstart', handleTouchStart);
    document.removeEventListener('touchmove', handleMouseMove);
    window.removeEventListener('resize', resizeCanvas);
    window.removeEventListener('focus', handleFocus);
    window.removeEventListener('blur', handleBlur);
  });
</script>

<div bind:this={container} class="absolute inset-0 overflow-hidden">
  <canvas 
    bind:this={canvas}
    class="pointer-events-none absolute inset-0"
    style="mix-blend-mode: screen;"
  />
</div>

<style>
  canvas {
    width: 100%;
    height: 100%;
  }
</style>