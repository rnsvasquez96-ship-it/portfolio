import type { Metadata } from 'next';
import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import MotionShell from '@/components/ui/motion-shell';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Ranz Nathaniel Vasquez | Computer Engineering Portfolio',
  description: 'A premium portfolio for Ranz Nathaniel Vasquez, a Computer Engineering graduate building thoughtful software products with strong engineering, accessibility, and performance.',
  metadataBase: new URL('https://ranzvasquez.dev'),
  alternates: {
    canonical: 'https://ranzvasquez.dev'
  },
  keywords: ['Ranz Nathaniel Vasquez', 'Computer Engineering portfolio', 'frontend engineer', 'product engineer', 'accessibility', 'performance'],
  openGraph: {
    title: 'Ranz Nathaniel Vasquez | Computer Engineering Portfolio',
    description: 'A premium portfolio for Ranz Nathaniel Vasquez, a Computer Engineering graduate building thoughtful software products with strong engineering, accessibility, and performance.',
    type: 'website',
    url: 'https://ranzvasquez.dev',
    siteName: 'Ranz Nathaniel Vasquez Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ranz Nathaniel Vasquez | Computer Engineering Portfolio',
    description: 'A premium portfolio for Ranz Nathaniel Vasquez, a Computer Engineering graduate building thoughtful software products with strong engineering, accessibility, and performance.'
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
