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
  console.log(showExp.value);

}

</script>

<template>
  <section
    ref="experienceRef"
    id="experience"
    class="container mx-auto flex-col items-center place-content-center py-26"
  >
    <div class="lg:mx-32">
      <h1 class="text-4xl text-cyan-400 font-bold my-12">Experience</h1>
      <div class="flex gap-12 items-start">
        <div class="h-92 overflow-y-auto">
          <ul class="">
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
              :class="['cursor-pointer text-sm text-center self-center px-4 py-2 m-2 rounded-xl transition-all duration-300',
                selectedExp == index
                ? 'bg-cyan-600 text-white ring-2 ring-cyan-400/60'
                : 'text-cyan-300 hover:text-white hover:bg-cyan-800'
              ]">
              {{ experience.company_name }}
            </li>
          </ul>
        </div>
        <div class="flex-1 mx-2 h-92 overflow-y-auto">
          <div class="pb-2 text-xl">
            <span>{{ showExp?.designation }}</span>
            <span> - </span>
            <span>{{ showExp?.company_name }}</span>
          </div>
          <div class="pb-2 text-sm">
            <span>{{ showExp?.time }}</span>
          </div>
          <ul class="list-none">
            <li
              v-for="bullet in showExp?.bullets"
              :key="bullet"
              class="relative pl-5 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-cyan-500"
            >
              {{ bullet }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
