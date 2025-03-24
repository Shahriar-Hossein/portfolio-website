<script setup lang="ts">
import AboutSection from './components/AboutSection.vue';
import HeroSection from './components/HeroSection.vue';
import ProjectSection from './components/ProjectSection.vue';
</script>

<template>
  <div class="bg-gray-900 text-gray-100 text-lg">
    <!-- <header>

    </header> -->

    <main class="flex-col justify-items-center px-40">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>

  </div>
</template>

<style scoped>

</style>
