import { profile } from '@/content/profile';

export default function FooterSection() {
  return (
    <footer className="border-t border-border py-8 text-sm text-text-secondary">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>{profile.footer.copyright}</p>
        <div className="flex gap-4">
          {profile.footer.links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-text-primary">{link.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
