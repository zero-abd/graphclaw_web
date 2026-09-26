# Graphclaw website

Live: https://graphclaw.vercel.app

Project site for [Graphclaw](https://github.com/zero-abd/graphclaw), the graph-native multi-agent runtime in Jac that won 1st place out of 200+ teams at JacHacks 2026. The page covers what it does, the architecture (message bus, agent routing, graph memory), and a self-host guide tested against the runtime's installer.

The runtime itself is not hosted here: its Builder and DevOps agents can run shell commands on the host, so it should only run on a machine you control.

## Develop

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build
```

Next.js 16 (App Router) with Tailwind 4. Deployed on Vercel.
