import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function Lightbox({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/95 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>
      <figure
        className="max-h-[90vh] max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.src.replace('w=800', 'w=1200')}
          alt={project.title}
          className="max-h-[80vh] w-full rounded-lg object-contain"
        />
        <figcaption className="mt-4 text-center">
          <p
            id="lightbox-title"
            className="font-display text-xl font-semibold text-white"
          >
            {project.title}
          </p>
          <p className="mt-1 text-sm text-amber-300">{project.category}</p>
        </figcaption>
      </figure>
    </div>
  );
}
