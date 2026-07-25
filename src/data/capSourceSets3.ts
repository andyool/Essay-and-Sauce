import type { SourceSet } from './types';

// Source sets 15–20 for Elective 7: Capitalism — the American experience
// (1901–1941). Text sources are constructed for skills practice in the style
// of the period; images are real and credited.

export const CAP_SOURCE_SETS_3: SourceSet[] = [
  // ------------------------------------------------------------------
  // CAP SET 15 — The bigger stick  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-tr',
    title: 'The bigger stick: Roosevelt, the trusts and the party',
    themeKey: 'cap-tr',
    themeSentence:
      'Theodore Roosevelt made the presidency a weapon against corporate abuse — and discovered that his own party, and the interests that funded it, carried a bigger stick than his.',
    tags: ['cap-p2', 'cap-i-troosevelt'],
    era: 'early',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: “The Bigger Stick” — a cover cartoon by Udo Keppler for the American satirical magazine Puck, July 1907.',
        image: {
          src: 'sources/bigger-stick-cartoon.jpg',
          alt: 'Puck cover of 1907: Roosevelt leans on his stick and glares up at a giant hand labelled Tariff Graft holding a far bigger club labelled Party Expediency, which crushes a paper marked Tariff Reform',
          credit: 'Udo J. Keppler, Puck, 17 July 1907. Library of Congress, public domain, via Wikimedia Commons',
        },
        body: 'The cartoon shows Roosevelt in his rough-rider clothes, leaning on his famous “big stick” and glaring upward. Beside him, dwarfing both president and stick, a colossal hand whose cuff is labelled “TARIFF GRAFT” grounds a club three times his height labelled “PARTY EXPEDIENCY”. Beneath the club’s foot lies a crushed paper: “TARIFF REFORM”.',
        note: 'Note: “Speak softly and carry a big stick” was Roosevelt’s formula for presidential power. The protected tariff was the Republican party’s central economic policy, and the revenue and favours it generated — “tariff graft” — bound the party to the industries it protected.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from President Theodore Roosevelt’s annual message to Congress, 1907.',
        body: 'I again recommend to the Congress the enactment of effective national supervision over the great corporations engaged in interstate business. The fortunes amassed through corporate organisation are now so large, and vest such power in those that wield them, as to make it a matter of necessity to give to the sovereign — that is, to the Government, which represents the people as a whole — some effective power of supervision over their corporate use. We do not wish to destroy corporations; we wish to make them subserve the public good. The man of great wealth who does honest work in accumulating and using his wealth is a benefactor; but the malefactors of great wealth — those who acquire fortunes by chicanery, by rebates, by the crushing of competitors through unfair means — must be made to feel that the Government is their master. I am well aware that honest men of means view with alarm any proposal of change; let them be assured that the surest way to invite the very radicalism they dread is for the law to stand impotent before proven abuse.',
        footnotes: [
          '“Malefactors of great wealth” — Roosevelt’s phrase from August 1907 — became the era’s most quoted denunciation of corporate abuse.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the Roosevelt presidency written by a historian and published in 2013.',
        body: 'Roosevelt’s reputation as trust-buster rests on a record more selective and more interesting than the label. He brought some forty-four antitrust suits — fewer than the stolid Taft who followed him — and he distinguished sharply between “good” trusts to be supervised and “bad” ones to be destroyed: Northern Securities and Standard Oil felt the stick; U.S. Steel, whose chairman cooperated with his Bureau of Corporations, was left in peace and even allowed a controversial acquisition in the panic of 1907. His deepest achievement was not dissolution but jurisdiction: the Hepburn Act’s rate-setting, the food and drug laws, the doctrine — startling in 1901, orthodox by 1912 — that the national government stood above the corporation. His sharpest defeats came inside his own party. The tariff, the mother of trusts in reform rhetoric and the mother of campaign funds in fact, he never dared touch, bequeathing it to Taft, whom it destroyed. The cartoonists saw the limit clearly: the stick was real, but the party machine that had made him could unmake his successors — and in 1912, when Roosevelt finally swung at the machine itself, it broke his party in two rather than yield.',
        footnotes: [
          'Roosevelt’s 1912 Progressive (“Bull Moose”) candidacy split the Republican vote and elected Wilson.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that for all Roosevelt’s famous power, the party machine and the tariff interests behind it wield a far bigger stick — and reform is crushed beneath it)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the comic disproportion between Roosevelt’s stick and the giant club, the labels tying the club to “party expediency” and the hand to “tariff graft”, the crushed paper of tariff reform, Roosevelt’s impotent glare in his rough-rider costume)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: candidates should decode the cartoon’s devices — the visual pun on Roosevelt’s own slogan, scale as argument, the labelling that names the powers behind the club, and the fate of the reform paper — and connect each to the message that presidential reform stops where the party’s funding interests begin. Full marks require specific reference to elements of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding Roosevelt’s campaign against corporate abuse. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities: both sources present Roosevelt as seeking supervision rather than destruction of the corporation (his own “we do not wish to destroy corporations”; the historian’s good/bad trust distinction), and both understand government mastery over business as his central claim. The differences: Source 2 is the programme in the president’s own combative voice — confident, moralising (“malefactors”), warning conservatives that reform prevents radicalism; Source 3 audits the record — fewer suits than Taft, U.S. Steel spared, the tariff untouched — and finds the deepest limit where the cartoon found it, in the party itself. Candidates may account for the difference through origin and purpose, though accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the impact of progressivism on American capitalism in the years 1901 to 1912. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of progressivism’s impact on capitalism in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent progressivism’s impact, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents presidential progressivism as real but bounded — the doctrine of supervision proclaimed (Source 2), its selective practice audited (Source 3), and its structural limit drawn by the cartoonist (Source 1). Strong responses test with own knowledge: Northern Securities and the 1902 coal strike, the Hepburn Act and consumer laws of 1906, the Standard Oil and American Tobacco dissolutions (decided 1911), Taft’s troubles and the Payne–Aldrich tariff, the 1912 four-way election and Wilson’s New Freedom as progressivism’s next instalment. Omissions tied to evaluation: the movement beyond the White House — muckrakers, state-level reform, labour — appears nowhere, and business’s own accommodation to regulation (Kolko’s argument) is outside the set’s frame. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 16 — The Great Migration  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-migration',
    title: 'The Great Migration: the promise of the North',
    themeKey: 'cap-migration',
    themeSentence:
      'Between the wars a million and a half Black southerners moved north — drawn by war industry’s wages and the promise of dignity, and met by the ghetto, the riot and a freedom that was real but rationed.',
    tags: ['cap-p5'],
    era: 'whole',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of a family newly arrived in Chicago during the Great Migration, published by the Chicago Commission on Race Relations, c. 1920.',
        image: {
          src: 'sources/arthur-family-chicago-1920.jpg',
          alt: 'A Black family of eight in their Sunday best stand with their suitcases, newly arrived in Chicago during the Great Migration, c. 1920',
          credit: 'The Negro in Chicago (Chicago Commission on Race Relations, 1922). Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows a family of eight — father, mother, grandparents and children down to a small boy in a straw hat — posed together in their Sunday best, coats over their arms. At their feet stand the suitcases with which they have just arrived in the city.',
        note: 'Note: the photograph was published in “The Negro in Chicago”, the official study produced after the Chicago race riot of 1919. Chicago’s Black population grew from 44,000 in 1910 to 234,000 by 1930.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: A letter from Mississippi to the Chicago Defender, an African American weekly newspaper, 1917 — one of thousands the paper received from southerners seeking help to come north.',
        body: 'Dear Sir: I am writing you as I seen in your great paper that there is chances there for men willing to work, and I am a hard working man with a family, aged 34, can do any kind of common labour and some carpentering. Here a man works the year round and at settlement time owes the man more than when he started, and my children cannot get schooling but four months and cotton comes before that. I do not need to tell you how a coloured man stands here — you know — only last month they taken a man off the train at our depot, and what was done I will not write, but nothing was ever said to nobody about it. I am not particular about the wages so it is a living wage, and I would not mind the cold. Please sir do not print my name in your paper as it would go hard with me here if it was known I wrote north, but send me word what to do and where to come. I want to get my family out of this Godforsaken country while my children are young. Yours truly.',
        footnotes: [
          'The Defender, banned or burned in parts of the South, campaigned openly for migration — printing train timetables, job notices and letters like this one (with names withheld).',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Great Migration written by a historian and published in 2015.',
        body: 'The migration was the largest internal movement in American history to that point, and it was the migrants’ own project — no agency organised it, and both regions’ establishments tried at times to stop it. Its causes ran in pairs: the pull of war industry’s wages (three times a field hand’s) with the push of the boll weevil and collapsing cotton; the pull of schools and the vote with the push of lynch law and the settlement table. What the migrants found was better and worse than the promise. Wages were real, and so were the churches, newspapers and political machines Black Chicago and Harlem built — a congressman elected by 1928, the flowering called the Renaissance. But the North drew its own colour line: restrictive covenants and bombings walled the newcomers into overcrowded ghettos where rents ran double; the unions of the day mostly excluded them, which made them strikebreakers in white workers’ eyes; and in the summer of 1919 the line was enforced by riot in a dozen cities — in Chicago, thirty-eight dead and a commission report whose photographs of respectable arriving families were themselves an argument: that the migrants were citizens, not a problem. The Migration did not end American racism; it nationalised it — and in doing so it created the urban constituencies from which everything later called the civil rights movement would be built.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Great Migration of Black southerners to northern cities from about 1915, wartime industrial demand for labour, Chicago’s Black population multiplying, the 1919 riot and the commission study in which the photograph appeared)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the first Great Migration — war industry’s labour hunger after 1914, the Defender’s campaign, arrival at the northern terminals, and the aftermath of the 1919 Chicago riot, which produced the official study that published this photograph to present the migrants with dignity. Specific details from the photograph — the Sunday best, the three generations, the suitcases — should be connected to those circumstances, including the image’s deliberate respectability. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the causes of the Great Migration.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. a first-hand voice of a prospective migrant stating his own reasons, but a letter of appeal shaped by its purpose and the Defender’s selection)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly synthesis weighing paired causes with hindsight, but distant and interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 belongs to a documented corpus (the Defender letters, later published by scholars) and states the causes in the migrant’s own order — debt peonage, schooling, terror, wages last; its requested anonymity is itself evidence of the conditions described; as a plea it presents its writer favourably, and the Defender printed what served its campaign. Source 3 offers scale, the paired-causes analysis and the long consequence, but its final judgements (“nationalised” racism; the seedbed of civil rights) are interpretations. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the experience of African Americans within American capitalism in the period 1901 to 1941. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the African American experience in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent that experience, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents Black Americans claiming capitalism’s promise against a system built to deny it — the respectable arrival (Source 1), the flight from peonage in the migrant’s own hand (Source 2), and the historian’s balance of gains and walls (Source 3). Strong responses widen across the period with own knowledge: sharecropping and disenfranchisement as the point of departure, wartime jobs and the 1919 riots, the urban ghetto’s economics (covenants, rent), the Harlem Renaissance and Black institutions, Depression devastation (“last hired, first fired”) and the New Deal’s uneven reach, the political shift to Roosevelt, and A. Philip Randolph’s 1941 March on Washington Movement winning the wartime FEPC — the period’s closing demonstration that migration had created power. Omissions tied to evaluation: the southern majority who stayed, and Black women’s specific labour experience (domestic service), sit outside the set. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 17 — The dream factory  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-hollywood',
    title: 'The dream factory: Hollywood and the star system',
    themeKey: 'cap-hollywood',
    themeSentence:
      'By the 1920s the movies were America’s fourth-largest industry — a factory system for manufacturing dreams, stars and the styles by which Americans learned to see themselves.',
    tags: ['cap-p3'],
    era: 'mid',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the crowd outside Grauman’s Egyptian Theatre, Hollywood, for a premiere attended by Douglas Fairbanks and Mary Pickford, 1926.',
        image: {
          src: 'sources/egyptian-theatre-1926.jpg',
          alt: 'Floodlit night crowd filling the forecourt of Grauman’s Egyptian Theatre for a Fairbanks–Pickford premiere, 1926',
          credit: 'Photographer unknown, 1926. Los Angeles Public Library collection, public domain, via Wikimedia Commons',
        },
        body: 'The night photograph, taken from above, shows the long forecourt of a picture palace built as an Egyptian temple, packed on both sides with a crowd in hats waiting behind ropes. Newsreel cameras and floodlights are mounted over the entrance, where the sign announces “DOUG AND MARY PREMIER THIS EVENING”; a lit aisle runs down the centre for the stars’ arrival.',
        note: 'Note: “Doug and Mary” — Douglas Fairbanks and Mary Pickford — were the most famous couple in the world; with Chaplin and D. W. Griffith they had founded their own studio, United Artists, in 1919. By the late 1920s the American film industry sold some 80 million tickets a week.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an article in an American fan magazine, 1926.',
        body: 'What does it feel like, girls, to own the world? Mary Pickford could tell you, but she is too busy being the world’s sweetheart — and its shrewdest businesswoman, for the golden curls you copy came with a head for contracts that made her the first star to take a million dollars a year and half the profits besides. Visit the studio and you will see the fairy tale run like a factory: the story department reading three hundred novels a month, the lighting men who can make any shopgirl luminous, the fitters copying Paris for the costume department — and remember that what Mary wears on Wednesday, the pattern companies sell to Main Street by June. Do not let anyone tell you the pictures are frivolous. They are the greatest school of manners, dress and desire the world has ever seen: the girl in Iowa learns to walk, to kiss, to furnish her parlour and to want — ah, to want! — from the silver screen. And Hollywood knows it, to the last dollar.',
        footnotes: [
          'Fan magazines such as Photoplay — this article is in their style — themselves sold in the millions and were part of the studios’ publicity machine.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the American film industry written by a historian and published in 2019.',
        body: 'Hollywood industrialised enchantment. The studio system that matured in the 1920s was vertically integrated like oil or steel — production, distribution and the theatre chains in the same hands — and it applied mass-production discipline to fantasy: pictures budgeted and scheduled like any manufacture, stars developed, typed and traded like patented products, their images managed by contract down to marriage and dental work. The scale justified the method: by decade’s end the industry ranked among the nation’s largest, and its true product was larger than entertainment. The movies standardised the look of desire — dress, decor, courtship, the body itself — for a national and then a world market; advertisers learned from them, and Main Street’s shops sold what the screen had taught. When scandal threatened the machine in the early twenties, the studios hired a Presbyterian elder to police their image and wrote purity into contracts — self-regulation as business strategy, perfected in the Production Code. The dream factory’s deepest invention was thus not any film but the audience: the modern consumer, schooled weekly in wanting.',
        footnotes: [
          'Will Hays, hired 1922; the Production Code was adopted in 1930 and enforced strictly from 1934.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Hollywood’s rise to a major national industry in the 1920s, the star system and celebrity of Fairbanks and Pickford, picture palaces and the premiere as manufactured spectacle, film’s place in the decade’s consumer culture)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details represented in and/or surrounding the source', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. to report and magnify the spectacle of the premiere — publicity from which the studios, the theatre and the press all profited)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. “Account for” requires candidates to state the reasons for — here, the possible reasons the source was created. Generic purposes (“to inform”) are not enough for full marks: the purpose must be specific to this source. Context: Hollywood at mid-decade — the studio system consolidated, stars as national property, exotic picture palaces built as consumption temples, and the premiere staged for newsreel and fan press as much as for the audience present. Specific details from the photograph — the Egyptian architecture, the floodlights and cameras, the roped crowd, the “Doug and Mary” sign — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the film industry’s influence on American life. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities — striking and easily missed: both sources describe the same machine in almost the same terms (the fan magazine’s “fairy tale run like a factory” is the historian’s “industrialised enchantment”), and both insist the movies taught Americans what to want (the Iowa girl learning “to want”; the historian’s consumer “schooled weekly in wanting”). The differences: Source 2 celebrates from inside the publicity machine — it is itself the star system speaking, breathless, addressed to fans as apprentice consumers; Source 3 analyses from outside — vertical integration, contract control of stars, self-censorship as business strategy — and passes the judgements the fan magazine exists to prevent. Candidates should note that Source 2’s knowingness (“Hollywood knows it, to the last dollar”) partly collapses the distance. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the ways film and fashion shaped American values in the 1920s and 1930s. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of film and fashion shaping values in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent film and fashion’s shaping of values, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents the movies as the consumer culture’s great teacher — the manufactured spectacle (Source 1), the lesson in wanting delivered to fans (Source 2), and the historian’s account of the machine and its deepest product, the consumer (Source 3). Strong responses test with own knowledge: the star system’s economics (Pickford’s contracts; the fan press), the picture palace boom, film’s alliance with fashion and cosmetics (Rubinstein and Arden, pattern companies), the scandals and the Hays Office, sound after 1927, Depression-era attendance and the Production Code, and the counter-voices (clergy, women’s clubs) who fought the screen’s morals — evidence that its influence was contested as well as real. Omissions tied to evaluation: the audience’s own agency (viewers were not blank slates) and the industry’s racial exclusions on screen and off. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 18 — When the banks failed  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-banks',
    title: 'When the banks failed: panic and the New Deal rescue',
    themeKey: 'cap-banks',
    themeSentence:
      'Between 1930 and 1933 the failure of thousands of banks turned recession into catastrophe — and the new administration’s first victory was to talk the nation out of its panic in a single week.',
    tags: ['cap-p4'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of depositors outside the closed American Union Bank, New York City, April 1932.',
        image: {
          src: 'sources/bank-run-1932.jpg',
          alt: 'A dense crowd of depositors fills the street corner outside the closed American Union Bank, New York, 1932',
          credit: 'US National Archives, public domain, via Wikimedia Commons',
        },
        body: 'The photograph, taken from above, shows a dense crowd of men and women in hats packing the pavement and street corner outside a bank whose signs still advertise “Safe Deposit Vaults” and “4% paid on thrift accounts”. Traffic is stopped; police are lost in the press of depositors around the doors of a bank that has closed with their money inside.',
        note: 'Note: the American Union Bank failed in 1932. Before deposit insurance existed, a failed bank’s depositors simply lost their savings; some 9,000 American banks failed between 1930 and 1933.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from President Franklin D. Roosevelt’s first radio “fireside chat”, on the banking crisis, 12 March 1933.',
        body: 'My friends, I want to talk for a few minutes with the people of the United States about banking — to explain what has been done in the last few days, and why. When you deposit money in a bank, the bank does not put the money into a safe-deposit vault: it invests your money in many forms of credit — bonds, mortgages, loans. In other words, the bank puts your money to work to keep the wheels turning. Because of undermined confidence, a general rush by a large portion of our population to turn bank deposits into currency began — a rush so great that the soundest banks could not get enough currency to meet the demand. That is why I proclaimed the bank holiday. Tomorrow, banks found to be sound will reopen, and I can assure you that it is safer to keep your money in a reopened bank than under the mattress. Confidence and courage are the essentials of success in carrying out our plan. You people must have faith; you must not be stampeded by rumours or guesses. Let us unite in banishing fear. We have provided the machinery to restore our financial system; it is up to you to support and make it work. It is your problem no less than it is mine. Together we cannot fail.',
        footnotes: [
          'Roosevelt had closed every bank in America by proclamation on 6 March 1933, two days after his inauguration; the Emergency Banking Act passed in a single day.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Depression’s financial crisis written by a historian and published in 2014.',
        body: 'The banking system did not fail because of the Crash; it failed because it was built to fail. Tens of thousands of small “unit” banks — many states forbade branches — stood undiversified against local shocks, and when farm prices collapsed the rural banks went first, in waves from late 1930. Each wave taught depositors the same rational lesson: get your money out before your neighbours do. There was no deposit insurance and no lender acting as one — the Federal Reserve, misreading collapse as purgation, let the money supply shrink by a third. By March 1933 the contagion had closed banks in every state, and the currency itself was being hoarded. What ended the panic cost almost nothing: a week’s holiday, an emergency law, and eighteen minutes of presidential explanation on the radio. When the banks reopened, deposits flowed in, not out — confidence restored by the appearance of decisive competence. The permanent repairs followed within months: federal deposit insurance (which the president had opposed and which worked better than anything he proposed), the separation of commercial from investment banking, and the Securities acts. Bank failures, five hundred a year in the “prosperous” twenties, fell to a handful. Of all the New Deal’s constructions, the boring ones proved the most durable.',
        footnotes: [
          'The Glass–Steagall Act and the FDIC date from June 1933.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the waves of bank failures from 1930 — some 9,000 by 1933, the absence of deposit insurance so failure meant ruin, runs as rational panic, the Depression deepening through the credit collapse)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the banking collapse of 1930–33 — failures spreading from the farm states to the cities, depositors’ life savings destroyed without insurance, and the run itself as the mechanism of contagion. Specific details from the photograph — the stopped street, the promises still painted on the closed bank’s signs, the density and respectability of the crowd — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of how the banking crisis was ended in 1933.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the decisive document itself — the broadcast that ended the panic — but persuasion designed to manufacture the confidence it describes)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective analysis with the statistics and the structural causes, but interpretive in its judgements)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is the historical instrument itself — the plain-language explanation, the intimacy of “my friends”, the enlistment of the listener (“your problem no less than mine”) — and its success the next morning is part of the record; candidates should also read it as performance: reassurance necessarily overstated (“I can assure you…”), complexity suppressed, the president’s own uncertainties hidden. Source 3 supplies what the chat could not — the structural causes (unit banking, the Federal Reserve’s failure) and the sequel (FDIC, Glass–Steagall) — with the settled judgement of hindsight; its assignments of credit (insurance FDR opposed “worked better than anything he proposed”) are argued interpretation. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the effectiveness of the political responses to the Great Depression. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the effectiveness of political responses in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the responses’ effectiveness, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the banking rescue as the New Deal’s clearest success — the disease (Source 1), the cure administered by radio (Source 2), and the historian’s verdict that the durable repairs were the boring ones (Source 3). Strong responses set this success against the record with own knowledge: Hoover’s RFC as precedent, the Hundred Days’ other measures, the contrast between banking (solved) and unemployment (unsolved until war), the 1937 relapse, and the debate on the New Deal’s overall effectiveness — using the banking case to argue what “effectiveness” means (stabilisation and security versus recovery). Omissions tied to evaluation: the depositors who had already lost everything before March 1933 appear only in the photograph — the rescue came too late for them, a point the celebratory sources pass over. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 19 — The tree army  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-ccc',
    title: 'The tree army: the CCC and relief in practice',
    themeKey: 'cap-ccc',
    themeSentence:
      'The Civilian Conservation Corps put three million young men into camps and forests — the New Deal’s most loved programme, and a mirror of its limits, down to the colour line that ran through its camps.',
    tags: ['cap-p4', 'cap-p5'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of first-aid training at a Civilian Conservation Corps camp in the Sumter National Forest, South Carolina, late 1930s.',
        image: {
          src: 'sources/ccc-camp-1930s.jpg',
          alt: 'Rows of African American CCC enrollees practise first aid in pairs on the grass beside a forest road, an instructor crouching at the line’s end',
          credit: 'US National Archives, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows a long double row of young CCC enrollees kneeling in pairs on the grass beside a forest road, each man practising artificial respiration on a partner lying prone, while an instructor works along the line. The enrollees are African American; the camp, like all CCC companies in the South and most elsewhere, was segregated.',
        note: 'Note: the National Archives caption records that representatives of all the African American companies in the Army district were sent to this camp for instruction. Some 250,000 Black enrollees served in the CCC, almost entirely in segregated companies.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a letter written by a CCC enrollee in a western camp to his mother, 1935.',
        body: 'Dear Ma — You would not know me. I have put on eleven pounds since June and the doctor says I have grown half an inch, which at nineteen I did not expect. We are up at six, breakfast that would have fed the whole street at home, and out to the mountain by seven — we are cutting fire-breaks and putting in check dams to hold the soil, and a ranger teaches us the why of it, which I like. It is the first work I have had since I left school, Ma, three years looking and nothing, and a man gets to feeling he is worth nothing. Here a fellow is worth something: they feed you for working, and there is a class in the evenings where I am learning drafting. The thirty dollars — twenty-five goes home to you like they promised, so look for it; keep Susy in shoes and put something by. Some of the fellows grouse about the army way of it, reveille and inspection, but I say the army way beats the street corner way. Tell Pa the boy that could not lift the coal hod sends his respects and can now throw it over the shed.',
        footnotes: [
          'Enrollees were paid $30 a month, of which $25 was sent directly to their families.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Civilian Conservation Corps written by a historian and published in 2016.',
        body: 'No New Deal agency was better loved, and none tells more about the New Deal’s compromises. The Corps did what it promised: three million young men — a quarter of them from families on relief — fed, hardened and modestly educated; two hundred million dollars a year moved to poor households through the allotment cheques; and a conservation legacy — three billion trees, the state park systems, soil work whose value the Dust Bowl proved — that outlasted every criticism. But the Corps was also the New Deal in miniature in less flattering ways. It was built on political bargains: run through the army, capped in size to soothe union fears of militarised cheap labour, and administered locally — which in practice meant segregation everywhere and near-exclusion of Black enrollees in some states until Washington forced quotas, then separate camps, often sited over white communities’ protests. Women were excluded entirely (a token “She-She-She” camp programme reached a few thousand). The CCC solved no macroeconomic problem — its numbers were small against seven figures of youth unemployment — and it ended not by decision but by war, its camps emptying into the army in 1942. Its real product was harder to count: a generation’s memory that the government, in a bad time, had been on their side.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the CCC founded in 1933 as the New Deal’s youth relief and conservation programme, army-run camps with training and education, its scale — some three million enrollees, and its segregated companies including the African American companies shown)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details represented in and/or surrounding the source', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. a government photograph documenting and promoting the CCC’s work — showing the public that relief money produced disciplined, useful training)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. “Account for” requires candidates to state the reasons for — here, the possible reasons the source was created. Generic purposes (“to inform”) are not enough for full marks: the purpose must be specific to this source. Context: the CCC at work in the later 1930s — camps under army administration, conservation labour paired with education and training (the first-aid class shown), and the programme’s racial structure: segregated companies, quotas won only after protest, camps for Black enrollees frequently pushed to remote sites. Specific details from the photograph — the paired training on the grass, the uniformed rows, the segregated company — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the value of the Civilian Conservation Corps. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities: both sources credit the Corps with exactly the same goods — food, health, work, training, the allotment cheque home, and above all restored worth (the boy “worth something”; the historian’s “a generation’s memory that the government had been on their side”). The differences: Source 2 is one enrollee’s experience, personal and grateful, with the programme’s terms accepted (“the army way beats the street corner way”); Source 3 sets the same goods inside the ledger of compromise — segregation, the exclusion of women, the union bargain, the macroeconomic smallness — that no single camp letter could see. The letter also cannot speak for the segregated camps of Source 1, a connection strong answers may draw. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the consequences of the New Deal for different groups within American society. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the New Deal’s consequences for different groups in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent those consequences, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents the New Deal as real help distributed on existing society’s terms — the enrollee restored (Source 2), the programme audited (Source 3), and the colour line visible in the camps themselves (Source 1). Strong responses generalise with own knowledge: the pattern repeated across agencies — NRA codes and the “Negro Removal Act” gibe, Social Security’s exclusion of domestic and farm labour, the AAA’s displacement of tenants, women’s lower relief wages — alongside the countervailing gains (relief’s reach, the “Black Cabinet”, Eleanor Roosevelt’s advocacy, the political realignment of Black voters by 1936). The strongest answers use the CCC to argue the general thesis: the New Deal helped millions and discriminated while doing so, because its price of passage was the consent of those who ran the old order. Omissions tied to evaluation: no critic of relief (taxpayer or conservative) and no woman appears in the set. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 20 — Arsenal of democracy  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-arsenal',
    title: 'Arsenal of democracy: capitalism and the coming of war',
    themeKey: 'cap-arsenal',
    themeSentence:
      'Between 1939 and 1941 the war Americans wanted to stay out of rebuilt the economy they had struggled to repair — and Lend-Lease committed American capitalism to the Allied cause months before Pearl Harbor.',
    tags: ['cap-p2'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of President Franklin D. Roosevelt signing H.R. 1776 — the Lend-Lease Act — at his desk, 11 March 1941.',
        image: {
          src: 'sources/lend-lease-signing-1941.jpg',
          alt: 'Franklin Roosevelt, seated at his crowded desk, signs the Lend-Lease bill, March 1941',
          credit: 'Library of Congress, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows Roosevelt alone at his famously cluttered desk, head bent, signing the bill. No ceremony surrounds the moment: among the desk’s ornaments, ashtrays and papers, the president simply writes his name on the act numbered — with congressional irony — H.R. 1776.',
        note: 'Note: Lend-Lease empowered the president to “sell, transfer, exchange, lease, lend” war material to any nation whose defence he deemed vital to the United States. Some $50 billion of aid eventually flowed, first to Britain, later to the USSR and China.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from President Roosevelt’s radio fireside chat of 29 December 1940 — the “arsenal of democracy” broadcast.',
        body: 'This is not a fireside chat on war. It is a talk on national security. Never before since Jamestown and Plymouth Rock has our American civilisation been in such danger as now. The Nazi masters of Germany have made it clear that they intend not only to dominate all life and thought in their own country, but also to enslave the whole of Europe, and then to use the resources of Europe to dominate the rest of the world. Some of our people like to believe that wars in Europe and in Asia are of no concern to us. But it is a matter of most vital concern to us that European and Asiatic war-makers should not gain control of the oceans which lead to this hemisphere. Frankly and definitely there is danger ahead — danger against which we must prepare. But we well know that we cannot escape danger by crawling into bed and pulling the covers over our heads. We must be the great arsenal of democracy. For us this is an emergency as serious as war itself. We must apply ourselves to our task with the same resolution, the same sense of urgency, the same spirit of patriotism and sacrifice as we would show were we at war.',
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from an economic history of American mobilisation written by a historian and published in 2017.',
        body: 'What a decade of domestic experiment had not achieved, eighteen months of defence orders did. From the fall of France in June 1940 the money moved as it had never moved for relief: defence appropriations of unimaginable size, plants financed by government and run by corporations, the automobile industry — after hard bargaining and full order books — turning to tanks and aircraft engines. Unemployment, still near ten million in 1939, halved by late 1941 and vanished in 1942; the Depression did not so much end as get drafted. The boom settled old arguments and opened new ones. It vindicated the heretics who had said all along that only spending on a war’s scale would restore full employment — Keynesianism proved by ordnance. It re-enthroned the businessmen the thirties had demonised: the “economic royalists” came to Washington as dollar-a-year men, and profits, taxes and union membership rose together under the war contracts’ umbrella. And it shifted the economy’s geography and workforce — the South and West industrialising around the camps and aircraft plants, the first cracks in employment colour bars under the March on Washington Movement’s pressure in 1941. The arsenal was built before the war was declared; Pearl Harbor found American capitalism already converted, and arguing chiefly over the terms.',
        footnotes: [
          'Executive Order 8802, banning discrimination in defence industries, was issued in June 1941 under pressure from A. Philip Randolph’s planned march.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the war in Europe from 1939 and Britain standing alone after the fall of France, the exhaustion of Britain’s dollars for cash-and-carry purchases, the Lend-Lease debate against isolationist opposition, the act’s passage in March 1941)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: early 1941 — Britain’s survival in question and its ability to pay ending, Roosevelt’s re-election won on aid short of war, the great congressional battle with the isolationists over H.R. 1776, and the act’s signature converting the United States into the Allies’ supplier by policy. Specific details from the photograph — the unceremonious signing, the bill’s pointed number — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the impact of the Second World War on the American economy to 1941.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the president’s own case for mobilisation at the decisive moment, but persuasion framing rearmament as security to a war-wary public)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective economic history with employment data and the full arc, but interpretive in its judgements)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is the pivotal public argument in the speaker’s own words — the “arsenal” formula, the security framing, the explicit denial that war is intended — and is first-rate evidence of how mobilisation was sold; as prophecy and self-description it must be read against the isolationist case it was built to defeat and the administration’s private expectations. Source 3 commands the statistics (unemployment halved by 1941) and the structural consequences (geography, labour, the business–government reconciliation), but its epigrams (“the Depression got drafted”; “Keynesianism proved by ordnance”) are interpretations, and the weight it gives defence spending versus other recovery forces is argued terrain. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the impact of the Second World War on the American experience of capitalism to 1941. In your answer, refer to all three sources and your own knowledge.',
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
              { descriptor: 'Evaluates clearly the extent to which the sources represent the war’s impact to 1941, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the pre-war mobilisation as the Depression’s true ending and capitalism’s reconciliation with the state — the commitment signed (Source 1), the case made to the nation (Source 2), and the boom audited (Source 3). Strong responses test with own knowledge: cash-and-carry and the destroyers deal, the Selective Service Act of 1940, the isolationist movement (America First, Lindbergh) that the sources engage only implicitly, the defence boom’s numbers, dollar-a-year men and the OPM, and Executive Order 8802 as the boom’s first civil-rights consequence. The evaluative edge: the set is Roosevelt’s story — the substantial American opposition to these policies, and the profiteering and conversion disputes inside the boom, appear nowhere; and the elective’s closing question (did war, not reform, end the Depression?) should be argued, not assumed. A source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
