import type { TerminalPanel } from "@/data/content";

export function TerminalBox({ panel }: { panel: TerminalPanel }) {
  return (
    <div
      role="region"
      aria-label={`Terminal – ${panel.windowTitle}`}
      className="cyan-glow overflow-hidden rounded-lg border border-outline-variant/50 bg-surface shadow-2xl"
    >
      <div className="flex items-center justify-between border-b border-outline-variant/40 bg-surface-container-high px-4 py-2.5">
        <div className="flex items-center space-x-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#10b981]" />
        </div>
        <span className="font-code text-code-sm text-outline">{panel.windowTitle}</span>
        <span className="font-code text-code-sm text-tertiary">{panel.status}</span>
      </div>

      <div className="space-y-4 bg-surface-container-lowest p-5 font-code text-code-sm">
        <div className="text-outline">{panel.codeLine}</div>

        <div className="ml-1 space-y-2 border-l border-outline-variant/40 py-1 pl-3">
          {panel.nodes.map((node, i) => (
            <div key={node.label}>
              <div className="flex items-center justify-between rounded border border-outline-variant/30 bg-surface-container-low p-2">
                <div className="flex items-center gap-2">
                  <span className={`text-xs ${node.dotColor}`}>●</span>
                  <span className="text-on-surface">{node.label}</span>
                </div>
                <span className="text-xs text-outline">{node.meta}</span>
              </div>
              {i < panel.nodes.length - 1 && (
                <div className="py-0.5 text-center text-outline-variant">↓</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-1 rounded border border-primary-container/40 bg-surface-container p-2.5">
          <span className="font-code text-code-sm text-on-surface-variant">Telemetry</span>
          <div className="font-code text-code-sm text-tertiary">{panel.telemetry}</div>
        </div>
      </div>
    </div>
  );
}
