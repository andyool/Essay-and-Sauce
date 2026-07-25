import type { SyllabusPoint, SyllabusPointId, UnitId } from './types';

// The four electives, one per semester of study. Each unit carries its own
// syllabus checklist; the "significant individuals" dot point (where the
// syllabus has one) is split so each person is individually tickable.

export interface Individual {
  id: SyllabusPointId;
  name: string;
}

export interface Unit {
  id: UnitId;
  /** Full elective label, e.g. for the teacher dashboard. */
  electiveLabel: string;
  /** Mid-length name for headings. */
  name: string;
  /** One-word-ish label for chips and section tabs. */
  short: string;
  year: 11 | 12;
  semester: 1 | 2;
  syllabus: SyllabusPoint[];
  /** The tickable people of the "significant individuals" dot point, when the
   *  unit has one. */
  individuals: Individual[];
  /** Checkbox blurb above the individuals grid. */
  individualsBlurb?: string;
}

// ---------------------------------------------------------------------------
// Elective 7: Capitalism — the American experience (1901–1941) · Year 11, Sem 1
// ---------------------------------------------------------------------------

const CAPITALISM_SYLLABUS: SyllabusPoint[] = [
  {
    id: 'cap-p1',
    short: 'The USA at the start of the 20th century',
    full: 'The political, economic and social situation in the USA at the beginning of the 20th century',
  },
  {
    id: 'cap-p2',
    short: 'Forces that shaped American capitalism',
    full: 'The impact of the following on the American experience of capitalism',
    sub: [
      'Progressivism',
      'Trust busting',
      'World War I',
      'The 1920s',
      'World War II until 1941',
      'The growth of consumerism',
    ],
  },
  {
    id: 'cap-p3',
    short: 'Capitalism and American values',
    full: 'The nature of American capitalism and the shaping of American values',
    sub: [
      'Film and fashion',
      'Prohibition',
      'The ‘Jazz Age’',
      'The Ku Klux Klan',
      'Social Darwinism',
      'The American Dream',
    ],
  },
  {
    id: 'cap-p4',
    short: 'The Great Depression and the New Deal',
    full: 'The Great Depression: its causes; the consequences for different political, economic and social groups; the effectiveness of the political responses, including the New Deal; and the New Deal’s impact on capitalism',
  },
  {
    id: 'cap-p5',
    short: 'Groups within American society',
    full: 'The impact of capitalism on different groups within American society; the aims and beliefs of different groups (for example African Americans, urban workers, rural workers, immigrants, industrialists, members of Indian Nations); and the consequences of divisions into groups',
  },
  {
    id: 'cap-p6',
    short: 'Capitalism as an idea',
    full: 'The significance of capitalism as an idea in this period',
  },
];

const CAPITALISM_INDIVIDUALS: Individual[] = [
  { id: 'cap-i-troosevelt', name: 'Theodore Roosevelt' },
  { id: 'cap-i-taft', name: 'William Taft' },
  { id: 'cap-i-wilson', name: 'Woodrow Wilson' },
  { id: 'cap-i-coolidge', name: 'Calvin Coolidge' },
  { id: 'cap-i-hoover', name: 'Herbert Hoover' },
  { id: 'cap-i-fdr', name: 'F. D. Roosevelt' },
  { id: 'cap-i-rockefeller', name: 'J. D. Rockefeller' },
  { id: 'cap-i-ford', name: 'Henry Ford' },
  { id: 'cap-i-morgan', name: 'J. P. Morgan' },
  { id: 'cap-i-rubinstein', name: 'Helena Rubinstein' },
  { id: 'cap-i-arden', name: 'Elizabeth Arden' },
];

// ---------------------------------------------------------------------------
// Elective 6: Nazism in Germany · Year 11, Sem 2 (the original unit — its
// point ids are unprefixed because saved work already uses them)
// ---------------------------------------------------------------------------

