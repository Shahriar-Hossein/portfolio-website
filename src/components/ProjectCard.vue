<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}
defineProps<{ project: Project }>();

</script>

<template>
<div class="max-w-sm m-2 lg:m-4 hover:-translate-2 border rounded-lg shadow-sm shadow-cyan-500/50 bg-gray-800 border-gray-700 hover:shadow-xl">
  <img class="rounded-t-lg" :src="project.image" alt="" />
  <div class="p-5">
    <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ project.title }}</h5>
    <p class="mb-3 font-normal text-gray-400">{{ project.description }}</p>
    <a :href="project.link" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-800">
      Github Repository
      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
</div>

</template>
