import type { ProjectEntry } from "@/data/content";

export function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <div className="cyan-glow-subtle flex flex-col justify-between space-y-6 rounded-lg border border-outline-variant/40 bg-surface p-6 transition-all duration-200 hover:border-primary-container">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="rounded border border-outline-variant/50 bg-surface-container-high px-2.5 py-1 font-code text-code-sm text-primary">
            {project.badge}
          </span>
          <span className="font-code text-xs text-tertiary">{project.status}</span>
        </div>
        <h3 className="font-headline text-headline-md text-on-surface">{project.title}</h3>
        <p className="font-body text-body-md leading-relaxed text-on-surface-variant">
          {project.description}
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-outline-variant/30 bg-surface-container-low px-2 py-1 font-code text-code-sm text-outline"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-code text-code-sm text-primary-container hover:underline"
        >
          <span>{project.linkLabel}</span>
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </a>
      </div>
    </div>
  );
}
