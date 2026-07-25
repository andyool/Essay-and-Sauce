import type { SourceSet } from './types';

// Source sets 18–22 for Elective 2: Russia and the Soviet Union 1914–45.

export const RUS_SOURCE_SETS_4: SourceSet[] = [
  // ------------------------------------------------------------------
  // RUS SET 18 — The immortal Lenin  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-lenincult',
    title: 'The immortal Lenin: death, funeral and cult',
    themeKey: 'rus-lenincult',
    themeSentence:
      'Lenin’s death in January 1924 gave the party a saint, the mausoleum a body, and the succession struggle its most valuable prize — the right to speak in the dead man’s name.',
    tags: ['rus-p4'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of Lenin’s funeral cortège setting out through the woods from Gorki, where he died, January 1924.',
        image: {
          src: 'sources/lenin-funeral-1924.jpg',
          alt: 'Lenin’s coffin is borne through deep snow and birch woods from Gorki in January 1924, the column flanked by soldiers',
          credit: 'Photographer unknown, 1924, published in L’Illustration. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows the coffin carried at the head of a dense column of mourners through deep snow between birch trees — the procession bearing Lenin from the country house at Gorki towards the railway for Moscow. Soldiers with slung rifles flank the column; the temperature that week fell below minus thirty.',
        note: 'Note: despite the cold, hundreds of thousands queued in Moscow to file past the bier. Against the objections of Lenin’s widow, the leadership decided to embalm the body permanently and build the mausoleum on Red Square.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from Josef Stalin’s address to the Second Congress of Soviets on the death of Lenin, January 1924.',
        body: 'Comrades! We communists are people of a special mould. We are cut from special cloth… There is nothing higher than the calling of member of the party whose founder and leader was Comrade Lenin. Departing from us, Comrade Lenin enjoined on us to hold high and keep pure the great title of member of the party. We vow to thee, Comrade Lenin, that we shall honourably fulfil this thy commandment! Departing from us, Comrade Lenin enjoined on us to guard the unity of our party as the apple of our eye. We vow to thee, Comrade Lenin, that we shall honourably fulfil this thy commandment also!… Departing from us, Comrade Lenin enjoined on us to strengthen the dictatorship of the proletariat. We vow to thee, Comrade Lenin, that we shall not spare our strength to fulfil honourably this thy commandment too!',
        footnotes: [
          'Stalin, a former seminarian, cast the speech as a liturgical litany of vows; Trotsky, convalescing in the south, was absent from the funeral.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the Lenin cult written by a historian and published in 2013.',
        body: 'The cult was constructed with remarkable speed and perfect political logic. Within a week of the death the Politburo had overriden Krupskaya’s plea that her husband be buried simply and his memory honoured by reading his works: the body was embalmed for permanent display, Petrograd was renamed Leningrad, and an Institute of the Lenin Cult in all but name began assembling relics. The theology followed the architecture. “Leninism” was codified — first by Zinoviev, then, decisively, in Stalin’s lectures “Foundations of Leninism” — into a catechism that made the dead leader’s writings an orthodoxy and their licensed interpreter the arbiter of every dispute. In the succession struggle this was the weapon that mattered: each contender accused the others of departing from Lenin, but only the General Secretary controlled the machinery — the funeral itself, which Trotsky missed by a misdirection he never convincingly explained; the vows pronounced over the bier; the Lenin Enrolment that flooded the party with new members who knew Lenin only as an icon. The man who had written, in his last notes, that Stalin should be removed was converted, embalmed, into the chief exhibit of Stalin’s legitimacy.',
        footnotes: [
          'Lenin’s “Testament”, dictated in December 1922, was read to delegations of the 1924 congress but suppressed from publication.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Lenin’s incapacity after his strokes and death at Gorki in January 1924, the state funeral and the queues in extreme cold, the decision to embalm and build the mausoleum, the opening of the succession struggle)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: January 1924 — Lenin dead at fifty-three after two years’ incapacity, the procession from Gorki opening a week of state mourning, the leadership already manoeuvring (Trotsky absent in the south), and the cult’s foundations — embalming, renaming, the mausoleum — laid within days. Specific details from the photograph — the coffin through the snow, the military escort, the mass column — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the political uses of Lenin’s death.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the authentic funeral oration in Stalin’s own words, revealing precisely by its form, but a performance claiming the inheritance)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly analysis of the cult’s construction, but interpretive in assigning motive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is the document itself — the litany form (a seminarian’s cadences applied to a revolutionary’s funeral) is first-hand evidence of the cult’s religious grammar and of Stalin positioning himself as the vow-taker for the whole party; as evidence of sincere grief or of the party’s actual state it proves nothing, being ceremony. Source 3 assembles the documented machinery (Krupskaya overruled, the codification of “Leninism”, the suppressed Testament) but its reading of every step as succession politics is interpretation — cults also grew from below, as the queues in the cold suggest. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the significance of Lenin’s death for the development of the Soviet state. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the death’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent that significance, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents Lenin’s death as a founding political event — mass mourning (Source 1), the inheritance claimed at the bier (Source 2), and the cult as succession weapon (Source 3). Strong responses connect to the succession struggle with own knowledge: the Testament and its suppression, the Lenin Enrolment, the triumvirate against Trotsky, “Socialism in One Country” as the doctrine that out-claimed permanent revolution, and the cult’s long afterlife as Stalinism’s foundation (Stalin as “the Lenin of today”). Omissions tied to evaluation: popular feeling appears only as a queue — whether the cult was manufactured or met a real need the set cannot settle; and Krupskaya’s resistance, noted but unheard, marks the excluded alternative. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 19 — After Lenin  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-succession',
    title: 'After Lenin: the struggle for the succession',
    themeKey: 'rus-succession',
    themeSentence:
      'The succession was decided not by doctrine or oratory but by the machine — and the 1925 leadership photograph is a group portrait of the men Stalin would outmanoeuvre, expel and finally shoot.',
    tags: ['rus-p4'],
    era: 'mid',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the Soviet leadership in the Kremlin, April 1925: Josef Stalin, Alexei Rykov, Lev Kamenev and Grigory Zinoviev.',
        image: {
          src: 'sources/leadership-1925.jpg',
          alt: 'Stalin, Rykov, Kamenev and Zinoviev walk together in the Kremlin, 1925, in heavy coats and fur hats',
          credit: 'Nikolai Petrov, Krasnaya Niva, 1925. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows four men walking abreast in the Kremlin: Stalin, General Secretary of the party, in military greatcoat and fur cap; Rykov, Lenin’s successor as head of government; Kamenev, his deputy; and Zinoviev, chief of the Communist International. They walk as equals — the collective leadership presented to the public after Lenin’s death.',
        note: 'Note: within three years Stalin had driven Kamenev and Zinoviev from the leadership (with Trotsky, expelled from the party in 1927); Rykov followed in 1929–30. All three men beside Stalin in this photograph were shot after show trials in 1936–38.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an open letter by Leon Trotsky to party members on the “new course”, 1923.',
        body: 'The party lives on two storeys: in the upper storey they decide, and in the lower they learn of the decisions. The old course, tolerable in the emergency of the civil war, has hardened into the rule of the apparatus: secretaries are appointed from above, congresses applaud what has been settled in advance, and the party member who thinks aloud is invited to think about his position instead. Bureaucratism is not an accident, comrades; it is the beginning of a degeneration. The old guard, of which I am one, has no divine right that exempts it from history: other revolutions have seen their leaderships ossify, substitute themselves for the class, and rot. Our safeguard is not this or that personality but party democracy — free discussion, election not appointment, the initiative of the youth who came to us for revolution and not for a career. Let the party check its apparatus, before the apparatus becomes the party.',
        footnotes: [
          'The Politburo majority condemned the letter as factionalism under the 1921 ban; Trotsky lost the War Commissariat within eighteen months.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the succession struggle written by a historian and published in 2017.',
        body: 'Each of Stalin’s rivals was better known, a better speaker and a better theorist; each was beaten by the same instrument. The General Secretaryship, accepted by the others in 1922 as clerical drudgery, appointed the provincial secretaries who chose the congress delegates who elected the Central Committee — a circle Stalin closed within three years, while the Lenin Enrolment filled the ranks with new members for whom the party was the machine that had admitted them. The rivals cooperated in their own destruction with a precision no plan could have arranged: Zinoviev and Kamenev joined Stalin to keep Trotsky from power and buried the Testament to save him; Trotsky held aloof until his allies were spent; the United Opposition of 1926–27 united the losers after each had lost; and Bukharin supplied the votes to crush them before discovering, in 1928, that he was next. Ideas mattered — “Socialism in One Country” offered a tired country confidence where permanent revolution offered it further sacrifice — but they mattered as banners over an organisational war. By 1929, when Stalin’s fiftieth birthday filled the press with the first full liturgy of the cult, the question the photograph of 1925 poses — which of these equals will emerge? — had been answered so completely that the other three faces would soon require erasing.',
        footnotes: [
          '“Socialism in One Country” — Stalin’s 1924 doctrine that socialism could be completed in the USSR without European revolution.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Outline the historical context in which Source 1 was produced.',
        marks: 4,
        key: [
          {
            rows: [
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the collective leadership after Lenin’s death in 1924, the triumvirate of Zinoviev, Kamenev and Stalin against Trotsky, Rykov as head of government, the public presentation of unity while the succession struggle proceeded)', marks: '4' },
              { descriptor: 'Outlines the context of the source by including mostly accurate details represented in and/or surrounding the source', marks: '3' },
              { descriptor: 'Outlines the context of the source with some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 4,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: 1925 — Lenin dead a year, Trotsky already stripped of the War Commissariat, the “collective leadership” photographed for the illustrated press as the triumvirate began to split (Zinoviev and Kamenev moving into opposition that very year). Specific details from the photograph — the four walking as equals, Stalin’s soldierly dress among civilians — should be connected to those circumstances; the note’s afterlife (three of the four shot) may be used to frame the image’s later meaning. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the reasons for Stalin’s victory in the succession struggle. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarity — and a rich one: both sources locate Stalin’s power in the apparatus rather than in argument — Trotsky’s “secretaries appointed from above… congresses applaud what has been settled” is precisely the historian’s circle of appointment and delegation. The differences: Source 2 is prophecy and warning from inside the struggle in 1923 — bureaucratism as degeneration, democracy as remedy — written by a participant whose own conduct (aloofness, late alliances) it cannot see; Source 3 is autopsy — it adds what Trotsky omits: the rivals’ serial blunders including his own, the Lenin Enrolment’s arithmetic, and the ideological appeal of Socialism in One Country, which it weighs as banner rather than cause. Candidates may note the irony that the diagnosis was accurate and the diagnostician still lost. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the reasons for Stalin’s rise to power by 1929. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the reasons for Stalin’s rise in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent those reasons, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents the succession as an organisational war fought behind a façade of collective leadership — the façade itself (Source 1), the contemporary diagnosis (Source 2), and the full anatomy (Source 3). Strong responses deploy the sequence with own knowledge: the Testament suppressed, the funeral misdirection, the triumvirate and its breakup, the defeat of the Left (1925–27) and Right (1928–29) oppositions, the ban on factions as the rules of the game, and the NEP debate that gave each phase its policy content. The strongest answers engage the historiographical balance (machine, blunders, doctrine — Deutscher, Carr, Kotkin) and judge the set’s weighting. Omissions tied to evaluation: Bukharin and the Right barely appear, and the policy stakes (industrialisation debate) are compressed to a banner. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 20 — The canal of the OGPU  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-belomor',
    title: 'The canal of the OGPU: forced labour and its legend',
    themeKey: 'rus-gulag',
    themeSentence:
      'The White Sea Canal was built in twenty months by prisoners with picks and barrows — and celebrated by a brigade of famous writers as the “reforging” of human souls.',
    tags: ['rus-p7'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of prisoners at work on the White Sea–Baltic Canal (Belomorkanal), c. 1932.',
        image: {
          src: 'sources/belomor-canal-1932.jpg',
          alt: 'Prisoners haul wheelbarrows up wooden plank ramps out of a vast hand-dug excavation on the White Sea Canal, c. 1932',
          credit: 'Photographer unknown, c. 1932. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows a file of prisoners hauling loaded wheelbarrows up sloping plank ramps out of a vast excavation. The workings stretch to the treeline — a canal bed dug by hand: barrows, picks and timber staging, with not a machine in sight.',
        note: 'Note: the 227-kilometre canal was built in twenty months in 1931–33 by some 120,000–170,000 OGPU prisoners. Official figures admitted more than 12,000 deaths; historians put the true figure far higher. The canal proved too shallow for most sea-going ships.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the collective volume on the canal produced by a brigade of Soviet writers after their escorted visit, 1934.',
        body: 'Here labour has become what the poets promised: a school. The thief, the wrecker, the kulak — men whom the old world made and then locked away to rot — stand on the rock of Karelia and remake it, and in remaking it are remade. We spoke with a safe-cracker who now commands a brigade of concrete-layers and blushes at his medals; with an engineer, once a saboteur, who begged — begged, comrades — for a harder section of the works. The chekist here is not a gaoler but a physician of souls, patient as a schoolmaster, and the canal itself is the least of what is being constructed: the true structure is the human being, straightened like the waterway. Let the humanists of Europe, who weep over our “slaves” from armchairs upholstered by colonial labour, come and see men whom punishment has made proud. We have seen the future of correction, and it works — it works in three shifts, and it sings while it works.',
        footnotes: [
          'The 1934 volume, edited under Maxim Gorky’s direction by 36 writers, was withdrawn within four years when its OGPU heroes were themselves purged. “Perekovka” — reforging — was the camp system’s official ideology.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Gulag written by a historian and published in 2014.',
        body: 'Belomor mattered less as transport than as template. Economically the canal was close to worthless — dug to half its planned depth to meet Stalin’s deadline, it carried a fraction of the promised traffic — but as a demonstration it was priceless in both directions. Inward, it proved that the OGPU could conjure a workforce of six figures from the courts, feed it by output norms — the ration tied to the cubic metre, hunger as foreman — and finish on time; the ministries drew the conclusion, and “special contingents” became a permanent factor in Soviet planning, mining the gold of Kolyma and building the cities of the Arctic. Outward, the writers’ brigade manufactured the legend that this was redemption, not punishment — the single most successful propaganda operation the camps ever ran, and the last: after 1937 the Gulag disappeared from public print, its inmates no longer souls to be reforged but enemies to be worked. The canal thus marks the hinge: the moment the camp ceased to be an emergency and became an industry — with a literature department.',
        footnotes: [
          'At its 1930s–40s peak the Gulag held over 1.5 million prisoners at a time, with millions more in colonies and exile.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the first Five-Year Plan era, the OGPU’s use of mass prisoner labour, the White Sea Canal built by hand in 1931–33 as a prestige project, dekulakisation and the courts supplying the workforce)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the Gulag’s first great construction — the canal driven through Karelia at plan tempo by prisoners of the collectivisation and Terror-era courts, worked with hand tools under the OGPU, and publicised as socialist correction. Specific details from the photograph — the barrows and plank ramps, the absence of machinery, the scale of the hand-dug works — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the nature of the Soviet forced labour system.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. an authentic and famous piece of state propaganda by escorted writers, worthless on conditions, revealing on ideology)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly account with the archives and the system’s whole arc, but interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is a special case of the useful-because-unreliable document: as testimony about camp life it is propaganda produced on an escorted tour, its blushing safe-crackers stage-managed; as evidence of the regime’s self-presentation — “reforging”, the chekist as physician, the jibe at European humanists — it is first-rate, and its later withdrawal (its heroes purged) adds a layer the note supplies. Source 3 rests on the opened archives (numbers, death rates, the ration-norm system) and its “template” argument is well supported; its limits are the estimates it must use and the interpretive weight of its “hinge” claim. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the methods of the Stalinist regime in the 1930s. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the regime’s methods in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent Stalinist methods, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents repression and propaganda as one system — the hand-dug canal (Source 1), the literature that sanctified it (Source 2), and the economics that perpetuated it (Source 3). Strong responses widen with own knowledge: dekulakisation supplying the first mass contingents, Article 58 and the courts, Kolyma and the camp economy’s reach, the ration-norm system, the Terror’s inflow after 1936, and the propaganda arc from perekovka to silence. The strongest answers note what the set shows uniquely well — the enlistment of culture (Gorky’s brigade) in terror’s service — and what it omits: any prisoner’s own voice (Solzhenitsyn’s and the memoirists’ testimony came later, in secret), and the famine outside the wire that made the camps’ rations relative. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 21 — Records and norms  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-stakhanov',
    title: 'Records and norms: the Stakhanovite movement',
    themeKey: 'rus-stakhanov',
    themeSentence:
      'One miner’s record shift in 1935 became a national movement — hero-workers celebrated like film stars, norms raised for everyone else, and productivity turned into theatre.',
    tags: ['rus-p5', 'rus-p7'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph by Eleazar Langman of Alexei Stakhanov (right, with pneumatic pick) explaining his method to a fellow miner at the coal face, Donbass, mid-1930s.',
        image: {
          src: 'sources/stakhanov-mine-1935.jpg',
          alt: 'Alexei Stakhanov, pneumatic pick in hand, talks with a fellow miner at a timbered coal face',
          credit: 'Eleazar Langman. Library of Congress, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows Stakhanov at the coal face, pneumatic pick braced against the seam, turning to instruct the miner crouched beside him under the timbering. The image — composed, lit and reproduced across the Soviet press — presents the record-breaker in his element: modern machine in hand, teaching the method that bears his name.',
        note: 'Note: on the night of 30–31 August 1935 Stakhanov was credited with cutting 102 tonnes of coal — fourteen times the norm — in a shift organised so that others did his timbering. Within weeks “Stakhanovism” was proclaimed a national movement.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a Soviet press report on the first All-Union Conference of Stakhanovites, Moscow, November 1935.',
        body: 'The Kremlin hall has seen many congresses, but none like this: miners and milkmaids, weavers and smiths, seated where the diplomats sit, called by name from the platform by Comrade Stalin himself. Comrade Stakhanov told simply how it was done: the pick need not rest while the timbering is set — divide the labour, and the machine works the whole shift. Comrade Busygin the smith, Comrade Vinogradova the weaver, told the same story in iron and in thread. And Comrade Stalin, amid storms of applause, gave the movement its meaning: “Life has become better, comrades; life has become merrier. And when life is merry, work goes well… Why did capitalism defeat feudalism? Because it created higher productivity of labour. And why will socialism defeat capitalism inevitably? Because it can and will give higher productivity than capitalism.” The Stakhanovites, he said, are people of a new type, free of the old norms and of those who cling to them — a movement that began from below, against the technical norms of yesterday, and which no force on earth can now restrain.',
        footnotes: [
          'Stakhanovites received bonuses, apartments, holidays and celebrity; “those who cling to old norms” — engineers and managers — were soon prosecuted as saboteurs of the movement.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of Soviet labour written by a historian and published in 2015.',
        body: 'Stakhanovism solved a propaganda problem and created an industrial one. The record itself was theatre — the shift prepared like a stage, the timbering done by helpers, the tonnage credited to one name — but the theatre had serious purposes: to personalise the plan in heroes a newsreel could love, to prove that tempo was a matter of will rather than investment, and to break the informal peace by which workers and foremen had kept norms attainable. The costs arrived on schedule. Norms were raised across industry by up to half in 1936; wages tied to them fell for the unheroic majority; machinery driven at record pace broke, and the wrecking trials of 1936–38 supplied the explanation — the engineer who warned that a record would ruin the machine had already been designated its saboteur. Shop-floor resentment of the record-breakers was widespread enough to be recorded by the police themselves — beatings, sanded bearings, the word “Stakhanovite” as an insult. As economics the movement subtracted; as politics it was exemplary Stalinism: the plan embodied in heroes, its frictions embodied in enemies, and the distance between them patrolled by the NKVD.',
        footnotes: [
          'Norm rises in 1936 averaged 25–50 per cent across major industries.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Outline the historical context in which Source 1 was produced.',
        marks: 4,
        key: [
          {
            rows: [
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the second Five-Year Plan’s productivity drive, Stakhanov’s record shift of August 1935 and its staged character, the movement proclaimed with rewards and celebrity, the press photography that made the hero-worker a national figure)', marks: '4' },
              { descriptor: 'Outlines the context of the source by including mostly accurate details represented in and/or surrounding the source', marks: '3' },
              { descriptor: 'Outlines the context of the source with some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 4,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the mid-1930s turn from building plants to working them — the productivity campaign, the manufactured record in the Donbass, and the media apparatus (Langman was a leading Soviet photographer) that converted a miner into an icon within weeks. Specific details from the photograph — the pneumatic pick as modern emblem, the instructional pose, the composed lighting — should be connected to those circumstances, including the image’s own propaganda function. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the Stakhanovite movement. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities: both sources describe the same mechanism — the division of labour behind the records (the press report’s “the pick need not rest”; the historian’s helpers and staging), the attack on existing norms and their defenders, and the movement’s theatrical, personalised character. The differences: Source 2 presents the theatre as truth — spontaneous, irresistible, blessed by Stalin’s “life has become merrier”, with norm-defenders cast as the enemy; Source 3 prices the theatre — norms raised on the backs of the majority, machinery wrecked, engineers criminalised, workers’ hatred police-recorded — and reads the whole as Stalinism in miniature. The report’s menace (“no force can restrain”) becomes the historian’s NKVD. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the impact of Stalinist industrialisation on Soviet workers. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of industrialisation’s impact on workers in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent that impact, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents the worker’s position under the plans — celebrated in the hero (Sources 1 and 2), priced in the norms (Source 3). Strong responses widen with own knowledge: the urban workforce doubling as the villages emptied, falling real wages in the first plan and rationing to 1935, labour discipline law (lateness criminalised 1938–40), the end of unemployment and the genuine ladders (rabfaks, promotion of praktiki), women drawn into industry, and the wrecking trials linking shop-floor friction to the Terror. Balance is the discriminator: compulsion and opportunity coexisted, and the sources supply both. Omissions tied to evaluation: the ordinary non-Stakhanovite worker speaks only through police reports summarised at second hand. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 22 — The devil’s bargain  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-pact',
    title: 'The devil’s bargain: the pact with Hitler',
    themeKey: 'rus-pact',
    themeSentence:
      'In August 1939 the two sworn ideological enemies signed a pact that partitioned eastern Europe, bought Stalin time he then squandered, and set the stage for the war that nearly destroyed the USSR.',
    tags: ['rus-p8'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of Vyacheslav Molotov signing the German–Soviet treaty in the Kremlin, September 1939. Behind him stand Joachim von Ribbentrop and Josef Stalin.',
        image: {
          src: 'sources/molotov-pact-1939.jpg',
          alt: 'Molotov signs the German–Soviet treaty at a desk while Ribbentrop and a smiling Stalin stand behind him beneath a portrait of Lenin',
          credit: 'Photographer unknown, 1939. US National Archives, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows Molotov, the Soviet foreign minister, seated at the desk signing, while behind him stand the German foreign minister Ribbentrop, in dark civilian dress among the Soviet uniforms, and Stalin himself — relaxed and visibly smiling. On the wall above the group hangs a framed portrait of Lenin.',
        note: 'Note: the non-aggression pact of 23 August 1939 was followed by the friendship and border treaty of 28 September, after both powers had invaded Poland. A secret protocol — denied by the USSR until 1989 — divided eastern Europe into German and Soviet spheres.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from Molotov’s speech to the Supreme Soviet defending the pact, 31 August 1939.',
        body: 'Only yesterday the fascists of Germany and the men of Britain and France who call themselves democrats agreed in one thing at least: in dreaming of a war in which Soviet Russia and Germany should destroy one another for their profit. Today it is our duty to think of the interests of the Soviet people. For months we negotiated with Britain and France for a serious pact of mutual assistance; they sent us second-rank missions, by slow boat, without powers, while Poland declared she would never admit the Red Army to meet the common enemy. What were we offered? To pull others’ chestnuts from the fire, and to receive in exchange promises worth the paper of a Warsaw guarantee. The non-aggression treaty with Germany is not a friendship of ideas: our differences with National Socialism remain what they were. It is a treaty of peace for our country — it removes the threat of war between the USSR and Germany, and narrows the field of that war in Europe which others laboured to widen towards our frontiers. Those abroad who howl loudest at this treaty are those whose plan it has spoiled. The Soviet Union serves no interests but its own: the interest of peace for the peoples of the USSR.',
        footnotes: [
          'The speech made no mention of the secret protocol signed eight days earlier.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of Soviet foreign policy written by a historian and published in 2019.',
        body: 'Judged as Realpolitik on the day of signature, the pact was defensible and even shrewd; judged by what Stalin did with it, it became one of history’s costliest bargains. The case for August 1939 is real: Munich had taught Moscow that the West would buy peace with other nations’ territory; the Anglo-French military mission came late, junior and empty-handed; and a Far Eastern war against Japan was actually being fought at Khalkhin-Gol as Ribbentrop flew in. The pact turned Hitler west, moved the Soviet frontier hundreds of kilometres out, and bought twenty-two months. The indictment concerns the twenty-two months. Stalin delivered grain, oil and rare metals to Germany to the final dawn; annexed his sphere with a thoroughness — Katyn, the Baltic deportations — that made future enemies of future neighbours; dismissed as provocation more than eighty specific warnings of the invasion, from Churchill, from Sorge in Tokyo, from deserters crossing the Bug on the last night; and forbade the deployments that might have met the blow. The time the pact bought was real; it was the buyer who threw it away. And the secret protocol, denied for fifty years, waited in the archives like a mine: when the Baltic republics demanded the truth of 1939 in 1989, the pact helped end the union it had once enlarged.',
        footnotes: [
          'Khalkhin-Gol — the Soviet–Japanese battles in Mongolia, May–September 1939.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the collapse of collective security and the Munich agreement, the failed Anglo-French-Soviet talks of 1939, the Nazi–Soviet pact of August 1939 and the September border treaty after the invasion of Poland, the secret protocol dividing eastern Europe)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the diplomatic revolution of August–September 1939 — the enemies of a decade’s propaganda signing in the Kremlin, Poland partitioned between them within weeks, and the photograph itself a sensation (Stalin’s smile beneath Lenin’s portrait was read around the world). Specific details from the photograph — Ribbentrop among the Soviet officials, Stalin’s evident satisfaction, the Lenin portrait presiding — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the reasons for the Nazi–Soviet pact.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the official Soviet justification at the moment of signature, revealing of the public case, but concealing the secret protocol)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly assessment with the archives and outcomes, but interpretive in its verdicts)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is the authentic public case — and much of it is factually defensible (the Western missions, the Polish refusal, Munich’s lesson), which is what makes it valuable evidence of how the pact was sold; its decisive unreliability is the omission it was built around: the secret protocol, signed days earlier and denied for half a century, converts “non-aggression” into partition. Source 3 writes with the opened archives (the protocol, the warnings, the deliveries) and separates the decision from its exploitation — a distinction that organises the historiography; its judgements (“the buyer threw it away”) remain interpretation, and the 1989 coda benefits from hindsight no actor possessed. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent Soviet policy on the eve of the Great Patriotic War. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of Soviet pre-war policy in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent that policy, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the pact as calculation, presentation and consequence — the smiling signature (Source 1), the public defence (Source 2), and the balance of gain and squandered time (Source 3). Strong responses supply the record with own knowledge: Litvinov’s collective security and his replacement by Molotov, Munich and the Western guarantees to Poland, Khalkhin-Gol, the annexations of 1939–40 (eastern Poland, the Baltics, Bessarabia; the Winter War as the sphere’s bloodiest instalment), the economic deliveries, the ignored warnings and the catastrophe of June 1941 — and, forward, the protocol’s explosive afterlife in 1989. Omissions tied to evaluation: Poland’s and the Baltic peoples’ experience of the bargain appears nowhere in the set, and the German side’s calculations are absent. A source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
