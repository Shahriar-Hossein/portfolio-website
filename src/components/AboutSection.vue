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
