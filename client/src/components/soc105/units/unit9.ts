import type { Unit } from "../types";

export const unit9: Unit = {
  id: "u9",
  number: 9,
  title: "Inequality",
  subtitle: "Class, its components, the big theories of stratification, and how poverty is measured and explained",
  sourceUrl: "https://nhwilson.github.io/chapters/Ch_9_Inequality.html",
  bigPoints: [
    {
      point: "Durable social markers are scarce and distributed unequally — and who gets more is patterned, not random.",
      detail:
        "A marker is distributed unequally when some people have more of it and some less; that only matters because the marker is scarce (not everyone can have all they want). When social dynamics decide who gets more and who gets less, you have structural inequality. Class is the modern system; slavery (free vs. unfree), caste (religion assigns status by birth and blocks movement), and ethnic inequality (shared cultural identities made salient against others) are the historical alternatives.",
    },
    {
      point: "Class has four agreed components and one controversial one.",
      detail:
        "Real income (earnings adjusted for inflation, and often for regional purchasing power), wealth (net worth = assets − debts), education (years of schooling or highest degree), and occupation (paid or unpaid employment, varying in pay, required education, and prestige). Lifestyle — what people consume, how they’re educated, who they associate with, their cultural judgments — is the controversial fifth element; Lareau’s natural growth vs. concerted cultivation is the key evidence.",
    },
    {
      point: "Each major theory adds a dimension the previous one missed.",
      detail:
        "Marx: class = relationship to the means of production (bourgeoisie own it; the proletariat sell labor power as a commodity); inequality worsens under capitalism absent regulation (validated by Piketty), though the predicted revolution never came. Wright: contradictory class locations blur the capitalist/worker gap. Davis & Moore (functionalists): inequality is “necessary” — a tautological argument. Weber: add social status (esteem). Bourdieu: add cultural capital (the ability to make judgments and claim they are legitimate).",
    },
    {
      point: "Poverty is always poverty relative to some standard — and its causes are contested.",
      detail:
        "Absolute poverty uses the cost of basic needs (the federal line = 3× a nutritionally adequate diet, not cost-of-living adjusted); relative poverty uses mainstream society’s standards, which matter for health. The U.S. class map: upper ≈5%, an amorphous middle ≈55%, working ≈20%, lower ≈20%. “Class Matters” works like a natural experiment. Structural vs. cultural explanations of poverty compete. Worldwide, extreme poverty has fallen remarkably over ~200 years and is nearly absent in developed economies.",
    },
  ],
  connections: [
    "Unit 9 builds on Units 5–6: the durable parts of your social identity that carry across settings are exactly the markers that, in complex societies, are distributed unequally — so almost every social structure exhibits some form of inequality.",
    "It cashes out earlier theory: Marx’s class theory is Unit 3’s conflict theory in full, Davis & Moore are Unit 3’s structural functionalism applied to inequality, labor power sold for a wage is Unit 2’s commodity, Bourdieu echoes Unit 4’s meaning as a vector of power, and median net worth and “Class Matters” reuse Unit 3’s methods (median, natural-experiment logic).",
    "It also returns to Unit 1: whether poverty reflects personal failings or structural factors is Mills’ distinction between private troubles and public issues, now applied to one of the biggest controversies in contemporary society.",
  ],
  concepts: [
    {
      id: "u9-unequal-distribution",
      term: "Unequal distribution (unequally)",
      tier: 2,
      plainIdea:
        "Picture a pizza at a party: some people get three slices, some get none. A marker is distributed unequally when, inside one society, some people simply have more of it and others less.",
      courseDefinition:
        "In modern societies, durable markers of social identity are almost always distributed unequally: within a given society, some people have more of that marker, and some less.",
      freshExample:
        "In one apartment building, some tenants have two parking spots, some have one, and some have none.",
      notToConfuse:
        "Structural inequality adds that who gets more or less is determined by social markers (patterned, not random). Unequal distribution just says the amounts differ.",
    },
    {
      id: "u9-scarcity",
      term: "Scarcity",
      tier: 2,
      plainIdea:
        "Unequal shares only matter if there isn’t enough for everyone to have all they want. Scarcity is that “not infinite” quality — like seats on the last bus home.",
      courseDefinition:
        "A key factor of unequal distribution: the marker in question is subject to scarcity — there is not an infinite supply of it, and so not everyone can have all they want. Money, for example, is scarce because the world of goods and other people’s time is not infinite.",
      freshExample:
        "Only 40 spots in the popular nursing clinical rotation, but 200 students want one — not everyone can get what they want.",
      notToConfuse:
        "Scarcity is about limited supply; unequal distribution is about how that supply is split. If a marker were truly unlimited (everyone could have all they want), it couldn’t anchor inequality.",
    },
    {
      id: "u9-structural-inequality",
      term: "Structural inequality",
      tier: 1,
      plainIdea:
        "It’s not just that some have more — it’s that who ends up with more follows a pattern set by social markers, the way a tilted table keeps rolling marbles to the same side.",
      courseDefinition:
        "As social dynamics play out, structural inequalities in the distribution of something scarce (like money) emerge: who gets more and who gets less tends to be determined by social markers, which we tend to group under the broad term “class.” Class, slavery, caste, and ethnic inequality are all systems of structural inequality.",
      freshExample:
        "In a company, raises keep going to people who went to the same few colleges as the bosses — the pattern follows a social marker, not chance.",
      notToConfuse:
        "Not just “some people have more” (unequal distribution) — the key is that social markers determine who gets more. Ties to Unit 2’s structure: patterned factors you encounter as given.",
    },
    {
      id: "u9-class",
      term: "Class",
      tier: 1,
      plainIdea:
        "Class isn’t about being elegant or which classroom you’re in. It’s your position in the modern system of inequality, built mainly from how much you earn, what you own, how much schooling you have, and what work you do.",
      courseDefinition:
        "A very broad concept grouping the social markers that determine who gets more and who gets less. Sociologists agree it centers on four elements — real income, wealth, education, and occupation — and there is controversy about a fifth: lifestyle.",
      freshExample:
        "Two cousins: one is a pharmacist with a graduate degree, a paid-off condo, and a six-figure salary; the other works part-time at a gas station with a GED and no savings. They differ in class on every component.",
      notToConfuse:
        "Not “classy” (refined, elegant) and not a school class. Also not caste: class has no religious rule fixing your position at birth.",
    },
    {
      id: "u9-slavery",
      term: "Slavery",
      tier: 1,
      plainIdea:
        "The most extreme system: some people are literally owned by others, along with their labor. The big divide isn’t rich vs. poor — it’s free vs. unfree.",
      courseDefinition:
        "A historical system of structural inequality where some people (and thus their labor) were directly owned by others; the major axis of inequality was freedom and unfreedom.",
      freshExample:
        "A legal code that lets one person be bought, sold, and inherited as property, with no right to leave or keep wages.",
      notToConfuse:
        "A low-wage worker who “feels like a slave” still sells their labor power and can quit — that’s class (proletariat), not slavery. Tell: is the person legally owned?",
    },
    {
      id: "u9-caste",
      term: "Caste",
      tier: 1,
      plainIdea:
        "Your rank is stamped on you at birth by religion, and the rules say you can’t move out of it or freely mix with people of other ranks.",
      courseDefinition:
        "A system (still present in some parts of the world) in which religion prescribed certain social statuses on people by virtue of their birth, and prohibited some kinds of inter-caste interactions and movement between classes over the life course.",
      freshExample:
        "A fictional island where temple law assigns each newborn their parents’ rank and forbids people of different ranks from sharing a meal or marrying.",
      notToConfuse:
        "Class: position built from income, wealth, education, occupation — no religious rule forbids moving. Ethnic inequality: centered on shared cultural identity, not religious birth-status.",
    },
    {
      id: "u9-ethnic-inequality",
      term: "Ethnic inequality",
      tier: 1,
      plainIdea:
        "Inequality organized around groups that share a cultural identity — an identity that becomes noticeable and important precisely because it’s set against other groups in the same society.",
      courseDefinition:
        "A system of structural inequality centered on shared cultural identities that are made salient in contrast to other identities in a society.",
      freshExample:
        "In a fictional country, people who speak the minority language at home are steered away from government jobs, and the language only becomes a big marker because the majority speaks another one.",
      notToConfuse:
        "Caste is religion assigning status by birth with rules against movement; slavery is ownership. Ethnic inequality’s axis is a shared cultural identity made salient in contrast to others.",
    },
    {
      id: "u9-real-income",
      term: "Real income",
      tier: 1,
      plainIdea:
        "Your paycheck, but measured in what it can actually buy. A raise that only keeps up with rising prices isn’t really a raise.",
      courseDefinition:
        "The first major element of class: the money wages and earnings of a person as adjusted for inflation. For most people in the U.S., real income is the key determinant of their economic well-being.",
      freshExample:
        "Your aunt’s hourly pay went from $18 to $20 over five years, but groceries and rent rose even faster — her real income actually fell.",
      notToConfuse:
        "Wealth is a stock (net worth = assets − debts); income is a flow of earnings. Purchasing power adjusts income for regional cost of living, not for change over time.",
    },
    {
      id: "u9-inflation",
      term: "Inflation",
      tier: 2,
      plainIdea:
        "Prices creep up, so the same dollar buys less every year — like a candy bar that cost 50¢ when your parents were kids.",
      courseDefinition:
        "Under typical economic conditions, the same amount of money loses its purchasing power (the amount of goods it can be used to buy) over time; this is why income must be adjusted for inflation. Modern monetary policy usually aims for a low level of inflation to prevent deflationary spirals and encourage spending rather than hoarding.",
      freshExample:
        "A $10 movie ticket in your childhood now costs about $17 at the same theater.",
      notToConfuse:
        "Inflation is change over time; regional purchasing power is difference across places at the same time.",
    },
    {
      id: "u9-purchasing-power",
      term: "Regional purchasing power",
      tier: 2,
      plainIdea:
        "The same salary stretches much further in some places than others. A $70k job in a cheap town can beat a $95k job in a city where rent eats half your pay.",
      courseDefinition:
        "Another major adjustment commonly made to income: the cost of living in different places can be wildly different (even within the U.S.), so the same amount of money does not go nearly as far in some places as in others.",
      freshExample:
        "Two physical therapists earn the same salary, but one pays $3,400 a month for a studio in a big coastal city while the other pays $900 for a two-bedroom in a small town.",
      notToConfuse:
        "Inflation adjusts across time; purchasing power (in this regional sense) adjusts across places. Both are adjustments to income, not separate components of class.",
    },
    {
      id: "u9-wealth",
      term: "Wealth (net worth)",
      tier: 1,
      plainIdea:
        "Not what you earn, but what you’d have if you sold everything you own and paid off everything you owe. A big salary with bigger debts can still mean little wealth.",
      courseDefinition:
        "An element of class usually measured by “net worth”: the total value of all your debts (loans, etc.) subtracted from the total value of all your assets (real estate, cars, stocks, money, etc.). Harder to measure than income, because most people know their income from pay stubs and taxes but not the total value of their debts and assets.",
      freshExample:
        "A retired bus driver with a modest pension but a paid-off house and a large retirement account can have far more wealth than a young lawyer with a big salary and huge student loans.",
      notToConfuse:
        "Income is a flow of earnings; wealth is the stock left after subtracting debts from assets. “Wealthy” in everyday speech often just means high-earning.",
    },
    {
      id: "u9-education",
      term: "Education",
      tier: 1,
      plainIdea:
        "How much formal schooling you’ve had — counted in years or by the highest diploma or degree you’ve earned.",
      courseDefinition:
        "A major element of class: the total amount of formal training someone has received, usually measured by their total years of schooling or highest degree received. In the U.S. it has changed historically: high-school and college completion have risen dramatically since the 1940s.",
      freshExample:
        "A census form asking “What is the highest degree or level of school you have completed?” is measuring this component of class.",
      notToConfuse:
        "Not the same as lifestyle’s “how people are educated” in a cultural sense, and not occupation (which may require education but is about employment).",
    },
    {
      id: "u9-occupation",
      term: "Occupation (and occupational prestige)",
      tier: 1,
      plainIdea:
        "What you do with your working time — paid or not. Jobs differ in pay, in how much schooling they require, and in how much respect they get, which is why some rank higher in prestige than others.",
      courseDefinition:
        "A component of class: a person’s paid or unpaid employment. Occupations vary in how they are paid, how much education they require, and how they are seen by others (the status they carry) — captured by rankings of occupational prestige.",
      freshExample:
        "A pilot and a flight attendant work the same flights, but the pilot’s job requires more training, pays more, and is ranked higher in prestige.",
      notToConfuse:
        "Not just “your paid job title” — unpaid employment counts. And it isn’t the same as income: two occupations can pay similarly but differ in prestige.",
    },
    {
      id: "u9-lifestyle",
      term: "Lifestyle (the controversial element)",
      tier: 1,
      plainIdea:
        "Class may show up not just in your bank account but in how you live: what you buy, who you hang out with, what you think is good taste. Sociologists argue about whether this belongs in “class.”",
      courseDefinition:
        "The controversial component of class: what people consume, how they are educated, who they associate with, and even the kinds of cultural judgments they make. Evidence includes Lareau’s class-based styles of socialization and differences in cultural taste (e.g., the appeal of classical music rises with subjective class).",
      freshExample:
        "Two coworkers with identical pay: one spends weekends at farmers’ markets and gallery openings with other professionals, the other at the bowling alley with high-school friends.",
      notToConfuse:
        "The four agreed components are real income, wealth, education, occupation; lifestyle is the disputed fifth. Not “lifestyle” as an influencer aesthetic.",
    },
    {
      id: "u9-natural-growth",
      term: "Accomplishment of natural growth (Lareau)",
      tier: 2,
      thinker: "Annette Lareau",
      plainIdea:
        "Kids are left to grow up on their own schedule — lots of unstructured free time — and they get little practice pushing back when someone in charge makes a call against them.",
      courseDefinition:
        "The style of socialization Lareau found among working-class families: comparatively little structured play and relatively little experience in challenging adverse decisions by authorities.",
      freshExample:
        "After school, the kids ride bikes around the block until dinner, and when a referee makes a bad call, they shrug and keep playing.",
      notToConfuse:
        "Concerted cultivation (middle class): heavily scheduled institutional activities plus being taught to question and challenge decisions. Tell: who structures the time, and do kids learn to argue with authority?",
    },
    {
      id: "u9-concerted-cultivation",
      term: "Concerted cultivation (Lareau)",
      tier: 2,
      thinker: "Annette Lareau",
      plainIdea:
        "Childhood as a project: a packed calendar of organized activities, and kids coached to speak up and challenge adults who make decisions they don’t like.",
      courseDefinition:
        "The style practiced by middle-class families in Lareau’s study: socializing children into highly structured institutional play while teaching them to question and challenge decisions they disagree with.",
      freshExample:
        "A ten-year-old with robotics club Monday, swim team Wednesday, and Mandarin tutoring Saturday, whose parents rehearse with her how to ask her teacher to regrade a quiz.",
      notToConfuse:
        "Natural growth (working class): little structured play, little practice challenging authority. Both are styles of primary socialization (Unit 5), and they are evidence for lifestyle as a part of class.",
    },
    {
      id: "u9-marx-means-of-production",
      term: "Means of production (Marx)",
      tier: 1,
      thinker: "Karl Marx",
      plainIdea:
        "The machines, tools, and facilities you need to actually make the stuff people live on. For Marx, the question “do you own them or not?” decides your class.",
      courseDefinition:
        "The machinery necessary to actually produce what is necessary to survive and live in modern societies. For Marx, one’s class position was defined by one’s relationship to the means of production.",
      freshExample:
        "A commercial bakery’s ovens, mixers, and delivery vans — whoever owns them vs. whoever is hired to run them.",
      notToConfuse:
        "Not income or education (other components of class) and not social status (Weber). Marx’s single question is ownership of productive machinery.",
    },
    {
      id: "u9-bourgeoisie",
      term: "Bourgeoisie (capitalists)",
      tier: 1,
      thinker: "Karl Marx",
      plainIdea:
        "The owners. They own the factories, equipment, and businesses that others are hired to work in.",
      courseDefinition: "In Marx’s theory, the people in society who own the means of production; also called capitalists.",
      freshExample:
        "The owner of a fleet of 50 delivery trucks who hires drivers to run the routes.",
      notToConfuse:
        "Not simply “rich people” or high earners. A highly paid employee who owns no means of production is still a worker in Marx’s scheme.",
    },
    {
      id: "u9-proletariat",
      term: "Proletariat (workers)",
      tier: 1,
      thinker: "Karl Marx",
      plainIdea:
        "Everyone who doesn’t own the means of production and so has to rent out their ability to work. Your wage is the market price of your labor.",
      courseDefinition:
        "Under capitalism, the vast bulk of society: workers who sell their own labor power as though it is a commodity. A “wage” is the price your labor is worth on the market of labor power.",
      freshExample:
        "A hospital nurse, a software tester, and a warehouse picker — all paid wages for their labor, none owning the hospital, company, or warehouse.",
      notToConfuse:
        "Not just blue-collar factory workers, and not just the poor. Anyone selling labor power for a wage counts. Ties to Unit 2’s commodity: labor sold on a market.",
    },
    {
      id: "u9-immiseration",
      term: "Worsening inequality under capitalism (immiseration)",
      tier: 3,
      thinker: "Karl Marx; validated by Thomas Piketty",
      plainIdea:
        "Marx thought capitalism, left alone, keeps piling wealth onto the owners while squeezing workers. The revolution he expected didn’t happen — but the “left alone, inequality grows” part has held up.",
      courseDefinition:
        "A key dynamic of capitalism according to Marx: inequality would worsen, concentrating wealth in the hands of capitalists and progressively immiserating the proletariat. Marx (mistakenly) thought this would inevitably lead to a global worker-led revolution instituting communism. What careful analysis by an economist (Piketty 2017) has validated is that, in the absence of regulation, inequality worsens under capitalism.",
      freshExample:
        "A town where, after rules on rent and wages are removed, property owners’ share of total wealth climbs year after year while renters’ share shrinks.",
      notToConfuse:
        "Two separate claims with different fates: worsening inequality absent regulation (validated) vs. inevitable worker revolution (mistaken).",
    },
    {
      id: "u9-contradictory-class-locations",
      term: "Contradictory class locations (E. O. Wright)",
      tier: 1,
      thinker: "Erik Olin Wright",
      plainIdea:
        "Lots of real people are a bit owner and a bit worker at the same time, so Marx’s clean two-box picture doesn’t fit them.",
      courseDefinition:
        "Positions that don’t fit Marx’s austere gap between capitalists and workers: workers who have aspects of management in their work, own their own small business and still work, or (even more frequently) depend on retirement income from stocks and bonds, making them very small-scale, indirect capitalists. Wright noted they were becoming more widespread and complicate the dynamics of capitalist change.",
      freshExample:
        "An electrician who owns his one-van business, still does the wiring himself, employs one apprentice, and has a 401(k) invested in stocks.",
      notToConfuse:
        "Not Weber’s status (esteem) — Wright stays on the economic axis, but shows people straddling owner and worker. Not Marx, who saw a sharp two-class gap.",
    },
    {
      id: "u9-functionalist-inequality",
      term: "Functionalist theory of inequality (Davis & Moore)",
      tier: 2,
      thinker: "Kingsley Davis & Wilbert Moore",
      plainIdea:
        "Inequality exists because society “needs” it: the most valuable jobs must be rewarded more. The catch — the reward is then used as proof the job was valuable, which is circular.",
      courseDefinition:
        "Where Marxism sees conflict among classes with competing interests, functionalists emphasize social order; their theory of inequality emphasizes its “necessity” (Davis and Moore 1945): society “needs” to differentially reward people who perform tasks more “valuable” for the overall social order, and these rewards are evidence (tautologically) of those tasks’ increased importance.",
      freshExample:
        "“Hedge-fund managers are paid more than kindergarten teachers, which shows their work matters more to society” — the pay is used to prove the importance that supposedly justifies the pay.",
      notToConfuse:
        "Marx (conflict theory) sees inequality as the result of competing interests, not a societal need. This is Unit 3’s structural functionalism applied to stratification.",
    },
    {
      id: "u9-social-status",
      term: "Social status (Weber)",
      tier: 1,
      thinker: "Max Weber",
      plainIdea:
        "How much respect people give your position. Some positions get lots of esteem without much money or ownership — which Marx’s owner/worker split can’t see.",
      courseDefinition:
        "The ways that people evaluate the positions and esteem of others in a society. Weber recognized class as also a composite of social status — a different axis of inequality that creates positions not fitting neatly into the capitalist/worker distinction and gives positions among “workers” very different identities.",
      freshExample:
        "A small-town librarian who earns modestly and owns no business, but whom the whole town treats with great respect and turns to for advice.",
      notToConfuse:
        "Cultural capital (Bourdieu) is the ability to make judgments and claim they’re authoritative — not just esteem others grant a position. And it’s not social-media “status.”",
    },
    {
      id: "u9-cultural-capital",
      term: "Cultural capital (Bourdieu)",
      tier: 1,
      thinker: "Pierre Bourdieu",
      plainIdea:
        "Not just having taste, but having the standing to declare what counts as good taste — and have others accept your verdict as legitimate.",
      courseDefinition:
        "Another neglected dimension of inequality and class (Bourdieu, Distinction, 1984): the ability of people not only to make judgments themselves, but also to claim that those judgments are authoritative and legitimate. It rarely correlates directly with other markers of class, following a dynamic all its own.",
      freshExample:
        "A respected wine writer whose verdict that a cheap bottle is “excellent” makes restaurants rush to stock it — her judgment is treated as authoritative.",
      notToConfuse:
        "Not money (you can’t simply buy it) and not just being “cultured.” Weber’s status is esteem for a position; cultural capital is the claim to legitimate judgment. Echoes Unit 4: meaning as a vector of power.",
    },
    {
      id: "u9-absolute-poverty",
      term: "Absolute poverty",
      tier: 1,
      plainIdea:
        "Poor measured against a fixed bar: can you cover basic life needs? The U.S. government draws that bar from the cost of food.",
      courseDefinition:
        "A measure of poverty according to the costs of fulfilling basic life needs. The U.S. federal government sets the “poverty line” at three times the assumed cost of a nutritionally adequate diet per person; it is not regionally or cost-of-living adjusted (except for Alaska and Hawaii).",
      freshExample:
        "A single adult earning a bit above the federal line in a city with sky-high rent is not officially “poor,” because the line ignores local cost of living.",
      notToConfuse:
        "Relative poverty compares you to mainstream society’s standards. Tell: is the yardstick “basic needs” (absolute) or “what’s normal around here” (relative)?",
    },
    {
      id: "u9-relative-poverty",
      term: "Relative poverty",
      tier: 1,
      plainIdea:
        "Poor compared with everyone around you. Even with food and shelter, being far below what’s normal in your society takes a toll — including on your health.",
      courseDefinition:
        "Poverty measured relative to the standards of mainstream society. Used because there is lots of evidence that feeling poor relative to the rest of society has numerous poor effects on one’s life, including physical and mental health (Pickett and Wilkinson 2008).",
      freshExample:
        "A teen whose family can pay for food and rent but not for a phone, internet, or school trips that nearly all classmates take for granted.",
      notToConfuse:
        "Absolute poverty uses the cost of basic needs. The notes describe the U.S. as having very high levels of relative poverty.",
    },
    {
      id: "u9-class-map",
      term: "The U.S. class map",
      tier: 3,
      plainIdea:
        "Roughly: a small upper class, a huge and blurry middle, and a working class and lower class of about a fifth each.",
      courseDefinition:
        "Upper class: families making more than about $250,000, elite schooling, wealth mostly from investment dividends — about 5%. Middle class: notoriously amorphous, about 55% (upper middle $125k–$250k, highly educated professionals; middle middle $60k–$125k, skilled crafts and less-educated office workers). Working class: about 20%, less-skilled tradespeople and office workers, ~$30k–$60k. Lower class: about 20%, low-wage full-time (retail/service), part-time, or not working, usually below $30k.",
      freshExample:
        "Ask a lecture hall “who’s middle class?” and most hands go up — which fits a middle class that is both the largest group and very loosely defined.",
      notToConfuse:
        "The four levels mix all components of class (income, education, occupation, sources of wealth) — they aren’t Marx’s two classes.",
    },
    {
      id: "u9-class-matters",
      term: "“Class Matters” (natural-experiment logic)",
      tier: 3,
      plainIdea:
        "Give three people the same medical emergency and watch what happens. If their outcomes split along class lines, class is doing the work.",
      courseDefinition:
        "The assigned reading follows three New Yorkers from different classes who had the same kind of heart attack. It mimics a natural experiment: the same medical issue, so what explains their different health outcomes is not their injuries but their class positions, which determine the quality of their care and their ability to concentrate on recovery.",
      freshExample:
        "Three people tear the same knee ligament in the same pickup game; the one with great insurance and paid leave recovers fully, while the one who can’t stop working never quite heals.",
      notToConfuse:
        "It isn’t a lab experiment (no one intervened); it mimics one by holding the condition constant (Unit 3’s experiment logic).",
    },
    {
      id: "u9-culture-of-poverty",
      term: "Structural vs. cultural explanations of poverty (“cultures of poverty”)",
      tier: 3,
      plainIdea:
        "Why are people poor? One side points to forces beyond any individual’s control; the other says certain learned habits keep people poor. The everyday version is “they just don’t work hard enough.”",
      courseDefinition:
        "One of the greatest controversies in contemporary society. In U.S. politics, about a third of the population holds that the poor (especially the racialized poor) do not work hard enough. In social science, competing poles argue either that poverty happens because of structural factors out of the control of any individual or subculture, or that specific cultural factors (socialization into a lack of effort, lack of knowledge of how to save, etc.) keep people poor. Observers note that about a third of poor people 16+ worked in the last year and that poverty is disproportionately Black and Latino.",
      freshExample:
        "Structural: “the town’s only plant closed and the bus line to the next city was cut.” Cultural: “kids here grow up never learning to budget.”",
      notToConfuse:
        "Structural explanations echo Unit 2’s structure and Unit 1’s public issues; cultural explanations locate the cause in a group’s learned habits.",
    },
    {
      id: "u9-world-poverty",
      term: "World poverty trends",
      tier: 3,
      plainIdea:
        "Zoom out to the whole planet and two centuries: extreme poverty has dropped dramatically, and richer countries have almost none of it.",
      courseDefinition:
        "Two major trends: (1) poverty has fallen, by most measures, remarkably over the last 200 years; (2) there is a high correlation between reduction in extreme (absolute) poverty and a country’s overall economic development — wealthy economies have almost no absolute poverty, poorer economies have more.",
      freshExample:
        "Comparing two neighboring countries, the one whose economy has grown much larger has a far smaller share of people living in extreme poverty.",
      notToConfuse:
        "This is about absolute (extreme) poverty. Relative poverty can stay high even in a wealthy country — the U.S. shows very high levels of it.",
    },
  ],
  contrastSets: [
    {
      id: "u9-cs-systems",
      title: "Slavery vs. caste vs. ethnic inequality vs. class",
      conceptIds: ["u9-slavery", "u9-caste", "u9-ethnic-inequality", "u9-class", "u9-structural-inequality"],
      axis:
        "What the system’s main axis of inequality is: ownership of persons (free vs. unfree), religiously prescribed birth-status with bans on mixing and movement, shared cultural identities made salient against others, or position built from income, wealth, education, and occupation.",
      test: "Is the person owned (slavery), ranked by religion at birth with no movement (caste), ranked by a cultural-identity group (ethnic), or ranked by earnings, assets, schooling, and work (class)?",
    },
    {
      id: "u9-cs-scarcity-structural",
      title: "Unequal distribution vs. scarcity vs. structural inequality",
      conceptIds: ["u9-unequal-distribution", "u9-scarcity", "u9-structural-inequality"],
      axis:
        "Unequal distribution: some have more, some less. Scarcity: there isn’t enough for everyone to have all they want. Structural inequality: social markers determine who gets more.",
      test: "Is the point that amounts differ (unequal), that supply is limited (scarcity), or that the split follows social markers (structural)?",
    },
    {
      id: "u9-cs-components",
      title: "The four agreed components of class + the controversial one",
      conceptIds: ["u9-real-income", "u9-wealth", "u9-education", "u9-occupation", "u9-lifestyle"],
      axis:
        "Real income (earnings, inflation-adjusted), wealth (assets − debts), education (years or highest degree), occupation (paid or unpaid employment) are agreed; lifestyle (consumption, associations, cultural judgments) is disputed.",
      test: "Is it a paycheck (income), a balance sheet (wealth), a diploma (education), a job (occupation), or tastes and social circles (lifestyle — the controversial one)?",
    },
    {
      id: "u9-cs-income-wealth",
      title: "Income vs. wealth",
      conceptIds: ["u9-real-income", "u9-wealth"],
      axis: "Income is a flow of earnings (wages over time); wealth is net worth — everything you own minus everything you owe.",
      test: "Is it money coming in each year (income) or what’s left if you sold all your assets and paid all your debts (wealth)?",
    },
    {
      id: "u9-cs-income-adjustments",
      title: "Nominal vs. real income vs. regional purchasing power",
      conceptIds: ["u9-real-income", "u9-inflation", "u9-purchasing-power"],
      axis:
        "Real income adjusts dollar earnings for inflation (change over time); regional purchasing power adjusts for cost of living (difference across places).",
      test: "Are you comparing the same dollars across years (inflation → real income) or across cities at the same time (purchasing power)?",
    },
    {
      id: "u9-cs-lareau",
      title: "Natural growth vs. concerted cultivation (Lareau)",
      conceptIds: ["u9-natural-growth", "u9-concerted-cultivation", "u9-lifestyle"],
      axis:
        "Working-class natural growth: little structured play, little experience challenging authority. Middle-class concerted cultivation: highly structured institutional play, taught to question and challenge decisions.",
      test: "Is the kid’s time organized by institutions, and is the kid being taught to push back on adults’ decisions? Yes → concerted cultivation.",
    },
    {
      id: "u9-cs-bourgeoisie-proletariat",
      title: "Bourgeoisie vs. proletariat (Marx)",
      conceptIds: ["u9-bourgeoisie", "u9-proletariat", "u9-marx-means-of-production"],
      axis: "Owning the means of production vs. selling one’s labor power for a wage.",
      test: "Does the person own the productive machinery others work with (bourgeoisie), or get paid a wage to work with someone else’s (proletariat)? Ignore how much they earn.",
    },
    {
      id: "u9-cs-marx-wright",
      title: "Marx vs. Wright (contradictory class locations)",
      conceptIds: ["u9-bourgeoisie", "u9-proletariat", "u9-contradictory-class-locations"],
      axis:
        "Marx: an austere gap between capitalists and workers. Wright: many positions straddle it (managers, owner-workers, retirees living off stocks), and they’re spreading.",
      test: "Does the person fit cleanly in one box, or are they partly owner and partly worker?",
    },
    {
      id: "u9-cs-marx-functionalist",
      title: "Marx (conflict) vs. Davis & Moore (functionalist) on inequality",
      conceptIds: ["u9-immiseration", "u9-functionalist-inequality", "u3-conflict-theory", "u3-structural-functionalism"],
      axis:
        "Conflict: inequality reflects classes with competing interests and worsens absent regulation. Functionalist: inequality is “necessary” to reward valuable tasks — with rewards tautologically taken as proof of value.",
      test: "Is inequality explained as one group’s gain at another’s expense (Marx), or as something society needs for order (Davis & Moore)?",
      crossUnit: true,
    },
    {
      id: "u9-cs-marx-weber",
      title: "Marx vs. Weber (economic position vs. + social status)",
      conceptIds: ["u9-marx-means-of-production", "u9-social-status"],
      axis:
        "Marx (and functionalists) focus overwhelmingly on economic factors; Weber adds social status — how people evaluate positions and esteem — a separate axis.",
      test: "Is the position ranked by what you own (Marx) or by how much esteem people grant it (Weber)?",
    },
    {
      id: "u9-cs-status-cultural-capital",
      title: "Weber’s social status vs. Bourdieu’s cultural capital",
      conceptIds: ["u9-social-status", "u9-cultural-capital"],
      axis:
        "Status: the esteem others grant a position. Cultural capital: the ability to make judgments and claim they are authoritative and legitimate.",
      test: "Is the person simply respected (status), or is their verdict on what’s good accepted as legitimate (cultural capital)?",
    },
    {
      id: "u9-cs-absolute-relative",
      title: "Absolute vs. relative poverty",
      conceptIds: ["u9-absolute-poverty", "u9-relative-poverty"],
      axis: "The standard: the cost of basic life needs (absolute) vs. the standards of mainstream society (relative).",
      test: "Is the yardstick a fixed basic-needs cost (absolute) or what’s normal in the surrounding society (relative)?",
    },
    {
      id: "u9-cs-structural-cultural",
      title: "Structural vs. cultural explanations of poverty (and troubles vs. issues)",
      conceptIds: ["u9-culture-of-poverty", "u2-structure", "u1-troubles", "u1-issues"],
      axis:
        "Structural: factors out of the control of any individual or subculture. Cultural: specific learned habits (lack of effort, not knowing how to save) keep people poor.",
      test: "Does the explanation point to forces no one in the group controls (structural), or to the group’s own learned habits (cultural)?",
      crossUnit: true,
    },
    {
      id: "u9-cs-commodity-labor",
      title: "Commodity (U2) and labor power (U9)",
      conceptIds: ["u2-commodity", "u9-proletariat"],
      axis:
        "Unit 2: commodities are things produced and sold at a profit. Unit 9: Marx says workers sell their labor power as though it were a commodity — the wage is its market price.",
      test: "Is the thing being sold a product (commodity) or a person’s capacity to work (labor power, priced as a wage)?",
      crossUnit: true,
    },
    {
      id: "u9-cs-median-wealth",
      title: "Median (U3) and wealth gaps (U9)",
      conceptIds: ["u3-central-tendency", "u9-wealth"],
      axis:
        "The wealth comparison uses the median net worth of each group — the middle household — so a handful of extreme fortunes don’t drag the figure the way they would a mean.",
      test: "Does the statistic describe the middle household of the group (median) or the simple average (mean)?",
      crossUnit: true,
    },
    {
      id: "u9-cs-class-matters-experiment",
      title: "Experiment (U3) vs. “Class Matters” as a natural experiment",
      conceptIds: ["u3-experiment", "u9-class-matters"],
      axis:
        "An experiment intervenes and compares outcomes with and without the intervention; “Class Matters” only mimics this — nature supplies the same condition (a heart attack), and class is the difference.",
      test: "Did a researcher intervene (experiment), or did the same event happen to people who differ mainly in class (natural-experiment logic)?",
      crossUnit: true,
    },
    {
      id: "u9-cs-bourdieu-power",
      title: "Meaning as power (U4) / fields (U3) and cultural capital (U9)",
      conceptIds: ["u4-meaning-power", "u3-field-theory", "u9-cultural-capital"],
      axis:
        "Unit 4: meaning can justify inequality; Unit 3: actors in a field struggle over the meaning of shared action. Bourdieu’s cultural capital is the power to make one’s judgments of meaning count as legitimate.",
      test: "Is the question about meaning dividing/justifying in general (U4), a struggle within a field (U3), or one class-linked ability to claim authoritative judgment (U9)?",
      crossUnit: true,
    },
    {
      id: "u9-cs-lareau-socialization",
      title: "Primary socialization (U5) shaped by class (Lareau)",
      conceptIds: ["u5-primary-socialization", "u9-natural-growth", "u9-concerted-cultivation"],
      axis:
        "Primary socialization is how children first learn to be social; Lareau shows class shapes which style they learn — and that style follows them into institutions.",
      test: "Is the question about socialization in general (U5), or about how class position produces different socialization styles (U9)?",
      crossUnit: true,
    },
  ],
  falseFriends: [
    {
      id: "u9-ff-class",
      conceptId: "u9-class",
      term: "Class",
      everyday: "Being “classy” — elegant, polite, well-dressed — or a course you’re enrolled in.",
      course: "A position in the system of structural inequality, built from real income, wealth, education, and occupation (and, controversially, lifestyle).",
      trap: "You’ll pick an answer about manners or style when the question is about earnings, assets, schooling, and work.",
    },
    {
      id: "u9-ff-wealth",
      conceptId: "u9-wealth",
      term: "Wealth",
      everyday: "Being rich — usually meaning a big salary.",
      course: "Net worth: the total value of your assets minus the total value of your debts.",
      trap: "A high earner with huge debts and no assets has little wealth; a modest earner with a paid-off house and savings may have a lot.",
    },
    {
      id: "u9-ff-income",
      conceptId: "u9-real-income",
      term: "Income",
      everyday: "The dollar number on your paycheck.",
      course: "Real income: wages and earnings adjusted for inflation — and often also adjusted for regional purchasing power.",
      trap: "Comparing raw dollar figures across decades or across cities misleads; the course compares what the money can actually buy.",
    },
    {
      id: "u9-ff-capital",
      conceptId: "u9-cultural-capital",
      term: "Capital / cultural capital",
      everyday: "Money to invest — or just being artsy and “cultured.”",
      course: "Bourdieu: the ability to make judgments and to claim those judgments are authoritative and legitimate. It rarely correlates directly with money.",
      trap: "A rich collector who buys expensive art doesn’t thereby have cultural capital if no one accepts their judgments as legitimate.",
    },
    {
      id: "u9-ff-status",
      conceptId: "u9-social-status",
      term: "Status",
      everyday: "Fame, follower counts, or a social-media status update.",
      course: "Weber: the ways people evaluate the positions and esteem of others — an axis of inequality separate from economic position.",
      trap: "Picking “popularity” or “being trending” misses that status is the esteem attached to a social position.",
    },
    {
      id: "u9-ff-poverty",
      conceptId: "u9-absolute-poverty",
      term: "Poverty",
      everyday: "One obvious condition — you either are poor or you aren’t.",
      course: "Always poor relative to some standard: absolute poverty (cost of basic needs) or relative poverty (mainstream society’s standards).",
      trap: "A person can be not poor by the absolute (federal) measure yet poor by the relative one; the answer depends on which standard is named.",
    },
    {
      id: "u9-ff-middle-class",
      conceptId: "u9-class-map",
      term: "Middle class",
      everyday: "Basically everyone normal — the label almost anyone gives themselves.",
      course: "A notoriously amorphous group of about 55% of U.S. society, spanning roughly $60k–$250k and split into upper middle and middle middle.",
      trap: "It’s about half the population, not “almost everyone,” and the working and lower classes are each about a fifth.",
    },
    {
      id: "u9-ff-worker",
      conceptId: "u9-proletariat",
      term: "Worker / proletariat",
      everyday: "A blue-collar factory or manual laborer.",
      course: "Anyone who sells their labor power for a wage, owning no means of production — the vast bulk of society under capitalism.",
      trap: "A well-paid salaried engineer who owns no part of the firm is still proletariat in Marx’s terms.",
    },
    {
      id: "u9-ff-capitalist",
      conceptId: "u9-bourgeoisie",
      term: "Capitalist",
      everyday: "Anyone rich, or anyone who supports free markets.",
      course: "Marx: an owner of the means of production (the bourgeoisie).",
      trap: "High pay or pro-market opinions don’t make someone a capitalist; ownership of productive machinery does.",
    },
    {
      id: "u9-ff-occupation",
      conceptId: "u9-occupation",
      term: "Occupation",
      everyday: "Your paid job title.",
      course: "Paid or unpaid employment, varying in pay, required education, and status (occupational prestige).",
      trap: "Unpaid employment still counts, and occupation is not the same as how much you earn.",
    },
    {
      id: "u9-ff-lifestyle",
      conceptId: "u9-lifestyle",
      term: "Lifestyle",
      everyday: "An aesthetic — wellness routines, influencer vibes.",
      course: "The controversial component of class: what people consume, how they are educated, who they associate with, and the cultural judgments they make.",
      trap: "It’s a disputed dimension of class position, not a personal brand.",
    },
  ],
  magnitudes: [
    {
      id: "u9-m-inflation",
      prompt: "About how much does it take today to buy what $1 bought in 2005 (around when you were born)?",
      answer: "About $1.75 — a dollar from your birth buys much less now",
      whyItMatters:
        "Even over one lifetime, inflation shrinks what money buys — which is why the class component is real income, not raw dollar income.",
    },
    {
      id: "u9-m-wealth-gap",
      prompt: "How does the median net worth of the top 10% of U.S. households compare with the bottom quarter’s?",
      answer: "Thousands of times larger (≈$5 million vs. ≈$1,700 — almost 3,000×)",
      whyItMatters:
        "Wealth gaps are vastly bigger than income gaps — the reason wealth (net worth) must be added to income when locating someone’s class.",
    },
    {
      id: "u9-m-hs",
      prompt: "What share of the U.S. population holds a high-school degree (or equivalent) today, vs. the 1940s?",
      answer: "Almost all (≈90%) today, vs. under 40% in the 1940s",
      whyItMatters:
        "Education as a component of class has shifted historically; a credential that once set people apart is now nearly universal.",
    },
    {
      id: "u9-m-college",
      prompt: "What share holds a college degree today, vs. 1940?",
      answer: "About a third today, vs. about 5% in 1940",
      whyItMatters:
        "College went from rare to common-but-not-universal — still a strong marker of class position.",
    },
    {
      id: "u9-m-phd",
      prompt: "About what share of the U.S. population holds a PhD?",
      answer: "Very few — about 1 in 50 (≈2%)",
      whyItMatters:
        "The highest educational degree is rare, so it sits at the very top of the education component of class.",
    },
    {
      id: "u9-m-upper",
      prompt: "About what share of the U.S. is upper class?",
      answer: "Very few — about 5%",
      whyItMatters:
        "A small group whose wealth mostly comes from investment dividends — the closest the U.S. map gets to Marx’s owners of capital.",
    },
    {
      id: "u9-m-middle",
      prompt: "About what share of the U.S. is middle class?",
      answer: "About half (≈55%)",
      whyItMatters:
        "The largest and most amorphous group, spanning a wide income band — why “middle class” is such a slippery label.",
    },
    {
      id: "u9-m-working-lower",
      prompt: "About what share are working class and lower class?",
      answer: "About a fifth each (≈20% and ≈20%)",
      whyItMatters:
        "Together, about two in five households sit below the middle class — a large population for questions of relative poverty.",
    },
    {
      id: "u9-m-poverty-line",
      prompt: "How is the U.S. federal poverty line set?",
      answer: "Three times the assumed cost of a nutritionally adequate diet per person — not adjusted for local cost of living (except AK and HI)",
      whyItMatters:
        "It’s an absolute-poverty standard tied to basic needs, so it misses how far money goes in expensive places.",
    },
    {
      id: "u9-m-working-poor",
      prompt: "Among people 16+ below the federal poverty line, about what share worked in the last year?",
      answer: "About a third",
      whyItMatters:
        "A substantial group of poor people do work, which complicates the claim that poverty simply reflects not working hard enough.",
    },
    {
      id: "u9-m-lack-of-will",
      prompt: "About what share of the U.S. population attributes Black poverty to a lack of motivation or will power?",
      answer: "About a third",
      whyItMatters:
        "A sizable share of the public holds a cultural (individual-effort) explanation of poverty, which is why structural vs. cultural explanations are so contested.",
    },
    {
      id: "u9-m-elderly-gap",
      prompt: "Compared with White married elderly men, how much more likely are older Black women living alone to be poor?",
      answer: "About ten times more likely",
      whyItMatters:
        "Even where poverty has improved (as among the elderly), large racial and gender gaps remain — a pattern by social category.",
    },
    {
      id: "u9-m-world",
      prompt: "What has happened to the share of the world’s population in extreme poverty over the last ~200 years?",
      answer: "It has fallen remarkably",
      whyItMatters:
        "Absolute poverty is not fixed; it falls strongly as economies develop — wealthy economies have almost none.",
    },
    {
      id: "u9-m-classical",
      prompt: "How does liking classical music relate to subjective (self-assessed) class?",
      answer: "Appeal rises with class position; dislike rises as class falls",
      whyItMatters:
        "Evidence that class extends to cultural taste — support for counting lifestyle as part of class.",
    },
  ],
  questions: [
    // ───────────── Conceptual ─────────────
    {
      id: "u9-q1",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-slavery", "u9-caste", "u9-ethnic-inequality", "u9-class"],
      stem:
        "A system of structural inequality in which some people (and thus their labor) are directly owned by others, so that the main axis of inequality is freedom vs. unfreedom, is called…",
      options: [
        {
          text: "Caste",
          why: "Caste is religion prescribing statuses by birth and forbidding inter-caste interaction and movement — nobody owns anybody.",
        },
        {
          text: "Slavery",
          correct: true,
          why: "Ownership of persons and their labor, with free vs. unfree as the axis, is the notes’ definition of slavery.",
        },
        {
          text: "Ethnic inequality",
          why: "Ethnic inequality centers on shared cultural identities made salient against others, not ownership.",
        },
        {
          text: "Class",
          why: "Class is built from income, wealth, education, and occupation; workers sell their labor, they aren’t owned.",
        },
      ],
    },
    {
      id: "u9-q2",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-caste"],
      stem: "According to the notes, what defines a caste system?",
      options: [
        {
          text: "Some people and their labor are owned outright by others",
          why: "That’s slavery, whose axis is freedom vs. unfreedom.",
        },
        {
          text: "Inequality is centered on shared cultural identities made salient in contrast to other identities",
          why: "That’s ethnic inequality.",
        },
        {
          text: "Religion prescribes social statuses by birth and prohibits some inter-caste interactions and movement over the life course",
          correct: true,
          why: "Birth-status set by religion, plus bans on mixing and on moving between ranks — the notes’ definition of caste.",
        },
        {
          text: "Position depends on real income, wealth, education, and occupation",
          why: "That’s class, the modern system — no religious rule fixes your rank at birth.",
        },
      ],
    },
    {
      id: "u9-q3",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-ethnic-inequality", "u9-caste", "u9-slavery"],
      stem:
        "Which system of structural inequality is centered on shared cultural identities that are made salient in contrast to other identities in a society?",
      options: [
        {
          text: "Caste",
          why: "Caste is about religiously prescribed statuses at birth, not cultural identities defined against others.",
        },
        {
          text: "Slavery",
          why: "Slavery’s axis is ownership — free vs. unfree.",
        },
        {
          text: "Contradictory class locations",
          why: "That’s Wright’s term for people who straddle Marx’s capitalist/worker divide — an economic idea, not a system centered on cultural identity.",
        },
        {
          text: "Ethnic inequality",
          correct: true,
          why: "Shared cultural identities that become salient in contrast to others are the axis of ethnic inequality.",
        },
      ],
    },
    {
      id: "u9-q4",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u9-class"],
      stem: "In the sociological sense used in the notes, “class” refers to…",
      options: [
        {
          text: "A position built mainly from real income, wealth, education, and occupation (with lifestyle as a disputed fifth element)",
          correct: true,
          why: "The notes say sociologists agree class centers on those four elements, with controversy over lifestyle.",
        },
        {
          text: "How elegant, polite, and well-mannered someone is",
          why: "That’s “classy” in everyday speech. Manners might touch lifestyle, but they aren’t what class means.",
        },
        {
          text: "A rank assigned by religion at birth that cannot change",
          why: "That’s caste, a historical alternative to class.",
        },
        {
          text: "Only whether a person owns a business",
          why: "That’s Marx’s narrower lens (relationship to the means of production), not the notes’ broad concept of class.",
        },
      ],
    },
    {
      id: "u9-q5",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-real-income", "u9-wealth", "u9-purchasing-power"],
      stem: "The money wages and earnings of a person, adjusted for inflation, is the notes’ definition of…",
      options: [
        {
          text: "Wealth",
          why: "Wealth is net worth — assets minus debts — not earnings.",
        },
        {
          text: "Purchasing power",
          why: "Purchasing power is what an amount of money can buy; regional purchasing power is a further adjustment for cost of living across places.",
        },
        {
          text: "Real income",
          correct: true,
          why: "Real income = earnings adjusted for inflation; the first major element of class.",
        },
        {
          text: "Occupation",
          why: "Occupation is paid or unpaid employment; it affects pay but isn’t the measure of earnings itself.",
        },
      ],
    },
    {
      id: "u9-q6",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u9-purchasing-power", "u9-inflation"],
      stem:
        "Besides inflation, the notes describe another common adjustment to income: accounting for the fact that the cost of living can be wildly different from place to place. This adjustment is…",
      options: [
        {
          text: "Regional purchasing power",
          correct: true,
          why: "The same salary doesn’t go nearly as far in an expensive place as a cheap one — that’s regional purchasing power.",
        },
        {
          text: "Inflation adjustment",
          why: "Inflation adjusts for the same money buying less over time, not across places.",
        },
        {
          text: "Net worth",
          why: "Net worth is how wealth is measured (assets − debts), not an adjustment to income.",
        },
        {
          text: "Relative poverty",
          why: "Relative poverty compares people to mainstream society’s standards; it isn’t an income adjustment for location.",
        },
      ],
    },
    {
      id: "u9-q7",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u9-wealth"],
      stem: "In the notes, wealth is usually measured by…",
      options: [
        {
          text: "A person’s yearly salary",
          why: "That’s income — the everyday sense of “wealthy” as “earns a lot.”",
        },
        {
          text: "The total value of everything a person owns, ignoring debts",
          why: "Close, but the notes subtract debts. Assets alone overstate the wealth of someone who owes a lot.",
        },
        {
          text: "How rich a person feels compared to their neighbors",
          why: "Feeling poor relative to others is tied to relative poverty, not the measure of wealth.",
        },
        {
          text: "Net worth: the total value of assets minus the total value of debts",
          correct: true,
          why: "Real estate, cars, stocks, money, etc., minus loans and other debts — that’s net worth.",
        },
      ],
    },
    {
      id: "u9-q8",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 1,
      conceptIds: ["u9-wealth", "u9-real-income"],
      stem:
        "True/False: According to the notes, wealth is generally easier to measure than income, because most people know their net worth from their pay stubs and taxes.",
      options: [
        {
          text: "True",
          why: "Reversed. Pay stubs and taxes tell people their income; net worth involves complex calculations of all debts and assets.",
        },
        {
          text: "False",
          correct: true,
          why: "Right — wealth is harder to measure, because not everyone knows the total value of their debts and assets.",
        },
      ],
    },
    {
      id: "u9-q9",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u9-occupation"],
      stem: "Which best matches the notes’ definition of occupation as a component of class?",
      options: [
        {
          text: "Only the paid job title printed on a person’s business card",
          why: "The everyday sense. The notes include unpaid employment too.",
        },
        {
          text: "A person’s paid or unpaid employment, which varies in pay, required education, and the status it carries",
          correct: true,
          why: "Occupation is paid or unpaid employment, and jobs differ in pay, education required, and prestige.",
        },
        {
          text: "The total amount of money a person earns in a year",
          why: "That’s income. Two occupations can pay similarly and still differ in education and prestige.",
        },
        {
          text: "A person’s relationship to the means of production",
          why: "That’s Marx’s definition of class position, not the occupation component.",
        },
      ],
    },
    {
      id: "u9-q10",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-lifestyle", "u9-real-income", "u9-education", "u9-occupation"],
      stem:
        "Sociologists agree that class centers on four elements, and there is controversy about one more. Which is the controversial element?",
      options: [
        {
          text: "Real income",
          why: "Real income is the first and least controversial element — the key determinant of most people’s well-being.",
        },
        {
          text: "Education",
          why: "Education (years of schooling or highest degree) is one of the four agreed elements.",
        },
        {
          text: "Occupation",
          why: "Occupation is one of the four agreed elements.",
        },
        {
          text: "Lifestyle",
          correct: true,
          why: "Lifestyle — what people consume, who they associate with, their cultural judgments — is the controversial fifth element.",
        },
      ],
    },
    {
      id: "u9-q11",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u9-concerted-cultivation", "u9-natural-growth"],
      stem:
        "Lareau found that one style of socialization combined highly structured institutional play with teaching children to question and challenge decisions they disagree with. She called it…",
      options: [
        {
          text: "Concerted cultivation",
          correct: true,
          why: "Structured institutional activities plus training to challenge authority — the middle-class style.",
        },
        {
          text: "The accomplishment of natural growth",
          why: "That’s the working-class style: little structured play and little experience challenging authorities’ decisions.",
        },
        {
          text: "Cultural capital",
          why: "Bourdieu’s term for the ability to make judgments and claim they’re legitimate — related to lifestyle, but not Lareau’s socialization style.",
        },
        {
          text: "Contradictory class location",
          why: "Wright’s term for positions straddling owner and worker — nothing to do with childrearing.",
        },
      ],
    },
    {
      id: "u9-q12",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 2,
      conceptIds: ["u9-natural-growth", "u9-concerted-cultivation"],
      stem:
        "True/False: Lareau found that working-class children, raised through the accomplishment of natural growth, got more experience challenging adverse decisions by authorities than middle-class children did.",
      options: [
        {
          text: "True",
          why: "Reversed. Natural growth fostered relatively little experience challenging authorities; concerted cultivation taught kids to question and challenge.",
        },
        {
          text: "False",
          correct: true,
          why: "Right — it’s the middle-class style (concerted cultivation) that teaches children to challenge decisions.",
        },
      ],
    },
    {
      id: "u9-q13",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-marx-means-of-production", "u9-social-status", "u9-cultural-capital", "u9-functionalist-inequality"],
      stem: "For Marx, a person’s class position was defined by…",
      options: [
        {
          text: "How people evaluate the positions and esteem of others",
          why: "That’s Weber’s social status — the axis Weber added because Marx focused on economics.",
        },
        {
          text: "The ability to make judgments and claim they are authoritative",
          why: "That’s Bourdieu’s cultural capital.",
        },
        {
          text: "Their relationship to the means of production",
          correct: true,
          why: "Owning the machinery needed to produce what society lives on (bourgeoisie) or selling labor power (proletariat).",
        },
        {
          text: "How valuable their task is to the overall social order",
          why: "That’s the functionalist (Davis & Moore) logic of differential rewards.",
        },
      ],
    },
    {
      id: "u9-q14",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u9-proletariat", "u2-commodity"],
      stem: "In Marx’s theory, the proletariat consists of…",
      options: [
        {
          text: "Only manual laborers in factories",
          why: "The everyday picture. Marx’s category is defined by selling labor power, whatever the job looks like.",
        },
        {
          text: "The unemployed and the very poorest members of society",
          why: "Marx defines classes by relation to the means of production, not by poverty level; workers are the vast bulk of society.",
        },
        {
          text: "Those who own the machinery necessary for production",
          why: "That’s the bourgeoisie (capitalists).",
        },
        {
          text: "People who sell their own labor power as though it were a commodity, for a wage",
          correct: true,
          why: "The wage is the market price of labor power — and this describes the vast bulk of society under capitalism.",
        },
      ],
    },
    {
      id: "u9-q15",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-bourgeoisie", "u9-proletariat"],
      stem: "In Marx’s terms, who are the bourgeoisie?",
      options: [
        {
          text: "The people who own the means of production, also called capitalists",
          correct: true,
          why: "Ownership of productive machinery defines the bourgeoisie.",
        },
        {
          text: "Anyone whose income is far above average",
          why: "The everyday “rich” reading. A high-paid employee who owns no means of production is still a worker.",
        },
        {
          text: "Workers who also manage others or own small businesses",
          why: "Those are Wright’s contradictory class locations — positions that straddle Marx’s two classes.",
        },
        {
          text: "People whose positions carry the most esteem",
          why: "That’s high social status in Weber’s sense, a separate axis from ownership.",
        },
      ],
    },
    {
      id: "u9-q16",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 3,
      conceptIds: ["u9-immiseration"],
      stem:
        "True/False: According to the notes, Marx’s prediction of an inevitable global worker-led revolution has been validated, while his claim that inequality worsens under capitalism has been refuted.",
      options: [
        {
          text: "True",
          why: "Exactly backwards. The revolution prediction was mistaken; the worsening-inequality claim (absent regulation) was validated.",
        },
        {
          text: "False",
          correct: true,
          why: "Right — careful analysis (Piketty) validated that inequality worsens under capitalism without regulation, while the revolution never came.",
        },
      ],
    },
    {
      id: "u9-q17",
      skill: "conceptual",
      format: "mc",
      trap: "misattribution",
      tier: 3,
      conceptIds: ["u9-immiseration"],
      stem:
        "The notes say careful analysis by an economist validated the observation that, in the absence of regulation, inequality worsens under capitalism. Who conducted it?",
      options: [
        {
          text: "Kingsley Davis and Wilbert Moore",
          why: "They are the functionalists who argued inequality is “necessary” — the opposite emphasis.",
        },
        {
          text: "Erik Olin Wright",
          why: "Wright is a sociologist who analyzed contradictory class locations, not the economist who validated worsening inequality.",
        },
        {
          text: "Thomas Piketty",
          correct: true,
          why: "Piketty’s Capital in the Twenty-First Century is the notes’ source for this validation.",
        },
        {
          text: "Annette Lareau",
          why: "Lareau studied class-based styles of childrearing.",
        },
      ],
    },
    {
      id: "u9-q18",
      skill: "conceptual",
      format: "mc",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u9-contradictory-class-locations"],
      stem:
        "Which sociologist analyzed “contradictory class locations” — such as workers with managerial duties, owners of small businesses who still work, and people depending on retirement income from stocks — and noted they are becoming more widespread?",
      options: [
        {
          text: "Erik Olin Wright",
          correct: true,
          why: "Wright modified Marxist theory to address positions that don’t fit the austere capitalist/worker gap.",
        },
        {
          text: "Karl Marx",
          why: "Marx drew the austere gap between capitalists and workers that Wright’s concept complicates.",
        },
        {
          text: "Max Weber",
          why: "Weber added social status, a non-economic axis; Wright’s contradictory locations stay economic.",
        },
        {
          text: "Pierre Bourdieu",
          why: "Bourdieu theorized cultural capital and lifestyle.",
        },
      ],
    },
    {
      id: "u9-q19",
      skill: "conceptual",
      format: "mc",
      trap: "misattribution",
      tier: 2,
      conceptIds: ["u9-functionalist-inequality", "u3-structural-functionalism"],
      stem:
        "Which theorists argued that inequality is “necessary” because society needs to differentially reward people who perform more valuable tasks — an argument the notes call tautological?",
      options: [
        {
          text: "Karl Marx",
          why: "Marx saw inequality as conflict between classes with competing interests, worsening under capitalism — not a social necessity.",
        },
        {
          text: "Kingsley Davis and Wilbert Moore",
          correct: true,
          why: "The functionalist theory of inequality (1945): rewards mark important tasks, and are then taken as evidence of their importance.",
        },
        {
          text: "Pierre Bourdieu",
          why: "Bourdieu added cultural capital as a neglected dimension of inequality.",
        },
        {
          text: "Thomas Piketty",
          why: "Piketty validated that inequality worsens without regulation — no claim that it’s necessary.",
        },
      ],
    },
    {
      id: "u9-q20",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-social-status", "u9-cultural-capital"],
      stem:
        "Weber recognized that class is also a composite of “the ways that people evaluate the positions and esteem of others in a society.” What did he call this?",
      options: [
        {
          text: "Cultural capital",
          why: "Bourdieu’s concept: the ability to make judgments and claim they are authoritative — not the esteem others grant a position.",
        },
        {
          text: "Occupation",
          why: "Occupations carry status, but occupation is the employment itself; the evaluative axis Weber named is broader.",
        },
        {
          text: "Lifestyle",
          why: "Lifestyle is consumption, associations, and cultural judgments — the controversial component, not Weber’s term.",
        },
        {
          text: "Social status",
          correct: true,
          why: "Weber’s social status: how people evaluate the positions and esteem of others, a separate axis from economic position.",
        },
      ],
    },
    {
      id: "u9-q21",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-cultural-capital", "u9-social-status"],
      stem: "Bourdieu defined cultural capital as…",
      options: [
        {
          text: "The money a person can spend on art, travel, and concerts",
          why: "Bourdieu’s point is that high art isn’t reducible to who has money to pay for it.",
        },
        {
          text: "The esteem others grant to a person’s social position",
          why: "That’s Weber’s social status.",
        },
        {
          text: "The ability not only to make judgments oneself, but to claim those judgments are authoritative and legitimate",
          correct: true,
          why: "Making judgments AND having the standing to claim they are legitimate — the notes’ definition.",
        },
        {
          text: "The machinery needed to produce cultural goods",
          why: "That borrows Marx’s means of production; it isn’t Bourdieu’s concept.",
        },
      ],
    },
    {
      id: "u9-q22",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 1,
      conceptIds: ["u9-cultural-capital"],
      stem:
        "True/False: According to the notes, Bourdieu found that cultural capital correlates closely and directly with other markers of class such as income and wealth.",
      options: [
        {
          text: "True",
          why: "Reversed. The notes stress that cultural capital rarely correlated directly with other markers of class.",
        },
        {
          text: "False",
          correct: true,
          why: "Right — it observed a dynamic all its own, which is why Bourdieu called it a neglected dimension.",
        },
      ],
    },
    {
      id: "u9-q23",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-absolute-poverty", "u9-relative-poverty"],
      stem: "The U.S. federal poverty line, set at three times the assumed cost of a nutritionally adequate diet, is a measure of…",
      options: [
        {
          text: "Relative poverty",
          why: "Relative poverty compares people to mainstream society’s standards, not to the cost of basic needs.",
        },
        {
          text: "Absolute poverty",
          correct: true,
          why: "It measures poverty according to the costs of fulfilling basic life needs — the definition of absolute poverty.",
        },
        {
          text: "Regional purchasing power",
          why: "The line is notably NOT adjusted for regional cost of living (except Alaska and Hawaii).",
        },
        {
          text: "Net worth",
          why: "Net worth measures wealth (assets − debts), not a poverty threshold.",
        },
      ],
    },
    {
      id: "u9-q24",
      skill: "conceptual",
      format: "tf",
      tier: 1,
      conceptIds: ["u9-relative-poverty"],
      stem:
        "True/False: The notes justify measuring relative poverty because there is lots of evidence that feeling poor relative to the rest of society harms people’s lives, including their physical and mental health.",
      options: [
        {
          text: "True",
          correct: true,
          why: "That’s the reason given (Pickett and Wilkinson 2008): relative deprivation itself has poor effects on health.",
        },
        {
          text: "False",
          why: "The notes give exactly this justification for the relative standard.",
        },
      ],
    },
    {
      id: "u9-q25",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u9-scarcity", "u9-unequal-distribution", "u9-structural-inequality"],
      stem:
        "A marker has “not an infinite supply, so not everyone can have all they want.” The notes call this property…",
      options: [
        {
          text: "Scarcity",
          correct: true,
          why: "Scarcity is the limited supply that makes unequal distribution matter.",
        },
        {
          text: "Unequal distribution",
          why: "Unequal distribution is that some have more and some less — how the supply is split, not that it’s limited.",
        },
        {
          text: "Structural inequality",
          why: "Structural inequality is when social markers determine who gets more — the pattern of the split.",
        },
        {
          text: "Inflation",
          why: "Inflation is money losing purchasing power over time; it’s what would happen if money weren’t kept scarce.",
        },
      ],
    },
    {
      id: "u9-q26",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 3,
      conceptIds: ["u9-culture-of-poverty"],
      stem:
        "Some social scientists argue that specific factors — such as socialization into a lack of effort, or lack of knowledge of how to save — keep people poor. This is…",
      options: [
        {
          text: "A structural explanation of poverty",
          why: "Structural explanations point to factors out of the control of any individual or subculture — the opposite pole.",
        },
        {
          text: "The functionalist theory of inequality",
          why: "Davis & Moore explain unequal rewards as necessary for social order, not why particular people are poor.",
        },
        {
          text: "A cultural explanation of poverty",
          correct: true,
          why: "Locating the cause in a group’s learned habits (effort, saving) is the cultural pole — the “culture of poverty” argument.",
        },
        {
          text: "A measure of relative poverty",
          why: "Relative poverty is a standard for measuring who is poor, not an explanation of why.",
        },
      ],
    },

    // ───────────── Application ─────────────
    {
      id: "u9-q27",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-caste", "u9-class", "u9-ethnic-inequality"],
      stem:
        "In a fictional kingdom, temple law assigns every newborn the rank of their parents, forbids people of different ranks from sharing meals or marrying, and bars anyone from ever changing rank. Which system is this?",
      options: [
        {
          text: "Class",
          why: "Class has no religious rule fixing rank at birth or forbidding movement.",
        },
        {
          text: "Ethnic inequality",
          why: "Ethnic inequality centers on shared cultural identities set against others; here the key is religiously prescribed birth-status.",
        },
        {
          text: "Caste",
          correct: true,
          why: "Religion prescribes status by birth, prohibits inter-group interaction, and blocks movement over the life course.",
        },
        {
          text: "Slavery",
          why: "No one is owned here; the axis is birth-assigned religious status, not freedom vs. unfreedom.",
        },
      ],
    },
    {
      id: "u9-q28",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u9-slavery", "u9-proletariat"],
      stem:
        "A warehouse worker complains, “I’m basically a wage slave — I have to work here to pay rent.” He can quit, and he is paid hourly. In the notes’ terms, his position is best described as…",
      options: [
        {
          text: "Slavery, since he feels he has no real choice",
          why: "The everyday metaphor. Slavery means being directly owned by another, with free vs. unfree as the axis — he isn’t owned.",
        },
        {
          text: "Proletariat: he sells his labor power for a wage",
          correct: true,
          why: "Selling labor power as a commodity for a wage is Marx’s proletariat. That he can quit shows he isn’t owned.",
        },
        {
          text: "Caste, since he was born poor",
          why: "Caste requires religion prescribing status by birth and blocking movement — nothing like that is described.",
        },
        {
          text: "Bourgeoisie, since he earns money",
          why: "Earning a wage is what workers do; the bourgeoisie own the means of production.",
        },
      ],
    },
    {
      id: "u9-q29",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-real-income", "u9-inflation"],
      stem:
        "Your grandmother says she was paid $9,000 a year as a secretary in 1975, so she “made way less” than you do at $38,000 today. To compare fairly, a sociologist would first convert both figures into…",
      options: [
        {
          text: "Net worth",
          why: "Net worth is assets minus debts — a measure of wealth, not a way to compare salaries across years.",
        },
        {
          text: "Occupational prestige scores",
          why: "Prestige ranks how occupations are seen, not what the dollars could buy.",
        },
        {
          text: "Relative poverty measures",
          why: "Relative poverty compares people to mainstream standards; it doesn’t adjust a wage across decades.",
        },
        {
          text: "Real income, adjusting for inflation",
          correct: true,
          why: "The same dollar buys far less over time, so earnings across decades are compared only after adjusting for inflation.",
        },
      ],
    },
    {
      id: "u9-q30",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u9-purchasing-power", "u9-inflation"],
      stem:
        "Two nurses each earn $85,000 this year. One rents a studio for $3,500 a month in a big coastal city; the other rents a two-bedroom for $900 in a small town. Which adjustment captures why the second nurse is better off?",
      options: [
        {
          text: "Regional purchasing power",
          correct: true,
          why: "Same salary, same year, different places — the cost of living differs, so the money goes much further in one place.",
        },
        {
          text: "Inflation",
          why: "Inflation adjusts across time; both salaries are from the same year.",
        },
        {
          text: "Net worth",
          why: "Neither nurse’s assets or debts are described; this is about what income buys where they live.",
        },
        {
          text: "Occupational prestige",
          why: "They have the same occupation, so prestige can’t explain the difference.",
        },
      ],
    },
    {
      id: "u9-q31",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u9-wealth", "u9-real-income"],
      stem:
        "Dana, a newly hired dentist, earns $190,000 a year but owes $420,000 in student loans and owns almost nothing. Her neighbor Ray, a retired plumber living on a $28,000 pension, owns his house outright and has $600,000 in a retirement account. Who has more wealth?",
      options: [
        {
          text: "Dana, because her income is much higher",
          why: "Tempting, but that confuses income with wealth. Wealth is net worth; Dana’s debts outweigh her assets.",
        },
        {
          text: "They have about equal wealth, since high income balances high debt",
          why: "Income doesn’t enter the net worth calculation at all; only assets and debts do.",
        },
        {
          text: "Ray, because his assets minus his debts are far larger",
          correct: true,
          why: "Net worth = assets − debts. Ray’s house and savings with no debt give him far more wealth despite a smaller income.",
        },
        {
          text: "Neither — wealth only refers to the upper class",
          why: "Everyone has a net worth (even a negative one); wealth is a component of class for anyone.",
        },
      ],
    },
    {
      id: "u9-q32",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-central-tendency", "u9-wealth"],
      stem:
        "A report wants to describe the net worth of a typical household in a group, without a few billionaires dragging the number upward. Which statistic, the one the notes’ wealth survey uses, fits best?",
      options: [
        {
          text: "The median (the middle household when ordered from lowest to highest)",
          correct: true,
          why: "The notes compare median net worth (top 10% vs. bottom quarter) — the middle observation resists extreme values.",
        },
        {
          text: "The mean (simple average)",
          why: "A few huge fortunes pull the average far above what the typical household has.",
        },
        {
          text: "The mode (most common value)",
          why: "With dollar amounts nearly every household is different, so the most frequent value tells you little here.",
        },
        {
          text: "The poverty line",
          why: "The poverty line is an absolute-poverty threshold for income, not a summary of net worth.",
        },
      ],
    },
    {
      id: "u9-q33",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-education", "u9-occupation", "u9-lifestyle"],
      stem:
        "A survey asks: “What is the highest degree or level of school you have completed?” Which component of class is it measuring?",
      options: [
        {
          text: "Occupation",
          why: "Occupation is employment (paid or unpaid); a degree may lead to one, but the question asks about schooling.",
        },
        {
          text: "Lifestyle",
          why: "Lifestyle covers consumption, associations, and cultural judgments — not a count of formal schooling.",
        },
        {
          text: "Wealth",
          why: "Wealth is net worth (assets − debts).",
        },
        {
          text: "Education",
          correct: true,
          why: "Education is usually measured by total years of schooling or highest degree received.",
        },
      ],
    },
    {
      id: "u9-q34",
      skill: "application",
      format: "tf",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u9-occupation"],
      stem:
        "True/False: By the notes’ definition, someone who works full-time caring for an elderly parent without pay has no occupation, since occupation covers only paid work.",
      options: [
        {
          text: "True",
          why: "The everyday sense of “occupation” as a paid job. The notes define it as paid OR unpaid employment.",
        },
        {
          text: "False",
          correct: true,
          why: "Right — occupation includes unpaid employment, so full-time caregiving counts.",
        },
      ],
    },
    {
      id: "u9-q35",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-lifestyle", "u9-real-income", "u9-education"],
      stem:
        "Two coworkers have the same salary and the same degree. One spends weekends at farmers’ markets and indie film screenings with other professionals; the other spends them at a bowling league with high-school friends. Which component of class do their differences reflect?",
      options: [
        {
          text: "Lifestyle — what people consume, who they associate with, and their cultural judgments",
          correct: true,
          why: "Income and education are held equal; what differs is consumption, associations, and taste — the controversial lifestyle element.",
        },
        {
          text: "Real income",
          why: "The stem says their salaries are the same.",
        },
        {
          text: "Education",
          why: "The stem says they have the same degree.",
        },
        {
          text: "Means of production",
          why: "Nothing here concerns owning productive machinery.",
        },
      ],
    },
    {
      id: "u9-q36",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u9-concerted-cultivation", "u9-natural-growth"],
      stem:
        "The Okafor kids have robotics club Monday, swim team Wednesday, and tutoring Saturday, and their parents coach them on how to ask a teacher to reconsider a grade. The Brennan kids play outside unsupervised until dinner and rarely argue with a coach’s call. The Okafors’ style is…",
      options: [
        {
          text: "The accomplishment of natural growth",
          why: "That’s the Brennans’ style: little structured play and little practice challenging authority.",
        },
        {
          text: "Concerted cultivation",
          correct: true,
          why: "Highly structured institutional activities plus training to question and challenge decisions — Lareau’s middle-class style.",
        },
        {
          text: "Cultural capital",
          why: "Cultural capital is Bourdieu’s ability to make judgments and claim they’re legitimate, not a childrearing style.",
        },
        {
          text: "Contradictory class location",
          why: "Wright’s term for straddling owner and worker; nothing here is about ownership.",
        },
      ],
    },
    {
      id: "u9-q37",
      skill: "application",
      format: "mc",
      trap: "misattribution",
      tier: 2,
      conceptIds: ["u9-natural-growth", "u9-concerted-cultivation", "u5-primary-socialization"],
      stem:
        "A study finds that children from different class backgrounds learn very different ways of dealing with schools, doctors, and coaches at home. Whose research does this match, and what does it show class shaping?",
      options: [
        {
          text: "Bourdieu — class shapes who can claim their artistic judgments are legitimate",
          why: "Bourdieu’s cultural capital concerns authoritative judgment, not how children learn to deal with institutions.",
        },
        {
          text: "Wright — class shapes who straddles the owner/worker divide",
          why: "Wright’s contradictory class locations are about economic positions of adults.",
        },
        {
          text: "Weber — class shapes the esteem others grant to positions",
          why: "Weber’s social status is about evaluating positions, not childrearing.",
        },
        {
          text: "Lareau — class shapes children’s primary socialization into different styles of interacting with institutions",
          correct: true,
          why: "Lareau’s natural growth vs. concerted cultivation: class-based socialization styles carried into institutions.",
        },
      ],
    },
    {
      id: "u9-q38",
      skill: "application",
      format: "tf",
      tier: 1,
      conceptIds: ["u9-bourgeoisie", "u9-marx-means-of-production"],
      stem:
        "True/False: In Marx’s terms, a woman who owns three bakeries — the ovens, mixers, and storefronts — and hires 30 bakers to do all the baking belongs to the bourgeoisie.",
      options: [
        {
          text: "True",
          correct: true,
          why: "She owns the means of production and hires others who sell their labor power to her — the definition of a capitalist.",
        },
        {
          text: "False",
          why: "Ownership of productive machinery is exactly what makes someone bourgeois in Marx’s theory.",
        },
      ],
    },
    {
      id: "u9-q39",
      skill: "application",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u9-proletariat", "u9-bourgeoisie"],
      stem:
        "Priya is a software engineer earning $180,000 in salary. She owns no shares in her company or any other business. In Marx’s scheme, Priya is…",
      options: [
        {
          text: "Bourgeoisie, because her income is high",
          why: "The everyday “rich = capitalist” reading. Marx defines class by ownership of the means of production, not income.",
        },
        {
          text: "Neither class, because she doesn’t do manual labor",
          why: "The proletariat isn’t limited to manual or factory work.",
        },
        {
          text: "Proletariat, because she sells her labor power for a wage",
          correct: true,
          why: "She owns no means of production and is paid for her labor — a worker in Marx’s sense, however well paid.",
        },
        {
          text: "A contradictory class location, because she earns a lot",
          why: "Wright’s contradictory locations involve partial ownership or management (or stock income), not just high pay — and she has none of these.",
        },
      ],
    },
    {
      id: "u9-q40",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-contradictory-class-locations", "u9-bourgeoisie", "u9-proletariat"],
      stem:
        "Luis owns a one-van electrical business, still does most of the wiring jobs himself, employs one apprentice, and has a 401(k) invested in stocks. Which concept best fits his position?",
      options: [
        {
          text: "Contradictory class location",
          correct: true,
          why: "He is a small-business owner who still works, plus a tiny indirect capitalist through stocks — straddling Marx’s two classes, as Wright described.",
        },
        {
          text: "Bourgeoisie",
          why: "He owns a little, but he also does the work himself; Marx’s clean “owner” box misses that.",
        },
        {
          text: "Proletariat",
          why: "He doesn’t simply sell his labor for a wage — he owns his business and employs someone.",
        },
        {
          text: "Caste",
          why: "Nothing about religiously assigned birth-status is involved.",
        },
      ],
    },
    {
      id: "u9-q41",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u9-social-status", "u9-marx-means-of-production"],
      stem:
        "In a small town, a high-school principal earns a modest salary and owns no business, yet the whole town defers to her and seeks her advice — more than they do the wealthy car-dealership owner. Which concept best captures her standing?",
      options: [
        {
          text: "Bourgeoisie, since she has power over others",
          why: "Marx’s lens is ownership of the means of production; she owns none, so the capitalist/worker split can’t capture her standing.",
        },
        {
          text: "Real income",
          why: "Her income is modest; her standing clearly doesn’t come from earnings.",
        },
        {
          text: "Wealth",
          why: "She isn’t described as having large assets; the car dealer likely has more wealth but less esteem.",
        },
        {
          text: "Social status (Weber)",
          correct: true,
          why: "The esteem others grant her position is Weber’s separate axis — exactly the kind of position that doesn’t fit Marx’s distinction.",
        },
      ],
    },
    {
      id: "u9-q42",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u9-functionalist-inequality", "u3-structural-functionalism"],
      stem:
        "A commentator argues: “Executives are paid hundreds of times more than home health aides, which proves their work is far more important to society — and society needs to reward it that way.” Which theory is this, and what flaw do the notes point out?",
      options: [
        {
          text: "Marx’s conflict theory; it ignores the means of production",
          why: "Marx would see the pay gap as conflicting interests and worsening inequality, not as proof of social importance.",
        },
        {
          text: "The functionalist theory (Davis & Moore); it is tautological — the rewards are taken as evidence of the tasks’ importance",
          correct: true,
          why: "Inequality as “necessary” to reward valuable tasks is Davis & Moore; using the pay to prove the value is circular.",
        },
        {
          text: "Weber’s status theory; it ignores esteem",
          why: "The argument is about society needing differential rewards, a functionalist claim, not about status as a separate axis.",
        },
        {
          text: "Bourdieu’s cultural capital; it ignores taste",
          why: "Nothing here concerns claiming authoritative cultural judgments.",
        },
      ],
    },
    {
      id: "u9-q43",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-cultural-capital", "u9-social-status", "u9-wealth"],
      stem:
        "When a certain food critic declares a hole-in-the-wall taco stand “the best in the city,” chefs, diners, and other critics accept her verdict, and the line wraps around the block. Which concept best captures what she has?",
      options: [
        {
          text: "Wealth",
          why: "Her influence doesn’t come from net worth; a richer person’s opinion wouldn’t carry the same weight.",
        },
        {
          text: "Cultural capital",
          correct: true,
          why: "She makes judgments AND has them accepted as authoritative and legitimate — Bourdieu’s concept.",
        },
        {
          text: "Social status",
          why: "Tempting — she’s esteemed — but the key is her power to make her judgments of what’s good count as legitimate, which is Bourdieu’s cultural capital.",
        },
        {
          text: "Real income",
          why: "Earnings aren’t what makes her verdict authoritative.",
        },
      ],
    },
    {
      id: "u9-q44",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u9-cultural-capital", "u9-wealth"],
      stem:
        "A lottery winner spends millions on paintings, but curators and critics dismiss the collection as tacky, and no one treats the winner’s taste as authoritative. In Bourdieu’s terms…",
      options: [
        {
          text: "The winner gained cultural capital automatically by buying expensive art",
          why: "That treats cultural capital as purchasable. Bourdieu’s point is that high art isn’t reducible to who has money to pay for it.",
        },
        {
          text: "The winner now belongs to the bourgeoisie because of the paintings",
          why: "Paintings aren’t means of production, and Marx’s categories aren’t Bourdieu’s.",
        },
        {
          text: "Wealth and cultural capital came apart: the winner has money but lacks the ability to have judgments accepted as legitimate",
          correct: true,
          why: "Cultural capital rarely correlates directly with other class markers — here money didn’t bring authoritative judgment.",
        },
        {
          text: "The winner moved into a higher caste",
          why: "Caste is religiously prescribed birth-status; it can’t be bought.",
        },
      ],
    },
    {
      id: "u9-q45",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u9-relative-poverty", "u9-absolute-poverty"],
      stem:
        "A country decides to count a household as poor if it lives far below the standard of living that is normal for the rest of its society. This is a measure of…",
      options: [
        {
          text: "Absolute poverty",
          why: "Absolute poverty is anchored to the cost of basic life needs, not to what’s normal in society.",
        },
        {
          text: "Wealth",
          why: "Wealth is net worth, not a poverty standard.",
        },
        {
          text: "Inflation",
          why: "Inflation is money losing purchasing power over time.",
        },
        {
          text: "Relative poverty",
          correct: true,
          why: "Measuring poverty against mainstream society’s standards is relative poverty.",
        },
      ],
    },
    {
      id: "u9-q46",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u9-absolute-poverty", "u9-purchasing-power"],
      stem:
        "Maya, a single adult, earns slightly more than the federal poverty line and lives in one of the most expensive cities in the continental U.S. She can’t cover rent. Under the official federal measure, she is…",
      options: [
        {
          text: "Not counted as poor, because the absolute line ignores local cost of living",
          correct: true,
          why: "She’s above a single national threshold built from food costs, so officially she isn’t poor — even though her money buys little where she lives.",
        },
        {
          text: "Counted as poor, because the line is adjusted for her city’s high cost of living",
          why: "Tempting, but the federal line is NOT regionally or cost-of-living adjusted (except Alaska and Hawaii).",
        },
        {
          text: "Counted as wealthy, because her income is above the line",
          why: "Wealth is net worth (assets − debts); being above the poverty line says nothing about it.",
        },
        {
          text: "Counted as poor, because relative poverty is the official federal standard",
          why: "The federal government uses the absolute standard, not relative poverty.",
        },
      ],
    },
    {
      id: "u9-q47",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 3,
      conceptIds: ["u9-class-matters", "u3-experiment"],
      stem:
        "A journalist follows three people who tore the same knee ligament in the same pickup game: a law-firm partner, a teacher, and a part-time cashier without paid leave. Their recoveries differ sharply. Why is this comparison persuasive?",
      options: [
        {
          text: "It is a controlled lab experiment in which the researcher caused the injuries",
          why: "No one intervened; it only mimics an experiment.",
        },
        {
          text: "It shows that each person’s effort determined their recovery",
          why: "That’s an individual-effort reading; the design points to class position as the difference.",
        },
        {
          text: "It shows injuries are randomly distributed across classes",
          why: "The point is about outcomes after the same injury, not how injuries are distributed.",
        },
        {
          text: "It mimics a natural experiment: the injury is the same, so differences in outcome point to differences in class position",
          correct: true,
          why: "Like “Class Matters,” holding the condition constant isolates class — quality of care and ability to focus on recovery.",
        },
      ],
    },
    {
      id: "u9-q48",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 3,
      conceptIds: ["u9-culture-of-poverty", "u2-structure"],
      stem:
        "A city report explains a neighborhood’s high poverty rate this way: “The area’s only large employer closed, and the bus line to jobs across the river was cut.” Which kind of explanation is this?",
      options: [
        {
          text: "Structural — factors out of the control of any individual or subculture",
          correct: true,
          why: "A plant closing and lost transit are patterned conditions people encounter as given, not habits they learned.",
        },
        {
          text: "Cultural — residents were socialized into a lack of effort",
          why: "The report says nothing about residents’ habits or socialization.",
        },
        {
          text: "Functionalist — society needs this neighborhood to be poor",
          why: "Davis & Moore explain differential rewards for valuable tasks, not a neighborhood losing its jobs.",
        },
        {
          text: "A measure of absolute poverty",
          why: "The report explains why people are poor; it doesn’t set a poverty standard.",
        },
      ],
    },
    {
      id: "u9-q49",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 3,
      conceptIds: ["u9-culture-of-poverty", "u1-troubles", "u1-issues"],
      stem:
        "After losing her job, Teresa feels ashamed and blames herself. A sociologist points out that about a third of poor adults worked in the last year, and that poverty is patterned by race and gender. The sociologist is shifting attention from…",
      options: [
        {
          text: "An issue to a trouble",
          why: "Reversed. The sociologist moves from Teresa’s feelings (trouble) to patterns across social categories (issue).",
        },
        {
          text: "A structural explanation to a cultural one",
          why: "Patterns by race and gender, and working people still being poor, point toward structural explanations, not cultural ones.",
        },
        {
          text: "A private trouble to a public issue",
          correct: true,
          why: "Teresa’s shame is a trouble; poverty patterned across social categories is an issue — the Unit 1 shift behind structural explanations.",
        },
        {
          text: "Relative poverty to absolute poverty",
          why: "Neither statement changes the poverty standard; they change the level of explanation.",
        },
      ],
    },
    {
      id: "u9-q50",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 2,
      conceptIds: ["u9-scarcity", "u9-structural-inequality", "u9-inflation"],
      stem:
        "In an online game, every player can mint as many points as they want, any time, for free. Could points become the basis of a durable structural inequality among players?",
      options: [
        {
          text: "Yes — some players will always have more points, which is structural inequality",
          why: "Unequal amounts aren’t enough; the marker must be scarce, and here anyone can have all they want.",
        },
        {
          text: "Yes — points work exactly like money in a modern economy",
          why: "Money in a normally functioning economy is kept scarce; unlimited points aren’t.",
        },
        {
          text: "It depends only on which players have the highest occupational prestige",
          why: "Occupational prestige is irrelevant to whether the marker is scarce.",
        },
        {
          text: "No — the points aren’t scarce, so they can’t anchor inequality (and they’d buy less and less, like runaway inflation)",
          correct: true,
          why: "Scarcity is a key factor of unequal distribution; an unlimited marker loses its value rather than sorting people.",
        },
      ],
    },

    // ───────────── Big empirical ─────────────
    {
      id: "u9-q51",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 1,
      conceptIds: ["u9-education"],
      stem: "About what share of the U.S. population holds a PhD, the highest educational degree?",
      fixedOrder: true,
      options: [
        {
          text: "Very few (about 1 in 50)",
          correct: true,
          why: "About 2% — the top of the education component of class is rare.",
        },
        {
          text: "About a third",
          why: "That’s the share with a college degree, not a PhD.",
        },
        {
          text: "About half",
          why: "Far too high; a PhD is held by about 1 in 50 people.",
        },
        {
          text: "Almost all",
          why: "That’s closer to the high-school figure (≈90%), not the PhD.",
        },
      ],
    },
    {
      id: "u9-q52",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 1,
      conceptIds: ["u9-education"],
      stem: "In the 1940s, fewer than 40% of Americans ever held a high-school degree. About what share do today?",
      fixedOrder: true,
      options: [
        {
          text: "Very few (about 1 in 20)",
          why: "That’s roughly the 1940 college-degree share, far below today’s high-school rate.",
        },
        {
          text: "About a third",
          why: "That’s today’s college-degree share.",
        },
        {
          text: "About half",
          why: "Too low — high-school completion has become nearly universal.",
        },
        {
          text: "Almost all (about 90%)",
          correct: true,
          why: "A credential that once set people apart is now held by almost everyone — education as a class marker shifts historically.",
        },
      ],
    },
    {
      id: "u9-q53",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 1,
      conceptIds: ["u9-education"],
      stem: "About 5% of Americans had a college degree in 1940. About what share do today?",
      fixedOrder: true,
      options: [
        {
          text: "Still very few (about 5%)",
          why: "College completion has grown enormously since 1940.",
        },
        {
          text: "About a third",
          correct: true,
          why: "College went from rare to common-but-not-universal, which keeps it a meaningful marker of class.",
        },
        {
          text: "About 90%",
          why: "That’s the high-school rate, not college.",
        },
        {
          text: "Everyone",
          why: "Far too high; most Americans still do not hold a college degree.",
        },
      ],
    },
    {
      id: "u9-q54",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 1,
      conceptIds: ["u9-wealth", "u3-central-tendency"],
      stem:
        "Compared with the median net worth of the bottom quarter of U.S. households, the median net worth of the top 10% is roughly…",
      fixedOrder: true,
      options: [
        {
          text: "About twice as large",
          why: "Far too small a gap; the notes report vast disparities in wealth.",
        },
        {
          text: "About ten times as large",
          why: "Still far too small.",
        },
        {
          text: "About a hundred times as large",
          why: "Closer, but the real gap is an order of magnitude bigger.",
        },
        {
          text: "Thousands of times as large",
          correct: true,
          why: "About $5 million vs. about $1,700 — almost 3,000×. That’s why wealth must be added to income when thinking about class.",
        },
      ],
    },
    {
      id: "u9-q55",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 3,
      conceptIds: ["u9-class-map"],
      stem: "About what share of U.S. society is middle class, according to the notes’ class map?",
      fixedOrder: true,
      options: [
        {
          text: "Very few (about 5%)",
          why: "That’s the upper class.",
        },
        {
          text: "About a fifth",
          why: "That’s the size of the working class, and also of the lower class.",
        },
        {
          text: "About half (about 55%)",
          correct: true,
          why: "The largest and most amorphous group, spanning a wide income band — why “middle class” is such a slippery label.",
        },
        {
          text: "Almost everyone",
          why: "It feels that way because so many identify with it, but working and lower classes together are about 40%.",
        },
      ],
    },
    {
      id: "u9-q56",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 2,
      conceptIds: ["u9-inflation", "u9-real-income"],
      stem: "Roughly how much money does it take today to buy what $1 could buy in 2005, around when you were born?",
      fixedOrder: true,
      options: [
        {
          text: "About $1 — prices barely change in 20 years",
          why: "Under typical conditions money loses purchasing power over time.",
        },
        {
          text: "About $1.75",
          correct: true,
          why: "Even within your lifetime the same dollar buys much less — why income is measured as real (inflation-adjusted) income.",
        },
        {
          text: "About $10",
          why: "Far too high for two decades of low, typical inflation.",
        },
        {
          text: "About $100",
          why: "That would be runaway inflation, not the low level modern monetary policy aims for.",
        },
      ],
    },
    {
      id: "u9-q57",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 3,
      conceptIds: ["u9-culture-of-poverty"],
      stem: "Among people aged 16 and older below the federal poverty line, about what share worked in the last year?",
      fixedOrder: true,
      options: [
        {
          text: "Almost none",
          why: "This matches the “poor people don’t work” assumption, which the figure contradicts.",
        },
        {
          text: "About a third",
          correct: true,
          why: "A substantial group of poor people do work — evidence that complicates explanations based on lack of effort.",
        },
        {
          text: "About 90%",
          why: "Too high; it’s a substantial minority, not nearly all.",
        },
        {
          text: "All of them, by definition",
          why: "The poverty line is an income threshold; it doesn’t require or exclude working.",
        },
      ],
    },
    {
      id: "u9-q58",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 3,
      conceptIds: ["u9-culture-of-poverty"],
      stem:
        "In U.S. surveys, about what share of the population attributes Black poverty to Black people lacking the motivation or will power to get out of poverty?",
      fixedOrder: true,
      options: [
        {
          text: "Very few (about 1 in 50)",
          why: "Too low; the notes describe it as a common response in U.S. politics.",
        },
        {
          text: "About a third",
          correct: true,
          why: "A sizable share holds a cultural (individual-effort) explanation — why structural vs. cultural explanations are so contested.",
        },
        {
          text: "About 90%",
          why: "Too high; it’s about a third, a large minority.",
        },
        {
          text: "Everyone",
          why: "The notes present it as one response among competing explanations.",
        },
      ],
    },
    {
      id: "u9-q59",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 3,
      conceptIds: ["u9-culture-of-poverty"],
      stem:
        "Even though poverty among the elderly has improved substantially, how much more likely are older Black women living alone to be poor than White married elderly men?",
      fixedOrder: true,
      options: [
        {
          text: "About equally likely",
          why: "The notes stress that large racial and gender gaps remain.",
        },
        {
          text: "About twice as likely",
          why: "The gap is much larger than that.",
        },
        {
          text: "About ten times as likely",
          correct: true,
          why: "A tenfold gap shows poverty patterned by social categories even where poverty has improved overall.",
        },
        {
          text: "About a thousand times as likely",
          why: "Far too large; the notes give about ten times.",
        },
      ],
    },
    {
      id: "u9-q60",
      skill: "empirical",
      format: "tf",
      trap: "reversal",
      tier: 3,
      conceptIds: ["u9-world-poverty"],
      stem:
        "True/False: By most measures, the share of the world’s population living in extreme poverty has risen over the last 200 years.",
      options: [
        {
          text: "True",
          why: "Reversed. The notes’ first major trend is that poverty has fallen remarkably over the last 200 years.",
        },
        {
          text: "False",
          correct: true,
          why: "Right — extreme poverty has fallen remarkably over about two centuries.",
        },
      ],
    },
    {
      id: "u9-q61",
      skill: "empirical",
      format: "tf",
      tier: 3,
      conceptIds: ["u9-world-poverty", "u9-absolute-poverty"],
      stem:
        "True/False: The notes report a high correlation between a country’s overall economic development and reduced extreme (absolute) poverty — wealthy economies have almost no absolute poverty.",
      options: [
        {
          text: "True",
          correct: true,
          why: "As economies become wealthy there is almost no absolute poverty; poorer economies have more. (Relative poverty is a separate matter.)",
        },
        {
          text: "False",
          why: "This is the notes’ second major world-poverty trend.",
        },
      ],
    },
  ],
};
