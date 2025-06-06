<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import AboutSection from './components/AboutSection.vue'
import HeroSection from './components/HeroSection.vue'
import NavBar from './components/NavBar.vue'
import ProjectSection from './components/ProjectSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import type { SectionRefs } from './types/SectionRefs'


const homeRef = ref<InstanceType<typeof HeroSection> | null>(null);
const aboutRef = ref<InstanceType<typeof AboutSection> | null>(null);
const experienceRef = ref<InstanceType<typeof ExperienceSection> | null>(null);
const projectsRef = ref<InstanceType<typeof ProjectSection> | null>(null);

// Initialize refs
const sectionRefs: SectionRefs = {
  home: computed(()=> homeRef.value?.homeRef ?? null),
  about: computed(()=> aboutRef.value?.aboutRef ?? null),
  experience: computed(()=> experienceRef.value?.experienceRef ?? null),
  projects: computed(()=> projectsRef.value?.projectsRef ?? null),
};

// Typed scroll function
const scrollToSection = (sectionRef: Ref<HTMLElement | null>) => {
  if (sectionRef.value) {
    sectionRef.value.scrollIntoView({ behavior: 'smooth' })
  }
};
</script>

<template>
  <div class="bg-gray-900 text-gray-100 text-lg">
    <header>
      <NavBar :sectionRefsProps="sectionRefs" :scrollToSection="scrollToSection" />
    </header>

    <main class="flex-col justify-items-center px-2 md:px-4 lg:px-40">
      <HeroSection ref="homeRef" />
      <AboutSection ref="aboutRef" />
      <ExperienceSection ref="experienceRef" />
      <ProjectSection ref="projectsRef" />
    </main>
  </div>
</template>
