import type { SourceSet } from './types';

// Source sets 53–56: significant individuals II — Speer, Heydrich, Krupp, Riefenstahl.

export const SOURCE_SETS_14: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 53 — Speer: architecture, armaments and the myth  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-speer',
    title: 'The Führer’s architect: Albert Speer',
    themeKey: 'speer',
    themeSentence:
      'Speer built the regime’s stage sets, then ran its war economy on slave labour — and after 1945 built his most durable construction of all: the myth of the apolitical technocrat who knew nothing.',
    tags: ['p4', 'i-speer'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the architectural model of the “Great Hall”, centrepiece of Albert Speer’s plan for the rebuilding of Berlin as “Germania”, photographed in Speer’s model workshop, around 1939.',
        image: {
          src: 'sources/germania-model.jpg',
          alt: 'The model of Speer\'s planned Great Hall for Berlin: a colossal domed hall dwarfing the ceremonial square and buildings arranged before it',
          credit: 'Bundesarchiv, Bild 146-1986-029-02 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows the detailed model of a monumental building: a colossal dome, ribbed and crowned with a lantern, rising from a columned granite base, with a pillared portico at its front flanked by sculpture. Around it lie the model’s ceremonial square, subordinate wings and tiny files of model figures — rendered at a scale that leaves the human figures barely visible against the mass.',
        note: 'Note: the planned hall was to hold 180,000 people standing; its dome, at 290 metres, would have risen more than twice the height of St Peter’s in Rome. Construction of “Germania” was to be completed by 1950; demolition of Berlin districts for it began in 1939, evicting among others thousands of Jewish tenants.',
        footnotes: [
          '“Germania” — the planned monumental rebuilding of Berlin as world capital.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from Albert Speer’s final statement to the International Military Tribunal at Nuremberg, August 1946, where he stood trial as Minister of Armaments and War Production. Speer was sentenced to twenty years’ imprisonment.',
        body: 'This trial must contribute to preventing such degenerate wars in the future and to establishing rules whereby human beings can live together. Hitler’s dictatorship differed in one fundamental point from all its predecessors in history: it was the first dictatorship which made complete use of all technical means for the domination of its own country. Through technical devices like the radio and the loudspeaker, eighty million people were deprived of independent thought. It was thereby possible to subject them to the will of one man. Earlier dictators needed helpers of high quality even in the lower ranks — men who could think and act independently. The totalitarian system in the period of modern technical development can dispense with them; the means of communication alone make it possible to mechanise the lower leadership. As the result of this there arises the new type of the uncritical recipient of orders. The nightmare of many a man that one day nations could be dominated by technical means was all but realised in Hitler’s totalitarian system. Today the danger of being terrorised by technocracy threatens every country in the world. In consequence, the more technical the world becomes, the more essential is the demand for individual freedom and the self-awareness of the individual human being as a counterpoise.',
        footnotes: [
          'International Military Tribunal — the Allied court that tried the major war criminals at Nuremberg, 1945–46.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a biography of Speer written by an academic historian and published in 2015.',
        body: 'Speer’s career was one construction after another, and the last was the cleverest. The architect who staged the regime’s liturgy — the Zeppelin Field tribune, the cathedral of light, the Chancellery built in a year to overawe diplomats — was never the apolitical artist of his memoirs: the Germania plans were an ideological programme in granite, and their Berlin clearances made him an evicting landlord for the deportation machinery. The minister who tripled armaments output after 1942 did so as master of an empire of compulsion — millions of foreign forced labourers, prisoners of war and camp inmates allocated to his programmes, worked in conditions his own files recorded; the underground fighter-plane works at Dora consumed prisoners at a rate the SS itself found remarkable. At Nuremberg, Speer performed the acceptance of a carefully bounded responsibility — collective, never criminal; for the system, never for its crimes — and offered the court the seductive figure of the modern technocrat swept along by machinery: an analysis with just enough truth to obscure the biography of a man who sat where the machinery was steered. The court halved the difference with twenty years; the memoirs completed the construction; and for three decades the world’s bookshelves housed the “good Nazi” — until the opening of the files, his own among them, dismantled the last of Speer’s buildings stone by stone.',
        footnotes: [
          'Dora — the underground V-weapons and aircraft factory supplied with labour from a concentration camp; some 20,000 prisoners died there.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Explain the message of Source 1. In your answer, refer to specific details from the source.',
        marks: 3,
        key: [
          {
            rows: [
              { descriptor: 'Explains the message of the source (e.g. that the Reich will build on a scale no civilisation has matched — permanence, power and the insignificance of the individual cast in granite) with detailed, accurate and relevant supporting evidence from the source', marks: '3' },
              { descriptor: 'Explains the message of the source with some accurate and relevant evidence', marks: '2' },
              { descriptor: 'Identifies or provides a general comment about the message of the source', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Explain” requires the why and/or how. The message should be stated as a claim and supported from specific details: the dome dwarfing every human figure in the model, the ceremonial square built for massed formations, the deliberate exceeding of history’s greatest buildings (the note’s comparison with St Peter’s), architecture as a statement of the regime’s permanence and the individual’s smallness. Any legitimate reading supported from the source is rewarded.',
      },
      {
        letter: 'b',
        text: 'With reference to their origin and purpose, discuss the reliability of Sources 2 and 3 as evidence of Speer’s role in the Nazi regime.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. first-hand testimony from Speer himself, but delivered as a defendant pleading before the court)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly biography based on the opened files)', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Discusses the reliability of both sources by providing detailed, accurate and relevant evidence and reasons related to origin and purpose — author, motive, bias, time, place, and audience', marks: '5' },
              { descriptor: 'Explains the reliability of both sources by providing mostly accurate and relevant evidence and some reasons', marks: '4' },
              { descriptor: 'Describes the reliability of both sources by providing some evidence', marks: '3' },
              { descriptor: 'Describes the reliability of one source by providing some evidence', marks: '2' },
              { descriptor: 'Provides a general comment about the reliability of one or both sources with limited evidence', marks: '1' },
            ],
            subtotal: 5,
          },
        ],
        notes:
          '“Discuss” requires strengths and limitations for each source, reasoned from origin and purpose as directed. Source 2 is invaluable and treacherous in the same breath: authentic evidence of how Speer presented himself — the technocracy thesis, responsibility shifted to machinery — delivered by a man on trial for his life, with every motive to intellectualise guilt into analysis; it is reliable evidence OF the self-presentation and unreliable evidence FOR it, and candidates who articulate that distinction are working at full depth. Source 3 rests on the opened archives (including Speer’s own files) and the scholarship that dismantled the memoir version; it is reliable on the record but is also an interpretation with a prosecutorial thrust of its own. The two sources are, in effect, the myth and its demolition — the pairing itself teaches why origin and purpose govern reliability. Candidates treat the sources in parallel; comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the role of Albert Speer in the Nazi state. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of Speer’s role in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent of the representation, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
              { descriptor: 'Evaluates the extent of the representation using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
              { descriptor: 'Discusses the representation using accurate and relevant evidence from all three sources and some own knowledge', marks: '5' },
              { descriptor: 'Explains the representation with reference to at least two sources and some accurate and relevant evidence', marks: '4' },
              { descriptor: 'Describes the representation with reference to at least two sources and some relevant evidence', marks: '3' },
              { descriptor: 'Outlines the content of at least one source with some relevant comment', marks: '2' },
              { descriptor: 'Identifies content from at least one source and/or provides a general comment with limited evidence', marks: '1' },
            ],
            subtotal: 7,
          },
        ],
        notes:
          'Theme first: the set represents Speer in three constructions — the architecture of power (Source 1), the courtroom self-portrait (Source 2) and the biographical demolition (Source 3). Strong responses evaluate with own knowledge across both careers: the rally stagecraft and the New Chancellery, the Germania clearances and their victims, the armaments ministry from 1942 — Central Planning, the production “miracle” under bombing, the forced and slave labour on which it ran — and the post-war construction: Nuremberg, the memoirs, the myth’s collapse under later scholarship. The interpretive question the set stages — technocrat or perpetrator, and whether the distinction holds — should be engaged directly, with a defended verdict. Omissions earn marks only when tied to evaluation: e.g. no voice of Speer’s workers appears — the millions who built his output exist in the set only inside the historian’s sentences — so the cost of the “miracle” is reported, not witnessed. Balance of source evidence and own knowledge is required at the top.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 54 — Heydrich and the machinery of terror  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-heydrich',
    title: 'The technician of terror: Reinhard Heydrich',
    themeKey: 'heydrich',
    themeSentence:
      'Heydrich fused intelligence, police and ideology into a single instrument and placed it at the regime’s disposal — the exemplary technician in whose career the police state and the genocide meet.',
    tags: ['p4', 'i-heydrich'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: An official portrait photograph of Reinhard Heydrich, chief of the Security Police and SD, in SS uniform, around 1940.',
        image: {
          src: 'sources/heydrich.jpg',
          alt: 'Official portrait of Reinhard Heydrich in SS uniform, photographed in studio light, around 1940',
          credit: 'Bundesarchiv, Bild 146-1969-054-16 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The studio portrait shows Heydrich in the grey service uniform of a senior SS general, seated, half turned toward the camera. The tunic carries the oak-leaf collar patches of his rank, a row of medal ribbons and service decorations, the Party badge, and the eagle-and-swastika on the sleeve. The lighting is composed; the expression is unsmiling and direct.',
        footnotes: [
          'SD (Sicherheitsdienst) — the SS security and intelligence service, built up by Heydrich from 1931.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the surviving record (protocol) of the conference held at a villa on the Wannsee, Berlin, 20 January 1942, chaired by Heydrich, at which state secretaries of the Reich ministries were briefed on the coordination of the “final solution of the Jewish question”. The single surviving copy of the protocol was found in 1947.',
        body: 'At the beginning of the meeting, the Chief of the Security Police and the SD, SS-Obergruppenführer Heydrich, announced his appointment by the Reich Marshal as Plenipotentiary for the Preparation of the Final Solution of the European Jewish Question, and pointed out that this conference had been called to obtain clarity on questions of principle. The Reich Marshal’s wish to have a draft submitted to him on the organisational, technical and material requirements necessitates the prior joint treatment of all central agencies directly concerned with these questions, with a view to keeping the relevant lines parallel. Responsibility for the handling of the final solution of the Jewish question, he stated, lies centrally, without regard to geographical boundaries, with the Reichsführer-SS and Chief of the German Police. In the course of the final solution, under appropriate direction, the Jews are to be brought to the east in a suitable manner for labour deployment. Separated by sex, the Jews capable of work will be led into these areas in large labour columns to build roads, whereby doubtless a large part will fall away through natural diminution. Any remnant that may survive will have to be treated accordingly. In the course of the practical implementation of the final solution, Europe is to be combed through from west to east.',
        footnotes: [
          'Reich Marshal — Hermann Göring, who signed the July 1941 authorisation to Heydrich.',
          '“Treated accordingly” — the protocol’s language is deliberately bureaucratic; the meeting concerned the murder of Europe’s Jews.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a biography of Heydrich written by an academic historian and published in 2011.',
        body: 'No leading National Socialist better embodies the marriage of ideology and administration. Heydrich came to the SS in 1931 a cashiered naval officer with no police experience, and built from nothing the instrument everything else would run through: the SD’s card indexes on enemies real and defined; then, from 1936, the Gestapo and criminal police under his single command; from 1939 the Reich Security Main Office, in which surveillance, arrest, camp and — in war — murder became stations on one administrative line. His signature was the fusion of fanaticism with proceduralism: the November 1938 pogrom’s arrests were his teletyped orders; the Einsatzgruppen that shot their way through Poland and the Soviet Union were staffed by his office and reported to it in tabulated columns; and at Wannsee he presided not over a decision — the killing was under way — but over its conversion into interdepartmental routine, secretaries and state secretaries around one table, minutes taken, portfolios respected. Historians debate whether such men are best understood as believers or careerists; Heydrich’s file suggests the question is wrongly posed. He was the type the system selected for: a man to whom the regime’s wildest premises, once issued, presented themselves as tasks — to be organised, delegated, and completed ahead of schedule. His assassination in 1942 changed nothing in the machinery, which was his monument: it ran on without him, exactly as he had built it to.',
        footnotes: [
          'Einsatzgruppen — the SS task forces that carried out mass shootings in occupied eastern Europe.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Identify the origin of Source 1 and explain its purpose.',
        marks: 4,
        key: [
          {
            rows: [
              { descriptor: 'Correctly identifies the origin of Source 1 (an official studio portrait of Heydrich as chief of the Security Police and SD, around 1940)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains the purpose of the source with detailed reasons specific to it (e.g. an official image composed to project the authority, rank and severity of the security police’s chief — the state’s power personified for official display and the press), supported by details from the source', marks: '3' },
              { descriptor: 'Explains the purpose with some accurate and relevant support from the source', marks: '2' },
              { descriptor: 'Identifies a purpose in general terms', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'Origin refers to provenance: candidates should identify at least two details of who/what the source shows, when and what type it is. For purpose, generic answers (“a portrait”) are insufficient for full marks: official portraiture served display and authority — the uniform, rank insignia and composed severity presenting the security chief as the regime wished him seen. Full marks require specific reference to details of the source.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying Heydrich’s role in the Holocaust.',
        marks: 6,
        key: [
          {
            heading: 'Source 2',
            rows: [
              { descriptor: 'Discusses the usefulness of Source 2 for the inquiry by providing detailed, accurate and relevant evidence and reasons related to origin, purpose and content', marks: '3' },
              { descriptor: 'Explains the usefulness of Source 2 with mostly accurate and relevant evidence', marks: '2' },
              { descriptor: 'Describes the usefulness of Source 2 with some evidence', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Source 3',
            rows: [
              { descriptor: 'Discusses the usefulness of Source 3 for the inquiry by providing detailed, accurate and relevant evidence and reasons related to origin, purpose and content', marks: '3' },
              { descriptor: 'Explains the usefulness of Source 3 with mostly accurate and relevant evidence', marks: '2' },
              { descriptor: 'Describes the usefulness of Source 3 with some evidence', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'Usefulness must be judged relative to the stated inquiry. Source 2 is among the most important documents of the twentieth century for precisely this question: it fixes Heydrich’s formal mandate, the centralisation of responsibility under the SS, the continental scope and the murderous meaning beneath the bureaucratic language (“natural diminution”, “treated accordingly”); its limits are equally instructive — a sanitised record written for files, drafted under instructions to use camouflage language, recording a briefing rather than the decision, which predated it. Source 3 supplies the career arc that makes Wannsee legible — SD, RSHA, the pogrom orders, the Einsatzgruppen reporting lines — and an interpretation of the perpetrator type; as biography it argues a thesis candidates should weigh. Together: the document and its context. Candidates treat the sources in parallel; comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the part played by Reinhard Heydrich in the Nazi apparatus of terror and extermination. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of Heydrich’s part in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent of the representation, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
              { descriptor: 'Evaluates the extent of the representation using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
              { descriptor: 'Discusses the representation using accurate and relevant evidence from all three sources and some own knowledge', marks: '5' },
              { descriptor: 'Explains the representation with reference to at least two sources and some accurate and relevant evidence', marks: '4' },
              { descriptor: 'Describes the representation with reference to at least two sources and some relevant evidence', marks: '3' },
              { descriptor: 'Outlines the content of at least one source with some relevant comment', marks: '2' },
              { descriptor: 'Identifies content from at least one source and/or provides a general comment with limited evidence', marks: '1' },
            ],
            subtotal: 7,
          },
        ],
        notes:
          'Theme first: the set represents Heydrich as image (Source 1), mandate (Source 2) and system (Source 3) — the technician in whom terror became administration. Strong responses evaluate with own knowledge: the SD and card-index state, the RSHA’s creation, the 1938 pogrom teletypes, the Einsatzgruppen and their reports, Göring’s July 1941 authorisation, the relationship to Himmler and Hitler in the chain of decision, the Protectorate and the assassination with its aftermath (Lidice; the Operation Reinhard camps named for him) — and the machinery’s continuation without him, which the set itself notes and which disciplines any “great man” reading. The debate the biography raises — believer, careerist, or the falseness of the distinction — should be engaged with a defended position. Omissions count only when tied to evaluation: the victims are present only inside the protocol’s euphemisms, an absence that is itself historical evidence of how the machinery wrote. Balance of source evidence and own knowledge is required at the top. This is demanding material; responses must remain precise and sober.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 55 — Krupp and German industry  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-krupp',
    title: 'The forge and the regime: Krupp and German industry',
    themeKey: 'industry',
    themeSentence:
      'German heavy industry neither created the Nazi regime nor resisted it: it bargained, profited and complied — a partnership sealed by rearmament, paid for by the destroyed unions, and ending in slave labour and the dock at Nuremberg.',
    tags: ['p4', 'i-krupp'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of the defendants’ dock at the Krupp trial, Nuremberg, 1947–48. Alfried Krupp, head of the Krupp works from 1943, and eleven of the firm’s directors were tried by an American military tribunal for the use of slave labour and the plunder of occupied countries.',
        image: {
          src: 'sources/krupp-trial.jpg',
          alt: 'Alfried Krupp and fellow directors sit in the Nuremberg dock in 1948, guarded by an American military policeman, as defence lawyers confer',
          credit: 'Bundesarchiv, Bild 183-R93432 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a row of middle-aged men in civilian suits seated shoulder to shoulder in a panelled courtroom dock, some reading documents, one leaning forward with his hand to his mouth. A white-helmeted American military policeman stands behind them; black-robed defence lawyers confer at the right, and a wall chart of the firm’s organisation is displayed behind the well of the court.',
        note: 'Note: the tribunal convicted Alfried Krupp and most co-defendants; Krupp was sentenced to twelve years and the forfeiture of his property, but was amnestied and restored to his industrial holdings in 1951 as the Cold War changed Allied priorities.',
        footnotes: [
          'Slave labour — the firm employed tens of thousands of forced labourers, prisoners of war and concentration-camp inmates during the war.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the affidavit of Friedrich von Bülow, a Krupp director, describing the meeting of leading industrialists with Hitler and Göring in Berlin on 20 February 1933, and adapted testimony concerning the donations that followed. The meeting took place three weeks after Hitler became Chancellor and two weeks before the March election.',
        body: 'The invitation came through the office of the President of the Reichstag, Göring, and some twenty-five gentlemen of industry attended, among them Herr Krupp von Bohlen as chairman of the Reich Association of German Industry. Hitler spoke for more than an hour. Private enterprise, he said, cannot be maintained in an age of democracy; it is conceivable only if the people possess a sound idea of authority and personality. All the worldly goods we possess we owe to the struggle of the chosen. We must not forget that all the benefits of culture must be introduced with an iron fist. He closed: we stand now before the last election. Regardless of the outcome there will be no retreat; one way or another, if the election does not decide, the decision must be brought about by other means. Göring then spoke of the necessity of financial sacrifices, which surely would be easier for industry to bear if it realised that the election of 5 March would certainly be the last for ten years, probably for a hundred. Herr Krupp von Bohlen thanked the Chancellor in the name of those present for having given so clear a picture of his ideas. In the days following, a fund of three million marks was subscribed by the firms represented for the election campaign of the national front.',
        footnotes: [
          'Krupp von Bohlen — Gustav Krupp von Bohlen und Halbach, head of the firm until 1943, father of Alfried.',
          'Affidavit — sworn written testimony, here for the Nuremberg proceedings.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of German business and National Socialism written by an academic historian and published in 2008.',
        body: 'The legend that big business bought Hitler power does not survive the account books: before 1933 the money of heavy industry flowed overwhelmingly to Hitler’s conservative rivals, and the Nazi rise was financed, to an extent contemporaries found scandalous, by its own members and small donors. What the account books show instead is something less conspiratorial and more instructive: a rapid, profitable and almost frictionless accommodation after power was won. The February 1933 meeting set the pattern — three million marks subscribed not to bring the regime in but to insure against what it might do now that it was in — and the returns exceeded any premium: the unions gone by May, wages frozen by state trustees, rearmament orders flooding the books, profits and dividends recovering years ahead of wages. The costs of the bargain emerged by instalments. Autarky and the Four-Year Plan subordinated investment to the regime’s timetable; the state built its own steel at Linz over industry’s objections; and the war revealed the partnership’s terminus — plants allocated forced and slave labour by the tens of thousands, factory compounds beside the camps, and directors, as at the Krupp trial, defending themselves with the plea that they had merely accepted what the state supplied. The tribunal’s judgment drew the line the account books blur: profit within a criminal system, freely accepted and energetically pursued, is not neutrality. Industry had not hired the regime, nor been conscripted by it. It had done business — and the business, by the end, included the unpaid labour of the starving.',
        footnotes: [
          'Trustees of Labour — state officials who fixed wages after the unions’ destruction.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Germany’s defeat and occupation; the Nuremberg successor trials of 1946–49 trying industrialists, doctors and officials; the specific charges against Krupp directors — slave labour and plunder; the wall chart and military guard of an American tribunal)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph in the post-war reckoning: the American military tribunal at Nuremberg, 1947–48, trying the firm’s leadership for the use of slave labour and plunder. Details of the source (the civilian defendants in the dock, the military policeman, the organisational chart as prosecution exhibit) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the relationship between German industry and the Nazi regime.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the usefulness of Source 2 for the inquiry', marks: '1' },
              { descriptor: 'Identifies the usefulness of Source 3 for the inquiry', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Discusses the usefulness of both sources for the stated inquiry, addressing strengths and limitations with detailed, accurate and relevant evidence related to origin, purpose and content', marks: '5' },
              { descriptor: 'Explains the usefulness of both sources with mostly accurate and relevant evidence', marks: '4' },
              { descriptor: 'Describes the usefulness of both sources with some evidence', marks: '3' },
              { descriptor: 'Describes the usefulness of one source with some evidence', marks: '2' },
              { descriptor: 'Provides a general comment about one or both sources with limited evidence', marks: '1' },
            ],
            subtotal: 5,
          },
        ],
        notes:
          'Usefulness must be judged relative to the stated inquiry. Source 2 is insider testimony to the founding transaction: what Hitler promised industry (authority, the end of elections), what Göring asked, what Krupp answered and what was paid — direct evidence of the accommodation’s terms; its limits: an affidavit prepared for legal proceedings by a man with an interest in how the meeting was remembered, recalling events a decade later. Source 3 supplies the frame — the account books against the “bought Hitler” legend, the bargain’s returns and instalment costs, the wartime terminus — with scholarly breadth; itself an interpretation taking sides in a real historiographical debate (Turner against the paymaster myth; the tribunal’s line on complicity) that candidates may recognise. Strong answers note that Source 2 is exactly the class of evidence over which Source 3’s debate is fought. Comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the part played by German industry in the Nazi state. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of industry’s part in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent of the representation, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
              { descriptor: 'Evaluates the extent of the representation using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
              { descriptor: 'Discusses the representation using accurate and relevant evidence from all three sources and some own knowledge', marks: '5' },
              { descriptor: 'Explains the representation with reference to at least two sources and some accurate and relevant evidence', marks: '4' },
              { descriptor: 'Describes the representation with reference to at least two sources and some relevant evidence', marks: '3' },
              { descriptor: 'Outlines the content of at least one source with some relevant comment', marks: '2' },
              { descriptor: 'Identifies content from at least one source and/or provides a general comment with limited evidence', marks: '1' },
            ],
            subtotal: 7,
          },
        ],
        notes:
          'Theme first: the set represents industry’s part as bargain (Source 2), business within a criminal system (Source 3) and reckoning (Source 1). Strong responses test the extent with own knowledge: the pre-1933 funding record and the February 1933 meeting, the returns (unions destroyed, rearmament boom) and the subordination (Four-Year Plan, the Reichswerke built over industry’s objections), Aryanisation’s acquisitions, and the wartime slave-labour economy with the Krupp firm as the emblematic case — through to the amnesties of the early Cold War, which the note records and which qualify the “reckoning” the trial photograph seems to show. The historiographical debate (partner or paymaster; complicity or conscription) should be engaged with a defended verdict. Omissions earn marks only when tied to evaluation — e.g. no worker, forced or free, appears in the set; the labour on which the story turns is present only as a charge and a category. Balance of source evidence and own knowledge is required at the top.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 56 — Riefenstahl: filming the Reich  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-riefenstahl',
    title: 'Filming the Reich: Leni Riefenstahl',
    themeKey: 'film',
    themeSentence:
      'Riefenstahl’s cameras turned the regime’s staged rituals into works of art that outlived them — propaganda of genius whose maker spent a post-war lifetime denying it had been propaganda at all.',
    tags: ['p4', 'i-riefenstahl'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the film director Leni Riefenstahl with her camera crew at the Nazi Party rally grounds, Nuremberg, mid-1930s, during the filming of the party congress. An SS officer stands with the group.',
        image: {
          src: 'sources/riefenstahl-nuremberg.jpg',
          alt: 'Leni Riefenstahl in a white suit directs beside her camera crew at the Nuremberg rally grounds, an SS officer standing with the group',
          credit: 'Bundesarchiv, Bild 152-42-31 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows Riefenstahl, in a pale suit, standing in conversation at the edge of the rally ground; facing her stands a black-uniformed SS officer, hands clasped behind his back. Beside them, a cameraman crouches at the eyepiece of a large film camera on a tripod while two assistants stand by, one shading his eyes toward the field; an SA man waits in the background.',
        footnotes: [
          'Party congress — the annual September rally at Nuremberg, filmed by Riefenstahl in 1933 and 1934.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an interview given by Leni Riefenstahl to a French newspaper in 1965, and consistent with her accounts until her death in 2003.',
        body: 'People say I made propaganda. But what is propaganda? I made documents — Triumph of the Will is a documentary film of a party congress that actually took place; not one scene is staged by me, not one word is spoken that was not spoken there. If you see art in it, that is because I sought the form in the material, as every artist does: the movement, the rhythm, the composition — I would have filmed a congress of fruit-growers the same way, had it possessed such images. I was not political; I never joined the party; I knew nothing of politics and wanted to know nothing — I was an artist wholly consumed by my work, and in 1934 the whole world came to Nuremberg: diplomats, journalists, no one spoke then of crimes. The film won the gold medal in Paris in 1937 — from a French jury! Was all Paris then National Socialist? One cannot judge the year 1934 with the knowledge of 1945. My tragedy is to have made my best films for a man the world afterwards learned to be a monster. But art is not guilty of its commissioners. If a cathedral is beautiful, do we ask after the morals of the bishop who paid for it?',
        footnotes: [
          'Triumph of the Will — Riefenstahl’s film of the 1934 Nuremberg rally.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of cinema in the Third Reich written by an academic film historian and published in 2007.',
        body: 'Riefenstahl’s defence rested on a distinction between document and propaganda that her own production files dissolve. The 1934 rally was not an event she happened to film; it was, in significant part, an event arranged to be filmed — Speer confirms that tribunes, approaches and even some ceremonies were designed around her camera positions, of which she commanded dozens, with rails, lifts and aircraft, resources no “mere documentarist” in Germany had ever been given, and which only the regime could give. Her editing did the rest: the opening descent through the clouds that presents the leader as a visitation; the rhythmic alternation of the one and the mass; the abolition, in two hours, of everything unresolved in the Germany of 1934 — weeks after the June murders, the film shows a movement without conflict, a leader without politics, a people without dissenters. That is not a record of the congress; it is the congress perfected, which is precisely what propaganda of genius is. The genius was real: the film’s techniques entered the world’s visual grammar, and its images of the regime remain, to this day, the ones the regime would have chosen. Therein lies the historian’s double verdict. As witness to fact, Riefenstahl’s films are nearly worthless; as evidence of how the regime wished to be seen — and of how modern power learned to compose itself for the camera — they are irreplaceable. The artist claimed her art was innocent of politics. The films answer: their art was the politics.',
        footnotes: [
          'Production files — the surviving records of the film’s commissioning, resources and staging.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Outline the context of Source 1 and explain its message. Include the relevant events, people, and ideas represented in and/or surrounding the source.',
        marks: 4,
        key: [
          {
            rows: [
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the annual Nuremberg rallies of the mid-1930s; Riefenstahl commissioned by Hitler to film the congress; the scale of resources and official cooperation her productions received)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Explains the message of the source (e.g. that the filming of the rally was itself an official undertaking — the artist working arm in arm with the regime’s formations, her camera part of the event’s machinery) by providing accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Identifies or provides a general comment about the message of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          'The context element requires placement at the Nuremberg rallies of the mid-1930s and Riefenstahl’s official commissions. The message element should be stated as a claim and supported from the source: the director in conference with an SS officer, the professional crew and heavy equipment on the rally ground itself — the image records the partnership of film-maker and regime that the (b) and (c) sources dispute. Any legitimate, evidenced reading is rewarded.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding whether Riefenstahl’s films were propaganda. Account for the differences between them.',
        marks: 6,
        key: [
          {
            heading: 'Comparison',
            rows: [
              { descriptor: 'Compares the perspectives of both sources, identifying similarities and differences supported by accurate and relevant evidence from both sources', marks: '3' },
              { descriptor: 'Compares the perspectives with some evidence from both sources', marks: '2' },
              { descriptor: 'Identifies a similarity or difference with limited evidence', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Accounting for the differences',
            rows: [
              { descriptor: 'Accounts for the differences by providing detailed reasons related to the origin of each source — author, motive, bias, time, place, and purpose', marks: '3' },
              { descriptor: 'Accounts for the differences by providing some reasons related to origin', marks: '2' },
              { descriptor: 'Provides a simple or general reason for the differences', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'A genuine similarity: both sources take the films’ artistry as beyond dispute — the disagreement is over what the artistry served. The differences: Source 2 argues document, not propaganda — nothing staged, art politically innocent, the era not to be judged by later knowledge; Source 3 dissolves the distinction with the production record — the event part-designed for the camera, the editing perfecting the regime’s self-image, the art itself the politics. Accounting from origin is the heart of the question: the film-maker herself, decades later, defending her life’s reputation against the charge of complicity — a witness with the largest possible stake; against an academic film historian in 2007 with access to production files and Speer’s testimony, and no personal stake beyond an argued thesis. Both similarities and differences are required for full comparison marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of Leni Riefenstahl’s films to the image of the Nazi regime, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the films’ significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the films’ significance to the regime’s image, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
              { descriptor: 'Assesses the significance using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
              { descriptor: 'Discusses the significance using accurate and relevant evidence from all three sources and some own knowledge', marks: '5' },
              { descriptor: 'Explains the significance with reference to at least two sources and some accurate and relevant evidence', marks: '4' },
              { descriptor: 'Describes the representation with reference to at least two sources and some relevant evidence', marks: '3' },
              { descriptor: 'Outlines the content of at least one source with some relevant comment', marks: '2' },
              { descriptor: 'Identifies content from at least one source and/or provides a general comment with limited evidence', marks: '1' },
            ],
            subtotal: 7,
          },
        ],
        notes:
          'Theme first: the set represents the films as official undertaking (Source 1), defended art (Source 2) and propaganda of genius that fixed the regime’s image permanently (Source 3). Strong responses assess significance with own knowledge: Triumph of the Will’s domestic circulation and foreign prizes, Olympia and the 1936 performance of respectability, the techniques’ afterlife in the world’s visual language, the films’ role within the larger propaganda system (Goebbels’ ministry, newsreels, the rally machinery they filmed) — and the limits: films could perfect the image only of what the regime staged, and their foreign success traded on precisely the “unpolitical art” claim Source 2 still makes. The post-war dimension belongs in a full answer: the films as the regime’s enduring self-portrait, and Riefenstahl’s long denial as a case study in how perpetrator-adjacent memory is constructed. Omissions earn marks only when tied to evaluation — e.g. nothing in the set shows German audiences’ actual reception of the films, so their effect at home is inferred rather than evidenced. Balance of source evidence and own knowledge is required at the top.',
      },
    ],
  },
];
