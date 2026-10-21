import type { SkillGroup } from "@/data/content";

export function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <div className="space-y-4 rounded-lg border border-outline-variant/40 bg-surface p-5 transition-colors duration-150 hover:border-primary-container">
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
        <span className="font-code text-code-md font-semibold text-on-surface">
          {group.index}. {group.title}
        </span>
        <span className="font-code text-xs text-primary-container">[stack]</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-outline-variant/40 bg-surface-container-low px-2 py-1 font-code text-code-sm text-on-surface-variant"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
