import type { SourceSet } from './types';

// Source sets 17–20.

export const SOURCE_SETS_5: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 17 — The Berlin Olympics, 1936  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-olympics',
    title: 'The Berlin Olympics, 1936',
    themeKey: 'olympics',
    themeSentence:
      'The 1936 Olympics displayed a disciplined, prosperous and peaceable “new Germany” to the world — a performance that required the regime briefly to hide what it was.',
    tags: ['p4'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the opening ceremony of the XI Olympic Games, Berlin, 1 August 1936. Hitler, accompanied by officials of the International Olympic Committee, crosses the stadium.',
        image: {
          src: 'sources/olympics-1936.jpg',
          alt: 'Hitler and IOC officials walk across the Olympic stadium before a vast crowd, Berlin, 1 August 1936',
          credit: 'Bundesarchiv, Bild 146-1976-033-17 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows Hitler in uniform walking at the head of a procession of dignitaries — frock-coated members of the International Olympic Committee wearing chains of office, and uniformed German officials — across the track of the new Olympic stadium. Behind them, the stands rise packed with a crowd of one hundred thousand; the monumental stone gate of the stadium, crowned with a clock tower, frames the scene. Guards line the route at attention.',
        note: 'Note: the German Reich spent lavishly on the Games — a 100,000-seat stadium, the first televised Olympics, and Leni Riefenstahl’s film Olympia. In the months before the Games, antisemitic signs were removed from Berlin’s streets and the persecution of Jewish Germans was publicly muted.',
        footnotes: [
          'International Olympic Committee (IOC) — the international body governing the Olympic Games.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a despatch by a foreign correspondent for an American newspaper, Berlin, August 1936, written during the Games.',
        body: 'The visitor who knows Berlin only from these two weeks will go home enchanted, and that is precisely the intention. The city is scrubbed and garlanded; the trains run; the young people are handsome, helpful and endlessly drilled; and the Games themselves are organised with a perfection no previous host has approached. The ugly placards that disfigured the streets last summer — “Jews not wanted here” — have vanished, though one may ask where they are stored. The Stürmer boxes stand empty at the corners. Our German hosts speak much of peace, and the visitor, applauding beside them as the doves rise over the stadium, finds it easy to believe them. Yet a correspondent who has lived here three years is entitled to observe that a regime which can switch off its hatreds for a fortnight, as one switches off a lamp, can switch them on again the day the last visitor’s train crosses the frontier — and, on the evidence of the barracks and aerodromes rising outside this festive city, is preparing for something other than peace.',
        footnotes: [
          'Der Stürmer — a violently antisemitic Nazi weekly, displayed in public showcases.',
          'Despatch — a report sent by a journalist from abroad.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of propaganda and foreign opinion in the Third Reich written by an academic historian and published in 2006.',
        body: 'The Games repaid every mark the regime spent on them. Foreign visitors — nearly four million ticket purchases, and press coverage in every capital — encountered a Germany that flatly contradicted the atrocity stories: orderly, prosperous, hospitable, and mad about sport rather than war. Boycott campaigns in the United States and Europe had collapsed; now their warnings looked hysterical. At home, the spectacle told Germans that the years of humiliation were over — the world had come to Berlin as guests of the Führer. The cost of the performance was paid by those it concealed: the pause in open persecution was tactical and temporary, Gypsy families were interned out of sight at Marzahn before the tourists arrived, and within weeks of the closing ceremony the antisemitic signs were back on the roads and the Four-Year Plan for war economy was signed. The Olympics were the regime’s masterpiece in a genre it had invented: the totalitarian charm offensive, staged for a world that wished to be reassured.',
        footnotes: [
          'Marzahn — a camp on the edge of Berlin where Sinti and Roma were interned from July 1936.',
          'Four-Year Plan — the September 1936 economic programme to prepare Germany for war within four years.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that the new Germany is a great, orderly and internationally respected power, with the Führer honoured at the centre of the world’s festival)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. Hitler walking at the head of the international dignitaries, the vast disciplined crowd, the monumental stadium architecture, the ceremonial staging of the whole scene)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: the composition places the Führer at the head of the world’s officials as host and equal; the packed stands and monumental architecture project power, order and popular enthusiasm; the occasion itself — Germany as host of the world — is the message. Full marks require specific reference to details of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the success of the Berlin Olympics as propaganda. In your answer, refer to the origin of each source.',
        marks: 6,
        key: [
          {
            rows: [
              { descriptor: 'Compares the perspectives of both sources, identifying similarities and differences supported by detailed, accurate and relevant evidence, with clear reference to the origin of each source', marks: '6' },
              { descriptor: 'Compares the perspectives, identifying similarities and differences with mostly accurate and relevant evidence and general reference to origin', marks: '5' },
              { descriptor: 'Compares the perspectives, identifying similarities or differences with some evidence from both sources and some reference to origin', marks: '4' },
              { descriptor: 'Describes the perspective of each source with some evidence; origin identified only', marks: '3' },
              { descriptor: 'Describes the perspective of one source, or outlines both with limited evidence', marks: '2' },
              { descriptor: 'Provides a general comment about the perspective of one or both sources with limited or no evidence', marks: '1' },
            ],
            subtotal: 6,
          },
        ],
        notes:
          'A strong similarity: both sources judge the Games a propaganda triumph and both see through it — the correspondent notes the switched-off hatreds and the rising barracks, the historian the tactical pause and the Four-Year Plan. The differences are of position and evidence: Source 2 writes from inside the performance, in the present tense, hedging predictions it cannot yet verify; Source 3 writes with the whole sequence known (Marzahn, the signs’ return, the war economy) and quantifies the success (visitor numbers, collapsed boycotts). Reference to origin is required by the question: a resident foreign journalist writing for an American readership during the Games, against an academic historian in 2006. Both similarities and differences are expected for the top descriptors.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of the Berlin Olympics to the Nazi regime’s standing at home and abroad, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            rows: [
              { descriptor: 'Assesses clearly the significance of the Games at home and abroad, organised around the theme, with detailed, accurate and relevant evidence from all three sources and own knowledge across the period, including omissions tied to an evaluation of the set’s insight', marks: '9–10' },
              { descriptor: 'Assesses the significance with accurate and relevant evidence from all three sources and own knowledge', marks: '7–8' },
              { descriptor: 'Explains the significance with reference to at least two sources and some accurate and relevant own knowledge', marks: '5–6' },
              { descriptor: 'Outlines the representation of the Games with reference to at least one source and some relevant evidence', marks: '3–4' },
              { descriptor: 'Identifies content from one or more sources and/or provides a general comment with limited evidence', marks: '1–2' },
            ],
          },
        ],
        notes:
          'Candidates must address both dimensions the question names — home and abroad — though not necessarily equally. Abroad: the collapse of boycott campaigns, the reassurance of foreign opinion, the prestige of hosting (Sources 1–3), extended with own knowledge (Riefenstahl’s Olympia, the diplomatic context of the re-militarised Rhineland months earlier). At home: the spectacle as proof that humiliation was over, the Führer as host of the world (Sources 1 and 3). The assessment must weigh the performance against its purpose and cost: the tactical pause in persecution, Marzahn, the Four-Year Plan signed weeks later — the Games as concealment of a regime arming and radicalising (Jesse Owens’ four gold medals, complicating the racial theatre in the world’s eyes, may be cited). Omissions earn marks only when tied to evaluation — e.g. no German Jewish voice appears, so the cost of the performance is reported but not heard. For the top band: balance of source evidence and own knowledge, and a defended verdict on significance. A source-by-source recount cannot reach the top bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 18 — The Nuremberg Laws, 1935  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-nuremberg-laws',
    title: 'The Nuremberg Laws, 1935',
    themeKey: 'nuremberg-laws',
    themeSentence:
      'The Nuremberg Laws translated racial ideology into citizenship law, sorting Germans by descent with bureaucratic precision and making exclusion a matter of administration.',
    tags: ['p6'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: An official explanatory chart, “Die Nürnberger Gesetze” (The Nuremberg Laws), issued by the Reich Health Office in 1935 to explain the racial classifications created by the new laws. Charts of this kind were displayed in offices and schools.',
        image: {
          src: 'sources/nuremberg-chart.jpg',
          alt: 'Official 1935 chart explaining the racial classifications of the Nuremberg Laws using rows of family-tree circles',
          credit: 'Reich Health Office chart, 1935. Public domain, via Wikimedia Commons',
        },
        body: 'The chart sets out, in columns headed “Deutschblütiger” (of German blood), “Mischling 2. Grades” (mixed race, second degree), “Mischling 1. Grades” (mixed race, first degree) and “Jude” (Jew), rows of small circles representing grandparents, parents and children — white for “German-blooded”, black for “Jewish” — with lines of descent between them. Beneath each family diagram, printed rules state whether marriage is “gestattet” (permitted), “verboten” (forbidden) or allowed “nur mit Genehmigung” (only with official approval), and what the children of each union are to be classified as. The bottom of the chart cites the legal foundations: the Reich Citizenship Law of 15 September 1935 and the Law for the Protection of German Blood and German Honour of the same date.',
        note: 'Note: under the laws, a person with three or four Jewish grandparents was defined as a Jew regardless of their own religion; the definition was ancestral, not religious. The Reich Citizenship Law reduced Jewish Germans from citizens to “subjects of the state”.',
        footnotes: [
          'Genehmigung — official approval or permission.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a letter written by a decorated Jewish German veteran of the First World War to the Reich President’s office, late 1935, protesting his family’s treatment under the new laws. Tens of thousands of Jewish Germans had served at the front; such letters received no meaningful reply.',
        body: 'I write not to beg but to ask a question I cannot answer for my children. I carried the King’s colours four years in France; I hold the Iron Cross, First Class, given me at Verdun where my brother lies. My grandfather kept his shop in this town under three Prussian kings. By the new law I learn that I am no longer a citizen of the state whose uniform I wore, and that my son, who is eleven and cannot yet spell Verdun, is forbidden ever to marry the daughter of my neighbour, with whose family we have shared a wall and a table for thirty years. The officials are courteous; they show me the chart on the office wall, with its little black and white circles, as one shows a railway timetable. I ask them, and I ask you: what have my children done? Which of those circles carried a rifle for Germany? I remain, in spite of everything and perhaps foolishly, a German who loves his country — and I no longer know whether my country recognises any such thing as what I am.',
        footnotes: [
          'Verdun — the great battle of 1916, in which German and French armies suffered some 700,000 casualties.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of Nazi racial law written by an academic historian and published in 2014.',
        body: 'The Nuremberg Laws are often read as the moment persecution became systematic; they are better read as the moment it became administrative. The laws themselves were short and vague — drafted in a weekend for the Party rally, to the irritation of the civil servants who then spent months on the implementing decrees. It was the decrees, and the charts that explained them, that did the real work: they converted “the Jew” of Party rhetoric into a legal category ascertainable from parish registers, so that exclusion could proceed by file and form rather than by boycott and club. Every later measure — the expropriations, the registration of 1938, ultimately the deportation lists — ran on this definitional machinery. Two further consequences deserve emphasis. The laws stabilised expectations precisely because they were law: many Jewish Germans, and many observers abroad, read them as the final, if bitter, settlement of their status — a fixed legal ground on which one could still stand, rather than what they proved to be, a platform for the next stage. And they enrolled the entire apparatus of ordinary government — registrars, genealogists, school officials, marriage bureaux — in the daily practice of racial sorting, habituating a bureaucracy to administer descent as routinely as it administered taxation.',
        footnotes: [
          'Implementing decrees — the detailed regulations of November 1935 that defined who counted as a Jew or Mischling.',
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
              { descriptor: 'Explains the purpose of the source with detailed reasons specific to it (e.g. to instruct officials and the public in applying the new racial classifications — who may marry whom, how children are classified — and thereby to make racial sorting an ordinary administrative routine), supported by evidence from the source', marks: '3' },
              { descriptor: 'Explains the purpose with some accurate and relevant support from the source', marks: '2' },
              { descriptor: 'Identifies a purpose in general terms', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'Purpose asks WHY the source was created. Generic answers (“propaganda”, “to inform”) are insufficient for full marks: the chart’s purpose is operational — issued by a state office to teach the application of the marriage and citizenship rules — and normalising, presenting racial classification in the neutral visual language of an official diagram. Supporting evidence might include the permitted/forbidden marriage rules, the classification of children, the citation of the laws, and the display of such charts in offices and schools.',
      },
      {
        letter: 'b',
        text: 'With reference to their origin and purpose, discuss the reliability of Sources 2 and 3 as evidence of the effects of the Nuremberg Laws.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. first-hand contemporary testimony of the laws’ human effect, written for an official audience)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly analysis based on the full documentary record)', marks: '1' },
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
          '“Discuss” requires strengths and limitations for each source, reasoned from origin and purpose as directed. Source 2: contemporary and personal, invaluable for the laws’ meaning as lived — the severed citizenship, the forbidden marriage, the chart shown “as one shows a railway timetable”; its purpose (a protest addressed to authority) shapes its rhetoric — the war service and patriotism are marshalled as argument — without diminishing its value as evidence of how assimilated Jewish veterans understood their position in 1935. Source 3: breadth, hindsight and the archival record, strong on machinery and consequences; but an interpretation with a thesis (persecution become “administrative”), and distant from experience. The two are complementary: the file and the man in the file. Candidates treat the sources in parallel; comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the impact of the Nuremberg Laws on German society. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the laws’ impact in all three sources', marks: '3' },
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
          'Theme first: the set represents the laws as machinery (Source 1), as lived catastrophe for the assimilated (Source 2), and as the administrative platform of everything that followed (Source 3). Strong responses test the extent with own knowledge across the period: the laws’ place in the staged radicalisation (after the 1933 exclusions, before Aryanisation and 1938), the enlistment of ordinary bureaucracy, the deceptive “stabilisation” some read into legal definition, and the definitional machinery’s terminal use in the deportations. The set’s silences belong in the evaluation: no perpetrator’s or bystander’s voice beyond the courteous officials of Source 2, and nothing on the laws’ reception by the non-Jewish majority (opinion reports suggest broad acceptance of “legal” discrimination after the disorderly violence of 1935) — omissions earn marks only when tied to what the set does show. For higher marks: balance of sources and own knowledge, theme-led structure, and an explicit verdict on extent.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 19 — Kristallnacht, November 1938  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-kristallnacht',
    title: 'Kristallnacht: the November pogrom, 1938',
    themeKey: 'kristallnacht',
    themeSentence:
      'The November pogrom of 1938 made violence against Jewish Germans open state policy, destroying in one night the fiction that persecution would stop at legal exclusion.',
    tags: ['p6'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of a wrecked Jewish-owned shop in Magdeburg, taken on the morning after the nationwide pogrom of 9–10 November 1938.',
        image: {
          src: 'sources/kristallnacht-magdeburg.jpg',
          alt: 'Pedestrians pass the smashed windows and wrecked frontage of a Jewish-owned shop in Magdeburg after the November pogrom, 1938',
          credit: 'Bundesarchiv, Bild 146-1970-083-42 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows the frontage of a shop — the owners’ name, “Hermanns & Froitzheim”, still legible on the fascia — with every display window smashed. Broken glass, wrecked fittings and tumbled stock lie heaped behind the empty frames and across the pavement. Pedestrians in coats and hats walk past the destruction in the morning light; a young woman in the foreground is smiling towards the camera, while a man beside her looks into the wrecked window as he passes.',
        note: 'Note: in the pogrom of 9–10 November 1938, ordered by the Nazi leadership after the shooting of a German diplomat in Paris, over 7,500 Jewish-owned businesses were wrecked, more than 250 synagogues burned, at least 91 Jews were killed, and some 30,000 Jewish men were arrested and sent to concentration camps. The regime then fined the Jewish community one billion marks for the damage.',
        footnotes: [
          'Fascia — the signboard above a shop window.',
          'Pogrom — an organised, violent attack on a minority population.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a despatch by the American consul in Leipzig to the United States embassy in Berlin, mid-November 1938, reporting on the pogrom in his district.',
        body: 'The accounts I must transmit have been verified by members of this office as eyewitnesses. At three in the morning of 10 November the systematic wrecking began, carried out by squads in civilian clothes whose discipline and simultaneity leave no doubt of central direction. The shops of Jewish proprietors were broken open and their contents hurled into the streets; the synagogue was fired while the brigades stood by to protect adjoining “Aryan” property; and an eighteen-year-old boy was thrown from a third-storey window into the street with the wreckage of his family’s furniture. Crowds gathered to watch. Some spectators applauded; the greater part looked on in what I can only describe as benumbed silence. In the days since, thousands of Jewish men of this district have been taken to the camp at Buchenwald, their families without news of them. Having witnessed these events, this office is compelled to report that the pogrom was not an outburst of popular fury, as the controlled press insists, but an operation of state, executed against a defenceless population with a thoroughness that shames the word civilisation.',
        footnotes: [
          'Consul — a government official representing his country’s citizens and interests in a foreign city.',
          'Buchenwald — a concentration camp near Weimar.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the persecution of the Jews of Germany written by an academic historian and published in 2018.',
        body: 'November 1938 closed the era in which German Jews could believe that law, however vicious, set the boundaries of their persecution. The pogrom’s significance lay less in the smashed glass than in what the smashing announced: that the state would now organise violence directly, publicly and with impunity — and that the population, whatever its private distaste, would not stop it. The opinion reports collected by the regime itself registered widespread disapproval, but it was disapproval of method, of disorder and waste, almost never of the goal; and it produced no consequences. For the perpetrators the lesson was operational: open riot proved inefficient and unpopular, and the regime concluded that expropriation and removal were better handled bureaucratically — by decree, fine and forced emigration, and later by timetable. For the victims the lesson was terminal: emigration applications flooded every consulate in Germany within days. The night of broken glass was thus both an ending and a rehearsal — the last pogrom of the old kind on German streets, and the first act of destruction managed by the state that would manage all the rest.',
        footnotes: [
          'Expropriation — the confiscation of property.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the pogrom of 9–10 November 1938, its pretext in the Paris shooting, the nationwide destruction of Jewish businesses and synagogues, the arrests that followed)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Explains the message of the source (e.g. that the pogrom’s destruction was public and unconcealed, and that ordinary Germans walked past — or smiled at — the ruin of their neighbours’ livelihoods) by providing accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Identifies or provides a general comment about the message of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          'The context element requires placement on the morning after the November pogrom. The message element concerns what the photograph conveys: the openness of the destruction (a named shop on a public street in daylight) and the range of bystander response caught by the camera — the passing traffic, the curious glance, the smile. Candidates who address the bystanders as part of the image’s meaning should be rewarded; any legitimate, evidenced reading is acceptable.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the German public’s response to the pogrom. Account for the differences between them.',
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
          'A similarity: both sources reject the regime’s claim of spontaneous popular fury and record a public that watched rather than participated — the consul’s applauding few and “benumbed silence” of the majority, the historian’s disapproval “of method… almost never of the goal”. The difference is depth of interpretation: Source 2 reports what could be seen in one district within days, cautious about meaning; Source 3, with the regime’s own opinion reports and eighty years of scholarship, converts observation into judgement — disapproval without consequences, and the pogrom as rehearsal. Accounting reasons from origin: a serving consular official verifying eyewitness testimony for his government, constrained to report rather than theorise; an academic historian free to synthesise and argue. Both similarities and differences are required for full comparison marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of Kristallnacht in the development of Nazi persecution of the Jews, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the pogrom’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the significance of the pogrom in the development of persecution, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents the pogrom as open state violence (Sources 1 and 2), as the end of “legal” persecution’s reassurances and the turn to bureaucratic destruction (Source 3). Strong responses place it in the staged sequence with own knowledge: the exclusions of 1933 and the Nuremberg Laws before it; the billion-mark fine, the forced Aryanisation decrees, the driving of Jews from economic life and schools in the pogrom’s immediate wake; the flood of emigration against closing doors (Évian); and the wartime radicalisation beyond. The interpretive point in Source 3 — violence found “inefficient”, administration preferred — should be engaged, not merely quoted. Omissions earn marks only when tied to evaluation: e.g. no Jewish voice appears in the set, so the victims’ experience is present only as wreckage and statistics; candidates may connect this to what the sources can and cannot show. For the top marks: balance of source evidence and own knowledge across the period, and a defended judgement of significance.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 20 — The churches and the Nazi state  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-church',
    title: 'The churches and the Nazi state',
    themeKey: 'church',
    themeSentence:
      'The regime sought to coordinate Christianity as it coordinated everything else — and met, in the churches, the most stubborn institutional resistance it ever faced at home, a resistance real yet sharply limited.',
    tags: ['p4', 'p5'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph taken outside a Berlin church during the Protestant church elections of July 1933. SA men and members of the “German Christians” movement campaign at the church door.',
        image: {
          src: 'sources/kirchenwahl-1933.jpg',
          alt: 'SA men and a banner reading "Wählt Liste 1 Deutsche Christen" outside a Berlin church during the church elections of July 1933',
          credit: 'Bundesarchiv, Bild 183-1985-0109-502 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows the brick doorway of a church, with a queue of parishioners — men in suits and hats, women in Sunday dress — waiting to enter and vote. Beside the door, uniformed SA men stand on the steps, and a large banner strung along the wall reads “Wählt Liste 1 — Deutsche Christen” (“Vote List 1 — German Christians”), flanked on one side by a swastika and on the other by a cross. In the foreground a young man in SA uniform carries a sandwich-board bearing the same slogan and a swastika; a Hitler Youth boy stands beside the queue with pamphlets.',
        note: 'Note: the “German Christians” were a Nazi-aligned movement within the Protestant church which sought to fuse Christianity with National Socialism, expel “Jewish influence” from Christian teaching, and unite the regional churches under a single Reich Bishop. With open state backing they won about two-thirds of the vote in the July 1933 church elections.',
        footnotes: [
          'Sandwich-board — advertising boards hung over the shoulders, worn front and back.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the Theological Declaration of Barmen, adopted in May 1934 by the synod of the “Confessing Church” — the Protestant opposition movement formed against the German Christians and state interference in the church.',
        body: 'We reject the false doctrine that the Church could and should acknowledge, as a source of its proclamation, apart from and besides the one Word of God, still other events and powers, figures and truths, as God’s revelation. We reject the false doctrine that there could be areas of our life in which we would not belong to Jesus Christ, but to other lords — areas in which we would not need justification and sanctification through him. We reject the false doctrine that the Church could have permission to hand over the form of its message and order to whatever it itself might wish, or to changes in prevailing ideological and political convictions. We reject the false doctrine that the State, over and beyond its special commission, should and could become the single and totalitarian order of human life, thus fulfilling the Church’s vocation as well.',
        footnotes: [
          'Synod — a formal assembly of the church.',
          'Proclamation — the church’s preaching and teaching.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of religion in the Third Reich written by an academic historian and published in 2001.',
        body: 'Neither of the great confessions was coordinated as the unions or the parties were, and the failure tells us where the dictatorship’s limits lay. The German Christians’ capture of the Protestant synods in 1933 collapsed within two years into farce: the Reich Bishop was ignored, the Confessing Church ordained its own pastors, and by 1937 the regime had swung from capture to attrition — Niemöller in a camp as Hitler’s “personal prisoner”, seminaries closed, church presses muzzled. Rome fared little better: the Concordat bought institutional survival at the price of political silence, was violated before its ink dried, and produced in 1937 the encyclical “With Burning Concern”, smuggled to pulpits and read across Catholic Germany — the sharpest public criticism the regime ever heard from an institution it could not simply dissolve. Yet the churches’ resistance must be measured by what it defended: doctrine, autonomy, the pulpit and the pastorate. With rare and honourable exceptions — Galen against the murder of the sick being the greatest — it was not a resistance on behalf of the regime’s other victims, and the silence of both confessions at the persecution of the Jews remains the shadow across every account of their courage. The churches proved the one thing the regime could not coordinate; they did not prove to be its opposition.',
        footnotes: [
          'Concordat — the July 1933 treaty between the Reich and the Vatican regulating the Catholic Church’s position in Germany.',
          'Galen — Clemens August Graf von Galen, Bishop of Münster, whose 1941 sermons attacked the “euthanasia” killings.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Explain how Source 1 reflects the circumstances of Germany in 1933.',
        marks: 3,
        key: [
          {
            rows: [
              { descriptor: 'Explains how the source reflects the circumstances of 1933 by connecting specific details of the source (the SA presence at a church door, the swastika beside the cross, the German Christians’ campaign, the Hitler Youth pamphleteer) to accurate and specific contextual details (the Gleichschaltung drive of 1933 extending into church life, state backing for the German Christians, the fusion of Party symbols with Christian ones)', marks: '3' },
              { descriptor: 'Explains the connection between the source and its circumstances with some accurate and relevant details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Explain” requires the why and/or how: candidates should connect the photograph’s details to the coordination drive of 1933 — the attempt to capture the Protestant church from within through the German Christians, campaigned for by the Party’s own formations at the church door, with the swastika placed beside the cross. Only basic contextual placement is required; no knowledge of the later church struggle is expected in (a).',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the relationship between the Christian churches and the Nazi state.',
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
          'Source 2 is the Confessing Church’s foundational protest in its own words: direct evidence of what the church opposition asserted (the church’s independence from “other lords” and rejection of the totalitarian claim) and, just as usefully, of its limits — the declaration defends doctrine and church order, and does not mention the regime by name, the Jews, or the camps. Its origin (a synod document, theological in purpose, adopted under a dictatorship) explains both its power and its caution. Source 3 supplies the whole arc — capture, attrition, Concordat, encyclical, Galen — and the critical judgement (resistance real, but for the church’s own domain), with scholarly hindsight; as interpretation, its verdicts invite testing rather than transcription. Together the sources let a historian hear the opposition and measure it. Candidates treat the sources in parallel; comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Analyse how Sources 1, 2 and 3 collectively represent the Nazi attempt to control the Christian churches. In your answer, identify the key idea that links the sources.',
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
              { descriptor: 'Analyses clearly how the sources collectively represent the attempt to control the churches and its outcome, with detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The key linking idea should be stated early — e.g. that the regime tried to absorb the churches as it absorbed every other institution, succeeded halfway, and provoked the most durable institutional dissent of the dictatorship — a dissent that defended the church’s own ground rather than the regime’s victims. Analysis by development, not by source: the capture attempt of 1933 (Source 1, extended by the Reich Bishop and state backing), the doctrinal revolt (Source 2, extended by the Pastors’ Emergency League and Niemöller’s arrest), and the long war of attrition with its limits (Source 3, extended by the Concordat’s violations, the 1937 encyclical, Galen 1941). The evaluated omission is built into Source 3’s final sentences and should be engaged: the churches’ silence over the persecution of the Jews. Higher marks require balance of source evidence and own knowledge; a source-by-source walkthrough caps in the middle bands.',
      },
    ],
  },
];
