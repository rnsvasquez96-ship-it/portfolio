import ContactPage from '@/components/sections/contact-page';
import SiteHeader from '@/components/layout/site-header';
import FooterSection from '@/components/sections/footer-section';
import { siteContent } from '@/lib/content';

export default function ContactRoutePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <SiteHeader profile={siteContent.profile} />
      <ContactPage />
      <FooterSection />
    </main>
  );
}
