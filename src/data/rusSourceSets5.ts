import type { SourceSet } from './types';

// Source sets 23–25 for Elective 2: Russia and the Soviet Union 1914–45.

export const RUS_SOURCE_SETS_5: SourceSet[] = [
  // ------------------------------------------------------------------
  // RUS SET 23 — The murder that fed the Terror  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-kirov',
    title: 'The murder that fed the Terror: Kirov, 1934',
    themeKey: 'rus-kirov',
    themeSentence:
      'The assassination of Sergei Kirov in December 1934 gave the regime its licence for terror — emergency law within hours, the old opposition on trial within weeks, and a martyr-cult beside the mystery of who really ordered the shot.',
    tags: ['rus-p7'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of Sergei Kirov, Leningrad party chief, with Josef Stalin on holiday, published in the Soviet press, 1934.',
        image: {
          src: 'sources/kirov-stalin-1934.jpg',
          alt: 'Kirov in an open shirt stands hands on hips beside Stalin in a light tunic on a garden path, a child walking in the foreground, 1934',
          credit: 'Photographer unknown, 1934. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows the two men at ease on a garden path in the sun — Kirov in an open-collared summer shirt, hands on hips; Stalin beside him in his light tunic, a child walking ahead of them. It is the image of intimacy the press cultivated: the leader and his closest friend in the leadership.',
        note: 'Note: Kirov was shot dead in the corridor of the Leningrad party headquarters on 1 December 1934 by Leonid Nikolaev, a disgruntled ex-party member. Stalin served as chief mourner and pallbearer; the city of Vyatka, streets, factories and a ballet were renamed for the martyr.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: The emergency directive on terrorist cases issued by the Central Executive Committee of the USSR on the evening of Kirov’s assassination, 1 December 1934 — the “Kirov law”.',
        body: 'The Central Executive Committee of the USSR resolves: 1. Investigative agencies are directed to speed up the cases of those accused of the preparation or execution of acts of terror. 2. Judicial organs are directed not to hold up the execution of death sentences pertaining to crimes of this category in order to consider the possibility of pardon, because the Presidium of the Central Executive Committee does not consider as possible the receiving of petitions of this sort. 3. The organs of the Commissariat of Internal Affairs are directed to execute the death sentences against criminals of the above-mentioned category immediately after the passage of sentences. Cases are to be heard within ten days; the accused to be handed the indictment one day before the hearing; cases to be heard without the participation of the parties; appeals of sentences, as likewise petitions for pardon, not to be admitted.',
        footnotes: [
          'The directive was drafted within hours of the murder, on Stalin’s instruction, and remained the legal basis of terror-case procedure through the Great Terror.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the Kirov murder and its consequences written by a historian and published in 2016.',
        body: 'Whether Stalin ordered the murder is the enduring mystery; what he did with it is the historical fact, and the fact matters more. The killer was a lone, embittered failure — the archives have yielded no credible thread to Stalin, though Khrushchev’s generation believed one existed — but within hours the death had become the founding document of a new legal order: the directive of 1 December abolished, for “terrorist” cases, every protection Soviet law pretended to offer. Within weeks Zinoviev and Kamenev were in prison, charged with “moral responsibility”; within two years they had confessed, at the first Moscow trial, to organising the murder itself, and the widening circle of the “Kirov case” — assassins, accomplices, concealers, doubters — supplied the Terror with its master narrative: the party riddled with hidden murderers. The martyr-cult grew in step with the killing done in his name, which is the episode’s bitterest irony, for the living Kirov had been, by the standards of the Politburo, a moderate — the delegates of the 1934 “Congress of Victors” who allegedly wished him general secretary were shot in their hundreds. Lone gunman or not, the murder was the pretext the system was waiting for; if Nikolaev had not existed, the argument runs, it would have been necessary to invent him — and some historians still believe he was.',
        footnotes: [
          'Of the 1,966 delegates to the 1934 party congress, 1,108 were arrested in the following years.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Kirov as Leningrad party chief and rising favourite publicised as Stalin’s intimate, the cult of leadership in the Soviet press of the early 1930s, the “Congress of Victors” of 1934, the assassination of December 1934 that gave the image its afterlife)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the leadership’s public image in 1934 — Kirov at the height of his standing, photographed in holiday intimacy with Stalin for the press, months before the assassination that made the friendship official martyrology. Specific details from the photograph — the informal dress, the staged ease, the publication itself — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the consequences of the Kirov assassination.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the authentic text of the emergency law itself — direct evidence of the regime’s instant response, though not of its motives)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly assessment with the archives, frank about what remains unproven, but interpretive)', marks: '1' },
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
          '“Discuss” requires candidates to identify issues and provide points for and/or against; reasoning must go beyond “it is biased” to the origin factors: author, motive, bias, time, place and purpose. Source 2 is the rare document that is wholly reliable as to what it is — the law’s text, drafted the same evening, is itself the consequence historians point to — while proving nothing about intent (its speed can be read as preparation or as panic); candidates should note that a decree is evidence of policy, not of the events it presupposes. Source 3 is candid scholarship — it separates the unproven (Stalin’s hand in the murder) from the documented (the directive, the trials, the congress statistics) — but its closing suggestion is deliberately interpretive and signalled as such. Candidates treat the sources in parallel; they do not have to evaluate or compare the sources against each other to achieve full marks. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the origins of the Great Terror. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the Terror’s origins in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the Terror’s origins, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the Terror as growing from a single death made systemic — the friendship the cult would canonise (Source 1), the law that abolished legal protection overnight (Source 2), and the historian’s account of pretext becoming programme (Source 3). Strong responses widen with own knowledge: the show trials of 1936–38 built on the “Kirov case”, Yezhov’s rise through the investigation, Order 00447 and the mass operations, the fate of the 1934 congress delegates, and the historiographical debate (Conquest’s premeditation case against Getty’s and the archives’ scepticism). Omissions earn marks only when tied to evaluation — e.g. the set shows the legal and political machinery but nothing of the mass operations against ordinary citizens, which may make the Terror look like an élite affair. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 24 — Palaces for the people  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-metro',
    title: 'Palaces for the people: the Moscow Metro',
    themeKey: 'rus-metro',
    themeSentence:
      'The Moscow Metro of 1935 was the plans’ showpiece — marble underground palaces built by shock labour, proof offered to the world and the queue-weary public that socialism delivered magnificence.',
    tags: ['rus-p5', 'rus-p7'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of one of the first trains at Sokolniki station on the opening line of the Moscow Metro, 1935.',
        image: {
          src: 'sources/moscow-metro-1935.jpg',
          alt: 'A new type-A metro train stands at the marble-pillared Sokolniki platform in 1935, the driver leaning from his cab as passengers board',
          credit: 'Photographer unknown, 1935. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows one of the new trains — car number 1003, its headlamps lit — standing at the platform of Sokolniki station, the young driver leaning from his cab window. The station itself is the point: marble-faced pillars, coffered ceilings and polished stone floors — a palace interior built for the daily journey of workers.',
        note: 'Note: the first line of the Moscow Metro — thirteen stations — opened in May 1935, built in under four years, much of it by Komsomol volunteer brigades working around the clock. The stations were designed, in Kaganovich’s phrase, as “palaces for the people”.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a speech by Lazar Kaganovich, the Politburo member in charge of the Metro’s construction, at the opening ceremony, May 1935.',
        body: 'Comrades! When our metro was only a trench in the Moscow clay, the sceptics smiled and the foreign engineers shook their heads: the geology was impossible, the tempo was impossible, the workers were yesterday’s peasants. Today the trains are running, and I invite the sceptics to buy a ticket. But why, they ask abroad, the marble? Why chandeliers for a train that a worker rides for five kopecks? Let them ask! In their countries the palaces are above ground, for the few, and the many are herded through iron tunnels like freight. We have built our palaces underground, for the millions — because in the land of the Soviets the worker is the aristocrat, and nothing is too beautiful for him. Every slab of this marble is an argument; every station answers the question of what the five-year plans are for. They are for this: that the ordinary man, riding to his shift, should stand for one minute of his day in a palace that belongs to him. The metro is communism made visible — and this, comrades, is only the first line.',
        footnotes: [
          'Kaganovich — First Secretary of the Moscow party organisation; the Metro bore his name until 1955.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of Stalinist culture written by a historian and published in 2018.',
        body: 'The Metro was the regime’s most successful artefact because it made the promissory note tangible. Life in 1935 Moscow was queues, communal flats and ration-book arithmetic; sixty metres down, the future had already arrived — marble, light, punctual trains — and could be visited for five kopecks. Foreign visitors were taken there first and judged the system by it, exactly as intended; Muscovites brought guests from the provinces as to a museum of what was coming. The construction told the same double story. The heroics were real — the Komsomol brigades in the flooded tunnels became legend, and the young “metrostroevtsy” carried their identity for life — but so were the borrowed British engineering, the labour of requisitioned workers alongside the volunteers, and Kaganovich’s tempo, which cost lives no one counted publicly. Art historians read the stations as the founding works of “socialist realism in architecture”: not a representation of Soviet reality but of Soviet destiny — the deferral of the present in favour of a magnificent, always-arriving future. That, more than the trains, was the cargo the Metro carried.',
        footnotes: [
          'Metrostroevets — a Metro construction worker; the first line’s workforce peaked above 70,000.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the opening of the first Metro line in May 1935, the second Five-Year Plan’s showpiece projects, Komsomol shock construction under Kaganovich, the “palaces for the people” design programme)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details represented in and/or surrounding the source', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. official photography publicising the Metro’s opening — the gleaming train and marble station composed as proof that the plans delivered socialist abundance)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. “Account for” requires candidates to state the reasons for — here, the possible reasons the source was created. Generic purposes (“to inform”) are not enough for full marks: the purpose must be specific to this source. Context: May 1935 — the first line opening as the plans’ great public triumph, built at storming tempo and unveiled with festivals, poems and press photography. Specific details from the photograph — the new train and its young driver, the palatial station finishes — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the meaning of the Moscow Metro. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast: both similarities and differences are expected. Key similarities: both sources read the Metro as an argument rather than a railway — Kaganovich says every marble slab argues, the historian calls it the promissory note made tangible — and both acknowledge the scepticism and the showpiece function for foreign eyes. The central differences: Source 2 presents the palace-for-the-worker as socialism already achieved (“communism made visible”), the heroics as pure volunteering, the tempo as triumph; Source 3 supplies what the speech omits — the borrowed engineering, the requisitioned labour beside the volunteers, the uncounted costs — and reframes the aesthetic as destiny deferred: a representation not of Soviet reality but of a future perpetually arriving. Candidates may account for the difference through origin (the builder-politician at his own ceremony versus a cultural historian), although accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the relationship between propaganda and reality in the Soviet Union of the 1930s. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the propaganda–reality relationship in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent that relationship, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents Stalinist propaganda at its most sophisticated — not lies about the present but a purchasable sample of the future (Sources 1 and 2), decoded by the historian as the aesthetics of deferral (Source 3). Strong responses test the representation with own knowledge: the gap between showpiece and daily life (rationing to 1935, the housing crisis, the queues), the parallel showpieces (Magnitogorsk, the Dnieper dam, aviation records, the 1936 constitution), socialist realism’s doctrine of depicting life “in its revolutionary development”, and the coexistence of the Metro’s festival with the Kirov-era repressions. The strongest answers judge whether the set captures the mix of genuine achievement and staged promise — the Metro was real and ran — rather than treating propaganda as simple falsehood. Omissions tied to evaluation: the requisitioned workers and the accidents appear only via the historian’s aside, and the ordinary rider’s voice is absent. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 25 — Victory  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-victory',
    title: 'Victory: the parade, the toast and the price',
    themeKey: 'rus-victory',
    themeSentence:
      'The Victory Parade of June 1945 displayed the Soviet Union at its zenith — and the regime immediately began deciding what the victory meant, who owned it, and what the twenty-seven million dead would be permitted to signify.',
    tags: ['rus-p8'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of Marshal Georgy Zhukov, who commanded the Victory Parade, within the Kremlin walls on the day of the parade, Moscow, 24 June 1945.',
        image: {
          src: 'sources/victory-parade-1945.jpg',
          alt: 'Marshal Zhukov in greatcoat and medals walks in the Kremlin with a decorated general on the day of the 1945 Victory Parade, the Tsar Bell and cathedral behind',
          credit: 'Russian Ministry of Defence archive / CC BY 4.0, via Wikimedia Commons',
        },
        body: 'The photograph shows Zhukov — the deputy supreme commander, his greatcoat open over rows of decorations — walking within the Kremlin with a medal-laden general beside him and staff cars and adjutants behind, the Tsar Bell and cathedral domes over his shoulder. It was Zhukov, not Stalin, who reviewed the parade that day from a white horse.',
        note: 'Note: at the parade of 24 June 1945, two hundred captured German standards were flung down at the foot of the Lenin Mausoleum. Within a year Zhukov, the war’s most celebrated commander, had been posted away from Moscow to a provincial command as his fame became inconvenient.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Josef Stalin’s toast “to the Russian people” at the Kremlin reception for Red Army commanders, 24 May 1945, as published in Pravda.',
        body: 'Comrades, permit me to propose one more, last toast. I should like to propose a toast to the health of our Soviet people, and in the first place, the Russian people. I drink in the first place to the health of the Russian people because it is the most outstanding nation of all the nations forming the Soviet Union… I drink to the health of the Russian people not only because it is the leading people, but also because it possesses a clear mind, a staunch character and patience. Our government made not a few errors; we experienced at moments a desperate situation in 1941–42… Another people could have said to the Government: you have failed to justify our expectations, go away; we shall install another government which will conclude peace with Germany and assure us a quiet life. The Russian people, however, did not take this path, because it trusted the correctness of the policy of its Government, and it made sacrifices to ensure the rout of Germany. This confidence of the Russian people in the Soviet Government proved to be that decisive force which ensured the historic victory over the enemy of humanity — over fascism. Thanks to it, to the Russian people, for this confidence! To the health of the Russian people!',
        footnotes: [
          'The toast’s admission of “errors” and a “desperate situation” was unique in Stalin’s public speech — and was not repeated.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Soviet victory and its memory written by a historian and published in 2020.',
        body: 'The victory was the Soviet state’s one unarguable achievement, and precisely for that reason its meaning had to be managed. The management began at once. Stalin’s toast performed a double substitution — the peoples’ sacrifice became the Russian people’s, and their endurance became confidence in the government — converting the war’s most dangerous memory (the catastrophes of 1941, which the toast glancingly admits) into a loyalty oath retroactively signed by the dead. The parade made the same argument in choreography: the standards at the Mausoleum steps offered the victory to the leader who had nearly lost it. What could not be choreographed was demobilised: Zhukov was exiled to Odessa within a year, the veterans’ associations were dissolved, Victory Day ceased to be a public holiday in 1947, and the invalid veterans who begged in the stations were swept from the great cities. The dead were counted in public at seven million — a third of the truth — because the true figure was an indictment. Only in 1965, under Brezhnev, did the cult of the Great Patriotic War begin its official career, by which time it could be celebrated safely: as the founding sacrifice of the system, with the questions of 1941 long buried. The victory was real; the memory was constructed — and the construction began, as the sources show, before the summer of 1945 was out.',
        footnotes: [
          'The figure of roughly 27 million Soviet dead was acknowledged only in the glasnost era.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the German surrender of May 1945 and the Victory Parade of 24 June, Zhukov as deputy supreme commander and the parade’s reviewing officer, the captured standards flung at the Mausoleum, the USSR at the summit of its prestige)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: June 1945 — the war in Europe won six weeks earlier, the parade assembling the fronts’ standard-bearers in the rain, Zhukov at the height of a fame that would shortly become his liability. Specific details from the photograph — the marshal’s decorations, the Kremlin setting, the entourage — should be connected to those circumstances; the note’s detail of his coming demotion may be used to frame the image. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of how the Soviet regime treated the memory of the war.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the authentic published text of Stalin’s toast — direct evidence of the official framing, calculated for publication rather than candid)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly account of the memory politics with the archives and the long view, but interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is first-rate evidence of the official meaning being built — the elevation of the Russian people over the others, sacrifice recast as confidence in government, the singular admission of error — precisely because it is a performance published in Pravda; as evidence of popular feeling it proves nothing. Source 3 assembles the documented management (Zhukov’s exile, the cancelled holiday, the falsified death toll) into an argument whose facts are verifiable but whose framing — memory as construction — is interpretation; candidates should note it uses the other two sources’ events as its own evidence. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the meaning and cost of the Soviet victory in the Great Patriotic War. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the victory’s meaning and cost in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the victory’s meaning and cost, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents victory as achievement and appropriation together — the pageantry and its commander (Source 1), the official meaning assigned within weeks (Source 2), and the historian’s account of a memory managed, suppressed and finally cultified (Source 3). Strong responses supply the substance with own knowledge: the factors of victory (the evacuated industry, Stalingrad and Kursk, Lend-Lease, the coercion and the patriotism), the demographic and material cost (some 27 million dead, 1,700 towns destroyed), the veterans’ post-war treatment, Zhukov’s trajectory, and the war cult’s Brezhnev-era revival. The strongest answers weigh what the set uniquely shows — meaning-making as politics — against what it underplays: the soldiers’ and civilians’ own experience of victory, and the liberation-turned-occupation the Red Army brought to eastern Europe, which sits outside the set’s Moscow frame. Omissions earn marks only when tied to evaluation. A source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
