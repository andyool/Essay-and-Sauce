import type { SourceSet } from './types';

// Source sets 13–16.

export const SOURCE_SETS_4: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 13 — The Munich Putsch, 1923  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-putsch',
    title: 'The Munich Putsch, 1923',
    themeKey: 'putsch',
    themeSentence:
      'The Munich Putsch failed within hours, yet Hitler converted the fiasco into a propaganda platform, a prison-written manifesto and a change of strategy that reshaped the Nazi movement.',
    tags: ['p3'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the Marienplatz, Munich, on the morning of 9 November 1923, during the attempted Nazi seizure of power. Armed putschists stand on a lorry beside the town hall.',
        image: {
          src: 'sources/putsch-1923.jpg',
          alt: 'Armed putschists in steel helmets with swastika armbands on a lorry above a crowd, Marienplatz Munich, 9 November 1923',
          credit: 'Bundesarchiv, Bild 119-1486 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a dense crowd of civilians in hats filling the Marienplatz before Munich’s Gothic town hall. At the right, a lorry carries a squad of putschists in steel helmets, several wearing swastika armbands, one holding a flag; they look down over the crowd. A tram is halted in the square and a single man has climbed a lamp post to see over the heads. The crowd appears curious rather than mobilised — watching, not marching.',
        note: 'Note: within hours of this scene, the putschists’ march through the city was stopped by a Bavarian police cordon at the Feldherrnhalle; sixteen marchers and four policemen were killed, and Hitler was arrested two days later.',
        footnotes: [
          'Putsch — an attempt to seize power by force.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from Adolf Hitler’s speech in his own defence at his trial for high treason, Munich, February–March 1924. The trial judges permitted Hitler to speak at length; he was sentenced to five years but released after nine months.',
        body: 'I alone bear the responsibility for the ninth of November, and I bear it gladly. If our enterprise was high treason, then gentlemen, high treason must be a curious crime, for I cannot commit treason against a state that was itself born of treason in 1918. The men who broke Germany then — the November criminals — sit today not in the dock but in the government. You may pronounce us guilty a thousand times over: the goddess of the eternal court of history will smile and tear up the motion of the state prosecutor and the verdict of this court, for she acquits us. The army we have formed grows from day to day. I nourish the proud hope that the hour will come when these wild companies will grow to battalions, the battalions to regiments — and that the old cockade will be raised from the mire and the old flags will wave again before us.',
        footnotes: [
          'Cockade — a military badge in the national colours.',
          '“November criminals” — the nationalist term of abuse for those who agreed to the Armistice of 1918.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the early Nazi movement written by an academic historian and published in 2003.',
        body: 'Judged as a coup, the Beer Hall Putsch was an amateurish disaster: a plan improvised in a beer cellar, allies who deserted overnight, and a march into a police cordon that scattered the movement’s leadership in fourteen minutes of gunfire. Judged as an investment, it may have been the most profitable failure in the Party’s history. The trial that should have ended Hitler’s career became, before a benevolent Bavarian court that let him orate for hours and reported him to the national press, his first appearance on the German stage. The fortress confinement at Landsberg — comfortable, brief and full of visitors — gave him the leisure to dictate his book and the aura of martyrdom to sell it. And the fiasco itself taught the lesson on which everything later turned: power would not be seized against the state’s guns but won through its ballot boxes, with legality as a weapon and the SA as theatre rather than army. The dead of the Feldherrnhalle, carried ever after on banners, cost the movement sixteen men and bought it a founding myth.',
        footnotes: [
          'Landsberg — the fortress prison where Hitler served his sentence and dictated Mein Kampf.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the crisis year 1923 — hyperinflation, the Ruhr occupation, separatist and radical plots; the Nazi–nationalist attempt to seize power in Munich on 8–9 November; the armed occupation of the city centre before the march was stopped)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph on 9 November 1923, amid the general crisis of that year, and connect details of the source (the armed men and swastika armbands on the lorry, the watching civilian crowd, the halted tram) to the attempted seizure of power then under way. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the consequences of the Munich Putsch for Hitler and the Nazi movement.',
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
          'Usefulness must be judged relative to the stated inquiry — the putsch’s consequences. Source 2 is direct evidence of the most important consequence in action: the trial itself as platform, showing Hitler’s self-presentation (sole responsibility, the treason of 1918, history as judge) and the courtroom licence he was granted; its limits are its purpose — courtroom performance designed for the press, wholly unreliable as an account of events but highly useful as evidence of strategy and of the judiciary’s indulgence. Source 3 supplies the analytical frame — trial, Landsberg, Mein Kampf, the legality strategy, the founding myth — with hindsight and breadth, though as interpretation it argues a thesis (“profitable failure”) a historian would test. Candidates do not need to compare the sources; a biased source can be highly useful, and recognising this should be rewarded. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the significance of the Munich Putsch for the Nazi movement. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the putsch’s significance in all three sources', marks: '3' },
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
          'Theme first: the set represents the putsch as a failure in fact (Source 1’s curious rather than committed crowd, the note on the police volley) transformed into an asset (Source 2’s courtroom platform, Source 3’s “profitable failure”). Strong responses test this with own knowledge: the collapse of the putsch and Bavaria’s triangle of power, the lenient sentence and early release, Mein Kampf and the Führer cult, the refounding of the Party in 1925 on the legality strategy, and the annual 9 November cult of the “blood witnesses”. The counter-weight belongs in the evaluation: the putsch also brought the Party’s ban, years in the wilderness, and 2.6 per cent in 1928 — the “profitable failure” paid out only when the Depression supplied a crisis. Omissions earn marks only when tied to evaluation (e.g. no source shows the movement’s weakness through the stable mid-1920s, so the set may overstate the putsch’s immediate significance). Balance of source evidence and own knowledge is required for the higher marks; a source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 14 — The battle of the posters: 1932  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-elections',
    title: 'The battle of the posters: the elections of 1932',
    themeKey: 'elections',
    themeSentence:
      'In 1932 German democracy fought its last elections as a street war of posters, meetings and fists, in which the republic’s defenders were outshouted by its enemies.',
    tags: ['p2', 'p3'],
    era: 'mid',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of an advertising column in Berlin, July 1932, in the final days of the Reichstag election campaign. A man and a woman stand reading the posters.',
        image: {
          src: 'sources/litfass-1932.jpg',
          alt: 'Berlin advertising column covered in rival election posters of the SPD and NSDAP, July 1932',
          credit: 'Bundesarchiv, B 145 Bild-P046288 / Carl Weinrother / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a Berlin advertising column papered from top to bottom with rival election posters. A National Socialist poster bears a swastika and the slogan “Deutschland erwache! Liste 2” (“Germany awake! List 2”). Beside and beneath it, Social Democratic posters answer: one is headlined “Frauen! Mütter!” (“Women! Mothers!”), another begins “Hitler versprach euch…” (“Hitler promised you…”), and a third calls “Sozialdemokraten für Freiheit, Arbeit und Frieden! Wählt am 31. Juli Liste 1” (“Social Democrats for freedom, work and peace! Vote on 31 July, List 1”). At the top, a police notice threatens a fine of 1,000 marks for unauthorised bill-posting; a cinema programme and a notice of a mass meeting fill the remaining space. A couple stand with their backs to the camera, reading.',
        note: 'Note: at the Reichstag election of 31 July 1932 the NSDAP won 37.3 per cent of the vote and the SPD 21.6 per cent. It was the second of five national election campaigns fought in Germany during 1932.',
        footnotes: [
          'Advertising column (Litfaßsäule) — a cylindrical street pillar used for posters and notices.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a letter by a Berlin member of the Reichsbanner — the republican defence organisation aligned with the Social Democratic Party — to his cousin, late July 1932.',
        body: 'You ask how the campaign goes. It goes with paste-buckets by night and bandages by morning. What we paste up before midnight the brownshirts tear down by two, and what they paste we tear in our turn; the column on the Hermannplatz has grown fat as a barrel with the layers. Monday they rushed our corner meeting — chair-legs, knuckledusters, the usual arguments of the master race — and little Brandt is in hospital with his skull cracked. The police came late and looked bored. Since the gentlemen in Wilhelmstrasse deposed our Prussian government by telephone, the uniforms look at us as at men already sentenced. We go on. We hold the meetings, we carry the flags, we say to the tired ones: the Republic is not an opinion, it is our wages, our unions, our children’s schools. But between the Nazis who promise everything and the Communists who call us traitors, I feel some nights that we are defending a house whose tenants have already moved out.',
        footnotes: [
          'The “gentlemen in Wilhelmstrasse” — Chancellor Papen’s government, which deposed the Social Democratic-led government of Prussia on 20 July 1932.',
          'Reichsbanner — the mass republican veterans’ and defence league founded to protect the Republic.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Weimar Republic’s final years written by an academic historian and published in 2009.',
        body: 'Germany voted five times at the national level in 1932 — two presidential rounds, two Reichstag elections and a Prussian state election — and each campaign was less an argument within democracy than a referendum upon it. The parties that unreservedly defended the Republic had shrunk to the Social Democrats and the remnants of the Catholic Centre; between them stood a fractured middle whose voters had already fled to the radicals. Campaigning itself militarised: parties fielded uniformed armies, the SA alone numbering some 400,000, and the summer’s street fighting killed roughly a hundred people in July, with Altona’s “Bloody Sunday” leaving eighteen dead in a single afternoon. The staggering fact is not that the Nazis won 37 per cent in July, but that in the freest elections Germany had ever held, a majority of votes was cast, again and again, for parties committed to democracy’s abolition — the Nazis from the right, the Communists from the left. The ballot box, democracy’s own instrument, had become the siege engine at its gates.',
        footnotes: [
          'Altona’s “Bloody Sunday” — the shootings of 17 July 1932, when an SA march through a communist district of Altona ended with eighteen dead.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the July 1932 Reichstag election, the Depression at its depth, the radicalisation of politics, the SPD–NSDAP contest for Berlin)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Explains the message of the source (e.g. that the 1932 campaign was a direct, physical contest for the same voters and the same walls — democracy’s last elections fought poster against poster) by providing accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Identifies or provides a general comment about the message of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          'The context element requires placement in July 1932 — the Depression, the second of the year’s five national campaigns, the fight between List 1 (SPD) and List 2 (NSDAP) visible on the column. The message element should be supported from details: the rival slogans answering one another (“Germany awake!” against “freedom, work and peace”; “Hitler promised you…”), the appeal to women and mothers as a contested constituency, the layers of paste-ups, and the police notice failing to keep order even on the advertising column. A photograph’s “message” is what it conveys to the viewer about its subject; any legitimate, evidenced reading is rewarded.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the condition of German democracy in 1932. Account for the differences between them.',
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
          'A similarity: both sources present democracy in 1932 as besieged — the letter from inside the siege (violence, partisan police, the Prussian coup), the historian from above it (militarised campaigns, anti-democratic majorities). The central difference is stance and horizon: Source 2 still fights, insisting the Republic is worth defending and defensible, while conceding exhaustion; Source 3 delivers a retrospective verdict — the elections had become referendums on democracy that democracy was losing. Accounting should reason from origin: a committed Reichsbanner activist writing privately in the heat of the campaign, whose purpose and hopes forbid despair; a historian in 2009 who knows the outcome and writes to explain it. Both similarities and differences are required for full comparison marks.',
      },
      {
        letter: 'c',
        text: 'Analyse how Sources 1, 2 and 3 collectively represent the crisis of German democracy in 1932. In your answer, identify the key idea that links the sources.',
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
              { descriptor: 'Analyses clearly how the sources collectively represent the crisis of democracy in 1932, with detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The key linking idea should be stated early — e.g. that by 1932 the contest for Germany was fought with democracy’s own tools by forces that meant to destroy it, and its defenders were losing ground. The analysis should proceed by developments, not by sources: the propaganda war for the streets (Source 1), political violence and the intimidation of the Republic’s defenders (Source 2, extended with own knowledge of Altona, the SA ban and its lifting, the Prussian coup), and the electoral arithmetic of destruction (Source 3, extended with the July and November 1932 results, the Nazi–Communist combined majority, presidential government by decree). Omissions count only when tied to evaluation — e.g. the set shows the SPD and NSDAP but the Communists appear only in report, so the three-cornered nature of the street war is under-represented; nothing shows the backroom politics (Papen, Schleicher, Hindenburg) that would decide the outcome regardless of votes. Balance of source evidence and own knowledge is required at the top; a source-by-source walkthrough caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 15 — The Reichstag Fire and the emergency decree  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-reichstag-fire',
    title: 'The Reichstag Fire and the emergency decree, 1933',
    themeKey: 'reichstag-fire',
    themeSentence:
      'The burning of the Reichstag gave the new Nazi government the pretext for an emergency decree that suspended civil liberty in Germany for the life of the regime.',
    tags: ['p4'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of the Reichstag building, home of the German parliament, on fire on the night of 27 February 1933 — four weeks after Hitler’s appointment as Chancellor.',
        image: {
          src: 'sources/reichstag-fire.jpg',
          alt: 'The Reichstag building burning at night, 27 February 1933, smoke pouring from the dome above the inscription "Dem Deutschen Volke"',
          credit: 'Photograph, 27 February 1933. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows the parliament building at night, its windows glowing with fire and smoke pouring from the great glass dome. Above the columned entrance, lit by the flames, stands the building’s famous dedication: “DEM DEUTSCHEN VOLKE” (“To the German People”). Fire hoses and equipment are visible in the foreground; the dome’s ironwork is silhouetted against the smoke.',
        note: 'Note: a young Dutch council communist, Marinus van der Lubbe, was arrested inside the building and later executed. The government announced within hours — before any investigation — that the fire was the signal for a communist uprising.',
        footnotes: [
          'Dome — the glass and iron cupola over the parliament’s debating chamber.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extracts from the Decree of the Reich President for the Protection of People and State (“Reichstag Fire Decree”), issued under Article 48 of the constitution on 28 February 1933, the morning after the fire, and signed by President Hindenburg at the request of the Hitler government.',
        body: 'On the basis of Article 48, paragraph 2, of the German constitution, the following is decreed as a defensive measure against communist acts of violence endangering the state: §1. Articles 114, 115, 117, 118, 123, 124 and 153 of the constitution of the German Reich are suspended until further notice. Thus restrictions on personal liberty, on the right of free expression of opinion, including freedom of the press, on the right of assembly and association, and violations of the privacy of postal, telegraphic and telephonic communications, and warrants for house searches, orders for confiscations, as well as restrictions on property, are permissible beyond the legal limits otherwise prescribed. §2. If in any German state the measures necessary for the restoration of public security and order are not taken, the Reich government may temporarily take over the powers of the highest state authority.',
        footnotes: [
          'Article 48 — the constitutional article permitting the Reich President to rule by emergency decree.',
          'Suspended “until further notice” — the decree remained in force until 1945.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Nazi seizure of power written by an academic historian and published in 2011.',
        body: 'Historians still argue over who lit the fire; they no longer argue over who profited from it. Within a day, a one-paragraph decree had extinguished every civil liberty the constitution guaranteed — speech, press, assembly, the privacy of the post, the sanctity of the home — not for an emergency’s duration but “until further notice”, a notice that never came. Its first harvest was the destruction of the left: thousands of Communist functionaries were in cells or improvised camps within the week, the party’s press silenced and its candidates hunted through the final days of an election campaign they were nominally still contesting. Its second harvest was larger. The decree became the legal foundation of the concentration camp and of “protective custody”, the standing warrant by which the police state operated for twelve years. The Enabling Act of March is usually called the constitution’s death certificate; if so, the decree of 28 February was the weapon, and the fire merely the alarm bell that let the killers claim self-defence.',
        footnotes: [
          '“Protective custody” — imprisonment without trial or judicial review.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Hitler appointed Chancellor on 30 January 1933; an election campaign under way amid SA terror; the fire of 27 February blamed immediately on the communists; the arrest of van der Lubbe)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires features, not reasons. Candidates should place the photograph precisely: four weeks into Hitler’s chancellorship, days before the election of 5 March 1933, on the night the parliament building burned. Details of the source (the burning dome, the dedication “To the German People” lit by the flames) may be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the destruction of civil liberties in Germany in 1933.',
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
          'Source 2 is the instrument itself — an official decree, incontestable as evidence of exactly which liberties were suspended, by what authority, and under what justification (“defensive measure against communist acts of violence”); its limits are equally instructive: as a legal text it reveals nothing of implementation, scale or experience, and its own framing is propaganda requiring scrutiny. Source 3 supplies what the decree conceals — enforcement, the assault on the KPD, “protective custody”, the decree’s permanence — with scholarly hindsight, but as interpretation it advances an argument (decree above Enabling Act) that a historian would weigh rather than accept. Strong answers note the sources’ complementarity: the law and its life. Candidates treat the sources in parallel; comparison is not required for full marks. Not all points are needed; reward each salient point.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the importance of the Reichstag Fire to the Nazi seizure of power. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the fire’s importance in all three sources', marks: '3' },
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
          'Theme first: the set represents the fire as pretext (Source 1 and its note), the decree as the mechanism (Source 2), and the consequences as the foundation of the police state (Source 3). Strong responses test the “extent” with own knowledge on both sides: the fire mattered enormously (the March election under terror, the KPD’s destruction, the decree’s twelve-year life) — yet the seizure of power did not rest on it alone (the Enabling Act’s separate passage with Centre Party votes, the destruction of the unions and parties, the Röhm purge, Hindenburg’s death). The van der Lubbe controversy belongs here as historiography: candidates may note that the fire’s authorship remains debated while its exploitation is beyond doubt. Omissions earn marks only when tied to evaluation — e.g. the set contains no victim’s voice and no evidence from the March election, so the decree’s human application rests on Source 3’s summary alone. For higher marks: balance of sources and own knowledge, an explicit verdict on extent, theme-led structure.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 16 — The Night of the Long Knives, 1934  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-long-knives',
    title: 'The Night of the Long Knives, 1934',
    themeKey: 'long-knives',
    themeSentence:
      'By murdering the SA leadership and conservative critics alike, the regime traded its revolutionary wing for the army’s allegiance and made killing an instrument of state openly defended by law.',
    tags: ['p4'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph taken at Tempelhof airfield, Berlin, in the early 1930s: Adolf Hitler in conversation with Hermann Göring (right) and Ernst Röhm, chief of staff of the SA.',
        image: {
          src: 'sources/hitler-goering-roehm.jpg',
          alt: 'Hitler in conversation with Göring and Röhm at Tempelhof airfield, early 1930s',
          credit: 'Bundesarchiv, Bild 102-14081 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows the three men standing close together in easy conversation, dressed in civilian overcoats and hats, at the edge of the Berlin airfield. Hitler, in a belted trench coat, leans in to speak; the others listen attentively. Nothing in the photograph distinguishes the man in the centre of the group from his companions in rank or importance.',
        note: 'Note: within two years of such scenes, on 30 June – 2 July 1934, Röhm and much of the SA leadership were arrested and shot on Hitler’s orders, in an operation organised in part by Göring and the SS. Röhm, offered a pistol in his cell, refused to shoot himself and was killed by SS officers.',
        footnotes: [
          'SA (Sturmabteilung) — the Nazi Party’s brownshirted paramilitary organisation, numbering several million by 1934.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from Adolf Hitler’s speech to the Reichstag, 13 July 1934, publicly justifying the killings of 30 June – 2 July. The Reichstag received the speech with applause; a law of 3 July had already declared the killings legal as “emergency defence of the state”.',
        body: 'Mutinies are broken according to eternal, iron laws. If anyone reproaches me and asks why I did not resort to the regular courts, then all I can say is this: in this hour I was responsible for the fate of the German nation, and thereby I became the supreme judge of the German people. I gave the order to shoot the ringleaders of this treason, and I further gave the order to burn out down to the raw flesh the ulcers of this poisoning of the wells in our domestic life. The nation must know that its existence cannot be threatened with impunity by anyone, and that whoever lifts his hand against the State shall die of it. Every person must know for all future time that if he raises his hand to strike the State, then certain death is his lot.',
        footnotes: [
          'Mutiny — rebellion against lawful authority; the regime’s official claim was that Röhm had planned a coup.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the consolidation of the Nazi regime written by an academic historian and published in 2004.',
        body: 'The purge solved, in one weekend of murder, every problem the regime had carried since January 1933. The SA — four million restless men demanding a “second revolution” and a people’s army under Röhm — was decapitated and reduced to a parade organisation. The army, which had watched the brownshirts with loathing, received the killings as a gift: Defence Minister Blomberg publicly thanked the Führer, and within five weeks, on Hindenburg’s death, every soldier swore unconditional obedience not to the constitution but to Adolf Hitler personally. The SS, which had supplied the executioners, was rewarded with independence from the SA and began its climb to mastery of the police and the camps. Murdered along with Röhm were conservatives who had imagined they could tame the regime — Schleicher, the former Chancellor, shot with his wife at his own door; Papen’s associates; the author of the Marburg speech. That was the deeper lesson of 30 June, and everyone in elite Germany learned it: the state now killed its critics, announced the fact, legalised it retrospectively, and was applauded. No institution — not the courts, not the churches, not the army — raised a public protest. The dictatorship’s formative crime was also its most successful.',
        footnotes: [
          'The Marburg speech — a June 1934 address written for Vice-Chancellor Papen criticising the regime’s violence; its author, Edgar Jung, was shot in the purge.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Nazi campaigns of the early 1930s with air travel and mass rallies; the SA’s central role in the Party’s street power; Röhm’s standing as one of Hitler’s closest and longest-serving comrades; Göring’s position in the leadership)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires features, not reasons. The photograph should be placed in the early 1930s — the era of the Party’s election campaigns and rise — with the three men identified from the attribution and their relationship characterised: Röhm as SA chief and intimate of Hitler, photographed as an equal among the leadership. Candidates may note the dramatic irony recorded in the source note (the murder of Röhm within two years), but the context required is that of the photograph’s production, not the purge.',
      },
      {
        letter: 'b',
        text: 'Account for the differing perspectives of Sources 2 and 3 towards the killings of 30 June 1934. In your answer, refer to the origin of each source.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the perspective of Source 2 (e.g. the killings as the righteous act of a leader entitled to act as supreme judge in defence of the nation)', marks: '1' },
              { descriptor: 'Identifies the perspective of Source 3 (e.g. the killings as the regime’s formative crime — a calculated political transaction that bought the army and taught the elite submission)', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Accounts for both perspectives with detailed, accurate and relevant reasons drawn from the origin of each source — author, motive, bias, time, place, and purpose', marks: '5' },
              { descriptor: 'Accounts for both perspectives with mostly accurate and relevant reasons related to origin', marks: '4' },
              { descriptor: 'Accounts for one perspective with reasons, and outlines the other', marks: '3' },
              { descriptor: 'Outlines reasons for the perspective of one or both sources with limited evidence', marks: '2' },
              { descriptor: 'Provides a general comment about the perspective of one or both sources', marks: '1' },
            ],
            subtotal: 5,
          },
        ],
        notes:
          '“Account for” requires the reasons for each perspective — motives, bias, time, place, purpose. Source 2: the perpetrator justifying his own killings before a captive parliament, with every motive to construct legality (“supreme judge”), invent a treasonous plot, and convert murder into deterrent theatre; the timing (a fortnight after the purge, with the law of 3 July already passed) and audience are the explanation of its register. Source 3: a historian writing seventy years on, with access to the full record (the victims’ identities, Blomberg’s thanks, the oath, the SS’s rise), whose analytic purpose is to explain function and consequence rather than to justify or condemn alone. The origin factors are the checklist; candidates are not required to compare the sources beyond establishing the difference.',
      },
      {
        letter: 'c',
        text: 'Assess the impact of the Night of the Long Knives as shown in Sources 1, 2 and 3. To what extent do the sources capture the full consequences of the purge?',
        marks: 10,
        key: [
          {
            heading: 'Identification of impacts',
            rows: [
              { descriptor: 'Identifies impacts of the purge as represented in all three sources', marks: '3' },
              { descriptor: 'Identifies impacts in two of the sources', marks: '2' },
              { descriptor: 'Identifies impacts in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the impact of the purge — political, institutional, legal and moral — and the extent to which the sources capture its full consequences, using detailed, accurate and relevant evidence from all three sources and the broader period, with omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The second sentence does the discriminating work: candidates must identify consequences the set does NOT show and tie each to an evaluation of the set’s insight. The sources show the destruction of the SA leadership (Sources 1 and 3), the doctrine of the Führer as law (Source 2) and the institutional harvest — army, oath, SS, elite submission (Source 3). Own knowledge that completes the picture might include: the popular reaction (widespread relief and a surge in Hitler’s standing — the myth of the leader restoring order), the fusion of Chancellor and President in August 1934, the SS’s subsequent control of police and camps, and the long shadow — the purge as precedent for state murder that the Holocaust’s administrators had absorbed. Merely listing omissions earns nothing; e.g. “no source records the public’s relief, so the set shows the elite’s lesson but not the population’s consent” ties omission to evaluation. Impacts may be organised as political, institutional, legal and moral. Balance of source evidence and own knowledge is required at the top.',
      },
    ],
  },
];
