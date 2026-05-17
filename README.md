# Exemplar Tools

The engineering stack that governs itself.

**[exemplar.tools](https://exemplar.tools)**

## What is this?

Exemplar is the umbrella site for a 23-tool open-source engineering stack that forms a closed governance loop — from constraint specification through code generation, deployment, production observation, and contract tightening.

### The Stack

| Pillar | Projects | Domain |
|--------|----------|--------|
| **Trust & Privacy** | Signet, signet-eval, Agent-Safe | [signet.tools](https://signet.tools) |
| **Intelligence** | Kindex, Apprentice, Chronicler, Transmogrifier | [kindex.tools](https://kindex.tools) |
| **Governance** | Pact, Constrain, Baton, Arbiter, Sentinel, Ledger, Cartographer, Stack Smoke, Aegis, Covenant, Scram, Witness, Vigil, Exemplar | — |
| **Audit & Quality** | Webprobe, Advocate | — |

### The Loop

```
SPECIFY → BUILD → DEPLOY → OBSERVE → TIGHTEN → (back to SPECIFY)
```

Production incidents don't just get fixed — they generate tightened contracts that make the bug class non-recurring.

## Development

```bash
npm install
npm run dev
```

## Deployment

Deployed to [Fly.io](https://fly.io) via Docker + nginx.

```bash
fly deploy
```

## License

MIT
