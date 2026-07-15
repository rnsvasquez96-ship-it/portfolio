import AboutPage from '@/components/sections/about-page';
import SiteHeader from '@/components/layout/site-header';
import FooterSection from '@/components/sections/footer-section';
import { siteContent } from '@/lib/content';

export default function AboutRoutePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <SiteHeader profile={siteContent.profile} />
      <AboutPage />
      <FooterSection />
    </main>
  );
}
