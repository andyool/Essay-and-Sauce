import type { SourceSet } from './types';

// Source sets 69–72: war, collapse and reckoning.

export const SOURCE_SETS_18: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 69 — Forced labour  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-forced-labour',
    title: 'The foreign workers: forced labour in the wartime Reich',
    themeKey: 'forced-labour',
    themeSentence:
      'By 1944 more than seven million foreign workers — recruited, deceived and deported — kept the German war economy running, graded by race and worked into the heart of every German town: the Volksgemeinschaft’s daily encounter with its own empire.',
    tags: ['p4'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph, taken by a German propaganda company, of young women from the occupied Soviet Union assembled at a railway station with their luggage before transport to Germany for labour, 1942.',
        image: {
          src: 'sources/forced-labour.jpg',
          alt: 'Young women from the occupied Soviet Union stand with bundles and suitcases on a station platform in 1942, awaiting transport to Germany for labour, a German soldier beside the line',
          credit: 'Bundesarchiv, Bild 183-B19878 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a long line of young women — most in headscarves, a few bare-headed — standing along a station platform in summer light, bundles, baskets and suitcases at their feet. A German soldier in boots and field cap walks along the track edge past them; the station buildings stretch away behind, and more people crowd the platform into the distance.',
        note: 'Note: the archive’s wartime caption describes the subjects as “Fremdarbeiter” (foreign workers) before departure for Germany. Photographs by the propaganda companies presented the recruitment of eastern workers as orderly and voluntary; recruitment in the occupied Soviet Union in fact ranged from misleading promises to open round-ups and deportation.',
        footnotes: [
          '“Eastern workers” (Ostarbeiter) — the regime’s category for Soviet civilian labourers, subject to special restrictions and a sewn-on badge.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extracts from a programme statement by Fritz Sauckel, General Plenipotentiary for Labour Deployment, 20 April 1942, setting out the principles of the foreign-labour programme. The document was among the prosecution’s central exhibits at Nuremberg, where Sauckel was condemned and hanged.',
        body: 'The aim of this new, gigantic labour mobilisation is to use all the rich and tremendous sources, conquered and secured for us by our fighting armed forces under the leadership of Adolf Hitler, for the armament of the armed forces and also for the nutrition of the homeland. The raw materials, as well as the fertility of the conquered territories and their human labour power, are to be used completely and conscientiously to the profit of Germany and her allies. All the men and women whom we bring from the occupied territories must be fed, sheltered and treated in such a way as to exploit them to the highest possible extent at the lowest conceivable degree of expenditure. It has always been natural for us Germans to refrain from cruelty and mean chicanery towards the conquered enemy, even when he has proved himself the most bestial and most implacable adversary, and to treat him correctly. However, sentimental blubbering must cease. Where the voluntary approach fails, conscription and compulsory service must take its place. This is an iron requirement of the war economy.',
        footnotes: [
          'General Plenipotentiary — Sauckel held sweeping powers over labour recruitment in every occupied territory from March 1942.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of forced labour in the Nazi war economy written by an academic historian and published in 2010.',
        body: 'By the late summer of 1944 the Reich held some 7.6 million foreign civilian workers and prisoners of war at labour — roughly a quarter of the entire workforce, and in agriculture and armaments far more — and the system that held them was the racial state translated into personnel management. At the top of the hierarchy stood workers from the west and north, paid and housed tolerably; beneath them Poles and “eastern workers”, marked with sewn-on badges, wage-docked, barracked behind wire, forbidden churches, cinemas and German company, and subject for “breaches of discipline” — a category including intimacy with Germans, punishable by execution — to the Gestapo’s special jurisdiction; and at the bottom the concentration-camp prisoners and Jewish labourers worked toward death on the account of the SS. The numbers translate Sauckel’s arithmetic — maximum exploitation at minimum expenditure — into experience: rations graded by race and output, mortality among eastern workers and Soviet prisoners at levels no German workforce would have survived, and, at the war’s end, some 200,000 children born to forced labourers taken into “foreign-child care facilities” whose infant mortality reached ninety per cent in the worst homes. Two facts must close any account. The system was not hidden: the barracks stood beside the factories, the columns marched through every town, and by 1944 nearly every German farm and firm of any size employed its allotted foreigners — the empire was present at the next workbench. And the system was indispensable: without the seven million, the German war economy — and with it the war — would have ended years earlier. Forced labour was not an excess of the regime’s war. It was its condition.',
        footnotes: [
          'Special jurisdiction — foreign workers were outside the ordinary courts, at the police’s disposal.',
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
              { descriptor: 'Explains the purpose of the source with detailed reasons specific to it (e.g. taken by a propaganda company to present the transport of eastern workers to Germany as orderly, calm and quasi-voluntary — luggage packed, a single unhurried guard — for publication at home and in the occupied territories), supported by evidence from the source', marks: '3' },
              { descriptor: 'Explains the purpose with some accurate and relevant support from the source', marks: '2' },
              { descriptor: 'Identifies a purpose in general terms', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'Purpose asks WHY the source was created. Generic answers (“to show workers”) are insufficient for full marks: the photograph is a propaganda company’s image, and its purpose should be tied to the staging the note identifies — an orderly, unforced departure scene, against the documented reality of round-ups. Supporting evidence might include the composed line of women with their own luggage, the single relaxed soldier, and the propaganda-company origin in the attribution. Candidates who see that the image’s purpose is precisely what makes it evidence — of how the programme wished to be seen — are answering at full depth.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the treatment of foreign workers in wartime Germany.',
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
          'Usefulness must be judged relative to the stated inquiry. Source 2 is the programme’s charter from its administrator’s hand: direct evidence of policy — total exploitation at minimum cost, compulsion where recruitment failed — with the passing self-justification (“refrain from cruelty… treat him correctly”) itself evidence of the language in which the regime dressed coercion; its limits: a programme statement shows intention at the top, not practice below. Source 3 supplies the practice — the racial hierarchy, the numbers, the punishments, the children’s homes — with scholarly synthesis of records the programme itself generated; its closing interpretive claims (visibility, indispensability) invite engagement. Strong answers note the exact fit: Source 3’s findings read as Sauckel’s arithmetic executed, so the two sources together join intention to outcome — the connection the inquiry requires. Comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Assess the impact of the forced-labour system on wartime Germany, as shown in Sources 1, 2 and 3. To what extent do the sources capture the full consequences of the system?',
        marks: 10,
        key: [
          {
            heading: 'Identification of impacts',
            rows: [
              { descriptor: 'Identifies impacts of the forced-labour system as represented in all three sources', marks: '3' },
              { descriptor: 'Identifies impacts in two of the sources', marks: '2' },
              { descriptor: 'Identifies impacts in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the system’s impact and the extent to which the sources capture its full consequences — economic, social and human — using detailed, accurate and relevant evidence from all three sources and the broader period, with omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The second sentence does the discriminating work: candidates must name consequences the set does NOT show and tie each to an evaluation of its insight. The sources show the programme’s face (Source 1), charter (Source 2) and anatomy (Source 3). Own knowledge that completes the picture might include: the system’s place in the war economy under Speer, its entanglement of ordinary Germans — farmers, foremen, housewives with an allotted worker — in the racial order’s daily administration; the terror apparatus the workers’ presence expanded (Gestapo jurisdiction, public executions of eastern workers); the liberated “displaced persons” of 1945, millions strong; and the decades-long fight for recognition and compensation, settled in part only in 2000. Merely listing omissions earns nothing — e.g. “no worker’s own voice appears in the set, so the system is documented entirely by its operators and analysts” ties the omission to evaluation. Balance of source evidence and own knowledge is required at the top.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 70 — The Volkssturm  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-volkssturm',
    title: 'The last levy: the Volkssturm, 1944–45',
    themeKey: 'volkssturm',
    themeSentence:
      'In the war’s last winter the regime conscripted boys and grandfathers into a “people’s storm” — the Volksgemeinschaft’s final parody, in which the nation the regime had promised to protect was marched out to die for it.',
    tags: ['p4'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the swearing-in of Volkssturm men in East Prussia, November 1944, released by the regime’s press service.',
        image: {
          src: 'sources/volkssturm-1944.jpg',
          alt: 'Volkssturm men in civilian coats and armbands raise their hands for the oath in November 1944, anti-tank launchers propped before them',
          credit: 'Bundesarchiv, Bild 183-J28176 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows ranks of men drawn up in the open in heavy civilian overcoats and field caps, right hands raised for the oath. They range visibly in age from teenagers to men in late middle age. Before each man, propped upright, stands a single-shot anti-tank launcher; one man at the right holds his launcher against his shoulder, its warhead beside his face. More ranks stretch away into the winter mist.',
        note: 'Note: the decree of 25 September 1944 conscripted all remaining men aged 16 to 60 into the Volkssturm under Party command. Units received armbands rather than uniforms, a few hours’ training, and — where weapons existed at all — the single-shot Panzerfaust shown in the photograph.',
        footnotes: [
          'Panzerfaust — a disposable one-shot anti-tank weapon, effective only at ranges under 100 metres.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the proclamation of the German Volkssturm, read out by Heinrich Himmler at the swearing-in ceremonies broadcast throughout the Reich, 18 October 1944 — the anniversary of the Battle of the Nations against Napoleon.',
        body: 'After five years of the hardest struggle, as a result of the failure of all our European allies, the enemy stands on some fronts near or on the German frontier. He is straining his forces to smash our Reich and to annihilate the German people and its social order. His final aim is the extermination of the German man. As in the autumn of 1813, therefore, the Führer has issued the call to the last levy. In the Gaue of the Greater German Reich, the German Volkssturm is formed from all men capable of bearing arms between the ages of sixteen and sixty. We know our enemy’s war aim: it leaves us only the choice between victory and destruction. As long as an enemy sets foot on German soil, every German fights — the worker beside the peasant, the boy beside the man of sixty. Each of us knows what he defends: not a regime, but hearth and family, wife and child, and the future of our children’s children. In this hour the whole people becomes an army. The German Volkssturm will meet the enemy’s destructive will with the total deployment of the nation — with fanaticism and with the certainty that behind the last battalion of this war stands German victory.',
        footnotes: [
          '1813 — the “people’s rising” against Napoleon, the proclamation’s deliberate historical echo.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of Germany’s final year of war written by an academic historian and published in 2011.',
        body: 'The Volkssturm was the terminal expression of the regime’s idea of the people, and it should be read as ideology rather than as an army. Militarily it was a nullity administered as a mass: some six million men on paper, commanded not by the army but by the Party’s Gauleiter, mustered in armbands with weapons that existed chiefly in the decree — units went to the Oder front sharing rifles of six calibres, and the Panzerfaust, the one item in supply, asked a sixty-year-old to stand within eighty metres of a T-34. Where its men fought, as in Königsberg and Breslau and Berlin, they died in numbers no one troubled to count accurately — perhaaps 175,000 in six months — and where they sensibly melted home to their families, the regime’s answer was the flying court-martial and the lamppost. That answer is the institution’s meaning. A state that had begun by promising to protect the Volksgemeinschaft ended by defining membership as the duty to die with it: the sixteen-year-old beside the veteran of Verdun, sworn to Hitler personally on the anniversary of 1813, defending not a frontier but the regime’s refusal to end. The proclamation’s logic — victory or destruction, with surrender abolished as a category — was not rhetoric. In the last months the apparatus hanged its own citizens for white flags in their windows, and the “people’s storm” closed the circle of the people’s community: an idea that had always defined belonging by sacrifice completed itself by consuming the very young and the very old to buy the leadership another week.',
        footnotes: [
          'Flying court-martial — mobile execution squads of the last months, hanging “defeatists” without trial.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the war reaching Germany’s borders in late 1944; the Volkssturm decree conscripting men 16 to 60 under Party command; East Prussia facing the Soviet advance; the swearing-in ceremonies of November 1944)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Explains the message of the source (e.g. that the whole people stands armed and sworn to the defence — every generation ready, weapon in hand, at the frontier) by providing accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Identifies or provides a general comment about the message of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          'The context element requires placement in late 1944: the fronts on the Reich’s borders, the conscription decree, the Party-run levy. The message element should be stated as a claim and supported from the source: the raised hands of the oath, the mixture of ages, the anti-tank weapons displayed before each man — the released image proclaiming a nation in arms. Candidates may note the tension the photograph cannot suppress (civilian coats, single-shot weapons, boys and old men), and any legitimate, evidenced reading is rewarded.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the meaning of the Volkssturm. Account for the differences between them.',
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
          'A structural similarity candidates should see: both sources agree the Volkssturm embodied “the whole people becomes an army” and the abolition of surrender — the proclamation as promise, the historian as indictment; Source 3 explicitly takes the proclamation’s logic “not as rhetoric”. The differences: Source 2 casts the levy as 1813 reborn — defence of hearth and family, victory certain behind the last battalion; Source 3 counts the weapons, the dead and the lampposts, and reads the institution as the regime consuming its own people to prolong itself. Accounting from origin: the proclamation is the regime’s voice at the moment of creation, broadcast to conscript and console, its historical echo chosen for legitimacy; the historian writes in 2011 with the casualty estimates and the record of the terror against “defeatists”. Both similarities and differences are required for full comparison marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the condition of the Nazi state in the final year of the war. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the state’s final condition in all three sources', marks: '3' },
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
          'Theme first: the set represents the final year as the ideology’s consumption of its own people — the sworn levy (Source 1), the victory-or-destruction doctrine (Source 2), and the historian’s accounting (Source 3). Strong responses test the extent with own knowledge: the Party’s wartime ascendancy over the army after 20 July 1944, the terror turned inward (People’s Court, flying courts-martial), the home front under bombing and evacuation, the Hitler Youth’s flak generation beside the Volkssturm, the refusal of surrender to the end and the “Nero order” to destroy Germany’s infrastructure — while noting what the set’s regime-centred lens omits: the millions who evaded, deserted or hung out white flags at the risk of their lives, and the ordinary endurance of civilians the regime no longer served. Omissions earn marks only when tied to evaluation. For higher marks: balance of source evidence and own knowledge and an explicit verdict on extent.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 71 — Liberation and evidence  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-liberation',
    title: 'What the cameras found: liberation, 1945',
    themeKey: 'liberation',
    themeSentence:
      'When the Allied armies opened the camps in the spring of 1945, they made the evidence deliberately and at once — photographs, films and forced tours — so that what Germany had done could never afterwards be called propaganda.',
    tags: ['p6'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph by a United States Army photographer of survivors in a barrack at Buchenwald concentration camp, near Weimar, taken on 16 April 1945, five days after the camp’s liberation.',
        image: {
          src: 'sources/buchenwald-liberation.jpg',
          alt: 'Emaciated survivors lie in tiered wooden bunks in a Buchenwald barrack at liberation in April 1945; one man stands at the right',
          credit: 'US Army Signal Corps photograph, 1945. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows the inside of a barrack: tiered wooden shelves, three high, on which emaciated men lie packed side by side under scraps of blanket, metal bowls beside some of them. Faces turn toward the camera from every level. At the right a man stands against the bunk frame, skeletal, holding his clothing at his waist.',
        note: 'Note: among the men in the bunks is the sixteen-year-old Elie Wiesel, later the author of “Night” and a Nobel laureate. Army photographers were ordered to document the camps systematically; within days, German civilians from Weimar were marched through Buchenwald to see what the photographs record.',
        footnotes: [
          'Buchenwald — opened 1937; some 56,000 people died there and in its satellite camps.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the cable sent by General Dwight D. Eisenhower, Supreme Commander of the Allied forces in Europe, to Washington, 19 April 1945, after his visit to the Ohrdruf camp, and from his message urging visits to the liberated camps.',
        body: 'The things I saw beggar description. While I was touring the camp I encountered three men who had been inmates and by one ruse or another had made their escape. I interviewed them through an interpreter. The visual evidence and the verbal testimony of starvation, cruelty and bestiality were so overpowering as to leave me a bit sick. In one room, where they were piled up twenty or thirty naked men, killed by starvation, George Patton would not even enter. He said he would get sick if he did so. I made the visit deliberately, in order to be in position to give first-hand evidence of these things if ever, in the future, there develops a tendency to charge these allegations merely to “propaganda”. I have requested that a group of newspaper editors and representative groups of national legislators be sent to Germany at once, so that the evidence may be placed before the American and British publics in a fashion that will leave no room for cynical doubt.',
        footnotes: [
          'Ohrdruf — a satellite camp of Buchenwald, the first camp liberated by the western Allies, 4 April 1945.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the liberation of the camps and its aftermath written by an academic historian and published in 2015.',
        body: 'The liberators understood within days that they had walked into an evidentiary emergency, and their response shaped everything that followed. Eisenhower’s cable set the doctrine — see it, record it, show it, against the future’s “cynical doubt” — and the apparatus obeyed on a scale no atrocity had ever received: Signal Corps photographers and film units worked the camps systematically; editors, congressmen and parliamentary delegations were flown in; newsreel footage played in cinemas on both continents within weeks; and German civilians, by order, walked through the barracks and the burial details of the camps beside whose fences they had lived. The documentation had three afterlives. It fed the courts: at Nuremberg the prosecution rested not on witnesses alone but on the films, the photographs and the enemy’s own captured paper, establishing a judicial record no later revision has dented. It framed memory — sometimes at a cost historians must note: the western cameras found concentration camps in their final catastrophe of typhus and starvation, not the extermination centres in the east, already dismantled or liberated months before, so that for a generation the image of Belsen’s dead stood in for a machinery of murder whose true centre lay at Auschwitz, Treblinka and the shooting pits. And it set a standard: the deliberate, immediate manufacture of undeniable evidence — the photographed atrocity — entered the world’s repertoire in April 1945, born of one commander’s precise anticipation that denial would come. It came; it comes still; and it breaks, as he intended, on the record made that spring.',
        footnotes: [
          'Belsen — Bergen-Belsen, liberated by British forces on 15 April 1945 amid a typhus epidemic.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Allied advance into Germany in spring 1945; the liberation of Buchenwald on 11 April; the ordered documentation of the camps by army photographers; the forced visits of German civilians)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph in April 1945: the western armies overrunning the camps, Buchenwald liberated days earlier, official army photography under way. Details of the source (the tiered bunks, the survivors’ condition, the army photographer’s presence) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying how the crimes of the camps became known to the world.',
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
          'Usefulness must be judged relative to the stated inquiry. Source 2 is the founding document of the documentation effort: the supreme commander’s eyewitness testimony, his explicit anticipation of denial, and his orders for editors and legislators — evidence at once of what was found and of the deliberate decision to make it undeniable; its limits: an immediate cable from one camp, before the scale in the east was understood. Source 3 supplies the system that grew from the cable and its three afterlives — courts, memory, standard — including the crucial scholarly caution that the western cameras documented the camps’ catastrophe, not the extermination centres, a distinction the inquiry requires; as interpretation its framing invites engagement. Strong answers note that wartime knowledge (Allied statements from 1942, the escaped prisoners’ reports) predated the cameras — becoming known and becoming undeniable were different events, and the sources document the second. Comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of the liberation of the camps for the world’s understanding of Nazi crimes, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the liberation’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the liberation’s significance for understanding of the crimes, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents the liberation as the moment the crimes acquired their permanent evidence — the record (Source 1), the doctrine behind it (Source 2), and its afterlives and limits (Source 3). Strong responses assess with own knowledge: the camps liberated east and west (Majdanek July 1944, Auschwitz January 1945, Belsen and Buchenwald April), the Nuremberg record and the survivor testimony that joined it, the forced confrontation of German civilians and the long history of German memory that followed, and the scholarly caution the set itself supplies — the western images’ partial picture of a machinery whose centre lay elsewhere. The syllabus phrase “stages and significance” should shape the verdict: the liberation belongs to significance — how the extermination became knowledge, judgement and memory. Omissions count only when tied to evaluation — e.g. the survivors in Source 1 appear as the camera’s subjects; their own testimony, which would dominate later understanding, is present only through the note’s naming of one of them. Balance of source evidence and own knowledge is required at the top. Grave material; precision and sobriety throughout.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 72 — Judgement at Nuremberg  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-nuremberg-trials',
    title: 'Judgement: the Nuremberg trial, 1945–46',
    themeKey: 'judgement',
    themeSentence:
      'At Nuremberg the victors put the surviving leadership of the Third Reich before a court of law — an imperfect, unprecedented reckoning that fixed the documentary record of the regime’s crimes for all time.',
    tags: ['p6'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the defendants’ dock at the International Military Tribunal, Nuremberg, 1945–46, where twenty-one surviving leaders of the Nazi regime were tried before judges of the four Allied powers.',
        image: {
          src: 'sources/nuremberg-dock.jpg',
          alt: 'The Nuremberg dock in 1945-46: Göring, Hess, Ribbentrop and Keitel in the front row under American military police guard',
          credit: 'Photograph, Nuremberg, 1945–46. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows two rows of men in the panelled dock, white-helmeted American military policemen standing at its rail. In the front row sit Göring, in a plain grey uniform stripped of insignia, arm draped over the dock’s edge; Hess, gaunt, beside him; Ribbentrop; and Keitel, still in a field-grey tunic. Behind them the second row leans and confers; one defendant reads a document, and headphone leads for the simultaneous translation trail along the benches.',
        note: 'Note: the tribunal sat from November 1945 to October 1946. Twelve defendants were sentenced to death, seven to imprisonment, three acquitted. Simultaneous translation in four languages was used for the first time at this trial.',
        footnotes: [
          'International Military Tribunal — the court established by the United States, Britain, the Soviet Union and France.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extracts from the opening statement of Robert H. Jackson, chief prosecutor for the United States, at the International Military Tribunal, Nuremberg, 21 November 1945.',
        body: 'The privilege of opening the first trial in history for crimes against the peace of the world imposes a grave responsibility. The wrongs which we seek to condemn and punish have been so calculated, so malignant, and so devastating, that civilisation cannot tolerate their being ignored, because it cannot survive their being repeated. That four great nations, flushed with victory and stung with injury, stay the hand of vengeance and voluntarily submit their captive enemies to the judgment of the law is one of the most significant tributes that Power has ever paid to Reason. In the prisoners’ dock sit twenty-odd broken men. It is hard now to perceive in these men as captives the power by which as Nazi leaders they once dominated much of the world and terrified most of it. We must never forget that the record on which we judge these defendants today is the record on which history will judge us tomorrow. To pass these defendants a poisoned chalice is to put it to our own lips as well. We must summon such detachment and intellectual integrity to our task that this trial will commend itself to posterity as fulfilling humanity’s aspirations to do justice. We will not ask you to convict these men on the testimony of their foes. There is no count in the indictment that cannot be proved by books and records. The Germans were always meticulous record keepers, and these defendants had their share of the Teutonic passion for thoroughness in putting things on paper.',
        footnotes: [
          'Crimes against the peace — the charge of planning and waging aggressive war, first prosecuted at Nuremberg.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the Nuremberg trials and their legacy written by an academic historian and published in 2020.',
        body: 'Nuremberg’s critics had a case, and stating it fairly is the condition of measuring the achievement. It was victors’ justice by definition: the court’s own powers sat among the judges; Soviet jurists condemned aggression while their state had invaded Poland from the east; the charge of crimes against peace was law made after the fact; and the selection of twenty-one men left the machinery’s thousands — and German society’s millions — juridically untouched, a gap the successor trials and the failed denazification only underlined, and the amnesties of the early Cold War soon widened. Yet the achievement stands, and it stands on Jackson’s wager. By resting the case on the regime’s own paper — thousands of captured documents, the Wannsee protocol and the Einsatzgruppen reports among them, read into an indestructible public record with the perpetrators present and represented by counsel — the tribunal converted atrocity into adjudicated fact. It heard the crime against the Jews named and proved, and its judgment made planners, ministers and field marshals answerable as criminals for acts of state — the end, in principle, of sovereign immunity for atrocity. The record outlasted every objection: historians mine it still; the deniers have broken on it for eighty years; and the law it improvised — crimes against humanity, individual responsibility, the invalidity of superior orders — became the foundation of every later tribunal, from Jerusalem to The Hague. An imperfect court fixed a perfect record; posterity, as Jackson hoped, has known the difference.',
        footnotes: [
          'Successor trials — the twelve further Nuremberg proceedings against doctors, judges, industrialists and the Einsatzgruppen.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Germany’s defeat and occupation in 1945; the four-power tribunal at Nuremberg; the surviving leadership — Göring foremost after the suicides of Hitler, Himmler and Goebbels — on trial for war crimes, crimes against peace and crimes against humanity)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Explains the message of the source (e.g. that the once all-powerful leadership sits stripped of rank and power, guarded prisoners answering to the law) by providing accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Identifies or provides a general comment about the message of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          'The context element requires placement at the IMT, 1945–46. The message element should be stated as a claim and supported from the source: the stripped uniforms, the dock rail and military police, the ordinary apparatus of a courtroom — headphones, documents — enclosing men who had ruled a continent. Any legitimate, evidenced reading is rewarded.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding what the Nuremberg trial achieved. Account for the differences between them.',
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
          'A deep similarity: both sources centre the same wager — judgement by record rather than vengeance, with posterity as the true audience; Source 3 explicitly measures the achievement by Jackson’s own standard and finds it met. The differences: Source 2 speaks in aspiration, at the trial’s opening, acknowledging the danger (“poisoned chalice”) but claiming the enterprise for Reason; Source 3 audits the aspiration with eighty years’ hindsight — victors’ justice, retroactive law, the untouched thousands, the amnesties — before affirming the record’s triumph. Accounting from origin: the prosecutor opening his own case, with every motive to dignify it and every gift to do so; an academic historian in 2020, free to state the critics’ case, writing after the record’s long career in courts and scholarship. Both similarities and differences are required for full comparison marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of the Nuremberg trial in the reckoning with Nazi crimes, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the trial’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the trial’s significance in the reckoning, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents the trial as power answering to law (Source 1), an aspiration self-consciously staged for posterity (Source 2), and an audited achievement (Source 3). Strong responses assess with own knowledge: the evidence base (the captured documents, the films of the camps, the testimony), the judgment and sentences, the successor trials of doctors, judges, Einsatzgruppen and industrialists, denazification’s failure and the 1950s amnesties, the later German trials (Ulm, Eichmann in Jerusalem, Frankfurt Auschwitz) that resumed the reckoning, and the Nuremberg principles’ afterlife in international law. The syllabus phrase “stages and significance” frames the verdict: candidates should judge how far a trial of twenty-one men could constitute a reckoning, and what the fixed record has meant against denial. Omissions earn marks only when tied to evaluation — e.g. no victim testifies in the set: the crime’s human evidence is present at Nuremberg mostly as paper, a choice (Jackson’s) with consequences candidates may weigh. Balance of source evidence and own knowledge is required at the top.',
      },
    ],
  },
];
