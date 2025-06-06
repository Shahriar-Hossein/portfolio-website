import type { Project } from '@/interfaces/Project '
import portfolioImage from '@/assets/images/portfolio.png'
import ecomBackendImage from '@/assets/images/ecom_backend.png'
import learningPlatformImage from '@/assets/images/learning_platform.png'

export const projects: Project[] = [
  {
    title: 'Learning Platform',
    description:
      'An online market place for buying and selling courses. Teachers can create courses, quizes, video lessons. Students can access the course materials after buying the course through a secure online payment.',
    githubLink: 'https://github.com/Shahriar-Hossein/Learning-Platform',
    //liveLink: " ",
    imageUrl: learningPlatformImage,
    techStacks: ['PHP', 'TailwindCSS', 'Javascript', 'SSLCOMMERZ'],
  },
  {
    title: 'Ecommerce Backend',
    description:
      'This is the backend of an ecommerce website. Made the APIs with REST architecture and also documented with swagger. Features include products, categories, banners of the site, product order and user profile. Role for admin implemented as well.',
    githubLink: 'https://github.com/Shahriar-Hossein/ecommerce-backend',
    //liveLink: " ",
    imageUrl: ecomBackendImage,
    techStacks: [' Laravel', 'REST API', 'Sanctum', 'L5-Swagger'],
  },
  {
    title: 'Portfolio Website',
    description:
      'This site holds all the information about me, my works, projects and certifications. Used this project to practice and learn vuejs and typescript. This website will be continuously updated for further improvements.',
    githubLink: 'https://github.com/Shahriar-Hossein/portfolio-website',
    //liveLink: " ",
    imageUrl: portfolioImage,
    techStacks: ['Vuejs', 'Typescript', 'TailwindCSS'],
  },
  {
    title: 'University automation',
    description:
      'A university automation system, for online course offering, student attendance tracking, final result submission. Made with html, css, javascript, php.This was a collaboration project and I contributed to the PHP code for coummincating with database through form submission, data retrieval etc.',
    githubLink: 'https://github.com/Shahriar-Hossein/university-automation',
    //liveLink: " ",
    imageUrl: '/nature.jpg',
    techStacks: ['PHP', 'TailwindCSS', 'Javascript', 'SSLCOMMERZ'],
  },
  {
    title: 'Rental Book Service',
    description:
      'Project built for my academic course. A website for rent book service. Instead of buying books, renting and resuing them has both economical and environmental benefits. This project automates the process of renting and delivering books, as well as smooth inventory management',
    githubLink: 'https://github.com/Shahriar-Hossein/book-rental-service',
    //liveLink: " ",
    imageUrl: '/nature.jpg',
    techStacks: ['PHP', 'TailwindCSS', 'Javascript'],
  },
]
