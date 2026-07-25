import type { SourceSet } from './types';

// Source sets 7–12 for Elective 2: Russia and the Soviet Union 1914–45.
// Text sources are constructed for skills practice in the style of the period;
// images are real and credited.

export const RUS_SOURCE_SETS_2: SourceSet[] = [
  // ------------------------------------------------------------------
  // RUS SET 7 — Two Russias: the empire in 1914  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-1914',
    title: 'Two Russias: the empire on the eve of war',
    themeKey: 'rus-1914',
    themeSentence:
      'In 1914 Russia was two countries at once — a booming industrial power in its cities and a vast, poor, land-hungry peasant world — ruled by an autocracy that trusted neither.',
    tags: ['rus-p1'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A colour photograph by Sergei Prokudin-Gorsky of peasant families at haying time, Russian Empire, c. 1909.',
        image: {
          src: 'sources/prokudin-haying-1909.jpg',
          alt: 'Prokudin-Gorsky colour photograph of peasant men, women and children in bright traditional dress standing among wooden carts and haystacks',
          credit: 'Sergei Prokudin-Gorsky. Library of Congress, public domain, via Wikimedia Commons',
        },
        body: 'The photograph — in true colour, by the pioneering three-plate process — shows peasant men, women and children pausing from haymaking in a broad field. The women and girls wear bright traditional dress and headscarves; the men, belted shirts. Around them stand wooden carts and rakes of a design centuries old; haystacks and the forest close the horizon. No machine appears anywhere in the frame.',
        note: 'Note: Prokudin-Gorsky photographed the empire between 1905 and 1915 with the Tsar’s patronage. Around four in five of the Tsar’s subjects were peasants; Russia was simultaneously the world’s fifth industrial power and its greatest peasant society.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the annual report of a zemstvo doctor in a central Russian province, 1913.',
        body: 'The village lives as its grandfathers lived. The strips are ploughed with wooden sokhas behind one thin horse — where there is a horse; a fifth of households have none. The commune repartitions the strips by mouths, so no man will improve what may not be his in three years, and the three-field system leaves a third of the land idle each season. Harvest in a good year is a third of what the German settlers take from the same soil across the district. Of the children born, one in four does not see a fifth birthday; typhus and diphtheria visit annually; my nearest colleague is forty versts away. The young men go to the factories of Moscow and return — those who return — with wages, consumption, and newspapers. The land captain and the priest tell the village to be patient. In the tavern I hear another word, the old word, the only political idea the village has ever held with perfect unanimity: that the land — all of it, the squire’s and the state’s — is God’s and the peasants’, and one day it must come to them.',
        footnotes: [
          'Zemstvo — the elected local council responsible for schools, roads and medicine.',
          'Sokha — a light wooden plough. Verst — just over a kilometre.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of late imperial Russia written by a historian and published in 2015.',
        body: 'Whether Tsarism was doomed before 1914 is the oldest quarrel in the field, and both sides hold good cards. The optimists point to a decade of extraordinary motion: industrial growth around eight per cent a year, the Duma and legal parties after 1905, Stolypin’s wager on the strong peasant separating from the commune, booming grain exports, a literacy rate that had doubled in a generation. The pessimists answer that the motion was tearing the country apart, not knitting it together: the countryside had been bought off in 1906 but not satisfied, and its silence rested on the redemption of a single idea — the land — that no Tsarist government could concede; the new working class, packed into barracks around Petersburg and Moscow, was the most strike-prone in Europe by the summer of 1914; and the autocracy had learned nothing — a monarch who regarded the Duma as an insult and his ministers as clerks. The war did not create Russia’s crises; it took a state already balanced on two incompatible societies and cut the wire that held them.',
        footnotes: [
          'Stolypin — Prime Minister 1906–11; his land reform allowed peasants to leave the commune and consolidate private farms.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the overwhelmingly peasant character of the empire — some four in five subjects, traditional communal agriculture and its poverty, Prokudin-Gorsky’s imperially sponsored survey of the empire c. 1905–15, the contrast with the industrial boom in the cities)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the last decade of the empire — a peasant society of communal strips, wooden tools and traditional dress, photographed under the Tsar’s patronage as a record of his realm, while Stolypin’s reforms, industrialisation and emigration to the cities were beginning to pull at the village. Specific details from the photograph — the hand tools and carts, the absence of machinery, the traditional dress — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the condition of Russia before the First World War.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. a first-hand professional report from inside the village, rich in specifics, but a reformer’s selection stressing backwardness)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly survey weighing both sides of a long debate, but interpretive and written with 1917 in view)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 comes from the professional class that knew the village best — zemstvo doctors’ reports are a staple of the period’s evidence — and its details (horselessness, repartition, infant mortality) are of the documented kind; its purpose is to move the zemstvo to spend, so it dwells on want, and its closing prophecy shows a political reading the author cannot verify. Source 3 is deliberately balanced between optimists and pessimists and equips candidates with both data sets; but its final image — the war cutting the wire — is an interpretation, and the whole optimist/pessimist frame is itself shaped by knowing what came in 1917. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the economic, political and social conditions of Russia in 1914. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of Russia’s pre-war condition in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the conditions of 1914, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents pre-war Russia as two societies under one crown — the timeless village (Sources 1 and 2) and the historian’s divided balance sheet (Source 3). Strong responses test the representation with own knowledge: the industrial boom and its strike wave (Lena goldfields 1912; the Petersburg general strike of July 1914), the Duma’s emasculation after 1907, Stolypin’s reform and its limits, land hunger and the commune, national minorities (half the empire’s subjects), and the court’s isolation. Omissions tied to evaluation: the set contains no worker, no city and no political voice — the very forces that would make the revolutions — and no defender of the regime’s achievements; the photograph, taken for the Tsar, composes the village at rest, not in famine or revolt. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 8 — The war that broke the state  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-wwi',
    title: 'The war that broke the state: Russia at war 1914–17',
    themeKey: 'rus-wwi',
    themeSentence:
      'The First World War subjected backward Russia to a test its state could not pass — millions of casualties, a supply catastrophe, and a Tsar who took personal command of the disaster.',
    tags: ['rus-p2'],
    era: 'early',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of Russian troops in a trench awaiting a German attack, published in an American magazine in 1917.',
        image: {
          src: 'sources/russian-trench-wwi.jpg',
          alt: 'Russian soldiers packed shoulder to shoulder in a narrow earth trench, rifles ready, awaiting a German attack',
          credit: 'George H. Mewes, National Geographic Magazine vol. 31 (1917). Public domain, via Wikimedia Commons',
        },
        body: 'The photograph, taken from the parapet, shows a narrow earth trench packed shoulder to shoulder with Russian soldiers, their rifles propped against the forward wall. The men — bearded veterans and beardless boys together — crouch in greatcoats and caps; the trench is a plain slot cut in bare earth, without duckboards, revetments or wire.',
        note: 'Note: the magazine’s caption described this as “a typical rear-guard trench, characteristic of the field fortifications of the great retreat” — the collapse of 1915, in which Russia lost Poland and perhaps a million men taken prisoner.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a letter written by a Russian infantry soldier to his village, 1916, as recorded by the military censorship.',
        body: 'Dear brother Ivan Petrovich, I am alive, which is more than I can write of half the company. We attacked the German wire three times before the Feast of the Intercession. Of wire-cutters we had four to the company; the guns behind us were rationed to two shells apiece and fell silent by noon, and the German guns did not fall silent at all. The new men come up without rifles and are told to take them from the dead — there are enough of the dead, that is true. The officers are brave enough, the young ones die faster than we do, but above them, brother, there is nothing — a wall of thieves. The bread is half straw. They say the Empress’s German friends sell our flour to the enemy; I do not know, but a man must explain his hunger somehow. The old soldiers say: hold on. The new ones say another word, which I will not write, for the censor reads this. But tell the elder this much: if they ask in the village where the Tsar’s army is, say it is lying on the German wire, and what is left of it is thinking.',
        footnotes: [
          'Military censors copied extracts of soldiers’ letters into morale reports — the source of many surviving examples.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of Russia in the First World War written by a historian and published in 2016.',
        body: 'Russia’s war effort failed at the junction between front and rear. The army itself fought better than legend allows — it beat Austria repeatedly, and the Brusilov offensive of 1916 was the most successful Allied operation of the year — but it fought inside a state that could not feed, arm or explain the war. The shell famine of 1915 was mastered by 1916, yet the solution — a war industry devouring the railways and the towns’ food supply — created the bread queues that would make the revolution in Petrograd. Casualties passed anything the society had imagined: perhaps 1.8 million dead, five million wounded, two and a half million prisoners. And at the top, the system decapitated itself: Nicholas took supreme command in August 1915, chaining the dynasty to every defeat and leaving the government to the Empress and a procession of ministers appointed and dismissed at Rasputin’s word — “ministerial leapfrog” that convinced even monarchists the regime was diseased. By February 1917 the army had not been destroyed; the state behind it had.',
        footnotes: [
          'Brusilov offensive — Russia’s 1916 attack against Austria-Hungary, initially devastating but ruinously costly.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Russia’s war against Germany and Austria-Hungary from 1914, the great retreat of 1915 with its enormous losses of territory, men and equipment, chronic shortages of rifles and shells, western interest in Russia’s war reflected in the American publication)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details represented in and/or surrounding the source', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. to show an American readership the reality of Russia’s war — reportage on an ally whose endurance the West anxiously watched)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. “Account for” requires candidates to state the reasons for — here, the possible reasons the source was created. Generic purposes (“to inform”) are not enough for full marks: the purpose must be specific to this source. Context: the eastern front in 1915–17 — the retreat from Poland, an army of peasant conscripts holding improvised earthworks, the equipment famine at its worst in 1915, and the western allies’ anxious attention to whether Russia could stay in the war. Specific details from the photograph — the crowded, primitive trench, the mixture of ages, the absence of the elaborate fortification familiar from the western front — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the reasons for the failure of Russia’s war effort. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities: both locate the failure behind the front line rather than in the soldiers — the letter’s shell ration and rifle-less recruits are the historian’s supply catastrophe; both register the collapse of confidence in the government (the soldier’s “wall of thieves” and the Empress rumour; the historian’s ministerial leapfrog and the command decision of 1915); and both note that the army endured astonishing punishment before it broke. The differences: Source 2 is experience — hunger, casualties, rumour standing in for explanation — with no view beyond the company; Source 3 is structure — statistics, the Brusilov exception, the analytical claim that the state, not the army, was destroyed first. Candidates may account for the difference through origin and purpose, though accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the impact of the First World War on Russia to the beginning of 1917. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the war’s impact on Russia in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent the war’s impact, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents the war as the solvent of Tsarism — the peasant army in its slot of earth (Source 1), the soldier’s hunger, casualties and curdling loyalty (Source 2), and the historian’s junction of front and rear (Source 3). Strong responses extend with own knowledge: Tannenberg and the 1915 retreat, Nicholas’s assumption of command and its political price, Rasputin and the Empress, inflation and the bread queues, the strike wave of 1916, and the February days as the war’s direct product. Omissions tied to evaluation: the home front appears only by report — no woman in a bread queue, no worker, no Duma politician — and the set ends before the revolution it explains. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 9 — Rewriting the revolution  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-rewriting',
    title: 'Rewriting the revolution: propaganda and the past',
    themeKey: 'rus-rewriting',
    themeSentence:
      'The Stalinist regime did not merely control the present; it rewrote the past — erasing the fallen from photographs and histories until the revolution itself testified for Stalin.',
    tags: ['rus-p7'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph by Grigory Goldstein of Lenin addressing troops departing for the Polish front, Sverdlov Square, Moscow, 5 May 1920. Leon Trotsky and Lev Kamenev stand on the steps of the tribune at right.',
        image: {
          src: 'sources/lenin-speech-1920.jpg',
          alt: 'Lenin speaks from a wooden tribune to a packed square in May 1920, with Trotsky standing on the steps beside the platform',
          credit: 'Grigory Goldstein, 1920. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows Lenin leaning from a rough wooden tribune, mid-speech, above a square packed with soldiers and civilians. On the steps at the tribune’s side, plainly visible in uniform, stands Trotsky — the war commissar whose Red Army the departing troops were joining — with Kamenev behind him.',
        note: 'Note: in editions published after Trotsky’s fall, this famous photograph was retouched — Trotsky and Kamenev vanished, and plain wooden steps stood where they had been. The doctored version illustrated Soviet histories for half a century.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the official “Short Course” history of the Communist Party, published under Stalin’s supervision, 1938.',
        body: 'In the period of the Civil War, when the young Republic of Soviets stood in a ring of fire, the Party sent its best sons to the front under the direction of Comrade Stalin, who time and again appeared at the decisive sector — at Tsaritsyn, at Perm, at Petrograd — and by his iron firmness turned defeat into victory. At this time the treacherous role of Trotsky and his accomplices was already apparent. Trotsky, that agent of imperialism who had wormed his way into the Party, worked to disorganise the Red Army, protected traitors and military specialists in the pay of the Whites, and issued orders which led to the needless slaughter of Red fighters. Only the vigilance of Comrade Stalin and the Leninist core of the Central Committee frustrated these designs. The Trotskyite–Bukharinite fiends, as the whole world now knows from their own confessions, continued for twenty years the same work of wrecking, espionage and murder, until the Soviet courts, expressing the will of the whole people, crushed the reptiles once and for all.',
        footnotes: [
          '“Short Course” — the History of the CPSU(B): Short Course, compulsory study for every party member; tens of millions of copies were printed.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of Soviet propaganda and censorship written by a historian and published in 2012.',
        body: 'The falsification was not an occasional abuse; it was a system with procedures. Glavlit’s censors worked from cumulative lists of unpersons; libraries received instructions to raze articles and paste over photographs; museum curators repainted canvases as verdicts came down. The photographic archive shows the method at its purest — group portraits of the October leadership thinning year by year, until Stalin stands nearly alone beside Lenin; the 1920 tribune photograph losing Trotsky to a flight of wooden steps. The purpose was not merely to defame the fallen but to reconstruct the revolution’s genealogy: if the Short Course was true, then Stalin’s rule was not a usurpation but an inheritance, and terror against “traitors” was the revolution defending itself. The regime understood something its victims grasped too late — that whoever controls the archive controls the meaning of loyalty. Trotsky, watching from exile as he was painted out of his own war, called the industry by its right name: the Stalin school of falsification.',
        footnotes: [
          'Glavlit — the central censorship office, established 1922.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Soviet–Polish war of 1920 and the mobilisation it demanded, Lenin as the republic’s orator-in-chief, Trotsky as war commissar at the height of his authority, the photograph’s later notoriety through the erasure of Trotsky and Kamenev)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details represented in and/or surrounding the source', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. official photography recording the revolution’s leaders in action — an image the regime would later doctor, which is why it became famous)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. “Account for” requires candidates to state the reasons for — here, the possible reasons the source was created. Generic purposes (“to inform”) are not enough for full marks: the purpose must be specific to this source. Context: May 1920 — the Civil War won in its essentials but the Polish war beginning, mass rallies dispatching troops, Lenin and Trotsky at the height of their partnership; and the image’s second life, in which the retouched version (noted beneath the source) became a textbook case of Stalinist falsification after Trotsky’s fall in the later 1920s. Both layers may earn credit. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the Soviet regime’s treatment of the revolution’s history. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast — and here the comparison is between an artefact of falsification and its anatomy. The similarity worth noticing: both sources treat the past as decisive political ground — the Short Course because it must be rewritten, the historian because he studies the rewriting; both link the rewritten history to the Terror’s justification (the “fiends” whose confessions “the whole world knows” / terror as “the revolution defending itself”). The differences: Source 2 performs the falsification — Stalin the ever-victorious, Trotsky the lifelong agent of imperialism — in the vocabulary of the show trials; Source 3 explains the machinery (Glavlit, the lists, the thinning photographs) and its purpose, the manufactured genealogy of Stalin’s legitimacy. Candidates should use Source 1’s note as the concrete case joining them. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the methods used by the Stalinist regime to control what Soviet citizens knew and believed. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the regime’s control of knowledge and belief in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent the control of knowledge and belief, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents thought control as archive control — the unaltered moment (Source 1 and its note), the rewritten history in its own words (Source 2), and the machinery and purpose of falsification (Source 3). Strong responses widen to the syllabus’s full battery with own knowledge: censorship and Glavlit, socialist realism and the arts harnessed to the cult, the education system and the Short Course’s compulsory study, the cult of personality in painting and film, and the Terror as the enforcement behind belief — with the erased figures (Trotsky, Kamenev, Zinoviev, Yezhov himself) as the join between propaganda and killing. Balance: control also worked through genuine enthusiasm and achievement, which the set omits — as it omits any measure of whether citizens privately believed. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 10 — The war on God  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-church',
    title: 'The war on God: the regime and the Orthodox Church',
    themeKey: 'rus-church',
    themeSentence:
      'The Soviet state set out to destroy the Russian Orthodox Church — confiscating, demolishing and killing — until the war made faith temporarily useful again.',
    tags: ['rus-p6'],
    era: 'whole',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the demolition of the Cathedral of Christ the Saviour, Moscow, 5 December 1931.',
        image: {
          src: 'sources/cathedral-demolition-1931.jpg',
          alt: 'The Cathedral of Christ the Saviour in Moscow mid-explosion, its towers standing amid clouds of dust, December 1931',
          credit: 'Photographer unknown, 1931. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph catches the instant of demolition: the great cathedral’s marble body bursts outward in clouds of dust and smoke while two of its bell-towers still stand above the destruction. In the foreground, workmen’s sheds and hoardings screen the site.',
        note: 'Note: the cathedral — Moscow’s largest, built over four decades to commemorate the victory over Napoleon — was dynamited to clear the site for a planned Palace of Soviets that was never built. The site later became a public swimming pool.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a resolution of a congress of the League of the Militant Godless, 1932.',
        body: 'The congress declares: religion is not dying of itself, and will not die of itself. It is the last legal counter-revolution, the collective farm wrecker in a cassock, the kulak’s agitator in the guise of the priest. The five-year plan of atheism therefore sets the following tasks: to close the remaining strongholds of obscurantism where the toilers themselves demand it — and to teach the toilers to demand it; to drive the priest from the village as the kulak has been driven; to replace the church festival with the day of harvest and of industrialisation; to arm every school, barracks and reading-hut with the weapons of scientific enlightenment; and to ensure that by the end of the second five-year plan the name of God shall not be pronounced in the Soviet land except as men pronounce the names of the dead. Religion is a spade with which the class enemy digs; we shall break the spade.',
        footnotes: [
          'League of the Militant Godless — the mass atheist organisation, claiming over five million members by the early 1930s.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of religion in the Soviet Union written by a historian and published in 2014.',
        body: 'The assault came in waves, each with its pretext. The separation decree of 1918 stripped the Church of property and legal personality; the famine of 1921–22 supplied the occasion for seizing the vessels and shooting or imprisoning hundreds of clergy after show trials; Patriarch Tikhon’s successors were bullied into declarations of loyalty that split the faithful. Collectivisation brought the heaviest blow: the village church closed as the village was collectivised, its bells melted for industry, and “priest” joined “kulak” as a deportation category. By 1939 perhaps two or three hundred churches functioned in all Russia where there had been fifty thousand, and of the bishops of 1930 nearly all were dead or in camps. Yet the census of 1937 — suppressed for this reason — recorded a majority still calling themselves believers. The war rewrote the bargain overnight: needing the parishes’ patriotism and the Allies’ good opinion, Stalin received the surviving metropolitans in 1943, restored the Patriarchate, and reopened churches by the thousand — a concordat of pure expediency, policed by the secret service, which outlasted the war because the Church had proven, in the regime’s only currency, useful.',
        footnotes: [
          'The 1937 census asked a question on religion; its results were suppressed and the census officials arrested.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the anti-religious campaign intensifying with collectivisation and the five-year plans, mass closure and demolition of churches around 1929–32, the planned Palace of Soviets, the League of the Militant Godless and state atheism)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the height of the “godless five-year plan” — the Great Turn extending to religion, church closures and bell-seizures sweeping the country, and in Moscow the deliberate, public destruction of the empire’s greatest cathedral to make way for a monument to socialism. Specific details from the photograph — the explosion staged and photographed, the still-standing towers, the site hoardings — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of Soviet policy towards the Russian Orthodox Church.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. an authentic official voice of the atheist campaign at its height, but a programme of intentions in campaign rhetoric)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly account with figures and the full arc to 1943, but distant and interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is the campaign speaking — its equation of priest and kulak, its plan-language applied to belief, and its confession that religion “will not die of itself” are all evidence of policy and of the campaign’s frustration; as a resolution it records intention, not achievement, and its bravado conceals the persistence of belief the 1937 census would reveal. Source 3 commands the statistics (fifty thousand churches to a few hundred) and the whole arc including the wartime reversal, and its interpretation of the concordat as expediency is well supported; it remains a synthesis, and its numbers for a persecuted institution are necessarily estimates. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the social impact of communist policies on religion in the Soviet Union to 1945. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the regime’s religious policy and its impact in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the policies and their social impact, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the war on religion as deliberate state policy — the cathedral dynamited (Source 1), the campaign’s own programme (Source 2), and the historian’s arc from separation decree to wartime concordat (Source 3). Strong responses test with own knowledge: the 1918 decree and the famine-era trials, Patriarch Tikhon, the Solovki camp’s clergy, the 1929 law on religious associations, the 1937 census, the fate of Islam, Judaism and the sects (the set is Orthodox-centred — an omission worth noting), and the 1943 concordat’s terms and motives. The believer’s own experience — worship continued in secret, icons hidden, the persistence the census recorded — appears in none of the sources and is the set’s largest omission. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 11 — The new woman  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-women',
    title: 'The new woman: emancipation, literacy and the double burden',
    themeKey: 'rus-women',
    themeSentence:
      'The revolution promised women legal equality, literacy and liberation from the household — and delivered a transformation real enough to measure and incomplete enough to argue about ever since.',
    tags: ['rus-p6'],
    era: 'whole',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: “Woman! Learn your letters!” — a literacy campaign poster by Elizaveta Kruglikova, Moscow, 1923.',
        image: {
          src: 'sources/literacy-poster-1923.jpg',
          alt: 'Silhouette poster of 1923: a daughter with a book appeals to her mother at the samovar; the texts read “Woman! Learn your letters!” and “Oh, mummy! If you were literate, you could help me!”',
          credit: 'Elizaveta Kruglikova, 1923. Russian State Library, public domain, via Wikimedia Commons',
        },
        body: 'The poster, in stark black silhouette, shows a peasant kitchen: a mother in headscarf and striped apron stands by the table and samovar, while her daughter, seated with an open exercise book, turns to appeal to her. Above runs the command “WOMAN! LEARN YOUR LETTERS!”; below, the daughter’s words: “Oh, mummy! If you were literate, you could help me!”',
        note: 'Note: at the 1897 census fewer than one in seven women in the empire could read; the likbez (liquidation of illiteracy) campaign from 1919 made women its particular target.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a pamphlet by a Bolshevik organiser of the party’s women’s department (Zhenotdel), 1923.',
        body: 'What has the October Revolution given the working woman? On paper, everything her sisters abroad still beg for: the vote, equal pay by law, marriage and divorce as a civil contract between equals, the right to her own wages, leave before and after childbirth, and the abortion no midwife need now perform in secret and terror. But comrades, a law is a beginning, not a life. So long as the working woman stands at the stove and washtub after her shift while her husband reads the newspaper, she is free on paper and a servant in fact. The household is a form of unpaid drudgery which must be socialised as industry has been: the communal kitchen, the crèche, the laundry — these are not conveniences, they are the material foundation of woman’s freedom. And the beginning of all beginnings is the primer: a woman who cannot read the decree cannot use it; she takes her rights, like her wages, at second hand through a husband. Teach her letters, and she will read the rest for herself.',
        footnotes: [
          'Zhenotdel — the women’s department of the party (1919–1930), led in turn by Inessa Armand and Alexandra Kollontai.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of women in the Soviet Union written by a historian and published in 2017.',
        body: 'Measured against 1914, the transformation was immense; measured against the promise, it fell short in instructive ways. The literacy campaign genuinely closed the gap — by the 1939 census young women read nearly as universally as young men — and the five-year plans pulled ten million women into paid work, into professions (by 1940 most Soviet physicians were women) and onto tractors, a mobilisation the war would multiply. But the emancipation was made to serve the state’s priorities, and when those changed, so did the policy: the Zhenotdel was dissolved in 1930 as “mission accomplished”; the 1936 family law banned abortion, taxed the childless, and re-glorified motherhood with medals, even as the same state demanded the woman’s shift in the factory. What the revolution never socialised was the household. The communal kitchens remained a pamphlet dream; the queue, the stove and the washtub stayed hers. The Soviet woman of 1941 was educated, employed and equal in law — and worked a double day her grandmother would have recognised.',
        footnotes: [
          'The 1936 law reversed the 1920 legalisation of abortion; abortion was legalised again in 1955.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that women must seize literacy — for their own sake and their children’s — because the illiterate mother is left behind by the new world her daughter is entering)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the daughter with the exercise book as the new Soviet generation appealing to the old, the mother fixed among stove and samovar — the domestic world literacy would open, the guilt-edged caption in the child’s voice, the stark silhouette style making the scene universal)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: candidates should decode the poster’s devices — the generational appeal (the daughter, not the state, does the asking), the domestic setting that locates the audience, the direct imperative of the headline, and the silhouette style that makes mother and daughter every mother and daughter — and connect each to the campaign’s message that literacy is the gateway to the new woman’s rights. Full marks require specific reference to elements of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the emancipation of Soviet women. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities — striking across the years: both sources distinguish paper rights from lived freedom, and both identify the unsocialised household as the heart of the problem (the pamphlet demands communal kitchens; the historian records they never came, and names the “double day”). The differences: Source 2 speaks in 1923 with the programme still open — legal equality is the beginning, and the material foundation is coming; Source 3 audits the outcome — real gains in literacy, work and the professions, but emancipation harnessed to state priorities and reversed where it conflicted with them (the 1936 family law, the Zhenotdel dissolved). One is promise, the other verdict — and the verdict partly vindicates, partly convicts the promise. Candidates may account for the difference through origin, though accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the social impact of communist policies on Soviet women to 1945. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the policies’ impact on women in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent the impact on women, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents women’s emancipation as real, incomplete and instrumental — the literacy campaign recruiting through the family (Source 1), the programme in its own confident voice (Source 2), and the audited outcome (Source 3). Strong responses deploy own knowledge across the period: the decrees of 1917–20 (civil marriage, divorce, abortion), the Zhenotdel’s work and dissolution, likbez results, women in the five-year plans (tractor brigades, Pasha Angelina; most physicians women by 1940), the Great Retreat of 1936, and the war’s mobilisation of women into industry and the armed forces (pilots, snipers, medics — near a million in uniform). Omissions tied to evaluation: the peasant woman under collectivisation — for whom the decade meant the kolkhoz and the famine as much as the primer — and Muslim Central Asia’s hujum, are outside the set’s frame. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // RUS SET 12 — Stalingrad  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'rus-ss-stalingrad',
    title: 'Stalingrad: the turning of the war',
    themeKey: 'rus-stalingrad',
    themeSentence:
      'At Stalingrad the Red Army destroyed a German field army in the ruins of a city and turned the whole war — at a cost, and by methods, that defined the Soviet way of victory.',
    tags: ['rus-p8'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph by Georgy Zelma of the centre of Stalingrad after the city’s liberation, early 1943.',
        image: {
          src: 'sources/stalingrad-center-1943.jpg',
          alt: 'Soviet soldiers in white winter capes walk through the snow-covered rubble of central Stalingrad past gutted buildings, early 1943',
          credit: 'Georgy Zelma / RIA Novosti archive, image #602161 / CC BY-SA 3.0, via Wikimedia Commons',
        },
        body: 'The photograph shows a file of Soviet soldiers in white winter camouflage picking their way through snow-covered rubble in the centre of the city. Around them stands what remains of Stalingrad: gutted, roofless shells of buildings, walls holed by shellfire, wreckage half-buried in the snow to the horizon.',
        note: 'Note: the German Sixth Army surrendered at Stalingrad on 2 February 1943 — some 91,000 prisoners from an army of over a quarter of a million. Perhaps a million Soviet soldiers and civilians died in the campaign; the city itself was destroyed almost entirely.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the recollections of a Soviet lieutenant who fought in the city, recorded after the war.',
        body: 'The Volga was behind us; that is the whole geography of Stalingrad and the whole of its meaning. Orders were read to us — comrade Stalin’s order: not one step back — and beyond the orders there was the river, and beyond the river nothing we could reach. So the war became a war for the staircase, for the cellar, for the wall between two rooms. We learned to fight at ten metres, to attack at night with grenades and spades, to hold a house — we held one twenty-two days; the Germans’ maps called it a fortress, and it was three floors of rubble with a dozen men in it. Their aircraft could not bomb us without bombing their own, so we held the enemy by the belt, close, always close. Men came across the river at night, under the shelling; most of the boys of my platoon lie there still. I will say what we said then: we did not feel like heroes. We felt like men with a river at their backs. Heroism was the name given afterwards to there being no way out.',
        footnotes: [
          '“Not one step back” — Order No. 227 of July 1942, which forbade unauthorised retreat and created penal battalions and blocking detachments.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Second World War on the eastern front written by a historian and published in 2015.',
        body: 'Stalingrad’s significance is easiest to see in what changed on either side of it. Before it, the strategic initiative was Germany’s: the question each spring was where the Wehrmacht would attack. After it, the question was where the Red Army would. The material verdict was crushing — an entire German field army erased from the order of battle, the Axis allies’ armies (Romanian, Italian, Hungarian) shattered on the flanks, and the myth of German invincibility, which had survived even Moscow, dead among the ruins. But the deeper meaning was methodological: Stalingrad was the first proof that the Soviet system could out-think as well as out-suffer its enemy. The defence that held the city by fingertips was Chuikov’s improvisation; the counterstroke that decided it — Operation Uranus, aimed not at the city but at the weak flanks a hundred kilometres out — was planning of a coldness and patience the Wehrmacht believed the Red Army incapable of. The cost was oceanic, and the propaganda machine set instantly to converting the victory into the regime’s vindication. Both things are true: the system that had beheaded its own army in 1937 nearly lost the war; the same system, given time bought with lives, learned to win it.',
        footnotes: [
          'Operation Uranus — the Soviet encirclement offensive of November 1942 that trapped the Sixth Army.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the battle of Stalingrad from August 1942 to the German surrender of 2 February 1943, the destruction of the city in months of street fighting, the encirclement of the Sixth Army by Operation Uranus, Soviet war photography recording the victory)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the immediate aftermath of the Soviet victory — the city retaken ruin by ruin, the Sixth Army starved and surrendered in the pocket, and photographers like Zelma documenting the wreckage for a nation and a world that understood the battle’s weight. Specific details from the photograph — the white-caped infantry, the totality of the destruction — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of how the Battle of Stalingrad was fought and won.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. a veteran’s first-hand account rich in the texture of the fighting, but memory recorded later and shaped by hindsight and modesty)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly analysis of the battle’s significance with both sides’ records, but interpretive in its judgements)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 carries the authentic tactical texture of the city fight (hugging the enemy, the house-fortresses, the night crossings) that the records confirm, and its demystification of heroism — “a river at their backs” — is candour of a kind official memory discouraged; but it is recollection, distance unknown, one platoon’s war, and it touches Order 227 without describing its enforcement. Source 3 commands both sides’ archives and situates the battle strategically (initiative, the flanks, Uranus); its argument that the system “learned to win” is a judgement — well-evidenced but contested in its weighting of learning against attrition. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the factors that enabled the USSR to turn the war at Stalingrad. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the factors behind the Stalingrad victory in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the victory’s factors, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the turning of the war as bought by endurance and completed by planning — the annihilated city (Source 1), the defender’s war of staircases under Order 227 (Source 2), and the historian’s twin verdicts on system and method (Source 3). Strong responses widen with own knowledge: the 1942 German drive to the Volga and Caucasus, Chuikov’s 62nd Army and the Volga flotilla, the evacuated war industry now outproducing Germany (the T-34s from the tractor works), Uranus and the Axis allies’ flanks, Manstein’s failed relief, and the sequel — Kursk, the initiative never returning. Omissions tied to evaluation: the coercive machinery (blocking detachments, penal units) is named but not shown; the civilian catastrophe inside the city, and Lend-Lease’s logistical contribution, sit outside the set. A source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
