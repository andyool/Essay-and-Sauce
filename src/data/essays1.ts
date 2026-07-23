import type { EssayQuestion } from './types';

// Essay questions e01–e16: frames E1–E5.

export const ESSAYS_1: EssayQuestion[] = [
  // ---------------- E1 — Evaluate the proposition ----------------
  {
    id: 'e01',
    frame: 'E1',
    strand: 'event',
    era: 'mid',
    demand: 3,
    themes: ['nazi-rise', 'versailles'],
    tags: ['p1', 'p2', 'p3'],
    text: 'Evaluate the proposition that the legacy of the First World War was the most significant factor in the rise of Nazism in Germany.',
    notes:
      'Candidates should test a superlative proposition: that everything the war left behind — defeat, the stab-in-the-back legend, Versailles, a brutalised political culture, economic dislocation — outweighs all later factors. A strong thesis might argue that the war’s legacy was the necessary foundation but required the Depression and elite miscalculation to become sufficient. The case for: the Diktat myth and “November criminals” as standing ammunition; Freikorps violence and paramilitary politics; hyperinflation traceable to war debt; Hitler’s own worldview forged by 1918. The counter-case: the Republic’s survival and Nazi insignificance in 1928 (2.6 per cent); the Depression as the true solvent; Papen, Schleicher and Hindenburg delivering power when the Nazi vote was falling. Historiography: A. J. P. Taylor saw deep continuities in German history; Richard Evans stresses the war’s brutalising legacy; Ian Kershaw emphasises contingency in 1930–33. Responses that narrate 1918–1933 without weighing factors against each other cannot achieve the higher marks. The best conclusions avoid a simple yes/no and argue a nuanced hierarchy of causes.',
  },
  {
    id: 'e02',
    frame: 'E1',
    strand: 'idea',
    era: 'mid',
    demand: 3,
    themes: ['nazi-rise'],
    tags: ['p3'],
    text: 'Evaluate the proposition that fear of communism won more support for the Nazi Party than economic despair by 1933.',
    notes:
      'A comparison proposition: candidates must weigh two drivers of Nazi support against each other, not describe both. Key terms to define: the KPD’s growth (its vote rose at every election 1928–November 1932) and the middle-class, rural and business fear it generated. The case for: electoral analysis shows the Nazi surge came disproportionately from Protestant middle-class and rural voters with property to lose, not from the unemployed, who tended to the KPD; business and elite toleration of Hitler rested on anti-communism; the SA marketed itself as the bulwark against Bolshevism. The counter-case: without the Depression there was no mass audience for either fear or despair; despair drove the collapse of the moderate parties whose voters the Nazis harvested. Historiography: Thomas Childers and Michael Kater on the sociology of the Nazi vote; Richard Evans on the “politics of anxiety”. Candidates may legitimately conclude the two forces were inseparable — despair created the crisis, fear steered its beneficiaries — but must defend a relative judgement. Both sides of the proposition must be addressed with specific evidence.',
  },
  {
    id: 'e03',
    frame: 'E1',
    strand: 'structure',
    era: 'whole',
    demand: 3,
    themes: ['weimar-crises', 'end-of-war'],
    tags: ['p1', 'p2'],
    text: 'Evaluate the proposition that the Weimar Republic was doomed from its foundation.',
    notes:
      'A transformation-denying proposition inviting argument about inevitability. Candidates should define the founding burdens: birth from defeat and revolution, the Ebert–Groener pact and dependence on old elites, the stab-in-the-back legend, Versailles, a constitution with Article 48 and pure proportional representation, and a judiciary, army and civil service inherited hostile. The counter-case is the strongest test of the proposition: survival of 1919–1923 (Kapp Putsch, risings, hyperinflation, the Munich putsch all weathered); the stabilisation and international rehabilitation of 1924–29; the Nazi vote at 2.6 per cent in 1928 — doom required a world depression and specific choices (Brüning’s deflation, Hindenburg’s camarilla) that were not written in 1919. Historiography: Detlev Peukert’s Republic as a crisis-ridden experiment of “classical modernity”; Ian Kershaw and Richard Evans against inevitability; older views (Bracher) stressing structural weakness. For candidates to achieve full marks they must address the whole period and not camp on 1919 or 1933. The strongest conclusions distinguish “heavily burdened” from “doomed”.',
  },
  {
    id: 'e04',
    frame: 'E1',
    strand: 'idea',
    era: 'late',
    demand: 3,
    themes: ['volksgemeinschaft', 'resistance', 'propaganda'],
    tags: ['p4', 'p5'],
    text: 'Evaluate the proposition that the Nazi regime rested on popular consent rather than terror in the years 1933 to 1939.',
    notes:
      'A comparison proposition on the regime’s foundations. Define both terms: consent (electoral support, the Führer myth, acclaim for economic recovery and foreign-policy success, participation in Party organisations) and terror (the camps, Gestapo, People’s Court, the destruction of the left in 1933–34). The case for consent: the Hitler myth swelling with the Rhineland, Austria and full employment; Gestapo staffing so thin it depended on denunciation from below; SOPADE reports conceding the regime’s popularity among the young. The case for terror: consent was manufactured after opposition structures were physically destroyed; the visible price of dissent disciplined behaviour even where belief was absent; for the excluded — Jews, the left, “community aliens” — there was no consent, only force. Historiography: Robert Gellately on self-policing consent; Ian Kershaw on the Hitler myth; Richard Evans insisting coercion framed all “consent”. As a proposition question, evidence on both sides is required for the higher marks. Strong conclusions argue the two were mutually constitutive rather than alternatives.',
  },

  // ---------------- E2 — Debate the proposition ----------------
  {
    id: 'e05',
    frame: 'E2',
    strand: 'event',
    era: 'mid',
    demand: 3,
    themes: ['versailles', 'weimar-crises'],
    tags: ['p1', 'p2'],
    text: 'Debate the proposition that the Treaty of Versailles played only a minor role in the failure of the Weimar Republic.',
    notes:
      'As this is a debate question, for candidates to gain the higher marks, they must address evidence that both supports and refutes this claim. Supporting the claim: the treaty’s material burden was manageable (reparations actually paid were a fraction of the headline sum — Sally Marks’ argument); the Republic stabilised and prospered 1924–29 with the treaty in force; the fatal crisis came from the Depression and domestic intrigue, and the treaty was already being revised (Locarno, the Young Plan, reparations effectively ended at Lausanne 1932 — before Hitler took power). Refuting it: Versailles delegitimised the Republic at birth, fused democracy with national humiliation, armed every nationalist attack (“November criminals”), motivated the Kapp Putsch and the Ruhr crisis with its hyperinflation, and gave Nazi propaganda its master theme. Historiography: Marks and Margaret MacMillan against the “Carthaginian peace” myth; Richard Evans on the treaty’s poisonous political legacy. The strongest responses distinguish material burden (arguably minor) from political-psychological damage (major), and reach a defended verdict rather than a split difference.',
  },
  {
    id: 'e06',
    frame: 'E2',
    strand: 'event',
    era: 'late',
    demand: 2,
    themes: ['gleichschaltung'],
    tags: ['p4'],
    text: 'Debate the proposition that the Reichstag Fire was a significant turning point in the Nazi consolidation of power.',
    notes:
      'As this is a debate question, for candidates to gain the higher marks, they must address evidence that both supports and refutes this claim. Supporting: the fire (27 February 1933) produced the Reichstag Fire Decree the next day, suspending civil liberties for the duration of the regime, licensing mass arrests of Communists, and framing the terror-charged election of 5 March; it converted Hitler’s chancellorship into emergency rule. Refuting: the decree only accelerated a course already set — the coalition of January 1933, SA violence already unleashed, and the Enabling Act (needing Centre Party votes, not the fire) as the real legal foundation; consolidation was a process of many steps (party bans, union destruction, the Night of the Long Knives, Hindenburg’s death) of which no single one was decisive. Historiography: Richard Evans treats the decree as the dictatorship’s charter; Ian Kershaw stresses cumulative process over single turning points. Candidates who narrate February–March 1933 without weighing “turning point” against “one step among many” cannot reach the higher marks.',
  },

  // ---------------- E3 — Assess the extent of responsibility ----------------
  {
    id: 'e07',
    frame: 'E3',
    strand: 'structure',
    era: 'mid',
    demand: 2,
    themes: ['weimar-crises'],
    tags: ['p2', 'p3'],
    text: 'Assess the extent to which the weaknesses of the Weimar constitution were responsible for the collapse of German democracy by 1933.',
    notes:
      'The phrase “the extent to which” licenses a graded verdict and obliges candidates to weigh the constitution against other factors. Constitutional case: Article 48 allowed presidential rule that normalised government without the Reichstag from 1930; pure proportional representation produced fragmented coalitions (no majority government after 1930); the president’s powers made Hindenburg’s circle the arbiter of power; plebiscitary elements kept anti-democratic mobilisation legal. Counter-factors: the constitution operated adequately until 1929 — it was the Depression, elite hostility, the parties’ own failures (the SPD–Bourgeois split over unemployment insurance that broke the Grand Coalition), and deliberate choices by Hindenburg, Papen and Schleicher that turned provisions into weapons. Historiography: Bracher on structural flaws; Kershaw and Evans on human agency — “the constitution did not appoint Hitler; Hindenburg did.” Strong responses distinguish permissive conditions from causes, and conclude with a graded verdict (e.g. partially responsible: the constitution loaded the gun others chose to fire).',
  },
  {
    id: 'e08',
    frame: 'E3',
    strand: 'event',
    era: 'mid',
    demand: 2,
    themes: ['nazi-rise'],
    tags: ['p2', 'p3'],
    text: 'Assess the extent to which the Great Depression was responsible for the Nazi Party’s electoral breakthrough between 1929 and 1933.',
    notes:
      'Candidates must weigh the Depression against other contributing factors, with a graded verdict. The case: six million unemployed by 1932; the collapse of Müller’s Grand Coalition (March 1930) over its costs; Brüning’s deflation deepening misery; the Nazi vote rising with the slump (2.6 per cent in 1928, 18.3 in 1930, 37.3 in July 1932); the radicalisation of a terrified middle class and countryside. Counter-factors: the Party’s pre-existing machinery, propaganda apparatus and Hitler’s leadership cult, built 1925–28, positioned it to harvest the crisis while rivals could not; the ideological reservoir of nationalism, Versailles resentment and anti-communism; and the ceiling of the electoral road — the vote fell in November 1932, and it took elite intrigue to convert votes into office. Historiography: Childers on who actually voted Nazi; Kershaw on the Depression as necessary but not sufficient. Responses that focus on a narrative of suffering will be unable to articulate a sufficient argument; the discriminating work is in the counter-factors.',
  },
  {
    id: 'e09',
    frame: 'E3',
    strand: 'structure',
    era: 'late',
    demand: 2,
    themes: ['resistance', 'volksgemeinschaft'],
    tags: ['p4', 'p5'],
    text: 'Assess the extent to which terror and repression were responsible for the absence of widespread resistance to the Nazi regime.',
    notes:
      'A graded verdict is required: how far does terror explain quiescence, and what else must? The case: the first eighteen months destroyed every organisational base of opposition (parties, unions, press); the camps, Gestapo and People’s Court made the price of dissent visible and familial; “protective custody” numbers and the 1933 terror wave. Counter-factors: substantial genuine consent — economic recovery, foreign-policy triumphs, the Führer myth; the regime’s care to ride popular opinion (retreat over church struggles, secrecy over “euthanasia” until Galen’s protest); the thinness of the Gestapo and its dependence on voluntary denunciation; the divisions and isolation of opponents from one another. Historiography: Gellately on denunciation and consent; Peukert on everyday nonconformity; Hans Mommsen on the structural isolation of resistance. Candidates should engage with the range of resistance that did occur (left networks, church protest, youth dissent, 20 July 1944) as the test of what suppressed the rest. The strongest conclusions argue terror and consent operated as a system, then still assign relative weight.',
  },

  // ---------------- E4 — Assess the relative importance of causes ----------------
  {
    id: 'e10',
    frame: 'E4',
    strand: 'structure',
    era: 'mid',
    demand: 2,
    themes: ['weimar-crises'],
    tags: ['p2', 'p3'],
    text: 'Assess the relative importance of the factors that caused the failure of the Weimar Republic.',
    notes:
      '“Relative importance” is the operative phrase: description of each cause is not enough — causes must be weighed against each other, with a hierarchy defended. Candidates should marshal the standard multi-causal field: the founding burdens (defeat, Versailles, the stab-in-the-back legend); structural weaknesses (Article 48, proportional representation, hostile elites in army, judiciary and bureaucracy); chronic economic vulnerability (inflation 1923, dependence on American credit, Depression from 1929); the behaviour of the parties (KPD–SPD enmity, the flight of the middle-class parties); and the agency of individuals (Hindenburg’s camarilla, Papen’s “taming” miscalculation, Hitler’s tactical skill). A reliable discriminator is the distinction between long-term burdens, without which the crisis lacked its explosive charge, and the short-term triggers of 1930–33, without which the burdens need not have been fatal. Historiography: Bracher (structure) against Kershaw and Evans (contingency and choice); Peukert on the Depression as the crisis of a whole model of modernity. Best used evidence includes election statistics 1928–1932 and the chancellorship sequence Brüning–Papen–Schleicher. A ranked, defended hierarchy separates the top band from a survey.',
  },
  {
    id: 'e11',
    frame: 'E4',
    strand: 'event',
    era: 'mid',
    demand: 2,
    themes: ['nazi-rise'],
    tags: ['p3'],
    text: 'Assess the relative importance of the factors that enabled Hitler to become Chancellor of Germany in January 1933.',
    notes:
      'A ranking question on the specific outcome of 30 January 1933 — not the rise of Nazism generally. The factor field: mass electoral support (the largest party from July 1932, though declining by November); the Depression and the failure of successive presidential governments; elite intrigue — Papen’s ambition to “hire” Hitler, Schleicher’s fall, Hindenburg’s reversal, pressure from landowners, business and army circles; the fear of communism that made a Hitler cabinet thinkable to conservatives; and Hitler’s own tactical nerve (holding out for the chancellorship through the November 1932 setback and the Strasser crisis). Candidates must weigh: votes made Hitler available, but only the backstairs deal made him Chancellor — or conversely, no intrigue could have installed a fringe politician without mass backing. Historiography: Kershaw’s verdict that Hitler was “jobbed into office by a backstairs intrigue”; Bullock on the underestimation by the “old gang”. Responses that end the analysis at electoral success, or that narrate January 1933 day by day, will not achieve the higher marks. The hierarchy must be explicit and defended.',
  },

  // ---------------- E5 — Analyse the significance ----------------
  {
    id: 'e12',
    frame: 'E5',
    strand: 'event',
    era: 'early',
    demand: 1,
    themes: ['weimar-crises'],
    tags: ['p2'],
    text: 'Analyse the significance of the hyperinflation crisis of 1923 to the fortunes of the Weimar Republic in the 1920s.',
    notes:
      'Significance questions demand continuous linkage between the crisis and the Republic’s fortunes — a narrative of wheelbarrows caps out. Dimensions of significance: the destruction of middle-class savings and the lasting alienation of natural republican constituencies; the discrediting of the Republic’s competence; the opportunity it gave extremists (the Munich putsch of November 1923); but also the productive shock — Stresemann’s hundred days, the Rentenmark, the Dawes Plan and the stabilised later 1920s that the crisis made possible. Candidates may conclude that the crisis was highly significant, or that other elements (Versailles, the Depression) mattered more to the Republic’s fortunes, and should provide reasoning. A common trap: writing only about the most famous consequence (ruined savers) will not achieve the higher marks — the recovery side of the ledger and the long-term psychological legacy (the fear of inflation shaping Brüning’s fatal deflation after 1929) belong in the analysis. Historiography: Evans on the middle-class trauma; economic historians on winners (debtors, industrialists) as well as losers.',
  },
  {
    id: 'e13',
    frame: 'E5',
    strand: 'event',
    era: 'late',
    demand: 1,
    themes: ['gleichschaltung'],
    tags: ['p4'],
    text: 'Analyse the significance of the Enabling Act of March 1933 to the establishment of the Nazi dictatorship.',
    notes:
      'The linkage required is between the Act and the dictatorship’s establishment — not a narrative of March 1933. Significance: the Act (24 March 1933) transferred legislative power to the government for four years, ending the Reichstag as a lawmaking body, giving the dictatorship legal form, satisfying the civil service’s craving for legality, and enabling every subsequent measure of Gleichschaltung without new emergency decrees. Qualifications candidates should weigh: the Act was won by prior illegality — the Fire Decree, arrested KPD deputies, SA intimidation, and the Centre Party’s capitulation — and the dictatorship rested equally on terror, the destruction of parties and unions, and after August 1934 the Führer’s merged presidency and army oath. Candidates may conclude the Act was the keystone of “legal revolution”, or that it ratified a seizure already accomplished on the streets; both are legitimate with reasoning. Historiography: Bracher’s “legal revolution”; Evans on the pseudo-legality that reconciled elites. Writing only about the Act’s most famous feature (rule by decree) without the surrounding machinery will not reach the higher marks.',
  },
  {
    id: 'e14',
    frame: 'E5',
    strand: 'group',
    era: 'mid',
    demand: 2,
    themes: ['nazi-rise'],
    tags: ['p3'],
    text: 'Analyse the significance of the SA (Sturmabteilung) to the rise of the Nazi Party to 1934.',
    notes:
      'Continuous linkage between the SA and the Party’s rise is required. Dimensions: the SA as the Party’s street presence and propaganda in uniform — meetings protected, opponents beaten, the image of order-through-strength projected amid chaos; its role in the “battle for the streets” against the Red Front, feeding the civil-war atmosphere from which the Party profited; its scale (bigger than the army by 1932) as a bargaining weight with elites; and after January 1933 its terror as the engine of the seizure of power. The counter-side: the SA as liability — the violence that alarmed respectable voters (its excesses after mid-1932 arguably cost votes), Röhm’s “second revolution” threatening the army alliance, resolved only by the purge of 30 June 1934, which itself cemented Hitler’s power in a different register. Candidates may conclude the SA was indispensable to the rise yet incompatible with consolidated power, and should trace that arc rather than describe the organisation. Historiography: Evans on SA violence as constitutive of Nazi politics; Kershaw on the purge as the regime’s founding crime accepted by the elites.',
  },
  {
    id: 'e15',
    frame: 'E5',
    strand: 'structure',
    era: 'late',
    demand: 2,
    themes: ['propaganda'],
    tags: ['p4'],
    text: 'Analyse the significance of propaganda to the consolidation of Nazi power between 1933 and 1939.',
    notes:
      'The essay must link propaganda continuously to consolidation — a catalogue of posters and rallies caps out. Machinery: Goebbels’ ministry (March 1933), Gleichschaltung of press and radio, the Volksempfänger, film, the ritual calendar (Nuremberg, 9 November), the 1936 Olympics. Mechanisms of significance: the Führer myth binding loyalty above the Party; plebiscites manufacturing acclamation; the naturalisation of exclusion (the “community alien”); the claiming of successes (employment, Rhineland, Anschluss) as the leader’s genius. The essential counterweight: propaganda’s dependence on real success and existing belief — where it fought experience (church struggle, the 1933 boycott) it stalled, as the regime’s own opinion reports conceded; and consolidation rested equally on terror and on material recovery. Candidates may conclude propaganda was highly significant as the regime’s integrative instrument, or that it was the varnish on coercion and performance; either verdict needs reasoning against the alternative. Historiography: Kershaw’s Hitler myth as propaganda’s supreme achievement; Welch on its limits; Evans on the interplay of consent and coercion.',
  },
  {
    id: 'e16',
    frame: 'E5',
    strand: 'event',
    era: 'early',
    demand: 2,
    themes: ['end-of-war'],
    tags: ['p1', 'p2'],
    text: 'Analyse the significance of the German Revolution of 1918–1919 to the political stability of the Weimar Republic.',
    notes:
      'Linkage between the revolution and later (in)stability is the whole task. Dimensions: the revolution delivered the Republic (abdication, 9 November, the armistice signed by civilians) but in a form that satisfied no one — too radical for the right, a betrayal for the revolutionary left after the Ebert–Groener pact and the Freikorps suppression of the Spartacists (January 1919) and the Munich Räterepublik; the resulting SPD–KPD blood feud crippled democratic defence against Nazism to the end; the old elites (army, judiciary, bureaucracy, estates) survived untouched, embedding an anti-republican establishment inside the state; and the stab-in-the-back legend fused revolution with treason in nationalist memory. Candidates may conclude the “incomplete revolution” was profoundly significant for instability, or weigh it against Versailles and economic shocks as the greater burdens; reasoning is required either way. Historiography: the classic thesis of the “betrayed revolution” (Rürup, Kolb) against more recent stress on the narrow options of 1918–19 (Bessel, Evans). Purely narrating November 1918 will not achieve the higher marks.',
  },
];
