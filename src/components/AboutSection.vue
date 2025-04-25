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
            Hello! My name is Shahriar. I am software engineer
          </p>
          <p class="mt-2">
            I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that
            blend thoughtful design with robust engineering.
          </p>
          <p class="mt-2">
            I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that
            blend thoughtful design with robust engineering.
          </p>
          <p class="mt-2">
            I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that
            blend thoughtful design with robust engineering.
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
