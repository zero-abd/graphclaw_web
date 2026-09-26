"use client";

import { useState } from "react";

const installTabs = [
  {
    label: "Linux / macOS / WSL",
    code: `curl -fsSL https://raw.githubusercontent.com/zero-abd/graphclaw/main/install.sh | bash`,
  },
  {
    label: "Windows",
    code: `irm https://raw.githubusercontent.com/zero-abd/graphclaw/main/install.ps1 | iex`,
  },
  {
    label: "From a clone",
    code: `git clone https://github.com/zero-abd/graphclaw
cd graphclaw
bash install.sh`,
  },
];

const channelConfig = `{
  "channels": {
    "telegram": { "enabled": true, "bot_token": "123456:ABC..." },
    "discord":  { "enabled": true, "bot_token": "..." },
    "slack": {
      "enabled": true,
      "bot_token": "xoxb-...",
      "app_token": "xapp-..."
    },
    "email": {
      "enabled": true,
      "imap_host": "imap.example.com",
      "smtp_host": "smtp.example.com",
      "username": "bot@example.com",
      "password": "app-password",
      "poll_interval": 30
    },
    "whatsapp": {
      "enabled": true,
      "bridge_url": "http://localhost:3001",
      "api_token": ""
    }
  }
}`;

const mcpConfig = `{
  "mcpServers": {
    "filesystem": {
      "enabled": true,
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/root"]
    }
  }
}`;

