import type { SourceSet } from './types';

// Source sets 7–14 for Elective 7: Capitalism — the American experience
// (1901–1941). Text sources are constructed for skills practice in the style
// of the period; images are real and credited.

export const CAP_SOURCE_SETS_2: SourceSet[] = [
  // ------------------------------------------------------------------
  // CAP SET 7 — The children of industry  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-childlabor',
    title: 'The children of industry: child labour and its enemies',
    themeKey: 'cap-childlabor',
    themeSentence:
      'At the start of the twentieth century some two million American children worked in mines, mills and streets — and the campaign against child labour became one of progressivism’s defining battles.',
    tags: ['cap-p1'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph by Lewis Hine of “breaker boys” employed by the Pennsylvania Coal Company at the Ewen Breaker, South Pittston, Pennsylvania, January 1911.',
        image: {
          src: 'sources/breaker-boys-1911.jpg',
          alt: 'Lewis Hine photograph of dozens of coal-blackened breaker boys in caps posed at the Ewen Breaker, Pennsylvania, 1911',
          credit: 'Lewis W. Hine, National Child Labor Committee collection. Library of Congress, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows several dozen boys posed in rows outside the coal breaker where they work. Their faces and clothes are black with coal dust; most wear caps and heavy boots, and several look considerably younger than twelve. A handful of adult men stand among them at the edges of the group.',
        note: 'Note: breaker boys sat over chutes picking slate from moving coal, ten hours a day, six days a week. Hine took the photograph for the National Child Labor Committee, often talking his way into workplaces to do so.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a report by an investigator for the National Child Labor Committee, 1911.',
        body: 'I counted forty boys in the one breaker, bent double over the chutes in air so thick with dust that I could not see across the room. The dust penetrates everything; the boys cough continually, and the bosses walk the plank above them with a broom-handle to rap the knuckles of any boy caught idle. Michael, aged nine — the certificate his father bought swears he is fourteen — earns forty cents for a ten-hour day, and has already lost the top joint of a finger in the rollers. The superintendent tells me the work “makes little men of them”. It makes little old men of them: I have met boys of twelve with the stooped backs of fifty. And when I asked why they were not at school, he answered, without shame, that the mine could not run without them and their fathers could not live without their wages.',
        footnotes: [
          'Age certificates were legally required but easily forged or bought in most mining states.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of American child labour reform written by a historian and published in 2014.',
        body: 'The campaign against child labour shows both the power and the limits of progressive reform. Its weapons were publicity and shame: Hine’s photographs and the NCLC’s reports made the breaker boy and the mill girl national figures, and by 1914 nearly every state had some child labour law. But the limits were equally instructive. Southern mill states gutted their own statutes; the federal Keating–Owen Act of 1916, the movement’s great triumph, was struck down by the Supreme Court within two years as beyond Congress’s power over commerce; and a constitutional amendment failed in the 1920s amid cries of Bolshevism and interference with the family. What finally emptied the breakers was not law but machinery and the Depression — mechanical slate-pickers, and grown men desperate enough to take children’s jobs. Not until 1938 did federal law durably prohibit the labour of children — a generation after the cameras had told the country what it already knew.',
        footnotes: [
          'Keating–Owen Act — banned interstate commerce in goods made by child labour; struck down in Hammer v. Dagenhart (1918).',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. widespread child labour in mines and mills at the start of the century — some two million children, the National Child Labor Committee’s investigation and publicity campaign, Hine’s documentary photography as a reform weapon, weak and evaded state laws)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the industrial economy’s dependence on cheap child labour at the start of the twentieth century, the anthracite industry’s breaker boys as its most visible case, and the NCLC’s campaign (founded 1904) with Hine as its photographer from 1908 — pictures taken to be published, lectured with and legislated on. Specific details from the photograph — the coal-blackened faces, the boys’ ages, the adult overseers — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the conditions of working children in early twentieth-century America.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. a first-hand investigation rich in specific detail, but written by a committed reformer to move legislators and the public)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly assessment with the whole story and its outcomes, but distant and interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is eyewitness testimony gathered on the spot, and its details (the forged certificate, the wages, the injuries) are of the kind the NCLC documented systematically; its purpose, however, is persuasion — the investigator selects the worst, and the quoted superintendent is chosen to damn himself. Source 3 offers the long view and is candid about reform’s failures as well as its victories, but it compresses a complex movement and passes judgements (“the country already knew”) that are interpretation. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the social conditions of industrial America at the beginning of the 20th century. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of industrial social conditions in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the era’s social conditions, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the human price of industrial capitalism before regulation — children as industrial labour (Sources 1 and 2) and the reform movement’s long, obstructed campaign (Source 3). Strong responses widen the frame with own knowledge: the twelve-hour day in steel, industrial accident rates, tenement conditions, immigrant labour, the absence of workmen’s compensation before state reforms, and the parallel muckraking exposures (Riis, Spargo’s “The Bitter Cry of the Children”, Sinclair). Balance earns credit: real wages were rising and America drew millions of migrants precisely because opportunity was real — the set shows the system’s victims, not its beneficiaries, an omission worth evaluating alongside the absence of the working children’s own families, for whom the wages were survival. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 8 — The five-dollar day: Ford and mass production  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-fordism',
    title: 'The five-dollar day: Ford and mass production',
    themeKey: 'cap-fordism',
    themeSentence:
      'Ford’s moving assembly line and five-dollar day created mass production and the mass consumer in one stroke — and subjected the worker to a discipline no factory had known before.',
    tags: ['cap-p2', 'cap-i-ford'],
    era: 'early',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the flywheel magneto assembly line at the Ford Motor Company’s Highland Park plant, Michigan, 1913 — the first moving assembly line.',
        image: {
          src: 'sources/ford-assembly-line-1913.jpg',
          alt: 'Workers at the first moving assembly line at Ford Highland Park, 1913, standing along a rail with parts bins beneath',
          credit: 'Photographer unknown, 1913. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows a line of workers standing shoulder to shoulder along a waist-high rail, each performing his task on a part as it passes. Bins of identical components line the rail beneath their hands; behind them, belts and pulleys descend from the ceiling shafts, and further lines of men stretch away into the depth of the plant.',
        note: 'Note: the moving line cut the assembly time of the flywheel magneto from twenty minutes to five. Within a year Ford had extended the principle to the whole car, and in January 1914 announced the five-dollar day — roughly double the going wage.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a published account by Henry Ford of his manufacturing and wage policies, 1922.',
        body: 'The net result of the application of these principles is the reduction of the necessity for thought on the part of the worker and the reduction of his movements to a minimum. He does as nearly as possible only one thing with only one movement. Some men do only one small operation eight hours a day, and they like it: thinking is a burden most men are glad to lay down at the factory gate. We pay them for their time, and we pay well. When we announced the five-dollar day, wise men said we should be ruined. Instead our men became our customers, and the buying power of our own workers helped to build the market for our cars. High wages and low prices are not philanthropy; they are the best business policy in the world. A business that makes nothing but money is a poor kind of business; but a business that pays low wages is no kind of business at all, for it destroys the very people who must buy its goods.',
        footnotes: [
          'The five-dollar day came with conditions: the “profit-sharing” portion was paid only to workers whose home lives satisfied Ford’s Sociological Department inspectors.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of American mass production written by a historian and published in 2016.',
        body: 'Fordism was a bargain, and both halves of it were new. The worker surrendered his craft, his pace and a good deal of his privacy — the line set the speed, the foreman held the stopwatch, and the Sociological Department inspected his marriage, his savings and his sobriety before paying the full five dollars. In exchange he received wages that made him, for the first time, a consumer of the very goods he made. The bargain worked: turnover at Highland Park, which had reached 370 per cent in 1913, collapsed; the price of the Model T fell by two-thirds; and by 1923 half the cars on earth were Fords. But its logic was double-edged. The line that raised wages also made men interchangeable, and the company that doubled pay in 1914 fought the unions with spies and clubs into the 1930s. Fordism gave the American worker abundance without power — a settlement that held until the Depression broke it.',
        footnotes: [
          'Turnover — the rate at which workers quit and had to be replaced.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Outline the historical context in which Source 1 was produced.',
        marks: 4,
        key: [
          {
            rows: [
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Ford’s development of the moving assembly line at Highland Park in 1913, the drive to mass-produce the Model T at falling cost, scientific management and the subdivision of labour, the five-dollar day announced in January 1914)', marks: '4' },
              { descriptor: 'Outlines the context of the source by including mostly accurate details represented in and/or surrounding the source', marks: '3' },
              { descriptor: 'Outlines the context of the source with some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 4,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: Highland Park in 1913 — the experimental moving line applied first to the flywheel magneto, Taylorist time-study and the subdivision of tasks, the Model T’s soaring demand, catastrophic labour turnover, and the five-dollar day that followed within months. Specific details from the photograph — the men fixed at one station each, the identical parts in bins, the power shafts driving the line — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding Ford’s system of mass production. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities: both sources describe the same mechanism — the radical subdivision of labour and the high wage that turned workers into customers; both present the five-dollar day as sound business rather than charity; and both connect Fordism to the growth of the mass market. The central differences: Source 2 speaks as the system’s creator and celebrates it — workers are “glad” to stop thinking, high wages complete the circle; Source 3 weighs the same bargain from outside, restoring what Ford omits — the stopwatch, the Sociological Department’s intrusion, the interchangeability of men and the war on unions — and frames the settlement as “abundance without power”. Candidates may account for the difference through origin and purpose (self-justifying memoir versus retrospective scholarship), though accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the impact of mass production on the American experience of capitalism. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of mass production’s impact in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent mass production’s impact, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
              { descriptor: 'Assesses the extent of the representation using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
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
          'The theme should lead: the set represents mass production as the engine that remade both work and consumption — the line itself (Source 1), its creator’s theory of high wages and low prices (Source 2), and the historian’s double-edged bargain (Source 3). Strong responses test the representation with own knowledge: the Model T’s price falling from $850 to under $300, the spread of Fordist methods through industry, welfare capitalism, the growth of consumer credit that Ford himself resisted, GM’s alternative model of the annual restyle, and the eventual collapse of the settlement in the 1930s (the Battle of the Overpass, UAW recognition in 1941). Omissions tied to evaluation might include the absence of any worker’s own voice — the line as experienced rather than designed — and of the excluded (Black workers confined to the foundry; women barred from the five-dollar day for years). A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 9 — Over here: the First World War and American capitalism  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-wwi',
    title: 'Over here: the First World War and American capitalism',
    themeKey: 'cap-wwi',
    themeSentence:
      'The First World War made the United States the world’s creditor, taught Washington to manage the economy, and bound patriotism to the dollar — with consequences that ran through the whole interwar period.',
    tags: ['cap-p2'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: “You buy a Liberty Bond, lest I perish!” — a poster by C. R. Macauley for the United States Liberty Loan campaign, 1917.',
        image: {
          src: 'sources/liberty-bond-1917.jpg',
          alt: '1917 Liberty Loan poster: the Statue of Liberty points at the viewer above the words “You buy a Liberty Bond lest I perish”',
          credit: 'C. R. Macauley, US Treasury Liberty Loan poster, 1917. US National Archives, public domain, via Wikimedia Commons',
        },
        body: 'The poster shows the Statue of Liberty leaning out of the frame, her face anxious, pointing directly at the viewer with one hand while the other grips her extinguished torch. Around her run the words “YOU buy a LIBERTY BOND — LEST I PERISH”, with the seal of the 1917 Liberty Loan — “Get behind the Government” — printed at each lower corner.',
        note: 'Note: four Liberty Loan drives between 1917 and 1918 raised some seventeen billion dollars from around twenty million subscribers — most of whom had never owned a security of any kind before.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an address by a director of the War Industries Board to a convention of manufacturers, 1918.',
        body: 'Gentlemen, this war is a war of workshops as much as of trenches. The Board asks of you three things: convert, produce, and comply. Convert your plants to war work and the government will see you are not the loser by it; produce to the schedules we set, for a shell delayed is a life thrown away; and comply with the priorities, the price schedules and the labour rulings, for in this emergency the public interest commands private enterprise, and no man’s profit can be suffered to stand against the nation’s need. Some of you have called this regimentation; some have whispered the word socialism. I answer: it is neither — it is patriotism organised. And I promise you this: the businessman who serves his country now serves his shareholders too, for we are building here, in this partnership of government and industry, a discipline and a capacity that will command the markets of the world when peace returns.',
        footnotes: [
          'War Industries Board — the federal agency, chaired by Bernard Baruch, that coordinated war production in 1917–18.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from an economic history of the United States written by a historian and published in 2013.',
        body: 'The war changed America’s position in the world economy more in four years than the previous forty had done. A debtor nation owing four billion dollars became a creditor owed ten; New York displaced London as the world’s banker; and the flood of Allied war orders — steel, wheat, munitions, ships — set off a boom that doubled the value of manufacturing output. At home, the state discovered it could manage capitalism: the War Industries Board allocated materials, daylight saving and standardised products date from those months, and the Liberty Loans taught a mass public to own paper wealth — a habit Wall Street would exploit in the following decade. The demobilisation was as instructive as the mobilisation: controls were scrapped overnight, a vicious slump and strike wave followed in 1919–21, and the wartime partnership of business and government dissolved — remembered fondly by the businessmen, and by the young administrators who would staff another emergency government in 1933.',
        footnotes: [
          'The farm sector, having expanded to feed the Allies, was left overextended when European agriculture recovered — the root of the 1920s farm depression.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. American entry into the First World War in April 1917, the Liberty Loan drives financing the war from mass subscription, the mobilisation of advertising and patriotic imagery, the campaign to make war finance a citizen’s duty)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: 1917 — the United States newly at war, the Treasury’s decision to finance it by borrowing from the whole public rather than taxation alone, the four Liberty Loan drives with their posters, parades and four-minute men, and the harnessing of mass persuasion (the Committee on Public Information) to economic ends. Specific details from the poster — Liberty herself endangered, the direct second-person address, the extinguished torch — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the impact of the First World War on American capitalism.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. a first-hand official voice of the wartime mobilisation, but exhortation addressed to businessmen with promises to win their compliance)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective economic history with figures and the long view, but distant and interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 shows how the wartime state actually spoke to business — the mixture of command (“comply”), reassurance (no one “the loser by it”) and prophecy (world markets) is authentic to the WIB’s methods; as evidence of results it is worthless, being promise rather than outcome, and its dismissal of “regimentation” is special pleading. Source 3 commands the statistics (debtor to creditor, the doubling of output) and can trace consequences to 1919–21 and 1933; its limits are hindsight’s neatness — the connections it draws to the twenties boom and the New Deal are interpretations, however plausible. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the impact of the First World War on the American experience of capitalism. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the war’s impact on American capitalism in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the war’s impact, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the war as a transformation of American capitalism — finance made patriotic and popular (Source 1), business conscripted into partnership with the state (Source 2), and the structural revolution in America’s world position (Source 3). Strong responses test and extend with own knowledge: the Great Migration drawn north by war industry, women’s war work, the 1919 strike wave and Red Scare when the wartime bargain collapsed, the farm sector’s fatal over-expansion, war debts and reparations entangling American finance with Europe, and the WIB as remembered precedent for the New Deal’s alphabet agencies. Omissions tied to evaluation: labour’s wartime gains and postwar defeats appear in none of the sources, nor does the coercive side of war finance (the social pressure and vigilantism behind “voluntary” subscription). A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 10 — The air is full of music: radio and the Jazz Age  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-jazzage',
    title: 'The air is full of music: radio, jazz and the new woman',
    themeKey: 'cap-jazzage',
    themeSentence:
      'Radio, records and the movies made entertainment an industry in the 1920s, carried jazz and new manners into every parlour, and made the modern young woman the face of a cultural revolution.',
    tags: ['cap-p3'],
    era: 'mid',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of the Brox Sisters, a popular singing trio, tuning a radio set, c. 1925.',
        image: {
          src: 'sources/brox-sisters-radio-1920s.jpg',
          alt: 'The Brox Sisters, three young women with bobbed hair in fashionable dresses, gathered around a valve radio set with a horn loudspeaker, c. 1925',
          credit: 'Bain News Service. Library of Congress, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows three young women — sisters in a popular singing act — gathered in a parlour around a valve radio set, one reaching to the tuning dial. A great horn loudspeaker rises behind the set. All three wear the bobbed hair, drop-waisted dresses and buckled shoes of the decade’s fashion; one holds a teddy bear on her lap.',
        note: 'Note: commercial radio broadcasting began in the United States in 1920; by the end of the decade some twelve million households owned a set, and national networks (NBC 1926, CBS 1927) sold audiences to advertisers.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an article by a clergyman in a national periodical, 1926, under the title “Does Jazz Put the Sin in Syncopation?”',
        body: 'I speak with the parents of this nation when I say that a moral epidemic is upon us, and its carriers are the dance orchestra, the radio and the motion picture. Jazz — with its barbaric rhythms, born in the dives of New Orleans — is the accompaniment of the reeling, hip-to-hip dances that have banished modesty from the ballroom. The motor car has become a parlour without a chaperone; the moving picture instructs our daughters in kisses their mothers never knew; and now the radio carries the cabaret into the very nursery. Our daughters paint their faces, shorten their skirts and their hair, and call their fathers by their first names. I do not say the girl of today is worse at heart than her mother — I say she is unguarded, and that the guardians have sold the gate. For let us be honest: it is not the Negro musician nor the Russian Jew of the film colony who profits most by this trade in temptation, but respectable American business, which has found that sin, well advertised, outsells virtue.',
        footnotes: [
          'Articles of this kind — this title echoes a famous 1921 example — filled respectable magazines throughout the decade.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a cultural history of the 1920s written by a historian and published in 2018.',
        body: 'What contemporaries experienced as a moral crisis, the historian recognises as a market. The phonograph, the radio and the picture palace industrialised entertainment, and industry needs customers, not congregations: the flapper was as much a marketing category as a social type, her bob and her lipstick the products of a beauty industry that grew tenfold in a decade. Jazz crossed the race line on records and airwaves years before any civil rights law touched the matter — though its Black creators saw white bands take the fame and most of the money. And the panic of the pulpits was itself part of the system: denunciation was publicity, and the movies learned to sell both the sin and the sermon (the vamp punished in the final reel). What the twenties invented was not pleasure but the mass marketing of pleasure — and with it the discovery that in a consumer culture, the young set the styles and the old buy the complaints.',
        footnotes: [
          'Vamp — the seductive female figure of silent-era films.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Outline the historical context in which Source 1 was produced.',
        marks: 4,
        key: [
          {
            rows: [
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the radio boom after 1920 and the rise of network broadcasting, entertainment as a mass industry selling stars and audiences, the “new woman” of the 1920s — bobbed hair, new fashions and freedoms — and the publicity photograph as part of that industry)', marks: '4' },
              { descriptor: 'Outlines the context of the source by including mostly accurate details represented in and/or surrounding the source', marks: '3' },
              { descriptor: 'Outlines the context of the source with some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 4,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the mid-1920s entertainment boom — radio ownership spreading through the middle class, the networks and their advertisers, vaudeville and Broadway acts like the Brox Sisters carried to national audiences, and the decade’s fashions (the bob, the drop-waist) as both symbol and product of the new consumer culture. Specific details from the photograph — the valve set and horn speaker as expensive new technology, the sisters’ styling, the staged domestic scene — should be connected to those circumstances, including its nature as a publicity image. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the popular culture of the 1920s. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities — easily missed: both sources agree that the new mass media transformed manners and morals, that the young were its vanguard, and, strikingly, that business profited from the transformation (the clergyman’s “sin, well advertised, outsells virtue” anticipates the historian’s “mass marketing of pleasure”). The central differences: Source 2 judges — the change is moral decline, the media its carriers, and the note of nativism and race in its language is itself evidence of the decade’s anxieties; Source 3 analyses — the “crisis” was a market, the flapper a commercial category, and the moral panic itself part of the publicity machine. Candidates may account for the difference through origin (a clergyman defending guardianship in 1926 versus a historian with a century’s distance), though accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the ways American capitalism shaped American values in the 1920s. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of capitalism shaping values in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent capitalism’s shaping of values, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
              { descriptor: 'Assesses the extent of the representation using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
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
          'The theme should lead: the set represents the commercialisation of culture — the entertainment industry and its stars (Source 1), the moral resistance it provoked (Source 2), and the historian’s argument that even the resistance fed the market (Source 3). Strong responses extend with own knowledge from the syllabus’s examples: Hollywood and the star system, the beauty industry of Rubinstein and Arden, jazz’s migration from New Orleans to national radio, the Charleston and dance crazes, advertising’s new psychology, and the counter-attack — Prohibition enforcement, the Klan, the Scopes trial — as the other face of the same struggle. Omissions tied to evaluation: the set’s glamour is white and urban — Black jazz musicians appear only in the clergyman’s slur and the historian’s aside, and rural America, for whom radio meant weather and church as much as jazz, is absent. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 11 — One hundred per cent American: the Klan at high tide  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-klan',
    title: 'One hundred per cent American: the Klan at high tide',
    themeKey: 'cap-klan',
    themeSentence:
      'In the mid-1920s the revived Ku Klux Klan marched openly through the national capital — a mass movement of native-born Protestant America whose power, and sudden collapse, revealed the decade’s deepest divisions.',
    tags: ['cap-p3', 'cap-p5'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of Dr Hiram W. Evans, Imperial Wizard of the Ku Klux Klan, leading a Klan parade in Washington, D.C., September 1926.',
        image: {
          src: 'sources/klan-parade-washington-1926.jpg',
          alt: 'Imperial Wizard Hiram Evans in robes leads unmasked Klansmen down a Washington street lined with spectators, 1926',
          credit: 'National Photo Company. Library of Congress, no known restrictions, via Wikimedia Commons',
        },
        body: 'The photograph shows the Klan’s national leader in full satin robes and pointed hood — worn thrown back, his face bare and smiling — striding down the centre of a Washington street. Behind him march files of robed Klansmen, likewise unmasked; spectators line the pavement under the trees as if for any civic parade.',
        note: 'Note: the Klan paraded down Pennsylvania Avenue in August 1925 and again in September 1926, tens of thousands strong. Marchers were unmasked — Washington police required it, and the Klan of the mid-1920s courted publicity rather than shunning it.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an editorial in an African American weekly newspaper, September 1926.',
        body: 'They marched again on Saturday down the avenue of the republic, hoods thrown back, faces bare to the sun, and the capital watched as one watches a circus. We are asked to be reassured by the bare faces — see, say the apologists, how respectable, how orderly, how American. That is precisely what should alarm the nation. The night-rider hides his face; the neighbour does not need to. When the dry-goods merchant, the dentist and the deacon can walk in a bedsheet past the Capitol of the United States and back to their pews on Sunday without one word of rebuke from the pulpit, the press or the President, then the sickness is not in some swamp of ignorance but in the respectable heart of white America. Coloured Washington did not riot; it did not even watch; it stayed home, doors shut, as our people have learned to do. But let the record show what the republic permitted on its own front street — and let no one say afterward that they did not know.',
        footnotes: [
          'The Black press — the Chicago Defender, the Pittsburgh Courier and many local weeklies — led the reporting and denunciation of the revived Klan throughout the decade.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the second Ku Klux Klan written by a historian and published in 2017.',
        body: 'The Klan of the 1920s was not a southern secret society but a national mass movement — perhaps four million members at its 1924 peak, strongest in Indiana, Ohio and Oregon, organised by professional promoters who sold memberships, robes and insurance like any other franchise. Its programme fused Prohibition enforcement, anti-Catholicism, antisemitism and immigration restriction with boosterish civic Protestantism; its members were dentists, grocers and Masons, not the dispossessed. For a few years it elected governors and senators and terrified both parties — the Democratic convention of 1924 could not bring itself to condemn the Klan by name. Its fall was as swift as its rise: the conviction of Indiana Grand Dragon D. C. Stephenson in 1925 for the abduction and death of Madge Oberholtzer destroyed the pose of moral guardianship, membership collapsed to the tens of thousands by 1930 — and yet the movement’s central demand had already been written into law, for the quota acts of 1921 and 1924 gave nativism its permanent victory. The organisation died; much of its programme did not.',
        footnotes: [
          'The National Origins quota system of 1924 restricted immigration on ethnic lines until 1965.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the revived Klan of the 1920s as a mass national movement claiming millions of members, its public parades in Washington in 1925–26, its programme of “one hundred per cent Americanism” — nativism, anti-Catholicism, Prohibition enforcement — and its courting of respectability and publicity)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the second Klan at its public height — a mass movement of native-born Protestants, strongest outside the South, marching unmasked through the capital in 1925 and 1926 to display its respectability and political weight. Specific details from the photograph — the Imperial Wizard’s bare smiling face, the civic-parade atmosphere, the watching crowds — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the nature and significance of the Ku Klux Klan in the 1920s.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. a contemporary voice of the Klan’s principal targets, first-hand and morally acute, but an editorial written to indict)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly account with membership figures and the full arc of rise and fall, but distant and interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is first-hand evidence of how the Klan’s targets experienced its respectability — the argument that bare faces made it more dangerous, not less, and the detail of Black Washington staying indoors, carry the authority of the threatened; as an editorial it selects and accuses, and its claim of universal silence overstates (some press and pulpits did condemn). Source 3 has the numbers, the franchise economics and the Stephenson scandal, and its distinction between the organisation’s collapse and its programme’s victory is powerful analysis — but it is interpretation, and its cool tone can understate the violence that accompanied the movement in the South and West. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the divisions within American society in the 1920s. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the decade’s social divisions in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the divisions of the 1920s, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the 1920s as a society divided by race, religion and origin — the majority movement parading its power (Source 1), the minority voice naming the threat (Source 2), and the historian weighing organisation against programme (Source 3). Strong responses widen with own knowledge: the quota acts of 1921 and 1924, the Great Migration and the 1919 riots, anti-Catholicism in the 1928 campaign against Al Smith, the Scopes trial, Prohibition’s cultural politics, and the Klan’s regional violence. Balance and omissions: the set contains no Klan member’s own voice (the values set’s recruiting rhetoric would supply it), no Catholic or Jewish perspective, and nothing on divisions of class — the era’s labour conflicts — which may narrow “divisions” to the cultural. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 12 — Black Thursday: the Crash of 1929  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-crash',
    title: 'Black Thursday: the Crash of 1929',
    themeKey: 'cap-crash',
    themeSentence:
      'In late October 1929 the speculative boom of the New Era collapsed in days — and the Crash became the great symbol, then and since, of a capitalism that had believed itself beyond gravity.',
    tags: ['cap-p4'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of crowds on the steps of the Sub-Treasury building opposite the New York Stock Exchange, Thursday 24 October 1929.',
        image: {
          src: 'sources/wall-street-crowd-1929.jpg',
          alt: 'Crowds in hats fill Wall Street and the steps beneath the Washington statue opposite the Stock Exchange on Black Thursday, 24 October 1929',
          credit: 'Associated Press photograph, 1929. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows Wall Street filled from wall to wall with men in hats, packed on the steps beneath the statue of George Washington and spilling around halted motor cars. Nearly every face is turned towards the Stock Exchange across the street; the crowd stands, watches and waits.',
        note: 'Note: on “Black Thursday”, 24 October 1929, nearly thirteen million shares changed hands in panic selling; the following Tuesday, 29 October, sixteen million. By mid-November the market had lost roughly a third of its September value.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a letter written by a clerk in a New York brokerage house to his brother, 30 October 1929.',
        body: 'You ask what it was like. It was like watching a dam go, from underneath. Thursday morning the tape fell behind the trading and never caught up — men were selling blind, not knowing whether they were ruined or merely poorer, and the crowd outside stood so quiet it frightened me more than shouting would have. The big men sent Whitney onto the floor at noon to bid for Steel above the market, the way you show a nervous horse there is nothing in the hedge, and for two days it held. Tuesday it did not hold. I have seen customers this week — doctors, schoolteachers, a minister, men who bought on ten per cent margin because the elevator boy was doing it — watch everything they had sold out by three o’clock. The papers say the fundamentals are sound and prosperity is just around the corner. Perhaps. But I can tell you that what died down here this week was not money only. It was the belief that the thing could never go down.',
        footnotes: [
          'Margin — buying shares with borrowed money; a ten per cent margin meant nine-tenths of the price was a broker’s loan, called in when prices fell.',
          'Richard Whitney — vice-president of the Exchange, whose theatrical bid for US Steel on 24 October briefly steadied the market.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Crash written by an economic historian and published in 2009.',
        body: 'The Crash needs two explanations, and confusing them has misled generations: why the bubble, and what the bursting caused. The bubble was real enough — stocks trebled in five years while earnings did not, sustained by margin debt that doubled in two, by investment trusts pyramided on one another, and by a national conviction, preached from pulpits of finance and government alike, that the New Era had abolished the business cycle. But the Crash itself destroyed remarkably little real wealth: fewer than three per cent of Americans owned shares, and output in November 1929 was barely below the summer’s. Its power was as a signal and a solvent. It destroyed the confidence on which instalment buying and business investment ran; it exposed the frauds and pyramids of the boom; and it announced, more loudly than any statistic, that the men who claimed to understand prosperity did not. What made the Depression great came afterwards — the banking collapses, the deflation, the policy failures — but the Crash opened the door through which those disasters walked.',
        footnotes: [
          'Investment trust — a company formed to hold shares in other companies, often layered with borrowed money.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the speculative boom of the late 1920s and buying on margin, the panic selling of Black Thursday 24 October 1929 and Black Tuesday 29 October, crowds gathering on Wall Street as the market fell, the end of New Era confidence)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the last week of October 1929 — the bull market of the New Era breaking after its September peak, record panic volumes on the 24th and 29th, the bankers’ attempted rescue, and the crowds that gathered outside the Exchange as the visible face of a national event. Specific details from the photograph — the packed street, the watching silence, the setting between the Exchange and the Washington statue — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the causes and significance of the Wall Street Crash.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. an eyewitness inside a brokerage writing privately within the week, vivid and unguarded, but one clerk’s view of an event larger than any office)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective economic history with figures and analytical distance, but interpretive and writing against earlier accounts)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is a private letter — no audience to impress, written while the events were days old, from inside the machine (the lagging tape, Whitney’s bid, the margin customers), and its final judgement about the death of belief anticipates what historians would conclude; its limits are anecdote and vantage — one office, one week, no view of causes. Source 3 offers exactly what the clerk cannot — proportions (three per cent shareholding), mechanisms (trusts, margin debt) and the separation of Crash from Depression — but it is argumentative interpretation, consciously correcting the popular story, and historians still dispute the weights it assigns. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the end of the prosperity of the 1920s. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the end of 1920s prosperity in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the boom’s end, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the Crash as the New Era’s public death — the watching crowd (Source 1), the insider’s account of belief collapsing (Source 2), and the historian’s careful separation of symbol from cause (Source 3). Strong responses test with own knowledge: the boom’s statistics (the Dow from 63 in 1921 to 381 in September 1929), margin debt and the investment trusts, the weak foundations already visible (farm depression, sick industries, inequality), and the sequence from Crash to Depression — banking panics from 1930, Smoot–Hawley, the Federal Reserve’s contraction — that Source 3 insists came afterwards. Omissions tied to evaluation: the set is Wall Street’s story — no farmer, worker or Main Street bank appears, though for most Americans the Depression arrived through those doors, not the Exchange. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 13 — The Bonus Army  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-bonusarmy',
    title: 'The Bonus Army: veterans against the government',
    themeKey: 'cap-bonusarmy',
    themeSentence:
      'In the summer of 1932 the army drove unemployed war veterans and their families out of Washington with tanks and tear gas — and the burning of their camp within sight of the Capitol destroyed what remained of Hoover’s presidency.',
    tags: ['cap-p4', 'cap-p5'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of the Bonus Army’s camp on the Anacostia flats, Washington, D.C., burning on the night of 28 July 1932.',
        image: {
          src: 'sources/bonus-army-burning-1932.jpg',
          alt: 'Shacks of the Bonus Army camp burn on the Anacostia flats with the dome of the US Capitol visible in the background, July 1932',
          credit: 'US National Archives, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows the veterans’ shanty camp in flames — shacks of salvaged boards and tin burning fiercely in the foreground, smoke rolling across the sky. Beyond the trees, pale and distinct above the destruction, rises the dome of the United States Capitol.',
        note: 'Note: some 20,000 First World War veterans — the “Bonus Expeditionary Force” — had camped in Washington since May 1932 to demand early payment of their promised war bonus. On 28 July, troops under General Douglas MacArthur, with tanks, cavalry and tear gas, cleared the camps; the Anacostia settlement burned that night.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the statement of President Herbert Hoover to the press, 29 July 1932.',
        body: 'A challenge to the authority of the United States Government has been met, swiftly and firmly. For some days police authorities and Treasury officials have sought to persuade the so-called bonus marchers to evacuate certain buildings which they were occupying without permission… An examination of a large number of names discloses the fact that a considerable part of those remaining are not veterans; many are communists and persons with criminal records. The veterans amongst these numbers are undoubtedly led into violence which no government can tolerate. I have asked the Attorney General to investigate the whole incident… There is no group, no matter what its origins, that can be allowed to violate the laws of this city or to intimidate the Government. Government cannot be coerced by mob rule. The Department of War has enforced the orders of the police with every consideration for the persons assembled.',
        footnotes: [
          'Subsequent investigation found the marchers overwhelmingly to be genuine veterans; the promised bonus was finally paid, over Roosevelt’s veto, in 1936.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Depression written by a historian and published in 2011.',
        body: 'No single image did more to fix the public judgement of the Hoover administration than the burning of the Anacostia camp beneath the Capitol dome. The facts were bad enough — cavalry with drawn sabres, infantry in gas masks, tanks on Pennsylvania Avenue, driving unarmed veterans of the World War, with their wives and children, from the capital of the republic they had served; two babies dead of gas, by the marchers’ account. But the meaning read into the facts was worse: a government that had found no money for relief had found bayonets for petitioners. Hoover had in fact ordered only that the buildings be cleared, not the camps destroyed — MacArthur, declaring he would not be “dictated to by a mob”, exceeded his orders, and Hoover, fatally, defended him in public rather than repudiate him. Roosevelt, reading the newspapers in Albany, is said to have remarked that the pictures would elect him. They did as much as anything else that year. When the marchers returned in 1933, the new President sent his wife with coffee; “Hoover sent the army,” a veteran said, “Roosevelt sent his wife.”',
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Outline the historical context in which Source 1 was produced.',
        marks: 4,
        key: [
          {
            rows: [
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Depression at its depth in 1932, the Bonus Expeditionary Force of some 20,000 veterans camped in Washington demanding early payment of the war bonus, the Senate’s rejection of the bonus bill, the army’s clearance of the camps under MacArthur on 28 July and the burning of the Anacostia settlement)', marks: '4' },
              { descriptor: 'Outlines the context of the source by including mostly accurate details represented in and/or surrounding the source', marks: '3' },
              { descriptor: 'Outlines the context of the source with some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 4,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the summer of 1932 — unemployment near a quarter of the workforce, the veterans’ march and encampment, the death of the bonus bill in the Senate, the eviction ordered for the occupied downtown buildings, and the army operation that swept on across the river to Anacostia. Specific details from the photograph — the burning shacks, the Capitol dome composed above them — should be connected to those circumstances, including why that composition made the image politically devastating. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the government’s treatment of the Bonus Army. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Similarities are limited but real: both sources agree that force was used on the government’s orders and that the operation was decisive; both note the question of who the marchers were (Hoover asserts infiltration; the historian records the claim and its refutation). The differences are of judgement and information: Source 2 frames the marchers as a mob led by communists and criminals, the army as restrained, and the operation as the defence of law; Source 3, with the record before it, restores what the statement conceals — the sabres, the gas, the families, MacArthur’s exceeding of orders — and reads the event as the moral collapse of the administration. Candidates may account for the difference through origin (a president defending himself the next morning versus a historian with the investigations and the election results), though accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the political consequences of the Great Depression in the United States. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the Depression’s political consequences in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent the Depression’s political consequences, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
              { descriptor: 'Assesses the extent of the representation using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
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
          'The theme should lead: the set represents the Depression destroying a government’s legitimacy — the indelible image (Source 1), the administration’s self-defeating defence (Source 2), and the historian’s account of how the episode elected Roosevelt (Source 3). Strong responses set the event in the politics of 1929–33 with own knowledge: Hoover’s earlier responses (voluntarism, the RFC, his balanced-budget instincts), the Hoovervilles bearing his name, the Farm Holiday movement and rising direct action, the 1932 landslide (472 electoral votes to 59), and the contrast Roosevelt drew in 1933. Balance earns credit: fear of radicalism was not fantasy in 1932, and Hoover’s claim of communist involvement, though wrong about the marchers, reflected genuine official anxiety — a point the set’s sources allow but do not make. Omissions: no marcher’s own voice appears. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 14 — Exodus: the Dust Bowl and the Okies  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-dustbowl',
    title: 'Exodus: the Dust Bowl and the road west',
    themeKey: 'cap-dustbowl',
    themeSentence:
      'Drought, dust and debt drove hundreds of thousands of families off the southern plains in the 1930s — a migration that tested American ideas of opportunity and became, through Lange’s camera and Steinbeck’s novel, the Depression’s defining story.',
    tags: ['cap-p4', 'cap-p5'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: “Migrant Mother” — a photograph by Dorothea Lange of Florence Owens Thompson and three of her children, taken at a pea-pickers’ camp at Nipomo, California, for the federal Resettlement Administration, March 1936.',
        image: {
          src: 'sources/migrant-mother-1936.jpg',
          alt: 'Dorothea Lange’s Migrant Mother: a worn woman gazes past the camera, hand at her chin, two children hiding their faces against her shoulders',
          credit: 'Dorothea Lange, Farm Security Administration. Library of Congress, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows a woman of thirty-two, her face lined far beyond her years, gazing past the camera with her hand at her chin. Two of her children lean against her, faces turned away into her shoulders; a baby lies wrapped in her lap. Their clothes are worn through at the elbows; behind them is the canvas of a tent.',
        note: 'Note: Lange recorded that the family had been living on frozen vegetables from the fields and birds the children caught, and had just sold the car’s tyres for food. The picture was published within days and became the most famous photograph of the Depression.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the recollections of an Oklahoma farmer interviewed by the Federal Writers’ Project, 1939, about leaving for California in 1936.',
        body: 'The dust come up like a norther, only it was the field itself moving. Three crops we lost, one to dust, two to drought, and the bank man was sorry but the paper wasn’t. We sold what would sell — you couldn’t give land away, there wasn’t a buyer in the county — and loaded the truck with the stove and the bedstead and seven of us, and went out 66 like everybody else. In Texas they sold us gas and called us tourists. In Arizona they moved us on. At the California line a man with a badge looked in the truck and asked had we money, like the state was a picture show. We chopped cotton, picked peas, followed the crops with the handbills that always promised more than there was — eight hundred come for every two hundred jobs, and the wage dropped while you stood in line. They call us Okies. Well. My people farmed that quarter since the run of ’93. I ain’t a Okie, mister; I’m a American that the dirt blew out from under.',
        footnotes: [
          'Route 66 — the highway from Oklahoma to California.',
          'In 1936 Los Angeles police briefly posted a “bum blockade” at the state line to turn back migrants without funds.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from an environmental and social history of the Dust Bowl written by a historian and published in 2019.',
        body: 'The Dust Bowl was not a natural disaster that happened to strike an economy; it was the meeting of a drought cycle with a capitalist wheat boom that had ploughed thirty million acres of grassland in a generation. When prices collapsed after 1929, farmers ploughed more, not less, to cover their debts — and when the rains failed from 1931, the exposed soil simply left. Perhaps 2.5 million people quit the plains states in the decade, though most were tenant farmers pushed off by consolidation and the tractor as much as by dust; the “Okie” exodus to California, some 300,000 to 400,000 strong, was the visible fraction of a larger displacement. California needed their labour and despised their presence: wages in the fields fell by half as the migrants arrived, the growers’ associations broke strikes with vigilantes and the vagrancy laws, and the newcomers were white Protestant citizens — a fact that made their treatment a national scandal in a way the treatment of the Mexican and Filipino workers they displaced, deported and undercut had never been. The government’s response — the camps of the Farm Security Administration, Lange’s photographs, the soil conservation districts — treated the symptoms and, in the end, the land; the war’s shipyards finally absorbed the people.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Dust Bowl and Depression driving migrant families west, destitution in California’s crop-following labour camps, the federal Resettlement/Farm Security Administration documenting rural poverty to build support for its programmes, Lange’s assignment and the photograph’s immediate publication)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: March 1936 — the migrant stream into California at its height, the pea crop frozen at Nipomo leaving pickers stranded and starving, and the federal documentary project for which Lange worked, whose explicit purpose was to make rural destitution visible to the nation and to Congress. Specific details from the photograph — the mother’s worn face, the children turned away, the tent — should be connected to those circumstances, including the picture’s function as government persuasion. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the experience of Dust Bowl migrants in the 1930s.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. first-hand testimony of the migration in the speaker’s own voice, but recollected three years on and shaped by the interview setting and the teller’s pride)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly synthesis with numbers and causes, but distant and correcting the popular story)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 carries the texture of lived experience — the bank paper, Route 66, the handbills, the border inspection — and its closing protest is direct evidence of how migrants understood the “Okie” label; as testimony it is three years removed, selected by a federal interviewer, and one family’s road among hundreds of thousands. Source 3 supplies scale and causation (the ploughed grassland, tenancy and tractors, the wage collapse) and its correction — that the famous white exodus displaced less visible Mexican and Filipino workers — is exactly what single testimonies cannot show; it remains interpretation, and its environmental argument assigns weights that are debated. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the impact of the Great Depression on rural America. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the Depression’s rural impact in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the rural Depression, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the rural Depression as displacement — the destitute family made national symbol (Source 1), the migrant’s own account of dispossession and stigma (Source 2), and the historian’s structural explanation reaching from the ploughed grassland to the growers’ vigilantes (Source 3). Strong responses widen with own knowledge: the decade-long farm depression preceding the dust, foreclosure and tenancy rates, the AAA’s uneven effects on tenants, black blizzards like Black Sunday 1935, the FSA camps, Steinbeck and the cultural afterlife, and the war boom that ended the crisis. Omissions tied to evaluation: the set’s focus on the white “Okie” story is itself flagged by Source 3 — the displaced Mexican and Filipino field workers, and the southern sharecropper exodus, sit outside the frame; so does the majority of farm families who stayed. A source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
