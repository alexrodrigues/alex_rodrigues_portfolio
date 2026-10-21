import { about } from "@/data/content";
import { SkillCard } from "@/components/cards/SkillCard";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 space-y-8">
      <div className="flex items-center gap-4">
        <h2 className="whitespace-nowrap font-headline text-headline-sm tracking-wide text-primary">
          {"// 01 about"}
        </h2>
        <div className="h-px w-full bg-outline-variant/40" />
      </div>

      <h3 className="max-w-4xl font-headline text-headline-lg tracking-tight text-on-surface">
        {about.headline}
      </h3>

      <div className="grid grid-cols-1 gap-8 font-body text-body-md leading-relaxed text-on-surface-variant md:grid-cols-2">
        {about.blocks.map((block) => (
          <div
            key={block.title}
            className="space-y-3 rounded-lg border border-outline-variant/30 bg-surface p-6"
          >
            <div className="flex items-center gap-2 font-code text-code-sm text-primary-container">
              <span className="material-symbols-outlined text-sm">{block.icon}</span>
              <span>{block.title}</span>
            </div>
            <p>{block.body}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-3">
        {about.skillGroups.map((group) => (
          <SkillCard key={group.title} group={group} />
        ))}
      </div>
    </section>
  );
}
