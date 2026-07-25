import type { SourceSet } from './types';

// Source sets 7–12 for Elective 1: The changing European world since 1945.
// Text sources are constructed for skills practice in the style of the period;
// images are real and credited.

export const EUR_SOURCE_SETS_2: SourceSet[] = [
  // ------------------------------------------------------------------
  // EUR SET 7 — The bridge in the air  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-airlift',
    title: 'The bridge in the air: the Berlin Blockade and airlift',
    themeKey: 'eur-airlift',
    themeSentence:
      'For eleven months the western powers supplied a besieged city entirely by air — and turned Stalin’s blockade into the Cold War’s first western victory.',
    tags: ['eur-p1'],
    era: 'early',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph by Henry Ries of Berlin children watching an American C-54 transport come in to land at Tempelhof airfield, 1948.',
        image: {
          src: 'sources/berlin-airlift-1948.jpg',
          alt: 'Berlin children stand on a rubble hill watching a US C-54 transport aircraft roar low overhead on approach to Tempelhof, 1948',
          credit: 'Henry Ries / USAF, 1948. Library of Congress, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows a crowd of children standing on a hill of rubble at the edge of Tempelhof airfield, their backs to the camera, watching a four-engined American transport aircraft pass low overhead with its landing gear down. The children’s clothes are patched; the rubble under their feet is the wreckage of their bombed city.',
        note: 'Note: during the blockade of 1948–49 an aircraft landed in West Berlin around the clock — at the peak, one every sixty-two seconds. The airlift delivered some 2.3 million tons of food, coal and goods in 278,000 flights.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a speech by Ernst Reuter, elected mayor of West Berlin, to a mass rally before the ruined Reichstag, September 1948.',
        body: 'You peoples of the world! You people of America, of England, of France, of Italy! Look upon this city, and recognise that this city, this people, must not be surrendered — cannot be surrendered! There is only one possibility for us all: to stand together until this fight is won. We have lived four months under the blockade, and we shall live under it as long as we must. Berliners have known hunger and cold before, and the ration and the darkness will not break us. Let the world see what the aircraft overhead already prove: we are not a bargaining counter, we are not an object to be traded between the powers. Whoever would surrender this city, whoever would surrender the freedom of its people, would surrender himself. Peoples of the world, do your duty as we shall do ours!',
        footnotes: [
          'Reuter spoke on 9 September 1948 to a crowd of some 300,000; the western sectors’ elected government had been driven from the city hall in the Soviet sector days before.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Berlin Blockade written by a historian and published in 2018.',
        body: 'Stalin’s blockade was a probe, not a siege in earnest — the Soviets never interfered with the air corridors, whose use had been guaranteed in writing in 1945, and food from the eastern sector was always available to any West Berliner willing to register for it (few were). Its object was to force the West to choose between abandoning the city and abandoning the new West German state whose currency reform had triggered the crisis. The airlift dissolved the choice. What had begun as an improvisation — few believed two million people could be supplied by air through a winter — became a demonstration of precisely the things Stalin had doubted: western technical superiority, American commitment, and above all the transformation of the Germans of the western zones from defeated enemies into allies. When the blockade was lifted in May 1949, every one of its purposes had produced its opposite: the western currency was entrenched, the Federal Republic founded, NATO signed, and West Berlin converted from an occupation burden into the free world’s most valuable symbol. Rarely in the Cold War did a move rebound so completely.',
        footnotes: [
          'The blockade ran from June 1948 to May 1949; the airlift continued until September 1949 to build a reserve.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Soviet blockade of West Berlin from June 1948 following the western currency reform, the Anglo-American airlift supplying the city through Tempelhof and other airfields, the city still in ruins from the war, the blockade as the first great confrontation of the Cold War)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details represented in and/or surrounding the source', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. news photography humanising the airlift for western readers — the children and the aircraft composing the blockade as a story of rescue)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. “Account for” requires candidates to state the reasons for — here, the possible reasons the source was created. Generic purposes (“to inform”) are not enough for full marks: the purpose must be specific to this source. Context: Berlin in 1948 — the western sectors cut off by road, rail and canal, the airlift begun as an improvisation and growing into a continuous bridge, and a bombed city whose children watched their former enemies feed them from the sky. Specific details from the photograph — the rubble hill, the patched clothes, the C-54 on approach — should be connected to those circumstances, including the image’s symbolic force (the photograph became one of the Cold War’s most famous). Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the Berlin Blockade. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities: both sources present the blockade as a test the West and the Berliners passed together, and both understand its stake as more than food — the city as symbol (Reuter’s “not a bargaining counter”; the historian’s “most valuable symbol”). The differences: Source 2 is the voice of the besieged at the height of the crisis — exhortation, defiance, an appeal to the watching world with the outcome unknown; Source 3, with the archives, cools the drama (the corridors never touched, food available in the East) and reframes the episode as Stalin’s self-defeating probe, cataloguing consequences Reuter could not know (the Federal Republic, NATO). Candidates may account for the difference through origin and purpose, though accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the significance of the Berlin Blockade in the early Cold War. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the blockade’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent the blockade’s significance, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents the blockade as the crisis that consolidated the West — the humanised airlift (Source 1), the Berliners’ self-enlistment in the western cause (Source 2), and the historian’s verdict that every Soviet purpose rebounded (Source 3). Strong responses situate the crisis with own knowledge: the London conferences and currency reform that provoked it, the airlift’s statistics and casualties (some 78 airmen and Germans died), “raisin bombers” and the transformation of German–western relations, the founding of the two German states and NATO in 1949, and the crisis’s management rules (no shooting, pressure short of war) that shaped later confrontations. Omissions tied to evaluation: no Soviet or East German voice appears, and the set’s heroic framing understates western hesitation in June 1948 and the city’s real suffering. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 8 — Signing up: NATO and the western alliance  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-nato',
    title: 'Signing up: NATO and the western alliance',
    themeKey: 'eur-nato',
    themeSentence:
      'With the North Atlantic Treaty the United States broke a hundred and fifty years of peacetime tradition and bound itself to Europe’s defence — completing the division of the continent into armed camps.',
    tags: ['eur-p1'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of President Truman signing the document implementing the North Atlantic Treaty in the Oval Office, watched by the ambassadors of the member states, 1949.',
        image: {
          src: 'sources/nato-signing-1949.jpg',
          alt: 'President Truman signs the North Atlantic Treaty implementation at his desk while twelve diplomats in suits look on, 1949',
          credit: 'Abbie Rowe, US National Park Service. Truman Library, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows Truman seated at his desk, pen to paper, flanked by the standing ambassadors and ministers of the treaty’s member states — a dozen men in suits gathered shoulder to shoulder around the moment of signature, with the presidential flag behind them.',
        note: 'Note: the North Atlantic Treaty was signed in Washington on 4 April 1949 by twelve states. Article 5 declares that an armed attack against one member “shall be considered an attack against them all”.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a radio address by the US Secretary of State, Dean Acheson, explaining the treaty to the American people, March 1949.',
        body: 'It has been asked: is this pact aimed at the Soviet Union? The pact is aimed at any nation, or group of nations, which may attempt to change the peace of the North Atlantic area by force. If the Soviet Union entertains no such design, the treaty threatens it in nothing. We are told the treaty is provocative; I answer that weakness, not strength, has ever been the provocation. Twice in our generation the absence of any such commitment invited aggression and drew America into war after the fires were burning; this treaty is the plain statement, made in peace, which twice was made too late. It does not commit us to war — the constitutional processes of each member remain untouched — but it destroys the calculation on which aggression depends: the hope that the nations of the free world can be dealt with one at a time. The best insurance against a third world war is to make unmistakably clear, in advance, that those who would begin it will find the whole company against them from the first hour.',
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the western alliance written by a historian and published in 2019.',
        body: 'The alliance’s first secretary-general, Lord Ismay, is supposed to have said that NATO existed to keep the Russians out, the Americans in, and the Germans down — a joke, and the most economical truth ever spoken about it. Deterring the Soviet Union was the public purpose, though in 1949 the treaty was a promise without an army: serious NATO forces followed the Korean shock of 1950, and West German rearmament — unthinkable in 1949, accomplished by 1955 — completed the structure and provoked the Warsaw Pact in answer. Keeping the Americans in was the Europeans’ purpose: the treaty was as much a European invention as an American one, lobbied for by governments — Britain and France above all — terrified less of imminent invasion than of a repetition of 1919, when America went home. And keeping the Germans down — anchoring German recovery inside an alliance that reassured Germany’s neighbours — was the unspoken condition of everything else. The treaty froze the division of Europe; its defenders would say it also froze the peace.',
        footnotes: [
          'The Federal Republic of Germany joined NATO in May 1955; the Warsaw Pact was founded days later.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the deepening Cold War of 1948–49 — the Prague coup and the Berlin Blockade, the North Atlantic Treaty signed by twelve states in April 1949, Article 5’s mutual defence pledge, the American break with isolation)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: spring–summer 1949 — the blockade of Berlin still running as the treaty was signed, the western zones of Germany about to become a state, and the United States committing itself by treaty to Europe’s peacetime defence for the first time. Specific details from the photograph — the assembled ambassadors, the formality of the signature — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the reasons for the creation of NATO.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the authentic official case for the treaty made at the time, but persuasion addressed to a doubtful public)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly account with the alliance’s whole development in view, but interpretive and fond of the epigram)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is the official case in the official voice — reliable evidence of how the treaty was justified (deterrence, the lesson of two wars, reassurance about sovereignty), and its defensive framing (“aimed at any nation”) is itself a document of Cold War rhetoric; as analysis it omits what a Secretary of State could not say — European lobbying, the German question, the domestic politics of the Senate. Source 3 supplies exactly those omissions with hindsight (Ismay’s triple purpose, Korea’s militarising shock, 1955), but it is interpretation, openly delighted with its epigram, and its cool functionalism can understate the genuine fear of 1948–49. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the completion of Europe’s division into two armed camps by the mid-1950s. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of Europe’s division into armed camps in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the division’s completion, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the institutionalisation of the Cold War — the signature (Source 1), its public justification (Source 2), and its triple function and sequel (Source 3). Strong responses supply the wider architecture with own knowledge: the Brussels Pact of 1948, the two German states of 1949, Korea and NSC-68 militarising containment, the European Defence Community’s failure and West German entry into NATO (1955), the Warsaw Pact’s founding, and the stabilised stalemate the blocs enforced (visible in 1953 and 1956). Omissions tied to evaluation: the Soviet perspective — encirclement as Moscow read it — appears nowhere, nor do the neutrals (Austria 1955, Finland, Yugoslavia) whose existence complicated the two-camp picture. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 9 — The high point of détente: Helsinki 1975  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-helsinki',
    title: 'The high point of détente: Helsinki 1975',
    themeKey: 'eur-helsinki',
    themeSentence:
      'At Helsinki thirty-five states signed the Cold War’s grand bargain — recognition of Europe’s borders in exchange for words about human rights that turned out to matter more than anyone at the table believed.',
    tags: ['eur-p2'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the signing of the Final Act of the Conference on Security and Co-operation in Europe, Helsinki, 1 August 1975.',
        image: {
          src: 'sources/helsinki-1975.jpg',
          alt: 'Leaders sign the Helsinki Final Act at a long table: Schmidt of West Germany, Honecker of East Germany, Ford of the United States side by side, 1975',
          credit: 'Bundesarchiv, Bild 183-P0801-026 / Horst Sturm / CC BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows the leaders seated in a row at the signing table, each behind his country’s place card: Chancellor Schmidt of the Federal Republic of Germany; Erich Honecker behind the card “Rép. Dém. Allemande” — East Germany; President Ford of the United States; Chancellor Kreisky of Austria. Aides lean over their shoulders; television cameras rise behind.',
        note: 'Note: the two German leaders signing side by side — East Germany treated as an equal sovereign state — was itself part of the bargain. Thirty-five states signed, including the USA, Canada, the USSR and every European state but Albania.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the address of Leonid Brezhnev, General Secretary of the Soviet communist party, to the Helsinki conference, 1975.',
        body: 'The significance of what we accomplish here reaches far beyond this hall. For thirty years the peoples of Europe have lived with the memory of the most terrible of wars; today we declare together that the results of that war, and the realities of post-war Europe — its states, its frontiers — are inviolable, not to be altered by force or by claims upon the past. This is the collective triumph of realism. No one here has been asked to abandon his convictions or his social system: we proceed from the diversity of systems as a fact of our continent’s life, and we declare that security is indivisible — that no state may strengthen its own security at the expense of another’s. The Soviet Union regards the principles adopted here, including non-interference in internal affairs, as binding upon all, great and small. Let détente become an irreversible process; let it be filled with material content — in trade, in technology, in the peaceful co-operation of states with different systems — and the peoples will not permit any return to the cold winds of the past.',
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Helsinki process written by a historian and published in 2019.',
        body: 'Both sides thought they had won, and both were right — on different clocks. Moscow got what it had sought since the 1950s: the multilateral consecration of the postwar map, the two Germanies, the bloc — Basket I’s inviolable frontiers, worth, Brezhnev believed, the paper concessions of Basket III on human contacts, information and conscience. Western sceptics agreed with him: Helsinki was denounced in the American press as a second Yalta. The sceptics misread the instrument. The Final Act was published, by its own terms, in every signatory’s newspapers — and in the East it was read. Within a year the Moscow Helsinki Group was measuring Soviet practice against Soviet signature; Charter 77 followed in Prague, KOR in Poland — small circles of the harassed, armed with nothing but the regime’s own promise. The genius of the process was procedural: review conferences at which compliance could be demanded, indefinitely, in public. Frontier recognition proved perishable — it outlasted the signature by fifteen years. The human rights language proved to be the loaded clause: the bloc had signed the standard by which its subjects, and eventually its reformers, would judge it.',
        footnotes: [
          'Basket III — the Final Act’s provisions on human contacts, information, culture and education.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. détente in the early 1970s — Ostpolitik and the German treaties, SALT I — the two-year CSCE negotiation, thirty-five states signing the Final Act in August 1975, East Germany’s participation as a sovereign equal)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the summit summer of détente — after Brandt’s eastern treaties, the Berlin Quadripartite Agreement and SALT, the long Geneva negotiations produced the Final Act signed at Helsinki by East, West and neutrals together. Specific details from the photograph — the two German leaders side by side, the American president in the row, the ceremony’s scale — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the significance of the Helsinki Final Act.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the authentic Soviet reading of the bargain at the moment of signature, but a leader’s public speech claiming victory in diplomatic language)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly account able to trace the Act’s consequences to 1989–91, but interpretive with the benefit of the ending)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is first-rate evidence of what Moscow believed it had bought — the frontiers, non-interference, “irreversible” détente — and its careful silences (Basket III is nowhere mentioned) are as informative as its claims; as prediction it failed, and it is rhetoric crafted for an audience of thirty-five states. Source 3 writes with the outcome known, which is both its authority (the dissident groups, the review conferences, 1989) and its hazard — the “loaded clause” reading is easier after the fact, and historians debate how much Helsinki caused, rather than merely armed, the opposition. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the nature and consequences of détente in Europe. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of détente’s nature and consequences in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent détente, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents détente as a bargain whose two halves matured on different clocks — the ceremony of equality (Source 1), the Soviet victory speech (Source 2), and the historian’s account of the human-rights clause detonating slowly (Source 3). Strong responses frame détente with own knowledge: its motives (nuclear parity, the Soviet need for trade and technology, Ostpolitik’s logic of “change through rapprochement”, American retrenchment after Vietnam), its instruments (the German treaties, SALT I and the ABM treaty, the Berlin agreement), its erosion (Angola, Afghanistan 1979, the euromissiles) and the Helsinki network’s role in 1989. Omissions tied to evaluation: détente’s critics — western cold warriors and eastern dissidents who thought it betrayal from opposite directions — are absent, as is the arms build-up that continued beneath the summitry. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 10 — The second Cold War: euromissiles and the peace movement  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-euromissiles',
    title: 'The second Cold War: euromissiles and the peace movement',
    themeKey: 'eur-euromissiles',
    themeSentence:
      'The missile crisis of the early 1980s put the Cold War back on Europe’s streets — SS-20s and Pershings on the launch pads, and the largest demonstrations in the continent’s history against them.',
    tags: ['eur-p2'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of a demonstration against cruise missiles, The Hague, Netherlands, October 1985.',
        image: {
          src: 'sources/hague-missile-demo-1983.jpg',
          alt: 'Marchers in The Hague carry a banner reading “Kruisraketten nee — afschaffen nu” and a US flag with skull and crossbones, mid-1980s',
          credit: 'Rob Bogaerts / Anefo, Nationaal Archief. CC0, via Wikimedia Commons',
        },
        body: 'The photograph shows the front rank of a vast march filling the street: young and middle-aged demonstrators carry a long banner reading “KRUISRAKETTEN NEE — AFSCHAFFEN NU” (“Cruise missiles no — abolish them now”). Behind them rise home-made placards, among them an American flag whose stars have been replaced by a skull and crossbones; at the centre a marcher wears a rubber mask of the American president.',
        note: 'Note: the Dutch campaign against cruise missiles collected 3.75 million signatures — in a nation of fourteen million — and its demonstrations in 1981 and 1983 were the largest in Dutch history. NATO’s 1979 “double-track” decision had answered the Soviet SS-20s with new American missiles for Europe and an offer to negotiate both away.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an appeal issued by a European peace movement coordinating committee, 1981.',
        body: 'We are entering the most dangerous decade in human history. Between the Atlantic and the Urals, two military machines confront each other with weapons enough to destroy our continent in an afternoon, and the doctrine on both sides grows worse than the weapons: their planners now speak, in the flat language of the seminar, of “limited” nuclear war — limited, that is, to Europe. We refuse the part written for us. We do not ask which bloc is more to blame; we say that the blocs themselves, and the terror they balance upon, are the danger. We call for a nuclear-free Europe from Poland to Portugal: no SS-20s, no Pershings, no cruise missiles — no weapons whose only targets are our own cities under other flags. Governments tell us these matters are too grave for the public and must be left to the experts. We answer: the experts have brought us here. Peace is too important to be left to the generals of either side. We are not pro-Soviet; we are not anti-American; we are the people who live on the target.',
        footnotes: [
          'Appeals of this kind — this one echoes the END appeal launched in 1980 — circulated in every western European country; eastern signatories risked arrest.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the late Cold War written by a historian and published in 2020.',
        body: 'The euromissile crisis was the whole Cold War in miniature, played out at civic level. The SS-20 was a real escalation, and NATO’s double-track answer — deploy Pershing II and cruise from 1983 unless negotiation removed the whole class — was designed as much to hold the alliance together as to move Moscow. The movements that rose against it were the largest in European history: perhaps a million in Bonn’s autumn of 1983, four million signatures in the Netherlands, Greenham Common’s permanent siege. They failed in their immediate object — the deployments went ahead, the governments that ordered them were re-elected — and Moscow’s hope that the streets would split NATO proved the last great Soviet miscalculation about western societies. Yet the movements’ deeper premise was vindicated with startling speed. The INF Treaty of 1987 abolished the entire class of weapons on both sides — the double-track offer accepted, in the end, by a Soviet leader who had drawn from the crisis the conclusion the demonstrators urged: that security in Europe could not be had against the other side, only with it. Whether the missiles or the marches brought Gorbachev to that view is the argument the decade left behind.',
        footnotes: [
          'INF Treaty — the Intermediate-Range Nuclear Forces Treaty, signed by Reagan and Gorbachev in December 1987.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the collapse of détente and the “new Cold War” after 1979, Soviet SS-20 deployment and NATO’s 1979 double-track decision, the deployment of Pershing II and cruise missiles from 1983, the mass peace movements of western Europe and the Dutch campaign in particular)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details represented in and/or surrounding the source', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. press coverage of the demonstration — and for the movement itself the mass march was an image designed to be photographed)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. “Account for” requires candidates to state the reasons for — here, the possible reasons the source was created. Generic purposes (“to inform”) are not enough for full marks: the purpose must be specific to this source. Context: the early-to-mid 1980s missile crisis — Afghanistan, the end of SALT II, Reagan’s build-up and rhetoric, the SS-20/Pershing confrontation, and the popular mobilisation against deployment that filled the streets of Bonn, London, Amsterdam and The Hague. Specific details from the photograph — the Dutch banner’s demand, the skull-and-crossbones flag and presidential mask expressing anti-American anger, the crowd’s breadth of age — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the European peace movement of the 1980s. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities: both sources take the movement seriously as a historical force, and both record its central idea — security with, not against, the other side (the appeal’s “people who live on the target”; the historian’s account of Gorbachev drawing “the conclusion the demonstrators urged”). The differences: Source 2 speaks from inside the movement in 1981 — apocalyptic in register, deliberately even-handed between the blocs, its outcome unknown; Source 3 audits it from after the ending — the movement failed immediately (deployments proceeded, governments re-elected), served Soviet hopes it never shared, and yet saw its premise vindicated by the INF Treaty. Source 3 also raises the causal question — missiles or marches? — that Source 2 cannot ask. Candidates may account for the difference through origin and purpose, though accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the character of the “new Cold War” of the 1980s in Europe. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the new Cold War’s character in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent the 1980s confrontation, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents the 1980s confrontation as fought in western streets as much as between the blocs — the mass march (Source 1), the movement’s creed (Source 2), and the historian’s double verdict of immediate failure and eventual vindication (Source 3). Strong responses widen with own knowledge: Afghanistan and the death of détente, Solidarity and martial law as the same years’ eastern front, Able Archer 1983 and the war scare, Reagan’s SDI and rhetoric, Greenham Common and the German Greens as the movement’s legacies, and the Gorbachev–Reagan sequence from Geneva to the INF Treaty. Omissions tied to evaluation: the eastern peace activists (persecuted for the same slogans) appear only in a footnote, and the set contains no defender of deployment — the double-track’s supporters, who could claim the treaty as their vindication too. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 11 — Sixteen months of freedom: Solidarity  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-solidarity',
    title: 'Sixteen months of freedom: Solidarity, 1980–81',
    themeKey: 'eur-solidarity',
    themeSentence:
      'In August 1980 Polish workers occupied their shipyards and forced a communist state to legalise the bloc’s first free trade union — a movement of ten million that martial law could suppress but never unmake.',
    tags: ['eur-p2'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the gate of the Lenin Shipyard, Gdańsk, during the strike of August 1980; Lech Wałęsa addresses the crowd.',
        image: {
          src: 'sources/gdansk-gate-1980.jpg',
          alt: 'The flower-decked gate of the Gdańsk Lenin Shipyard during the August 1980 strike, hung with Polish flags and portraits, a crowd gathered beneath',
          credit: 'Unknown photographer, 1980, published in the monthly Znak. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows the shipyard’s gate — beneath the great sign “STOCZNIA…” — decked from top to bottom by the strikers: Polish flags, garlands of flowers, and portraits fixed to the railings. Across the gate hangs a banner reading “Proletariusze wszystkich zakładów, łączcie się!” (“Workers of all enterprises, unite!”); a man has climbed the gatepost, and below, a figure stands above the crowd to speak.',
        note: 'Note: among the portraits the strikers fixed to the gate was that of the Polish pope, John Paul II. The banner turns the most famous communist slogan back on the communist state. The strike ended on 31 August 1980 with the Gdańsk Agreement, conceding the bloc’s first independent trade union.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the demands of the Inter-Factory Strike Committee, Gdańsk, August 1980.',
        body: 'The Inter-Factory Strike Committee, representing the striking workforces of the coastal enterprises, presents the following demands: 1. Acceptance of free trade unions, independent of the party and of the employers, in accordance with Convention 87 of the International Labour Organisation, which the Polish People’s Republic has ratified. 2. A guarantee of the right to strike, and of the security of strikers and those who assist them. 3. Respect for the freedom of speech, print and publication guaranteed in the Constitution of the Polish People’s Republic, and thus no repression of independent publications, and access to the mass media for representatives of all faiths. 4. Restoration of the rights of those dismissed for defending workers’ rights, and of students expelled for their convictions; the release of political prisoners. 5. Broadcast of information about the founding of the Inter-Factory Strike Committee, and publication of its demands. We declare that the strike will continue until these demands are met. We strike not against Poland but for her; our quarrel is not with our fellow-workers anywhere, but with those who have claimed to speak in the workers’ name.',
        footnotes: [
          'The full Gdańsk list ran to twenty-one demands, beginning with the free union and ending with Saturdays off work.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of Solidarity written by a historian and published in 2016.',
        body: 'Solidarity broke every rule of communist crisis management, which is why it took the regime sixteen months to decide which rule to break in reply. It was not a workers’ bread riot, though bread prices lit the fuse — it was a self-limiting revolution with a lawyer’s method, demanding not power but the state’s compliance with its own constitution and treaties. It was not a dissident circle but a mass institution: within months, ten million members — one Pole in four, more than the party itself — with the Church as its shelter and a workers’ Poland as its idea. And it could not be blamed on outside agitators, because its leaders were shipyard electricians and its texts were ILO conventions. Martial law, when it came in December 1981, was a confession: tanks against trade unionists, the workers’ state interning the workers’ leaders — General Jaruzelski pleading, then and forever after, that he had forestalled a Soviet invasion. The lights went out for seven years. But the regime had solved nothing: the underground survived, the economy rotted, and when Gorbachev withdrew the Soviet guarantee, the government of Poland found it had no one to negotiate its surrender with except the union it had banned — and sat down at a round table with Wałęsa in 1989.',
        footnotes: [
          'The Round Table talks of spring 1989 led to semi-free elections in June, swept by Solidarity, and the bloc’s first non-communist prime minister in August.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the August 1980 occupation strike at the Gdańsk Lenin Shipyard led by Wałęsa, price rises and workers’ grievances behind it, the Inter-Factory Strike Committee and the twenty-one demands, the Church’s presence — the Polish pope’s portrait on the gate, the Gdańsk Agreement legalising Solidarity)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the Polish August — the occupation strike spreading along the coast, the gate as the boundary between the workers’ republic inside and the state outside, families and priests at the railings, mass celebrated in the yard, and the negotiation that ended with the bloc’s first free union. Specific details from the photograph — the flags and flowers, the pope’s portrait, the inverted communist slogan on the banner — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the nature of the Solidarity movement.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the movement’s founding document in its own words, first-hand and programmatic, but a negotiating text crafted to be defensible)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly account with the whole arc to 1989, but interpretive and admiring)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is the movement defining itself — the legalism (ILO conventions, the constitution), the self-limitation (“not against Poland but for her”), the solidarity beyond one yard — and as the actual negotiating platform it is direct evidence of strategy; candidates should note that a document written to be unanswerable by the regime is also written to reassure it, and understates the revolution implicit in demand one. Source 3 has the arc to 1989 and the regime’s own confessions (Jaruzelski’s defence), but it is interpretation in an admiring key — “self-limiting revolution” is a historian’s framing — and its verdict on martial law’s motives takes a side in a still-live dispute. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the challenge Solidarity posed to communist rule in Europe. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of Solidarity’s challenge to communist rule in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent that challenge, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents Solidarity as the challenge the system could not classify — the workers’ gate turned altar and tribune (Source 1), the lawyer’s revolution in its own words (Source 2), and the historian’s account of a regime reduced to tanks and, eight years later, to a round table (Source 3). Strong responses situate the movement with own knowledge: Poland’s crisis cycle (1956, 1970, 1976), KOR and the Helsinki framework, John Paul II’s 1979 pilgrimage (“be not afraid”), the Bydgoszcz crisis and the union’s radicalisation, martial law’s mechanics and casualties, the underground years, and the 1989 Round Table as the bloc’s first negotiated exit — the model for the year of revolutions. Omissions tied to evaluation: the regime’s perspective (the party’s genuine crisis, Moscow’s pressure short of invasion — the Suslov commission) and Solidarity’s own internal divisions are outside the set. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 12 — Growing together: the reunification of Germany  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-unity',
    title: 'Growing together: the reunification of Germany',
    themeKey: 'eur-unity',
    themeSentence:
      'Between the fall of the Wall and 3 October 1990 the German question was answered in eleven months — by East German voters, West German diplomacy, and a Soviet leader who chose not to stop it.',
    tags: ['eur-p2'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of East German border troops dismantling the Wall at the Brandenburg Gate to open a new crossing, night of 21–22 December 1989.',
        image: {
          src: 'sources/brandenburg-opening-1989.jpg',
          alt: 'At night, a crane lifts a concrete slab out of the Berlin Wall beside the floodlit Brandenburg Gate, watched by border troops, December 1989',
          credit: 'Bundesarchiv, Bild 183-1989-1222-016 / Peer Grimm / CC BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The night photograph shows a mobile crane lifting a whole concrete segment out of the Berlin Wall, the slab swinging on its chains beside the floodlit columns of the Brandenburg Gate. East German border troops — the same force that had guarded the Wall with orders to shoot — stand at its base directing the work.',
        note: 'Note: the crossing at the Brandenburg Gate was opened on 22 December 1989, six weeks after the Wall fell, in the presence of Chancellor Kohl of West Germany and Prime Minister Modrow of East Germany. The same troops who had enforced the border now dismantled it.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the ten-point programme for German unity presented by Chancellor Helmut Kohl to the West German parliament, 28 November 1989.',
        body: 'The wheel of history has begun to turn faster. The people of the GDR have shown, peacefully and with impressive dignity, that they will no longer be denied their rights — and above all the right to determine their own future. No one knows today what a reunified Germany will finally look like, and no timetable can be decreed. But if our countrymen in the GDR so decide, we are ready to take concrete steps: immediate practical help; comprehensive cooperation the moment the GDR commits itself to free elections and abandons the party’s monopoly of power; confederative structures between the two German states thereafter, with the goal of a federation — a federal order for the whole of Germany. Nobody need fear this process. German unity will come, if it comes, not against Europe but within it: embedded in the European Community, in the process begun at Helsinki, and in the architecture of East–West relations as a whole. The division of Germany was always the division of Europe; the healing of the one cannot be separated from the healing of the other.',
        footnotes: [
          'Kohl consulted neither his coalition partners nor the western allies before announcing the programme; unity came not in the ten points’ five-to-ten years but in eleven months.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of German reunification written by a historian and published in 2021.',
        body: 'Three decisions, none of them inevitable, made unity possible on the terms achieved. The first was taken in East German living rooms: the March 1990 election, expected to reward the reformed socialists or the revolution’s own civic movements, was swept instead by Kohl’s allies on the plainest of platforms — the Deutschmark and unity now — and after it every negotiation was about how, not whether. The second was taken in Moscow. Gorbachev held legal rights of occupation, 380,000 soldiers on East German soil, and every precedent from 1953, 1956, 1961 and 1968; he chose instead to trade — accepting, in July 1990, a united Germany inside NATO in exchange for treaties, credits and the withdrawal of his army with dignity. Historians still argue whether he was persuaded, bribed, or simply out of alternatives. The third was taken in Bonn and Washington against the doubters in London and Paris: the Two-Plus-Four framework that gave the four wartime powers a table at which to surrender their rights, and gave Germany’s neighbours — Poland’s border guaranteed at last — reasons to consent. The revolution was East German; the statecraft was everyone’s; and the speed was Kohl’s, who understood that windows in history open briefly, and drove through this one before it could close.',
        footnotes: [
          'Two-Plus-Four — the treaty negotiated by the two German states and the four occupying powers, signed September 1990.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the fall of the Wall on 9 November 1989 and the collapse of SED rule, mass emigration and demonstrations, the opening of new crossings including the Brandenburg Gate in December 1989 attended by Kohl and Modrow, the accelerating movement towards unity)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details represented in and/or surrounding the source', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. official East German photography recording the opening of the crossing — the regime presenting as orderly generosity what popular pressure had forced)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. “Account for” requires candidates to state the reasons for — here, the possible reasons the source was created. Generic purposes (“to inform”) are not enough for full marks: the purpose must be specific to this source. Context: December 1989 — the Wall breached but the state still standing, the SED’s monopoly abandoned, round tables convening, and the physical border being unmade crossing by crossing at the city’s symbolic centre. Specific details from the photograph — the crane extracting the slab, the floodlit Gate, the border troops now dismantling what they had defended — should be connected to those circumstances; the reversal of the 1961 construction images may earn credit. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the reunification of Germany. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities: both sources place the East German people’s choice first (Kohl’s “right to determine their own future”; the historian’s March election as the first decision), and both insist unity had to be embedded in Europe and the East–West settlement (the ten points’ framework; Two-Plus-Four). The differences: Source 2 is a politician opening a door while disclaiming a timetable — cautious in form (“no one knows”, confederation first) and audacious in fact (announced without consulting anyone); Source 3 reconstructs the whole machinery with hindsight, adds the decisions Kohl could not command (Moscow’s consent, allied management) and the ones he had not yet won (the March election), and credits his speed rather than his blueprint — noting the ten points’ own timetable was overtaken within months. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the reunification of Germany and its significance for Europe. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of reunification and its significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent reunification, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents reunification as revolution completed by statecraft — the border physically unmade (Source 1), the door opened from Bonn (Source 2), and the three decisions that made unity possible on western terms (Source 3). Strong responses supply the record with own knowledge: the exodus through Hungary and the Leipzig demonstrations, Modrow and the round table, the March 1990 election and currency union in July, the Kohl–Gorbachev Caucasus meeting, Two-Plus-Four and the Polish border treaty, and 3 October 1990 — with the European frame (Thatcher’s and Mitterrand’s misgivings; the acceleration of European integration, Maastricht, as unity’s price and companion). Omissions tied to evaluation: the East German civic movements’ marginalisation, the social costs of unification after 1990, and Soviet domestic opposition to Gorbachev’s consent are all outside the set’s frame. A source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
