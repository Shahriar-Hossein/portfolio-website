<script setup lang="ts">
import type { Project } from '@/interfaces/Project ';


defineProps<{ project: Project }>();

</script>

<template>
<div class="overflow-hidden w-full max-w-sm md:max-w-md m-2 lg:m-4 bg-gray-800 border border-gray-700 rounded-xl shadow-md shadow-cyan-500/30 hover:shadow-xl hover:-translate-2 transition-all ease-linear duration-300">
  <img class="w-full h-48 object-cover" :src="project.imageUrl" alt="" />

  <div class="p-4 flex flex-col justify-between h-full">
    <h5 class="text-xl font-bold text-cyan-400 mb-2">{{ project.title }}</h5>
    <p class="text-gray-400 text-sm mb-4 overflow-hidden h-24">
      {{ project.description.substring(0,200)+"..." }}
    </p>

    <div class="flex flex-wrap content-start gap-2 mb-4 h-12">
      <span
        class="text-xs px-2.5 py-1 self-start rounded-full bg-cyan-950 text-cyan-400"
        v-for="tech in project.techStacks"
        :key="tech"
      >
      {{ tech }}
      </span>
    </div>

    <div class="flex gap-2 mt-auto">
      <a
        v-if="project.githubLink"
        :href="project.githubLink"
        target="_blank"
        class="flex-1 inline-flex items-center justify-center text-sm text-white bg-cyan-600 hover:bg-cyan-700 rounded-md px-3 py-2 transition-all duration-200"
      >
        Github
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
      <a
        v-if="project.githubLink"
        :href="project.liveLink"
        target="_blank"
        class="flex-1 inline-flex items-center justify-center text-sm text-white bg-cyan-600 hover:bg-cyan-700 rounded-md px-3 py-2 transition-all duration-200"
      >
        Live
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>
</div>

</template>
