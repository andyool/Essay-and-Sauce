import type { SourceSet } from './types';

// Source sets 37–40: the Nazi movement's appeal and the seizure of power.

export const SOURCE_SETS_10: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 37 — The Hitler appeal  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-hitler-appeal',
    title: 'The drummer: Hitler’s appeal before 1933',
    themeKey: 'hitler-appeal',
    themeSentence:
      'Hitler’s oratory and carefully built public image turned a fringe agitator into the focus of millions of hopes — a leader cult constructed before power, on which everything after power was built.',
    tags: ['p3', 'i-hitler'],
    era: 'mid',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of Hitler addressing a mass election rally in the Lustgarten, Berlin, 4 April 1932, during the presidential election campaign. Joseph Goebbels stands behind him.',
        image: {
          src: 'sources/hitler-lustgarten-1932.jpg',
          alt: 'Hitler in a trench coat speaks into microphones above a vast Lustgarten crowd in April 1932, with Goebbels and a film camera behind him',
          credit: 'Narodowe Archiwum Cyfrowe. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows Hitler, in a belted trench coat, speaking from a balustraded terrace above a crowd that fills the great square to the buildings beyond. He leans toward a stand of microphones, one arm thrown out; a newsreel camera on a tripod films him, and a mount for a second camera towers at the left. Goebbels, in a heavy overcoat, watches from behind; uniformed police in parade helmets and a group of officials line the terrace, and party flags lean against the balustrade below the swastika banner at the right edge.',
        note: 'Note: uniformed SA formations were banned at the time of this rally; the Party leaders appear in civilian dress. At the presidential election a week later Hitler took 36.8 per cent of the vote against Hindenburg’s 53.',
        footnotes: [
          'Lustgarten — the great square in central Berlin, used by all parties for mass rallies.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an account written in 1934 by a Hamburg schoolteacher for a research collection of National Socialist members’ life stories, describing a Hitler meeting she attended in 1930.',
        body: 'I went, I confess it, out of curiosity, and half against my will — my colleagues at the Lyzeum spoke of this Hitler as of a vulgar Punch-and-Judy man, and I expected to be superior and amused. What I cannot convey to you is the waiting: two hours packed among strangers — workmen, students, a war widow with her medals, people of every station — and a tension in that hall such as I have known otherwise only in church. When he came, there was a roar I felt in my ribs. He began quietly, almost haltingly, like a man searching; and then it was as if what he found was not his thought but ours — everything we had each borne silently, the shame, the fourteen years of humiliation, the fear for Germany, spoken at last aloud by one man who feared nobody. I looked at my neighbours and saw tears on the face of a great rough fellow in overalls. I do not remember the points of the programme. I remember that for two hours we were not classes and parties and confessions but one people, and that I walked home through the wet streets feeling I had been present not at a political meeting but at an awakening. My reason came back next morning with its objections. It has been losing the argument ever since.',
        footnotes: [
          'Lyzeum — a girls’ secondary school.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the Hitler cult written by an academic historian and published in 1998.',
        body: 'The “Hitler myth” was a manufactured product, and its manufacture began long before the propaganda ministry existed to perfect it. The Party built its whole structure around the leader’s person: the Führerprinzip made him constitutionally infallible within the movement; the posters reduced politics to a face and a name; the staging — the delayed arrival, the searchlights, the aeroplane descending from the clouds in 1932’s “Hitler over Germany” flights — borrowed its forms from religion and its techniques from the cinema. But manufacture explains supply, not demand. The cult answered longings the Republic had left unfed: for unity above the party squabble, for greatness after humiliation, for a saviour amid catastrophe — longings older than Hitler and cultivated by war, defeat and crisis. What the believer heard in the speeches was, by every account, less a programme than a mirror: the orator’s gift was to voice each group’s resentment as the nation’s, and his vagueness was an asset, letting the ruined shopkeeper, the pious farmer and the radical student each complete the picture with his own hopes. The myth, in short, was a co-production of the movement’s stagecraft and its audience’s needs — which is why it survived contact with reality for so long, and why those outside its spell found it, then as now, so hard to comprehend.',
        footnotes: [
          'Führerprinzip — the “leader principle” of absolute personal authority.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the presidential election campaign of spring 1932 against Hindenburg; the Depression at its depth; mass rallies and modern campaign technique; the SA uniform ban then in force)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Explains the message of the source (e.g. that Hitler is the man of the masses — a leader commanding modern technology and vast crowds, contending for the highest office in the state) by providing accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Identifies or provides a general comment about the message of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          'The context element requires placement in the 1932 presidential campaign: the Depression, the challenge to Hindenburg, the new mass-campaign methods. The message element should be stated as a claim and supported from details: the orator’s gesture over the packed square, the microphones and newsreel cameras carrying the voice beyond the crowd, the machinery of a modern political spectacle. Any legitimate, evidenced reading is rewarded.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the sources of Hitler’s appeal. Account for the differences between them.',
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
          'A rich similarity: both sources agree the appeal lay less in the programme than in emotional answer — the teacher “does not remember the points”, the historian’s believers hear “a mirror”; the experience Source 2 describes is precisely the demand-side longing Source 3 analyses. The central difference: Source 2 renders the appeal from inside as revelation — an “awakening” her reason cannot defeat; Source 3 dismantles it from outside as co-production of stagecraft and need, taking the staging (delayed arrivals, searchlights, the aeroplane) as calculated technique. Accounting from origin: a convert writing in 1934, under the new regime, for a collection of members’ testimonies — her purpose is to explain and justify her conversion; a historian in 1998 with critical distance and the whole record. Both similarities and differences are required for full comparison marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of Hitler’s personal appeal to the rise of the Nazi movement, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of Hitler’s appeal in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the significance of the personal appeal to the movement’s rise, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents the appeal as spectacle (Source 1), as experienced conversion (Source 2) and as analysed co-production (Source 3). Strong responses assess its significance against the other engines of the rise with own knowledge: the Party’s organisational machine and the SA, the Depression as the audience-maker (the 2.6 per cent of 1928 against 37.3 of July 1932), propaganda technique (the 1932 flights, posters, the presidential campaign of Source 1), and the limit case — the cult did not deliver power by itself: the vote fell in November 1932 and the chancellorship came by intrigue. Candidates may legitimately weigh the appeal as the movement’s binding agent rather than its sufficient cause, and should defend the judgement. Omissions earn marks only when tied to evaluation — e.g. all three sources concern those inside or studying the spell; the majority of Germans who never voted for Hitler are invisible, which risks overstating the appeal’s reach. Balance of source evidence and own knowledge is required at the top; a source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 38 — Ideology in print  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-mein-kampf',
    title: 'Ideology in print: Mein Kampf and the Nazi programme',
    themeKey: 'ideology',
    themeSentence:
      'Nazi ideology was set down in print years before power — a worldview of race, space and leadership that contemporaries could read and largely chose to discount.',
    tags: ['p3'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of a first-edition copy of Adolf Hitler’s “Mein Kampf” (My Struggle), volume one, published by the Party’s press in Munich in July 1925. Hitler wrote the book while imprisoned at Landsberg after the failed Munich putsch.',
        image: {
          src: 'sources/mein-kampf-1925.jpg',
          alt: 'A first edition of Mein Kampf, 1925: red cloth cover with the title, subtitle "Eine Abrechnung" and author\'s name in white Gothic lettering',
          credit: 'Photograph of a museum copy. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows the book standing upright: a stout volume bound in red cloth with a pale spine. The cover carries, in white Gothic lettering, the title “Mein Kampf”, underlined, and beneath it the subtitle of the first volume, “Eine Abrechnung” (“A Reckoning”), and the author’s name, “von Adolf Hitler”.',
        note: 'Note: the first volume sold slowly — under 10,000 copies in its first year. After 1933 the book became a fixture of German life, presented to newlyweds by many registry offices; by 1945 over twelve million copies had been printed.',
        footnotes: [
          'Gothic lettering — the angular “German script” typeface favoured by nationalist publishers.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extracts adapted from “Mein Kampf” (1925–26), from the chapters on propaganda and on the state.',
        body: 'The receptive ability of the great masses is only very limited, their understanding small; on the other hand their forgetfulness is great. All effective propaganda must therefore restrict itself to a very few points, and use them like slogans, until the very last man cannot help knowing what is meant. The great mass of a people does not consist of professors or diplomats; it is ruled by feeling more than by sober consideration. Its feeling is not complicated, but simple and closed: it knows love or hate, right or wrong, truth or lie — never half this and half that. And its faith is harder to shake than its knowledge. — The state is a means to an end. Its end is the preservation and advancement of a community of physically and spiritually equal living beings. States which do not serve this purpose are failures, indeed monstrosities. The German Reich, as a state, is to embrace all Germans, with the task of collecting and preserving the most valuable stocks of racial elements in this people, and raising them slowly and surely to a dominant position. Thus a condition is fundamental: that the nation understands its future lies not in dutiful membership of a League of Nations but in the power of its own sword — that soil and territory are the goal of our foreign policy, and that the sword must win the soil for the German plough and the daily bread of the nation.',
        footnotes: [
          'League of Nations — the international body created by the Versailles settlement.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of Nazi ideology written by an academic historian and published in 2010.',
        body: 'The joke was already old in the Third Reich: the safest place to hide a secret was inside Mein Kampf, the book everyone owned and no one had read. As literature the judgement stands — turgid, repetitive, eight hundred pages where eighty would serve. As evidence it is another matter, and the joke cost the world dearly. Everything the regime later attempted stands in the book of 1925: the annihilating hatred of the Jews, cast as the biological enemy behind both Bolshevism and finance; the doctrine that struggle between races is the law of history and compassion its corruption; the demand for living space in the east at Russia’s expense; the contempt for parliaments and the exaltation of the one leader; even the operating manual — the propaganda chapters, with their cold candour about the masses, that read like a working drawing of the campaigns to come. Contemporaries who troubled to read it mostly filed it as beer-hall ranting that office would tame — the same discount the conservatives applied to the man. The historian must resist reading the book as a timetable; nothing in 1925 fixed 1941. But its core was fixed and never varied, and of how many politicians can it be said that they told the world in print, sixteen years in advance, precisely what they believed and were disbelieved because they had written it down?',
        footnotes: [
          'Living space (Lebensraum) — territory to be conquered for German settlement.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the failed Munich putsch of November 1923 and Hitler’s trial; the Landsberg imprisonment during which the book was dictated; the Party’s refoundation in 1925 and the turn to the legality strategy)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the book in the aftermath of the putsch: the trial that made Hitler a national figure, the comfortable fortress confinement in which the book was dictated, publication in 1925 as the banned Party was refounded on the legality course. Details of the source (the 1925 first volume, the Party press, the combative subtitle “A Reckoning”) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the nature of Nazi ideology before 1933.',
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
          'Usefulness must be judged relative to the stated inquiry. Source 2 is the ideology in the ideologue’s own words: direct evidence of the worldview’s content — the contempt for the masses paired with the technique for moving them, the racial definition of the state, the “sword and soil” foreign policy — written before power and unretracted; its limits are those of any programmatic text: it shows doctrine, not what members believed or voters understood, and its published purpose invites self-dramatisation. Source 3 supplies the frame — the book’s reception, the “unread bestseller” problem, the debate about reading it as fixed core versus timetable — with scholarly distance; its own argumentative position (core fixed, path contingent) is itself an interpretation to weigh. Strong answers connect the two: Source 2 exemplifies exactly the passages on which Source 3’s argument rests, and the historian’s warning against the “timetable” reading disciplines the use of the extract. Comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of ideology in the rise of the Nazi movement to 1933, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of ideology’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the significance of ideology in the rise, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents ideology as fixed, published and discounted — the slow-selling book (Source 1), its unvarying core (Sources 2 and 3), and the world’s refusal to take it at its word (Source 3). Strong responses assess how far ideology actually powered the rise with own knowledge: the 25-point programme and the völkisch inheritance; the evidence that voters were moved less by doctrine than by crisis, fear and the leader cult (the vague “work, freedom and bread” of the campaigns against the book’s explicit programme); ideology’s real functions — binding the movement’s activists, defining enemies, and, among elites, the anti-Marxism that made Hitler acceptable; and the propaganda chapters as method actually applied. The distinction between ideology’s small electoral voice and its large directive significance after power belongs in a strong verdict. Omissions earn marks only when tied to evaluation — e.g. the set shows the doctrine and its analyst but no voter, so ideology’s purchase on the electorate cannot be measured from the set alone. Balance of source evidence and own knowledge is required at the top.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 39 — Goebbels the agitator  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-goebbels-agitator',
    title: 'Conquering Berlin: Goebbels the agitator',
    themeKey: 'goebbels-berlin',
    themeSentence:
      'As Gauleiter of “red” Berlin, Goebbels perfected the methods — provocation, spectacle, martyrs and a party press — that turned agitation into a science and the capital’s streets into a Nazi stage.',
    tags: ['p3', 'i-goebbels'],
    era: 'mid',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of Joseph Goebbels, Gauleiter (regional party leader) of Berlin, speaking at an open-air meeting in the Lustgarten, Berlin, early 1930s.',
        image: {
          src: 'sources/goebbels-lustgarten.jpg',
          alt: 'Goebbels in a civilian suit shouts into a microphone at an open-air Berlin meeting, watched by SA men and civilians',
          credit: 'Bundesarchiv, Bild 119-2406-01 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows Goebbels in profile at a stand microphone, caught mid-shout: mouth wide, jaw thrust forward, one fist clenched at his side. He wears a civilian suit and tie. Behind him, out of focus, stand uniformed SA men and civilian onlookers before the columned front of a great building.',
        footnotes: [
          'Gauleiter — the Nazi Party’s regional leader.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an article by Joseph Goebbels in his Berlin party newspaper “Der Angriff” (The Attack), 30 April 1928, explaining why the Party would contest the Reichstag elections. Goebbels became one of the Party’s first Berlin deputies at the election that May.',
        body: 'We enter the Reichstag in order to supply ourselves, in the arsenal of democracy, with its own weapons. We become members of the Reichstag in order to paralyse the Weimar sentiment with its own assistance. If democracy is so stupid as to give us free railway passes and per-diem allowances for this our disservice, that is its own affair. We do not come as friends, nor even as neutrals. We come as enemies! As the wolf bursts into the flock, so we come. Now we are no longer among ourselves; the “deputies” of the system will sit among us, and we shall not deny before their faces what we are and what we intend. We are an anti-parliamentary party, and it is with parliamentary means that we shall abolish the parliamentary state. Mussolini too went into parliament — and not long afterwards he marched on Rome with his blackshirts. One should not believe that parliamentarism is our Damascus. We come neither to convert nor to be converted. We come to clear out — and if in doing so we make use of the democratic apparatus, very well: that is the mockery of the century.',
        footnotes: [
          'Per-diem — the daily attendance allowance paid to deputies.',
          'Damascus — a reference to St Paul’s conversion “on the road to Damascus”.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a biography of Goebbels written by an academic historian and published in 2015.',
        body: 'Berlin made Goebbels, and Goebbels made the methods. Sent in 1926 to a city where the Party counted a few hundred members against the capital’s red hundreds of thousands, he grasped what the respectable right never did: that in mass politics attention is the currency, and scandal buys more of it than argument. He marched his tiny SA deliberately through communist districts to manufacture battles, then sold the bandaged casualties to the public as martyrs of an idea; he founded Der Angriff not to inform but to wound, perfecting a prose of pure aggression — the nickname, the insinuation, the enemy renamed until the renaming stuck; and when the young stormtrooper Horst Wessel was killed in 1930, Goebbels built from the squalid affair a saint, a song and a cult that carried the movement’s liturgy into power with it. He discovered, in short, that a movement need not be large to be loud, and that the Republic’s free institutions — its press laws, its courts, its parliament — could each be converted into a stage for their own mockery. The transcript of his own frankness survives in the Angriff articles: rarely has a political actor explained the trick so openly while performing it. Berlin never gave the Nazis a majority; as late as March 1933 it was their worst great city. What the Berlin years gave the movement was something more durable — the complete grammar of totalitarian publicity, tested nightly for six years against the toughest audience in Germany.',
        footnotes: [
          'Horst Wessel — an SA man whose death Goebbels turned into the Party’s central martyr cult and anthem.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that the Party’s Berlin leader is a fighter — passionate, aggressive, at war with the system he denounces)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains the purpose of the source with detailed reasons specific to it (e.g. to project the agitator in action for publicity — the shouting profile at the microphone as the Party’s image of combative energy, addressed to the mass public of the capital during the election battles of the early 1930s), supported by details from the source', marks: '3' },
              { descriptor: 'Explains the purpose with some accurate and relevant support from the source', marks: '2' },
              { descriptor: 'Identifies a purpose in general terms', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message is a quick identification; the marks sit in the purpose explanation. Generic answers (“propaganda”, “to show a speech”) are insufficient for full marks: the purpose should be tied to the image’s staging — the caught shout, the fist, the microphone carrying the voice to the mass audience, the SA presence — and to the function of such photographs in building the public persona of the Party’s chief agitator. Full marks require specific reference to details of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the Nazi use of democratic institutions. In your answer, refer to the origin of each source.',
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
          'Compare includes contrast. The remarkable similarity: both sources describe the same strategy in almost the same terms — democracy’s own weapons turned against it; Source 3 explicitly cites the frankness of articles like Source 2. The differences are of voice and judgement: Source 2 is the strategy proclaimed, in the first person, as mockery and threat (“we come as enemies”), its purpose to energise followers and taunt the system, written when the Party was still marginal; Source 3 is the strategy analysed and generalised — placed in the Berlin context, connected to violence, the Wessel cult and the press of aggression, and judged as the invention of “totalitarian publicity”. Reference to origin is required by the question: the Gauleiter’s own newspaper in 1928, against an academic biography of 2015. Both similarities and differences are expected for the top descriptors.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the methods by which the Nazi movement fought for power. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the movement’s methods in all three sources', marks: '3' },
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
          'Theme first: the set represents the fight for power as agitation — the orator (Source 1), the declared subversion of parliament (Source 2), and the manufactured spectacle, martyrs and press war (Source 3). Strong responses test this against the movement’s full method with own knowledge: the legality strategy after 1925 of which Source 2 is the Berlin voice, the SA’s violence as the physical half of the propaganda Goebbels sold, election technique (posters, the 1932 flights, the film and radio age), the Führer cult above it all — and the parts the set omits: the organisational machine (Strasser’s party structure, the occupational associations), the rural and middle-class constituency work far from Berlin, and the final door opened not by agitation but by elite intrigue. Omissions earn marks only when tied to evaluation — e.g. a set built on Goebbels shows the loud minority urban war, and Berlin, as Source 3 concedes, was the Party’s worst great city: the methods that won Protestant small-town Germany are not here. For higher marks: balance of source evidence and own knowledge and an explicit verdict on extent.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 40 — The world turned: 30 January 1933  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-machtergreifung',
    title: 'The world turned: 30 January 1933',
    themeKey: 'machtergreifung',
    themeSentence:
      'Hitler’s appointment was legal, celebrated and, to many, unremarkable — and within weeks the constitutional chancellorship had become the platform for the destruction of the constitution.',
    tags: ['p3', 'p4'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of the torchlight procession through Berlin on the night of 30 January 1933, the day of Hitler’s appointment as Chancellor.',
        image: {
          src: 'sources/torchlight-1933.jpg',
          alt: 'SA columns with torches and a marching band parade through Berlin at night on 30 January 1933, watched by crowds in hats',
          credit: 'Bundesarchiv, Bild 102-02985A / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The night photograph shows columns of uniformed SA men marching with burning torches, a brass band playing at the column’s heart and a standard-bearer carrying an eagle standard. A line of torches curves away into the darkness behind. In the foreground, a dense crowd of civilians in hats and caps watches the marchers pass.',
        note: 'Note: the procession of SA, SS and Stahlhelm formations through the government quarter lasted for hours; Hitler took the salute from a window of the Chancellery, Hindenburg from another window nearby.',
        footnotes: [
          'Stahlhelm — the nationalist ex-servicemen’s league, allied with the new government.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the diary of a young Berlin lawyer, entry of 31 January 1933. The diary was taken abroad when its author emigrated later in the 1930s and was published after the war.',
        body: 'So it has happened after all, and the strangest thing is how ordinary the city contrives to look this morning. The trams run; the office opens at nine; Herr Krüger has brought his sandwiches as always. Last night I stood at the corner of the Linden and watched them march past with their torches — hour after hour of them, the bands, the boots, the young faces shining with something between Christmas and war — and around me perfectly sensible Berliners, people who voted Nationalist or People’s Party or nothing at all, looked on as at a fireworks display: stirring, a little vulgar, nothing to do with them. In the office today the seniors are soothing. It is a coalition, they say; count the cabinet — the sound men have the numbers; Papen has him in harness; the Field Marshal remains; it will be like every government of the last three years, six months of noise and then another. Perhaps. But I keep returning to what I saw in those young faces by torchlight, and to a thought I cannot dislodge: all the other chancellors were appointed at the head of a party. This one arrived at the head of an army that has been promised a war — and I do not know against whom, except that I can guess.',
        footnotes: [
          'The Linden — Unter den Linden, Berlin’s central avenue.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Nazi seizure of power written by an academic historian and published in 2004.',
        body: 'Nothing changed on 30 January 1933, and everything did. Constitutionally the day was routine: the President appointed a Chancellor, the eleventh in fourteen years, at the head of a coalition in which his party held three posts and could be outvoted at any table. The stock exchange barely moved; the diplomatic corps reported a government of the familiar right; much of the press yawned about the taming of the demagogue by office. What had in fact changed was invisible in the arithmetic. For the first time, the head of government commanded a private army of half a million men and a movement that recognised no legitimacy but his; for the first time, the interior ministries of the Reich and, within days, of Prussia — with command of the largest police force in Germany — lay in Nazi hands; and the new Chancellor, unlike every predecessor, had no intention of governing under the rules that had appointed him, but only of using them, as his Berlin Gauleiter had once promised, until they could be abolished. The speed of what followed measured the difference. Within a month the Reichstag burned and the constitution’s liberties were suspended; within two, an Enabling Act had made the Reichstag ceremonial; within six, every other party had ceased to exist. The men who told each other on the night of the torches that they had seen governments come and go were not fools; they were reasoning from precedent. It was the precedent that had ceased to apply.',
        footnotes: [
          'Enabling Act — the law of 24 March 1933 permitting the government to legislate without parliament.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Hindenburg’s appointment of Hitler as Chancellor of a “national concentration” coalition on 30 January 1933; the staged victory celebration of the Nazi formations and their nationalist allies; the Depression and the intrigue that produced the appointment)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph on the night of 30 January 1933: the appointment that morning, the coalition with the Nationalists, and the torchlight parade staged as the movement’s triumph. Details of the source (the SA columns and torches, the band, the watching civilian crowd) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying how Germans understood Hitler’s appointment at the time it happened.',
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
          'Usefulness must be judged relative to the stated inquiry — contemporary understanding. Source 2 is a contemporary private record written within a day: direct evidence of the range of reactions (the celebrating marchers, the spectating public, the soothing seniors reasoning from precedent) and of the fact that clear-eyed foreboding was possible at the time; its limits — one educated, sceptical Berliner, whose diary survived precisely because he emigrated, which may make such voices loom larger than they were. Source 3 reconstructs contemporary understanding across society — the exchange, the diplomats, the press — and explains why the reassuring reading was reasonable yet wrong; its limits are retrospection: it knows the sequel, and its selection of contemporary voices serves its argument. Strong answers note the diarist performs exactly the reasoning-from-precedent Source 3 describes, then breaks from it. Comparison is not required for full marks; each salient point is rewarded.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the significance of 30 January 1933. In your answer, refer to all three sources and your own knowledge.',
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
          'Theme first: the set represents the day as triumph to the movement (Source 1), ambiguity to contemporaries (Source 2), and a hinge visible only in retrospect (Source 3). Strong responses evaluate with own knowledge of both the day and the sequel: the coalition arithmetic and the “taming” expectation, Göring’s control of the Prussian police, the Reichstag Fire and the decree of 28 February, the March election held under terror, the Enabling Act, the one-party state by July — and may note what no source shows: the millions (a majority in the last free elections) who had voted against Hitler, and the opponents for whom the torchlight parade was, as one watching diplomat’s wife recorded, a river of fire flowing over the city. Omissions earn marks only when tied to evaluation. Candidates should engage the question the set itself stages — whether 30 January was the decisive moment or merely the opening of one — and defend a verdict. Balance of source evidence and own knowledge is required at the top; a source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
