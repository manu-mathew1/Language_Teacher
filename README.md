# LinguaMentor — AI Language Teacher

> An AI-powered language learning platform that replicates the experience of having a strict, experienced language teacher.

## Project Structure

```
/
├── apps/
│   ├── web/          # Next.js frontend
│   └── api/          # Node.js backend
├── packages/
│   ├── shared/       # Shared types, constants, utilities
│   ├── ai-core/      # AI service abstraction layer
│   └── curriculum/   # Curriculum data & logic
├── prompts/          # AI prompt templates (versioned)
├── docs/
│   └── adr/          # Architecture Decision Records
├── scripts/          # Build, seed, migration scripts
└── docker/           # Docker configurations
```

## Getting Started

### Prerequisites
- Node.js 20+
- Docker & Docker Compose
- PostgreSQL 15+
- Redis 7+

### Installation

```bash
# Install dependencies
npm install

# Start development environment
docker-compose up -d

# Run database migrations
cd apps/api && npx prisma migrate dev

# Seed database
npm run seed

# Start development servers
npm run dev
```

The frontend will be available at `http://localhost:3000` and the API at `http://localhost:4000`.

## Documentation

- [Project Instructions](./INSTRUCTIONS.md) — Coding standards, architecture, and development philosophy
- [Development Plan](./DEVELOPMENT_PLAN.md) — Phased roadmap with detailed task breakdowns

## Tech Stack

- **Frontend**: Next.js 14+, TypeScript, Vanilla CSS
- **Backend**: Node.js 20+, Express, TypeScript
- **Database**: PostgreSQL + Prisma ORM
- **Cache**: Redis
- **AI**: OpenAI (GPT-4o, Whisper, TTS)
- **DevOps**: Docker, GitHub Actions

## Scripts

- `npm run dev` — Start all development servers
- `npm run build` — Build all apps for production
- `npm run lint` — Run ESLint on all workspaces
- `npm run test` — Run all tests
- `npm run type-check` — TypeScript type checking
- `npm run format` — Format code with Prettier

## License

Proprietary — All rights reserved
