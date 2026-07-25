import type { SourceSet } from './types';

// Source sets 13–17 for Elective 2: Russia and the Soviet Union 1914–45.
// Text sources are constructed for skills practice in the style of the period;
// images are real and credited.

export const RUS_SOURCE_SETS_3: SourceSet[] = [
  // ------------------------------------------------------------------
  // RUS SET 13 — October 1917  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-october',
    title: 'Ten days: the October seizure of power',
    themeKey: 'rus-october',
    themeSentence:
      'The October Revolution was made by a few thousand armed men in a city that barely looked up from its business — a seizure of power whose ease was itself the verdict on the government it destroyed.',
    tags: ['rus-p2'],
    era: 'early',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph by Yakov Steinberg of a Red Guard patrol warming themselves at a street fire, Petrograd, 1917.',
        image: {
          src: 'sources/red-guards-1917.jpg',
          alt: 'Three armed Red Guards in workers’ clothes crouch around a small street fire on the cobbles of Petrograd, 1917, beneath the signs of an icon shop',
          credit: 'Yakov Steinberg, 1917. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows three Red Guards — workers in caps and overcoats, rifles with fixed bayonets in hand or slung — crouched around a small fire burning on the cobblestones of a street corner. Behind them, the shuttered shopfront still advertises “Icons and iconostases”; the street beyond is empty and quiet.',
        note: 'Note: the Red Guards were volunteer workers’ militias, armed in the months after February — decisively so during the Kornilov crisis of August 1917. In October they provided most of the force with which the Bolsheviks took the city.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the memoirs of a socialist journalist who witnessed the events in Petrograd, 25–26 October 1917.',
        body: 'History will record it as an insurrection; I walked through it, and I can tell you the trams were running. On the Nevsky the shops were open, the cinemas were full, and the well-dressed public damned the Bolsheviks over coffee as they had damned Kerensky the week before. The fighting, such as it was, happened at the joints of the city — the bridges, the telephone exchange, the stations — where patrols of workers and sailors simply arrived, presented their rifles, and took possession; the junkers mostly shrugged and went home. Towards the Winter Palace there was firing in the night, and the cruiser fired her famous blank; by morning the ministers were in the fortress and the queue at the bakery had not moved. I record this not to belittle what happened — power over a hundred and sixty million people changed hands that night — but because the manner of it was the meaning. Nobody died for the Provisional Government, and that told you everything about the Provisional Government; the question that froze the smile on every thinking Bolshevik’s face was not how to take power from such a corpse, but how on earth they were to hold it.',
        footnotes: [
          'Junkers — officer cadets, among the Winter Palace’s few defenders.',
          'The cruiser Aurora fired a blank shot as a signal on the night of 25 October.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the October Revolution written by a historian and published in 2017.',
        body: 'The insurrection was Trotsky’s masterpiece, and its genius was legalism. Power was taken not in the party’s name but in the Soviet’s: the Military Revolutionary Committee, created ostensibly to defend the capital against the Germans and a second Kornilov, gave every move the colour of defence — garrison units transferred their obedience days before a shot was fired, so that the “rising” was largely the ratification of a transfer already made. Timing did the rest: the seizure was completed as the Second Congress of Soviets convened, presenting the delegates — and history — with an accomplished fact draped in Soviet legitimacy; the moderate socialists’ walkout, into what Trotsky called the dustbin of history, completed the Bolsheviks’ monopoly for them. Petrograd decided nothing finally — the civil war would do that — but October fixed the revolution’s character: power seized by a disciplined minority in the name of institutions it would hollow out within months. Lenin’s contribution was singular and prior: without his hammering from September — “history will not forgive us if we do not take power now” — the party would have waited for the Constituent Assembly, and the twentieth century would have needed different textbooks.',
        footnotes: [
          'The Constituent Assembly, elected in November 1917 with the Bolsheviks a minority, was dispersed by them after one sitting in January 1918.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Outline the context of Source 1 and account for its purpose. Include the relevant events, people, and ideas represented in and/or surrounding the source.',
        marks: 4,
        key: [
          {
            rows: [
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. revolutionary Petrograd in 1917, the Red Guards as armed workers’ militias expanded during the Kornilov crisis, the collapse of the Provisional Government’s authority, the Bolshevik seizure of the city’s key points in October)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details represented in and/or surrounding the source', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. to document the armed revolution in the streets — images of the Red Guards that served the new regime’s story of workers’ power)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. “Account for” requires candidates to state the reasons for — here, the possible reasons the source was created. Generic purposes (“to inform”) are not enough for full marks: the purpose must be specific to this source. Context: Petrograd between February and October — workers armed as Red Guards, the government’s monopoly of force dissolved, patrols like this one holding street corners during the October days. Specific details from the photograph — the civilian clothes and rifles, the quiet street, the icon-shop signs above the revolutionaries (old Russia over the new) — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding how the Bolsheviks took power in October 1917. In your answer, identify both similarities and differences.',
        marks: 6,
        key: [
          {
            rows: [
              { descriptor: 'Compares the perspectives of both sources by identifying similarities and differences, supported by detailed, accurate and relevant evidence from both sources', marks: '6' },
              { descriptor: 'Compares the perspectives of both sources by identifying similarities and differences, supported by mostly accurate and relevant evidence', marks: '5' },
              { descriptor: 'Compares the perspectives of both sources by identifying similarities or differences, supported by some evidence from both sources', marks: '4' },
              { descriptor: 'Describes the perspective of each source with some evidence but limited comparison', marks: '3' },
              { descriptor: 'Describes the perspective of one source, or outlines both with limited evidence', marks: '2' },
              { descriptor: 'Provides a general comment about the perspective of one or both sources with limited or no evidence', marks: '1' },
            ],
            subtotal: 6,
          },
        ],
        notes:
          'In this context “compare” includes contrast. Key similarities: both sources stress the seizure’s ease — the trams running, the junkers shrugging (Source 2); obedience transferred before the shooting (Source 3) — and both read that ease as the verdict on the Provisional Government (“nobody died for it”; power “taken from a corpse”). The differences: Source 2 is street-level witness, its evidence atmosphere and incident, its forward question (how to hold power) anxious and open; Source 3 is mechanism — the MRC’s legalism, the timing against the Congress, Lenin’s prior insistence — and its judgements (Trotsky’s masterpiece; the character of the regime fixed) are the historian’s, delivered with the ending known. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the events and character of the October Revolution. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of October’s events and character in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent October, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
              { descriptor: 'Assesses the extent of the representation using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
              { descriptor: 'Discusses the extent of the representation using accurate and relevant evidence from all three sources and some own knowledge', marks: '5' },
              { descriptor: 'Explains the representation with reference to at least two sources and some accurate and relevant evidence', marks: '4' },
              { descriptor: 'Describes the representation with reference to at least two sources and some relevant evidence', marks: '3' },
              { descriptor: 'Outlines the content of at least one source with some relevant comment', marks: '2' },
              { descriptor: 'Identifies content from at least one source and/or provides a general comment with limited evidence', marks: '1' },
            ],
            subtotal: 7,
          },
        ],
        notes:
          'The theme should lead: the set represents October as a minority seizure made possible by the government’s emptiness — the armed workers at their fire (Source 1), the city that did not resist (Source 2), and the machinery and meaning of the operation (Source 3). Strong responses test with own knowledge: the September Bolshevik majorities in the Soviets, Lenin’s letters from Finland, the MRC and the garrison, the Winter Palace’s actual fall, the Congress and the walkout, the decrees on peace and land, and the Constituent Assembly’s dispersal as October’s sequel. The historiographical stakes should be engaged: the set leans towards the “coup within a revolution” reading — candidates should weigh the mass radicalisation (soldiers, land seizures) that Soviet historiography и social historians emphasise, which the set’s calm city understates. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 14 — The obscene peace: Brest-Litovsk  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-brest',
    title: 'The obscene peace: Brest-Litovsk',
    themeKey: 'rus-brest',
    themeSentence:
      'At Brest-Litovsk the Bolsheviks bought survival with a third of European Russia — a peace Lenin forced on his own party as the price of keeping power.',
    tags: ['rus-p3'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of German officers meeting the Soviet delegation on the platform at Brest-Litovsk, January 1918.',
        image: {
          src: 'sources/brest-litovsk-delegation-1918.jpg',
          alt: 'German officers in spiked helmets meet the fur-hatted Soviet delegation on a snowy station platform at Brest-Litovsk, January 1918',
          credit: 'Photographer unknown, 1918. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows the two worlds meeting on a snow-covered station platform: officers of the Kaiser’s army in greatcoats and spiked helmets receive the Soviet delegates — bearded revolutionaries in fur hats and civilian overcoats — beside the carriages of the conference train. The delegations regard each other with formal wariness.',
        note: 'Note: the armistice talks began at the German army’s eastern headquarters at Brest-Litovsk in December 1917. The Soviet delegation at various times included workers, a peasant and a woman — deliberate symbolism at a table of generals and diplomats.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from Lenin’s theses urging acceptance of the German terms, presented to the party leadership, January–February 1918.',
        body: 'The argument of the revolutionary phrase-makers must be met head-on. They say: to sign this peace is shameful, a betrayal of the international revolution. I answer: the revolution’s first duty is to exist. We have no army; the soldiers have voted for peace with their legs, and whoever doubts it may go to the front and see. To wage “revolutionary war” without an army is to offer the republic’s head to the German axe for the sake of a beautiful gesture. Yes, the terms are obscene — annexationist, violent, humiliating. We sign them as a man signs to a robber holding a pistol at his head: to live, and to settle accounts later. The German revolution will come — it ripens month by month — but it is not obliged to come by our calendar, and we have no right to stake the existence of the Soviet Republic on its punctuality. We need a breathing-space. Give the republic time — to build an army, to restore the economy, to organise — and history will show whether the robber enjoyed his plunder. Sign.',
        footnotes: [
          '“Breathing-space” (peredyshka) became the policy’s name. Bukharin’s “Left Communists”, who demanded revolutionary war, briefly commanded a party majority against Lenin.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the revolution’s foreign policy written by a historian and published in 2018.',
        body: 'The treaty signed on 3 March 1918 was the harshest a great power had accepted in modern memory: Poland, the Baltic lands, Finland and Ukraine gone — a third of the empire’s population and farmland, most of its coal and iron, all surrendered at a stroke. Yet within the year the calculation Lenin had forced through — against Bukharin’s revolutionary war and Trotsky’s “neither war nor peace”, and by threatening his own resignation — was vindicated on every point. The breathing-space bought the months in which the Red Army was created; Germany’s defeat in November annulled the treaty without costing Moscow anything; and the “settling of accounts” began on schedule as Soviet power moved back into Ukraine behind the retreating Germans. The costs were real and shaping: the Left SRs quit the coalition over the treaty — one-party rule dates from Brest as much as from October — and rose in revolt in July; the Allies, reading the treaty as betrayal or German control, found in it their reason to intervene. But the deepest legacy was doctrinal. Brest taught the Bolsheviks that the state’s survival stood above every other revolutionary value — a lesson that would echo from Rapallo to the pact of August 1939.',
        footnotes: [
          'Trotsky’s “neither war nor peace” — his refusal to sign or fight — ended when the Germans simply resumed their advance in February 1918.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Outline the historical context in which Source 1 was produced.',
        marks: 3,
        key: [
          {
            rows: [
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Bolshevik decree on peace and the armistice of December 1917, the collapse of the Russian army, negotiations at German headquarters at Brest-Litovsk, the unequal confrontation of revolutionary delegates and imperial officers)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the winter of 1917–18 — the new Soviet government suing for the peace it had promised, the army dissolving homeward, and the negotiations conducted in the enemy’s headquarters town under the enemy’s guns. Specific details from the photograph — the spiked helmets against the fur hats, the station-platform formality, the conference train — should be connected to those circumstances, including the symbolism each side staged. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of why the Bolsheviks accepted the Treaty of Brest-Litovsk.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the decisive argument in Lenin’s own words at the moment of decision, but polemic against party opponents, framing the choice to win it)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective account with the treaty’s terms and sequel known, but interpretive on the “lesson” drawn)', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Discusses the reliability of both sources by providing detailed, accurate and relevant evidence and reasons related to, for example, author, motive, bias, time, place, and purpose', marks: '5' },
              { descriptor: 'Explains the reliability of both sources by providing mostly accurate and relevant evidence and some reasons', marks: '4' },
              { descriptor: 'Describes the reliability of both sources by providing some evidence', marks: '3' },
              { descriptor: 'Describes the reliability of one source by providing some evidence', marks: '2' },
              { descriptor: 'Provides a general comment about the reliability of one or both sources with limited evidence', marks: '1' },
            ],
            subtotal: 5,
          },
        ],
        notes:
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is the argument that decided the question, from the man who forced the decision — its reasoning (no army; existence first; the robber analogy) is the authentic core of Bolshevik realism; as intra-party polemic it caricatures opponents (“phrase-makers”) and its confidence about the German revolution was a debating point as much as a conviction. Source 3 has the terms, the sequel and the internal struggle documented, and its verdict that events vindicated Lenin follows the record; its final doctrinal claim — Brest as the template for 1939 — is a historian’s long interpretive arc. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the consequences of the Treaty of Brest-Litovsk for the Soviet state. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the treaty’s consequences in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the treaty’s consequences, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
              { descriptor: 'Evaluates the extent of the representation using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
              { descriptor: 'Discusses the extent of the representation using accurate and relevant evidence from all three sources and some own knowledge', marks: '5' },
              { descriptor: 'Explains the representation with reference to at least two sources and some accurate and relevant evidence', marks: '4' },
              { descriptor: 'Describes the representation with reference to at least two sources and some relevant evidence', marks: '3' },
              { descriptor: 'Outlines the content of at least one source with some relevant comment', marks: '2' },
              { descriptor: 'Identifies content from at least one source and/or provides a general comment with limited evidence', marks: '1' },
            ],
            subtotal: 7,
          },
        ],
        notes:
          'The theme should lead: the set represents Brest as survival bought at obscene price and vindicated by events — the unequal meeting (Source 1), the argument for signing (Source 2), and the audited consequences (Source 3). Strong responses widen with own knowledge: the Left SR exit and July rising, Allied intervention’s beginnings, the treaty’s annulment in November 1918, the reconquest of Ukraine, and the doctrinal line from peredyshka through Rapallo to 1939. The evaluative edge: the set contains no voice from the surrendered lands — for Ukraine and the Baltic peoples the “breathing-space” meant German occupation and then reconquest — and no Left Communist stating the case Lenin defeated. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 15 — Liquidate the kulaks as a class  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-dekulak',
    title: '“Liquidate the kulaks as a class”: the war on the village',
    themeKey: 'rus-dekulak',
    themeSentence:
      'Dekulakisation turned collectivisation into a war on the village’s own people — neighbours listed, stripped and deported by the hundred thousand, and the hidden grain dug from graveyards while famine gathered.',
    tags: ['rus-p5'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph by Max Alpert, published in the Soviet press with the caption “Young Communist League members seizing grain hidden by kulaks in the graveyard”, Ukraine, early 1930s.',
        image: {
          src: 'sources/grain-seizure-ukraine.jpg',
          alt: 'Three young Komsomol members with sacks and a shovel dig out grain hidden among the crosses of a snowy Ukrainian graveyard, early 1930s',
          credit: 'Max Alpert / RIA Novosti archive, image #79113 / CC BY-SA 3.0, via Wikimedia Commons',
        },
        body: 'The photograph shows three young men of the Komsomol at work in a snow-covered village graveyard, among stone and iron crosses. One digs with a shovel; the others hold open sacks into which the find — grain hidden in the tombs — is being loaded.',
        note: 'Note: the photograph was published as propaganda — the caption presenting the seizure as the unmasking of kulak sabotage. Grain was hidden because requisition quotas took the harvest to the last sack; the seizures ran through the winters in which the great famine of 1932–33 gathered.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a report by a party plenipotentiary sent from the city to enforce collectivisation in a grain district, 1930.',
        body: 'To the district committee. The directives are being fulfilled. In the past ten days the brigade has dekulakised 43 households in the three villages: property inventoried and transferred to the kolkhoz fund — 27 horses, 34 cows, the mills at Lozovaya, dwellings for the kolkhoz office and the school. Category two households were despatched to the station under guard; I report that among those listed by the village committee were households with one cow, and I confess it is not always the wealth that decides but old scores and the quota itself, for the district demands its percentage of kulaks as it demands its grain. The mood is bad. The women lie before the carts and must be dragged off; the church bell was rung against us at Pokrovka until we took the bell. Comrade S. of the brigade asks to be released — he says he did not join the party to make war on old women — and I have reprimanded him, but I record that the work requires men of firm heart, for pity here is a form of desertion. The grain plan will be met. Request instructions regarding the families’ children, of whom there are many at the station and the weather is severe.',
        footnotes: [
          '“Category two” kulaks were deported to remote regions; plenipotentiaries and worker-brigades (“twenty-five-thousanders”) were sent from the cities to force the campaign through.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of collectivisation written by a historian and published in 2018.',
        body: 'Dekulakisation solved the regime’s political problem and created its human catastrophe. As policy it was never really about a class: the “kulak” of 1930 was whoever the quota required — the better-off, the outspoken, the churchwarden, the man with a grudge against him — and the campaign’s categories, complete with per-district percentages, made the arithmetic explicit. Its function was terror in the exact sense: the destruction and deportation of perhaps 1.8 million people in 1930–31 broke the village’s capacity to resist the kolkhoz, which was the point. Its consequences ran ahead of it: the best farmers gone, livestock slaughtered rather than surrendered, the survivors sowing without incentive under quotas set to feed the plan — and when drought met procurement in 1932, the state took the seed grain and sealed the roads. The famine that followed killed millions — in Ukraine, the Kuban, Kazakhstan — while grain exports continued and the press photographed Komsomol members triumphantly digging “kulak” caches from graveyards. No document better captures the campaign than those images: the state’s cameras recording, as victory, the confiscation of a starving village’s last hidden food.',
        footnotes: [
          'The famine of 1932–33 was unmentionable in the USSR until the late 1980s; its death toll is estimated at 5–7 million or more.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Outline the historical context in which Source 1 was produced.',
        marks: 3,
        key: [
          {
            rows: [
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. forced collectivisation from 1929–30, grain requisitioning and hidden caches, dekulakisation and the Komsomol’s mobilisation, the propaganda framing of seizures as unmasking kulak sabotage, the approaching famine of 1932–33)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the war on the village at the Great Turn — procurement quotas stripping the harvest, peasants hiding grain to survive and to sow, urban youth mobilised as the campaign’s shock force, and the press converting confiscation into victory. Specific details from the photograph — the graveyard hiding place, the sacks and shovel, the young townsmen’s confidence — should be connected to those circumstances, including the image’s propaganda purpose stated in its own caption. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the nature of dekulakisation.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. an internal report from an enforcer at the time, unusually candid about methods and doubts, but an official justifying his fulfilment of the plan)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly account with the figures and the famine’s full record, but interpretive and morally charged)', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Discusses the reliability of both sources by providing detailed, accurate and relevant evidence and reasons related to, for example, author, motive, bias, time, place, and purpose', marks: '5' },
              { descriptor: 'Explains the reliability of both sources by providing mostly accurate and relevant evidence and some reasons', marks: '4' },
              { descriptor: 'Describes the reliability of both sources by providing some evidence', marks: '3' },
              { descriptor: 'Describes the reliability of one source by providing some evidence', marks: '2' },
              { descriptor: 'Provides a general comment about the reliability of one or both sources with limited evidence', marks: '1' },
            ],
            subtotal: 5,
          },
        ],
        notes:
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is the campaign seen from inside its machinery — the inventories, the categories, the quota logic (“the district demands its percentage of kulaks”), the resisting women and the reluctant enforcer — and internal reports of this kind, never meant for publication, are among the period’s most reliable evidence; the reporter nonetheless writes to justify himself, and his candour has limits (the fate of the children is a request for instructions, not a description). Source 3 rests on the opened archives and the famine scholarship, and its analysis of the kulak category matches documents like Source 2; its final judgement on the photographs is interpretation, though grounded. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the impact of collectivisation on the Soviet peasantry. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of collectivisation’s impact on the peasantry in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent that impact, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
              { descriptor: 'Evaluates the extent of the representation using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
              { descriptor: 'Discusses the extent of the representation using accurate and relevant evidence from all three sources and some own knowledge', marks: '5' },
              { descriptor: 'Explains the representation with reference to at least two sources and some accurate and relevant evidence', marks: '4' },
              { descriptor: 'Describes the representation with reference to at least two sources and some relevant evidence', marks: '3' },
              { descriptor: 'Outlines the content of at least one source with some relevant comment', marks: '2' },
              { descriptor: 'Identifies content from at least one source and/or provides a general comment with limited evidence', marks: '1' },
            ],
            subtotal: 7,
          },
        ],
        notes:
          'The theme should lead: the set represents collectivisation as conquest — the propaganda image of seizure (Source 1), the machinery and its human texture from inside (Source 2), and the historian’s account of category, terror and famine (Source 3). Strong responses widen with own knowledge: the grain crisis of 1927–28 and the end of NEP, “Dizzy with Success” and the March 1930 retreat, livestock slaughter (halved by 1933), the kolkhoz order (MTS, labour-days, the 1932 passport law), the famine’s course and concealment, and the long echo (the villages’ memory, the historiographical battles over intent in Ukraine). Omissions tied to evaluation: no deported family speaks here (the earlier set’s smuggled letter complements this one), and the minority of genuine village support for collectivisation — poor peasants who gained — is invisible. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 16 — The Urals arsenal  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-warindustry',
    title: 'The Urals arsenal: industry wins the war',
    themeKey: 'rus-warindustry',
    themeSentence:
      'The plants of the Five-Year Plans, and the factories hauled east in 1941, out-produced Germany under siege conditions — the industrial victory beneath every battlefield one.',
    tags: ['rus-p5', 'rus-p8'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph by Ivan Shagin of Komsomol members at the construction of the sixth blast furnace of the Magnitogorsk Metallurgical Combine, 1943.',
        image: {
          src: 'sources/magnitogorsk-construction.jpg',
          alt: 'Three smiling young workers in quilted jackets and fur hats stand on the steelwork of a blast furnace under construction at Magnitogorsk, 1943',
          credit: 'Ivan Shagin / RIA Novosti archive, image #699417 / CC BY-SA 3.0, via Wikimedia Commons',
        },
        body: 'The photograph shows three young construction workers — Komsomol members in quilted jackets and fur hats — posed smiling on the riveted steelwork of a blast furnace rising behind them. The furnace is the combine’s sixth: even in the war’s third year, Magnitogorsk was still growing.',
        note: 'Note: Magnitogorsk, built from nothing on the steppe from 1929, was the flagship of the Five-Year Plans. During the war the Urals–Siberian industrial zone, beyond the reach of German aircraft, produced the steel, tanks and guns of the Soviet counter-offensives.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the recollections of a woman who worked in an evacuated aircraft factory in the Urals, recorded after the war.',
        body: 'The factory came on flat-cars, and for the first weeks the factory was the flat-cars. We assembled machine tools in the snow, under tarpaulins, and the power came the day the walls reached the window line — I remember because we cheered the light bulbs more than we ever cheered a communiqué. I was sixteen; my brigade was girls my age and old men and two fitters from Kharkov who slept by their lathes. Twelve hours, and in the rush months more, on seven hundred grams of bread for a working card; we grew potatoes between the shops and the director kept a cow-shed — no one wrote that in the newspaper, but no one laughed at it either, for it kept the apprentices on their feet. What I remember is not heroism, whatever they printed later. It is arithmetic. Every fuselage we finished, someone chalked the count on the shop door, and beside it the shop committee pasted the letters from the front — this one flew over Orel, this crew thanks you. You cannot pay people in bread alone. We were paid in those letters.',
        footnotes: [
          'More than 1,500 major plants and some ten million people were evacuated eastward in 1941–42.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from an economic history of the Soviet war effort written by a historian and published in 2019.',
        body: 'The figures still astonish. An economy that lost, in six months of 1941, territory containing 40 per cent of its population, most of its coal, iron and aluminium and a third of its rail network, out-produced Germany — master of continental Europe — in tanks, aircraft and guns in every year of the war. The explanations connect the 1930s to 1943. The plans had built the eastern base (Magnitogorsk, Kuznetsk, the Urals machine works) and, as important, the system for building at speed: the evacuation of 1941 — plants dismantled under fire, hauled east and producing within months — was the command economy doing the one thing it did superbly, concentrating everything on a single priority. The costs were of the same order as the achievement: civilian consumption cut to famine’s edge, a workforce of women, boys and pensioners on twelve-hour shifts bound by criminal labour law, quality chronically sacrificed to quantity — the T-34 was designed for a service life measured in weeks, and the calculation was correct. It was the same bargain the thirties had struck — everything for steel, the person as input — redeemed, this once, by the use to which the steel was put.',
        footnotes: [
          'By 1943 the USSR was producing roughly 24,000 tanks a year to Germany’s 17,000.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Outline the context of Source 1 and account for its purpose. Include the relevant events, people, and ideas represented in and/or surrounding the source.',
        marks: 4,
        key: [
          {
            rows: [
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Magnitogorsk as the flagship city of the Five-Year Plans, the wartime role of the Urals industrial base beyond German reach, continued construction in 1943, Komsomol labour mobilisation and the press photograph’s morale purpose)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details represented in and/or surrounding the source', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. propaganda photography celebrating the shock construction of Magnitogorsk — the heroic Komsomol builder as the plan’s public face)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. “Account for” requires candidates to state the reasons for — here, the possible reasons the source was created. Generic purposes (“to inform”) are not enough for full marks: the purpose must be specific to this source. Context: the Urals arsenal at mid-war — Magnitogorsk’s furnaces feeding the tank plants, new capacity still rising in 1943, youth brigades filling the workforce, and photography presenting the rear’s labour as the front’s partner. Specific details from the photograph — the young workers, the furnace steelwork, the staged optimism — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the Soviet war economy. In your answer, identify both similarities and differences.',
        marks: 6,
        key: [
          {
            rows: [
              { descriptor: 'Compares the perspectives of both sources by identifying similarities and differences, supported by detailed, accurate and relevant evidence from both sources', marks: '6' },
              { descriptor: 'Compares the perspectives of both sources by identifying similarities and differences, supported by mostly accurate and relevant evidence', marks: '5' },
              { descriptor: 'Compares the perspectives of both sources by identifying similarities or differences, supported by some evidence from both sources', marks: '4' },
              { descriptor: 'Describes the perspective of each source with some evidence but limited comparison', marks: '3' },
              { descriptor: 'Describes the perspective of one source, or outlines both with limited evidence', marks: '2' },
              { descriptor: 'Provides a general comment about the perspective of one or both sources with limited or no evidence', marks: '1' },
            ],
            subtotal: 6,
          },
        ],
        notes:
          'In this context “compare” includes contrast. Key similarities: both sources describe the same system — evacuation and improvisation (the factory that “was the flat-cars” / plants “producing within months”), the replacement workforce of girls, old men and boys on twelve-hour shifts, and scarcity at famine’s edge (the seven hundred grams; consumption cut). The differences: Source 2 is experience from inside — its accents are light bulbs, potatoes, the letters from the front, and it explicitly resists the official heroic frame (“not heroism… arithmetic”); Source 3 is the balance sheet — production figures against Germany, the system’s logic, and the moral accounting (“the person as input”) that a participant does not draw. Candidates may note that the worker’s “paid in letters” and the historian’s “bargain” describe the same fact in different registers. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the part played by industry in the Soviet victory. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of industry’s part in victory in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent industry’s contribution, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
              { descriptor: 'Assesses the extent of the representation using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
              { descriptor: 'Discusses the extent of the representation using accurate and relevant evidence from all three sources and some own knowledge', marks: '5' },
              { descriptor: 'Explains the representation with reference to at least two sources and some accurate and relevant evidence', marks: '4' },
              { descriptor: 'Describes the representation with reference to at least two sources and some relevant evidence', marks: '3' },
              { descriptor: 'Outlines the content of at least one source with some relevant comment', marks: '2' },
              { descriptor: 'Identifies content from at least one source and/or provides a general comment with limited evidence', marks: '1' },
            ],
            subtotal: 7,
          },
        ],
        notes:
          'The theme should lead: the set represents victory as manufactured — the plan-era base still growing (Source 1), the human machinery of the rear (Source 2), and the comparative balance sheet (Source 3). Strong responses test with own knowledge: the evacuation’s statistics, tank and aircraft output against Germany’s, the T-34 and the design-for-attrition philosophy, criminal labour discipline and rationing, Lend-Lease’s complementary contribution (trucks, food, fuel — mobility rather than weapons), and the link backward to the Five-Year Plans (with the standing debate over whether Stalinist methods were necessary to that base). Omissions tied to evaluation: the Gulag’s war production and the famine conditions in parts of the rear appear in neither image nor testimony; the set’s smiling construction photo should itself be weighed as wartime propaganda. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 17 — Nine hundred days: the siege of Leningrad  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-leningrad',
    title: 'Nine hundred days: the siege of Leningrad',
    themeKey: 'rus-leningrad',
    themeSentence:
      'Leningrad’s siege was the war’s longest agony — a million dead of hunger and shelling in a city that worked, fought and buried its people through three winters without surrendering.',
    tags: ['rus-p8'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph by Boris Kudoyarov of Leningraders drawing water from a shell-hole on Nevsky Prospekt during the siege, winter 1941–42.',
        image: {
          src: 'sources/leningrad-water-queue.jpg',
          alt: 'Muffled Leningraders with buckets and kettles draw water from a broken main in a shell-hole on snowbound Nevsky Prospekt during the siege',
          credit: 'Boris Kudoyarov / RIA Novosti archive, image #907 / CC BY-SA 3.0, via Wikimedia Commons',
        },
        body: 'The photograph shows citizens muffled in coats and shawls gathered around a shell-hole in the snowbound roadway of the city’s main avenue, dipping buckets, kettles and pans into the broken water main beneath. Behind them stretch the arcades of the Gostiny Dvor department store, scarred by shellfire; a thin file of people trudges along the drifted street.',
        note: 'Note: in the siege’s first winter the city’s water, power and transport failed together; the bread ration fell to 125 grams for dependants. Around one million Leningraders died, the great majority of starvation.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extracts from the diary of a Leningrad woman, winter 1941–42.',
        body: 'December 12. Kolya’s cards for the decade lost or stolen in the queue — I will not write what I said to God about it. We divide mine. The ration is 125 now for Mila and me; I cut it with the razor so no crumb is lost, and we eat it at the stove watching each other like thieves… December 19. Traded father’s boots for a kilo of joiner’s glue. You boil it two days; with bay leaf it is aspic. Mila said, mama, it is better than yesterday, and yesterday was nothing at all… January 4. They do not take the dead far now. Two on children’s sledges on Liteiny this morning, sewn in sheets, pulled by women like me. One does not weep — I have noticed the tears themselves take strength, and we have arithmetic instead of feelings: 125, twice a day the water on Nevsky, nine floors, no light. January 9. At the institute they have rigged a stove in the reading room and we work in gloves. V. says: write everything down. Someone must know what a city is, when everything is taken from it except the people. I write. My hand is bad because the ink froze and we thaw it on the stove.',
        footnotes: [
          'Ration cards were issued by ten-day periods (“decades”); their loss was commonly a death sentence. Hundreds of siege diaries survive.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the siege written by a historian and published in 2017.',
        body: 'Leningrad’s nine hundred days have two histories, and both are true. One is the epic the wartime state told and the survivors earned: the city that would not fall — its front line in its own suburbs, its factories repairing tanks under shellfire, its orchestra performing Shostakovich’s Seventh to a hall of skeletons and loudspeakers aimed at the German lines, the ice road over Ladoga run under bombing to bring flour in and children out. The other is the history the state suppressed for forty years: the million dead — not a rounded figure of rhetoric but the counted catastrophe of starvation administered by ration category, in which dependants and the old were arithmetically condemned; the cannibalism cases the NKVD recorded in their hundreds; the privileges that kept the party apparatus fed while professors froze; and the question, unaskable until the archives opened, of whether the catastrophe’s scale owed something to the regime’s own failures — the food stocks left unbombed-out in wooden warehouses, the evacuation begun too late. What the diaries show, against both histories, is the texture neither epic nor indictment captures: a population reduced to arithmetic and glue, which nonetheless queued, worked, wrote — and held. The siege was lifted in January 1944. No city in the modern world has paid such a price for not surrendering.',
        footnotes: [
          'The Road of Life across frozen Lake Ladoga functioned in the winters of 1941–43.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Outline the historical context in which Source 1 was produced.',
        marks: 3,
        key: [
          {
            rows: [
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the German encirclement of Leningrad from September 1941, the first siege winter’s collapse of water, power and transport, starvation rations, civilians surviving under shellfire on the city’s main avenue)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the siege’s first winter — the ring closed, the Badayev warehouses burned, mains frozen and broken, the ration at its terrible minimum, and ordinary survival reduced to fetching water from shell-holes under continuing bombardment. Specific details from the photograph — the buckets and kettles, the shell-scarred arcades, the muffled queue — should be connected to those circumstances, noting that siege photographers like Kudoyarov worked for the Soviet press. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of conditions in Leningrad during the siege.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. a private diary written day by day inside the catastrophe, unguarded and specific, but one household’s war, written for survival not history)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective account weighing epic and suppressed histories with the archives, but interpretive in its balance)', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Discusses the reliability of both sources by providing detailed, accurate and relevant evidence and reasons related to, for example, author, motive, bias, time, place, and purpose', marks: '5' },
              { descriptor: 'Explains the reliability of both sources by providing mostly accurate and relevant evidence and some reasons', marks: '4' },
              { descriptor: 'Describes the reliability of both sources by providing some evidence', marks: '3' },
              { descriptor: 'Describes the reliability of one source by providing some evidence', marks: '2' },
              { descriptor: 'Provides a general comment about the reliability of one or both sources with limited evidence', marks: '1' },
            ],
            subtotal: 5,
          },
        ],
        notes:
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 has the highest evidentiary standing testimony can have — contemporaneous, private, physically marked by its conditions (the frozen ink), its details (ration categories, the sledges, glue aspic) corroborated across hundreds of surviving diaries; its limits are perspective (one flat, one street) and the self-editing even diarists practise. Source 3 can weigh what no diarist could see — the statistics, the NKVD files, the suppressed questions of privilege and official failure — and its two-histories frame is itself a reliability lesson; it remains interpretation, and its final sentence is judgement, not measurement. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the experience and significance of the siege of Leningrad. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the siege’s experience and significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the siege, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
              { descriptor: 'Evaluates the extent of the representation using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
              { descriptor: 'Discusses the extent of the representation using accurate and relevant evidence from all three sources and some own knowledge', marks: '5' },
              { descriptor: 'Explains the representation with reference to at least two sources and some accurate and relevant evidence', marks: '4' },
              { descriptor: 'Describes the representation with reference to at least two sources and some relevant evidence', marks: '3' },
              { descriptor: 'Outlines the content of at least one source with some relevant comment', marks: '2' },
              { descriptor: 'Identifies content from at least one source and/or provides a general comment with limited evidence', marks: '1' },
            ],
            subtotal: 7,
          },
        ],
        notes:
          'The theme should lead: the set represents the siege as endurance at the limit of the human — survival’s daily mechanics (Sources 1 and 2) and the historian’s double accounting of epic and suppression (Source 3). Strong responses supply the record with own knowledge: the encirclement of September 1941 and Hitler’s directive to starve rather than take the city, the Ladoga ice road, the ration’s arithmetic and the mortality curve of the first winter, the Shostakovich premiere, the January 1943 corridor and the lifting of January 1944, and the siege’s place in the syllabus question — what enabled the USSR to hold (the set answers: the people’s endurance, organised and coerced by a state that also failed them). Omissions tied to evaluation: the front-line fighting that held the ring, and the Ladoga evacuations, appear only in Source 3’s summary; the diarist’s city contains no functioning authority — rations arrive from somewhere — which understates the administration that did continue. A source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
