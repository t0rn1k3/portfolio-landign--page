import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CategoryFilter from '../components/CategoryFilter';
import ProjectCard from '../components/ProjectCard';
import Lightbox from '../components/Lightbox';
import { projects } from '../data/projects';

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';
  const activeCategory =
    ['All', 'Portrait', 'Landscape', 'Street', 'Wedding'].includes(categoryParam)
      ? categoryParam
      : 'All';

  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h1 className="font-display text-3xl font-semibold text-stone-900 dark:text-stone-100 sm:text-4xl md:text-5xl">
            Projects
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-stone-600 dark:text-stone-400">
            Selected work across portrait, landscape, street, and wedding
            photography.
          </p>
        </header>

        <div className="mt-10">
          <CategoryFilter
            active={activeCategory}
            onChange={handleCategoryChange}
          />
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-stone-500">
            No projects in this category yet.
          </p>
        ) : (
          <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelected}
              />
            ))}
          </div>
        )}
      </div>

      <Lightbox project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
