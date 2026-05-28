import { categories } from '../data/projects';

export default function CategoryFilter({ active, onChange }) {
  return (
    <div
      className="flex flex-wrap justify-center gap-2"
      role="tablist"
      aria-label="Filter projects by category"
    >
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              isActive
                ? 'bg-accent text-stone-900'
                : 'bg-stone-200 text-stone-700 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
