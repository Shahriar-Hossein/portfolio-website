<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isOn = ref(false)
const isPulled = ref(false)
const isSwing = ref(false)
const timeoutId = ref<number | null>(null)

const handleMouseDown = () => {
  isPulled.value = true
}

const handleMouseUp = () => {
  if (isPulled.value) {
    // only toggle if user actually pressed first
    isOn.value = !isOn.value
    isSwing.value = true
    if (timeoutId.value) {
      clearTimeout(timeoutId.value)
    }
    timeoutId.value = setTimeout(() => {
      isSwing.value = false
    }, 10000)
  }
  isPulled.value = false
}

onMounted(() => {
  document.addEventListener('mouseup', handleMouseUp)
})

onBeforeUnmount(() => {
  document.removeEventListener('mouseup', handleMouseUp)
})
</script>

<template>
  <div class="w-full flex justify-center py-16 select-none">
    <div class="relative flex flex-col items-center">
      <!-- LAMP BODY -->
      <div class="relative flex flex-col items-center">
        <!-- TOP COVER (metal cap) -->
        <div
          class="w-24 h-6 rounded-t-full transition-all duration-500 border border-gray-700 shadow-inner"
          :class="isOn ? 'bg-yellow-200/50' : 'bg-gray-800/80'"
        ></div>

        <!-- LAMP SHADE (cone shape) -->
        <div
          class="relative w-32 h-28 transition-all duration-500 border-x border-b shadow-xl"
          :class="
            isOn
              ? 'bg-gradient-to-b from-yellow-200/60 to-yellow-400/70 border-yellow-400'
              : 'bg-gradient-to-b from-gray-700 to-gray-900 border-gray-700'
          "
          style="clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)"
        >
          <!-- BULB (center circle) -->
          <div
            class="absolute left-1/2 top-6 -translate-x-1/2 w-16 h-16 rounded-full transition-all duration-500"
            :class="
              isOn ? 'bg-yellow-300 shadow-[0_0_50px_20px] shadow-yellow-500/50' : 'bg-gray-400/20'
            "
          ></div>

        </div>
        <!-- DOWNWARD GLOW -->
        <div
          class="absolute left-1/2 -top-2/3 -translate-x-1/2 w-102 h-102 rounded-full opacity-0 transition-all duration-500"
          :class="isOn ? 'opacity-30 bg-yellow-300 blur-[160px]' : ''"
        ></div>

        <!-- SHADE RIM -->
        <div
          class="w-36 h-3 rounded-full border transition-all duration-500 mt-1"
          :class="isOn ? 'bg-yellow-200/40 border-yellow-400' : 'bg-gray-700 border-gray-600'"
        ></div>

        <!-- CONNECTOR NECK -->
        <div class="w-2 h-6 bg-gray-500 mt-1"></div>
      </div>

      <!-- STRING -->
      <div class="relative flex flex-col items-center origin-top lamp-swing">
        <!-- :class="isSwing ? 'lamp-swing' : ''" -->

        <div class="w-1 h-28 bg-gray-400 transition-all duration-300"></div>

        <!-- PULL HANDLE -->
        <div
          @mousedown="handleMouseDown"
          class="w-6 h-6 bg-gray-200 rounded-full cursor-pointer shadow transition-transform duration-300"
          :class="isPulled ? 'translate-y-4' : ''"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lamp-swing {
  animation: swing 2.5s linear infinite;
}

@keyframes swing {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-6deg);
  }
  75% {
    transform: rotate(6deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
