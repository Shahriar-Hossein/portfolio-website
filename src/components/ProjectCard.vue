<script setup lang="ts">
import type { Project } from '@/interfaces/Project ';


defineProps<{ project: Project }>();

</script>

<template>
<div class="max-w-sm m-2 lg:m-4 hover:-translate-2 border rounded-lg shadow-sm shadow-cyan-500/50 bg-gray-800 border-gray-700 hover:shadow-xl transition-all ease-linear duration-300">
  <img class="rounded-t-lg" :src="project.imageUrl" alt="" />
  <div class="p-5">
    <h5 class="mb-2 text-2xl text-cyan-400 font-bold tracking-tight">{{ project.title }}</h5>
    <p class="mb-6 font-normal h-32 overflow-hidden text-gray-400">{{ project.description.substring(0,140)+"..." }}</p>
    <div class="flex mb-4">
      <span
        class="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400"
        v-for="tech in project.techStacks"
        :key="tech"
      >
      {{ tech }}
      </span>
    </div>

    <div class="flex justify-start content-center">
      <a v-if="project.githubLink" :href="project.githubLink" target="_blank" class="mr-4 cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-800 transition-all ease-linear duration-300">
        Github Repo
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
      <a v-if="project.githubLink" :href="project.liveLink" target="_blank" class=" cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-800 transition-all ease-linear duration-300">
        Live
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>
</div>

</template>