export function Install() {
  return (
    <section id="setup" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Self-host <span className="text-accent">Graphclaw</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            There is no public demo on purpose. Graphclaw runs on your machine,
            with your model key. These steps were tested on a clean install
            against the current code.
          </p>
        </div>

        <div className="mb-10 rounded-xl border border-orange-500/30 bg-orange-500/5 p-5 text-sm leading-relaxed">
          <div className="font-semibold text-orange-300 mb-1">Run it only on a machine you control</div>
          <p className="text-muted">
            The Builder and DevOps agents have a shell tool that runs commands
            on the host without a sandbox, and single-user mode has auth turned
            off. Anyone who can message your bot can ask it to run commands, so
            keep Telegram and Discord on pairing or an allowlist (the default),
            and don&apos;t expose the dashboard or <code className="font-mono">jac start</code>{" "}
            server to the internet.
          </p>
        </div>

        <ol className="space-y-10">
          <Step n={1} title="Check the prerequisites">
            <ul className="list-disc pl-5 space-y-1.5 text-muted">
              <li>
                <span className="text-foreground">Python 3.12 or 3.13.</span>{" "}
                3.14 is not supported by jaclang yet. If neither is found, the
                installer tries Homebrew on macOS or the deadsnakes PPA on
                Debian/Ubuntu.
              </li>
              <li><span className="text-foreground">Git.</span></li>
              <li>
                <span className="text-foreground">A model key:</span> OpenRouter
                (recommended, one key for Claude and others), Anthropic, or
                OpenAI. Ollama works with no key.
              </li>
              <li>
                The dashboard is a Jac client app; jac-client downloads its own
                Bun binary the first time, so Node is not required.
              </li>
            </ul>
          </Step>

          <Step n={2} title="Run the installer">
            <InstallTabs />
            <p className="mt-4 text-muted">
              It clones the source to <Path>~/.graphclaw/source</Path>, creates a
              virtualenv at <Path>~/.graphclaw/venv</Path>, and installs{" "}
              <Path>jaclang</Path> plus <Path>graphclaw[channels]</Path>.
            </p>
          </Step>

          <Step n={3} title="Answer the three setup prompts">
            <ul className="list-disc pl-5 space-y-1.5 text-muted">
              <li>
                <span className="text-foreground">Deployment mode:</span>{" "}
                1 Single-user (personal agent, no auth) or 2 Multi-user (JWT auth).
                Pick 1.
              </li>
              <li>
                <span className="text-foreground">LLM provider:</span> 1 OpenRouter,
                2 Anthropic, 3 OpenAI, 4 Ollama, 5 Skip. Paste your key when asked.
                The default model is{" "}
                <Path>openrouter/anthropic/claude-sonnet-4-6</Path>.
              </li>
              <li>
                <span className="text-foreground">First chat interface:</span>{" "}
                1 Telegram, 2 Discord, 3 Slack, 4 Skip. Each option prints a
                walkthrough for creating the bot token. Skip is fine: you can
                chat in the terminal.
              </li>
            </ul>
            <p className="mt-4 text-muted">
              It writes <Path>~/.graphclaw/config.json</Path>,{" "}
              <Path>~/.graphclaw/.env</Path>, a launcher at{" "}
              <Path>~/.graphclaw/run.sh</Path>, and a <Path>graphclaw</Path> alias
              in your <Path>~/.zshrc</Path> or <Path>~/.bashrc</Path>.
            </p>
          </Step>

          <Step n={4} title="Start it">
            <Code>{`source ~/.zshrc      # or ~/.bashrc, once
graphclaw`}</Code>
            <p className="mt-4 text-muted">You should see:</p>
            <Code>{`[graphclaw] starting -- workspace: ~/.graphclaw/workspace
[graphclaw] dashboard: http://127.0.0.1:18789/
[graphclaw] no channels enabled -- running in CLI mode
[graphclaw] ready
Type your message (Ctrl+C to exit):
>`}</Code>
            <p className="mt-4 text-muted">
              The dashboard opens at <Path>http://127.0.0.1:18789/</Path> (its API
              is on port 18790). To run without it, set{" "}
              <Path>&quot;dashboard&quot;: {"{"} &quot;enabled&quot;: false {"}"}</Path>{" "}
              in the config or export <Path>GRAPHCLAW_DASHBOARD_DISABLE=1</Path>.
            </p>
          </Step>

          <Step n={5} title="Add more channels">
            <p className="text-muted mb-4">
              Edit <Path>~/.graphclaw/config.json</Path> and restart{" "}
              <Path>graphclaw</Path>. Only the channels with{" "}
              <Path>&quot;enabled&quot;: true</Path> start. Email uses IMAP and
              SMTP over SSL and polls unread mail; WhatsApp talks to a bridge
              that serves <Path>GET /messages</Path> and{" "}
              <Path>POST /send</Path>.
            </p>
            <Code>{channelConfig}</Code>
          </Step>

          <Step n={6} title="Approve who can talk to it">
            <p className="text-muted mb-4">
              Telegram and Discord default to pairing for unknown DMs and an
              allowlist for groups. When a new user messages the bot, it replies
              with a pairing code. Approve it at the <Path>&gt;</Path> prompt in
              your terminal:
            </p>
            <Code>{`> pairing list telegram
> pairing approve telegram <code>`}</Code>
          </Step>

          <Step n={7} title="Connect MCP servers (optional)">
            <p className="text-muted mb-4">
              Every configured server&apos;s tools, resources, and prompts are
              exposed to the agents. Add them under <Path>mcpServers</Path>:
            </p>
            <Code>{mcpConfig}</Code>
          </Step>

          <Step n={8} title="Keep it up to date">
            <Code>{`graphclaw status     # current vs. latest commit
graphclaw update
graphclaw rollback`}</Code>
          </Step>
        </ol>
      </div>
    </section>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="relative pl-12">
      <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-sm font-semibold text-accent">
        {n}
      </span>
      <h3 className="text-lg font-semibold mb-3 pt-0.5">{title}</h3>
      <div className="text-sm leading-relaxed">{children}</div>
    </li>
  );
}

function Path({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-[0.8rem] text-foreground bg-card border border-card-border rounded px-1.5 py-0.5 break-words">
      {children}
    </code>
  );
}

function Code({ children }: { children: string }) {
  return (
    <div className="rounded-xl border border-card-border bg-code-bg overflow-hidden">
      <div className="flex justify-end border-b border-card-border/60 px-3 py-1.5">
        <CopyButton text={children} />
      </div>
      <pre className="p-4 font-mono text-xs sm:text-sm leading-relaxed text-green-400 overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(text).then(
          () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          },
          () => {},
        );
      }}
      className="rounded-md border border-card-border bg-card px-2.5 py-1 text-xs text-muted hover:text-foreground transition-colors"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function InstallTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="rounded-xl border border-card-border overflow-hidden">
      <div className="flex flex-wrap border-b border-card-border bg-card/80">
        {installTabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            className={`px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors ${
              active === i
                ? "text-accent border-b-2 border-accent bg-accent/5"
                : "text-muted hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-code-bg">
        <div className="flex justify-end border-b border-card-border/60 px-3 py-1.5">
          <CopyButton text={installTabs[active].code} />
        </div>
        <pre className="p-4 font-mono text-xs sm:text-sm leading-relaxed text-green-400 whitespace-pre-wrap break-all">
          <code>{installTabs[active].code}</code>
        </pre>
      </div>
    </div>
  );
}
