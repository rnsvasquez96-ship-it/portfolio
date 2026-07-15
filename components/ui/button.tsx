'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export default function Button({ children, href, variant = 'primary', className = '' }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-200';
  const variantClasses =
    variant === 'primary'
      ? 'bg-primary text-white shadow-[0_12px_36px_rgba(17,24,39,0.16)] hover:bg-primary-hover'
      : 'border border-border bg-surface text-text-primary hover:bg-background';

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (href) {
    return (
      <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }}>
        <Link href={href} className={`${combinedClasses} focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }} className={`${combinedClasses} focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}>
      {children}
    </motion.button>
  );
}
