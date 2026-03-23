# Exemplar Tools

The engineering stack that governs itself.

**[exemplar.tools](https://exemplar.tools)**

## What is this?

Exemplar is the umbrella site for an 18-project open-source engineering stack that forms a closed governance loop — from constraint specification through code generation, deployment, production observation, and contract tightening.

### The Stack

| Pillar | Projects | Domain |
|--------|----------|--------|
| **Trust & Privacy** | Signet, signet-eval, Agent-Safe, BlindDB, Tessera, HermesP2P | [signet.tools](https://signet.tools) |
| **Intelligence** | Kindex, Apprentice, Chronicler | [kindex.tools](https://kindex.tools) |
| **Governance** | Pact, Constrain, Baton, Arbiter, Sentinel, Ledger, Cartographer, Stigmergy, Exemplar | — |

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
