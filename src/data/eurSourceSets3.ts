import type { SourceSet } from './types';

// Source sets 13–15 for Elective 1: The changing European world since 1945.
// Text sources are constructed for skills practice in the style of the period;
// images are real and credited.

export const EUR_SOURCE_SETS_3: SourceSet[] = [
  // ------------------------------------------------------------------
  // EUR SET 13 — Tanks and trust: 17 June 1953  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-1953',
    title: 'Tanks and trust: the East German rising of 1953',
    themeKey: 'eur-1953',
    themeSentence:
      'On 17 June 1953 East German workers rose against the workers’ state and were put down by Soviet tanks — after which the state marched its youth down the same streets to declare its people’s trust.',
    tags: ['eur-p2'],
    era: 'mid',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph, distributed by the East German state news agency, of a demonstration on the Stalinallee, East Berlin, 26 June 1953 — nine days after the rising was crushed.',
        image: {
          src: 'sources/berlin-rising-1953.jpg',
          alt: 'FDJ youth march down the Stalinallee behind a banner reading “Our answer to the provocateurs: firm trust in the government!”, with red flags and a Lenin portrait, June 1953',
          credit: 'Bundesarchiv, Bild 183-20115-0002 / Peter Heinz Junge / CC BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows columns of young people in the shirts of the state youth organisation marching down the Stalinallee — the showpiece boulevard where the rising began — behind a banner reading “UNSERE ANTWORT AN PROVOKATEURE: FESTES VERTRAUEN ZUR REGIERUNG!” (“Our answer to the provocateurs: firm trust in the government!”). Behind them come massed red flags and a portrait of Lenin.',
        note: 'Note: the demonstration was organised by the regime after Soviet tanks had suppressed the rising of 16–17 June, in which strikes and protests spread to hundreds of towns. The official line held that the rising was a fascist provocation directed from West Berlin.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the account of a construction worker from the Stalinallee, recorded in West Berlin, July 1953.',
        body: 'It began with the norms — they raised the work norms ten per cent, which is a wage cut with a scientific name, and on the sixteenth our brigade downed tools on Block 40. We marched to the House of Ministries, a few hundred, and by the time we stood there we were tens of thousands, and the demands changed as we marched: first the norms, then free elections, the resignation of the government, unity. No one led it; it led itself — that is the truth the pamphlets on both sides will not print. On the seventeenth the whole Republic was on strike — I have heard men from Halle, from Merseburg, from Magdeburg say the same. Then the tanks. I saw boys throw stones at a T-34 by the Potsdamer Platz, and I saw what answered them, and I will not describe it because I ran, and I am not ashamed to say I ran. Now they march the FDJ down our street with banners about trust. Let them. Every man who laid a brick on that street knows what the banner is worth, and knows too what we learned on the seventeenth: they can make us build it, and they can make us march — but only the tanks make us stay.',
        footnotes: [
          'Around fifty people were killed; thousands were arrested. The norm increase was quietly withdrawn.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of East Germany written by a historian and published in 2015.',
        body: 'The rising of 17 June was the bloc’s first mass revolt, and every later crisis stood in its shadow. Its immediate causes were textbook Stalinism in miniature: forced-pace industrialisation, collectivisation and class war against the churches had driven hundreds of thousands west through the open door of Berlin; Moscow, alarmed, ordered a “New Course” of concessions in early June — but the norm increase for workers was kept, insulting precisely the class the state claimed as its own. What began as a builders’ strike became within a day a national revolt with political demands, and its suppression required the occupying power’s armour — a lesson read carefully in every capital. The consequences were formative. Ulbricht, saved by the tanks, purged his rivals and ruled for eighteen more years; the West learned that its talk of “rollback” was rhetoric — no one came; the East German workers learned the lesson of the tanks, and their state never again trusted them — the Stasi’s vast expansion dates from the shock. And the regime’s official memory — provocateurs, fascist agents, loyal masses — became the template for explaining every future crisis of the bloc: never the workers, always the West. The Federal Republic named 17 June a national holiday; the GDR built its self-understanding on denying what had happened.',
        footnotes: [
          'The Stasi — the Ministry for State Security — grew from the crisis into one of history’s densest surveillance systems.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Identify the message of Source 1 and explain how the source conveys this message.',
        marks: 4,
        key: [
          {
            rows: [
              { descriptor: 'Correctly identifies the message of the source (e.g. that the people — above all the young — stand firmly behind the government, and the rising was the work of provocateurs, not of the workers)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the banner’s explicit text naming “provocateurs” and declaring trust, the disciplined columns of state youth replacing the striking workers on the very boulevard where the rising began, the red flags and Lenin portrait reasserting the regime’s symbols, the staging for the state’s own cameras)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: candidates should decode the demonstration as counter-theatre — the site chosen to overwrite the rising, the marchers chosen (organised youth, not the builders who struck), the banner supplying the official interpretation, the symbols of orthodoxy restored — and connect each to the message that the state, not the strikers, speaks for the people. The note’s date (nine days after the tanks) is essential context for the message’s function. Full marks require specific reference to elements of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the East German rising of June 1953. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities: both sources agree on the rising’s course (norms → strike → political demands → national revolt → Soviet tanks) and on its central lesson — the regime rested on force (the worker’s “only the tanks make us stay”; the historian’s state that “never again trusted” its workers); both dismiss the official provocateur story, the worker by witness, the historian by analysis. The differences: Source 2 is participant testimony, its authority the street and its emotion unconcealed (the run he is “not ashamed” of), recorded in the West within weeks and insisting on the rising’s leaderless character; Source 3 sets the event in the bloc’s history — causes in Stalinist policy, consequences in Ulbricht’s survival, the Stasi and the memory war — judgements only distance allows. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the relationship between the East German state and its people in the early Cold War. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the state–people relationship in all three sources', marks: '3' },
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
          'The theme should lead: the set represents a state that could compel performance but not consent — the staged trust (Source 1), the worker’s ledger of what compulsion could and could not do (Source 2), and the historian’s account of a regime rebuilt on surveillance and denial (Source 3). Strong responses widen with own knowledge: the SED’s “construction of socialism” of 1952, the refugee flow through Berlin, Moscow’s New Course and the norm blunder, the rising’s spread (Halle, Bitterfeld, Magdeburg) and suppression, western passivity as the first demonstration that liberation rhetoric was hollow, and the long line to 1961 (the Wall as the answer to the exodus) and 1989 (when the crowds returned and the tanks did not). Omissions tied to evaluation: no SED or Soviet voice explains the regime’s genuine fear of a second 1945; and the many East Germans who did support the state in 1953 appear only as marchers presumed coerced. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 14 — The fireside summit: Geneva 1985  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-geneva',
    title: 'The fireside summit: Reagan and Gorbachev at Geneva',
    themeKey: 'eur-geneva',
    themeSentence:
      'At Geneva in November 1985 the leaders of the two blocs met for the first time in six years — and began the personal diplomacy that would end the Cold War within half a decade.',
    tags: ['eur-p2'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: An official White House photograph of President Reagan receiving General Secretary Gorbachev at the Villa Fleur d’Eau, Geneva, 19 November 1985.',
        image: {
          src: 'sources/geneva-summit-1985.jpg',
          alt: 'Reagan and Gorbachev stand side by side outside the Villa Fleur d’Eau at the Geneva summit, November 1985',
          credit: 'White House Photographic Office, 1985. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows the two leaders side by side before the villa’s doorway at their first meeting: Reagan, hatless and coatless in a November wind, turned smiling towards his guest; Gorbachev in overcoat and scarf, hat in hand, composed for the cameras.',
        note: 'Note: no American and Soviet leaders had met since 1979. Reagan, twenty years the elder, deliberately came out without a coat to greet Gorbachev — a detail the world’s press reported exactly as intended.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the joint statement issued by Reagan and Gorbachev at the close of the Geneva summit, 21 November 1985.',
        body: 'The sides, having discussed key security issues, and conscious of the special responsibility of the USSR and the USA for maintaining peace, have agreed that a nuclear war cannot be won and must never be fought. Recognising that any conflict between the USSR and the USA could have catastrophic consequences, they emphasised the importance of preventing any war between them, whether nuclear or conventional. They will not seek to achieve military superiority. The sides believe that important opportunities exist in the field of arms control… and have agreed to accelerate the work at these negotiations, with a view to accomplishing the tasks of preventing an arms race in space and terminating it on earth, of limiting and reducing nuclear arms and enhancing strategic stability. The sides agreed on the importance of continuing dialogue… and, noting the value of their frank meeting, have agreed to meet again in the nearest future.',
        footnotes: [
          'The sentence “a nuclear war cannot be won and must never be fought” was quoted on both sides for the rest of the Cold War.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Cold War’s ending written by a historian and published in 2018.',
        body: 'Geneva settled nothing and changed everything. On paper the summit produced only the joint statement’s formula and a promise of further meetings — SDI, the sticking point, stuck. What it created was not agreement but a relationship: fifteen hours of talks, five of them alone with interpreters by the pool-house fire, in which each man discovered the other was neither the cartoon his briefings drew nor the prisoner of his own side’s hard-liners. The sequence that followed ran through that relationship. Reykjavik a year later collapsed spectacularly over SDI — and revealed, in its wreckage, that both leaders had been ready to discuss abolishing whole categories of nuclear weapons, a possibility their own establishments regarded with horror. The INF Treaty of 1987 turned the near-miss into law, eliminating an entire class of missiles under mutual inspection no one had believed the Soviet Union would accept. By the Moscow summit of 1988, Reagan — asked beside Lenin’s tomb about his “evil empire” — replied that he had been talking about “another time, another era”. The Cold War’s end required structural causes, and historians will argue their weights forever; but the speed and the peacefulness of the ending were made at the personal level, by a pair of leaders each willing to bet that the other meant it.',
        footnotes: [
          'SDI — the Strategic Defense Initiative, Reagan’s proposed space-based missile shield.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the “new Cold War” of the early 1980s and the six-year absence of summits, Gorbachev’s accession in March 1985 and “new thinking”, the Geneva summit of November 1985 as the first Reagan–Gorbachev meeting, the staging of the greeting for the world’s press)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the frozen confrontation of the early 1980s (euromissiles, Afghanistan, the 1983 war scare) thawing after Gorbachev’s accession; the first summit in six years, held under the world’s cameras, with atmospherics — Reagan’s coatless greeting — designed as policy. Specific details from the photograph should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the significance of the Geneva summit.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the summit’s agreed official record, precise about what both sides would sign, but negotiated language concealing disagreement)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective account able to trace the sequence to 1988 with memoirs and archives, but interpretive about the personal factor’s weight)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is diplomatically authoritative — every word agreed by both governments, and the “cannot be won… never be fought” sentence a genuine doctrinal event; its nature is also its limit: joint statements are drafted to bridge disagreement (SDI appears only as “preventing an arms race in space”), and they record intention, not outcome. Source 3 has the sequence and the participants’ memoirs, and its argument that the ending’s speed was personal is widely held; it remains one interpretation of a contested question — structuralists would demote Geneva to symptom — and its vivid details serve its thesis. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent how the Cold War came to an end. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the Cold War’s ending in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the ending, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the ending as begun in personal diplomacy — the staged handshake (Source 1), the doctrinal sentence both sides signed (Source 2), and the historian’s case for the relationship’s causal weight (Source 3). Strong responses supply the fuller causation with own knowledge: Soviet structural crisis (stagnation, oil prices, the arms burden), Gorbachev’s domestic reforms and their unintended consequences, the euromissile confrontation preceding the thaw, Reykjavik and the INF Treaty’s terms and verification revolution, the UN speech of 1988, and the revolutions of 1989 that summitry permitted but did not make. The evaluative edge: the set is a leaders’ story — the peoples of eastern Europe, the dissidents, and the western publics appear nowhere, and candidates should weigh the great-man frame against structural accounts (the historiographical debate is the question’s core). A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 15 — The keys of November: Czechoslovakia 1989  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-velvet',
    title: 'The keys of November: Czechoslovakia’s velvet revolution',
    themeKey: 'eur-velvet',
    themeSentence:
      'In ten days of November 1989 the Czechoslovak regime that had survived twenty-one years of “normalisation” dissolved before crowds that jingled their keys — the bloc’s gentlest revolution, and its verdict on 1968.',
    tags: ['eur-p2'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph taken at an evening protest rally in Prague during the velvet revolution, late November 1989.',
        image: {
          src: 'sources/velvet-revolution-1989.jpg',
          alt: 'In an evening crowd in Prague, November 1989, a hand rises in the two-fingered victory sign under the streetlights',
          credit: 'Robbie Ian Morrison / CC BY 4.0, via Wikimedia Commons',
        },
        body: 'The night photograph, taken from inside the crowd, shows a single hand raised in the two-fingered victory sign against the blur of streetlights and winter trees, other hands rising behind it. The demonstrators — this is the days of the great rallies — held up victory signs and rattled their house keys: a chime of hundreds of thousands, telling the regime its time was up.',
        note: 'Note: the protests began after riot police beat a student march on 17 November 1989. Within ten days a general strike had been held, the party leadership had resigned, and by 29 December the dissident playwright Václav Havel — in prison that spring — was president.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a proclamation of the Civic Forum, Prague, late November 1989.',
        body: 'Citizens! The Civic Forum, which unites all those who believe this country must change, declares: we do not want revenge; we want responsibility. We demand the resignation of those leaders bound to the old order — the men of 1968 who have led this country for twenty years into moral and economic exhaustion; the release of all prisoners of conscience; an independent inquiry into the police attack of 17 November; the end of the party’s constitutional monopoly of power; and free elections. We call for a general strike of two hours on Monday — not to damage the economy, but so that the government may count us. To the workers we say: the students and actors began this, but only you can finish it. To the members of the party we say: the Forum is open to every citizen of good will, and no one who joins the change need fear the future. We have all spent twenty years learning to say one thing at home and another in public. The time of the double life is over. Truth and love, as our friend in prison has taught us, must prevail over lies and hatred — but they prevail only when spoken aloud, together, in the square.',
        footnotes: [
          '“Our friend in prison” — Havel, jailed repeatedly, most recently in early 1989. Civic Forum was founded in a Prague theatre on 19 November.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the revolutions of 1989 written by a historian and published in 2019.',
        body: 'Czechoslovakia moved last and fastest, and both facts have the same explanation. The regime installed after 1968 was the bloc’s hollowest: it had never pretended to reform, only to normalise — acquiescence purchased with consumer goods and enforced by the file and the cadre questionnaire — and when the external guarantee vanished, nothing internal held it up. The demonstration effect did the rest: by 17 November, Poland had a Solidarity prime minister, Hungary had opened its border and reburied its 1956, and the Berlin Wall had been open for a week — every Czech with a television knew the tanks were not coming. What Czechoslovakia added was tempo and tone: ten days from the beating on Národní street to the fall of the leadership; a revolution run from a theatre by a forum of dissidents, students and actors; the general strike as referendum; keys instead of stones. And it supplied the year’s most exact piece of symbolism. The man the regime had jailed in the spring took the presidential oath in the castle by winter — while Alexander Dubček, the face of the human face of 1968, stood beside him as chairman of the parliament. The velvet revolution was many things; among them, it was 1968’s appeal finally decided — in favour of the appellants.',
        footnotes: [
          'The term “velvet revolution” came from the movement itself; Slovaks call it the “gentle revolution”.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the police attack on the student march of 17 November 1989, the mass rallies and general strike that followed, the collapse of communist rule across the bloc that autumn, the key-rattling and victory signs of the Prague crowds)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: Prague in the last days of November 1989 — the rallies swelling towards the general strike, the party leadership falling, and the year’s wider cascade (Poland, Hungary, the Wall) framing every Czech calculation. Specific details from the photograph — the victory sign, the evening crowd, the keys described in the note — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the character of the velvet revolution.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the movement’s own founding voice at the moment of action, but a proclamation crafted to unite and reassure)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective account placing the revolution in the year’s cascade, but interpretive and admiring in tone)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is the revolution speaking in its own register — legalist demands, the renunciation of revenge, the appeal across class lines and even to party members, the Havel citation — and as the operative document of those days it is direct evidence of strategy and self-understanding; as proclamation it is also persuasion: unity performed, divisions (between dissidents and workers, Czechs and Slovaks) smoothed for the occasion. Source 3 supplies the comparative frame (the cascade, the regime’s hollowness) and the symbolic reading of Havel and Dubček, but its elegance is interpretation — the “verdict on 1968” is a historian’s sentence, and its admiration mutes the revolution’s later disappointments. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the collapse of communist rule in eastern Europe in 1989. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the collapse of 1989 in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent 1989, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents 1989 as the peaceful self-dissolution of a system that had lost its guarantee — the crowd’s gesture (Source 1), the movement’s method (Source 2), and the historian’s cascade (Source 3). Strong responses supply the year with own knowledge: Gorbachev’s renunciation of force, the Polish round table and June election, Hungary’s border and the pan-European picnic, Leipzig’s Monday demonstrations and the Wall, Romania as the violent exception, and Czechoslovakia’s own road from Charter 77 through the 1988 anniversary demonstrations to November. The evaluative edge: the set’s velvet frame fits Czechoslovakia but not the whole year (Romania), and the sources’ heroes are crowds and dissidents — the regime insiders who chose not to shoot, and the economic exhaustion beneath the politics, are the frame’s omissions. A source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
