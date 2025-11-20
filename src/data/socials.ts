import IconChefHat from '@/components/icons/IconChefHat.vue';
import IconCodeforces from '@/components/icons/IconCodeforces.vue';
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
// import IconGmail from '@/components/icons/IconGmail.vue';
import IconHackerrank from '@/components/icons/IconHackerrank.vue';
import IconLeetcode from '@/components/icons/IconLeetcode.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import type { Social } from '@/interfaces/Social'

export const socials: Social[] = [
  {
    my_name: 'Shahriar Hossein',
    platform_name:'Linkedin',
    link: 'https://www.linkedin.com/in/shahriar-hossein-27b022205/',
    icon: IconLinkedin,
  },
  // {
    //   my_name: 'Shahriar Hossein',
    //   platform_name:'Gmail',
    //   link: 'shahriar2507@gmail.com',
    //   icon: IconGmail,
    // },
    {
      my_name: 'Shahriar Hossein',
      platform_name:'Github',
      link: 'https://github.com/Shahriar-Hossein',
      icon: IconGithub,
    },
    {
      my_name: 'Shihab567',
      platform_name:'Codeforces',
      link: 'https://codeforces.com/profile/Shihab567',
    icon: IconCodeforces,
  },
  {
    my_name: '_S010',
    platform_name:'Hackerrank',
    link: 'https://www.hackerrank.com/profile/_S010',
    icon: IconHackerrank,
  },
  {
    my_name: 'so1o',
    platform_name:'Codechef',
    link: 'https://www.codechef.com/users/so1o',
    icon: IconChefHat,
  },
  {
    my_name: 'So_lo',
    platform_name:'Leetcode',
    link: 'https://leetcode.com/u/So_lo/',
    icon: IconLeetcode,
  },
  {
    my_name: 'Shahriar Shihab',
    platform_name:'Facebook',
    link: 'https://www.facebook.com/shahriar.shihab.1069/',
    icon: IconFacebook,
  },
]
