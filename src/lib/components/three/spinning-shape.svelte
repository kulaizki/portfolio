<script lang="ts">
  import { T, useTask } from '@threlte/core';

  let rotationY = $state(0);
  let rotationX = $state(0);

  // Smooth continuous rotation
  useTask((delta) => {
    rotationY += delta * 0.6;
    rotationX += delta * 0.3;
  });
</script>

<T.Group rotation.y={rotationY} rotation.x={rotationX}>
  <!-- Main icosahedron - clean wireframe -->
  <T.Mesh>
    <T.IcosahedronGeometry args={[1.8, 1]} />
    <T.MeshBasicMaterial
      color="#38bdf8"
      wireframe={true}
      transparent={true}
      opacity={0.85}
    />
  </T.Mesh>

  <!-- Inner subtle glow -->
  <T.Mesh>
    <T.IcosahedronGeometry args={[1.4, 1]} />
    <T.MeshBasicMaterial
      color="#0ea5e9"
      transparent={true}
      opacity={0.1}
    />
  </T.Mesh>
</T.Group>
