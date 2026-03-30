# /docs — Auto-generated Work Logs

This folder is maintained automatically by the `session-log` GitHub Actions workflow.
Do not edit files here by hand — they will be overwritten on the next push.

## Structure

```
docs/
├── SESSIONS.md                   ← index of every session, newest at bottom
├── session-logs/
│   └── YYYY-MM-DD.md             ← human-readable narrative for each day
└── archive/
    └── YYYY-MM-DD/               ← verbatim source-file snapshots for each day
        ├── index.html
        ├── main.js
        ├── car-hero-selector-main.js
        ├── car-hero-selector-style.css
        └── …
```

## Session Log Format

Each `session-logs/YYYY-MM-DD.md` contains:

| Section | Contents |
|---------|----------|
| **Commits This Session** | Every git commit hash + message for that push |
| **Files Changed** | `git diff --stat` summary |
| **What Was Built** | Plain-English bullets of what was added/changed |
| **What Worked Well** | Wins, confirmed decisions, things that landed first try |
| **Points of Friction** | Bugs, rework, or multi-attempt fixes |
| **Session Summary** | 2–4 sentence brief for quick reference |
| **Code Archive** | Link to the verbatim snapshot folder |

## Enabling AI Narratives

Add your Anthropic API key as a repository secret named `ANTHROPIC_API_KEY`:

> **Settings → Secrets and variables → Actions → New repository secret**

Without the key the workflow still runs and produces a structured log from git
data alone — it just won't include the AI-written narrative sections.
