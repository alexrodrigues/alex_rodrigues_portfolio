import { hero } from "@/data/content";
import { TerminalBox } from "@/components/layout/TerminalBox";

export function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 items-center gap-8 border-b border-outline-variant/30 pb-12 pt-6 lg:grid-cols-12"
    >
      <div className="space-y-6 lg:col-span-7">
        <div className="flex items-center gap-2 font-code text-code-sm text-primary-container">
          <span>{hero.eyebrow}</span>
        </div>

        <div className="space-y-2">
          <h1 className="font-headline text-headline-xl tracking-tight text-on-surface">
            {hero.name}
          </h1>
          <p className="font-headline text-headline-md tracking-tight text-primary">
            {hero.role}
          </p>
        </div>

        <p className="max-w-2xl font-body text-body-lg leading-relaxed text-on-surface-variant">
          {hero.pitch}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {hero.meta.map((item) => (
            <span
              key={item.text}
              className="flex items-center gap-1.5 rounded border border-outline-variant/40 bg-surface-container-low px-2.5 py-1 font-code text-code-sm text-on-surface-variant"
            >
              <span className={`material-symbols-outlined text-sm text-${item.accent}`}>
                {item.icon}
              </span>
              {item.text}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href={hero.ctaPrimary.href}
            className="cyan-glow flex items-center gap-2 rounded bg-primary-container px-5 py-2.5 font-label text-label-md font-semibold text-on-primary-container transition-all duration-150 hover:bg-surface-tint active:scale-95"
          >
            <span>{hero.ctaPrimary.label}</span>
            <span className="material-symbols-outlined text-base">arrow_downward</span>
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="flex items-center gap-2 rounded border border-outline-variant bg-transparent px-5 py-2.5 font-label text-label-md text-primary transition-all duration-150 hover:border-primary hover:bg-surface-container-high active:scale-95"
          >
            <span>{hero.ctaSecondary.label}</span>
            <span className="material-symbols-outlined text-base">terminal</span>
          </a>
        </div>
      </div>

      <div className="lg:col-span-5">
        <TerminalBox panel={hero.terminal} />
      </div>
    </section>
  );
}
