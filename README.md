# Design with AI: a repeatable kit

A working method for going from a brief to a tested, accessible, coded prototype with AI, where a person makes every call. It is the process behind [Groundwork](https://github.com/aaditirokade/crm-rethought), packaged so a team can run it on their own project.

**What it gives a team:** the same stages, the same prompts, the same quality bar and the same paper trail on every project, whoever runs it.

## The six stages

Each stage has a prompt template in `prompts/`, something AI produces, and a checkpoint where a person decides. Nothing moves to the next stage without that decision written down.

| Stage | AI does | A person decides | Template |
| --- | --- | --- | --- |
| 1. Research | Interview guide, desk research with every claim linked, synthesis with counted pains | Which problems are real, and which rest on one source | `prompts/01-research.md` |
| 2. Prove it isn't built | Searches for products that already do it, reads their own pages, builds a coverage grid | Where the real gap is, and whether to go on | `prompts/02-competition.md` |
| 3. Structure | Information architecture and wireframes in code, in grayscale | Which flows to build in depth | `prompts/03-structure.md` |
| 4. Directions | Two or three visual directions, built from tokens with contrast checked | Which direction, and what changes in it | `prompts/04-directions.md` |
| 5. Build | The working prototype, one flow at a time, with unit tests on its rules | Every change is read before it goes in | `prompts/05-build.md` |
| 6. Check | Accessibility, phone width, copy and orphan words, plus the test suite | Whether it ships | `prompts/06-check.md` |

## The paper trail

Three files keep the work honest and easy to pick up:

- **Decision records** (`templates/decision.md`): one short file per call, with the options weighed, why, the risk, and when to revisit.
- **Prompt log** (`templates/prompt-log.md`): each prompt, what came back, and the call made.
- **Updates log** (`templates/updates.md`): one line per commit, so anyone can see what changed and when.

## The rules AI follows

`AGENTS.md` holds the standing rules for people and AI assistants alike: label simulated work, nothing from a past employer, WCAG AA in light and dark, log prompts, record decisions. Copy it into the root of a project and edit it there.

## The quality bar, run on every change

- `checks/` holds browser checks: one lists anything wider than a phone screen, one finds lines that end with a single word.
- `test/` sets up unit tests with Node's own test runner and nothing extra to install.
- `.github/workflows/checks.yml` runs the type check, lint and tests on every pull request.

## How to start

1. Copy this folder's `AGENTS.md`, `templates/`, `test/` and `.github/` into your project.
2. Add the scripts from `test/package-scripts.json` to `package.json`.
3. Run stage 1 with `prompts/01-research.md`, fill in the brackets, and record your first decision.

## Where it has been used

- **Groundwork**, an AI tool for account teams: more than 100 decision records, a prompt for every step, and unit tests on the rule that nothing saves without a person. [Repository](https://github.com/aaditirokade/crm-rethought).
- **Morning Crate**, a phone first ordering app: the same build and check stages, with unit tests on its ordering rules.

Made by [Aaditi Rokade](https://aaditirokade.com).
