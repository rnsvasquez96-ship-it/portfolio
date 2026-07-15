import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-text-primary">The page you’re looking for doesn’t exist.</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-text-secondary">
        The route may have moved, or the content has not been published yet.
      </p>
      <Link href="/" className="mt-8 inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-primary-hover">
        Return home
      </Link>
    </main>
  );
}
