# Essay & Sauce

Practice-exam site for ATAR Modern History, Years 11 and 12.
Live at **https://andyool.github.io/Essay-and-Sauce/**

Four electives, one per semester of study:

| Year | Semester 1 | Semester 2 |
| ---- | ---------- | ---------- |
| 11 | Elective 7: Capitalism — the American experience (1901–1941) | Elective 6: Nazism in Germany |
| 12 | Elective 2: Russia and the Soviet Union 1914–45 | Elective 1: The changing European world since 1945 |

Each class has a year level (chosen when the teacher creates it), which decides
the two units its papers draw on.

## What it does

**Students** sign in with their name, a class join code and a 4-digit PIN of their
choice (which protects their work from then on), then build a paper: one unit or
both, and any mix of sections — with one-press presets for the real exams
(Year 11 end-of-year: Nazi Germany sources + essay plus a Capitalism source
analysis, 2½ hours; Year 12: sources + essay from both units, 3 hours). They tick
off the syllabus points they've covered per unit, and the site generates a unique
paper from those topics only:

- **Source Analysis sections (20 marks each):** three constructed sources (a visual,
  a contemporary participant text, and a retrospective academic text) with (a)/(b)/(c)
  questions that follow the WACE verb/skill/mark architecture (3+7 or 4+6, with (c)
  always 10). Answer fields sit under each question.
- **Essay sections (30 marks each):** three questions to choose from, sampled across
  frames, strands and eras, with a field to plan and write the essay.

Work autosaves continuously; students can leave and resume any time. After submitting,
they can review their answers next to the marking keys, markers' notes and the fixed
30-mark rubric.

**The teacher** signs in on the Teacher dashboard to create classes (with year level)
and join codes, watch students type in near-realtime ("Live now"), and open any current
or past attempt to mark it section by section with the clickable marking keys.

## How exams are generated

The question bank was authored following the two construction manuals (source analysis
and essay) and lives in `src/data/`:

- `sourceSets1–18.ts` — 72 Nazism source-analysis sets with marking keys
- `essays1–4.ts` — 85 Nazism essay questions (frames E1–E10) with markers' notes
- `capSourceSets*.ts` / `capEssays*.ts` — Capitalism bank (25 sets, 44 essays)
- `rusSourceSets*.ts` / `rusEssays*.ts` — Russia & USSR bank (22 sets, 39 essays)
- `eurSourceSets*.ts` / `eurEssays*.ts` — Changing European world bank (19 sets, 39 essays)
- `units.ts` — the four electives and their syllabus checklists

Every source set in every unit carries 1–2 real historical images (photographs,
political cartoons and posters from Wikimedia Commons and public archives, credited),
and the validator enforces this.

`src/lib/generator.ts` assembles each section per student: only topics they've ticked,
a source set they haven't seen, and essay trios with three distinct frames, at most one
proposition question, spread across eras and strands, balanced difficulty, and no
collision with the same unit's source-set theme.

## Modes

- **Local mode** (before Firebase is set up): everything works on one device;
  a yellow banner reminds you that nothing syncs.
- **Cloud mode**: follow [SETUP.md](SETUP.md) (one-time, ~10 min, free) to enable
  cross-device saving and the live teacher view.

## Development

```bash
npm install
npm run dev       # dev server
npm run build     # validate bank + type-check + production build
```

Pushing to `main` deploys automatically to GitHub Pages via
`.github/workflows/deploy.yml`.
