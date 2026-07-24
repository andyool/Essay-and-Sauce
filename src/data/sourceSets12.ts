import type { SourceSet } from './types';

// Source sets 45–48: shaping minds and staging consent in the Nazi state.

export const SOURCE_SETS_12: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 45 — Schools under the swastika  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-education',
    title: 'Formation: schools under the swastika',
    themeKey: 'education',
    themeSentence:
      'The regime set out to make the school an instrument of formation — teachers enrolled, curricula rewritten around race and nation, and the classroom ritualised — yet the reach of indoctrination always exceeded its grasp.',
    tags: ['p4'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of a girls’ school class and their teacher during a patriotic school ceremony, Germany, mid-1930s.',
        image: {
          src: 'sources/school-class.jpg',
          alt: 'A teacher and rows of schoolgirls stand at their desks giving the Hitler salute during a school ceremony in the mid-1930s',
          credit: 'Bundesarchiv, Bild 183-2007-0329-501 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a packed classroom during a ceremony. The teacher, a woman in dark dress with white collar, stands at the front beside her raised desk, right arm extended in the Hitler salute; before her, rows of girls — some no older than ten, others in their teens — stand at their desks, every right arm raised. Black-white-red banners hang at the front of the room.',
        footnotes: [
          'The Hitler salute (“German greeting”) — made compulsory in schools by decree from 1933.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the memoir of a Hamburg secondary-school teacher, published in West Germany in 1958, recalling his profession in the mid-1930s.',
        body: 'It did not happen at a stroke; that must be understood. It happened by Monday circulars. One week the greeting was prescribed at the beginning and end of every lesson; one week the new wall map arrived, with the lost territories printed in mourning black; one week the biology syllabus was reissued, and a man who had taught Mendel’s peas for twenty years found himself required to teach the “science” of race with diagrams from the ministry. My colleague L., who kept a photograph of Rathenau in his desk drawer, retired early “on health grounds”; the rest of us joined the NS Teachers’ League — ninety-seven in a hundred of us joined, whatever we privately thought, for the alternative was the end of one’s livelihood. And the children? They came to us at eight from flag parade, left us at four for the Hitler Youth, and knew, with the terrible practical wisdom of children, which teachers’ lessons could be repeated at home and which not. A boy of twelve said to me once, not insolently but as one stating a fact of nature: “Herr Studienrat, what you teach us about the Romans is all very well, but the Führer says the future belongs to us.” I record it because in one sentence it contained the whole system: I still held the chalk, but someone else held the future — and the children knew it.',
        footnotes: [
          'NS Teachers’ League (NSLB) — the Nazi professional organisation for teachers.',
          'Studienrat — the title of a German secondary-school teacher.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of education in the Third Reich written by an academic historian and published in 2006.',
        body: 'The National Socialist school was to be the foundry of the new German, and the regime equipped it accordingly: teachers herded into the NSLB (enrolment passed ninety-five per cent within three years) and vetted for reliability; Jewish teachers dismissed under the 1933 civil-service law and Jewish pupils driven out by stages; the timetable tilted toward physical training at the expense of academic subjects; history refounded as the epic of the Volk, biology as race doctrine complete with skull-measuring exercises, even arithmetic set to problems about the cost to the state of the “hereditarily ill”. Yet the foundry never quite reached its temperature. The teaching profession, largely nationalist by inheritance, accommodated readily but seldom fanatically — the NSLB complained ceaselessly of teachers who “lacked inner engagement” and taught the new content in the old spirit; parents and churches contested the ground (the fight over confessional schools was among the regime’s hardest domestic struggles); and the school itself was being hollowed from outside, its authority undercut by the Hitler Youth, which taught contempt for the schoolmaster along with everything else, and its standards sacrificed to drill — a decline lamented by the universities and, by the war years, by the armed forces’ own examiners. The classroom photographs of raised arms record obedience achieved. What they cannot record is the interior of a single raised arm — and there, on the evidence, the regime’s success was real, large, and never total.',
        footnotes: [
          'Confessional schools — church-run denominational schools, largely suppressed by 1939.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Explain how Source 1 reflects the circumstances of Germany after 1933.',
        marks: 3,
        key: [
          {
            rows: [
              { descriptor: 'Explains how the source reflects the circumstances of Germany after 1933 by connecting specific details of the source (the compulsory salute led by the teacher, the youngest children participating, the banners in the classroom, the ceremonial occasion) to accurate and specific contextual details (the coordination of schools, the decreed “German greeting”, the ritualisation of school life, the formation of the young for the regime)', marks: '3' },
              { descriptor: 'Explains the connection between the source and its circumstances with some accurate and relevant details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Explain” requires the why and/or how: candidates must connect the photograph’s details to the coordination of schooling after 1933 — the prescribed salute, patriotic ceremony as routine, the enlistment of teachers as leaders of ritual, the reach of the regime down to the youngest — rather than merely describe the scene. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying how far German schools were nazified.',
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
          'Usefulness must be judged relative to the stated inquiry. Source 2 gives the process from inside — the incremental circulars, the compulsory League, the purge of a colleague, the pupils’ double knowledge — texture no decree collection supplies; its limits: a memoir published in 1958, when German teachers had every motive to remember accommodation as reluctant and themselves as inwardly distant, recalled at twenty years’ distance. Source 3 supplies the aggregate — enrolment figures, curricular content, the contested ground of parents, churches and Hitler Youth, the verdict of real-but-never-total — with scholarly breadth, though its own formulations are interpretations to weigh. Strong answers note the interplay: the memoir is exactly the kind of retrospective self-presentation the historian must use critically, and the historian’s “lacked inner engagement” corroborates the memoir’s claim from the regime’s own complaints. Comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Assess the significance of the school in the Nazi attempt to shape the next generation, as represented in Sources 1, 2 and 3. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the school’s role in all three sources', marks: '3' },
              { descriptor: 'Identifies the representation in two of the sources', marks: '2' },
              { descriptor: 'Identifies the representation in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the school’s significance in the formation of the young, using detailed, accurate and relevant evidence from all three sources and the broader period, including omissions tied to an evaluation of what the set shows', marks: '7' },
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
          'Theme first: the set represents the school as ritualised (Source 1), accommodated from within (Source 2) and analysed as a real but incomplete instrument (Source 3). Strong responses assess the school’s weight against the other formative institutions with own knowledge: the Hitler Youth and BDM as the school’s rival and successor in the child’s day, the purged teaching profession and rewritten syllabus, elite institutions (Napolas, Adolf Hitler Schools), the expulsion of Jewish pupils as the classroom’s lesson in exclusion — and the limits: parental and confessional counterweights, falling standards, and the impossibility of measuring belief. The memoir’s schoolboy sentence (“the Führer says the future belongs to us”) can anchor the judgement that the school mattered most where it worked with the youth organisations, not against them. Omissions earn marks only when tied to evaluation — e.g. no pupil’s own voice appears except as remembered by a teacher. Balance of source evidence and own knowledge is required at the top.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 46 — The Nuremberg rallies  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-nuremberg-rallies',
    title: 'The theatre of unity: the Nuremberg rallies',
    themeKey: 'rallies',
    themeSentence:
      'The September rallies at Nuremberg were the regime’s liturgical calendar compressed into a week — a staged experience of unity, hierarchy and consecration that turned politics into worship and was filmed to make the staging permanent.',
    tags: ['p4'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the opening ceremony of the Nazi Party rally in the Luitpold Hall, Nuremberg, September 1933 — the first rally after the seizure of power.',
        image: {
          src: 'sources/nuremberg-luitpoldhalle.jpg',
          alt: 'The draped Luitpold Hall at the 1933 Nuremberg rally: Hitler and the party leadership stand before massed ranks, banners and a speaker\'s podium under spotlights',
          credit: 'Narodowe Archiwum Cyfrowe. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph shows the interior of a vast hall, its ceiling hung with white drapery and its columns wound with garlands, a great wreathed swastika high on the end wall. On the main floor, the party leadership stands in files before rows of chairs — Hitler at the front in a pale uniform, Goebbels and other leaders beside him — while a speaker addresses the hall from a flag-draped podium at the right, ringed by helmeted SS men. Massed formations with standards fill the tiered stands behind, and a newsreel camera films from the aisle.',
        footnotes: [
          'Luitpold Hall — the main congress hall of the Nuremberg rally grounds.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from the diary of an American foreign correspondent, written at Nuremberg during the party rally of September 1934.',
        body: 'I am beginning to comprehend, I think, some of the reasons for Hitler’s astounding success. He is restoring pageantry and colour and mysticism to the drab lives of twentieth-century Germans, and the Nuremberg week is its high mass. This morning’s opening ceremony in the great hall was more than a gorgeous show; it had something of the mysticism of an Easter service — the great banners, the sudden hush of thirty thousand as the leaders walked down the wide aisle, the ritual greetings, the symphony before the speeches. And tonight, in the stadium, the searchlights shot a hundred columns of blue light miles into the sky to make a cathedral over our heads, and I confess the effect was overwhelming even to a sceptic with a notebook. The old-timers here say I should have seen the faces in the crowd when He appeared — I did see them: the women especially, lifted, shining, as at the coming of a Messiah. Every day I ask the party men I meet what the programme is, what the policies are, and every day I get the same answer in different words: the Führer wills it. One comes away with the uneasy sense of having watched a nation not so much governed as enraptured — and of wondering what argument, what parliament, what foreign note can reach a people at prayer.',
        footnotes: [
          '“Cathedral of light” — the night-time effect created by anti-aircraft searchlights around the rally ground.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of political ritual in the Third Reich written by an academic historian and published in 2009.',
        body: 'Nuremberg was engineered, and the engineering is the point. Nothing about the September week was spontaneous: the liturgy was scripted to the minute and rehearsed for months; the “spontaneous” ovations were conducted; the city was dressed like a stage set and the participants drilled like a cast — half a million of them by the later rallies, housed in tent cities, moved by special trains, fed by field kitchens, their marches timed to converge before the cameras. For the cameras were the true congregation: Riefenstahl’s crews at the 1934 rally commanded pits, towers, rails and aircraft, and the film that resulted carried the experience — composed, perfected, cleansed of rain and boredom — to every cinema in Germany, so that the rally’s real audience was numbered not in hundreds of thousands but in tens of millions. What the machinery manufactured was an experience of the very things the regime claimed to embody: unity (the individual dissolved in formations), hierarchy (every rank in its place, one figure above all), and consecration (flags “blessed” by contact with the putsch’s Blood Flag). Participants’ letters and memoirs testify that the experience was genuinely moving — manufacture and sincerity are not opposites — and that was precisely its function: a week each year in which the Volksgemeinschaft, elsewhere a slogan, could be physically felt, and felt under discipline. The rallies did not argue the regime’s case. They replaced argument — and for six Septembers, replacement sufficed.',
        footnotes: [
          'Blood Flag (Blutfahne) — the flag carried in the 1923 putsch, used to “consecrate” new party banners.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that the movement is a disciplined, consecrated order — a party become a church-state, with the Führer at the centre of its ceremony)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the cathedral-like draping and garlands of the hall, the wreathed swastika above, the leadership ranged in ceremonial files with Hitler foremost, the SS guard around the podium, the massed standards, the newsreel camera recording the rite)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: the hall’s quasi-religious dressing, the hierarchy of placement, the discipline of the massed formations and the presence of the camera all convey the movement as ordered, sacred and centred on the leader. Full marks require specific reference to details of the source.',
      },
      {
        letter: 'b',
        text: 'Identify and account for the authors’ perspectives in Sources 2 and 3 towards the Nuremberg rallies.',
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
          'Each source is handled independently: identify the perspective, then state the possible reasons for it (motives, bias, time, place, purpose). Source 2: the rally as overpowering quasi-religious experience, observed with fascinated unease — the perspective of a sceptical outsider inside the spectacle, accounted for by his professional purpose (a correspondent recording impressions for himself and his readers), his presence in the crowd without membership of it, and the moment (1934, the regime consolidating, the machinery at full power). Source 3: the rally as engineered ritual whose sincerity was manufactured — accounted for by the historian’s retrospective access to the planning files, the film records and participants’ testimony, and an analytical purpose that asks how the effect was produced rather than what it felt like. Comparison between the sources is not required.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the relationship between the Nazi regime and the German people. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the regime–people relationship in all three sources', marks: '3' },
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
          'Theme first: the set represents the relationship as enraptured communion — staged (Source 1), experienced (Source 2) and engineered for reproduction (Source 3). Strong responses test the extent with own knowledge: the rallies’ selective cast (party formations, not a cross-section), the film’s reach against the reality of boredom, grumbling and nonconformity recorded in SOPADE and Gestapo reports, the coexistence of genuine enthusiasm (the Hitler myth, the acclaimed foreign-policy successes) with coercion, exclusion and the camps — none of which appears at Nuremberg. The evaluated omission is central: the rally shows the regime’s ideal relationship with its people, performed by its most committed members and then broadcast as if it were the nation — candidates who see that the set documents the performance rather than the relationship, and who use own knowledge to supply what the performance concealed, are working at the top band. Balance of source evidence and own knowledge is required; a source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 47 — Blood and soil  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-blood-and-soil',
    title: 'Blood and soil: the regime and the countryside',
    themeKey: 'rural',
    themeSentence:
      'The regime exalted the peasant as the racial wellspring of the nation and staged its devotion in vast harvest festivals — while its controls, prices and rearmament priorities left the real countryside overworked, short-handed and quietly draining away to the towns.',
    tags: ['p4'],
    era: 'late',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A private photograph taken by a participant at the Reich Harvest Thanksgiving Festival on the Bückeberg hill, near Hamelin, mid-1930s. Unlike the official press photographs, it was taken from within the crowd.',
        image: {
          src: 'sources/bueckeberg-crowd.jpg',
          alt: 'A private snapshot from inside the vast crowd on the Bückeberg at a Reich Harvest Festival, arms raised in salute across the hillside',
          credit: 'Private photograph, Bückeberg, 1930s. Via Wikimedia Commons',
        },
        body: 'The amateur photograph, slightly tilted and yellowed, shows the crowd on the open hillside from inside its own mass: heads and raised arms fill the frame to the horizon, men in hats and women bare-headed pressed together, nearly every visible arm stretched into the salute toward some point beyond the left of the picture. Rows of flagpoles line the slope in the far distance.',
        note: 'Note: the Reich Harvest Thanksgiving Festival (Reichserntedankfest) was held on the Bückeberg each October from 1933 to 1937, drawing crowds officially numbered at up to a million, brought by special trains from across rural Germany. Hitler walked up the hillside through a lane in the crowd — the “way through the people”.',
        footnotes: [
          'Salute — the raised-arm “German greeting”.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a letter written by a Lower Saxon farmer to his brother in America, 1936. The letter survived among the emigrant family’s papers.',
        body: 'You ask how the farmer stands under the new state, and I will give you the honest ledger, though you must burn the letter for the honest half. On the credit side: the debt collector no longer stands in the yard — the entail law means the farm cannot be seized nor sold, and prices are fixed so a man knows in spring what his rye will bring in autumn. They make much of us; we are the “nobility of the soil” now, and last October they took half the village by special train to the Bückeberg, where Marta saw the Führer at thirty paces and speaks of it yet. On the debit side, and say nothing: the same law that saves the farm binds it — the farm goes whole to Heinrich, and what of the other three, who must be paid off with nothing? The fixed price is fixed low, for the towns must eat cheap while they build their cannon; the Market Union tells me what to sow, what to deliver, when, and at what price, down to the eggs; and the young will not stay — Wilhelm’s two are gone to the aircraft works at Hanover for double the wage, and I work the harvest with an old man and a boy. They honour the peasant with festivals and take his sons with wages. I do not complain, brother; we eat, and the flag flies over a full barn. But between the speeches and the field there is a distance a townsman does not see.',
        footnotes: [
          'Entail law — the Reich Entailed Farm Law of 1933, which made hereditary farms indivisible and unsellable.',
          'Market Union — the Reich Food Estate’s marketing boards, which controlled agricultural prices and deliveries.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of Nazi agrarian policy written by an academic historian and published in 2013.',
        body: 'No sector received more ideology per hectare. The peasant stood at the centre of the Nazi imagination — the blood-source of the race, the antidote to the asphalt city — and the regime built him a unique apparatus: the Reich Food Estate regimenting every egg and hundredweight from farm gate to shop counter; the Entailed Farm Law freezing some 700,000 farms into hereditary, unsellable holdings; Goebbels’ cameras at the Bückeberg, where the regime assembled the largest crowds it ever gathered anywhere for any purpose — a million people on a hillside to watch the Führer bless the harvest. The economics beneath the liturgy ran the other way. Fixed prices favoured the urban consumer and the rearmament budget over the producer; the entail protected the farm by disinheriting most of the farmer’s children; the “battle of production” demanded more output from a countryside that rearmament was simultaneously stripping of labour — a shortfall of perhaps a quarter of a million agricultural workers by 1938, as the young followed the wages into the armaments towns. The flight from the land, which blood-and-soil ideology existed to reverse, accelerated through the very years of the great festivals. The regime honoured the peasantry as no German state had done, and subordinated it as none had dared: the festivals were real, the devotion often real — and the distance between the speeches and the field, as the farmers themselves put it, was the truest measure of what the honour was for.',
        footnotes: [
          'Reich Food Estate (Reichsnährstand) — the compulsory corporation controlling German agriculture.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the annual Reich Harvest Thanksgiving Festival on the Bückeberg from 1933; the regime’s blood-and-soil exaltation of the peasantry; the mass transport of rural Germany to the festival; Hitler’s “way through the people”)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the snapshot at the Bückeberg festival of the mid-1930s: the regime’s great rural spectacle, the crowds brought by special train, the cult of the peasantry. Details of the source (the hillside mass, the salute toward the unseen focus, the amateur vantage from inside the crowd) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the regime’s relationship with rural Germany.',
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
          'Usefulness must be judged relative to the stated inquiry. Source 2 is a farmer’s own double-entry account, written privately to a trusted recipient abroad (“burn the letter for the honest half”): direct evidence of how policy was experienced — security and honour credited, control, disinheritance and labour flight debited — with the fear of candour itself evidence of the times; its limits: one farm, one region, one year. Source 3 supplies structure and scale — the Food Estate, the entail statistics, the labour shortfall, the interpretive frame of honour-as-subordination — though it is an argument, and its economics-first emphasis is a choice. Strong answers note the striking convergence: the historian’s “distance between the speeches and the field” is the farmer’s own phrase and finding, which strengthens confidence in both. Comparison is not required for full marks; each salient point is rewarded.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the place of the peasantry in the Nazi state. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the peasantry’s place in all three sources', marks: '3' },
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
          'Theme first: the set represents the peasantry as celebrated and subordinated at once — the festival’s genuine mass devotion (Source 1), the farmer’s honest ledger (Source 2), the historian’s structural accounting (Source 3). Strong responses test the extent with own knowledge: the rural constituencies’ early and strong Nazi vote before 1933, Darré’s blood-and-soil ideology and the Reich Food Estate, the entail law’s double edge, the production battles and fat gap, the labour drain to rearmament — and the wartime sequel the set predates: foreign forced labourers replacing the departed sons on German farms. The set’s balance itself deserves evaluation: its three voices agree suspiciously well, and no unambiguously enthusiastic rural voice (of which there were many) speaks except through Marta at thirty paces — an omission candidates may tie to the set’s tilt. For higher marks: balance of source evidence and own knowledge and an explicit verdict on extent. A source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 48 — Voting under dictatorship  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-plebiscites',
    title: 'Voting under dictatorship: the plebiscites',
    themeKey: 'plebiscites',
    themeSentence:
      'The regime abolished free elections and then voted constantly — staged plebiscites whose engineered near-unanimity was itself the message, at home and abroad, though real consent lay somewhere inside the manufactured total.',
    tags: ['p4'],
    era: 'late',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: The official ballot paper for the plebiscite and Reichstag election of 10 April 1938, held throughout Germany and newly annexed Austria on the union (Anschluss) of the two countries.',
        image: {
          src: 'sources/ballot-1938.jpg',
          alt: 'The 1938 Anschluss plebiscite ballot: the question on reunification with a large pre-printed circle for Yes and a small circle for No',
          credit: 'Ballot paper, April 1938. Public domain, via Wikimedia Commons',
        },
        body: 'The printed ballot is headed “Volksabstimmung und Großdeutscher Reichstag” (Plebiscite and Greater German Reichstag) and asks, in heavy type: “Do you agree with the reunification of Austria with the German Reich accomplished on 13 March 1938, and do you vote for the list of our Führer Adolf Hitler?” Beneath the word “Ja” (Yes) stands a large circle, centred on the paper; to its lower right, in small type and with a circle half its size, stands “Nein” (No).',
        footnotes: [
          'Anschluss — the annexation of Austria to Germany, March 1938.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from a despatch by the correspondent of a Swiss newspaper, Vienna, 11 April 1938, the day after the plebiscite.',
        body: 'The result was announced last night and surprised no one: better than ninety-nine in a hundred for the Führer and the accomplished fact. The reader in a free country will ask how such a figure is made, and the answer is: openly, and in layers. There was, first, the campaign — a fortnight in which no wall, window, wireless hour or church door was without its Yes, and the No existed nowhere but on the ballot itself, where the printer had already rendered his verdict in the sizes of the circles. There was, second, the polling day, on which the secrecy of the vote was a courtesy declined by the prudent: in many stations the booth stood apart like a confession of guilt, and the voter who insisted on it did so under the eyes of block warden and SA teller, who keep good lists. Some ballots, it is credibly reported, went numbered on the back. And there was, third — this must be written too — the genuine article. Whoever stood, as I did, in the Heldenplatz three weeks ago among a quarter of a million delirious Viennese knows that no teller invented that roar. The regime’s arithmetic is dishonest in the way of all its arithmetic: it takes a real majority, adds fear, subtracts the disappeared — the Jews of this city may neither vote nor be counted, and their absence, too, is a result — and prints a unanimity no free people has ever produced. The figure is false. What it measures is not.',
        footnotes: [
          'Heldenplatz — the Vienna square where Hitler proclaimed the Anschluss to a vast crowd in March 1938.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a study of elections and plebiscites under the Nazi regime written by an academic historian and published in 2017.',
        body: 'A dictatorship that had extinguished the free vote within eighteen months of taking office proceeded to hold more national votes than the Republic it replaced — four plebiscites and as many one-list Reichstag “elections” between 1933 and 1938, each returning totals that climbed from the merely implausible to the frankly liturgical: 95 per cent for leaving the League of Nations in 1933, 90 for the merged headship of state after Hindenburg’s death — a result the regime privately read as a setback — 99 for the remilitarised Rhineland, 99 for the Anschluss. The question historians must ask of these numbers is not whether they were honest — the apparatus of pressure, surveillance and outright falsification is well documented — but why a regime with no need of votes wanted them so badly. The answers reach into the dictatorship’s nature. The plebiscite disciplined the apparatus (every district’s total was a performance review of its Gauleiter); it manufactured, for foreign chancelleries, the appearance of a nation solid behind each accomplished fact; and it enrolled every citizen, once a year or so, in a public act of assent — the polling station as the Winter Relief tin writ large, where abstention itself was legible. Above all it fed the regime’s own myth: the Führer as executor of the people’s single will required the people, periodically and measurably, to have one. That the true level of consent was high — on the great foreign-policy questions, very high — the opinion reports leave little doubt. The plebiscites were not evidence of it. They were the ritual by which measurable consent was converted into displayed unanimity, and the difference between those two things is the difference between a people and a congregation.',
        footnotes: [
          'Gauleiter — the Party’s regional leaders.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that only one answer is expected — the vote is an act of assent to the Führer and the accomplished union, not a choice)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the leading form of the question — approving an act already “accomplished” and the Führer’s list in a single breath — the great centred circle for Yes against the small offset circle for No, the possessive “our Führer” printed into the state’s own ballot)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim. “Explain” requires the how: candidates should decode the ballot’s design — the fused double question, the accomplished fact, the typographical rigging of the circles, the language of devotion in an official form — as instruments that convert a vote into an acclamation. Full marks require specific reference to details of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the meaning of the plebiscite results. Account for the differences between them.',
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
              { descriptor: 'Accounts for the differences by providing detailed reasons related to the origin of each source — author, motive, bias, time, place, and purpose', marks: '3' },
              { descriptor: 'Accounts for the differences by providing some reasons related to origin', marks: '2' },
              { descriptor: 'Provides a simple or general reason for the differences', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'A strong similarity — and candidates should be rewarded for seeing how unusual it is: both sources hold the double judgement that the figures were false AND that real consent lay beneath them (“The figure is false. What it measures is not”; “measurable consent… converted into displayed unanimity”). The differences are of scope and method: Source 2 reconstructs one plebiscite from street level — the campaign, the watched booth, the numbered ballots, the excluded Jews — as eyewitness journalism within a day of the event; Source 3 sets the whole series in system, asking why the regime wanted votes at all and answering with functions (discipline, display, myth) no correspondent could yet see. Accounting from origin: a Swiss journalist writing for a free foreign readership from inside the pressure; a historian in 2017 with the opinion reports and eighty years of scholarship. Both similarities and differences are required for full comparison marks.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which the historical interpretations presented in all three sources reflect the reality of popular support for the Nazi regime. In your answer, refer to all three sources and your own knowledge of the period.',
        marks: 10,
        key: [
          {
            rows: [
              { descriptor: 'Assesses clearly the extent to which the interpretations reflect the reality of popular support, engaging with the biases, arguments and perspectives within the sources and testing them against alternative viewpoints and events from across the period, with detailed, accurate and relevant evidence from all three sources and own knowledge', marks: '9–10' },
              { descriptor: 'Assesses the interpretations against the historical record with accurate and relevant evidence from all three sources and own knowledge', marks: '7–8' },
              { descriptor: 'Explains the interpretations in at least two sources with some accurate and relevant own knowledge', marks: '5–6' },
              { descriptor: 'Outlines the view of popular support in at least one source with some relevant evidence', marks: '3–4' },
              { descriptor: 'Identifies content from one or more sources and/or provides a general comment with limited evidence', marks: '1–2' },
            ],
          },
        ],
        notes:
          'The set stages the problem of measuring consent under dictatorship: the regime’s own instrument of display (Source 1), the eyewitness dissection that still concedes the “genuine article” (Source 2), and the systemic reading of ritual unanimity (Source 3). Candidates should identify the interpretations, group the sources — noting that Source 1 is the very artefact the other two interpret — and test them against the wider record: the last free elections (the Nazis never above 37.3 per cent), the Saar plebiscite of 1935 (90.8 per cent under international supervision — the strongest genuine result), SOPADE and Gestapo opinion reports with their picture of consent layered over grumbling, the acclaimed foreign-policy triumphs against the war-anxiety of 1938, and the excluded and terrorised for whom no measure of “support” applies. The strongest answers engage the conceptual point all three sources share — that displayed unanimity and real support are different objects — and reach a defended verdict on how far the sources capture the balance of consent, pressure and exclusion. Omissions count only when tied to evaluation. Top-band responses balance source evidence and own knowledge throughout.',
      },
    ],
  },
];
