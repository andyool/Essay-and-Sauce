import type { SourceSet } from './types';

// Source sets 33–36: the Depression crisis and the Nazi road to power.

export const SOURCE_SETS_9: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 33 — The slump: Germany under Brüning  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-bruening',
    title: 'The slump: Germany under Brüning, 1930–1932',
    themeKey: 'bruening',
    themeSentence:
      'The Depression broke over a Germany still scarred by 1923, and Brüning’s answer — deflation by emergency decree — deepened the misery while hollowing out the parliament in whose name he governed.',
    tags: ['p2', 'p3'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of crowds outside the municipal savings bank (Sparkasse der Stadt Berlin), Berlin, July 1931, during the German banking crisis.',
        image: {
          src: 'sources/bank-run-1931.jpg',
          alt: 'A dense crowd of Berliners outside the city savings bank during the July 1931 banking crisis, with police controlling the doorway',
          credit: 'Bundesarchiv, Bild 102-12023 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a dense crowd of men and women in summer hats pressed together on the pavement outside the ornamented doorway of the savings bank, beneath a sign reading “Sparkasse der Stadt Berlin”. Uniformed police officers stand in the doorway itself, holding the entrance; the queue stretches away down the street past advertising hoardings, and more people arrive at the edges of the frame.',
        note: 'Note: on 13 July 1931 the collapse of the Danatbank, one of Germany’s largest banks, forced the government to close every bank in the country for two days and ration withdrawals thereafter.',
        footnotes: [
          'Sparkasse — a municipal savings bank used by ordinary households.',
        ],
      },
      {
        n: 2,
        kind: 'visual',
        attribution:
          'Source 2: A press photograph of unemployed men — identified by the archive as members of the SA — on a park bench in Berlin, early 1930s.',
        image: {
          src: 'sources/sa-unemployed.jpg',
          alt: 'Five unemployed young men in caps and worn suits sit on a Berlin park bench reading newspapers, early 1930s',
          credit: 'Bundesarchiv, Bild 146-1985-054-02 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows five young men in worn suits, caps and a felt hat sitting in a row on a park bench on a bare sand path. Three of them read newspapers; one stares at the ground, his hand at his mouth; another looks past the camera. It is mid-morning on a working day, and none of them has anywhere to be.',
        note: 'Note: the archive’s caption identifies the men as unemployed members of the SA, the Nazi Party’s stormtrooper organisation, which recruited heavily among the young unemployed. Registered unemployment in Germany passed six million in early 1932; including invisible unemployment, more than one working German in three was without a job.',
        footnotes: [
          'SA (Sturmabteilung) — the Nazi Party’s brownshirted paramilitary organisation.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Depression in Germany written by an academic historian and published in 2015.',
        body: 'No industrial country suffered the world slump more severely than Germany, and none met it with a policy so perfectly designed to compound the pain. Production nearly halved between 1929 and 1932; registered unemployment rose from 1.3 to over 6 million; and the banking collapse of July 1931 completed what the Wall Street recall of short-term credit had begun. Chancellor Brüning’s response was deflation: cut spending, cut wages, cut benefits, cut prices — decreed, when the Reichstag would not vote it, under the President’s Article 48, so that by 1932 Germany was governed by emergency decree with a parliament that met only days in the year. The policy had a logic beyond economics — demonstrating to the world that reparations could not be paid — but its domestic price was paid in dole queues and evictions, and in something less visible: the demonstration, administered by a chancellor of the constitutional centre, that democracy had nothing to offer against the crisis. The young men on the park benches drew the conclusion in their millions. Between 1928 and July 1932 the two parties that promised to destroy the system — Nazis and Communists — went from one vote in eight to one vote in two. The Depression did not make Hitler chancellor; but it burned down the political house in which he could never have become one.',
        footnotes: [
          'Deflation — policy of forcing prices, wages and spending down.',
          'Article 48 — the constitution’s emergency-decree article.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the world Depression reaching Germany; the recall of American credit; the collapse of the Danatbank in July 1931 and the closure of the banks; fear of a repeat of 1923 driving savers to withdraw their money)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph in the banking crisis of July 1931: the Depression at full force, the Danatbank collapse, the two-day closure of all German banks and the rationing of withdrawals, with the memory of 1923 sharpening the panic. Details of the source (the crowd pressing at the savings bank of ordinary households, the police holding the door) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the effects of the Great Depression on Germany.',
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
          'Usefulness must be judged relative to the stated inquiry. Source 2 is direct visual evidence of the Depression’s human texture — enforced idleness, the newspaper as the unemployed man’s occupation, the young age of the victims — and, through the archive’s identification of the men as SA members, of the link between unemployment and radicalisation; its limits are a photograph’s limits: one bench, one morning, possibly posed for the press, with the political identification resting on the caption rather than the image. Source 3 supplies scale and mechanism — the statistics, Brüning’s deflation, government by decree, the electoral radicalisation — with scholarly hindsight, though it is an interpretation whose final judgement (the Depression as necessary but not sufficient) invites testing. Strong answers note that Source 2 shows the very men Source 3’s final sentences describe. Candidates do not need to compare the sources to earn full marks; each salient point is rewarded.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the crisis of the Weimar Republic in the Depression years. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the Depression crisis in all three sources', marks: '3' },
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
          'Theme first: the set represents the crisis as economic catastrophe (Sources 1 and 2) transmitted into political collapse by policy and despair (Source 3). Strong responses test the extent with own knowledge: the collapse of the Grand Coalition in March 1930 over unemployment insurance, Brüning’s appointment and the September 1930 election (Nazi vote 18.3 per cent), the decree state and the Reichstag’s marginalisation, the banking crisis, and the election arithmetic of 1932 — while weighing what the economic story alone omits: the political intrigue (Papen, Schleicher, Hindenburg’s circle) that actually transferred power, SA violence, and the fear of communism that steered middle-class despair rightward. Omissions earn marks only when tied to evaluation — e.g. every figure in the set is a victim or an analyst; no Nazi campaigner or communist appears, so the crisis’s political exploiters are present only in Source 3’s statistics. For higher marks: balance of source evidence and own knowledge and an explicit verdict on extent. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 34 — The SA and the battle for the streets  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-sa-streets',
    title: 'Marching columns: the SA before 1933',
    themeKey: 'sa',
    themeSentence:
      'The SA gave the Nazi movement its permanent public presence — order on parade and violence on demand — and made the streets of the Republic a stage on which its death was rehearsed nightly.',
    tags: ['p3'],
    era: 'mid',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of an SA column marching through the Berlin district of Spandau, early 1930s, under police escort.',
        image: {
          src: 'sources/sa-march-spandau.jpg',
          alt: 'A long SA column marches in step through a Berlin street under police escort, past a halted tram and watching pedestrians including children',
          credit: 'Bundesarchiv, B 145 Bild-P049500 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a long column of uniformed SA men marching four abreast down a cobbled main street, led by a flag-bearer; a lorry and the marching ranks stretch back as far as the camera can see. Steel-helmeted policemen walk in step alongside the column, and a tram has halted at the right, its passengers looking out at the marchers. On the pavement, women, children and passers-by stand watching; two boys walk along beside the head of the column.',
        footnotes: [
          'SA (Sturmabteilung) — the Nazi Party’s brownshirted paramilitary organisation.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an account written in 1934 by a young SA man for a Party collection of members’ life stories, describing why he joined in 1930 at the age of nineteen.',
        body: 'What did the Republic ever give me? I finished my apprenticeship in the spring of 1930 and the works gave me my papers the same week — last in, first out. For a year I stood in the queues, and I tell you the worst was not the hunger, it was the uselessness: a young man with strong hands and nothing on earth to do with them. The Reds at the exchange talked of Moscow, the parsons of patience. Then a comrade took me on a Sunday to see the Sturm march past, and I understood in ten minutes what no party pamphlet had taught me in a year. Here was no class and no queue: the son of the director and the son of the docker in the same shirt, marching in the same step, and the drums telling the whole street that Germany was not dead. In the SA I got a uniform, an evening meal at the Sturm kitchen, and comrades who would go through fire for me — but above all I got back a future, and something the dole could never pay out: an enemy, and a fight worth having. When the Reds cracked my head open outside the Pharus Hall, I wore the bandage prouder than any medal. We did not march for wages. We marched so that Germany should live.',
        footnotes: [
          'Sturm — a local SA company; many ran soup kitchens and hostels for unemployed members.',
          'Pharus Hall — a Berlin meeting hall, scene of a famous brawl between SA and communists.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of political violence in the late Weimar Republic written by an academic historian and published in 2009.',
        body: 'The SA’s gift to the Nazi movement was to make politics physical. Where the parties of the Republic argued, the SA appeared: four hundred thousand men by 1932, marching in provocative columns through working-class districts, guarding the leader’s meetings and wrecking his opponents’, running soup kitchens and hostels that turned unemployment itself into a recruiting sergeant. The violence was not an embarrassing by-product of the movement; it was the message. Every street battle with the Red Front — and the last Weimar years counted hundreds of dead on the pavements — staged the same drama for the anxious onlooker: here is the civil war the Republic cannot prevent, and here, in brown, is the force that will end it. The genius of the arrangement lay in its doubleness. The same columns that promised order to the frightened bourgeois promised revolution to the embittered young; the state’s bans dissolved into re-permissions; and the police, as the photographs show, ended by escorting through the streets the private army of the party sworn to destroy the state they served. By 1932 the question the SA posed — who rules the streets? — had already been answered, and the answer stood visibly in column of four.',
        footnotes: [
          'Red Front — the street-fighting organisation of the German Communist Party.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Depression-era radicalisation of politics; the SA’s growth past the size of the army; the street war with the communists; marches through contested districts as political demonstration)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Explains the message of the source (e.g. that the movement is disciplined, massive and irresistible — order on the march, with even the state’s police walking in step beside it) by providing accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Identifies or provides a general comment about the message of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          'The context element requires placement in the last Weimar years: the SA’s mass growth in the Depression, the battle for the streets, the marches as standing propaganda. The message element should be stated as a claim and supported from details: the endless column in step, the flag at its head, the police escort, the halted tram and watching public — the movement occupying public space as if it already ruled it. Any legitimate, evidenced reading is rewarded.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the appeal of the SA. Account for the differences between them.',
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
          'A striking similarity: both sources locate the SA’s appeal in what it offered the unemployed young man — comradeship, purpose, meals, an enemy — rather than in ideology; the volunteer’s testimony reads almost as a case study for the historian’s analysis. The differences are of voice and valuation: Source 2 presents the appeal from inside as redemption — classless comradeship and national resurrection — and wears the violence as honour; Source 3 presents the same appeal analytically as a political instrument, whose violence was calculated “message” and whose classless promise was staged doubleness. Accounting should reason from origin: a young member writing in 1934 for a Party collection, under the victorious regime, with every motive to cast his choice as idealism; an academic historian in 2009, free of the movement’s categories, writing to explain its function. Both similarities and differences are required for full comparison marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of the SA to the rise of the Nazi movement before 1933, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the SA’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the SA’s significance to the movement’s rise, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents the SA as presence (Source 1), as refuge and cause for the young unemployed (Source 2), and as calculated political violence (Source 3). Strong responses assess significance with own knowledge: the SA’s scale by 1932 (some 400,000, larger than the Reichswehr), its role in meetings, propaganda and the civil-war atmosphere (Altona, the Pharus Hall, hundreds dead), the 1932 ban and its lifting, and the counter-side — the violence that alarmed respectable voters, the tension with the political leadership that ended in the 1934 purge. The evaluation should weigh the SA against other engines of the rise (propaganda, Hitler’s leadership, the Depression, elite intrigue): the SA made the movement visible and credible as a force, but votes and the chancellorship came by other roads. Omissions earn marks only when tied to evaluation — e.g. no victim of SA violence appears in the set, so its terror is present only as the historian’s statistic, softening the picture. Balance of source evidence and own knowledge is required at the top.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 35 — The backstairs intrigue: January 1933  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-backstairs',
    title: 'The backstairs intrigue: making Hitler Chancellor',
    themeKey: 'intrigue',
    themeSentence:
      'Hitler did not seize power in January 1933 and did not win it at the polls; it was handed to him by conservative politicians who believed they had hired a drummer and discovered they had crowned a dictator.',
    tags: ['p3'],
    era: 'mid',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: The official photograph of the first cabinet of Chancellor Adolf Hitler, taken in the Reich Chancellery, Berlin, 30 January 1933, and released to the press.',
        image: {
          src: 'sources/hitler-cabinet-1933.jpg',
          alt: 'The first Hitler cabinet posed in the Chancellery on 30 January 1933: Hitler seated between Göring and Papen, with conservative ministers standing behind',
          credit: 'Bundesarchiv, Bild 183-H28422 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The posed photograph shows the new cabinet in morning dress. Hitler sits at the centre; on his right sits Hermann Göring, on his left Vice-Chancellor Franz von Papen, holding his notes. Behind them stand seven ministers in dark suits and wing collars — among them, at the far left, the Nationalist party leader Alfred Hugenberg (economics and agriculture), with Wilhelm Frick (interior) beside him, and the career conservatives of the foreign office, finance and defence ministries completing the row.',
        note: 'Note: of the eleven members of the new government, only three — Hitler, Göring and Frick — were National Socialists. Papen told a critic at the time: “Within two months we will have pushed Hitler so far into a corner that he’ll squeak.”',
        footnotes: [
          'Morning dress — formal civilian dress of tailcoat and striped trousers.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a private letter written by a retired Prussian civil servant, a supporter of the Nationalist party (DNVP), to his son, 1 February 1933, two days after Hitler’s appointment.',
        body: 'You ask anxiously what I make of the new course. Calm yourself: this is not the revolution of the gutter you fear, but its taming. Consider the arithmetic. The Bohemian corporal brings to the government his millions of votes and three portfolios — three! Beside him at every step stands Papen, who has the President’s ear as a son; the Field Marshal remains at his post, the army remains the army, Hugenberg holds the entire economy in his hands, and the gentlemen of the old ministries remain at their desks. The wild man is to make the speeches and bring the masses; the reins remain in cultivated hands. Papen is said to have put it plainly: we have engaged him for our own ends. Within a few months the fellow will have worn out his voice and his welcome, the streets will be quiet, the Marxists finished, and then, my boy, one will thank the drummer and show him the door — and Germany will have back what she lost in 1918, without the Hohenzollerns’ mistakes. I have lived through worse cures. One does not refuse the surgeon because he is loud.',
        footnotes: [
          '“Bohemian corporal” — Hindenburg’s contemptuous private name for Hitler.',
          'Portfolios — cabinet ministries.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of Hitler’s appointment as Chancellor written by an academic historian and published in 2019.',
        body: 'Nothing about 30 January 1933 was inevitable, and little about it was public. The Nazi tide, on the evidence of the ballot box, had crested: two million votes lost between July and November 1932, the party treasury empty, Goebbels writing of despair in his diary. What rescued Hitler was not the electorate but a handful of men around an eighty-five-year-old president — Papen, scheming his way back to power after Schleicher had displaced him; the President’s son Oskar and state secretary Meissner; the east-Elbian landowners and business voices who bombarded Hindenburg with petitions; all converging on the same miscalculation, that Hitler could be “framed in” by a conservative majority in cabinet and used as a battering ram against the left. The old field marshal, who had twice refused the “Bohemian corporal” the chancellorship, was worn down in three weeks of antechamber intrigue of which the public knew nothing. The conservatives around the table on 30 January held every lever that mattered on paper — the presidency, the army, the economy, eight seats of eleven. What they did not hold was what Hitler alone brought: the streets, the movement, and the will to use power the moment he touched it. “We have engaged him for ourselves,” said Papen. History has few better examples of a sentence in which every word was true and the meaning entirely false.',
        footnotes: [
          'East-Elbian — the great landowning region east of the river Elbe.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that the new government is a respectable coalition of national forces in which Hitler is contained by experienced conservative hands — not a Nazi seizure of power)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the formal morning dress rather than uniforms, Hitler seated between Papen and Göring with Papen prominently holding his papers, the conservative ministers ranged behind, the posed official character of the image released to the press)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: the photograph’s composition — civilian formality, the seating order, the balance of faces old and new — was arranged to present continuity and respectability, reassuring conservative Germany that the “national concentration” was in safe hands. Candidates may note the arithmetic recorded in the source note (three Nazis of eleven) as part of the staging. Full marks require specific reference to details of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the belief that Hitler could be controlled. Account for the differences between them.',
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
          'The comparison has an unusual structure worth rewarding when candidates see it: the two sources describe the same calculation — the arithmetic of portfolios, the President, the army, Hugenberg’s economy, Papen’s “engaged him” — but from opposite sides of the outcome. Source 2 holds the taming thesis as confident prediction; Source 3 dissects it as history’s exemplary miscalculation, adding what the letter-writer could not know (the secret intrigue, the ebbing Nazi vote, what followed). Accounting from origin: a conservative of the old order writing privately in the first days, his hopes invested in the arrangement and his frame formed by 1918; a historian in 2019 with the full record and hindsight, whose purpose is to explain the failure of precisely such expectations. Both similarities and differences are required for full comparison marks.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which the historical interpretations presented in all three sources reflect the reasons Hitler came to power in January 1933. In your answer, refer to all three sources and your own knowledge of the period.',
        marks: 10,
        key: [
          {
            rows: [
              { descriptor: 'Assesses clearly the extent to which the interpretations reflect the reasons for Hitler’s appointment, engaging with the biases, arguments and perspectives within the sources and testing them against alternative viewpoints and events from across the period, with detailed, accurate and relevant evidence from all three sources and own knowledge', marks: '9–10' },
              { descriptor: 'Assesses the interpretations against the historical record with accurate and relevant evidence from all three sources and own knowledge', marks: '7–8' },
              { descriptor: 'Explains the interpretations in at least two sources with some accurate and relevant own knowledge', marks: '5–6' },
              { descriptor: 'Outlines the view of the appointment in at least one source with some relevant evidence', marks: '3–4' },
              { descriptor: 'Identifies content from one or more sources and/or provides a general comment with limited evidence', marks: '1–2' },
            ],
          },
        ],
        notes:
          'The set stages rival interpretations: the appointment as respectable national renewal under conservative control (Sources 1 and 2) against the appointment as elite miscalculation delivering power to an uncontrollable force (Source 3). Candidates should identify the interpretations, group the sources — noting that Sources 1 and 2 are themselves evidence for Source 3’s argument — and test them against the record: the election results of 1932 (37.3 per cent in July, the fall in November), the failure of Papen’s and Schleicher’s governments, the pressure of landed and business interests, and the sequel that decided the argument — the Reichstag Fire Decree, the Enabling Act, Hugenberg gone by June, Papen’s associates murdered in 1934. The wider causal field belongs in the assessment: no intrigue could have installed a man without mass backing, and no votes installed him without the intrigue — candidates should weigh both against the sources’ emphases. Omissions count only when tied to evaluation (e.g. the set contains no voice from the millions whose votes made Hitler available — the elite lens is itself an interpretation). Top-band responses balance source evidence and own knowledge and defend a verdict on extent.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 36 — The nationalist right and the Republic  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-harzburg',
    title: 'Allies against the Republic: Hugenberg, Harzburg and the nationalist right',
    themeKey: 'nationalist-right',
    themeSentence:
      'The old nationalist right — press barons, veterans’ leagues and Nationalist politicians — lent Hitler respectability, money and allies in the belief that he would serve their restoration, and destroyed the Republic without ever ruling what followed.',
    tags: ['p2', 'p3'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the founding rally of the “Harzburg Front”, Bad Harzburg, 11 October 1931 — the joint demonstration of the Nazi Party, the Nationalist party (DNVP) of the press magnate Alfred Hugenberg, and the Stahlhelm veterans’ league against the Brüning government.',
        image: {
          src: 'sources/harzburg-front-1931.jpg',
          alt: 'Hitler in SA uniform speaks at the Harzburg Front rally of October 1931, at a long table of frock-coated Nationalist politicians beneath imperial war flags',
          credit: 'Narodowe Archiwum Cyfrowe / CC-BY-SA 4.0, via Wikimedia Commons',
        },
        body: 'The photograph shows a decorated meeting hall hung with black-white-red banners, the imperial war flag with its iron cross and eagle, a Stahlhelm banner and, at the right edge, a swastika flag. Hitler, in SA uniform with a swastika armband, stands speaking at a long table draped in cloth; along the table beside him sit elderly men in frock coats and wing collars — among them Alfred Hugenberg, bespectacled and moustached — with a uniformed Stahlhelm officer at the table’s end and rows of dark-suited notables and uniformed men filling the hall behind.',
        footnotes: [
          'Stahlhelm — “Steel Helmet”, the great nationalist ex-servicemen’s league.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the appeal of the Reich Committee for the referendum against the Young Plan, published in the Hugenberg press throughout Germany, autumn 1929. The committee united Hugenberg’s Nationalists, the Stahlhelm, the Pan-German League and Hitler’s National Socialists.',
        body: 'German people! What the enemy could not take from you in battle, your own governments now sign away with a pen. The new Plan of the financiers binds you, your children and your children’s children — to the third generation, until the year 1988 — to pay tribute to the victors of a war they did not win on the field. Fifty-nine years of slavery: that is the gratitude of the fulfilment politicians for eleven years of your patience. We say: enough. The undersigned associations of the national Germany, setting aside what divides them before the greatness of the hour, place before the whole people a Freedom Law: no further tribute payments; no acceptance of the war-guilt lie on which every extortion rests; and penal servitude for any minister who binds Germany to such treaties in future. Germans! The parties of weakness tell you resistance is impossible. We tell you only resistance is possible. Demand the ballot. Sign the people’s petition. Let the world hear that Germany does not consent to her own enslavement!',
        footnotes: [
          'Young Plan — the 1929 international agreement rescheduling Germany’s reparations payments to 1988.',
          '“Fulfilment politicians” — nationalist abuse for ministers who cooperated with the treaty powers.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of German conservatism and the fall of the Republic written by an academic historian and published in 2011.',
        body: 'The nationalist right never gave Hitler a majority; what it gave him was standing. When Hugenberg harnessed his newspaper and cinema empire to the campaign against the Young Plan in 1929, the referendum failed — five million votes of the twenty-one required — but the obscure agitator who shared its platforms was carried into every respectable nationalist parlour in Germany, his name printed daily beside privy councillors and field marshals. Harzburg in 1931 repeated the service on a grander stage: the fronde of frock coats and steel helmets displayed the “national opposition” as a government in waiting, with Hitler received as an equal — though he came late, left early, and paraded only his own men. The pattern held to the end, and it was always the same bargain misread the same way. The old right commanded salons, estates, industry and the President’s antechamber, but no masses; Hitler commanded the masses and needed nothing else the right possessed except its respectability — which, once transferred, could not be taken back. At Harzburg the conservatives believed they were enrolling a drummer in their orchestra. They learned in 1933, portfolio by portfolio, and some of them in 1934 at gunpoint, who had in fact enrolled whom.',
        footnotes: [
          'Fronde — an alliance of aristocratic rebels against a government.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Depression and the unpopularity of Brüning’s deflation decrees; the gathering of the “national opposition” — NSDAP, DNVP, Stahlhelm — at Bad Harzburg in October 1931; the Nazi Party’s mass growth since 1930 making it the right’s indispensable partner)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph in October 1931: the Depression crisis, the campaign of the united right against the Brüning government, and the demonstrative alliance of Hitler’s movement with Hugenberg’s Nationalists and the Stahlhelm. Details of the source (the imperial and Stahlhelm banners beside the swastika, the frock-coated notables at the table with the uniformed speaker) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the part played by the nationalist right in the rise of the Nazi Party.',
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
          'Usefulness must be judged relative to the stated inquiry. Source 2 is the alliance in action: direct evidence of the themes the right and the Nazis shared (Versailles, the war-guilt lie, “tribute slavery”), of the Hugenberg press as megaphone, and of the willingness of respectable nationalism to campaign in the language of treason trials — the platform on which, as Source 3 argues, Hitler gained standing; its limits are that it is propaganda, showing the campaign’s claims rather than its effects, and it does not mention Hitler or reveal the partners’ rivalries. Source 3 supplies the analysis — the referendum’s failure but publicity, Harzburg’s display, the bargain misread — with hindsight and breadth, though it is an interpretation with a thesis (“standing, not majorities”) that a historian would test against, for example, the funding question and the January 1933 intrigue. The pairing rewards candidates who see that Source 2 is precisely the kind of evidence on which Source 3’s argument rests. Comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the part played by the nationalist right in the fall of the Weimar Republic. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the nationalist right’s part in all three sources', marks: '3' },
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
          'Theme first: the set represents the nationalist right as the Republic’s enemy within respectability — sharing platforms and themes with Nazism (Sources 1 and 2) and, on the historian’s reading, transferring to Hitler the standing that made him acceptable (Source 3). Strong responses test the extent with own knowledge: the DNVP’s turn to fundamental opposition under Hugenberg from 1928, the Young Plan campaign and its media reach, Harzburg’s limits (the partners’ rivalry, Hitler’s aloofness), the presidential-circle intrigue of 1932–33 that finished the work, and the sequel — Hugenberg’s two portfolios lost by June 1933, the Stahlhelm absorbed, Papen’s circle murdered in 1934. The counter-weights belong in the evaluation: the right neither created the Nazi electorate nor controlled the outcome, and other destroyers (Depression, the left’s division, the constitution’s permissions) operated alongside it. Omissions earn marks only when tied to evaluation — e.g. the set shows leaders and propaganda but no voters, so how far the respectability argument explains the mass vote cannot be judged from the set alone. For higher marks: balance of source evidence and own knowledge and an explicit verdict on extent.',
      },
    ],
  },
];
