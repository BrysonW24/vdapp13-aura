# Aura Architecture

## Overview

- Expo mobile app for trainers and clients
- Fastify API with shared TypeScript types
- Postgres + Prisma for persistence
- LLM provider behind a stub interface

## LLM safety

- Assistive only, trainer approves outputs
- Log prompt + response in llm_runs
- No medical advice
