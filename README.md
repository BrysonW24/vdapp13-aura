# Aura

Personal training operations platform with an LLM-assisted coach workflow.

## Monorepo layout

```
vdapp13-aura/
├── apps/
│   ├── api/        # Node.js API (Fastify + Prisma)
│   └── mobile/     # Expo mobile app
├── packages/
│   ├── shared/     # Shared types + validators
│   └── ui/         # Shared UI components
├── infra/          # IaC placeholders
├── docs/           # Architecture + ADRs
└── .github/        # CI
```

## Quick start

```bash
# root
npm install

# API
npm run dev:api

# Mobile
npm run dev:mobile
```

## Vertical slice (stubbed)

1. Trainer login (stub)
2. Create client profile
3. Assign program template
4. Log workout
5. Client snapshot (LLM stub)

See `apps/api/src/routes` and `apps/mobile/App.tsx`.
