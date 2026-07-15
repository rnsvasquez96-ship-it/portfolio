import AboutSection from '@/components/sections/about-section';
import CertificationsSection from '@/components/sections/certifications-section';
import ContactSection from '@/components/sections/contact-section';
import ExperienceSection from '@/components/sections/experience-section';
import FooterSection from '@/components/sections/footer-section';
import HeroSection from '@/components/sections/hero-section';
import HighlightsSection from '@/components/sections/highlights-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import SiteHeader from '@/components/layout/site-header';
import { siteContent } from '@/lib/content';

export default function HomePage() {
  return (
    <main id="main-content" className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <SiteHeader profile={siteContent.profile} />
      <HeroSection profile={siteContent.profile} />
      <HighlightsSection stats={siteContent.profile.stats} />
      <ProjectsSection projects={siteContent.projects} />
      <SkillsSection skills={siteContent.skills} />
      <ExperienceSection experiences={siteContent.experiences} />
      <CertificationsSection certifications={siteContent.certifications} />
      <AboutSection profile={siteContent.profile} />
      <ContactSection profile={siteContent.profile} />
      <FooterSection />
    </main>
  );
}
