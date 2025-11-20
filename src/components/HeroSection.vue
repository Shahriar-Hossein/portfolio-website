<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { socials } from '@/data/socials';
import IconDownload from './icons/IconDownload.vue';
import IconGmail from './icons/IconGmail.vue';
import PullLamp from './PullLamp.vue';

const homeRef = useTemplateRef('homeRef');

defineExpose({
  homeRef
});

</script>

<template>
  <section
    ref="homeRef"
    id="home"
    class="container mx-auto min-h-screen px-4 md:px-8 py-24 flex items-center"
  >
    <div class="w-full">
      <div
        class="flex flex-col lg:flex-row items-center justify-around gap-2 md:gap-8"
      >
        <!-- LEFT SECTION -->
        <div class="max-w-xl space-y-6">
          <div>
            <h1 class="text-4xl md:text-6xl font-bold text-cyan-400 leading-tight">
              Md Shahriar Hossein
            </h1>
            <h4 class="mt-2 text-gray-400 text-xl md:text-3xl font-semibold">
              Software Engineer
            </h4>
          </div>

          <!-- SOCIAL BUTTONS -->
          <div
            class="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            <a
              v-for="social in socials"
              :key="social.platform_name"
              :href="social.link"
              target="_blank"
              class="flex items-center px-5 py-2 min-w-36 text-sm font-medium
                     text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-all"
            >
              <component
                :is="social.icon"
                class="w-6 h-6 transition-transform duration-300 hover:-translate-y-1"
              />
              <span class="ml-2">{{ social.platform_name }}</span>
            </a>
          </div>

          <!-- SECOND ROW CTA -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="mailto:shahriar2507@gmail.com"
              target="_blank"
              class="flex items-center px-5 py-2 text-sm font-medium text-cyan-400
                     border border-cyan-600 rounded-lg hover:bg-cyan-800 transition"
            >
              <IconGmail
                class="w-6 h-6 transition-transform duration-300 hover:-translate-y-1"
              />
              <span class="ml-2">Mail Me</span>
            </a>

            <a
              href="/Md_Shahriar_Hossein_Resume.pdf"
              target="_blank"
              class="flex items-center px-5 py-2 text-sm font-medium text-cyan-400
                     border border-cyan-600 rounded-lg hover:bg-cyan-800 transition"
            >
              <IconDownload
                class="w-6 h-6 transition-transform duration-300 hover:-translate-y-1"
              />
              <span class="ml-2">Download Resume</span>
            </a>
          </div>
        </div>

        <!-- RIGHT SECTION (LAMP) -->
        <div class="flex justify-center w-full lg:w-auto">
          <PullLamp />
        </div>
      </div>
    </div>
  </section>
</template>

