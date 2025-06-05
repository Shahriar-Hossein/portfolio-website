import type { Ref } from "vue";

type SectionKeys = 'home' | 'about' | 'experience' | 'projects'

// Define types
export type SectionRefs = {
  [sectionKey in SectionKeys]: Ref<HTMLElement | null>
};
