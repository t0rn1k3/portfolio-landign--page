import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';
import { profile } from '../data/profile';

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <img
          src={profile.heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-stone-900/60 dark:bg-neutral-950/70" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-amber-300">
            {profile.location}
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-stone-200 sm:text-xl">
            {profile.tagline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-stone-900 transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get in touch
            </a>
          </div>
        </div>
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80 transition-colors hover:text-white"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" aria-hidden />
        </a>
      </section>

      <section
        id="about"
        className="py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={profile.portraitImage}
                alt={`Portrait of ${profile.name}`}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-stone-900 dark:text-stone-100 sm:text-4xl">
                About me
              </h2>
              <p className="mt-6 text-base leading-relaxed text-stone-600 dark:text-stone-400 sm:text-lg">
                {profile.bio}
              </p>
              <ul className="mt-10 grid grid-cols-3 gap-6 border-t border-stone-200 pt-10 dark:border-stone-800">
                {profile.stats.map(({ label, value }) => (
                  <li key={label} className="text-center md:text-left">
                    <p className="font-display text-2xl font-semibold text-accent sm:text-3xl">
                      {value}
                    </p>
                    <p className="mt-1 text-xs text-stone-500 sm:text-sm dark:text-stone-500">
                      {label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 dark:bg-neutral-900 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-stone-900 dark:text-stone-100 sm:text-4xl">
              What I shoot
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-stone-600 dark:text-stone-400">
              A mix of genres — each project shaped by light, place, and story.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {profile.categories.map(({ id, label, image }) => (
              <li key={id}>
                <Link
                  to={`/projects?category=${label}`}
                  className="group relative block overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <img
                    src={image}
                    alt={label}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-display text-xl font-semibold text-white">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-stone-900 dark:text-stone-100 sm:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mx-auto mt-4 max-w-md text-stone-600 dark:text-stone-400">
            Follow along for new work, behind-the-scenes, and booking inquiries.
          </p>
          <div className="mt-10">
            <SocialLinks links={profile.socialLinks} size="lg" />
          </div>
          <Link
            to="/projects"
            className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Browse the full gallery
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
