export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type Profile = {
  name: string;
  initials: string;
  resumeUrl: string;
  navigation: NavigationItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryActionLabel: string;
    primaryActionHref: string;
    secondaryActionLabel: string;
    secondaryActionHref: string;
    resumeActionLabel: string;
    availabilityLabel: string;
    badges: string[];
    highlightTitle: string;
    highlightDescription: string;
    stats: Stat[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    focusLabel: string;
    focusItems: string[];
  };
  aboutPage: {
    introTitle: string;
    introDescription: string;
    focusTitle: string;
    focusDescription: string;
    biographyTitle: string;
    biographyParagraphs: string[];
    goalsTitle: string;
    goals: string[];
    educationTitle: string;
    educationDegree: string;
    educationInstitution: string;
    educationDescription: string;
    experienceTitle: string;
    skillsTitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    email: string;
    linkedin: string;
    github: string;
    calloutTitle: string;
    calloutDescription: string;
    availabilityTitle: string;
    availabilityDescription: string;
    availabilityItems: string[];
    formHeading: string;
    formDescription: string;
    ctaPrimaryLabel: string;
    ctaSecondaryLabel: string;
    socialLinks: Array<{ name: string; href: string; description: string }>;
  };
  projectsSection: {
    eyebrow: string;
    title: string;
  };
  skillsSection: {
    eyebrow: string;
    title: string;
  };
  experienceSection: {
    eyebrow: string;
    title: string;
  };
  certificationsSection: {
    eyebrow: string;
    title: string;
  };
  footer: {
    copyright: string;
    links: Array<{ label: string; href: string }>;
  };
  stats: Stat[];
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  gallery: string[];
  overview: string;
  problem: string;
  research: string;
  solution: string;
  features: string[];
  techStack: string[];
  github?: string;
  liveDemo?: string;
  figma?: string;
  lessonsLearned: string[];
  challenges?: string[];
  date: string;
  category: string;
  highlights: string[];
  year?: string;
  impact?: string;
};

export type Insight = {
  title: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};
