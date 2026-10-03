# AgentOS: AI Agent UI Template Collection

**Team name:** _add here_ · **Topic:** 4. AI Agents

## Team members
| Name | GitHub | Role | UIs |
|---|---|---|---|
| _add_ | _add_ | Coordinator | |
| _add_ | _add_ | UI developer | |
| _add_ | _add_ | Reviewer | |
| _add_ | _add_ | Tester | |

## Topic research
AI agent products let software plan and act on a user's behalf. The interfaces around them follow a few patterns: status and health views, queues and logs, workflow canvases, and human approval steps. They are common in n8n, Zapier, LangSmith and Datadog, and matter now because agents run unattended and people must stay in control. Each folder's README covers the pattern, where it is used, and what this version adds.

## Implemented UIs
| # | Template |
|---|---|
| 1 | [AI Agent Dashboard](ai-agent-dashboard/index.html) |
| 2 | [AI Agent List](ai-agent-list/index.html) |
| 3 | [AI Agent Profile](ai-agent-profile/index.html) |
| 4 | [Agent Status Monitoring](agent-status-monitoring/index.html) |
| 5 | [Agent Task Queue](agent-task-queue/index.html) |
| 6 | [Agent Activity Log](agent-activity-log/index.html) |
| 7 | [Agent Execution History](agent-execution-history/index.html) |
| 8 | [Agent Execution Timeline](agent-execution-timeline/index.html) |
| 9 | [Agent Workflow](agent-workflow/index.html) |
| 10 | [Agent Builder](agent-builder/index.html) |
| 11 | [Agent Configuration](agent-configuration/index.html) |
| 12 | [Agent Permissions](agent-permissions/index.html) |
| 13 | [Agent Approval Interface](agent-approval-interface/index.html) |
| 14 | [Human-in-the-loop Workflow](human-in-the-loop/index.html) |
| 15 | [Agent Error & Retry](agent-error-retry/index.html) |
| 16 | [Multi-agent Workflow](multi-agent-workflow/index.html) |
| 17 | [Automation Workflow Builder](automation-workflow-builder/index.html) |
| 18 | [Trigger & Action Workflow](trigger-action-workflow/index.html) |

## Technologies
HTML, CSS and JavaScript only. No frameworks. Shared styles in `shared/theme.css`, shared helpers in `shared/core.js`. Responsive, with a dark mode.

## Screenshots
| UI | Desktop | Mobile |
|---|---|---|
| AI Agent Dashboard | ![AI Agent Dashboard desktop](screenshots/ai-agent-dashboard-desktop.png) | ![AI Agent Dashboard mobile](screenshots/ai-agent-dashboard-mobile.png) |
| AI Agent List | ![AI Agent List desktop](screenshots/ai-agent-list-desktop.png) | ![AI Agent List mobile](screenshots/ai-agent-list-mobile.png) |
| AI Agent Profile | ![AI Agent Profile desktop](screenshots/ai-agent-profile-desktop.png) | ![AI Agent Profile mobile](screenshots/ai-agent-profile-mobile.png) |
| Agent Status Monitoring | ![Agent Status Monitoring desktop](screenshots/agent-status-monitoring-desktop.png) | ![Agent Status Monitoring mobile](screenshots/agent-status-monitoring-mobile.png) |
| Agent Task Queue | ![Agent Task Queue desktop](screenshots/agent-task-queue-desktop.png) | ![Agent Task Queue mobile](screenshots/agent-task-queue-mobile.png) |
| Agent Activity Log | ![Agent Activity Log desktop](screenshots/agent-activity-log-desktop.png) | ![Agent Activity Log mobile](screenshots/agent-activity-log-mobile.png) |
| Agent Execution History | ![Agent Execution History desktop](screenshots/agent-execution-history-desktop.png) | ![Agent Execution History mobile](screenshots/agent-execution-history-mobile.png) |
| Agent Execution Timeline | ![Agent Execution Timeline desktop](screenshots/agent-execution-timeline-desktop.png) | ![Agent Execution Timeline mobile](screenshots/agent-execution-timeline-mobile.png) |
| Agent Workflow | ![Agent Workflow desktop](screenshots/agent-workflow-desktop.png) | ![Agent Workflow mobile](screenshots/agent-workflow-mobile.png) |
| Agent Builder | ![Agent Builder desktop](screenshots/agent-builder-desktop.png) | ![Agent Builder mobile](screenshots/agent-builder-mobile.png) |
| Agent Configuration | ![Agent Configuration desktop](screenshots/agent-configuration-desktop.png) | ![Agent Configuration mobile](screenshots/agent-configuration-mobile.png) |
| Agent Permissions | ![Agent Permissions desktop](screenshots/agent-permissions-desktop.png) | ![Agent Permissions mobile](screenshots/agent-permissions-mobile.png) |
| Agent Approval Interface | ![Agent Approval Interface desktop](screenshots/agent-approval-interface-desktop.png) | ![Agent Approval Interface mobile](screenshots/agent-approval-interface-mobile.png) |
| Human-in-the-loop Workflow | ![Human-in-the-loop Workflow desktop](screenshots/human-in-the-loop-desktop.png) | ![Human-in-the-loop Workflow mobile](screenshots/human-in-the-loop-mobile.png) |
| Agent Error & Retry | ![Agent Error & Retry desktop](screenshots/agent-error-retry-desktop.png) | ![Agent Error & Retry mobile](screenshots/agent-error-retry-mobile.png) |
| Multi-agent Workflow | ![Multi-agent Workflow desktop](screenshots/multi-agent-workflow-desktop.png) | ![Multi-agent Workflow mobile](screenshots/multi-agent-workflow-mobile.png) |
| Automation Workflow Builder | ![Automation Workflow Builder desktop](screenshots/automation-workflow-builder-desktop.png) | ![Automation Workflow Builder mobile](screenshots/automation-workflow-builder-mobile.png) |
| Trigger & Action Workflow | ![Trigger & Action Workflow desktop](screenshots/trigger-action-workflow-desktop.png) | ![Trigger & Action Workflow mobile](screenshots/trigger-action-workflow-mobile.png) |

## Code structure
```
shared/theme.css   One stylesheet for colors, layout, components and dark mode
shared/core.js     Helpers used by every page: UI.toast, UI.save/load, UI.esc, $, $$
<ui-name>/
  index.html       Page layout (sidebar, header, content area)
  style.css        Imports the shared theme
  script.js        Data, a draw() function that renders it, and event handlers
  README.md        Research notes for this UI
```
Each `script.js` follows the same pattern: load saved state, define `draw()`, attach event handlers, call `draw()`.

## Run it
Open `index.html` in a modern browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## GitHub workflow
Fork, clone, branch (`feature/<ui-name>`), commit, push, open a Pull Request, review a teammate's PR, then merge. Never commit straight to `main`.
