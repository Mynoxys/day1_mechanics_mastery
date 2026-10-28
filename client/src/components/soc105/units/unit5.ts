import type { Unit } from "../types";

export const unit5: Unit = {
  id: "u5",
  number: 5,
  title: "Socialization and Interaction",
  subtitle: "How people come to know norms and values, form a sense of self, and exchange meaning face to face (and through media)",
  sourceUrl: "https://nhwilson.github.io/chapters/Ch_5_Interaction.html",
  bigPoints: [
    {
      point: "Socialization is how people come to know the culture from Unit 4 — and it never really stops.",
      detail:
        "Socialization is the ongoing process, beginning at birth, through which people learn norms and values and achieve a distinct sense of self. Primary socialization (family and caregivers, early childhood to adolescence) teaches the basics; secondary socialization (media, work, peers, family) runs alongside it and continues across the life course, including socialization you seek out yourself. It is necessary because no one is born with the cultural information social life requires.",
    },
    {
      point: "Its outputs are identities and roles: who others say you are, who you take yourself to be, and what each setting expects of you.",
      detail:
        "Identity is the dynamic between social identities (categories others attribute to you) and self-identity (how those categories affect your own understanding of yourself). Social roles are expectations for behavior given your position and the social setting (the time, place, and role expectations of an interaction). The life course groups settings, roles, and identities into stages — and those stages are themselves social constructions.",
    },
    {
      point: "Theories of socialization: Mead (through others) vs. Piaget (through the world), combined in Becker.",
      detail:
        "Mead: socialization is the progressive incorporation of the “me” (the self seen through others’ attributions and reactions) against the “I” (raw impulse); the others become more abstract over time, ending in the “generalized other.” Piaget: increasingly abstract reasoning through direct interaction with the world, in four phases (sensorimotor, preoperational, concrete operational, formal operational). Becker: even “being high” must be learned — a social category, not a purely biological one.",
    },
    {
      point: "Interaction — exchanging symbols and meaning in a setting — is the vehicle of socialization, and it can be normal, erupted, unequal, or mediated.",
      detail:
        "Most interaction is “normal”: background, taken for granted, full of cues like civil inattention and personal space. Goffman’s dramaturgy splits it into front stage (performance) and back stage (preparation), with audiences kept apart. Order sometimes “erupts” — by accident (repaired with apology or humor), on purpose for research (breaching experiments), or strategically (interactional vandalism). Settings can make interactions unequal, and mediation by technology collapses time and space — usable strategically when you control the medium, harmful when you don’t.",
    },
  ],
  connections: [
    "Unit 5 answers the question Unit 4 left open: if culture is a system of values, norms, and material culture, how does anyone come to know it? Socialization is the process; interaction is the vehicle.",
    "It reuses Unit 3’s symbolic interactionism (Mead taught Blumer) and its definition of interaction as an exchange of shared meanings, Unit 4’s signifier/signified (because the link is ambiguous or arbitrary, you can only learn meanings by interacting), and Unit 2’s social construction (life-course stages are constructed).",
    "It sets up what follows: social structures and groups (Unit 6), identity (Unit 7), deviance as socialization into norms that diverge from the mainstream (Unit 8), and unequal interactions stratified by class, race, and gender (Unit 9).",
  ],
  concepts: [
    {
      id: "u5-socialization",
      term: "Socialization",
      tier: 1,
      plainIdea:
        "Nobody is born knowing when to say “excuse me” or what counts as rude. Socialization is the lifelong process of picking all of that up — and, along the way, becoming a particular someone.",
      courseDefinition:
        "The ongoing process, beginning at birth, through which people develop an awareness of social norms and values and achieve a distinct sense of self.",
      freshExample:
        "A toddler learning to wait in line for the slide, a teenager learning group-chat etiquette, and a 50-year-old learning the unwritten rules of a new volunteer job are all being socialized.",
      notToConfuse:
        "Not “being social” or going out. And not culture itself: culture (Unit 4) is the content — values, norms, material culture; socialization is the process of coming to know it.",
    },
    {
      id: "u5-identity",
      term: "Identity",
      tier: 1,
      plainIdea:
        "Your answer to “what makes you you?” — but it’s never just up to you. It’s a tug between the labels other people put on you and how you take those labels into your own sense of who you are.",
      courseDefinition:
        "The distinctive intersection for a person or group of who they are and what is meaningful to them. It is composed of the dynamic between social identities (categories attributed by others) and self-identity (how those categories affect one’s understanding of oneself).",
      freshExample:
        "A first-generation college student who is seen by others as “the scholarship kid” but thinks of herself mainly as an artist is living the dynamic that makes up identity.",
      notToConfuse:
        "Not an ID card or a fixed inner essence. Identity is the dynamic between two parts — social identity and self-identity.",
    },
    {
      id: "u5-social-identity",
      term: "Social identity",
      tier: 1,
      plainIdea:
        "The boxes other people sort you into — the categories they see when they look at you, whether or not you agree.",
      courseDefinition: "The significant categories attributed to people and groups by others (ascribed to us).",
      freshExample:
        "A customs officer reads your passport and immediately treats you as “a foreign student.” That category, applied from outside, is a social identity.",
      notToConfuse:
        "Self-identity is how those categories land inside — how they shape your own understanding of yourself. Tell: who is doing the categorizing, others or you?",
    },
    {
      id: "u5-self-identity",
      term: "Self-identity",
      tier: 1,
      plainIdea:
        "Your own sense of “who I really am” — built partly from, and sometimes in tension with, the categories others put on you.",
      courseDefinition:
        "How the categories attributed by others (social identities) affect a person or group’s understanding of themselves — how those categories intersect, or stand in tension with, our sense of “who we really are.”",
      freshExample:
        "Everyone at work sees you as “the young intern,” but you privately think of yourself as the most experienced coder on the team — that inner take is your self-identity.",
      notToConfuse:
        "Social identity is the category others attribute. Self-identity is not independent of it — it’s how those attributed categories affect your self-understanding.",
    },
    {
      id: "u5-social-roles",
      term: "Social roles",
      tier: 1,
      thinker: "Erving Goffman (theatrical analogy)",
      plainIdea:
        "A role is a script of expectations attached to a position in a setting — like a part in a play. Play it well and people find you convincing; break it and they notice.",
      courseDefinition:
        "Defined expectations for behavior and social identity for a person given by a person’s social position and the social setting for an interaction. As Goffman noted, a role is like a theatrical role: there are expectations for how you should act and react to persuasively “give off” the markers of a good performance.",
      freshExample:
        "A lifeguard at a public pool is expected to scan the water, blow the whistle at running kids, and not scroll on their phone. Swimmers expect it of them because of their position at the pool.",
      notToConfuse:
        "Not a job title or a fake act. A social setting is the time/place/expectations of the whole interaction; a role is the set of expectations for one position within it.",
    },
    {
      id: "u5-social-setting",
      term: "Social setting",
      tier: 1,
      plainIdea:
        "The “where, when, and what’s expected here” of an interaction. The same words can be fine at a party and awful at a funeral because the setting changed.",
      courseDefinition:
        "The time, place, and role expectations for people within an interaction. The setting carries assumptions about what norms apply and what roles people can be expected to play.",
      freshExample:
        "A courtroom at 9 a.m.: everyone knows who sits where, who may speak when, and that joking is out of place — before anyone says a word.",
      notToConfuse:
        "A social role is one position’s expectations; the setting is the whole frame (time, place, role expectations) within which roles are played.",
    },
    {
      id: "u5-primary-socialization",
      term: "Primary socialization",
      tier: 1,
      plainIdea:
        "The first, foundational round of learning how to “be” in the world, usually from the people who raise you: talking, basic self-care, and holding back urges because the rules say so.",
      courseDefinition:
        "Socialization in early childhood until adolescence, usually by family and primary caregivers (biological parents or otherwise), who teach the initial stages of how to “be” in the world — including talking, caring for yourself in a basic way, and restraining basic urges in the name of social norms.",
      freshExample:
        "A grandfather gently stops a three-year-old from grabbing a toy out of another kid’s hands: “We ask first, and we say please.”",
      notToConfuse:
        "Secondary socialization runs alongside it and continues for life, through a much wider set of influences — including ones you seek out yourself. Tell: young child + caregiver + basics = primary.",
    },
    {
      id: "u5-secondary-socialization",
      term: "Secondary socialization",
      tier: 1,
      plainIdea:
        "All the learning that keeps coming after (and alongside) the basics — from media, work, friends, and family — for the rest of your life, including things you go looking for yourself.",
      courseDefinition:
        "Socialization running congruently with primary socialization as children grow into adulthood, undertaken by media, family, work, and peer groups. It augments primary socialization, reaches far beyond a person’s direct sphere of ordinary interaction, continues throughout the life course, and includes forms of socialization people seek out for themselves.",
      freshExample:
        "Before starting a new barista job, you watch videos on latte art and read a forum thread on how regulars like to be greeted.",
      notToConfuse:
        "Not “socialization that starts only after childhood ends” — it runs congruently with primary socialization. And it’s not limited to school: media and work count.",
    },
    {
      id: "u5-life-course",
      term: "Life course (and life-course transitions)",
      tier: 2,
      plainIdea:
        "Life comes in socially recognized chapters — childhood, adulthood, retirement — each bundling its own settings, roles, and identities. Moving between chapters means a burst of new socialization. And the chapters themselves are made by society, not by biology.",
      courseDefinition:
        "The socially-meaningful stages of our lives, which tend to correlate with typical interlaced social settings, role expectations, and identities. A life-course transition is the connection among the various new social settings, and the socialization that goes with them, as you move between stages; transitions extend throughout life. The stages themselves are social constructions, not natural or biologically fore-ordained.",
      freshExample:
        "Becoming a first-time parent: new skills (diapers, car seats), new routines, new relationships with your own parents, and a new identity, all at once.",
      notToConfuse:
        "Not just biological aging. The notes stress that stages like “retirement” are social constructions whose structure has changed a lot over time.",
    },
    {
      id: "u5-mead-i",
      term: "The “I” (Mead)",
      tier: 2,
      thinker: "George Herbert Mead",
      plainIdea:
        "The raw, impulsive part of you that wants what it wants, right now, regardless of who’s watching.",
      courseDefinition:
        "People’s individual impulses, regardless of social context. For Mead, socialization is a matter of the tension between the “I” and the “me.”",
      freshExample:
        "In a meeting you suddenly want to yawn loudly and stretch both arms over your head — that urge is the “I.”",
      notToConfuse:
        "The “me” is the self as seen through others’ attributions and reactions. Tell: impulse that ignores the audience = “I”; self-check that imagines the audience = “me.”",
    },
    {
      id: "u5-mead-me",
      term: "The “me” (Mead)",
      tier: 2,
      thinker: "George Herbert Mead",
      plainIdea:
        "The part of you that sees yourself through other people’s eyes — “what will they think of me if I do this?” Growing up, for Mead, means this part grows.",
      courseDefinition:
        "People’s sense of themselves given the social identities attributed to them by others and others’ reactions to one’s own behavior. For Mead, socialization is the progressive incorporation of the “me” into people’s identities — incorporating the view of others into the view of themselves.",
      freshExample:
        "You’re about to send a sarcastic reply-all, then picture your manager reading it and delete it. That self-check is the “me” at work.",
      notToConfuse:
        "The “I” is impulse regardless of context. The generalized other is what the others in the “me” become as they grow more abstract.",
    },
    {
      id: "u5-generalized-other",
      term: "Generalized other (Mead)",
      tier: 2,
      thinker: "George Herbert Mead",
      plainIdea:
        "At first the audience in your head is specific people (“what would Mom think?”). Later it becomes a general “people” — society’s view in the abstract.",
      courseDefinition:
        "Over the course of socialization, the concrete “others” referenced in building the “me” become increasingly abstract. In primary socialization they are usually concrete people; in secondary socialization they become a general picture of what “people” would think of our behavior — the generalized other.",
      freshExample:
        "Deciding not to wear pajama pants to a job fair, not because of any one person, but because “people would think I’m not serious.”",
      notToConfuse:
        "A concrete other is a specific person (your coach, your aunt). Tell: if you can name who is judging, it isn’t the generalized other yet.",
    },
    {
      id: "u5-piaget",
      term: "Piaget’s phases of development",
      tier: 2,
      thinker: "Jean Piaget",
      plainIdea:
        "Like Mead, Piaget saw growing up as getting better at abstract thinking — but he focused on a child working things out by handling the world directly, step by step through four phases, with other people only in the background.",
      courseDefinition:
        "Socialization as a process of increasingly abstract reasoning that stresses direct interaction with the world, only indirectly gesturing to socialization by other people. Phases: sensorimotor (learning the boundaries between self and world, mainly by touching); preoperational (disordered symbolic representation and egocentric speech, e.g. confusing “I” and “you”); concrete operational (basic symbolic interaction and initial abstraction, e.g. manipulating numbers without concrete representations); formal operational (highly abstract reasoning about problems that cannot be materially represented).",
      freshExample:
        "A baby bangs a spoon on the table, then on her own foot, and discovers which one hurts — sensorimotor. Years later, the same person debates whether a rule is fair “in principle” — formal operational.",
      notToConfuse:
        "Mead also stresses increasing abstraction, but through others (the “me,” the generalized other). Tell: is the learning driven by other people’s views (Mead) or by handling the world directly (Piaget)?",
    },
    {
      id: "u5-becker",
      term: "Becker: “Becoming a Marihuana User”",
      tier: 2,
      thinker: "Howard Becker",
      plainIdea:
        "Even something that feels purely chemical — getting high — turns out to be learned. You have to be taught how to do it, what to notice, and that what you notice is enjoyable.",
      courseDefinition:
        "Becker pushes back against the idea that marijuana is inherently addictive and argues that “getting high” is the outcome of socialization. People must learn (1) how to smoke the drug in a way that will produce real effects, (2) how to recognize the effects and connect them with drug use, and (3) how to enjoy the sensations they perceive. “Being high” is thus a social category that requires socialization, not an inherent biological category. The essay synthesizes Mead and Piaget.",
      freshExample:
        "A new member of a wine-tasting club learns how to sip and swirl, learns to notice the “oaky” taste and connect it to the barrel, and finally learns to enjoy it — the same three-step logic applied to a different sensation.",
      notToConfuse:
        "Not a biological or addiction explanation — that’s the view Becker argues against. Not Piaget alone (direct experience) or Mead alone (others’ views): Becker combines both.",
    },
    {
      id: "u5-interaction",
      term: "Interaction",
      tier: 1,
      plainIdea:
        "Any trading of signals and meanings — words, glances, gestures — with other people (or the world) in some setting. Because symbols don’t explain themselves, this back-and-forth is how you learn what they mean.",
      courseDefinition:
        "The process through which people exchange symbols and meaning with one another and the world in given social settings. People are socialized fundamentally through interaction. Every interaction is composed of a social setting plus social and self-identities giving off cues to one another.",
      freshExample:
        "Two drivers at a four-way stop: one lifts a hand off the wheel, the other nods and goes first. No words — still an interaction.",
      notToConfuse:
        "Not just conversation or hanging out. Unit 3 defined interactions as exchanges of shared meanings; Unit 5 adds the setting and identities, and makes interaction the vehicle of socialization.",
    },
    {
      id: "u5-normal-interaction",
      term: "“Normal” interaction",
      tier: 3,
      plainIdea:
        "Most of the time, interaction runs on autopilot — once you’re socialized, reading faces, keeping the right distance, and timing your moves just happen in the background.",
      courseDefinition:
        "The vast majority of interactions are “normal”: once adequately socialized, they become background aspects of social life. We attend to facial expressions, gestures, and eye contact; monitor personal space (closer usually means more intimate); and coordinate the timing of performances, often with precise technological means.",
      freshExample:
        "Passing someone in a narrow hallway: you both glance, shift right, half-smile, and keep walking without a thought.",
      notToConfuse:
        "Not “normal” in the sense of average or morally good — it means taken for granted. Contrast with eruptions, where that background order breaks down.",
    },
    {
      id: "u5-civil-inattention",
      term: "Civil inattention",
      tier: 2,
      plainIdea:
        "Politely ignoring strangers: you know they’re right there, and you show you know it, but you carefully don’t engage.",
      courseDefinition:
        "Being aware of the presence of others but studiously avoiding a direct, attentive interaction with them.",
      freshExample:
        "Sharing a long library table with a stranger: you nod when they sit down, then keep your eyes on your own laptop for two hours.",
      notToConfuse:
        "Not rudeness or a snub. It’s a skilled, polite form of normal interaction — and it is still interaction.",
    },
    {
      id: "u5-dramaturgy",
      term: "Dramaturgical analysis",
      tier: 1,
      thinker: "Erving Goffman",
      plainIdea:
        "Treat social life like theater: people perform roles for audiences and try to make the performance convincing.",
      courseDefinition:
        "Goffman’s analogy of interactions as dramaturgical — role performances are like a role in a play or film. To give a “good” (persuasive) performance in a role, we try to keep a distinction between the front stage and the back stage, and often try to segregate audiences.",
      freshExample:
        "A tour guide who tells the same “spontaneous” joke at the same spot on every tour is giving a polished performance of a role.",
      notToConfuse:
        "Not a claim that people are fake or lying. The point is that roles come with expectations, and performances aim to be persuasive.",
    },
    {
      id: "u5-front-stage",
      term: "Front stage",
      tier: 1,
      thinker: "Erving Goffman",
      plainIdea: "Where you’re “on” — in front of the audience, giving the performance your role calls for.",
      courseDefinition: "In Goffman’s dramaturgical analysis, the region where we give the performance.",
      freshExample:
        "A real-estate agent at an open house: crisp outfit, warm voice, every room described as “full of light.”",
      notToConfuse:
        "Back stage is where you prepare for the performance. Tell: is the audience watching right now?",
    },
    {
      id: "u5-back-stage",
      term: "Back stage",
      tier: 1,
      thinker: "Erving Goffman",
      plainIdea: "The place out of the audience’s view where you get ready, drop the act a bit, and prepare for the next performance.",
      courseDefinition: "In Goffman’s dramaturgical analysis, the region where we prepare for the performance.",
      freshExample:
        "Nurses in a staff break room, rehearsing how to break bad news to a family before walking back onto the ward.",
      notToConfuse:
        "Front stage is where the performance is given. The back stage isn’t “the real you” — it’s preparation, often for the same role.",
    },
    {
      id: "u5-audience-segregation",
      term: "Audience segregation",
      tier: 3,
      thinker: "Erving Goffman",
      plainIdea:
        "Keeping your audiences apart so that people who know a different version of you can’t undercut the performance you’re giving to someone else.",
      courseDefinition:
        "Attempting to keep people who have knowledge that might contradict us out of the same audience as those we are trying to persuade.",
      freshExample:
        "A student who never invites party friends and church friends to the same birthday dinner because each group knows a different version of them.",
      notToConfuse:
        "Back stage is about a place to prepare; audience segregation is about which audiences are allowed to see which performance.",
    },
    {
      id: "u5-eruptions",
      term: "Eruptions of interaction (and repair)",
      tier: 3,
      plainIdea:
        "Sometimes the smooth background order breaks — someone misreads a cue and things get awkward. Usually we patch it up with an apology, a joke, or by reframing what we meant.",
      courseDefinition:
        "Instances where the normal interaction order “erupts.” Many, such as simple misunderstandings, are recovered by apology, humor, or simply re-framing one’s intent. Others are intentional (breaching experiments, interactional vandalism).",
      freshExample:
        "You wave back enthusiastically at someone who was actually waving at the person behind you — then laugh and pretend you were fixing your hair.",
      notToConfuse:
        "An accidental eruption isn’t interactional vandalism, which is intentional and strategic.",
    },
    {
      id: "u5-breaching-experiment",
      term: "Breaching experiment",
      tier: 3,
      plainIdea:
        "Breaking an unwritten interaction rule on purpose, for research, to reveal the rule by watching people react.",
      courseDefinition: "An intentional eruption of the interaction order done for research.",
      freshExample:
        "For a class project, a student answers every “how are you?” with a detailed ten-minute medical report and records how people respond.",
      notToConfuse:
        "Interactional vandalism is also intentional, but for strategic gain, not research. Tell: why is the rule being broken?",
    },
    {
      id: "u5-interactional-vandalism",
      term: "Interactional vandalism",
      tier: 2,
      plainIdea:
        "Deliberately wrecking the normal flow of an interaction to get something — pressure, compliance, advantage.",
      courseDefinition:
        "When an interaction is intentionally “vandalized” for strategic reasons (e.g. panhandling, harassment, organizational interrogations). It can be recovered by ending the interaction (walking away), by submitting to what is being asked, or — in modern societies — by appealing to explicit organizational routines built in for support.",
      freshExample:
        "A pushy salesperson plants themselves in your path in a store and keeps talking over your “no thanks” until you take the sample — and you end it by asking for the manager.",
      notToConfuse:
        "Breaching experiments break rules for research; accidental eruptions aren’t intentional at all. Civil inattention is the polite opposite.",
    },
    {
      id: "u5-unequal-interaction",
      term: "Unequal interaction",
      tier: 3,
      plainIdea:
        "Many interactions have a built-in tilt: the setting gives one side much more room to act than the other.",
      courseDefinition:
        "Interactions where the social setting prescribes some social roles as superior and others as inferior, so one party is highly circumscribed in what they can say or do while others have a much wider range of behaviors congruent with their roles. Interactions are often stratified by race, class, gender, and national origin.",
      freshExample:
        "A hotel front-desk clerk must stay cheerful and apologetic while a guest can complain loudly, demand upgrades, and walk away mid-sentence.",
      notToConfuse:
        "Not every awkward interaction is unequal — the key is that the setting prescribes superior and inferior roles.",
    },
    {
      id: "u5-mediation",
      term: "Mediation (mediated interaction)",
      tier: 2,
      plainIdea:
        "When a technology sits between people — writing, a screen, an app — it can stretch one interaction across time and space. Who controls that medium matters.",
      courseDefinition:
        "A technological apparatus sitting between the direct, face-to-face cues of an interaction, letting a social moment happen across time and space. Two entailments: when the medium is under our control we typically use it strategically (e.g. choosing writing, which exerts less pressure, when we feel disadvantaged); when it is not under our control we may suffer its effects (e.g. evidence that social media consumption has quite negative effects on depression and anxiety).",
      freshExample:
        "Asking your boss for a raise by email rather than in person because you know you freeze up face to face.",
      notToConfuse:
        "Not “mediation” as in a neutral third party settling a dispute. In the course, the go-between is a technology, not a person.",
    },
  ],
  contrastSets: [
    {
      id: "u5-cs-primary-secondary",
      title: "Primary vs. secondary socialization",
      conceptIds: ["u5-primary-socialization", "u5-secondary-socialization", "u5-socialization"],
      axis:
        "Primary: early childhood to adolescence, by family and caregivers, teaching the basics of how to “be.” Secondary: runs alongside primary and continues for life, through a much wider set of influences (media, work, peers, family), including socialization people seek out themselves.",
      test: "Is a caregiver teaching a young child the basics (primary), or is it a wider or self-sought influence that keeps going across the life course (secondary)?",
    },
    {
      id: "u5-cs-social-self-identity",
      title: "Social identity vs. self-identity (the two halves of identity)",
      conceptIds: ["u5-social-identity", "u5-self-identity", "u5-identity"],
      axis: "Who does the categorizing: categories attributed by others (social identity) vs. how those categories affect your own understanding of yourself (self-identity).",
      test: "Is this a label others put on you, or how you take (or resist) that label in your own sense of who you are?",
    },
    {
      id: "u5-cs-role-setting",
      title: "Social role vs. social setting vs. social identity",
      conceptIds: ["u5-social-roles", "u5-social-setting", "u5-social-identity"],
      axis:
        "Setting = the time, place, and role expectations of the whole interaction. Role = the expectations for one position within it. Social identity = the categories others attribute to you.",
      test: "Are you describing the whole scene (setting), what one position is expected to do there (role), or a category someone is placed in (social identity)?",
    },
    {
      id: "u5-cs-i-me",
      title: "Mead’s “I” vs. “me” (and the generalized other)",
      conceptIds: ["u5-mead-i", "u5-mead-me", "u5-generalized-other"],
      axis:
        "“I” = raw impulse regardless of social context. “Me” = the self seen through others’ attributions and reactions. Generalized other = what those others become as they grow abstract (“what would people think?”).",
      test: "Is it an impulse that ignores the audience (“I”), a self-check against what others will think (“me”), and is that audience a specific person or “people” in general (generalized other)?",
    },
    {
      id: "u5-cs-mead-piaget",
      title: "Mead vs. Piaget (vs. Becker)",
      conceptIds: ["u5-mead-me", "u5-piaget", "u5-becker"],
      axis:
        "Both Mead and Piaget see socialization as increasingly abstract reasoning. Mead: through others (the “me,” the generalized other). Piaget: through direct interaction with the world, in four phases, with others only indirectly. Becker synthesizes both.",
      test: "Does the learning come from taking other people’s views into yourself (Mead) or from handling the world directly in stages (Piaget)?",
    },
    {
      id: "u5-cs-front-back",
      title: "Front stage vs. back stage (and audience segregation)",
      conceptIds: ["u5-front-stage", "u5-back-stage", "u5-audience-segregation", "u5-dramaturgy"],
      axis: "Front stage is where the performance is given; back stage is where it’s prepared; audience segregation keeps contradicting audiences apart.",
      test: "Is the audience watching (front), is this preparation out of view (back), or is someone keeping two audiences from meeting (segregation)?",
    },
    {
      id: "u5-cs-eruptions",
      title: "Accidental eruption vs. breaching experiment vs. interactional vandalism",
      conceptIds: ["u5-eruptions", "u5-breaching-experiment", "u5-interactional-vandalism"],
      axis: "Intent and purpose: an accident (repaired with apology, humor, reframing), on purpose for research, or on purpose for strategic advantage.",
      test: "Did someone break the interaction order by mistake, to study it, or to get something out of it?",
    },
    {
      id: "u5-cs-normal-civil",
      title: "Normal interaction vs. civil inattention vs. unequal interaction",
      conceptIds: ["u5-normal-interaction", "u5-civil-inattention", "u5-unequal-interaction"],
      axis:
        "Normal interaction is the taken-for-granted background order. Civil inattention is one kind of it: aware of others but studiously not engaging. Unequal interaction is when the setting prescribes superior and inferior roles.",
      test: "Is the point that it runs on autopilot (normal), that people politely don’t engage (civil inattention), or that one side’s role is boxed in relative to the other’s (unequal)?",
    },
    {
      id: "u5-cs-mediation",
      title: "Mediated vs. face-to-face interaction (and the two entailments)",
      conceptIds: ["u5-mediation", "u5-interaction"],
      axis:
        "Mediation puts a technology between people, collapsing time and space. If you control the medium you use it strategically; if you don’t, you may suffer its effects.",
      test: "Is there a technological medium between the parties — and who controls it?",
    },
    {
      id: "u5-cs-culture-socialization",
      title: "Culture (U4) vs. socialization (U5)",
      conceptIds: ["u4-culture", "u4-norms", "u4-values", "u5-socialization"],
      axis: "Culture is the content — values, norms, material culture. Socialization is the process by which people come to know that content and form a sense of self.",
      test: "Are you naming what is learned (culture) or the learning itself (socialization)?",
      crossUnit: true,
    },
    {
      id: "u5-cs-interaction-u3",
      title: "Interaction in Unit 3 vs. Unit 5",
      conceptIds: ["u3-interaction", "u3-symbolic-interactionism", "u5-interaction", "u4-signifier", "u4-signified"],
      axis:
        "Unit 3 introduced interaction (exchanges of shared meanings) as the focus of symbolic interactionism, which Blumer built from Mead. Unit 5 spells out its parts (setting + social and self-identities giving off cues) and makes it the vehicle of socialization — because the signifier–signified link (Unit 4) is ambiguous or arbitrary, you can only learn meanings by interacting.",
      test: "Is the question about a theoretical tradition (U3) or about what an interaction is made of and how socialization happens through it (U5)?",
      crossUnit: true,
    },
    {
      id: "u5-cs-socialization-groups",
      title: "Primary/secondary socialization (U5) vs. primary/secondary groups (U6)",
      conceptIds: ["u5-primary-socialization", "u5-secondary-socialization", "u6-primary-group", "u6-secondary-group"],
      axis:
        "Same words, different things. Socialization: primary = early-childhood basics from caregivers; secondary = lifelong, wider influences. Groups: primary = intensive, emotionally laden, face-to-face; secondary = all other groups.",
      test: "Is the question about a learning process across the life course (socialization) or about how intense and face-to-face a group is (groups)?",
      crossUnit: true,
    },
    {
      id: "u5-cs-life-course-construction",
      title: "Life-course stages as social constructions (U2)",
      conceptIds: ["u5-life-course", "u2-social-construction"],
      axis: "Life-course stages feel natural and biological, but the notes treat them as social constructions whose structure has changed over time.",
      test: "Is the stage being explained by biology alone, or by shared social arrangements that could be (and have been) different?",
      crossUnit: true,
    },
  ],
  falseFriends: [
    {
      id: "u5-ff-socialization",
      conceptId: "u5-socialization",
      term: "Socialization",
      everyday: "Going out, partying, being social with friends.",
      course: "The ongoing process, beginning at birth, of developing an awareness of norms and values and a distinct sense of self.",
      trap: "You may pick an answer about how outgoing someone is. A hermit reading etiquette guides is still being socialized.",
    },
    {
      id: "u5-ff-interaction",
      conceptId: "u5-interaction",
      term: "Interaction",
      everyday: "A conversation, or hanging out with someone.",
      course: "Any exchange of symbols and meaning with others and the world in a social setting — including silent cues like a glance, a nod, or civil inattention.",
      trap: "Strangers who never speak can still be interacting; don’t require words.",
    },
    {
      id: "u5-ff-role",
      conceptId: "u5-social-roles",
      term: "Role",
      everyday: "A part an actor plays, or a job title.",
      course: "Defined expectations for behavior and social identity given a person’s social position and the setting of an interaction.",
      trap: "A role is not a pretense and not a title on a business card — it’s the expectations others hold for a position in a setting.",
    },
    {
      id: "u5-ff-mediation",
      conceptId: "u5-mediation",
      term: "Mediation / mediated",
      everyday: "A neutral third person helping two sides settle a dispute.",
      course: "A technological apparatus (writing, screens, social media) sitting between the face-to-face cues of an interaction, stretching it across time and space.",
      trap: "A counselor sitting with two roommates is face-to-face, not mediated in the course sense.",
    },
    {
      id: "u5-ff-identity",
      conceptId: "u5-identity",
      term: "Identity",
      everyday: "Your ID card, or a fixed inner self you discover.",
      course: "The dynamic between social identities (categories others attribute) and self-identity (how those categories affect your self-understanding).",
      trap: "Answers that treat identity as purely private or purely chosen ignore the half that others attribute to you.",
    },
    {
      id: "u5-ff-civil-inattention",
      conceptId: "u5-civil-inattention",
      term: "Civil inattention",
      everyday: "“Inattention” sounds like being rude, distracted, or ignoring someone.",
      course: "Being aware of others while studiously avoiding direct, attentive interaction — a polite, socially skilled form of normal interaction.",
      trap: "It isn’t a snub or a breakdown of interaction; it’s one of the ways normal interaction works.",
    },
    {
      id: "u5-ff-performance",
      conceptId: "u5-dramaturgy",
      term: "Performance / stage",
      everyday: "Acting, faking it, putting on a show to deceive.",
      course: "Goffman’s analogy: role performances are like a role in a play; we aim for a persuasive performance of the role’s expectations.",
      trap: "Dramaturgy doesn’t say people are liars or that the back stage is the “true self.” Front stage = performing; back stage = preparing.",
    },
    {
      id: "u5-ff-normal",
      conceptId: "u5-normal-interaction",
      term: "Normal",
      everyday: "Average, typical, or morally fine.",
      course: "“Normal” interaction = the taken-for-granted background order once people are socialized.",
      trap: "The point isn’t that it’s good or average — it’s that it runs on autopilot until it erupts.",
    },
  ],
  magnitudes: [
    {
      id: "u5-m-1940-retirement",
      prompt: "When the U.S. issued its first monthly old-age pension checks in 1940, how did average life expectancy compare to the retirement age?",
      answer: "Average life expectancy was at or below the retirement age",
      whyItMatters:
        "The life-course stage of “retiree” as we know it — a decade or more of living on savings and pensions — barely existed then. Life-course stages are social constructions, not biological givens.",
    },
    {
      id: "u5-m-retirement-today",
      prompt: "Today, roughly how long do people who reach retirement age go on to live, on average?",
      answer: "Around a decade and a half or more (roughly 15 years for men, 18 for women)",
      whyItMatters:
        "A long retirement is a recent, socially created stage of the life course with its own settings, roles, and identities — and its own life-course transition to be socialized into.",
    },
    {
      id: "u5-m-normal-share",
      prompt: "What share of our interactions are “normal” — taken-for-granted background — rather than eruptions?",
      answer: "The vast majority",
      whyItMatters:
        "Once we’re socialized, interaction mostly runs on autopilot. That’s why eruptions (and breaching experiments) are so revealing: they expose rules we usually never notice.",
    },
    {
      id: "u5-m-birth-info",
      prompt: "How much of the cultural information people need for social life could be stored in their brains at birth?",
      answer: "Far from all of it — it is impossible to be born with it",
      whyItMatters:
        "This is why socialization is necessary at all: given limits on brain size at birth and the sheer complexity of social life, culture has to be learned through interaction.",
    },
    {
      id: "u5-m-social-media",
      prompt: "What does increasing evidence suggest about the effects of social media consumption on depression and anxiety?",
      answer: "Quite negative effects",
      whyItMatters:
        "It illustrates the second entailment of mediation: when we don’t control the medium of interaction, we can suffer its effects.",
    },
  ],
  questions: [
    // ───────────── Conceptual ─────────────
    {
      id: "u5-q1",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-socialization", "u5-interaction", "u5-identity"],
      stem:
        "Which concept do the notes define as “the ongoing process, beginning at birth, through which people develop an awareness of social norms and values and achieve a distinct sense of self”?",
      options: [
        {
          text: "Interaction",
          why: "Interaction is the exchange of symbols and meaning in a setting — the vehicle through which socialization happens, not the process of learning itself.",
        },
        {
          text: "Socialization",
          correct: true,
          why: "Word for word, this is the notes’ definition of socialization: ongoing, starting at birth, producing awareness of norms and values and a sense of self.",
        },
        {
          text: "Identity",
          why: "Identity is one output of socialization (the distinctive sense of self), not the process that produces it.",
        },
        {
          text: "Culture",
          why: "Culture (Unit 4) is the content — values, norms, material culture. Socialization is how people come to know it.",
        },
      ],
    },
    {
      id: "u5-q2",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-identity", "u5-social-identity", "u5-self-identity"],
      stem: "According to the notes, identity is composed of the dynamic between which two elements?",
      options: [
        {
          text: "The “I” and the “me”",
          why: "That’s Mead’s account of socialization (impulse vs. the self seen through others), not the notes’ definition of identity.",
        },
        {
          text: "The front stage and the back stage",
          why: "That’s Goffman’s dramaturgical split of interaction regions.",
        },
        {
          text: "Social identities attributed by others and self-identity",
          correct: true,
          why: "Identity = the dynamic between categories others attribute to us (social identities) and how those categories affect our own self-understanding (self-identity).",
        },
        {
          text: "Primary and secondary socialization",
          why: "Those are two kinds of socialization — the process — not the two parts of identity.",
        },
      ],
    },
    {
      id: "u5-q3",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-social-identity", "u5-self-identity"],
      stem: "“The significant categories attributed to people and groups by others” is the notes’ definition of:",
      options: [
        {
          text: "Self-identity",
          why: "Self-identity is how those attributed categories affect your own understanding of yourself — the inside half.",
        },
        {
          text: "Social identity",
          correct: true,
          why: "Social identities are ascribed from outside: the categories others attribute to you.",
        },
        {
          text: "Social role",
          why: "A role is a set of expectations for behavior tied to a position and setting, not a category others put you in.",
        },
        {
          text: "Generalized other",
          why: "The generalized other is Mead’s abstract “people” whose view you imagine — not the categories themselves.",
        },
      ],
    },
    {
      id: "u5-q4",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-social-roles", "u5-social-setting"],
      stem:
        "Which concept is defined as “defined expectations for behavior and social identity for a person given by a person’s social position and the social setting for an interaction”?",
      options: [
        {
          text: "Social setting",
          why: "The setting is the time, place, and role expectations of the whole interaction — the stage, not one position’s script.",
        },
        {
          text: "Self-identity",
          why: "Self-identity is how attributed categories affect your self-understanding, not a set of expectations from others.",
        },
        {
          text: "Interaction",
          why: "Interaction is the exchange of symbols and meaning; roles are one of the things that shape it.",
        },
        {
          text: "Social roles",
          correct: true,
          why: "That’s the notes’ definition of social roles — expectations attached to a position in a setting, like a part in a play (Goffman).",
        },
      ],
    },
    {
      id: "u5-q5",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-social-setting", "u5-social-roles"],
      stem: "In the notes, what does the “social setting” of an interaction describe?",
      options: [
        {
          text: "The time, place, and role expectations for people within an interaction",
          correct: true,
          why: "That’s the definition. The setting carries assumptions about what norms apply and what roles people will play.",
        },
        {
          text: "The categories others attribute to a person",
          why: "That’s social identity.",
        },
        {
          text: "The technological apparatus between face-to-face cues",
          why: "That’s mediation.",
        },
        {
          text: "The place where people prepare for a performance",
          why: "That’s Goffman’s back stage — one region within a setting, not the setting itself.",
        },
      ],
    },
    {
      id: "u5-q6",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-primary-socialization", "u5-secondary-socialization"],
      stem: "What best distinguishes secondary socialization from primary socialization in the notes?",
      options: [
        {
          text: "Secondary socialization only begins once primary socialization is fully complete",
          why: "The notes say secondary socialization runs congruently with primary socialization as children grow up — it doesn’t wait for it to finish.",
        },
        {
          text: "Secondary socialization is done only by schools",
          why: "The notes list media, family, work, and peer groups — not just schools.",
        },
        {
          text: "Secondary socialization involves a much wider set of influences, continues across the life course, and includes socialization people seek out themselves",
          correct: true,
          why: "That’s exactly how the notes differentiate it from the caregiver-led, early-childhood primary kind.",
        },
        {
          text: "Secondary socialization teaches basic self-care and restraining urges",
          why: "Those basics are the hallmark of primary socialization by family and caregivers.",
        },
      ],
    },
    {
      id: "u5-q7",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 1,
      conceptIds: ["u5-secondary-socialization", "u5-socialization"],
      stem: "Secondary socialization is finished by early adulthood, after which a person’s socialization is complete.",
      options: [
        {
          text: "True",
          why: "This reverses the notes: socialization is “ongoing,” and secondary socialization continues throughout the life course (e.g. through life-course transitions).",
        },
        {
          text: "False",
          correct: true,
          why: "The notes stress ongoing socialization across the whole life course — the examples range from new jobs to etiquette at a house of worship.",
        },
      ],
    },
    {
      id: "u5-q8",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-mead-i", "u5-mead-me"],
      stem: "For George Herbert Mead, what is the “I”?",
      options: [
        {
          text: "A person’s sense of themselves given the identities others attribute and others’ reactions",
          why: "That’s the “me” — the self seen through others.",
        },
        {
          text: "A general picture of what “people” would think of our behavior",
          why: "That’s the generalized other.",
        },
        {
          text: "A person’s individual impulses, regardless of social context",
          correct: true,
          why: "Mead’s “I” is raw impulse that doesn’t take the social context into account; socialization is its tension with the “me.”",
        },
        {
          text: "A person’s self-identity",
          why: "Self-identity is from the notes’ identity discussion (how attributed categories shape self-understanding), not Mead’s term.",
        },
      ],
    },
    {
      id: "u5-q9",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-mead-me", "u5-mead-i", "u5-socialization"],
      stem: "According to the notes, how did Mead describe the process of socialization?",
      options: [
        {
          text: "The progressive incorporation of the “me” — others’ views — into people’s view of themselves",
          correct: true,
          why: "For Mead, socialization is incorporating the “me,” i.e. taking the view of others into the view of oneself.",
        },
        {
          text: "The progressive strengthening of the “I” over the “me”",
          why: "Backwards: as socialization proceeds, the “me” becomes more salient, not the impulsive “I.”",
        },
        {
          text: "Movement through sensorimotor, preoperational, concrete, and formal phases",
          why: "Those are Piaget’s phases.",
        },
        {
          text: "Learning to produce, recognize, and enjoy a sensation",
          why: "That’s Becker’s three-step account of becoming a marihuana user.",
        },
      ],
    },
    {
      id: "u5-q10",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-generalized-other", "u5-mead-me"],
      stem: "In Mead’s account, what happens to the “others” we reference as socialization moves from primary to secondary?",
      options: [
        {
          text: "They disappear, because adults stop caring what others think",
          why: "The others don’t vanish; they become more abstract.",
        },
        {
          text: "They shift from concrete people to an abstract “generalized other”",
          correct: true,
          why: "Early on we ask what a specific person (say, a parent) would think; later the others become a general picture of what “people” would think.",
        },
        {
          text: "They shift from abstract society to specific family members",
          why: "This reverses the direction: concrete first, abstract later.",
        },
        {
          text: "They become our self-identity",
          why: "Self-identity is a different idea in the notes; Mead’s others become the generalized other.",
        },
      ],
    },
    {
      id: "u5-q11",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-piaget", "u5-mead-me"],
      stem: "Mead and Piaget both treat socialization as a process of increasingly abstract reasoning. What sets Piaget apart?",
      options: [
        {
          text: "He stressed direct interaction with the world, only indirectly gesturing to socialization by other people",
          correct: true,
          why: "That’s the notes’ contrast: unlike Mead, Piaget emphasizes the child’s direct interaction with the world.",
        },
        {
          text: "He focused on the tension between the “I” and the “me”",
          why: "That is Mead’s framework.",
        },
        {
          text: "He argued getting high is a learned social category",
          why: "That’s Becker.",
        },
        {
          text: "He saw socialization as ending in a generalized other",
          why: "The generalized other is Mead’s idea.",
        },
      ],
    },
    {
      id: "u5-q12",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-piaget"],
      stem: "In Piaget’s scheme as presented in the notes, which phase features disordered symbolic representation and egocentric speech, like confusing “I” and “you”?",
      options: [
        {
          text: "Sensorimotor",
          why: "Sensorimotor is about learning the boundaries between self and world, mainly by touching.",
        },
        {
          text: "Preoperational",
          correct: true,
          why: "Preoperational is the phase of babbling-before-coherent-speech symbolic representation and egocentric speech.",
        },
        {
          text: "Concrete operational",
          why: "Concrete operational brings basic symbolic interaction and initial abstraction, like manipulating numbers without counting objects.",
        },
        {
          text: "Formal operational",
          why: "Formal operational is highly abstract reasoning about problems that can’t be materially represented.",
        },
      ],
    },
    {
      id: "u5-q13",
      skill: "conceptual",
      format: "mc",
      trap: "misattribution",
      tier: 2,
      conceptIds: ["u5-becker"],
      stem: "Which thinker argued that “being high” is a social category requiring socialization, not an inherent biological category?",
      options: [
        {
          text: "Jean Piaget",
          why: "Piaget gave the four phases of development through direct interaction with the world.",
        },
        {
          text: "Erving Goffman",
          why: "Goffman gave the theatrical analogy for roles and the front stage/back stage distinction.",
        },
        {
          text: "George Herbert Mead",
          why: "Mead gave the “I”/“me” and the generalized other; Becker builds on Mead and Piaget.",
        },
        {
          text: "Howard Becker",
          correct: true,
          why: "In “Becoming a Marihuana User,” Becker argues people must learn to produce, recognize, and enjoy the effects.",
        },
      ],
    },
    {
      id: "u5-q14",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-becker"],
      stem: "According to the notes, which is NOT one of the three things Becker says a person must learn to become a marihuana user?",
      options: [
        {
          text: "How to smoke the drug in a way that produces real effects",
          why: "This is Becker’s first step.",
        },
        {
          text: "How to recognize the effects and connect them with drug use",
          why: "This is Becker’s second step.",
        },
        {
          text: "How to overcome the drug’s inherent addictiveness",
          correct: true,
          why: "Not one of the steps — Becker’s starting point is to push back against the idea that the drug is inherently addictive.",
        },
        {
          text: "How to enjoy the sensations perceived",
          why: "This is Becker’s third step.",
        },
      ],
    },
    {
      id: "u5-q15",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-interaction", "u5-socialization"],
      stem: "The notes define interaction as:",
      options: [
        {
          text: "The process through which people exchange symbols and meaning with one another and the world in given social settings",
          correct: true,
          why: "That’s the definition — and the notes add that people are socialized fundamentally through interaction.",
        },
        {
          text: "Any conversation that uses spoken words",
          why: "Too narrow: glances, gestures, and civil inattention exchange meaning without words.",
        },
        {
          text: "The ongoing process of developing awareness of norms and a sense of self",
          why: "That’s socialization — which happens through interaction.",
        },
        {
          text: "Defined expectations for behavior given one’s position and setting",
          why: "That’s a social role.",
        },
      ],
    },
    {
      id: "u5-q16",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-interaction", "u4-signifier", "u4-signified"],
      stem: "Why, according to the notes, must people learn meanings through repeated interaction?",
      options: [
        {
          text: "Because meanings are fully stored in the brain at birth and only need to be activated",
          why: "The notes say the opposite: it’s impossible to be born with all the cultural information social life needs.",
        },
        {
          text: "Because the link between signifier and signified is ambiguous at best and totally arbitrary at worst",
          correct: true,
          why: "Since symbols don’t explain themselves (Unit 4), the only way to understand them is by repeatedly interacting with others and the world.",
        },
        {
          text: "Because all symbols are iconic and simply resemble what they mean",
          why: "If they all resembled their meanings, you could read them without learning; most modern meaning is context-dependent instead.",
        },
        {
          text: "Because interaction is the only setting where laws are enforced",
          why: "Nothing to do with the notes’ argument, which is about how meaning is learned.",
        },
      ],
    },
    {
      id: "u5-q17",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-civil-inattention", "u5-normal-interaction"],
      stem: "Being aware of the presence of others while studiously avoiding direct, attentive interaction with them is called:",
      options: [
        {
          text: "Interactional vandalism",
          why: "Vandalism deliberately disrupts an interaction for strategic gain — the opposite of polite non-engagement.",
        },
        {
          text: "Audience segregation",
          why: "Audience segregation keeps contradicting audiences apart; it isn’t about how strangers ignore each other.",
        },
        {
          text: "Civil inattention",
          correct: true,
          why: "Civil inattention is studied, polite avoidance of engagement while acknowledging others are there.",
        },
        {
          text: "Back stage",
          why: "The back stage is where performances are prepared.",
        },
      ],
    },
    {
      id: "u5-q18",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-front-stage", "u5-back-stage", "u5-dramaturgy"],
      stem: "In Goffman’s dramaturgical analysis as presented in the notes, what is the difference between the front stage and the back stage?",
      options: [
        {
          text: "Front stage is where we give the performance; back stage is where we prepare for it",
          correct: true,
          why: "That’s the distinction: keeping the two apart helps give a “good” (persuasive) performance.",
        },
        {
          text: "Front stage is the fake self; back stage is the true self",
          why: "The notes say nothing about true or fake selves — the distinction is performing vs. preparing.",
        },
        {
          text: "Front stage is face-to-face; back stage is mediated by technology",
          why: "Mediation is a separate idea; either stage can be face-to-face.",
        },
        {
          text: "Front stage is primary socialization; back stage is secondary socialization",
          why: "Those are kinds of socialization, unrelated to Goffman’s regions.",
        },
      ],
    },
    {
      id: "u5-q19",
      skill: "conceptual",
      format: "mc",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u5-dramaturgy", "u5-social-roles"],
      stem: "The analogy of social roles and interactions as performances in a play (dramaturgy) comes from which thinker in the notes?",
      options: [
        {
          text: "George Herbert Mead",
          why: "Mead gave the “I,” the “me,” and the generalized other.",
        },
        {
          text: "Howard Becker",
          why: "Becker wrote on becoming a marihuana user.",
        },
        {
          text: "Erving Goffman",
          correct: true,
          why: "Goffman connected social roles to theatrical roles and split interaction into front and back stage.",
        },
        {
          text: "Jean Piaget",
          why: "Piaget gave the phases of development.",
        },
      ],
    },
    {
      id: "u5-q20",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-interactional-vandalism", "u5-breaching-experiment", "u5-eruptions"],
      stem: "What separates interactional vandalism from a breaching experiment?",
      options: [
        {
          text: "Vandalism is accidental; breaching is intentional",
          why: "Both are intentional eruptions. Accidental misunderstandings are a third case, usually repaired with apology or humor.",
        },
        {
          text: "Vandalism is done for strategic reasons; breaching is done for research",
          correct: true,
          why: "Both deliberately erupt the interaction order; the difference is the purpose.",
        },
        {
          text: "Vandalism happens only online; breaching happens only face to face",
          why: "The notes’ vandalism examples (panhandling, harassment, interrogations) are face to face.",
        },
        {
          text: "Vandalism follows the normal interaction order; breaching disrupts it",
          why: "Both disrupt the normal order — that’s what makes them eruptions.",
        },
      ],
    },
    {
      id: "u5-q21",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 3,
      conceptIds: ["u5-normal-interaction", "u5-eruptions"],
      stem: "According to the notes, most of our interactions are eruptions that must be actively repaired.",
      options: [
        {
          text: "True",
          why: "Reversed: the notes say the vast majority of interactions are “normal” — taken-for-granted background once we’re socialized.",
        },
        {
          text: "False",
          correct: true,
          why: "Eruptions are the exception. Most interaction runs as background, which is why eruptions stand out.",
        },
      ],
    },
    {
      id: "u5-q22",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-mediation"],
      stem: "According to the notes, what are the two entailments of mediated interaction?",
      options: [
        {
          text: "It always makes interaction more equal, and it always makes people happier",
          why: "Neither claim is in the notes; they warn about harmful effects when we don’t control the medium.",
        },
        {
          text: "It replaces socialization, and it ends civil inattention",
          why: "Neither is claimed; mediation changes how interaction happens across time and space.",
        },
        {
          text: "When we control the medium we use it strategically; when we don’t, we may suffer its effects",
          correct: true,
          why: "Those are the two entailments: strategic use (e.g. writing when disadvantaged) and vulnerability (e.g. social media’s effects on depression and anxiety).",
        },
        {
          text: "It only works for written text, and only between strangers",
          why: "Mediation is any technological apparatus between face-to-face cues, among any people.",
        },
      ],
    },
    {
      id: "u5-q23",
      skill: "conceptual",
      format: "tf",
      tier: 2,
      conceptIds: ["u5-life-course", "u2-social-construction"],
      stem: "The notes treat stages of the life course, such as “childhood” and “retirement,” as social constructions rather than natural or biologically fore-ordained stages.",
      options: [
        {
          text: "True",
          correct: true,
          why: "The notes say so directly, using the changing relationship between life expectancy and retirement age as evidence.",
        },
        {
          text: "False",
          why: "The notes explicitly call life-course stages social constructions that have varied considerably.",
        },
      ],
    },
    {
      id: "u5-q24",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-socialization", "u4-culture", "u4-norms", "u4-values"],
      stem: "How does Unit 5’s socialization relate to Unit 4’s culture (values, norms, material culture)?",
      options: [
        {
          text: "They are two names for the same thing",
          why: "They’re linked but distinct: one is the content, the other the process.",
        },
        {
          text: "Culture is the content; socialization is the process by which people come to know it",
          correct: true,
          why: "The notes open Unit 5 by asking how people come to know values, norms, and material culture — and the answer is socialization.",
        },
        {
          text: "Socialization produces culture from scratch in each generation, so culture has no prior existence",
          why: "Socialization transmits existing norms and values to people; it doesn’t invent culture anew.",
        },
        {
          text: "Culture is micro, socialization is macro",
          why: "The notes don’t sort them this way; socialization has both micro and macro scope.",
        },
      ],
    },
    {
      id: "u5-q25",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 3,
      conceptIds: ["u5-unequal-interaction", "u5-social-setting", "u5-social-roles"],
      stem: "According to the notes, what makes an interaction “unequal”?",
      options: [
        {
          text: "One person talks more than the other",
          why: "Talk time alone isn’t the criterion; the setting’s prescription of roles is.",
        },
        {
          text: "The participants are strangers",
          why: "Strangers can interact on equal terms (e.g. civil inattention).",
        },
        {
          text: "The interaction happens through a technological medium",
          why: "That makes it mediated, not necessarily unequal.",
        },
        {
          text: "The social setting prescribes some roles as superior and others as inferior",
          correct: true,
          why: "One side is boxed in while the other has a wider range of acceptable behavior — and the notes add these are often stratified by race, class, gender, and national origin.",
        },
      ],
    },
    {
      id: "u5-q26",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-primary-socialization", "u5-secondary-socialization", "u6-primary-group", "u6-secondary-group"],
      stem: "Unit 5 has primary/secondary socialization and Unit 6 has primary/secondary groups. What does “primary” mean in primary socialization?",
      options: [
        {
          text: "Intensive, emotionally laden, face-to-face",
          why: "That’s what “primary” means for groups in Unit 6, not for socialization.",
        },
        {
          text: "The earliest socialization, from early childhood to adolescence, usually by family and caregivers",
          correct: true,
          why: "Primary socialization is about timing and source: the initial lessons in how to “be” in the world.",
        },
        {
          text: "The most important socialization, whatever age it happens",
          why: "That’s the everyday meaning of “primary.” In the course, it means the early-childhood stage.",
        },
        {
          text: "Socialization that a person seeks out for themselves",
          why: "Self-sought socialization is a mark of secondary socialization.",
        },
      ],
    },

    // ───────────── False friends ─────────────
    {
      id: "u5-q27",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u5-socialization"],
      stem: "A student says, “I skipped socialization this weekend — I stayed in my room reading.” In the course’s sense of socialization, what’s wrong with this statement?",
      options: [
        {
          text: "Nothing — socialization means going out and spending time with friends",
          why: "That’s the everyday meaning. The course meaning is a lifelong process of learning norms and values and forming a self.",
        },
        {
          text: "Socialization is an ongoing process of learning norms and values and forming a self, which doesn’t pause because you stayed in",
          correct: true,
          why: "Socialization is ongoing; even reading (media) can be a vehicle of secondary socialization.",
        },
        {
          text: "Socialization only happens in early childhood, so it can’t be skipped as an adult",
          why: "Secondary socialization continues across the whole life course.",
        },
        {
          text: "Socialization only happens at school",
          why: "The notes list media, family, work, and peer groups.",
        },
      ],
    },
    {
      id: "u5-q28",
      skill: "application",
      format: "tf",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u5-interaction", "u5-civil-inattention"],
      stem: "Two strangers sitting on the same park bench for twenty minutes without saying a word are not interacting, in the course’s sense.",
      options: [
        {
          text: "True",
          why: "That uses the everyday meaning (talking). The course defines interaction as any exchange of symbols and meaning in a setting.",
        },
        {
          text: "False",
          correct: true,
          why: "They’re exchanging cues — a glance, keeping distance, not staring. That’s civil inattention, a form of normal interaction.",
        },
      ],
    },
    {
      id: "u5-q29",
      skill: "application",
      format: "mc",
      trap: "everyday-meaning",
      tier: 2,
      conceptIds: ["u5-mediation"],
      stem: "A campus counselor sits down in person with two roommates to help them settle a dispute over cleaning. In the course’s sense, is this a mediated interaction?",
      options: [
        {
          text: "Yes — a neutral third party is helping them resolve a conflict",
          why: "That’s the everyday meaning of mediation. In the course, mediation means a technology sits between the face-to-face cues.",
        },
        {
          text: "Yes — any interaction with more than two people is mediated",
          why: "Group size has nothing to do with mediation in the notes.",
        },
        {
          text: "No — it is face-to-face, with no technological apparatus between the participants",
          correct: true,
          why: "Course mediation = a technological apparatus between direct cues, stretching interaction across time and space.",
        },
        {
          text: "No — mediated interactions only happen on social media",
          why: "Writing, letters, email, and texts count too; social media is just one example.",
        },
      ],
    },
    {
      id: "u5-q30",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u5-social-roles"],
      stem: "Which statement best fits the notes’ meaning of a social role?",
      options: [
        {
          text: "A character someone pretends to be in order to deceive others",
          why: "The theatrical analogy is about expectations and persuasive performance, not deception.",
        },
        {
          text: "The official job title printed on someone’s badge",
          why: "A title might signal a position, but the role is the set of expectations attached to that position in a setting.",
        },
        {
          text: "Expectations for behavior and social identity that come with a person’s position in a given setting",
          correct: true,
          why: "Roles are expectations tied to social position and setting (e.g. what students and professors can expect of each other in class).",
        },
        {
          text: "Whatever a person personally feels like doing in a situation",
          why: "That’s closer to Mead’s “I” — impulse regardless of context. Roles are expectations from others.",
        },
      ],
    },
    {
      id: "u5-q31",
      skill: "conceptual",
      format: "tf",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u5-dramaturgy", "u5-front-stage", "u5-back-stage"],
      stem: "Goffman’s dramaturgical analysis claims that front-stage behavior is fake while back-stage behavior reveals a person’s true self.",
      options: [
        {
          text: "True",
          why: "That’s the everyday reading of “performance” as faking. The notes define front stage as where we perform and back stage as where we prepare.",
        },
        {
          text: "False",
          correct: true,
          why: "The analogy is about persuasive role performance and its preparation; the notes make no fake vs. true-self claim.",
        },
      ],
    },
    {
      id: "u5-q32",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u5-identity", "u5-social-identity", "u5-self-identity"],
      stem: "A friend says, “Identity is just who you decide you are — nobody else gets a say.” How does this compare with the notes?",
      options: [
        {
          text: "It matches the notes: identity is purely self-chosen",
          why: "The notes make identity a dynamic that includes categories attributed by others.",
        },
        {
          text: "It misses half of identity: the social identities others attribute, which shape how we understand ourselves",
          correct: true,
          why: "Identity = social identities (from others) in dynamic with self-identity (how those categories affect us).",
        },
        {
          text: "It’s backwards: identity is entirely what others say and self-understanding plays no part",
          why: "Overcorrects — self-identity is the other half of the dynamic.",
        },
        {
          text: "It confuses identity with the generalized other",
          why: "The generalized other is Mead’s abstract audience; the friend’s error is about leaving out social identity.",
        },
      ],
    },

    // ───────────── Application ─────────────
    {
      id: "u5-q33",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-primary-socialization", "u5-secondary-socialization"],
      stem:
        "A grandmother is teaching her two-year-old grandson to say “bye-bye,” to wash his hands before eating, and not to bite when he’s angry. Which concept fits best?",
      options: [
        {
          text: "Secondary socialization",
          why: "Secondary socialization involves wider, often self-sought influences across the life course. This is a caregiver teaching a toddler the basics.",
        },
        {
          text: "Primary socialization",
          correct: true,
          why: "A caregiver teaching a very young child to talk, care for himself, and restrain urges is the textbook case of primary socialization.",
        },
        {
          text: "Life-course transition",
          why: "Nothing here is a move between life stages; it’s basic learning within early childhood.",
        },
        {
          text: "Interactional vandalism",
          why: "Nobody is disrupting interaction for strategic gain.",
        },
      ],
    },
    {
      id: "u5-q34",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u5-secondary-socialization", "u5-primary-socialization"],
      stem:
        "A 45-year-old accountant takes up rock climbing, reads the gym’s posted etiquette rules, and watches regulars to learn when it’s rude to start a route. A classmate calls this “primary socialization.” What’s the better lens?",
      options: [
        {
          text: "Primary socialization is right — any first-time learning is primary",
          why: "“Primary” refers to early childhood basics from caregivers, not to “the first time you learn something.”",
        },
        {
          text: "Secondary socialization — a wider, self-sought influence continuing across the life course",
          correct: true,
          why: "An adult seeking out the norms of a new setting is exactly what the notes mean by ongoing secondary socialization.",
        },
        {
          text: "Civil inattention — he is avoiding the regulars",
          why: "He’s actively watching and learning from them, not studiously avoiding engagement.",
        },
        {
          text: "Becker’s theory — he must learn to enjoy a drug",
          why: "No drug or sensation-learning is involved; the general lesson is socialization into a new setting’s norms.",
        },
      ],
    },
    {
      id: "u5-q35",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-social-identity", "u5-self-identity"],
      stem:
        "At a new school, classmates assume Dani must be great at basketball because Dani is very tall. Dani has never liked sports and thinks of themself as a theater kid. The classmates’ assumption is an example of:",
      options: [
        {
          text: "Self-identity",
          why: "Self-identity is Dani’s own take (“theater kid”); the classmates’ assumption comes from outside.",
        },
        {
          text: "Social identity",
          correct: true,
          why: "A category attributed by others (“tall = basketball player”) is a social identity; the tension with Dani’s self-view is the dynamic called identity.",
        },
        {
          text: "Generalized other",
          why: "The generalized other is an abstract audience Dani might imagine, not specific classmates’ assumptions.",
        },
        {
          text: "Social setting",
          why: "The setting is the school’s time/place/role expectations, not a label on Dani.",
        },
      ],
    },
    {
      id: "u5-q36",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-social-setting", "u5-social-roles"],
      stem:
        "A joke about someone’s weird uncle gets big laughs at a friend’s backyard barbecue, but the same joke draws horrified looks at that uncle’s funeral. Which concept best explains the difference?",
      options: [
        {
          text: "Social setting",
          correct: true,
          why: "Same words, different time, place, and role expectations — the setting determines which norms apply.",
        },
        {
          text: "Self-identity",
          why: "The joke-teller’s sense of self didn’t change between events; the setting did.",
        },
        {
          text: "Primary socialization",
          why: "The joke-teller is an adult; this isn’t about early childhood learning.",
        },
        {
          text: "Mediation",
          why: "Both events are face-to-face; no technology sits between the participants.",
        },
      ],
    },
    {
      id: "u5-q37",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-social-roles", "u5-social-setting"],
      stem:
        "Patients at an urgent-care clinic expect the triage nurse to ask about symptoms, stay calm, and decide who is seen first — and they’d be alarmed if the nurse started chatting about weekend plans. What are the patients’ expectations of the nurse?",
      options: [
        {
          text: "A social role",
          correct: true,
          why: "Expectations for behavior attached to the nurse’s position in that setting are a social role.",
        },
        {
          text: "A social identity",
          why: "A social identity is a category attributed to someone; the question is about expected behavior in a position.",
        },
        {
          text: "Civil inattention",
          why: "The nurse is expected to engage directly, not politely avoid engagement.",
        },
        {
          text: "The back stage",
          why: "Triage in front of patients is front stage — the performance itself.",
        },
      ],
    },
    {
      id: "u5-q38",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-life-course"],
      stem:
        "After graduating, Marcus starts his first full-time job, moves into his own apartment, learns to budget and cook, and starts being treated as “an adult” by his relatives — all within a few months. Which concept ties these changes together?",
      options: [
        {
          text: "A life-course transition",
          correct: true,
          why: "Interlaced new settings, roles, and identities, with the socialization that goes with them, as he moves between life stages.",
        },
        {
          text: "Primary socialization",
          why: "Primary socialization is early childhood with caregivers; Marcus is an adult.",
        },
        {
          text: "Interactional vandalism",
          why: "No one is strategically disrupting an interaction.",
        },
        {
          text: "Audience segregation",
          why: "He isn’t keeping audiences apart; he’s moving into a new stage of life.",
        },
      ],
    },
    {
      id: "u5-q39",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-mead-i", "u5-mead-me"],
      stem:
        "In a quiet exam room, Priya suddenly wants to groan out loud at a hard question. She pictures everyone turning to stare and stays silent. In Mead’s terms, the part of her that keeps quiet is:",
      options: [
        {
          text: "The “I”",
          why: "The “I” is the urge to groan — impulse regardless of context.",
        },
        {
          text: "The “me”",
          correct: true,
          why: "Picturing others’ reactions and adjusting is the “me”: the self seen through others.",
        },
        {
          text: "Her social identity",
          why: "Social identity is a category others attribute to her, not her self-check.",
        },
        {
          text: "Interactional vandalism",
          why: "No one is breaking the interaction order for strategic gain; she is keeping it intact.",
        },
      ],
    },
    {
      id: "u5-q40",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-generalized-other", "u5-mead-me"],
      stem:
        "Before posting a photo, a 30-year-old thinks, “People would think this is way too much,” without having anyone in particular in mind. In Mead’s terms, who are the “people”?",
      options: [
        {
          text: "The generalized other",
          correct: true,
          why: "An abstract picture of what “people” in general would think — the endpoint of Mead’s increasingly abstract others.",
        },
        {
          text: "A concrete other from primary socialization",
          why: "A concrete other is a specific person (“what would my dad think?”); here no one in particular is imagined.",
        },
        {
          text: "The “I”",
          why: "The “I” is impulse — the urge to post — not the imagined audience.",
        },
        {
          text: "An out-group",
          why: "Not Mead’s concept; the question asks how Mead would describe an abstract imagined audience.",
        },
      ],
    },
    {
      id: "u5-q41",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-piaget"],
      stem:
        "A ten-month-old keeps grabbing his own toes, then the blanket, then his mother’s nose, as if testing where he ends and the world begins. Which of Piaget’s phases is this?",
      options: [
        {
          text: "Formal operational",
          why: "Formal operational is highly abstract reasoning — far beyond an infant.",
        },
        {
          text: "Concrete operational",
          why: "Concrete operational involves initial abstraction, like manipulating numbers.",
        },
        {
          text: "Sensorimotor",
          correct: true,
          why: "Learning the boundary between self and world, mainly by touching, is the sensorimotor phase.",
        },
        {
          text: "Preoperational",
          why: "Preoperational involves early symbolic representation and egocentric speech.",
        },
      ],
    },
    {
      id: "u5-q42",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-piaget"],
      stem:
        "A high-school debater argues about whether a rule would be fair “for any possible society,” reasoning entirely in hypotheticals. In Piaget’s terms, this shows which phase?",
      options: [
        {
          text: "Formal operational",
          correct: true,
          why: "Highly abstract reasoning about problems that can’t be materially represented is the formal operational phase.",
        },
        {
          text: "Concrete operational",
          why: "Concrete operational is basic symbolic manipulation, like arithmetic without counting objects — not abstract hypotheticals.",
        },
        {
          text: "Preoperational",
          why: "Preoperational is disordered symbolic representation and egocentric speech.",
        },
        {
          text: "The generalized other",
          why: "That’s Mead, not one of Piaget’s phases.",
        },
      ],
    },
    {
      id: "u5-q43",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-becker", "u5-socialization"],
      stem:
        "On her first visit to a coffee-tasting class, Jo thinks black espresso just tastes bitter. The instructor shows her how to sip it, points out the “chocolate” and “citrus” notes, and over several weeks Jo comes to love it. Whose argument does this best parallel?",
      options: [
        {
          text: "Becker’s — experiencing and enjoying an effect is learned through socialization",
          correct: true,
          why: "Learning how to consume, recognize the effects, and enjoy them mirrors Becker’s three steps, applied to a new sensation.",
        },
        {
          text: "Piaget’s — she is moving into the formal operational phase",
          why: "Piaget’s phases concern a child’s abstract reasoning, not learning to enjoy a taste as an adult.",
        },
        {
          text: "Goffman’s — she is performing on the front stage",
          why: "Her enjoyment isn’t a performance for an audience; it’s a learned experience.",
        },
        {
          text: "Mead’s — her “I” overcame her “me”",
          why: "Nothing here is impulse vs. self-image; it’s learning to perceive and enjoy.",
        },
      ],
    },
    {
      id: "u5-q44",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-civil-inattention", "u5-normal-interaction"],
      stem:
        "In a crowded laundromat, people waiting for their dryers give each other a quick glance, then look at their phones and keep a polite distance without striking up conversation. This is:",
      options: [
        {
          text: "Interactional vandalism",
          why: "No one is disrupting the interaction for strategic gain.",
        },
        {
          text: "Unequal interaction",
          why: "The setting doesn’t prescribe superior and inferior roles among customers.",
        },
        {
          text: "Civil inattention",
          correct: true,
          why: "Aware of each other but studiously avoiding direct, attentive interaction — civil inattention.",
        },
        {
          text: "A breaching experiment",
          why: "Nothing is being broken; they’re following the normal order.",
        },
      ],
    },
    {
      id: "u5-q45",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-back-stage", "u5-front-stage"],
      stem:
        "Before each shift, the servers at a busy brunch spot huddle in the kitchen to rehearse the specials and agree on how to handle a large, difficult party. In Goffman’s terms, the kitchen huddle is:",
      options: [
        {
          text: "Front stage",
          why: "The front stage is the dining room, where they perform for customers.",
        },
        {
          text: "Back stage",
          correct: true,
          why: "Out of the audience’s view, preparing for the performance — that’s the back stage.",
        },
        {
          text: "Civil inattention",
          why: "They’re engaging each other directly, not politely ignoring one another.",
        },
        {
          text: "A breaching experiment",
          why: "They’re preparing to follow the interaction order, not breaking it for research.",
        },
      ],
    },
    {
      id: "u5-q46",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 3,
      conceptIds: ["u5-audience-segregation", "u5-dramaturgy"],
      stem:
        "Sam is a strict, serious team captain at practice but a goofy prankster with childhood friends, and Sam makes sure the two groups never end up at the same party. Which concept does the “never at the same party” part show?",
      options: [
        {
          text: "Audience segregation",
          correct: true,
          why: "Keeping audiences apart so knowledge from one can’t contradict the performance given to the other.",
        },
        {
          text: "Civil inattention",
          why: "That’s politely not engaging with strangers.",
        },
        {
          text: "Secondary socialization",
          why: "Nothing here is about learning new norms; it’s about managing performances.",
        },
        {
          text: "Unequal interaction",
          why: "There’s no prescribed superior/inferior role between the groups.",
        },
      ],
    },
    {
      id: "u5-q47",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u5-front-stage", "u5-interactional-vandalism"],
      stem:
        "During a job interview, Keisha speaks formally, sits up straight, and talks about “synergy”; with her roommates that night she slouches and uses slang. A friend calls the interview “interactional vandalism.” Which concept fits better?",
      options: [
        {
          text: "Interactional vandalism is right — she’s being strategic",
          why: "Vandalism means deliberately disrupting the interaction order. Keisha is following the interview’s expectations, not breaking them.",
        },
        {
          text: "A breaching experiment",
          why: "She isn’t breaking rules to study reactions.",
        },
        {
          text: "Front-stage performance of a role",
          correct: true,
          why: "Giving a persuasive performance of the “candidate” role in front of an audience is front-stage dramaturgy.",
        },
        {
          text: "Primary socialization",
          why: "She’s an adult performing a role, not a child learning basics.",
        },
      ],
    },
    {
      id: "u5-q48",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 3,
      conceptIds: ["u5-eruptions", "u5-interactional-vandalism"],
      stem:
        "You reach to shake a new coworker’s hand just as they lean in for a hug; you bump heads, both laugh, and you joke “let’s try that again.” This is best described as:",
      options: [
        {
          text: "Interactional vandalism",
          why: "Vandalism is intentional and strategic; this was an accident.",
        },
        {
          text: "An accidental eruption repaired with humor",
          correct: true,
          why: "A misunderstanding broke the normal order and was recovered with a laugh — just as the notes describe.",
        },
        {
          text: "A breaching experiment",
          why: "No one broke the rule on purpose for research.",
        },
        {
          text: "Civil inattention",
          why: "They were attempting direct engagement, not polite avoidance.",
        },
      ],
    },
    {
      id: "u5-q49",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 3,
      conceptIds: ["u5-breaching-experiment", "u5-interactional-vandalism"],
      stem:
        "For a sociology assignment, a student stands facing the back wall of a busy bus and writes down how passengers react. Which concept fits, and which is the wrong lens?",
      options: [
        {
          text: "Interactional vandalism fits, because the student broke the normal order on purpose",
          why: "On purpose, yes — but vandalism is for strategic gain. Here the purpose is research.",
        },
        {
          text: "Civil inattention fits, because passengers ignore the student",
          why: "Passengers’ reactions are the data, but the student’s act itself is a deliberate rule-breaking for study.",
        },
        {
          text: "An accidental eruption fits, because the order was disrupted",
          why: "It wasn’t an accident; it was planned.",
        },
        {
          text: "A breaching experiment fits; interactional vandalism is the wrong lens because the goal is research, not advantage",
          correct: true,
          why: "Intentionally erupting the interaction order for research is exactly a breaching experiment.",
        },
      ],
    },
    {
      id: "u5-q50",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 2,
      conceptIds: ["u5-interactional-vandalism", "u5-civil-inattention"],
      stem:
        "A street promoter steps directly into your path, keeps talking over your “no thanks,” and walks alongside you until you take a flyer. Which concept fits best?",
      options: [
        {
          text: "Civil inattention",
          why: "Wrong lens: civil inattention is studiously avoiding engagement. The promoter forces engagement.",
        },
        {
          text: "Interactional vandalism",
          correct: true,
          why: "The normal order is deliberately disrupted for strategic reasons; you can “recover” by walking away or by submitting (taking the flyer).",
        },
        {
          text: "A breaching experiment",
          why: "The promoter’s goal is getting you to take a flyer, not research.",
        },
        {
          text: "Back stage",
          why: "This is a public encounter, not a hidden preparation area.",
        },
      ],
    },
    {
      id: "u5-q51",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-interactional-vandalism"],
      stem:
        "A customer at a phone store starts shouting at a sales associate and refuses to let them help anyone else. The associate calmly says, “I’m going to get my manager, per our store policy.” According to the notes, what way of recovering from interactional vandalism is this?",
      options: [
        {
          text: "Submitting to what is being asked",
          why: "The associate isn’t giving in to the demand.",
        },
        {
          text: "Using civil inattention",
          why: "The associate engages directly rather than politely ignoring.",
        },
        {
          text: "Appealing to an explicit organizational routine",
          correct: true,
          why: "The notes say modern organizations often have routines built in that can be appealed to for support during interactional vandalism.",
        },
        {
          text: "Moving to the back stage",
          why: "Calling a manager per policy is an organizational routine, not retreating to a preparation area.",
        },
      ],
    },
    {
      id: "u5-q52",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 3,
      conceptIds: ["u5-unequal-interaction", "u5-civil-inattention"],
      stem:
        "Which situation is the best example of an unequal interaction as the notes define it?",
      options: [
        {
          text: "Two strangers on a train avoid eye contact",
          why: "Civil inattention, not inequality: nothing prescribes superior and inferior roles.",
        },
        {
          text: "Two friends split a pizza and argue about toppings",
          why: "A disagreement between equals isn’t an unequal interaction.",
        },
        {
          text: "A flight attendant must stay smiling and polite while a passenger complains loudly and gives orders",
          correct: true,
          why: "The setting prescribes one role as serving and circumscribed and the other with much wider latitude.",
        },
        {
          text: "A person texts a friend instead of calling",
          why: "That’s about mediation, not unequal roles.",
        },
      ],
    },
    {
      id: "u5-q53",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u5-mediation"],
      stem:
        "Nervous about confronting her landlord in person, Lena writes a detailed email about the broken heater instead. Which idea from the notes does this illustrate?",
      options: [
        {
          text: "Strategic use of a medium under our control when we feel disadvantaged",
          correct: true,
          why: "The notes’ first entailment of mediation: we may choose writing, which exerts less pressure than face-to-face interaction.",
        },
        {
          text: "Suffering the effects of a medium not under our control",
          why: "Lena chose and controls the medium here; that’s the other entailment.",
        },
        {
          text: "Civil inattention",
          why: "She isn’t politely avoiding engagement; she’s engaging through a different medium.",
        },
        {
          text: "Audience segregation",
          why: "She isn’t keeping separate audiences apart.",
        },
      ],
    },
    {
      id: "u5-q54",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 2,
      conceptIds: ["u5-mediation", "u5-back-stage"],
      stem:
        "A teenager spends hours scrolling an app’s endless, algorithm-chosen feed and feels more anxious every week. Which lens from the notes fits best?",
      options: [
        {
          text: "Back stage — the teen is preparing a performance",
          why: "Wrong lens: scrolling isn’t preparation for a role performance.",
        },
        {
          text: "Strategic use of a medium the teen controls",
          why: "The feed is chosen by the app, not the teen; that’s the opposite entailment.",
        },
        {
          text: "Suffering the effects of a medium not under one’s control",
          correct: true,
          why: "The notes’ second entailment of mediation, with evidence that social media consumption worsens depression and anxiety.",
        },
        {
          text: "Primary socialization by caregivers",
          why: "The influence here is media, not caregivers teaching basics.",
        },
      ],
    },
    {
      id: "u5-q55",
      skill: "application",
      format: "tf",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u5-primary-socialization", "u5-secondary-socialization"],
      stem:
        "A 70-year-old learning how to video-call grandchildren from a library workshop is a good example of primary socialization.",
      options: [
        {
          text: "True",
          why: "Primary socialization is early childhood through adolescence, from caregivers. An adult choosing a workshop is the other kind.",
        },
        {
          text: "False",
          correct: true,
          why: "This is secondary socialization: ongoing across the life course, from a wider set of influences, and sought out by the person.",
        },
      ],
    },
    {
      id: "u5-q56",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 2,
      conceptIds: ["u5-piaget", "u5-generalized-other"],
      stem:
        "A researcher wants to explain how a baby learns where its own body ends by handling objects. Which theorist from the notes offers the better lens?",
      options: [
        {
          text: "Mead, because the baby is taking on the view of the generalized other",
          why: "Wrong lens: the generalized other is an abstract audience of “people,” which comes much later and works through others’ views.",
        },
        {
          text: "Piaget, because his theory stresses direct interaction with the world, starting with the sensorimotor phase",
          correct: true,
          why: "Learning self/world boundaries by touching is Piaget’s sensorimotor phase.",
        },
        {
          text: "Goffman, because the baby is performing on a front stage",
          why: "There’s no role performance for an audience here.",
        },
        {
          text: "Becker, because the baby must learn to enjoy sensations",
          why: "Becker is about learning to produce, recognize, and enjoy a drug’s effects, not infant body boundaries.",
        },
      ],
    },
    {
      id: "u5-q57",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u5-interaction", "u5-social-setting", "u5-social-identity", "u5-self-identity"],
      stem:
        "Two cyclists meet at a narrow trail bridge. One slows and waves the other through; the other nods thanks. The notes say every interaction is composed of three things. Which set matches?",
      options: [
        {
          text: "A social setting, plus social and self-identities giving off cues to one another",
          correct: true,
          why: "The setting (this bridge, now, trail etiquette) and identities exchanging cues (wave, nod) are the guts of interaction.",
        },
        {
          text: "An “I,” a “me,” and a generalized other",
          why: "That’s Mead’s theory of socialization, not the notes’ components of interaction.",
        },
        {
          text: "A front stage, a back stage, and a breach",
          why: "Dramaturgy describes regions of performance, not the three components of every interaction.",
        },
        {
          text: "A medium, a message, and a feed",
          why: "This interaction is face-to-face; mediation isn’t one of the required components.",
        },
      ],
    },

    // ───────────── Big empirical ─────────────
    {
      id: "u5-q58",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 2,
      fixedOrder: true,
      conceptIds: ["u5-life-course", "u2-social-construction"],
      stem:
        "When the U.S. issued its first monthly Social Security (old-age pension) checks in 1940, how did average life expectancy compare to the retirement age?",
      options: [
        {
          text: "At or below the retirement age",
          correct: true,
          why: "Average life expectancy was roughly at or under the retirement age then, so a long “retirement” stage barely existed — evidence that life-course stages are social constructions.",
        },
        {
          text: "About ten years above it",
          why: "That’s closer to today’s picture, where people live roughly a decade or more past retirement age.",
        },
        {
          text: "About twenty-five years above it",
          why: "Far too high for 1940 — and even today’s gap is much smaller than this.",
        },
        {
          text: "About fifty years above it",
          why: "Wildly off; that would mean most people spent most of adulthood retired.",
        },
      ],
    },
    {
      id: "u5-q59",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 2,
      fixedOrder: true,
      conceptIds: ["u5-life-course"],
      stem: "Today, about how long do Americans who reach retirement age go on to live, on average?",
      options: [
        {
          text: "A few months",
          why: "Far too short; that was never the pattern the notes describe for today.",
        },
        {
          text: "Around a decade and a half",
          correct: true,
          why: "Roughly 15 years for men and 18 for women — a long, new life-course stage of living on savings and pensions that didn’t exist in the same structure in your great-grandparents’ time.",
        },
        {
          text: "Around forty years",
          why: "Far too long; that would put average lifespans past 100.",
        },
        {
          text: "Around seventy years",
          why: "Impossible given human lifespans.",
        },
      ],
    },
    {
      id: "u5-q60",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 3,
      fixedOrder: true,
      conceptIds: ["u5-normal-interaction", "u5-eruptions"],
      stem: "According to the notes, what share of our interactions are “normal” (taken-for-granted background) rather than eruptions?",
      options: [
        {
          text: "Very few",
          why: "If most interactions erupted, social life would be constant repair work. The notes say the opposite.",
        },
        {
          text: "About half",
          why: "Still far too low; eruptions are the exception.",
        },
        {
          text: "The vast majority",
          correct: true,
          why: "Once socialized, most interactions run in the background — which is why eruptions and breaching experiments reveal hidden rules so clearly.",
        },
      ],
    },
    {
      id: "u5-q61",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 1,
      fixedOrder: true,
      conceptIds: ["u5-socialization"],
      stem: "How much of the cultural information people need to live in society could be stored in the brain at birth, according to the notes?",
      options: [
        {
          text: "Almost all of it",
          why: "If so, socialization would be unnecessary. The notes say it is impossible to be born with it.",
        },
        {
          text: "About half of it",
          why: "Still overstates it; the notes stress brain-size limits at birth and the sheer complexity of social life.",
        },
        {
          text: "Far from all of it — it’s impossible to be born with it",
          correct: true,
          why: "This is why socialization is necessary: culture must be learned through interaction after birth.",
        },
      ],
    },
    {
      id: "u5-q62",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 2,
      fixedOrder: true,
      conceptIds: ["u5-mediation"],
      stem: "What does increasing evidence (including a study comparing colleges before and after Facebook arrived) suggest about social media consumption’s effect on depression and anxiety?",
      options: [
        {
          text: "Strongly protective — it reduces depression and anxiety",
          why: "The notes report the opposite direction.",
        },
        {
          text: "No measurable effect",
          why: "The notes cite increasing evidence of an effect.",
        },
        {
          text: "Quite negative effects",
          correct: true,
          why: "This is the notes’ example of the second entailment of mediation: when we don’t control a medium, we can suffer its effects.",
        },
      ],
    },
    {
      id: "u5-q63",
      skill: "empirical",
      format: "tf",
      tier: 2,
      conceptIds: ["u5-life-course", "u2-social-construction"],
      stem:
        "The notes use changes in life expectancy relative to the retirement age to show that “retirees,” as a group living on savings and pensions for many years, didn’t exist with the same structure a few generations ago.",
      options: [
        {
          text: "True",
          correct: true,
          why: "That’s the notes’ point: the retiree stage of the life course is a social construction shaped by changing institutions and lifespans.",
        },
        {
          text: "False",
          why: "The notes make exactly this argument with the 1940 vs. today comparison.",
        },
      ],
    },
  ],
};
