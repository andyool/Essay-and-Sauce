import type { EssayQuestion } from './types';

// Essay questions for Elective 1: The changing European world since 1945.
// Ids eur-e01…

export const EUR_ESSAYS: EssayQuestion[] = [
  // ---------------- E1 — Evaluate the proposition ----------------
  {
    id: 'eur-e01',
    frame: 'E1',
    strand: 'event',
    era: 'early',
    demand: 3,
    themes: ['eur-origins'],
    tags: ['eur-p1'],
    text: 'Evaluate the proposition that the Soviet Union was primarily responsible for the outbreak of the Cold War in the years 1945 to 1949.',
    notes:
      'The classic origins debate as a proposition. The case for: Soviet conduct in the liberated east — rigged elections and salami tactics in Poland, Romania, Hungary and Bulgaria despite the Yalta Declaration; the refusal of Marshall aid for the whole bloc; the Prague coup of February 1948; the Berlin blockade as the first direct confrontation; and the ideological premise (Stalin’s February 1946 election speech; Zhdanov’s two camps) that conflict with capitalism was ultimately inevitable. The counter-case: American power and policy — the atomic monopoly used as diplomatic weight, the abrupt end of Lend-Lease, the Truman Doctrine’s globalising rhetoric and the Marshall Plan read from Moscow as economic offensive; Soviet security claims after two invasions through Poland were not irrational; and the security-dilemma reading (Gaddis before the archives; Leffler) in which each defensive step appeared offensive to the other. Historiography must be engaged: orthodox, revisionist (Williams), post-revisionist, and Gaddis’s post-archive return of responsibility toward Stalin. Strong answers reach a weighted verdict rather than “both sides”, and use 1945–49 chronology precisely.',
  },
  {
    id: 'eur-e02',
    frame: 'E1',
    strand: 'person',
    era: 'late',
    demand: 3,
    themes: ['eur-collapse'],
    tags: ['eur-p2'],
    text: 'Evaluate the proposition that the collapse of the Communist Bloc between 1989 and 1991 was primarily the achievement of Mikhail Gorbachev.',
    notes:
      'Candidates must weigh the leader against the system and the peoples. The case for: Gorbachev’s renunciation of the Brezhnev Doctrine (the UN speech of December 1988; the “Sinatra Doctrine”) removed the pillar of force on which the bloc rested; glasnost delegitimised the regimes’ founding myths; his refusal to sanction repression in 1989 (Leipzig, the Wall) made the peaceful cascade possible; and his choices were not forced — a Chinese solution was available and was chosen in Beijing that same June. The counter-case: systemic exhaustion — economic stagnation, the oil price collapse, the arms race burden, Chernobyl — left reform no resources; the peoples made the revolutions (Solidarity’s decade of resistance, the Leipzig marchers, Hungarian reformers cutting the wire); western pressure (Reagan’s build-up, SDI, Helsinki’s human-rights lever and Charter 77/John Paul II) shaped the environment; and Gorbachev intended none of it — he sought to save the union and socialism, and lost both, which complicates “achievement”. Historiography: Brown (Gorbachev decisive), Kotkin (systemic), Sarotte on 1989’s contingency. A defended verdict on “primarily” is required.',
  },

  // ---------------- E2 — Debate the proposition ----------------
  {
    id: 'eur-e03',
    frame: 'E2',
    strand: 'structure',
    era: 'mid',
    demand: 3,
    themes: ['eur-berlin'],
    tags: ['eur-p2'],
    text: 'Debate the proposition that the arms race stabilised rather than endangered Europe during the Cold War.',
    notes:
      'As this is a debate question, for candidates to gain the higher marks they must address evidence that both supports and refutes the claim. Supporting: the deterrence argument — no war between the blocs in Europe for forty years despite repeated crises; mutual assured destruction disciplining every confrontation (Berlin 1961 resolved by wall, not war; both sides backing down at Checkpoint Charlie); the “long peace” thesis (Gaddis); arms control as a channel of dialogue (test ban 1963, SALT, INF) institutionalising restraint. Refuting: the near misses — Cuba above all, but also Able Archer 1983, when Soviet leaders half-believed a NATO exercise masked attack; accidents and false alarms (Petrov 1983); the economic distortion of both blocs and the Soviet Union’s eventual exhaustion; the terror lived by European populations (protest movements, CND, the euromissile crisis of the early 1980s); and the argument that peace held despite the weapons, through spheres of influence and luck. Strong answers distinguish periods (the unstable early race versus mature deterrence), engage the counterfactual honestly, and reach a defended verdict.',
  },

  // ---------------- E3 — Assess the extent ----------------
  {
    id: 'eur-e04',
    frame: 'E3',
    strand: 'event',
    era: 'early',
    demand: 2,
    themes: ['eur-origins'],
    tags: ['eur-p1'],
    text: 'Assess the extent to which the Truman Doctrine and the Marshall Plan were responsible for the division of Europe by 1949.',
    notes:
      'An extent question requiring these two policies to be weighed against other forces of division. The case for their responsibility: the Doctrine (March 1947) declared a world of two ways of life and committed America to containment; the Marshall Plan (announced June 1947) forced every European state to choose — Moscow’s refusal, imposed also on Czechoslovakia and Poland, drew the economic frontier; the Soviet ripostes (Cominform, September 1947; the consolidation of the bloc; the Prague coup; the blockade) followed directly; and Bizonia plus the June 1948 currency reform — Marshall logic applied to Germany — triggered the final split. The counter-case: the division was already forming — Soviet fait accompli in the east from 1945, the failure of the Council of Foreign Ministers, Kennan’s containment already framed in February 1946; and the deeper causes (incompatible security requirements, ideology) would have divided Europe through some other sequence. Strong answers handle chronology with precision, treat the policies as accelerant versus cause, and reach a proportionate judgement.',
  },
  {
    id: 'eur-e05',
    frame: 'E3',
    strand: 'structure',
    era: 'late',
    demand: 2,
    themes: ['eur-newworld'],
    tags: ['eur-p3'],
    text: 'Assess the extent to which the European Union succeeded in building a united and stable Europe in the decades after 1991.',
    notes:
      'Candidates should set criteria (unity, stability, prosperity, security) and assess against the record. Successes: the single market and the euro (1999–2002); the 2004–07 enlargement anchoring ten ex-communist states in democracy and law — accession conditionality as the great stabiliser; the Franco-German core making war among members unthinkable; peaceful absorption of German reunification. Limits and failures: impotence in Yugoslavia — “the hour of Europe” followed by Srebrenica, with American power needed at Dayton (1995) and Kosovo (1999); the eurozone crisis after 2009 exposing the currency’s design flaws and dividing north from south; democratic backsliding inside the union (Hungary, Poland) that conditionality could not reverse after accession; the failed constitution (2005) and the gap between elite project and popular consent; Russia outside the system and increasingly hostile. Strong answers avoid a catalogue: they argue a thesis — e.g. the EU succeeded where its instrument (membership and its incentives) could reach, and failed where hard power or fiscal union was required — and support it across the period.',
  },

  // ---------------- E4 — Relative importance of factors ----------------
  {
    id: 'eur-e06',
    frame: 'E4',
    strand: 'event',
    era: 'early',
    demand: 3,
    themes: ['eur-origins'],
    tags: ['eur-p1'],
    text: 'Assess the relative importance of the factors that caused the Cold War in Europe in the years 1945 to 1949.',
    notes:
      'Ranking is the discipline: candidates must weigh factors against each other. Factors to marshal: ideological incompatibility (Marxism-Leninism’s expectation of conflict; American liberal universalism); the security vacuum of 1945 — Germany broken, Britain exhausted, two superpowers face to face across a devastated continent; Soviet actions (Poland, the east, the blockade) and western responses (Doctrine, Plan, NATO) in their action–reaction spiral; the atomic factor (monopoly then race); personalities — Stalin’s pathological distrust (Kennan: “neurotic view of world affairs”), Truman’s directness versus Roosevelt’s ambiguity; and misperception — each side reading defence as offence. Historiographical positioning is expected: orthodox (Soviet expansionism), revisionist (American economic empire), post-revisionist synthesis, post-archive weighting (Gaddis: “as long as Stalin was running the Soviet Union a cold war was unavoidable”). The strongest answers argue an explicit hierarchy — e.g. structural vacuum as precondition, ideology as lens, Stalin’s conduct as trigger — and defend it against alternatives rather than listing.',
  },

  // ---------------- E5 — Analyse the significance ----------------
  {
    id: 'eur-e07',
    frame: 'E5',
    strand: 'event',
    era: 'early',
    demand: 2,
    themes: ['eur-origins', 'eur-berlin'],
    tags: ['eur-p1'],
    text: 'Analyse the significance of the Berlin Blockade of 1948–49 to the development of the Cold War in Europe.',
    notes:
      'Significance in several registers. Immediate: the first direct superpower confrontation — Stalin’s attempt to force the West out of Berlin (or abort the West German state) answered by the airlift (up to 8,000 tons a day at peak; 2.3 million tons in all) rather than armed convoy, establishing that the Cold War would be fought by pressure short of war. Structural consequences: the blockade completed what it tried to prevent — the Federal Republic and the GDR both founded in 1949, and NATO (April 1949) created with the airlift as its recruiting poster; West Berlin transformed from occupation zone to symbol of freedom, with consequences running to 1961 and 1989. Doctrinal: containment vindicated in its first great test; the pattern of crisis management — firmness plus restraint on both sides (Stalin never interfered with the air corridors) — set for Korea-era Europe. Longer view: Germany’s division stabilised as the Cold War’s centre of gravity. Strong answers analyse rather than narrate, connect the blockade forward through the period, and weigh it against other candidate turning points (1947’s twin policies; 1949’s Soviet bomb).',
  },
  {
    id: 'eur-e08',
    frame: 'E5',
    strand: 'event',
    era: 'mid',
    demand: 2,
    themes: ['eur-prague'],
    tags: ['eur-p2'],
    text: 'Analyse the significance of the Prague Spring and its suppression in 1968 to the history of the Communist Bloc.',
    notes:
      'Candidates should analyse significance beyond the events. For the bloc: the Brezhnev Doctrine codified limited sovereignty — the empire’s constitution written openly — freezing reform for two decades and binding every satellite regime to Moscow’s guarantee; “normalisation” in Czechoslovakia (half a million purged) modelled the price of experiment. For communist belief: 1968 killed reform communism as a living faith — after Prague, the question was not how to improve the system but how to survive or escape it; dissent turned from revisionism to human rights (Charter 77, Helsinki monitoring) — a change of weapon that proved decisive after 1975. Internationally: Eurocommunism’s break with Moscow; the paradox that détente proceeded within months, teaching the bloc’s peoples that the West accepted the status quo. The long echo: Gorbachev’s generation (he was 37 in 1968) drew the lesson that reform delayed becomes collapse — and his renunciation of the doctrine in 1988–89 unwound exactly what 1968 had locked. Strong answers argue this arc explicitly rather than narrating the invasion.',
  },

  // ---------------- E6 — Examine ----------------
  {
    id: 'eur-e09',
    frame: 'E6',
    strand: 'structure',
    era: 'mid',
    demand: 2,
    themes: ['eur-hungary', 'eur-prague'],
    tags: ['eur-p2'],
    text: 'Examine the nature and effects of Soviet control over eastern Europe in the years 1949 to 1989.',
    notes:
      'The organising discipline is nature (instruments) and effects (consequences), across the whole span. Instruments: the local parties and their police apparatus, Soviet garrisons, the Warsaw Pact (1955) and Comecon binding armies and economies, show trials and purges in the Stalin years, and armed intervention at the limit — Berlin 1953, Hungary 1956, Czechoslovakia 1968 — with the Brezhnev Doctrine as its theory; softer instruments after Stalin: subsidised energy, tolerated national variations (Kádár’s goulash communism, Polish agriculture never collectivised, Romania’s maverick foreign policy). Effects: economic distortion and relative decline visible by the 1970s (hard-currency debt in Poland and Hungary); recurrent crises — 1956, 1968, 1970 and 1980–81 in Poland (Solidarity and martial law); societies that outwardly conformed and inwardly withdrew (the “as if” culture, dissent from Charter 77 to the Church in Poland); and the hollowness revealed in 1989, when control evaporated the moment force was withdrawn. Strong answers periodise (Stalinist terror → post-1956 bargain → late stagnation), differentiate between countries, and connect nature to effects analytically.',
  },
  {
    id: 'eur-e10',
    frame: 'E6',
    strand: 'event',
    era: 'late',
    demand: 2,
    themes: ['eur-newworld'],
    tags: ['eur-p3'],
    text: 'Examine the causes and consequences of the break-up of Yugoslavia in the 1990s.',
    notes:
      'Causes: the death of Tito (1980) removing the arbiter; the 1974 constitution’s weak federation; the economic crisis and IMF austerity of the 1980s dissolving the regime’s legitimacy; Milošević’s capture of Serbian nationalism (Kosovo Polje 1987, the anti-bureaucratic revolution) and Tudjman’s answering Croatian nationalism; the end of the Cold War removing Yugoslavia’s strategic value and the discipline of the blocs; and the contested recognition of Slovenian, Croatian and Bosnian independence (1991–92). Consequences: the wars — Slovenia’s ten days, Croatia (Vukovar, the Krajina), Bosnia 1992–95 with siege, ethnic cleansing and Srebrenica (some 100,000 dead in Bosnia; around 8,000 murdered at Srebrenica), Kosovo 1999 and NATO’s air war; Dayton’s frozen architecture; the ICTY and the precedent of international criminal justice for European perpetrators; Europe’s demonstrated impotence and the lesson built into EU and NATO enlargement; and the region’s long limbo between accession promises and unresolved statehood. Strong answers connect causes to consequences analytically and use the Yugoslav case to illuminate the syllabus’s wider theme: nationalism as the successor ideology to communism.',
  },

  // ---------------- E7 — Evaluate the consequences ----------------
  {
    id: 'eur-e11',
    frame: 'E7',
    strand: 'event',
    era: 'late',
    demand: 2,
    themes: ['eur-collapse', 'eur-newworld'],
    tags: ['eur-p2', 'eur-p3'],
    text: 'Evaluate the consequences of the collapse of the Communist Bloc for Europe in the decade after 1989.',
    notes:
      'Candidates should evaluate — rank and weigh — consequences, not merely list them. Political: German reunification (October 1990) inside NATO and the EU — the German question answered; the velvet divorce; democratisation across the former bloc with sharply different trajectories (Central Europe’s consolidation versus post-Soviet autocracy); the Soviet Union’s own dissolution in 1991 as the largest consequence of all. Security: the Warsaw Pact’s dissolution and NATO’s survival and enlargement (1999: Poland, Hungary, Czech Republic) — with the Russian grievance planted; the Yugoslav wars as the dark twin of the peaceful transitions. Economic and social: shock therapy, the transformation depression (GDP falls of 20–40 per cent), oligarchs and inequality, mass westward migration — the transition’s losers as a durable political force. Ideological: liberal triumphalism (“end of history”) and its hangover. The evaluative thread: which consequences proved fundamental (reunification, enlargement, Russia’s exclusion) versus transitional? Strong answers argue a hierarchy and acknowledge that consequences looked different from Warsaw, Moscow and Sarajevo.',
  },

  // ---------------- E8 — Role of significant leaders ----------------
  {
    id: 'eur-e12',
    frame: 'E8',
    strand: 'person',
    era: 'early',
    demand: 2,
    themes: ['eur-origins'],
    tags: ['eur-p1', 'eur-p5'],
    text: 'Evaluate the role of Josef Stalin in the development of the Cold War in Europe in the years 1945 to 1953.',
    notes:
      'Role questions require judgement about distinctive contribution. Stalin’s ledger: the imposition of obedient regimes across the east (with the partial exceptions instructive — Finland spared, Tito surviving expulsion in 1948); the refusal of Marshall aid for the bloc; the Berlin blockade — his greatest miscalculation, consolidating everything he feared (NATO, West Germany); the Cominform and the second wave of show trials disciplining the satellites; the green light to Kim Il-sung globalising the conflict; and the paranoid last years (the Doctors’ Plot). The debate: was Stalin pursuing a master plan of expansion, opportunistic advance within a sphere he considered agreed, or defensive consolidation read as offence? Evidence cuts both ways — the 1946 election speech and ideology on one side; caution over Greece (keeping the percentages deal), restraint in the air corridors, and the 1952 Note on Germany on the other. Historiography: Gaddis’s verdict that with Stalin a cold war was unavoidable; Zubok’s “revolutionary-imperial paradigm”; revisionist counterweights. Strong answers weigh the man against structure and reach a defended verdict on how far the Cold War’s European shape was Stalin’s work.',
  },
  {
    id: 'eur-e13',
    frame: 'E8',
    strand: 'person',
    era: 'late',
    demand: 2,
    themes: ['eur-collapse'],
    tags: ['eur-p2', 'eur-p5'],
    text: 'Evaluate the role of Mikhail Gorbachev in the ending of the Cold War in Europe in the years 1985 to 1991.',
    notes:
      'Candidates should evaluate Gorbachev’s distinctive contribution across the sequence. His ledger: new thinking in foreign policy — Reykjavik and the INF Treaty (1987) breaking the euromissile deadlock; the UN speech (December 1988) renouncing force and announcing unilateral cuts; the withdrawal from Afghanistan; the refusal to shoot in 1989 — permitting Poland’s round table, Hungary’s border opening, Leipzig and the Wall; acceptance of German reunification in NATO (1990) against his own establishment; and at home glasnost and perestroika, which unbound the empire’s information and economy. Qualifications: he intended reform, not dissolution — the outcome was in that sense his failure; systemic exhaustion constrained every choice; partners mattered (Reagan’s engagement, Thatcher’s brokerage, Kohl’s drive, Bush’s management of 1989–91 “without dancing on the wall”); and the peoples of eastern Europe, not Moscow, made the revolutions. Historiography: Archie Brown’s Gorbachev-centred account versus Kotkin’s structural one; Chernyaev’s diaries as evidence of intention. A differentiated verdict — decisive as permitter, not author, of 1989 — marks the top bands, however candidates finally judge it.',
  },

  // ---------------- E9 — Significance of ideas ----------------
  {
    id: 'eur-e14',
    frame: 'E9',
    strand: 'idea',
    era: 'whole',
    demand: 3,
    themes: [],
    tags: ['eur-p4'],
    text: 'Assess the significance of the ideas of containment and peaceful co-existence in shaping the Cold War in Europe in the period 1945 to 1991.',
    notes:
      'Both ideas must be defined and their work traced. Containment: Kennan’s Long Telegram and “X” article — patient, long-term resistance to Soviet expansion without war; embodied in the Truman Doctrine, Marshall Plan and NATO; militarised beyond Kennan’s intent (NSC-68); in Europe it meant accepting the division (no rollback — 1953, 1956 and 1968 proved it) while waiting for Soviet decay: vindicated, on its own terms, in 1989–91. Peaceful co-existence: Khrushchev’s doctrine from the XX Congress (1956) — competition without war, given nuclear weapons; enabling summitry, the “thaw”, and later détente’s treaties (Ostpolitik, SALT, Helsinki); but never renouncing ideological struggle — coexistence abroad was compatible with tanks in Budapest, and Helsinki’s Basket III turned coexistence’s legal form into subversion of the bloc from within. Assessment: both ideas rationalised restraint and thereby stabilised the division; both contained the seeds of its end (containment’s patience, Helsinki’s human-rights lever). Strong answers weigh ideas against material factors (the bomb, economics) as shapers of conduct and reach a judgement about which idea did more work, in which period.',
  },
  {
    id: 'eur-e15',
    frame: 'E9',
    strand: 'idea',
    era: 'whole',
    demand: 3,
    themes: ['eur-newworld'],
    tags: ['eur-p4'],
    text: 'Assess the significance of nationalism in the history of Europe between 1945 and the end of the 20th century.',
    notes:
      'An idea question across the whole period, requiring cases and a thesis. Suppression phase: after 1945 nationalism stood discredited — the EEC built explicitly against it in the west, while in the east class replaced nation in official ideology, though regimes borrowed national feeling when useful (Poland’s church-nation, Romania’s national communism) and anti-Soviet risings (1956 above all) were national as much as political. Persistence: Gaullism, the German question never closed, Basque and Irish violence — the nation-state remained Europe’s operating unit even inside integration. Explosion: 1989 as national liberation as much as democratic revolution (the Baltics’ singing revolution, German unity); then Yugoslavia — Milošević and Tudjman demonstrating nationalism as the successor ideology to communism, with war, ethnic cleansing and Srebrenica as its price; the velvet divorce as the peaceful variant. Assessment should weigh nationalism against its rivals (communism, liberal integration): the strongest answers argue a paradox — the era’s two great projects, the EU and the bloc, both tried to transcend the nation, and the nation outlived the one and now constrains the other — and support it with specific cases across the half-century.',
  },

  // ---------------- E10 — Compare ----------------
  {
    id: 'eur-e16',
    frame: 'E10',
    strand: 'event',
    era: 'mid',
    demand: 2,
    themes: ['eur-hungary', 'eur-prague'],
    tags: ['eur-p2'],
    text: 'Compare the causes, course and consequences of the Hungarian rising of 1956 with those of the Prague Spring of 1968.',
    notes:
      'A compare question requiring similarities and differences argued through categories, not two narratives. Causes — similar: de-Stalinisation raising hopes (Khrushchev’s secret speech before 1956; the Kádár-era thaw’s limits before 1968); economic grievance; reform communists at the head (Nagy, Dubček) pushed by movements from below. Different: Hungary’s rising was armed, national and rapidly anti-systemic (multi-party government, Warsaw Pact withdrawal); the Prague Spring was a party-led reform that never questioned the Pact. Course — Hungary: street war, 2,700 dead, crushed in days; Czechoslovakia: unarmed resistance, no battle, occupation by negotiation and attrition. Consequences — similar: reform crushed, leaders removed (Nagy hanged; Dubček to the forestry service), emigration waves, western inaction demonstrating the spheres; different: Kádár’s Hungary evolved into the bloc’s most tolerable regime (“goulash communism”), while normalised Czechoslovakia stayed frozen until 1989; 1968 additionally produced the Brezhnev Doctrine and killed reform communism as an idea. Strong answers organise by category, explain the differences (the lesson each generation drew from the last), and conclude with a judgement about which episode mattered more for the bloc’s long-run fate.',
  },
];
