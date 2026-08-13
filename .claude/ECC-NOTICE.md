# ECC provenance

The contents of `.claude/rules/ecc/`, and the following files under
`.claude/skills/`, `.claude/agents/`, and `.claude/commands/`, are vendored
from [affaan-m/ECC](https://github.com/affaan-m/ECC) (MIT License), a
Claude Code plugin providing agents, skills, commands, and rules.

- Source: https://github.com/affaan-m/ECC
- Version: 2.2.0
- Commit: eb4970265169fec82371c92f615e2e133d875e27
- License: MIT (Copyright (c) 2026 Affaan Mustafa) — see `LICENSE-ECC.md`

This is a curated subset, not a full install: the pieces relevant to this
repo's Vite + React 19 + TypeScript + Tailwind stack, chosen over ECC's
full catalog (68 agents / 284 skills spanning many languages and domains
this project doesn't use). No hooks, MCP configs, or other harnesses'
adapters were installed.

## What's here

**Rules** (`rules/ecc/`) — always-loaded standards:
- `common/` — coding style, git workflow, testing, performance, patterns, security
- `typescript/`, `react/`, `web/` — stack-specific extensions of the common rules

**Skills** (`skills/`) — invoked when their trigger conditions match:
- `react-patterns`, `react-performance` — React 18/19 component and performance patterns
- `frontend-a11y` — accessibility patterns for React/Next-style UI
- `seo` — technical SEO, structured data, Core Web Vitals
- `vite-patterns` — Vite config, plugins, env vars, build optimization
- `security-review`, `coding-standards`, `git-workflow`

**Agents** (`agents/`) — specialized subagents for delegation:
- `code-reviewer`, `architect`, `a11y-architect`, `performance-optimizer`,
  `react-reviewer`, `security-reviewer`, `seo-specialist`, `typescript-reviewer`

**Commands** (`commands/`) — slash commands:
- `/code-review`, `/security-scan`, `/react-review`, `/build-fix`

## Project-specific guidance still governs

This repo's `AGENTS.md` and `DESIGN-NORTH-STAR.md` are the authority on
design, content, and editorial direction (oxblood/RRL/Texas Monthly
aesthetic, evidence rules, deployment safety). ECC's rules and skills
cover general engineering practice (TypeScript, React, a11y, SEO,
security, performance) and do not override any project-specific
constraint in `AGENTS.md`.

## Updating

Re-run the copy from a fresh checkout of `affaan-m/ECC` and diff against
this directory; there is no automated sync.
