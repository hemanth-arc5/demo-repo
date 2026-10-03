# Agent Error & Retry

**What it is / where it is used:** Failed steps with retry policy (Temporal, Zapier Replay).

**Why it matters now:** AI agents act on their own, so people need interfaces to watch, steer and approve them.

**Patterns observed:** Backoff countdown, retry, skip.

**What this version adds:** Real exponential backoff timer.

**Run:** open `index.html` in a browser. No build step or dependencies.
