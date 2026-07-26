import type { SourceSet } from './types';

// Source sets 26–28 for Elective 7: Capitalism — the American experience
// (1901–1941).

export const CAP_SOURCE_SETS_5: SourceSet[] = [
  // ------------------------------------------------------------------
  // CAP SET 26 — The anthracite strike of 1902  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-coalstrike',
    title: 'A square deal: the anthracite strike of 1902',
    themeKey: 'cap-coalstrike',
    themeSentence:
      'The great coal strike of 1902 forced the first presidential intervention that treated labour and capital as equals — and revealed how differently Americans understood the rights of each.',
    tags: ['cap-p1', 'cap-p2'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of John Mitchell, president of the United Mine Workers of America, arriving by carriage in the coal town of Shenandoah, Pennsylvania, during the anthracite strike, 1902.',
        image: {
          src: 'sources/coal-strike-1902.jpg',
          alt: 'John Mitchell in a straw hat rides in an open carriage through Shenandoah in 1902, the carriage surrounded by running boys and men',
          credit: 'Library of Congress, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows the union president in his straw boater riding in an open carriage through a coal town, the carriage engulfed by a crowd of boys and young men who run alongside and cling to its wheels and traces. Several of the boys are barefoot; a man in a derby drives the team, and more figures perch on the paling fence behind to watch Mitchell pass.',
        note: 'Note: some 147,000 anthracite miners struck from May to October 1902 for higher wages, shorter hours and recognition of their union. Mitchell, the strike’s leader, was received in the coal towns — many of whose breaker boys and door-tenders were children — as a hero.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a letter by George F. Baer, president of the Philadelphia & Reading Railway and spokesman for the anthracite mine operators, replying to a citizen’s appeal to settle the strike, July 1902. The letter became public and was widely reprinted.',
        body: 'I do not know who you are. I see that you are a religious man; but you are evidently biased in favor of the right of the working man to control a business in which he has no other interest than to secure fair wages for the work he does. I beg of you not to be discouraged. The rights and interests of the laboring man will be protected and cared for — not by the labor agitators, but by the Christian men to whom God in His infinite wisdom has given the control of the property interests of the country, and upon the successful management of which so much depends. Do not be discouraged. Pray earnestly that right may triumph, always remembering that the Lord God Omnipotent still reigns, and that His reign is one of law and order, and not of violence and crime.',
        footnotes: [
          'The letter’s claim that God had given control of property to the operators — “the divine right of capital”, as the press called it — provoked national ridicule and damaged the operators’ cause.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Progressive era written by a historian and published in 2012.',
        body: 'The anthracite strike mattered less for its settlement than for who imposed it. As winter approached with the cities’ coal bins empty, Theodore Roosevelt did what no president had done: he summoned operators and union to the White House as equals — Mitchell’s composure impressed him; the operators’ arrogance appalled him — and when the owners refused arbitration, he prepared to send the army not to break the strike, as in 1894, but to run the mines, while Root and Morgan constructed a commission the operators could accept. The award of 1903 gave the miners ten per cent and nine hours but withheld recognition of their union; the deeper award went to the presidency. Roosevelt had asserted that in a conflict between capital and labour there was a third party — the public — whose champion the federal government must be: the doctrine he would call the Square Deal. Every later intervention, down to the New Deal’s labour boards, descends from that autumn. The operators won much of the arbitration; they lost, permanently, the assumption Baer had voiced — that the state existed to defend property and nothing else.',
        footnotes: [
          'In the Pullman strike of 1894, federal troops had been used against the strikers.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the anthracite strike of 1902 — some 147,000 miners out from May to October, Mitchell and the UMWA leading it, the coal towns’ deep poverty and child labour, the approaching winter coal famine that forced national attention)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the great strike of 1902 — the miners’ demands (wages, hours, recognition), Mitchell’s disciplined leadership and celebrity in the coal region, and the strike’s national stakes as the cities’ winter fuel ran short. Specific details from the photograph — the union president received like a visiting statesman, the mobbing boys (many themselves mine workers), the poverty of the town — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of attitudes towards labour and capital at the beginning of the 20th century.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. a first-hand statement of the operators’ outlook in their spokesman’s own words, but a private letter made public, written to rebuke)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly assessment with the settlement and its long consequences in view, but interpretive)', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Discusses the reliability of both sources by providing detailed, accurate and relevant evidence and reasons related to, for example, author, motive, bias, time, place, and purpose', marks: '5' },
              { descriptor: 'Explains the reliability of both sources by providing mostly accurate and relevant evidence and some reasons', marks: '4' },
              { descriptor: 'Describes the reliability of both sources by providing some evidence', marks: '3' },
              { descriptor: 'Describes the reliability of one source by providing some evidence', marks: '2' },
              { descriptor: 'Provides a general comment about the reliability of one or both sources with limited evidence', marks: '1' },
            ],
            subtotal: 5,
          },
        ],
        notes:
          '“Discuss” requires candidates to identify issues and provide points for and/or against; “reliability” refers to the accuracy of a source and the extent to which it is trustworthy in relation to its topic — reasoning must go beyond “it is biased” to the origin factors: author, motive, bias, time, place and purpose. Source 2 is priceless evidence of the operators’ worldview precisely because it was not written for the public — the “divine right” claim is candid; as evidence of attitudes generally it represents one extreme, and its notoriety (reprinted to damage its author) shows contemporaries judging it excessive. Source 3 commands the outcome and the long arc to the New Deal, but its focus on the presidency is an interpretive choice and its verdicts (“the deeper award”) are argument. Candidates treat the sources in parallel; they do not have to evaluate or compare the sources against each other to achieve full marks. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent relations between labour, capital and government at the beginning of the 20th century. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of labour–capital–government relations in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent those relations, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
              { descriptor: 'Evaluates the extent of the representation using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
              { descriptor: 'Discusses the extent of the representation using accurate and relevant evidence from all three sources and some own knowledge', marks: '5' },
              { descriptor: 'Explains the representation with reference to at least two sources and some accurate and relevant evidence', marks: '4' },
              { descriptor: 'Describes the representation with reference to at least two sources and some relevant evidence', marks: '3' },
              { descriptor: 'Outlines the content of at least one source with some relevant comment', marks: '2' },
              { descriptor: 'Identifies content from at least one source and/or provides a general comment with limited evidence', marks: '1' },
            ],
            subtotal: 7,
          },
        ],
        notes:
          'The theme should lead: the set represents the triangle of labour, capital and state at the moment it was redrawn — the union’s popular legitimacy (Source 1), the operators’ theology of property (Source 2), and the presidency claiming the public’s chair at the table (Source 3). Strong responses test the representation with own knowledge: the 1894 Pullman precedent of troops against strikers, the UMWA’s discipline and Mitchell’s strategy, the coal commission’s award, the Square Deal and TR’s wider programme, and the limits — union recognition withheld, the courts’ continuing hostility (injunctions, Lochner), and two more decades of industrial violence (Ludlow 1914). Omissions earn marks only when tied to evaluation — e.g. the set contains no rank-and-file miner’s voice and nothing of the strike’s ethnic diversity, and its Washington focus may overstate how quickly ordinary labour relations changed. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 27 — The Triangle fire  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-triangle',
    title: 'One hundred and forty-six: the Triangle fire',
    themeKey: 'cap-triangle',
    themeSentence:
      'The Triangle Shirtwaist fire of 1911 killed 146 garment workers in eighteen minutes — and the mourning, the anger and the legislation that followed changed what American government owed the industrial worker.',
    tags: ['cap-p1', 'cap-p5'],
    era: 'early',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the demonstration of protest and mourning after the Triangle Shirtwaist Factory fire, New York, 5 April 1911.',
        image: {
          src: 'sources/triangle-fire-protest-1911.jpg',
          alt: 'Mourners with banners reading “Ladies Waist & Dressmakers Union Local 25 — We Mourn Our Loss” and “We Mourn Our Loss — United Hebrew Trades of New York” march after the Triangle fire, 1911',
          credit: 'US National Archives, no known restrictions, via Wikimedia Commons',
        },
        body: 'The photograph shows the front ranks of a mourning march: young women and men, dressed in black, carry tall banners reading “LADIES WAIST & DRESSMAKERS UNION LOCAL 25 — WE MOURN OUR LOSS” and “WE MOURN OUR LOSS — UNITED HEBREW TRADES OF NEW YORK”, with black flags between them. Behind the marchers, the shop signs of the Lower East Side are lettered in Yiddish.',
        note: 'Note: the fire at the Triangle Shirtwaist Company on 25 March 1911 killed 146 workers, most of them young Jewish and Italian immigrant women; exit doors had been kept locked. Some 350,000 New Yorkers marched or watched the funeral procession of 5 April.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the speech of Rose Schneiderman, garment worker and union organiser, at the memorial meeting for the fire’s victims, Metropolitan Opera House, New York, April 1911.',
        body: 'I would be a traitor to these poor burned bodies if I came here to talk good fellowship. We have tried you good people of the public and we have found you wanting… This is not the first time girls have been burned alive in the city. Every week I must learn of the untimely death of one of my sister workers. Every year thousands of us are maimed. The life of men and women is so cheap and property is so sacred. There are so many of us for one job it matters little if 146 of us are burned to death. We have tried you citizens; we are trying you now, and you have a couple of dollars for the sorrowing mothers and brothers and sisters by way of a charity gift. But every time the workers come out in the only way they know to protest against conditions which are unbearable, the strong hand of the law is allowed to press down heavily upon us… I can’t talk fellowship to you who are gathered here. Too much blood has been spilled. I know from my experience it is up to the working people to save themselves. The only way they can save themselves is by a strong working-class movement.',
        footnotes: [
          'Schneiderman, herself a former cap-maker, had helped lead the great shirtwaist strike of 1909–10 — whose demands had included unlocked doors and fire escapes at the Triangle company.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of American industrial reform written by a historian and published in 2015.',
        body: 'What made Triangle different from the era’s other industrial slaughters was not the dying but the machinery of response. The fire happened in public — crowds on Washington Square watched the workers jump — in the city with the nation’s densest press, a year after the same workers’ strike for safety had been broken with the help of the courts and the police. Shame, this time, had an apparatus waiting: the unions and the settlement movement supplied the witnesses; Tammany Hall, reading the immigrant vote, supplied the politicians. The Factory Investigating Commission that Al Smith and Robert Wagner drove through Albany held hearings across the state for four years — Frances Perkins, who had watched the fire from the square, was its chief investigator — and its thirty-odd statutes rewrote the American factory: sprinklers, unlocked outward-opening doors, fire drills, limits on the hours of women and children. More duraby still, it rewrote three careers. Smith and Wagner carried the commission’s premise — that the state must police the industrial bargain — to the governorship and the Senate; Perkins carried it to Washington, where as Roosevelt’s Secretary of Labor she called the New Deal “a memorial to the Triangle dead”. The fire changed less about American capitalism than the mourners demanded, and more than the owners intended: the acquittal of the Triangle partners at trial told one truth about the law, and the statute book told the other.',
        footnotes: [
          'The company’s owners were tried for manslaughter and acquitted; they later collected insurance exceeding their losses.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that the city’s working people publicly mourn the Triangle dead as their own loss — and stand together, organised, in grief that is also indictment)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the union and United Hebrew Trades banners claiming the dead as “our loss”, the black flags and mourning dress making a funeral of a demonstration, the young women marchers standing for the victims themselves, the Yiddish shopfronts placing the grief in the immigrant community the fire struck)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim (“The message of Source 1 is that…”). “Explain” requires the why and/or how: candidates should decode the photograph’s elements — the banners’ first-person mourning, the organisations named on them (the victims’ own union local; the Jewish labour federation), the funeral blacks, the marchers’ youth and sex mirroring the dead — and connect each to the message of collective mourning as public accusation. Full marks require specific reference to elements of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the response to the Triangle fire. In your answer, identify both similarities and differences.',
        marks: 6,
        key: [
          {
            rows: [
              { descriptor: 'Compares the perspectives of both sources by identifying similarities and differences, supported by detailed, accurate and relevant evidence from both sources', marks: '6' },
              { descriptor: 'Compares the perspectives of both sources by identifying similarities and differences, supported by mostly accurate and relevant evidence', marks: '5' },
              { descriptor: 'Compares the perspectives of both sources by identifying similarities or differences, supported by some evidence from both sources', marks: '4' },
              { descriptor: 'Describes the perspective of each source with some evidence but limited comparison', marks: '3' },
              { descriptor: 'Describes the perspective of one source, or outlines both with limited evidence', marks: '2' },
              { descriptor: 'Provides a general comment about the perspective of one or both sources with limited or no evidence', marks: '1' },
            ],
            subtotal: 6,
          },
        ],
        notes:
          'In this context “compare” includes contrast: both similarities and differences are expected. Key similarities: both sources indict the pre-fire order — Schneiderman’s “life is so cheap and property is so sacred” is precisely the priority the historian shows the commission reversing; and both connect the fire to the broken 1909–10 strike whose safety demands had been refused. The central differences: Source 2, spoken over the coffins, rejects the public’s charity and the law itself, trusting only “a strong working-class movement” — for her the citizens have failed the test; Source 3, with a century’s view, argues the opposite lesson — that this time the machinery of reform worked, tracing the statutes and the careers (Smith, Wagner, Perkins) to the New Deal, while conceding the acquittal that vindicates half of Schneiderman’s bitterness. Candidates may account for the difference through origin (a grieving organiser in April 1911 versus a historian weighing outcomes), although accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of the Triangle fire for the reform of industrial conditions in America, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the fire’s significance for reform in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the significance of the fire for industrial reform, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents the fire as a hinge between industrial carelessness and the regulatory state — the community’s mourning-as-accusation (Source 1), labour’s refusal to be consoled (Source 2), and the reform machinery the catastrophe set moving (Source 3). Strong responses assess significance with own knowledge: the 1909 “Uprising of the Twenty Thousand” and its defeat, the Factory Investigating Commission’s statutes, the growth of the ILGWU, the fire’s long personnel trail to the New Deal (Perkins, Wagner’s Act of 1935), and the counterweights — the acquittal, the persistence of sweatshops, the courts’ hostility to protective law (Lochner) — that measure reform’s limits. Omissions earn marks only when tied to evaluation: the set contains no employer’s or official’s voice, and nothing of the workers who continued in unchanged shops elsewhere, which may make reform look swifter and more complete than it was. For higher marks candidates must balance source evidence and own knowledge; a source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 28 — Panic  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-bankrun',
    title: 'Panic: the death and rebirth of the banks',
    themeKey: 'cap-bankrun',
    themeSentence:
      'Between 1930 and 1933 America’s banking system collapsed in waves of panic — until the new administration closed every bank in the country, and talked the nation into opening them again.',
    tags: ['cap-p4'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of crowds outside the closed American Union Bank, New York City, 1932.',
        image: {
          src: 'sources/bank-run-1932.jpg',
          alt: 'A dense crowd of depositors fills the street corner outside the closed American Union Bank in New York, 1932, beneath a sign advertising “4% paid on thrift accounts”',
          credit: 'US National Archives, public domain, via Wikimedia Commons',
        },
        body: 'The photograph, taken from above, shows a dense crowd of depositors — hundreds of men and women in hats — filling the pavement and street corner outside a shuttered bank. Above their heads the bank’s own sign still advertises “SAFE DEPOSIT VAULTS” and “4% PAID ON THRIFT ACCOUNTS”; the traffic of the garment district passes behind.',
        note: 'Note: the American Union Bank of New York failed in 1932. Between 1930 and the national “bank holiday” of March 1933, some 9,000 American banks suspended payments; depositors’ losses had no federal insurance of any kind.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from President Roosevelt’s first “fireside chat”, broadcast by radio to the nation, 12 March 1933 — the Sunday evening before the reopening of the banks.',
        body: 'My friends: I want to talk for a few minutes with the people of the United States about banking… First of all, let me state the simple fact that when you deposit money in a bank, the bank does not put the money into a safe deposit vault. It invests your money in many different forms of credit — bonds, mortgages, loans. In other words, the bank puts your money to work to keep the wheels of industry and of agriculture turning around… Because of undermined confidence on the part of the public, there was a general rush by a large portion of our population to turn bank deposits into currency or gold — a rush so great that the soundest banks could not get enough currency to meet the demand… It was then that I issued the proclamation providing for the nationwide bank holiday… I can assure you, my friends, that it is safer to keep your money in a reopened bank than it is to keep it under the mattress… Confidence and courage are the essentials of success in carrying out our plan. You people must have faith; you must not be stampeded by rumors or guesses. Let us unite in banishing fear. We have provided the machinery to restore our financial system, and it is up to you to support and make it work. It is your problem, my friends, your problem no less than it is mine. Together we cannot fail.',
        footnotes: [
          'An estimated sixty million Americans heard the broadcast. When the banks reopened the next morning, deposits exceeded withdrawals.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the American banking crisis written by a historian and published in 2013.',
        body: 'The banking collapse was the mechanism that turned a severe recession into the Great Depression, and its cure was the New Deal’s first and perhaps greatest victory. The system’s weakness was structural: tens of thousands of small “unit” banks, forbidden by law in most states to branch, each tied to one town’s fortunes and none too big to fail; when farm prices or a local employer went down, the bank followed, and each failure taught depositors everywhere the same rational lesson — get your money out first. Three waves of panic between 1930 and 1933 destroyed nine thousand banks and, with them, a third of the money supply, while the Federal Reserve, misreading its duty, let them die. What Roosevelt supplied in March 1933 was not new money but a new story: the holiday stopped the run by fiat; the Emergency Banking Act, drafted in a weekend and passed sight unseen in eight hours, let Treasury certify banks as sound; and the fireside chat — banking explained in the language of a neighbour — made reopening an act of collective courage. The sequel made the confidence permanent: the Glass–Steagall Act separated the deposit from the speculation, and federal deposit insurance, which Roosevelt himself had opposed, ended the retail bank run in America for half a century. Nothing else the New Deal did was so complete: the panic of the photograph simply ceased to exist as an American experience.',
        footnotes: [
          'The Federal Deposit Insurance Corporation began operation in January 1934; suspensions fell from 4,000 in 1933 to 61 in 1934.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the waves of bank failures from 1930 — some 9,000 suspensions by 1933, the absence of deposit insurance making runs rational, depositors’ savings destroyed, the panic climaxing in the national bank holiday of March 1933)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the banking catastrophe of the early Depression — failures spreading in waves through an uninsured system of small banks, each collapse teaching depositors to run first, and the crowds outside closed doors becoming the crisis’s defining public scene. Specific details from the photograph — the shuttered bank, the waiting crowd, the sign still promising safety and 4 per cent — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of how the banking crisis was overcome.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the authentic text of the decisive broadcast, first-hand and consequential, but persuasion designed to manufacture the very confidence it describes)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly analysis with the statistics and the sequel, but interpretive in its verdicts)', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Discusses the reliability of both sources by providing detailed, accurate and relevant evidence and reasons related to, for example, author, motive, bias, time, place, and purpose', marks: '5' },
              { descriptor: 'Explains the reliability of both sources by providing mostly accurate and relevant evidence and some reasons', marks: '4' },
              { descriptor: 'Describes the reliability of both sources by providing some evidence', marks: '3' },
              { descriptor: 'Describes the reliability of one source by providing some evidence', marks: '2' },
              { descriptor: 'Provides a general comment about the reliability of one or both sources with limited evidence', marks: '1' },
            ],
            subtotal: 5,
          },
        ],
        notes:
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is the instrument itself — the reassurance that worked, verifiable against the next morning’s deposits — and its simplifications are purposeful: it does not mention that Treasury certification was partly bluff, nor the deflationary role of the Federal Reserve, because its purpose was courage, not analysis; it is evidence of method more than of mechanism. Source 3 supplies the mechanism (unit banking, the money supply, the Fed’s failure) and the sequel (Glass–Steagall, the FDIC), with the interpretive confidence of hindsight — “nothing else the New Deal did was so complete” is a judgement, though a well-evidenced one. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the effectiveness of the political responses to the Great Depression. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the responses’ effectiveness in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the effectiveness of the responses, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
              { descriptor: 'Evaluates the extent of the representation using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
              { descriptor: 'Discusses the extent of the representation using accurate and relevant evidence from all three sources and some own knowledge', marks: '5' },
              { descriptor: 'Explains the representation with reference to at least two sources and some accurate and relevant evidence', marks: '4' },
              { descriptor: 'Describes the representation with reference to at least two sources and some relevant evidence', marks: '3' },
              { descriptor: 'Outlines the content of at least one source with some relevant comment', marks: '2' },
              { descriptor: 'Identifies content from at least one source and/or provides a general comment with limited evidence', marks: '1' },
            ],
            subtotal: 7,
          },
        ],
        notes:
          'The theme should lead: the set represents the Depression’s political answer at its most successful — the panic (Source 1), the persuasion (Source 2), and the permanent architecture (Source 3). Strong responses widen the effectiveness question with own knowledge: Hoover’s RFC as the unacknowledged predecessor, the Hundred Days around the banking rescue, the SEC and Glass–Steagall, and the contrast with the New Deal’s less complete victories — unemployment unsolved until war, the 1937–38 relapse — which the banking case can misrepresent if generalised. The strongest answers use the set to argue a discriminating verdict: the New Deal was most effective where confidence and structure, not spending alone, were the cure. Omissions tied to evaluation: the depositors who had already lost everything before 1933 appear only as a crowd, and Hoover’s efforts are absent, which flatters the contrast. A source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
