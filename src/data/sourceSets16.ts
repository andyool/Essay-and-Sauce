import type { SourceSet } from './types';

// Source sets 61–64: resistance and opposition II; the churches and the T4 murders.

export const SOURCE_SETS_16: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 61 — The Red Orchestra  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-red-orchestra',
    title: 'The Red Orchestra: resistance in wartime Berlin',
    themeKey: 'red-orchestra',
    themeSentence:
      'The Berlin network the Gestapo named the “Red Orchestra” wove friendship circles of officers, artists and workers into leaflets, rescue and espionage — and was destroyed in 1942, then slandered for decades as mere treason.',
    tags: ['p5'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A private photograph of Harro Schulze-Boysen, a lieutenant in the air ministry, and his wife Libertas, taken in a Berlin garden in 1935. Both were central figures of the Berlin resistance network later called the “Red Orchestra”; both were executed in December 1942.',
        image: {
          src: 'sources/schulze-boysen.jpg',
          alt: 'A private garden snapshot of Harro and Libertas Schulze-Boysen in 1935, his arm around her shoulder, both smiling',
          credit: 'Private photograph, 1935. Public domain, via Wikimedia Commons',
        },
        body: 'The snapshot shows a young couple in a suburban garden before birch trees and a fir: he in a suit and striped tie, his arm around her shoulders; she in a knitted waistcoat, smiling broadly at the camera. A villa roof shows through the trees behind.',
        footnotes: [
          '“Red Orchestra” (Rote Kapelle) — the Gestapo’s file name for the network; an “orchestra” was radio slang for a spy ring.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from Harro Schulze-Boysen’s last letter to his parents, written in Plötzensee prison, Berlin, 22 December 1942, the day of his execution. The letter was preserved by his family.',
        body: 'Dear parents, So the time has now come. In a few hours I shall lay aside this self of mine. I am completely calm, and I ask you to accept it calmly too. Such important things are at stake today all over the world that one extinguished life does not matter very much. Everything that I did, I did according to my head, my heart and my convictions, and in this light you, my parents, must assume the best. And please believe with me: the just time will come, and this death will bear fruit. All over Europe it has been usual for spiritual seeds to be sown with blood. Perhaps we were merely fools, but when the end is so near, one has perhaps the right to a little wholly personal historical illusion. If you should think of me, do not think of me in sorrow, but with pride. Death becomes light to me in the thought that I did not stand apart when the fate of Germany was at stake. I embrace you all. Your Harro.',
        footnotes: [
          'Plötzensee — the Berlin prison where the regime’s political executions were carried out.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the Berlin resistance networks written by an academic historian and published in 2019.',
        body: 'The Gestapo’s name for them was a double slander, and both halves worked. “Red” dissolved a network of remarkable breadth — Luftwaffe officers and civil servants, artists, doctors, workers, more than a third of them women, Christians and conservatives beside communists — into Moscow’s colour; “orchestra” converted resisters into paid instruments playing a foreign score. The reality recovered from the files is less orderly and more honourable: friendship circles around Schulze-Boysen and the economist Arvid Harnack that grew, after 1939, into most of what resistance could still be — leaflets and stickers against the regime’s lies, help for the persecuted, the documentation of crimes in the east, and, yes, the passing of military and economic intelligence to Soviet contacts, undertaken in the conviction that shortening the war was the only rescue left for Germany. The network’s radio links achieved little; its betrayal through a captured codebook in 1942 delivered over a hundred arrests, and some fifty death sentences fulfilled Hitler’s personal demand for extermination. The slander outlived the victims twice over: for the regime they were traitors; for the Cold War Federal Republic they remained Soviet spies, their families denied pensions into the 1990s, while East Germany canonised them as communist heroes and erased their diversity from the other side. Only with the files open has the group become what it was: not an orchestra and not red, but the largest civilian resistance network wartime Berlin produced.',
        footnotes: [
          'Arvid Harnack — executed December 1942; his American wife Mildred was executed in February 1943.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Outline the origin of Source 1 and what it suggests about the source.',
        marks: 3,
        key: [
          {
            rows: [
              { descriptor: 'Outlines the origin of the source (a private snapshot, Berlin, 1935, of the later resisters Harro and Libertas Schulze-Boysen) and what it suggests (e.g. made as a family photograph, not a political document — showing the outwardly ordinary, respectable life from within which the network later grew; its survival through the family after the executions)', marks: '3' },
              { descriptor: 'Outlines the origin with some accurate details and a partial comment on what it suggests', marks: '2' },
              { descriptor: 'Identifies the origin of the source (type, date or subjects) with limited detail', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'Origin refers to provenance: candidates should identify at least two details — a private photograph, 1935, the named couple — and then draw the inference the question invites: this is not a document of resistance but of private life before it, which is precisely its value (resisters photographed as the unremarkable people they outwardly were) and its limit (nothing in the image itself records their politics). Reward candidates who see that the attribution, not the image, carries the historical weight.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the motives of those who joined the Berlin resistance.',
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
          'Usefulness must be judged relative to the stated inquiry — motives. Source 2 is a motive stated at the point of death, with nothing left to gain: conviction (“according to my head, my heart”), national duty (“did not stand apart when the fate of Germany was at stake”), and hope of posthumous meaning; its limits — a last letter consoles its readers and shapes its writer’s memory, speaks for one leader, and cannot describe the network’s range. Source 3 supplies that range — the social breadth, the mixed activities from leaflets to espionage, the stated conviction behind the intelligence-passing — and the history of the group’s defamation, which is itself evidence of how motive was contested; as interpretation, its rehabilitation argument invites weighing (candidates may note that the espionage was real, whatever its motive). Strong answers see the two sources answering the same slander from different directions. Comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the nature of resistance in wartime Germany. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of wartime resistance in all three sources', marks: '3' },
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
          'Theme first: the set represents wartime resistance as ordinary lives (Source 1) driven to extraordinary risk by conviction (Source 2), in networks whose breadth and fate were distorted by every later teller (Source 3). Strong responses test the extent with own knowledge: the conditions of wartime resistance (total surveillance, the death penalty for listening to enemy radio, let alone aiding it), the other networks and forms (Kreisau, the July plotters, the White Rose, rescuers of Jews), the espionage question the set softens — passing intelligence in wartime was treason by any state’s law, and candidates may weigh the historian’s framing against that fact — and the politics of post-war memory in both Germanies. Omissions earn marks only when tied to evaluation: e.g. the set gives the network’s leaders and their historian, but no member of its working-class or female majority speaks. Balance of source evidence and own knowledge is required at the top; a source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 62 — The workers’ underground  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-left-underground',
    title: 'Printed in secret: the workers’ underground',
    themeKey: 'left-resistance',
    themeSentence:
      'The destroyed labour movement fought on in cells of three, smuggled pamphlets and whispered dues — a resistance of tens of thousands that the Gestapo decimated year after year and never quite extinguished.',
    tags: ['p5'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: Two copies of a camouflaged pamphlet (“Tarnschrift”) of the banned German labour movement, mid-1930s. The covers imitate a cheap edition of a nationalist tract, “The Dictate of Versailles”, from the respectable Reclam classics series; the pages inside carried banned anti-Nazi writings.',
        image: {
          src: 'sources/tarnschrift.jpg',
          alt: 'Two camouflage pamphlets of the 1930s disguised as harmless Reclam booklets titled "Das Diktat von Versailles", used to smuggle banned anti-Nazi texts',
          credit: 'Tarnschrift covers, 1930s. CC-BY-SA 4.0, via Wikimedia Commons',
        },
        body: 'The photograph shows the front covers of two small, cheap booklets in the familiar orange livery of “Reclams Universal-Bibliothek”, the classics series found in every German household. The printed covers announce, in Gothic type, a harmless-sounding nationalist title: “Dr. Hermann Gackenholz — Das Diktat von Versailles und seine Auswirkungen. Gemeinverständliche Darstellung” (“The Dictate of Versailles and its effects: a popular account”), series number 7248, with the series’ ornamental borders and medallion complete. One copy bears a previous owner’s signature.',
        note: 'Note: behind such covers, the exiled Social Democratic and Communist organisations printed banned texts — party statements, exposures of conditions in Germany, anti-war appeals — for smuggling across the border and passing from hand to hand. Camouflage titles were chosen to look loyal: nationalist tracts, cookery books, first-aid manuals.',
        footnotes: [
          'Reclam — the famous Leipzig publisher of cheap classic texts.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from instructions for underground work issued by the exiled Communist Party leadership to its remaining groups inside Germany, mid-1930s, as reconstructed from surviving copies and Gestapo case files.',
        body: 'The time of the great organisation is past; whoever mourns it endangers the living. Work is henceforth in groups of three and five. No member is to know more comrades than his work strictly requires; no lists, no minutes, no collection books — dues are remembered, not recorded. Material from outside is passed on the same day it is received, never stored at home; whoever keeps a pamphlet as a souvenir builds the Gestapo’s case against five others. Meetings are walks, allotment visits, sport. In the works, the task is not the heroic gesture but the preservation of the connection: know who can be trusted, help the families of the arrested — the collection for the prisoner’s wife binds men closer than any leaflet — and keep alive, in conversation man to man, the knowledge that the regime lies. Assume in every group the Gestapo has its ear; say nothing in the third man’s presence that would hang the first two. Our task in this period is to endure: to bring the cadre through, so that on the day the regime stumbles — and it will stumble — there are still men in the works whom their workmates know and will follow.',
        footnotes: [
          'Cadre — the trained core of committed members.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of working-class resistance written by an academic historian and published in 2003.',
        body: 'No group resisted earlier, longer or at higher cost than the militants of the destroyed labour movement, and none has been worse served by the word “resistance”, which conjures plots and bombs. The reality was an endurance war. In the first years the underground attempted continuity — printed papers, dues, structures mirroring the banned parties — and the Gestapo, working through informers and tortured confessions, harvested it in waves: the mass trials of 1934–36 filled the penitentiaries with thousands of communists and social democrats at a time, and by 1936 both movements had learned the arithmetic of the cell of three. What survived thereafter is easily belittled and was not small: the camouflage pamphlets passed from coat to coat, the aid networks for prisoners’ families, the maintenance — in works, taverns and allotments — of milieux the regime never penetrated, which explains why the old industrial districts stayed the coldest territory the Party possessed to the end. The cost has no exact ledger: tens of thousands of workers passed through prisons and camps for political offences, and the movement’s activists supplied a grimly disproportionate share of the regime’s early victims and late executions. What it achieved must be stated with equal care: no strike shook the regime, no network survived contact with the war’s police state intact — and yet, when the Reich collapsed, the men who walked out of the camps and cellars to reconstitute unions and works councils within weeks came, overwhelmingly, from exactly the milieux the instructions of the 1930s had told to endure. They had not defeated the dictatorship. They had outlasted it.',
        footnotes: [
          'Milieu — the dense social world of a movement: its districts, clubs, taverns and families.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Identify the origin of Source 1 and explain its purpose.',
        marks: 4,
        key: [
          {
            rows: [
              { descriptor: 'Correctly identifies the origin of Source 1 (camouflaged pamphlets of the banned labour movement, disguised as Reclam booklets, mid-1930s)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains the purpose of the source with detailed reasons specific to it (e.g. to smuggle banned anti-Nazi texts past border controls, house searches and casual observation by disguising them as the most respectable, loyal-looking of cheap publications — a nationalist title in a household classics series), supported by details from the source', marks: '3' },
              { descriptor: 'Explains the purpose with some accurate and relevant support from the source', marks: '2' },
              { descriptor: 'Identifies a purpose in general terms', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'Origin refers to provenance: candidates should identify at least two details of what the source is, when and by whom. For purpose, generic answers (“to spread propaganda”) are insufficient for full marks: the specific mechanism of the camouflage — the trusted series livery, the ostentatiously nationalist title that would pass any search as regime-friendly — is the answer, and should be supported from the covers’ details.',
      },
      {
        letter: 'b',
        text: 'Identify and account for the authors’ perspectives in Sources 2 and 3 towards the underground struggle of the labour movement.',
        marks: 6,
        key: [
          {
            heading: 'Source 2',
            rows: [
              { descriptor: 'Identifies and accounts for the author’s perspective, supported by accurate and relevant evidence related to motives, bias, time, place, and purpose', marks: '3' },
              { descriptor: 'Identifies and outlines the perspective, supported by limited evidence OR provides a general comment supported by some relevant evidence', marks: '2' },
              { descriptor: 'Identifies the perspective, supported by limited evidence', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Source 3',
            rows: [
              { descriptor: 'Identifies and accounts for the author’s perspective, supported by accurate and relevant evidence related to motives, bias, time, place, and purpose', marks: '3' },
              { descriptor: 'Identifies and outlines the perspective, supported by limited evidence OR provides a general comment supported by some relevant evidence', marks: '2' },
              { descriptor: 'Identifies the perspective, supported by limited evidence', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'Each source is handled independently: identify the perspective, then state the possible reasons for it. Source 2: the struggle as disciplined endurance — survival of the cadre over heroic gesture; accounted for by the leadership’s position in exile, the catastrophic losses of the mass trials that taught the cell-of-three arithmetic, and the instruction’s purpose (keeping members alive and organised under total surveillance). Source 3: the struggle as costly, politically ineffective and historically vindicated endurance; accounted for by the historian’s retrospective access to Gestapo files and post-war outcomes, and an explicit purpose of rescuing this resistance from both belittlement and inflation. Candidates may note the striking continuity: the historian’s conclusion (“outlasted it”) adopts the instruction’s own programme (“endure”). Comparison between the sources is not required.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the fate of working-class resistance to the Nazi regime. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of working-class resistance in all three sources', marks: '3' },
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
          'Theme first: the set represents working-class resistance as concealment (Source 1), disciplined survival (Source 2) and costly endurance vindicated only by outliving the regime (Source 3). Strong responses test the extent with own knowledge: the 1933 destruction of parties and unions that set the terms, the mass trials and the camps’ early political prisoners, the KPD–SPD division carried into the underground, wartime groups (Uhrig, Saefkow, the Red Orchestra’s worker members), workplace dissent short of organisation — and the counterweights: the regime’s success in winning over or neutralising much of the working class through employment and KdF, which the set’s resistance-centred lens leaves aside. Omissions earn marks only when tied to evaluation — e.g. no Gestapo voice or workmate-informer appears, though the instructions assume both, so the enemy that shaped every rule of Source 2 is present only by implication. For higher marks: balance of source evidence and own knowledge and an explicit verdict on extent.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 63 — Galen and the T4 protest  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-galen',
    title: 'The Lion of Münster: Galen and the “euthanasia” murders',
    themeKey: 'galen',
    themeSentence:
      'In August 1941 the Bishop of Münster denounced the state’s murder of the “unproductive” from his pulpit — the one public protest that forced the regime into visible retreat, and the measure of what protest might have done.',
    tags: ['p5', 'p6'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of Clemens August Graf von Galen (centre) in procession at his consecration as Bishop of Münster, 28 October 1933.',
        image: {
          src: 'sources/galen-1933.jpg',
          alt: 'Galen walks in procession with clergy in vestments at his 1933 consecration as Bishop of Münster, a plumed ceremonial officer ahead of him',
          credit: 'Bundesarchiv, Bild 183-1986-0407-511 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a churchyard procession: at its head walks a ceremonial officer in a plumed hat and decorated uniform of the old style, cane in hand; behind him come acolytes and clergy in white lace-trimmed vestments, and at the centre three prelates in copes and birettas — the new bishop among them, a tall, heavy-set figure — passing before the cathedral railings.',
        note: 'Note: Galen was consecrated in the first year of Nazi rule, months after the Concordat between the Reich and the Vatican. He held the see of Münster until his death in 1946.',
        footnotes: [
          'Concordat — the July 1933 treaty regulating the Catholic Church’s position in Germany.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extracts from the sermon preached by Bishop Galen in the Lambertikirche, Münster, 3 August 1941, against the killing of institutionalised patients. Copies of the sermon circulated throughout Germany and were dropped by the RAF as leaflets.',
        body: 'For some months we have been hearing reports that inmates of establishments for the care of the mentally ill, who have been ill for a long period and may appear incurable, are being forcibly removed on orders from Berlin. Regularly the relatives are afterwards informed that the patient has died, that the body has been cremated and that the ashes may be claimed. There is a general suspicion, verging on certainty, that these numerous unexpected deaths of the mentally ill do not occur naturally, but are deliberately brought about — on the doctrine that one is entitled to destroy so-called “life unworthy of life”. If it is once accepted that men have the right to kill their “unproductive” fellow men, then woe betide us all when we become old and infirm! Woe to our brave soldiers who return home severely wounded, as cripples, as invalids! Then no man will be safe: some commission or other will put him on the list of the “unproductive”, who in their judgement have become “unworthy of life”. And no police will protect him, and no court will avenge his murder. Who could then still have trust in a doctor? It is impossible to imagine the degradation of morals, the universal mistrust, which would then spread even into families, if this terrible doctrine is tolerated, adopted and practised. Woe to mankind, woe to our German people, if the holy commandment “Thou shalt not kill” is not merely transgressed but if its transgression is tolerated and practised without punishment!',
        footnotes: [
          '“Life unworthy of life” — the phrase used by advocates of killing the incurably ill.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the “euthanasia” programme written by an academic historian and published in 2009.',
        body: 'Galen spoke on 3 August; on 24 August Hitler ordered the gassing phase of the “euthanasia” action halted. The sequence is the most cited three weeks in the history of German protest, and both its power and its limits must be stated exactly. The power was real. The sermon said publicly, from an unassailable pulpit, in words copied by the tens of thousands and read even in the trenches, what thousands of families suspected; it converted private grief into public knowledge and confronted the regime, in wartime, with unrest in the Catholic west it could not afford. The regime blinked: Party radicals demanded the bishop hang, Goebbels judged the cost of martyrdom too high, and the buses of the transport company stopped. The limits were equally real. The killing of the sick did not stop; it decentralised — continuing in the asylums by starvation and overdose to the war’s end, claiming in this “wild” phase tens of thousands more, so that the programme’s full toll far exceeded the 70,000 of the gassing phase Galen interrupted. The machinery and the practised personnel of T4 were transferred east within months, to build and run the first extermination camps. And the protest itself remained singular: neither Galen nor his church raised the same public voice for the Jews, whose deportations from Münster began that same autumn, past the bishop’s cathedral, without a sermon. The three weeks of August 1941 therefore carry a double lesson historians cannot separate: public protest, even under dictatorship, could move the regime — and it was almost never attempted.',
        footnotes: [
          'T4 — the “euthanasia” organisation, named for its Berlin address, Tiergartenstrasse 4.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the first year of Nazi rule; the Concordat of July 1933 and the church’s secured but threatened position; the consecration of a new bishop with traditional ceremony under the new regime)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph in October 1933: the new regime consolidating, the Concordat signed, the church maintaining its public ceremony and traditional forms. Details of the source (the full traditional procession, the old-style ceremonial officer, the public setting) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying opposition to the Nazi “euthanasia” programme.',
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
          'Usefulness must be judged relative to the stated inquiry. Source 2 is the protest itself: direct evidence of what could be said publicly (the careful build from “reports” and “suspicion” to accusation, the argument aimed at every family and every wounded soldier, the legal and religious registers combined) and of the knowledge circulating in the population; its limits — a sermon shows the protest, not its effects, and its rhetorical strategy (universal danger rather than the victims’ intrinsic worth) is itself something historians analyse. Source 3 supplies the effects and their boundaries — the halt order, the “wild” continuation, the machinery’s transfer east, the protest’s singularity — with scholarly precision; its double lesson is an interpretation candidates should engage rather than transcribe. Strong answers note that the sermon’s circulation history (copied, RAF-dropped) is what turned a local pulpit into the national event Source 3 measures. Comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of Galen’s protest, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the protest’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the protest’s significance, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents the protest as the exercise of an institutional standing built long before 1941 (Source 1), a masterpiece of public accusation (Source 2), and a success whose limits define its meaning (Source 3). Strong responses assess significance with own knowledge: the T4 programme’s course (the 1939 authorisation, the six killing centres, the 70,000 of the gassing phase, the decentralised continuation), the regime’s calculation against martyring a bishop in wartime, the sermon’s national circulation, and the two comparative questions the material forces: what the episode suggests other institutions might have achieved, and why the same voice was not raised for the Jews — both of which belong, carefully argued, in a top answer. Omissions earn marks only when tied to evaluation — e.g. no victim or family voice appears; the murdered are present in the set only as the sermon’s examples and the historian’s numbers. Balance of source evidence and own knowledge is required at the top. This is grave material; responses must remain precise and sober.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 64 — The T4 programme  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-t4',
    title: 'The murder of the sick: the T4 programme',
    themeKey: 't4',
    themeSentence:
      'The killing of the institutionalised sick was the regime’s first programme of systematic murder — authorised on a private note, run through front organisations, concealed behind castle walls, and the training ground of the Holocaust.',
    tags: ['p6'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'text',
        attribution:
          'Source 1: The full text of the authorisation for the “euthanasia” killings, written on Adolf Hitler’s private stationery and signed by him. Composed in October 1939, it was backdated to 1 September 1939, the day the war began. It is the only known document in which Hitler personally authorised a programme of killing in writing.',
        body: 'Berlin, 1 September 1939. Reichsleiter Bouhler and Dr. med. Brandt are charged with the responsibility of enlarging the powers of specific physicians, designated by name, so that patients who, on the basis of human judgement, are considered incurable, can be granted mercy death after a discerning diagnosis. — A. Hitler.',
        note: 'Note: the document is a single typed sentence on Hitler’s private letterhead — not a law, decree or published order. It was shown confidentially to officials who raised legal objections, and its existence remained secret until it was found after the war.',
        footnotes: [
          'Bouhler / Brandt — Philipp Bouhler, head of Hitler’s private chancellery, and Dr Karl Brandt, Hitler’s physician.',
          '“Mercy death” (Gnadentod) — the programme’s euphemism for killing.',
        ],
      },
      {
        n: 2,
        kind: 'visual',
        attribution:
          'Source 2: A picture postcard of Schloss Hartheim, near Linz in Austria, printed before the war. From May 1940 the castle, previously a home for disabled children run by nursing sisters, served as one of the six killing centres of the “euthanasia” programme; some 18,000 people were gassed there by 1941, and killings continued to 1944.',
        image: {
          src: 'sources/hartheim-postcard.jpg',
          alt: 'A pre-war picture postcard of Schloss Hartheim, a Renaissance castle with towers and an onion-domed clock tower, a man strolling before it',
          credit: 'Postcard, Schloss Hartheim. Public domain, via Wikimedia Commons',
        },
        body: 'The postcard shows a handsome Renaissance castle: a white four-storey building with round corner towers under conical roofs, a taller clock tower crowned by an onion dome, rows of regular windows, and a picket-fenced garden before it. In the field in the foreground a man in a hat stands with a small dog.',
        note: 'Note: after the killings began, the castle was screened from the road; the crematorium smoke, the shuttled grey buses of the “Charitable Ambulance Transport Company” and the smell were nonetheless matters of local knowledge, and children in the district spoke of the “murder box”.',
        footnotes: [
          'The grey buses — the transport fleet of the T4 front organisation that collected patients from asylums.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the “euthanasia” programme written by an academic historian and published in 2016.',
        body: 'T4 was the regime’s rehearsal, and nearly every later technique of the genocide was first tested on the German sick. Here the regime learned selection by paperwork: registration forms posted to every asylum, assessed by doctors who never saw the patients, a cross in a box deciding death. Here it learned the front organisation and the euphemism — the “Charitable Ambulance Transport Company”, the “mercy death”, the condolence letter with its invented cause of death and discreetly offered urn. Here it learned the gas chamber disguised as a shower room, first used at Brandenburg in January 1940; the crematorium attached; the gold teeth broken out afterwards; and the personnel who could be habituated to all of it — Wirth, Stangl, Franz and some hundred others who, when the gassing phase was halted in August 1941, were transferred with their expertise to build and command Belzec, Sobibor and Treblinka. And here the regime learned the sociology of the secret: that a programme killing tens of thousands inside Germany could not be hidden — the buses were seen, the smoke smelled, the death notices compared — but that visibility was survivable so long as knowledge remained private, deniable and unorganised. Galen’s sermon broke that rule once, and the gassing of the sick was the one Nazi killing programme ever publicly halted. The lesson the perpetrators drew was not mercy but geography: the next gas chambers were built outside the Reich, at the end of railway lines, in occupied Poland — beyond the reach of any bishop’s pulpit and any neighbour’s window.',
        footnotes: [
          'Wirth, Stangl, Franz — T4 men who became commandants and officers of the Operation Reinhard death camps.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the outbreak of war in September 1939 and the cover it provided; the regime’s racial-biological doctrines and the sterilisation programme preceding killing; the secret planning in Hitler’s private chancellery; the backdating to the war’s first day)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the document in autumn 1939: the war begun, the long-prepared killing programme authorised in secret through Hitler’s private chancellery rather than any state organ, and backdated to link the killings to the war. Details of the source (private stationery, the single sentence, the named plenipotentiaries, the euphemism “mercy death”) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying how the T4 killings were organised and concealed.',
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
          'Usefulness must be judged relative to the stated inquiry — organisation and concealment. Source 2 is useful precisely through its innocence: the postcard shows the ordinary, even picturesque public face behind which a killing centre operated — concealment’s method in one image — while its notes carry the countervailing evidence (the screened road, the buses, the local knowledge) that concealment was porous; its limits: the image itself predates the killings and shows nothing of them, which is the point candidates must articulate. Source 3 supplies the machinery — forms, front organisations, euphemisms, the gas chamber’s development, the personnel transfer east — and the analysis of “survivable visibility”; as interpretation, its rehearsal thesis is central to Holocaust scholarship and should be engaged. Strong answers see the pairing: the facade and the anatomy of what it hid. Comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Analyse the significance of the T4 programme to the development of Nazi extermination policy, as represented in the three sources. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the programme’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Analysis',
            rows: [
              { descriptor: 'Analyses clearly the programme’s significance to the development of extermination policy, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
              { descriptor: 'Analyses the significance using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
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
          'Theme first: the set represents T4 as authorised murder (Source 1), concealed institution (Source 2) and rehearsal for genocide (Source 3). Strong responses analyse the significance with own knowledge: the 1933 sterilisation law as the doctrine’s first stage, the killing of disabled children preceding the adult programme, the roughly 70,000 gassed by August 1941 and the decentralised killings after, the personnel and technical continuities to Belzec, Sobibor and Treblinka, and the “survivable visibility” lesson that moved the next stage beyond the Reich’s borders — with Galen’s protest as the hinge between the two. The victims belong in the analysis, not the margins: candidates should name who was killed (institutionalised patients, disabled children, the elderly infirm) and note the syllabus framing — these murders are part of the extermination policies’ stages, not a prelude to them. Omissions earn marks only when tied to evaluation — e.g. no victim, family or perpetrator voice appears; the programme is documented here entirely from above and outside. Balance of source evidence and own knowledge is required at the top. Grave material; precision and sobriety are required.',
      },
    ],
  },
];
