import type { SourceSet } from './types';

// Source sets 20–21 for Elective 1: The changing European world since 1945.

export const EUR_SOURCE_SETS_5: SourceSet[] = [
  // ------------------------------------------------------------------
  // EUR SET 20 — The exception: Romania, December 1989  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-romania',
    title: 'The exception: Romania, December 1989',
    themeKey: 'eur-romania',
    themeSentence:
      'Alone in the year of peaceful revolutions, Romania’s ended in gunfire — a personal dictatorship without a reform wing, overthrown in days and shot on Christmas Day, leaving questions the other revolutions never had to ask.',
    tags: ['eur-p2'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of demonstrators facing troops with riot shields and tanks on Magheru Boulevard, Bucharest, during the Romanian Revolution, December 1989.',
        image: {
          src: 'sources/bucharest-1989.jpg',
          alt: 'A crowd of demonstrators faces a cordon of troops with white riot shields and tanks across Magheru Boulevard, Bucharest, December 1989',
          credit: 'Romanian National History Museum, by attribution, via Wikimedia Commons',
        },
        body: 'The photograph, taken from within the crowd, shows demonstrators — young men bareheaded or in winter caps — facing a cordon of troops drawn shoulder to shoulder across the boulevard behind white riot shields, with tanks and an army truck closing the road behind them. The apartment blocks of central Bucharest line both sides of the street.',
        note: 'Note: protest spread from Timișoara to Bucharest in the week before Christmas 1989. On 21 December Ceaușescu’s staged rally turned against him; he fled the next day, and after days of confused fighting — over a thousand died — he and his wife were tried by a drumhead court and shot on 25 December.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the recollections of a Bucharest engineering student who witnessed Ceaușescu’s final rally, 21 December 1989, recorded for an oral history project, 1994.',
        body: 'We were bussed in from the institute as always — flags handed out at the door, the front rows salted with the reliable ones, the portraits on their poles. The Comrade began as he had begun for twenty-five years, the balcony, the microphones, the promises of raised pensions, and we performed as we had performed for twenty-five years. Then, from the back — I will swear it began at the back, near the Athénée — a sound none of us had ever heard in that square: booing. Whistling. Someone screaming “Ti-mi-șoa-ra!” The loudspeakers crackled and went dead, and in the silence you could hear the sound growing, and we looked at one another — strangers, colleagues, the reliable ones too — and understood in one second that everyone had been pretending, all of us, for our whole lives. On the balcony he raised his hand, patting the air, an old man telling the sea to sit down. “Hello. Hello. Comrades, be quiet.” The television cut away, and that was the mistake, because the whole country saw the screen go black and knew. My mother telephoned me that evening from Cluj and said only: did you see it stop? By the time the transmission resumed, nobody in Romania was pretending any more.',
        footnotes: [
          'State television’s three-minute interruption of the live broadcast — showing the dictator’s stunned face before the cut — is widely regarded as the revolution’s decisive moment.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the 1989 revolutions written by a historian and published in 2019.',
        body: 'Romania was the exception that tested every rule of 1989, and the rules explain the exception. Elsewhere the year’s peaceful outcomes rested on three conditions: a party leadership willing to negotiate, an opposition organised enough to negotiate with, and a Moscow that had renounced force. Romania had only the third. Ceaușescu’s sultanism had hollowed the party into a family firm — there was no Romanian Gomułka or reform wing to offer a round table — and his police state had prevented any Solidarity or Charter 77 from forming; when the explosion came, there was nothing between the dictator and the street. The result was the year’s only violent transfer: days of shooting attributed to “terrorists” who were never identified, a trial lasting an hour, and an execution timed for Christmas — after which the men who inherited power were the party’s second tier, recycled overnight into the National Salvation Front. That inheritance is why Romania’s revolution remained contested as the others did not: whether December was a popular rising, a coup within the apparatus riding a rising, or both at once is still argued from the archives — and the very need to ask marks the difference between overthrowing a system and beheading one. The other revolutions dismantled their regimes; Romania shot its regime’s owner and kept much of the house.',
        footnotes: [
          'Ion Iliescu, the Front’s leader and Romania’s first post-communist president, was a former Central Committee secretary sidelined by Ceaușescu.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the collapse of the Communist Bloc through 1989, the Timișoara protests and their repression, the Bucharest rising of 21–22 December against Ceaușescu’s dictatorship, the army and security forces confronting crowds before the regime fell)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details represented in and/or surrounding the source', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. Context: December 1989 — the last and bloodiest of the year’s revolutions: Timișoara’s protests spreading to the capital, the staged rally collapsing, and crowds facing shields and armour in the days before and after Ceaușescu’s flight. Specific details from the photograph — the shield cordon and tanks against an unarmed crowd, the central boulevard setting — should be connected to those circumstances. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Discuss the reliability of Sources 2 and 3 as evidence of the fall of the Ceaușescu regime.',
        marks: 7,
        key: [
          {
            rows: [
              { descriptor: 'Identifies the reliability of Source 2 (e.g. vivid eyewitness testimony of the decisive rally, but recollected five years on and shaped into a story)', marks: '1' },
              { descriptor: 'Identifies the reliability of Source 3 (e.g. a retrospective scholarly analysis comparing 1989’s cases, frank about what remains contested, but interpretive)', marks: '1' },
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
          '“Discuss” requires candidates to identify issues and provide points for and/or against; reasoning must go beyond “it is biased” to the origin factors: author, motive, bias, time, place and purpose. Source 2 carries oral history’s strengths — the staging of compulsory enthusiasm, the crowd’s turn, the television cut confirmed by the record — and its weaknesses: five years’ distance, the polish of a told-and-retold story, one vantage point in a square of a hundred thousand, and hindsight’s certainty (“everyone had been pretending”) about what was understood in the moment. Source 3 offers the comparative framework and is candid that the coup-or-revolution question remains open; its three-conditions model is an interpretation, and its epigrams tidy a chaos the archives have not fully resolved. Candidates treat the sources in parallel; they do not have to evaluate or compare the sources against each other to achieve full marks. Not all points are required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the collapse of communism in eastern Europe in 1989. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of communism’s collapse in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Evaluation',
            rows: [
              { descriptor: 'Evaluates clearly the extent to which the sources represent the collapse of 1989, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set does show', marks: '7' },
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
          'The theme should lead: the set represents 1989 through its hardest case — force met by crowds (Source 1), compulsory belief collapsing in a single sound (Source 2), and the historian’s conditions for why this revolution alone turned bloody (Source 3). Strong responses set Romania against the year’s pattern with own knowledge: Poland’s round table and June election, Hungary’s border, Leipzig and the Wall, the velvet revolution — and Gorbachev’s renunciation of force as the common permission. The strongest answers use the exception to test the rule: the set implies the peaceful revolutions depended on structures Romania lacked, a claim candidates can assess. Omissions earn marks only when tied to evaluation — e.g. the set shows no Securitate or army perspective on the days of shooting, and the National Salvation Front’s takeover is asserted rather than evidenced, which matters for the coup question. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // EUR SET 21 — The last war of the century  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'eur-ss-kosovo',
    title: 'The last war of the century: Kosovo, 1999',
    themeKey: 'eur-kosovo',
    themeSentence:
      'NATO’s war over Kosovo — fought from the air, justified by humanity, waged without a UN mandate — ended the Yugoslav decade and set the precedent Europe has argued about ever since.',
    tags: ['eur-p3'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A US Air Force photograph of the tent city of Camp Hope, built for Kosovar refugees near Fier, Albania, May 1999.',
        image: {
          src: 'sources/kosovo-camp-1999.jpg',
          alt: 'Aerial view of hundreds of army tents in ordered rows on the Albanian plain — Camp Hope refugee camp under construction, May 1999',
          credit: 'Staff Sgt. Chris Steffen, US Air Force, 1999. Public domain, via Wikimedia Commons',
        },
        body: 'The aerial photograph shows a refugee camp under construction on the Albanian plain: hundreds of army tents in ordered blocks along a central road, white administration marquees and stacked supplies at the entrance, and freshly graded ground marked out for hundreds more. Figures move between the rows; empty farmland stretches to the hills.',
        note: 'Note: during the Kosovo war of March–June 1999 some 850,000 Kosovar Albanians — around half the province’s population — were driven or fled into Albania and Macedonia. Camp Hope was built by American forces as part of the NATO relief operation that accompanied the bombing campaign.',
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a speech by a western head of government defending the NATO campaign, April 1999.',
        body: 'This is a just war, based not on territorial ambitions but on values. We have learned twice this decade, in Bosnia, what happens when part of Europe is abandoned to ethnic slaughter: the graves fill while the communiqués are drafted. No one is threatening the territory of a NATO state; that is precisely the point. We are fighting for the principle that a dictator may not, at the end of the twentieth century, in Europe, empty a province of its people — burn the villages, burn the identity papers, drive a million human beings into the mountains — and call it an internal affair. I do not pretend the choice is clean. War from the air kills the innocent too, and the charge that we act without a Security Council resolution deserves an answer: the answer is that a Russian veto cannot be permitted to make the United Nations the protector of ethnic cleansing. If we walk away, we tell every tyrant on this continent’s edge that the words “never again” expire at a border. The refugees in the camps of Albania and Macedonia will go home. Milošević’s forces will leave Kosovo. And Europe will have established — late, imperfectly, but at last — that its peace rests on justice, not merely on frontiers.',
        footnotes: [
          'The speech reflects the “doctrine of the international community” argued by Tony Blair at Chicago in April 1999.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Yugoslav wars written by a historian and published in 2021.',
        body: 'Kosovo closed the Yugoslav decade with the West’s tidiest victory and its untidiest precedent. The tidy part: after seventy-eight days of bombing — and, decisively, the threat of ground invasion plus the withdrawal of Russian cover — Milošević capitulated; the refugees returned within weeks, the fastest reversal of an ethnic cleansing in the century; KFOR occupied the province; and the defeat began the unravelling that ended with the dictator’s fall in Belgrade a year later and his death in a cell at The Hague. The untidy part was everything the victory taught. The campaign was waged without Security Council authority, and its advocates’ doctrine — sovereignty forfeited by atrocity — was noted carefully in capitals that would later cite it for other purposes; the bombing’s errors, from the refugee convoy at Djakovica to the Chinese embassy, sat awkwardly beneath the language of values; the cleansing accelerated massively after the bombs began, which defenders call Milošević’s plan unmasked and critics call the intervention’s own harvest; and the province NATO saved expelled much of its Serb minority under KFOR’s nose, then declared an independence (2008) that half of Europe still does not recognise. Kosovo was the humanitarian war’s best case — and the best case bequeathed the hardest questions.',
        footnotes: [
          'KFOR — the NATO-led Kosovo Force, deployed from June 1999.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the Kosovo war of 1999 and Serbian ethnic cleansing driving some 850,000 Kosovar Albanians into Albania and Macedonia, NATO’s bombing campaign and parallel relief operation, camps like Camp Hope built by allied forces)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details represented in and/or surrounding the source', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Provides detailed reason/s for the purpose of the source (e.g. official military photography documenting and publicising the relief effort — the ordered tent city as evidence that NATO was rescuing the war’s victims, the humanitarian face of the bombing campaign)', marks: '2' },
              { descriptor: 'Provides simple reason/s for the purpose of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          '“Outline” means candidates provide the characteristics or features but not the reasons why. “Account for” requires candidates to state the reasons for — here, the possible reasons the source was created. Generic purposes (“to inform”) are not enough for full marks: the purpose must be specific to this source. Context: spring 1999 — the expulsion of half of Kosovo’s Albanian population during NATO’s air war, and the allied camps rising on the Albanian plain to hold them. Specific details from the photograph — the military order of the rows, the scale and the prepared ground for more, the official vantage from the air — should be connected to those circumstances, including the image’s function within NATO’s own presentation of the war. Not all points are required for full marks.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding NATO’s intervention in Kosovo. In your answer, identify both similarities and differences.',
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
          'In this context “compare” includes contrast: both similarities and differences are expected. Key similarities: both sources accept the war’s outcome — the refugees returned, Milošević beaten — and both take the Bosnian failure as the intervention’s background; strikingly, both also acknowledge costs (the leader concedes the innocent killed and the absent mandate; the historian catalogues them). The central differences: Source 2 argues forward from principle — values over frontiers, the veto answered, the precedent intended — as advocacy in mid-war; Source 3 argues backward from consequences — the precedent “noted carefully” by others, the acceleration of the cleansing under the bombs, the expelled Serbs and the contested independence — and withholds the vindication the speech claims, calling the best case the bearer of the hardest questions. Candidates may account for the difference through origin (a war leader persuading publics in April 1999 versus a historian with two decades’ sequel), although accounting is not required. Reward any legitimate similarity or difference supported from the sources.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of the Kosovo war for Europe after the Cold War, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the war’s significance for post-Cold War Europe in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the significance of the Kosovo war for Europe, using detailed, accurate and relevant evidence from all three sources and the broader period of study, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'The theme should lead: the set represents Kosovo as the point where post-Cold War Europe defined — and divided over — what its order rested on: the humanitarian machinery (Source 1), the doctrine of values over sovereignty (Source 2), and the historian’s ledger of victory and precedent (Source 3). Strong responses assess significance with own knowledge: Bosnia and Srebrenica as the shaming precedent, Racak and Rambouillet on the road to war, the seventy-eight days and Russia’s fury (the Pristina airport dash), Milošević’s fall in 2000 and The Hague, KFOR’s long occupation and the 2008 independence — and the wider stakes: NATO’s first war, the EU’s renewed push for its own defence and enlargement as stabilisation, and the sovereignty-versus-intervention argument that later crises reopened. Omissions earn marks only when tied to evaluation — e.g. no Serb or Russian voice appears in the set, which matters for a war fought over exactly whose account of sovereignty prevails. For higher marks candidates must balance source evidence and own knowledge; a source-by-source recount caps in the middle bands.',
      },
    ],
  },
];
