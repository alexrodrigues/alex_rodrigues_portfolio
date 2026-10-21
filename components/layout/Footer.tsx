import { footer } from "@/data/content";

export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/40 bg-surface-container-lowest">
      <div className="mx-auto flex w-full max-w-[80rem] flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="space-y-1 text-center md:text-left">
          <p className="font-code text-code-sm text-outline">{footer.copyright}</p>
          <p className="flex items-center justify-center gap-2 font-code text-code-sm text-on-surface-variant md:justify-start">
            <span className="inline-block h-2 w-2 rounded-full bg-tertiary" />
            <span>{footer.status}</span>
          </p>
        </div>

        <div className="flex items-center space-x-6">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-code text-code-sm text-on-surface-variant transition-colors duration-150 hover:text-primary"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
