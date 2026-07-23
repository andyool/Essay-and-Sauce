import { SOURCE_SETS_1 } from './sourceSets1';
import { SOURCE_SETS_2 } from './sourceSets2';
import { SOURCE_SETS_3 } from './sourceSets3';
import { SOURCE_SETS_4 } from './sourceSets4';
import { SOURCE_SETS_5 } from './sourceSets5';
import { SOURCE_SETS_6 } from './sourceSets6';
import { ESSAYS_1 } from './essays1';
import { ESSAYS_2 } from './essays2';
import { ESSAYS_3 } from './essays3';
import type { EssayQuestion, SourceSet } from './types';

export const SOURCE_SETS: SourceSet[] = [
  ...SOURCE_SETS_1,
  ...SOURCE_SETS_2,
  ...SOURCE_SETS_3,
  ...SOURCE_SETS_4,
  ...SOURCE_SETS_5,
  ...SOURCE_SETS_6,
];

export const ESSAYS: EssayQuestion[] = [...ESSAYS_1, ...ESSAYS_2, ...ESSAYS_3];

const sourceSetIndex = new Map(SOURCE_SETS.map((s) => [s.id, s]));
const essayIndex = new Map(ESSAYS.map((e) => [e.id, e]));

export function getSourceSet(id: string): SourceSet | undefined {
  return sourceSetIndex.get(id);
}

export function getEssay(id: string): EssayQuestion | undefined {
  return essayIndex.get(id);
}
