import type { Project } from '@/interfaces/Project '

export const projects: Project[] = [
  {
    title: 'Learning Platform',
    description:
      'An online market place for buying and selling courses. Teachers can create courses, quizes, video lessons. Students can access the course materials after buying the course through a secure online payment.',
    githubLink: 'https://github.com/Shahriar-Hossein/Learning-Platform',
    //liveLink: " ",
    imageUrl: '/nature.jpg',
    techStacks: ['PHP', 'TailwindCSS', 'Javascript', 'SSLCOMMERZ'],
  },
  {
    title: 'Ecommerce Backend',
    description:
      'This is the backend of an ecommerce website. Made the APIs with REST architecture and also documented with swagger. Features include products, categories, banners of the site, product order and user profile. Role for admin implemented as well.',
    githubLink: 'https://github.com/Shahriar-Hossein/ecommerce-backend',
    //liveLink: " ",
    imageUrl: '/nature.jpg',
    techStacks: [' Laravel', 'REST API', 'Sanctum', 'L5-Swagger'],
  },
  {
    title: 'Portfolio Website',
    description:
      'This site holds all the information about me, my works, projects and certifications. This website showcases my development expereicne and skills.',
    githubLink: 'https://github.com/Shahriar-Hossein/portfolio-website',
    //liveLink: " ",
    imageUrl: '/nature.jpg',
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
      'Project built for my academic course. A website to rent books instead of buying. For automating book renting and return process.',
    githubLink: 'https://github.com/Shahriar-Hossein/book-rental-service',
    //liveLink: " ",
    imageUrl: '/nature.jpg',
    techStacks: ['PHP', 'TailwindCSS', 'Javascript'],
  },
]
