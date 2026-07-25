import type { SourceSet } from './types';

// Source sets for Elective 7: Capitalism — the American experience (1901–1941).
// All sources are constructed for skills practice in the style of the period,
// following the Source Analysis Question Construction Manual. Visual sources
// are presented as descriptions; images can be added later as files arrive.

export const CAP_SOURCE_SETS: SourceSet[] = [
  // ------------------------------------------------------------------
  // CAP SET 1 — The muckrakers and the trusts  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-trusts',
    title: 'The muckrakers and the trusts',
    themeKey: 'cap-trusts',
    themeSentence:
      'At the start of the twentieth century the power of the great trusts provoked a progressive counter-attack that redefined the relationship between American government and business.',
    tags: ['cap-p1', 'cap-p2'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A political cartoon published in a New York satirical magazine, 1904.',
        body: 'The cartoon shows a giant octopus labelled “Standard Oil”, its body a bulging oil storage tank. Its tentacles are wrapped tightly around the domes of a state legislature and the United States Capitol, around a steel mill, a shipping wharf and a railway locomotive, while small figures of workers and taxpayers struggle in its grip. One remaining tentacle stretches, still open, towards the White House in the corner of the frame.',
        note: 'Note: by 1904 the Standard Oil trust controlled about ninety per cent of oil refining in the United States.',
        footnotes: [
          'Trust — a combination of companies under a single board, used to dominate an industry and limit competition.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an article by an investigative journalist in a popular monthly magazine, 1904. Articles of this kind were nicknamed “muckraking”.',
        body: 'The company’s founder has told Sunday-school audiences that his fortune is the reward of thrift and Providence. The ledgers tell another story. They show secret rebates extorted from the railroads, so that a rival’s freight cost him double; they show pipelines refused, prices cut below cost in one town and raised without mercy in the next, until the independent refiner sold out or was ruined. This is not the reward of superior efficiency, whatever the gentlemen of the trust may say. It is the systematic destruction of the open market by men who preach competition and practise conquest. And the peculiar danger is this: that the machinery of our politics — the legislature, the courts, the party convention — has proved so easy for such wealth to buy.',
        footnotes: [
          'Rebate — a secret refund on published freight charges, giving the trust cheaper transport than its competitors.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Progressive era written by an American historian and published in 2011.',
        body: 'Progressivism was never a single movement with a single programme; it was the response of a generation to the discovery that industrial capitalism had outgrown the institutions of a rural republic. Its achievements were real but selective. Roosevelt’s suits against Northern Securities and Standard Oil established that no corporation stood above the law, and the regulatory state — the Hepburn Act, the Pure Food and Drug Act, the Federal Reserve, the Clayton Act — dates from these years. Yet the trusts were regulated rather than dismantled: industrial concentration was greater in 1920 than in 1900. The deeper progressive achievement was ideological. After 1912 no serious candidate for national office argued that the market should be left entirely to govern itself; the argument was now about how far government should go.',
        footnotes: [
          'Northern Securities — a railway holding company dissolved by the Supreme Court in 1904 after a suit brought by the Roosevelt administration.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the dominance of the Standard Oil trust and its control of ~90 per cent of refining, public alarm at the trusts’ reach into legislatures and Congress, the muckraking press, Roosevelt’s trust-busting suits such as Northern Securities in 1904)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context refers to the circumstances at the time the source was produced: the era of the great trusts at the start of the twentieth century, Standard Oil’s near-monopoly of refining, rising public and journalistic hostility to corporate power, and the beginning of federal anti-trust action under Theodore Roosevelt (Northern Securities 1904; the Standard Oil suit followed in 1906–11). Specific details from the cartoon — the octopus, the captured Capitol and statehouse, the open tentacle reaching for the White House — should be connected to those circumstances. Not all points are required for full marks; each salient point is rewarded.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of attitudes towards big business in the United States at the beginning of the 20th century.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. a contemporary investigative article grounded in documentary research, but written to expose and persuade)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective academic study with hindsight and evidence, but distant from events and making interpretive claims)', marks: '1' },
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
          '“Discuss” requires candidates to identify issues and provide points for and/or against; reasoning must go beyond “it is biased” to the origin factors: author, motive, bias, time, place and purpose. Source 2 is first-hand evidence of muckraking-era attitudes and was based on genuine company records (in the manner of Ida Tarbell’s history of Standard Oil), but its purpose is exposure: its language (“extorted”, “conquest”) is persuasive and its selection one-sided. Source 3 offers scholarly distance, a century of evidence and attention to the movement’s limits, though it is removed from events and generalises about a varied movement. Candidates treat the sources in parallel; they do not have to compare them against each other. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the challenges that big business posed to American society at the beginning of the 20th century. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the challenge of big business in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the challenges of big business, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: all three sources represent concentrated corporate power as a threat to competition and to democratic government — the octopus captures legislatures, the journalist documents the destruction of rivals and the purchase of politics, the historian frames progressivism as the response. Strong responses test the representation with own knowledge: the scale of concentration (U.S. Steel as the first billion-dollar corporation in 1901, Standard Oil’s market share), political corruption and the Senate as a “millionaires’ club”, but also what the set omits — the productivity, cheap goods and rising real wages the great corporations delivered, the defenders of consolidation (social Darwinism, the “gospel of wealth”), and the fact that the trusts were curbed rather than destroyed. Omissions earn marks only when tied to evaluation. A source-by-source recount without judgement caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 2 — Selling the New Era: the consumer boom of the 1920s  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-consumerism',
    title: 'Selling the New Era: the consumer boom of the 1920s',
    themeKey: 'cap-consumerism',
    themeSentence:
      'The consumer capitalism of the 1920s — advertising, instalment credit and the mass-produced automobile — transformed American life while concealing the weaknesses that would bring the boom to an end.',
    tags: ['cap-p2', 'cap-p3'],
    era: 'mid',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A full-page advertisement for a six-cylinder motor car, published in a mass-circulation American magazine, 1927.',
        body: 'The advertisement shows a gleaming sedan drawn up before a suburban house with a trim lawn; a smiling young family — husband in a business suit, wife in fashionable dress, two children — stand beside it. The headline reads: “The Car You Have Earned”. Beneath, the copy promises “the open road, the family Sunday, the envy of the street”, and a banner across the corner announces: “Drive it home today — a small payment down, the balance monthly, on the Plan”.',
        note: 'Note: by 1927 roughly three in every four American cars were bought on instalment credit, and there was about one motor vehicle for every five Americans.',
        footnotes: [
          'Instalment plan — buying on credit: a deposit followed by fixed monthly payments, with interest.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an address by a senior figure of the Coolidge administration to a convention of American businessmen, 1926.',
        body: 'Gentlemen, the figures speak. Nine years ago the prophets of gloom told us that war and Bolshevism had put an end to prosperity. Today the American workman drives to his labour in his own automobile, lights his home with electricity, and hears the affairs of the world on his radio set. No nation in history has spread comfort so widely. And this miracle was not decreed by any government bureau. It is the work of American enterprise — of the man who saves, the man who invents, the man who sells. The business of the American people is business; and provided government keeps its budget balanced, its taxes low and its hands off, there is no reason why this prosperity should not be permanent. We have entered a New Era, and it is of our own making.',
        footnotes: [
          'New Era — the contemporary name for the prosperity of the mid-1920s.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the 1920s economy written by an American historian and published in 2003.',
        body: 'The prosperity was real, and it was new in kind: for the first time an economy organised itself around persuading ordinary people to want things. Advertising expenditure trebled in a decade; instalment credit financed the car, the refrigerator and the radio; and the department store and the movie palace taught Americans to measure life by consumption. But the New Era rested on narrow foundations. Farm incomes never recovered from the collapse of 1921; coal and textiles stagnated; and the gains of the boom flowed disproportionately upward — by 1929 the top five per cent of earners took a third of all income, while the mass market on which mass production depended was propped up by debt. The economy of the twenties did not so much solve the problem of demand as postpone it.',
        footnotes: [
          'Demand — the capacity and willingness of consumers to buy what industry produces.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that the prosperous modern American family owns a car — and that credit puts that respectable prosperity within everyone’s immediate reach)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the headline “The Car You Have Earned” framing consumption as deserved reward, the idealised family and suburban home linking the product to status and belonging, the promise of “the envy of the street”, the banner urging purchase today on monthly payments)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim (“The message of Source 1 is that…”). “Explain” requires the why and/or how: candidates should decode the advertisement’s devices — the aspirational family scene, the language of earned reward, the appeal to envy and status, and the instalment-plan banner that removes the obstacle of price — and connect each device to the message that consumption defines the good American life and is available now, on credit. Full marks require specific reference to elements of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the prosperity of the 1920s. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast: both similarities and differences are expected. A key similarity: both sources agree the prosperity was real and unprecedented in its spread of consumer goods (the workman’s car, electricity and radio in Source 2; the car, refrigerator and radio financed by credit in Source 3). The central differences are of judgement and of explanation: Source 2 credits private enterprise alone, asks government only to stand aside, and pronounces the prosperity permanent; Source 3, with hindsight, finds the boom narrowly based — stagnant farm incomes, extreme inequality, demand propped up by debt — and presents it as postponing a reckoning. Candidates may account for the difference through origin (a booster speaking to businessmen in 1926 versus a historian writing after the Crash), although accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of the growth of consumerism in shaping American capitalism during the 1920s, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of consumerism’s role in the economy of the 1920s in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the significance of consumerism in shaping American capitalism in the 1920s, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents consumerism as the engine of New Era capitalism — the advertisement manufactures desire and dissolves price with credit, the administration figure presents mass consumption as proof that enterprise works, the historian shows an economy reorganised around selling and its hidden fragility. Strong responses assess significance with own knowledge: Ford’s Model T and the five-dollar day, the spread of electrification and household appliances, advertising and the instalment plan, welfare capitalism, and the boundaries of the boom (agriculture, older industries, African American and immigrant workers largely excluded), reaching a judgement about how far consumerism defined — and destabilised — the capitalism of the decade. Omissions earn marks only when tied to evaluation (e.g. the set contains no farmer or industrial worker, and nothing on speculation in stocks and real estate). For higher marks candidates must balance source evidence and own knowledge.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 3 — Prohibition, the Klan and the battle for American values  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-values',
    title: 'Prohibition, the Klan and the battle for American values',
    themeKey: 'cap-values',
    themeSentence:
      'Behind the prosperity of the 1920s ran a cultural war over what America should be — dry or wet, rural or urban, Protestant and native-born or plural and modern.',
    tags: ['cap-p3'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph taken in New York City, 1921.',
        body: 'The photograph shows two federal Prohibition agents in overcoats tipping confiscated barrels of beer into an open street drain, watched by a crowd of onlookers. Broken barrels are stacked on a truck behind them; foam runs along the gutter. One agent looks at the camera; several men in the crowd grin, and a boy crouches at the edge of the frame beside the running gutter.',
        note: 'Note: the Eighteenth Amendment, banning the manufacture and sale of intoxicating liquor, came into force in January 1920; the Volstead Act provided for its enforcement.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a recruiting address by an officer of the Ku Klux Klan, delivered in a mid-western town and printed in a Klan newspaper, 1924.',
        body: 'We stand, friends, for the America of our fathers: for the little white church, the sober home, the honest ballot, and the supremacy of the old native-born Protestant stock that carved this republic from the wilderness. Look at your cities and see what is taking their place: the saloon reborn as the speakeasy; the alien quarter where English is never heard; Rome commanding the schoolhouse; jazz and paint and short skirts making a mockery of womanhood. The politicians will not act, for they count the alien vote. But the Klan acts. We enforce the dry law where the sheriff winks at it. We put Americans first — one hundred per cent Americans — and we say to every foreign influence in morals, in religion and in politics: this is our country still.',
        footnotes: [
          'Speakeasy — an illegal drinking place of the Prohibition era.',
          'By the mid-1920s the revived Klan claimed several million members, many in the Mid-West, and campaigned against Catholics, Jews, immigrants and African Americans.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of American culture in the 1920s written by a historian and published in 2015.',
        body: 'The “cultural civil war” of the twenties was fought over who owned American values, and Prohibition was its longest battle. The dry crusade was many things at once: a genuine reform against a real social evil; a Protestant and small-town assertion of authority over the Catholic, immigrant city; and, in the hands of the revived Klan, a weapon of bigotry dressed as morality. Its practical failure was almost immediate — enforcement was underfunded, the speakeasy flourished, and organised crime found in the dry law the greatest business opportunity in its history. Yet the deeper story is who won. The census of 1920 was the first in which urban Americans outnumbered rural; the radio, the movies and the advertisement were nationalising a consumer culture that dissolved the very localism the drys were defending. The Klan collapsed in scandal after 1925, and repeal came in 1933. The values contest of the twenties was won, in the end, by the modern city — and by the marketplace.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the coming into force of the Eighteenth Amendment in January 1920 and the Volstead Act, federal enforcement and staged public destruction of liquor, early and widespread evasion — the speakeasy and bootlegging)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context refers to the circumstances at the time the source was produced: the first years of national Prohibition, the machinery of enforcement (federal agents, confiscation, public destruction of liquor as a demonstration for the press), and the immediate emergence of evasion. Specific details from the photograph — the agents, the barrels, the watching and grinning crowd — should be connected to those circumstances, including the public-relations character of such destructions and the ambivalence of urban crowds. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the divisions within American society in the 1920s.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. first-hand evidence of the Klan’s appeal and self-presentation, but propaganda designed to recruit)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly synthesis with evidence and hindsight, but distant and interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is highly reliable as evidence of what the Klan claimed to stand for and how it recruited — the fusion of Prohibition enforcement, nativism, anti-Catholicism and “one hundred per cent Americanism” — precisely because it is propaganda; it is wholly unreliable as an account of the groups it attacks, and its claims about cities and “alien influence” are hostile caricature. Source 3 offers distance, balance and the long view (the census of 1920, the Klan’s collapse, repeal in 1933), though it compresses a varied decade into a single narrative of modernity’s victory. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the contest over American values during the 1920s. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the contest over values in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the values contest of the 1920s, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the twenties as a struggle between an older, rural, Protestant America and the modern plural city — Prohibition as the dry crusade’s public face (Source 1), the Klan as its most extreme champion (Source 2), and the historian’s verdict that the marketplace and the city prevailed (Source 3). Strong responses test this with own knowledge: the Scopes trial of 1925, immigration restriction (the quota acts of 1921 and 1924), the “new woman” and the flapper, jazz and the movies, the Sacco–Vanzetti case, Al Smith’s candidacy in 1928, and organised crime under Prohibition. Omissions should be tied to evaluation — for example, the set gives no voice to the immigrant, Catholic or African American communities under attack, and none to respectable non-Klan support for Prohibition, which may make the dry cause look more extreme than it was. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 4 — From boom to breadline: the Great Depression  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-depression',
    title: 'From boom to breadline: the Great Depression',
    themeKey: 'cap-depression',
    themeSentence:
      'The Crash of 1929 exposed the weaknesses beneath the New Era, and the Depression that followed tested every group in American society and capitalism itself.',
    tags: ['cap-p4'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of a shanty settlement on waste ground at the edge of an American industrial city, 1932.',
        body: 'The photograph shows several dozen makeshift shelters built of packing crates, tar-paper, flattened tins and salvaged boards, crowded together on muddy ground beside a rail yard. Smoke rises from a stovepipe in one hut. In the foreground three men in worn overcoats stand around a fire in an oil drum; behind them, washing is strung between two shanties. A hand-lettered sign on the nearest hut reads “HOOVER VILLE”.',
        note: 'Note: by 1932 unemployment in the United States had reached about one quarter of the workforce; settlements like this one, named mockingly after President Hoover, appeared on the edges of most large cities.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a letter written by a farm wife in Oklahoma to the wife of the President, 1934. Thousands of such letters were received at the White House.',
        body: 'Dear Mrs Roosevelt, I hope you will forgive a plain woman for writing. We have farmed this quarter-section eighteen years and never asked help of any man. Now the wheat brings less than it costs to plant, the bank has our note due in March, and the dust storms this spring buried the garden and half the fences. My husband is a good man but I have seen him stand in the yard and cry. The children need shoes for school and I have cut up the good tablecloth for dresses. I read that your husband’s new programmes will help people like us and I pray it is true. We do not want charity, ma’am. We want a fair price and a chance to keep what we have worked for. If you could see the county now you would know that something has gone wrong with this country that hard work alone cannot mend.',
        footnotes: [
          'Quarter-section — a farm of 160 acres, the standard homestead allotment.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from an economic history of the Depression written by an American historian and published in 2008.',
        body: 'No single villain explains the catastrophe. The Crash of October 1929 destroyed paper wealth and confidence, but it was the transmission of that shock through a fragile system that made a recession into the Great Depression: thousands of small, unregulated banks whose failures wiped out savings and credit; an income distribution so skewed that mass demand could not be sustained once instalment buying faltered; a farm sector already ten years in depression; and a Federal Reserve that raised interest rates and let the money supply collapse when every instinct should have run the other way. Hoover was neither idle nor heartless — his public works and his Reconstruction Finance Corporation broke with precedent — but his faith in voluntary action and a balanced budget was no match for the scale of the collapse. By the winter of 1932–33, with a quarter of the workforce idle and the banking system closing state by state, Americans were questioning not merely a policy but a system.',
        footnotes: [
          'Reconstruction Finance Corporation — a federal agency created in 1932 to lend to banks, railroads and businesses.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Depression at its deepest in 1932, unemployment near a quarter of the workforce, homelessness and shanty towns named “Hoovervilles” in mockery of the President, the exhaustion of private and local relief)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the trough of the Depression in 1932 — mass unemployment, evictions and homelessness, makeshift settlements on urban waste ground, and the bitter naming of them after Hoover as his reputation collapsed in the year of the Bonus Army and the coming presidential election. Specific details from the photograph (the salvaged materials, the rail yard site, the mocking sign) should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the consequences of the Great Depression for the American people.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. an authentic private voice of rural distress written in the moment, but one family’s view, written to move the reader and seek help)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective academic synthesis with statistics and hindsight, but removed from events and weighing causes as interpretation)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is immediate, private in register and typical of thousands of such letters — strong evidence of the Depression’s emotional and material toll on farm families and of attitudes to relief (“we do not want charity”); its limits are perspective (one region, the Dust Bowl’s special catastrophe) and purpose (an appeal, choosing affecting details). Source 3 commands the statistics and the long view and is deliberately balanced on Hoover, but it is an interpretation — its ranking of causes is contested ground among historians. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the causes and consequences of the Great Depression. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the Depression’s causes and/or consequences in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the causes and consequences of the Depression, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: together the sources represent the Depression as a systemic failure with devastating human consequences — urban destitution (Source 1), rural ruin compounded by the Dust Bowl (Source 2), and a historian’s multi-causal account reaching from the Crash to the banking collapse (Source 3). Strong responses test the representation with own knowledge: the statistics of collapse (industrial production nearly halved, some 5,000 bank failures by 1933, farm income down by half), the differential impact on African Americans (“last hired, first fired”), women, industrial workers and the old, Hoover’s responses and their limits, and the political consequence — Roosevelt’s landslide in 1932. Omissions earn marks only when tied to evaluation (e.g. the set shows no urban breadline or unemployed industrial worker directly, and no defender of the view that the market would right itself). A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 5 — The New Deal and its critics  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-newdeal',
    title: 'The New Deal and its critics',
    themeKey: 'cap-newdeal',
    themeSentence:
      'The New Deal remade the relationship between the federal government and American capitalism — and Americans argued fiercely, then and since, about whether it rescued the system or shackled it.',
    tags: ['cap-p4'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A poster produced for a New Deal public works agency, mid-1930s.',
        body: 'The poster shows a broad-shouldered worker in overalls, sleeve rolled, swinging a hammer against a rising sun; behind him a new bridge, a dam and a line of power pylons march to the horizon. Bold letters across the top read “WORK PAYS AMERICA!”; beneath, in smaller type, “Prosperity — security — the American way”, with the agency’s initials in the corner.',
        note: 'Note: at its peak the Works Progress Administration employed more than three million Americans on public projects — roads, schools, bridges, parks and arts programmes.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from one of President Roosevelt’s radio “fireside chats”, 1934.',
        body: 'My friends, those who tell you that government must fold its hands while the people suffer are asking you to trust the very philosophy that brought us to the edge of ruin. We have chosen another course. We have put the credit of the nation behind the banks, and your deposits are safe. We have put the young men of the cities into the forests and the men of the building trades onto public works. We have said to the farmer: you shall have a price that lets you live; and to the workman: you shall have the right to organise and bargain for your labour. Some among the comfortable call this revolution. I call it the oldest American doctrine of all — that the government belongs to the people, and must serve them. We seek not to destroy private enterprise but to save it from its own abuses; not to level ambition, but to give every man his chance again.',
        footnotes: [
          'Fireside chat — one of Roosevelt’s informal national radio addresses, heard in tens of millions of homes.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from an address by a spokesman for an association of business and financial leaders opposed to the New Deal, 1935.',
        body: 'No one denies the good intentions of the gentlemen in Washington. What we deny is their right to remake the American system by decree. In two years we have seen business told what to produce and what to pay; the currency tampered with; taxes piled upon the thrifty to subsidise the improvident; and an alphabet of bureaus — NRA, AAA, WPA — standing between a man and his own affairs. The Constitution reserves to the people the fruits of their own enterprise; it does not license any President to redistribute them. Recovery will come, as it has always come, from the courage of men who invest, invent and employ — and it is delayed today because capital dares not move while Washington experiments. We are told this programme saves capitalism. Gentlemen, one does not save a man by binding his hands.',
        footnotes: [
          'NRA, AAA, WPA — the National Recovery Administration, Agricultural Adjustment Administration and Works Progress Administration, flagship New Deal agencies.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that government work programmes are rebuilding America and restoring dignity and prosperity — public employment is the American way back)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the heroic worker figure and rising sun suggesting a new dawn, the dam, bridge and pylons as concrete achievements of public works, the slogan “Work pays America!” linking relief to productive labour rather than charity, “the American way” claiming patriotic legitimacy)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: candidates should decode the poster’s devices — the monumental worker, the sunrise, the catalogue of infrastructure, the slogan’s insistence that relief work is earned pay and patriotically American — and connect each to the message that the New Deal’s programmes are restoring the nation. Full marks require specific reference to elements of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the New Deal. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. A key similarity — easily missed — is that both sources claim to be defending American capitalism and the constitutional tradition: Roosevelt says he acts “not to destroy private enterprise but to save it”, the business spokesman claims recovery comes from private courage. The central differences: Source 2 presents government intervention as rescue and as democratic duty, cataloguing achievements (banking, CCC, public works, farm prices, labour rights); Source 3 presents the same programmes as coercion — bureaus “standing between a man and his own affairs” — argues intervention delays recovery by frightening capital, and rests its case on the Constitution and self-reliance. Candidates may account for the difference through origin (a President rallying a mass radio audience versus organised business defending its interests), though accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the impact of the New Deal on American capitalism. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the New Deal’s impact on capitalism in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent the New Deal’s impact on capitalism, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents the New Deal as a contested transformation of capitalism — celebrated in its own publicity (Source 1), defended as capitalism’s rescue (Source 2), denounced as its strangulation (Source 3). Strong responses assess with own knowledge: the Hundred Days, banking reform and the FDIC, the SEC, the Wagner Act and the rise of organised labour, Social Security, the WPA’s scale — against the persistence of unemployment (still around 14 per cent in 1937 and rising in the “Roosevelt recession”), the Supreme Court’s destruction of the NRA and AAA, and the argument (made by historians as well as contemporaries) that recovery was completed only by war production after 1939. The strongest answers reach a judgement: the New Deal regulated, humanised and stabilised American capitalism without ending private ownership — a reformed capitalism, not a replaced one. Omissions tied to evaluation might include the voices of workers, farmers or critics from the left (Long, Townsend, Coughlin), all absent from the set.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 6 — Two nations: capitalism and the other America  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-groups',
    title: 'Two nations: capitalism and the other America',
    themeKey: 'cap-groups',
    themeSentence:
      'American capitalism distributed its rewards unevenly, and the groups it served least — sharecroppers, industrial workers, African Americans, immigrants and Indian Nations — organised, endured or were pushed aside.',
    tags: ['cap-p5'],
    era: 'whole',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A documentary photograph of a sharecropper family, taken for a federal photographic project in the American South, 1936.',
        body: 'The photograph shows a family of seven on the porch of an unpainted single-room cabin: a gaunt father in patched overalls, a mother holding an infant, and four barefoot children. The boards of the porch are split; a cotton field, picked over, stretches behind the cabin to a line of trees. No shoes, glass windows or machinery are visible anywhere in the frame.',
        note: 'Note: photographers were employed by the federal Farm Security Administration to document rural poverty; sharecroppers farmed a landlord’s fields in return for a share of the crop, and most remained permanently in debt.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a leaflet issued by union organisers during the sit-down strike at a motor plant in Flint, Michigan, January 1937.',
        body: 'Fellow workers! They call the speed-up “efficiency”. You know it as the line that runs faster every month while the pay envelope stands still. You know the foreman’s favourites, the spies among us, the layoff that comes without warning and the rehiring that goes to the meek. The company made two hundred million dollars last year. Who made it for them? For a generation they told us the American workman needs no union — that any man may rise. Brothers, we have stopped believing it, and we have stopped the line to prove it. We are staying beside our machines until the corporation sits down with our own chosen committee. Stand fast. Every plant that joins us shortens the strike. The eyes of every working family in America are on Flint tonight.',
        footnotes: [
          'Sit-down strike — a strike in which workers occupy the factory, preventing production and the use of strike-breakers.',
          'The Flint strike ended in February 1937 with General Motors recognising the United Automobile Workers.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a social history of the United States written by a historian and published in 2017.',
        body: 'For every group outside the charmed circle, the terms of American capitalism were different, and so were the responses. African Americans, held at the bottom of both southern agriculture and northern industry, answered with the Great Migration — perhaps a million and a half people moving north between 1915 and 1930 — and with institutions of their own, from churches to the NAACP. Immigrants supplied the mills and mines with labour and were repaid with the quota laws of the 1920s. The Indian Nations, dispossessed by allotment, saw their land base shrink by two-thirds before the policy was reversed in 1934. Industrial workers oscillated between accommodation and revolt until the law itself changed sides in 1935. What these histories share is a truth the celebrants of the American Dream rarely faced: that the market alone never distributed its gains to those with the least power to bargain — and that every widening of American prosperity was won, not given.',
        footnotes: [
          'Allotment — the policy of dividing tribal land into individual plots, with the “surplus” sold; reversed by the Indian Reorganization Act of 1934.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Depression in the rural South, the sharecropping system and permanent debt, the New Deal’s Farm Security Administration and its documentary photography project, the AAA’s uneven effects on tenants)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the mid-Depression South — sharecropping and tenancy as the successor to plantation agriculture, chronic rural poverty deepened by collapsed cotton prices, and the federal government’s decision to document that poverty through FSA photography (the tradition of Dorothea Lange and Walker Evans) partly to build support for New Deal rural programmes. Specific details from the photograph (the unpainted cabin, the barefoot children, the picked-over field) should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the experience of working people under American capitalism.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. an authentic contemporary voice of labour militancy at a decisive strike, but agitation written to hold a strike together)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly overview with statistics and range across groups, but distant and openly argumentative in its framing)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is first-hand evidence of workers’ grievances (the speed-up, spies, arbitrary layoffs) and of the language and tactics of the new industrial unionism at Flint; as strike agitation its purpose is morale and recruitment, so grievances are sharpened and the company’s case is absent — reliable for attitudes, partial on facts. Source 3 offers breadth (African Americans, immigrants, Indian Nations, industrial labour), statistics and hindsight, but it argues a thesis — that gains were “won, not given” — which is interpretation, however well-founded. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the impact of capitalism on different groups within American society in the period 1901–1941. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of capitalism’s uneven impact on different groups in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent capitalism’s impact on different groups across the period, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents American capitalism as a system whose rewards depended on bargaining power — the sharecropper family at its base (Source 1), industrial workers organising to change their terms (Source 2), and a historian’s survey of the groups it served least (Source 3). Strong responses test this with own knowledge across the period: the Great Migration and the ghettos of the North, the quota acts of 1921 and 1924, welfare capitalism and its collapse, the Wagner Act and the CIO, the position of women workers, and the New Deal’s uneven reach (domestic and agricultural workers — disproportionately Black — excluded from Social Security). Balance matters: rising real wages and consumer goods did reach many workers in the 1920s, and the set’s three voices are all critical — an omission worth evaluating, along with the absence of industrialists and of any direct African American or Indian voice. A source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
