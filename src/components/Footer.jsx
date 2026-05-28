import SocialLinks from './SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <SocialLinks />
          <p className="text-sm text-stone-500 dark:text-stone-500">
            © {year} Elena Vasquez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
