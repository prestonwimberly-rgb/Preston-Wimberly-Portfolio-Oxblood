# Superpowers provenance

The following directories under `.claude/skills/` are vendored from
[obra/superpowers](https://github.com/obra/superpowers) (MIT License), a
software-development methodology / process skill library for coding
agents (brainstorming, planning, TDD discipline, debugging, code review,
branch hygiene).

- Source: https://github.com/obra/superpowers
- Version: 6.3.0
- Commit: b36e0829c6d0140e93cfef2ca599b1b07d4a7797
- License: MIT (Copyright (c) 2025 Jesse Vincent) — see `LICENSE-SUPERPOWERS.md`

Unlike ECC (stack-specific patterns and code review), Superpowers is
process/methodology skills — how to approach work, not what the code
should look like. All 14 of upstream's skills are general-purpose (no
stack-specific ones exist to curate around); the curation here is about
which parts of the *process* fit a small, largely solo static site versus
upstream's larger assumptions about teams and long autonomous agent runs.

## What's here

- `brainstorming` — Socratic design refinement before writing code; hard
  gate on implementing before the human approves a stated design. Includes
  an optional local browser "visual companion" for showing mockups
  (off unless invoked; loads a small versioned logo from Prime Radiant's
  site when used — set `SUPERPOWERS_DISABLE_TELEMETRY=1` to disable).
- `systematic-debugging` — 4-phase root-cause process (root-cause-tracing,
  defense-in-depth, condition-based-waiting techniques included).
- `verification-before-completion` — confirm a fix actually works before
  declaring done.
- `test-driven-development` — RED-GREEN-REFACTOR discipline, plus a
  testing-anti-patterns reference.
- `writing-plans` — break approved designs into small, verifiable tasks.
- `executing-plans` — work through a plan in batches with checkpoints.
- `requesting-code-review` / `receiving-code-review` — pre-review
  checklist and how to act on feedback.
- `finishing-a-development-branch` — merge/PR/keep/discard decision
  workflow once tasks are done.
- `using-superpowers` — meta skill explaining how the others compose and
  which takes priority when several apply.

## What was left out, and why

- `using-git-worktrees`, `subagent-driven-development`,
  `dispatching-parallel-agents` — upstream's parallel/multi-agent
  orchestration workflows. Built for larger, longer-running efforts than
  a small solo portfolio site needs; skip unless a change grows into one.
- `writing-skills` — meta-tooling for authoring new Superpowers-style
  skills. Only useful if you want to write custom skills later; not
  needed to use the ones already here.

## No hook installed — one real behavioral note

Upstream ships a `SessionStart` hook (`hooks/hooks.json`) that force-loads
`using-superpowers`' bootstrap at the start of every session, making its
"you MUST invoke a matching skill before any response" framing
mandatory rather than advisory. That hook was **not** installed here —
consistent with the ECC install, which also skipped hooks/MCP configs to
keep this repo's `.claude/` non-invasive. `using-superpowers` is present
as a plain skill, so it (and the others) still get invoked when Claude
Code judges them relevant to the task, but nothing enforces it session-wide.

Your `AGENTS.md` already states user instructions and direct requests
override skills — that ordering holds; nothing here changes it.

## Updating

Re-run the copy from a fresh checkout of `obra/superpowers` and diff
against this directory; there is no automated sync.
