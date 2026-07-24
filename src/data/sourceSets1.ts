import type { SourceSet } from './types';

// Source sets 1–4. All sources are constructed for skills practice in the style
// of the period, following the Source Analysis Question Construction Manual.

export const SOURCE_SETS_1: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 1 — The crisis year: hyperinflation, 1923  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-hyperinflation',
    title: 'The crisis year: hyperinflation, 1923',
    themeKey: 'weimar-crises',
    themeSentence:
      'The economic catastrophe of 1923 tested the Weimar Republic to the edge of collapse and destroyed middle-class confidence in the new democracy.',
    tags: ['p2'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph taken in Berlin during the hyperinflation crisis, 1923.',
        image: {
          src: 'sources/hyperinflation-1923.jpg',
          alt: 'A man pastes banknotes onto a wall as wallpaper, Germany 1923',
          credit: 'Bundesarchiv, Bild 102-00104 / Georg Pahl / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a young man in a suit and bow tie pasting banknotes directly onto the wall of his room, using a pot of paste on a stool beside him. Dozens of one-mark notes are already smoothed onto the wall in neat overlapping rows, with 1,000-mark notes pasted above them.',
        note: 'Note: the larger notes at the top of the wall are 1,000-mark notes; the smaller notes are one-mark notes.',
        footnotes: [
          'Denomination — the face value printed on a banknote.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an editorial in a Berlin daily newspaper associated with the liberal middle class, 15 November 1923 — the week in which the new Rentenmark currency was introduced and days after the failed Nazi putsch in Munich.',
        body: 'What has become of the thrifty family of this city? The clerk who saved for thirty years so that his old age would burden no one now finds his savings book worth less than the paper it is printed on. Wages agreed on Monday cannot buy a tram ticket by Friday. We do not need to be told that the French occupation of the Ruhr and the burden of reparations lie at the root of this misery; nor do we excuse a government which met every obligation by setting the printing presses running. In Munich, adventurers have already tried to turn despair into dictatorship. The new currency is the last bridge held out to a drowning people. If it fails, no one should pretend that the Republic will be forgiven a second time.',
        footnotes: [
          'Rentenmark — the emergency currency introduced on 15 November 1923 to replace the worthless mark.',
          'Reparations — payments Germany was required to make to the Allies under the Treaty of Versailles.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the Weimar economy written by a British economic historian and published in 2006.',
        body: 'The hyperinflation of 1923 was not a natural disaster; it was the terminal stage of a fiscal disease contracted during the war, when the Imperial government chose to fund the conflict by borrowing rather than taxation. Nor were its effects evenly spread. Debtors — among them the state itself, great industrialists and mortgaged farmers — saw their obligations melt away, and some enterprises expanded briskly through the chaos. The catastrophe fell hardest on those who had trusted the state: pensioners, bondholders, and the saving middle class. Measured in output, recovery after stabilisation was rapid. Measured in loyalty, the damage was permanent. A class that had lost its wealth while speculators flourished never again extended to the Republic the presumption of good faith, and in the next crisis many of its members would remember 1923 before they remembered anything else.',
        footnotes: [
          'Fiscal — relating to government revenue, spending and debt.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the hyperinflation crisis of 1923, the French and Belgian occupation of the Ruhr, passive resistance funded by printing money, the collapse of the mark to worthlessness, the strain on wage earners and savers)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context refers to the circumstances at the time the source was produced. Candidates should place the photograph in 1923: the hyperinflation at its height (prices in the billions), following the Ruhr occupation and the policy of passive resistance funded by printing money. Specific details from the source (banknotes used as wallpaper, the mix of one-mark and 1,000-mark notes, the staging for the press) should be connected to those circumstances. Not all points are required for full marks; each salient point is rewarded.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the effects of the hyperinflation crisis of 1923.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. as a contemporary editorial voicing middle-class experience, written in the moment but with a persuasive purpose)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. as a retrospective academic study with access to evidence and hindsight, but distant from events)', marks: '1' },
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
          '“Discuss” requires candidates to identify issues and provide points for and/or against. “Reliability” refers to the accuracy of a source and the extent to which it is trustworthy in relation to its topic — reasoning must go beyond “it is biased” to the origin factors: author, motive, bias, time, place and purpose. Candidates treat the sources in parallel; they do not have to evaluate or compare the sources against each other to achieve full marks. Strengths of Source 2 might include its immediacy and its value as evidence of contemporary middle-class attitudes; limitations include its emotive, persuasive purpose and its selective blame. Source 3 offers scholarly distance, a wider evidence base and attention to uneven effects, though it is removed from events and makes interpretive claims. Not all points are required for full marks; candidates who advance a legitimate reading not listed here are rewarded on the quality of their response.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the challenges facing the Weimar Republic between 1919 and 1923. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the challenges facing the Republic in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the challenges of 1919–1923, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The response should be organised around the theme, not around the sources: identify the challenges the set represents (economic collapse, the reparations burden, the radicalisation of despair, the loss of middle-class faith), lead each paragraph with the thematic point, bring in the relevant source(s) as evidence, and use own knowledge to establish significance. Candidates must address the challenges as represented in the sources, not just the topic generally, and for the higher marks must show a balance of source evidence and own knowledge of the whole 1919–1923 period. The set is weighted towards the 1923 economic crisis: candidates may note that it omits or underplays the political challenges — the Treaty of Versailles and the “stab-in-the-back” myth, the Kapp Putsch, the Spartacist rising, political assassinations such as Erzberger and Rathenau — but omissions earn marks only when tied to an evaluation of what IS represented (e.g. the set understates the violence of the Republic’s enemies, making the crisis appear purely economic). A list of omissions will not suffice. A source-by-source walkthrough caps in the middle bands. Not all points are required; reward each salient point and any legitimate reading supported by evidence.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 2 — The Treaty of Versailles  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-versailles',
    title: 'The Treaty of Versailles and the Republic',
    themeKey: 'versailles',
    themeSentence:
      'The Treaty of Versailles was experienced and remembered in Germany as a national humiliation whose burden — real and mythologised — undermined the Weimar Republic from its birth.',
    tags: ['p1', 'p2'],
    era: 'early',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A German poster by the graphic artist Louis Oppenheim, published in 1919 during the national campaign against the terms of the peace treaty.',
        image: {
          src: 'sources/versailles-1919.jpg',
          alt: 'German poster of 1919 titled "Was wir verlieren sollen!" listing Germany\'s losses under the Treaty of Versailles',
          credit: 'Louis Oppenheim, 1919. Public domain, via Wikimedia Commons',
        },
        body: 'Beneath the headline “Was wir verlieren sollen!” (“What we are to lose!”), the poster arranges Germany’s losses under the treaty as a series of pictures with labelled placards: a map of lost territory — “20% of our production areas”; a standing man with the top of his body cut away — “10% of the population”; a heap of coal above factories — “one third of our hard-coal output”; a family standing before grain sacks — “one quarter of our total production of bread grain and potatoes”; an ore heap above ironworks — “four fifths of our iron-ore reserves”; and a merchant ship with palm trees, struck through by a black bar — “our entire colonies and our merchant fleet”.',
        note: 'Note: the placard captions translated above appear on the poster in German (e.g. “20% unserer Produktionsgebiete”, “10% der Bevölkerung”, “1/3 der Steinkohlenerzeugung”, “4/5 der Eisenerzschätze”).',
        footnotes: [
          'Merchant fleet — a nation’s commercial trading ships.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a speech by Philipp Scheidemann, Social Democratic head of the German government, to the National Assembly, Berlin, 12 May 1919, during the debate on whether Germany should sign the Treaty. Scheidemann resigned in June 1919 rather than sign.',
        body: 'What is put before us is not a treaty but a sentence, drawn up by our enemies and handed to us for signature as one hands a confession to a condemned man. We are to admit that we alone among the nations willed this war; we are to surrender our people in the east and west to foreign rule; we are to labour for generations under a debt no man can calculate. I ask this Assembly: what hand would not wither that binds itself and us in these fetters? Yet I do not deceive myself. The blockade continues; our children hunger; the enemy stands ready to march. Those who counsel refusal must say what refusal means. Those who counsel signature must never pretend that this peace is just. It is a peace of violence, and Germany will carry the memory of it as a wound.',
        footnotes: [
          'Fetters — chains or shackles.',
          'Blockade — the Allied naval blockade of Germany, maintained until the Treaty was signed.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the Paris peace settlement written by an international historian and published in 2004.',
        body: 'Two generations of Germans — and not a few historians — took it as settled that Versailles was a Carthaginian peace that made the Republic’s failure inevitable. The judgement does not survive the arithmetic. Germany lost territory and colonies, but emerged with her industrial core intact, her great-power rivals in the east collapsed, and her population and productive capacity still the largest in Europe west of Russia. The reparations actually paid were a fraction of the headline figure, and less, proportionally, than France had paid after 1871. What Versailles inflicted was not ruin but humiliation — and humiliation proved the more dangerous export. The treaty’s true damage lay in the legend spun around it: the Diktat, the war-guilt lie, the “November criminals” who signed. Every enemy of the Republic found in Versailles a weapon lying ready, and none used it more skilfully than the National Socialists.',
        footnotes: [
          'Carthaginian peace — a peace so harsh it destroys the defeated power entirely.',
          '“November criminals” — the nationalist term of abuse for the politicians who agreed to the Armistice of November 1918 and later signed the Treaty.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that the treaty will strip Germany of the land, people and resources it needs to live — an intolerable, crippling punishment)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the accusing headline “What we are to lose!”, the man with part of his body cut away representing lost population, the labelled percentages of coal, grain and iron ore, the family before the grain sacks, the struck-through ship and colonies)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim (“The message of Source 1 is that…”). “Explain” requires the why and/or how: candidates should decode the poster’s devices — the headline, the mutilated human figure, the statistical placards that translate the treaty into bread, coal and work, the crossed-out ship and colonies — and connect each device to the message that the treaty means national ruin. Full marks require specific reference to labelled elements.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the Treaty of Versailles. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast: both similarities and differences are expected. A key similarity: both sources treat Versailles as harsh and as a lasting wound to Germany — Scheidemann calls it a “peace of violence”, the historian concedes it inflicted humiliation. The central difference is one of judgement and distance: Source 2, spoken in the moment by the head of the government facing signature, presents the treaty as an intolerable sentence; Source 3, written with eighty-five years of hindsight, argues its material burden was manageable and that the myth of the Diktat, not the treaty itself, did the damage. Candidates may account for the difference through origin (participant under political pressure in 1919 vs academic with access to economic evidence), although accounting is not required by this question. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of the Treaty of Versailles in undermining support for the Weimar Republic, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the Treaty’s effect on the Republic in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the significance of the Treaty in undermining the Republic, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the sources collectively represent Versailles as a burden and, crucially, as a political weapon — the poster voices the national sense of dispossession, Scheidemann shows the Republic’s own leaders branding the treaty unjust at its birth, and the historian argues the legend outgrew the reality. Strong responses assess significance using own knowledge across the period: the “stab-in-the-back” and “November criminals” myths, the Kapp Putsch, reparations crises and the Ruhr occupation, and Nazi exploitation of Versailles in propaganda through to 1933 — while weighing the treaty against other forces that undermined the Republic (economic catastrophe, constitutional weakness, elite hostility). Omissions earn marks only when tied to evaluation (e.g. the set contains no defender of the treaty’s workability besides Source 3, and no evidence from the stable mid-1920s, which may overstate its constant salience). For higher marks candidates must balance source evidence and own knowledge; a source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 3 — The Depression and the Nazi breakthrough  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-depression',
    title: 'The Depression and the Nazi electoral breakthrough',
    themeKey: 'nazi-rise',
    themeSentence:
      'The Great Depression created the despair the Nazi Party harvested, but the harvest itself depended on who was frightened, of what, and on the Party’s machinery for turning fear into votes.',
    tags: ['p2', 'p3'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of a Nazi Party propaganda vehicle in Berlin during a Reichstag election campaign of 1932. The Berlin Cathedral is visible behind.',
        image: {
          src: 'sources/election-posters-1932.jpg',
          alt: 'NSDAP propaganda truck covered in election posters, Berlin 1932, with a uniformed trumpeter holding a swastika flag',
          credit: 'Bundesarchiv, Bild 102-03126 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a Nazi Party campaign truck plastered with election posters, while a uniformed party man sounds a trumpet hung with a swastika banner. The posters read: “Arbeit, Freiheit und Brot! Wählt Nationalsozialisten, Liste 8” (“Work, freedom and bread! Vote National Socialists, List 8”); a poster of a mother, father and infant captioned “Rettet die deutsche Familie” (“Save the German family”); and a photo-montage titled “Das ist Adolf Hitler, der Mensch und… Führer des deutschen Volkes” (“This is Adolf Hitler, the man and… leader of the German people”).',
        note: 'Note: at the July 1932 election the Nazi Party won 37.3 per cent of the vote, its best result in a free election; registered unemployment in Germany at the time exceeded five and a half million.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the private diary of an unemployed shipyard fitter in Hamburg, February 1932. The diary was kept for his family and was not published in his lifetime.',
        body: 'Twenty-six months now without proper work. The dole has been cut again by emergency decree — they tell us the State must economise, while the men who ruined the banks keep their villas. Marta takes in washing. I queue, I dig allotments, I wait. At the labour exchange yesterday a man from the Party pressed a leaflet on me: work and bread, he said, and Germany for the Germans. In the evening our Paul came home from the Red Front meeting saying the future belongs to the workers. My sons will fight each other in the street over which gang of saviours is to rescue us. I did not fight four years in Flanders for this. I do not trust the brown shirts — loud men, and their hatred frightens me — but I confess it: when they say the System has failed, I cannot find the argument against them. Something must change, whoever brings it.',
        footnotes: [
          'Emergency decree — laws issued by President Hindenburg under Article 48 of the constitution, bypassing the Reichstag; Chancellor Brüning used them to cut government spending.',
          'Red Front — the street-fighting organisation of the German Communist Party (KPD).',
          '“The System” — a term of abuse, used especially by the Nazis, for the Weimar Republic and its politics.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of Nazi voters written by an academic historian of modern Germany and published in 1998.',
        body: 'That the slump made Hitler possible is beyond argument; that it made him inevitable is a myth the electoral map refutes. The unemployed themselves voted in their millions, but mostly for the parties of the left — the Communists above all, whose vote climbed with every winter of the crisis. The National Socialist surge came from elsewhere: from the Protestant countryside and the small towns, from shopkeepers, clerks, farmers and pensioners — people who still had something left to lose and were terrified of losing it, whether to the bailiff or to Bolshevism. To them the Party offered not a doctrine but a promise of rescue, delivered with an organisational energy no rival matched: speakers in every village hall, a poster on every wall, an SA kitchen in every district. The Depression set the stage. It took a machine, and an audience primed by older fears, to fill the theatre.',
        footnotes: [
          'Bolshevism — revolutionary communism on the Russian model.',
          'Bailiff — an official who seizes property for unpaid debts.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Explain the message of Source 1. In your answer, refer to specific details from the source.',
        marks: 3,
        key: [
          {
            rows: [
              { descriptor: 'Explains the message of the source (e.g. that the Nazi Party is the answer to the Depression’s miseries — promising work, bread and the rescue of the family, with Hitler as the leader of the whole people) with detailed, accurate and relevant supporting evidence from the source', marks: '3' },
              { descriptor: 'Explains the message of the source with some accurate and relevant evidence', marks: '2' },
              { descriptor: 'Identifies or provides a general comment about the message of the source', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Explain” requires the why and/or how. The message should be stated as a claim (“The message of Source 1 is that…”) and supported from specific details: the slogan promising “work, freedom and bread” aimed directly at the Depression’s victims, the family poster promising rescue of ordinary households, the presentation of Hitler as “leader of the German people” rather than of a party, and the loud public showmanship of the campaign truck itself. Any legitimate reading supported from the source is rewarded.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the reasons for the growth in support for the Nazi Party between 1929 and 1933. Refer to the authors’ perspectives in your response.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Discusses the usefulness of both sources for the stated inquiry, addressing strengths and weaknesses of each, with detailed, accurate and relevant evidence and clear reference to the authors’ perspectives', marks: '7' },
              { descriptor: 'Discusses the usefulness of both sources, addressing strengths and/or weaknesses, with accurate and relevant evidence and general reference to the authors’ perspectives', marks: '6' },
              { descriptor: 'Explains the usefulness of both sources with mostly accurate and relevant evidence and some reference to the authors’ perspectives', marks: '5' },
              { descriptor: 'Explains the usefulness of both sources with some evidence; perspectives identified only', marks: '4' },
              { descriptor: 'Describes the usefulness of at least one source with some evidence', marks: '3' },
              { descriptor: 'Identifies and outlines the usefulness of both sources with limited evidence', marks: '2' },
              { descriptor: 'Identifies and outlines the usefulness of one source with limited or no evidence', marks: '1' },
            ],
            subtotal: 7,
          },
        ],
        notes:
          '“Discuss” requires points for and/or against; usefulness must be judged relative to the stated inquiry, not in the abstract. Source 2 is a private contemporary diary — useful as direct evidence of the despair, distrust of “the System” and ambivalent attraction the Party exploited, and of the pull of both political extremes within one family; its limits are the single, local, unemployed-worker viewpoint (a group Source 3 argues largely did not vote Nazi). Source 3 offers a scholarly overview of who actually voted Nazi and why, grounded in electoral evidence, though it is an interpretation and offers less of the texture of lived experience. The perspectives instruction adds a markable element at identification depth only: candidates state each author’s perspective (a despairing but sceptical worker; a historian arguing the Depression was necessary but not sufficient) and may weave it into the discussion or address it separately — they are not required to account for the perspectives in full. A biased or partial source can be highly useful; candidates should be rewarded for recognising this. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the reasons for the Nazi Party’s rise to power by 1933. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the reasons for the Nazi rise in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the reasons for the rise to power, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents the rise as built on despair and the Party’s promises to its victims (Source 1’s slogans, Source 2’s testimony), on fear of communism and loss (Sources 2 and 3), and on the Party’s propaganda and organisational machine (Sources 1 and 3). Strong responses test this picture against the wider record: the legacy of Versailles and the pre-1929 history of the Party, the ideology and Hitler’s cultivated appeal, election statistics (2.6% in 1928; 37.3% in July 1932; the fall to 33.1% in November 1932), and — decisively — what the sources omit: the backstairs intrigue of Papen, Schleicher and Hindenburg that delivered the Chancellorship in January 1933 when the electoral tide was ebbing. The omission earns marks only when tied to evaluation: the set represents the electoral road well but overstates it, since votes alone never gave Hitler power. For higher marks, balance of source evidence and own knowledge across the period is required; a source-by-source walkthrough caps in the middle bands. Reward any legitimate reading supported by evidence.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 4 — Propaganda and the Führer myth  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-propaganda',
    title: 'Propaganda and the Führer myth',
    themeKey: 'propaganda',
    themeSentence:
      'Nazi propaganda saturated German public life and built the myth of the Führer, but its power rested as much on riding real successes and existing beliefs as on manufacturing new ones.',
    tags: ['p3', 'p4'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph, Berlin, late 1930s, showing the ceremonial distribution of 500 “Volksempfänger” (people’s receiver) radio sets to Berlin citizens. The event was organised by the Reich Ministry of Public Enlightenment and Propaganda.',
        image: {
          src: 'sources/radio-distribution.jpg',
          alt: 'A uniformed Nazi official hands Volksempfänger radio sets across a table to a crowd of civilians, Berlin, late 1930s',
          credit: 'Bundesarchiv, Bild 183-H14243 / Nau / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a Party official in uniform, a swastika armband on his sleeve, handing a boxed Volksempfänger radio across a table to a queue of waiting Berliners — most of them elderly men and women in worn coats and hats. Each holds a paper voucher. The recipients press forward, watched from behind by uniformed SS men; one man clutches his new radio set to his chest.',
        note: 'Note: the Volksempfänger was a cheap, mass-produced radio receiver introduced in 1933 at Goebbels’ initiative. By 1939 over 70 per cent of German households owned a radio — the highest proportion in the world. The sets received German stations clearly; listening to foreign broadcasts became a criminal offence in wartime.',
        footnotes: [
          'Voucher — a paper entitlement exchanged for goods.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an address by Joseph Goebbels, Reich Minister of Public Enlightenment and Propaganda, to directors and staff of German radio, Berlin, March 1933, weeks after the Nazi assumption of power.',
        body: 'I hold radio to be the most modern and the most important instrument for influencing the masses that exists anywhere. With it, a government need no longer speak to the nation through the cold print of a hostile press; it enters every parlour and speaks at the family table. Do not imagine that our task is to bellow slogans until the people repeat them from weariness. Propaganda of that kind is the work of amateurs. The true propagandist is an artist who listens to the soul of the people and plays upon it as a master plays upon a piano. The people must not feel themselves instructed; they must begin to think as we think, to feel as we feel, and to believe that they arrived at it themselves. Within ten years, gentlemen, Germany will be of one mind — and it will not remember having changed it.',
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of public opinion and propaganda in the Third Reich, written by an academic historian and published in 1993.',
        body: 'The image of a population hypnotised by Goebbels’ apparatus flatters the propagandists and insults the evidence. Propaganda triumphed where it marched with experience and existing conviction: the cult of the Führer swelled with every bloodless foreign-policy victory and every fall in the unemployment figures, and it drew on a longing for national unity and strong leadership far older than the Party. Where propaganda collided with what Germans could see, hear and believed, it stalled: the campaign against the churches emptied few pews, and the boycott of Jewish shops in April 1933 was met in many towns with indifference or quiet disapproval. The regime’s own opinion-gatherers understood this perfectly, and trimmed their themes accordingly. Consent in the Third Reich was real, but it was conditional — leased against continued success, never owned outright.',
        footnotes: [
          'Boycott — the organised action of 1 April 1933 in which SA men picketed Jewish-owned businesses.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Identify the origin and explain the message of Source 1.',
        marks: 4,
        key: [
          {
            rows: [
              { descriptor: 'Correctly identifies the origin of Source 1 (a press photograph of a propaganda-ministry radio distribution in Berlin, late 1930s)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains the message of the source (e.g. that the regime is a generous benefactor bringing the modern world into every ordinary German home — while, implicitly, placing its own voice in every parlour) with detailed, accurate and relevant evidence from the source', marks: '3' },
              { descriptor: 'Explains the message with some accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Identifies or provides a general comment about the message of the source', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'Origin refers to provenance: candidates should identify at least two details of who created the source, when and what type it is. The message explanation should decode the staging: the uniformed official as giver and the grateful queue as receivers; the radios handed over like gifts before the camera; the watching SS men; and the propaganda purpose of the gift itself — a cheap receiver that carried the regime’s voice into the home. Full marks require specific reference to details of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the power of propaganda in Nazi Germany. Account for the differences between them.',
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
              { descriptor: 'Accounts for the differences by providing detailed reasons related to the origin of each source, for example author, motive, bias, time, place, and purpose', marks: '3' },
              { descriptor: 'Accounts for the differences by providing some reasons related to origin', marks: '2' },
              { descriptor: 'Provides a simple or general reason for the differences', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Account for” requires candidates to state the reasons for — here, the possible reasons for each author’s perspective, which could include motives, bias, time, place and purpose. A similarity: both sources take propaganda seriously as an instrument of rule, and both reject crude sloganeering as ineffective (Goebbels scorns “amateurs”; the historian shows failed campaigns stalling). The difference: Goebbels claims propaganda can remake the national mind wholesale; the historian argues its power was conditional, succeeding only where it rode experience and existing belief. Accounting should reason from origin: Goebbels is the newly appointed minister addressing his own instrument in 1933, with every motive to magnify his craft; the historian writes in 1993 with access to opinion reports and hindsight, and a scholarly purpose. Both similarities and differences are expected for full comparison marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of propaganda in the Nazi consolidation of power, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            rows: [
              { descriptor: 'Assesses clearly the significance of propaganda in the consolidation of power, organised around the theme, with detailed, accurate and relevant evidence from all three sources and own knowledge across the period, including omissions tied to an evaluation of the set’s insight', marks: '9–10' },
              { descriptor: 'Assesses the significance with accurate and relevant evidence from all three sources and own knowledge', marks: '7–8' },
              { descriptor: 'Explains the significance with reference to at least two sources and some accurate and relevant own knowledge', marks: '5–6' },
              { descriptor: 'Outlines the representation of propaganda with reference to at least one source and some relevant evidence', marks: '3–4' },
              { descriptor: 'Identifies content from one or more sources and/or provides a general comment with limited evidence', marks: '1–2' },
            ],
          },
        ],
        notes:
          'The response should lead with the theme — propaganda as an instrument of consolidation — and use the sources as evidence: the radio distribution as the machinery reaching into the home, Goebbels’ address as the regime’s intent and method, the historian as a measure of its real and limited effects. Own knowledge for higher marks might include the Gleichschaltung of press and radio, the cheap Volksempfänger receiver, the Nuremberg rallies and the 1936 Olympics, Riefenstahl’s films, and the staged plebiscites — weighed against the other instruments of consolidation the set largely omits: terror and the camps, legal emasculation of opposition, economic recovery and rearmament. The omission earns marks only when tied to evaluation (e.g. the set, read alone, overstates persuasion and understates coercion — consent and terror operated together). Candidates must address propaganda as represented in the sources, not just the topic generally, and for the top band must balance source evidence with own knowledge of the whole period. A source-by-source recount cannot reach the top bands. Not all points are required; reward any legitimate, evidenced reading.',
      },
    ],
  },
];
