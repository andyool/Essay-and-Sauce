import type { SourceSet } from './types';

// Source sets 21–25 for Elective 7: Capitalism — the American experience
// (1901–1941).

export const CAP_SOURCE_SETS_4: SourceSet[] = [
  // ------------------------------------------------------------------
  // CAP SET 21 — The golden door  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-goldendoor',
    title: 'The golden door: immigration and industrial America',
    themeKey: 'cap-goldendoor',
    themeSentence:
      'A million immigrants a year fed the furnaces and sweatshops of American capitalism at the start of the century — welcomed as labour, suspected as strangers, and shut out within a generation.',
    tags: ['cap-p1', 'cap-p5'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of immigrants landing at the Battery, New York, from the Ellis Island ferry, c. 1900.',
        image: {
          src: 'sources/immigrants-battery-nyc.jpg',
          alt: 'Immigrants with bundles and baskets stream up the gangway from the Ellis Island ferry into the barge office at the Battery, New York, c. 1900',
          credit: 'Library of Congress, public domain, via Wikimedia Commons',
        },
        body: 'The photograph, taken from the ferry’s upper deck, shows newly landed immigrants — men in broad hats, women in headscarves, children among the baskets and shouldered bundles that hold everything they own — crowding up the gangway into the barge office at the Battery, the doorway to the American city. Officials in dark coats watch the stream pass.',
        note: 'Note: these passengers have just been “passed” at Ellis Island, the federal inspection station through which some twelve million immigrants entered between 1892 and 1954. In the peak year of 1907, more than a million arrived.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a letter written by a Polish immigrant steelworker in Pittsburgh to his brother, 1907, translated from Polish.',
        body: 'Dear brother — Come, but come knowing the truth, because the letters that lie fill the steerage both ways. It is true about the wages: I earn in a day what took a week at home, and no man here asks whether I bowed low enough to the squire. It is also true what the wages cost. I work twelve hours in heat you cannot imagine, seven days when the furnace demands it, and the man who worked my place before me is lame — the company gave his wife fifty dollars and the priest a mass. We live four families to a house that shakes when the trains pass; the boss calls every one of us “Hunky” whatever country we come from; and the Americans’ union will not have us, then curses us for taking the strike-breaker’s wage — as if a man crossed the ocean to starve politely. And still I say come. I have eaten meat this week on three days. Mother would not believe it, so do not tell her; she would think I have become a thief. Here a strong back is a fortune, brother — spent quickly, but a fortune. Bring Stasiek’s boots.',
        footnotes: [
          'Around a quarter of immigrants in this period returned home; letters and remittances steered chains of migration from particular villages to particular mills.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of American immigration written by a historian and published in 2016.',
        body: 'Industrial America was built on a bargain neither side ever stated. The new immigration from southern and eastern Europe — Italians, Poles, Slavs, Jews, a million a year by 1907 — supplied the one input the factories could not get enough of: unskilled labour that arrived grown, fed and educated at another country’s expense. In return the immigrant received the industrial wage, princely by Galician standards and priced accordingly by American ones — the dirtiest and most dangerous work, the company town, and a place at the bottom that native workers defended fiercely, for the colour line was not the economy’s only line. The bargain’s politics were always unstable. Employers wanted the door open; unions wanted it shut; patricians measured skulls and found the newcomers wanting. War nationalism, the Red Scare and the pseudo-science of eugenics finally assembled the majority that the quota acts of 1921 and 1924 expressed: the door closed on the very peoples who had built the boom. The irony took a generation to mature — the closed door made the “new immigrants” settle, naturalise and organise, and their children became both the CIO’s rank and file and the New Deal’s voters.',
        footnotes: [
          'The 1924 National Origins Act cut annual immigration to a sixth of its pre-war peak and skewed quotas against southern and eastern Europe.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. mass immigration at its turn-of-century peak — a million arrivals in 1907, Ellis Island as the federal inspection station, the new immigration from southern and eastern Europe feeding industrial labour demand)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the peak years of the great migration to industrial America — steamship steerage, Ellis Island inspection, the ferry to the Battery as the final step into the labour market of the world’s fastest-growing economy. Specific details from the photograph — the bundles and baskets, the family groups, the watching officials — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the immigrant experience of American capitalism.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. a first-hand private letter weighing the bargain for a trusted reader, but one worker’s view, shaped by the advice it exists to give)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly synthesis with the numbers and the long arc to 1924 and beyond, but interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 belongs to the great documented corpus of immigrant letters and carries the genre’s strengths — private candour (warning against “letters that lie”), the double ledger of wages and costs, the texture of ethnic slur and union exclusion; its limits are perspective (steel, Pittsburgh, a young man’s strong back) and purpose (advice, which dramatises both warning and reassurance). Source 3 supplies scale, the political economy of the “bargain” and the closing of the door, but its arc — irony maturing into the New Deal coalition — is interpretation. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the place of immigrants in American capitalism at the beginning of the 20th century. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the immigrant’s place in American capitalism in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent that place, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the immigrant as industrial capitalism’s indispensable, ill-used input — the arrival (Source 1), the bargain weighed by one who made it (Source 2), and the system and its closing (Source 3). Strong responses widen with own knowledge: the Triangle fire of 1911, the sweatshop and the padrone system, Americanisation campaigns, the IWW’s and later the CIO’s organisation of the “unorganisable”, wartime nationalism and the Red Scare, and the quota acts’ eugenic justifications. Omissions tied to evaluation: Asian exclusion (already law) and Mexican migration (left outside the quotas for the growers’ sake) sit beyond the set’s Atlantic frame, as do the women whose garment labour anchored whole industries. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 22 — Monkey trial: Dayton 1925  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-scopes',
    title: 'Monkey trial: Dayton, 1925',
    themeKey: 'cap-scopes',
    themeSentence:
      'The Scopes trial staged the decade’s culture war as courtroom drama — fundamentalist faith against modern science, with the national press selling tickets.',
    tags: ['cap-p3'],
    era: 'mid',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of Clarence Darrow examining William Jennings Bryan on the outdoor platform of the Rhea County courthouse, Dayton, Tennessee, 20 July 1925.',
        image: {
          src: 'sources/scopes-trial-1925.jpg',
          alt: 'Seen over a spectator’s shoulder, Clarence Darrow examines William Jennings Bryan on an outdoor platform before a dense crowd at the Scopes trial, July 1925',
          credit: 'Watson Davis / Smithsonian Institution, 1925. No known restrictions, via Wikimedia Commons',
        },
        body: 'The photograph, taken over the straw-hatted shoulder of a spectator, shows the trial’s most famous hour: the proceedings moved outdoors for the heat and the crowds, Darrow standing in shirtsleeves to examine Bryan — the three-time presidential candidate, called by the defence as an expert on the Bible — on a plank platform, packed to its rails, under the courthouse wall. Faces watch from the upper windows; the crowd fills every foot of the yard.',
        note: 'Note: John Scopes, a schoolteacher, was tried for teaching evolution contrary to Tennessee’s Butler Act. Some 200 reporters covered the trial, and it was the first broadcast live on American radio. Bryan died in Dayton five days after the verdict.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a dispatch by a Baltimore newspaper correspondent reporting the trial, July 1925.',
        body: 'The trial of the infidel Scopes proceeds in an atmosphere that is one part law and nine parts revival meeting. Hot-dog and Bible stands compete along the main street; a chimpanzee in a plaid suit is exhibited as the defence’s “star witness”; and the juror who confessed he could read was regarded by his colleagues, I am told, with some suspicion. Let no one mistake the comedy for insignificance. The gentlemen of the prosecution are not clowns; they are the advance guard of a genuine army — the millions of the hinterland who have watched the cities capture their children with Darwin, jazz and the Sunday newspaper, and who mean, by statute, to take them back. Bryan speaks for them out of a sincerity that is the more formidable for being invincible to evidence. Yesterday he told an applauding courtroom that he cared not for the age of rocks but for the Rock of Ages. It was a triumph, and it was also, I suspect, an epitaph: causes that must forbid questions have already begun to lose the argument, and they know it — that is why they legislate.',
        footnotes: [
          'The dispatch is in the style of H. L. Mencken, whose scornful Dayton reports were syndicated nationally — and denounced throughout the South.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of religion and modernity in America written by a historian and published in 2018.',
        body: 'Both sides won at Dayton, which is why the argument never ended. In law the fundamentalists prevailed: Scopes was convicted (the fine later voided on a technicality), the Butler Act stood for forty years, and publishers quietly thinned evolution from the nation’s textbooks for a generation — a victory by chilling effect that the famous mockery obscured. In the metropolitan culture the modernists won a rout: Darrow’s examination of Bryan — the Bible’s champion conceding under oath that its days might be ages — was reported to the world as faith’s humiliation, and “fundamentalist” entered the language as a synonym for rube. The deeper history confounds both scorecards. Fundamentalism did not die of embarrassment; it withdrew from the discredited public stage into its own network of churches, radio stations and colleges, and rebuilt — re-emerging politically half a century later to the astonishment of everyone who had read only Mencken. And the trial itself was a thoroughly modern product: staged by Dayton boosters to advertise the town, prosecuted and defended by celebrity, sold by the new mass media to a national audience. The machinery of the culture that fundamentalists feared was the machinery that made their trial famous.',
        footnotes: [
          'The ACLU had advertised for a test-case defendant; Dayton’s businessmen recruited Scopes partly to put the town on the map.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Tennessee’s Butler Act banning the teaching of evolution, the Scopes test case of July 1925, Bryan for the prosecution and Darrow for the defence, the national press and radio spectacle, the trial moved outdoors for the crowds)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details represented in and/or surrounding the source', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. press photography feeding a national audience hungry for the trial’s drama — the session moved outdoors partly for the crowds and the cameras)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. “Account for” requires candidates to state the reasons for — here, the possible reasons the source was created. Generic purposes (“to inform”) are not enough for full marks: the purpose must be specific to this source. Context: the culture war of the 1920s brought to court — fundamentalist legislation against evolution, the ACLU’s test case, the celebrity duel of Bryan and Darrow, and a small town turned national theatre by two hundred reporters and live radio. Specific details from the photograph — the outdoor platform, the packed yard, the spectator’s shoulder through which the nation watched — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the significance of the Scopes trial. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities: both sources take the movement behind the prosecution seriously as a mass force (the correspondent’s “genuine army”; the historian’s network that rebuilt), and both see the trial as more than its comedy. The differences are of judgement and horizon: Source 2, writing in the moment and for a metropolitan audience, frames Dayton as the last stand of a doomed cause — the “epitaph” — with the scorn that made its author famous; Source 3, with a century’s view, corrects the obituary on every point: legal victory to the fundamentalists, cultural victory to the modernists, and long-run survival to the movement Mencken buried. The historian also turns the lens on the trial’s own machinery — boosters, celebrity, mass media — which the correspondent is part of and does not examine. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the conflict over values in the United States in the 1920s. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the decade’s conflict over values in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent that conflict, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents the values conflict as public theatre with real stakes — the staged confrontation (Source 1), the contemporary metropolitan reading (Source 2), and the historian’s audit of who actually won what (Source 3). Strong responses connect Dayton to the decade’s wider battle lines with own knowledge: Prohibition, the Klan, immigration restriction, the rural–urban census watershed of 1920, the new media (radio, syndicated press) as the conflict’s amplifier, and Al Smith’s 1928 candidacy as the same war’s next campaign. Omissions tied to evaluation: no fundamentalist speaks for himself in the set — Bryan appears only through hostile or retrospective eyes — and the African American church, for which the evolution controversy carried different meanings, is absent entirely. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 23 — The happy warrior: 1928  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-smith',
    title: 'The happy warrior: Al Smith and the election of 1928',
    themeKey: 'cap-smith',
    themeSentence:
      'Al Smith — Catholic, wet, and a son of the immigrant city — carried the new urban America onto a national ticket in 1928, and the campaign against him measured exactly how far that America was still from power.',
    tags: ['cap-p3', 'cap-p5'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of Governor Alfred E. Smith of New York speaking at a flag-draped ceremony, 1920s.',
        image: {
          src: 'sources/al-smith-campaign.jpg',
          alt: 'Al Smith in derby hat and fur-collared coat speaks at a flag-draped platform into an early microphone, with newsreel and press cameras trained on him',
          credit: 'Bain News Service. Library of Congress, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows Smith in his trademark brown derby and a fur-collared overcoat, speaking from a bunting-draped platform into an early microphone. Around and below him the apparatus of modern publicity is at work: a press photographer’s plate camera on its tripod, a newsreel cinema camera cranking, and a crowd pressed close on every side.',
        note: 'Note: Smith rose from the Fulton Fish Market and Tammany Hall through the New York legislature — where the Triangle fire investigation made him a reformer — to four terms as governor. In 1928 he became the first Catholic nominated for president by a major party.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from Smith’s published reply to the charge that his religion disqualified him from the presidency, 1927.',
        body: 'I have taken an oath of office in this State nineteen times. Each time I swore to defend and maintain the Constitution of the United States… I recognize no power in the institutions of my Church to interfere with the operations of the Constitution of the United States or the enforcement of the law of the land. I believe in absolute freedom of conscience for all men and in equality of all churches, all sects, and all beliefs before the law as a matter of right and not as a matter of favor. I believe in the absolute separation of Church and State… I believe in the support of the public school as one of the cornerstones of American liberty… And I believe in the common brotherhood of man under the common fatherhood of God. In this spirit I join with fellow Americans of all creeds in a fervent prayer that never again in this land will any public servant be challenged because of the faith in which he has tried to walk humbly with his God.',
        footnotes: [
          'Smith was answering an open letter in the Atlantic Monthly which argued that a Catholic’s allegiance to Rome must conflict with the presidential oath.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the 1928 election written by a historian and published in 2016.',
        body: 'Smith never had a chance of winning in 1928, and the reasons he lost badly are more instructive than the fact. Against Hoover — prosperity’s engineer, in prosperity’s last autumn — any Democrat would have gone down; but Smith’s particular candidacy took the decade’s every cultural fault line and stood on all of them at once: Catholic in a Protestant country, wet in a dry one, Tammany in a nation schooled to despise the machine, and unmistakably of the city — the accent, the derby, the East Side — in the first election after the census had made urban America a majority the older America refused to accept. The whisper campaign did its work in the open: the Klan burned crosses along his campaign route; a photograph of the new Holland Tunnel circulated as his secret passage to the Vatican; and the Solid South broke for a Republican for the first time since Reconstruction. Yet the returns carried a message for those who could read them: Smith doubled the Democratic vote in the cities, carried the twelve largest for his party’s future, and bound the immigrant, Catholic and Jewish wards into a coalition waiting for better weather. The weather arrived in 1929. Franklin Roosevelt harvested in 1932 what the happy warrior had planted in defeat.',
        footnotes: [
          'Hoover won 444 electoral votes to Smith’s 87.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Smith as governor of New York and champion of the urban, immigrant Democracy, his rise through Tammany and reform, the new campaign technology of microphone and newsreel, his 1928 candidacy as the first Catholic major-party nominee)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: Smith at the height of his New York career and on the road to the 1928 nomination — the machine politician turned social reformer, campaigning through the new mass media to the urban audience that was his base. Specific details from the photograph — the derby (his brand), the microphone, the newsreel camera, the flags — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the part religion played in American politics in the 1920s.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. Smith’s own formal answer to the religious challenge, first-hand and considered, but an apologia crafted to reassure a Protestant electorate)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective analysis with the returns and the long consequence, but interpretive in its confidence)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is the authentic centre of the 1928 religion argument — Smith’s credo of separation, quoted ever since — and its very existence is evidence: no Protestant candidate was required to publish such an oath of civic loyalty; as apologia it presents the best case and cannot show the campaign’s underside. Source 3 has the returns, the whisper campaign’s documentation and the realignment thesis, but its counterfactual confidence (“never had a chance”) and its neat arc to 1932 are interpretations historians still refine. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the divisions within American society at the end of the 1920s. In your answer, refer to all three sources and your own knowledge.',
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
              { descriptor: 'Evaluates clearly the extent to which the sources represent those divisions, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents 1928 as the decade’s divisions given a single face — the city’s champion on the modern platform (Source 1), the oath of loyalty his faith was made to swear (Source 2), and the election as referendum on whose America counted (Source 3). Strong responses widen with own knowledge: the Klan and anti-Catholicism, Prohibition’s politics, the 1920 census and the immigrant city, the Solid South’s defection, Hoover and prosperity as the campaign’s other axis — and the realignment sequel in 1932–36. Omissions tied to evaluation: the economic issues that most 1928 voters also weighed appear only via Hoover’s prosperity, and Black Americans — for whom neither party offered much in 1928 — are outside the set’s frame. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 24 — Security  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-socialsecurity',
    title: 'Security: the Social Security Act of 1935',
    themeKey: 'cap-socialsecurity',
    themeSentence:
      'The Social Security Act built the American welfare state in the American grain — insurance rather than dole, earned rather than given, and shaped to pass a Congress that had other lines to defend.',
    tags: ['cap-p4'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of President Roosevelt signing the Social Security Act, Washington, 14 August 1935. Secretary of Labor Frances Perkins stands behind the President.',
        image: {
          src: 'sources/social-security-signing-1935.jpg',
          alt: 'Roosevelt signs the Social Security Act surrounded by legislators, with Secretary of Labor Frances Perkins standing directly behind him',
          credit: 'Library of Congress, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows Roosevelt at the signing table in a white summer suit, pen to the bill, ringed by the congressmen who carried it. Directly behind the President, the only woman in the frame, stands Frances Perkins, Secretary of Labor — the first woman in an American cabinet, and the Act’s chief architect.',
        note: 'Note: the Act created federal old-age insurance funded by payroll contributions, unemployment insurance run through the states, and aid for dependent children, the blind and the old poor. Farm labourers and domestic servants — a third of the workforce — were excluded.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a national radio address by Secretary of Labor Frances Perkins explaining the Social Security Act, 1935.',
        body: 'People jeered at me, some years ago, for saying that the time would come when the government of the United States would concern itself with the security of the men, women and children who make up the nation. That time has come. The Act does not offer anyone an easy life — nothing of the sort. It is a plain, sober piece of insurance against those hazards of life which no man, however industrious, can be certain of escaping: old age without savings, unemployment without warning, childhood without a breadwinner. The worker who contributes from his pay envelope acquires a right — not a favor, not a charity, but a legal right — to a benefit that no one can take from him and no means test can humiliate him for claiming. I will not pretend the law is complete. It leaves out many who need it; it must grow, and it will. But the corner has been turned. We have said, as a people, what civilised nations must say sooner or later: that the industrial system which men have built shall not be allowed to break the men who work it, and that security is not the enemy of self-reliance but its foundation.',
        footnotes: [
          'Perkins had made a federal security programme her condition for accepting the cabinet post in 1933.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the American welfare state written by a historian and published in 2017.',
        body: 'The Act’s design tells the historian more than its preamble. Roosevelt insisted on payroll contributions against every economist who called them deflationary, and explained why with perfect candour: “with those taxes in there, no damn politician can ever scrap my social security program” — the benefits were to be protected by the fiction, carefully cultivated, that each worker had bought his own. The exclusions tell an equally deliberate story: agricultural and domestic workers — which meant, in 1935, roughly two-thirds of Black workers — were cut out in the congressional committees, where southern chairmen priced their votes; the historians still argue whether administration or racism wrote the clause, and the answer is that in that Congress they could not be told apart. What remained was nonetheless a revolution of a distinctively American kind: universal in aspiration, contributory in form, decentralised where localism demanded, and silent about health insurance, which Perkins judged would sink the whole bill. Europe’s welfare states preached solidarity; America’s spoke the language of the insurance policy. It was the New Deal in miniature — transformative, compromised, and built to last precisely because of what it conceded.',
        footnotes: [
          'The exclusions were progressively removed from the 1950s; health insurance waited until 1965.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Depression’s destruction of savings and old-age security, the second New Deal of 1935, pressure from the Townsend and Long movements, Perkins’s Committee on Economic Security drafting the Act, its signature in August 1935)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details represented in and/or surrounding the source', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. an official record publicising the signing as a historic achievement — the President and the bill’s sponsors arranged for the cameras)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. “Account for” requires candidates to state the reasons for — here, the possible reasons the source was created. Generic purposes (“to inform”) are not enough for full marks: the purpose must be specific to this source. Context: 1935 — the Depression having exposed the absence of any national provision for old age or unemployment, the popular pressure of Townsend clubs and Long’s Share Our Wealth, and the administration’s answer drafted under Perkins and signed at the second New Deal’s height. Specific details from the photograph — the assembled legislators, Perkins’s singular presence — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the Social Security Act. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities: both sources present the Act as a turning point deliberately built in the American idiom — the “legal right” earned by contribution (Perkins) and the insurance-policy language against European solidarity (the historian); both acknowledge incompleteness (Perkins’s “it leaves out many”; the historian’s exclusions). The differences: Source 2 is advocacy at the moment of victory — the exclusions a growth problem, the contributory form a moral achievement; Source 3 reads the same design coldly — contributions as political armour in Roosevelt’s own words, the exclusions as the price southern committee chairmen exacted, with their racial arithmetic stated. Candidates may note that Perkins’s “it must grow, and it will” proved accurate — a rare case of the advocate’s promise confirmed by the historian’s footnote. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the New Deal’s impact on American capitalism. In your answer, refer to all three sources and your own knowledge.',
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
              { descriptor: 'Assesses clearly the extent to which the sources represent that impact, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents the New Deal adding a floor beneath capitalism — security as the market’s new precondition (Source 2) and the compromises that carried it through the existing order (Source 3). Strong responses situate the Act in the second New Deal with own knowledge: the Wagner Act the same summer, the WPA, the Long and Townsend pressures from the left, the Liberty League and the 1936 landslide referendum, the Supreme Court’s 1937 validation — and the Act’s long architecture (the trust fund, the 1939 family amendments, the eventual inclusion of the excluded). The evaluative core: whether security transformed capitalism or saved it — the sources supply both readings. Omissions tied to evaluation: the excluded workers themselves — the Black farmhand and domestic servant — have no voice in the set, and business opposition appears nowhere. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // CAP SET 25 — The valley  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'cap-ss-tva',
    title: 'The valley: the TVA and planned abundance',
    themeKey: 'cap-tva',
    themeSentence:
      'The Tennessee Valley Authority set the federal government to remake a whole region — dams, power, soil and lives — and became the New Deal’s boldest experiment and its most contested precedent.',
    tags: ['cap-p4'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph by Lewis Hine of a TVA power shovel at work on the roadway to the Norris Dam site, Tennessee, 1933.',
        image: {
          src: 'sources/tva-norris-dam-1933.jpg',
          alt: 'A crawler power shovel marked U.S. T.V.A. digs the riverside roadway to the Norris Dam site on the Clinch River, 1933',
          credit: 'Lewis W. Hine, 1933. US National Archives, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows a crawler-mounted power shovel, its cab freshly lettered “U.S. T.V.A.”, cutting the construction roadway along the wooded bank of the Clinch River — the first machinery at work on the site of Norris Dam, the Authority’s first great project. Across the still water, cleared hillsides mark where the works and the town for the builders will rise.',
        note: 'Note: the TVA was created in May 1933 to build dams, generate and sell electricity, manufacture fertiliser, control floods and “advance the economic and social well-being” of a seven-state river valley — among the poorest regions of the country, where only three farms in a hundred had electricity.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the recollections of a Tennessee farm woman on the coming of TVA electricity, recorded in the 1970s.',
        body: 'People ask what the lights changed and I say: everything, and start with Monday. Wash day before the current meant hauling and heating forty gallons on a wood stove and rubbing till your knuckles bled; the iron you heated on the same stove in August. The pump changed the water; the wringer changed Monday; the icebox — Lord, the icebox — changed what we ate and when we ate it and whether the milk soured before the children got it. My husband said the barn lights added an hour to the day at each end, and the radio — we heard the President himself, in our own front room, the night he spoke about the banks. I know there was families put off their land for the lake, and bitter about it yet, and I don’t say they’re wrong to be. But when they switched us on in ’38 the neighbours come from three farms to watch the bulb burn in our kitchen, and my mother, who was sixty-eight, stood under it and cried. You’d have thought we won something. Well — we had.',
        footnotes: [
          'TVA’s reservoirs required the removal of some 15,000 families; electric co-operatives carried the current to farms the private utilities had never wired.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the TVA written by a historian and published in 2015.',
        body: 'The TVA was the New Deal’s answer to a question capitalism had failed even to ask: what should be done for a region the market had written off? Its method was heresy compounded — public power competing with private utilities, a federal corporation planning land use across state lines, government as developer of last resort — and the utilities fought it to the Supreme Court and through Wendell Willkie to the 1940 presidential campaign. Its achievements were unanswerable at the level of the kilowatt and the river: the floods controlled, malaria beaten back, power costs halved as the “yardstick” exposed utility pricing, farms electrified a decade before the market would have bothered. Its costs fell where planning’s costs usually fall — on those in the way: fifteen thousand families flooded out for the reservoirs, compensated at the market price for land whose whole world the lake took anyway. And its legacy divided with its meaning: to admirers, the proof that democratic planning could out-build private enterprise; to critics, creeping socialism licensed by emergency. Both sides expected more TVAs. There were none — which may be the deepest verdict of all: the American system could absorb one experiment in planned abundance, provided it stayed in the valley.',
        footnotes: [
          'Willkie, president of a utility holding company fighting TVA, became the Republican nominee in 1940.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the TVA created in the Hundred Days of 1933, the Tennessee Valley’s deep poverty and lack of electrification, Norris Dam as the first project, the New Deal’s public works and regional planning ambitions)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the Hundred Days’ boldest creation beginning work — the federal authority’s first machines cutting into a valley the market had left dark and flood-scoured, with Norris Dam (named for the senator who had fought a decade for public power at Muscle Shoals) as the demonstration piece. Specific details from the photograph — the fresh federal lettering, the raw roadway, the still-rural riverbank — should be connected to those circumstances; Hine’s employment as TVA’s photographer may be noted. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the impact of the TVA on the Tennessee Valley.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. first-hand testimony of electrification’s domestic transformation, vivid and balanced by its own admission of the displaced, but recollected decades later and one household’s experience)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly assessment weighing achievement, cost and legacy, but interpretive in its verdicts)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 carries oral history’s strengths — the texture of wash day, the icebox, the neighbours at the bulb — and unusual internal balance (the displaced families acknowledged unprompted); its limits are forty years’ distance, nostalgia’s selection, and a beneficiary’s vantage. Source 3 commands the programme’s whole record — kilowatts, court fights, the fifteen thousand displaced, the absence of successors — and its “yardstick” and “creeping socialism” framings reproduce the contemporary argument fairly; its closing verdict is interpretation. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the effectiveness of the New Deal’s response to the Great Depression. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the New Deal’s effectiveness in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the New Deal’s effectiveness, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the New Deal at its most ambitious — the state remaking a region (Source 1), the transformation as lived (Source 2), and the historian’s double ledger of achievement, displacement and a precedent never repeated (Source 3). Strong responses set TVA in the wider effectiveness debate with own knowledge: the REA generalising rural electrification, the utilities’ war and Willkie, the yardstick argument, the displaced families beside the AAA’s displaced tenants as planning’s recurring cost — and the macro question the valley cannot answer (regional transformation amid national unemployment unsolved until war). Omissions tied to evaluation: the displaced speak only through the beneficiary’s sympathy, and Black valley residents — largely excluded from TVA’s model towns and skilled jobs — appear nowhere in the set. A source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
