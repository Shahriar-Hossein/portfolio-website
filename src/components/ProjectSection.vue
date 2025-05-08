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
  <section ref="projectsRef" id="projects" class="container mx-auto flex-col items-center place-content-center py-26">
    <div class="lg:mx-32">
      <h1 class="text-4xl text-cyan-400 font-bold my-12"> Projects </h1>
      <div class="flex flex-wrap items-center justify-center">
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            :project="project"
          />
      </div>
    </div>
  </section>
</template>
