import type { SourceSet } from './types';

// Source sets 41–44: terror and control in the Nazi state.

export const SOURCE_SETS_11: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 41 — The camps begin: Dachau, 1933  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-dachau',
    title: 'The camps begin: Dachau, 1933',
    themeKey: 'camps',
    themeSentence:
      'The concentration camp entered German life in 1933 as an open secret — publicised as stern correction, experienced as lawless terror, and institutionalised as the foundation of the SS state.',
    tags: ['p4'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of prisoners at the midday meal in the concentration camp at Dachau, near Munich, 1933. The photograph was taken on an official visit and released for publication in the German press.',
        image: {
          src: 'sources/dachau-1933.jpg',
          alt: 'Prisoners in plain work clothes eat soup from bowls at long bare tables in the mess hall of Dachau concentration camp, 1933',
          credit: 'Bundesarchiv, Bild 152-01-14 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a large mess hall filled with prisoners in plain, pale work clothes, seated close together in rows at long bare wooden tables, eating soup from metal bowls. Some look down at their food; one man in the middle distance looks directly into the camera as he lifts his spoon. High barred windows line the wall behind.',
        note: 'Note: Dachau, opened in March 1933 in a disused munitions factory, was announced publicly by Himmler at a press conference as a camp for the “re-education” of political prisoners. Photographs of orderly barracks, kitchens and workshops were supplied to German newspapers.',
        footnotes: [
          '“Protective custody” — imprisonment without charge, trial or judicial review.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an account by a Social Democratic former prisoner of Dachau, written after his release and smuggled out of Germany; published by the exiled SPD leadership in Prague, 1934.',
        body: 'Whoever knows the camp only from the newspaper pictures knows a stage set. Yes, there is a kitchen, and the soup is photographed; what is not photographed is the standing to attention for hours on the parade ground until men fall, the “sport” — knee-bends and crawling in the gravel for the amusement of the guard — the dark cells, and the transports to the gate marked “shot while attempting escape”, of which every prisoner knows the true name. We political prisoners — trade unionists, party men, a few journalists and priests — learned the camp’s real curriculum in the first week: that here the SS man’s whim is the only law, that complaint is answered with the whip, and that the world outside has agreed not to know. And yet I set this down not to spread despair but because the opposite of the regime’s pictures must somewhere be recorded: they show order, and it is terror; they say education, and it is the breaking of men. When I was released — why, I shall never know — the commandant told us at the gate: “Tell them outside how it goes with enemies of the state. That is why we let you go.” For once, the SS and I are of one purpose. I am telling them.',
        footnotes: [
          '“Shot while attempting escape” — the camp authorities’ routine explanation for killings of prisoners.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the early concentration camps written by an academic historian and published in 2015.',
        body: 'The camps of 1933 were improvised, public and, by the standards of what came later, small — and each of those facts matters to their history. Improvised: in the wild months after the Reichstag fire, SA and SS squads locked tens of thousands of Communists, Social Democrats and trade unionists into cellars, warehouses and disused factories, of which perhaps a hundred thousand Germans had passing experience by the year’s end. Public: the regime did not hide the camps but advertised them — Himmler announced Dachau to the press, and the newspapers printed the photographs of orderly barracks precisely so that every German should know a place existed for those who crossed the state. The deterrent required publicity, and the publicity required the fiction of stern, lawful correction. Small: by 1936, with the opposition broken, the prisoner population had fallen to under eight thousand, and a reasonable observer might have expected the institution to wither. Instead Eicke’s Dachau model — the death’s-head guard formations, the graded punishments, the ideology of the prisoner as enemy — became the template of an SS empire that revived and expanded the system in the late 1930s against “asocials”, “habitual criminals” and Jews, and stood ready in 1939 as the instrument of a continent’s enslavement. The camp began as an emergency measure against political enemies. Its true significance was what the state learned there: that a zone could be maintained, inside a modern country, where law simply did not apply.',
        footnotes: [
          'Eicke — Theodor Eicke, commandant of Dachau and later inspector of the camp system.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Explain the purpose of Source 1. Support your answer with evidence from the source.',
        marks: 3,
        key: [
          {
            rows: [
              { descriptor: 'Explains the purpose of the source with detailed reasons specific to it (e.g. released to the press to present the new camps as orderly, lawful institutions of correction — feeding, order and discipline on display — while simultaneously advertising to the public what awaited “enemies of the state”), supported by evidence from the source', marks: '3' },
              { descriptor: 'Explains the purpose with some accurate and relevant support from the source', marks: '2' },
              { descriptor: 'Identifies a purpose in general terms', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'Purpose asks WHY the source was created. Generic answers (“to show the camp”) are insufficient for full marks: the purpose must be tied to the photograph’s official origin and staging — an image of feeding and order released by the regime, serving both reassurance (the camps as stern but proper) and warning. Supporting evidence might include the orderly rows at table, the plain but adequate meal, and the official-visit origin stated in the attribution.',
      },
      {
        letter: 'b',
        text: 'With reference to their origin and purpose, discuss the reliability of Sources 2 and 3 as evidence of conditions in the early concentration camps.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. eyewitness testimony from inside the camp, published by an opposition press)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly account based on the full record)', marks: '1' },
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
          '“Discuss” requires strengths and limitations for each source, reasoned from origin and purpose as the question directs. Source 2: direct eyewitness testimony of what the official pictures excluded, from a released political prisoner writing for an exile press whose purpose was to document the regime’s crimes — the anti-Nazi frame is plain, but the account’s sobriety and its explicit engagement with the propaganda images (“a stage set”) strengthen it, and its details are corroborated by the wider record; limits include the survivor’s necessarily partial view and the political purpose of the publication. Source 3: scholarly breadth and hindsight — numbers, phases, the Eicke model, the system’s trajectory — but an interpretation, distant from experience, whose argument (the camp as the state’s “lesson”) is a reading to be tested. The two are complementary: testimony and structure. Candidates treat the sources in parallel; comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the role of terror in the consolidation of Nazi power. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of terror’s role in all three sources', marks: '3' },
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
          'Theme first: the set represents terror as advertised (Source 1), experienced (Source 2) and institutionalised (Source 3) — an instrument whose deterrent power depended on being known. Strong responses test the extent with own knowledge: the Reichstag Fire Decree as the legal shell of “protective custody”, the 1933 wave of arrests that broke the left, the People’s Court and ordinary justice alongside the camps, the SS’s capture of the system and its late-1930s expansion to new victim categories — and the standard counterweight: terror operated together with consent, propaganda and real achievements, and for most conforming Germans the camp remained a threat rather than an experience. Omissions earn marks only when tied to evaluation — e.g. the set shows political prisoners in 1933 but none of the later categories (Jews, “asocials”, homosexual men), so the camp’s widening racial function must come from own knowledge. For higher marks: balance of source evidence and own knowledge and an explicit verdict on extent.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 42 — The police state  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-police-state',
    title: 'The police state: Gestapo, denunciation and “protective custody”',
    themeKey: 'gestapo',
    themeSentence:
      'The Gestapo’s power rested less on its numbers than on its reputation and its post-bag — a terror apparatus kept efficient by the willing denunciations of ordinary Germans.',
    tags: ['p4'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of a police raid in a Berlin street, March 1933, in the weeks after the Reichstag fire. Lorries of helmeted police seal the street during a search of the district.',
        image: {
          src: 'sources/razzia-1933.jpg',
          alt: 'Lorries of helmeted Berlin police seal a street during a raid in March 1933, with officers posted along the roadway',
          credit: 'Bundesarchiv, Bild 102-02941A / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a city street closed by police. In the foreground an open lorry is packed with police in dress helmets, rifles between their knees; a second loaded lorry stands further down the street, and officers on foot are posted along the roadway between them. A few civilians and a cyclist move along the pavements between the shops and tenement doorways.',
        note: 'Note: the archive dates the photograph to March 1933 and describes the operation as a raid directed against Communists and Jews. Under the Reichstag Fire Decree of 28 February 1933, arrest without charge — “protective custody” — required no judicial approval.',
        footnotes: [
          'Raid (Razzia) — a surprise police operation sealing and searching a district.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: A case summary adapted from the files of a Gestapo district office in western Germany, 1938. The files of several Gestapo offices survived the war and have been studied intensively by historians.',
        body: 'Subject: W., Josef, machine-fitter, born 1897, married, two children. Initiation of proceedings: written communication of 14 June from the house-warden of the subject’s building, reporting that W., in the courtyard on the evening of the 12th, in the hearing of several neighbours, described the Winter Relief collection as “organised begging” and stated that “the big men” would soon have the country in another war. A second communication, received the 15th, from a neighbour, Frau H., confirms the remarks in substance and adds that W. does not give the German greeting and did not display the flag on the Führer’s birthday. Interrogation of the 20th: W. admits the remarks in part, pleads that he had come from the tavern and spoke in drink and in anger over a wage deduction. Assessment: W. is a former trade-union member; nothing further against him since 1933; his employer describes his work as good. The remarks constitute an offence under the Malicious Practices Law. In view of the subject’s conduct under interrogation, a warning and a period of protective custody of fourteen days are deemed sufficient; release thereafter to be reported to this office. The house-warden is to be thanked for his vigilance.',
        footnotes: [
          'Malicious Practices Law — the 1933 law criminalising critical remarks about the regime, even in private.',
          'House-warden (Blockwart) — the Party’s representative responsible for a building or block.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the Gestapo written by an academic historian and published in 2001.',
        body: 'The Gestapo of popular imagination — the agent behind every curtain — was an invention, and the regime’s most economical one. The reality, recovered from the surviving case files, is startling in its proportions: the office responsible for greater Düsseldorf, a district of four million, never employed three hundred officers; Essen was policed for the Reich’s enemies by fewer than fifty. An apparatus so thin could not watch anyone systematically, and did not need to. The files show where its cases came from: at Würzburg, historians have counted more than half of all proceedings opened on the strength of a voluntary denunciation from the population — the neighbour, the workmate, the house-warden, the disappointed relative — against a small fraction begun by the Gestapo’s own observation. The motives ran from conviction through fear to the meanest private calculation: the files preserve denunciations that settled quarrels over inheritances, marriages and washing-lines. Terror, in short, was a partnership. The state supplied the category of the punishable and the cells; society supplied the information, freely and in surplus — so freely that offices complained of the flood of trivial accusations. The Gestapo’s deepest achievement was not surveillance but the belief in surveillance, which cost nothing, reached everywhere, and made every German the potential warden of every other.',
        footnotes: [
          'Würzburg — a Bavarian district whose surviving Gestapo files have been systematically analysed.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Reichstag fire and the decree of 28 February 1933; the terror campaign against Communists during the March election; mass arrests into “protective custody”; police power in Nazi hands through Göring’s Prussian interior ministry)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph in March 1933: the emergency decree in force, the assault on the left during and after the election campaign, and the police — under new Nazi political direction — conducting mass raids and arrests. Details of the source (the lorries of armed police, the sealed street, the watching civilians) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying how the Gestapo controlled the German population.',
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
          'Usefulness must be judged relative to the stated inquiry. Source 2 is the machinery in a single file: it shows how a case actually began (two voluntary denunciations), what counted as an offence (grumbling, the withheld salute), the interrogation, the calibrated punishment and the thanked informer — the texture of control no statute reveals; its limits are those of one constructed-typical case: the office’s own record, written in its categories, silent on the fourteen days as W. lived them. Source 3 supplies the aggregate — staffing levels, the denunciation statistics, the interpretation of terror as partnership and reputation — with scholarly authority; but it is an argument built on surviving files from particular districts, and candidates may note the debate it engages (how far “self-policing” should soften the picture of terror). Together they are file and framework. Comparison is not required for full marks; each salient point is rewarded.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the means by which the Nazi regime controlled the German population. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the means of control in all three sources', marks: '3' },
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
          'Theme first: the set represents control as open force at the outset (Source 1) settling into a normalised partnership of law, file and informer (Sources 2 and 3). Strong responses test this against the full repertoire of control with own knowledge: the camps and the People’s Court behind the case files, the Blockwart system and Party organisations enclosing daily life, the laws (Malicious Practices, the 1936 unification of police under Himmler) — and the non-coercive half of the account: propaganda, the Führer myth, real popularity and material recovery, which made denunciation feel to many like citizenship. Candidates should engage the interpretive question Source 3 raises — whether “self-policing society” understates the terror that made denunciation deadly — and defend a position. Omissions earn marks only when tied to evaluation: e.g. the set contains no victim’s voice (W. exists only in the office’s prose), so the cost of control is documented by its administrators. Balance of source evidence and own knowledge is required at the top.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 43 — Breaking the unions, May 1933  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-unions',
    title: 'Breaking the unions: May 1933',
    themeKey: 'unions',
    themeSentence:
      'The regime celebrated the workers on 1 May 1933 and destroyed their unions on 2 May — replacing a free labour movement with the German Labour Front, an instrument of control wearing the costume of honour.',
    tags: ['p4'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of President Hindenburg and Chancellor Hitler driving to the “Day of National Labour” celebrations, Berlin, 1 May 1933. The regime had declared May Day a paid national holiday for the first time.',
        image: {
          src: 'sources/mayday-1933.jpg',
          alt: 'Hindenburg and Hitler ride in an open car to the 1 May 1933 celebrations; Hitler, a flower in his buttonhole, waves to the crowd',
          credit: 'Bundesarchiv, Bild 102-14569 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows the two men side by side in the back of an open car: the aged President in dark civilian dress, gloved hands folded on his stick, and beside him the Chancellor in a pale coat, a spray of lily-of-the-valley in his buttonhole, his arm raised in salute to the crowd lining the route behind.',
        note: 'Note: the evening rally on the Tempelhofer Feld on 1 May 1933 drew a crowd estimated at over a million, with the free trade unions urging their members to march under their own banners. The next morning, 2 May, SA and NSBO squads occupied every trade-union building in Germany, seized the unions’ funds and took their leaders into “protective custody”.',
        footnotes: [
          'NSBO — the Nazi factory-cell organisation.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a speech by Dr Robert Ley, head of the newly founded German Labour Front (DAF), to workers’ representatives, Berlin, 10 May 1933 — eight days after the seizure of the unions.',
        body: 'Workers! Your institutions are sacred to us National Socialists. I myself am a poor peasant’s son and understand poverty; I myself was seven years in one of the biggest industries of Germany, and I know the exploitation of anonymous capitalism. Workers! I swear to you: we will not only preserve everything that exists — we will extend the protection and the rights of the worker still further, so that he can enter the new National Socialist state as a fully worthy and respected member of the nation. No, workers, your institutions are not being taken from you; they are being freed — freed from those who used your pennies for their party politics and their upholstered offices while you stood at the bench. The class struggle, which for seventy years split our people into enemies, is at an end. In the German Labour Front, the worker of the fist and the worker of the brow, the employer and the employed, stand together — no longer against each other but with each other, comrades of one people. He who serves labour serves Germany; and Germany, I promise you, will never again mean hunger for those who work, but honour. Honour to the German worker!',
        footnotes: [
          'DAF (Deutsche Arbeitsfront) — the compulsory Nazi organisation of employers and employees that replaced the unions.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of German labour under National Socialism written by an academic historian and published in 2008.',
        body: 'The choreography of the first days of May 1933 deserves its notoriety, for the regime never staged its method more nakedly: the embrace, then the blow. On the first, the labour movement’s own festival — which the Republic had never dared make a paid holiday — was granted at last, and union contingents marched to the Tempelhofer Feld beneath their old banners; on the second, at ten in the morning and across the whole Reich simultaneously, the SA stood in the union offices, the funds were sequestered, the leaders were in cells, and seventy years of organised labour had ceased to exist by lunchtime. What replaced it was not, despite the name, a union. The Labour Front enrolled everyone — worker and employer alike, twenty-five million members by the war — precisely so that it could represent no one; wages were removed from bargaining altogether and handed to state Trustees of Labour, under whom real earnings in 1938 still hovered near the level of the slump; the right to strike vanished with the right to change jobs freely as rearmament tightened. The Front’s genuine coin was symbolic and material compensation: the rhetoric of the worker’s honour, the Strength through Joy cruises and concerts, the Beauty of Labour washrooms and canteens — benefits real enough to be remembered warmly, and calculated, as Ley privately put it, to give the worker everything except the one thing the unions had existed to give him: power over the terms of his own labour.',
        footnotes: [
          'Trustees of Labour — state officials who fixed wages from 1933.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the new regime’s declaration of 1 May 1933 as the paid “Day of National Labour”; the mass rally at Tempelhof; the courtship of the workers weeks after the seizure of power; the destruction of the unions the following morning)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Explains the message of the source (e.g. that the old Germany and the new ride together — the revered Field Marshal beside the people’s Chancellor — and that the regime honours the worker’s day as a festival of national unity) by providing accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Identifies or provides a general comment about the message of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          'The context element requires placement on 1 May 1933 — the regime’s appropriation of the workers’ festival, with the union seizure of 2 May belonging to the surrounding events. The message element should be stated as a claim and supported from the source: the pairing of President and Chancellor, the open car among the crowds, the festive flower against the old man’s black — reassurance and celebration in one image. Any legitimate, evidenced reading is rewarded.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding what the German Labour Front meant for workers. Account for the differences between them.',
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
          'A similarity worth crediting: both sources agree the Front offered workers honour and benefits — Ley promises them, the historian confirms the cruises, canteens and rhetoric were real and “remembered warmly”. The central difference: Source 2 presents the destruction of the unions as liberation and the Front as the worker’s protector; Source 3 presents the same institution as the removal of workers’ power — no bargaining, no strike, wages fixed by the state — with the benefits as calculated compensation. Accounting from origin: the Front’s own founding leader, speaking days after the seizure to an audience whose organisations he had just absorbed, with every motive to reassure and to clothe control in the language of honour; an academic historian in 2008 with wage data, the DAF’s records and Ley’s private remarks. Both similarities and differences are required for full comparison marks.',
      },
      {
        letter: 'c',
        text: 'Assess the impact of the destruction of the free trade unions on German workers, as shown in Sources 1, 2 and 3. To what extent do the sources capture the full consequences of this change?',
        marks: 10,
        key: [
          {
            heading: 'Identification of impacts',
            rows: [
              { descriptor: 'Identifies impacts of the unions’ destruction as represented in all three sources', marks: '3' },
              { descriptor: 'Identifies impacts in two of the sources', marks: '2' },
              { descriptor: 'Identifies impacts in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the impact on workers and the extent to which the sources capture the full consequences — political, economic and social — using detailed, accurate and relevant evidence from all three sources and the broader period, with omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The second sentence does the discriminating work: candidates must name consequences the set does NOT show and tie each to an evaluation of its insight. The sources show the staged embrace (Source 1), the compensating promise (Source 2) and the structural dispossession (Source 3). Own knowledge that completes the picture might include: the arrests and camps that awaited union officials, workers’ political homelessness after the SPD’s and KPD’s destruction, full employment as the regime’s real gift and discipline (labour shortage, the 1938 restrictions on changing jobs), quiet workplace dissent (absenteeism, slowdowns, the underground networks), and KdF and Beauty of Labour as lived experience. Merely listing omissions earns nothing — e.g. “no worker speaks in the set, so whether workers accepted Ley’s bargain must come from other evidence (SOPADE reports suggest scepticism among the older, purchase among the young)” ties the omission to evaluation. Balance of source evidence and own knowledge is required at the top; a source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 44 — Winter Relief and the community of sacrifice  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-winter-relief',
    title: 'The rattling tin: Winter Relief and the community of sacrifice',
    themeKey: 'winter-relief',
    themeSentence:
      'The Winter Relief campaign staged the people’s community as an annual ritual of giving — charity as spectacle, participation as duty, and the collecting tin as an instrument of belonging and surveillance at once.',
    tags: ['p4'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of a public “one-pot Sunday” (Eintopfsonntag) meal held by the Winter Relief organisation in the market square of Worms, mid-1930s.',
        image: {
          src: 'sources/whw-eintopf.jpg',
          alt: 'Townspeople of all ages eat stew from metal pots at long trestle tables set up in a square at a Winter Relief one-pot Sunday, mid-1930s',
          credit: 'Bundesarchiv, Bild 133-295 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows long trestle tables set up in the open air of a town square, at which people of every age eat stew from metal pots: an elderly man in a heavy coat and hat spoons his meal beside a small girl in a knitted cap, with schoolgirls, mothers and men in suits along the benches, and further tables of diners behind. Steam rises from the pots in the cold air.',
        note: 'Note: on designated “one-pot Sundays” of the Winter Relief season, households and restaurants were expected to serve a simple stew and donate the money saved. Party collectors called at homes to receive the difference.',
        footnotes: [
          'Winter Relief (Winterhilfswerk, WHW) — the regime’s annual winter charity campaign “for the fight against hunger and cold”.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a report on conditions in south-western Germany, written by an underground contact of the exiled Social Democratic leadership (SOPADE) and smuggled abroad, winter 1936.',
        body: 'Of the Winter Relief one must report carefully, for it shows the regime’s two faces in one instrument. That much is collected is beyond question — the street collections with their badges, the one-pot Sundays, the deductions agreed “voluntarily” at the works: no one escapes, and that is the point. The collector who calls on Sunday is the block warden who keeps the lists, and everyone understands that the household which gives nothing, or too little, is noted. A shopkeeper of my acquaintance gives double since a Party man observed aloud that his window would look bad without the sticker. And yet honesty compels this too: the thing is popular. The young believe in it; the pensioner sees coal delivered to his poorer neighbour and says, say what you will, nobody froze last winter; the collections make a theatre of good works in every street, with the film stars rattling tins at the corner and the newspapers printing the totals like battle reports. That the books are never audited publicly, that the money flows also to purposes no donor sees, that the Jew who froze receives nothing and may not give — of this the street does not speak. The Winter Relief is the regime in miniature: compulsion wearing the face of neighbourliness, and wearing it, one must admit, convincingly.',
        footnotes: [
          'Block warden (Blockwart) — the Party’s representative for a street or building.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of propaganda and social policy in the Third Reich written by an academic historian and published in 2012.',
        body: 'No institution of the dictatorship translated ideology into gesture more successfully than the Winter Relief. Its economics were modest: the hundreds of millions of marks raised each season — collected by an army of volunteers, deducted at the pay office, rattled out of the public at every corner — relieved the state budget of welfare costs it would otherwise have borne, a subsidy from the people to the treasury dressed as generosity. Its politics were anything but modest. The campaign made the Volksgemeinschaft performable: the badge on the coat displayed one’s membership; the one-pot Sunday put the whole nation, in principle, at one table eating the same poor man’s meal; the published totals turned charity into a plebiscite the regime won every winter. Participation was formally voluntary and practically compulsory — the lists were kept, and everyone knew it — yet the compulsion embarrassed the ritual less than one might think, because the ritual’s promise was real to its participants: warmth, belonging, the visible conquest of the slump’s misery. The boundary of the community was equally visible. Jewish Germans were excluded from benefit and, after 1935, from giving; their winter was not the Volk’s concern. In the rattling tin, held out with a smile on every street corner, the regime found its most domestic instrument of power: a weekly occasion on which every German publicly answered, with a coin, the question of belonging.',
        footnotes: [
          'Plebiscite — a public vote staged to demonstrate support.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that the people’s community is real — all ages and classes of the town at one table, sharing the same simple meal in the open for all to see)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the long common tables in the public square, the identical metal pots of stew, the mixing of the old man, the child, the schoolgirls and the suited men, the visible publicity of the occasion)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim (“The message of Source 1 is that…”). “Explain” requires the how: the staging of community — one table, one meal, every generation together, in the town’s most public space, photographed for the press. Full marks require specific reference to details of the source.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of how the Winter Relief campaign worked in practice.',
        marks: 6,
        key: [
          {
            heading: 'Source 2',
            rows: [
              { descriptor: 'Discusses the reliability of Source 2 in relation to the Winter Relief by providing detailed, accurate and relevant evidence and reasons related to, for example, author, motive, bias, time, place, and purpose', marks: '3' },
              { descriptor: 'Explains the reliability of Source 2 by providing mostly accurate and relevant evidence and some reasons', marks: '2' },
              { descriptor: 'Describes the reliability of Source 2 by providing some evidence from some aspects of the source', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Source 3',
            rows: [
              { descriptor: 'Discusses the reliability of Source 3 in relation to the Winter Relief by providing detailed, accurate and relevant evidence and reasons related to, for example, author, motive, bias, time, place, and purpose', marks: '3' },
              { descriptor: 'Explains the reliability of Source 3 by providing mostly accurate and relevant evidence and some reasons', marks: '2' },
              { descriptor: 'Describes the reliability of Source 3 by providing some evidence from some aspects of the source', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Discuss” requires strengths and limitations for each source, reasoned from origin factors rather than a bare assertion of bias. Source 2: an eyewitness report from inside Germany, written secretly for an opposition leadership that needed accurate intelligence — its concessions against interest (“the thing is popular”, “nobody froze last winter”) are a classic marker of candour, and its detail (the lists, the sticker, the exclusions) is specific; its limits: one region, an anti-Nazi frame, and no access to the campaign’s books. Source 3: scholarly synthesis with hindsight and the archives — finances, function, exclusion — but an interpretation whose pointed formulations (“a plebiscite the regime won every winter”) are readings to be weighed. Candidates treat the sources in parallel and do not have to evaluate or compare them against each other for full marks.',
      },
      {
        letter: 'c',
        text: 'Analyse how Sources 1, 2 and 3 collectively represent the Volksgemeinschaft (people’s community) in practice. In your answer, identify the key idea that links the sources.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the linking idea',
            rows: [
              { descriptor: 'Identifies the linking idea as represented in all three sources', marks: '3' },
              { descriptor: 'Identifies the linking idea in two of the sources', marks: '2' },
              { descriptor: 'Identifies the linking idea in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Analysis',
            rows: [
              { descriptor: 'Analyses clearly how the sources collectively represent the people’s community in practice, with detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
              { descriptor: 'Analyses the collective representation using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
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
          'The key linking idea should be stated early — e.g. that the Winter Relief made the people’s community into a performed ritual, in which belonging was displayed, compulsion wore the face of neighbourliness, and the community’s warmth was fenced by exclusion. The analysis should proceed by aspects, not by sources: the staged community at table (Source 1), participation as watched duty (Source 2), the campaign’s economics, symbolism and boundary (Source 3), each extended with own knowledge — the badge-collection culture, block wardens and lists, the published totals, the DAF deductions, and the exclusion of Jewish Germans from the community of givers and receivers as the Volksgemeinschaft’s defining edge. Omissions earn marks only when tied to evaluation — e.g. all three sources concern the campaign’s operation; none records a recipient’s experience, so the relief itself — the coal delivered, the meal provided — is present only by report. Balance of source evidence and own knowledge is required at the top; a source-by-source walkthrough caps in the middle bands.',
      },
    ],
  },
];
