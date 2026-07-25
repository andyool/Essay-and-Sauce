import type { SourceSet } from './types';

// Source sets for Elective 2: Russia and the Soviet Union 1914–45.
// All sources are constructed for skills practice in the style of the period,
// following the Source Analysis Question Construction Manual. Visual sources
// are presented as descriptions; images can be added later as files arrive.

export const RUS_SOURCE_SETS: SourceSet[] = [
  // ------------------------------------------------------------------
  // RUS SET 1 — 1917: from February to October  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-1917',
    title: '1917: from February to October',
    themeKey: 'rus-1917',
    themeSentence:
      'In eight months of 1917 Russia passed from Tsarism through a failing dual power to Bolshevik insurrection, driven by war, hunger and the promises of Lenin.',
    tags: ['rus-p2'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph taken in Petrograd during the February Revolution, 1917.',
        body: 'The photograph shows a wide city street filled with demonstrators moving towards the camera through slush and snow. At their head, women in shawls and factory clothes carry a long banner; soldiers in greatcoats march among the crowd with red ribbons tied to their bayonets. The banner’s painted letters read “Bread” and, beneath, “Down with the autocracy”. On the pavement, onlookers raise their hats; no police are visible anywhere in the frame.',
        note: 'Note: the demonstrations began on International Women’s Day, 23 February 1917 (old style); within a week the Petrograd garrison had mutinied and Tsar Nicholas II had abdicated.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from theses presented by Vladimir Lenin to the Bolshevik party on his return to Petrograd, April 1917.',
        body: 'The present situation in Russia represents a transition from the first stage of the revolution — which placed power in the hands of the bourgeoisie — to its second stage, which must place power in the hands of the proletariat and the poorest peasants. No support for the Provisional Government! It remains a government of capitalists, and its promises, above all its promises concerning the war, must be exposed for the fraud they are. The war remains a predatory, imperialist war, and not one drop of workers’ blood is owed to it. Not a parliamentary republic — that would be a step backwards — but a republic of Soviets of Workers’, Soldiers’ and Peasants’ Deputies from top to bottom. Confiscation of the landlords’ estates; nationalisation of all land; a single national bank under Soviet control. The masses must be made to see that the Soviets are the only possible form of revolutionary government. Peace, land and bread will be won by Soviet power, and by Soviet power alone.',
        footnotes: [
          'Provisional Government — the temporary government formed by Duma politicians after the Tsar’s abdication, pending a Constituent Assembly.',
          'Soviet — an elected council of workers’, soldiers’ or peasants’ deputies.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Russian Revolution written by a British historian and published in 2014.',
        body: 'The Provisional Government did not fall because the Bolsheviks were strong; it fell because it had made itself weak. Every decision that mattered was postponed to a Constituent Assembly that never seemed to come, while every burden that mattered — the war above all — was carried on. The June offensive squandered the army’s last discipline; Kornilov’s attempted coup in August destroyed the government’s credit with the left and armed the Red Guards who would overthrow it; and in the villages the peasants, tired of waiting, were seizing the land by themselves. Lenin’s genius was not to create this collapse but to name it. “Peace, land and bread” promised only what the government could not give, and “All power to the Soviets” offered a legitimacy that already existed in embryo. By October the insurrection, planned by Trotsky and carried out by a few thousand men, pushed on an open door.',
        footnotes: [
          'Kornilov — the army commander-in-chief whose apparent march on Petrograd in August 1917 collapsed without a battle.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the February Revolution of 1917, bread shortages and the strains of the war, the women’s day marches growing into a general strike, the mutiny of the garrison and the abdication of Nicholas II)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: Petrograd in February 1917 — the third winter of a losing war, acute bread shortages, strikes spreading from the Vyborg district, the women’s day demonstrations of 23 February igniting a rising the police could not contain, the garrison’s mutiny, and the abdication that followed within days. Specific details from the photograph — the women at the banner’s head, the soldiers with red ribbons, the absent police, the demands for bread and the end of autocracy — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the reasons for the October Revolution of 1917.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. a first-hand programmatic statement by the revolution’s central actor, but a partisan platform designed to win the party and the masses)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly analysis with hindsight and the archives, but distant and interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is invaluable as evidence of Bolshevik strategy from April 1917 — the refusal of support to the Provisional Government, the slogans that would carry October — precisely because it is Lenin’s own programme; but it is advocacy, its characterisations of opponents are polemical, and it reveals intention rather than explaining outcome. Source 3 has the benefit of hindsight and scholarship and offers a causal argument (the government’s self-destruction) — but that argument is an interpretation which consciously downgrades Bolshevik agency, a point on which historians differ. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the causes of the revolutions of 1917. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the causes of the 1917 revolutions in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the causes of the revolutions, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents 1917 as a revolution driven from below by war and hunger (Source 1), armed with a programme by Lenin (Source 2), and completed against a government that had destroyed itself (Source 3). Strong responses test this with own knowledge: the war’s casualties and the collapse of transport and supply, Nicholas II’s decision to take personal command in 1915 and the discrediting of the court (Rasputin), the dual power of government and Soviet, Order No. 1, the June offensive, the July Days, Kornilov, and the mechanics of October. Omissions should be tied to evaluation — the set contains nothing on the long-term weaknesses of Tsarism before 1914, no defender of the Provisional Government, and no peasant voice, though land seizure was among the revolution’s motors. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 2 — The Civil War and the Red Terror  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-civilwar',
    title: 'The Civil War and the Red Terror',
    themeKey: 'rus-civilwar',
    themeSentence:
      'The Bolsheviks survived the Civil War by ruthless organisation — Trotsky’s Red Army, terror as policy, and the subordination of everything to the front.',
    tags: ['rus-p3'],
    era: 'early',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A Bolshevik propaganda poster produced during the Civil War, 1919.',
        body: 'The poster shows a huge red worker in an apron, hammer in hand, standing astride a map of Russia. Around his boots, three small figures in caricature scramble to attack him: a White general with epaulettes and a whip, a fat banker in a top hat clutching a money-bag, and a foreign soldier whose helmet is labelled with the flags of Britain, France and the USA. Bold red letters across the top read: “The last hour of the exploiters has struck!” Beneath: “Everything for the front! Everything for victory!”',
        note: 'Note: by 1919 the Bolshevik-held core of Russia was fighting White armies under Kolchak, Denikin and Yudenich, with intervention forces from more than a dozen foreign states on Russian soil.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an order issued by Leon Trotsky, People’s Commissar for War, to the Red Army on the eastern front, 1919.',
        body: 'Soldiers of the Red Army! Behind Kolchak march the landlord with his rent-book and the foreign capitalist with his account-book. If the Whites win, the land returns to the masters, the factories to the owners, and the knout to the backs of your children. This the workers’ republic will not permit. I order: every regiment shall know that firmness is rewarded and treachery is punished. Commanders and commissars answer with their heads for the units entrusted to them. Deserters will be treated as traitors. But to the deceived rank-and-file peasant who returns to the ranks, the Soviet power offers pardon; and to the military specialist who serves honestly, it offers honour, whatever his past. The republic is an armed camp. Everything for the front! Victory is measured in bread, in boots, in discipline — and in the will to win, which the revolution possesses and its enemies do not.',
        footnotes: [
          'Military specialist — a former Tsarist officer employed by the Red Army, supervised by political commissars.',
          'Knout — a heavy whip, symbol of serfdom and Tsarist punishment.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the Russian Civil War written by a historian and published in 2009.',
        body: 'The Bolsheviks won the Civil War less because they were loved than because they were organised — and because their enemies were not. They held the centre: Moscow, Petrograd, the railway web, the arms factories and a recruiting pool of sixty million, while the Whites operated from the peripheries, disunited in command and in purpose. Trotsky’s train, the conscription of Tsarist officers under commissar surveillance, and War Communism’s ruthless requisitioning kept the Red Army — five million strong by 1920 — armed and fed after a fashion. Terror was not an excess of the system but part of it: the Cheka’s executions, the hostage-taking, the camps, were matched in kind if not in method by White pogroms and reprisals, and the peasant, hating both, chose in the end the side that had given him the land and might let him keep it. Foreign intervention, half-hearted in fact, was a gift to Bolshevik propaganda: it allowed a socialist insurrection to be defended as national resistance.',
        footnotes: [
          'Cheka — the Bolshevik political police, founded December 1917.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that the united strength of the workers’ state dwarfs its enemies — Whites, capitalists and foreign interventionists — and total mobilisation will finish them)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the colossal red worker astride the map dwarfing his caricatured enemies, the general–banker–interventionist trio linking the Whites to landlords and foreign capital, the slogans announcing the exploiters’ “last hour” and demanding everything for the front)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: candidates should decode the poster’s devices — scale (the giant proletarian versus tiny enemies), caricature (the White general, the banker, the flag-labelled interventionist binding the counter-revolution to foreign capital), colour and slogan — and connect each device to the message of proletarian invincibility and total mobilisation. Full marks require specific reference to elements of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the reasons for the Bolshevik victory in the Civil War. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities: both sources put organisation and discipline at the centre of Red victory — Trotsky demands it, the historian confirms it; both note the use of Tsarist officers under supervision; both connect the Whites to landlords and foreign backers. The central differences are of standpoint and explanation: Source 2 speaks from inside the war, presenting discipline as revolutionary will and coercion as justice, its purpose to motivate; Source 3 explains victory structurally (the central position, numbers, enemy disunity, the peasants’ choice of the lesser evil) and treats terror as systemic on both sides rather than righteous. Candidates may account for the difference through origin (commander’s order in 1919 versus scholarly analysis with hindsight), though accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the nature of the Russian Civil War. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the nature of the Civil War in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent the nature of the Civil War, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents the Civil War as total war — propaganda mobilising every resource (Source 1), coercive discipline as deliberate policy (Source 2), and a struggle decided by organisation, geography and the peasantry (Source 3). Strong responses test the representation with own knowledge: the White armies and their weaknesses, Brest-Litovsk and its consequences, War Communism and grain requisitioning, the Red Terror after the attempt on Lenin (August 1918), the murder of the imperial family, the Polish war, and the famine of 1921–22 with its millions of dead. Omissions should be tied to evaluation — the set offers no White, peasant or Green voice, nothing on the national borderlands, and its scale of suffering (perhaps ten million dead, mostly from disease and hunger) is visible in none of the three sources. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 3 — Retreat to advance: War Communism and the NEP  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-nep',
    title: 'Retreat to advance: War Communism and the NEP',
    themeKey: 'rus-nep',
    themeSentence:
      'By 1921 War Communism had brought mutiny and famine, and Lenin bought the regime’s survival with a partial return to the market — a retreat that saved and unsettled the revolution.',
    tags: ['rus-p5'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph taken at a market in a Soviet provincial town, 1923.',
        body: 'The photograph shows a crowded street market. Peasant traders stand behind trestle tables and carts loaded with sacks of grain, cabbages, butter and geese; a well-dressed man in a fur-collared coat counts banknotes beside a stall hung with bolts of cloth and leather boots. Behind the stalls, a state shop’s window displays a portrait of Lenin above a poster listing fixed prices. Shoppers fill the street between.',
        note: 'Note: under the New Economic Policy, introduced in 1921, peasants paid a tax in kind and sold their surplus on the open market; licensed private traders were nicknamed “NEPmen”.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the demands issued by the sailors and workers of the Kronstadt naval base, March 1921.',
        body: 'Comrades! In carrying out the October Revolution, the working class hoped to achieve its emancipation. The outcome has been an even greater enslavement of the human personality. The power of the police-gendarme monarchy has passed into the hands of the Communist usurpers, who instead of freedom offer the toiler the constant fear of the Cheka’s torture chambers. We demand: immediate new elections to the Soviets by secret ballot, with free canvassing among all workers and peasants; freedom of speech and press for workers, peasants, anarchists and left socialist parties; the liberation of all political prisoners of the socialist parties; the equalisation of rations for all who work; and full freedom of action for the peasants in respect of their land, and the right to keep their own cattle, on condition they use no hired labour. Long live the power of the Soviets — not of parties!',
        footnotes: [
          'Kronstadt — the island naval fortress off Petrograd; its sailors had been among the most loyal supporters of the Bolsheviks in 1917.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from an economic history of the Soviet Union written by a historian and published in 2012.',
        body: 'War Communism had been presented as principle; the NEP was presented as tactics — Lenin called it a retreat, taken “seriously and for a long time”, to preserve the alliance with a peasantry that requisitioning had driven to revolt. As economics, the retreat worked. The tax in kind restored the incentive to sow; by the mid-1920s the harvest, industrial output and real wages had climbed back towards the levels of 1913, and the famine years receded. As politics, it satisfied no one. The countryside prospered ahead of the towns; the NEPman and the kulak became figures of party hatred; and the “scissors” of cheap grain and dear manufactures kept crisis chronic. The party had conceded the market while keeping the “commanding heights” — banks, heavy industry, foreign trade — and, crucially, the monopoly of politics: the same congress that adopted the NEP banned factions within the party. The retreat was economic only. Whether it was a stable destination or a pause before a new offensive was a question Lenin left unanswered — and Stalin answered.',
        footnotes: [
          'Kulak — a “rich” peasant; in party usage, an elastic term of abuse.',
          'Scissors crisis — the widening gap between low agricultural and high industrial prices, at its worst in 1923.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the New Economic Policy from 1921, the tax in kind replacing requisitioning, legal private trade and the NEPmen, recovery from the famine of 1921–22, state control of the commanding heights alongside the market)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the NEP economy of the early 1920s — requisitioning replaced by the tax in kind after the crises of 1921 (peasant risings, Kronstadt, famine), the revival of markets and licensed private trade, the coexistence of private stalls and state shops with fixed prices. Specific details from the photograph — the laden peasant carts, the prosperous NEPman counting notes, the state shop with Lenin’s portrait — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the reasons for the introduction of the New Economic Policy.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. a first-hand statement of grievances from inside the revolution’s own ranks in March 1921, but a manifesto written in revolt)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective economic history with data and hindsight, but distant and interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is direct evidence of the crisis that forced the NEP: the revolt of the revolution’s own praetorians, weeks before the policy’s adoption, voicing peasant and worker grievances (requisitioning, rations, the Cheka) — its value lies in who says it and when; its limits are that it is a rebel manifesto, rhetorically charged (“usurpers”), and represents one garrison’s programme rather than measured analysis. Source 3 offers the economic data and the long view, and can weigh motives (preserving the peasant alliance) against outcomes — but it is interpretation, and its framing of NEP’s ambiguity reflects later debates. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the economic changes in Russia between 1918 and 1928. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the economic changes of 1918–1928 in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the economic changes of the period, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the arc from War Communism’s catastrophe to NEP’s ambiguous recovery — revolt naming the failure (Source 2), the market restored in practice (Source 1), and the historian weighing retreat against monopoly (Source 3). Strong responses test this with own knowledge: grain requisitioning and the collapse of industrial output by 1921 (to roughly a fifth of 1913 levels), the Tambov rising and Kronstadt’s suppression, the famine of 1921–22, the recovery to near-1913 levels by 1926–27, the scissors crisis, and the grain procurement crisis of 1927–28 that gave Stalin his opening. Omissions tied to evaluation might include the absence of War Communism itself from the images, of the famine, and of any voice for the party left who saw NEP as betrayal. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 4 — The Great Turn: collectivisation and the Five-Year Plans  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-greatturn',
    title: 'The Great Turn: collectivisation and the Five-Year Plans',
    themeKey: 'rus-greatturn',
    themeSentence:
      'From 1928 Stalin abandoned the NEP for a second revolution from above — collectivised agriculture and forced-pace industrialisation — at enormous human cost.',
    tags: ['rus-p5'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A Soviet propaganda poster for the First Five-Year Plan, 1931.',
        body: 'The poster shows a young woman worker in a red headscarf and a young man in overalls striding forward together, each carrying a blueprint; behind them rise the blast furnaces of a steel combine, a dam wall, a tractor column crossing a field, and a sky crossed by aircraft. Great numerals “5 в 4” dominate the upper corner. The caption beneath reads: “The Five-Year Plan in four years! There are no fortresses the Bolsheviks cannot storm!”',
        note: 'Note: “5 в 4” — “five in four” — was the slogan for completing the First Five-Year Plan (1928–32) in four years; the steelworks pictured resembles the new city of Magnitogorsk.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a letter smuggled to relatives abroad by a peasant deported from a Ukrainian village as a “kulak”, 1931.',
        body: 'They came in February, the plenipotentiary and the komsomols from the town, with lists. Whoever had two cows was a kulak; whoever spoke against the kolkhoz was a kulak’s helper. They took the horses, the seed grain, the very pots from the stove, and prayed-over icons they threw in the snow. Old Semyon, who argued, they took away in the night, and we have heard nothing. We were put in cattle wagons — three weeks north, the children coughing, the old woman from the next farm dead at the halt and no burial allowed. Now we cut timber, on rations, behind wire, and they call us settlers. Brother, do not believe what the papers say of volunteers and of joy. The village wept as at a funeral, and it was one: they have buried the peasant. Whoever remains has entered the kolkhoz, for there is no other bread.',
        footnotes: [
          'Kolkhoz — a collective farm.',
          'Komsomol — the communist youth league.',
          'Dekulakisation deported perhaps 1.8 million peasants in 1930–31 alone.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of Stalin’s industrial revolution written by a historian and published in 2018.',
        body: 'Judged by its own declared purpose — to make the USSR an industrial and military power able to survive — the Great Turn succeeded; judged by almost any other measure, it was a catastrophe whose bill was paid by the peasantry. The plans built what had not existed: steel at Magnitogorsk and Kuznetsk, tractors at Stalingrad and Kharkov, machine tools, aircraft, an industrial workforce that doubled in a decade as the villages emptied into the cities. Official growth figures were inflated, quality was chronically poor, and the planned economy ran on storming, shortage and the camps as much as on the blueprint. Collectivisation delivered grain to the state and hands to the factories, but it broke peasant agriculture for a generation: livestock halved by 1933, and the procurement famine of 1932–33 killed millions, above all in Ukraine and Kazakhstan, while grain continued to be exported. Without the smokestacks of the 1930s the Soviet Union could hardly have survived 1941; whether they had to be built this way is another question — and the regime ensured, then and after, that it could not be asked aloud.',
        footnotes: [
          'Storming — frantic bursts of work to meet plan deadlines.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that the whole Soviet people, led by the party, is heroically building industrial socialism at unheard-of speed, and nothing can stop it)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the idealised young man and woman as the new Soviet people, the blueprints and the catalogue of achievements — furnaces, dam, tractors, aircraft — the “5 in 4” numerals and the slogan that no fortress can resist the Bolsheviks)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: candidates should decode the poster’s devices — the heroic paired workers (including the woman, signalling mobilised female labour), the icons of the plan’s prestige projects, the arithmetic of acceleration (“five in four”), the military metaphor of storming fortresses — and connect each to the message of unstoppable collective construction. Full marks require specific reference to elements of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the transformation of the Soviet countryside. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities: both sources present collectivisation as coercion, not volunteering — the deportee’s lists, seizures and cattle wagons are confirmed by the historian’s dekulakisation, halved livestock and famine; both note that the village fed the plan (grain to the state, hands to the factories). The differences are of scope and register: Source 2 is one family’s experience, immediate, concrete and grieving, with no view of purpose beyond destruction (“they have buried the peasant”); Source 3 sets the same facts inside a national balance sheet, weighing industrial and military achievement against the peasantry’s catastrophe and explicitly posing the question of necessity. Candidates may account for the difference through origin (victim writing secretly in 1931 versus historian with archives and hindsight), though accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the impact of Stalin’s economic transformation on the Soviet people. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the transformation’s impact on the people in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent the impact on peasants and workers, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents the Great Turn from three angles — the regime’s heroic self-image (Source 1), the peasant’s experience of it as destruction (Source 2), and the historian’s balance sheet (Source 3). Strong responses assess with own knowledge: the grain crisis of 1927–28 and the end of NEP, twenty-five thousanders and dekulakisation, the famine of 1932–33 and its concealment, internal passports, the growth of the urban workforce and of the Gulag, Stakhanovism, rationing and living standards (urban real wages falling through the First Plan), and the education and mobility that the same decade opened to workers. The strongest answers weigh the propaganda image against both testimonies and reach a judgement about accuracy and typicality — noting, as omissions tied to evaluation, that the enthusiast-volunteer of Magnitogorsk and the Stakhanovite beneficiary are absent from Sources 2–3, and the famine dead are absent from Source 1. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 5 — The Great Terror  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-terror',
    title: 'The Great Terror',
    themeKey: 'rus-terror',
    themeSentence:
      'Between 1936 and 1938 the Stalinist regime turned its instruments of control on party, army and people — show trials, quotas of arrest, and the Gulag — until terror itself became a system of rule.',
    tags: ['rus-p7'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph taken inside the October Hall, Moscow, during a public trial of former senior Bolsheviks, 1937.',
        body: 'The photograph shows a courtroom under bright lights. On a raised bench sit three military judges; at a lectern stands the prosecutor in uniform, arm extended towards the dock, where a row of exhausted-looking middle-aged men — several of them once famous party leaders — sit between NKVD guards with fixed bayonets. Rows of selected spectators fill the hall; at the back, foreign correspondents write at a press table beneath a portrait of Stalin.',
        note: 'Note: at the Moscow show trials of 1936–38, almost all defendants confessed to conspiracy, sabotage and treason; most were shot within days of sentence.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the closing speech of State Prosecutor Andrei Vyshinsky at a Moscow trial, 1938, as published by the Soviet press.',
        body: 'Citizens judges! The whole country, from the youngest to the oldest, is waiting for and demanding one thing: the traitors and spies who were selling our motherland to the enemy must be shot like dirty dogs! Here before you sits not a political tendency but a gang of hired assassins and wreckers, the scum of the old exploiting classes in the pay of foreign intelligence services. They killed Kirov; they poisoned workers; they wrecked our mines and derailed our trains; they plotted to dismember the union of Soviet peoples and to restore capitalism. The proofs? Their own confessions, freely given, coincide in every detail. Our country asks only this: that the court crush the accursed reptile. Time will pass, the graves of the traitors will grow over with weeds, while over our happy country our sun will shine as brightly as before.',
        footnotes: [
          'Sergei Kirov — Leningrad party chief murdered in December 1934; his death was used to justify the escalation of repression.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of Stalinist terror written by a historian after the partial opening of Soviet archives, published in 2010.',
        body: 'The archives ended the argument about scale, though not about motive. In 1937–38 alone the NKVD arrested about one and a half million people, of whom nearly 700,000 were shot — an industrial process governed by quotas: Order No. 00447 assigned each region its numbers for execution and for the camps, and zealous officials wrote back asking for their limits to be raised. The show trials were the visible fraction, theatre for home and abroad, their confessions extracted by exhaustion, threat to family and the “conveyor” of continuous interrogation. Beneath them ran mass operations against former kulaks, priests, national minorities and anyone once labelled alien. The terror consumed the party’s old guard, most of the high command of the Red Army, and finally its own executioners — two NKVD chiefs followed their victims. Whether Stalin planned each step or rode a machine that fed on itself, the terror answered to his signature: the lists of thousands marked for death carry it.',
        footnotes: [
          'NKVD — the People’s Commissariat for Internal Affairs, the political police of the 1930s.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Great Terror of 1936–38, the Moscow show trials of old Bolsheviks following Kirov’s murder, staged proceedings with confessions and foreign press in attendance, the NKVD under Yezhov)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the Moscow show trials at the height of the Terror — the staging of justice (bright lights, selected audience, foreign correspondents deliberately admitted), defendants drawn from the party’s founding generation, the use of Kirov’s murder as pretext, and the near-certainty of execution. Specific details from the photograph — the guarded dock, the prosecutor’s accusing gesture, Stalin’s portrait above the press table — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the nature of the Stalinist terror.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. an authentic official voice of the terror as published for effect, but state theatre whose factual claims are fabrications)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. an archive-based scholarly account with verified figures, but retrospective and interpretive on motive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is a special case candidates should relish: as evidence of what it asserts (treason, wrecking, free confessions) it is worthless — the charges were fabricated and the confessions coerced; as evidence of the nature of the terror it is superb — the rhetoric of dehumanisation (“dirty dogs”, “reptile”), the demand for death as the voice of the people, and the publication itself show how the regime performed justice. Source 3 rests on the opened archives (Order 00447, the execution counts, Stalin’s signature on death lists) and is frank about what remains disputed (motive, the machine’s autonomy); its limits are distance and the incompleteness of any archive of secrecy. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the methods used by the Stalinist regime to control Soviet society. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the regime’s methods of control in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the methods of Stalinist control, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents control by terror — justice as theatre (Sources 1 and 2) resting on an industrial machinery of arrest and execution (Source 3). Strong responses widen the frame with own knowledge of the syllabus’s full list of methods: propaganda and the cult of personality, socialist realism and the harnessing of the arts, censorship, the purge of the army (Tukhachevsky, 1937), the Gulag’s economic role, denunciation and fear in daily life, and the earlier stages — Kirov’s murder, the 1936 Zinoviev–Kamenev trial. The strongest answers evaluate accuracy and completeness: the sources show compulsion but not persuasion, and control also worked through belief, careers and the real enthusiasms of the 1930s — an omission worth evaluating. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 6 — The Great Patriotic War  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-gpw',
    title: 'The Great Patriotic War: how the USSR survived and won',
    themeKey: 'rus-gpw',
    themeSentence:
      'Invaded and nearly destroyed in 1941, the Soviet Union survived through evacuated industry, mass sacrifice, harsh discipline and a patriotism the regime learned to summon.',
    tags: ['rus-p8'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A Soviet propaganda poster, 1941.',
        body: 'The poster shows a stern middle-aged woman in a red dress and headscarf against a background of massed bayonets. She raises one hand high, holding the text of the military oath; her other arm sweeps forward, out of the poster, towards the viewer. Her eyes fix the viewer directly. Across the bottom, in huge letters: “The Motherland calls!”',
        note: 'Note: the poster appeared within weeks of the German invasion of 22 June 1941 and became the most reproduced Soviet image of the war.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a radio address by Josef Stalin to the Soviet people, 3 July 1941.',
        body: 'Comrades! Citizens! Brothers and sisters! Fighters of our army and navy! I am speaking to you, my friends! A grave danger hangs over our country. The perfidious attack of Hitlerite Germany continues. The enemy is cruel and implacable. He aims at the seizure of our lands, our grain and our oil; at the restoration of the rule of the landlords; at the destruction of the national culture of the peoples of the Soviet Union and their transformation into the slaves of German princes and barons. The issue is one of life and death for the Soviet state, of life and death for the peoples of the USSR. There must be no room in our ranks for whimperers and cowards, for panic-mongers and deserters. In case of forced retreat, the enemy must not be left a single engine, a single railway truck, a single kilogram of grain. In occupied regions partisan units must be formed to blow up bridges and roads and set fire to forests and stores. This is a national war of all the Soviet people. All our forces — for the support of our heroic Red Army! Everything for the front! Everything for victory!',
        footnotes: [
          'This was Stalin’s first public address after the invasion of 22 June 1941; the fraternal opening — “brothers and sisters” — was without precedent in his speeches.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Soviet war effort written by a historian and published in 2016.',
        body: 'The Soviet victory was built from elements that sat oddly together. The command economy, murderous in peace, proved formidable in total war: 1,500 factories were dragged east beyond the Urals in 1941 and were outproducing Germany in tanks and aircraft by 1943, while the T-34 showed that the 1930s had bought weapons as well as suffering. Allied aid mattered at the margins that count — trucks, food, aviation fuel. Coercion never slackened: Order 227, “Not one step back!”, blocking detachments, penal battalions, the deportation of whole nationalities. Yet coercion cannot explain Leningrad’s nine hundred days or the soldiers who fought at Stalingrad; the regime survived by borrowing older loyalties — Motherland, church bells, Kutuzov and Alexander Nevsky recalled to service — and by the plain fact, learned early from German conduct in the occupied zones, that this was a war of annihilation in which surrender meant death. Perhaps 27 million Soviet citizens died. The regime claimed the victory as socialism’s; the people had reasons of their own.',
        footnotes: [
          'Order 227 — Stalin’s order of July 1942 forbidding unauthorised retreat.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the German invasion of June 1941, catastrophic early defeats and encirclements, mass mobilisation of men and women, the regime’s turn to patriotic — “Motherland” — rather than purely socialist appeals)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the first weeks after Barbarossa — the deepest military crisis of the Soviet state, millions encircled or captured, mass call-up under way, and propaganda pivoting from class to nation (the maternal Motherland figure, the oath, the direct summons to the viewer). Specific details from the poster should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the factors that enabled the USSR to survive the German invasion.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the authentic voice of the wartime leadership at the moment of crisis, but a mobilising speech shaping morale, silent on Soviet failures)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly synthesis weighing many factors with hindsight, but distant and interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is first-hand evidence of the regime’s strategy of survival — scorched earth, partisan war, the framing of the conflict as national and existential, the unprecedented fraternal register — but it is exhortation: it conceals the scale of defeat, the intelligence failures and Stalin’s own responsibility for unpreparedness, and its threats against “panic-mongers” foreshadow coercion it does not name. Source 3 has hindsight, statistics and balance (economy, allies, coercion, patriotism, German conduct), but assigns weights that remain matters of interpretation. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the factors that enabled the USSR to secure victory in the Great Patriotic War. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the factors behind Soviet victory in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the factors behind victory, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents victory as the product of mobilised patriotism (Source 1), leadership and total war measures (Source 2), and a historian’s fuller inventory — evacuated industry, the command economy, Allied aid, coercion, and the enemy’s own barbarity (Source 3). Strong responses test and extend this with own knowledge: the evacuation of industry in 1941, Moscow, Stalingrad and Kursk, the T-34 and mass production, Lend-Lease, Zhukov and the recovery of the officer corps after the purge, Order 227 and the blocking detachments, the siege of Leningrad, partisan war, and the demographic price. Omissions tied to evaluation might include the near-fatal costs of Stalin’s pre-war choices (the purge of the army, the pact, the ignored warnings of 1941) — visible in none of the sources — and the contribution of the other Allied fronts. A source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
