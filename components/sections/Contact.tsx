import { contactHeadline, contactSubline, contactLinks } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 space-y-8 pb-12 pt-4">
      <div className="flex items-center gap-4">
        <h2 className="whitespace-nowrap font-headline text-headline-sm tracking-wide text-primary">
          {"// 04 contact"}
        </h2>
        <div className="h-px w-full bg-outline-variant/40" />
      </div>

      <div className="cyan-glow space-y-8 rounded-xl border border-outline-variant/40 bg-surface p-8 md:p-12">
        <div className="max-w-3xl space-y-3">
          <h3 className="font-headline text-headline-lg text-on-surface">{contactHeadline}</h3>
          <p className="font-code text-code-md text-primary">{contactSubline}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between rounded-lg border border-outline-variant/40 bg-surface-container-low p-4 transition-all duration-150 hover:border-primary-container hover:bg-surface-container"
            >
              <div className="min-w-0 space-y-1">
                <div className="font-code text-xs text-outline">{link.command}</div>
                <div className="truncate font-code text-code-sm text-on-surface transition-colors group-hover:text-primary-container">
                  {link.label}
                </div>
              </div>
              <span className="material-symbols-outlined shrink-0 text-outline group-hover:text-primary-container">
                {link.icon}
              </span>
            </a>
          ))}
        </div>

        <div className="pt-2">
          <a
            href="mailto:alex.rodrigues.developer@gmail.com"
            className="cyan-glow inline-flex items-center gap-2 rounded bg-primary-container px-8 py-3 font-headline text-headline-sm font-bold text-on-primary-container transition-all duration-150 hover:bg-surface-tint active:scale-95"
          >
            <span>Email Me</span>
            <span className="material-symbols-outlined text-lg">send</span>
          </a>
        </div>
      </div>
    </section>
  );
}
