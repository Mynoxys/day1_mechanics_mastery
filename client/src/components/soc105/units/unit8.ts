import type { Unit } from "../types";

export const unit8: Unit = {
  id: "u8",
  number: 8,
  title: "Discipline (Deviance & Crime)",
  subtitle:
    "Deviance, law, and four theories of crime — how norms get enforced (not Unit 2’s “discipline” as a field of study)",
  sourceUrl: "https://nhwilson.github.io/chapters/Ch_8_Discipline.html",
  bigPoints: [
    {
      point: "Deviance is action that breaks the norms and values of “most members of society”; laws are deviance the government codifies and enforces.",
      detail:
        "Every society runs on norms, and complex modern societies are internally differentiated, so some people will always act outside the shared expectations. That is deviance — a description of where an act stands relative to norms, not a verdict on someone’s character. When government writes the deviance down and enforces it, it becomes law. The scare quotes around “most members of society” matter: there is little consensus on how widely a norm must be shared for breaking it to count as deviance or crime.",
    },
    {
      point: "Four theories, four answers to “why crime?” and “what is law?”",
      detail:
        "Control theory (closest to American common sense): crime happens when perceived benefits outweigh costs, so deter it by raising costs or cutting benefits. Conflict theory (Marxian): law is not a neutral guide but a code written by elites in their own defense; in an extreme form, lawbreaking is implicit protest. Functionalist theory (Durkheim): the source is anomie, and the response is rituals of punishment and collective renewal that reinforce norms. Interactionist theory: micro — people are socialized into crime in subcultures where it is normal; macro — what counts as criminal is a malleable social construction.",
    },
    {
      point: "Each crime theory is a Unit 3 tradition aimed at deviance.",
      detail:
        "Conflict theory of crime is Unit 3’s conflict theory applied to law; functionalist theory is structural functionalism (Durkheim) applied to crime and punishment; interactionist theory carries symbolic interactionism’s focus on shared meaning into socialization and the shifting definition of “criminal.” Control theory is the one without a Unit 3 parent — it is the common-sense cost–benefit view.",
    },
    {
      point: "The big empirical picture: crime is falling, and the immigrant-crime claim is false.",
      detail:
        "Violent and property crime in the U.S. has been falling (apart from a brief increase during COVID), in urban and non-urban areas alike, making life today safer than at any time in recorded history. And the politically controversial claim that immigrants commit more crime than native-born people — used to justify strident immigration enforcement — is demonstrably false, historically and today.",
    },
  ],
  connections: [
    "Unit 8 sits in the part of the course arguing that your place in social structures is not what it is only because of everyone’s agreement, but also because of power and discipline. Deviance and law are where agreement (norms) meets enforcement (government, punishment).",
    "It reuses Unit 4’s norms and values (deviance is not conforming to them) and subcultures (where crime can be normative), Unit 2’s social construction and micro/macro levels (the interactionist claims), and Unit 3’s theoretical traditions — conflict, structural functionalism, symbolic interactionism — each re-aimed at crime.",
    "Don’t mix it up with Unit 2, also titled “Discipline”: Unit 2 is about sociology as a scientific discipline (a field of study); Unit 8 is about discipline as the enforcement of norms through deviance, law, and punishment. Its interactionist theory leans on Unit 5’s socialization.",
  ],
  concepts: [
    {
      id: "u8-deviance",
      term: "Deviance",
      tier: 1,
      plainIdea:
        "Deviance is “going against the grain”: doing something most people around you think shouldn’t be done, given the shared rules and values. It describes where an act stands relative to group expectations — not a verdict that the person is twisted, evil, or perverted.",
      courseDefinition:
        "Modes of action that do not conform to the norms and values of “most members of society.” Because all societies are governed by norms and modern societies are internally differentiated, deviance is a problem every society meets. The quotation marks flag that there is little consensus on how extensive agreement must be to constitute deviance.",
      freshExample:
        "Showing up to a black-tie wedding in gym shorts, or replying-all to a 400-person university email with “lol” — nothing illegal, but each breaks norms almost everyone in that setting shares.",
      notToConfuse:
        "Laws are the subset of deviance that government codifies and enforces. Tell: would an official body write it down and punish it? Then it’s law/crime; if only eyebrows go up, it’s (just) deviance.",
    },
    {
      id: "u8-laws",
      term: "Laws",
      tier: 1,
      plainIdea:
        "Some norm-breaking matters enough that the state writes it down and backs it with police, courts, and fines. Laws are deviance that has been made official — and breaking them is crime.",
      courseDefinition:
        "When deviance is codified and enforced by government action, it constitutes laws.",
      freshExample:
        "Cutting in line at a coffee shop is deviance; parking in a fire lane is deviance the city has written into its code and will ticket and tow you for.",
      notToConfuse:
        "Not every deviant act is illegal. And the notes don’t treat law as automatically a neutral guide to right and wrong — conflict theory says it is a code written by elites in their own defense.",
    },
    {
      id: "u8-consensus-problem",
      term: "The consensus problem (how widely must a norm be shared?)",
      tier: 3,
      plainIdea:
        "If deviance means breaking what “most people” expect, how many is most? Half? Ninety percent? Everyone in your town but not the next one? The notes flag that there is no agreed-upon line.",
      courseDefinition:
        "There is little consensus on just how extensive consensus around values and norms needs to be to constitute deviance or crime — which is why “most members of society” appears in quotation marks.",
      freshExample:
        "Eating a full hot meal on a packed commuter train: some riders find it rude, others don’t care, and plenty do it themselves. Whether it counts as deviant depends on how much agreement you require.",
      notToConfuse:
        "Not a claim that norms don’t exist or that anything goes. It says the threshold of agreement is contested — a natural lead-in to the interactionist point that the boundary of “criminal” is malleable.",
    },
    {
      id: "u8-control-theory",
      term: "Control theory",
      tier: 1,
      plainIdea:
        "Picture a would-be offender running quick math: what do I get, what might it cost me? If the gain wins, crime happens. So to prevent crime, tilt the scale — make it costlier or less rewarding. It’s the “lock your car, raise the penalty” logic most Americans already carry around.",
      courseDefinition:
        "The theory of deviance and crime most directly connected to mainstream American common sense: crime occurs because the perceived benefits of committing it (for the potential criminal) outweigh the costs. Thus, to deter crime is to raise the costs or decrease the benefits of committing one.",
      freshExample:
        "A bike-share company adds GPS trackers and a $500 charge for unreturned bikes (raising the cost), and makes the bikes unrideable without the app (shrinking the benefit).",
      notToConfuse:
        "Not “control” as in surveillance or a controlling partner — it’s a cost–benefit logic. And not conflict theory: control theory takes the law as given and asks about the offender’s calculation; conflict theory asks whose interests the law serves.",
    },
    {
      id: "u8-conflict-theory",
      term: "Conflict theory (of crime)",
      tier: 1,
      thinker: "Marxian tradition",
      plainIdea:
        "Ask who wrote the rules. Conflict theory says the law isn’t a neutral referee; it’s a rulebook drafted by those at the top to protect what they have, so it tends to criminalize whatever runs against their interests. Pushed to the extreme, breaking the law can be read as a quiet protest against the whole setup.",
      courseDefinition:
        "Stemming from the Marxian tradition, conflict theory argues that, far from being a neutral guide to “what is right and wrong” in a society, the law is a code written by elites in their own defense, criminalizing activity that deviates from their interests. In an extreme form, it implies that breaking the law is an implicit protest against the overall social order.",
      freshExample:
        "Asking why a town’s ban on sleeping in parked cars was drafted with a downtown property owners’ association — and whose interests the ban protects.",
      notToConfuse:
        "Not about fights or arguments. Its parent is Unit 3’s conflict theory/Marxism (groups with clashing interests). Control theory, by contrast, treats the law as a neutral set of costs.",
    },
    {
      id: "u8-functionalist-theory",
      term: "Functionalist theory (of crime)",
      tier: 1,
      thinker: "Emile Durkheim",
      plainIdea:
        "Back to the society-as-a-body picture, with two questions. Why does crime break out? Because institutions lose their grip (anomie). What does a healthy society do about it? It turns the crime into a moment to restate and recommit to its rules.",
      courseDefinition:
        "Functionalist theories of crime and deviance, primarily derived from Durkheim, make arguments both about the source of crime and deviance (anomie: when social institutions weaken, people act on impulse or self-interest) and about the social response (well-functioning societies use crimes as opportunities to reinforce social norms, through rituals of punishment and collective renewal).",
      freshExample:
        "Studying both why vandalism rose in a town after its youth clubs and congregations emptied out, and how the town’s packed sentencing hearing and community clean-up day afterward drew residents together around shared rules.",
      notToConfuse:
        "Two halves — don’t swap them: anomie is the SOURCE; punishment rituals are the RESPONSE. And “functional” doesn’t mean crime is good; it’s about how crime and punishment relate to social order.",
    },
    {
      id: "u8-anomie",
      term: "Anomie",
      tier: 1,
      thinker: "Emile Durkheim",
      plainIdea:
        "Picture the guardrails of social life — family, congregation, neighborhood, workplace — slowly rusting. Nothing collapses overnight, but the rails stop holding people in, so more people simply do what they feel like or what benefits them.",
      courseDefinition:
        "The progressive weakening of the force of social institutions. Durkheim argued deviant behavior in complex societies was driven by anomie: when institutions weaken, people are more likely to act on their impulses, and thus commit crimes of passion or simply self-interest.",
      freshExample:
        "An apartment complex whose tenant association disbands, shared laundry room closes, and longtime neighbors move away; a few years later, package theft and hallway screaming matches are routine.",
      notToConfuse:
        "Not anxiety, anonymity, or anarchy — it’s a condition of institutions losing force, not a private feeling. And it is functionalism’s SOURCE of crime, not its response (punishment rituals).",
    },
    {
      id: "u8-punishment-ritual",
      term: "Rituals of punishment and collective renewal",
      tier: 2,
      thinker: "Emile Durkheim",
      plainIdea:
        "After something shocking, a healthy community doesn’t just clean up. It gathers — trials, sentencings, vigils, public statements — and in doing so restates “this is who we are, and this is not OK.” The crime becomes a chance to recharge the rules.",
      courseDefinition:
        "Durkheim thought that when crimes do occur, well-functioning societies could use them as opportunities to reinforce social norms. Thus, rituals of punishment and collective renewal often follow extraordinary crimes.",
      freshExample:
        "After a hit-and-run kills a beloved crossing guard, the school district holds an assembly, parents pack the driver’s sentencing, and the town repaints every crosswalk in her honor.",
      notToConfuse:
        "Not control theory’s deterrence. Control theory punishes to raise the cost for the next offender; the ritual is about the community reaffirming its norms. Tell: is the point the would-be offender’s calculation, or the group’s recommitment?",
    },
    {
      id: "u8-interactionist-theory",
      term: "Interactionist theory (of crime)",
      tier: 1,
      plainIdea:
        "Crime is learned and defined, not just chosen. Up close, people pick up criminal habits the way they pick up any habit — from the group around them. Zoomed out, which acts even count as “criminal” is something a society decides and re-decides over time.",
      courseDefinition:
        "Interactionist theories make arguments that are primarily about socialization. On a micro-scale, people can be socialized into criminal activity to the extent that subcultures exist in which deviant or criminal behavior is normative or even expected. On a more macro-level, what is considered criminal (or just deviant) is a malleable social construction, so the boundary between acceptable and criminal can mutate and change over time.",
      freshExample:
        "Micro: a new hire at a warehouse learns from coworkers that pocketing damaged stock is “just what everyone does.” Macro: a skateboarding trick once ticketed on a city plaza is now performed at a city-sponsored festival.",
      notToConfuse:
        "Not control theory’s lone calculator: interactionists ask how people came to see the act as normal and how society came to define it as criminal. Its parent is Unit 3’s symbolic interactionism.",
    },
    {
      id: "u8-socialized-into-crime",
      term: "Socialized into crime (interactionist, micro)",
      tier: 2,
      plainIdea:
        "You learn crime the way you learn slang or a sport: by hanging around people for whom it’s normal. If your group expects it, doing it is conforming, not rebelling.",
      courseDefinition:
        "On a micro-scale, interactionist theories argue that people can be socialized into criminal activity, to the extent that subcultures exist in which deviant or criminal behavior is normative or even expected.",
      freshExample:
        "A first-year joins a club team where upperclassmen routinely forge practice-attendance sheets; by spring, she does it too without a second thought.",
      notToConfuse:
        "The macro interactionist claim is about how society defines “criminal,” not how one person learns it. And it’s not control theory: the driver is the group’s norms, not a solo cost–benefit calculation.",
    },
    {
      id: "u8-malleable-boundary",
      term: "Crime as a malleable social construction (interactionist, macro)",
      tier: 2,
      plainIdea:
        "The line between “acceptable” and “criminal” isn’t carved in stone. It exists because people collectively draw it, so it can move: yesterday’s offense can become today’s hobby, and the reverse.",
      courseDefinition:
        "On a more macro-level, interactionist theories emphasize how what is considered criminal (or just deviant) is a malleable social construction, and thus the boundary between what is acceptable and criminal can mutate and change over time.",
      freshExample:
        "Home brewing beer, selling homemade food at a farmers’ market, or busking in the subway — each has been illegal in some places and times and permitted or celebrated in others.",
      notToConfuse:
        "The micro claim is about one person being socialized into crime. Here the unit is the whole society’s definition. It’s Unit 2’s social construction applied to the category “criminal.”",
    },
    {
      id: "u8-crime-decline",
      term: "The long decline in U.S. crime",
      tier: 3,
      plainIdea:
        "Despite how it can feel from the news, the U.S. is getting safer, not more dangerous — and by a lot, historically.",
      courseDefinition:
        "Violent and property crime is falling and has been doing so (except for a brief increase during COVID) throughout the U.S., rendering life today, in urban and non-urban areas, safer than it has been in recorded history.",
      freshExample:
        "A student assumes her parents grew up in safer streets than she did; by the notes’ big picture, the reverse is true.",
      notToConfuse:
        "Not “crime has fallen only in big cities” or “crime is rising.” The direction is down, everywhere, with only a brief COVID-era bump.",
    },
    {
      id: "u8-immigrant-crime",
      term: "The immigrant-crime claim (false)",
      tier: 3,
      plainIdea:
        "A popular political claim says immigrants are more crime-prone than people born here. The evidence says no — then and now.",
      courseDefinition:
        "A politically controversial position holds that strident immigration law enforcement within the United States is justified because immigrants commit crimes more than native-born people. This is demonstrably false, both historically and in the present, given all of the evidence we have.",
      freshExample:
        "A campaign ad blames a neighborhood’s problems on newly arrived families; the notes’ evidence says the premise that immigrants commit more crime doesn’t hold.",
      notToConfuse:
        "Not “the evidence is mixed” or “true in the past but not now.” The notes call it demonstrably false, historically and today.",
    },
  ],
  contrastSets: [
    {
      id: "u8-cs-four-theories",
      title: "Control vs. conflict vs. functionalist vs. interactionist theories of crime",
      conceptIds: ["u8-control-theory", "u8-conflict-theory", "u8-functionalist-theory", "u8-interactionist-theory"],
      axis:
        "Where each locates the cause of crime: the offender’s cost–benefit calculation (control); elites writing law to protect their interests (conflict); weakened institutions, i.e., anomie — with punishment rituals as the response (functionalist); socialization in subcultures and society’s shifting definition of “criminal” (interactionist).",
      test: "Is the story about costs and benefits, about who wrote the law, about institutions weakening and the community reaffirming norms, or about learning crime from a group and redrawing the line?",
    },
    {
      id: "u8-cs-control-conflict",
      title: "Control theory vs. conflict theory: what is the law?",
      conceptIds: ["u8-control-theory", "u8-conflict-theory", "u8-laws"],
      axis:
        "Control theory takes the law as a given rulebook and asks how to make breaking it cost more than it pays; conflict theory denies the law is a neutral guide and treats it as a code written by elites in their own defense.",
      test: "Is the law the background (just change the costs and benefits) or the thing being explained (who wrote it, and to protect whom)?",
    },
    {
      id: "u8-cs-anomie-ritual",
      title: "Functionalist source (anomie) vs. functionalist response (punishment rituals)",
      conceptIds: ["u8-anomie", "u8-punishment-ritual", "u8-functionalist-theory"],
      axis:
        "Anomie explains why crime happens — social institutions progressively lose force, so people act on impulse or self-interest. Punishment rituals describe what a well-functioning society does after crime — use it to reinforce norms through collective renewal.",
      test: "Is the scenario about before the crime (institutions weakening) or after it (the community gathering to punish and renew)?",
    },
    {
      id: "u8-cs-interactionist-levels",
      title: "Interactionist micro claim vs. macro claim",
      conceptIds: ["u8-socialized-into-crime", "u8-malleable-boundary", "u2-micro", "u2-macro"],
      axis:
        "Micro: individuals are socialized into crime in subcultures where it is normative or expected. Macro: the society-wide boundary between acceptable and criminal is a malleable social construction that changes over time.",
      test: "Is the question how this person came to treat the act as normal (micro), or how the whole society came to define the act as criminal or acceptable (macro)?",
      crossUnit: true,
    },
    {
      id: "u8-cs-deviance-laws",
      title: "Deviance vs. laws",
      conceptIds: ["u8-deviance", "u8-laws", "u8-consensus-problem"],
      axis: "Deviance is any action not conforming to the norms and values of “most members of society”; laws are deviance codified and enforced by government action.",
      test: "Does breaking it just draw disapproval (deviance), or has government written it down and enforced it (law)?",
    },
    {
      id: "u8-cs-traditions",
      title: "General traditions (U3) vs. their theories of crime (U8)",
      conceptIds: [
        "u3-conflict-theory",
        "u8-conflict-theory",
        "u3-structural-functionalism",
        "u8-functionalist-theory",
        "u3-symbolic-interactionism",
        "u8-interactionist-theory",
      ],
      axis:
        "Unit 3’s traditions are general lenses on all of society (groups with clashing interests; parts functioning for the whole; coordination through shared symbols). Unit 8 aims each at crime: law as elite code; anomie and punishment rituals; socialization into crime and the shifting definition of “criminal.” Control theory has no Unit 3 parent.",
      test: "Is the question about the general view of society (U3) or specifically about why crime happens and what law/punishment are (U8)?",
      crossUnit: true,
    },
    {
      id: "u8-cs-norms-deviance",
      title: "Norms and values (U4) vs. deviance and laws (U8)",
      conceptIds: ["u4-norms", "u4-values", "u8-deviance", "u8-laws"],
      axis:
        "Norms (situational rules) and values (general goods) are the shared expectations themselves; deviance is action that fails to conform to them; laws are the deviance that government codifies and enforces.",
      test: "Are you naming the expectation (norm/value), the act that breaks it (deviance), or the official, enforced version (law)?",
      crossUnit: true,
    },
    {
      id: "u8-cs-subculture",
      title: "Subculture (U4) vs. being socialized into crime (U8)",
      conceptIds: ["u4-subculture", "u8-socialized-into-crime", "u5-socialization"],
      axis:
        "A subculture is any sub-group with distinctive norms, values, and material culture; the interactionist claim is that when a subculture treats crime as normative or expected, its members can be socialized into it.",
      test: "Is the question just about a group having its own norms (subculture), or about someone learning criminal behavior because those norms expect it (interactionist micro)?",
      crossUnit: true,
    },
    {
      id: "u8-cs-construction",
      title: "Social construction (U2) vs. the malleable boundary of crime (U8)",
      conceptIds: ["u2-social-construction", "u8-malleable-boundary"],
      axis:
        "Unit 2 defines a social construction as something constituted by shared belief; Unit 8’s interactionists apply it to the category “criminal,” which is why the line between acceptable and criminal can move.",
      test: "Is it the general idea (things real by shared belief) or that idea applied to what counts as crime?",
      crossUnit: true,
    },
    {
      id: "u8-cs-two-disciplines",
      title: "Unit 2 “Discipline” (a field of science) vs. Unit 8 “Discipline” (enforcing norms)",
      conceptIds: ["u2-science", "u8-deviance", "u8-laws"],
      axis:
        "Unit 2: discipline as an academic field — sociology as a science, with its ontology and epistemology. Unit 8: discipline as how societies handle deviance — norms, laws, punishment, and theories of crime.",
      test: "Is the question about how sociology works as a science (U2), or about deviance, crime, and law (U8)?",
      crossUnit: true,
    },
  ],
  falseFriends: [
    {
      id: "u8-ff-discipline",
      conceptId: "u8-laws",
      term: "Discipline",
      everyday: "Punishing a kid, personal self-control (“she has discipline”), or an academic field.",
      course:
        "In Unit 8, the title points to how societies enforce norms: deviance, its codification into law, the response of punishment, and theories of why crime happens. (Unit 2’s “Discipline” was sociology as a scientific field.)",
      trap: "You may answer a Unit 8 question with Unit 2 material (science, ontology) or with personal willpower — neither is what this chapter is about.",
    },
    {
      id: "u8-ff-deviance",
      conceptId: "u8-deviance",
      term: "Deviance / deviant",
      everyday: "Perverted, creepy, a bad or dangerous person.",
      course: "Action that does not conform to the norms and values of “most members of society” — a description of an act relative to norms, which can be harmless or even admirable.",
      trap: "You’ll reject a harmless norm-breaking example (odd clothing, an unusual hobby in the wrong setting) as “not deviance” because it isn’t sinister.",
    },
    {
      id: "u8-ff-anomie",
      conceptId: "u8-anomie",
      term: "Anomie",
      everyday: "Sounds like “anonymous” or “anxiety” — feeling nameless or stressed.",
      course: "The progressive weakening of the force of social institutions; for Durkheim, the source of deviance in complex societies.",
      trap: "An option about a person’s feelings of anonymity or worry is tempting; the course term describes institutions losing their grip.",
    },
    {
      id: "u8-ff-conflict",
      conceptId: "u8-conflict-theory",
      term: "Conflict",
      everyday: "A fight, an argument, or a war.",
      course: "The Marxian claim that law is a code written by elites in their own defense, criminalizing activity that deviates from their interests.",
      trap: "You might think conflict theory explains bar fights or feuds; it’s about whose interests the law serves.",
    },
    {
      id: "u8-ff-control",
      conceptId: "u8-control-theory",
      term: "Control",
      everyday: "Surveillance, police control, or a controlling person.",
      course: "Control theory: crime happens when perceived benefits outweigh costs, so deterrence means raising costs or decreasing benefits.",
      trap: "A scenario that removes the payoff from a crime (making stolen goods worthless) is control theory even with no police or cameras in sight.",
    },
    {
      id: "u8-ff-functional",
      conceptId: "u8-punishment-ritual",
      term: "Functional",
      everyday: "Works well, is good, or is healthy (“a functional family”).",
      course:
        "Functionalist theory asks how crime and punishment relate to social order: anomie as the source, and rituals of punishment and collective renewal that reinforce norms as the response.",
      trap: "You may think a functionalist says crime is good. The claim is that well-functioning societies use crimes as opportunities to reinforce norms.",
    },
    {
      id: "u8-ff-law",
      conceptId: "u8-laws",
      term: "Law",
      everyday: "A neutral, objective statement of right and wrong.",
      course: "Deviance codified and enforced by government action — and, for conflict theory, a code written by elites in their own defense rather than a neutral guide.",
      trap: "A T/F claiming all theories treat law as a neutral guide to “what is right and wrong” is false; conflict theory denies exactly that.",
    },
  ],
  magnitudes: [
    {
      id: "u8-m-crime-trend",
      prompt: "Compared with the past, how safe is life in the U.S. today in terms of violent and property crime?",
      answer: "Safer than at any time in recorded history — crime has been falling (apart from a brief COVID-era increase), in urban and non-urban areas",
      whyItMatters:
        "Common sense (and control theory’s appeal) often assumes crime is spiraling and needs ever-higher costs; the big empirical fact points the other way, so claims about crime need to be checked against the evidence.",
    },
    {
      id: "u8-m-immigrant-crime",
      prompt: "Do immigrants commit crimes more than native-born people?",
      answer: "No — that claim is demonstrably false, both historically and today",
      whyItMatters:
        "It is used to justify strident immigration enforcement, which makes it a live example of how the label “criminal” can get attached to a group by political claims rather than evidence — the territory of conflict and interactionist theories.",
    },
    {
      id: "u8-m-consensus",
      prompt: "How much agreement is there on how widely shared a norm must be for breaking it to count as deviance or crime?",
      answer: "Little consensus",
      whyItMatters:
        "That’s why “most members of society” sits in scare quotes in the definition of deviance — and why interactionists can argue that the boundary of “criminal” is malleable.",
    },
  ],
  questions: [
    // ───────────── Conceptual ─────────────
    {
      id: "u8-q1",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u8-deviance"],
      stem: "In the course notes, “deviance” refers to…",
      options: [
        {
          text: "Behavior by people with a disturbed or perverted character",
          why: "That’s the everyday, judgmental meaning of “deviant.” The course term describes an act relative to norms, not a person’s character.",
        },
        {
          text: "Modes of action that do not conform to the norms and values of “most members of society”",
          correct: true,
          why: "That’s the notes’ definition — deviance is about non-conformity to shared norms and values.",
        },
        {
          text: "Any action that breaks a law written by the government",
          why: "That’s laws/crime — the narrower case where deviance is codified and enforced by government. Plenty of deviance is legal.",
        },
        {
          text: "The progressive weakening of the force of social institutions",
          why: "That’s anomie — Durkheim’s source of deviance, not deviance itself.",
        },
      ],
    },
    {
      id: "u8-q2",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u8-laws", "u8-deviance", "u4-norms"],
      stem: "According to the notes, when deviance is codified and enforced by government action, it constitutes…",
      options: [
        {
          text: "Norms",
          why: "Norms are the rule-like expectations themselves (Unit 4); they exist with or without government enforcement.",
        },
        {
          text: "Values",
          why: "Values are general statements of what is good or important (Unit 4) — not government-enforced codes.",
        },
        {
          text: "Anomie",
          why: "Anomie is the weakening of social institutions’ force — closer to the opposite of codified enforcement.",
        },
        {
          text: "Laws",
          correct: true,
          why: "Laws = deviance codified and enforced by government action.",
        },
      ],
    },
    {
      id: "u8-q3",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 3,
      conceptIds: ["u8-consensus-problem", "u8-deviance"],
      stem:
        "True/False: The notes say sociologists broadly agree on exactly how widely a norm must be shared before breaking it counts as deviance.",
      options: [
        {
          text: "True",
          why: "This reverses the notes. The quotation marks around “most members of society” flag that there is little consensus on that threshold.",
        },
        {
          text: "False",
          correct: true,
          why: "Right — there is little consensus on how extensive agreement around norms and values must be to constitute deviance or crime.",
        },
      ],
    },
    {
      id: "u8-q4",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u8-control-theory"],
      stem:
        "Which theory holds that crime occurs because the perceived benefits of committing it outweigh the costs, so deterring crime means raising costs or decreasing benefits?",
      options: [
        {
          text: "Control theory",
          correct: true,
          why: "That’s control theory’s cost–benefit logic — the theory the notes call closest to mainstream American common sense.",
        },
        {
          text: "Conflict theory",
          why: "Conflict theory asks whose interests the law serves (elites’), not how individual offenders weigh costs and benefits.",
        },
        {
          text: "Functionalist theory",
          why: "Functionalism locates the source of crime in anomie and the response in punishment rituals — not in a cost–benefit calculation.",
        },
        {
          text: "Interactionist theory",
          why: "Interactionists focus on socialization into crime and the shifting definition of “criminal,” not on individual cost–benefit math.",
        },
      ],
    },
    {
      id: "u8-q5",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u8-conflict-theory", "u8-laws"],
      stem: "In the conflict theory of crime, what is the “conflict” about?",
      options: [
        {
          text: "Violent confrontations between individuals, such as fights and assaults",
          why: "That’s the everyday meaning of “conflict.” The theory is about whose interests the law serves, not about personal fights.",
        },
        {
          text: "The tension between a person’s impulses and the costs of acting on them",
          why: "That sounds like control theory’s cost–benefit calculation (or anomie’s impulses), not conflict theory.",
        },
        {
          text: "The law as a code written by elites in their own defense, criminalizing activity that runs against their interests",
          correct: true,
          why: "Conflict theory (Marxian) says law is not a neutral guide to right and wrong but a tool of elite interests.",
        },
        {
          text: "Disagreement about how widely shared a norm must be to count as deviance",
          why: "That’s the consensus problem the notes raise about defining deviance — not the conflict in conflict theory.",
        },
      ],
    },
    {
      id: "u8-q6",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u8-anomie"],
      stem: "In Durkheim’s functionalist theory of crime, “anomie” means…",
      options: [
        {
          text: "A feeling of anxiety or stress in an individual",
          why: "Sounds plausible, but anomie isn’t an emotion — it’s a condition of social institutions losing force.",
        },
        {
          text: "Being anonymous in a big crowd",
          why: "The word looks like “anonymous,” but that’s not the course meaning.",
        },
        {
          text: "A subculture in which crime is normative or expected",
          why: "That’s the interactionist micro claim about socialization into crime.",
        },
        {
          text: "The progressive weakening of the force of social institutions",
          correct: true,
          why: "That’s the notes’ definition; when institutions weaken, people are more likely to act on impulse or self-interest.",
        },
      ],
    },
    {
      id: "u8-q7",
      skill: "conceptual",
      format: "mc",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u8-anomie", "u8-functionalist-theory"],
      stem:
        "The argument that deviant behavior in complex societies is driven by anomie, and that societies can use crimes as opportunities to reinforce norms, is primarily derived from…",
      fixedOrder: true,
      options: [
        {
          text: "Karl Marx",
          why: "The notes connect Marx (the Marxian tradition) to conflict theory: law as a code written by elites.",
        },
        {
          text: "Emile Durkheim",
          correct: true,
          why: "Functionalist theories of crime are primarily derived from Durkheim — both the anomie source and the punishment-ritual response.",
        },
        {
          text: "Max Weber",
          why: "Weber appears elsewhere in the course (social action, rationalization) but isn’t tied to anomie in the notes.",
        },
        {
          text: "C. Wright Mills",
          why: "Mills is the sociological imagination and the Power Elite (a conflict-tradition idea), not anomie.",
        },
      ],
    },
    {
      id: "u8-q8",
      skill: "conceptual",
      format: "mc",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u8-conflict-theory", "u3-conflict-theory"],
      stem: "The claim that law is a code written by elites in their own defense stems from which intellectual tradition?",
      options: [
        {
          text: "The Marxian tradition",
          correct: true,
          why: "Conflict theory of crime stems from the Marxian tradition — the same root as Unit 3’s conflict theory.",
        },
        {
          text: "The Durkheimian tradition",
          why: "Durkheim is the root of functionalist theory, which sees punishment as reinforcing shared norms — not law as elite self-defense.",
        },
        {
          text: "Mainstream American common sense",
          why: "That’s what the notes connect to control theory, which treats law as a given set of costs.",
        },
        {
          text: "Symbolic interactionism",
          why: "Interactionist theories of crime focus on socialization and the malleable definition of crime, not elite authorship of law.",
        },
      ],
    },
    {
      id: "u8-q9",
      skill: "conceptual",
      format: "tf",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u8-functionalist-theory", "u8-anomie", "u8-punishment-ritual"],
      stem:
        "True/False: Functionalist theories of crime make arguments both about the source of crime and deviance and about the social response to it.",
      options: [
        {
          text: "True",
          correct: true,
          why: "Right — the source is anomie (institutions weakening), and the response is rituals of punishment and collective renewal that reinforce norms.",
        },
        {
          text: "False",
          why: "The notes explicitly say functionalist theories address both: anomie as the source and punishment rituals as the response.",
        },
      ],
    },
    {
      id: "u8-q10",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u8-interactionist-theory", "u5-socialization"],
      stem: "According to the notes, interactionist theories of crime make arguments that are primarily about…",
      options: [
        {
          text: "The costs and benefits facing potential offenders",
          why: "That’s control theory.",
        },
        {
          text: "Elites’ interests written into the law",
          why: "That’s conflict theory.",
        },
        {
          text: "Socialization",
          correct: true,
          why: "Interactionists focus on how people are socialized into crime (micro) and how society defines “criminal” (macro).",
        },
        {
          text: "The weakening of social institutions",
          why: "That’s anomie, the functionalist source of crime.",
        },
      ],
    },
    {
      id: "u8-q11",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u8-control-theory"],
      stem: "Which theory of deviance and crime do the notes describe as most directly connected to mainstream American common sense?",
      options: [
        {
          text: "Conflict theory",
          why: "Conflict theory’s claim that law is an elite code is a critical, Marxian view — not common sense.",
        },
        {
          text: "Functionalist theory",
          why: "Functionalism’s anomie and punishment rituals come from Durkheim’s sociology, not everyday common sense.",
        },
        {
          text: "Interactionist theory",
          why: "Interactionists emphasize socialization and malleable definitions of crime — not what the notes call common sense.",
        },
        {
          text: "Control theory",
          correct: true,
          why: "The cost–benefit view (“make crime not pay”) is the one the notes tie to mainstream American common sense.",
        },
      ],
    },
    {
      id: "u8-q12",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 1,
      conceptIds: ["u8-conflict-theory", "u8-laws"],
      stem: "True/False: Conflict theory holds that the law is a neutral guide to what is right and wrong in a society.",
      options: [
        {
          text: "True",
          why: "This reverses conflict theory. It argues that, far from being neutral, law is a code written by elites in their own defense.",
        },
        {
          text: "False",
          correct: true,
          why: "Right — conflict theory denies the law’s neutrality and treats it as a defense of elite interests.",
        },
      ],
    },
    {
      id: "u8-q13",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 2,
      conceptIds: ["u8-punishment-ritual", "u8-functionalist-theory"],
      stem: "From the functionalist view, what do rituals of punishment and collective renewal after extraordinary crimes do for a well-functioning society?",
      options: [
        {
          text: "Use the crime as an opportunity to reinforce social norms",
          correct: true,
          why: "That’s Durkheim’s point: the community’s response restates and strengthens its shared rules.",
        },
        {
          text: "Show that crime is good for society and should be encouraged",
          why: "The everyday sense of “functional = good” misleads here. The claim is about how societies respond to crime, not that crime is desirable.",
        },
        {
          text: "Raise the costs of crime so future offenders decide it isn’t worth it",
          why: "That’s control theory’s deterrence logic, not the functionalist focus on collective renewal.",
        },
        {
          text: "Protect elites by criminalizing activity that threatens their interests",
          why: "That’s conflict theory’s view of law.",
        },
      ],
    },
    {
      id: "u8-q14",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u8-malleable-boundary", "u8-interactionist-theory", "u2-macro"],
      stem: "What is the macro-level claim of interactionist theories of crime?",
      options: [
        {
          text: "People can be socialized into crime within subcultures where it is expected",
          why: "That’s the interactionist micro-level claim, about individuals learning crime.",
        },
        {
          text: "Crime rises when social institutions progressively lose their force",
          why: "That’s anomie, the functionalist source of crime.",
        },
        {
          text: "What counts as criminal is a malleable social construction, so the boundary can change over time",
          correct: true,
          why: "At the macro level, interactionists stress that the line between acceptable and criminal can mutate.",
        },
        {
          text: "Crime occurs when perceived benefits outweigh costs",
          why: "That’s control theory.",
        },
      ],
    },
    {
      id: "u8-q15",
      skill: "conceptual",
      format: "tf",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u8-socialized-into-crime", "u4-subculture"],
      stem:
        "True/False: Interactionist theories argue that people can be socialized into criminal activity where subcultures exist in which such behavior is normative or even expected.",
      options: [
        {
          text: "True",
          correct: true,
          why: "Right — that’s the interactionist micro-level claim: crime can be learned from a group for which it is normal.",
        },
        {
          text: "False",
          why: "The notes state exactly this as the micro-scale interactionist argument.",
        },
      ],
    },
    {
      id: "u8-q16",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u8-deviance", "u8-laws", "u2-science"],
      stem:
        "Both Unit 2 and Unit 8 are titled “Discipline.” What is Unit 8’s “discipline” about, as opposed to Unit 2’s?",
      options: [
        {
          text: "Sociology as a scientific discipline, with its ontology and epistemology",
          why: "That’s Unit 2 — discipline as a field of study.",
        },
        {
          text: "Personal self-control and willpower",
          why: "That’s the everyday sense of “discipline,” not the chapter’s subject.",
        },
        {
          text: "How parents punish children within families",
          why: "Another everyday meaning; the chapter is about deviance and crime at the level of society.",
        },
        {
          text: "Deviance, law, and theories of why crime happens and how societies respond",
          correct: true,
          why: "Unit 8 covers deviance, laws, and the control, conflict, functionalist, and interactionist theories of crime.",
        },
      ],
    },
    {
      id: "u8-q17",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u8-deviance", "u4-norms", "u4-values"],
      stem: "How does deviance relate to Unit 4’s norms and values?",
      options: [
        {
          text: "Deviance is another word for norms — what most people normally do",
          why: "Norms are the expectations; deviance is action that breaks them. (And norms aren’t just “what’s normal” statistically.)",
        },
        {
          text: "Deviance is action that does not conform to the norms and values of “most members of society”",
          correct: true,
          why: "Deviance is defined against norms and values — it is the failure to conform to them.",
        },
        {
          text: "Deviance is a value that a subculture holds in opposition to the mainstream",
          why: "A subculture may hold distinctive values, but deviance is an action, defined relative to the wider society’s norms.",
        },
        {
          text: "Deviance only exists once a norm has been written into law",
          why: "Codified, government-enforced deviance is law; deviance itself needs no law.",
        },
      ],
    },

    // ───────────── Application ─────────────
    {
      id: "u8-q18",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u8-control-theory"],
      stem:
        "A city doubles the fine for driving in bus-only lanes and installs cameras that ticket automatically, predicting violations will drop. Which theory of crime is this policy built on?",
      options: [
        {
          text: "Interactionist theory",
          why: "Nothing here concerns socialization or redefining what counts as criminal — just making violations costlier.",
        },
        {
          text: "Functionalist theory",
          why: "There’s no anomie and no communal ritual reaffirming norms — just a change in costs.",
        },
        {
          text: "Control theory",
          correct: true,
          why: "Raising the costs of an offense to deter it is exactly control theory’s logic.",
        },
        {
          text: "Conflict theory",
          why: "Conflict theory would ask whose interests the bus-lane law serves; the policy itself just adjusts costs.",
        },
      ],
    },
    {
      id: "u8-q19",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u8-punishment-ritual", "u8-functionalist-theory"],
      stem:
        "After a shocking attack at a local park, hundreds of residents hold a candlelight vigil, the mayor speaks about “the kind of town we are,” and the trial is followed closely by everyone. Which idea best fits?",
      options: [
        {
          text: "Functionalist theory: rituals of punishment and collective renewal reinforce social norms",
          correct: true,
          why: "The community is using an extraordinary crime as an occasion to restate and recommit to its norms — Durkheim’s response.",
        },
        {
          text: "Control theory: raising the costs of crime for future offenders",
          why: "Tempting, since there’s a trial, but the scene is about collective reaffirmation, not adjusting an offender’s cost–benefit math.",
        },
        {
          text: "Anomie: the progressive weakening of social institutions",
          why: "Anomie is the functionalist source of crime; this scenario shows institutions pulling together, the response.",
        },
        {
          text: "Interactionist theory: the boundary of criminality is changing",
          why: "Nobody is redefining whether the attack is criminal; the town is reaffirming an existing norm.",
        },
      ],
    },
    {
      id: "u8-q20",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u8-socialized-into-crime", "u8-interactionist-theory"],
      stem:
        "A 15-year-old starts hanging out with a crew whose members treat shoplifting from big-box stores as routine and tease anyone who won’t. Within months, he shoplifts too. Which theory best explains this?",
      options: [
        {
          text: "Conflict theory",
          why: "Nothing suggests the crew sees shoplifting as protest or that the law is elite self-defense; the story is about learning from a group.",
        },
        {
          text: "Control theory",
          why: "Control theory would focus on his solo cost–benefit math; here, the driver is a group where the behavior is expected.",
        },
        {
          text: "Functionalist theory (anomie)",
          why: "Anomie concerns institutions weakening society-wide, not a specific group teaching a member its norms.",
        },
        {
          text: "Interactionist theory (micro): socialization into a subculture where crime is normative",
          correct: true,
          why: "He is being socialized into crime by a subculture in which it is expected — the interactionist micro claim.",
        },
      ],
    },
    {
      id: "u8-q21",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u8-malleable-boundary", "u2-social-construction"],
      stem:
        "Selling homemade baked goods without a commercial license was once a citable offense in a state; a new law now allows it, and “cottage bakers” are featured in the local paper. Which idea does this best illustrate?",
      options: [
        {
          text: "Anomie, because the state’s institutions are losing force",
          why: "Changing a law through the legislature isn’t institutions weakening; it’s the line being redrawn.",
        },
        {
          text: "The interactionist macro claim: what counts as criminal is a malleable social construction",
          correct: true,
          why: "The boundary between acceptable and criminal moved over time — exactly the macro interactionist point.",
        },
        {
          text: "Control theory, because the benefits of baking increased",
          why: "Control theory explains individual decisions to offend given a law; here the law itself changed what counts as an offense.",
        },
        {
          text: "A punishment ritual reinforcing social norms",
          why: "There’s no crime being punished and no collective renewal — a category was decriminalized.",
        },
      ],
    },
    {
      id: "u8-q22",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u8-conflict-theory", "u8-laws"],
      stem:
        "A new ordinance bans gathering in groups of more than four outside a luxury shopping district. It was drafted with the district’s property owners, who wanted to keep away people they saw as bad for business. Which theory best fits this analysis?",
      options: [
        {
          text: "Functionalist theory",
          why: "Functionalism would read punishment as reinforcing shared norms; this analysis says the law serves a particular group.",
        },
        {
          text: "Interactionist theory (micro)",
          why: "No one is being socialized into crime here; the question is who wrote the law and why.",
        },
        {
          text: "Conflict theory",
          correct: true,
          why: "The law is analyzed as a code written in the interests of those with property and power — conflict theory’s claim.",
        },
        {
          text: "Control theory",
          why: "Control theory would take the ordinance as given and ask how to deter violations, not whose interests it protects.",
        },
      ],
    },
    {
      id: "u8-q23",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u8-anomie", "u8-functionalist-theory", "u8-control-theory"],
      stem:
        "Over twenty years a mill town’s union hall, churches, and civic clubs empty out and families scatter. Bar fights and impulsive thefts rise. A classmate says, “Penalties must have gotten weaker.” Which lens fits the story better?",
      options: [
        {
          text: "Functionalist theory: anomie, the weakening force of social institutions",
          correct: true,
          why: "The scenario is about institutions losing their grip, so people act on impulse and self-interest — Durkheim’s source of crime.",
        },
        {
          text: "Control theory: penalties fell, so the costs of crime dropped",
          why: "Nothing in the scenario changes penalties; the classmate imposes a cost–benefit lens on a story about institutional decline.",
        },
        {
          text: "Conflict theory: elites rewrote the law in their own defense",
          why: "No law changed and no elite interest is described.",
        },
        {
          text: "Interactionist theory: the town redefined what counts as criminal",
          why: "Fights and theft were criminal before and after; the boundary didn’t move.",
        },
      ],
    },
    {
      id: "u8-q24",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u8-control-theory", "u8-functionalist-theory"],
      stem:
        "A pharmacy locks razors and cosmetics behind plexiglass and posts signs saying “All shoplifters will be prosecuted.” A classmate calls this a functionalist response to crime. Which theory actually fits the pharmacy’s strategy?",
      options: [
        {
          text: "Functionalist theory, as the classmate said",
          why: "There’s no communal ritual reaffirming norms and no anomie — just a store making theft harder and riskier.",
        },
        {
          text: "Interactionist theory",
          why: "The strategy doesn’t involve socialization or redefining what’s criminal.",
        },
        {
          text: "Conflict theory",
          why: "Conflict theory would ask whose interests shoplifting law serves; the pharmacy is simply adjusting costs.",
        },
        {
          text: "Control theory",
          correct: true,
          why: "Making theft harder (raising costs) and threatening prosecution (raising costs further) is control theory’s deterrence logic.",
        },
      ],
    },
    {
      id: "u8-q25",
      skill: "application",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u8-deviance"],
      stem:
        "A grandmother shows up to a heavy-metal concert in her Sunday best and calmly knits near the mosh pit. Harmless and legal — but is it deviance in the course’s sense?",
      options: [
        {
          text: "No, because deviance only applies to dangerous or immoral people",
          why: "That’s the everyday, judgmental meaning. Deviance describes non-conformity to norms, not a person’s morality.",
        },
        {
          text: "Yes, because her action doesn’t conform to the norms most people in that setting share",
          correct: true,
          why: "Deviance is action not conforming to the norms and values of “most members” — it can be perfectly harmless.",
        },
        {
          text: "No, because she isn’t breaking any law",
          why: "Law is the narrower, codified case. Deviance needs no law.",
        },
        {
          text: "Yes, because she is suffering from anomie",
          why: "Anomie is a society-level weakening of institutions, not an individual’s odd behavior.",
        },
      ],
    },
    {
      id: "u8-q26",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u8-deviance", "u8-laws"],
      stem: "Which of these is deviance but NOT a violation of law?",
      options: [
        {
          text: "Driving 30 mph over the speed limit on a highway",
          why: "Speeding is deviance that government has codified and enforces — a law violation.",
        },
        {
          text: "Shoplifting a phone charger",
          why: "Theft is codified and enforced by government — crime.",
        },
        {
          text: "Taking a loud speakerphone call in the designated quiet car of a train",
          correct: true,
          why: "It breaks a norm almost everyone in the quiet car shares, but no government enforces it — deviance, not law.",
        },
        {
          text: "Spray-painting a city bus shelter",
          why: "Vandalism is codified and enforced by government — a law violation.",
        },
      ],
    },
    {
      id: "u8-q27",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u8-laws", "u8-deviance"],
      stem:
        "Residents have long frowned on people leaving shopping carts in the street. The city council now passes an ordinance with a $100 fine, enforced by parking officers. In the notes’ terms, what happened?",
      options: [
        {
          text: "Deviance was codified and enforced by government, making it law",
          correct: true,
          why: "A norm violation people disapproved of has been written into code and backed by government enforcement.",
        },
        {
          text: "A value was turned into a norm",
          why: "The norm (don’t abandon carts) already existed; what changed is government codification and enforcement.",
        },
        {
          text: "The town experienced anomie",
          why: "Anomie is institutions weakening; here a government institution is asserting force.",
        },
        {
          text: "A ritual of collective renewal followed an extraordinary crime",
          why: "Abandoned carts aren’t an extraordinary crime, and passing an ordinance isn’t a communal ritual.",
        },
      ],
    },
    {
      id: "u8-q28",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 3,
      conceptIds: ["u8-consensus-problem", "u8-deviance"],
      stem:
        "Surveys at a large campus find about half of students think vaping in dorm rooms is fine, and about half think it’s unacceptable. Whether it “counts” as deviance is hard to say. Which point from the notes does this illustrate?",
      options: [
        {
          text: "Control theory: the benefits of vaping outweigh the costs for half the students",
          why: "Control theory explains why someone offends, not whether the act counts as deviance in the first place.",
        },
        {
          text: "Anomie: the dorm’s institutions are progressively weakening",
          why: "Nothing suggests institutions losing force; the issue is divided opinion.",
        },
        {
          text: "Rituals of punishment reinforce social norms",
          why: "No crime or communal punishment ritual is described.",
        },
        {
          text: "There is little consensus on how widely shared a norm must be to constitute deviance",
          correct: true,
          why: "When a community is split, it’s unclear whether “most members” hold the norm — the notes’ consensus problem.",
        },
      ],
    },
    {
      id: "u8-q29",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u8-conflict-theory"],
      stem:
        "A commentator argues that rising subway fare evasion is really a silent statement against an economic order that most riders feel is rigged against them. Which theory, in its extreme form, makes this kind of claim?",
      options: [
        {
          text: "Interactionist theory",
          why: "Interactionists might study how fare evasion becomes normal in a group, but reading lawbreaking as protest against the social order is conflict theory.",
        },
        {
          text: "Conflict theory",
          correct: true,
          why: "In its extreme form, conflict theory implies that breaking the law is an implicit protest against the overall social order.",
        },
        {
          text: "Control theory",
          why: "Control theory would say fare evasion happens because the benefits beat the costs — no protest involved.",
        },
        {
          text: "Functionalist theory",
          why: "Functionalism would point to anomie or to rituals reinforcing norms, not lawbreaking as protest.",
        },
      ],
    },
    {
      id: "u8-q30",
      skill: "application",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u8-control-theory"],
      stem:
        "Phone makers add a feature that lets owners remotely lock a stolen phone, making it worthless to resell. Phone theft drops. No new police or cameras were involved. Which theory fits best?",
      options: [
        {
          text: "Conflict theory, because phone companies are powerful",
          why: "Power alone isn’t the point; nothing here concerns elites writing law in their own defense.",
        },
        {
          text: "Interactionist theory, because thieves learned new norms",
          why: "There’s no subculture or redefinition — the payoff of theft simply disappeared.",
        },
        {
          text: "Control theory, because the benefits of stealing were decreased",
          correct: true,
          why: "Control theory deters crime by raising costs OR decreasing benefits. “Control” here means cost–benefit, not surveillance.",
        },
        {
          text: "Functionalist theory, because the feature restored the force of social institutions",
          why: "Tempting if you think “no police, so not control theory” — but that’s the everyday meaning of “control.” Nothing here involves institutions or anomie; the payoff of theft was cut, which is control theory.",
        },
      ],
    },
    {
      id: "u8-q31",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u8-control-theory", "u8-conflict-theory"],
      stem:
        "Two analysts discuss a new law with steep penalties for blocking warehouse entrances during labor protests. Analyst A: “Higher penalties will make blocking entrances not worth it.” Analyst B: “Warehouse owners lobbied for this law to protect their interests.” Which theories are they using?",
      options: [
        {
          text: "A: control theory; B: conflict theory",
          correct: true,
          why: "A treats the law as given and reasons about costs; B treats the law itself as a code written in elites’ defense.",
        },
        {
          text: "A: conflict theory; B: control theory",
          why: "Reversed — cost–benefit reasoning is control theory; “who wrote this law and for whom” is conflict theory.",
        },
        {
          text: "A: functionalist theory; B: interactionist theory",
          why: "Neither analyst mentions anomie, rituals, socialization, or a shifting definition of crime.",
        },
        {
          text: "Both are using functionalist theory",
          why: "Neither analyst talks about anomie or punishment reaffirming shared norms.",
        },
      ],
    },
    {
      id: "u8-q32",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 2,
      conceptIds: ["u8-socialized-into-crime", "u8-control-theory"],
      stem:
        "A researcher studies a neighborhood group where older members teach younger ones that stealing car parts is a normal rite of passage. She explains it purely as each teen weighing payoff against risk. What lens would better capture what she found?",
      options: [
        {
          text: "Conflict theory: the car-parts law is an elite code",
          why: "Her findings are about teaching and expectations within a group, not who wrote the law.",
        },
        {
          text: "Functionalist theory: rituals of collective renewal",
          why: "There is no communal response to an extraordinary crime here.",
        },
        {
          text: "Control theory, applied more carefully",
          why: "Control theory is the lens she already used; it misses that the behavior is taught and expected by a group.",
        },
        {
          text: "Interactionist theory: socialization into a subculture where crime is normative",
          correct: true,
          why: "Older members teaching younger ones that stealing is normal is socialization into crime — the interactionist micro claim.",
        },
      ],
    },
    {
      id: "u8-q33",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u8-interactionist-theory", "u8-control-theory"],
      stem: "Which scenario is the WORST fit for interactionist theory?",
      options: [
        {
          text: "A teen learns from older cousins that dealing is the family business",
          why: "Socialization into crime within a group where it’s expected — a good interactionist (micro) fit.",
        },
        {
          text: "A town raises parking fines and finds fewer illegal parkers the next month",
          correct: true,
          why: "That’s a straight cost–benefit story — control theory. No socialization, no redefinition of what’s criminal.",
        },
        {
          text: "A once-banned street dance is now taught in after-school programs",
          why: "The boundary of acceptable vs. deviant moved — an interactionist (macro) fit.",
        },
        {
          text: "A new employee learns from coworkers that padding mileage reports is “how it’s done here”",
          why: "Learning deviance from a group where it’s normative — an interactionist (micro) fit.",
        },
      ],
    },
    {
      id: "u8-q34",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 2,
      conceptIds: ["u8-punishment-ritual", "u8-control-theory"],
      stem:
        "After an embezzler steals a youth league’s savings, the league holds a packed meeting where parents pledge to “never let this happen to our kids again,” and the sentencing is attended by the whole community. A friend says it’s all about deterring future embezzlers. Which theory better explains the gathering itself?",
      options: [
        {
          text: "Control theory, as the friend says",
          why: "Deterrence is control theory’s angle, but the gathering is about the community recommitting to its norms, not a future offender’s calculation.",
        },
        {
          text: "Conflict theory: the league’s elites are defending their interests",
          why: "The scenario is about a whole community’s shared response, not elites writing law for themselves.",
        },
        {
          text: "Functionalist theory: a ritual of punishment and collective renewal reinforcing norms",
          correct: true,
          why: "An extraordinary crime becomes an occasion for the group to restate and strengthen its norms — Durkheim’s response.",
        },
        {
          text: "Interactionist theory: the boundary of crime is shifting",
          why: "Embezzlement was and remains criminal; nothing about the boundary changed.",
        },
      ],
    },
    {
      id: "u8-q35",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u8-socialized-into-crime", "u4-subculture"],
      stem:
        "On one dorm floor, upperclassmen share answer keys for online quizzes and mock anyone who doesn’t use them. Freshmen there quickly start using them too. Which combination of ideas best describes this?",
      options: [
        {
          text: "A subculture (Unit 4) in which deviance is normative, socializing members into it (interactionist micro)",
          correct: true,
          why: "The floor has its own distinctive norms, and members are socialized into cheating because it’s expected there.",
        },
        {
          text: "Anomie (Unit 8) caused by multiculturalism (Unit 4)",
          why: "Nothing here involves institutions weakening or society accommodating newcomers’ cultures.",
        },
        {
          text: "Assimilation (Unit 4) into the university’s mainstream culture",
          why: "The freshmen adopt a sub-group’s deviant norms, not the mainstream’s.",
        },
        {
          text: "Control theory, since the freshmen are only weighing costs and benefits",
          why: "The key driver is the group’s expectations and mockery — socialization, not a solo calculation.",
        },
      ],
    },
    {
      id: "u8-q36",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u8-malleable-boundary", "u2-social-construction"],
      stem:
        "Visible tattoos once got job applicants rejected as “deviant” at many workplaces; today they’re common even among teachers and nurses. Which Unit 2 idea is the interactionist macro claim applying here?",
      options: [
        {
          text: "Emergence",
          why: "Emergence (Unit 2) is about higher-level properties not reducible to parts — not why a deviance boundary moves.",
        },
        {
          text: "Micro-level analysis",
          why: "This is about a society-wide definition changing over time — macro, not face-to-face.",
        },
        {
          text: "The scientific method",
          why: "Nothing here is about how science produces knowledge.",
        },
        {
          text: "Social construction",
          correct: true,
          why: "What counts as deviant exists by shared belief, so as beliefs change the boundary moves — the interactionist macro point.",
        },
      ],
    },
    {
      id: "u8-q37",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u8-conflict-theory", "u8-punishment-ritual"],
      stem:
        "A city bans sleeping in public parks after lobbying by a homeowners’ association worried about property values. A student says it’s a functionalist ritual reinforcing community norms. Which theory better fits the claim that the law exists to protect the homeowners?",
      options: [
        {
          text: "Functionalist theory, as the student says",
          why: "No extraordinary crime or communal ritual is involved; the analysis is about a group shaping the law for its own interests.",
        },
        {
          text: "Conflict theory",
          correct: true,
          why: "A law shaped by those with property and power to protect their interests is conflict theory’s picture of law.",
        },
        {
          text: "Control theory",
          why: "Control theory would ask how to deter park sleeping, not why the law was written or for whom.",
        },
        {
          text: "Interactionist theory (micro)",
          why: "No one is being socialized into crime by a subculture.",
        },
      ],
    },
    {
      id: "u8-q38",
      skill: "application",
      format: "tf",
      tier: 2,
      conceptIds: ["u8-malleable-boundary"],
      stem:
        "True/False: A city that stops ticketing sidewalk food vendors and starts issuing them permits illustrates the interactionist claim that the boundary between acceptable and criminal can change over time.",
      options: [
        {
          text: "True",
          correct: true,
          why: "Right — what was criminal is now acceptable. The line is a malleable social construction.",
        },
        {
          text: "False",
          why: "This is a clean case of the macro interactionist claim: the definition of criminal moved.",
        },
      ],
    },
    {
      id: "u8-q39",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u8-socialized-into-crime", "u8-malleable-boundary", "u2-micro", "u2-macro"],
      stem:
        "Two interactionist projects: (1) interviews about how a teen came to see joyriding as normal among her friends; (2) a history of how a state’s definition of illegal gambling changed over a century. Which is which?",
      options: [
        {
          text: "(1) macro claim; (2) micro claim",
          why: "Reversed — one person’s socialization in a friend group is micro; a society’s changing definition is macro.",
        },
        {
          text: "Both are micro claims, since both involve individuals",
          why: "Project 2 is about a whole society’s legal boundary over a century — macro.",
        },
        {
          text: "(1) micro claim: socialization into crime; (2) macro claim: the malleable boundary of crime",
          correct: true,
          why: "Learning crime in a group is the micro claim; the shifting definition of what’s criminal is the macro claim.",
        },
        {
          text: "(1) is control theory; (2) is conflict theory",
          why: "Neither project is about cost–benefit or elite authorship; both are classic interactionist questions.",
        },
      ],
    },
    {
      id: "u8-q40",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u8-anomie", "u8-punishment-ritual", "u8-functionalist-theory"],
      stem:
        "A sociologist studies the town meeting, sentencing hearing, and memorial walk that followed a shocking arson at a school. Which half of functionalist theory is she studying?",
      options: [
        {
          text: "The source of crime: anomie",
          why: "Anomie explains why crime happens (weakening institutions); she is studying what came after.",
        },
        {
          text: "The social response: rituals of punishment and collective renewal",
          correct: true,
          why: "Gatherings after an extraordinary crime that reinforce norms are the response half of Durkheim’s theory.",
        },
        {
          text: "The cost–benefit calculation of potential arsonists",
          why: "That’s control theory, not either half of functionalism.",
        },
        {
          text: "The elite authorship of arson laws",
          why: "That’s conflict theory’s question.",
        },
      ],
    },
    {
      id: "u8-q41",
      skill: "application",
      format: "tf",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u8-conflict-theory", "u8-control-theory"],
      stem:
        "True/False: A store owner who expects that doubling shoplifting penalties will reduce shoplifting is reasoning from conflict theory.",
      options: [
        {
          text: "True",
          why: "Raising costs to deter crime is control theory. Conflict theory would ask whose interests shoplifting law protects.",
        },
        {
          text: "False",
          correct: true,
          why: "Right — this is control theory’s cost–benefit logic, not conflict theory.",
        },
      ],
    },

    // ───────────── Big empirical ─────────────
    {
      id: "u8-q42",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 3,
      conceptIds: ["u8-crime-decline"],
      stem: "Measured by violent and property crime, how safe is life in the U.S. today compared with the past?",
      fixedOrder: true,
      options: [
        {
          text: "More dangerous than at any time in recorded history",
          why: "The opposite of the notes’ point: crime has been falling for a long time.",
        },
        {
          text: "Somewhat more dangerous than a generation ago",
          why: "Wrong direction — crime has been falling, apart from a brief COVID-era increase.",
        },
        {
          text: "About as dangerous as it has always been",
          why: "The notes describe a real decline, not a flat line.",
        },
        {
          text: "Safer than at any time in recorded history",
          correct: true,
          why: "Violent and property crime have fallen so far that life today is safer than in recorded history, in urban and non-urban areas.",
        },
      ],
    },
    {
      id: "u8-q43",
      skill: "empirical",
      format: "mc",
      tier: 3,
      conceptIds: ["u8-crime-decline"],
      stem: "Which best describes the recent direction of violent and property crime in the U.S.?",
      options: [
        {
          text: "Rising steadily for decades, especially outside cities",
          why: "Wrong direction; the notes say crime is falling in urban and non-urban areas alike.",
        },
        {
          text: "Falling, with the exception of a brief increase during COVID",
          correct: true,
          why: "That’s the notes’ big picture: a long decline interrupted only by a short COVID-era bump.",
        },
        {
          text: "Falling in big cities but rising in non-urban areas",
          why: "The notes say life is safer in both urban and non-urban areas.",
        },
        {
          text: "Rising sharply since COVID and still climbing",
          why: "The COVID increase was brief; the overall trend is down.",
        },
      ],
    },
    {
      id: "u8-q44",
      skill: "empirical",
      format: "tf",
      trap: "reversal",
      tier: 3,
      conceptIds: ["u8-immigrant-crime"],
      stem: "True/False: The evidence shows that immigrants in the United States commit crimes more than native-born people.",
      options: [
        {
          text: "True",
          why: "The notes call this politically popular claim demonstrably false, both historically and in the present.",
        },
        {
          text: "False",
          correct: true,
          why: "Right — given all the evidence we have, the claim is demonstrably false, then and now.",
        },
      ],
    },
    {
      id: "u8-q45",
      skill: "empirical",
      format: "mc",
      tier: 3,
      conceptIds: ["u8-immigrant-crime", "u8-conflict-theory", "u8-malleable-boundary"],
      stem:
        "The claim that immigrants commit more crime is used to justify strident immigration enforcement, yet the evidence shows it’s false. Why is this significant for the theories in this unit?",
      options: [
        {
          text: "It shows how the label “criminal” can be attached to a group through political claims rather than evidence — the kind of process conflict and interactionist theories highlight",
          correct: true,
          why: "When a group is cast as criminal against the evidence, it suggests law and its enforcement reflect power and social definitions, not just who actually offends.",
        },
        {
          text: "It proves control theory is correct, because immigrants face higher costs for crime",
          why: "The notes make no such claim; the point is that the premise about immigrant crime is false.",
        },
        {
          text: "It shows anomie is highest among immigrants",
          why: "The notes say nothing of the kind; anomie is about institutions weakening society-wide.",
        },
        {
          text: "It shows the evidence on immigration and crime is too mixed to draw conclusions",
          why: "The notes say the claim is demonstrably false given all the evidence — not mixed.",
        },
      ],
    },
    {
      id: "u8-q46",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 3,
      conceptIds: ["u8-consensus-problem"],
      stem: "How much agreement is there on how widely shared a norm must be for breaking it to count as deviance or crime?",
      fixedOrder: true,
      options: [
        {
          text: "Near-total agreement on a precise threshold",
          why: "The opposite — that’s why the notes put “most members of society” in quotation marks.",
        },
        {
          text: "Broad agreement that about half the population is enough",
          why: "The notes give no such threshold; they stress the lack of agreement.",
        },
        {
          text: "Little consensus",
          correct: true,
          why: "There is little consensus on how extensive agreement must be — which also makes room for the interactionist point that the boundary is malleable.",
        },
      ],
    },
    {
      id: "u8-q47",
      skill: "empirical",
      format: "mc",
      tier: 3,
      conceptIds: ["u8-crime-decline", "u8-control-theory"],
      stem:
        "A neighbor insists that crime is worse than ever and that the only answer is harsher penalties. Given the notes’ big empirical fact about crime, what’s wrong with the first half of that claim?",
      options: [
        {
          text: "It runs against the evidence: violent and property crime have been falling, and life is safer than in recorded history",
          correct: true,
          why: "The notes’ big fact: apart from a brief COVID increase, crime has been falling across urban and non-urban areas. A cost–benefit (control theory) policy argument should start from the real trend.",
        },
        {
          text: "Nothing — crime is rising, so the claim is accurate",
          why: "Wrong direction — crime has been falling, except for a brief COVID-era increase.",
        },
        {
          text: "It’s only wrong for big cities; elsewhere crime is rising",
          why: "The notes say life is safer in both urban and non-urban areas.",
        },
        {
          text: "Nothing can be said either way, because there is no reliable evidence on crime trends",
          why: "The notes state the trend clearly: violent and property crime are falling.",
        },
      ],
    },
  ],
};
