import type { SourceSet } from './types';

// Source sets 29–32: the Weimar Republic and its challenges (syllabus point 2).

export const SOURCE_SETS_8: SourceSet[] = [
  // ------------------------------------------------------------------
  // SET 29 — The Weimar constitution  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-weimar-constitution',
    title: 'Founding the Republic: the Weimar constitution',
    themeKey: 'constitution',
    themeSentence:
      'The constitution written at Weimar in 1919 was among the most democratic in the world on paper, and carried within its own articles the instruments by which German democracy would later be dismantled.',
    tags: ['p2'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of the National Assembly in session in the German National Theatre at Weimar, 1919, published in a British illustrated history the same year. The Assembly met at Weimar because Berlin was judged too dangerous.',
        image: {
          src: 'sources/national-assembly-1919.jpg',
          alt: 'Delegates of the German National Assembly, men and women, seated in rows in the Weimar theatre hall with galleries above, 1919',
          credit: 'The Times History of the War, vol. 21, 1919. Public domain, via Wikimedia Commons',
        },
        body: 'The photograph, taken from the side of the hall, shows the delegates of the National Assembly seated in curved rows of theatre seating beneath the chandeliers and galleries of the Weimar court theatre. The delegates — men in dark suits and, scattered among them, a number of women — read papers, confer and follow the debate. Spectators watch from the balcony above.',
        footnotes: [
          'National Assembly — the body elected in January 1919 to write a constitution for the new republic.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extracts from the Constitution of the German Reich, adopted by the National Assembly at Weimar on 31 July 1919 and signed on 11 August 1919.',
        body: 'Article 1. The German Reich is a republic. State authority derives from the people. — Article 22. The delegates are elected by universal, equal, direct and secret suffrage by men and women over twenty years of age, according to the principles of proportional representation. — Article 41. The Reich President is elected by the whole German people. — Article 48. If a state does not fulfil the duties imposed upon it by the Reich constitution or Reich laws, the Reich President may compel it to do so with the help of the armed forces. If public safety and order in the German Reich are significantly disturbed or endangered, the Reich President may take the measures necessary for their restoration, intervening if necessary with the help of the armed forces. For this purpose he may temporarily suspend, in whole or in part, the fundamental rights established in Articles 114, 115, 117, 118, 123, 124 and 153. — Article 54. The Reich Chancellor and the Reich Ministers require for the conduct of their office the confidence of the Reichstag. Each of them must resign if the Reichstag withdraws its confidence by express resolution.',
        footnotes: [
          'Proportional representation — seats allocated to parties in proportion to their share of the national vote.',
          'Articles 114–153 — the constitution’s guarantees of personal liberty, free expression, assembly, association and property.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the Weimar Republic written by an academic historian and published in 2013.',
        body: 'Judged as a democratic design, the Weimar constitution was ahead of nearly every rival: votes for women a year before America completed the same step and a decade before Britain equalised the franchise, proportional justice for every shade of opinion, a bill of rights, referendums, and a parliament that could dismiss any government. Its weaknesses were less the famous clauses than the assumptions behind them. Proportional representation faithfully mirrored a fractured society into a fractured Reichstag, where governing majorities had to be assembled from suspicious partners and no voter ever chose a government. The popularly elected presidency created a second source of legitimacy — a substitute Kaiser, his critics said — armed by Article 48 with emergency powers designed for putsches and general strikes, but written loosely enough to govern by decree once parliament deadlocked. Yet the deepest flaw lay outside the text entirely. A constitution can distribute power; it cannot supply believers. The judges, officers, professors and officials who administered the new republic had been formed by the old empire, and the parties that accepted the constitution without reservation never again commanded a majority together after 1920. The document assumed democrats the society did not yet contain — and when the crisis came, its own Article 48 proved the door through which democracy was escorted from the building.',
        footnotes: [
          'Referendum — a direct popular vote on a question of law.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the January 1919 election with women voting for the first time; the Assembly meeting at Weimar because of fighting in Berlin — the Spartacist rising and continuing unrest; the task of writing a constitution while the Versailles terms were being dictated)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph in the first half of 1919: the Assembly elected in January by universal suffrage including women, meeting in the Weimar theatre away from revolutionary Berlin, drafting the constitution amid civil conflict and the peace negotiations. Details of the source (the theatre setting, the women among the delegates, the watching public) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying the strengths and weaknesses of the Weimar constitution.',
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
          'Usefulness must be judged relative to the stated inquiry. Source 2 is the constitution itself: incontestable evidence of the design — the democratic franchise, proportional representation, the president’s emergency powers with the suspendable rights itemised, ministerial responsibility; its limitation is that a legal text shows intention, not operation — nothing in it reveals how Article 48 would actually be used, or that coalitions would fracture. Source 3 supplies precisely the operational and contextual judgement — how the provisions worked in a divided society, and the argument that the deepest weakness lay in the people administering the text — with scholarly hindsight; but it is an interpretation whose emphasis (institutions versus believers) invites testing, and it postdates events by nearly a century. Strong answers see the pairing: the blueprint and the building inspector’s report. Candidates treat the sources in parallel; comparison is not required for full marks.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the nature of the democracy founded in Germany in 1919. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the new democracy’s nature in all three sources', marks: '3' },
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
          'Theme first: the set represents the founding as genuinely democratic in form (Sources 1 and 2) and conditional in substance (Source 3) — an advanced constitution adopted in a theatre because the capital was unsafe, administered by an inherited establishment. Strong responses test the extent with own knowledge: the January 1919 election results (three-quarters for the democratic parties — never repeated), the flight from Berlin and the violence of 1919–20, the practical career of the disputed articles (Article 48 under Ebert against the 1923 crises, then under Hindenburg as routine government after 1930; proportional representation and the coalition arithmetic), and the “republic without republicans” problem in judiciary, army and administration. Omissions earn marks only when tied to evaluation — e.g. the set shows the founders but not the enemies: nothing represents the forces (right and left) who rejected the settlement from the first, so the constitution’s embattled position must be supplied by the candidate. For higher marks: balance of source evidence and own knowledge, and an explicit verdict on extent. A source-by-source walkthrough caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 30 — The Kapp Putsch, 1920  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-kapp-putsch',
    title: 'The Kapp Putsch and the general strike, 1920',
    themeKey: 'kapp',
    themeSentence:
      'In March 1920 the army would not defend the Republic against a Freikorps coup — and a general strike of the working population defeated in five days what the state’s own soldiers refused to fight.',
    tags: ['p2'],
    era: 'early',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of soldiers of the Marine Brigade Ehrhardt — the Freikorps unit whose march on Berlin began the Kapp Putsch — surrounded by a crowd on a Berlin square, March 1920.',
        image: {
          src: 'sources/kapp-putsch-1920.jpg',
          alt: 'Putschist soldiers beneath a large imperial war flag amid a dense crowd of Berlin civilians during the Kapp Putsch, March 1920',
          credit: 'Bundesarchiv, Bild 119-1983-0007 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a dense crowd of civilians in hats and caps filling a square before official buildings. In the midst of the crowd, steel-helmeted soldiers hold aloft a great imperial war flag — the black-cross-and-eagle banner of the Kaiser’s navy, not the colours of the Republic. A mounted soldier and another on foot face the crowd at the left; the civilians stand close around the soldiers, watching.',
        note: 'Note: the flag is the Reichskriegsflagge (imperial war flag) of the fallen Empire. The Ehrhardt Brigade marched into Berlin on 13 March 1920 with imperial flags flying and swastikas painted on some helmets; the government fled the city.',
        footnotes: [
          'Putsch — an attempt to seize power by force.',
        ],
      },
      {
        n: 2,
        kind: 'visual',
        attribution:
          'Source 2: A printed leaflet issued by the action committee of the trade unions in Hanover, 13 March 1920, calling the general strike against the putsch. Similar appeals appeared in every industrial city within hours of the coup.',
        image: {
          src: 'sources/kapp-strike-leaflet.jpg',
          alt: 'German general strike leaflet of March 1920: "Zum Generalstreik gegen die Diktatur Kapp" with a list of exempted essential services',
          credit: 'Leaflet, Hanover, 1920. Public domain, via Wikimedia Commons',
        },
        body: 'The leaflet is headed in heavy type: “Zum Generalstreik gegen die Diktatur Kapp” (“To the general strike against the Kapp dictatorship”). It announces: “On Monday, 15 March, work ceases in all enterprises and workshops!” Beneath, in smaller type, it lists the essential services exempted from the strike: electricity, gas and water works, hospitals, the tramway power station, the fire brigade, ambulance and burial services, bakeries, food shops, food transport and supply, milk transport and trade, fuel supply, sickness funds and doctors. It is signed “Der Aktionsausschuß” (The Action Committee) and carries the printer’s line of a Hanover printing house.',
        footnotes: [
          'General strike — a coordinated stoppage of work across all industries.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a history of the early Weimar Republic written by an academic historian and published in 2016.',
        body: 'The Kapp Putsch lasted one hundred hours and taught three lessons, each of which outlived it. The first concerned the army: asked to put down the mutinous brigades, the head of the troop office replied — whether or not in the exact words legend preserves — that troops do not fire on troops. The Reichswehr would defend the Republic against the left; against the right it declared itself neutral, and neutrality, for a state, is another word for abandonment. The second concerned the population: the putsch was broken not by soldiers but by the most complete general strike in German history — twelve million workers, from communist dockers to Christian railwaymen and the civil servants of conservative Prussia, stopped the country until Kapp’s “government”, unable to print money, move a train or publish a newspaper, dissolved in farce. The republic’s despised citizens proved its only reliable garrison. The third lesson was the darkest: the judiciary that tried hundreds of strikers with severity handed the putschists an amnesty almost to a man — of 705 prosecutions, one conviction, and Kapp’s co-conspirator Lüttwitz retired on a general’s pension. Treason against the Republic, the courts announced in effect, was a misdemeanour of patriots. It was a lesson Bavaria’s judges would repeat for another putschist three years later.',
        footnotes: [
          'Reichswehr — the army of the Weimar Republic.',
          'Troop office — the army command under General von Seeckt.',
        ],
      },
    ],
    questions: [
      {
        letter: 'a',
        text: 'Outline the context of Source 1 and explain its message. Include the relevant events, people, and ideas represented in and/or surrounding the source.',
        marks: 4,
        key: [
          {
            rows: [
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. the planned disbandment of the Freikorps under the Versailles treaty; the Ehrhardt Brigade’s march on Berlin on 13 March 1920; the Kapp–Lüttwitz seizure of the capital and the government’s flight)', marks: '2' },
              { descriptor: 'Identifies the context of the source by including some details', marks: '1' },
            ],
            subtotal: 2,
          },
          {
            rows: [
              { descriptor: 'Explains the message of the source (e.g. that the old imperial order has returned in arms to the capital — the putschists parade the Kaiser’s war flag, not the Republic’s colours, while Berliners look on unresisting but unwelcoming) by providing accurate and relevant evidence from the source', marks: '2' },
              { descriptor: 'Identifies or provides a general comment about the message of the source', marks: '1' },
            ],
            subtotal: 2,
          },
        ],
        notes:
          'The context element requires placement in March 1920: the Versailles disarmament clauses, the ordered disbandment of the Freikorps, and the Ehrhardt Brigade’s seizure of Berlin. The message element should be stated as a claim and supported from the source: the imperial war flag flown in the republic’s capital, the armed soldiers amid a watching, unenthusiastic crowd. Any legitimate, evidenced reading of the photograph is rewarded.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the defeat of the Kapp Putsch. In your answer, refer to the origin of each source.',
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
          'Compare includes contrast. A central similarity: both sources present the strike of the working population as the effective answer to the putsch — the leaflet is the instrument itself, the historian calls the strikers the Republic’s “only reliable garrison”. The differences are of position and scope: Source 2 speaks from inside the event, in the imperative voice, organising resistance it cannot yet know will succeed — and its careful list of exempted services shows a movement claiming responsibility for public life, not overturning it; Source 3, with a century’s hindsight, sets the strike beside what the leaflet could not see — the army’s refusal and the courts’ indulgence — and draws the longer lessons. Reference to origin is required by the question: a trade-union action committee’s leaflet printed within hours of the coup, against an academic historian writing in 2016. Both similarities and differences are expected for the top descriptors.',
      },
      {
        letter: 'c',
        text: 'Evaluate the extent to which Sources 1, 2 and 3 accurately represent the challenges facing the Weimar Republic in its early years. In your answer, refer to all three sources and your own knowledge.',
        marks: 10,
        key: [
          {
            heading: 'Identification of the theme',
            rows: [
              { descriptor: 'Identifies the representation of the Republic’s early challenges in all three sources', marks: '3' },
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
          'Theme first: the set represents a republic menaced in arms by its own supposed defenders (Source 1), defended by its citizens (Source 2), and betrayed by its courts and army command (Source 3). Strong responses test this against the wider field of early challenges with own knowledge: the Versailles terms and the disbandment order that triggered the putsch, the Ruhr rising that followed the strike and its bloody suppression — the same government using against workers the army it could not use against Kapp — political murder (Erzberger 1921, Rathenau 1922) and the biased justice Source 3 describes, culminating in the Munich putsch trial of 1924. The counter-weight belongs in the evaluation: the putsch failed, the Republic survived its most dangerous year, and the strike showed mass loyalty the set’s darker readings should not erase. Omissions earn marks only when tied to evaluation — e.g. the set shows the right’s challenge but not the left’s risings, so the Republic’s two-front position is under-represented. For higher marks: balance of source evidence and own knowledge and an explicit verdict on extent.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 31 — The Ruhr occupation, 1923  (3 + 7 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-ruhr',
    title: 'The Ruhr occupation and passive resistance, 1923',
    themeKey: 'ruhr',
    themeSentence:
      'The French occupation of the Ruhr united Germans in a resistance the state could sponsor but not afford — a struggle that ended in national bankruptcy and the Republic’s deepest crisis.',
    tags: ['p2'],
    era: 'early',
    split: '3+7',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A photograph of a French light tank and soldiers at a street corner in Gelsenkirchen-Buer, in the occupied Ruhr district, 1923.',
        image: {
          src: 'sources/ruhr-french-tank.jpg',
          alt: 'A French light tank and two helmeted French soldiers guard a cobbled street corner in the occupied Ruhr, 1923, as a civilian walks past',
          credit: 'Bundesarchiv, Bild 102-00016 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a small tank drawn up on the pavement against the corner of a solid stone building, beneath a sign reading “Ratskeller”. Two French soldiers in helmets stand guard beside it, rifles slung, facing along the cobbled street; a civilian in a long coat walks past on the far pavement without turning his head.',
        footnotes: [
          'Ruhr — Germany’s principal coal and steel district, occupied by French and Belgian troops from January 1923.',
        ],
      },
      {
        n: 2,
        kind: 'visual',
        attribution:
          'Source 2: A photograph of a mass demonstration against the Ruhr occupation on the steps of the Reichstag building, Berlin, 1923. The rally was one of many held throughout unoccupied Germany in the first weeks of the occupation.',
        image: {
          src: 'sources/ruhr-rally-berlin.jpg',
          alt: 'A vast crowd fills the steps of the Reichstag at a 1923 protest rally against the Ruhr occupation, many holding printed song sheets',
          credit: 'Bundesarchiv, Bild 102-00022 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The photograph shows a vast crowd of men in hats and overcoats packed onto the steps and forecourt of the Reichstag, beneath its great columns. Many hold printed sheets; at the right, a speaker stands raised above the crowd on a platform. The crowd stretches beyond both edges of the frame.',
        footnotes: [
          'Reichstag — the German parliament building in Berlin.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from an economic and political history of the year 1923 written by an academic historian and published in 2005.',
        body: 'When France and Belgium marched engineers and sixty thousand soldiers into the Ruhr in January 1923 to collect reparations in coal and timber, the German government answered with the only weapon a disarmed state possessed: refusal. Passive resistance was proclaimed; miners, railwaymen and officials stopped work under occupation; and for eight months the Ruhr produced defiance instead of coal. As national theatre it was a triumph — for the first and last time in its life, the Republic stood at the head of a united nation, cheered from communist Essen to nationalist Pomerania. As policy it was a catastrophe whose costs compounded weekly. The Reich paid the wages of two million idle workers and the upkeep of the expelled — one hundred and forty thousand Germans deported from the district by the occupiers — and it paid them with the printing press. The mark, sick since the war, now died: four hundred marks to the dollar when the year opened, four billion by November. When Stresemann called off the resistance in September — “to preserve the life of the nation” — he was denounced as a traitor by the same nationalists whose fight he had funded, and the Republic reaped both harvests at once: the hatred of those who called surrender treason, and the ruin of those whose savings had financed the defiance. The occupation cost France its moral standing and Germany its currency; and it taught a Munich agitator, watching the national fury, that the Republic’s crisis was his opportunity.',
        footnotes: [
          'Reparations — payments imposed on Germany by the Treaty of Versailles.',
          'Passive resistance — organised refusal to work or cooperate, without armed opposition.',
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
              { descriptor: 'Outlines the context of the source by including accurate and specific details of events, people, and ideas represented in and/or surrounding the source (e.g. Germany’s default on reparations deliveries; the French and Belgian occupation of the Ruhr from January 1923; the policy of passive resistance; confrontation between occupiers and population)', marks: '3' },
              { descriptor: 'Outlines the context of the source by including some accurate details', marks: '2' },
              { descriptor: 'Identifies the context of the source with a general comment or limited details', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          '“Outline” requires the characteristics or features, not the reasons why. Candidates should place the photograph in the occupied Ruhr of 1923: the reparations default, the Franco-Belgian occupation to seize “productive pledges”, and the German policy of passive resistance then in force. Details of the source (the tank on a German street corner, the armed sentries, the civilian pointedly passing without a glance) should be connected to those circumstances. Only basic contextual placement is required.',
      },
      {
        letter: 'b',
        text: 'Discuss the usefulness of Sources 2 and 3 for a historian studying German responses to the occupation of the Ruhr.',
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
          'Usefulness must be judged relative to the stated inquiry — German responses. Source 2 is direct visual evidence of the national mobilisation of feeling: a mass rally at the seat of parliament, the crowd’s scale and respectability, the printed sheets suggesting organised, orchestrated protest; its limits are those of any photograph — one moment, one city, chosen by a photographer, showing attendance but not motive, and nothing of the occupied district itself. Source 3 supplies the full arc — passive resistance, its funding by the printing press, the deportations, the abandonment in September and the political bill — with scholarly hindsight and statistics, though it is an interpretation whose emphases (triumph as theatre, catastrophe as policy) invite testing. Strong answers note that the photograph shows the unity Source 3 calls the Republic’s “first and last”, and that neither source gives the occupied population’s own voice. Candidates do not need to compare the sources to earn full marks; each salient point is rewarded.',
      },
      {
        letter: 'c',
        text: 'Assess the impact of the Ruhr occupation on Germany in 1923 as shown in Sources 1, 2 and 3. To what extent do the sources capture the full consequences of the crisis?',
        marks: 10,
        key: [
          {
            heading: 'Identification of impacts',
            rows: [
              { descriptor: 'Identifies impacts of the occupation as represented in all three sources', marks: '3' },
              { descriptor: 'Identifies impacts in two of the sources', marks: '2' },
              { descriptor: 'Identifies impacts in one of the sources', marks: '1' },
            ],
            subtotal: 3,
          },
          {
            heading: 'Assessment',
            rows: [
              { descriptor: 'Assesses clearly the impact of the occupation and the extent to which the sources capture its full consequences — political, economic and social — using detailed, accurate and relevant evidence from all three sources and the broader period, with omissions tied to an evaluation of what the set shows', marks: '7' },
              { descriptor: 'Assesses the impact using accurate and relevant evidence from all three sources and own knowledge', marks: '6' },
              { descriptor: 'Discusses the impact using accurate and relevant evidence from all three sources and some own knowledge', marks: '5' },
              { descriptor: 'Explains the impact with reference to at least two sources and some accurate and relevant evidence', marks: '4' },
              { descriptor: 'Describes impacts with reference to at least two sources and some relevant evidence', marks: '3' },
              { descriptor: 'Outlines the content of at least one source with some relevant comment', marks: '2' },
              { descriptor: 'Identifies content from at least one source and/or provides a general comment with limited evidence', marks: '1' },
            ],
            subtotal: 7,
          },
        ],
        notes:
          'The second sentence does the discriminating work: candidates must name consequences the set does NOT show and tie each to an evaluation of its insight. The sources show occupation on the ground (Source 1), the national wave of protest (Source 2) and the economic and political reckoning (Source 3). Own knowledge that completes the picture might include: the hyperinflation’s social devastation and the destruction of middle-class savings; the violence of the occupation (the Krupp works shootings, executions such as Schlageter and his nationalist martyr cult); separatism in the Rhineland; the autumn crises of 1923 — communist risings in Saxony, the Munich putsch — and the recovery that followed (Rentenmark, Dawes Plan, French withdrawal), which the set’s bleak arc omits. Merely listing omissions earns nothing; each must evaluate the set (e.g. the set ends at ruin, so the crisis’s role in producing the stabilisation and the turn to negotiation is invisible). Impacts may be organised as economic, political and social. Balance of source evidence and own knowledge is required at the top; a source-by-source recount caps in the middle bands.',
      },
    ],
  },

  // ------------------------------------------------------------------
  // SET 32 — The golden twenties  (4 + 6 + 10)
  // ------------------------------------------------------------------
  {
    id: 'ss-golden-twenties',
    title: 'Berlin in lights: the golden twenties',
    themeKey: 'culture',
    themeSentence:
      'In the stabilised mid-1920s Berlin became a world capital of modernity and experiment — a culture that dazzled its admirers, enraged conservative Germany, and rested on foundations as fragile as the prosperity beneath it.',
    tags: ['p2'],
    era: 'mid',
    split: '4+6',
    sources: [
      {
        n: 1,
        kind: 'visual',
        attribution:
          'Source 1: A press photograph of the Potsdamer Platz, Berlin, at night, mid-1920s, showing the newly erected traffic tower amid the evening traffic.',
        image: {
          src: 'sources/potsdamer-platz.jpg',
          alt: 'The Potsdamer Platz traffic tower at night in 1920s Berlin, surrounded by illuminated hotel signs, trams and streams of traffic',
          credit: 'Bundesarchiv, Bild 102-00892 / CC-BY-SA 3.0 DE, via Wikimedia Commons',
        },
        body: 'The night photograph shows the five-sided clock tower that controlled traffic at the Potsdamer Platz, lit from within, its signal lamp blazing above the square. Around it, the electric signs of the great establishments burn against the dark — “Palast-Hotel” in lights on the right, the illuminated front of a café below, another hotel’s sign at the left — while trams and motor traffic stream past as moving blurs of light, and pedestrians cross the wet square.',
        note: 'Note: the tower, erected in 1924 on Europe’s busiest square, carried Germany’s first traffic lights.',
        footnotes: [
          'Potsdamer Platz — the great traffic junction at the centre of Berlin.',
        ],
      },
      {
        n: 2,
        kind: 'text',
        attribution:
          'Source 2: Extract from an article by a British journalist resident in Berlin, published in a London weekly magazine, 1927.',
        body: 'The visitor who saw this city in the year of the turnip and the revolver does not believe his eyes. Berlin has become the most modern city in Europe, and the most alive. By day it works as no city works — the office towers rising, the assembly lines running to American time, the very traffic drilled by a tower of coloured lights; by night it blazes. There are said to be more theatres here than in Paris and more cabarets than theatres; the concert halls quarrel over Schoenberg, the picture palaces over Fritz Lang; in the galleries young men paint the war and the profiteers with a savagery no French salon would hang. Everything is tried here — in the theatre, in the laboratory, in the novel, in life; the women have the vote, the bob and the office desk, and grandmothers write despairing letters to the newspapers about all three. It should be said that respectable Germany regards this city as Sodom electrified, and that in the small towns the pastors preach against Berlin as against a foreign power. But to the stranger the impression is not of decadence; it is of a people which, having been refused an empire, has resolved to conquer the twentieth century instead.',
        footnotes: [
          'Schoenberg / Fritz Lang — a modernist composer; the director of the film Metropolis (1927).',
          'Bob — the short modern women’s haircut of the 1920s.',
        ],
      },
      {
        n: 3,
        kind: 'text',
        attribution:
          'Source 3: Extract from a cultural history of the Weimar Republic written by an academic historian and published in 2007.',
        body: 'Weimar culture has been remembered as a golden age, and the memory is not false so much as cropped. The brilliance was real: in five years the Republic’s cities produced the Bauhaus and the picture palace, twelve-tone music and the talkies, a science faculty with a dozen Nobel laureates and a popular culture — boxing, six-day races, revue, radio — that was the first in Germany to deserve the name mass. But the same brilliance must be read politically, and politically it was a battlefield. What Berlin celebrated as freedom, provincial and Protestant Germany experienced as invasion: the “asphalt culture” of the capital became the right’s shorthand for everything the Republic had done to Germany — the emancipated woman, the American tempo, the Jewish critic, the mocking cabaret. The culture war was not a sideshow to Weimar politics but one of its main fronts, and it was a front the Republic was losing among the very classes whose loyalty it most needed. Nor did the glitter reach far down: for the clerk whose savings had vanished in 1923 and the farmer sinking after 1927, the capital’s champagne modernity was a nightly insult. The golden twenties were golden for five years, in perhaps a dozen cities, for those with the money and the taste for them — a civilisation of astonishing creativity, dancing, as one of its own writers said, on a volcano it had every reason to know was live.',
        footnotes: [
          '“Asphalt culture” — the nationalist right’s contemptuous term for modern urban culture.',
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
              { descriptor: 'Correctly identifies the message of the source (e.g. that Berlin is a modern electric metropolis — ordered, technological and alive by night)', marks: '1' },
            ],
            subtotal: 1,
          },
          {
            rows: [
              { descriptor: 'Explains how the source conveys the message by providing detailed, accurate and relevant evidence from the source (e.g. the illuminated traffic tower — Germany’s first traffic lights — commanding the square, the blazing hotel and café signs, the streams of motor and tram traffic, the night-time energy of the scene)', marks: '3' },
              { descriptor: 'Explains how the source conveys the message with some accurate and relevant evidence', marks: '2' },
              { descriptor: 'Outlines a feature of the source connected to the message', marks: '1' },
            ],
            subtotal: 3,
          },
        ],
        notes:
          'The message should be stated as a claim (“The message of Source 1 is that…”). “Explain” requires the how: candidates should connect the photograph’s elements — electric light, regulated traffic, the great hotels, the crowds abroad at night — to the impression of a city of modernity, order and pleasure. Full marks require specific reference to details of the source.',
      },
      {
        letter: 'b',
        text: 'Compare the perspectives of Sources 2 and 3 regarding the culture of the Weimar Republic. Account for the differences between them.',
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
          'A similarity: both sources acknowledge the culture’s extraordinary creativity AND note the hostility of “respectable” provincial Germany — the journalist’s pastors preaching against Berlin anticipate the historian’s culture war. The central difference is judgement and frame: Source 2, writing in the moment, reads the ferment as national renewal — conquest of the century — and treats the opposition as a comic chorus; Source 3, with hindsight, reads the same ferment as one front of a political war the Republic was losing, and insists on the narrowness of the glitter by class, region and time. Accounting should reason from origin: a foreign correspondent in 1927, writing to dazzle a London readership at the height of the stabilisation, with no knowledge of what followed; an academic historian in 2007, writing after the collapse, whose purpose is analysis of the culture’s political meaning. Both similarities and differences are required for full comparison marks.',
      },
      {
        letter: 'c',
        text: 'Assess the extent to which the historical interpretations presented in all three sources reflect the condition of Germany during the years 1924 to 1929. In your answer, refer to all three sources and your own knowledge of the period.',
        marks: 10,
        key: [
          {
            rows: [
              { descriptor: 'Assesses clearly the extent to which the interpretations reflect the condition of mid-1920s Germany, engaging with the biases, arguments and perspectives within the sources and testing them against alternative viewpoints and events from across the period, with detailed, accurate and relevant evidence from all three sources and own knowledge', marks: '9–10' },
              { descriptor: 'Assesses the interpretations against the historical record with accurate and relevant evidence from all three sources and own knowledge', marks: '7–8' },
              { descriptor: 'Explains the interpretations in at least two sources with some accurate and relevant own knowledge', marks: '5–6' },
              { descriptor: 'Outlines the view of the era in at least one source with some relevant evidence', marks: '3–4' },
              { descriptor: 'Identifies content from one or more sources and/or provides a general comment with limited evidence', marks: '1–2' },
            ],
          },
        ],
        notes:
          'The set contains rival readings: the metropolis’s self-image of confident modernity (Source 1), the contemporary celebration of renewal (Source 2), and the retrospective interpretation of a cropped golden age — narrow, contested and politically corrosive (Source 3). Candidates should identify the interpretations, group the sources, and test them against the record: the real stabilisation (currency, Locarno, League membership, the 1928 election’s republican majority and the Nazi 2.6 per cent) against the fragilities (American short-term credit, unemployment never below 1.3 million, the farm depression from 1927, Hindenburg’s election in 1925, and the culture war’s harvest — the provincial and confessional constituencies that swung to the right after 1929). Strong answers note that Sources 1 and 2 are themselves evidence for Source 3’s argument about the capital’s self-absorption. Omissions count only when tied to evaluation — e.g. no rural, working-class or nationalist voice appears except through the others’ reports. Top-band responses balance source evidence and own knowledge and defend a verdict on extent.',
      },
    ],
  },
];
