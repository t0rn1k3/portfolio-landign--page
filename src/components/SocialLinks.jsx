const defaultLinks = [
  { label: 'Instagram', href: 'https://instagram.com', text: 'Ig' },
  { label: 'Behance', href: 'https://behance.net', text: 'Be' },
  { label: 'X', href: 'https://x.com', text: 'X' },
  { label: 'LinkedIn', href: 'https://linkedin.com', text: 'in' },
  { label: 'Email', href: 'mailto:hello@example.com', text: '@' },
];

export default function SocialLinks({ links = defaultLinks, size = 'md' }) {
  const sizeClasses =
    size === 'lg'
      ? 'h-12 w-12 text-sm'
      : 'h-10 w-10 text-xs';

  return (
    <ul className="flex flex-wrap items-center justify-center gap-3">
      {links.map(({ label, href, text }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            aria-label={label}
            className={`inline-flex items-center justify-center rounded-full border border-stone-300 bg-white font-semibold text-stone-700 transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-accent dark:hover:text-accent ${sizeClasses}`}
          >
            <span aria-hidden>{text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
