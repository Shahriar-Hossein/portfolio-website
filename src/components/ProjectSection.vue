<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';

</script>

<template>
  <section class="container mx-auto flex-col items-center place-content-center py-26">
    <div class="mx-32">
      <h1 class="text-4xl text-white font-bold my-12"> Projects... </h1>
      <div class="flex flex-wrap items-center justify-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  </section>
</template>
