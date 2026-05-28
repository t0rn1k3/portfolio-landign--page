export default function ProjectCard({ project, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(project)}
      className="group relative mb-6 w-full break-inside-avoid overflow-hidden rounded-xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <img
        src={project.src}
        alt={project.title}
        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className="text-xs font-medium uppercase tracking-wider text-amber-300">
          {project.category}
        </span>
        <span className="font-display text-lg font-semibold text-white">
          {project.title}
        </span>
      </div>
    </button>
  );
}
