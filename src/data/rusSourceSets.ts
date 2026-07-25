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
          'Source 1: A photograph of a demonstration of workers from the Putilov works district, Petrograd, in the first days of the February Revolution, 1917.',
        image: {
          src: 'sources/putilov-demonstration-1917.jpg',
          alt: 'Demonstrators with banners fill a Petrograd street during the February Revolution of 1917; women in shawls stand beneath a banner demanding rations for soldiers’ families',
          credit: 'Museum of Political History of Russia, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows a city street filled from side to side with demonstrators — women in shawls and headscarves at the centre, soldiers, workmen and children among them. Over their heads hang two hand-painted banners; halted trams and shop signs are visible behind the crowd, and no police are anywhere in the frame.',
        note: 'Note: the banners read “Feed the children of the defenders of the Motherland” and “Increase the ration of the soldiers’ families — the defenders of freedom and of peace for the people”. The demonstrations began on International Women’s Day, 23 February 1917 (old style); within a week the Petrograd garrison had mutinied and Tsar Nicholas II had abdicated.',
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
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: Petrograd in February 1917 — the third winter of a losing war, acute bread shortages, strikes spreading from the great works like the Putilov plant (locked out days before the rising), the women’s day demonstrations of 23 February igniting a movement the police could not contain, the garrison’s mutiny, and the abdication that followed within days. Specific details from the photograph — the women at the centre of the crowd, the soldiers marching with them, the absent police, the banner demands for bread and for soldiers’ families — should be connected to those circumstances. Not all points are required for full marks.',
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
          'Source 1: “Capital” — a Bolshevik propaganda poster by Viktor Deni, produced during the Civil War, 1919.',
        image: {
          src: 'sources/deni-kapital-1919.jpg',
          alt: 'Deni’s 1919 Bolshevik poster “Capital”: a grotesque obese capitalist in top hat grins over a mountain of gold coins beneath a web of steel threads',
          credit: 'Viktor Deni, 1919. Public domain, via Wikimedia Commons',
        },
        body: 'The poster shows a grotesquely fat capitalist in black tailcoat and top hat, a gold watch-chain with a golden heart hanging over his belly, grinning as he gathers in a mountain of gold coins that fills the foreground. Behind him rise factory chimneys; above, a web of steel threads is spun across the whole sky. Beneath the title “CAPITAL” runs a long mock-hymn in verse, in which Capital declares: “I am the embodiment of CAPITAL… my hand writes the laws… let all bend the knee, kissing the dust of my footprints.”',
        note: 'Note: the verses are by the Bolshevik poet Demyan Bedny. By 1919 the Bolshevik-held core of Russia was fighting White armies under Kolchak, Denikin and Yudenich, with intervention forces from more than a dozen foreign states on Russian soil.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that Capital is a monstrous parasite that enslaves the world and worships only gold — and that this is the true master the Whites and interventionists serve)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the grotesque caricature of obesity, top hat and gold heart making greed physical, the mountain of coins and the web of steel spun over the sky as capital ensnaring the world, the factory chimneys as the source of his wealth, the blasphemous mock-hymn demanding worship)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: candidates should decode the poster’s devices — the dehumanising caricature (obesity, gold, the heart literally made of gold), the cosmic imagery of the steel web over the sky, the hoard of coins, and Bedny’s verse parodying scripture so that capitalism becomes a false religion — and connect each device to the message that the Civil War is a holy war against Capital and its servants. Full marks require specific reference to elements of the source.',
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
          'Source 1: A photograph of Red Army infantry advancing across the ice of the Gulf of Finland towards the Kronstadt naval fortress, March 1921.',
        image: {
          src: 'sources/kronstadt-attack-1921.jpg',
          alt: 'Red Army soldiers advance dispersed across the frozen Gulf of Finland towards Kronstadt in March 1921, red banners among them',
          credit: 'Photographer unknown, 1921. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows lines of Red Army soldiers in winter greatcoats running forward, widely spaced, across a vast plain of ice. Red banners are carried among the leading groups; the shell-torn surface of the ice stretches to a bare horizon where the fortress lies.',
        note: 'Note: the naval fortress of Kronstadt commands the sea approach to Petrograd. Its garrison rose against the Bolshevik government at the beginning of March 1921 and was stormed across the ice in mid-March, while the Tenth Party Congress — meeting in Moscow at that very moment — adopted the New Economic Policy.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the crisis of War Communism by 1921 — requisitioning, peasant risings such as Tambov, urban strikes — the Kronstadt garrison’s revolt and its suppression across the ice, and the Tenth Party Congress adopting the NEP at the same moment)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the terminal crisis of War Communism in early 1921 — requisitioning had provoked peasant war (Tambov), the cities were striking and starving, and in March the sailors and workers of Kronstadt, once the revolution’s vanguard, rose against the party. Specific details from the photograph — the infantry dispersed against the fortress guns, the attack delivered across open ice, the red banners — should be connected to those circumstances, including the suppression’s timing alongside the Tenth Party Congress and the adoption of the NEP. Not all points are required for full marks.',
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
          'The theme should lead: the set represents the arc from War Communism’s catastrophe to NEP’s ambiguous recovery — the revolt suppressed by force (Source 1), the rebels naming the failure (Source 2), and the historian weighing retreat against monopoly (Source 3). Strong responses test this with own knowledge: grain requisitioning and the collapse of industrial output by 1921 (to roughly a fifth of 1913 levels), the Tambov rising and Kronstadt’s suppression, the famine of 1921–22, the recovery to near-1913 levels by 1926–27, the scissors crisis, and the grain procurement crisis of 1927–28 that gave Stalin his opening. Omissions tied to evaluation might include the absence of the famine of 1921–22, of the NEP market and the NEPmen themselves in any image, and of any voice for the party left who saw NEP as betrayal. A source-by-source recount caps in the middle bands.',
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
          'Source 1: A Soviet poster by Yakov Guminer for the First Five-Year Plan, 1931.',
        image: {
          src: 'sources/guminer-2plus2-1931.jpg',
          alt: 'Guminer’s 1931 constructivist poster: giant figures 2+2 and a 5 filled with photomontage of construction sites, with a welder and red arrows, reading “plus the enthusiasm of the workers”',
          credit: 'Yakov Guminer, 1931. Public domain, via Wikimedia Commons',
        },
        body: 'The poster is built around a giant sum: black figures “2 + 2”, a red panel reading “plus the enthusiasm of the workers”, and an enormous “5” whose body is filled with photographs of blast furnaces, scaffolding and new construction. At the top left a welder bends over his torch; two red arrows beside him are labelled “1929–1930” and “1931–1932”, and the diagonal caption reads “The arithmetic of the industrial-financial counter-plan”.',
        note: 'Note: the poster’s full slogan reads “The arithmetic of the industrial-financial counter-plan: 2 + 2 plus the enthusiasm of the workers = 5” — the campaign to complete the First Five-Year Plan (1928–32) in four years.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that the will and enthusiasm of the workers can overcome arithmetic itself — the Five-Year Plan can and will be completed in four years)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the absurd sum made true by “the enthusiasm of the workers” — ideology defeating mathematics, the giant 5 filled with photographs of real construction as proof, the welder as the heroic worker, the red arrows compressing 1929–32 into four years)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: candidates should decode the poster’s devices — the deliberately impossible equation redeemed by enthusiasm (voluntarism made visual), the constructivist photomontage filling the numeral 5 with real furnaces and scaffolding as proof of achievement, the heroic welder, and the arrows compressing the plan’s years — and connect each to the message that Bolshevik will overrides material limits. Full marks require specific reference to elements of the source.',
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
          'Source 1: A photograph of Josef Stalin in conversation with Nikolai Yezhov, head of the NKVD, at the celebrations of the twentieth anniversary of the Soviet security police, Moscow, December 1937.',
        image: {
          src: 'sources/stalin-yezhov-1937.jpg',
          alt: 'Stalin leans close in conversation with NKVD chief Nikolai Yezhov, December 1937',
          credit: 'Photographer unknown, December 1937. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows the two men seated side by side, heads almost touching. Stalin, in a plain tunic, leans in confidentially; Yezhov — the small, neat chief of the security police, then at the height of his power — listens with his arm along the back of the seat. Both appear relaxed and amused.',
        note: 'Note: 1937 was the bloodiest year of the Great Terror, carried out under Yezhov’s NKVD. Within two years Yezhov had himself been arrested and shot, and his figure was removed from official photographs.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Great Terror at its height in 1937, the NKVD under Yezhov — the “Yezhovshchina” — mass arrests and executions under quota orders, the Moscow show trials following Kirov’s murder, the celebration of the security police as an arm of the state)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: December 1937, the height of the Great Terror — the NKVD’s anniversary celebrated as a state occasion while its mass operations (Order 00447, the national operations) ran at full pace under Yezhov, with the show trials of the old Bolsheviks in train and the purge reaching the army and the party’s own apparatus. Specific details from the photograph — the intimacy of leader and police chief, the occasion itself honouring the security organs — should be connected to those circumstances; the note’s detail that Yezhov was soon shot and erased from photographs may be used to characterise the system the image records. Not all points are required for full marks.',
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
          'The theme should lead: the set represents control by terror — the intimacy of leader and secret police (Source 1), justice as theatre (Source 2), and an industrial machinery of arrest and execution beneath both (Source 3). Strong responses widen the frame with own knowledge of the syllabus’s full list of methods: propaganda and the cult of personality, socialist realism and the harnessing of the arts, censorship, the purge of the army (Tukhachevsky, 1937), the Gulag’s economic role, denunciation and fear in daily life, and the earlier stages — Kirov’s murder, the 1936 Zinoviev–Kamenev trial. The strongest answers evaluate accuracy and completeness: the sources show compulsion but not persuasion, and control also worked through belief, careers and the real enthusiasms of the 1930s — an omission worth evaluating. A source-by-source recount caps in the middle bands.',
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
          'Source 1: A press photograph of new recruits leaving a Moscow recruiting station during mobilisation, 23 June 1941 — the day after the German invasion.',
        image: {
          src: 'sources/mobilization-moscow-1941.jpg',
          alt: 'Columns of new recruits in civilian clothes march away from a Moscow recruiting station on 23 June 1941, others waiting at the entrance',
          credit: 'Anatoly Garanin / RIA Novosti archive, image #662757 / CC BY-SA 3.0, via Wikimedia Commons',
        },
        body: 'The photograph shows a long column of young men in caps, jackets and open shirts — still in their civilian clothes, some with bundles over their shoulders — marching away down a sunlit street from a recruiting station, where more men queue at the doorway beneath freshly pasted notices. A uniformed officer watches the column pass.',
        note: 'Note: the photograph was taken for the Soviet press by Anatoly Garanin. Some five million reservists were called up in the first week of the war.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the German invasion of 22 June 1941, catastrophic early defeats and encirclements, the mass mobilisation of reservists — some five million in the first week — and the press photograph’s role in projecting orderly, willing response)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the first days after Barbarossa — the deepest military crisis of the Soviet state, the front collapsing westward, mass call-up under way within twenty-four hours of the invasion, and the press already framing the war as a national cause. Specific details from the photograph — the recruits still in civilian clothes, the queue at the station door, the fresh notices, the watching officer — should be connected to those circumstances. Not all points are required for full marks.',
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
