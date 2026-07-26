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
import { CAP_SOURCE_SETS } from './capSourceSets';
import { CAP_SOURCE_SETS_2 } from './capSourceSets2';
import { CAP_SOURCE_SETS_3 } from './capSourceSets3';
import { CAP_SOURCE_SETS_4 } from './capSourceSets4';
import { CAP_SOURCE_SETS_5 } from './capSourceSets5';
import { CAP_ESSAYS } from './capEssays';
import { CAP_ESSAYS_2 } from './capEssays2';
import { CAP_ESSAYS_3 } from './capEssays3';
import { RUS_SOURCE_SETS } from './rusSourceSets';
import { RUS_SOURCE_SETS_2 } from './rusSourceSets2';
import { RUS_SOURCE_SETS_3 } from './rusSourceSets3';
import { RUS_SOURCE_SETS_4 } from './rusSourceSets4';
import { RUS_ESSAYS } from './rusEssays';
import { RUS_ESSAYS_2 } from './rusEssays2';
import { RUS_ESSAYS_3 } from './rusEssays3';
import { EUR_SOURCE_SETS } from './eurSourceSets';
import { EUR_SOURCE_SETS_2 } from './eurSourceSets2';
import { EUR_SOURCE_SETS_3 } from './eurSourceSets3';
import { EUR_SOURCE_SETS_4 } from './eurSourceSets4';
import { EUR_ESSAYS } from './eurEssays';
import { EUR_ESSAYS_2 } from './eurEssays2';
import { EUR_ESSAYS_3 } from './eurEssays3';
import type { EssayQuestion, SourceSet, UnitId } from './types';

const NAZISM_SOURCE_SETS: SourceSet[] = [
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

const NAZISM_ESSAYS: EssayQuestion[] = [...ESSAYS_1, ...ESSAYS_2, ...ESSAYS_3, ...ESSAYS_4];

export const SOURCE_SETS_BY_UNIT: Record<UnitId, SourceSet[]> = {
  capitalism: [...CAP_SOURCE_SETS, ...CAP_SOURCE_SETS_2, ...CAP_SOURCE_SETS_3, ...CAP_SOURCE_SETS_4, ...CAP_SOURCE_SETS_5],
  nazism: NAZISM_SOURCE_SETS,
  russia: [...RUS_SOURCE_SETS, ...RUS_SOURCE_SETS_2, ...RUS_SOURCE_SETS_3, ...RUS_SOURCE_SETS_4],
  europe: [...EUR_SOURCE_SETS, ...EUR_SOURCE_SETS_2, ...EUR_SOURCE_SETS_3, ...EUR_SOURCE_SETS_4],
};

export const ESSAYS_BY_UNIT: Record<UnitId, EssayQuestion[]> = {
  capitalism: [...CAP_ESSAYS, ...CAP_ESSAYS_2, ...CAP_ESSAYS_3],
  nazism: NAZISM_ESSAYS,
  russia: [...RUS_ESSAYS, ...RUS_ESSAYS_2, ...RUS_ESSAYS_3],
  europe: [...EUR_ESSAYS, ...EUR_ESSAYS_2, ...EUR_ESSAYS_3],
};

export const SOURCE_SETS: SourceSet[] = Object.values(SOURCE_SETS_BY_UNIT).flat();
export const ESSAYS: EssayQuestion[] = Object.values(ESSAYS_BY_UNIT).flat();

const sourceSetIndex = new Map(SOURCE_SETS.map((s) => [s.id, s]));
const essayIndex = new Map(ESSAYS.map((e) => [e.id, e]));

export function getSourceSet(id: string): SourceSet | undefined {
  return sourceSetIndex.get(id);
}

export function getEssay(id: string): EssayQuestion | undefined {
  return essayIndex.get(id);
}
