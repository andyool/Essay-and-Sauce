import type { SourceSet } from './types';

// Source sets 49–52: significant individuals I — Hitler, Goebbels, Himmler, Göring.

export const SOURCE_SETS_13: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 49 — The Führer myth  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-fuehrer-myth',
    title: 'The Führer myth: Hitler and the German people',
    themeKey: 'hitler-myth',
    themeSentence:
      'The cult of the Führer set Hitler above party, state and criticism — an image fed by staged devotion and real successes, which bound millions to the regime and decayed only when the victories stopped.',
    tags: ['p4', 'i-hitler'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of the military parade in Berlin for Hitler’s fiftieth birthday, 20 April 1939. The parade along the new East–West Axis lasted over four hours.',
        image: {
          src: 'sources/hitler-birthday-1939.jpg',
          alt: 'An honour formation marches down Berlin\'s flag-lined East-West Axis towards the Brandenburg Gate during Hitler\'s fiftieth-birthday parade, April 1939',
          credit: 'Bundesarchiv, Bild 102-00089 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a ceremonial column marching down the centre of a great avenue behind its standard, rifles shouldered, between dense lines of uniformed spectators. The avenue is lined with tall white pylons, each crowned with a gilded eagle on a wreathed swastika; swastika banners hang in ranks from the buildings at the right, and the Brandenburg Gate closes the vista behind.',
        note: 'Note: the fiftieth birthday was declared a national holiday. The four-hour parade displayed the new armament — tanks, motorised artillery and the Luftwaffe overhead — to the assembled diplomatic corps, four months before the invasion of Poland.',
        footnotes: [
          'East–West Axis — the monumental parade avenue through Berlin, completed for the occasion.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a report on German public opinion compiled by an underground contact of the exiled Social Democratic leadership (SOPADE) and smuggled abroad, spring 1939.',
        body: 'It must be reported again, however unwelcome the hearing: the Führer stands outside the criticism that touches everything else. The grumbling is general — against the Party’s little gods in their motorcars, against the collections, the shortages of fat and coffee, the eternal drums. But at the name of Hitler the grumbling halts. “If the Führer knew” — one hears it in every works canteen: the corruption of the local leaders, the harshness of this or that measure, all would be mended if only it reached him. The workman who curses the Labour Front trustee will tell you in the same breath that Hitler has done what no republic managed: work, order, and the Reich great again without a war — Austria home, the Sudetenland home, and not a shot fired. The women above all believe in him; the young take him as a fact of nature, like weather. We deceive ourselves and our friends abroad if we pretend this is all fear and stage-management. The stage-management is real, but so is the faith — and it is the regime’s deepest reserve. Whether it would survive a war with its casualty lists, our people doubt. It has not had to.',
        footnotes: [
          'SOPADE — the exiled Social Democratic Party leadership, which collected secret reports from inside Germany.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the Hitler myth written by an academic historian and published in 1987.',
        body: 'The Führer cult was the true integrating force of the Third Reich, and its structure repays attention. It rested on a division of the political world into two persons: the Party, which could fail, and the Führer, who could not. Every unpopular reality of the regime — the corrupt Kreisleiter, the church struggle, the shortages — was booked to the Party’s account; every success — the fallen unemployment figures, the bloodless triumphs of Rhineland, Austria and Munich — to the Führer’s. The phrase the opinion reports recorded in every district, “if only the Führer knew”, was not an accident of popular psychology but the cult’s essential mechanism, tirelessly serviced by propaganda that kept Hitler above the fray: the statesman of the newsreels, the solitary bearer of Germany’s destiny, photographed with children and architects’ plans, never with the camp or the cell. The myth’s dependence on success was its hidden clause. Fed by six years of victories that cost nothing, it survived the war’s early years on credit, wavered at Stalingrad, and thereafter decayed measurably — the salute avoided, the broadcasts switched off — until the man in the bunker outlived his image. But for the crucial pre-war years the cult performed its function perfectly: it made loyalty to one man the substance of German politics, and in doing so it made everything else — party, programme, even ideology — negotiable except him.',
        footnotes: [
          'Kreisleiter — the Party’s district leaders.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that the Führer’s birthday is a festival of national power — the state, the army and the capital itself arrayed in his honour)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the monumental rebuilt avenue with its eagle-crowned pylons, the ranks of banners, the disciplined column and massed spectators, the Brandenburg Gate as backdrop — the city transformed into a stage for one man’s anniversary)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: the built environment (axis, pylons, banners), the military display and the ceremonial scale all present the leader as the centre of state and nation — with the armament display doubling, as the note records, as a message to the watching diplomats. Full marks require specific reference to details of the source.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of German attitudes towards Hitler in the late 1930s.',
        marks: 6,
        key: [
          {
            heading: 'Source 2',
            rows: [
              { descriptor: 'Discusses the reliability of Source 2 in relation to attitudes towards Hitler by providing detailed, accurate and relevant evidence and reasons related to, for example, author, motive, bias, time, place, and purpose', marks: '3' },
              { descriptor: 'Explains the reliability of Source 2 by providing mostly accurate and relevant evidence and some reasons', marks: '2' },
              { descriptor: 'Describes the reliability of Source 2 by providing some evidence from some aspects of the source', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Source 3',
            rows: [
              { descriptor: 'Discusses the reliability of Source 3 in relation to attitudes towards Hitler by providing detailed, accurate and relevant evidence and reasons related to, for example, author, motive, bias, time, place, and purpose', marks: '3' },
              { descriptor: 'Explains the reliability of Source 3 by providing mostly accurate and relevant evidence and some reasons', marks: '2' },
              { descriptor: 'Describes the reliability of Source 3 by providing some evidence from some aspects of the source', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Discuss” requires strengths and limitations for each source, reasoned from origin factors rather than a bare assertion of bias. Source 2: contemporary intelligence gathered inside Germany by the regime’s bitterest opponents, whose whole purpose demanded accuracy over comfort — its central admission (“so is the faith”) runs directly against the authors’ hopes, the classic marker of candour; limits include the observers’ necessarily anecdotal method and the risk that an opposition network oversamples the disaffected. Source 3: a scholarly synthesis built on precisely such opinion reports plus the propaganda record, with hindsight across the myth’s whole arc; but an interpretation, and its neat mechanism (Party blamed, Führer credited) is a model that candidates may test. The convergence of enemy testimony and later scholarship is itself evidence of reliability. Candidates treat the sources in parallel; comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of the Führer myth to the stability of the Nazi regime, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the myth’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the myth’s significance to the regime’s stability, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents the myth as staged (Source 1), believed (Source 2) and analysed as the regime’s integrating mechanism (Source 3). Strong responses assess its significance with own knowledge: the plebiscite totals and the acclaimed foreign-policy triumphs that authenticated the image, the “working towards the Führer” dynamic that made the myth an engine of radicalisation as well as loyalty, its wartime decay after Stalingrad — and the standard counterweights: terror and its instruments, which the myth veiled but never replaced, and the excluded for whom no myth applied. The dependence-on-success clause deserves engagement: candidates may argue the myth stabilised the regime precisely while nothing tested it. Omissions earn marks only when tied to evaluation — e.g. the set shows no dissenting German except the hidden reporters themselves, and no victim, so the myth’s boundary is implied rather than shown. Balance of source evidence and own knowledge is required at the top; a source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 50 — Goebbels and total war  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-goebbels-total-war',
    title: 'Do you want total war? Goebbels at the Sportpalast, 1943',
    themeKey: 'total-war',
    themeSentence:
      'After Stalingrad, Goebbels staged the regime’s answer to catastrophe: a manufactured plebiscite of frenzy in the Sportpalast, converting defeat into a demand for more war — propaganda’s most audacious performance and the measure of its late-war limits.',
    tags: ['p4', 'i-goebbels'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of the mass meeting in the Berlin Sportpalast, 18 February 1943, at which Joseph Goebbels delivered his “total war” speech, two and a half weeks after the surrender at Stalingrad.',
        image: {
          src: 'sources/sportpalast-1943.jpg',
          alt: 'The packed Berlin Sportpalast on 18 February 1943, under the banner "Totaler Krieg - Kürzester Krieg", as Goebbels speaks from the flag-draped platform',
          credit: 'Bundesarchiv, Bild 183-J05235 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows the great hall packed to its upper galleries, thousands of faces turned toward the distant platform where the speaker stands at a lectern beneath a giant eagle and swastika. Across the hall, above the crowd, stretches an enormous banner: “TOTALER KRIEG — KÜRZESTER KRIEG” (“Total war — shortest war”). Swastika drops flank the stage and uniformed formations line the front of the platform.',
        note: 'Note: the audience was selected by the Party — Goebbels privately called it “politically schooled”. The speech was broadcast to the nation and filmed for the newsreel.',
        footnotes: [
          'Stalingrad — the German Sixth Army surrendered there on 31 January – 2 February 1943, the war’s acknowledged turning point.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extracts from Joseph Goebbels’ Sportpalast speech, 18 February 1943, as broadcast throughout Germany.',
        body: 'The English maintain that the German people has lost its faith in victory. I ask you: do you believe, with the Führer and with us, in the final total victory of German arms? I ask you: are you resolved to follow the Führer through thick and thin in the struggle for victory, and to accept even the heaviest personal burdens? I ask you: do you want total war? Do you want it, if necessary, more total and more radical than we can even imagine it today? Are you agreed that whoever offends against the war effort shall lose his head? Do you want the government to see to it that in wartime everyone bears the same burdens, and that the burdens are distributed on broad shoulders and narrow alike? I have asked you; you have given me your answers. You are a piece of the nation, and your answers are the answers of the German people. You have told our enemies what they needed to hear, so that no illusions remain. Now, people, rise up — and storm, break loose!',
        footnotes: [
          'The ten questions — the speech put ten such questions to the hall, each answered with a roar of assent.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of wartime propaganda written by an academic historian and published in 2011.',
        body: 'The Sportpalast speech was propaganda contemplating itself in a mirror, and Goebbels was candid about it in his diary: the evening was “a lesson in how to make the people’s soul boil”, staged before an audience he had cast himself — party stalwarts, decorated soldiers, nurses, armament workers arranged for the cameras — whose unanimity was therefore both perfectly genuine and perfectly meaningless. As theatre it succeeded completely; as measurement it measured nothing, which was its purpose: the ten roared answers were offered to the nation, and to the regime’s wavering elite, as a plebiscite that made further sacrifice appear demanded from below rather than decreed from above. What the performance could not do was alter the war. “Total war” as policy — the closed luxury shops, the combed-out offices, the conscription of women announced with such fanfare — remained half-measures for another year, obstructed by the very leadership the speech was partly aimed at; and the security service’s soundings of real opinion, which Goebbels read attentively, registered admiration for the performance alongside a hardening privacy of judgement: people spoke of the speech, one report noted, “as of a great theatrical event” — connoisseurs now, not converts. Therein lies the speech’s significance for the historian of propaganda: it marks with precision the moment at which the regime’s word-magic, still technically perfect, began to work only on those who performed it.',
        footnotes: [
          'Security service (SD) soundings — the SS intelligence service’s secret reports on popular opinion.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the catastrophe of Stalingrad weeks earlier; the turning tide of the war and Allied bombing; the regime’s need to rally the home front; Goebbels’ campaign for the radicalisation of the war effort)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph in February 1943: Stalingrad’s shock, the war’s reversal, and the staged mass meeting as the regime’s response. Details of the source (the banner’s slogan, the packed and selected audience, the filmed platform) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the power and limits of Nazi propaganda in wartime.',
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
          'Usefulness must be judged relative to the stated inquiry. Source 2 is the propaganda itself at maximum intensity: direct evidence of technique — the catechism of questions, the staged plebiscite (“your answers are the answers of the German people”), the fusion of threat and solidarity — and of the message the regime needed in 1943; useless as evidence of what Germans actually thought, which is itself instructive. Source 3 supplies what the transcript cannot: the staging (the cast audience, Goebbels’ diary), the policy vacuum behind the words, and the SD’s soundings of reception — the “theatrical event” verdict that measures propaganda’s late-war limits; as interpretation its pointed thesis invites weighing. Strong answers see the pairing as performance and review, and note that the historian’s access to the regime’s own secret self-assessment (diary, SD reports) is what converts the speech from monument into evidence. Comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the role of propaganda in sustaining the German war effort. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of wartime propaganda’s role in all three sources', marks: '3' },
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
          'Theme first: the set represents wartime propaganda at its most technically accomplished and its least effective — the staged frenzy (Sources 1 and 2) and the connoisseur public behind it (Source 3). Strong responses test the extent with own knowledge: the pre-Stalingrad record (victory euphoria 1940, the propaganda of invincibility that made the reversal harder to absorb), the competing sustainers of the war effort the set omits — terror radicalised inward (the People’s Court’s wartime executions), the genuine fear of the Red Army and of Allied bombing, Speer’s armaments mobilisation — and the later arc: “strength through fear” propaganda, the promised miracle weapons, the Werwolf fantasy. The evaluated omission is central: the set shows the home-front performance but not the terror and the material realities that actually kept Germans fighting, so it risks crediting propaganda with what fear and necessity accomplished. For higher marks: balance of source evidence and own knowledge and an explicit verdict on extent.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 51 — Himmler’s SS  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-himmler-ss',
    title: 'The state within the state: Himmler’s SS',
    themeKey: 'ss',
    themeSentence:
      'From a bodyguard of a few hundred, Himmler built the SS into an empire of police, terror, ideology and economics — the institution in which the regime’s racial fantasies became administration.',
    tags: ['p4', 'i-himmler'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of Heinrich Himmler, Reichsführer-SS, and his staff inspecting the enlargement of the concentration camp at Dachau, 1936. Prisoners are at work on the scaffolding of the new buildings.',
        image: {
          src: 'sources/himmler-dachau.jpg',
          alt: 'Himmler and a group of SS officers inspect new camp buildings under construction at Dachau in 1936, with prisoners at work on the scaffolding',
          credit: 'Bundesarchiv, Bild 152-08-05 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a group of black-uniformed SS officers standing on open ground before a long two-storey building under construction, its brick walls rising within a web of wooden scaffolding. Small figures — prisoners in work clothes — are visible labouring on the scaffolds and rooflines. An SS flag flies from a pole at the right; more officers stand in a loose group in the foreground, hands clasped behind their backs, watching.',
        footnotes: [
          'Reichsführer-SS — Himmler’s title as head of the SS.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a speech by Heinrich Himmler to senior SS leaders, 1937, on the character and tasks of the SS. The speech was delivered in closed session and printed for internal circulation.',
        body: 'We are a National Socialist order of soldiers of Nordic blood, and a sworn community of kindred. We march by laws that we have laid upon ourselves: purity of blood, which we guard in every man’s marriage; loyalty, which is the honour of the SS man; obedience, which asks no reasons; and hardness — for we must be hard, gentlemen, hard against ourselves first of all. Where others see a police force, we are building something greater: the protective corps of the Reich, which watches over its inner health as the army watches its frontiers. The concentration camp is a part of this watch, and I say plainly: it will be needed for years yet, for the enemy — the Bolshevik, the Jew, the incorrigible criminal, the parasite on the people’s body — does not disappear because he is quiet; he waits. Our task is that Germany shall never again experience a November 1918. For that, the SS must be feared where it must be feared, loved where it should be loved, and above all never popular: an order does not court the crowd. In a hundred years, if we do our work, men will look back on this corps as the seed-bed of a race and the guarantor of the Reich. That is worth more than applause.',
        footnotes: [
          'November 1918 — the revolution and armistice, the nationalist code for collapse from within.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of the SS written by an academic historian and published in 2012.',
        body: 'The SS grew by a logic no other Nazi institution matched: wherever the regime created a task too lawless for the state and too vital for the Party, Himmler collected it. The bodyguard became a corps; the corps, after supplying the executioners of June 1934, won independence and the camps; in 1936 the whole German police passed under the Reichsführer’s command, fusing state power with a private order sworn to Hitler; by 1939 the Security Service, the criminal police and the Gestapo had been merged into a single Reich Security Main Office, and the Death’s Head units guarding the camps stood beside a growing armed SS that would end the war at nearly a million men. The empire had an economics — quarries, brickworks and, in wartime, the hired-out labour of prisoners, run by the SS’s own business administration — and it had an ideology, administered like a sacrament: the marriage approvals, the ancestral research, the Wewelsburg rituals, the doctrine of hardness rehearsed in a hundred closed speeches. It is tempting to file these as absurdities, but the historian must resist: the pseudo-religion was the institution’s operating system. It selected men, bound them, and licensed them; and when the war in the east opened the space the doctrine had always implied, it was this apparatus — police, camps, ideology and economics in one obedient structure — that proved capable of administering genocide as a routine of state. The SS was the regime’s laboratory: the place where the sovereignty of race over law was not preached but practised, first on thousands, then on millions.',
        footnotes: [
          'Reich Security Main Office (RSHA) — the merged SS-police headquarters created in 1939.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Himmler’s command of the unified German police from 1936; the SS’s control of the camps since 1934; Dachau as the model camp being enlarged by prisoner labour; the consolidation of the SS state)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph in 1936: the SS in sole command of the camp system, Himmler newly master of the entire German police, Dachau the model camp being expanded — by the labour of its own prisoners — into a permanent institution. Details of the source (the inspecting officers, the prisoners on the scaffolding, the SS flag) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the nature of the SS.',
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
          'Usefulness must be judged relative to the stated inquiry. Source 2 is the institution’s self-understanding from its founder’s mouth, in closed session with no public to court: direct evidence of the SS’s ideology (blood, obedience, hardness), its self-image as an order rather than a police force, its enemies list and its horizon (“a hundred years”); its limits — a programmatic speech shows doctrine and aspiration, not practice, and even closed speeches perform leadership. Source 3 supplies structure and trajectory — the accumulation of police, camps, economics and armed formations, and the argument that the “pseudo-religion” was operationally central — with scholarly hindsight reaching to the genocide the 1937 speech only implies; as interpretation, its laboratory thesis invites weighing. Strong answers note the fit: the historian’s “doctrine of hardness rehearsed in closed speeches” is exactly what Source 2 preserves, letting the two sources authenticate each other. Comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of Heinrich Himmler and the SS in the development of the Nazi state, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the SS’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the significance of Himmler and the SS to the state’s development, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents the SS as inspecting master of the camps (Source 1), self-consecrated order (Source 2) and accumulating empire in which racial sovereignty was practised (Source 3). Strong responses assess significance with own knowledge: the purge of 1934 as the SS’s founding service, the 1936 police unification and 1939 RSHA, the camp system’s expansion and its economics, the Waffen-SS, and the wartime terminus — Einsatzgruppen, the camps of the genocide, the racial resettlement empire in the east — while weighing the SS against the state’s other pillars (Party, army, bureaucracy) and noting the polycratic competition it usually won. The set’s pre-war horizon is itself evaluable: nothing in it shows the genocide the institution would administer, so the sources capture the machine built and the doctrine loaded, but not the firing — an omission candidates should tie to the evaluation. Balance of source evidence and own knowledge is required at the top.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 52 — Göring and the Four-Year Plan  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-four-year-plan',
    title: 'Guns before butter: Göring and the Four-Year Plan',
    themeKey: 'four-year-plan',
    themeSentence:
      'The Four-Year Plan of 1936 put the economy on the road to war under Göring’s command — autarky, arms and a sprawling state industrial empire, purchased at the price of consumption, coherence and, for its victims, expropriation.',
    tags: ['p4', 'i-goering'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of Hermann Göring, Commissioner of the Four-Year Plan, at the ceremonial ground-breaking of the “Reichswerke Hermann Göring” steel complex at Linz, May 1938.',
        image: {
          src: 'sources/reichswerke-1938.jpg',
          alt: 'Göring mounts a garlanded platform beside a large sign reading "Reichswerke Hermann Göring Linz" at the 1938 ground-breaking, a swastika flag above',
          credit: 'Bundesarchiv, Bild 183-H06156 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows Göring, in a pale uniform, climbing the steps of a small garlanded platform built against a corrugated structure. Beside the platform a large white sign reads, in heavy capitals: “REICHSWERKE ‚HERMANN GÖRING‘ LINZ”. Fir garlands wind the rails and roofline, and a swastika flag flies from a mast above.',
        note: 'Note: the state-owned Reichswerke were founded in 1937 to smelt Germany’s low-grade domestic ores that private industry judged uneconomic, and grew by absorbing plants in annexed Austria and, later, occupied Europe into one of the largest industrial complexes in the world — named, like much else, after its commissioner.',
        footnotes: [
          'Autarky — economic self-sufficiency, the aim of replacing imports with domestic substitutes.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extracts from Adolf Hitler’s secret memorandum on the tasks of the Four-Year Plan, written for Göring and a handful of others, August 1936. The memorandum remained unpublished until after the war.',
        body: 'Politics is the conduct and course of the historical struggle for life of the peoples. The aim of these struggles is survival. Germany will as always have to be regarded as the focal point of the Western world against the attacks of Bolshevism. I do not regard this as an agreeable mission but rather as a handicap and encumbrance upon our national life, regrettably resulting from our disadvantageous position in Europe. We cannot, however, escape this destiny. It is not the aim of this memorandum to prophesy the time when the untenable situation in Europe will become an open crisis. I only want, in these lines, to set down my conviction that this crisis cannot and will not fail to arrive. The extent and pace of the military exploitation of our forces cannot be made too large or too rapid. There has been time enough in four years to find out what we cannot do. Now we have to carry out what we can do. I thus set the following tasks: I. The German army must be operational within four years. II. The German economy must be fit for war within four years.',
        footnotes: [
          'Memorandum — Hitler wrote almost nothing down; this document is one of the few programmatic texts of his rule.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from an economic history of the Third Reich written by an academic historian and published in 2006.',
        body: 'The Four-Year Plan marks the point at which the primacy of rearmament stopped being disguised. Schacht’s recovery had been war-directed from the first, but it kept the forms of a market economy; the Plan of September 1936, with Hitler’s secret memorandum as its charter and Göring — an economic illiterate armed with total authority — as its commissioner, subordinated everything to the timetable of readiness. Its record as economics was mixed to poor: the synthetic fuel and rubber programmes devoured investment for modest yields, the domestic-ore steel of the Reichswerke cost multiples of the world price, and the autarky drive institutionalised the shortages — of labour, steel, foreign exchange and fats — it was meant to abolish. But to grade the Plan as economics is to mistake its subject. Its achievements were exactly those Hitler’s memorandum demanded: by 1939 military spending had reached a share of national income no peacetime economy had ever borne, the Wehrmacht had its operational armament, and the industrial map had been redrawn around war — with a state sector, gathered under Göring’s name, that answered to no shareholder and swallowed, through “Aryanisation” at home and annexation abroad, whatever it required. The Plan’s deepest logic was the memorandum’s: an economy built for a war that must come soon, because the armament race it had started could not be sustained — a machine that manufactured, along with guns, the necessity of using them.',
        footnotes: [
          '“Aryanisation” — the forced transfer of Jewish-owned businesses and property.',
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
              { descriptor: 'Correctly identifies the origin of Source 1 (a press photograph of Göring at the Reichswerke ground-breaking ceremony, Linz, May 1938)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains the purpose of the source with detailed reasons specific to it (e.g. to publicise the Four-Year Plan’s conquest of “impossible” economic tasks — the state smelting ores private industry refused — and to display the commissioner personally founding the empire that bore his name, in newly annexed Austria), supported by details from the source', marks: '3' },
              { descriptor: 'Explains the purpose with some accurate and relevant support from the source', marks: '2' },
              { descriptor: 'Identifies a purpose in general terms', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'Origin refers to provenance: candidates should identify at least two details of who/what created the source, when and what type it is. For purpose, generic answers (“to show a ceremony”) are insufficient for full marks: the purpose should be tied to the Plan’s propaganda — autarky as triumph of will over economics — and to the personal empire-building the sign itself proclaims. Supporting details might include the garlanded platform, the flag, and the works’ name in capitals beside the arriving commissioner.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the purpose of the Four-Year Plan. In your answer, refer to the origin of each source.',
        marks: 6,
        key: [
          {
            rows: [
              { descriptor: 'Compares the perspectives of both sources, identifying similarities and differences supported by detailed, accurate and relevant evidence, with clear reference to the origin of each source', marks: '6' },
              { descriptor: 'Compares the perspectives, identifying similarities and differences with mostly accurate and relevant evidence and general reference to origin', marks: '5' },
              { descriptor: 'Compares the perspectives, identifying similarities or differences with some evidence from both sources and some reference to origin', marks: '4' },
              { descriptor: 'Describes the perspective of each source with some evidence; origin identified only', marks: '3' },
              { descriptor: 'Describes the perspective of one source, or outlines both with limited evidence', marks: '2' },
              { descriptor: 'Provides a general comment about the perspective of one or both sources with limited or no evidence', marks: '1' },
            ],
            subtotal: 6,
          },
        ],
        notes:
          'Compare includes contrast. The essential similarity is agreement on the fact that mattered: both sources present the Plan as preparation for a war regarded as certain — the memorandum decrees army and economy “fit for war within four years”, the historian reads the Plan as “the primacy of rearmament” undisguised; the historian’s interpretation is, unusually, the source’s own stated intent. The differences: Source 2 frames the war as destiny — a defensive, ideological necessity against Bolshevism — and admits no economic cost; Source 3 weighs the costs (uneconomic autarky, shortages, expropriation) and inverts the frame — the Plan as a machine that manufactured the necessity of war. Reference to origin is required: a secret programmatic memorandum from the dictator’s hand in 1936, never meant for the public, against an academic economic history of 2006 with the full statistical record. Both similarities and differences are expected for the top descriptors.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of the Four-Year Plan in the development of the Nazi state, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the Plan’s significance in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the Plan’s significance to the state’s development, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents the Plan as spectacle (Source 1), programme (Source 2) and system (Source 3) — the economy remade around a war held certain. Strong responses assess significance with own knowledge: the defeat of Schacht and the “guns before butter” choice, Göring’s rise and the polycratic pattern of commissioner-empires, the Plan’s entanglement with persecution (Aryanisation as economic policy, the 1938 decrees) and with expansion (the resource logic pointing at Austria and Czechoslovakia, then at conquest), and the wartime continuation under Speer. The counter-weights belong in the assessment: the Plan’s targets were part-fictions, the economy in 1939 was strained rather than ready, and historians debate how far economic pressure drove the war’s timing — candidates may engage this and defend a position. Omissions earn marks only when tied to evaluation — e.g. no worker, consumer or expropriated owner appears, so the Plan’s human costs are present only as the historian’s categories. Balance of source evidence and own knowledge is required at the top.',
      },
    ],
  },
];
