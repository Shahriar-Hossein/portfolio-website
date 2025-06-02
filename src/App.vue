<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import AboutSection from './components/AboutSection.vue'
import HeroSection from './components/HeroSection.vue'
import NavBar from './components/NavBar.vue'
import ProjectSection from './components/ProjectSection.vue'

const homeRef = ref(null);
const aboutRef = ref(null);
const projectsRef = ref(null);


// Define types
interface SectionRefs {
  home: Ref<HTMLElement | null>
  about: Ref<HTMLElement | null>
  project: Ref<HTMLElement | null>
};

// Initialize refs
const sectionRefs: SectionRefs = {
  home: computed(()=> homeRef.value?.homeRef),
  about: computed(()=> aboutRef.value?.aboutRef),
  project: computed(()=> projectsRef.value?.projectsRef),
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
      <ProjectSection ref="projectsRef" />
    </main>
  </div>
</template>
