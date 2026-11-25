import { nav } from "@/data/content";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-[80rem] items-center justify-between px-6">
        <a
          href="#hero"
          className="flex items-center gap-1 font-code text-code-md font-bold tracking-tight text-primary transition-opacity hover:opacity-80"
        >
          <span className="text-primary-container">❯</span>
          <span>{nav.wordmark}</span>
          <span className="caret-blink text-primary-container">_</span>
        </a>

        <nav className="hidden items-center space-x-6 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-code text-code-sm text-on-surface-variant transition-colors duration-150 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