const NAZISM_SYLLABUS: SyllabusPoint[] = [
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

const NAZISM_INDIVIDUALS: Individual[] = [
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

// ---------------------------------------------------------------------------
// Elective 2: Russia and the Soviet Union 1914–45 · Year 12, Sem 1
// ---------------------------------------------------------------------------

const RUSSIA_SYLLABUS: SyllabusPoint[] = [
  {
    id: 'rus-p1',
    short: 'Russia in 1914',
    full: 'The economic, political and social conditions in Russia in 1914',
  },
  {
    id: 'rus-p2',
    short: 'Divisions, WWI and the 1917 revolutions',
    full: 'The internal divisions and crises within Russian society',
    sub: [
      'The impact of World War I',
      'The leadership of Tsar Nicholas II',
      'The causes and events of the February and October Revolutions in 1917, including the leadership of Vladimir Lenin',
    ],
  },
  {
    id: 'rus-p3',
    short: 'The Civil War and the creation of the USSR',
    full: 'The causes, events and outcomes of the Russian Civil War',
    sub: [
      'The initial reforms and decrees of the Bolsheviks',
      'The nature of the opposition',
      'The Treaty of Brest-Litovsk',
      'The leadership of Leon Trotsky',
      'The Red Terror',
      'The creation of the USSR',
    ],
  },
  {
    id: 'rus-p4',
    short: "Stalin's rise to power",
    full: 'The significance of Josef Stalin’s rise to power and the reasons for his success by 1929',
  },
  {
    id: 'rus-p5',
    short: 'Economic transformation to 1945',
    full: 'The economic changes that transformed Russia/USSR to 1945 and the impact on peasants and factory workers',
    sub: [
      'War Communism',
      'The New Economic Policy (NEP)',
      'The Great Turn, collectivisation and the industrialisation of the Soviet Union',
    ],
  },
  {
    id: 'rus-p6',
    short: 'Social impact of communist policies',
    full: 'The social impact of communist policies to 1945 on women, education and the Russian Orthodox Church',
  },
  {
    id: 'rus-p7',
    short: 'Stalinist control of society',
    full: 'The methods employed by the Stalinist regime to control society',
    sub: [
      'Propaganda and the arts',
      'Repression',
      'The Purges',
      'Show Trials',
      'The Great Terror',
    ],
  },
  {
    id: 'rus-p8',
    short: 'Victory in the Great Patriotic War',
    full: 'The factors that enabled the USSR to secure victory in the Great Patriotic War',
  },
  {
    id: 'rus-p9',
    short: 'Significant ideas of the period',
    full: 'The significant ideas of the period, including autocracy, communism, Leninism and Stalinism',
  },
];

// ---------------------------------------------------------------------------
// Elective 1: The changing European world since 1945 · Year 12, Sem 2
// ---------------------------------------------------------------------------

const EUROPE_SYLLABUS: SyllabusPoint[] = [
  {
    id: 'eur-p1',
    short: 'Origins of the Cold War to 1949',
    full: 'The origins and early development of the Cold War to 1949',
    sub: [
      'The ideological and political differences between the United States and the Soviet Union',
      'The emergence of the Communist Bloc',
      'The significance of the Truman Doctrine, the Marshall Plan and the Berlin Blockade',
    ],
  },
  {
    id: 'eur-p2',
    short: 'The Cold War in Europe, 1949–1991',
    full: 'The evolving nature and character of the Cold War in Europe from 1949 through to 1991',
    sub: [
      'The impact of the arms race',
      'The 1956 invasion of Hungary',
      'The Berlin Wall',
      'The Prague Spring and the Brezhnev Doctrine',
      'Détente',
      'The new Cold War of the 1980s',
      'The collapse of the Communist Bloc 1989–91',
      'The break-up of the Soviet Union',
      'The reunification of Germany',
    ],
  },
  {
    id: 'eur-p3',
    short: 'After the Cold War',
    full: 'Significant developments that followed the end of the Cold War',
    sub: [
      'The break-up of the former Yugoslavia',
      'The creation and expansion of the European Union and the Eurozone',
    ],
  },
  {
    id: 'eur-p4',
    short: 'Significant ideas of the period',
    full: 'The significant ideas of the period, including communism, capitalism, democracy, containment, peaceful co-existence, glasnost and perestroika, and nationalism',
  },
  {
    id: 'eur-p5',
    short: 'Significant political leaders',
    full: 'The role of significant political leaders throughout the period',
  },
];

// ---------------------------------------------------------------------------

export const UNITS: Unit[] = [
  {
    id: 'capitalism',
    electiveLabel: 'Elective 7: Capitalism — the American experience (1901–1941)',
    name: 'Capitalism — the American experience',
    short: 'Capitalism',
    year: 11,
    semester: 1,
    syllabus: CAPITALISM_SYLLABUS,
    individuals: CAPITALISM_INDIVIDUALS,
    individualsBlurb:
      'The role and impact of significant individuals in the period — tick each person your class has studied',
  },
  {
    id: 'nazism',
    electiveLabel: 'Elective 6: Nazism in Germany',
    name: 'Nazism in Germany',
    short: 'Nazi Germany',
    year: 11,
    semester: 2,
    syllabus: NAZISM_SYLLABUS,
    individuals: NAZISM_INDIVIDUALS,
    individualsBlurb:
      'The role and impact of significant individuals in Weimar and Nazi Germany — tick each person your class has studied',
  },
  {
    id: 'russia',
    electiveLabel: 'Elective 2: Russia and the Soviet Union 1914–45',
    name: 'Russia and the Soviet Union 1914–45',
    short: 'Russia & USSR',
    year: 12,
    semester: 1,
    syllabus: RUSSIA_SYLLABUS,
    individuals: [],
  },
  {
    id: 'europe',
    electiveLabel: 'Elective 1: The changing European world since 1945',
    name: 'The changing European world since 1945',
    short: 'Europe since 1945',
    year: 12,
    semester: 2,
    syllabus: EUROPE_SYLLABUS,
    individuals: [],
  },
];

const unitIndex = new Map(UNITS.map((u) => [u.id, u]));

export function getUnit(id: UnitId): Unit {
  return unitIndex.get(id)!;
}

/** The two units a class of this year level studies, semester order. */
export function unitsForYear(year: 11 | 12): Unit[] {
  return UNITS.filter((u) => u.year === year).sort((a, b) => a.semester - b.semester);
}

/** Every tickable point id of one unit (dot points + individuals). */
export function unitPointIds(unit: Unit): SyllabusPointId[] {
  return [...unit.syllabus.map((p) => p.id), ...unit.individuals.map((i) => i.id)];
}

export function individualIds(unit: Unit): SyllabusPointId[] {
  return unit.individuals.map((i) => i.id);
}
