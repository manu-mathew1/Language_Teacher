# Language Teacher AI — Project Instructions

> **Codename**: LinguaMentor
> **Version**: 0.1.0 (Genesis)
> **Last Updated**: 2026-02-17

---

## 1. Project Vision

LinguaMentor is an AI-powered language learning platform that replicates the experience of having a **strict, experienced, real-life language teacher**. The system will teach users a new language from scratch — guiding them through structured stages from absolute beginner to advanced fluency — using spoken conversation, written exercises, listening comprehension, and deep immersive dialogue.

The AI teacher is **not a chatbot**. It is a disciplined instructor that:
- Follows a structured curriculum with clear progression levels.
- Demands accuracy before advancing the student.
- Conducts real-time voice conversations in the target language.
- Assigns homework, quizzes, and evaluations.
- Tracks every weakness and iteratively drills until mastery is achieved.

---

## 2. Core Principles

### 2.1 Development Philosophy

| Principle | Description |
|---|---|
| **No False Shortcuts** | Every feature must genuinely improve the learner's ability. Gamification is secondary to actual skill acquisition. |
| **Strict Progression** | Users cannot skip levels without proving competence. The system enforces mastery-based advancement. |
| **Measurable Outcomes** | Every interaction produces data that quantifiably tracks improvement in speaking, listening, reading, and writing. |
| **Real-World Readiness** | The goal is real-world fluency, not just passing quizzes. Conversations, cultural context, and practical vocabulary are prioritized. |
| **Iterative Improvement** | The system itself must improve over time — better prompts, better curricula, better evaluation methods. |

### 2.2 AI Teacher Persona

The AI must behave as a **strict but supportive teacher**:
- **Corrects every mistake** — grammar, pronunciation, spelling, word choice.
- **Never accepts vague or lazy answers** — pushes for precision.
- **Explains the "why"** — does not just say "wrong", but teaches the rule.
- **Adapts difficulty dynamically** — if the student struggles, it provides scaffolding; if they excel, it pushes harder.
- **Conducts full conversations** — not just Q&A, but flowing dialogue that tests comprehension and production.
- **Assigns and grades homework** — writing tasks, translation exercises, listening comprehension.
- **Tracks long-term progress** — remembers what the student has learned and what they still struggle with.

---

## 3. Supported Languages (Initial)

| Language | Code |
|---|---|
| English | `en` |
| French | `fr` |
| German | `de` |
| Spanish | `es` |
| Japanese | `ja` |
| Mandarin Chinese | `zh` |
| Korean | `ko` |
| Arabic | `ar` |

> More languages can be added. The curriculum engine must be language-agnostic — driven by structured data, not hardcoded logic.

---

## 4. Technology Stack

### 4.1 Frontend
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Vanilla CSS with CSS custom properties (design tokens)
- **State Management**: React Context + `useReducer` for global state; local state with `useState`
- **Audio**: Web Audio API + MediaRecorder API for voice interactions
- **Real-time Communication**: WebSockets (Socket.IO) for live voice conversation sessions

### 4.2 Backend
- **Runtime**: Node.js 20+ with TypeScript
- **Framework**: Express.js or Fastify (decide during Phase 1 spike)
- **API Style**: RESTful for CRUD operations; WebSocket for real-time voice/chat
- **Authentication**: JWT-based with refresh tokens; OAuth2 for social login (Google, Apple)
- **Database**: PostgreSQL (primary) + Redis (caching, session store, rate limiting)
- **ORM**: Prisma
- **File Storage**: AWS S3 or Cloudflare R2 for audio recordings, user submissions

### 4.3 AI & ML
- **LLM Provider**: OpenAI GPT-4o (primary); architecture must support swappable providers
- **Speech-to-Text**: OpenAI Whisper API
- **Text-to-Speech**: OpenAI TTS or ElevenLabs (for natural-sounding teacher voice)
- **Pronunciation Evaluation**: Custom pipeline — Whisper transcription → phonetic comparison → scoring
- **Embeddings**: OpenAI embeddings for semantic similarity in answer evaluation
- **Prompt Engineering**: All prompts stored as versioned templates, never hardcoded in business logic

### 4.4 Infrastructure
- **Containerization**: Docker + Docker Compose for local development
- **CI/CD**: GitHub Actions
- **Hosting**: Vercel (frontend) + Railway or AWS ECS (backend)
- **Monitoring**: Sentry (errors), PostHog or Mixpanel (analytics)

---

## 5. Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                   FRONTEND (Next.js)                │
│  ┌────────┐ ┌──────────┐ ┌────────┐ ┌───────────┐  │
│  │ Auth   │ │ Dashboard│ │ Lesson │ │ Voice     │  │
│  │ Pages  │ │ & Stats  │ │ Engine │ │ Classroom │  │
│  └────────┘ └──────────┘ └────────┘ └───────────┘  │
└────────────────────┬────────────────────────────────┘
                     │ REST + WebSocket
┌────────────────────▼────────────────────────────────┐
│                   BACKEND (Node.js)                 │
│  ┌────────┐ ┌──────────┐ ┌──────────┐ ┌─────────┐  │
│  │ Auth   │ │ Lesson   │ │ AI       │ │ Progress│  │
│  │ Service│ │ Service  │ │ Service  │ │ Tracker │  │
│  └────────┘ └──────────┘ └──────────┘ └─────────┘  │
│  ┌────────┐ ┌──────────┐ ┌──────────┐              │
│  │ Voice  │ │ Homework │ │ Eval     │              │
│  │ Service│ │ Service  │ │ Engine   │              │
│  └────────┘ └──────────┘ └──────────┘              │
└────────────────────┬────────────────────────────────┘
                     │
    ┌────────────────┼────────────────┐
    ▼                ▼                ▼
