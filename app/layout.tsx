import type { Metadata } from 'next';
import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import MotionShell from '@/components/ui/motion-shell';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Alex Moreno | Computer Engineering Portfolio',
  description: 'A premium portfolio for a Computer Engineering graduate building thoughtful software products with strong engineering, accessibility, and performance.',
  metadataBase: new URL('https://alexmoreno.dev'),
  alternates: {
    canonical: 'https://alexmoreno.dev'
  },
  keywords: ['Alex Moreno', 'Computer Engineering portfolio', 'frontend engineer', 'product engineer', 'accessibility', 'performance'],
  openGraph: {
    title: 'Alex Moreno | Computer Engineering Portfolio',
    description: 'A premium portfolio for a Computer Engineering graduate building thoughtful software products with strong engineering, accessibility, and performance.',
    type: 'website',
    url: 'https://alexmoreno.dev',
    siteName: 'Alex Moreno Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Moreno | Computer Engineering Portfolio',
    description: 'A premium portfolio for a Computer Engineering graduate building thoughtful software products with strong engineering, accessibility, and performance.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-text-primary">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-text-primary">
          Skip to content
        </a>
        <MotionShell>{children}</MotionShell>
      </body>
    </html>
  );
}
