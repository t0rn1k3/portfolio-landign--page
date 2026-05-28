import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
];

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-accent ${
    isActive
      ? 'text-accent'
      : 'text-stone-600 dark:text-stone-400'
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md dark:border-stone-800/80 dark:bg-neutral-950/90">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:text-xl"
          onClick={() => setOpen(false)}
        >
          Elena Vasquez
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={linkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-stone-600 hover:bg-stone-200 md:hidden dark:text-stone-400 dark:hover:bg-stone-800"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-stone-200 px-4 py-4 md:hidden dark:border-stone-800"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
