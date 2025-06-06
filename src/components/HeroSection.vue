<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { socials } from '@/data/socials';
import IconDownload from './icons/IconDownload.vue';
import IconGmail from './icons/IconGmail.vue';

const homeRef = useTemplateRef('homeRef');

defineExpose({
  homeRef
});

</script>

<template>
  <section
    ref="homeRef"
    id="home"
    class="container min-h-screen flex items-center px-4"
  >
    <div class="text-left md:text-left md:mx-32">
      <h1 class="text-3xl md:text-6xl text-cyan-400 font-bold">Md Shahriar Hossein</h1>
      <h4 class="mt-2 text-gray-400 text-2xl md:text-3xl font semibold">Software Engineer</h4>
      <!-- <p class="pt-2">I build softwares</p> -->
       <!-- CTA buttons -->
      <div class="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center md:justify-start">
        <a
          v-for="social in socials"
          :key="social.platform_name"
          :href="social.link"
          target="_blank"
          class="flex min-w-36 items-center px-5 py-2 text-sm font-medium text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 transition"
        >
          <component :is="social.icon" class="w-6 h-6 hover:text-white hover:-translate-y-2 transition ease-in-out duration-300" />
          <span class="ml-2">{{ social.platform_name }}</span>
        </a>
      </div>
      <div class="flex items-center content-center gap-2 mt-4">
        <a
          href="mailto:shahriar2507@gmail.com"
          target="_blank"
          class="flex items-center px-5 py-2 text-xs md:text-sm font-medium text-cyan-400 border border-cyan-600 rounded-lg hover:bg-cyan-800 transition"
        >
        <IconGmail class="w-6 h-6 hover:text-white hover:-translate-y-2 transition ease-in-out duration-300" />
          <span class="ml-2">Mail Me</span>
        </a>
        <a
          href="/Md_Shahriar_Hossein_Resume.pdf"
          target="_blank"
          class="flex items-center px-5 py-2 text-xs md:text-sm font-medium text-cyan-400 border border-cyan-600 rounded-lg hover:bg-cyan-800 transition"
        >
        <IconDownload class="w-6 h-6 hover:text-white hover:-translate-y-2 transition ease-in-out duration-300" />
          <span class="ml-2">Download Resume</span>
        </a>
      </div>
    </div>
  </section>
</template>
