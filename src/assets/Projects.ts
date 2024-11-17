import hull from '@/assets/demos/hull.webp'
import hullMin from '@/assets/demos/hull.min.webp'
import rentometer from '@/assets/demos/rentometer.webp'
import rentometerMin from '@/assets/demos/rentometer.min.webp'
import gowago from '@/assets/demos/gowago.webp'
import gowagoMin from '@/assets/demos/gowago.min.webp'
import tiarayachts from '@/assets/demos/tiarayachts.webp'
import tiarayachtsMin from '@/assets/demos/tiarayachts.min.webp'
import paulaschoice from '@/assets/demos/paulaschoice.webp'
import paulaschoiceMin from '@/assets/demos/paulaschoice.min.webp'
import mavidahealth from '@/assets/demos/mavidahealth.webp'
import mavidahealthMin from '@/assets/demos/mavidahealth.min.webp'
import habaneras from '@/assets/demos/habaneras.webp'
import habanerasMin from '@/assets/demos/habaneras.min.webp'
import banner from '@/assets/demos/banner.webp'
import bannerMin from '@/assets/demos/banner.min.webp'
import doggonation from '@/assets/demos/doggonation.webp'
import doggonationMin from '@/assets/demos/doggonation.min.webp'

export interface Project {
  title: string;
  description?: string;
  source?: string;
  logo: string;
  logoMin: string;
  demo: string;
  skills: string[];
}

const projects = [
  {
    title: 'Gowago',
    description: 'A fintech platform for car leasing in Switzerland, providing an online solution for comparing, customizing, and ordering car leases.',
    demo: "https://gowago.ch/en",
    logo: gowago,
    logoMin: gowagoMin,
    skills: [
      'C#',
      'ASP.NET',
      'Azure',
      'PostgreSQL'
    ]
  },
  {
    title: 'Tiara Yachts',
    description: 'An online platform representing a family-owned yacht manufacturer, focused on presenting high-end yacht models with an immersive experience.',
    demo: "https://www.tiarayachts.com/",
    logo: tiarayachts,
    logoMin: tiarayachtsMin,
    skills: [
      'C#',
      'ASP.NET',
      'Docker',
      'CI/CD'
    ]
  },
  {
    title: "Paula's Choice",
    description: "A direct-to-consumer skincare brand focused on transparency, quality, and a user-friendly online experience for personalized product recommendations.",
    demo: "https://www.paulaschoice.com/",
    logo: paulaschoice,
    logoMin: paulaschoiceMin,
    skills: [
      '.NET',
      'Entity',
      'PostgreSQL',
      'Docker'
    ]
  },
  {
    title: 'Habaneras',
    description: 'Habaneras de Lino is an online ecommerce. This repo contains the frontend developed using NEXT JS for producing a React js web application',
    demo: "https://www.habanerasdelino.com/",
    source: "https://github.com/daniel-frank-miller/habaneras_frontend.git",
    logo: habaneras,
    logoMin: habanerasMin,
    skills: [
      'C#',
      '.Net Core',
      'Azure',
      'Kubernetes',
    ]
  },
  {
    title: 'MedSyncWebApp',
    description: 'Comprehensive Source Code for a Telegram Mini Web Application: Includes Backend, Frontend, and In-Depth Documentation',
    demo: "https://t.me/medsyncbot",
    source: "https://github.com/daniel-frank-miller/MedSyncWebApp.git",
    logo: banner,
    logoMin: bannerMin,
    skills: [
      'C#',
      'ASP.NET',
      'Azure',
      'Telegram-bot',
    ]
  },
  {
    title: 'Doggonation',
    description: 'A Canine-Centric Social Media Platform for AI-Powered NFTs and Charitable Giving, Powered by Appwrite',
    demo: "https://doggonation.hashnode.dev/",
    source: "https://github.com/daniel-frank-miller/doggonation.git",
    logo: doggonation,
    logoMin: doggonationMin,
    skills: [
      'C#',
      'Svelte',
      'AWS',
      'GraphQL'
    ]
  },
  {
    title: 'Mavida Health',
    description: 'We offer specialized online therapy for women, supportive communities, medication management, and resources to empower you throughout your motherhood journey.',
    demo: "https://www.mavidahealth.com/",
    logo: mavidahealth,
    logoMin: mavidahealthMin,
    skills: [
      'C#',
      '.Net Core',
      'Custom Cloud',
      'MongoDB'
    ]
  },
  {
    title: 'HULL',
    description: 'Headless Shopify starter powered by Next.js + Sanity.io.',
    source: 'https://github.com/daniel-frank-miller/hull.git',
    demo: "https://hull.dev/",
    logo: hull,
    logoMin: hullMin,
    skills: [
      '.Net',
      'Microsoft Azure'
    ]
  },
  {
    title: 'Rentometer',
    description: 'A rental data platform offering insights into rental pricing across the U.S. to support renters and property managers in decision-making',
    demo: "https://www.rentometer.com/",
    logo: rentometer,
    logoMin: rentometerMin,
    skills: [
      'C#',
      'Svelte',
      'ASP.NET',
      'R',
      'AWS',
      'GraphQL'
    ]
  },
]

export default projects;