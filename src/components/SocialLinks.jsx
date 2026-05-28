import { Instagram, Mail, Linkedin } from 'lucide-react';

const defaultLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'Behance', href: 'https://behance.net', icon: null, text: 'Be' },
  { label: 'X', href: 'https://x.com', icon: null, text: 'X' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Email', href: 'mailto:hello@example.com', icon: Mail },
];

function BehanceIcon() {
  return (
    <span className="text-xs font-semibold tracking-tight" aria-hidden>
      Be
    </span>
  );
}

function XIcon() {
  return (
    <span className="text-sm font-semibold" aria-hidden>
      𝕏
    </span>
  );
}

export default function SocialLinks({ links = defaultLinks, size = 'md' }) {
  const sizeClasses =
    size === 'lg'
      ? 'h-12 w-12 [&_svg]:h-6 [&_svg]:w-6'
      : 'h-10 w-10 [&_svg]:h-5 [&_svg]:w-5';

  return (
    <ul className="flex flex-wrap items-center justify-center gap-3">
      {links.map(({ label, href, icon: Icon, text }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            aria-label={label}
            className={`inline-flex items-center justify-center rounded-full border border-stone-300 bg-white text-stone-700 transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-accent dark:hover:text-accent ${sizeClasses}`}
          >
            {Icon ? (
              <Icon aria-hidden />
            ) : text === 'Be' ? (
              <BehanceIcon />
            ) : (
              <XIcon />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
