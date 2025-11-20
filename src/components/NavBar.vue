<script setup lang="ts">
import type { SectionRefs } from '@/types/SectionRefs';
import { onMounted, onUnmounted, ref, type Ref } from 'vue';

const props = defineProps<{
  sectionRefsProps: SectionRefs;
  scrollToSection: (ref: Ref<HTMLElement | null>) => void;
}>();

const sectionRefs = props.sectionRefsProps;

const navbarRef = ref<HTMLElement | null>(null);
const isOpenNav = ref(false);

const toggleNav = () => {
  isOpenNav.value = !isOpenNav.value;
};

const closeNav = () => {
  isOpenNav.value = false;
};

const handleOutsideClick = (event: MouseEvent) => {
  const clickArea = event.target as Node;
  if (isOpenNav.value && navbarRef.value && !navbarRef.value.contains(clickArea)) {
    closeNav();
  }
};

onMounted(() => {
  window.addEventListener('click', handleOutsideClick);
});

onUnmounted(() => {
  window.removeEventListener('click', handleOutsideClick);
});
</script>


<template>
  <nav
    ref="navbarRef"
    class="fixed top-0 left-0 z-50 w-full backdrop-blur-lg bg-gray-900/70 border-b border-gray-700 shadow-lg transition-all duration-300"
  >
    <div class="flex flex-col md:flex-row items-center justify-between p-2 md:px-8 lg:px-32">

      <div class="flex justify-between items-stretch w-full">
        <!-- Logo -->
        <a href="#" class="flex items-center space-x-2">
          <span class="text-cyan-400 text-2xl md:text-3xl font-extrabold uppercase">Shahriar</span>
        </a>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleNav"
          type="button"
          class="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 rounded-lg text-gray-300 hover:bg-gray-700/50 focus:ring-2 focus:ring-cyan-600 transition"
          aria-controls="navbar-menu"
          :aria-expanded="isOpenNav"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Menu -->
      <div
        id="navbar-menu"
        :class="[
          'md:flex md:items-center md:space-x-8 transition-all duration-300',
          isOpenNav
            ? 'block mt-4 w-full'
            : 'hidden md:block'
        ]"
      >
        <ul class="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">

          <li
            v-for="(ref, key) in sectionRefs"
            :key="key"
          >
            <button
              @click="scrollToSection(ref); closeNav()"
              class="block w-full py-2 px-3 uppercase font-medium text-cyan-300 hover:text-white hover:bg-cyan-600/20 rounded-lg transition-all duration-200 cursor-pointer"
            >
              {{ key }}
            </button>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

