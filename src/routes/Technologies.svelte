<script lang="ts">
  import SkillItem from "$lib/components/SkillItem.svelte";
  export let className: string = ''; 
</script>

<section id="Skillnologies" class="py-12 text-white {className}">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Skills</h2>
    <div class="flex flex-wrap justify-center gap-6">
      <SkillItem skillName="Typescript" />
      <SkillItem skillName="Python" />
      <SkillItem skillName="React" />
      <SkillItem skillName="React Native" />
      <SkillItem skillName="Next.js" />
      <SkillItem skillName="Tailwind" />
      <SkillItem skillName="Expo" />
      <SkillItem skillName="Supabase" />
      <SkillItem skillName="Firebase" />
      <SkillItem skillName="Express" />
      <SkillItem skillName="Gemini" />
      <SkillItem skillName="Jest" />
      <SkillItem skillName="Git" />
      <SkillItem skillName="Vercel" />
      <SkillItem skillName="Linux" />
      <SkillItem skillName="AWS" />
      <SkillItem skillName="SQL" />
      <SkillItem skillName="TensorFlow" />
      <SkillItem skillName="PineScript" />
      <SkillItem skillName="Figma" />
    </div>
  </div>
</section>
