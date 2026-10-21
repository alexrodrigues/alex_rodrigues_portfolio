import { projects } from "@/data/content";
import { ProjectCard } from "@/components/cards/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 space-y-8">
      <div className="flex items-center gap-4">
        <h2 className="whitespace-nowrap font-headline text-headline-sm tracking-wide text-primary">
          {"// 03 projects"}
        </h2>
        <div className="h-px w-full bg-outline-variant/40" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
