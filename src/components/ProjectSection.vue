<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import ProjectCard from './ProjectCard.vue';
import { projects } from '@/data/projects';

const projectsRef = useTemplateRef<HTMLElement | null>('projectsRef');

defineExpose({
  projectsRef
});

const limit = ref(3);
const handleShowMore = ()=>{
  limit.value += 6;
}

</script>

<template>
  <section
    ref="projectsRef"
    id="projects"
    class="container mx-auto py-20 px-4 md:px-8"
  >
    <div class="mx-auto max-w-5xl">
      <h1 class="text-3xl md:text-4xl text-cyan-400 font-bold mb-10 text-center md:text-left"> Projects </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          <ProjectCard
            v-for="project in projects.slice(0,limit)"
            :key="project.title"
            :project="project"
          />
      </div>
      <div class="flex justify-center mt-6">
        <button
          v-if="limit<projects.length"
          @click="handleShowMore"
          class="inline-flex cursor-pointer items-center justify-center text-sm text-white bg-cyan-600 hover:bg-cyan-700 rounded-md px-4 py-2 transition-all duration-200"
        >
          Show More
        </button>
        <button
          v-else
          class="inline-flex cursor-not-allowed items-center justify-center text-sm text-white bg-cyan-950 rounded-md px-4 py-2 transition-all duration-200"
        >
          No more projects
        </button>
      </div>
    </div>
  </section>
</template>
