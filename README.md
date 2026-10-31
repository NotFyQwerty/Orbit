# Orbit

Trello-style task boards for solo and team use.

> Work in progress.

## Features (planned)

- Sign up / sign in with email and password
- Personal workspace and team workspaces with roles
- Boards, columns and cards with drag-and-drop
- Real-time sync and notifications
- GitHub integration (tasks linked to pull requests and commits)

## Tech stack

**Frontend:** React, Vite, TypeScript, Feature-Sliced Design, TanStack Query, Zustand, dnd-kit, Tailwind CSS

**Backend:** NestJS, TypeScript, PostgreSQL, Prisma, JWT auth

**Infrastructure:** pnpm workspaces, Docker Compose, GitHub Actions

## Repository structure

```
apps/
  api/   # NestJS backend
  web/   # React frontend
```