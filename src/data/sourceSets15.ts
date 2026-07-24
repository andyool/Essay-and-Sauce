import type { SourceSet } from './types';

// Source sets 57–60: resistance and opposition I.

export const SOURCE_SETS_15: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 57 — The White Rose  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-white-rose',
    title: 'Leaflets against the Reich: the White Rose',
    themeKey: 'white-rose',
    themeSentence:
      'A handful of students and a professor answered total dictatorship with duplicated leaflets and paid with their lives — a resistance without weapons whose weight was moral, and meant to be.',
    tags: ['p5'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: The third leaflet of the “White Rose”, typewritten, duplicated and distributed secretly by the Munich student resistance group, 1942. Original in the German Federal Archives.',
        image: {
          src: 'sources/white-rose-leaflet.jpg',
          alt: 'The typewritten third leaflet of the White Rose, 1942, headed "Flugblätter der Weissen Rose III"',
          credit: 'White Rose leaflet III, 1942. Public domain, via Wikimedia Commons',
        },
        body: 'The typewritten page is headed “Flugblätter der Weissen Rose III” (Leaflets of the White Rose, III) with the Latin motto “Salus publica suprema lex” (“the public good is the highest law”). Its dense paragraphs argue that every individual has a claim to a usable and just state; declare, in a sentence spaced for emphasis, that “our present ‘State’ is the dictatorship of Evil”; ask why Germans do not rouse themselves against it; and end by naming the one means available to all, spaced letter by letter across the final line: “passive resistance” (p a s s i v e r   W i d e r s t a n d).',
        note: 'Note: the leaflets were typed, duplicated on a hand machine in runs of a few thousand, and posted or left in public places in Munich and other cities. The visible creases record the folding of the sheet for envelopes.',
        footnotes: [
          'Duplicated — copied on a hand-cranked duplicating machine, the only mass-printing available to private citizens.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the judgment of the People’s Court, presided over by Roland Freisler, against Hans Scholl, Sophie Scholl and Christoph Probst, Munich, 22 February 1943. All three were executed the same afternoon.',
        body: 'The accused have, in time of war, by means of leaflets called for the sabotage of the war effort and of armaments, and for the overthrow of the National Socialist way of life of our people; have propagated defeatist ideas and have most vulgarly defamed the Führer, thereby giving aid to the enemy of the Reich and weakening the armed security of the nation. On this account they are to be punished by death. Their honour and rights as citizens are forfeited for all time. Whoever, as the accused have done, at a moment when the nation stands in the hardest struggle of its history, calls in leaflets for its defeat, betrays not a government but the German people itself. In their case, in accordance with the healthy feeling of the people, only the supreme penalty of the law can come into consideration. The sentence is to be carried out without delay.',
        footnotes: [
          'People’s Court (Volksgerichtshof) — the Nazi political tribunal; Freisler was its notorious presiding judge.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the White Rose written by an academic historian and published in 2013.',
        body: 'Measured by the calculus of effect, the White Rose achieved almost nothing: six leaflets in editions of a few thousand, a few painted slogans, no sabotage, no network to speak of — and by the end of February 1943 its core was dead, tried and guillotined within days of arrest, their families arrested in their turn. The regime’s haste is the first clue that the calculus of effect is the wrong instrument. What the leaflets attacked was the dictatorship’s deepest claim, that it spoke for every German soul; and what their authors demonstrated — students of twenty-one and twenty-four, a professor, young men fresh from service on the eastern front — was that the claim could be refused, publicly and in Germany, by people the regime itself classed as its future. The sixth leaflet reached England and fell over Germany that autumn in the tens of thousands, retitled by the RAF “Manifesto of the Students of Munich”; the sentence Sophie Scholl reportedly spoke to Freisler — that somebody, after all, had to make a start — became after 1945 what it could not be in 1943, a founding text. Historians must keep both truths in one frame: as resistance, the White Rose failed completely, and its members knew the odds; as witness, it succeeded so entirely that the dictatorship’s judges, in their fury, turned a student trial into the group’s permanent monument.',
        footnotes: [
          'Sixth leaflet — drafted by Professor Kurt Huber, executed in July 1943.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the war years and total dictatorship; the destruction of all legal opposition; the Munich student group around the Scholls and Professor Huber; secret duplication and distribution at mortal risk)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the leaflet in wartime Germany, 1942: no free press or assembly, opposition punishable by death, the group’s duplication and secret distribution of a few thousand copies. Details of the source (the typewritten and duplicated format, the folds for posting, the call to passive resistance) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying how the Nazi regime responded to dissent.',
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
          'Usefulness must be judged relative to the stated inquiry — the regime’s response to dissent. Source 2 is that response in its own words: the judicial murder of students for leaflets, the reasoning (dissent as treason against the people, the “healthy feeling of the people” as law), the speed (“without delay”) and the forfeiture of honour — no commentary could document the People’s Court’s character so directly; its limits: a verdict shows the court’s claims, not the facts it claims (the leaflets called for sabotage of the war machine, not military defeat as an end). Source 3 supplies scale, sequel and interpretation — the trials’ haste as evidence of what the regime feared, the RAF’s reuse of the sixth leaflet, the post-war afterlife — with scholarly distance; its double verdict (failure as resistance, success as witness) is an argument to weigh. Strong answers note the irony the historian points to: Source 2 is itself the monument the regime built to the group. Comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of the White Rose to the history of German resistance, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the group’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the group’s significance, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents the White Rose as moral witness — the leaflet’s appeal to conscience (Source 1), the regime’s disproportionate fury (Source 2), and the historian’s double accounting (Source 3). Strong responses set the group in the wider field with own knowledge: the destroyed organisational bases that made leaflets the only weapon, the group’s knowledge of the eastern-front crimes (the second leaflet named the murder of the Jews), the February 1943 context (Stalingrad, the Munich student unrest), and the comparison with other resistance forms — the political underground, Galen’s protest, 20 July — asking what “significance” means where effect was impossible. Candidates may legitimately argue either emphasis (failure or witness) but must engage both. Omissions earn marks only when tied to evaluation — e.g. the set contains no ordinary German’s response to finding a leaflet, so the leaflets’ actual reception (widely reported to the Gestapo) must come from own knowledge, and it complicates the story. Balance of source evidence and own knowledge is required at the top.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 58 — Georg Elser  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-elser',
    title: 'One man against Hitler: Georg Elser, 1939',
    themeKey: 'elser',
    themeSentence:
      'A Swabian carpenter, acting entirely alone, came within thirteen minutes of killing Hitler in November 1939 — a deed so unassimilable that regime and post-war memory alike preferred to explain it away.',
    tags: ['p5'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of the interior of the Bürgerbräukeller beer hall, Munich, after the bomb explosion of 8 November 1939. Officials inspect the wreckage.',
        image: {
          src: 'sources/buergerbraeukeller-1939.jpg',
          alt: 'The wrecked interior of the Bürgerbräukeller after Elser\'s bomb of 8 November 1939, the collapsed ceiling propped by timbers as officials inspect',
          credit: 'Bundesarchiv, Bild 183-E12329 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows the great hall of the beer cellar in ruins: the ornamented ceiling has come down in a single vast slab, resting at an angle on the rubble of the gallery that collapsed beneath it, shored by raw timber props; a chandelier still hangs from the broken plaster. In the cleared space beneath, uniformed officials and investigators stand in small groups among trestles, looking up into the wreckage.',
        note: 'Note: the bomb, hidden inside the pillar directly behind the speaker’s rostrum, exploded at 9.20 p.m. — thirteen minutes after Hitler, who had cut short his annual anniversary speech to the Party’s old guard, left the hall. Eight people were killed and over sixty injured.',
        footnotes: [
          'Bürgerbräukeller — the Munich beer hall from which the 1923 putsch had been launched, used for its annual commemoration.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extracts from the record of Georg Elser’s interrogation by the Gestapo, Berlin, November 1939. Elser, a carpenter, confessed after his identity was established; the record survived in the Gestapo files. He was held as a special prisoner until his murder at Dachau in April 1945.',
        body: 'I considered the situation of the working class since 1933 and observed that wages had grown lower and deductions higher, and that the freedom to change one’s place of work had been taken away; the worker can no longer move as he wishes. Since the autumn of last year I held the conviction that the ruling circles would not stop at the Munich agreement, but that further demands would be made on other countries, and that a war was therefore unavoidable. Through my own reflection I came to the conviction that conditions in Germany could only be altered by a removal of the present leadership — by which I understood the topmost men, Hitler, Göring and Goebbels. Nobody assisted me in my preparations, and I told no one of my intention; I have already described how I worked in the hall at night, over more than thirty nights, and built the machine into the pillar. I did not wish to kill the men and women in the hall. I wished, through my deed, to prevent still greater bloodshed — the war that is now beginning. I would do it again.',
        footnotes: [
          'Munich agreement — the September 1938 settlement ceding the Sudetenland to Germany.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of resistance to Hitler written by an academic historian and published in 2014.',
        body: 'Elser embarrassed everyone, and the embarrassment is the measure of the deed. The regime could not admit that an unaided artisan of the people had out-planned its entire security apparatus, so it invented handlers for him — the British Secret Service, Otto Strasser’s emigres — paraded two kidnapped British agents as his controllers, and kept him alive in privileged confinement, apparently against a show trial that never came, before murdering him quietly in the war’s last weeks. Post-war Germany managed little better: the officers’ resistance of 20 July, with its staffs and its memoranda, could be honoured as tragedy, but the solitary carpenter who had needed no committee to see what was coming — and who acted in November 1939, before a shot had been fired in the west — fitted no one’s categories, and for decades the legend of the staged attack or the paid agent lingered. The interrogation record, when historians finally read it whole, dissolved every legend. Elser’s stated motives are those of a precise observer: falling real wages, the bound labour market, the certainty of war; his method was months of patient, solitary craftsmanship; his moral arithmetic — eight dead against the millions a war would take — he defended to his questioners without bravado. The most radical act of German resistance before 1944 was conceived, built and almost accomplished by one man with a night-school knowledge of clockwork; and German memory needed half a century to find a shelf for him.',
        footnotes: [
          'Otto Strasser — an exiled Nazi renegade the regime accused of directing the attack.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the annual 8 November commemoration of the 1923 putsch; Hitler’s early departure; Elser’s bomb in the pillar; the first weeks of the war)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Explains the message of the source (e.g. the sheer scale of the destruction at the very point where Hitler had stood minutes earlier — how nearly the attempt succeeded, and how seriously the regime treated the scene) by providing accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Identifies or provides a general comment about the message of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          'The context element requires placement on 8 November 1939: the putsch commemoration, the shortened speech, the explosion thirteen minutes after Hitler left. The message element should be supported from the source: the collapsed ceiling and gallery above the rostrum’s position, the props and investigators — an image of how close the regime came to losing its leadership in one night. Any legitimate, evidenced reading is rewarded.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding Georg Elser and his deed. Account for the differences between them.',
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
          'A striking similarity: the historian’s portrait of Elser rests on and confirms the interrogation record — sober motives (wages, bound labour, certain war), solitary method, the defended moral arithmetic; the two sources agree on every essential fact. The differences are of frame: Source 2 is the deed explained from inside, in the first person, to hostile questioners, without interpretation; Source 3 places the deed in the history of its reception — the regime’s invented handlers, post-war memory’s discomfort — and argues its significance. Accounting from origin: a Gestapo protocol records what a prisoner said under interrogation (candidates should note both its evidential weight and the caution owed to documents produced in captivity, though this record is corroborated by the reconstruction of the device); the historian writes in 2014, after the record’s full scholarly evaluation, with an explicit revisionist purpose. Both similarities and differences are required for full comparison marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the nature of individual resistance to the Nazi regime. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of individual resistance in all three sources', marks: '3' },
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
          'Theme first: the set represents individual resistance at its extreme — one man, complete secrecy, near success (Sources 1 and 2), and a memory that struggled to accommodate him (Source 3). Strong responses test the extent with own knowledge: the conditions that made individual action the only form available (the destroyed organisations, the informer society), other lone or small-scale actors (the Kreisau planners as contrast, helpers of hidden Jews, deserters), the 20 July comparison the historian draws, and the interpretive question the set poses — whether Elser’s clarity indicts the elites who saw the same facts and waited. The set’s omissions belong in the evaluation: nothing shows the price of failure for ordinary resisters without Elser’s propaganda value (immediate execution), nor the vast majority who saw what Elser saw and did nothing — the baseline against which “individual resistance” must be measured. For higher marks: balance of source evidence and own knowledge and an explicit verdict on extent.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 59 — The Kreisau Circle  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-kreisau',
    title: 'Another Germany on paper: the Kreisau Circle',
    themeKey: 'kreisau',
    themeSentence:
      'The Kreisau Circle planned not a coup but a country — the constitution, conscience and reconstruction of a Germany after Hitler — and its members went to the gallows for thoughts the regime rightly judged more dangerous than bombs.',
    tags: ['p5'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of Helmuth James Graf von Moltke, founder of the Kreisau Circle, before the People’s Court, Berlin, January 1945. The photograph was taken officially during the proceedings.',
        image: {
          src: 'sources/moltke-court.jpg',
          alt: 'Helmuth James von Moltke, seated at a microphone table before the People\'s Court in January 1945, uniformed spectators behind him',
          credit: 'Bundesarchiv, Bild 147-1277 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows Moltke seated alone at a small table, leaning toward two rounded microphones, a glass of water at his left hand and papers before him. He is in a dark civilian suit, his gaunt face turned toward the unseen bench with raised eyebrows and a direct gaze. Behind him, out of focus, sit rows of uniformed officers and officials.',
        footnotes: [
          'People’s Court — the Nazi political tribunal under Roland Freisler.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extracts from Helmuth James von Moltke’s last letters to his wife Freya, written from prison in January 1945 after his trial. Moltke was executed on 23 January 1945; the letters were preserved by his wife.',
        body: 'The decisive phrase of the trial was: “Count Moltke, Christianity and we National Socialists have one thing in common, and one only: we claim the whole man.” Did Freisler know what he was saying? Just think how wonderfully God prepared this, his unworthy vessel. At the very moment when there was danger that I might be drawn into the active preparations of the putsch, I was taken away, so that I should be and remain free from every connection with the use of violence. And then he planted in me my socialist leanings, which freed me, as a big landowner, from every suspicion of representing interests. Then he humbled me as I have never been humbled before, so that I had to lose all pride, so that at last I understand my sinfulness, so that I learn to beg for his forgiveness and to trust to his mercy. And then he lets me come here, to this building, so that I should stand not as a Protestant, not as a landed proprietor, not as a nobleman, not as a Prussian, not as a German even — but as a Christian and as nothing else, before Freisler. What a task for so poor a man! We are, I read today, to be hanged for having thought together. Freisler is right, a thousand times right: if we are to die, let it be for this. We did not want violence; we thought — of how Germany could be ordered anew, in justice, when the tyranny should have destroyed itself. For thinking this together, they kill us. I have wept a little, not from sadness or melancholy, but from thankfulness.',
        footnotes: [
          'The putsch — the 20 July 1944 plot, with which Moltke had refused active involvement; he had been arrested months before it.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the German resistance written by an academic historian and published in 2010.',
        body: 'Kreisau was a conspiracy of the imagination, and its files, had they been found, would have hanged its members as surely as any bomb — as in the end the mere memory of its conversations did. On the Moltke estate in Silesia, and in Berlin flats, an improbable community met between 1940 and 1943: Prussian aristocrats and Jesuit priests, socialist trade unionists and Protestant pastors, diplomats and county administrators — men who in Weimar had been political enemies — drafting, commission by commission, the order of a Germany after Hitler: self-governing communities built upward from family and workplace; churches restored as the conscience of public life; the economy mixed, the schools rebuilt, the rule of law restored, war criminals — a term they debated carefully — to be tried before courts. Two things distinguish the enterprise. First, its diagnosis: the Kreisauers held that Nazism was not an accident befallen a healthy nation but the terminal disease of a bankrupt order, so that killing Hitler mattered less than being ready to build differently — a position that kept Moltke himself aloof from assassination on both moral and practical grounds. Second, its price: the Circle proved the regime’s definition of treason had no floor — Freisler hanged its members, as he told Moltke to his face, not for anything they had done but for what they had thought together with others. In the short run that verdict was simply true, and fatal. In the long run the papers survived in a widow’s beehives, and more of the Federal Republic’s furniture than is commonly noticed — from its federalism to its churches’ public role — was sketched first at Kreisau, by men who never lived to see a single paragraph enacted.',
        footnotes: [
          'Silesia — the eastern Prussian province where the Moltke estate, Kreisau, lay.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the wave of People’s Court trials after the failed 20 July 1944 plot; Moltke’s earlier arrest and the discovery of the Kreisau discussions; the war’s final months; official photography of the political trials)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph in January 1945: the post-20 July reckoning, the People’s Court under Freisler trying the resistance’s survivors, Moltke charged for the Kreisau conversations though he had refused the plot itself. Details of the source (the lone civilian at the microphones before a uniformed audience, the official camera) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the aims of the Kreisau Circle.',
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
          'Usefulness must be judged relative to the stated inquiry. Source 2 gives the movement’s self-understanding at the point of death: Moltke’s insistence that Kreisau’s essence was thought, not violence — “hanged for having thought together” — and the religious frame in which he cast it; its limits: a last letter to a beloved wife is testimony under the most extreme circumstances conceivable, written for consolation and meaning-making as much as record, and it speaks for Moltke, not for the Circle’s socialists or Jesuits. Source 3 supplies the programme itself — the commissions, the drafts, the membership’s breadth, the diagnosis that put reconstruction above assassination — and the long sequel, with scholarly distance; its claims about the Circle’s influence on the Federal Republic are interpretation candidates may weigh. Strong answers note the convergence on the central fact (a conspiracy of planning, not action) reached from opposite ends: the victim’s theology and the historian’s archive. Comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Analyse how Sources 1, 2 and 3 collectively represent the character of the German resistance to Hitler. In your answer, identify the key idea that links the sources.',
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
              { descriptor: 'Analyses clearly how the sources collectively represent the resistance’s character, with detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The key linking idea should be stated early — e.g. that the resistance the set shows fought with conscience and imagination rather than force, and that the regime treated precisely this as capital treason. Analysis by aspects, not by sources: the criminalisation of thought (Sources 1 and 2, Freisler’s own formula), the content of the “other Germany” (Source 3’s programme), and the moral frame resisters themselves gave their defeat (Source 2), each extended with own knowledge — the Circle’s links to Goerdeler and the 20 July men it held at arm’s length, the churches and unions its members came from, the roughly five thousand killed in the post-plot reckoning, and the post-war afterlife of the plans. The evaluated omission matters: a set built on Kreisau shows resistance at its most reflective and least effective; nothing represents the active conspirators, the underground networks or any resister outside the educated elite — a partiality candidates should tie to the evaluation. Balance of source evidence and own knowledge is required at the top; a source-by-source walkthrough caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 60 — Everyday dissent  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-everyday-dissent',
    title: 'The folded arms: everyday dissent in the Third Reich',
    themeKey: 'everyday-dissent',
    themeSentence:
      'Between loyalty and resistance lay a vast middle ground of grumbling, evasion and withheld salutes — everyday dissent that never threatened the regime and never let its claim to every German soul come true.',
    tags: ['p5'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of workers at the Blohm & Voss shipyard, Hamburg, assembled for the launching of a naval training ship, 13 June 1936. In the upper part of the crowd, one man stands with his arms folded while those around him salute. The photograph was published in a German newspaper at the time without comment; the non-saluting figure was noticed and identified only decades later.',
        image: {
          src: 'sources/landmesser-1936.jpg',
          alt: 'A crowd of Hamburg shipyard workers giving the Nazi salute in 1936; one man among them stands with his arms folded, refusing the salute',
          credit: 'Photograph, Hamburg, 1936. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph, taken from above, shows a dense crowd of shipyard workers in caps and work jackets, uniformed party men among them, nearly every right arm stretched out in the salute. Amid the forest of raised arms, right of centre, a single man stands with his arms folded across his chest, his face set, saluting nothing. A ring drawn on later reproductions of the photograph marks him out.',
        note: 'Note: the man is generally identified as August Landmesser, a shipyard worker who had been expelled from the Nazi Party for becoming engaged to a Jewish woman, Irma Eckler, whom the Nuremberg Laws forbade him to marry. He was later imprisoned; Irma Eckler was murdered in the camps.',
        footnotes: [
          'Launching — the ceremonial first entry of a new ship into the water, here attended by the regime’s dignitaries.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a situation report by the Gestapo office for a north German industrial district, 1938, summarising “oppositional phenomena” among the population. Such internal reports were compiled regularly for the security police leadership.',
        body: 'Open opposition is not to be reported. Nevertheless the offices continue to register phenomena which, without constituting punishable resistance in every case, indicate an incomplete inner participation of parts of the population. In the works, the German greeting has noticeably declined except where officials are present; men excuse themselves with full hands or turn aside. Attendance at factory roll-calls and broadcasts of the Führer’s speeches is complete, since it is checked, but foremen report reading of newspapers and dozing at the rear. Contributions to the Winter Relief are made, but in several plants the lowest permissible amounts are given with demonstrative exactness. Jokes of an impudent character concerning leading personalities circulate faster than their tellers can be established; in the tramway depot, three were reported in one week, always “heard from a stranger”. The clergy-bound population maintains its processions in undiminished numbers, which are outwardly unpolitical and cannot be objected to, but whose demonstrative character is unmistakable. It must be repeated that none of this constitutes organised resistance, and the mood in general remains loyal, particularly since the Austrian success. But the offices should remain aware that beneath a correct exterior a portion of the population, in particular among the older workers and the confessionally bound, withholds its inner assent — and that this reserve, in the event of serious set-backs, would represent a factor of uncertainty.',
        footnotes: [
          'German greeting — the “Heil Hitler” salute.',
          'Confessionally bound — closely tied to the Catholic or Protestant church.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of everyday life under the dictatorship written by an academic historian and published in 1987.',
        body: 'Between the hero and the collaborator, historical memory long had no third figure; yet the third figure was the German majority’s daily reality. The regime demanded not obedience but enthusiasm — the salute, the flag, the contribution, the son in the Hitler Youth — and it was at this totalising frontier, not at the frontier of conspiracy, that ordinary people pushed back: the arm that stayed down when no official watched, the joke, the minimum donation paid to the pfennig, the church procession swollen into silent demonstration, the dial turned, later, to London. The historian must resist two temptations in reading such behaviour. The first is to inflate it: folded arms overthrew nothing, hid no one, stopped no train to the east; most of those who withheld the salute paid their taxes, did their work and, when conscripted, fought. The second is to dismiss it: for in a state that claimed every soul, the withheld interior was a real defeat — the regime’s own watchers said so, counting jokes and slack salutes with the anxiety of an occupying power in its own country — and for particular individuals, as a Hamburg shipyard photograph reminds us, the folded arms could be the visible edge of a loyalty (to a forbidden fiancée, a faith, a class) for which people went to prison and worse. “Resistance” is the wrong word for this behaviour, and “consent” is equally wrong. It was the refusal to be wholly possessed — massive, politically impotent, and the permanent, unremovable proof that the Volksgemeinschaft existed only up to the skin.',
        footnotes: [
          'The dial turned to London — listening to the BBC, a criminal offence in wartime.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that even amid apparently total conformity, refusal was possible — one man declines the gesture the whole crowd performs)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the mass of identical raised arms filling the frame against the single figure with arms folded, his set expression, the density of the conforming crowd that makes the exception visible — and the detail that the photograph passed unnoticed at the time)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: the visual contrast between the saluting mass and the lone folded arms is the source’s whole rhetoric; candidates may add the note’s identification (a man whose forbidden engagement gave him personal cause) without converting the answer into biography. Full marks require specific reference to details of the source.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the extent of dissent among ordinary Germans.',
        marks: 6,
        key: [
          {
            heading: 'Source 2',
            rows: [
              { descriptor: 'Discusses the reliability of Source 2 in relation to the extent of dissent by providing detailed, accurate and relevant evidence and reasons related to, for example, author, motive, bias, time, place, and purpose', marks: '3' },
              { descriptor: 'Explains the reliability of Source 2 by providing mostly accurate and relevant evidence and some reasons', marks: '2' },
              { descriptor: 'Describes the reliability of Source 2 by providing some evidence from some aspects of the source', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Source 3',
            rows: [
              { descriptor: 'Discusses the reliability of Source 3 in relation to the extent of dissent by providing detailed, accurate and relevant evidence and reasons related to, for example, author, motive, bias, time, place, and purpose', marks: '3' },
              { descriptor: 'Explains the reliability of Source 3 by providing mostly accurate and relevant evidence and some reasons', marks: '2' },
              { descriptor: 'Describes the reliability of Source 3 by providing some evidence from some aspects of the source', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Discuss” requires strengths and limitations for each source, reasoned from origin factors. Source 2: an internal police report with no propaganda audience — the regime informing itself — which gives its observations of slack salutes, minimum donations and circulating jokes high evidential value; its limitations are structural: the Gestapo saw only what surfaced, categorised behaviour in police terms, and its closing reassurance (“the mood remains loyal”) may reflect what offices thought superiors wished to read. Source 3: a scholarly synthesis of precisely such reports plus later research, offering the interpretive frame (“the refusal to be wholly possessed”) with hindsight; as interpretation, its careful double warning is itself a position within a real historiographical debate about the meaning of nonconformity. The convergence between the police’s anxieties and the historian’s categories strengthens both. Candidates treat the sources in parallel; comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which the historical interpretations presented in all three sources reflect the attitudes of ordinary Germans towards the Nazi regime. In your answer, refer to all three sources and your own knowledge of the period.',
        marks: 10,
        key: [
          {
            rows: [
              { descriptor: 'Assesses clearly the extent to which the interpretations reflect ordinary Germans’ attitudes, engaging with the biases, arguments and perspectives within the sources and testing them against alternative viewpoints and events from across the period, with detailed, accurate and relevant evidence from all three sources and own knowledge', marks: '9–10' },
              { descriptor: 'Assesses the interpretations against the historical record with accurate and relevant evidence from all three sources and own knowledge', marks: '7–8' },
              { descriptor: 'Explains the interpretations in at least two sources with some accurate and relevant own knowledge', marks: '5–6' },
              { descriptor: 'Outlines the view of popular attitudes in at least one source with some relevant evidence', marks: '3–4' },
              { descriptor: 'Identifies content from one or more sources and/or provides a general comment with limited evidence', marks: '1–2' },
            ],
          },
        ],
        notes:
          'The set stages the central interpretive problem of the dictatorship’s social history: what the mixture of conformity and withheld assent meant. Candidates should identify the readings — the photograph’s visible exception, the Gestapo’s “incomplete inner participation” beneath a loyal surface, the historian’s third figure between hero and collaborator — and test them against the record: the Führer myth and the genuine acclaim of the pre-war successes, SOPADE’s parallel findings, the churches’ demonstrations and the Rosenstrasse protest, denunciation rates that show the other face of ordinary behaviour, and the hard boundary the set itself names — folded arms stopped no train to the east. The strongest responses engage the conceptual argument (whether “dissent” without effect deserves the name, and what the regime’s own anxiety about jokes and salutes proves) and reach a defended verdict on extent. Omissions count only when tied to evaluation — e.g. all three sources concern the watched and the watchers; the enthusiastic majority of, say, March 1936 appears only as the crowd in the photograph. Top-band responses balance source evidence and own knowledge throughout.',
      },
    ],
  },
];
