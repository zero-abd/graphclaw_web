export function Footer() {
  return (
    <footer className="border-t border-card-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight">
              <span className="text-accent">Graph</span>claw
            </span>
            <span className="text-xs text-muted">MIT License</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/zero-abd/graphclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.jac-lang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Jac Language
            </a>
            <a
              href="https://docs.jaseci.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Jaseci Docs
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted">
          Built for the Jaseci Hackathon. Graphclaw is in alpha — PRs welcome.
        </div>
      </div>
    </footer>
  );
}
