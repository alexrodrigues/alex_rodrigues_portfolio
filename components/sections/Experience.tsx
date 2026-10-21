import { experience } from "@/data/content";
import { TimelineItem } from "@/components/cards/TimelineItem";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 space-y-8">
      <div className="flex items-center gap-4">
        <h2 className="whitespace-nowrap font-headline text-headline-sm tracking-wide text-primary">
          {"// 02 experience"}
        </h2>
        <div className="h-px w-full bg-outline-variant/40" />
      </div>

      <div className="flex items-center justify-between font-code text-code-sm text-outline">
        <span>git log --graph --oneline --decorate --all</span>
        <span>branch: origin/main</span>
      </div>

      <div className="relative ml-4 space-y-10 border-l-2 border-outline-variant/40 pl-6 md:ml-32 md:pl-10">
        {experience.map((entry) => (
          <TimelineItem key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}
