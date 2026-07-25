import type { EssayQuestion } from './types';

// Essay questions for Elective 2: Russia and the Soviet Union 1914–45.
// Ids rus-e01…

export const RUS_ESSAYS: EssayQuestion[] = [
  // ---------------- E1 — Evaluate the proposition ----------------
  {
    id: 'rus-e01',
    frame: 'E1',
    strand: 'event',
    era: 'early',
    demand: 3,
    themes: ['rus-1917'],
    tags: ['rus-p2'],
    text: 'Evaluate the proposition that the First World War was the most significant cause of the collapse of Tsarism in February 1917.',
    notes:
      'A superlative proposition: candidates must weigh the war against longer-term causes, not narrate 1914–17. The case for: the war as the solvent of every support of the regime — casualties in the millions, the munitions and transport crises, inflation and the bread queues of Petrograd, the army’s transformation into armed peasants with grievances, Nicholas II’s fatal decision to take personal command in 1915 (tying the dynasty to defeat and leaving the capital to Alexandra and Rasputin). The counter-case: the structural weaknesses that predate 1914 — an autocracy that had conceded a Duma in 1905 and then emasculated it; agrarian hunger for land unresolved by Stolypin; rapid industrialisation creating a concentrated, strike-prone working class (Lena goldfields 1912; the strike wave of summer 1914); and the argument (Figes, Pipes in different keys) that the regime had survived 1905 only by force and luck. Historiography: optimists v. pessimists on whether Tsarism could have modernised without war. The strongest conclusions argue a relationship — deep weaknesses made the regime brittle; the war applied the blow — and defend a relative judgement.',
  },
  {
    id: 'rus-e02',
    frame: 'E1',
    strand: 'structure',
    era: 'late',
    demand: 3,
    themes: ['rus-terror'],
    tags: ['rus-p7'],
    text: 'Evaluate the proposition that Stalinist control of the Soviet Union in the 1930s rested on terror alone.',
    notes:
      'Candidates should define the proposition’s terms and test “alone”. The case for terror’s primacy: the NKVD’s reach, the quota-driven mass operations of 1937–38 (about 1.5 million arrests, nearly 700,000 shot), show trials, the Gulag, the purge of party and army, denunciation and pervasive fear. The counter-case — other instruments: propaganda and the cult of personality; socialist realism and control of every art; education and the Komsomol forming the new Soviet person; real bases of support — social mobility for workers promoted into the new industrial and administrative elite (the Brezhnev generation), enthusiasm of shock workers and Stakhanovites, belief among the young; and material levers (rationing, housing, internal passports) that disciplined without arresting. Historiography: totalitarian school (control from above) versus revisionists (Fitzpatrick on support and mobility; Getty on the terror’s chaotic dynamics). Strong answers argue the interdependence of fear and belief and reach a defended verdict on the proposition’s “alone”.',
  },

  // ---------------- E2 — Debate the proposition ----------------
  {
    id: 'rus-e03',
    frame: 'E2',
    strand: 'event',
    era: 'early',
    demand: 3,
    themes: ['rus-1917'],
    tags: ['rus-p2'],
    text: 'Debate the proposition that the October Revolution of 1917 was a coup d’état rather than a popular revolution.',
    notes:
      'As this is a debate question, for candidates to gain the higher marks they must address evidence that both supports and refutes the claim. Supporting: the seizure of power was planned and executed by a small armed force (the MRC under Trotsky’s direction), timed to pre-empt the Congress of Soviets; Petrograd was largely quiet; the Bolsheviks never won a national majority (SR victory in the Constituent Assembly elections, and the Assembly’s dispersal in January 1918); Lenin’s vanguard doctrine itself. Refuting: October rode genuine mass radicalisation — Bolshevik majorities in the Petrograd and Moscow Soviets by September, soldiers’ refusal to defend the Provisional Government, peasant land seizure already sweeping the countryside, and slogans (peace, land, bread, Soviet power) that voiced popular demands; the “coup” succeeded because almost no one would fight for Kerensky. Historiography: Pipes (coup by conspirators) versus social historians (Smith, Rabinowitch: a revolution from below the Bolsheviks channelled). The strongest answers refuse the false binary and defend a precise formulation — e.g. an insurrection executed by a minority within a mass revolution — while still reaching a verdict on the proposition.',
  },

  // ---------------- E3 — Assess the extent ----------------
  {
    id: 'rus-e04',
    frame: 'E3',
    strand: 'person',
    era: 'early',
    demand: 2,
    themes: ['rus-1917'],
    tags: ['rus-p2'],
    text: 'Assess the extent to which the leadership of Tsar Nicholas II was responsible for the fall of the Romanov dynasty by March 1917.',
    notes:
      'An extent question requiring the Tsar’s personal contribution to be weighed against forces beyond any Tsar’s control. His ledger: obstinate autocracy (the “senseless dreams” cast of mind; the October Manifesto conceded then undermined; the Fundamental Laws and the emasculated Dumas); disastrous personal choices — taking supreme command in August 1915, leaving government to Alexandra and Rasputin whose scandal destroyed the dynasty’s prestige; deafness to warnings (Rodzianko’s telegrams in February 1917) and the fatal order to suppress the Petrograd demonstrations by force. Against: structural pressures — the modernisation dilemma of autocracy, land hunger, an expanding working class, national minorities; and the war itself, which broke stronger states than Russia. Comparative test: could a Witte or Stolypin course have saved the dynasty? Strong answers use the February days to show agency and structure interacting (the garrison’s mutiny was not ordered by anyone) and reach a proportionate judgement — e.g. the regime was gravely endangered by 1914, but Nicholas’s leadership converted danger into certainty.',
  },
  {
    id: 'rus-e05',
    frame: 'E3',
    strand: 'event',
    era: 'mid',
    demand: 2,
    themes: ['rus-civilwar'],
    tags: ['rus-p3'],
    text: 'Assess the extent to which the weaknesses of their opponents explain the Bolshevik victory in the Russian Civil War by 1921.',
    notes:
      'Candidates must weigh White (and other opponents’) weaknesses against Red strengths, not merely list both. Opponent weaknesses: geographic dispersal on the peripheries with divided commands (Kolchak, Denikin, Yudenich never coordinated); no unifying programme — monarchists beside republicans, and a refusal to promise land to the peasants or autonomy to the nationalities; dependence on half-hearted foreign intervention that tainted them as tools of foreigners; corruption and pogroms alienating the population. Red strengths as counterweight: the central position (Moscow–Petrograd, the railways, the arms industry and manpower pool); Trotsky’s Red Army — conscription, Tsarist specialists under commissars, iron discipline; War Communism’s ruthless extraction; unified political will and propaganda. The peasantry’s reluctant preference for the side of land decree over the side of the landlords may be treated as the hinge. Historiography: Mawdsley, Figes on peasant war; Pipes on terror. A ranked judgement is required: strong answers argue whether opponent weakness was sufficient without Red organisation, and conclude accordingly.',
  },

  // ---------------- E4 — Relative importance of factors ----------------
  {
    id: 'rus-e06',
    frame: 'E4',
    strand: 'person',
    era: 'mid',
    demand: 3,
    themes: [],
    tags: ['rus-p4'],
    text: 'Assess the relative importance of the factors that enabled Stalin to defeat his rivals and secure power by 1929.',
    notes:
      'The frame demands ranking, not narration of the succession struggle. Factors to weigh: institutional power — the General Secretaryship (1922) and control of appointments, the Lenin Enrolment flooding the party with malleable new members who owed Stalin their cards; his rivals’ errors — Trotsky’s aloofness, refusal to use the Testament, absence from Lenin’s funeral, Zinoviev and Kamenev’s zig-zags, Bukharin’s late awakening; ideological positioning — “Socialism in One Country” as a doctrine of confidence against Trotsky’s permanent revolution, and Stalin’s serial alliances (with Zinoviev/Kamenev against Trotsky, with Bukharin against the United Opposition, then against Bukharin); the suppression of Lenin’s Testament; and Stalin’s underestimated political gifts — patience, mediocrity as camouflage (“the grey blur”), mastery of procedure. Candidates should also weigh structural context: the ban on factions (1921) turning every opposition into a crime. Historiography: Deutscher, Carr, Service, Kotkin. A defended hierarchy — e.g. machine first, rivals’ blunders second, doctrine third — distinguishes the top bands.',
  },
  {
    id: 'rus-e07',
    frame: 'E4',
    strand: 'event',
    era: 'late',
    demand: 3,
    themes: ['rus-gpw'],
    tags: ['rus-p8'],
    text: 'Assess the relative importance of the factors that enabled the USSR to secure victory in the Great Patriotic War of 1941 to 1945.',
    notes:
      'Ranking is the discipline. Factors: the command economy and the 1941 evacuation of industry (out-producing Germany in tanks and aircraft from 1943; the T-34); space, climate and manpower; coercion (Order 227, blocking detachments, penal units, deported nationalities) versus mobilised patriotism (the Motherland turn, church truce, Nevsky and Kutuzov, German atrocities converting the occupied population’s choice into survival); military leadership recovered from the purge (Zhukov, Vasilevsky, Rokossovsky) and the Stavka’s learning curve from Moscow through Stalingrad to Kursk and Bagration; Allied aid (Lend-Lease trucks, food, fuel — mobility for the offensives of 1943–45) and the second front’s timing; and German errors — the war of annihilation itself, divided objectives in 1941–42, Hitler’s no-retreat orders. Strong answers quantify where possible (27 million dead; tank output figures), engage the coercion-versus-consent debate, and argue a hierarchy — e.g. the evacuated war economy as foundation, operational learning as the edge, with aid and German blunders as multipliers — rather than a list.',
  },

  // ---------------- E5 — Analyse the significance ----------------
  {
    id: 'rus-e08',
    frame: 'E5',
    strand: 'event',
    era: 'early',
    demand: 2,
    themes: ['rus-civilwar'],
    tags: ['rus-p3'],
    text: 'Analyse the significance of the Treaty of Brest-Litovsk of March 1918 to the survival and development of the Bolshevik regime.',
    notes:
      'Significance should be analysed in several registers. Immediate: peace bought survival — the promise of October honoured and the army’s dissolution accepted as fact, freeing the regime to fight its internal enemies; the price staggering (a third of population and farmland, most coal and iron, Ukraine’s grain — Lenin’s “obscene peace”). Political: the treaty split the coalition — the Left SRs quit the government (and rose in July 1918), leaving one-party rule; inside the party it established Lenin’s authority to impose retreat on the revolutionary purists (Bukharin’s revolutionary war faction). Strategic: it convinced the Allies to intervene, feeding the Civil War; its annulment at Germany’s defeat in November 1918 recovered much, but the precedent — space traded for time, ideology bent to state survival — prefigured Realpolitik from Rapallo to the 1939 pact. Strong answers weigh short-term rescue against long-term costs and argue what the episode reveals of Leninism: the primacy of holding power. Answers that recount negotiations (Trotsky’s “neither war nor peace”) without analysing significance cap in the middle bands.',
  },
  {
    id: 'rus-e09',
    frame: 'E5',
    strand: 'event',
    era: 'mid',
    demand: 2,
    themes: ['rus-nep'],
    tags: ['rus-p5'],
    text: 'Analyse the significance of the New Economic Policy to the development of the Soviet state in the years 1921 to 1928.',
    notes:
      'Candidates should analyse significance economically, politically and ideologically. Economic: recovery from the 1921 catastrophe — the tax in kind restoring sowing, output near 1913 levels by 1926–27, the currency stabilised; but chronic imbalance (the scissors crisis, the goods famine, the 1927–28 procurement crisis) showing the model’s limits for industrialisation. Political: the retreat was paired with tightened dictatorship — the ban on factions (1921), the crushing of Kronstadt and Tambov, the show trial of the SRs (1922): market economics, monopoly politics. Social: the NEPman and the smychka (worker–peasant alliance) — and party loathing of both; the culture of relative pluralism in the arts. Ideological: NEP as the great unanswered question — Bukharin’s “enrich yourselves” road to socialism at a snail’s pace versus the left’s industrialisation drive; its abandonment in 1928–29 defining Stalinism by contrast. Strong answers argue NEP’s double significance: it saved the regime, and its tensions created the opening for the Great Turn. Historiography: Carr, Nove (“was NEP viable?”), Cohen on the Bukharin alternative.',
  },

  // ---------------- E6 — Examine ----------------
  {
    id: 'rus-e10',
    frame: 'E6',
    strand: 'group',
    era: 'late',
    demand: 2,
    themes: ['rus-greatturn'],
    tags: ['rus-p5'],
    text: 'Examine the impact of collectivisation and industrialisation on Soviet peasants and factory workers in the years 1928 to 1941.',
    notes:
      'The organising discipline is the two groups, each examined concretely. Peasants: dekulakisation (perhaps 1.8 million deported 1930–31), the destruction of village institutions and the slaughter of livestock (halved by 1933); the kolkhoz order — procurement first, labour-days, the internal passport system (1932) binding peasants to the farm; the famine of 1932–33 (millions dead, Ukraine and Kazakhstan worst); the private plot as grudging concession. Workers: the doubling of the industrial workforce as the villages emptied; falling urban real wages and rationing in the First Plan; labour discipline laws (lateness criminalised 1938–40), the end of unemployment; Stakhanovism, socialist competition, and genuine mobility — workers promoted to technical and party posts through rabfaks; the new cities (Magnitogorsk) with their barracks and enthusiasm together. Strong answers keep both halves in view, use figures, and conclude comparatively: the peasantry paid for industrialisation, workers experienced compulsion and opportunity at once.',
  },
  {
    id: 'rus-e11',
    frame: 'E6',
    strand: 'group',
    era: 'whole',
    demand: 2,
    themes: [],
    tags: ['rus-p6'],
    text: 'Examine the social impact of communist policies on women, education and the Russian Orthodox Church in the period to 1945.',
    notes:
      'Three domains, each with change over time. Women: the revolution’s legal transformation (divorce, civil marriage, abortion legalised 1920, Zhenotdel) and the 1930s “Great Retreat” (abortion banned 1936, family and motherhood re-glorified) — while economic mobilisation drew millions of women into industry and, in the war, into the army and every civilian role; the double burden as the lasting settlement. Education: the campaign against illiteracy (likbez) with real success by 1939; experimental 1920s pedagogy replaced by uniforms, discipline and fees (1940) in the Stalinist school; education as indoctrination and as genuine ladder. Church: separation decree (1918), confiscations and the famine-era assault on valuables, the League of the Militant Godless, closed and dynamited churches, clergy in the camps — then the wartime concordat of 1943 (patriarchate restored) as the state harnessed faith for the war. Strong answers argue a pattern: emancipatory and destructive impulses alike subordinated, by the mid-1930s, to the needs of the state — and use the war as the test that revealed which policies were tactics.',
  },

  // ---------------- E7 — Evaluate the consequences ----------------
  {
    id: 'rus-e12',
    frame: 'E7',
    strand: 'event',
    era: 'mid',
    demand: 2,
    themes: ['rus-civilwar'],
    tags: ['rus-p3'],
    text: 'Evaluate the consequences of the Russian Civil War for the development of the Soviet state to the end of the 1920s.',
    notes:
      'Candidates should evaluate — weigh and rank — consequences, not narrate the war. Political: one-party dictatorship consolidated (opposition parties dead by 1921, factions banned); the Cheka habit — emergency rule normalised; the party militarised in style and vocabulary (fronts, campaigns, mobilisations) — a formation Stalinism would inherit. Economic: industrial collapse and the 1921 famine forcing the NEP; a working class dispersed, replacing proletarian democracy with rule in the proletariat’s name. Social and institutional: the new bureaucracy of War Communism; veterans as the party’s cadre; the USSR’s federal structure (1922) built on the reconquered borderlands. International: isolation and the fortress mentality; Comintern militancy alongside pragmatic treaties. Also the demographic wound: perhaps ten million dead and the emigration of elites. The evaluative thread: how far the Civil War, rather than October, created the Soviet state’s permanent features — a major historiographical argument (Fitzpatrick, Koenker) worth engaging. A ranked conclusion distinguishes the top bands.',
  },

  // ---------------- E8 — Role of significant individuals ----------------
  {
    id: 'rus-e13',
    frame: 'E8',
    strand: 'person',
    era: 'early',
    demand: 2,
    themes: [],
    tags: ['rus-p2'],
    text: 'Evaluate the role of Vladimir Lenin in the Bolshevik seizure and consolidation of power in the years 1917 to 1924.',
    notes:
      'Role questions require judgement about distinctive contribution. The case for indispensability: April Theses turning the party against the Provisional Government when most Bolsheviks leaned toward accommodation; the insistence on insurrection in September–October against Zinoviev and Kamenev’s resistance; the decrees on peace and land binding the masses; the discipline to accept Brest-Litovsk; the founding decisions of consolidation — Cheka, dispersal of the Constituent Assembly, war communism, then the NEP reversal at exactly the moment of Kronstadt. The qualifications: Lenin was absent (Finland) or in hiding at key moments and October’s execution was Trotsky’s; mass radicalisation, army collapse and peasant land seizure were forces no individual created; and consolidation depended on many hands. Late period: incapacity from 1922, the Testament, and the machine he built escaping him. Historiography: the “no Lenin, no October” counterfactual (endorsed in different ways by Pipes and Trotsky himself) versus social-history de-centring. Strong answers weigh person against process and reach a defended verdict.',
  },
  {
    id: 'rus-e14',
    frame: 'E8',
    strand: 'person',
    era: 'early',
    demand: 2,
    themes: ['rus-civilwar'],
    tags: ['rus-p3'],
    text: 'Evaluate the role of Leon Trotsky in the survival of the Bolshevik regime in the years 1917 to 1921.',
    notes:
      'Candidates should evaluate Trotsky’s contribution across insurrection and civil war. October: as chairman of the Petrograd Soviet and organiser of the MRC he planned and timed the seizure of power (Stalin’s later histories notwithstanding); his “dustbin of history” dismissal of the moderates marked the new order’s temper. Civil War: creation of the Red Army from nothing — conscription, the employment of some 50,000 Tsarist officers under commissar surveillance and hostage-taking, the armoured train (an estimated 100,000 miles), restoration of discipline including decimation and the death penalty; Kazan (1918) and the defence of Petrograd (1919) as personal interventions. Also: Brest-Litovsk’s “neither war nor peace” (a costly misjudgement), the militarisation of labour and the Kronstadt suppression (with Tukhachevsky) — survival’s ugly ledger. Qualifications: Lenin’s political primacy; the structural advantages (centre, numbers) no commissar created; colleagues (Sverdlov, Dzerzhinsky). Strong answers avoid hagiography and anti-hagiography alike and argue a precise verdict: probably indispensable to military survival, never the regime’s master.',
  },
  {
    id: 'rus-e15',
    frame: 'E8',
    strand: 'person',
    era: 'late',
    demand: 3,
    themes: ['rus-greatturn', 'rus-terror'],
    tags: ['rus-p4', 'rus-p7'],
    text: 'Evaluate the role of Josef Stalin in the transformation of the Soviet Union in the years 1929 to 1941.',
    notes:
      'The question invites judgement on how far the transformation was Stalin’s in conception and execution. His signature: the Great Turn itself — the decision to break the peasantry and industrialise at forced pace (against Bukharin’s alternative); the tempo (“fifty to a hundred years behind… we must make good this distance in ten years”, 1931); the personal direction of the Terror (Order 00447 quotas, death lists over his signature, the choice of Yezhov and then his liquidation); the cult remaking public culture; the diplomatic revolution of 1939. Qualifications and debate: the machine had its own dynamics (regional bosses over-fulfilling arrest quotas; Getty’s decentred terror); industrialisation drew on plans and enthusiasms wider than one man; and structural pressures (war scare of 1927, backwardness, the procurement crisis) framed the options. Balance sheet by 1941: an industrial-military base that survived invasion — and a society traumatised, an army beheaded, a leadership deceived about the German attack. Historiography: Kotkin (Stalin as author), Fitzpatrick, Getty. Strong answers distinguish domains (economy, terror, culture, foreign policy) and argue a differentiated verdict.',
  },

  // ---------------- E9 — Significance of ideas ----------------
  {
    id: 'rus-e16',
    frame: 'E9',
    strand: 'idea',
    era: 'whole',
    demand: 3,
    themes: [],
    tags: ['rus-p9'],
    text: 'Assess the significance of the ideas of Leninism and Stalinism in shaping the Soviet state in the period 1917 to 1945.',
    notes:
      'Candidates should define both ideas and assess their work in the world. Leninism: the vanguard party of professional revolutionaries; democratic centralism; imperialism as capitalism’s final stage justifying revolution in backward Russia; the dictatorship of the proletariat exercised through the party — ideas visible in the party’s form, the ban on factions, the Comintern, and the doctrine that the end of socialism licenses any means. Stalinism: socialism in one country turning the state inward to fortress-building; the intensification-of-class-struggle thesis licensing permanent terror; planning as command; the cult of the leader grafted onto Marxist vocabulary; national Bolshevism’s patriotic turn by the war. Assessment requires argument about causal force: did ideas drive practice, or dress necessity and power? Test cases: Brest-Litovsk and the NEP (ideology bent to survival), the Great Turn (ideology as accelerant), the Terror (doctrine of enemies made operational), 1941–45 (Motherland trumping Marx). Historiography: Kotkin on ideology as constitutive; Pipes; revisionists on circumstance. The strongest answers reach a nuanced verdict — e.g. ideas set the menu of the possible while power chose the dishes — supported across the whole period.',
  },

  // ---------------- E10 — Compare ----------------
  {
    id: 'rus-e17',
    frame: 'E10',
    strand: 'structure',
    era: 'whole',
    demand: 3,
    themes: ['rus-terror'],
    tags: ['rus-p3', 'rus-p7'],
    text: 'Compare the methods used by the Bolshevik regime under Lenin with those used by the Stalinist regime to control Soviet society in the period 1917 to 1945.',
    notes:
      'A compare question requiring similarities and differences argued through, not two narratives. Similarities — the continuity case: one-party rule and the ban on opposition (Constituent Assembly dispersed 1918; factions banned 1921); political police from the Cheka to the NKVD (the institution renamed, never abolished); camps from 1918; censorship; terror as acknowledged policy (the Red Terror decree, hostage-taking; Lenin’s hanging orders) — the argument that Stalin inherited a toolbox. Differences — the discontinuity case: scale and target (Lenin’s terror aimed at class enemies in civil war; Stalin’s consumed the party itself, the army command and randomised society through quotas); the cult of personality (absent, indeed mocked, under Lenin); the total mobilisation of culture (socialist realism) versus the 1920s’ relative pluralism; the planned economy as an instrument of social control; show trials of communists and the confession ritual. Historiography: the continuity thesis (Pipes) versus rupture (Cohen: Stalinism as betrayal; Lewin). Strong answers organise by method (police, party, culture, economy), weigh continuity against escalation, and conclude with a defended judgement.',
  },
];
