import type { EssayQuestion } from './types';

// Essay questions e34–e60.

export const ESSAYS_3: EssayQuestion[] = [
  // ---------------- E1 — Evaluate the proposition ----------------
  {
    id: 'e34',
    frame: 'E1',
    strand: 'person',
    era: 'late',
    demand: 3,
    themes: ['gleichschaltung', 'potsdam'],
    tags: ['p4', 'p7'],
    text: 'Evaluate the proposition that Hitler was the undisputed master of the Third Reich in the years 1933 to 1945.',
    notes:
      'This proposition sits on the classic intentionalist–structuralist fault line and rewards genuine historiographical engagement. The case for mastery: the Führerprinzip as the state’s organising fiction; no institution, law or oath stood above Hitler after August 1934; the great decisions — the purge, rearmament, war, the destruction of the Jews — bore his authorisation; rivals rose and fell at his pleasure. The counter-case: the “weak dictator” argument (Hans Mommsen) — a Bonapartist ruler who avoided paperwork, dithered, and presided over polycratic chaos in which agencies (SS, DAF, Four-Year Plan, Gauleiter) fought for territory; Kershaw’s synthesis, “working towards the Führer”, in which radical initiative flowed upward toward Hitler’s known wishes without requiring his orders. Evidence should span the regime’s life: the purge, Blomberg–Fritsch, the radicalisation of persecution, wartime command. Strong responses distinguish supremacy (never challenged) from control (often loose) and argue a nuanced verdict. Both sides must be addressed with specific evidence for the higher marks.',
  },
  {
    id: 'e35',
    frame: 'E1',
    strand: 'structure',
    era: 'late',
    demand: 2,
    themes: ['economy'],
    tags: ['p4'],
    text: 'Evaluate the proposition that the Nazi “economic miracle” of 1933 to 1939 was more propaganda than reality.',
    notes:
      'A comparison proposition requiring both sides. The case for “propaganda”: statistical conjuring (women, Jews and labour-service conscripts removed from the registers); the Autobahn’s celebrated projects employing a fraction of those the slump had idled; real wages around 1929 levels in 1938 with longer hours and no unions; consumption squeezed by rearmament; recovery as war economy in disguise (Tooze). The case for “reality”: six million unemployed to effective full employment in six years was experienced as rescue whatever its anatomy; security returned to working-class households; the psychological transformation was real and politically decisive — the regime’s popularity rested on it. Key evidence: Schacht’s financing, the 1936 Four-Year Plan, DAF/KdF, rearmament shares of national income. Historiography: Tooze’s war-economy reading; Overy on genuine recovery mechanisms. The strongest conclusions refuse the binary: the miracle was economically counterfeit yet politically real, and candidates should weigh which mattered more — with evidence on both sides required for the higher marks.',
  },
  {
    id: 'e36',
    frame: 'E1',
    strand: 'event',
    era: 'early',
    demand: 2,
    themes: ['putsch'],
    tags: ['p3'],
    text: 'Evaluate the proposition that the Munich Putsch of 1923 was a triumph for Hitler despite its failure.',
    notes:
      'A paradox proposition that must be argued, not narrated. The case for triumph: the trial as national platform before an indulgent court; the lenient sentence and Landsberg’s comfortable “martyrdom”; Mein Kampf; the strategic conversion to legality that made 1933 possible; the founding myth of the Feldherrnhalle dead, ritualised every 9 November. The case against: sixteen dead and a movement scattered; the Party banned, Hitler barred from speaking in most states for years; the NSDAP’s 2.6 per cent in 1928 showing that neither trial fame nor myth won voters without a crisis; the triumph visible only in retrospect and dependent on the Depression. Evidence: the trial and sentence, the 1925 refoundation, election results 1924–1930. Historiography: Kershaw on the trial as “propaganda victory”; older narratives of inevitability to be resisted. Both sides of the proposition must be addressed; the best conclusions specify for whom and by when the failure became a triumph.',
  },

  // ---------------- E2 — Debate the proposition ----------------
  {
    id: 'e37',
    frame: 'E2',
    strand: 'structure',
    era: 'mid',
    demand: 2,
    themes: ['stresemann'],
    tags: ['p2'],
    text: 'Debate the proposition that the years 1924 to 1929 were a golden age for the Weimar Republic.',
    notes:
      'As this is a debate question, for candidates to gain the higher marks, they must address evidence that both supports and refutes this claim. Supporting: the stabilised currency and renewed growth; Locarno, League membership and the Nobel-crowned rehabilitation; cultural brilliance (Bauhaus, cinema, Berlin’s ferment); the Nazi vote collapsing to 2.6 per cent by 1928; welfare expansion and the 1928 Grand Coalition. Refuting: prosperity floated on recallable American short-term credit; unemployment never fell below 1.3 million; agriculture depressed from 1927; seven cabinets in six years and a monarchist field marshal elected president in 1925; the republic’s enemies waiting, not converted (“a candle burning at both ends” — the era’s own image). Historiography: Peukert’s “deceptive stability”; Wright’s defence of the era’s real achievements. Strong responses discriminate by domain — golden for culture and diplomacy, gilded for the economy, leaden for political foundations — and reach a defended verdict rather than a split difference.',
  },
  {
    id: 'e38',
    frame: 'E2',
    strand: 'event',
    era: 'late',
    demand: 2,
    themes: ['long-knives'],
    tags: ['p4'],
    text: 'Debate the proposition that the Night of the Long Knives was a significant turning point in the development of the Nazi state between 1933 and 1938.',
    notes:
      'As this is a debate question, for candidates to gain the higher marks, they must address evidence that both supports and refutes this claim. Supporting: the SA broken as a political force and the “second revolution” buried; the SS freed from SA control — the decisive institutional birth of the terror state; the army bound by gratitude and, within weeks, the personal oath; murder legalised retrospectively and publicly defended — the Führer proclaimed “supreme judge”, ending any pretence of a law-bound state; conservative critics silenced by example. Refuting: consolidation was already far advanced (Fire Decree, Enabling Act, one-party state, unions destroyed — all 1933); the purge ratified rather than created Hitler’s supremacy; the SS’s rise and the army’s subordination unfolded over years, with Blomberg–Fritsch (1938) arguably the greater military turning point; Hindenburg’s death in August 1934 mattered as much. Historiography: Kershaw on the purge as the regime’s “founding crime”; Evans on cumulative process. A weighed verdict on “turning point” versus “milestone in a process” is required.',
  },

  // ---------------- E3 — Assess the extent of responsibility ----------------
  {
    id: 'e39',
    frame: 'E3',
    strand: 'group',
    era: 'mid',
    demand: 2,
    themes: ['divided-left', 'nazi-rise'],
    tags: ['p2', 'p3'],
    text: 'Assess the extent to which the divisions of the German left were responsible for the Nazi rise to power.',
    notes:
      'A graded verdict is required, weighing the left’s division against other factors. The case: SPD and KPD together outpolled the NSDAP in every free election (13 million to 11.7 million even in November 1932) and fielded mass defence formations, yet the Comintern’s “social fascism” doctrine made the SPD the KPD’s primary target (the 1931 Prussian referendum and 1932 transport strike alongside the Nazis), while the SPD’s legalism accepted the Prussian coup without resistance — the one force able to bar the road disabled itself. Counter-factors: no united left could have commanded a Reichstag majority or Hindenburg’s confidence; power was conferred by the president’s circle, not won in the streets; the Depression, middle-class panic and elite intrigue operated independently of the left’s conduct. Historiography: Weitz on the KPD; Winkler on the SPD’s dilemma. Strong responses distinguish “failed to prevent” from “caused”, and grade responsibility accordingly — the discriminating work is in the counter-factors.',
  },
  {
    id: 'e40',
    frame: 'E3',
    strand: 'idea',
    era: 'late',
    demand: 3,
    themes: ['persecution', 'kristallnacht'],
    tags: ['p6'],
    text: 'Assess the extent to which Nazi ideology was responsible for the escalation of persecution into genocide between 1933 and 1945.',
    notes:
      'The central historiographical debate of the Holocaust, set as an extent question. The ideological case (intentionalism): antisemitism as the regime’s fixed star from Mein Kampf to the 1939 Reichstag “prophecy”; Hitler’s authorisation at each threshold; “redemptive antisemitism” (Friedländer) as the worldview that made extermination thinkable. The counter-factors (functionalism/structuralism): cumulative radicalisation through competing agencies “working towards the Führer” (Mommsen, Broszat); the war’s brutalisation and the failed territorial “solutions” (Nisko, Madagascar) preceding systematic murder; local initiative in the occupied east; the machinery of Wannsee as coordination of killing already begun; Browning’s “ordinary men” executing without ideological fervour. Strong responses trace the stages (1933 exclusions, 1935 laws, 1938 pogrom, 1941 shootings, 1942 coordination) and assign weight at each: ideology as necessary condition and direction-setter, circumstance and structure as accelerants. This is demanding material; responses must remain analytical and precise, and a graded verdict must be defended.',
  },
  {
    id: 'e41',
    frame: 'E3',
    strand: 'group',
    era: 'mid',
    demand: 3,
    themes: ['potsdam', 'nazi-rise'],
    tags: ['p2', 'p3', 'p7'],
    text: 'Assess the extent to which Germany’s conservative elites were responsible for the destruction of the Weimar Republic by 1934.',
    notes:
      'A graded verdict weighing the elites — landowners, industrialists, army, bureaucracy, the presidential circle — against other destroyers. The case: presidential government from 1930 was the elites’ project before it was Hitler’s (Brüning by decree, Papen’s Prussian coup, Schleicher’s intrigues); the January 1933 “backstairs” deal (Papen: “we’ve hired him”) conferred power when the Nazi vote was falling; business and Junker pressure on Hindenburg; the Day of Potsdam and Enabling Act votes completing the surrender; an army, judiciary and civil service never loyal to the Republic. Counter-factors: without the Depression and 13 million Nazi voters there was nothing to hire; the left’s division and the constitution’s permissions operated independently; some elites (Schleicher, latterly) sought alternatives to Hitler. Historiography: Wheeler-Bennett and Turner on business and the “hiring” miscalculation; Kershaw on the camarilla. Distinguish creating the vacancy (largely elite work) from filling it (Hitler’s) — the strongest answers grade responsibility per stage.',
  },

  // ---------------- E4 — Assess the relative importance of causes ----------------
  {
    id: 'e42',
    frame: 'E4',
    strand: 'event',
    era: 'early',
    demand: 2,
    themes: ['weimar-crises'],
    tags: ['p2'],
    text: 'Assess the relative importance of the factors that caused the hyperinflation crisis of 1923.',
    notes:
      '“Relative importance” demands a ranked, defended hierarchy, not a catalogue. The factor field: the war’s financing by borrowing rather than taxation (the fiscal original sin); the Republic’s deficits and the political impossibility of taxing a fractured society; reparations and the transfer problem; the Ruhr occupation and passive resistance — an entire region’s wages paid on the printing press; and the speculative collapse of confidence in the mark once depreciation became self-fulfilling. A reliable discriminator distinguishes long-term structural causes (war finance, deficits) from the 1923 trigger (Ruhr/passive resistance) that converted chronic inflation into hyperinflation — the mark’s fall from 4,200 to the dollar (1919) through 1922’s acceleration to the trillions of November 1923 anchors the chronology. Candidates should also weigh agency: the Reichsbank’s accommodation and the government’s choice of resistance over taxation. Historiography: Feldman’s “great disorder”; Ferguson on the politics of default. Description of each cause is not enough — causes must be weighed against each other with a hierarchy defended.',
  },
  {
    id: 'e43',
    frame: 'E4',
    strand: 'structure',
    era: 'late',
    demand: 2,
    themes: ['gleichschaltung', 'reichstag-fire', 'long-knives'],
    tags: ['p4'],
    text: 'Assess the relative importance of the factors that enabled the Nazi consolidation of power between 1933 and 1934.',
    notes:
      'A ranking question across the seizure of power’s eighteen months. The factor field: legal instruments (Fire Decree, Enabling Act, the laws against parties and for the civil service); terror and its display (SA violence, the first camps, “protective custody”, the June 1934 murders); the neutralisation or complicity of institutions (Centre Party’s votes, the Concordat, the army’s bargain, civil-service continuity); self-coordination from below (parties dissolving themselves, professions expelling Jewish members unasked); propaganda and manufactured consent (Potsdam, the plebiscites, the Führer myth); and Hindenburg’s cooperation and death. Candidates must weigh, e.g.: terror was the precondition of “legality”, but legality captured the institutions terror could not reach; self-coordination did work no decree could have done. Historiography: Bracher’s “legal revolution”; Evans on the interplay of terror and consent; Broszat on self-coordination. The hierarchy must be explicit and defended; a chronological recount of 1933–34 caps in the low bands.',
  },

  // ---------------- E5 — Analyse the significance ----------------
  {
    id: 'e44',
    frame: 'E5',
    strand: 'event',
    era: 'mid',
    demand: 2,
    themes: ['putsch', 'nazi-rise'],
    tags: ['p3'],
    text: 'Analyse the significance of the Munich Putsch of 1923 to the development of the Nazi Party to 1933.',
    notes:
      'Continuous linkage between the putsch and the Party’s development is required — a narrative of 8–9 November caps out. Dimensions of significance: the strategic (the legality course adopted at the refoundation of 1925 — “we shall hold our noses and enter the Reichstag” — reshaping organisation, propaganda and the SA’s role); the personal (the trial elevating Hitler from Bavarian agitator to national figure, Landsberg producing Mein Kampf and confirming the Führerprinzip); the mythic (the Feldherrnhalle dead as the movement’s martyr cult, the Blood Flag, the annual 9 November ritual binding the faithful); and the cautionary (the ban years, the fragmentation of the völkisch right, the lesson that the state’s guns and the army’s loyalty could not be defied). The counter-side belongs in the analysis: none of this won elections before 1930 — the putsch’s legacy was a vehicle awaiting a crisis. Candidates may conclude the putsch was formative for strategy and myth yet insufficient for power, with reasoning. Historiography: Kershaw on the trial and refoundation.',
  },
  {
    id: 'e45',
    frame: 'E5',
    strand: 'event',
    era: 'late',
    demand: 2,
    themes: ['olympics'],
    tags: ['p4'],
    text: 'Analyse the significance of the Berlin Olympics of 1936 to the Nazi regime.',
    notes:
      'Linkage between the Games and the regime’s purposes must be continuous. Dimensions: internationally — the collapse of boycott movements, four million ticket sales, foreign opinion reassured against the “atrocity stories”, the regime’s respectability restored months after the Rhineland remilitarisation; domestically — the spectacle as proof that humiliation was over, the Führer as host of the world; technically — the invention of the totalitarian mega-event (the torch relay, the first television broadcasts, Riefenstahl’s Olympia); and the costs of the performance — the tactical pause in open persecution, signs removed and Der Stürmer boxes emptied, Sinti and Roma interned at Marzahn out of sight. The qualifying analysis: the pause was temporary (signs back within weeks, the Four-Year Plan signed in September 1936), and Jesse Owens’ four golds complicated the racial theatre. Candidates may weigh the Games as significant chiefly abroad, or chiefly as a template of propaganda statecraft; either verdict needs reasoning. Writing only about the famous spectacle without its functions will not achieve the higher marks.',
  },
  {
    id: 'e46',
    frame: 'E5',
    strand: 'event',
    era: 'late',
    demand: 2,
    themes: ['kristallnacht', 'persecution'],
    tags: ['p6'],
    text: 'Analyse the significance of Kristallnacht (November 1938) to the development of Nazi antisemitic policy.',
    notes:
      'The pogrom must be linked continuously to the trajectory of persecution. Significance backward: the end of the “legal” phase’s reassurances — after five years of staged exclusion (1933 boycott and dismissals, 1935 laws, 1937–38 Aryanisation), open state violence announced that no legal floor existed. Significance forward: the aftermath’s bureaucratic turn — the billion-mark “atonement fine”, the decrees completing economic exclusion, the forced-emigration machinery (thirty thousand men in camps released against emigration papers), and the leadership’s conclusion that public riot was inefficient — destruction thereafter proceeding administratively; within weeks Hitler’s January 1939 “prophecy” raised the stakes rhetorically to annihilation. Significance for German society: the visible test of bystander response — disapproval of method without consequence (the regime’s own opinion reports). Candidates may conclude the pogrom was a hinge — the last old-style pogrom and the rehearsal for state-managed destruction (the historiographical reading candidates should engage). Responses confined to describing the night’s violence cannot achieve the higher marks.',
  },
  {
    id: 'e47',
    frame: 'E5',
    strand: 'structure',
    era: 'late',
    demand: 2,
    themes: ['youth'],
    tags: ['p4'],
    text: 'Analyse the significance of the Hitler Youth and the League of German Girls to the Nazi attempt to control German society between 1933 and 1945.',
    notes:
      'Linkage to the control of society — not merely of the young — is the discriminator. Dimensions: the capture of the generation (compulsory from 1936/39, over eight million members) as the regime’s claim on the future; the displacement of rival authorities — parents reported by children, churches’ youth work strangled, schools flanked by an organisation owing loyalty to the Führer alone; socialisation into hierarchy, race doctrine and militarism (and, in the BDM, the maternal ideal), preparing conscripts and mothers for the Volksgemeinschaft; and the instrument’s reach into every village. The limits belong in the analysis: enrolment was not belief (boredom, evasion, Edelweiss Pirates and swing youth by the war years); parental and confessional loyalties persisted; and the organisations’ very totality manufactured the deviance they punished. Candidates may conclude the HJ/BDM were the regime’s deepest instrument of social control yet demonstrably incomplete; either emphasis requires evidence. Historiography: Peukert on dissent; Kater on the HJ’s coercive turn. Both organisations should be addressed, though not necessarily equally.',
  },
  {
    id: 'e48',
    frame: 'E5',
    strand: 'structure',
    era: 'late',
    demand: 3,
    themes: ['church', 'gleichschaltung'],
    tags: ['p4', 'p5'],
    text: 'Analyse the significance of the church struggle to the nature and limits of Nazi control over German society throughout the period of Nazi rule.',
    notes:
      'The question asks what the church struggle reveals about the dictatorship — linkage to “nature and limits” is essential. The record: the German Christians’ state-backed capture of the Protestant synods (1933) collapsing against the Confessing Church (Barmen 1934, the Pastors’ Emergency League, Niemöller’s imprisonment from 1937); the Concordat (July 1933) buying Catholic institutional survival at the price of political silence, violated continuously, answered by “Mit brennender Sorge” (1937) read from the pulpits; Galen’s 1941 sermons forcing the public halt of the T4 programme — the regime’s single retreat before open protest. Significance: the churches proved the one social institution the regime could neither absorb nor destroy, demonstrating that control rested on avoiding confrontation with rooted loyalties; yet the resistance defended the churches’ own domain — doctrine, clergy, institutions — and its silence over the persecution of the Jews marks its boundary. Candidates should weigh both facts. Historiography: Conway on the persecution of the churches; Evans on the limits of coordination. A narrative of church events without the analytical payoff caps in the middle bands.',
  },

  // ---------------- E6 — Examine the impact / nature and effects ----------------
  {
    id: 'e49',
    frame: 'E6',
    strand: 'structure',
    era: 'late',
    demand: 2,
    themes: ['economy'],
    tags: ['p4'],
    text: 'Examine the nature and effects of the Nazi economic recovery between 1933 and 1939.',
    notes:
      'Both elements — nature AND effects — are required for the higher marks, though not necessarily in equal depth. Nature: deficit-financed work creation (the visible Autobahn, the decisive rearmament), Schacht’s Mefo-bill financing and New Plan trade controls, the 1936 Four-Year Plan and autarky drive under Göring, statistical management of the unemployment count (women, Jews, labour service, conscription), and the destruction of the unions replaced by the DAF wage freeze. Effects: registered unemployment from six million to effective full employment by 1938–39; the political harvest of gratitude and the Führer myth; for workers, security without freedom — real wages near 1929 levels, longer hours, KdF as compensation; for business, profits within a command framework; for the excluded, Aryanisation as plunder; structurally, an economy committed to war (military spending’s unprecedented peacetime share) with autarky’s bottlenecks pressing toward expansion. The assessment should push beyond description to how far the recovery “succeeded” and for whom. Historiography: Tooze against the miracle; Overy on recovery mechanisms.',
  },
  {
    id: 'e50',
    frame: 'E6',
    strand: 'group',
    era: 'mid',
    demand: 2,
    themes: ['nazi-rise', 'divided-left'],
    tags: ['p2', 'p3'],
    text: 'Examine the impact of the Great Depression on the middle class and the industrial working class in Germany between 1929 and 1933.',
    notes:
      'Candidates must address both groups, but it is not essential that they give both comparable discussion. Middle class: the second catastrophe within a decade — savings, businesses and salaried posts destroyed (white-collar unemployment, shuttered shops, proletarianisation-fear realised after 1923’s memory); the political harvest — the collapse of the liberal parties (DDP and DVP to insignificance by 1932) and the flight to the NSDAP, strongest among Protestant middle-class and rural voters. Working class: unemployment at six million (over 40 per cent of union members), benefit cuts under Brüning’s decrees, the humiliation of the dole and the split of the class politically — employed workers largely loyal to the SPD, the young unemployed radicalising to the KPD (its vote rising every election to November 1932), a minority to the SA’s barracks and soup kitchens. The differential impact is the analytical core: the Depression radicalised both classes but delivered them to different extremes. Statistics and election results anchor the top evidence band; description without differentiation caps in the middle bands.',
  },
  {
    id: 'e51',
    frame: 'E6',
    strand: 'group',
    era: 'late',
    demand: 2,
    themes: ['youth', 'resistance'],
    tags: ['p4', 'p5'],
    text: 'Examine the nature and extent of youth nonconformity and resistance in Nazi Germany between 1933 and 1945.',
    notes:
      'Both elements — nature AND extent — must be addressed. Nature: a spectrum requiring careful distinction — everyday evasion of HJ service; style-based dissent (the swing youth’s jazz, dress and dance in Hamburg and Berlin parlours); the working-class Edelweiss Pirates’ hikes, brawls with HJ patrols and, in wartime Cologne, links to deserters and the underground; and at the fatal end, the White Rose’s explicitly political leaflets (1942–43) calling for sabotage and bearing witness to the murder of the Jews. Extent: minorities throughout — but growing with the war as compulsion tightened and the HJ militarised; the regime’s own response (youth camps at Moringen, the 1944 Cologne executions of Pirates, the People’s Court for the Scholls) measures how seriously it took them. The analytical core: most nonconformity sought space, not revolution — it was the state, by criminalising style, that converted it into opposition (Peukert). Candidates should assess how far “resistance” is the right word across the spectrum, and reward for precision of category rather than moral inflation.',
  },

  // ---------------- E7 — Evaluate the consequences ----------------
  {
    id: 'e52',
    frame: 'E7',
    strand: 'event',
    era: 'late',
    demand: 3,
    themes: ['economy', 'july-plot'],
    tags: ['p4'],
    text: 'Evaluate the consequences of the Second World War for German society and the Nazi state to 1945.',
    notes:
      'Range across consequence types and phases is the discriminator — short and long term, intended and unintended, differential by group. For society: mobilisation and its limits (women’s conscripted labour against the maternal ideal; foreign forced labourers — seven million by 1944 — inside the Volksgemeinschaft’s heart); the bombing war’s destruction of the home front (Hamburg 1943, evacuation, the fraying of morale the regime’s own reports recorded); rationing, and the shift from victory euphoria (1940) to Stalingrad’s shock (1943) and Total War; terror turned inward — denunciation, the People’s Court, tens of thousands of executions of Germans by war’s end. For the state: radicalisation of every structure — the SS empire at its zenith, the Party’s wartime reach into welfare and command, the genocide executed under the war’s cover; then disintegration — the Volkssturm’s children and old men, the Führer state ending in the bunker. Candidates must evaluate, not chronicle: which consequences proved fundamental, for whom, and how the war revealed the regime’s essence. Responses that focus on military narrative will be unable to articulate a sufficient argument.',
  },
  {
    id: 'e53',
    frame: 'E7',
    strand: 'event',
    era: 'late',
    demand: 2,
    themes: ['july-plot', 'resistance'],
    tags: ['p5', 'p7'],
    text: 'Evaluate the consequences of the failure of the 20 July 1944 plot for the German resistance and for the Nazi regime.',
    notes:
      'Candidates must address consequences for both the resistance and the regime, though not necessarily equally. For the resistance: annihilation — some five thousand killed in the reprisals, sweeping away not only the military conspirators but the Kreisau Circle, Goerdeler’s civilian network and much surviving conservative, Christian and trade-union opposition; families punished under Sippenhaft; organised resistance effectively ended for the war’s remainder. For the regime: the army’s final subjugation — the Nazi salute imposed, Himmler given the Replacement Army, political officers installed; radicalised terror against all Germans (the People’s Court’s frenzy under Freisler); the propaganda gift of “Providence” briefly reviving the Führer myth; and paranoia accelerating the regime’s self-destruction. Long-term and unintended: the plotters’ deaths, intended as erasure, founded the moral tradition on which post-war Germany would build (the 20 July legacy). Strong conclusions weigh political failure against moral consequence with the distinction argued, not asserted. A narrative of the bomb plot caps in the low bands.',
  },

  // ---------------- E8 — Evaluate the role of an individual ----------------
  {
    id: 'e54',
    frame: 'E8',
    strand: 'person',
    era: 'late',
    demand: 2,
    themes: ['economy', 'long-knives'],
    tags: ['p4', 'p7'],
    text: 'Evaluate the role of Hermann Göring in the Nazi state between 1933 and 1945.',
    notes:
      'An evaluation across the whole span, weighing accumulation against performance. The rise: Prussian interior minister creating the Gestapo and first camps (1933); organiser of the Röhm purge; commander of the Luftwaffe (1935); economic overlord through the Four-Year Plan (1936), sidelining Schacht and building the Reichswerke empire; Aryanisation’s profiteer and, after Kristallnacht, coordinator of anti-Jewish economic policy — his July 1941 authorisation to Heydrich standing in the genocide’s chain of command; designated successor at the war’s outbreak. The decline: the Luftwaffe’s failures (Britain 1940, the Stalingrad airlift promise, the bombed home front) destroying his credibility; indolence, morphine and plunder; power ebbing to Speer, Himmler and Bormann; dismissal and arrest in the war’s last days. The evaluative core: Göring as the regime’s second man whose empire-building exemplified polycratic accumulation without competence — significant early as consolidator and economic mobiliser, later chiefly as failure. Reaching beyond the famous phases (the purge, the trials) strengthens balance. A biography without weighing caps in the low bands.',
  },
  {
    id: 'e55',
    frame: 'E8',
    strand: 'person',
    era: 'late',
    demand: 2,
    themes: ['propaganda', 'olympics'],
    tags: ['p4', 'p7'],
    text: 'Evaluate the role of Leni Riefenstahl in the projection of the Nazi regime’s image during the 1930s.',
    notes:
      'The scope is the regime’s image — the essay must connect her films to its projection, not recount her career. The case for a decisive role: Triumph of the Will (1935), commissioned by Hitler, converting the 1934 Nuremberg rally (weeks after the Röhm purge) into the definitive image of unity, order and the Führer descending god-like on the faithful — its techniques (aerial opening, moving cameras, the cathedral of light aesthetic) creating the visual grammar by which the regime is still seen; Olympia (1938) marrying the Games’ internationalism to the regime’s modernity and the body-cult of the master race. The qualifications: her aestheticised propaganda worked because it rode staged realities others built (Speer’s architecture, Goebbels’ apparatus, the rallies themselves); its foreign prestige (Venice awards) served the “respectable Germany” performance; and her post-war claims of unpolitical artistry founder on the commissions and privileges she accepted — including Sinti and Roma extras taken from internment. Candidates should evaluate: indispensable image-maker or gifted instrument of an image-making state? A defended verdict is required.',
  },
  {
    id: 'e56',
    frame: 'E8',
    strand: 'person',
    era: 'late',
    demand: 3,
    themes: ['economy', 'propaganda'],
    tags: ['p4', 'p7'],
    text: 'Evaluate the role of Albert Speer in the Nazi state between 1933 and 1945.',
    notes:
      'Two phases must both be weighed. The architect (1933–42): stage-manager of the regime’s self-presentation — the Nuremberg rally grounds and cathedral of light, the 1937 Paris pavilion, the New Chancellery, the megalomaniac Germania plans as General Building Inspector (whose Berlin clearances evicted Jewish tenants); intimate of Hitler and architect of the regime’s aesthetic of power. The minister (1942–45): Armaments Minister after Todt’s death, presiding over the “armaments miracle” — production tripling to its 1944 peak under bombing — through rationalisation, the Central Planning board, and the systematic exploitation of millions of forced and slave labourers, including camp inmates worked to death for his programmes; a technocrat prolonging a lost war. The evaluative core: Speer as the regime’s manager-face — the “good Nazi” myth he built at Nuremberg and in his memoirs (accepting vague responsibility while denying knowledge) against the record (Wolters’ chronicle, the Posen speech audience, his own deportation signatures). Historiography: van der Vat and Kitchen dismantling the myth; Tooze deflating the “miracle”. Both the role and its post-war fabrication belong in a top answer.',
  },
  {
    id: 'e57',
    frame: 'E8',
    strand: 'person',
    era: 'late',
    demand: 3,
    themes: ['persecution'],
    tags: ['p4', 'p6', 'p7'],
    text: 'Evaluate the role of Reinhard Heydrich in the development of the Nazi terror apparatus and the Holocaust, to 1942.',
    notes:
      'Both named domains must be addressed. Terror apparatus: builder of the SD from 1931; operational planner of the Röhm purge; head of the Security Police (Gestapo and Kripo) from 1936 and of the RSHA from 1939 — the fusion of party intelligence and state police into a single instrument; architect of “preventive” policing and protective custody’s routinisation. Holocaust: organiser of the November 1938 pogrom’s arrests; chief of Jewish “emigration” machinery (the Vienna model); commander of the Einsatzgruppen in Poland and the USSR — the shooting war against Jews, intelligentsia and commissars; recipient of Göring’s July 1941 authorisation; convenor of Wannsee (January 1942), coordinating the ministries behind deportation and murder; as Protector of Bohemia-Moravia, terror and the model ghetto at Theresienstadt — until his assassination (June 1942) and the vengeance of Lidice; the extermination camps of Operation Reinhard bearing his name. Evaluation should weigh the man against the machine: Heydrich as the exemplary technician of ideological policing — indispensable accelerator or replaceable instrument (the machinery outlived him without pause)? A precise, sober treatment is required; sensational biography caps low.',
  },
  {
    id: 'e58',
    frame: 'E8',
    strand: 'person',
    era: 'late',
    demand: 3,
    themes: ['economy'],
    tags: ['p4', 'p7'],
    text: 'Evaluate the role of Alfred Krupp and German heavy industry in supporting the Nazi state between 1933 and 1945.',
    notes:
      'The individual and the sector must both be addressed — Krupp as the emblematic case of industry’s bargain. Before 1933: big business mostly funded Hitler’s conservative rivals (the Nazi rise owed more to small donors), though industrialists’ hostility to unions and the left prepared the ground; the February 1933 industrialists’ meeting sealed the alliance after power was won. Under the regime: rearmament’s profits and the destruction of the unions as the bargain’s terms; Gustav Krupp’s conversion to enthusiastic patron (the Adolf Hitler Fund); Alfried’s firm arming the Reich — and, in war, operating plants at Auschwitz and employing tens of thousands of forced and slave labourers, including camp inmates, in conditions that killed; Aryanisation’s acquisitions. The evaluative debate: industry as partner rather than paymaster of Nazism — complicit beneficiary within a command economy that progressively subordinated it (Four-Year Plan, Reichswerke competition). Historiography: Turner against the “big business paid for Hitler” myth; Tooze on primacy of politics; the Nuremberg Krupp trial’s findings. Candidates must weigh support given against autonomy lost, and profit against complicity, with a defended verdict.',
  },

  // ---------------- E9 — Assess the significance of paired ideas ----------------
  {
    id: 'e59',
    frame: 'E9',
    strand: 'idea',
    era: 'late',
    demand: 3,
    themes: ['gleichschaltung'],
    tags: ['p4'],
    text: 'Assess the significance of the ideas of the Führerprinzip (leader principle) and Gleichschaltung (coordination) in shaping the Nazi state throughout the period 1933 to 1945.',
    notes:
      'Definitions first — students routinely conflate the pair. Führerprinzip: authority flows downward from the leader, owed personal obedience, unbound by law or institution — replicated at every level (Gauleiter, plant leaders, HJ ranks). Gleichschaltung: the coordination of every institution — states, parties, unions, press, professions, culture — into conformity with the regime. The essay should trace their interplay rather than treat them serially: coordination hollowed out institutions, and the leader principle filled the hollow — oaths to Hitler personally (army, civil service, 1934), law subordinated to the Führer’s will (the purge legalised, the “supreme judge”), and the polycratic consequence: with formal structures dissolved, agencies competed by “working towards the Führer” (Kershaw), driving radicalisation without orders. Whole-period scope is enforced: candidates must reach into the war years (the Führer state’s wartime radicalisation and disintegration) and not camp on 1933–34. Historiography: Broszat’s “Hitler state”; Mommsen’s cumulative radicalisation; Kershaw’s synthesis. For full marks both ideas must be defined, linked and assessed across the period.',
  },
  {
    id: 'e60',
    frame: 'E9',
    strand: 'idea',
    era: 'whole',
    demand: 3,
    themes: ['persecution', 'nuremberg-laws'],
    tags: ['p3', 'p6'],
    text: 'Assess the significance of the ideas of antisemitism and Social Darwinism in Nazi ideology and policy throughout the period of study.',
    notes:
      'Define both precisely: Nazi antisemitism — not mere prejudice but a worldview casting “the Jew” as the biological enemy behind Bolshevism, capitalism and Germany’s defeat (the stab-in-the-back); Social Darwinism — the transfer of “struggle for existence” to races and nations, making conflict natural, compassion decadent, and the “unfit” expendable. Trace their interplay: Social Darwinism supplied the framework (race as the unit of history, struggle as law) within which antisemitism became eliminationist rather than discriminatory — and it widened the target beyond Jews to the disabled (sterilisation 1933, T4 from 1939), Sinti and Roma, and Slavs (Lebensraum as racial struggle). In policy, the pair run from Mein Kampf through the 1933 exclusions, the Nuremberg Laws’ biological definitions, 1938’s violence, to the war of annihilation and the Holocaust — the 1939 “prophecy” fusing both ideas. Whole-period scope is enforced: from the ideas’ Weimar-era roots in völkisch politics to their wartime realisation. Historiography: Friedländer’s “redemptive antisemitism”; Burleigh and Wippermann’s racial state. Both ideas must be defined, linked and assessed across the period for full marks; treating antisemitism alone cannot achieve them.',
  },
];
