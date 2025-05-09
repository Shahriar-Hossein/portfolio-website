<script setup lang="ts">
import { useTemplateRef } from 'vue';

const aboutRef = useTemplateRef<HTMLElement | null>('aboutRef');

defineExpose({
  aboutRef
});
</script>

<template>
  <section ref="aboutRef" id="about" class="container mx-auto flex-col items-center place-content-center py-26">
    <div class="lg:mx-32">
      <h1 class="text-4xl text-cyan-400 font-bold my-12"> About me </h1>
      <div class="flex flex-col-reverse lg:flex-row lg:justify-between lg:content-start">
        <div class="my-2 lg:pr-12">
          <p class="mt-2">
            I'm Md Shahriar Hossein, a software engineer focused on <strong>backend development</strong>, with a strong interest in building robust, scalable, and well-architected systems.
          </p>
          <p class="mt-2">
            Previously, I worked at DevSpace as a Junior Software Engineer, where I developed 90+ RESTful Laravel API endpoints across multiple projects and led backend efforts for an internal office management system with attendance and leave automation.
          </p>
          <p class="mt-2">
            In addition to professional work, I’ve developed full-featured personal projects including an e-learning platform and a university automation system, both built from scratch using raw PHP, JavaScript, and Tailwind. These helped me deeply understand database design, role-based access, real-time feedback systems, and third-party integrations like SSLCommerz.
          </p>
          <p class="mt-2">
            Whether it's crafting optimized queries, building reusable components, or collaborating across teams, I aim to write code that's clean, maintainable, and built to scale.
          </p>
        </div>
        <div class="lg:px-22">
          <img
            class="h-auto max-w-3xs mx-auto transition-all duration-300 rounded-xl opacity-30 hover:opacity-100 shadow-xl shadow-cyan-500/50 transition-all ease-linear duration-300"
            src="../assets/IMG-20250217-WA0004.jpg"
            alt="My Picture"
          />
        </div>
      </div>
    </div>
  </section>
</template>
