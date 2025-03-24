<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  techStacks: string[];
}

const projects: Project[] = [
  {
    title: "E-Learning Platform",
    description: "This is website for online courses. Teachers can create courses, quizes, video lessons. Students can access course materials after buying the course through online payment.",
    link: "github.come",
    image: "/nature.jpg",
    techStacks: ["PHP", "TailwindCSS", "Javascript", "SSLCOMMERZ"]
  },
  {
    title: "Rental Book Service",
    description: "This is website for online courses. Teachers can create courses, quizes, video lessons. Students can access course materials after buying the course through online payment.",
    link: "github.come",
    image: "/nature.jpg",
    techStacks: ["PHP", "TailwindCSS", "Javascript", "SSLCOMMERZ"]
  },
  {
    title: "Car Shop",
    description: "This is website for online courses. Teachers can create courses, quizes, video lessons. Students can access course materials after buying the course through online payment.",
    link: "github.come",
    image: "/nature.jpg",
    techStacks: ["PHP", "TailwindCSS", "Javascript", "SSLCOMMERZ"]
  },
  {
    title: "University automation",
    description: "This is website for online courses. Teachers can create courses, quizes, video lessons. Students can access course materials after buying the course through online payment.",
    link: "github.come",
    image: "/nature.jpg",
    techStacks: ["PHP", "TailwindCSS", "Javascript", "SSLCOMMERZ"]
  },
  {
    title: "Project Loading",
    description: "This is website for online courses. Teachers can create courses, quizes, video lessons. Students can access course materials after buying the course through online payment.",
    link: "github.come",
    image: "/nature.jpg",
    techStacks: ["PHP", "TailwindCSS", "Javascript", "SSLCOMMERZ"]
  },
];

</script>

<template>
  <section class="container mx-auto flex-col items-center place-content-center py-26">
    <div class="mx-32">
      <h1 class="text-4xl text-cyan-400 font-bold my-12"> Projects </h1>
      <div class="flex flex-wrap items-center justify-center">
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            :project="project"
          />
      </div>
    </div>
  </section>
</template>
