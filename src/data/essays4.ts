import type { EssayQuestion } from './types';

// Essay questions e61–e85: coverage for every syllabus point on its own,
// especially point 1 (Germany at the end of WWI), and the new set themes.

export const ESSAYS_4: EssayQuestion[] = [
  // ---------------- Point 1: Germany at the end of WWI ----------------
  {
    id: 'e61',
    frame: 'E4',
    strand: 'event',
    era: 'early',
    demand: 2,
    themes: ['monarchy-fall'],
    tags: ['p1'],
    text: 'Assess the relative importance of the factors that caused the collapse of Imperial Germany in November 1918.',
    notes:
      '“Relative importance” demands a ranked, defended hierarchy, not a catalogue. The factor field: military defeat — the failed spring offensives, the “black day” of 8 August, Ludendorff’s September demand for an armistice — as the trigger the nation was never honestly told about; the home front’s exhaustion — the blockade, the turnip winter, hundreds of thousands of excess civilian deaths, strikes from January 1918; the collapse of legitimacy — a monarchy that had staked everything on victory and could not survive without it, the Kaiser’s flight to headquarters and irrelevance; and the revolutionary spark — the naval command’s suicidal sortie order, Kiel, and the spread of the councils. A reliable discriminator distinguishes preconditions (defeat, hunger, delegitimation) from the trigger (the sailors’ refusal), and notes the striking absence of defenders — no institution fought for the old order. Historiography: the “revolution from above” (Ludendorff’s handover to civilians) against the revolution from below. Description of each cause is not enough; the hierarchy must be explicit and defended.',
  },
  {
    id: 'e62',
    frame: 'E6',
    strand: 'group',
    era: 'early',
    demand: 2,
    themes: ['home-front'],
    tags: ['p1'],
    text: 'Examine the impact of the Allied blockade and wartime shortages on German civilians to 1919.',
    notes:
      'The essay must go beyond description of hunger to assess the shortages’ social and political effects and their limits. Material impact: rationing from 1915, the failed potato crop and turnip winter of 1916–17, official rations sinking toward a thousand calories, hundreds of thousands of excess deaths from malnutrition and disease, capped by the 1918 influenza. Social impact: the queues as women’s daily labour; the black market and the unequal distribution of hunger by class, connection and region — hunger experienced as injustice, not just misery; the erosion of respect for law as theft and foraging normalised. Political impact: the state’s failure at its most basic duty draining legitimacy from the monarchy; the strikes of 1917–18 with bread among their demands; and the blockade’s continuation until mid-1919 sharpening the bitterness at Versailles. The counter-weights belong in the assessment: the home front held for four years, and hunger alone did not make revolution — it required defeat. Statistics and the ration-card machinery anchor the top evidence band; a catalogue of miseries without differential analysis caps in the middle bands.',
  },
  {
    id: 'e63',
    frame: 'E5',
    strand: 'event',
    era: 'early',
    demand: 1,
    themes: ['revolution'],
    tags: ['p1'],
    text: 'Analyse the significance of the Kiel mutiny to the German Revolution of 1918.',
    notes:
      'Continuous linkage between the mutiny and the revolution is required — a narrative of early November caps out. Dimensions of significance: the trigger — the naval command’s order for a final honour-saving sortie against the British fleet, the crews’ refusal at Wilhelmshaven and Kiel from 29 October, the arrests, and the sailors’ demonstrations that turned mutiny into rising; the mechanism — the sailors’ and workers’ councils as the revolution’s organisational form, exported along the railway lines so that city after city fell without a battle within a week; the character — the mutineers’ demands (peace, release of prisoners, an end to officers’ petty tyranny) stamping the revolution as war-weariness rather than Bolshevism; and the limit — Kiel began the monarchy’s fall but did not determine what followed: Ebert, the Council of People’s Deputies and the army pact shaped the outcome. Candidates may conclude the mutiny was the indispensable spark of a revolution whose fuel (defeat, hunger, delegitimation) had accumulated elsewhere, and should defend the judgement. Writing only about the mutiny’s famous first days will not achieve the higher marks.',
  },
  {
    id: 'e64',
    frame: 'E7',
    strand: 'group',
    era: 'early',
    demand: 2,
    themes: ['freikorps'],
    tags: ['p1'],
    text: 'Evaluate the consequences of demobilisation for German society and politics in 1918–1919.',
    notes:
      'Consequence questions reward range: short- and long-term, intended and unintended, differential by group. The orderly surface: six million men returned and largely absorbed — the eight-hour day, the Stinnes–Legien agreement and works councils as the price of order; women pushed back out of wartime employment. The disorderly depths: veterans’ embitterment and the “front generation” myth; the Freikorps — demobilised officers and men re-armed by the Republic against the left — with their suppression of the January rising and Munich, the murders of Liebknecht and Luxemburg, and the precedent of state-sponsored paramilitary violence; the flooded labour market and inflation eroding the returnees’ savings; and the psychological demobilisation that never happened — the war continued in leagues, putsches and street armies through 1923 and beyond. Differential evaluation is the discriminator: most veterans went quietly home; a violent minority shaped the Republic’s fate disproportionately. Strong conclusions weigh which consequence proved most durable — many candidates will argue the Freikorps bargain and its legitimation of political violence. Recounting the armistice weeks without evaluation caps in the low bands.',
  },
  {
    id: 'e65',
    frame: 'E2',
    strand: 'idea',
    era: 'early',
    demand: 3,
    themes: ['end-of-war'],
    tags: ['p1'],
    text: 'Debate the proposition that Germany’s defeat in 1918 was caused by collapse at home rather than defeat on the battlefield.',
    notes:
      'As this is a debate question, for candidates to gain the higher marks, they must address evidence that both supports and refutes this claim. This proposition is the “stab-in-the-back” legend in analytical dress, and candidates should name that fact. Supporting the claim (the case to be tested): the home front’s real disintegration — hunger, strikes, the January 1918 stoppages, revolution spreading while armies stood on foreign soil; the navy mutinied before the army was broken through. Refuting it: the military verdict came first — the spring offensives failed with catastrophic losses, the Allies’ counteroffensives from 8 August rolled the front back continuously, Germany’s allies collapsed (Bulgaria, Austria, Turkey), and it was Ludendorff, not politicians or strikers, who on 29 September demanded an immediate armistice, before any revolution existed; the home collapse followed the military one and was accelerated by the leadership’s own admission of defeat. The historiographical stakes should be explicit: the legend’s deliberate manufacture (Ludendorff’s “eat the soup”, the Hindenburg testimony of 1919), its antisemitic edge, and its use against the Republic. Strong responses distinguish causes of defeat (military) from the manner of the war’s end (revolution), and reach a defended verdict.',
  },

  // ---------------- Point 2: the Weimar Republic ----------------
  {
    id: 'e66',
    frame: 'E5',
    strand: 'structure',
    era: 'whole',
    demand: 2,
    themes: ['constitution', 'bruening'],
    tags: ['p2'],
    text: 'Analyse the significance of Article 48 of the Weimar constitution to the fortunes of German democracy between 1919 and 1933.',
    notes:
      'Linkage between the article and democracy’s fortunes must run across the Republic’s life — camping on 1930–33 caps out. The double career is the analytical core: under Ebert, Article 48 as democracy’s shield — used against the 1923 crises (Ruhr, hyperinflation stabilisation, Saxony, the Munich putsch) and relinquished when the emergency passed; under Hindenburg, as its solvent — Brüning’s deflation decrees from 1930 normalising government without the Reichstag, the decree state under Papen and Schleicher, and the Reichstag Fire Decree of February 1933 converting the article into the dictatorship’s legal foundation. Dimensions of significance: the article as written (broad powers, weak safeguards — the Reichstag could revoke decrees, but dissolution trumped revocation); the dependence on the president’s person (Ebert’s republicanism against Hindenburg’s circle); and the deeper argument — whether the article caused the collapse or merely provided the form for choices made by men. Historiography: Bracher on the structural flaw; Kershaw and Evans on agency. Candidates may conclude the article was the door, not the burglar — but must argue it.',
  },
  {
    id: 'e67',
    frame: 'E3',
    strand: 'event',
    era: 'early',
    demand: 2,
    themes: ['kapp'],
    tags: ['p2'],
    text: 'Assess the extent to which the Kapp Putsch of 1920 demonstrated the weakness of the Weimar Republic.',
    notes:
      'The phrase “the extent to which” licenses a graded verdict and obliges candidates to weigh evidence of weakness against evidence of strength. The case for weakness: the army’s refusal to defend the government (“troops do not fire on troops”) exposing the Ebert–Groener pact’s one-sidedness; the government’s flight from Berlin; the judiciary’s aftermath — 705 prosecutions, one conviction — teaching the right that treason was safe; the Ruhr rising that followed, suppressed by the same army with severity the putschists never faced. The case against: the putsch collapsed in five days without the government firing a shot — the general strike of twelve million, the civil service’s refusal to obey Kapp, and the putschists’ own incompetence demonstrated that the Republic commanded, in 1920, a mass loyalty its enemies could not break; the March 1920 election… was postponed, but June 1920 showed the republican parties’ losses — evidence cutting both ways. Strong responses separate the institutions: society (strong for the Republic), army and judiciary (already lost to it) — the putsch as an X-ray of exactly where the Republic’s weakness lay. A graded verdict must be argued, not asserted.',
  },
  {
    id: 'e68',
    frame: 'E7',
    strand: 'event',
    era: 'early',
    demand: 2,
    themes: ['ruhr', 'weimar-crises'],
    tags: ['p2'],
    text: 'Evaluate the consequences of the occupation of the Ruhr in 1923 for the Weimar Republic.',
    notes:
      'Range across consequence types is the discriminator: economic, political, diplomatic; immediate and long-term; intended and unintended. Economic: passive resistance funded by the printing press converting chronic inflation into hyperinflation — the mark’s collapse to the trillions, the destruction of savings and the middle-class trauma that outlasted the year. Political: the national unity of January (the Republic’s only such moment) souring into the autumn crises — separatism, the communist risings in Saxony and Thuringia, the Munich putsch — and Stresemann branded a traitor for the surrender that saved the state. Diplomatic and longer-term: France’s pyrrhic victory and isolation; the turn to negotiation — Dawes, Locarno, the “golden years” financed by American credit; and the psychological legacy — the fear of inflation that paralysed policy in the next crisis (Brüning’s deflation). The unintended consequences carry the top band: the catastrophe produced the stabilisation, and the stabilisation’s architects never escaped the hatreds of 1923. Responses should end around the mid-1920s consequences with brief forward reference; drifting to 1933 unanchored will not achieve strong marks.',
  },
  {
    id: 'e69',
    frame: 'E6',
    strand: 'group',
    era: 'early',
    demand: 2,
    themes: ['kapp', 'freikorps'],
    tags: ['p2'],
    text: 'Examine the impact of political violence on the Weimar Republic and its supporters between 1919 and 1923.',
    notes:
      'Candidates must address both the Republic as a system and its supporters as people, though not necessarily equally. The record: the January 1919 fighting and the murders of Liebknecht and Luxemburg; the Munich Räterepublik’s suppression; Kapp and the Ruhr rising; the assassination campaign — Erzberger (1921), Rathenau (1922), some 350 political murders overwhelmingly from the right; the Munich putsch. Impact on the system: emergency law normalised (the Law for the Protection of the Republic, 1922); the army’s conditional loyalty exposed; and above all the judiciary’s double standard — left-wing violence punished savagely, right-wing murder indulged — teaching enemies that the Republic could be attacked at discount. Impact on supporters: the Republic’s founders governing under death threats; the massive Rathenau funeral demonstrations showing republican loyalty at its peak even as they revealed what it was up against; the brutalisation of political culture — parties with armies — that never afterwards demobilised. The assessment should push to how far violence weakened the Republic by 1923: wounded but standing, its worst injury the lesson its own courts taught. Description of incidents without systemic analysis caps in the middle bands.',
  },
  {
    id: 'e70',
    frame: 'E1',
    strand: 'idea',
    era: 'mid',
    demand: 3,
    themes: ['culture'],
    tags: ['p2'],
    text: 'Evaluate the proposition that the culture of the Weimar years weakened the Republic more than it strengthened it.',
    notes:
      'A genuinely contestable proposition on the political meaning of the era’s culture. The case for: the culture war as a real front — “asphalt culture” as the right’s master-symbol for everything the Republic had done to Germany; the visible modernity of Berlin (the new woman, cabaret, sexual and artistic experiment) alienating provincial, confessional and rural Germany, whose defection after 1929 doomed the Republic; much of high Weimar culture itself anti-republican or apolitical — the republic of the intellectuals was mocked from left and right alike. The case against: the culture was the Republic’s greatest achievement and its best advertisement abroad; it expressed freedoms only the Republic guaranteed; blaming culture for the reaction against it inverts responsibility — the audience for resentment was created by war, inflation and depression, not by cabaret; and republican culture (the Bauhaus’s democratic design, mass sport, cinema) reached and pleased millions. Historiography: Peukert’s “classical modernity” and its strains; Gay’s “outsider as insider”. Both sides must be argued with specific cultural evidence (works, figures, institutions); a survey of the arts without political argument cannot achieve the higher marks.',
  },

  // ---------------- Point 3: the Nazi rise ----------------
  {
    id: 'e71',
    frame: 'E5',
    strand: 'person',
    era: 'mid',
    demand: 2,
    themes: ['hitler-appeal', 'nazi-rise'],
    tags: ['p3'],
    text: 'Analyse the significance of Hitler’s oratory and public image to the growth of the Nazi movement to 1933.',
    notes:
      'Continuous linkage between the man’s appeal and the movement’s growth is required — biography caps out. Dimensions: the oratory itself — the staged build, the voicing of each audience’s resentment as the nation’s, vagueness as an asset letting every listener complete the programme; the constructed image — the Führerprinzip within the movement, the posters reducing politics to a face, the staging (delayed arrivals, searchlights, the 1932 “Hitler over Germany” flights) borrowing religious and cinematic forms; and the demand side — the longings (unity, greatness, rescue) that the Republic left unfed and the Depression made desperate. The limits belong in the analysis: the appeal won a third of Germany, never a majority; it barely moved Catholic and socialist milieus; the vote fell in November 1932 when the magic seemed spent; and the chancellorship came by intrigue, not acclamation. Candidates may conclude the appeal was the movement’s binding agent and multiplier rather than a sufficient cause. Historiography: Kershaw’s charismatic authority and the myth as co-production. Evidence should include specific stagecraft, election statistics and contemporary testimony.',
  },
  {
    id: 'e72',
    frame: 'E6',
    strand: 'structure',
    era: 'mid',
    demand: 2,
    themes: ['elections', 'goebbels-berlin'],
    tags: ['p3'],
    text: 'Examine the nature and effects of Nazi propaganda methods in the election campaigns of 1930 to 1933.',
    notes:
      'Both elements — nature AND effects — are required for the higher marks. Nature: saturation (posters on every column, ten thousand meetings in a campaign’s final weeks); modernity (aircraft, film, loudspeakers, records — the 1932 flights making Hitler the first politician to campaign by air); differentiation (tailored appeals to farmers, women, the middle class, workers — a promise for everyone and figures for no one); spectacle and violence as message (the SA’s marches and battles dramatising order-through-strength); and the Führer-centred simplification of politics to salvation versus ruin. Effects: the breakthrough from 2.6 to 37.3 per cent with the Depression as amplifier; the colonisation of Protestant small-town and rural Germany; the collapse of the bourgeois centre parties whose voters the methods harvested — but also the ceiling: the November 1932 losses when novelty faded and funds ran short, the Catholic and socialist blocs largely unmoved, and the final step taken in the antechamber, not the street. Assessment must weigh methods against conditions: the same machine had won 2.6 per cent in prosperity. Description of techniques without effects, or effects without the machine, caps in the middle bands.',
  },
  {
    id: 'e73',
    frame: 'E4',
    strand: 'structure',
    era: 'mid',
    demand: 2,
    themes: ['bruening', 'divided-left'],
    tags: ['p2', 'p3'],
    text: 'Assess the relative importance of the factors that destroyed the moderate parties of the Weimar Republic between 1928 and 1933.',
    notes:
      '“Relative importance” demands a ranked, defended hierarchy. The phenomenon first: the liberal parties (DDP, DVP) reduced from a fifth of the vote to insignificance; the DNVP’s moderate wing absorbed by Hugenberg’s radicalism; the Centre holding but rightward-drifting; only the SPD and the Catholic bloc retaining mass loyalty. The factor field: the Depression destroying the middle-class material base and with it the politics of moderation; the interest-fragmentation of the bourgeois centre (splinter parties harvesting its voters before the Nazis harvested them all); presidential government making the Reichstag — the moderates’ arena — irrelevant, so moderation lost its point; the polarising pull of the extremes (fear of communism driving voters rightward past the moderates); and leadership failures — the SPD’s toleration of Brüning without power, the Centre’s pursuit of concordat and authority. A reliable discriminator: distinguish the destruction of the moderate voter (economic and social) from the destruction of moderate politics (institutional — the decree state). Election statistics 1928–1932 anchor the top band. The hierarchy must be explicit and defended.',
  },
  {
    id: 'e74',
    frame: 'E7',
    strand: 'event',
    era: 'mid',
    demand: 2,
    themes: ['nazi-rise', 'bruening'],
    tags: ['p2', 'p3'],
    text: 'Evaluate the consequences of the Great Depression for German politics between 1929 and 1933.',
    notes:
      'Range across consequence types is the discriminator — institutional, electoral, ideological — with the essay evaluating, not chronicling. Institutional: the collapse of the Grand Coalition (March 1930) over unemployment insurance; presidential government by Article 48; the Reichstag’s self-marginalisation — democracy suspended in practice before it was abolished in law. Electoral: the radicalisation of despair — the NSDAP from 2.6 to 37.3 per cent, the KPD rising every election, the moderate middle destroyed; the sociology of the shift (middle-class panic and rural crisis feeding the Nazis; the young unemployed feeding the KPD). Ideological and social: politics militarised (armies on the streets), fear of communism making conservative elites deal with Hitler, and the state’s visible impotence discrediting the very idea of parliamentary rule. The essential qualification for the top band: the Depression made the Republic’s destruction possible, not its destroyer’s identity inevitable — Brüning’s deflation, Hindenburg’s circle and the backstairs intrigue were choices within the crisis. Candidates should weigh which consequence mattered most; the strongest cases usually argue for the decree state as the bridge to dictatorship.',
  },

  // ---------------- Point 4: the Nazi state ----------------
  {
    id: 'e75',
    frame: 'E5',
    strand: 'structure',
    era: 'late',
    demand: 2,
    themes: ['camps', 'gestapo'],
    tags: ['p4'],
    text: 'Analyse the significance of the concentration camp system to Nazi control of Germany between 1933 and 1939.',
    notes:
      'Continuous linkage between the camps and control is required — a history of the camps alone caps out. Dimensions: the founding function — the 1933 improvised camps breaking the left with some 100,000 passing through “protective custody” in the first year; the deterrent function — the advertised camp (Himmler’s Dachau press conference) making the threat known to every German, so that the system disciplined millions while holding thousands; the institutional function — Eicke’s Dachau model, the SS’s capture of the system after 1934, the camps as the SS state’s foundation and training ground; and the expanding category function — from political prisoners to “asocials”, “habitual criminals”, homosexual men and Jews in the late-1930s waves, the camp defining the Volksgemeinschaft by its exclusions. The counterweight belongs in the analysis: by 1936–37 the camps held under 10,000 — control rested equally on consent, and the regime knew it. Candidates may conclude the system’s significance lay less in whom it held than in what everyone knew it could hold. Historiography: Wachsmann on the camps; Gellately on the publicity of terror.',
  },
  {
    id: 'e76',
    frame: 'E6',
    strand: 'group',
    era: 'late',
    demand: 2,
    themes: ['unions', 'economy'],
    tags: ['p4'],
    text: 'Examine the impact of Nazi rule on German workers and German employers between 1933 and 1939.',
    notes:
      'Candidates must address both workers and employers, but it is not essential that they give both comparable discussion. Workers: the destruction of unions (2 May 1933) and of bargaining power — wages frozen by Trustees of Labour near slump levels, hours lengthening, mobility restricted by 1938–39; against material and symbolic gains — full employment by 1936–38 after the six-million trauma, job security, KdF holidays and Beauty of Labour amenities, the rhetoric of the worker’s honour; the net judgement (security without freedom or share in growth) is the analytical core. Employers: the bargain’s other side — unions gone, works councils replaced, profits and dividends recovering years ahead of wages, rearmament order books; against progressive subordination — price, foreign-exchange and raw-material controls, the Four-Year Plan overriding business judgement, the state building its own steel over industry’s objection; profitable, and decreasingly free. The comparison is the discriminator: both groups traded autonomy for the regime’s goods, on terms that favoured capital materially and the state absolutely. SOPADE evidence on worker opinion and the wage/profit statistics anchor the top band.',
  },
  {
    id: 'e77',
    frame: 'E1',
    strand: 'structure',
    era: 'late',
    demand: 3,
    themes: ['gestapo'],
    tags: ['p4'],
    text: 'Evaluate the proposition that, in the years 1933 to 1939, the Gestapo’s power depended more on the cooperation of ordinary Germans than on its own strength.',
    notes:
      'A proposition built on a genuine historiographical fault line; both sides must be addressed with specific evidence for the higher marks. The case for: the staffing arithmetic (a few dozen officers for great districts — under 50 for Essen, under 300 for Düsseldorf’s four million); the case-file studies showing a majority of proceedings opened by voluntary denunciation from neighbours, workmates and kin, with motives from conviction to private spite; the flood of trivial accusations offices complained of; the Blockwart web and self-policing normality. The case against: cooperation was structured by terror — denunciation had power only because the apparatus behind it was lethal and lawless (protective custody, the camps, the People’s Court); the Gestapo’s targeted capacity against real enemies (the underground’s destruction) was formidable; its reputation for omniscience was itself an instrument the regime built deliberately; and for the racially excluded, no “cooperation” framework applies — power was naked. Historiography: Gellately’s self-policing society against critiques that it understates terror. Strong conclusions argue the two were a system — participation weaponised by fear — then still assign relative weight, as the proposition demands.',
  },
  {
    id: 'e78',
    frame: 'E5',
    strand: 'event',
    era: 'late',
    demand: 2,
    themes: ['rallies', 'propaganda'],
    tags: ['p4'],
    text: 'Analyse the significance of the Nuremberg rallies to the Nazi regime’s hold over the German people between 1933 and 1938.',
    notes:
      'Linkage to the regime’s hold — not a description of the spectacle — is the discriminator. Dimensions: the rally as manufactured experience — unity, hierarchy and consecration physically felt under discipline by hundreds of thousands of participants; the rally as film — Riefenstahl’s cameras making the real audience tens of millions and the experience repeatable and perfected; the rally as calendar — the September week ritualising the regime’s year, with the Blood Flag liturgy binding movement history into worship; the rally as announcement — the 1935 race laws promulgated at Nuremberg showing the stage’s political function; and the rally as foreign display. The limits belong in the analysis: participants were the committed, boredom and grumbling appear even in rally reports, and the experience bound believers rather than converting sceptics — the hold it strengthened was over the mobilised minority through whom the regime gripped the rest. Candidates may weigh the rallies against the quieter instruments (radio, school, terror) and should defend a judgement. Writing only about staging without function caps in the middle bands.',
  },

  // ---------------- Point 5: resistance ----------------
  {
    id: 'e79',
    frame: 'E5',
    strand: 'person',
    era: 'late',
    demand: 2,
    themes: ['elser'],
    tags: ['p5'],
    text: 'Analyse the significance of Georg Elser’s assassination attempt of November 1939 for an understanding of German resistance.',
    notes:
      'The question asks what Elser’s case reveals about resistance — linkage to that understanding is essential. Dimensions: what the deed shows was possible — a single worker, without organisation, funds or foreign help, out-planning the security state and coming within thirteen minutes of killing Hitler before the war in the west began; what his motives show — precise, worldly observation (falling wages, bound labour, certain war) available to any attentive German, undermining every later plea of impossibility and ignorance; what the reactions show — the regime inventing British handlers because a lone artisan was inadmissible, and post-war memory’s decades of discomfort with a killer who fitted no category (too early, too alone, too working-class), against the honoured officers of 1944; and what the comparison yields — Elser acting in 1939 on conclusions the elites reached in 1944, which sharpens the question of what withheld them. The counter-side: the deed’s failure changed nothing and killed eight; lone action’s limits are part of the analysis. Candidates may conclude Elser’s significance is diagnostic — a measure of what conscience plus competence could do, and how rare the combination was.',
  },
  {
    id: 'e80',
    frame: 'E6',
    strand: 'group',
    era: 'late',
    demand: 2,
    themes: ['left-resistance'],
    tags: ['p5'],
    text: 'Examine the nature and extent of working-class resistance to the Nazi regime between 1933 and 1945.',
    notes:
      'Both elements — nature AND extent — must be addressed. Nature: the phases — attempted continuity 1933–35 (underground party structures, printed papers, dues), decimated in the mass trials; the cell-of-three era after 1936 (camouflaged pamphlets, prisoner-family aid, the maintenance of milieux); wartime networks (Uhrig, Saefkow, the Red Orchestra’s worker members) and workplace dissent short of organisation (slowdowns, absenteeism, “grumbling”). Extent: tens of thousands imprisoned for political offences — the movement’s activists supplying a grossly disproportionate share of the camps’ early population and the regime’s executions; against the majority of workers reached by employment, fear and KdF, and the milieus’ cold loyalty rather than active fight. The assessment should engage the boundary question (Peukert): where does nonconformity end and resistance begin — and resist inflating either the heroism or the futility. The KPD–SPD division carried underground, and Moscow’s about-turns burdening communist resisters, belong in the analysis. Strong conclusions weigh endurance as achievement: the milieux outlasted the regime and staffed the post-war reconstruction of labour institutions.',
  },
  {
    id: 'e81',
    frame: 'E1',
    strand: 'group',
    era: 'late',
    demand: 3,
    themes: ['everyday-dissent'],
    tags: ['p5'],
    text: 'Evaluate the proposition that German resistance to Nazism between 1933 and 1945 failed because ordinary Germans did not support it.',
    notes:
      'Both sides of the proposition must be addressed with specific evidence for the higher marks. The case for: the sociology of denunciation — resisters betrayed overwhelmingly by fellow citizens, not detected by police work; the isolation every group testified to (the White Rose’s leaflets handed to the Gestapo, the 20 July plotters’ despair of the people, popular fury at the “traitors” of 1944 recorded even in SD reports); the Führer myth and real consent narrowing resistance’s water to swim in; and the courts, professions and churches supplying the regime, not its opponents. The case against: the proposition mistakes effect for cause — resistance failed first because the regime destroyed every structure (parties, unions, press) through which support could have formed, and made support lethal (Sippenhaft, the camps), so absence of support measures terror as much as opinion; where protest had cover and numbers (Galen’s T4 sermon, the Rosenstrasse wives), the regime retreated — suggesting latent support that organisation could never reach; and some resistance never sought popular support (espionage, rescue) — its failure had other causes. Historiography: Kershaw’s “resistance without the people”; Gellately on self-policing; Peukert on the dissent that coexisted with conformity. A defended verdict is required; strong answers refine “support” (active aid vs passive sympathy) before judging.',
  },

  // ---------------- Point 6: persecution and the Holocaust ----------------
  {
    id: 'e82',
    frame: 'E5',
    strand: 'event',
    era: 'late',
    demand: 2,
    themes: ['t4', 'galen'],
    tags: ['p6'],
    text: 'Analyse the significance of the T4 “euthanasia” programme to the development of Nazi extermination policy after 1939.',
    notes:
      'Continuous linkage between T4 and the wider extermination policy is required. Dimensions: doctrinal — the 1933 sterilisation law and “life unworthy of life” establishing that the state might destroy the “unfit”, with the disabled as the first victims of systematic killing (some 70,000 gassed by August 1941; tens of thousands more in the decentralised phase); technical — selection by paperwork, the front organisations and euphemisms, the gas chamber disguised as a shower room, cremation and the falsified death notice: the Holocaust’s methods in rehearsal; personnel — Wirth, Stangl, Franz and the T4 staff transferred to build and command the Reinhard camps; and political — the Galen protest and the halt order teaching the perpetrators that visibility inside the Reich was the constraint, and geography the solution: the next gas chambers were built in occupied Poland. The qualification for the top band: continuity is not identity — the decision for the “final solution” had its own drivers (war, ideology, the failed territorial schemes), and T4 supplied means and men rather than the decision. Victims must be named as subjects, not steps. Historiography: Friedlander’s euthanasia–genocide continuum; Burleigh. Precision and sobriety are required throughout.',
  },
  {
    id: 'e83',
    frame: 'E6',
    strand: 'structure',
    era: 'late',
    demand: 3,
    themes: ['ghettos'],
    tags: ['p6'],
    text: 'Examine the nature and effects of the ghetto system imposed on the Jews of Nazi-occupied Poland from 1939.',
    notes:
      'Both elements — nature AND effects — must be addressed. Nature: sealing and overcrowding (Warsaw’s 400,000 behind walls, Łódź’s 160,000 behind wire); rations set below survival; forced labour on the German account; delegated administration through Jewish councils confronted with designed-to-be-impossible choices; the system proclaimed transitional while the territorial “solutions” failed. Effects: mass death before deportation — starvation and typhus killing hundreds of thousands (43,000 in Łódź alone, nearly 100,000 in Warsaw); the destruction of communal wealth and the plunder of labour; the concentration that made the 1942 deportations administratively simple — the ghettos becoming antechambers of Treblinka and Chełmno; and the effects the perpetrators did not intend: documented endurance (schools, archives like Ringelblum’s, the diaries), smuggling as survival, and armed revolt — Warsaw in April 1943 holding the SS longer than some states had resisted invasion. The assessment should engage the interpretive question: the ghetto as stage of the extermination (the syllabus framing) versus way-station improvised while policy radicalised — the structure permitted both readings until 1941 resolved them. Victims as subjects, not statistics; precision and sobriety throughout.',
  },
  {
    id: 'e84',
    frame: 'E4',
    strand: 'event',
    era: 'late',
    demand: 3,
    themes: ['deportation'],
    tags: ['p6'],
    text: 'Assess the relative importance of the factors that turned Nazi persecution of the Jews into systematic extermination between 1939 and 1942.',
    notes:
      '“Relative importance” demands a ranked, defended hierarchy across the decisive three years. The factor field: ideology — the eliminationist antisemitism fixed since Mein Kampf and the January 1939 “prophecy”, the necessary condition and direction-setter; war — the cover, the brutalisation, and the “problem” the conquests created (millions more Jews under German control in Poland, then the USSR); the failed territorial schemes — Nisko, Madagascar, the “reservation” fantasies whose collapse closed every option the perpetrators considered short of murder; the eastern war of annihilation — the Einsatzgruppen’s escalation from male Jews to entire communities in summer–autumn 1941, demonstrating feasibility and hardening precedent; the machinery — T4’s men and methods available for transfer, the ghettos concentrating the victims; and initiative from centre and periphery — Hitler’s authorisations, Himmler’s and Heydrich’s drive, and local commanders’ radicalisation “working towards the Führer”. Historiography is the essay’s spine: intentionalism (Dawidowicz) against functionalism (Broszat, Mommsen) and the synthesis (Kershaw, Browning, Friedländer’s “redemptive antisemitism”). The strongest hierarchies distinguish necessary conditions (ideology) from proximate causes (war, 1941’s escalations) and reach a defended verdict. Precision and sobriety are required.',
  },
  {
    id: 'e85',
    frame: 'E10',
    strand: 'group',
    era: 'late',
    demand: 3,
    themes: ['persecution', 'exclusion'],
    tags: ['p6'],
    text: 'Compare the experiences of Jewish Germans during the years 1933 to 1939 with their experiences during the war years 1939 to 1945.',
    notes:
      'The marking demand: similarity AND difference, continuity AND change, with an assessment of the extent of change. Pre-war: staged exclusion — professional purges and boycott (1933), legal disenfranchisement (1935), expropriation and the pogrom (1938) — experienced as social death within German society: livelihoods destroyed, emigration’s agonising arithmetic (roughly half fled by 1939), communal self-help, and the deceptive interludes (1936) that persuaded some to stay. Wartime: the qualitative rupture — the star (1941), the emigration ban, deportation “to the east”, and destruction: of Germany’s remaining Jews, the overwhelming majority murdered, with survival possible chiefly through hiding (the few thousand “U-boats”), “privileged” mixed marriages, or emigration already accomplished. Continuities matter for the top band: the same definitional machinery (1935) ran the deportation lists; expropriation begun in 1933 completed itself in the 1941 property law; and the perpetrators’ tolerance-testing connected each stage to the next. But the essay must weigh the discontinuity honestly: before the war, exclusion aimed at emigration; after 1941, at murder — a change of kind, not degree. Kaplan on social death and Friedländer anchor the historiography. Serial description without comparison caps in the middle bands; sobriety and precision are required.',
  },
];
