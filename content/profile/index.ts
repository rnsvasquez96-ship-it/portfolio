import type { Stat } from '@/types';

export const profile = {
  name: 'Ranz Nathaniel Vasquez',
  initials: 'RNV',
  resumeUrl: '/images/Ranz_Vasquez_Resume.pdf.pdf',
  navigation: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/projects' },
    { label: 'Resume', href: '/resume/resume.pdf', external: true },
    { label: 'Contact', href: '/contact' }
  ],
  hero: {
    eyebrow: 'Computer Engineering • Product Engineering • Systems Thinking',
    title: 'Building software that feels effortless and performs like a machine.',
    description: 'I’m Ranz Nathaniel Vasquez, a Computer Engineering graduate focused on creating reliable digital products that merge elegant interfaces, thoughtful architecture, and hardware-aware engineering.',
    primaryActionLabel: 'Explore selected work',
    primaryActionHref: '#work',
    secondaryActionLabel: 'Let’s connect',
    secondaryActionHref: '#contact',
    resumeActionLabel: 'Download Resume',
    availabilityLabel: 'Available for product roles',
    badges: ['Scalable systems', 'High-fidelity UI', 'Embedded-minded thinking'],
    highlightTitle: 'From concept to launch',
    highlightDescription: 'Designing resilient products with measurable impact and strong engineering discipline.',
    stats: [
      { value: '4+', label: 'Years building across frontend, systems, and product experiences.' },
      { value: '99.95%', label: 'Reliability focus across shipped features and internal tooling.' }
    ] as Stat[]
  },
  about: {
    eyebrow: 'About',
    title: 'A calm, systems-minded builder shaped by product and engineering.',
    description: 'I’m a Computer Engineering graduate who enjoys turning complex problems into clear, reliable product experiences. My approach blends thoughtful interface design, rigorous engineering, and a strong focus on performance and usability.',
    focusLabel: 'Currently focused on',
    focusItems: [
      'Building polished product experiences with modern frontend tooling',
      'Designing resilient systems that scale with confidence',
      'Bridging engineering and product thinking in multidisciplinary teams'
    ]
  },
  aboutPage: {
    introTitle: 'A systems-minded engineer building thoughtful digital products.',
    introDescription: 'I’m a Computer Engineering graduate who blends product thinking, engineering discipline, and visual clarity to create experiences that feel calm, reliable, and useful.',
    focusTitle: 'Professional focus',
    focusDescription: 'Endpoints, product clarity, and durable systems',
    biographyTitle: 'Professional biography',
    biographyParagraphs: [
      'I enjoy turning ambiguity into usable structure. My work sits at the intersection of interface design, frontend engineering, and product thinking, with a strong preference for systems that feel quiet, robust, and easy to trust.',
      'That means I spend as much time refining interaction details as I do shaping architecture, because the best products are rarely built from one big decision alone — they are shaped by a thousand thoughtful choices.'
    ],
    goalsTitle: 'Career goals',
    goals: [
      'Build products that are intuitive, performant, and accessible from day one.',
      'Contribute to teams that value thoughtful systems and clear communication.',
      'Grow into a role that bridges engineering, product strategy, and design execution.'
    ],
    educationTitle: 'Education',
    educationDegree: 'B.Sc. in Computer Engineering',
    educationInstitution: 'University of Applied Sciences',
    educationDescription: 'Focused on systems design, embedded thinking, software architecture, and human-centered product development.',
    experienceTitle: 'Experience',
    skillsTitle: 'Skills summary'
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s build something thoughtful and durable.',
    description: 'I’m available for product engineering, frontend systems, and design-driven product work where clarity and craft matter.',
    email: 'rnsvasquez96@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ranz-nathaniel-vasquez-542a25172/',
    github: 'https://github.com/rnsvasquez96-ship-it',
    calloutTitle: 'Interested in a thoughtful engineer who can bridge product and systems?',
    calloutDescription: 'Open to product engineering, frontend, and early-stage opportunities where quality matters.',
    availabilityTitle: 'Availability',
    availabilityDescription: 'Open to collaborations that value thoughtful execution, strong systems thinking, and calm, polished interfaces.',
    availabilityItems: [
      'Product engineering and frontend implementation',
      'Design systems and interaction refinement',
      'Early-stage teams needing a thoughtful technical partner'
    ],
    formHeading: 'Optional contact form',
    formDescription: 'Prefer a structured note? Send one here and I’ll get back to you soon.',
    ctaPrimaryLabel: 'Say hello',
    ctaSecondaryLabel: 'View selected work',
    socialLinks: [
      {
        name: 'Email',
        href: 'mailto:rnsvasquez96@gmail.com',
        description: 'For collaborations, product opportunities, and thoughtful conversations.'
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/',
        description: 'Connect for professional conversations and project updates.'
      },
      {
        name: 'GitHub',
        href: 'https://github.com/',
        description: 'Explore engineering experiments, systems work, and product builds.'
      }
    ]
  },
  projectsSection: {
    eyebrow: 'Projects',
    title: 'Selected work with measurable outcomes.'
  },
  skillsSection: {
    eyebrow: 'Skills',
    title: 'A grounded mix of product craft and engineering depth.'
  },
  experienceSection: {
    eyebrow: 'Experience',
    title: 'Professional context that keeps product work grounded.'
  },
  certificationsSection: {
    eyebrow: 'Certifications',
    title: 'Focused continuing education in modern product delivery.'
  },
  footer: {
    copyright: '© 2026 Ranz Nathaniel Vasquez. Crafted for thoughtful product work.',
    links: [
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' }
    ]
  },
  stats: [
    { value: '10+', label: 'Product launches and internal platforms' },
    { value: '3x', label: 'Faster iteration from disciplined systems design' },
    { value: '100%', label: 'Attention to accessibility, performance, and clarity' }
  ] as Stat[]
};
