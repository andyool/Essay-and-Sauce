import { SOURCE_SETS_1 } from './sourceSets1';
import { SOURCE_SETS_2 } from './sourceSets2';
import { SOURCE_SETS_3 } from './sourceSets3';
import { SOURCE_SETS_4 } from './sourceSets4';
import { SOURCE_SETS_5 } from './sourceSets5';
import { SOURCE_SETS_6 } from './sourceSets6';
import { SOURCE_SETS_7 } from './sourceSets7';
import { SOURCE_SETS_8 } from './sourceSets8';
import { SOURCE_SETS_9 } from './sourceSets9';
import { SOURCE_SETS_10 } from './sourceSets10';
import { SOURCE_SETS_11 } from './sourceSets11';
import { SOURCE_SETS_12 } from './sourceSets12';
import { SOURCE_SETS_13 } from './sourceSets13';
import { SOURCE_SETS_14 } from './sourceSets14';
import { SOURCE_SETS_15 } from './sourceSets15';
import { SOURCE_SETS_16 } from './sourceSets16';
import { SOURCE_SETS_17 } from './sourceSets17';
import { SOURCE_SETS_18 } from './sourceSets18';
import { ESSAYS_1 } from './essays1';
import { ESSAYS_2 } from './essays2';
import { ESSAYS_3 } from './essays3';
import { ESSAYS_4 } from './essays4';
import type { EssayQuestion, SourceSet } from './types';

export const SOURCE_SETS: SourceSet[] = [
  ...SOURCE_SETS_1,
  ...SOURCE_SETS_2,
  ...SOURCE_SETS_3,
  ...SOURCE_SETS_4,
  ...SOURCE_SETS_5,
  ...SOURCE_SETS_6,
  ...SOURCE_SETS_7,
  ...SOURCE_SETS_8,
  ...SOURCE_SETS_9,
  ...SOURCE_SETS_10,
  ...SOURCE_SETS_11,
  ...SOURCE_SETS_12,
  ...SOURCE_SETS_13,
  ...SOURCE_SETS_14,
  ...SOURCE_SETS_15,
  ...SOURCE_SETS_16,
  ...SOURCE_SETS_17,
  ...SOURCE_SETS_18,
];

export const ESSAYS: EssayQuestion[] = [...ESSAYS_1, ...ESSAYS_2, ...ESSAYS_3, ...ESSAYS_4];

const sourceSetIndex = new Map(SOURCE_SETS.map((s) => [s.id, s]));
const essayIndex = new Map(ESSAYS.map((e) => [e.id, e]));

export function getSourceSet(id: string): SourceSet | undefined {
  return sourceSetIndex.get(id);
}

export function getEssay(id: string): EssayQuestion | undefined {
  return essayIndex.get(id);
}
