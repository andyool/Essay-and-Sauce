import type { SyllabusPoint, SyllabusPointId } from './types';

export const ELECTIVE_TITLE = 'Elective 6: Nazism in Germany';

export const SYLLABUS: SyllabusPoint[] = [
  {
    id: 'p1',
    short: 'Germany at the end of WWI',
    full: 'The economic, social, political and military circumstances in Germany at the end of World War I',
  },
  {
    id: 'p2',
    short: 'The Weimar Republic and its challenges',
    full: 'The nature of the Weimar Republic and the political, social and economic challenges it faced',
  },
  {
    id: 'p3',
    short: "The Nazi Party's rise to power",
    full: "The reasons for the Nazi Party's rise to power",
    sub: [
      'The Treaty of Versailles',
      'The impact of the Great Depression',
      'The nature of Nazi ideology and hostility to communism',
      'The ability of Hitler and the Nazi Party to utilise popular fears',
      "The Party's organisational and tactical skills",
    ],
  },
  {
    id: 'p4',
    short: 'Key aspects of the Nazi state',
    full: 'The nature and effects of key aspects of the Nazi state',
    sub: [
      'Gleichschaltung (Coordination)',
      'Volksgemeinschaft (People’s Community)',
      'Herrenvolk (Master race)',
    ],
  },
  {
    id: 'p5',
    short: 'Resistance and opposition to the Nazis',
    full: 'The nature and extent of resistance and opposition to the Nazis',
  },
  {
    id: 'p6',
    short: 'Persecution of minorities and the Holocaust',
    full: 'Stages and significance of Nazi policies to exterminate minorities in German-controlled lands and the Holocaust, 1933–1945',
  },
];

// The "role and impact of significant individuals" dot point, split so each
// person can be ticked off separately as the class covers them.
export interface Individual {
  id: SyllabusPointId;
  name: string;
}

export const INDIVIDUALS: Individual[] = [
  { id: 'i-hitler', name: 'Adolf Hitler' },
  { id: 'i-stresemann', name: 'Gustav Stresemann' },
  { id: 'i-hindenburg', name: 'Paul von Hindenburg' },
  { id: 'i-riefenstahl', name: 'Leni Riefenstahl' },
  { id: 'i-krupp', name: 'Alfred Krupp' },
  { id: 'i-goebbels', name: 'Joseph Goebbels' },
  { id: 'i-goering', name: 'Hermann Göring' },
  { id: 'i-himmler', name: 'Heinrich Himmler' },
  { id: 'i-heydrich', name: 'Reinhard Heydrich' },
  { id: 'i-speer', name: 'Albert Speer' },
];

export const INDIVIDUAL_IDS = INDIVIDUALS.map((i) => i.id);

export const ALL_POINT_IDS: SyllabusPointId[] = [
  ...SYLLABUS.map((p) => p.id),
  ...INDIVIDUAL_IDS,
];
