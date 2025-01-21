<script lang="ts">
  import SkillItem from "$lib/components/SkillItem.svelte";
  export let className: string = '';
</script>

<section id="technologies" class="py-12 text-white {className}">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Skills</h2>
    <div class="flex flex-wrap justify-center gap-6">
      <SkillItem skillName="Next.js" skillUrl="https://nextjs.org/" />
      <SkillItem skillName="React" skillUrl="https://reactjs.org/" />
      <SkillItem skillName="React Native" skillUrl="https://reactnative.dev/" />
      <SkillItem skillName="Tailwind CSS" skillUrl="https://tailwindcss.com/" />
      <SkillItem skillName="Expo" skillUrl="https://expo.dev/" />
      <SkillItem skillName="Supabase" skillUrl="https://supabase.io/" />
      <SkillItem skillName="Firebase" skillUrl="https://firebase.google.com/" />
      <SkillItem skillName="Gemini" skillUrl="https://www.gemini.com/" />
      <SkillItem skillName="Git" skillUrl="https://git-scm.com/" />
      <SkillItem skillName="Vercel" skillUrl="https://vercel.com/" />
      <SkillItem skillName="Linux" skillUrl="https://www.linux.org/" />
      <SkillItem skillName="AWS" skillUrl="https://aws.amazon.com/" />
      <SkillItem skillName="Python" skillUrl="https://www.python.org/" />
      <SkillItem skillName="SQL" skillUrl="https://www.mysql.com/" />
      <SkillItem skillName="TensorFlow" skillUrl="https://www.tensorflow.org/" />
      <SkillItem skillName="PineScript" skillUrl="https://www.tradingview.com/pine-script-docs/en/v4/" />
      <SkillItem skillName="Figma" skillUrl="https://www.figma.com/" />
    </div>
  </div>
</section>