import type { EssayQuestion } from './types';

// Essay questions for Elective 7: Capitalism — the American experience
// (1901–1941). Ids cap-e01…

export const CAP_ESSAYS: EssayQuestion[] = [
  // ---------------- E1 — Evaluate the proposition ----------------
  {
    id: 'cap-e01',
    frame: 'E1',
    strand: 'structure',
    era: 'early',
    demand: 2,
    themes: ['cap-groups'],
    tags: ['cap-p1'],
    text: 'Evaluate the proposition that the United States at the beginning of the 20th century was a land of opportunity for all its people.',
    notes:
      'Candidates should test the national self-image against the social reality of about 1901. The case for: spectacular growth (the US as the world’s largest industrial economy), open immigration before the quota acts, cheap land under the Homestead tradition, real examples of mobility, and the absence of formal aristocracy. The counter-case: the concentration of wealth and the power of the trusts; industrial working conditions (twelve-hour days in steel, child labour, no security against injury or layoff); the South’s sharecropping and Jim Crow segregation hardened by Plessy v. Ferguson (1896) and disenfranchisement; the dispossession of the Indian Nations under allotment; and the limited citizenship of women. Strong answers define whose opportunity is meant, use specific groups as tests, and reach a differentiated verdict — opportunity real for some, structurally denied to others. Responses that describe 1900s America without weighing the proposition cannot achieve the higher marks.',
  },
  {
    id: 'cap-e02',
    frame: 'E1',
    strand: 'event',
    era: 'late',
    demand: 3,
    themes: ['cap-newdeal'],
    tags: ['cap-p4'],
    text: 'Evaluate the proposition that the New Deal saved American capitalism in the years 1933 to 1941.',
    notes:
      'A superlative proposition inviting judgement on both halves: did capitalism need saving, and did the New Deal save it? The case for: the winter of 1932–33 as a systemic crisis (banking collapse, a quarter of the workforce idle, radical alternatives audible); banking reform, the FDIC and SEC restoring confidence in the system’s institutions; relief and Social Security binding workers and farmers back into the system; the Wagner Act channelling industrial conflict into bargaining rather than revolt; and the survival of private ownership throughout. The counter-case: recovery was incomplete (unemployment near 14 per cent in 1937, the “Roosevelt recession” of 1937–38); the Depression was ended by war production, not the New Deal; and American capitalism may never have been in revolutionary danger — the radical vote stayed marginal even in 1932. Historiography: William Leuchtenburg’s “halfway revolution”; David Kennedy on security as the New Deal’s real achievement; critics from the right (regime uncertainty) and left (Conkin: conservative rescue of the old order). The strongest conclusions define “saved” — rescued from collapse, or reformed into a managed capitalism — and argue a nuanced verdict.',
  },

  // ---------------- E2 — Debate the proposition ----------------
  {
    id: 'cap-e03',
    frame: 'E2',
    strand: 'event',
    era: 'late',
    demand: 3,
    themes: ['cap-depression', 'cap-consumerism'],
    tags: ['cap-p2', 'cap-p4'],
    text: 'Debate the proposition that the Great Depression was caused by the excesses of the 1920s.',
    notes:
      'As this is a debate question, for candidates to gain the higher marks they must address evidence that both supports and refutes the claim. Supporting: the speculative mania of 1928–29 (stocks bought on ten per cent margin, the Florida land boom); an income distribution so skewed that mass demand depended on instalment debt; over-capacity in consumer industries by 1929; and the unregulated banking and corporate practices later exposed by the Pecora hearings. Refuting: structural weaknesses older than the boom — the decade-long farm depression, sick industries (coal, textiles, railroads), the international financial tangle of war debts and reparations under the gold standard; and the argument (Friedman and Schwartz) that policy after the Crash — the Federal Reserve’s contraction, bank failures allowed to cascade, Smoot–Hawley — turned a recession into catastrophe. Historiography: Galbraith on speculation; Friedman/Schwartz’s monetary explanation; Kindleberger’s international leadership vacuum. Candidates who narrate the Crash without weighing “excesses of the twenties” against deeper and later causes cannot reach the higher marks.',
  },

  // ---------------- E3 — Assess the extent ----------------
  {
    id: 'cap-e04',
    frame: 'E3',
    strand: 'structure',
    era: 'early',
    demand: 2,
    themes: ['cap-trusts'],
    tags: ['cap-p2'],
    text: 'Assess the extent to which progressivism changed the nature of American capitalism in the years 1901 to 1920.',
    notes:
      'Candidates should define progressivism (a broad reform impulse against the abuses of industrial capitalism) and set criteria for “changed the nature”. Evidence of change: trust busting from Northern Securities (1904) to the Standard Oil dissolution (1911); the regulatory state — Hepburn Act, Pure Food and Drug Act and Meat Inspection Act (1906), Federal Reserve (1913), Clayton Act and FTC (1914); the income tax (Sixteenth Amendment); state-level labour laws and workmen’s compensation. Evidence of limits: industrial concentration was greater in 1920 than 1900; regulation often stabilised big business rather than restraining it (the “rule of reason”, 1911); labour’s legal position remained weak (Ludlow, 1914); and progressivism largely ignored African Americans — the Wilson administration segregated the federal civil service. The strongest answers argue a discriminating judgement: progressivism established the principle of public supervision of the market — an ideological transformation — while leaving the structure of corporate capitalism intact.',
  },
  {
    id: 'cap-e05',
    frame: 'E3',
    strand: 'group',
    era: 'mid',
    demand: 2,
    themes: ['cap-consumerism', 'cap-groups'],
    tags: ['cap-p2', 'cap-p5'],
    text: 'Assess the extent to which all Americans shared in the prosperity of the 1920s.',
    notes:
      'An extent question requiring group-by-group analysis rather than a single narrative of boom. The case for wide sharing: real wages rose for urban workers; the car, radio, cinema and electrification spread down the income scale; instalment credit put consumer durables within reach; unemployment stayed low after 1922. The case against: agriculture never recovered from 1921 — farm foreclosures and rural poverty through the decade; sick industries (coal, textiles); African Americans confined to the lowest-paid work North and South; new immigrants shut out by the quota acts and older ones stuck in low-wage sectors; by 1929 the top five per cent took roughly a third of income, and most families remained below the level economists then defined as sufficiency. Strong answers quantify, name the excluded groups specifically, and conclude with a proportionate judgement (prosperity real but selective — an urban, white, industrial phenomenon resting on fragile foundations).',
  },

  // ---------------- E4 — Relative importance of factors ----------------
  {
    id: 'cap-e06',
    frame: 'E4',
    strand: 'event',
    era: 'late',
    demand: 3,
    themes: ['cap-depression'],
    tags: ['cap-p4'],
    text: 'Assess the relative importance of the factors that caused the Great Depression in the years 1929 to 1933.',
    notes:
      'The discipline of this frame is ranking: candidates must weigh factors against each other, not list them. Factors to marshal: the Wall Street Crash as trigger and destroyer of confidence; structural maldistribution of income undermining mass demand; the fragile, unregulated banking system (thousands of small banks; cascading failures 1930–33); the decade-long agricultural depression; international factors — war debts, reparations, the gold standard, and the collapse of world trade sharpened by Smoot–Hawley (1930); and policy failure — the Federal Reserve’s monetary contraction and Hoover’s commitment to balanced budgets. Historiography: Galbraith (speculation and inequality), Friedman and Schwartz (the “Great Contraction” as monetary policy failure), Kindleberger (no international lender of last resort), Bernanke on the credit channel. A hierarchy must be argued and defended: e.g. the Crash as proximate cause, structural weaknesses as preconditions, and policy/banking failure as the factor that converted recession into the Great Depression. Narrative without ranking caps in the middle bands.',
  },

  // ---------------- E5 — Analyse the significance ----------------
  {
    id: 'cap-e07',
    frame: 'E5',
    strand: 'idea',
    era: 'whole',
    demand: 2,
    themes: ['cap-consumerism'],
    tags: ['cap-p2'],
    text: 'Analyse the significance of the growth of consumerism to the American experience of capitalism in the period 1901 to 1941.',
    notes:
      'Significance should be analysed across domains: economic (mass production requiring mass markets — Ford’s Model T and the five-dollar day; instalment credit financing the car, radio and refrigerator; advertising as a major industry by the 1920s), social and cultural (the department store, national brands, film and fashion defining status; the redefinition of the American Dream in terms of goods), and structural (an economy newly dependent on consumer demand — which is why the contraction of 1929–33 was so devastating, and why New Deal thinkers turned to purchasing power as the key to recovery). Strong answers trace change across the whole period — from the producer ethic of 1901 to the consumer economy visible by 1941 — and weigh consumerism against other engines of capitalist growth (war orders, investment, population). Lizabeth Cohen and Roland Marchand are usable historiography. Answers confined to describing 1920s advertising cannot reach the higher bands.',
  },
  {
    id: 'cap-e08',
    frame: 'E6',
    strand: 'event',
    era: 'early',
    demand: 2,
    themes: [],
    tags: ['cap-p2'],
    text: 'Examine the impact of the First World War on the development of American capitalism in the years 1914 to 1929.',
    notes:
      'Candidates should examine the impact in several dimensions: financial (the US transformed from debtor to the world’s great creditor; New York displacing London), industrial (war orders ending the 1914 recession; expansion of steel, chemicals, shipbuilding; mass-production methods spread by war contracts), labour and social (the Great Migration drawn north by war industry; women’s war work; the strike wave and Red Scare of 1919 when wartime gains were rolled back), and governmental (the War Industries Board as a precedent for managed capitalism — remembered by New Dealers). Longer-run significance: war debts and reparations entangling American finance with Europe (Dawes Plan 1924), agricultural over-expansion during the war setting up the postwar farm depression, and the boom psychology of the twenties. The strongest answers argue a judgement about how far the war accelerated existing tendencies versus creating new ones, and connect wartime changes to both the prosperity and the fragility of the 1920s.',
  },

  // ---------------- E6 — Examine ----------------
  {
    id: 'cap-e09',
    frame: 'E6',
    strand: 'group',
    era: 'late',
    demand: 2,
    themes: ['cap-depression', 'cap-groups'],
    tags: ['cap-p4', 'cap-p5'],
    text: 'Examine the impact of the Great Depression on different political, economic and social groups in American society between 1929 and 1941.',
    notes:
      'The organising discipline is differentiation: the Depression was not one experience. Industrial workers — unemployment near 25 per cent in 1933, Hoovervilles, but also the CIO and union power by 1937. Farmers — prices halved, foreclosures, the Dust Bowl migration (the “Okies”); the AAA raising prices while displacing tenants. African Americans — “last hired, first fired”, urban unemployment far above white rates, exclusion from key New Deal protections, yet the political shift to Roosevelt after 1934. Women — pressure to surrender jobs to men, yet expansion of clerical work. The middle class — bank failures destroying savings, but for those who kept jobs, falling prices meant rising real income. Business and the wealthy — discredited (Pecora hearings), taxed, regulated, and organised in opposition (Liberty League). Political impact: the 1932 realignment and the New Deal coalition. Strong answers cover political, economic and social dimensions with specific evidence for each group and note who recovered by 1941 and who did not.',
  },
  {
    id: 'cap-e10',
    frame: 'E6',
    strand: 'idea',
    era: 'mid',
    demand: 2,
    themes: ['cap-values'],
    tags: ['cap-p3'],
    text: 'Examine the ways in which the nature of American capitalism shaped American values during the 1920s.',
    notes:
      'Candidates should connect the economic system to the culture it produced, using the syllabus examples: film and fashion (Hollywood as the arbiter of aspiration; the beauty industry of Rubinstein and Arden turning appearance into a market); the Jazz Age (leisure, the automobile and the speakeasy loosening older disciplines); Prohibition and the Klan as the counter-attack of an older producer-ethic America against the modern consumer city; social Darwinism and the businessman’s gospel (“the business of America is business”) sanctifying success; and the American Dream restated as consumption and mobility. The analytical core: mass-production capitalism required a culture of spending, advertising manufactured wants, and this collided with values of thrift, sobriety and localism — the cultural civil war of the decade. Strong answers argue a direction of causation (capitalism shaping values, not merely coexisting with them) while acknowledging resistance, and use specific examples from at least three of the syllabus areas.',
  },

  // ---------------- E7 — Evaluate the consequences ----------------
  {
    id: 'cap-e11',
    frame: 'E7',
    strand: 'group',
    era: 'whole',
    demand: 3,
    themes: ['cap-groups'],
    tags: ['cap-p5'],
    text: 'Evaluate the consequences of the divisions between different groups in American society in the period 1901 to 1941.',
    notes:
      'Candidates should identify the major divisions (capital/labour, urban/rural, native-born/immigrant, white/Black, and the dispossession of the Indian Nations) and evaluate their consequences across the period rather than describe the groups. Consequences to weigh: industrial violence and the long weakness of American labour (Ludlow 1914, the 1919 strike wave and Red Scare, company unions) until the Wagner Act reversed the balance; immigration restriction (1921, 1924) reshaping the labour supply and the cities; the Great Migration remaking northern cities and race relations (the 1919 riots, the ghetto); the Klan’s political power in the mid-1920s and the cultural politics of Prohibition; rural collapse feeding radicalism (the Farm Holiday movement) and the Dust Bowl migration; and politically, the assembly of the New Deal coalition from the divided — labour, immigrants, African Americans in the North, the South. An evaluative thread should run through: divisions retarded reform before 1933 (a working class split by race and ethnicity organised late) and then defined the shape reform took. The strongest answers reach a judgement about which division mattered most and defend it.',
  },

  // ---------------- E8 — Role of significant individuals ----------------
  {
    id: 'cap-e12',
    frame: 'E8',
    strand: 'person',
    era: 'early',
    demand: 2,
    themes: ['cap-trusts'],
    tags: ['cap-p2', 'cap-i-troosevelt'],
    text: 'Evaluate the role of Theodore Roosevelt in changing the relationship between government and business in the years 1901 to 1909.',
    notes:
      'Role questions require judgement about the individual’s distinctive contribution, not biography. Evidence for a transforming role: Northern Securities (1904) establishing that the greatest combinations were subject to law; the 1902 anthracite coal strike — the first federal intervention treating labour and capital as equals (“Square Deal”); the Hepburn Act (1906) giving the ICC real rate-setting power; consumer protection (Pure Food and Drug, Meat Inspection, 1906); conservation as a check on private exploitation of resources; and above all the rhetorical transformation — the presidency as “bully pulpit” asserting a public interest above the corporations. Qualifications: TR distinguished “good” from “bad” trusts and busted selectively (Taft brought more suits); concentration continued; and much regulation suited big business by stabilising markets. Historiography: Kolko’s “political capitalism” revision versus the traditional progressive account. The strongest answers weigh personal agency against structural pressures (the muckrakers, middle-class anxiety) that would have forced change under any president.',
  },
  {
    id: 'cap-e13',
    frame: 'E8',
    strand: 'person',
    era: 'whole',
    demand: 2,
    themes: ['cap-consumerism'],
    tags: ['cap-p2', 'cap-i-ford'],
    text: 'Evaluate the role of Henry Ford in shaping the American experience of capitalism in the years 1908 to 1941.',
    notes:
      'Candidates should evaluate Ford’s significance across the period, for and against the claim of transformation. The case for: the Model T (1908) and the moving assembly line (1913) creating true mass production; the five-dollar day (1914) — the insight that workers must be able to buy what they make — founding high-wage consumer capitalism; the car remaking American geography, leisure and credit (though Ford himself resisted instalment selling); “Fordism” as a name adopted worldwide. The case against and complications: the deadening line and the Sociological Department’s surveillance; Ford’s bitter resistance to unions (the Battle of the Overpass, 1937; the UAW recognised only in 1941); his antisemitic publications in the Dearborn Independent; and his loss of market leadership to General Motors, whose annual model and consumer credit better read the consumer economy Ford had created. Strong answers separate the system he built from the man’s own limits and reach a defended judgement about his role in the period as a whole.',
  },
  {
    id: 'cap-e14',
    frame: 'E8',
    strand: 'person',
    era: 'late',
    demand: 2,
    themes: ['cap-newdeal'],
    tags: ['cap-p4', 'cap-i-fdr'],
    text: 'Evaluate the role of Franklin D. Roosevelt in the American recovery from the Great Depression in the years 1933 to 1941.',
    notes:
      'The question requires weighing FDR’s personal contribution against the machinery around him and against results. The case for a decisive role: the Hundred Days and the restoration of confidence (the bank holiday and first fireside chat halting the banking panic within weeks); the political skill that built and held the New Deal coalition; communication — radio intimacy no predecessor had attempted; and the choice of experiment over orthodoxy (“bold, persistent experimentation”). The case for limits: recovery was slow and incomplete — output regained 1929 levels only around 1937 and unemployment stayed near 14 per cent; the 1937 budget-balancing relapse was his own decision; the court-packing fight (1937) squandered political capital; and full employment came with war orders, not domestic policy. Candidates may also weigh advisers (the Brains Trust, Perkins, Hopkins, Eccles) and Congress. Historiography: Leuchtenburg and Kennedy broadly admiring with reservations; conservative critiques of regime uncertainty. A verdict must be argued: e.g. indispensable to saving the system and to security reforms, less successful as an economic engineer.',
  },

  // ---------------- E9 — Significance of ideas ----------------
  {
    id: 'cap-e15',
    frame: 'E9',
    strand: 'idea',
    era: 'whole',
    demand: 3,
    themes: ['cap-values'],
    tags: ['cap-p3', 'cap-p6'],
    text: 'Assess the significance of the idea of the American Dream in shaping American society in the period 1901 to 1941.',
    notes:
      'Candidates should define the idea (success and mobility open to anyone through effort — a term coined by James Truslow Adams in 1931 but naming a much older faith) and assess its work in the period: as motor (immigration before 1924; the Great Migration; the cult of the self-made man from Carnegie’s gospel to the success literature of the twenties; consumer capitalism selling the Dream as goods — the advertisement, the suburban home, the car); as discipline (hostility to unions and to “class politics” — if any man may rise, collective action is un-American; social Darwinism as its harder cousin); and as measure of betrayal (the Depression experienced as the Dream’s failure — hence the force of Roosevelt’s “forgotten man” and the New Deal’s promise of security as the Dream’s reconstruction). The strongest answers treat the Dream as an idea with real historical effects — mobilising, legitimising, consoling and concealing — and assess its significance against material forces, using groups for whom the Dream was systematically closed (African Americans under Jim Crow, the Indian Nations) as the test of its limits.',
  },
  {
    id: 'cap-e16',
    frame: 'E9',
    strand: 'idea',
    era: 'whole',
    demand: 3,
    themes: [],
    tags: ['cap-p6'],
    text: 'Assess the significance of capitalism as an idea in the United States in the period 1901 to 1941.',
    notes:
      'The question asks about capitalism as an idea — a creed argued over — not merely as an economic system. Candidates should trace its career: the confident orthodoxy of 1901 (property, contract, the self-regulating market, social Darwinist defences of inequality); the progressive amendment (the market must be supervised in the public interest — TR’s New Nationalism, Wilson’s New Freedom); the twenties apotheosis (Coolidge’s “the business of America is business”; welfare capitalism; the engineer-businessman as hero, Hoover its embodiment); the crisis of belief after 1929 — the moment the idea itself stood trial, with challengers audible (socialism, Long’s Share Our Wealth, technocracy); and the New Deal settlement — capitalism redefined as compatible with regulation, unions and social security, which is arguably the period’s greatest ideological event. Assessment should weigh the idea’s power to shape policy and behaviour (resistance to relief, the balanced-budget instinct, business opposition to the New Deal) and its capacity to absorb challenge. Strong answers use specific spokesmen and texts as evidence and reach a judgement about continuity versus transformation in the American idea of capitalism by 1941.',
  },

  // ---------------- E10 — Compare ----------------
  {
    id: 'cap-e17',
    frame: 'E10',
    strand: 'group',
    era: 'whole',
    demand: 2,
    themes: ['cap-groups'],
    tags: ['cap-p5'],
    text: 'Compare the experiences of urban workers and rural workers in the United States during the 1920s and the 1930s.',
    notes:
      'A compare question requires similarities and differences argued through, decade by decade. The 1920s: divergence — urban workers gained rising real wages, shorter hours and consumer goods (though welfare capitalism substituted for unions), while rural America stayed depressed after the 1921 collapse: falling prices, foreclosures, tenancy and sharecropping spreading, rural electrification barely begun. The 1930s: convergence in catastrophe but by different routes — urban mass unemployment, breadlines and Hoovervilles versus rural price collapse, foreclosure and the Dust Bowl exodus; then divergent New Deal remedies — the Wagner Act and the CIO transforming urban labour’s power, while the AAA raised prices but displaced tenants, and the REA only began closing the electricity gap. Common threads for similarity: debt and insecurity, internal migration (the Great Migration and the Okies), exclusion of the least powerful (Black workers in both settings) from key protections. Strong answers organise analytically (not two parallel narratives), quantify where possible, and conclude with a judgement about whose position had changed more by 1941.',
  },
];
