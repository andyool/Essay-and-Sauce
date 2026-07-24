import type { SourceSet } from './types';

// Source sets 65–68: the persecution of the Jews — exclusion, marking, ghetto, Auschwitz.

export const SOURCE_SETS_17: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 65 — Exclusion begins, 1933  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-exclusion-1933',
    title: 'Exclusion begins: 1933',
    themeKey: 'exclusion',
    themeSentence:
      'In the regime’s first months, persecution of Jewish Germans moved from street humiliation to legal exclusion — improvised violence and orderly statute working as two hands of one policy.',
    tags: ['p6'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the Munich lawyer Dr Michael Siegel being marched barefoot through the city centre by SA men, 10 March 1933. Siegel had gone to police headquarters to protest at the “protective custody” of a Jewish client; SA auxiliary police beat him, cut off his trouser legs, hung a placard around his neck and paraded him through the streets. The photograph was taken by a press photographer and sold abroad.',
        image: {
          src: 'sources/siegel-1933.jpg',
          alt: 'SA men march the Munich lawyer Michael Siegel barefoot through the street in March 1933, a placard hung around his neck',
          credit: 'Bundesarchiv, Bild 146-1971-006-02 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a middle-aged man in a dark coat, trouser legs shorn away and feet bare on the cobbles, being marched across a city square by armed SA men in caps and swastika armbands. A hand-lettered placard hangs from his neck; a tram and passers-by are visible in the background, and one SA man strides ahead of the procession looking toward the camera.',
        note: 'Note: the placard read “Ich werde mich nie mehr bei der Polizei beschweren” (“I will never again complain to the police”). The image is reproduced here as historical evidence of the public humiliation through which the early persecution worked. Siegel survived; he escaped Germany in 1940.',
        footnotes: [
          'SA auxiliary police — stormtroopers enrolled as “auxiliary police” in the first months of Nazi rule.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extracts from the Law for the Restoration of the Professional Civil Service, 7 April 1933, and its first implementing decree of 11 April 1933 — the first antisemitic statute of the Nazi state.',
        body: '§1. To restore a national professional civil service and to simplify administration, officials may be dismissed from office in accordance with the following regulations, even where the necessary conditions under existing law do not obtain. — §3 (1). Officials who are not of Aryan descent are to be retired; insofar as honorary officials are concerned, they are to be dismissed from official status. (2) Paragraph 1 does not apply to officials who were already officials on 1 August 1914, or who fought in the World War at the front for the German Reich or for its allies, or whose fathers or sons fell in the World War. — First implementing decree, §2 (1). A person is to be regarded as non-Aryan who is descended from non-Aryan, and in particular from Jewish, parents or grandparents. It suffices if one parent or one grandparent is non-Aryan. This is to be assumed in particular where one parent or one grandparent adhered to the Jewish religion. (2) Every official is required to furnish proof that he is of Aryan descent; the proof is to be furnished by means of documents (birth certificates and the marriage certificates of the parents, military papers).',
        footnotes: [
          'The front-fighter exemption — inserted at President Hindenburg’s insistence; it was abolished by the Nuremberg Laws in 1935.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the first year of Nazi anti-Jewish policy written by an academic historian and published in 2010.',
        body: 'The persecution of 1933 advanced on two legs, and the photographs and the statutes must be read together. The street came first: the wild weeks of March, when SA power humiliated, beat and sometimes killed with impunity — violence improvised from below, which alarmed conservative partners and foreign opinion and gave the cabinet its pretext to regularise what the street had begun. The 1 April boycott translated the violence into organised national theatre; six days later the civil service law translated it into administration. The law deserves the closest reading, for in one text stand all the elements of the coming machinery: the racial definition reaching back to grandparents; religion taken as proof of “blood”; the citizen’s duty to document his own ancestry; the bureaucratic form given to an ideological category. Some 2,000 Jewish officials, and within months — through parallel statutes and decrees — Jewish lawyers, doctors, professors, journalists and artists by the thousand, lost their professions in the Republic that had emancipated their grandfathers. Two further lessons were learned that April and remembered by the planners of later stages. The exemptions mattered: Hindenburg’s front-fighter clause showed that conservative scruple could be bought off with categories, a technique refined ever after. And the reaction mattered more: the courts administered the law, the professions largely welcomed the vacancies, the churches were silent, and abroad the boycott’s foreign echo faded in weeks. The regime concluded, correctly, that exclusion by orderly statute would be tolerated — and upon that conclusion the next twelve years were built.',
        footnotes: [
          'Emancipated — granted full civil equality, completed in Germany in 1871.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the first weeks of Nazi rule in March 1933; SA men enrolled as auxiliary police; “protective custody” arrests; improvised street violence and public humiliation of Jewish Germans before the first anti-Jewish laws)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph in March 1933 Munich: the seizure of power weeks old, SA violence exercised under police cover, the public parading of a Jewish lawyer who had asserted a legal right. Details of the source (the placard, the shorn trousers and bare feet, the armed escort, the watching street) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the first stage of Nazi persecution of the Jews.',
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
          'Usefulness must be judged relative to the stated inquiry. Source 2 is the statute itself: incontestable evidence of the first legal exclusion — the racial definition by descent, religion as proof of “blood”, the duty of self-documentation, the exemptions — the administrative template later stages refined; its limits: a law shows neither its enforcement nor its victims’ experience, and its dry language conceals what it did. Source 3 supplies the two-legged structure (street and statute), the scale of the professional purge, and the interpretive claim that the regime learned tolerance-testing from 1933’s quiet reception; as interpretation, that thesis should be engaged. Strong answers note that Source 1 (the street) and Source 2 (the statute) are precisely the two legs Source 3 describes, and that a historian needs all three registers — image, law and analysis. Comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the beginning of the persecution of Jewish Germans. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the persecution’s beginning in all three sources', marks: '3' },
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
          'Theme first: the set represents the beginning as violence and law in partnership — the street’s humiliation (Source 1), the statute’s categories (Source 2), and the analysis binding them (Source 3). Strong responses test the extent with own knowledge: the 1 April boycott between the two, the parallel purges of the professions and universities, the first emigration wave (some 37,000 in 1933), the book burnings, and the trajectory the set only begins — Nuremberg 1935, the November pogrom, and beyond — asking whether 1933 should be read as first stage of a course already set or as an open situation radicalised later (the intentionalist–structuralist question, in candidates’ own terms). Omissions earn marks only when tied to evaluation — e.g. no Jewish voice speaks in the set; the victims appear as paraded body and legal category, which is itself how the persecution wished them seen, and candidates who notice this are reading the set at full depth. Balance of source evidence and own knowledge is required at the top.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 66 — The yellow star and the deportations  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-yellow-star',
    title: 'Marked: the yellow star and the deportations',
    themeKey: 'deportation',
    themeSentence:
      'In September 1941 the regime marked the Jews of Germany with the yellow star; within weeks the deportations to the east began — visibility and disappearance as the two faces of one final stage.',
    tags: ['p6'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of a Berlin woman wearing the yellow star, September 1941, taken in the street by a photographer working for the regime’s press in the days after the star decree came into force.',
        image: {
          src: 'sources/yellow-star.jpg',
          alt: 'A Berlin woman in a dark coat with a fur collar walks past a tram in September 1941, the yellow star sewn to her coat',
          credit: 'Bundesarchiv, Bild 183-B04489 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a middle-aged woman in a dark coat with a fur collar walking across an open space before a stopped tram, a shopping net in one hand and a handbag in the other, her eyes lowered. On the left breast of her coat is sewn the six-pointed star. Another pedestrian, similarly laden, walks beside her at the frame’s edge.',
        note: 'Note: the police decree of 1 September 1941 required all Jews over the age of six in the Reich to wear, from 19 September, a palm-sized yellow star inscribed “Jude”, sewn firmly to the left breast of the clothing, and forbade them to appear in public without it. Such photographs were taken for the regime’s press; the woman’s name is not recorded.',
        footnotes: [
          'The star decree — one of a series of measures in 1941 that also banned Jews from emigrating and from using public transport without permits.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extracts from the diary of a Jewish woman in a west German city, September–November 1941. The diary was hidden with neighbours and survived the war; its writer was deported in 1942 and did not survive.',
        body: '20 September. First day beneath the star. I had sewn it on as the decree requires, firmly, and stood before the mirror a long time. E. said: hold your head high and it is they who are marked. On the street I did not manage it. Some look away with a quick shame that is almost worse than the staring; a boy of perhaps fourteen said loudly what I will not write here; and Frau L., in the bread queue, pressed my hand — for which she may be denounced, and I was more afraid for her than grateful, God forgive me. — 14 October. It is now certain: the R.s and the whole Adlerstrasse group have received the list-letter. “Resettlement to the east for labour deployment.” Eight days’ notice, one suitcase of 50 kilos, the keys to be handed to the block warden, the inventory form filled in in duplicate. Resettlement. Labour. Old Frau R. is seventy-eight and cannot carry a kettle across the room. What labour, and where? No letter has ever come back from the east, not one, from anyone. — 2 November. They went this morning, from the freight platform, not the passenger station. We are forbidden to accompany. From the S. house one could see them standing in rows with their cases from six in the morning. I no longer believe the word resettlement. I write it down so that it is written somewhere: we do not believe them any more. If these pages are found, whoever reads them should know that we understood — not everything, but enough — and could do nothing.',
        footnotes: [
          'Block warden — the Party’s representative for the building, who collected the keys of the deported.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the deportation of the German Jews written by an academic historian and published in 2012.',
        body: 'The star and the trains belong to a single administrative sequence, and the sequence to a single decision: in the autumn of 1941, with the war in Russia supposedly all but won, the leadership resolved to make the Reich “free of Jews” not by emigration — now forbidden — but by removal to the east, where the shooting of Soviet Jewry was already under way. The star, decreed on 1 September, was the sequence’s first instrument: it made the remaining 160,000 Jews of Germany — disproportionately elderly, impoverished by eight years of expropriation — visible, controllable and listable. The lists followed within weeks; the first transports left Berlin, Vienna and the western cities in mid-October for Łódź, then Riga, Minsk and Kaunas, where some of the earliest arrivals were shot on arrival. Everything thereafter ran on the machinery the pre-war years had built: the community’s own registries compelled to compile the lists, the property inventoried on printed forms and forfeited to the Reich by a law of November 1941, the block wardens collecting keys, the Gestapo assembling the transports, the railways invoicing the one-way fares. What the neighbours saw — and the diaries and the photographs confirm that they saw it: the marked coats, the assembly points, the columns walking to the freight stations — was the disappearance, street by street, of the last Jews of Germany. What the deported understood, the surviving letters and diaries suggest, was more than the regime intended and less than the whole: that “resettlement” was a lie, that no one returned — the certainty of the destination’s name came later, and for most, never.',
        footnotes: [
          'Łódź, Riga, Minsk, Kaunas — ghettos and killing sites to which the first Reich transports were sent, October–November 1941.',
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
              { descriptor: 'Correctly identifies the origin of Source 1 (a street photograph of a Berlin woman wearing the star, taken for the regime’s press, September 1941)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains the purpose of the source with detailed reasons specific to it (e.g. taken to record and publicise the star decree in force — displaying the marking of Jews as accomplished, normal and visible to the newspaper public, and serving the decree’s own aim of public identification), supported by details from the source', marks: '3' },
              { descriptor: 'Explains the purpose with some accurate and relevant support from the source', marks: '2' },
              { descriptor: 'Identifies a purpose in general terms', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'Origin refers to provenance: candidates should identify at least two details — a press photograph, Berlin, September 1941, made for the regime. For purpose, generic answers (“to show a woman”) are insufficient for full marks: the photograph served the decree it records — demonstrating the marking in force on an ordinary street — and candidates should support this from the source’s details (the star centred in the composition, the everyday setting, the unnamed subject photographed without consent). The image’s later use as evidence against its makers may be noted but is not the purpose.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding what Germans — Jewish and non-Jewish — understood about the deportations. Account for the differences between them.',
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
          'A central similarity: both sources hold that the essential facts were knowable and, in large part, known — the diarist’s “we do not believe them any more” and the historian’s “what the neighbours saw… they saw it” describe the same collapse of the official lie. The differences are of position and completeness: Source 2 knows from inside and in real time — the lists, the notice periods, the silence from the east — but not the destination or the design; Source 3 knows the whole sequence, the decision behind it and the machinery, but at seventy years’ distance and from the files. Accounting from origin: a hidden contemporary diary, written expressly “so that it is written somewhere”, by a victim of the process she records; an academic historian with the administrative record and the survivors’ papers. Both similarities and differences are required for full comparison marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of the events of autumn 1941 in the destruction of German Jewry, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of autumn 1941’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the significance of the star decree and first deportations, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents autumn 1941 as the final stage’s opening — marking (Source 1), the lived experience of listing and disappearance (Source 2), and the administrative sequence binding them (Source 3). Strong responses place the season with own knowledge: the emigration ban of October 1941 closing the last exits, the Einsatzgruppen murders already under way in the occupied east, the first Reich transports and their destinations, the November 1941 property law, Wannsee weeks ahead — and the longer stages behind: definition (1935), expropriation and pogrom (1938), which had left the community aged and impoverished before the trains. The bystander question the sources raise — what neighbours saw and did — belongs in the assessment. Omissions earn marks only when tied to evaluation — e.g. the set ends at the freight platform: the destination is present only in the historian’s place-names, which mirrors the deportees’ own partial knowledge. Balance of source evidence and own knowledge is required at the top. Grave material; precision and sobriety are required.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 67 — The ghetto  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-ghetto',
    title: 'Sealed streets: the Łódź ghetto',
    themeKey: 'ghettos',
    themeSentence:
      'The ghettos of occupied Poland sealed hundreds of thousands behind fences in the name of order — holding pens of forced labour, engineered starvation and impossible choices, on the road the regime had not yet named.',
    tags: ['p6'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the wooden footbridge over Zgierska Street in the Łódź ghetto (renamed Litzmannstadt by the occupiers), German-occupied Poland, 1940–41. The photograph was taken by a German military propaganda company.',
        image: {
          src: 'sources/ghetto-bridge.jpg',
          alt: 'Crowds cross the wooden footbridge over Zgierska Street in the Łódź ghetto as a tram passes beneath and German policemen stand in the roadway',
          credit: 'Bundesarchiv, Bild 101I-133-0703-20 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a high wooden footbridge, built in a single span over a cobbled street, crowded from end to end with people crossing between the two halves of the sealed district. Beneath it, a tram carrying passengers passes along the excluded street between fences of timber and barbed wire; two German policemen in greatcoats stand in the roadway in the foreground, and a third walks near the fence. Apartment houses with shuttered shops line both sides.',
        note: 'Note: Zgierska Street carried the city’s through traffic and was fenced out of the ghetto; the bridges were built so that the ghetto’s inhabitants could cross above it without touching the “Aryan” street. The propaganda company’s photographs of the ghetto were taken for official use and publication.',
        footnotes: [
          'Ghetto — the sealed district into which the occupiers confined the Jewish population; Łódź’s held some 160,000 people at its founding.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the diary of a young man in the Łódź ghetto, written in 1941–42. Diaries of this kind were kept secretly and several were recovered after the war; their writers, with few exceptions, did not survive.',
        body: 'Sunday. Bread ration cut again; the loaf must now last eight days, and father divides it with the scale, for peace, because an uneven slice is now a family quarrel. Mother’s legs are swollen; the doctor — there is no medicine, so what is a doctor? — says it is the hunger dropsy, as if we needed the name. On the bridge this morning a German with a camera stood photographing us as we crossed, the whole crowded procession of coats and bundles, and the men held the rail and looked away, because one does not know what the picture is for, and every picture of us they take is a picture in their story, not ours. Below, on the street we may not touch, the trams go by; people who ride to work, to shops, into a Sunday. Ten metres. B. says the bridge is our whole condition in one piece of carpentry: they build us a way over their street so that the city can pretend we are already gone. And yet — the workshops hum, the schools meet in the courtyards, S. lectures on Spinoza in the soup kitchen queue, and Rumkowski’s posters promise that work will save us. Work, bread, quiet: perhaps. I write because a day not written down is a day they have entirely. If someone reads this after, know that we walked over their street with our heads level, and that we were hungry, and that we were people.',
        footnotes: [
          'Rumkowski — Chaim Rumkowski, the German-appointed Elder of the ghetto, whose administration ran its workshops and rations.',
          'Hunger dropsy — swelling of the body caused by starvation.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the ghettos of occupied Poland written by an academic historian and published in 2010.',
        body: 'The ghetto was not, in its founders’ minds, a destination; that is the fact from which its history must be read. When the occupiers sealed Łódź in the spring of 1940 — 160,000 people behind fences, in four square kilometres without sewers on the city’s poorest edge — “ghettoisation” was proclaimed a transitional measure, pending some territorial “solution” still imagined as expulsion. The transition lasted four years, and its regime was calculated: rations set below survival, so that hunger and typhus killed over 43,000 in Łódź alone — a fifth of the ghetto — before a single deportation to a killing centre; labour organised on the German account, until the ghetto that starved its workers had become, absurdly and profitably, one of the Reich’s workshops; and administration delegated to a Jewish council whose every choice — Rumkowski’s wager that work would buy survival, the surrender of ration lists, in September 1942 the unbearable surrender of the children and the old — was designed by the occupiers to be impossible, so that the victims should appear to administer their own destruction. When the deportations came — to Chełmno from January 1942, where the ghetto’s people were murdered in gas vans, and at the end, in August 1944, to Auschwitz — the machinery ran through the structures the ghetto years had built. Łódź outlasted every other ghetto precisely because its labour paid; of its 200,000 inhabitants across those years, perhaps 7,000 survived. The bridges over Zgierska Street took the through traffic beneath them all the while: the ghetto was never hidden from the city. It was only sealed.',
        footnotes: [
          'Chełmno — the first killing centre of the “final solution”, operating from December 1941.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the German occupation of Poland; the sealing of the Łódź ghetto in 1940 and its 160,000 inhabitants; the fencing-out of the through street and the bridges; the propaganda company’s photography of the ghetto)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph in occupied Łódź, 1940–41: the sealed ghetto, the excluded thoroughfare with its bridges, the German administration and its photographers. Details of the source (the crowded bridge, the fences and tram, the policemen) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'With reference to their origin and purpose, discuss the reliability of Sources 2 and 3 as evidence of conditions in the Łódź ghetto.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. secret contemporary testimony from inside the ghetto, written without an audience to persuade)', marks: '1' },
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
          '“Discuss” requires strengths and limitations for each source, reasoned from origin and purpose as directed. Source 2: contemporary eyewitness testimony written secretly and at risk, its declared purpose the record itself (“a day not written down is a day they have entirely”) — the strongest possible warrant for its account of hunger, rationing and daily life; its limits are one young writer’s vantage, and candidates should note his own warning about images and stories — the diary is consciously a counter-record. Source 3: command of the whole documentary record — statistics, administration, the deportations’ chronology — with scholarly distance; an interpretation whose framing of the Jewish council’s “impossible choices” engages a real and painful historiographical debate that should be handled with care. The two sources corroborate each other closely on conditions, which strengthens both; the diarist’s observation of the photographer warns how Source 1’s origin differs from his own. Candidates treat the sources in parallel; comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the place of the ghettos in Nazi policy towards the Jews. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the ghettos’ place in all three sources', marks: '3' },
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
          'Theme first: the set represents the ghetto as engineered confinement (Source 1), lived endurance (Source 2) and a “transition” that became a machine of destruction (Source 3). Strong responses place the ghettos in the policy’s stages with own knowledge: ghettoisation from 1939–40 while territorial “solutions” (Nisko, Madagascar) failed, the turn to systematic murder in 1941–42 (Chełmno for Łódź, the Warsaw deportations to Treblinka), forced labour’s temporary reprieve and its limits, and the ghettos’ liquidation — with the Warsaw ghetto uprising of 1943 available as the counterpoint of resistance the set does not show. The evaluated omissions matter: the set contains no perpetrator’s planning voice and no representation of the killing centres themselves, so the road’s end appears only in the historian’s place-names; and the diarist’s dignity (“we were people”) is the corrective to reading the ghetto only as machinery. Balance of source evidence and own knowledge is required at the top. Grave material; precision and sobriety are required.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 68 — Auschwitz  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-auschwitz',
    title: 'The ramp: Auschwitz-Birkenau, 1944',
    themeKey: 'auschwitz',
    themeSentence:
      'At Birkenau the machinery of the genocide reached its terminus — selection on a railway ramp, administered as routine and photographed by its own perpetrators — and the name became the epoch’s darkest measure.',
    tags: ['p6'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the arrival and “selection” of Hungarian Jews on the ramp at Auschwitz-Birkenau, May 1944. It belongs to an album of nearly 200 photographs taken by SS photographers to record the “processing” of the Hungarian transports; the album was found at war’s end by a survivor, Lili Jacob, who discovered pictures of her own family in it.',
        image: {
          src: 'sources/auschwitz-ramp.jpg',
          alt: 'Jewish men, women and children from Hungary stand on the ramp at Auschwitz-Birkenau in 1944 as SS officers conduct the selection, the camp gate behind',
          credit: 'Auschwitz Album, 1944. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows a vast crowd of men, women and children standing in groups along a railway ramp beside a long line of boxcars, bundles and baskets at their feet. SS officers stand among them, one gesturing as the crowd is divided; prisoners in striped uniforms move along the edge of the crowd. In the background rises the arched gatehouse and watchtower of Birkenau, and smoke drifts across the sky.',
        note: 'Note: the transports of May–July 1944 brought some 430,000 Jews from Hungary to Birkenau in eight weeks. At the selection, SS doctors directed the minority judged fit for labour into the camp; the majority — the old, the young, mothers with children — were sent directly to the gas chambers. The album’s photographs were taken by the SS for its own record.',
        footnotes: [
          '“Selection” — the SS procedure dividing arrivals between forced labour and immediate murder.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the account of a Hungarian Jewish survivor, recorded in 1946 by a documentation commission collecting testimony from returned deportees. The witness was nineteen at her deportation in June 1944.',
        body: 'The journey was four days; there were seventy-eight persons in the wagon, and my grandmother did not survive it. When the doors were opened there was light, shouting, dogs — after the darkness one was blinded, and everything had to be left in the wagon, the bundles, everything, they shouted, you will get it afterwards. On the ramp they made two columns, men apart from women, and an officer stood — gloves, you understand, in June — and moved his thumb: this side, that side. It went quickly, like sorting at a market, one had no time to understand. My mother held my little brother, and they went to the left with my aunt; I was sent right with my cousin. My mother turned once and called to me to look after Évi. That is all; that is the whole parting. A woman prisoner who worked on the ramp said to us quietly, in Yiddish: you are not to cry, you are the lucky column, and do not ask about the others. We did not understand her. In the evening, in the barrack, we asked when we would see our families, and the block elder, who had been there two years, pointed through the window at the chimney and said: they went through there. And still, gentlemen, I tell you: we did not believe it. One saw the smoke and did not believe it. I ask that this be written exactly: not that we did not know, but that it could not be believed — there is a difference, and on that difference many things turn.',
        footnotes: [
          'Documentation commission — post-war Jewish organisations that recorded thousands of survivor testimonies in 1945–46.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of Auschwitz written by an academic historian and published in 2015.',
        body: 'Auschwitz was the system’s summation, and its anatomy explains its terrible modernity. It was three things on one site: a concentration camp of the 1933 type, grown monstrous; an industrial estate, where IG Farben and a constellation of firms consumed prisoner labour; and, at Birkenau from 1942, a killing centre — the largest of the six — where the technique rehearsed in T4 and Reinhard was industrialised: the ramp, the selection by medical thumb, the gas chambers and crematoria run on a schedule, the property of the murdered sorted in warehouses the prisoners called “Canada”. Roughly 1.1 million people were murdered there, a million of them Jews from across the continent — the Hungarian operation of 1944 alone, 430,000 in eight weeks, stands as the fastest sustained murder in recorded history — besides Poles, Soviet prisoners, Sinti and Roma. Its scale has made it the emblem, and the emblem needs three corrections that the scholarship insists on. Auschwitz came late: by the time Birkenau’s big crematoria opened in 1943, most victims of the Holocaust were already dead, shot over pits in the east or gassed at Reinhard camps that had no selections and virtually no survivors. It was not hidden: its industry entangled it with the ordinary economy, its selections spared witnesses, and detailed reports reached the Allies by mid-1944. And it was documented by its own makers — the builders’ blueprints, the firms’ invoices, the SS photographers of the album — so that when the survivors spoke, as they at once began to, the perpetrators’ own paper stood behind every word. That conjunction — the testimony and the files — is why denial has always broken on Auschwitz, and why the name became, in every language, the word for the whole.',
        footnotes: [
          'Reinhard camps — Belzec, Sobibor and Treblinka, the pure killing centres of 1942–43.',
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
              { descriptor: 'Correctly identifies the origin of Source 1 (an SS photograph from the album recording the Hungarian transports at Birkenau, May 1944)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains the purpose of the source with detailed reasons specific to it (e.g. made by SS photographers as the camp’s own record of the “processing” of the Hungarian operation — documentation of the machinery’s functioning for internal use — with its later evidentiary role a consequence, not the intent), supported by details from the source', marks: '3' },
              { descriptor: 'Explains the purpose with some accurate and relevant support from the source', marks: '2' },
              { descriptor: 'Identifies a purpose in general terms', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'Origin refers to provenance: candidates should identify at least two details — SS photographers, the album, Birkenau, May 1944 — with the survivor’s discovery of the album available as context. For purpose, generic answers (“to show arrivals”) are insufficient for full marks: the photographs were the perpetrators’ own administrative record of the operation, and candidates should support this from the source (the unhindered official vantage amid the selection, the systematic coverage the attribution describes). The distinction between the image’s purpose then and its use since — evidence — is the mark of a full answer.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of what happened at Auschwitz-Birkenau.',
        marks: 6,
        key: [
          {
            heading: 'Source 2',
            rows: [
              { descriptor: 'Discusses the reliability of Source 2 in relation to events at Birkenau by providing detailed, accurate and relevant evidence and reasons related to, for example, author, motive, time, place, and purpose', marks: '3' },
              { descriptor: 'Explains the reliability of Source 2 by providing mostly accurate and relevant evidence and some reasons', marks: '2' },
              { descriptor: 'Describes the reliability of Source 2 by providing some evidence from some aspects of the source', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Source 3',
            rows: [
              { descriptor: 'Discusses the reliability of Source 3 in relation to events at Birkenau by providing detailed, accurate and relevant evidence and reasons related to, for example, author, motive, time, place, and purpose', marks: '3' },
              { descriptor: 'Explains the reliability of Source 3 by providing mostly accurate and relevant evidence and some reasons', marks: '2' },
              { descriptor: 'Describes the reliability of Source 3 by providing some evidence from some aspects of the source', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Discuss” requires strengths and limitations for each source, reasoned from origin factors — and in this material, “limitations” means the ordinary cautions of testimony and scholarship, not doubt about the events, which stand among the most documented in history. Source 2: eyewitness testimony recorded within two years, in a systematic documentation project, precise about what she saw and — its greatest strength — precise about the boundary of her knowledge (“not that we did not know, but that it could not be believed”); limitations are those of any single vantage: one transport, one ramp, the camp’s interior known to her only in part. Source 3: scholarly synthesis resting on the conjunction it describes — survivor testimony corroborated by the perpetrators’ own files — with the statistics and corrections of settled research; as interpretation its emphases (the “three corrections”) are scholarly argument, not doubt. Candidates who articulate why testimony and documentation strengthen each other are answering at full depth. The sources are treated in parallel; comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of Auschwitz-Birkenau in the Nazi extermination of the European Jews, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of Birkenau’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly Birkenau’s significance in the extermination, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents Birkenau as the machinery’s terminus (Source 1), the survivor’s parting and unbelievable knowledge (Source 2), and the system’s summation with its scholarly corrections (Source 3). Strong responses assess significance with own knowledge of the stages the syllabus names: the exclusions, laws and pogrom of the 1930s; ghettoisation; the shooting operations of 1941; Wannsee’s coordination; the Reinhard camps — placing Birkenau accurately as culmination rather than the whole, as Source 3 insists, while explaining why it became the emblem (scale, the labour-camp’s survivors as witnesses, the perpetrators’ documentation). The Hungarian operation of 1944, the camp’s industrial entanglement, the Allies’ knowledge and the bombing debate, and the January 1945 liberation belong among the materials. The victims are the subject, not the backdrop: responses should carry the testimony’s human weight, and the survivor’s distinction between knowing and believing may anchor the strongest conclusions. Omissions count only when tied to evaluation. Balance of source evidence and own knowledge is required at the top. The gravest material in the course; precision and sobriety are required throughout.',
      },
    ],
  },
];