┌────────┐    ┌──────────┐    ┌──────────┐
│PostgreSQL│  │  Redis   │    │  S3/R2   │
│(Primary)│   │ (Cache)  │    │ (Files)  │
└─────────┘   └──────────┘    └──────────┘
```

---

## 6. Coding Standards

### 6.1 General Rules
- **TypeScript everywhere** — no `any` types unless absolutely necessary and documented.
- **ESLint + Prettier** — enforced via CI. No code merges with lint errors.
- **Conventional Commits** — `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`.
- **No dead code** — commented-out code is not allowed in commits.
- **No TODO without tickets** — every `TODO` must reference an issue number.

### 6.2 File & Folder Naming
- Files: `kebab-case.ts` (e.g., `lesson-service.ts`)
- Components: `PascalCase.tsx` (e.g., `VoiceRecorder.tsx`)
- Tests: `*.test.ts` or `*.spec.ts` co-located with source files
- Constants: `SCREAMING_SNAKE_CASE`

### 6.3 API Design
- All endpoints versioned: `/api/v1/...`
- Standard response envelope:
  ```json
  {
    "success": true,
    "data": { ... },
    "error": null,
    "meta": { "timestamp": "...", "requestId": "..." }
  }
  ```
- Proper HTTP status codes — no `200 OK` with error in the body.
- Rate limiting on all public endpoints.
- Input validation with Zod schemas on every endpoint.

### 6.4 AI Prompt Management
- All prompts stored in `/prompts/` directory as `.md` or `.txt` templates.
- Prompts are versioned and tracked in the database.
- System prompts for the teacher persona are **never modified at runtime** by user input.
- Every AI call is logged with: prompt hash, token count, latency, and a quality score (when available).

### 6.5 Testing Requirements
- **Unit tests**: All services, utilities, evaluation logic.
- **Integration tests**: API endpoints, database operations.
- **E2E tests**: Critical user flows (registration, starting a lesson, completing an exercise).
- **AI output tests**: Regression tests for prompt quality — snapshot expected outputs for known inputs.
- Minimum coverage target: **80%** for business logic, **100%** for evaluation/scoring functions.

---

## 7. Security Requirements

- Passwords hashed with **bcrypt** (cost factor ≥ 12).
- All API endpoints authenticated except: registration, login, password reset.
- CORS configured for specific origins only.
- SQL injection prevention via Prisma parameterized queries.
- XSS prevention via React's default escaping + CSP headers.
- Rate limiting: 100 requests/minute per authenticated user; 20/minute for unauthenticated.
- Audio uploads validated for file type, size (max 10MB), and duration (max 5 minutes).
- AI prompt injection prevention — user input is never concatenated directly into system prompts.

---

## 8. AI Agent Development Rules

> [!CAUTION]
> These rules are non-negotiable. Violating them will produce a system that gives users a false sense of learning while providing no real value.

### 8.1 Evaluation Integrity
- **Never accept a wrong answer as correct** to avoid frustrating the user.
- **Never inflate scores** — if pronunciation is poor, the score must reflect that.
- **Never skip evaluation** — every exercise must be scored and recorded.
- **Never generate exercises below the student's current level** just to make them feel good.

### 8.2 Curriculum Integrity
- Lessons must follow a **linguistically sound progression** (phonetics → basic vocabulary → grammar → sentence construction → conversation → advanced topics).
- Grammar rules must be **accurate** — verify against authoritative sources.
- Vocabulary lists must be **frequency-ranked** — teach the most commonly used words first.
- Cultural context must be **accurate and respectful**.

### 8.3 Conversation Quality
- The AI teacher must **never break character** during a lesson.
- Voice conversations must feel **natural** — appropriate pacing, intonation guidance, and real-time correction.
- The teacher must **challenge the student** — ask follow-up questions, introduce new vocabulary mid-conversation, and test comprehension.

### 8.4 Data Integrity
- All student progress data must be **persisted immediately** — no relying on client-side storage for critical data.
- Session recordings (voice) must be stored for **review and replay**.
- The system must maintain a **complete history** of every lesson, score, and correction.

---

## 9. Feature Flags & Configuration

- Use environment variables for all configuration. No hardcoded API keys, URLs, or secrets.
- Feature flags managed via a simple database table (`feature_flags`) for controlled rollout.
- AI model selection configurable per environment (dev = cheaper model, prod = best model).

---

## 10. Error Handling

- All errors must be caught, logged, and presented to the user in a meaningful way.
- AI API failures must have **graceful degradation** — retry with exponential backoff, then fallback to cached content.
- Network interruptions during voice sessions must allow **seamless resume**.
- Never show raw error messages, stack traces, or internal details to the user.

---

## 11. Performance Targets

| Metric | Target |
|---|---|
| Page load (initial) | < 2 seconds |
| API response (non-AI) | < 200ms |
| AI text response | < 3 seconds |
| Speech-to-text processing | < 2 seconds for 30s audio |
| Text-to-speech generation | < 1.5 seconds |
| Voice conversation round-trip | < 4 seconds |

---

## 12. Git Workflow

- `main` — production-ready code only. Protected branch.
- `develop` — integration branch for feature merges.
- `feature/<name>` — individual feature branches.
- `fix/<name>` — bug fix branches.
- All merges via Pull Request with at least 1 review.
- CI must pass before merge (lint, test, build).

---

## 13. Documentation

- Every service must have a `README.md` explaining its purpose, APIs, and how to run it.
- API endpoints documented with OpenAPI/Swagger.
- AI prompts documented with expected behavior and example outputs.
- Architecture decisions recorded as ADRs (Architecture Decision Records) in `/docs/adr/`.
