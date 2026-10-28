// Hand-picked SOC 105 flashcards. One card per idea you can be tested on:
// sibling concepts share a card (that's how the exam asks about them), and
// big facts are grouped instead of one card each. Backs stay short —
// if a card needs a paragraph, it belongs in the unit guide, not here.

import type { UnitId } from "./types";

// A back line is either plain text or [term, what it means].
export type CardLine = string | [string, string];

export interface StudyCard {
  id: string;
  unitId: UnitId;
  anchor?: string; // concept id in the unit guide
  front: string;
  frontSub?: string; // second question on the same card (usually a number)
  back: CardLine[];
  test?: string; // the one question that tells the options apart
}

export const CURATED_CARDS: StudyCard[] = [
  // ------------------------------------------------------------ Unit 5 · Socialization and Interaction
  {
    id: "u5-socialization",
    unitId: "u5",
    anchor: "u5-socialization",
    front: "Socialization — what is it, and how is it different from culture (U4)?",
    back: [
      "The lifelong process of learning how to act in your society — and becoming a particular someone along the way.",
      ["Culture", "what gets learned (values, norms, material culture)."],
      ["Socialization", "the learning itself. You can’t be born with it — there’s far too much."],
    ],
    test: "Naming what is learned (culture) or the learning (socialization)?",
  },
  {
    id: "u5-primary-secondary",
    unitId: "u5",
    anchor: "u5-primary-socialization",
    front: "Primary vs. secondary socialization",
    back: [
      ["Primary", "a young child learning the basics (talking, self-care, holding back urges) from caregivers."],
      ["Secondary", "everything else — media, work, friends — for the rest of your life, including things you seek out."],
      "Secondary runs alongside primary; it doesn’t wait for childhood to end.",
    ],
    test: "Caregiver + young child + basics → primary. Anything wider or lifelong → secondary.",
  },
  {
    id: "u5-identity",
    unitId: "u5",
    anchor: "u5-identity",
    front: "Social identity vs. self-identity",
    back: [
      ["Social identity", "the boxes other people put you in."],
      ["Self-identity", "how those boxes land inside you — your own sense of who you are."],
      "Identity = the tug between the two. Not a fixed inner essence.",
    ],
    test: "Who is doing the labeling — others or you?",
  },
  {
    id: "u5-setting-role",
    unitId: "u5",
    anchor: "u5-social-roles",
    front: "Social setting vs. social role",
    back: [
      ["Setting", "the whole scene — where, when, and what’s expected (party vs. funeral)."],
      ["Role", "the script for one position inside that scene (the host, the mourner)."],
    ],
    test: "Describing the whole scene (setting) or one person’s part in it (role)?",
  },
  {
    id: "u5-life-course",
    unitId: "u5",
    anchor: "u5-life-course",
    front: "Life course — what’s the sociological point?",
    back: [
      "Life comes in chapters (childhood, adulthood, retirement), each with its own roles and identities. Each move between chapters = a burst of new socialization.",
      "The chapters are made by society, not biology — they’ve changed a lot over time (Unit 2: social construction).",
    ],
  },
  {
    id: "u5-mead",
    unitId: "u5",
    anchor: "u5-mead-me",
    front: "Mead: the “I” vs. the “me” vs. the generalized other",
    back: [
      ["“I”", "raw impulse — wants it now, ignores who’s watching."],
      ["“me”", "you seeing yourself through others’ eyes (“what will they think?”). Growing up = this grows."],
      ["Generalized other", "when the audience in your head stops being specific people and becomes “people” in general."],
    ],
    test: "Impulse (I) or self-check (me)? Can you name who’s judging? If not → generalized other.",
  },
  {
    id: "u5-mead-piaget-becker",
    unitId: "u5",
    anchor: "u5-piaget",
    front: "Mead vs. Piaget vs. Becker",
    back: [
      "Mead and Piaget agree: growing up = thinking more abstractly. They differ on how.",
      ["Mead", "through other people (taking on their view of you)."],
      ["Piaget", "by handling the world directly, in four phases; others stay in the background."],
      ["Becker", "even getting high is learned — you’re taught how, what to notice, and that it feels good. Combines both."],
    ],
  },
  {
    id: "u5-interaction",
    unitId: "u5",
    anchor: "u5-interaction",
    front: "Interaction (U5) — what is it, and why does socialization need it?",
    back: [
      "Trading signals and meanings — words, looks, gestures — in some setting.",
      "Symbols don’t explain themselves (U4: the signifier–signified link is arbitrary), so the only way to learn what they mean is by interacting.",
      "U3 used interaction as the focus of symbolic interactionism; U5 breaks it into parts and makes it how socialization happens.",
    ],
  },
  {
    id: "u5-normal-civil-unequal",
    unitId: "u5",
    anchor: "u5-civil-inattention",
    front: "Normal interaction vs. civil inattention vs. unequal interaction",
    back: [
      ["Normal", "autopilot — taken for granted (not “average” or “good”). The vast majority of interaction."],
      ["Civil inattention", "noticing strangers but politely not engaging. Not rude — and still interaction."],
      ["Unequal", "the setting gives one side the superior role and the other the inferior one."],
    ],
  },
  {
    id: "u5-dramaturgy",
    unitId: "u5",
    anchor: "u5-dramaturgy",
    front: "Goffman: front stage vs. back stage vs. audience segregation",
    back: [
      "Dramaturgy = social life as theater: we perform roles for audiences. (Not “people are fake.”)",
      ["Front stage", "the audience is watching — you’re performing."],
      ["Back stage", "out of view, getting ready (often for the same role)."],
      ["Audience segregation", "keeping two audiences apart so one can’t undercut your act for the other."],
    ],
  },
  {
    id: "u5-eruptions",
    unitId: "u5",
    anchor: "u5-interactional-vandalism",
    front: "Eruption vs. breaching experiment vs. interactional vandalism",
    back: [
      "All three break the smooth order of interaction. The difference is why.",
      ["Eruption", "by accident — patched with an apology, joke, or reframing."],
      ["Breaching experiment", "on purpose, for research — to reveal a hidden rule."],
      ["Interactional vandalism", "on purpose, to gain something (pressure, advantage)."],
    ],
    test: "Mistake, research, or strategy?",
  },
  {
    id: "u5-mediation",
    unitId: "u5",
    anchor: "u5-mediation",
    front: "Mediation (mediated interaction)",
    back: [
      "A technology between people (writing, screens, apps) stretches interaction across time and space.",
      "Who controls the medium matters: control it and you use it; don’t and it works on you.",
      "Not a neutral third person settling a dispute.",
    ],
  },
  {
    id: "u5-facts",
    unitId: "u5",
    front: "Unit 5 big facts — guess each first",
    frontSub: "1940 life expectancy vs. retirement age? · Years lived after retiring today? · Share of interactions that are “normal”? · Social media and depression/anxiety?",
    back: [
      ["1940", "life expectancy was at or below the retirement age."],
      ["Today", "about 15 more years for men, 18 for women."],
      ["Normal interaction", "the vast majority."],
      ["Social media", "growing evidence of quite negative effects."],
    ],
  },

  // ------------------------------------------------------------ Unit 6 · Structures and Organizations
  {
    id: "u6-structures",
    unitId: "u6",
    anchor: "u6-social-structures",
    front: "Social structures — the three kinds",
    back: [
      "Regular, repeating patterns of interaction — the glue binding people into society.",
      ["Group", "people who interact regularly and feel like an “us.”"],
      ["Organization", "formal positions and rules (above all, bureaucracy)."],
      ["Network", "a map of who is tied to whom."],
    ],
  },
  {
    id: "u6-aggregate-group",
    unitId: "u6",
    anchor: "u6-aggregate",
    front: "Aggregate vs. group",
    back: [
      ["Aggregate", "people who only share a place (a bus, a waiting room)."],
      ["Group", "two tests: regular interaction AND a shared “us.”"],
    ],
    test: "If they scattered, would anyone feel they’d lost an “us”?",
  },
  {
    id: "u6-primary-secondary",
    unitId: "u6",
    anchor: "u6-primary-group",
    front: "Primary vs. secondary group",
    back: [
      ["Primary", "intense, emotional, face-to-face; belonging is part of who you are (family, closest friends)."],
      ["Secondary", "every other group — still a real group, just looser."],
    ],
  },
  {
    id: "u6-group-vs-socialization",
    unitId: "u6",
    anchor: "u6-primary-group",
    front: "Trap: primary/secondary GROUP (U6) vs. primary/secondary SOCIALIZATION (U5)",
    back: [
      "Same words, different scales.",
      ["Groups", "sorted by how intense and face-to-face they are."],
      ["Socialization", "sorted by life stage and source (caregivers early vs. everything after)."],
    ],
  },
  {
    id: "u6-in-out",
    unitId: "u6",
    anchor: "u6-in-out-group",
    front: "In-group/out-group vs. homophily",
    back: [
      ["In/out-group", "an “us vs. them” line with status and exclusion. Every group has one; what it’s drawn around is unpredictable."],
      ["Homophily", "a network finding: similar people tend to connect. No ranking, no exclusion."],
    ],
  },
  {
    id: "u6-reference",
    unitId: "u6",
    anchor: "u6-reference-group",
    front: "Reference group: concrete vs. imagined (vs. generalized other)",
    back: [
      "A group you use as a yardstick for your own behavior — “what would they think?”",
      ["Concrete", "real people you know (your family)."],
      ["Imagined", "a type of person you picture, often one you want to become (“what would doctors think?”)."],
      ["Generalized other (U5)", "“people” in general — no specific group."],
    ],
    test: "Can you name the people? Yes → concrete.",
  },
  {
    id: "u6-size",
    unitId: "u6",
    anchor: "u6-group-size-paradox",
    front: "Group size paradox",
    back: [
      "Bigger group = MORE stable (one exit doesn’t kill it) and LESS intense (too many relationships to spread across).",
      "Don’t flip it.",
    ],
  },
  {
    id: "u6-conformity",
    unitId: "u6",
    anchor: "u6-conformity",
    front: "Conformity: what did Asch and Milgram show?",
    frontSub: "How often did Asch’s subjects yield? How many of Milgram’s gave 300-volt shocks?",
    back: [
      "Groups pressure members hard — into false beliefs and into hurting people.",
      ["Asch (1951)", "yielded about a third of the time."],
      ["Milgram (1961)", "every participant reached 300 volts."],
      "The experiment is the method (U3); the pressure is the finding (U6).",
    ],
  },
  {
    id: "u6-bureaucracy",
    unitId: "u6",
    anchor: "u6-bureaucracy",
    front: "Bureaucracy (Weber) — and what’s an “ideal type”?",
    back: [
      "An organization built like a machine to deliver any goal efficiently. Its hallmark is FORMAL rationalization (U2). Not “red tape.”",
      ["Ideal type", "the pure, extreme version you measure real cases against — not the best one. Real bureaucracies don’t need all seven features."],
    ],
  },
  {
    id: "u6-weber-seven",
    unitId: "u6",
    anchor: "u6-ideal-type",
    front: "Weber’s 7 features of bureaucracy — name them",
    back: [
      ["Jurisdiction", "each position has its own turf."],
      ["Expert training", "hired for proven credentials."],
      ["Hierarchy", "everyone has a boss."],
      ["Written rules", "it’s all on file and in procedures."],
      ["Full-time officials", "it’s their only job."],
      ["Separation from private life", "any trained person could do it."],
      ["Organizational ownership", "the organization supplies the tools."],
    ],
  },
  {
    id: "u6-weber-mixups",
    unitId: "u6",
    anchor: "u6-jurisdiction",
    front: "Weber features that get mixed up",
    back: [
      ["Jurisdiction vs. hierarchy", "sideways (whose area?) vs. up-down (who answers to whom?)."],
      ["Separation vs. full-time", "the job doesn’t depend on the person vs. the person focuses only on the job."],
      ["Ownership", "the org owns the tools — not about who owns the company’s stock."],
    ],
  },
  {
    id: "u6-dysfunctions",
    unitId: "u6",
    anchor: "u6-decoupling",
    front: "Bureaucracy’s function vs. decoupling vs. panopticism",
    back: [
      ["Function", "a small staff keeping a huge society running."],
      ["Decoupling", "drifting from its designed goal and efficiently chasing a different one (“lost its way”)."],
      ["Panopticism (Foucault)", "you can’t tell if you’re watched, so you act as if you always are — a few control many."],
    ],
  },
  {
    id: "u6-crossunit-traps",
    unitId: "u6",
    anchor: "u6-panopticism",
    front: "Traps: decoupling vs. latent function (U3) · panopticism vs. conformity",
    back: [
      ["Latent function", "a side effect nobody notices."],
      ["Decoupling", "the organization has swapped its goal."],
      ["Conformity", "pressure from peers in a group."],
      ["Panopticism", "a few watchers + the possibility of being seen."],
    ],
  },
  {
    id: "u6-networks",
    unitId: "u6",
    anchor: "u6-networks",
    front: "Networks vs. organizations",
    back: [
      ["Network", "dots (people/orgs) and lines (ties) — horizontal webs. Not job “networking.”"],
      ["Organization", "vertical chain of command (an org chart)."],
      "Open question: are they two different things (ontological) or two ways of seeing the same thing (epistemological)?",
    ],
  },
  {
    id: "u6-network-findings",
    unitId: "u6",
    anchor: "u6-brokerage",
    front: "The five findings of network analysis",
    back: [
      ["Closure", "ties fill in over time."],
      ["Homophily", "similar connects with similar."],
      ["Contagion", "behaviors and feelings spread along ties."],
      ["Brokerage", "being the bridge between clusters = power (not rank)."],
      ["Weak ties", "new info and jobs come from distant friends of friends."],
    ],
  },
  {
    id: "u6-facts",
    unitId: "u6",
    front: "Unit 6 big facts — how big is government?",
    frontSub: "Federal civilian workers? All levels? Share of the US population? Mostly federal or local?",
    back: [
      ["Federal (no military)", "about 3 million."],
      ["All levels", "about 24–27 million."],
      ["Share of population", "just under 8% — well under a tenth."],
      ["Where", "mostly state, county, and local."],
    ],
  },

  // ------------------------------------------------------------ Unit 8 · Discipline (Deviance & Crime)
  {
    id: "u8-deviance-law",
    unitId: "u8",
    anchor: "u8-deviance",
    front: "Norms → deviance → law → crime",
    back: [
      ["Norms/values (U4)", "the shared expectations."],
      ["Deviance", "acting against what most people expect. Says nothing about the person being evil."],
      ["Law", "the deviance the state writes down and enforces. Breaking it = crime."],
      "Catch: there’s little agreement on how many people must share a norm (the consensus problem).",
    ],
    test: "Only eyebrows go up → deviance. Police and courts → law.",
  },
  {
    id: "u8-four-theories",
    unitId: "u8",
    anchor: "u8-control-theory",
    front: "The four theories of crime — what causes crime in each?",
    back: [
      ["Control", "the offender’s cost–benefit math. Fix: raise costs, cut benefits."],
      ["Conflict", "elites write laws to protect themselves."],
      ["Functionalist (Durkheim)", "institutions lose their grip (anomie)."],
      ["Interactionist", "crime is learned from a group, and society keeps redrawing what counts as crime."],
    ],
  },
  {
    id: "u8-control-conflict",
    unitId: "u8",
    anchor: "u8-conflict-theory",
    front: "Control vs. conflict: what is the law?",
    back: [
      ["Control", "the law is a given, neutral rulebook. Mainstream American common sense. No Unit 3 parent."],
      ["Conflict", "the law is the thing to explain — who wrote it, to protect whom?"],
      "“Control” isn’t surveillance; “conflict” isn’t fighting.",
    ],
  },
  {
    id: "u8-functionalist",
    unitId: "u8",
    anchor: "u8-anomie",
    front: "Functionalism: anomie vs. punishment rituals",
    back: [
      ["Anomie", "the SOURCE — institutions (family, church, neighborhood) weaken, so people do what they please. Not anxiety or anarchy."],
      ["Punishment ritual", "the RESPONSE — trials and vigils where the community restates its rules."],
      "Ritual ≠ control theory’s deterrence: it’s about the group recommitting, not the next offender’s math.",
    ],
    test: "Before the crime (weakening) or after (gathering)?",
  },
  {
    id: "u8-interactionist",
    unitId: "u8",
    anchor: "u8-interactionist-theory",
    front: "Interactionist theory: micro vs. macro claim",
    back: [
      ["Micro", "you’re socialized into crime by a subculture where it’s expected — doing it is conforming."],
      ["Macro", "the line between acceptable and criminal is a social construction (U2), so it moves over time."],
    ],
    test: "How did THIS person learn it (micro), or how did SOCIETY define it (macro)?",
  },
  {
    id: "u8-traditions",
    unitId: "u8",
    front: "Unit 3 traditions → Unit 8 crime theories",
    back: [
      ["Conflict (Marx)", "law as an elite code."],
      ["Structural functionalism", "anomie + punishment rituals."],
      ["Symbolic interactionism", "learning crime + the shifting definition of crime."],
      ["Control theory", "no Unit 3 parent."],
      "Also: “Discipline” in U2 = a science; in U8 = how societies enforce norms.",
    ],
  },
  {
    id: "u8-facts",
    unitId: "u8",
    front: "Unit 8 big facts",
    frontSub: "Is US crime rising or falling? Do immigrants commit more crime? How much agreement on what counts as deviance?",
    back: [
      ["Crime", "the US is safer than ever recorded — falling in cities and elsewhere, apart from a brief COVID bump."],
      ["Immigrants", "no — demonstrably false, then and now."],
      ["Agreement", "little consensus."],
    ],
  },

  // ------------------------------------------------------------ Unit 9 · Inequality
  {
    id: "u9-basics",
    unitId: "u9",
    anchor: "u9-structural-inequality",
    front: "Unequal distribution vs. scarcity vs. structural inequality",
    back: [
      ["Unequal distribution", "some have more, some less."],
      ["Scarcity", "there isn’t enough for everyone to have all they want."],
      ["Structural inequality", "WHO gets more follows social markers — a tilted table."],
    ],
  },
  {
    id: "u9-systems",
    unitId: "u9",
    anchor: "u9-caste",
    front: "Slavery vs. caste vs. ethnic inequality vs. class",
    back: [
      ["Slavery", "people are owned — free vs. unfree."],
      ["Caste", "rank fixed at birth by religion; no moving or mixing."],
      ["Ethnic", "groups sharing a cultural identity, set against other groups."],
      ["Class", "position from income, wealth, education, occupation — you can move."],
    ],
    test: "A low-wage worker who can quit is class, not slavery.",
  },
  {
    id: "u9-components",
    unitId: "u9",
    anchor: "u9-class",
    front: "The parts of class — 4 agreed + 1 controversial",
    back: [
      ["Real income", "your paycheck in what it buys."],
      ["Wealth", "what you own minus what you owe."],
      ["Education", "years or highest degree."],
      ["Occupation", "your work, paid or unpaid; jobs differ in prestige, not just pay."],
      ["Lifestyle (disputed)", "what you buy, who you hang out with, your taste."],
    ],
  },
  {
    id: "u9-income-wealth",
    unitId: "u9",
    anchor: "u9-wealth",
    front: "Income vs. wealth",
    frontSub: "Median wealth: top 10% vs. bottom quarter of US households?",
    back: [
      ["Income", "money flowing in each year."],
      ["Wealth", "the stock left after selling everything and paying all debts. A big salary with bigger debts = little wealth."],
      ["Gap", "≈ $5 million vs. ≈ $1,700 — almost 3,000×. (Median = middle household, so a few billionaires don’t skew it.)"],
    ],
  },
  {
    id: "u9-real-income",
    unitId: "u9",
    anchor: "u9-real-income",
    front: "Real income vs. inflation vs. regional purchasing power",
    frontSub: "What does $1 from 2005 cost today?",
    back: [
      ["Inflation", "the same dollar buys less over TIME → real income corrects for it."],
      ["Purchasing power", "the same salary buys more in some PLACES."],
      ["$1 in 2005", "≈ $1.75 today."],
    ],
    test: "Comparing years (inflation) or cities (purchasing power)?",
  },
  {
    id: "u9-lareau",
    unitId: "u9",
    anchor: "u9-concerted-cultivation",
    front: "Lareau: natural growth vs. concerted cultivation",
    back: [
      ["Natural growth (working class)", "lots of free time; little practice pushing back on authority."],
      ["Concerted cultivation (middle class)", "packed schedule of organized activities; taught to question adults."],
      "Shows class shapes primary socialization (U5) — evidence that lifestyle is part of class.",
    ],
  },
  {
    id: "u9-marx",
    unitId: "u9",
    anchor: "u9-marx-means-of-production",
    front: "Marx: means of production, bourgeoisie, proletariat",
    back: [
      "One question decides your class: do you own the machines and tools that make things?",
      ["Bourgeoisie", "owners."],
      ["Proletariat", "everyone who sells their labor power for a wage (labor as a commodity, U2)."],
      "Ignore earnings: a highly paid employee is still proletariat.",
    ],
  },
  {
    id: "u9-marx-prediction",
    unitId: "u9",
    anchor: "u9-immiseration",
    front: "What did Marx get right and wrong?",
    back: [
      ["Right", "left unregulated, capitalism worsens inequality (backed by Piketty)."],
      ["Wrong", "the inevitable workers’ revolution."],
    ],
  },
  {
    id: "u9-wright",
    unitId: "u9",
    anchor: "u9-contradictory-class-locations",
    front: "Wright: contradictory class locations",
    back: [
      "Many people are part owner, part worker (managers, owner-workers, retirees living off stocks) — Marx’s two boxes don’t fit them, and they’re spreading.",
      "Still about the economy — not Weber’s status.",
    ],
  },
  {
    id: "u9-davis-moore",
    unitId: "u9",
    anchor: "u9-functionalist-inequality",
    front: "Davis & Moore (functionalist) vs. Marx (conflict) on inequality",
    back: [
      ["Davis & Moore", "society needs inequality to reward its most valuable jobs. Flaw: the reward is then used as proof the job was valuable — circular."],
      ["Marx", "inequality is one group gaining at another’s expense."],
    ],
  },
  {
    id: "u9-status-capital",
    unitId: "u9",
    anchor: "u9-social-status",
    front: "Marx vs. Weber’s status vs. Bourdieu’s cultural capital",
    back: [
      ["Marx", "ranks you by what you own."],
      ["Weber: social status", "how much respect your position gets — even without money (a priest)."],
      ["Bourdieu: cultural capital", "the standing to declare what counts as good taste, and have people accept it. Can’t simply buy it."],
    ],
    test: "Simply respected (status), or their verdict on what’s good counts (cultural capital)?",
  },
  {
    id: "u9-poverty",
    unitId: "u9",
    anchor: "u9-absolute-poverty",
    front: "Absolute vs. relative poverty",
    frontSub: "How is the US poverty line set? What’s happened to world extreme poverty?",
    back: [
      ["Absolute", "can you cover basic needs? A fixed bar."],
      ["Relative", "far below what’s normal around you — and it harms health. The US has very high relative poverty."],
      ["Poverty line", "3× the cost of an adequate diet; not adjusted for local costs (except AK and HI)."],
      ["World", "extreme poverty has fallen dramatically over ~200 years."],
    ],
  },
  {
    id: "u9-explanations",
    unitId: "u9",
    anchor: "u9-culture-of-poverty",
    front: "Structural vs. cultural explanations of poverty",
    frontSub: "What share of the poor (16+) worked last year? What share of Americans blame Black poverty on lack of will?",
    back: [
      ["Structural", "forces no individual or group controls (U2 structure, U1 public issues)."],
      ["Cultural", "“cultures of poverty” — learned habits like not saving or not trying."],
      ["Poor who worked", "about a third."],
      ["Blame lack of will", "about a third."],
    ],
  },
  {
    id: "u9-class-matters",
    unitId: "u9",
    anchor: "u9-class-matters",
    front: "“Class Matters” — why is it a natural experiment?",
    back: [
      "Three people have the same heart attack; their outcomes split by class.",
      "Nobody intervened (so not a real experiment, U3) — but the same event holds everything constant except class.",
    ],
  },
  {
    id: "u9-facts-class",
    unitId: "u9",
    anchor: "u9-class-map",
    front: "The US class map — guess the shares",
    frontSub: "Upper? Middle? Working? Lower?",
    back: [
      ["Upper", "about 5%."],
      ["Middle", "about 55% — huge and blurry."],
      ["Working / lower", "about 20% each."],
    ],
  },
  {
    id: "u9-facts-education",
    unitId: "u9",
    anchor: "u9-education",
    front: "Education big facts — guess the shares",
    frontSub: "High-school degree (now vs. 1940s)? College (now vs. 1940)? PhD?",
    back: [
      ["High school", "≈ 90% now vs. under 40% in the 1940s."],
      ["College", "about a third now vs. ≈ 5% in 1940."],
      ["PhD", "≈ 2% (1 in 50)."],
    ],
  },
  {
    id: "u9-facts-gaps",
    unitId: "u9",
    front: "Two more Unit 9 facts",
    frontSub: "Older Black women living alone vs. White married elderly men — poverty risk? · How does liking classical music track class?",
    back: [
      ["Poverty risk", "about 10× higher."],
      ["Classical music", "liking rises with class; dislike rises as class falls."],
    ],
  },
];
