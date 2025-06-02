<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Ref } from 'vue';

export interface SectionRefs {
  home: Ref<HTMLElement | null>;
  about: Ref<HTMLElement | null>;
  project: Ref<HTMLElement | null>;
}

const props = defineProps<{
  sectionRefsProps: SectionRefs;
  scrollToSection: (ref: Ref<HTMLElement | null>) => void;
}>();
const sectionRefs = props.sectionRefsProps;

const navbarRef = ref<HTMLElement | null>(null)

const isOpenNav = ref(false);

const toggleNav = ()=>{
  isOpenNav.value = !isOpenNav.value;
}

const handleOutsideClick = (event: MouseEvent)=>{
  const clickArea = event?.target as Node
  if(isOpenNav.value && navbarRef.value && !navbarRef.value.contains(clickArea))
    toggleNav()
}

onMounted(()=>{
  window.addEventListener('click', handleOutsideClick);
})

onUnmounted(()=>{
  window.removeEventListener('click', handleOutsideClick);
})
</script>

<template>
  <nav ref="navbarRef" class="z-10 fixed top-0 flex-no-wrap flex w-full items-center justify-between bg-gray-900 py-2 shadow-md lg:flex-wrap lg:justify-start lg:py-4 shadow-sm shadow-cyan-500/50 border-gray-700 transition-all ease-linear duration-300">
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="text-cyan-500 self-center text-2xl font-semibold whitespace-nowrap uppercase">Shahriar</span>
      </a>
      <button @click='toggleNav' type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" :aria-expanded="isOpenNav">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div class="w-full md:block md:w-auto transition " :class="isOpenNav ? 'block' : 'hidden' " id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li
          v-for="(ref,key) in sectionRefs"
          :key="key"
          >
            <button @click="scrollToSection(ref)"
            class="block cursor-pointer py-2 px-3 text-cyan-500 md:p-0 uppercase hover:text-cyan-700 transition-all ease-linear duration-300" aria-current="page">{{ key }}</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
