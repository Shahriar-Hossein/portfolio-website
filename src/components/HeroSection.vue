<script setup lang="ts">
import { useTemplateRef } from 'vue';


const homeRef = useTemplateRef('homeRef');

defineExpose({
  homeRef
});

</script>

<template>
  <section ref="homeRef" id="home" class="container flex-col items-center place-content-center text-lg min-h-screen">
    <div class="lg:mx-32">
      <h1 class="text-7xl text-cyan-400 font-bold">Md Shahriar Hossein</h1>
      <h4 class="mt-2 text-gray-400 text-4xl font semibold">Software Engineer</h4>
      <p class="pt-2">I build softwares</p>
    </div>
  </section>
</template>
