<script setup lang="ts">
import { experiences } from '@/data/experiences';
import { ref, useTemplateRef } from 'vue'

const experienceRef = useTemplateRef<HTMLElement | null>('experienceRef')

defineExpose({
  experienceRef,
})

const selectedExp = ref(0);
const showExp = ref(experiences[selectedExp.value]);
const handleSelection = (index: number) =>{
  selectedExp.value = index;
  showExp.value = experiences[selectedExp.value];
}
</script>

<template>
  <section
    ref="experienceRef"
    id="experience"
    class="container mx-auto py-20 px-4 md:px-8"
  >
    <div class="mx-auto max-w-5xl">
      <h1 class="text-3xl md:text-4xl text-cyan-400 font-bold mb-10 text-center md:text-left">Experience</h1>

      <div class="flex flex-col md:flex-row md:gap-8">
        <!-- Company names -->
        <ul class="flex md:flex-col overflow-x-auto md:h-64 md:overflow-visible">
          <!-- future design -->
          <!-- <li
            class="bg-cyan-500 cursor-pointer rounded-tl-full rounded-br-full hover:rounded-3xl transition-rounded duration-500 ease-out text-white text-sm text-center self-center px-4 py-2"
          >
            DevSpace
          </li> -->

          <li
            v-for="(experience, index) in experiences"
            :key="experience.company_name"
            @click="handleSelection(index)"
            :class="['cursor-pointer whitespace-nowrap text-sm md:text-left px-4 py-2 rounded-lg transition-all duration-300',
              selectedExp == index
              ? 'bg-cyan-600 text-white ring-2 ring-cyan-400/60'
              : 'text-cyan-300 hover:text-white hover:bg-cyan-800'
            ]">
            {{ experience.company_name }}
          </li>
        </ul>
        <!-- Description -->
        <div class="md:flex-1 mx-2 ">
          <div class="text-xl font-bold">
            <span>{{ showExp?.designation }}</span>
            <span> - </span>
            <a
              :href="showExp?.company_link ?? '#'"
              target="_blank"
              class="text-cyan-500 hover:underline transition-all duration-300 ease-in"
            >
              <span>{{ showExp?.company_name }}</span>
            </a>
          </div>
          <div class="pb-2 text-sm italic text-gray-400">
            <span>{{ showExp?.time }}</span>
          </div>
          <ul class="list-none min-h-92">
            <li
              v-for="bullet in showExp?.bullets"
              :key="bullet"
              class="relative pl-5 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-cyan-500 mb-1"
            >
              {{ bullet }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
