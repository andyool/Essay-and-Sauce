# Essay & Sauce

Practice-exam site for ATAR Modern History (Elective 6: Nazism in Germany).
Live at **https://andyool.github.io/Essay-and-Sauce/**

## What it does

**Students** sign in with their name, a class join code and a 4-digit PIN of their
choice (which protects their work from then on), tick off the syllabus
points they've covered, and the site generates a unique practice exam:

- **Section One — Source Analysis (20 marks):** three constructed sources (a visual,
  a contemporary participant text, and a retrospective academic text) with (a)/(b)/(c)
  questions that follow the WACE verb/skill/mark architecture (3+7 or 4+6, with (c)
  always 10). Answer fields sit under each question.
- **Section Two — Essay (30 marks):** three questions to choose from, sampled across
  frames, strands and eras, with a field to plan and write the essay.

Work autosaves continuously; students can leave and resume any time. After submitting,
they can review their answers next to the marking keys, markers' notes and the fixed
30-mark rubric.

**The teacher** signs in on the Teacher dashboard to create classes and join codes,
watch students type in near-realtime ("Live now"), and open any current or past attempt
with all answers and marking materials.

## How exams are generated

The question bank was authored following the two construction manuals (source analysis
and essay) and lives in `src/data/`:

- `sourceSets1–18.ts` — 72 complete source-analysis sets with marking keys, each with
  1–2 real historical images (Wikimedia Commons, credited)
- `essays1–4.ts` — 85 essay questions (frames E1–E10) with markers' notes
- `syllabus.ts` — the Elective 6 syllabus points used for filtering

`src/lib/generator.ts` assembles an exam per student: only topics they've ticked, a
source set they haven't seen, and an essay trio with three distinct frames, at most one
proposition question, spread across eras and strands, balanced difficulty, and no
collision with the source set's theme.

## Modes

- **Local mode** (before Firebase is set up): everything works on one device;
  a yellow banner reminds you that nothing syncs.
- **Cloud mode**: follow [SETUP.md](SETUP.md) (one-time, ~10 min, free) to enable
  cross-device saving and the live teacher view.

## Development

```bash
npm install
npm run dev       # dev server
npm run build     # type-check + production build
```

Pushing to `main` deploys automatically to GitHub Pages via
`.github/workflows/deploy.yml`.
