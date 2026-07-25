import type { SourceSet } from './types';

// Source sets 16–19 for Elective 1: The changing European world since 1945.

export const EUR_SOURCE_SETS_4: SourceSet[] = [
  // ------------------------------------------------------------------
  // EUR SET 16 — The thaw  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-secretspeech',
    title: 'The thaw: Khrushchev, de-Stalinisation and coexistence',
    themeKey: 'eur-thaw',
    themeSentence:
      'Khrushchev buried Stalin’s cult in a secret speech, promised peaceful coexistence — and discovered that a thaw, once begun, is very hard to stop at the frontier of the bloc.',
    tags: ['eur-p2'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph by Warren K. Leffler of Nikita Khrushchev at the United Nations General Assembly, New York, 1960.',
        image: {
          src: 'sources/khrushchev-un-1960.jpg',
          alt: 'Khrushchev sits at the USSR desk in the UN General Assembly in 1960, earphone in ear, Gromyko beside him',
          credit: 'Warren K. Leffler. Library of Congress, public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows the Soviet leader at the USSR’s desk on the floor of the General Assembly, translation earphone in ear, watching the rostrum with a heavy, sceptical expression; foreign minister Gromyko works beside him. Khrushchev attended the 1960 session in person for weeks — arguing, heckling and, on one famous occasion, banging his shoe.',
        note: 'Note: 1960 was the year of the U-2 affair and the collapse of the Paris summit. Khrushchev’s doctrine of “peaceful coexistence” — competition with capitalism without war — had been proclaimed at the Twentieth Party Congress in 1956, the same congress that heard his secret speech against Stalin.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from Nikita Khrushchev’s “secret speech” to a closed session of the Twentieth Congress of the Soviet communist party, February 1956.',
        body: 'Comrades! The cult of the individual acquired such monstrous size chiefly because Stalin himself, using all conceivable methods, supported the glorification of his own person… It was precisely during the period 1935–1938 that the practice of mass repression through the government apparatus was born, first against the enemies of Leninism… and subsequently against many honest communists. Stalin originated the concept “enemy of the people”. This term automatically rendered it unnecessary that the ideological errors of a man be proven; this term made possible the usage of the most cruel repression, violating all norms of revolutionary legality, against anyone who in any way disagreed with Stalin… Confessions were acquired through physical pressures against the accused. Many thousands of honest and innocent communists have died as a result of this monstrous falsification of “cases”. Comrades, we must abolish the cult of the individual decisively, once and for all.',
        footnotes: [
          'The speech was read to closed party meetings across the bloc; a copy reached the West within months and was published. It was not printed in the USSR until 1989.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Khrushchev era written by a historian and published in 2017.',
        body: 'The secret speech was the most consequential document of the post-war bloc, and its consequences were almost all unintended. Khrushchev meant to amputate the Terror from the system and save the rest: blame Stalin the man, release the surviving prisoners, restore “Leninist norms”, and free the party to compete with the West on living standards and science — coexistence as a more confident kind of struggle. What he actually did was break the spell. If Stalin had been a criminal, the infallibility of every ruling party was a lie sustained by force — a conclusion drawn within months in Warsaw, where a workers’ rising brought Gomułka back, and in Budapest, where the same logic ran to revolution and was answered by tanks. The thaw at home followed the same rhythm of release and panic: camps emptied and Solzhenitsyn published, then Pasternak hounded and the intelligentsia lectured. Coexistence, meanwhile, proved compatible with the ultimatum and the rocket — Berlin, the U-2, Cuba — because it was never pacifism, only the claim that history would do the conquering. The man who opened the door spent the rest of his rule trying to hold it half-shut; his successors preferred it locked; and the generation that finally flung it open in the 1980s had learned its politics, as students, in the thaw.',
        footnotes: [
          'Khrushchev was removed by his colleagues in 1964, accused among other things of “hare-brained scheming”.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Khrushchev’s leadership after Stalin and the doctrine of peaceful coexistence, the 1960 UN session attended in person amid the U-2 affair and the collapsed Paris summit, superpower diplomacy conducted as public theatre)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the high Khrushchev era — coexistence proclaimed but the Cold War sharpening (U-2, Berlin ultimatum, the Congo), the Soviet leader carrying the contest personally onto the UN floor for weeks of theatre. Specific details from the photograph — the earphone and desk diplomacy, Gromyko in attendance, the watchful scowl — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the nature and effects of de-Stalinisation.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the authentic text of the decisive speech, first-hand and sensational, but a selective indictment serving its author’s position)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly assessment tracing consequences to 1956 and beyond, but interpretive)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is the genuine article — the bloc’s ruling myth broken by its own general secretary — but candidates should read its careful edges: the indictment starts in 1934–35 (sparing collectivisation and the famine, in which Khrushchev and his audience were complicit), blames one man to save the system, and served the speaker’s struggle against the old Stalinists. Source 3 supplies the consequences (Poland, Hungary, the thaw’s rhythm, the 1980s generation) with hindsight’s pattern-making; its judgements are interpretation, though widely shared. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the changes in the Cold War during the Khrushchev years. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the Khrushchev-era changes in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent those changes, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the Khrushchev decade as liberalisation and confrontation in one system — the speech that broke the cult (Source 2), the theatre of coexistence-as-contest (Source 1), and the historian’s account of a door opened and held half-shut (Source 3). Strong responses widen with own knowledge: the 1956 earthquakes in Poland and Hungary, the camps’ release of millions, Sputnik and the “we will bury you” competition, the Berlin ultimatum and the Wall, the U-2 and Cuba, and the neo-Stalinist settling after 1964. Omissions tied to evaluation: the set has no voice from the bloc’s peoples for whom 1956 meant tanks, and no Western perspective on whether coexistence was believed. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 17 — Sixteen hours at Checkpoint Charlie  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-checkpoint',
    title: 'Sixteen hours: tanks at Checkpoint Charlie',
    themeKey: 'eur-checkpoint',
    themeSentence:
      'For one night in October 1961, American and Soviet tanks faced each other at pistol range in the middle of Berlin — the Cold War’s only direct armed confrontation between the superpowers in Europe.',
    tags: ['eur-p2'],
    era: 'mid',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the confrontation at Checkpoint Charlie, Friedrichstrasse, Berlin, October 1961.',
        image: {
          src: 'sources/checkpoint-charlie-1961.jpg',
          alt: 'American M48 tanks and jeeps at the Checkpoint Charlie hut face Soviet tanks massed up Friedrichstrasse beyond the sector boundary sign, October 1961',
          credit: 'US Army photograph. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph, taken from the western side, shows American M48 tanks and jeeps drawn up around the little “US Army Checkpoint” hut on Friedrichstrasse. Beyond the white sector-boundary sign — “You are leaving the American sector” in four languages — Soviet tanks stand massed down the length of the street, their crews and East German police between them. Civilians watch from the pavements of both sides.',
        note: 'Note: the confrontation of 27–28 October 1961 began when East German police demanded to check the papers of an American diplomat entering East Berlin — a challenge to the four-power right of free movement. Ten tanks faced ten tanks, engines running, for sixteen hours.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a cable from General Lucius D. Clay, President Kennedy’s special representative in Berlin, to Washington, October 1961.',
        body: 'The probing of our rights of access did not begin with this incident and will not end with it unless met. Since the thirteenth of August we have accepted the closure of the sector border to Germans; the Soviets now test whether we will accept its closure, in practice, to ourselves. I judge that we cannot. Our rights in this city rest on conquest and agreement, not on East German sufferance, and each right unexercised is a right abandoned — the harassment of our official personnel is designed precisely to transfer control of access, piece by piece, to a regime we do not recognise. The tanks at the checkpoint are not there to fight; they are there to make unmistakable that the question is between ourselves and the Soviet Union, whose forces must therefore show themselves — as they now have. I regard this as clarifying. Moscow does not intend war over the checkpoint any more than we do; but Moscow must not be permitted to believe that firmness is the monopoly of one side. If we flinch here, we shall be tested next where the stakes are higher.',
        footnotes: [
          'Clay, the hero of the 1948–49 airlift, had been sent back to Berlin by Kennedy in September 1961 to steady the city’s morale.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Berlin crisis written by a historian and published in 2016.',
        body: 'The famous photographs suggest the brink of war; the archives show two governments urgently building an exit. Kennedy, alarmed that a probe over a diplomat’s theatre tickets had produced gun-loaded tanks a hundred metres apart, activated the back channel to Moscow through his brother and offered, in effect, simultaneity: if the Soviet tanks pulled back first, the American withdrawal would follow within minutes — a choreography that let Khrushchev claim restraint and Kennedy claim firmness. On the morning of 28 October a Soviet tank backed away five metres; an American tank answered; and in half an hour the street was clear. Both leaders had learned the lesson the Wall had already taught: that neither would fight to change the status of Berlin, only to keep what it held. The rights of the occupying powers were preserved — allied officials crossed unhindered thereafter — but so was the Wall, and the crisis that had simmered since 1958 was over in all but name. Checkpoint Charlie was the Berlin question’s last armed scene: the confrontation everyone remembers sealed the stalemate everyone had accepted.',
        footnotes: [
          'The back channel ran through Georgi Bolshakov, a Soviet intelligence officer in Washington, to Robert Kennedy.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Berlin Wall built in August 1961, four-power rights of access to the whole city, East German checks on allied personnel provoking the October confrontation, the sixteen-hour tank standoff at the Friedrichstrasse crossing)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details represented in and/or surrounding the source', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. army photography documenting the confrontation — and each side’s display of tanks was itself a message meant to be seen and reported)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. “Account for” requires candidates to state the reasons for — here, the possible reasons the source was created. Generic purposes (“to inform”) are not enough for full marks: the purpose must be specific to this source. Context: Berlin in the Wall’s first autumn — the sector boundary concreted, allied rights of movement the one element of the old regime the West still enforced, and the escalation from a document check to facing armour at the crossing kept open for the occupying powers. Specific details from the photograph — the checkpoint hut, the multilingual boundary sign, the massed Soviet armour beyond, the watching civilians — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the confrontation at Checkpoint Charlie. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. Key similarities: both sources agree that neither side intended war (Clay says so explicitly; the historian documents it), and both understand the confrontation as being about rights and signals rather than territory — Clay’s “each right unexercised is a right abandoned” matches the historian’s “keep what it held”. The differences: Source 2 argues from inside the crisis for manufactured firmness — the tanks as clarification, escalation as communication — and cannot see the other side’s calculations; Source 3, with the archives, restores the hidden half — the back channel, the choreographed mutual withdrawal — and reads the episode as the sealing of a stalemate rather than a western stand vindicated. Candidates may note that both, in different idioms, describe the same mechanism: pressure conducted safely only because both sides knew the limits. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent how the Cold War was conducted in Europe without becoming a shooting war. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the Cold War’s peaceful conduct in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent that conduct, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents crisis management as the Cold War’s real craft — the spectacle of the brink (Source 1), the doctrine of firmness (Source 2), and the machinery of retreat (Source 3). Strong responses generalise with own knowledge: the airlift’s rules (pressure without shooting), the Wall itself as stabiliser, Cuba a year later with the same back-channel choreography on a nuclear scale, the hotline and test ban that followed, and the doctrine (deterrence, spheres respected) beneath all of them — with 1953, 1956 and 1968 as the eastern half of the same bargain. Omissions tied to evaluation: the set is a superpower story — Berliners appear as bystanders, and the East German state whose authority the crisis was about has no voice. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 18 — “Willy, Willy!”  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-ostpolitik',
    title: '“Willy, Willy!”: Erfurt and the new eastern policy',
    themeKey: 'eur-ostpolitik',
    themeSentence:
      'When the West German chancellor came to East Germany in 1970, the crowd that broke through to cheer him told both governments more about the German question than any communiqué.',
    tags: ['eur-p2'],
    era: 'mid',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the crowd outside the Erfurter Hof hotel during the first meeting of the two German heads of government, Erfurt, East Germany, 19 March 1970.',
        image: {
          src: 'sources/brandt-stoph-erfurt-1970.jpg',
          alt: 'A dense crowd of East Germans packs the square before the Erfurter Hof hotel during the Brandt–Stoph summit, March 1970',
          credit: 'Bundesarchiv, Bild 183-J0319-0001-010 / Hubert Link / CC BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows the square before the Erfurter Hof hotel packed shoulder to shoulder with East German citizens on the morning of the summit — hundreds of men and women in winter coats and hats pressed towards the entrance where the West German chancellor was lodged, under the eyes of cameramen and police.',
        note: 'Note: the crowd broke through police lines chanting “Willy Brandt ans Fenster!” — “Willy Brandt, come to the window!” Brandt appeared briefly and gestured for calm, fearing the demonstration would cost the crowd dear. The East German press printed photographs like this one as evidence of orderly public interest.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from Chancellor Willy Brandt’s statement of government policy to the West German parliament, October 1969.',
        body: 'This government proceeds from the assumption that the questions which have arisen out of the Second World War, and out of the national treachery of the Hitler regime, can be finally answered only in a European peace order. No one can persuade us, however, that the Germans have no right to self-determination as other nations have… Twenty years after the founding of the Federal Republic and of the GDR, we must prevent a further drifting apart of the German nation — that is, attempt to move, through a regulated side-by-side existence, to a togetherness. This is not merely a German interest; it is an interest of peace in Europe and of East–West relations. Even if two states exist in Germany, they are not foreign countries to each other: their relations with each other can only be of a special kind. Building on this, my government offers the Council of Ministers of the GDR negotiations at government level, without discrimination on either side, which should lead to contractually agreed co-operation. International recognition of the GDR by the Federal Republic is out of the question.',
        footnotes: [
          'The formula “two states of one nation” reversed twenty years of West German refusal to deal with East Berlin; the Moscow and Warsaw treaties followed within a year.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of Ostpolitik written by a historian and published in 2018.',
        body: 'Erfurt showed, in a single morning, both what Ostpolitik could touch and why the GDR feared it. Brandt’s policy rested on a wager Bahr had formulated as “change through rapprochement”: the East German state could not be brought down by refusal — twenty years of the Hallstein Doctrine had proved that — but it might be softened by contact, and the nation preserved beneath the division until history offered better weather. The crowd at the Erfurter Hof was the wager paying its first dividend and revealing its first danger: the sight of East Germans cheering a West German chancellor told Ulbricht’s government that every human contact was a security risk — which is why the GDR answered the treaties that followed with Abgrenzung, a doctrine of demarcation, striking “unity of the nation” from its constitution even as it banked the recognition and the credits. The critics at home charged Brandt with paying for symbols in the currency of legitimacy. The long answer came in 1989, when the East Germans who had chanted at the window walked through it; the treaties had kept the door of the nation ajar for nineteen years. But the short answer was visible that morning in Erfurt: the regime got the summit, and the people got seen.',
        footnotes: [
          'Hallstein Doctrine — the former West German policy of breaking relations with states that recognised the GDR.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Brandt’s new Ostpolitik and the formula of two states of one nation, the first meeting of the two German heads of government at Erfurt in March 1970, the crowd’s demonstration for Brandt in a state that policed assembly, the coming Moscow and Warsaw treaties)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: the opening act of Ostpolitik — the West German chancellor crossing to Erfurt within months of his declaration, the two Germanies negotiating as governments for the first time, and an East German crowd turning a controlled occasion into an acclamation the regime could neither permit nor punish in front of the world’s cameras. Specific details from the photograph — the packed square, the hotel entrance, the police and press presence — should be connected to those circumstances, including the note’s account of the window chant. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the aims and effects of Ostpolitik.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. the authentic programmatic declaration of the policy, first-hand and precise, but a governmental text balancing audiences at home and abroad)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly assessment with the outcomes to 1989, but interpretive in its wager-and-dividend framing)', marks: '1' },
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
          '“Discuss” requires points for and/or against, grounded in origin factors. Source 2 is the policy in its own words — the “two states of one nation” formula, the offer of negotiation, the explicit limit on recognition — and as a parliamentary declaration it is measured for multiple audiences (allies, Moscow, the domestic opposition), which is both its value and its guardedness: the strategic wager behind it (Bahr’s formula) is not stated. Source 3 supplies the strategy, the GDR’s counter-doctrine and the long verdict of 1989; but its confidence about what the treaties preserved is retrospective interpretation, and its sympathies are legible. Candidates treat the sources in parallel; comparison is not required. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the changing relationship between the two Germanies during the Cold War. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the German–German relationship in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent that relationship, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents the German question managed rather than solved — the nation showing itself at a window (Source 1), the policy that made the meeting possible (Source 2), and the wager’s costs and 1989 dividend (Source 3). Strong responses supply the arc with own knowledge: the Hallstein years and the Wall, the Moscow and Warsaw treaties and the Kniefall, the Berlin Quadripartite Agreement, the Basic Treaty of 1972 and both states’ UN entry, Abgrenzung and the GDR’s borrowed stability (credits, recognition), the human traffic (visits, telephone lines, ransomed prisoners) that contact created — and reunification as the question’s answer. Omissions tied to evaluation: the western critics of Ostpolitik and the eastern dissidents equivocal about it are both absent, as is Moscow, without whose consent no treaty stood. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 19 — The third way  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-tito',
    title: 'The third way: Tito’s Yugoslavia between the blocs',
    themeKey: 'eur-tito',
    themeSentence:
      'Expelled by Stalin in 1948, Tito built the only communist state outside the blocs — courted by both sides, leader of the non-aligned, and held together by an authority that died with him.',
    tags: ['eur-p3'],
    era: 'whole',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph by Stevan Kragujević of Presidents Nasser of Egypt, Nehru of India and Tito of Yugoslavia at Brioni, Yugoslavia, July 1956.',
        image: {
          src: 'sources/tito-brioni-1956.jpg',
          alt: 'Nasser, Nehru and Tito walk arm in arm, laughing, at Brioni in 1956',
          credit: 'Stevan Kragujević / CC BY-SA 4.0, via Wikimedia Commons',
        },
        body: 'The photograph shows the three leaders walking arm in arm and laughing — Nasser of Egypt in a grey suit, Nehru of India in his white cap and buttoned coat, and Tito, the host, in a pale summer suit and panama hat — on Tito’s island retreat of Brioni, where the three issued the declaration that led to the founding of the Non-Aligned Movement.',
        note: 'Note: the Brioni meeting of July 1956 brought together the leaders of states refusing to join either Cold War bloc; the first full Non-Aligned summit met in Belgrade in 1961. Yugoslavia had been expelled from the Soviet bloc by Stalin in 1948.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the resolution of the Cominform expelling the Communist Party of Yugoslavia, June 1948.',
        body: 'The Information Bureau notes that the leadership of the Communist Party of Yugoslavia has in recent months pursued an incorrect line on the fundamental questions of home and foreign policy, a line which represents a departure from Marxism-Leninism… The Yugoslav leaders have adopted a haughty and hostile attitude towards the Soviet Union: Soviet military specialists have been slandered, Soviet civilian representatives placed under surveillance… Comrades Tito, Kardelj, Djilas and Ranković pursue an unworthy policy of equating the Soviet Union with the imperialist powers, as though the USSR and the capitalist states had an identical attitude towards Yugoslavia… Such a nationalist line can lead only to the degeneration of Yugoslavia into an ordinary bourgeois republic, to the loss of its independence and to its transformation into a colony of the imperialist countries. The Information Bureau considers that, by their anti-party and anti-Soviet views, the leaders of the Yugoslav party have placed themselves and the Yugoslav party outside the ranks of the united communist front, and consequently outside the Information Bureau. The healthy elements of the Communist Party of Yugoslavia must compel their present leaders to recognise their errors openly and honestly — or replace them.',
        footnotes: [
          'The expected internal coup never came: Tito purged the “Cominformists” instead, and Yugoslavia survived the blockade that followed with western aid.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of Yugoslavia written by a historian and published in 2019.',
        body: 'The 1948 split made Yugoslavia the Cold War’s great exception, and the exception ran on three subsidies. The first was strategic: as the only communist state outside the Warsaw Pact, Yugoslavia was worth more to the West unconquered than converted, and American loans, wheat and eventually arms arrived without the usual conditions — Tito was the one communist the Pentagon armed. The second was ideological: “self-management” socialism, workers’ councils and the open border gave the regime a legitimacy its neighbours lacked — Yugoslavs travelled, and Germans holidayed on the Adriatic. The third was Tito himself: the Partisan marshal stood above the six republics as arbiter, punishing Serb and Croat nationalism with even hand, and non-alignment gave a small state a world role that flattered every nationality at once. Each subsidy was mortal. Détente devalued the strategic rent; the self-management economy ran on western debt that fell due in the 1980s; and the arbiter died in 1980 leaving a rotating presidency no one feared. What looked from outside like the most successful communist state proved to be the one held together least by institutions — and when the money and the fear both stopped, the republics discovered that the federation had no other cement. The exception’s end was the bloody one.',
        footnotes: [
          'Yugoslavia’s hard-currency debt reached some 20 billion dollars by the early 1980s; the wars of dissolution began in 1991.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Yugoslavia’s expulsion from the Soviet bloc in 1948 and its independent position between the camps, the Brioni meeting of Tito, Nehru and Nasser in July 1956, the emergence of non-alignment as a movement of states refusing both blocs)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details represented in and/or surrounding the source', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. to display the three leaders’ unity and ease — a composed image announcing non-alignment as a confident third force)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. “Account for” requires candidates to state the reasons for — here, the possible reasons the source was created. Generic purposes (“to inform”) are not enough for full marks: the purpose must be specific to this source. Context: the mid-1950s emergence of a third position in a two-bloc world — Tito secure after the split and Stalin’s death, hosting the leaders of newly independent India and Egypt in the year of Suez and Hungary, with the Belgrade summit of 1961 to follow. Specific details from the photograph — the demonstrative intimacy of the three leaders, the relaxed island setting staged for the cameras — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding Yugoslavia’s position outside the Soviet bloc. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast. A striking similarity across forty years and opposite standpoints: both sources treat Yugoslavia’s independence as dependent on outside relationships — the Cominform predicts reliance on the imperialists, the historian documents the western subsidies; and both connect the regime’s fate to its leadership (the resolution demands the leaders’ replacement; the historian makes Tito himself the third subsidy). The differences: Source 2 is the excommunication itself — Moscow’s categories (nationalism, degeneration, colony), its confident expectation of an internal coup, and its function as a warning to every other bloc party; Source 3 explains why the excommunication failed and what the survival cost, reading the exception’s strengths as mortal weaknesses maturing towards 1991. Candidates may note the resolution’s prophecy — “colony of the imperialist countries” — half-fulfilled as debt, in a way its authors did not intend. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which Sources 1, 2 and 3 accurately represent the origins of the break-up of Yugoslavia. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the break-up’s origins in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the extent to which the sources represent those origins, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents Yugoslavia’s exceptional Cold War position — independence won in 1948 (Source 2), performed on the world stage (Source 1), and analysed as a structure of subsidies that dissolved together (Source 3). Strong responses connect the exception to the dissolution with own knowledge: the 1974 constitution’s weak federation, Tito’s death in 1980 and the rotating presidency, the debt crisis and IMF austerity of the 1980s, Milošević’s mobilisation of Serbian nationalism and the answering nationalisms, the end of the Cold War removing the strategic rent — and the wars from 1991. The strongest answers assess what the set explains (why Yugoslavia lacked the bloc’s external discipline and internal institutions) and what it cannot (the specific agency of the 1980s leaders). Omissions tied to evaluation: no voice from the republics or nationalities whose relations were the federation’s real fault line. A source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
