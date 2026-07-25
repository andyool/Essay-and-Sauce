import type { SourceSet } from './types';

// Source sets for Elective 1: The changing European world since 1945.
// All sources are constructed for skills practice in the style of the period,
// following the Source Analysis Question Construction Manual. Visual sources
// are presented as descriptions; images can be added later as files arrive.

export const EUR_SOURCE_SETS: SourceSet[] = [
  // ------------------------------------------------------------------
  // EUR SET 1 — The iron curtain falls: origins of the Cold War  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-origins',
    title: 'The iron curtain falls: origins of the Cold War',
    themeKey: 'eur-origins',
    themeSentence:
      'Between 1945 and 1949 the wartime alliance broke into two armed camps, each convinced the other had betrayed the peace.',
    tags: ['eur-p1'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: An official photograph of the “Big Three” — Clement Attlee, Harry S. Truman and Josef Stalin — at the Potsdam Conference, August 1945.',
        image: {
          src: 'sources/potsdam-big-three-1945.jpg',
          alt: 'Attlee, Truman and Stalin seated in wicker chairs at the Potsdam Conference, 1945, smiling for the camera',
          credit: 'US government photograph, 1945. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows the three Allied leaders posed for the cameras in wicker armchairs in the garden of the Cecilienhof palace: Attlee, the new British Prime Minister, in a dark suit; Truman at the centre, smiling broadly with a folder of papers on his knee; and Stalin at ease in the cream dress tunic of a Generalissimo. All three smile.',
        note: 'Note: the photograph was taken in the conference’s final days — after Attlee had replaced Churchill mid-conference on losing the British election, and after Truman had received word of the successful test of the atomic bomb. Potsdam was the last meeting of the wartime Big Three.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the address of President Harry S. Truman to a joint session of the United States Congress, 12 March 1947.',
        body: 'At the present moment in world history nearly every nation must choose between alternative ways of life. The choice is too often not a free one. One way of life is based upon the will of the majority, and is distinguished by free institutions, representative government, free elections, guarantees of individual liberty, freedom of speech and religion, and freedom from political oppression. The second way of life is based upon the will of a minority forcibly imposed upon the majority. It relies upon terror and oppression, a controlled press and radio, fixed elections, and the suppression of personal freedoms. I believe that it must be the policy of the United States to support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures. I believe that our help should be primarily through economic and financial aid, which is essential to economic stability and orderly political processes. The free peoples of the world look to us for support in maintaining their freedoms. If we falter in our leadership, we may endanger the peace of the world — and we shall surely endanger the welfare of this nation.',
        footnotes: [
          'The immediate occasion was aid of $400 million for Greece and Turkey; the principle announced became known as the Truman Doctrine.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Cold War written by a historian and published in 2019.',
        body: 'Neither side wanted war in 1945; each wanted security, and their definitions could not coexist. Stalin’s security meant a belt of obedient states over the invasion routes of 1914 and 1941 — an aim the Red Army’s positions already guaranteed, whatever was signed at Yalta. American security meant an open world of trade and self-determination — an aim that Soviet conduct in Poland and Romania affronted from the first months. Each step each side took to make itself safe made the other feel threatened: the Sovietisation of the east produced the Truman Doctrine and the Marshall Plan; the Marshall Plan, which Moscow read as an economic offensive against its new sphere, produced the Cominform, the crushing of Czechoslovakia and the Berlin blockade; the blockade produced the airlift, NATO and a divided Germany. By 1949 the structure of forty years stood complete — built, in large part, out of mutual fear rather than mutual ambition.',
        footnotes: [
          'Cominform — the Communist Information Bureau, founded 1947 to coordinate European communist parties under Moscow’s direction.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Potsdam Conference of July–August 1945 settling occupied Germany, the surface unity of the victorious alliance already strained over Poland and reparations, Attlee’s mid-conference replacement of Churchill, Truman’s news of the atomic test)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: Potsdam, July–August 1945 — Germany defeated and divided into occupation zones, the Red Army in possession of eastern Europe, disputes over Poland’s government and frontiers and over reparations already sharpening beneath the ceremony, Churchill replaced mid-conference by Attlee, and Truman privately informed of the successful atomic test (and mentioning “a new weapon” to Stalin, who already knew). Specific details from the photograph — the smiling pose, the new British premier, Stalin’s marshal’s tunic — should be connected to the last display of an alliance already dissolving. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the reasons for the outbreak of the Cold War.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the authentic founding statement of American policy, first-hand and defining, but a persuasive address framing the conflict in moral binaries)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly analysis weighing both sides with hindsight and archives, but distant and interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is a primary document of the first importance — the public foundation of containment, delivered by the responsible actor at the decisive moment; but it is advocacy: composed to move a sceptical, economy-minded Congress, it paints the world in two “ways of life”, omits American interests (bases, trade, the British withdrawal from Greece) and simplifies the Greek civil war. Source 3 has the archives of both sides and deliberate balance (the security dilemma reading), but it is interpretation — post-revisionist in flavour — and historians still contest the weight it lifts from Stalin’s shoulders. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the origins of the Cold War in Europe to 1949. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the Cold War’s origins in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the origins of the Cold War, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the passage from alliance to division — the last smiling display of wartime unity (Source 1), the American declaration of ideological contest eighteen months later (Source 2), and the historian’s security-dilemma synthesis (Source 3). Strong responses test the representation with own knowledge: Yalta and Potsdam, the fate of Poland, Kennan’s Long Telegram and containment, the Marshall Plan and Moscow’s refusal (including for Czechoslovakia), the Prague coup of February 1948, the Berlin blockade and airlift, the founding of NATO and the two Germanies in 1949. Omissions should be tied to evaluation — the set gives no direct Soviet voice (Stalin’s election speech or Zhdanov’s “two camps” would balance Truman’s binary), and the peoples of eastern Europe, over whom the division was made, appear nowhere in the set. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 2 — 1956: Hungary and the limits of the thaw  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-hungary',
    title: '1956: Hungary and the limits of the thaw',
    themeKey: 'eur-hungary',
    themeSentence:
      'The Hungarian rising of 1956 tested how far Moscow would let its empire reform — and the answer, delivered by tanks while the West watched, defined the Cold War’s rules for a generation.',
    tags: ['eur-p2'],
    era: 'mid',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph taken at the crossing of the Grand Boulevard and Rákóczi Street, Budapest, late October 1956.',
        image: {
          src: 'sources/stalin-head-budapest-1956.jpg',
          alt: 'The severed bronze head of Budapest’s giant Stalin statue lies on the cobbles among tram rails and cables, passers-by walking around it, October 1956',
          credit: 'FORTEPAN / Hofbauer Róbert / CC BY-SA 3.0, via Wikimedia Commons',
        },
        body: 'The photograph shows the severed bronze head of a statue of Stalin — taller than a man — lying on its side on the cobblestones of a city intersection, among tram rails, fallen cables and debris. A metal rod has been driven through the head. Around it, pedestrians in winter coats pass by; a few pause to look.',
        note: 'Note: the eight-metre statue of Stalin was pulled down by demonstrators on 23 October 1956, dragged across the city and broken up where it lay; the crossing became known as “Boots Square”, after all that remained on the plinth.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the final broadcast of a free Hungarian radio station, 4 November 1956, as Soviet forces re-entered Budapest.',
        body: 'This is Hungary calling! This is Hungary calling! The last remaining free station. Early this morning Soviet troops launched a general attack on our capital and on the whole country. They are using tanks, artillery and bombers against the population. Our Prime Minister has told the world that Hungary is fighting for its freedom and neutrality and has appealed to the United Nations. Men and women of Budapest are fighting at this hour with rifles against tanks. We ask the free world: do you hear us? For ten days you have spoken of us in your parliaments and your newspapers; you have praised our courage. We do not ask for praise. We ask for help. Civilised people of the world, in the name of liberty we ask you to act. The light is going out in Hungary. Help Hungary! Help! Help! Help!',
        footnotes: [
          'Imre Nagy, the reform communist Prime Minister, had announced Hungary’s withdrawal from the Warsaw Pact on 1 November; he was later tried in secret and executed in 1958.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Cold War in eastern Europe written by a historian and published in 2013.',
        body: 'The tragedy of 1956 was structural: every actor behaved according to the logic of the system. Khrushchev, who had denounced Stalin in February and let Gomulka’s Poland bend the rules in October, could not let Hungary break them — a multi-party government leaving the Warsaw Pact was not reform but secession, and secession, once permitted, would not stop at Hungary. The West’s encouragement was rhetorical by design: “rollback” and “liberation” were broadcast on Radio Free Europe, but no NATO planner contemplated war across the Elbe for Budapest, and the Suez fiasco that same fortnight consumed what attention remained. Some 2,700 Hungarians died; 200,000 fled; Nagy was hanged after a secret trial. The lessons were learned everywhere. The satellites learned the boundary of the possible; Moscow learned that its empire rested on force alone; and the West learned — and tacitly accepted — that the division of Europe would not be revised. Spheres of influence, never signed, had been countersigned in blood.',
        footnotes: [
          'Suez — the Anglo-French-Israeli attack on Egypt, October–November 1956, which divided the western alliance at the height of the Hungarian crisis.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that the Hungarian people have thrown down Stalinism — the idol that towered over the city lies broken in the gutter)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the colossal head reduced to street rubbish among the tram rails, the rod driven through it as deliberate desecration, the passers-by walking around it unafraid — the terror of the cult visibly dead, the dragging of the head across the city as public humiliation)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: candidates should decode the photograph’s elements — the fallen colossus (the cult literally overthrown), its dumping among tram rails and debris as deliberate degradation, the rod through the head, and the ordinary pedestrians passing without fear — and connect each to the message of popular national revolution against Soviet-imposed rule. Candidates may note that the photograph itself, taken and kept by an ordinary Hungarian, is evidence of the days when the regime’s symbols could be defiled openly. Full marks require specific reference to elements of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the failure of the Hungarian rising of 1956. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Similarities: both sources present the rising as crushed by overwhelming Soviet force against a fighting population, and both register the West’s failure to act — the broadcast begs for the help that the historian explains was never coming. The central differences: Source 2 speaks from inside the catastrophe, in the present tense, addressed to the world’s conscience — for its author, western help is still conceivable and owed; Source 3 explains with hindsight why every actor, Khrushchev and NATO alike, behaved as the system dictated, and draws the long consequences (the “countersigned” division of Europe) invisible from the radio studio. One pleads; the other dissects. Candidates may account for the difference through origin and purpose, though accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the nature of Soviet control over eastern Europe during the Cold War. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of Soviet control over eastern Europe in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent the nature of Soviet control, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents Soviet control as imposed and maintained by force — the cult overthrown by a people the moment it dared (Source 1), the tanks that answered (Source 2), and the system logic that made repression structural (Source 3). Strong responses set 1956 in the longer pattern with own knowledge: the salami tactics and show trials of the late 1940s, the East German rising of 1953, Poland’s October, then the Berlin Wall (1961), the Prague Spring and the Brezhnev Doctrine (1968), and the contrast of 1989, when a Moscow that had renounced force watched the system dissolve. Balance and omissions tied to evaluation: control also worked through local parties, economic integration (Comecon) and periods of genuine stabilisation (Kádár’s Hungary), which pure crisis-sources cannot show; nor does the set contain any Soviet or loyalist voice. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 3 — The wall: Berlin 1961  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-berlinwall',
    title: 'The wall: Berlin 1961',
    themeKey: 'eur-berlin',
    themeSentence:
      'The Berlin Wall ended the crisis that had twice brought the Cold War to the brink — by imprisoning a population, stabilising a stalemate, and giving the division of Europe its concrete symbol.',
    tags: ['eur-p2'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of the Berlin Wall under construction, November 1961.',
        image: {
          src: 'sources/berlin-wall-construction-1961.jpg',
          alt: 'Cranes lower concrete slabs onto the curving Berlin Wall in November 1961 while workers and guards stand on top; barbed wire runs along the western side',
          credit: 'US National Archives, public domain, via Wikimedia Commons',
        },
        body: 'The photograph, taken from the western side, shows the wall curving away into the winter mist. Truck-mounted cranes lower great concrete slabs onto it; East German workmen stand along the top setting them in place while uniformed guards watch over the work. In front of the wall, on the western side, runs a low fence strung with barbed wire.',
        note: 'Note: the sector boundary through Berlin was sealed with barbed wire in the early hours of 13 August 1961 and the concrete wall followed within days; in the preceding twelve years some 2.7 million people had left East Germany through the city.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the joint declaration of the Warsaw Pact states and the accompanying East German government statement, published 13 August 1961.',
        body: 'The governments of the Warsaw Treaty states address themselves to the government of the German Democratic Republic with the proposal to establish, on the border with West Berlin, such control as will securely bar the way to the subversive activity directed against the countries of the socialist camp. West Berlin has been transformed into a centre of espionage and diversion, from which agents, saboteurs and revanchists penetrate the Republic; through it, the militarists of Bonn conduct an open slave trade in human beings, luring citizens of the Republic with bribes and false promises so as to bleed our state of its working strength. The measures now taken are the protection of peace. Citizens of West Berlin may be assured: their communications with the West remain untouched. Order is being established on the frontier of the German Democratic Republic — nothing more. The warmongers wished to make Berlin the fuse of a new war; the socialist community has today drawn that fuse.',
        footnotes: [
          'Revanchist — an advocate of reversing wartime losses; standard Eastern-bloc term for West German politicians.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of divided Germany written by a historian and published in 2011.',
        body: 'The Wall was an admission dressed as a rampart. The state that built it had lost, by 1961, a sixth of its population — disproportionately the young and the skilled, one in two of them under twenty-five — and the “New Course” of consumer promises had failed to hold them; Ulbricht had pressed Khrushchev for the sealing of the border for years before Moscow, fearing the GDR’s collapse, consented. As policy, it worked. The haemorrhage stopped; the East German economy steadied; and the Berlin crisis, which since 1958 had carried a real risk of war over access routes, subsided into the tense quiet in which tanks faced each other at Checkpoint Charlie and then backed away. Kennedy grasped the ugly arithmetic at once: “a wall is a hell of a lot better than a war.” For the West it was a propaganda gift beyond price — a state obliged to cage its citizens had lost the argument about legitimacy in a single night, and every escape, every death at the wire, restated the verdict. Stability and shame, in one structure: nothing built in the Cold War expressed it better.',
        footnotes: [
          'Checkpoint Charlie — the crossing point where American and Soviet tanks confronted each other in October 1961.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the sealing of the Berlin sector boundary on 13 August 1961 and the concrete wall raised in the following weeks, the refugee exodus through Berlin — some 2.7 million since 1949, the Berlin crisis since Khrushchev’s 1958 ultimatum, a city cut in two)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: late 1961 — the open sector boundary had been the last gap in the iron curtain, the exodus was accelerating (over 30,000 in July 1961 alone), Khrushchev renewed his pressure on the western presence in Berlin, the boundary was sealed overnight on 13 August, and through the autumn the wire was replaced by the permanent concrete wall. Specific details from the photograph — the cranes and prefabricated slabs showing an industrial, state-organised undertaking, the guards supervising the workmen, the wire on the western face — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the reasons for the building of the Berlin Wall.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the authentic official justification, invaluable for the bloc’s public reasoning, but propaganda inverting the wall’s purpose)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly account using population data and archives, but distant and interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is unreliable as an account of motive — the wall faced inward, against the GDR’s own citizens, not against western “saboteurs”, and the promise that communications “remain untouched” was false for Berliners within days — but highly reliable as evidence of how the bloc justified itself: the vocabulary (revanchists, warmongers, “slave trade”), the framing of imprisonment as peace-keeping. Source 3 rests on demographic fact and post-1989 archives (Ulbricht’s pressure on Moscow), and its interpretation — admission dressed as rampart — commands wide assent; its limits are hindsight’s neatness and the compression of debate about Khrushchev’s aims. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the character of the Cold War in Europe in the years 1958 to 1962. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the character of the Cold War in this period in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the character of the Cold War in these years, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the Cold War of these years as a contest fought with concrete, propaganda and human lives rather than armies — division imposed on a city (Source 1), justified in inverted language (Source 2), and analysed as stabilising shame (Source 3). Strong responses situate the Wall with own knowledge: Khrushchev’s 1958 ultimatum and the failed summits, the U-2 affair, Vienna 1961, the Checkpoint Charlie confrontation, Kennedy’s “Ich bin ein Berliner” (1963), and the Cuban crisis (1962) as the period’s climax — after which both sides stepped back towards the test-ban treaty. Omissions tied to evaluation: the set is Berlin-bound — the arms race and the nuclear shadow that disciplined both sides appear in none of the sources, and no West German or Allied official voice balances the bloc’s statement. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 4 — Prague 1968 and the Brezhnev Doctrine  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-prague',
    title: 'Prague 1968 and the Brezhnev Doctrine',
    themeKey: 'eur-prague',
    themeSentence:
      'The Prague Spring tried to give socialism a human face; the Warsaw Pact invasion and the doctrine that justified it froze reform out of the bloc for twenty years.',
    tags: ['eur-p2'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph taken in central Prague, 21 August 1968.',
        image: {
          src: 'sources/prague-tanks-1968.jpg',
          alt: 'Two Soviet tanks marked with white invasion stripes hemmed in on every side by a vast unarmed crowd in Prague, August 1968',
          credit: 'Engramma.it / CC BY-SA 3.0, via Wikimedia Commons',
        },
        body: 'The photograph, taken from above, shows two Soviet tanks marked with broad white identification stripes brought to a standstill in a city square, hemmed in on every side by an enormous crowd. The people press to within arm’s length of the armour; a man has climbed onto the leading tank’s hull to argue with its crew, whose commander stands in the turret hatch. No one in the crowd is armed.',
        note: 'Note: Warsaw Pact forces entered Czechoslovakia on the night of 20–21 August 1968; invading vehicles were marked with white stripes to distinguish them from the identical tanks of the Czechoslovak army. Alexander Dubček’s reform programme had promised “socialism with a human face”.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an article published in Pravda, the newspaper of the Soviet communist party, September 1968, setting out what became known in the West as the Brezhnev Doctrine.',
        body: 'The peoples of the socialist countries and their parties unquestionably have freedom to determine the ways of advance of their respective countries. However, none of their decisions should damage either socialism in their country or the fundamental interests of other socialist countries. The sovereignty of each socialist country cannot be opposed to the interests of the world of socialism. Every communist party is responsible not only to its own people, but also to all the socialist countries and to the entire communist movement. The weakening of any of the links in the world system of socialism directly affects all the socialist countries, which cannot look on indifferently when this occurs. Discharging their internationalist duty toward the fraternal peoples of Czechoslovakia, and defending their own socialist gains, the USSR and the other socialist states had to act decisively, and they did act, against the anti-socialist forces in Czechoslovakia.',
        footnotes: [
          'The doctrine of “limited sovereignty” asserted here remained in force until Gorbachev renounced it in the late 1980s.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of communist eastern Europe written by a historian and published in 2017.',
        body: 'What Moscow crushed in August 1968 was not a counter-revolution but a question: could the system reform itself and survive? Dubček never proposed leaving the Warsaw Pact — the lesson of Hungary had been learned — but censorship had ended, and a party congress was days from making the reforms irreversible. That was enough. The invasion met no armed resistance, and its cost was paid in a different currency: the western communist parties broke with Moscow’s tutelage; inside the bloc, belief died and was replaced by ritual — “normalisation” in Czechoslovakia meant half a million purged party members and a nation retreating into private life. The Brezhnev Doctrine kept the empire quiet for two decades, but at the price of freezing its politics and its economics together; the stagnation of the 1970s was the doctrine’s domestic twin. When Gorbachev finally repudiated it, admirers called the change the “Sinatra Doctrine” — they would do it their way — and within months there was nothing left to hold. The answer to 1968’s question, it turned out, was no; and the tanks had merely postponed the asking.',
        footnotes: [
          'Normalisation — the restoration of orthodox rule in Czechoslovakia after 1968.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Prague Spring reforms under Dubček — end of censorship, “socialism with a human face”, the Warsaw Pact invasion of 20–21 August 1968, unarmed popular resistance and protest)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: Czechoslovakia in August 1968 — eight months of reform (censorship abolished, rehabilitation of victims, economic decentralisation, the Action Programme), Moscow’s mounting alarm through the summer (the Warsaw letter, Čierna talks), and the invasion by some quarter of a million Warsaw Pact troops met with unarmed resistance, argument and protest rather than battle. Specific details from the photograph — the white invasion stripes, the tanks swallowed by an unarmed crowd, the man on the hull arguing with the crew — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the reasons for the Warsaw Pact invasion of Czechoslovakia.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the authentic official justification — the doctrine itself — but a post-hoc rationalisation in ideological language)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly analysis with archives and outcomes known, but distant and interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is the invasion’s official theory from the party’s central organ — indispensable evidence of how Moscow framed intervention (limited sovereignty, internationalist duty, “anti-socialist forces”), and its publication a month after the invasion shows doctrine following tanks; as an account of Czechoslovak reality it is fiction — there was no counter-revolution to defend against. Source 3 writes with the archives and the ending known, allowing it to weigh causes (the irreversibility of reform, not treaty defection) and consequences; its confidence about the system’s unreformability is, however, an interpretation shaped by 1989. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the evolving character of the Cold War in Europe between 1956 and 1975. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the Cold War’s evolving character in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the period’s evolving character, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents a Cold War whose European front had hardened into managed empire — reform attempted within the system (Source 1), suppression codified as doctrine (Source 2), and the long stagnation that followed (Source 3). Strong responses trace the evolution with own knowledge: from Hungary 1956 through the Wall to 1968, and then the seeming paradox of détente — the invasion barely interrupted East–West negotiation, and Ostpolitik, SALT I (1972) and Helsinki (1975) followed within seven years, with Helsinki’s Basket III planting the human-rights lever that dissidents (Charter 77) would use. Omissions tied to evaluation: détente itself, the arms race, and any western governmental voice are absent from the set, which views the period entirely through the bloc’s internal crises. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 5 — 1989–91: the collapse  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-collapse',
    title: '1989–91: the collapse of the Communist Bloc',
    themeKey: 'eur-collapse',
    themeSentence:
      'Once Gorbachev renounced force, the regimes of eastern Europe fell in months and the Soviet Union itself in two years — a peaceful collapse almost no one predicted.',
    tags: ['eur-p2'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph taken at the Berlin Wall beside the Brandenburg Gate, November 1989.',
        image: {
          src: 'sources/wall-brandenburg-1989.jpg',
          alt: 'Crowds stand on top of the graffiti-covered Berlin Wall at the Brandenburg Gate in November 1989; a man is helped up past a defaced border sign',
          credit: 'Sue Ream / CC BY 3.0, via Wikimedia Commons',
        },
        body: 'The photograph shows the broad top of the Berlin Wall at the Brandenburg Gate packed shoulder to shoulder with people; one man is being hauled up the graffiti-covered concrete by the hands of those above. In the foreground, more crowds and a television crew surround the official border sign — “Achtung! Sie verlassen jetzt West-Berlin” (“Attention! You are now leaving West Berlin”) — across which someone has sprayed the words “Wie denn?”.',
        note: 'Note: the sprayed words mean “How, then?” — the joke being that with the Wall open and overrun, “leaving West Berlin” no longer meant anything. The East German government had announced the opening of its borders on the evening of 9 November 1989.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the address of Mikhail Gorbachev to the United Nations General Assembly, 7 December 1988.',
        body: 'The use or threat of force no longer can or must be an instrument of foreign policy. This applies above all to nuclear arms, but that is not the only thing that matters. All of us, and primarily the stronger of us, must exercise self-restraint and totally rule out any outward-oriented use of force. Freedom of choice is a universal principle to which there should be no exceptions. It is a matter of both principle and practical policy: the imposition of a social system, a way of life, or policies from outside by any means, let alone military, are dangerous trappings of a past epoch. Necessity of the principle of freedom of choice is clear. Denying that right of peoples, no matter what the pretext, means jeopardising even the fragile balance that has been attained. I now announce that the Soviet Union has taken a decision to reduce its armed forces by 500,000 men, and that the divisions stationed in the German Democratic Republic, Czechoslovakia and Hungary will be withdrawn in significant part. This is more than words: it is our contribution to the building of trust.',
        footnotes: [
          'Gorbachev’s policies of glasnost (openness) and perestroika (restructuring) had been under way since 1985–86.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the end of the Cold War written by a historian and published in 2021.',
        body: 'The empire did not fall to superior force; it was allowed to fall, and then it fell everywhere at once. Gorbachev meant to save the system by reforming it — glasnost to expose the bureaucracy, perestroika to revive the economy, retrenchment abroad to fund both — and each instrument dismantled what it touched. Once the UN speech and the withdrawal from Afghanistan made clear that the tanks would not come, the calculation of every actor in eastern Europe changed: Poland’s round table led to a Solidarity government by August 1989; Hungary cut the wire to Austria and let the East Germans out; and on 9 November a bungled press conference opened the Wall that a doctrine had defended for 28 years. Nowhere but Romania did the endgame cost lives in any number. The Soviet Union outlived its outer empire by barely two years: the national question, opened by glasnost in the Baltics and the Caucasus, and the August 1991 coup — staged by hardliners to save the union and destroying it instead — finished what Chernobyl and the oil price had begun. It was the rarest event in the history of great powers: an empire that went home.',
        footnotes: [
          'Solidarity — the independent Polish trade union, forced underground in 1981 and legalised again in 1989.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that the division of Berlin and of Europe is over — the people themselves have taken possession of the Cold War’s central symbol, in joy rather than war)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the crowds standing on the very structure people had been shot for approaching, strangers hauling one another up as the division dissolving in miniature, the graffiti covering the “anti-fascist protection rampart”, the defaced border sign — “you are now leaving West Berlin… how, then?” — turning the state’s language into a joke, the world’s cameras watching)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: candidates should decode the photograph’s elements — the occupation of the wall itself, the joined hands hauling people up, the festival atmosphere where searchlights and orders to shoot had ruled a week earlier, and the defaced official sign whose warning had become absurd overnight — and connect each to the message that the people have ended the division of Europe peacefully. Full marks require specific reference to elements of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the reasons for the collapse of the Communist Bloc. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Similarities: both sources place the renunciation of force at the centre — Gorbachev announces the principle and the troop withdrawals, the historian identifies exactly that announcement as the moment every calculation changed; both present the transformation as chosen rather than imposed from outside. The central differences: Source 2 is intention — Gorbachev presents renunciation as the path to a reformed socialism and a stabilised balance, with no expectation that the bloc will dissolve; Source 3 is outcome — with hindsight it argues that each reforming instrument “dismantled what it touched” and that the empire fell precisely because the threat was withdrawn. One speaks as architect, the other as coroner. Candidates may account for the difference through origin (a leader persuading the world in 1988 versus a historian writing after the archives), though accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the reasons for the collapse of the Communist Bloc between 1989 and 1991. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the reasons for the collapse in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent the reasons for the collapse, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents the collapse as permitted from above (Source 2), executed from below (Source 1), and explained as the interaction of the two (Source 3). Strong responses test and extend with own knowledge: the economic exhaustion behind perestroika (the oil price collapse, the arms race’s burden, Chernobyl), Solidarity and the Polish round table, Hungary’s border opening and the pan-European picnic, the Monday demonstrations in Leipzig, the velvet revolution and Romania’s violent exception, German reunification (October 1990), the Baltic declarations, the August 1991 coup and the union’s dissolution that December. Debate is rewarded: how much was Gorbachev’s choice, how much systemic failure, how much western pressure (Reagan’s build-up, SDI) — the set under-represents the last, an omission worth evaluating, as is the absence of any hardline or ordinary eastern voice fearing the change. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 6 — After the wall: Yugoslavia and the new Europe  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-newworld',
    title: 'After the wall: Yugoslavia and the new Europe',
    themeKey: 'eur-newworld',
    themeSentence:
      'The end of the Cold War released two futures at once: integration through the European Union, and disintegration in Yugoslavia — the new Europe built itself beside a war.',
    tags: ['eur-p3'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph taken on Marshal Tito Street during the siege of Sarajevo, winter 1992–93.',
        image: {
          src: 'sources/sarajevo-sniper-junction.jpg',
          alt: 'Pedestrians hurry across a snowy Sarajevo junction during the siege; stacked shipping containers screen the crossing from snipers',
          credit: 'Christian Maréchal / CC BY 3.0, via Wikimedia Commons',
        },
        body: 'The photograph shows a snowy junction on the city’s main street. Pedestrians in winter coats hurry across the open roadway, spread out and moving fast; a single car crosses at speed. At the left edge of the frame, shipping containers have been stacked across the street’s mouth to screen the crossing from rifle fire; a road sign still points the way to Tuzla and Vogošća.',
        note: 'Note: Sarajevo, capital of Bosnia-Herzegovina, was besieged by Bosnian Serb forces from 1992 to 1996 — the longest siege of a capital in modern history. Containers and wrecked vehicles were stacked at intersections as sniper screens; people were still shot crossing the gaps.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the speech of a European statesman at the signing of the Treaty on European Union at Maastricht, February 1992.',
        body: 'What we sign today, our predecessors could scarcely have imagined when they gathered in the ruins of 1945. A union of European peoples: a single market of three hundred and forty million; a common citizenship; the path set towards a single currency before this decade ends; and, for the first time, the framework of a common foreign and security policy. To the young democracies of central and eastern Europe we say plainly: the door is open. The division of our continent was never natural, and it is our task to make its healing irreversible — to extend to the East the community of law and prosperity that has made war between its members unthinkable. History has given Europe a second chance. Let no one say we were too small for it. The tragedy unfolding this very winter on our own continent, in what was Yugoslavia, reminds us what awaits Europeans when nationalism is allowed to speak louder than union.',
        footnotes: [
          'The Maastricht Treaty created the European Union and set the timetable for the euro; the EU admitted ten mostly ex-communist states in 2004.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of post-Cold War Europe written by a historian and published in 2020.',
        body: 'The nineties revealed that 1989 had two sequels, and Europe lived them simultaneously. In the west and centre, integration: Maastricht, the single market, the euro, and eastward enlargement — the most successful exercise of soft power in the continent’s history, in which the mere prospect of membership rebuilt legal systems from Tallinn to Sofia. In the south-east, disintegration: Yugoslavia, held together by Tito’s authority and the Cold War’s disciplines, was torn apart by leaders — Milošević above all — who discovered that nationalism was the one ideology left standing when communism fell. Europe’s new institutions failed their first test: the hour of Europe, proclaimed in 1991, produced neither the will nor the means to stop the sieges and the camps, and it was American power, at Dayton in 1995 and over Kosovo in 1999, that ended the wars. A quarter of a million dead within two hours’ flight of Vienna: the new Europe was built with that lesson in its foundations — which is why enlargement, for all its frustrations, was pursued as security policy as much as economics.',
        footnotes: [
          'Dayton — the US-brokered agreement of November 1995 that ended the Bosnian war.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the break-up of Yugoslavia after 1991, the Bosnian war and the siege of Sarajevo from 1992, ethnic-nationalist mobilisation under leaders such as Milošević, civilians as targets — snipers, shelling, cut water and power)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the wars of Yugoslav succession — Slovenia and Croatia’s secession in 1991, Bosnia’s descent into war in 1992, and the siege of Sarajevo in which civilians crossed sniper-covered streets for water and fuel while Europe debated. Specific details from the photograph — the container barricades against snipers, the pedestrians hurrying dispersed across the open junction, ordinary errands run at mortal risk — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the development of Europe after the end of the Cold War.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. an authentic statement of the EU’s founding aspirations at Maastricht, but a ceremonial speech promising more than institutions could deliver)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly account weighing integration against disintegration, but distant and interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is first-rate evidence of the EU’s self-understanding at its founding moment — integration as the answer to nationalism, enlargement as healing — and its glance at Yugoslavia shows contemporaries drawing exactly that moral; but it is rhetoric for a signing ceremony: a politician’s promises (“the hour of Europe” school) that the decade would embarrass, notably in Bosnia. Source 3 has the advantage of outcomes — it can measure Maastricht’s promises against Dayton’s reality and read enlargement as security policy — but it is interpretation, and its severity about Europe’s failure reflects post-hoc consensus more than the choices as they appeared in 1992. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the significant developments in Europe that followed the end of the Cold War. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of post-Cold War developments in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the developments that followed the Cold War, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents post-1989 Europe as integration and disintegration running together — the siege (Source 1), the union founded the same winter (Source 2), and the historian holding both in one frame (Source 3). Strong responses supply the record with own knowledge: the Yugoslav wars’ course (Vukovar, Sarajevo, Srebrenica 1995, Dayton, Kosovo 1999), German reunification inside the EU, Maastricht’s pillars and the euro’s launch (1999–2002), the 2004 enlargement, and the tensions the sources cannot yet see (the eurozone crisis; the divergence of some new members). Omissions tied to evaluation: NATO’s parallel enlargement and Russia’s trajectory are absent, and the set’s Yugoslav coverage has no perpetrator or nationalist voice explaining the wars from within. A source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
