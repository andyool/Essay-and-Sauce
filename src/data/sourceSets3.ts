import type { SourceSet } from './types';

// Source sets 9–12.

export const SOURCE_SETS_3: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 9 — Persecution: from boycott to genocide  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-persecution',
    title: 'Persecution: from boycott to genocide',
    themeKey: 'persecution',
    themeSentence:
      'Nazi persecution of Jewish Germans advanced in stages — from public humiliation and legal exclusion to expropriation, violence and, under the cover of war, systematic murder.',
    tags: ['p6'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph taken outside a Jewish-owned clothing shop in Berlin on 1 April 1933, the day of the national boycott of Jewish businesses organised by the Nazi Party.',
        image: {
          src: 'sources/boycott-1933.jpg',
          alt: 'SA men fixing a boycott placard reading "Deutsche! Wehrt Euch! Kauft nicht bei Juden!" to the window of a Jewish-owned shop, Berlin, 1 April 1933',
          credit: 'Bundesarchiv, Bild 102-14468 / Georg Pahl / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows two uniformed SA men, one wearing a swastika armband, fixing a printed placard to the display window of a clothing shop; dressed mannequins are visible behind the glass. One SA man presses the placard flat while the other stands facing the street. At the left of the frame a well-dressed woman with a handbag watches, her expression guarded; other passers-by move along the footpath behind her. Smaller printed notices are already pasted to the top of the window.',
        note: 'Note: the placard reads “Deutsche! Wehrt Euch! Kauft nicht bei Juden!” (“Germans! Defend yourselves! Do not buy from Jews!”).',
        footnotes: [
          'SA — the Sturmabteilung or stormtroopers, the Nazi Party’s paramilitary organisation.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the private diary of a Jewish schoolteacher in Dresden, 10 November 1938, the morning after the nationwide pogrom later known as Kristallnacht. The diary was hidden and survived the war.',
        body: 'The synagogue is still burning. I walked past it at seven because I could not believe H.’s telephone call, and there it stood, open to the sky, and the fire brigade in attendance — to protect the neighbouring buildings, a fireman told the crowd, quite matter-of-fact. Glass everywhere on the Prager Strasse; one walks on it as on gravel. The K.s’ shop is emptied and its till torn out. They have taken Herr K. and the Rosenthals’ son and old Dr. B., who is seventy-one, no one will say where. The neighbours watched from their windows. Frau M., who has greeted me for eleven years, drew her curtain. I do not write this in anger — I no longer have the strength for anger. Five years ago they dismissed me from my school and I said, this is the worst, it must now stop, we are after all in Germany. I have said it after each new law and each new sign on each new door. I will not say it again. Tomorrow I go to the consulate queue with our papers. What cannot be said aloud I write here: this country wishes us gone, and if we cannot go, I am afraid of what it will wish next.',
        footnotes: [
          'Kristallnacht — the pogrom of 9–10 November 1938, in which synagogues were burned, Jewish businesses destroyed, and some 30,000 Jewish men arrested.',
          'Consulate — the office of a foreign government where visas for emigration were sought.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the origins and course of the Holocaust written by an academic historian and published in 2015.',
        body: 'The road from the boycott placards of 1933 to the death camps did not run straight, and no single order laid it out in advance. Persecution advanced by stages, each preparing the next without dictating it: the exclusions of 1933, which drove Jews from the professions; the Nuremberg Laws of 1935, which stripped citizenship and criminalised intermarriage; the expropriations of 1937–38, which stripped livelihoods; the pogrom of November 1938, which announced that violence was now policy; then, under the cover of war, ghettoisation in the conquered east, the shooting operations of 1941, and the industrialised murder to which the regime’s planners gave bureaucratic form at Wannsee in January 1942. At each stage, initiative flowed both ways — from the centre’s ideological fixation and from functionaries and party radicals below who pressed exclusion further and found their zeal rewarded. To read the end back into the beginning is to miss what the sequence teaches: that a state can radicalise step by step, testing at each threshold what its people will tolerate, and that by the time the threshold was murder, the tolerances had long since been established.',
        footnotes: [
          'Wannsee — the Berlin villa where officials met in January 1942 to coordinate the deportation and murder of European Jews.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the boycott of 1 April 1933, weeks after the Nazi assumption of power; SA street power; the beginning of state-organised antisemitic action; the regime’s claim of Jewish “atrocity propaganda” abroad as pretext)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph in the first weeks of Nazi rule: the boycott of 1 April 1933 as the first nationwide, state-organised act of antisemitic persecution, carried out by the SA on the streets. Details of the source (the uniforms, the placards, the painted star, the watching passers-by) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'With reference to their origin and purpose, discuss the reliability of Sources 2 and 3 as evidence of the experiences of Jewish Germans under Nazi rule.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. a private, contemporary eyewitness record with no audience to persuade)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly synthesis based on the full documentary record)', marks: '1' },
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
          '“Discuss” requires strengths and limitations for each source, reasoned from origin and purpose as the question directs. Source 2 is a private diary written within hours of the events, hidden rather than published: its purpose is personal record, not persuasion, which strengthens its testimony on what was seen, felt and feared; its limits are those of any single witness — one city, one household, one vantage point, written in shock. Source 3 commands the whole record and the sequence of stages, but is an interpretation, distant from experience, and its argumentative purpose (against reading “the end back into the beginning”) shapes its emphasis. Candidates treat the sources in parallel; comparison is not required for full marks. Reasoning must go beyond “biased/unbiased” to the itemised origin factors.',
      },
      {
        letter: 'c',
        text: 'Analyse the impact of Nazi antisemitic policy across the period 1933 to 1945, as represented in the three sources. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of impacts',
            rows: [
              { descriptor: 'Identifies the impacts of antisemitic policy as represented in all three sources', marks: '3' },
              { descriptor: 'Identifies the impacts in two of the sources', marks: '2' },
              { descriptor: 'Identifies the impacts in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Analysis',
            rows: [
              { descriptor: 'Analyses clearly the impact of antisemitic policy across the whole period — social, legal, economic and, ultimately, physical destruction — using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
              { descriptor: 'Analyses the impact using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
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
          'The phrase “across the period” signals that consequences must be traced beyond the moments the sources capture, while “as represented in the three sources” keeps the sources central. The set marks three points on the trajectory: public humiliation and economic attack at the outset (Source 1), the cumulative destruction of livelihood, community and safety by 1938 through the eyes of one who lived it (Source 2), and the full staged sequence to genocide (Source 3). Own knowledge for the higher marks: the 1933 professional exclusions, the Nuremberg Laws (1935), Aryanisation, emigration (about half of Germany’s Jewish population had fled by 1939) and its closing doors, deportation, the Einsatzgruppen shootings, and the camps — with the impact on other persecuted minorities (Sinti and Roma, people with disabilities) available as evaluated omission: the set represents the Jewish catastrophe but not the regime’s wider programme of exterminating those it defined as outside the Volksgemeinschaft. Omissions earn marks only when tied to an evaluation of the set’s insight. Higher marks require balance of source evidence and own knowledge across the whole period; responses confined to 1933–38 cannot address the question’s full scope.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 10 — Women in the Nazi state  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-women',
    title: 'Women in the Nazi state',
    themeKey: 'women',
    themeSentence:
      'Nazi ideology exalted the “racially fit” woman as mother of the nation while excluding her from public life — an ideal that collided with the economy’s growing need for her labour.',
    tags: ['p4'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of a ceremony awarding the Cross of Honour of the German Mother (“Mother’s Cross”), Berlin, May 1943.',
        image: {
          src: 'sources/mothers-cross.jpg',
          alt: 'A uniformed official presents the Mother\'s Cross to a woman while League of German Girls members with flowers look on, 1943',
          credit: 'Bundesarchiv, Bild 183-J06142 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a Party official in uniform fastening the Mother’s Cross, on its ribbon, around the neck of a middle-aged woman in dark clothes. The woman holds a bunch of flowers and a certificate; her face is worn and unsmiling. Beside her stand two teenage girls in the white blouses and neckerchiefs of the League of German Girls (BDM), one bearing more flowers for the next recipient; other mothers wait seated in the rows behind.',
        note: 'Note: the Cross of Honour of the German Mother was instituted in December 1938 and awarded in bronze for four or five children, silver for six or seven, and gold for eight or more. Members of the Hitler Youth were instructed to salute wearers of the gold cross. The League of German Girls (Bund Deutscher Mädel) was the girls’ wing of the Hitler Youth.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a speech by the Reich Women’s Leader, head of the Nazi women’s organisation, to a congress of the NS-Frauenschaft, Nuremberg, 1936.',
        body: 'They ask abroad, and a few tired voices ask at home: what has National Socialism given to the German woman? It has given her back her honour. The liberal age flattered you with the word emancipation, and what did it deliver? The right to stand at a lathe or behind a typewriter for a wage a man refused, the right to imitate men in dress and manner, the right to remain childless in a nation bleeding from a lost war. We say: the battlefield of the woman is the cradle, and it is no lesser field than the man’s. Every child she bears is a battle won for the life of her people. The German mother needs no seat in a parliament; her parliament is the family table, and her vote is cast in the health of her children. We do not despise the woman who must work — we honour her — but we will order the nation so that no mother must choose between her wage and her child. This is not the taking of rights; it is the end of a great deception.',
        footnotes: [
          'Emancipation — the movement for women’s legal and political equality.',
          'Lathe — a factory machine tool.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of women in the Third Reich written by an academic historian and published in 2001.',
        body: 'No area of Nazi social policy contradicted itself so thoroughly. The ideology was unambiguous: dismissal of married women doctors and civil servants, marriage loans repayable in children, the Mother’s Cross graded bronze to gold like a campaign medal, and a girls’ education redesigned around the kitchen and the nursery. The economy was equally unambiguous, and it disagreed. Rearmament devoured labour; by 1939 there were more German women in employment than in 1933, and the war would draw millions more into fields, factories and offices — the regime exhorting the German woman homeward with one voice while conscripting her labour with another. Nor was there one experience of “the German woman”. The peasant’s wife worked as she always had; the professional woman lost a career; the “child-rich” mother received medals and allowances. And the honours themselves were racially fenced: the same state that decorated the fertile “Aryan” mother sterilised some 400,000 Germans it judged hereditarily unfit and denied the very name of mother to Jewish, Sinti and Roma women. The pedestal, like the community it served, was built on exclusion.',
        footnotes: [
          'Mother’s Cross — the Cross of Honour of the German Mother, awarded from 1939 for four or more children.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Identify the message and explain the purpose of Source 1.',
        marks: 4,
        key: [
          {
            rows: [
              { descriptor: 'Correctly identifies the message of the source (e.g. that motherhood is a service to the nation which the state honours as it honours a soldier’s valour)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains the purpose of the source with detailed reasons specific to it (e.g. to glorify the maternal ideal and encourage childbearing, to present the Party as the grateful guardian of family and nation, and — in 1943 — to sustain the cult of motherhood as the war consumed Germany’s sons), supported by details from the source', marks: '3' },
              { descriptor: 'Explains the purpose with some accurate and relevant support from the source', marks: '2' },
              { descriptor: 'Identifies a purpose in general terms', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message is a quick identification; the marks sit in the purpose explanation. Generic purposes (“propaganda”, “to persuade”) are insufficient for full marks: candidates should tie the purpose to the photograph’s specific staging — the military-style decoration ceremony for childbearing, the uniformed official as the state’s representative, the BDM girls positioned as the next generation of mothers, the press release of the image — and to the regime’s pronatalist aims and wartime needs.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the role of women in Nazi Germany. In your answer, refer to the origin of each source.',
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
          'Compare includes contrast. A similarity: both sources agree that Nazi ideology assigned women to motherhood and home and treated this as a matter of national importance. The differences are of judgement and scope: Source 2 presents the maternal role as restored honour and freely embraced, denying any loss of rights; Source 3 presents the same policies as exclusion, riddled with contradiction (the economy pulling women into work) and racially fenced (the pedestal reserved for the “fit”). Reference to origin is required by the question: a Nazi functionary addressing the Party faithful in 1936 with a defensive, persuasive purpose, against a historian in 2001 weighing outcomes across class, race and time. Both similarities and differences are expected for the top descriptors.',
      },
      {
        letter: 'c',
        text: 'Assess the impact of Nazi ideology on the lives of German women, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of impacts',
            rows: [
              { descriptor: 'Identifies the impacts of Nazi ideology on women as represented in all three sources', marks: '3' },
              { descriptor: 'Identifies the impacts in two of the sources', marks: '2' },
              { descriptor: 'Identifies the impacts in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the impact of Nazi ideology on women’s lives, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the ideal (Sources 1 and 2) against the lived contradictions (Source 3). Strong responses organise by impact rather than by source: the pronatalist apparatus (marriage loans from 1933, Mother’s Cross, Lebensborn maternity homes), exclusion from professions and higher education quotas, the redesign of girls’ schooling and the BDM, then the counter-current of rearmament and war work, and the racial fence around the ideal (sterilisation, persecution of Jewish and Sinti and Roma women). The set contains no woman’s own voice from outside the Party — a telling omission if, and only if, tied to evaluation (the set shows women as addressed and analysed, not as speaking). Candidates may legitimately conclude the impact was profound but uneven — varying by class, race and decade — and should defend a verdict. Balance of source evidence and own knowledge is required for the top marks; a source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 11 — The Stresemann era  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-stresemann',
    title: 'The Stresemann era: recovery or deceptive stability?',
    themeKey: 'stresemann',
    themeSentence:
      'Between 1924 and 1929 the Republic achieved real stabilisation and international rehabilitation, yet its recovery rested on borrowed money, fragile coalitions and unreconciled enemies.',
    tags: ['p2'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph taken at Locarno, Switzerland, October 1925, during the negotiation of the Locarno Treaties. From left: Gustav Stresemann (Germany), Austen Chamberlain (Britain) and Aristide Briand (France), the foreign ministers of the three powers.',
        image: {
          src: 'sources/locarno-1925.jpg',
          alt: 'Stresemann, Chamberlain and Briand seated together at a small table during the Locarno conference, 1925',
          credit: 'Bundesarchiv, Bild 183-R03618 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows the three foreign ministers seated close together around a small round table in a hotel room, posed for the camera. Stresemann sits at ease with his legs crossed; Chamberlain, monocle in eye, sits between the German and French ministers; Briand rests his hand on the table beside a tray of cigarettes. Six years after Versailles, the image of a German minister seated as an equal beside the victors of the war was itself the news.',
        note: 'Note: at Locarno Germany freely accepted its western borders with France and Belgium, easing relations with both powers. Germany was admitted to the League of Nations in September 1926, and Stresemann, Briand and Chamberlain each received the Nobel Peace Prize for the settlement.',
        footnotes: [
          'Monocle — a single eyeglass.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a speech by Gustav Stresemann, German Foreign Minister 1923–1929 and formerly Chancellor during the stabilisation of 1923, to the Reichstag, defending his foreign policy, early 1929. Stresemann died in October 1929.',
        body: 'Honourable members, I am told from the right of this house that my policy is one of surrender — that I have gone from conference to conference collecting humiliations. Let us instead count what has been collected. The Ruhr is free of foreign soldiers. The currency your constituents carry is worth the same on Friday as on Monday. The reparations question, which in 1923 meant bayonets in Essen, is today negotiated by bankers around a table at which Germany sits as an equal. We entered the League of Nations not as a defendant enters a courtroom but as a great power takes its seat. I do not claim we have reached the summit; I claim we are on the ladder, and that there is no other. Those who would have us leap from it in the name of national honour should say plainly onto what rocks they propose we leap. Understanding among peoples is not weakness; it is the one policy the last decade has not already tried and ruined.',
        footnotes: [
          'Essen — the great industrial city of the Ruhr, occupied by French and Belgian troops in 1923.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Weimar Republic written by an academic historian and published in 2010.',
        body: 'The label “golden years” is not simply wrong. The currency held; production regained and passed its pre-war level; Berlin blazed with a culture the world still studies; and Stresemann’s diplomacy took Germany from occupied debtor to Council member of the League inside four years. But gold is what the era’s foundations were not made of. Prosperity floated on short-term American credit that could be — and in 1929 was — recalled by telegram. Unemployment never fell below a million and a quarter even at the peak; the farms were in depression from 1927; and the “stable” politics of the era consumed seven cabinets in six years, none commanding a reliable majority. Most tellingly, the Republic’s second president, elected in 1925, was a monarchist field marshal, and the parties that accepted the Republic without reservation never again won a majority between them after 1920. Stability there was; but it was a lodger’s stability, dependent on the world economy’s good behaviour and on enemies who had agreed to wait, not to surrender.',
        footnotes: [
          'Monarchist field marshal — Paul von Hindenburg, wartime commander, elected Reich President in 1925.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Explain how Source 1 reflects the changed position of Germany in Europe by 1925.',
        marks: 3,
        key: [
          {
            rows: [
              { descriptor: 'Explains how the source reflects Germany’s changed position by connecting specific details of the photograph (the German foreign minister posed at ease and as an equal beside the British and French ministers, the informal negotiating table) to accurate and specific contextual details (the isolation and occupation of 1923, the Dawes Plan, the Locarno settlement and the path to League membership)', marks: '3' },
              { descriptor: 'Explains the connection between the source and Germany’s changed position with some accurate and relevant details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Explain” requires the how and/or why. The photograph’s force lies in its ordinariness: two years after French troops occupied the Ruhr, the German foreign minister sits smoking with the victors as a colleague. Candidates should connect the staging — equality at the table, the relaxed poses, the very publication of the image — to the recovery of Germany’s international standing between 1923 and 1925 (the end of passive resistance, the Dawes Plan, Locarno). Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the recovery of Germany in the years 1924 to 1929. Account for the differences between them.',
        marks: 7,
        key: [
          {
            heading: 'Comparison',
            rows: [
              { descriptor: 'Compares the perspectives of both sources, identifying similarities and differences supported by detailed, accurate and relevant evidence from both sources', marks: '4' },
              { descriptor: 'Compares the perspectives, identifying similarities and differences with some evidence from both sources', marks: '3' },
              { descriptor: 'Identifies similarities or differences with some evidence', marks: '2' },
              { descriptor: 'Identifies a similarity or difference with limited evidence', marks: '1' },
            ],
            subtotal: 4,
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
          'A similarity: both sources acknowledge genuine achievements — the stabilised currency, the freed Ruhr, League membership. The differences: Source 2 presents the recovery as sound policy vindicated, the “only ladder” with the summit still ahead; Source 3 judges the same recovery structurally fragile — borrowed prosperity, chronic unemployment, unstable cabinets, unreconciled elites. Accounting must reason from origin: a serving foreign minister in early 1929, answering nationalist attacks in the Reichstag, with every motive to present his life’s policy favourably and no knowledge of the crash months away; a historian in 2010 who knows what the telegram from Wall Street brought, writing to analyse rather than persuade. The origin factors — author, motive, time, place, purpose — are the checklist. Both elements of the question must be addressed for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the stability of the Weimar Republic between 1924 and 1929. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the Republic’s stability in all three sources', marks: '3' },
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
          'Theme first: the set itself stages the debate — international rehabilitation performed for the cameras (Source 1), the statesman’s defence (Source 2), the historian’s “lodger’s stability” (Source 3). Strong responses test the representations with own knowledge: the Dawes Plan and American credit, the 1928 election (Nazi vote 2.6 per cent — evidence for stability), Hindenburg’s election in 1925, the fragility of coalitions, agricultural depression, and the speed of unravelling after October 1929 as retrospective evidence about the foundations. Omissions earn marks only when tied to evaluation — e.g. the set is elite and political throughout: no worker, farmer or ordinary voter appears, so the era’s social experience of “stability” goes untested by the set. An explicit verdict on extent (e.g. the sources together represent the era’s stability as real but conditional — and largely accurately) should be defended. Balance of sources and own knowledge is required for the top marks.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 12 — Defeat and revolution, 1918–1919  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-end-of-war',
    title: 'Defeat and revolution, 1918–1919',
    themeKey: 'end-of-war',
    themeSentence:
      'Germany ended the First World War militarily beaten, materially exhausted and politically overturned — and immediately began to argue about who was to blame.',
    tags: ['p1'],
    era: 'early',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A nationalist propaganda postcard circulated in Germany and Austria, around 1919, depicting the “stab-in-the-back” legend.',
        image: {
          src: 'sources/stab-in-the-back.jpg',
          alt: 'Antisemitic 1919 postcard showing a German soldier in a trench being stabbed from behind by a caricatured figure — the "stab-in-the-back" legend',
          credit: 'Postcard, c. 1919. Public domain, via Wikimedia Commons',
        },
        body: 'The drawing shows a German soldier in a steel helmet lying forward on the parapet of a trench, rifle in hand, facing the enemy beneath a black storm cloud. Behind him, rising out of the landscape at his back, looms a grinning figure who drives a dagger down between the soldier’s shoulders. The attacker is drawn as a crude antisemitic caricature and is marked with a Star of David: the postcard blames “the Jew” for the army’s defeat. The soldier does not see the blow coming.',
        note: 'Note: this postcard shows how the “stab-in-the-back” legend was antisemitic from its beginning — blame for the defeat was directed at Jews, socialists and republican politicians, the supposed “enemies within”. The legend was false: the army’s own Supreme Command had told the Kaiser in late September 1918 that the war was lost and demanded that an armistice be sought. The caricature is reproduced here as historical evidence of the propaganda Germans encountered after 1918.',
        footnotes: [
          'Armistice — the agreement of 11 November 1918 that ended the fighting.',
          'Caricature — a deliberately distorted, mocking depiction.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a letter written by a demobilised German soldier to his brother, December 1918, weeks after returning from the Western Front to Berlin.',
        body: 'You ask what it is like at home. I hardly know where to begin. We marched back in good order — they even hung garlands on us at the station, and a man on a cart shouted that we were unbeaten heroes, which the fellows took in silence, because whatever we were in March, by August we were beaten and every man at the front knew it. Mother is grey and thin; four winters of turnips will do that, and the influenza took the Webers’ two girls in a single week. The Kaiser is gone — think of it — and nobody lifted a finger for him. There are soldiers’ councils in the barracks and red flags on the palace, and last week there was shooting by the stables, Germans on Germans, which I did not fight four years to see. I will say this for the new people: they talk of peace, bread and work, and God knows we need all three. But Karl, everyone is angry at someone — the officers at the politicians, the men at the officers, everyone at the blockade — and a country cannot live long on anger and turnips. I have my discharge papers and no trade. Write to me what things cost in Hanover.',
        footnotes: [
          'Four winters of turnips — a reference to the severe wartime food shortages under the Allied blockade, especially the “turnip winter” of 1916–17.',
          'Soldiers’ councils — committees elected by soldiers and sailors during the November Revolution of 1918.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of Germany in 1918–1919 written by an academic historian and published in 2010.',
        body: 'Every circumstance that mattered in the Germany of November 1918 flowed from a single fact the nation was never honestly told: the war was lost, and lost on the battlefield. It was Ludendorff himself — no politician, no revolutionary — who on 29 September demanded an immediate armistice, and who then executed the most consequential manoeuvre of the defeat: handing the surrender to a new civilian government so that, as he put it privately, those who had opposed the war might “eat the soup they have cooked us”. The revolution that followed was consequence, not cause — sailors refusing a suicide sortie, a starving home front, an empire whose authority dissolved in a fortnight. The Republic thus began life administering a bankruptcy it had not created: a blockade still strangling the food supply, two million dead, an army of embittered veterans, and a officer corps and civil service that had transferred the war’s guilt to the Republic’s own founders before the Republic was a month old. Weimar’s cradle was not merely troubled; it was booby-trapped.',
        footnotes: [
          'Ludendorff — General Erich Ludendorff, effective joint head of the German Supreme Command 1916–1918.',
          'Sortie — a naval attack; the planned final fleet action of October 1918 triggered the sailors’ mutiny at Kiel.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. defeat and the Armistice of November 1918, the November Revolution, demobilisation, nationalist and antisemitic agitation against the new Republic in 1919)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. to spread the stab-in-the-back legend — shifting blame for defeat from the army onto scapegoats at home, above all Jews and revolutionaries, defending the army’s honour and delegitimising the new Republic)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Account for” attached to purpose asks for the reasons the source was created. The context element requires placement in the aftermath of defeat and revolution; the purpose element requires reasons specific to this postcard — the campaign to blame the “November criminals” and, in this explicitly antisemitic version, Jewish Germans, rather than the military leadership that had actually sought the armistice. Candidates should be credited for recognising the antisemitic scapegoating as central to the source’s purpose, not incidental to it. Generic purposes (“propaganda”) are insufficient for full marks.',
      },
      {
        letter: 'b',
        text: 'Identify and account for the authors’ perspectives in Sources 2 and 3 towards Germany’s defeat in the First World War.',
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
          'Each source is handled independently: identify the perspective, then state the possible reasons for it (motives, bias, time, place, purpose). Source 2: a returned front soldier’s weary, disillusioned honesty — the army was beaten and every soldier knew it — mixed with anxiety at revolution and hardship; his perspective may be accounted for by direct front-line experience, his family’s suffering under the blockade, his private purpose (a letter to a brother, with no reason to posture). Source 3: a historian’s analytical verdict that defeat was military fact and the blame deliberately shifted; accounted for by scholarly distance, access to the documentary record (Ludendorff’s own words), and the purpose of explaining the Republic’s poisoned inheritance. Comparison between the sources is not required.',
      },
      {
        letter: 'c',
        text: 'Analyse how Sources 1, 2 and 3 collectively represent the circumstances facing Germany at the end of the First World War. In your answer, identify the key idea that links the sources.',
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
              { descriptor: 'Analyses clearly how the sources collectively represent Germany’s circumstances at the war’s end — military, economic, social and political — with detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The key linking idea should be stated early — e.g. that Germany ended the war beaten and exhausted in every dimension, and that the battle over who was to blame began at once and burdened the new Republic from birth. The analysis should proceed by circumstance, not by source: military defeat and its concealment (Sources 1 and 3), economic and social exhaustion — blockade, hunger, influenza, demobilisation (Source 2), political overturn — the Kaiser’s fall, councils, street violence (Sources 2 and 3), and the ideological poison of the stab-in-the-back legend with its antisemitic scapegoating (Sources 1 and 3). Own knowledge for higher marks: the Kiel mutiny, the abdication and the proclamation of the Republic on 9 November 1918, the Ebert–Groener pact, the Spartacist rising of January 1919, and the two million war dead behind the letter’s grief. Omissions count only when tied to evaluation — e.g. the set shows Berlin and the front, but not the food queues’ statistics or the situation of women and workers, so the social picture rests on one witness. A source-by-source walkthrough caps in the middle bands; balance of source evidence and own knowledge is required at the top.',
      },
    ],
  },
];
