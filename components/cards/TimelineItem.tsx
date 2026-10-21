import type { ExperienceEntry } from "@/data/content";

export function TimelineItem({ entry }: { entry: ExperienceEntry }) {
  const [rangeStart, rangeEnd] = entry.dateRange.split(" – ");

  return (
    <div className="group relative">
      <div
        className={`absolute -left-[31px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 bg-surface-container-lowest md:-left-[47px] ${
          entry.current ? "cyan-glow-subtle border-primary-container" : "border-outline"
        }`}
      >
        {entry.current && <div className="h-1.5 w-1.5 rounded-full bg-tertiary" />}
      </div>

      <div className="absolute -left-40 top-1 hidden w-28 text-right font-code text-code-sm leading-tight text-outline md:block">
        {rangeEnd ? (
          <>
            <div>{rangeStart} –</div>
            <div>{rangeEnd}</div>
          </>
        ) : (
          <div>{entry.dateRange}</div>
        )}
      </div>

      <div className="space-y-3 rounded-lg border border-outline-variant/40 bg-surface p-6 transition-colors duration-150 group-hover:border-primary-container">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-outline-variant/30 pb-3">
          <div>
            <span className="mr-2 font-code text-code-sm text-primary-container">{entry.commit}</span>
            {entry.headRef && (
              <span className="font-code text-code-sm text-outline">{entry.headRef}</span>
            )}
            <h4 className="pt-1 font-headline text-headline-sm text-on-surface">{entry.title}</h4>
            <p className="font-label text-label-sm text-outline">{entry.org}</p>
          </div>
          <span className="rounded bg-surface-container-low px-2 py-0.5 font-code text-code-sm text-outline md:hidden">
            {entry.dateRange}
          </span>
        </div>

        <p className="font-body text-body-md leading-relaxed text-on-surface-variant">
          {entry.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-surface-container-low px-2 py-0.5 font-code text-code-sm text-outline"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
