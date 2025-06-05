<script setup lang="ts">
import { useTemplateRef } from 'vue';
import ProjectCard from './ProjectCard.vue';
import { projects } from '@/data/projects';

const projectsRef = useTemplateRef<HTMLElement | null>('projectsRef');

defineExpose({
  projectsRef
});

</script>

<template>
  <section
    ref="projectsRef"
    id="projects"
    class="container mx-auto py-20 px-4 md:px-8"
  >
    <div class="mx-auto max-w-5xl">
      <h1 class="text-3xl md:text-4xl text-cyan-400 font-bold mb-10 text-center md:text-left"> Projects </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-start">
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            :project="project"
          />
      </div>
    </div>
  </section>
</template>
