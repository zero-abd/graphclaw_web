export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 hero-radial" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-24 pb-16">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm text-accent mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Alpha — Built for the Jaseci Hackathon
          </div>
        </div>

        <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1]">
          <span className="bg-gradient-to-r from-white via-white to-muted bg-clip-text text-transparent">
            Graph-Native
          </span>
          <br />
          <span className="bg-gradient-to-r from-accent via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            Multi-Agent AI
          </span>
        </h1>

        <p className="animate-fade-in-up delay-200 mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          Memory lives in a property graph. Agents are graph walkers. Skills
          install from the internet at runtime. All written in{" "}
          <a
            href="https://www.jac-lang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            Jac
          </a>
          , the AI-native language built on Jaseci.
        </p>

        <div className="animate-fade-in-up delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/zero-abd/graphclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-xl bg-accent hover:bg-accent-dim px-6 py-3 text-sm font-semibold text-white transition-all animate-pulse-glow"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
          <a
            href="#install"
            className="rounded-xl border border-card-border bg-card hover:border-accent/50 px-6 py-3 text-sm font-semibold transition-all"
          >
            Get Started
          </a>
        </div>

        <div className="animate-fade-in-up delay-400 mt-12 flex flex-wrap items-center justify-center gap-3">
          <Badge color="violet">Jac 0.13.5</Badge>
          <Badge color="blue">Python 3.12+</Badge>
          <Badge color="green">MIT License</Badge>
          <Badge color="orange">Alpha</Badge>
        </div>

        <div className="animate-fade-in delay-600 mt-16">
          <div className="mx-auto max-w-2xl rounded-xl border border-card-border bg-code-bg p-4 text-left font-mono text-sm overflow-x-auto">
            <div className="flex items-center gap-2 mb-3 text-muted text-xs">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2">terminal</span>
            </div>
            <div>
              <span className="text-green-400">$</span>{" "}
              <span className="text-muted">graphclaw</span>
            </div>
            <div className="mt-1 text-muted">{"> "}deploy my app to base44</div>
            <div className="mt-1">
              <span className="text-accent">[devops]</span>{" "}
              <span className="text-muted">
                Checking Base44 apps... deploying graphclaw-demo...{" "}
              </span>
              <span className="text-green-400">done</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children, color }: { children: React.ReactNode; color: string }) {
  const colors: Record<string, string> = {
    violet: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    blue: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    green: "border-green-500/30 bg-green-500/10 text-green-300",
    orange: "border-orange-500/30 bg-orange-500/10 text-orange-300",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${colors[color]}`}
    >
      {children}
    </span>
  );
}
