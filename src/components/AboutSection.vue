<script setup lang="ts">
import { useTemplateRef } from 'vue';

const aboutRef = useTemplateRef<HTMLElement | null>('aboutRef');

defineExpose({
  aboutRef
});
</script>

<template>
  <section
    ref="aboutRef"
    id="about"
    class="container mx-auto py-20 px-4 md:px-8"
  >
    <div class="mx-auto max-w-5xl">
      <h1 class="text-3xl md:text-4xl text-cyan-400 font-bold mb-10 text-center md:text-left"> About me </h1>

      <div class="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
        <div class="w-full md:w-3/5">
          <p class="mt-4 leading-relaxed">
            I'm Md Shahriar Hossein, a software engineer with 2+ years of experience building robust, scalable, and maintainable systems across multiple stacks and platforms. My focus spans backend development, API design, and full-stack web applications.
          </p>
          <p class="mt-2">
            Professionally, I have worked as a Junior Software Engineer at <strong>WPXPO</strong> and <strong>DevSpace</strong>, contributing to large-scale projects using PHP, Laravel, WordPress, React, Livewire, and jQuery. I’ve designed and implemented APIs, refactored legacy codebases, optimized frontend and backend workflows, and delivered features that improved usability, performance, and maintainability.
          </p>
          <p class="mt-2">
            Beyond professional work, I’ve independently developed full-featured platforms including an e-learning system and university automation tools, handling everything from database design and role-based access to real-time feedback systems and payment integrations.
          </p>
          <p class="mt-2">
            My approach is to write clean, efficient, and scalable code while continuously learning new technologies, improving systems, and collaborating effectively across teams.
          </p>
        </div>
        <div class="w-full md:w-2/5 flex justify-center">
          <img
            class="rounded-xl opacity-70 hover:opacity-100 transition-opacity duration-300 shadow-xl shadow-cyan-500/30 h-74 md:h-96"
            src="../assets/my_pic.jpg"
            alt="My Picture"
          />
        </div>
      </div>
    </div>
  </section>
</template>
