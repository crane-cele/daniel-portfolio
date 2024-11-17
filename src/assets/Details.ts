import lightItMin from '@/assets/icons/light-it.min.webp';
import lightIt from '@/assets/icons/light-it.webp';
import cornellMin from '@/assets/icons/cornell.min.webp';
import cornell from '@/assets/icons/cornell.webp';
import cqlMin from '@/assets/icons/cql.min.webp';
import cql from '@/assets/icons/cql.webp';
import orilMin from '@/assets/icons/oril.min.webp';
import oril from '@/assets/icons/oril.webp';
import inspireMin from '@/assets/icons/inspire.min.webp';
import inspire from '@/assets/icons/inspire.webp';

const details = {
  name: {
    first: 'Daniel Frank',
    last: 'Miller',
    nickname: 'Danny',
  },
  education: [
    {
      school: 'Cornell University',
      url: 'https://www.cornell.edu/',
      icon: cornell,
      iconMin: cornellMin,
      location: 'Ithaca, NY',
      degree: 'Bachelor',
      major: 'Computer Science',
      start: 'Sep 2012',
      end: 'Aug 2016',
    }
  ],
  experience: [
    {
      company: 'ORIL',
      url: 'https://oril.co/',
      icon: oril,
      iconMin: orilMin,
      location: 'Miami, Florida',
      contract: 'Full-time',
      position: 'Software engineer',
      start: 'Nov 2022',
      end: 'Present',
      description: [
        'Developed a robust "Batch Processor" service using C#, ASP.NET, and MongoDB to handle high-throughput rental analysis workflows. Optimized database interactions with efficient query patterns, reducing processing time by 40%.',
        'Improved the backend infrastructure of the Gowago car leasing platform by implementing scalable GraphQL APIs with Hot Chocolate and optimizing server-side performance. Leveraged Azure Functions to streamline asynchronous operations, enhancing system responsiveness by 15%.'
      ],      
      skills: [
        'Software Infrastructure',
        'Back-End Development',
        'Engineering',
        'C#',
        'ASP.NET',
        'EF Core',
        'GraphQL',
        'Azure Functions',
        'DDD',
        'Hot Chocolate',
        'Custom Cloud Server',
        'AWS Lambda',
        'PostgreSQL',
        'Docker',
        'OpenTelemetry',
        'IdentityServer',
        'REST',
        'Docker',
        'Kubernetes',
        'CI/CD'
      ],
    },
    {
      company: 'CQL',
      url: 'https://www.cqlcorp.com/',
      icon: cql,
      iconMin: cqlMin,
      location: 'Grand Rapids, Michigan',
      contract: 'Full-time',
      position: 'Full-stack engineer',
      start: 'Oct 2019',
      end: 'Dec 2022',
      description: [
        'Revamped the backend architecture of Tiara Yachts’ luxury website using ASP.NET Core, improving caching strategies and achieving a 20% reduction in API response times. Designed and implemented scalable database schemas with EF Core and SQL Server.',
        'Integrated Salesforce Commerce Cloud with Paula’s Choice’s backend, implementing event-driven architecture with Azure Functions and enhancing data synchronization. Optimized the checkout flow with CQRS patterns, resulting in a 53.6% increase in conversion rates and a 62.5% reduction in abandoned carts.'
      ],      
      skills: [
        'ASP.NET Core',
        'Azure Functions',
        'REST',
        'EF Core',
        'Azure',
        'Event Sourcing',
        'Docker',
        'GraphQL',
        'SQL Server',
        'Svelte',
        'CQRS',
        'GitLab CI/CD'
      ],
    },
    {
      company: 'Light-it',
      url: 'https://www.bit.ly/3sT6AzC',
      icon: lightIt,
      iconMin: lightItMin,
      location: 'Miami, Florida',
      contract: 'Full-time',
      position: 'Full Stack Developer',
      start: 'Sep 2017',
      end: 'Oct 2019',
      description: [
        'Built the backend for Mavida Health’s telemedicine platform using ASP.NET Core and PostgreSQL, ensuring secure storage of patient data. Integrated Zoom APIs for real-time video consultations while adhering to HIPAA compliance, leading to a 20% increase in user engagement.'
      ],      
      skills: [
        'ASP.NET Core',
        'Azure IoT',
        'EF Core',
        'GraphQL',
        'Docker',
        'PostgreSQL',
        'HIPAA  Compliance'
      ],
    },
    {
      company: 'Inspire Visual',
      url: 'https://www.inspirevisual.com',
      icon: inspire,
      iconMin: inspireMin,
      location: 'Clermont, Florida',
      contract: 'Full-time',
      position: 'Web Developer',
      start: 'Sep 2016',
      end: 'Aug 2017',
      description: [
        'Developed and maintained scalable backend systems using C#, ASP.NET, and PostgreSQL. Designed Docker-based deployment pipelines and implemented CI/CD workflows to streamline application delivery.'
      ],      
      skills: [
        'C#',
        'ASP.NET',
        'Entity Framework',
        'Docker',
        'Redis',
        'PostgreSQL',
        'CI/CD'
      ],
    }
  ],
  languages: [
    {
      name: 'English',
      level: 'C2',
    }
  ],
  contact: {
    address: 'Clermont, FL, United State',
    email: 'danielfrankmiller@gmail.com',
    phone: '+1 (214) 814-2555',
    website: 'https://fmdaniel.vercel.app/',
    linkedin: 'https://www.linkedin.com/in/daniel-miller-084312335/',
    github: 'https://github.com/daniel-frank-miller',
  },
};

export default details;
