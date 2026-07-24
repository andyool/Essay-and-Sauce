import type { SourceSet } from './types';

// Source sets 25–28: Germany at the end of World War I (syllabus point 1).
// Constructed texts follow the Source Analysis Question Construction Manual;
// photographs and documents are real, from Wikimedia Commons.

export const SOURCE_SETS_7: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 25 — Mutiny into revolution: Kiel, November 1918  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-kiel-revolution',
    title: 'Mutiny into revolution: Kiel, November 1918',
    themeKey: 'revolution',
    themeSentence:
      'A sailors’ refusal to die in a lost war became, within a week, a national revolution that dissolved the German Empire’s authority from below.',
    tags: ['p1'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of a mass meeting of sailors, soldiers and workers in Kiel during the naval mutiny, early November 1918.',
        image: {
          src: 'sources/kiel-mutiny-1918.jpg',
          alt: 'A dense crowd of sailors and workers at an open-air meeting during the Kiel mutiny, November 1918, with a speaker and flags on a platform',
          credit: 'Stadtarchiv Kiel, 68.288 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a dense crowd of many hundreds of men — sailors’ caps, workers’ flat caps and civilian hats mixed together — filling an open square before a large barracks building. At the centre distance a speaker stands raised above the crowd beside two dark flags, his arm outstretched; a placard on a pole stands at the right edge of the meeting. More ranks of men are drawn up in the background across the square.',
        footnotes: [
          'Mutiny — a refusal by soldiers or sailors to obey orders.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extracts from the proclamation “To the German People” issued by the Council of People’s Deputies — the new revolutionary government led by Friedrich Ebert of the Social Democratic Party — Berlin, 12 November 1918, the day after the Armistice.',
        body: 'The government which the revolution has brought forth, whose political task is purely socialist, sets itself the goal of realising the socialist programme. It proclaims the following with the force of law: The state of siege is lifted. The right of association and assembly is subject to no restriction, even for public employees and state workers. Censorship does not exist. The censorship of the theatre is abolished. Expression of opinion in word and writing is free. Freedom of religious practice is guaranteed. An amnesty is granted for all political offences. The eight-hour maximum working day will come into force on 1 January 1919. All elections to public bodies are henceforth to be conducted according to the equal, secret, direct and universal suffrage, for all male and female persons of at least twenty years of age. This suffrage shall also apply to the constituent assembly, concerning which more detailed provisions will follow.',
        footnotes: [
          'State of siege — the wartime emergency regime under which the army controlled civil life.',
          'Constituent assembly — a parliament elected to write a new constitution.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the German Revolution written by an academic historian and published in 2018.',
        body: 'The revolution of November 1918 began not as an attempt to seize the state but as a refusal to die for it. The sailors at Wilhelmshaven and Kiel who disobeyed the order for a final, honour-saving sortie against the British fleet were not Bolsheviks; most wanted peace, bread, an end to the officers’ petty tyrannies, and to go home. What turned a mutiny into a revolution was the discovery, repeated in city after city in the first week of November, that no one would fight for the old order: garrisons went over, officials stood aside, and the crowns of Germany — the Kaiser’s among twenty-two — fell in a fortnight without a battle. The councils of workers and soldiers that sprang up everywhere alarmed respectable Germany with their Russian name, but their majorities voted consistently for order, elections and the old trade-union leaders, not for a German October. Therein lay the revolution’s paradox: profound enough to end an empire in days, it was led by men anxious above all that it should go no further — and the price of that anxiety would be paid by the republic they founded.',
        footnotes: [
          'Sortie — a naval attack; the planned final fleet action of late October 1918.',
          '“German October” — a communist revolution on the Russian model.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the planned final fleet action against Britain in late October 1918; the sailors’ refusal and the spread of the mutiny at Kiel from 3 November; the war visibly lost and the Armistice days away; the formation of sailors’ and workers’ councils)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Candidates should place the photograph in the first days of November 1918: the naval command’s planned last sortie, the refusal of the crews, the spread of the mutiny ashore at Kiel and the election of sailors’ and workers’ councils, against the background of a war known to be lost. Details of the source (the mixture of sailors’ caps and workers’ caps, the mass open-air meeting, the speaker and flags before the barracks) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the aims of the German Revolution of 1918.',
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
          'Usefulness must be judged relative to the stated inquiry — the revolution’s aims. Source 2 is the new government’s own founding programme: incontestable evidence of what the revolutionary leadership promised (civil liberties, the eight-hour day, universal suffrage including women, a constituent assembly) and, just as tellingly, of its priorities — reform and elections rather than a socialist seizure of property; its limits are that it speaks for the moderate leadership only, in a public proclamation designed to reassure as well as to promise, and says nothing of the sailors and councils who began the revolution. Source 3 supplies breadth and the view from below — the mutineers’ motives, the councils’ moderation, the paradox of a self-limiting revolution — with scholarly hindsight, though it is an interpretation advancing an argument rather than testimony. Together the sources cover leadership and movement; candidates who see they correct each other’s blind spots should be rewarded. Candidates do not need to compare the sources to earn full marks; each salient point is rewarded.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the character of the German Revolution of 1918–1919. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the revolution’s character in all three sources', marks: '3' },
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
          'Theme first: the set represents the revolution as a movement from below that began as war-weariness (Source 1), was answered from above with a programme of liberties and elections rather than social overturn (Source 2), and remained deliberately self-limiting (Source 3). Strong responses test this picture with own knowledge: the Kiel mutiny’s spread, the abdication of the Kaiser and proclamation of the Republic on 9 November, the Ebert–Groener pact with the army, the Stinnes–Legien agreement with industry, and the bloody exceptions to the orderly picture — the January 1919 Spartacist rising, the murders of Liebknecht and Luxemburg, the Munich Räterepublik and its suppression. Omissions earn marks only when tied to an evaluation of what the set shows — e.g. the set contains no radical voice, so the revolution’s violent contest over how far it should go is invisible, flattering the orderly reading; equally, nothing shows the old elites surviving in army, judiciary and bureaucracy, which the moderate course preserved. For higher marks: balance of source evidence and own knowledge, and an explicit verdict on extent. A source-by-source walkthrough caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 26 — The fall of the monarchy: Berlin, November 1918  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-november-berlin',
    title: 'The fall of the monarchy: Berlin, 9 November 1918',
    themeKey: 'monarchy-fall',
    themeSentence:
      'On 9 November 1918 the German monarchy collapsed in a single day, abandoned by its army and its subjects alike, and two republics were proclaimed before nightfall.',
    tags: ['p1'],
    era: 'early',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of revolutionary soldiers and sailors passing through the Brandenburg Gate, Berlin, during the November Revolution, 1918.',
        image: {
          src: 'sources/revolution-1918.jpg',
          alt: 'Armed revolutionary soldiers with rifles and a red flag ride a motor lorry through the Brandenburg Gate, Berlin, November 1918',
          credit: 'Bundesarchiv, Bild 183-B0527-0001-810 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a motor lorry crowded with armed men — soldiers in field caps and civilians mixed together, rifles in hand, with a machine gun mounted on the cab roof — driving through the central arch of the Brandenburg Gate. A man standing beside the lorry holds a large flag on a pole. Small groups of onlookers in civilian dress watch from the footpath beneath the columns; no police or loyal troops are anywhere in the frame.',
        footnotes: [
          'Brandenburg Gate — the ceremonial gate at the centre of Berlin, previously used for imperial parades.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a letter written by a Berlin bank clerk to his sister in Munich, 10 November 1918. The letter remained in family hands and was published in a collection of documents after 1945.',
        body: 'You will have the news before this letter: the Kaiser is gone, and Berlin scarcely looked up from its bread queues. I walked to the office as usual yesterday and by midday there was no Empire. The great strike columns came in from the north — Schwartzkopff men, the AEG works, women among them — and the soldiers everywhere tore off their cockades or had them taken, and nobody, Lotte, nobody lifted a hand for the old order. At two I stood in the crowd below the Reichstag and heard Scheidemann speak from the window: the Hohenzollerns have abdicated, he said, long live the German Republic! — and the man beside me, a sergeant with four years in his face, said only: “So that is what it was all for.” They say Liebknecht proclaimed a different republic, a socialist one, from the palace two hours later. Which republic we are to have, no one can tell me. In the evening there was shooting near the stables — a few dead, they say, on the day the war of millions ended. What I cannot get out of my mind is how quietly the thing fell. Forty years they told us the monarchy was Germany’s granite. It went like wet paper.',
        footnotes: [
          'Cockade — the badge in imperial colours worn on military caps.',
          'Scheidemann / Liebknecht — Philipp Scheidemann of the Social Democrats; Karl Liebknecht of the revolutionary Spartacus League.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the end of the German Empire written by an academic historian and published in 2009.',
        body: 'Nothing in the German catastrophe of 1918 is more instructive than the manner of the monarchy’s going. It was not overthrown; it was vacated. By the first week of November the institution had already died everywhere that mattered — in the army, whose soldiers would no longer salute for it; in the officer corps, whose chiefs told the Kaiser to his face that the troops would not follow him against the revolution; in the ministries, which were negotiating with the Social Democrats for a successor government; and in the streets, where four years of hunger and casualty lists had used up the last of the dynastic capital accumulated over centuries. Wilhelm’s abdication was announced in Berlin before he had agreed to it, by a Chancellor desperate to stay ahead of the crowds, and the Republic was proclaimed twice in one afternoon by rival socialists improvising against each other. The old order’s defenders are conspicuous in every account by their absence: of the twenty-two German thrones, not one was defended by force. A regime that had demanded and received four years of sacrifice proved, at the end, to command not a single company of loyal infantry in its own capital.',
        footnotes: [
          'Dynastic — belonging to a ruling royal family.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the November Revolution reaching Berlin on 9 November 1918; the general strike and mutinying garrison; the abdication of the Kaiser and proclamation of the Republic; the Armistice days away)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Explains the message of the source (e.g. that the revolution commands the streets and symbols of the capital — armed power has passed to the revolutionaries, and no one defends the old order) by providing accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Identifies or provides a general comment about the message of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          'The context element requires placement in Berlin in November 1918 — revolution, abdication, the Republic proclaimed. The message element should be stated as a claim and supported from the source’s details: armed soldiers and civilians together on the lorry, the flag and machine gun, their passage through the monarchy’s own ceremonial gate, and the absence of any opposing authority. Any legitimate, evidenced reading is rewarded.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the collapse of the German monarchy. Account for the differences between them.',
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
          'A strong similarity: both sources are struck by the same fact — the monarchy fell without defenders (“nobody lifted a hand”; “not one was defended by force”). The central difference is register and explanation: Source 2 records the day as bewildering experience — astonishment, uncertainty about which republic will follow, unease at the shooting — without claiming to explain it; Source 3 converts the same fact into an analysis, arguing the monarchy had already died in army, ministries and streets before 9 November. Accounting should reason from origin: a private letter written within a day, by a middle-class observer to his family, with no audience to persuade and no hindsight; an academic historian in 2009 with the full record and an analytical purpose. Both similarities and differences are required for full comparison marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of the events of 9 November 1918 for the republic that followed, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the day’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the significance of 9 November 1918 for the new republic, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents 9 November as total yet strangely weightless — armed revolution in command of the streets (Source 1), an empire gone “like wet paper” amid confusion over what would replace it (Source 2), an old order that had already hollowed out (Source 3). Strong responses assess what this meant for the Republic with own knowledge: a democracy born of defeat, proclaimed twice by rival socialists and contested from its first hour; the burden of signing the Armistice two days later, from which the “November criminals” legend grew; the survival of the old elites the quiet collapse left in place; and the date’s later history — Hitler’s putsch on 9 November 1923 and the pogrom of 9 November 1938 deliberately staged against the Republic’s founding day. Omissions earn marks only when tied to evaluation — e.g. no source shows the old order’s view or the far left’s aims, so the day’s contested meaning rests on one bystander. For higher marks: balance of source evidence and own knowledge and a defended judgement of significance.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 27 — Hunger: the German home front  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-home-front',
    title: 'Hunger: the German home front, 1916–1919',
    themeKey: 'home-front',
    themeSentence:
      'The Allied blockade and the war economy reduced German civilian life to queues, substitutes and rations, and the hunger of the war years corroded loyalty to the state that could not feed its people.',
    tags: ['p1'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'text',
        attribution:
          'Source 1: Extract from a letter written by a Hamburg woman to her husband, a soldier on the Western Front, February 1917 — the “turnip winter”. Letters between the front and home were subject to military censorship.',
        body: 'Dear Wilhelm, You ask if we manage, and I will tell you honestly, though I tear up half of what I write. We manage as everyone manages: by standing. I stood four hours on Tuesday for potatoes and came home with turnips, and Thursday three hours for fat and came home with nothing at all. The bread is heavy and grey and tastes of sawdust — they say there is more in it than sawdust would explain — and little Emmi cries at night from cold as much as hunger, for there has been no coal ration these two weeks. Frau Bauer’s boy at the works canteen says the men get meat twice a week; the ration cards say we may have two pounds of turnips and call it vegetables. Your mother has taken to bed; the doctor says it is nothing but weakness, and that half of Hamburg has the same sickness, and its name is the blockade. Do not worry for us, we shall hold out as you hold out. But I will say this once and burn it if I must: they promised us it would be over by the second Christmas, and it is the fourth, and the women in the queue no longer curse the English. They curse nearer home. Your loving Grete.',
        footnotes: [
          'Turnip winter — the winter of 1916–17, when the potato crop failed and swede turnips became the staple food.',
          'Blockade — the Allied naval blockade, which cut Germany off from imported food and fertiliser.',
        ],
      },
      {
        n: 2,
        kind: 'visual',
        attribution:
          'Source 2: A ration card (“Kohlrüben-Karte” — turnip card) issued by the city of Erfurt, February–March 1917, entitling the holder to a weekly ration of swede turnips.',
        image: {
          src: 'sources/ration-card-1917.jpg',
          alt: 'A 1917 turnip ration card issued by the city of Erfurt, with eight weekly coupons for two pounds of turnips each',
          credit: 'Ration card, Stadt Erfurt, 1917. Public domain, via Wikimedia Commons',
        },
        body: 'The printed card, headed “Kohlrüben-Karte — Stadt Erfurt” (Turnip Card — City of Erfurt), is divided into eight numbered coupons, one for each week from early February to the end of March 1917. Every coupon carries the same entitlement: “2 Pfund Kohlrüben” (two pounds of swede turnips), with the week number and its dates printed beneath — “25. Woche, 4.–10. Februar 1917”, “26. Woche, 11.–17. Februar 1917”, and so on to the 32nd week of rationing.',
        note: 'Note: the coupons are numbered by week of rationing, not of the year — by February 1917 Erfurt was in its 25th consecutive week of turnip rationing. Bread, meat, fat, milk, coal and clothing were rationed by similar cards.',
        footnotes: [
          'Pfund — a German pound, half a kilogram.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the German home front in the First World War written by an academic historian and published in 2014.',
        body: 'The German home front did not starve dramatically; it starved bureaucratically. The blockade cut off a third of the calories and most of the fertiliser on which pre-war Germany had fed itself, and the state answered with paper: ration cards for bread from 1915, then for fat, meat, milk, potatoes and finally for the turnips that replaced them, administered by hundreds of local offices that could apportion scarcity but not abolish it. The official ration sank in the worst months toward a thousand calories a day — a figure the black market, the farm relative and the works canteen made survivable for some and mocked for others, so that hunger became not only a misery but an injustice, differently distributed by class, connection and city. The demographic ledger of the blockade — hundreds of thousands of excess civilian deaths from malnutrition and the diseases that fed on it, capped by the influenza of 1918 — understates its political work. Four years of queues taught German women and workers that the state’s first duty, the feeding of its people, had failed; and the legitimacy that drained away in the bread lines of 1917 was not available to the monarchy in November 1918, nor ever fully to the republic that inherited the ration cards, the blockade — which continued until the peace was signed — and the blame.',
        footnotes: [
          'Excess deaths — deaths above the number expected in peacetime.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the turnip winter of 1916–17 after the failed potato crop; the Allied blockade and food rationing; queues, substitute foods and coal shortage; wartime censorship of letters; war-weariness on the home front in the fourth year of war)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the letter in the turnip winter of 1916–17: the blockade, the failed potato harvest, rationing and queues, ersatz bread, the coal shortage, and the censorship the writer herself mentions. Details of the source (the four-hour queue, the turnips in place of potatoes, the grey bread, the sick mother-in-law) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the effects of the Allied blockade on German civilians.',
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
          'Usefulness must be judged relative to the stated inquiry. Source 2 is an official artefact of the rationing system itself: incontestable evidence of what the state actually allotted (two pounds of turnips a week, by the 25th consecutive week of rationing) and of the bureaucratic machinery of scarcity; its limits are that a card records entitlement, not delivery — it cannot show empty shops, queues, the black market, or how the ration was experienced. Source 3 supplies exactly that frame — calories, excess deaths, the unequal distribution of hunger and its political consequences — with scholarly breadth, though as interpretation it advances an argument (hunger as the solvent of legitimacy) that invites testing. Strong answers note the complementarity: the document and its meaning. A modest official document can be highly useful; recognising this should be rewarded. Candidates do not need to compare the sources to earn full marks.',
      },
      {
        letter: 'c',
        text: 'Assess the impact of the First World War on the German home front as shown in Sources 1, 2 and 3. To what extent do the sources capture the full consequences of the war for German civilians?',
        marks: 10,
        key: [
          {
            heading: 'Identification of impacts',
            rows: [
              { descriptor: 'Identifies impacts of the war on civilians as represented in all three sources', marks: '3' },
              { descriptor: 'Identifies impacts in two of the sources', marks: '2' },
              { descriptor: 'Identifies impacts in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the impact of the war on the home front and the extent to which the sources capture its full consequences — material, social and political — using detailed, accurate and relevant evidence from all three sources and the broader period, with omissions tied to an evaluation of what the set shows', marks: '7' },
              { descriptor: 'Assesses the impact using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
              { descriptor: 'Discusses the impact using accurate and relevant evidence from all three sources and some own knowledge', marks: '5' },
              { descriptor: 'Explains the impact with reference to at least two sources and some accurate and relevant evidence', marks: '4' },
              { descriptor: 'Describes impacts with reference to at least two sources and some relevant evidence', marks: '3' },
              { descriptor: 'Outlines the content of at least one source with some relevant comment', marks: '2' },
              { descriptor: 'Identifies content from at least one source and/or provides a general comment with limited evidence', marks: '1' },
            ],
            subtotal: 7,
          },
        ],
        notes:
          'The second sentence does the discriminating work: candidates must name consequences the set does NOT show and tie each to an evaluation of the set’s insight. The sources show material deprivation and its administration (Sources 1 and 2) and the political corrosion hunger worked (Sources 1 and 3). Own knowledge that completes the picture might include: the two million military dead and the grief and widowhood behind the home front; women’s mass entry into war industry; the influenza pandemic of 1918; the black market and profiteering that sharpened class resentment; and the continuation of the blockade until mid-1919, feeding the bitterness that met the Versailles terms. Merely listing omissions earns nothing — e.g. “the set shows no farmer or profiteer, so the unequal distribution of hunger that Source 3 asserts is never illustrated” ties the omission to an evaluation. Impacts may be organised as material, social and political. Balance of source evidence and own knowledge is required at the top; a source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 28 — Soldiers without a war: the Freikorps  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-freikorps',
    title: 'Soldiers without a war: the Freikorps, 1918–1920',
    themeKey: 'freikorps',
    themeSentence:
      'To put down revolution the new Republic armed the men least loyal to it — volunteer corps of demobilised soldiers whose violence saved the government in 1919 and menaced it ever after.',
    tags: ['p1'],
    era: 'early',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of Gustav Noske, the Social Democratic minister responsible for military affairs, inspecting men of a Freikorps (volunteer corps) at their barracks near Berlin, 1919.',
        image: {
          src: 'sources/freikorps-noske.jpg',
          alt: 'Steel-helmeted Freikorps volunteers drawn up in ranks on a barracks square are inspected by officers and the civilian minister Noske, 1919',
          credit: 'Bundesarchiv, Bild 183-R27092 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows ranks of soldiers in steel helmets and field-grey uniforms drawn up on a bare barracks square, seen from behind; across the ground, further companies stand in formation before a long wooden barracks building, with a field gun positioned between them. At the right, a small group faces the ranks: uniformed officers and, among them, a single figure in civilian overcoat and hat — the minister.',
        footnotes: [
          'Freikorps — “free corps”: volunteer military units recruited after the war, largely from demobilised soldiers and officers.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the memoir of a former Freikorps volunteer, published by a nationalist press in Germany in 1930. The author joined a volunteer corps in January 1919 at the age of twenty-one, after four years at the front.',
        body: 'They ask us now, in the tenth year, why we marched. I answer: because everything else had dissolved, and we had not. The Front had been our home; we came back to a Fatherland of red flags and profiteers, where sailors who had never seen a battle lounged in the palaces and the Government of the ninth of November begged us — begged the very men it had betrayed — to protect it from its friends. Very well: we protected it. In January we cleared the newspaper quarter; in March we cleared the streets; in May we cleared Munich of its Soviet republic of coffee-house literati. We did not do it for the Republic — let that be said plainly. We did it because a soldier does not watch Germany sink into the Russian filth while he has cartridges. They paid us, thanked us through their teeth, and when the work was done they called us murderers in their parliaments. No matter. The Front generation learned in those months that Germany’s salvation would never come from the talkers — and we did not disband; we merely changed our coats.',
        footnotes: [
          '“Soviet republic” — the Munich Räterepublik of April 1919, suppressed by army and Freikorps units in May with some 600 deaths.',
          'Newspaper quarter — the Berlin district seized during the Spartacist rising of January 1919.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of paramilitary violence after the First World War written by an academic historian and published in 2012.',
        body: 'The bargain was struck in the Republic’s first week and haunted it to the last: lacking reliable troops of its own, the socialist government hired the counter-revolution to fight the revolution. The Freikorps did what was asked of them with a thoroughness that was itself a warning — perhaps a hundred and fifty dead in the January fighting in Berlin, among them Liebknecht and Luxemburg, murdered in custody by officers whom the courts then declined seriously to punish; over a thousand in the March fighting; the Munich Räterepublik drowned in May with executions after the shooting stopped. Noske accepted the name of bloodhound, and the calculation was not absurd — the government survived. But the price compounded. The Freikorps were never republican instruments; they were the war’s unreconciled remnant, fighting for a Germany of their own imagining, and within a year the weapon turned in the hand: the same brigades marched on Berlin for Kapp in 1920, supplied the murderers of Erzberger and Rathenau, and bequeathed to the Nazi movement its first street-fighters, its methods and no small part of its membership. The Republic’s original sin was not that it used force, but whose force it chose to use — and what that choice taught armed men about where power in Germany really lay.',
        footnotes: [
          'Kapp — the Kapp Putsch of March 1920, in which Freikorps units seized Berlin in an attempted coup.',
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
              { descriptor: 'Correctly identifies the origin of Source 1 (a press photograph of minister Noske inspecting a Freikorps unit at its barracks, 1919)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains the purpose of the source with detailed reasons specific to it (e.g. to display the new government’s armed strength and the disciplined force at its disposal against revolution — the civilian minister shown in command of soldiers — reassuring order-minded Germans that authority had been restored), supported by details from the source', marks: '3' },
              { descriptor: 'Explains the purpose with some accurate and relevant support from the source', marks: '2' },
              { descriptor: 'Identifies a purpose in general terms', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'Origin refers to provenance: candidates should identify at least two details of who/what created the source, when and what type it is. For purpose, generic answers (“to show soldiers”) are insufficient for full marks: the photograph’s purpose should be tied to its staging and moment — a Social Democratic minister reviewing disciplined volunteer troops in 1919 presents the Republic as possessing armed order, at the very moment it depended on these irregular units. Supporting details might include the parade formation, the field gun, and the lone civilian among the officers.',
      },
      {
        letter: 'b',
        text: 'Identify and account for the authors’ perspectives in Sources 2 and 3 towards the Freikorps and their use by the Republic.',
        marks: 6,
        key: [
          {
            heading: 'Source 2',
            rows: [
              { descriptor: 'Identifies and accounts for the author’s perspective, supported by accurate and relevant evidence related to motives, bias, time, place, and purpose', marks: '3' },
              { descriptor: 'Identifies and outlines the perspective, supported by limited evidence OR provides a general comment supported by some relevant evidence', marks: '2' },
              { descriptor: 'Identifies the perspective, supported by limited evidence', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Source 3',
            rows: [
              { descriptor: 'Identifies and accounts for the author’s perspective, supported by accurate and relevant evidence related to motives, bias, time, place, and purpose', marks: '3' },
              { descriptor: 'Identifies and outlines the perspective, supported by limited evidence OR provides a general comment supported by some relevant evidence', marks: '2' },
              { descriptor: 'Identifies the perspective, supported by limited evidence', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'Each source is handled independently: identify the perspective, then state the possible reasons for it (motives, bias, time, place, purpose). Source 2: the Freikorps as the Front generation’s patriotic duty, owed no loyalty to the Republic it saved — contempt for the revolution and the “talkers” alike; accounted for by the author’s four years at the front, his self-justifying purpose (a memoir answering the charge of murder), the nationalist publisher and the 1930 date, when the anti-republican right was resurgent. Source 3: the Freikorps as a fatal bargain — effective, criminal at the edges, and corrosive of the Republic’s future; accounted for by the historian’s retrospective position, access to the full record (the courts’ leniency, Kapp, the political murders, the Nazi continuity) and analytical purpose. Comparison between the sources is not required.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the consequences of demobilisation for the new German Republic. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of demobilisation’s consequences in all three sources', marks: '3' },
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
          'Theme first: the set represents demobilisation as producing armed men the state could hire but not hold — the Republic displaying force it did not own (Source 1), the veterans’ own account of conditional service and unbroken enmity (Source 2), and the historian’s ledger of the bargain’s costs (Source 3). Strong responses test the extent with own knowledge: the Ebert–Groener pact behind the arrangement, the January and March 1919 fighting and the Munich Räterepublik, the murders of Liebknecht and Luxemburg and the judiciary’s indulgence, the Kapp Putsch and the army’s refusal to fire on its own, and the longer line to the political murders of 1921–22 and the SA. The counter-weight belongs in the evaluation: most of the six million demobilised men went quietly home to work and family — the Freikorps were a violent minority, and the set’s focus may overstate them as the typical veteran experience. Omissions earn marks only when tied to evaluation (e.g. no source shows the orderly mass demobilisation, so the set equates the veteran with the paramilitary). For higher marks: balance of source evidence and own knowledge and an explicit verdict on extent.',
      },
    ],
  },
];
