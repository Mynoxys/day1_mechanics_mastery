import type { Unit } from "../types";

export const unit4: Unit = {
  id: "u4",
  number: 4,
  title: "Meaning",
  subtitle: "Symbols, culture, and how shared understanding makes social life possible — and unequal",
  sourceUrl: "https://nhwilson.github.io/chapters/Ch_4_Meaning.html",
  bigPoints: [
    {
      point: "Meaning is how shared social constructions are possible at all.",
      detail:
        "Your brain turns raw stimuli (ink, pixels, sounds) into references to something else. Every meaning has the structure of a symbol: a signifier (the thing doing the representing) and a signified (what it represents). Sometimes the link is resemblance (iconic); more often it depends on context among other symbols. Because people can arrive at similar-enough understandings, the shared beliefs behind social constructions can exist.",
    },
    {
      point: "Meaning works at two levels: micro (Weber) and macro (Durkheim).",
      detail:
        "Micro: for Weber, acting just is attaching subjective meaning to behavior, and action is “social” when that meaning takes other people’s behavior into account; per Vaisey, meaning motivates (supplies goals) and justifies (supplies reasons). Macro: for Durkheim, concepts are collective products no one person made, they are interrelated (grammar shapes meaning), and they form an emergent plane that works downward on individuals.",
    },
    {
      point: "Culture = the system of symbols and meanings, with three dimensions — and it both unifies and divides.",
      detail:
        "Values (what is good, bad, or ultimately important), norms (rule-like statements of what is appropriate in a given setting), and material culture (purposeful human intervention in the physical world). Shared meaning is what makes social order possible, yet the same symbols mark differences between groups, can justify inequality, and — once materialized as writing — let central authorities track people at huge scale.",
    },
    {
      point: "The big history of culture, and today’s unresolved tensions.",
      detail:
        "Sophisticated culture ≈50,000 years ago; little change for ~40,000 years; towns ≈8–6,000 years ago; writing ≈5,000 years ago, invented independently in about four places, yet almost no one outside officials could read until recently; industrialization mechanized agriculture so far fewer people farm; culture moved from broadcast to networked. Today’s tensions: shared socialization vs. fragmented subcultures, assimilation vs. multiculturalism, ethnocentrism vs. cultural relativism.",
    },
  ],
  connections: [
    "Unit 4 opens Part II (“conceptual foundation”) and answers a question Unit 2 left hanging: if social constructions exist by shared belief, how do people ever come to share beliefs? Meaning is the answer.",
    "It dissects the “symbol” from Unit 3’s symbolic interactionism into signifier and signified, reuses Unit 2’s micro/macro levels and emergence (Durkheim’s emergent plane of culture), and revisits Unit 1’s cherished values as one dimension of culture.",
    "It sets up what follows: interaction (meaning exchanged face to face), social structure, identity, and especially power and inequality — since meaning can justify inequality and writing is a tool of central authority.",
  ],
  concepts: [
    {
      id: "u4-meaning",
      term: "Meaning (significance)",
      tier: 1,
      plainIdea:
        "Look at a squiggle of ink and you don’t see ink — you see a word, a face, a warning. Meaning is that automatic leap from “stuff hitting my senses” to “this is about something else.” It matters to sociology because it’s how a bunch of different people can land on roughly the same understanding of what’s going on.",
      courseDefinition:
        "Our ability to perceive meaning or significance in the world: the brain’s action of integrating stimuli into references to something else. A theory of meaning explains how people arrive at a shared understanding of what a thing, setting, or phenomenon is “about,” at least enough to enable communication.",
      freshExample:
        "Three quick knocks on your dorm door are just sound waves, but you instantly read them as “someone wants to come in” — and so would anyone else on the floor.",
      notToConfuse:
        "Not a dictionary definition or a deep “meaning of life.” It’s the everyday capacity to read stimuli as referring to something — the thing that makes shared social constructions (Unit 2) possible.",
    },
    {
      id: "u4-signifier",
      term: "Signifier",
      tier: 1,
      plainIdea:
        "The physical part of a symbol — the mark, sound, gesture, or object you can actually see or hear that stands in for something.",
      courseDefinition: "The part of a symbol that is doing the representing.",
      freshExample:
        "The green checkmark next to an assignment on your course portal: the little checkmark shape itself is the signifier.",
      notToConfuse:
        "Signified is the meaning being pointed at (“submitted, you’re fine”). Tell: can you point at it on the screen? Then it’s the signifier.",
    },
    {
      id: "u4-signified",
      term: "Signified",
      tier: 1,
      plainIdea:
        "The idea or meaning a symbol points to — what’s in your head when you read the sign, not the sign itself.",
      courseDefinition: "The part of a symbol that is the meaning or significance being represented.",
      freshExample:
        "When a coach blows the whistle twice, the signified is “practice is over, come in” — the two blasts of sound are just the signifier.",
      notToConfuse:
        "Signifier is the vehicle (sound, mark, object). Tell: the signified can’t be photographed — it’s the “what it means.”",
    },
    {
      id: "u4-iconic",
      term: "Iconic relationship (vs. context-dependent meaning)",
      tier: 1,
      plainIdea:
        "Some symbols work by looking like what they mean — a little drawing of a camera on your camera app. Most modern symbols don’t: words mean what they mean because of the other words around them.",
      courseDefinition:
        "A relationship between signifier and signified that is one of direct resemblance. Contrasted with meaning that is highly dependent on its contextual appearance among other symbols, the more complex pattern most modern languages follow.",
      freshExample:
        "Iconic: a map’s tiny tent drawing marking a campsite. Context-dependent: “fire” in “fire the manager,” “the new album is fire,” and “fire drill” — same word, meaning set only by its neighbors.",
      notToConfuse:
        "Context-dependent meaning: no resemblance at all; the meaning comes from the surrounding symbols. Tell: could someone who doesn’t know the language guess it from the picture alone? If yes, iconic.",
    },
    {
      id: "u4-social-action",
      term: "Social action (Weber, micro)",
      tier: 2,
      thinker: "Max Weber",
      plainIdea:
        "For Weber, doing something (as opposed to just twitching) means your behavior carries a meaning for you. It becomes social action when that meaning takes other people into account — you’re acting with an eye on how others act or will read you.",
      courseDefinition:
        "To act is to “attach subjective meaning to [one’s] behavior… Action is ‘social’ insofar as its subjective meaning takes account of the behavior of others and is thereby oriented in its course” — never an objectively “correct” or metaphysically true meaning (Weber 1978:4). Meaning is subjective, yet oriented to the meanings people infer in others.",
      freshExample:
        "Choosing to wear a blazer to a group-project presentation because you think your classmates will take you more seriously.",
      notToConfuse:
        "Durkheim’s collective concepts are macro: shared concepts no one person made, working downward. Weber starts from the individual’s subjective meaning (micro).",
    },
    {
      id: "u4-motivation-justification",
      term: "Motivation vs. justification (Vaisey)",
      tier: 3,
      thinker: "Stephen Vaisey",
      plainIdea:
        "Meaning does two jobs for a person: it can be the goal pulling you forward (motivation), or the reason you give for what you did (justification).",
      courseDefinition:
        "At the micro level, meaning operates as a form of motivating and justifying action (Vaisey 2009): meanings can supply the goals you are pursuing, or they can provide the reasons for what you are doing.",
      freshExample:
        "Motivation: you study late because you want to get into nursing school. Justification: when a friend asks why you skipped their party, you say “school comes first.”",
      notToConfuse:
        "Manifest vs. latent functions (Unit 3) are about whether participants know an activity’s function for society — not about goals vs. reasons.",
    },
    {
      id: "u4-collective-concepts",
      term: "Collective concepts (Durkheim, macro)",
      tier: 2,
      thinker: "Emile Durkheim",
      plainIdea:
        "Nobody personally invented the words you think with. Concepts are built by a whole group over time, they hang together like a web (grammar changes what a word means), and that web presses down on each person who uses it.",
      courseDefinition:
        "Concepts “are always common to a plurality of men… neither the vocabulary nor the grammar of a language is the work or product of one particular person… they express the anonymous collectivity that employs them” (Durkheim 1973). Meaning here is at least intersubjective, even approaching objective; interrelated meanings form an emergent plane of cultural dynamics that works downward on individuals.",
      freshExample:
        "A new slang term spreads through a whole grade; no single student decided what it means, but anyone who uses it “wrong” gets corrected or teased.",
      notToConfuse:
        "Weber’s social action is micro: an individual’s subjective meaning. Durkheim’s is macro and emergent (Unit 2): the collective level has its own properties.",
    },
    {
      id: "u4-culture",
      term: "Culture",
      tier: 1,
      plainIdea:
        "Culture is the whole shared toolkit of symbols and what they mean for a group — not just museums and opera, but emojis, dress codes, buildings, and what counts as rude.",
      courseDefinition:
        "The system of symbols and their meanings; it has several dimensions: values, norms, and material culture.",
      freshExample:
        "A high school’s culture includes the unwritten rule about which table seniors sit at, the value placed on school spirit, and the mural in the gym.",
      notToConfuse:
        "Not “being cultured” (refined taste). And not a single dimension: values, norms, and material culture are all parts of culture.",
    },
    {
      id: "u4-values",
      term: "Values",
      tier: 1,
      plainIdea:
        "Big-picture statements about what’s good, bad, or worth caring about — true everywhere, not tied to one room or situation.",
      courseDefinition:
        "Statements of what is good, bad, valuable, or ultimately important for people (first noted in Unit 1). Unlike a norm, a value cannot be stated as a rule relative to a given situation.",
      freshExample:
        "“Hard work pays off” or “family comes first” — they apply whether you’re at work, at home, or at the gym.",
      notToConfuse:
        "Norms are situation-bound rules (“no phones at the dinner table”). Tell: if you can say where/when it applies, it’s a norm.",
    },
    {
      id: "u4-norms",
      term: "Norms",
      tier: 1,
      plainIdea:
        "The unwritten (or written) rules for a particular setting — what you should or shouldn’t do here, now.",
      courseDefinition:
        "Rule-like statements about what is appropriate or inappropriate in a given setting. A norm can be stated like a rule relative to a given situation, and is often derived from a value.",
      freshExample:
        "“Don’t leave the group chat without saying bye” — it names the behavior and the setting, and it flows from a value like being considerate.",
      notToConfuse:
        "Not “normal” in the statistical sense (what most people do). A norm is about what’s appropriate, and it’s tied to a situation, unlike a value.",
    },
    {
      id: "u4-material-culture",
      term: "Material culture",
      tier: 1,
      plainIdea:
        "Everything people deliberately make or shape in the physical world — tools, buildings, gadgets, signs — because each carries and organizes meaning.",
      courseDefinition:
        "All organized, purposeful intervention by humans into the physical world, including all technology, building, and material symbolic representation.",
      freshExample:
        "A college’s campus layout: the quad, the clock tower, the school logo painted on the field, and the ID-card turnstiles at the gym.",
      notToConfuse:
        "Untouched nature isn’t material culture — the key is purposeful human intervention. Values and norms are ideas/rules, not physical things.",
    },
    {
      id: "u4-meaning-unifying",
      term: "Meaning as unifying",
      tier: 2,
      plainIdea:
        "Shared meaning is the glue that lets strangers coordinate. If you couldn’t assume others read a signal the way you do, you couldn’t interact at all.",
      courseDefinition:
        "Culture and meaning are intensely unifying, since they are the vector through which social order is possible; without a shared sense of the meaning of symbols and gestures, it would be literally impossible for interactions to take place and for complex social organizations to function.",
      freshExample:
        "In a pickup basketball game with total strangers, everyone knows that calling “ball” or “foul” means play stops — so the game can happen.",
      notToConfuse:
        "Meaning as a vector of power: the same symbols that bind people also mark differences and justify inequality. Tell: is the meaning letting people coordinate, or sorting/ranking them?",
    },
    {
      id: "u4-meaning-power",
      term: "Meaning as a source of conflict and vector for power",
      tier: 2,
      plainIdea:
        "The symbols we share also tell us who’s “us” and who’s “them,” can make inequality look deserved, and — once written down — let an authority keep tabs on huge numbers of people.",
      courseDefinition:
        "Culture can be used to divide or justify power: symbols contain not only what we share but ways to differentiate us from one another; meaning can justify inequality; and materialized meaning (writing) lets a central authority use many interchangeable agents across space and time to track, record, and observe people at a much larger scale.",
      freshExample:
        "A private club’s dress code and insider slang let members spot outsiders instantly — the meaning marks who belongs.",
      notToConfuse:
        "Meaning as unifying stresses coordination and social order. This side stresses division and domination — echoing Unit 3’s conflict theory.",
    },
    {
      id: "u4-cultural-universals",
      term: "Cultural universals",
      tier: 2,
      plainIdea:
        "A short list of things every recorded human society has had, however differently they look from place to place.",
      courseDefinition:
        "Elements of the human organization of meaning observed in every recorded society: marriage (a socially-sanctioned sexual relationship between at least two people — not necessarily man and woman, two people, or romantic), property rights (norms about who gets what, when), religious ritual (venerating supernatural entities or the “unknown”), and language (minimally, the exchange of symbols).",
      freshExample:
        "Two societies with nothing else in common will both have rules for who owns the harvest and some way of marking a socially recognized couple.",
      notToConfuse:
        "Writing is not a universal — it appeared only ≈5,000 years ago, in about four places. “Marriage” in the course sense is broader than the everyday picture.",
    },
    {
      id: "u4-writing",
      term: "Writing (materialized meaning)",
      tier: 2,
      plainIdea:
        "Writing freezes speech so it lasts and travels. That’s great for memory — and great for whoever wants to keep records on people.",
      courseDefinition:
        "The material representation of spoken language: the ability to make human linguistic expression durable and distributable across distances. First evidence ≈5,000 years ago in Mesopotamia; emerged independently in at least four places. It allows a central authority to use a variety of agents across space and time to track, record, and observe people at a much larger scale.",
      freshExample:
        "A chain store’s written employee file means any new manager at any branch can see your whole work history without ever having met you.",
      notToConfuse:
        "Language is a cultural universal; writing is not. And for most of history almost no one outside religious and government officials could read.",
    },
    {
      id: "u4-broadcast",
      term: "Broadcast (culture)",
      tier: 1,
      plainIdea:
        "One central source decides what everyone gets, and everyone gets roughly the same thing.",
      courseDefinition:
        "A model in which some central authority makes decisions about what will be represented, and then consumers receive that product.",
      freshExample:
        "A small town where the whole school hears the same morning announcements chosen by the principal’s office.",
      notToConfuse:
        "Networked: many channels, messages tailored to each person. Tell: does one gatekeeper choose for everyone?",
    },
    {
      id: "u4-networked",
      term: "Networked (culture)",
      tier: 1,
      plainIdea:
        "Culture flows through many channels, and each person gets a feed tailored to them — so two neighbors can live in different cultural worlds.",
      courseDefinition:
        "A dynamic in which culture is distributed along a series of channels that provide much more tailored messages and meanings than previously possible.",
      freshExample:
        "You and your roommate both scroll every night, but your recommended videos never overlap.",
      notToConfuse:
        "Not “networking” for jobs, and not the broadcast model. Tell: tailored and fragmented vs. one-to-many.",
    },
    {
      id: "u4-subculture",
      term: "Subculture",
      tier: 1,
      plainIdea:
        "A group inside a bigger society with its own flavor — its own rules, values, and stuff. Fine in moderation; a problem if it drifts so far it can’t talk to anyone else.",
      courseDefinition:
        "Sub-groups in complex societies that develop distinctive norms, values, and material culture. They present a challenge when they become so distinctive that it is difficult or impossible to interface with mainstream society — at which point “society” may be too fragmented to be coherent.",
      freshExample:
        "Competitive speedcubers with their own slang, gear, and ideas about what counts as a “clean” solve.",
      notToConfuse:
        "Multiculturalism is society adapting to subcultures; a subculture is the group itself. The tension is shared community/socialization vs. fragmentation.",
    },
    {
      id: "u4-assimilation",
      term: "Assimilation",
      tier: 1,
      plainIdea:
        "Newcomers change to fit in: they take on the mainstream’s culture.",
      courseDefinition:
        "When newcomers with different cultural backgrounds adopt the culture dominant in the mainstream of society.",
      freshExample:
        "A transfer student drops their old school’s traditions and slang within a semester and starts doing everything the way the locals do.",
      notToConfuse:
        "Multiculturalism: society changes to accommodate the newcomers. Tell: who does the adapting — the newcomer or the society?",
    },
    {
      id: "u4-multiculturalism",
      term: "Multiculturalism",
      tier: 1,
      plainIdea:
        "The mainstream makes room: society adjusts to include newcomers’ cultures rather than asking them to disappear into it.",
      courseDefinition:
        "When society accommodates or adapts to subcultures, leading to multicultural diversity.",
      freshExample:
        "A town library starts stocking books and hosting story hours in the languages new families speak.",
      notToConfuse:
        "Assimilation: newcomers adopt the dominant culture. Also not cultural relativism, which is about how you evaluate other values, not integration policy.",
    },
    {
      id: "u4-ethnocentrism",
      term: "Ethnocentrism",
      tier: 1,
      plainIdea:
        "Judging other cultures by your own and concluding yours is better.",
      courseDefinition:
        "Arguing that one’s own cultural commitments are superior for some reason (intellectual or not, rational or irrational).",
      freshExample:
        "A tourist who calls every local custom “backwards” because it’s not how things are done back home.",
      notToConfuse:
        "Cultural relativism: just accepting the difference. Note the notes allow ethnocentrism to be argued rationally — it isn’t defined as mere prejudice.",
    },
    {
      id: "u4-cultural-relativism",
      term: "Cultural relativism",
      tier: 1,
      plainIdea:
        "Seeing another culture’s commitments differ from yours and simply accepting the difference rather than ranking them.",
      courseDefinition:
        "Just accepting the difference between one’s own and another culture’s commitments.",
      freshExample:
        "A study-abroad student notices her host family eats dinner at 10 p.m. and thinks “that’s how they do it here” — not better, not worse.",
      notToConfuse:
        "Ethnocentrism: claiming your own commitments are superior. The notes present both as options in a hard, unresolved tension.",
    },
  ],
  contrastSets: [
    {
      id: "u4-cs-signifier-signified",
      title: "Signifier vs. signified (and iconic vs. context-dependent)",
      conceptIds: ["u4-signifier", "u4-signified", "u4-iconic"],
      axis:
        "The signifier is the perceivable thing doing the representing; the signified is the meaning represented. Iconic = the signifier resembles the signified; context-dependent = meaning set by surrounding symbols.",
      test: "Can you point at it or hear it? Signifier. Is it the “what it means”? Signified. Does it look like what it means? Iconic.",
    },
    {
      id: "u4-cs-micro-macro",
      title: "Micro (Weber, Vaisey) vs. macro (Durkheim) analysis of culture",
      conceptIds: ["u4-social-action", "u4-motivation-justification", "u4-collective-concepts", "u2-micro", "u2-macro", "u2-emergence"],
      axis:
        "Micro: meaning is subjective, attached by a person to their action and oriented to others (Weber); it motivates and justifies (Vaisey). Macro: concepts are collective, interrelated, and form an emergent plane working downward on people (Durkheim).",
      test: "Does the explanation start from one person’s meaning and goals (micro) or from a shared web of concepts nobody authored that shapes individuals (macro)?",
      crossUnit: true,
    },
    {
      id: "u4-cs-values-norms-material",
      title: "Values vs. norms vs. material culture",
      conceptIds: ["u4-values", "u4-norms", "u4-material-culture", "u4-culture"],
      axis:
        "Values: general statements of what is good/important. Norms: rule-like statements of what’s appropriate in a given setting. Material culture: purposeful human shaping of the physical world.",
      test: "Can it be stated as a rule for a particular situation? Norm. A general good that holds everywhere? Value. A physical thing people made or shaped? Material culture.",
    },
    {
      id: "u4-cs-unifying-power",
      title: "Meaning as unifying vs. meaning as conflict and power",
      conceptIds: ["u4-meaning-unifying", "u4-meaning-power", "u4-writing"],
      axis: "Whether shared meaning is enabling coordination and social order, or marking differences, justifying inequality, and extending central control.",
      test: "Is the symbol helping people coordinate, or helping someone sort, rank, or track people?",
    },
    {
      id: "u4-cs-broadcast-networked",
      title: "Broadcast vs. networked culture",
      conceptIds: ["u4-broadcast", "u4-networked"],
      axis: "One central authority choosing what everyone receives vs. many channels delivering tailored messages.",
      test: "Does everyone get the same product from one gatekeeper (broadcast), or a personalized stream (networked)?",
    },
    {
      id: "u4-cs-community-subculture",
      title: "Community and socialization vs. fragmented subcultures",
      conceptIds: ["u4-subculture", "u4-meaning-unifying"],
      axis: "Distinctive subgroup culture that still interfaces with the mainstream vs. subcultures so distinct that society fragments.",
      test: "Can the group still interface with mainstream society? If not, the notes worry “society” stops being coherent.",
    },
    {
      id: "u4-cs-assimilation-multiculturalism",
      title: "Assimilation vs. multiculturalism",
      conceptIds: ["u4-assimilation", "u4-multiculturalism"],
      axis: "Who adapts: newcomers adopting the dominant culture, or society accommodating newcomers’ cultures.",
      test: "Is the newcomer changing to fit the mainstream (assimilation), or is the mainstream making room (multiculturalism)?",
    },
    {
      id: "u4-cs-ethnocentrism-relativism",
      title: "Ethnocentrism vs. cultural relativism",
      conceptIds: ["u4-ethnocentrism", "u4-cultural-relativism"],
      axis: "Claiming one’s own cultural commitments are superior vs. accepting the difference.",
      test: "Is the person ranking the other culture below their own, or just accepting that it differs?",
    },
    {
      id: "u4-cs-cherished-values",
      title: "Mills’ cherished values (U1) vs. values as a dimension of culture (U4)",
      conceptIds: ["u1-cherished-values", "u4-values", "u1-well-being", "u1-crisis"],
      axis:
        "Same underlying idea (what people hold to be good or important), different job: Unit 1 asks whether you can articulate your cherished values and whether social change threatens them (Mills’ typology); Unit 4 places values inside culture, next to norms and material culture, and distinguishes them from situational rules.",
      test: "Is the question about awareness and threat (U1: well-being, crisis, indifference, uneasiness) or about the parts of culture (U4: value vs. norm vs. material culture)?",
      crossUnit: true,
    },
    {
      id: "u4-cs-construction-meaning",
      title: "Social construction (U2) vs. meaning (U4)",
      conceptIds: ["u2-social-construction", "u4-meaning", "u2-intersubjective"],
      axis:
        "A social construction is a phenomenon constituted by shared belief; meaning is HOW that sharing is possible — the capacity to reach similar-enough understandings of what something is “about.”",
      test: "Are you naming a thing that exists because people believe in it (social construction), or the process that lets them believe the same thing (meaning)?",
      crossUnit: true,
    },
    {
      id: "u4-cs-symbol-parts",
      title: "Symbol and symbolic interactionism (U3) vs. signifier/signified (U4)",
      conceptIds: ["u3-symbol", "u3-symbolic-interactionism", "u4-signifier", "u4-signified"],
      axis:
        "Unit 3: a symbol is a representation of one thing by means of another, and symbolic interactionism studies how people coordinate by exchanging them. Unit 4 opens the symbol up into its two parts.",
      test: "Is the question about a tradition studying face-to-face exchange of symbols (U3), or about which part of a symbol is which (U4)?",
      crossUnit: true,
    },
  ],
  falseFriends: [
    {
      id: "u4-ff-culture",
      conceptId: "u4-culture",
      term: "Culture",
      everyday: "Refinement — opera, art galleries, “being cultured.”",
      course: "The whole system of symbols and their meanings: values, norms, and material culture, including mundane stuff like slang and dress codes.",
      trap: "You’ll pick an answer about high art or sophistication when the question is about any shared system of meaning.",
    },
    {
      id: "u4-ff-values",
      conceptId: "u4-values",
      term: "Values",
      everyday: "Prices or numbers (“the value of x”), or your private personal morals.",
      course: "Statements of what is good, bad, valuable, or ultimately important — a shared dimension of culture, not tied to a specific situation.",
      trap: "You may call a situational rule a “value” because it feels moral; if it can be stated as a rule for a setting, it’s a norm.",
    },
    {
      id: "u4-ff-norms",
      conceptId: "u4-norms",
      term: "Norms",
      everyday: "What’s normal or average — what most people happen to do.",
      course: "Rule-like statements about what is appropriate or inappropriate in a given setting.",
      trap: "A statistical habit (most students sit in the back) isn’t a norm unless there’s a sense of what one should or shouldn’t do there.",
    },
    {
      id: "u4-ff-meaning",
      conceptId: "u4-meaning",
      term: "Meaning",
      everyday: "A dictionary definition, or “the meaning of life.”",
      course: "Our ability to read stimuli as references to something else — the basis for shared understanding and thus for social constructions.",
      trap: "Answers about fixed definitions or life purpose miss the course idea that meaning is a shared, social capacity.",
    },
    {
      id: "u4-ff-symbol",
      conceptId: "u4-signifier",
      term: "Symbol",
      everyday: "A special emblem — a flag, a logo, a religious sign.",
      course: "Any representation of one thing by means of another (words, pictures, gestures, material structures), made of a signifier and a signified.",
      trap: "You may think ordinary words or gestures aren’t symbols; in the course, nearly all communication runs on symbols.",
    },
    {
      id: "u4-ff-marriage",
      conceptId: "u4-cultural-universals",
      term: "Marriage",
      everyday: "A romantic union between one man and one woman.",
      course: "A socially-sanctioned sexual relationship between at least two people — not necessarily man and woman, two people, or romantic.",
      trap: "A T/F that adds “must be romantic” or “between a man and a woman” is false by the notes’ definition.",
    },
    {
      id: "u4-ff-relativism",
      conceptId: "u4-cultural-relativism",
      term: "Relativism",
      everyday: "“Anything goes,” “there’s no truth,” or “whatever, I don’t care.”",
      course: "Cultural relativism: accepting the difference between one’s own and another culture’s commitments rather than claiming one’s own are superior.",
      trap: "It isn’t a claim that truth doesn’t exist or indifference — it’s specifically the alternative to ethnocentrism.",
    },
  ],
  magnitudes: [
    {
      id: "u4-m-sophisticated-culture",
      prompt: "About how long ago does the best evidence place the origins of sophisticated human culture?",
      answer: "About 50,000 years ago",
      whyItMatters:
        "That’s when burial practices, technology, collective hunting, and artifacts changed rapidly — the start of a human capacity for rich shared meaning, long before towns or writing.",
    },
    {
      id: "u4-m-little-change",
      prompt: "After sophisticated culture appeared, roughly how long did human life go without major change before settled life?",
      answer: "About 40,000 years",
      whyItMatters:
        "Culture alone didn’t transform society; it took the end of the last ice age and the domestication of plants and animals to give culture a durable, settled base.",
    },
    {
      id: "u4-m-towns",
      prompt: "About when had human settlements grown to the size of modest towns?",
      answer: "About 8,000–6,000 years ago",
      whyItMatters:
        "Living in settlements gave every part of human life, including culture, a more durable base — setting up writing and complex, stratified societies.",
    },
    {
      id: "u4-m-settlement-size",
      prompt: "About how many people lived in one of the earliest known settlements?",
      answer: "Hundreds of people (not thousands or millions)",
      whyItMatters:
        "The first “towns” were tiny by today’s standards — a reminder of how recent large-scale societies (and the need for tools like writing) are.",
    },
    {
      id: "u4-m-writing",
      prompt: "About how old is writing?",
      answer: "About 5,000 years old (first evidence in Mesopotamia)",
      whyItMatters:
        "Writing made language durable and distributable, letting societies grow more complex and stratified and letting central authorities track people at scale.",
    },
    {
      id: "u4-m-writing-places",
      prompt: "In how many places did writing emerge independently?",
      answer: "At least about four (Mesopotamia, Mesoamerica, China, Egypt)",
      whyItMatters:
        "It was invented repeatedly as complex settled societies arose — but it is not a cultural universal the way language is.",
    },
    {
      id: "u4-m-literacy",
      prompt: "For most of the history of writing, who could read and write?",
      answer: "Almost no one outside religious and government officials — mass literacy is very recent",
      whyItMatters:
        "Materialized meaning was concentrated in the hands of authorities, which is why writing worked as a vector of power.",
    },
    {
      id: "u4-m-agriculture",
      prompt: "What did industrialization do to the share of people working to grow food?",
      answer: "Vastly reduced it (mechanized agriculture)",
      whyItMatters:
        "It was the key structural effect of industrialization for the history of culture: far fewer people needed to farm to feed everyone else.",
    },
  ],
  questions: [
    // ───────────── Conceptual ─────────────
    {
      id: "u4-q01",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u4-meaning"],
      stem:
        "The notes open with an optical illusion and say what matters is not exactly what you saw, but that you saw something at all. In sociology, “meaning” refers to…",
      options: [
        {
          text: "Our ability to integrate stimuli into references to something else",
          correct: true,
          why: "That’s the notes’ definition: turning pixels, ink, or sounds into a reference to something else — the capacity behind shared understanding.",
        },
        {
          text: "The single objectively correct definition of a word",
          why: "The notes stress shared, social understanding — and Weber explicitly says the meaning behind action is never the objectively “correct” one.",
        },
        {
          text: "A person’s sense of purpose in life",
          why: "That’s the everyday “meaning of life” sense. The course concept is the basic capacity to read things as standing for something else.",
        },
        {
          text: "The physical mark or sound that represents something",
          why: "That’s the signifier — only one part of a symbol, not meaning itself.",
        },
      ],
    },
    {
      id: "u4-q02",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-signifier", "u4-signified", "u3-symbol"],
      stem: "In the notes, a symbol has two parts. Which term names the part that is doing the representing?",
      options: [
        {
          text: "The signifier",
          correct: true,
          why: "The signifier is the perceivable vehicle — the mark, sound, or object that stands for something.",
        },
        {
          text: "The signified",
          why: "The signified is the other half: the meaning or significance being represented.",
        },
        {
          text: "The frame",
          why: "A frame (Unit 3) is a shared meaning that defines the nature of a set of interactions — not a part of a single symbol.",
        },
        {
          text: "The norm",
          why: "A norm is a rule-like statement about appropriate behavior in a setting — a dimension of culture, not a part of a symbol.",
        },
      ],
    },
    {
      id: "u4-q03",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-iconic"],
      stem:
        "When the relationship between a signifier and what it signifies is one of direct resemblance, the notes call that relationship…",
      options: [
        {
          text: "Networked",
          why: "Networked describes how culture is distributed through many tailored channels — nothing to do with resemblance.",
        },
        {
          text: "Iconic",
          correct: true,
          why: "Iconic means the signifier looks like what it stands for. Most modern language instead depends on context among other symbols.",
        },
        {
          text: "Tacit",
          why: "Tacit knowledge (Unit 3) is know-how people can’t necessarily articulate — not a resemblance relationship.",
        },
        {
          text: "Latent",
          why: "Latent functions (Unit 3) are functions participants aren’t aware of — unrelated to how symbols represent.",
        },
      ],
    },
    {
      id: "u4-q04",
      skill: "conceptual",
      format: "mc",
      trap: "misattribution",
      tier: 2,
      conceptIds: ["u4-social-action"],
      stem:
        "Which classical theorist held that to act is to attach subjective meaning to one’s behavior, and that action becomes “social” when that meaning takes account of the behavior of others?",
      fixedOrder: true,
      options: [
        {
          text: "Emile Durkheim",
          why: "Durkheim is the notes’ macro example: concepts are collective products that no one person made, working downward on individuals.",
        },
        {
          text: "Max Weber",
          correct: true,
          why: "Weber (who also theorized rationalization) tied meaning and action tightly together — the notes’ micro-level view of culture.",
        },
        {
          text: "C. Wright Mills",
          why: "Mills is Unit 1’s sociological imagination and the typology of cherished values, not the definition of social action.",
        },
        {
          text: "Your group-project partner who says “it’s all subjective” about everything",
          why: "Tempting to agree, but a classmate is not the classical theorist the notes quote.",
        },
      ],
    },
    {
      id: "u4-q05",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 2,
      conceptIds: ["u4-collective-concepts"],
      stem:
        "True/False: According to the notes, Durkheim argued that concepts like “man” or “animal” are personal creations that each individual invents for themselves.",
      options: [
        {
          text: "True",
          why: "This reverses Durkheim. He says concepts are common to a plurality of people, the product of collective elaboration, not of any one person.",
        },
        {
          text: "False",
          correct: true,
          why: "Right — for Durkheim, vocabulary and grammar are collective; the ideas of “man” or “animal” are shared with everyone in one’s social group.",
        },
      ],
    },
    {
      id: "u4-q06",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 3,
      conceptIds: ["u4-motivation-justification"],
      stem:
        "Following Vaisey, the notes say that at the micro level meaning can supply the goals you are pursuing or provide the reasons for what you are doing. What pair of terms captures this?",
      options: [
        {
          text: "Manifest and latent functions",
          why: "Merton’s pair (Unit 3) is about whether participants are aware of an activity’s function — not goals vs. reasons.",
        },
        {
          text: "Formal and substantive rationalization",
          why: "Unit 2’s pair describes efficiency logic vs. explicit purposes spreading through society — a macro historical process.",
        },
        {
          text: "Motivation and justification",
          correct: true,
          why: "Motivation = meaning supplies the goal; justification = meaning supplies the reason. That’s Vaisey’s dual-process view.",
        },
        {
          text: "Signifier and signified",
          why: "Those are the two parts of a symbol, not two jobs meaning does for action.",
        },
      ],
    },
    {
      id: "u4-q07",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u4-collective-concepts", "u2-emergence", "u2-macro"],
      stem:
        "Which statement best captures Durkheim’s macro-level view of meaning as presented in the notes?",
      options: [
        {
          text: "Meaning is purely private: each person’s interpretation stays in their own head",
          why: "That’s closer to a strictly subjective view. Durkheim says meaning is at least intersubjective and even approaches objectivity.",
        },
        {
          text: "Interrelated shared meanings form an emergent plane that works downward on individual people",
          correct: true,
          why: "Durkheim’s concepts are collective and interrelated (grammar shapes word meaning), and they act on individuals from above — emergence, as in Unit 2.",
        },
        {
          text: "Meaning comes from direct resemblance between a picture and what it shows",
          why: "That’s the iconic relationship, which the notes say is the less common pattern in modern languages.",
        },
        {
          text: "Meaning is mainly a tool elites use to hide their interests",
          why: "That echoes conflict theory and meaning-as-power, not Durkheim’s account of collective concepts.",
        },
      ],
    },
    {
      id: "u4-q08",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u4-culture"],
      stem: "In the notes, what do sociologists usually mean by “culture”?",
      options: [
        {
          text: "Refined taste in art, music, and literature",
          why: "That’s the everyday “being cultured” sense. Sociologically, a group chat’s emoji habits are just as much culture as opera.",
        },
        {
          text: "The system of symbols and their meanings",
          correct: true,
          why: "That’s the notes’ definition; culture has dimensions of values, norms, and material culture.",
        },
        {
          text: "The biological traits a group inherits",
          why: "Biology isn’t culture; culture is shared meaning, which people learn and change.",
        },
        {
          text: "The formal laws passed by a government",
          why: "Laws can express norms, but culture is much broader: all symbols and meanings, most of them unwritten.",
        },
      ],
    },
    {
      id: "u4-q09",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-values", "u4-norms"],
      stem: "According to the notes, what is the usual way to tell a norm apart from a value?",
      options: [
        {
          text: "Norms are written down, while values never are",
          why: "Both can be written or unwritten. The distinction the notes give is about whether it applies to a given situation.",
        },
        {
          text: "Values belong to groups, while norms belong to individuals",
          why: "Both are dimensions of shared culture; neither is individual-only.",
        },
        {
          text: "A norm can be stated as a rule relative to a given situation; a value cannot",
          correct: true,
          why: "Exactly the notes’ test: a norm names what to do (or not) and where; a value states a general good that holds regardless of setting.",
        },
        {
          text: "Values are about religion, while norms are about everything else",
          why: "Values are statements of what’s good, bad, or important in general — not limited to religion.",
        },
      ],
    },
    {
      id: "u4-q10",
      skill: "conceptual",
      format: "mc",
      trap: "not-all",
      tier: 2,
      conceptIds: ["u4-cultural-universals", "u4-writing"],
      stem: "Which of the following is NOT one of the cultural universals described in the notes?",
      fixedOrder: true,
      options: [
        {
          text: "Marriage",
          why: "Marriage — a socially-sanctioned sexual relationship between at least two people — is observed in every recorded society.",
        },
        {
          text: "Property rights",
          why: "Every culture has norms about the distribution of goods: who gets what, when.",
        },
        {
          text: "Writing",
          correct: true,
          why: "Writing appeared only about 5,000 years ago in about four places, and most people couldn’t read until recently — so it isn’t universal. Language is.",
        },
        {
          text: "Language",
          why: "Every culture has language, minimally the exchange of symbols.",
        },
        {
          text: "These are all cultural universals",
          why: "One of them isn’t: writing is recent and was invented in only a few places.",
        },
      ],
    },
    {
      id: "u4-q11",
      skill: "conceptual",
      format: "mc",
      trap: "not-all",
      tier: 2,
      conceptIds: ["u4-cultural-universals"],
      stem: "Which of the following is not a cultural universal, according to the notes?",
      fixedOrder: true,
      options: [
        {
          text: "Religious ritual",
          why: "Every culture has some way of venerating supernatural entities or the “unknown,” so this is a universal.",
        },
        {
          text: "Language",
          why: "Every culture has a system of language, minimally involving the exchange of symbols.",
        },
        {
          text: "Property rights",
          why: "Every culture has rules about who gets what, when — a universal.",
        },
        {
          text: "Marriage",
          why: "In the broad course sense (a socially-sanctioned sexual relationship between at least two people), marriage is universal.",
        },
        {
          text: "These are all cultural universals",
          correct: true,
          why: "All four are the notes’ cultural universals: marriage, property rights, religious ritual, and language.",
        },
      ],
    },
    {
      id: "u4-q12",
      skill: "conceptual",
      format: "tf",
      trap: "everyday-meaning",
      tier: 2,
      conceptIds: ["u4-cultural-universals"],
      stem:
        "True/False: According to the notes, marriage counts as a cultural universal only in the form of a romantic relationship between one man and one woman.",
      options: [
        {
          text: "True",
          why: "That’s the everyday picture. The notes say marriage is not necessarily between a man and a woman, between two people, or romantic.",
        },
        {
          text: "False",
          correct: true,
          why: "The notes define it broadly as a socially-sanctioned sexual relationship between at least two people — which is why it can be universal.",
        },
      ],
    },
    {
      id: "u4-q13",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-broadcast", "u4-networked"],
      stem:
        "Until the recent past, mass culture followed a model in which a central authority decided what would be represented and consumers received that product. The notes call this model…",
      options: [
        {
          text: "Networked",
          why: "Networked is the newer pattern: many channels delivering tailored messages — the opposite of one central gatekeeper.",
        },
        {
          text: "Multicultural",
          why: "Multiculturalism is about society accommodating subcultures, not how media is distributed.",
        },
        {
          text: "Broadcast",
          correct: true,
          why: "Broadcast = one central decision-maker, many receivers getting the same product.",
        },
        {
          text: "Assimilated",
          why: "Assimilation is newcomers adopting the dominant culture — a different tension entirely.",
        },
      ],
    },
    {
      id: "u4-q14",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-ethnocentrism", "u4-cultural-relativism"],
      stem:
        "A person argues that their own culture’s commitments are superior to another culture’s, and offers what they consider rational reasons. Which concept from the notes fits?",
      options: [
        {
          text: "Cultural relativism",
          why: "Relativism means just accepting the difference between cultures’ commitments — not ranking them.",
        },
        {
          text: "Ethnocentrism",
          correct: true,
          why: "The notes define ethnocentrism as arguing one’s own commitments are superior for some reason, “intellectual or not, rational or irrational.” Giving reasons doesn’t change that.",
        },
        {
          text: "Multiculturalism",
          why: "Multiculturalism is society adapting to accommodate subcultures, not a claim of superiority.",
        },
        {
          text: "Subculture",
          why: "A subculture is a subgroup with distinctive norms, values, and material culture — not an attitude toward others.",
        },
      ],
    },
    {
      id: "u4-q15",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-assimilation", "u4-multiculturalism"],
      stem:
        "In the notes’ discussion of integrating newcomers, what is the key difference between assimilation and multiculturalism?",
      options: [
        {
          text: "Who adapts: newcomers adopt the dominant culture, or society accommodates newcomers’ cultures",
          correct: true,
          why: "Assimilation = the newcomer adopts the mainstream culture; multiculturalism = society accommodates or adapts to subcultures.",
        },
        {
          text: "Whether people accept or rank other cultures’ values",
          why: "That’s the ethnocentrism vs. cultural relativism tension, a separate one in the notes.",
        },
        {
          text: "Whether culture is delivered by one central authority or many channels",
          why: "That’s broadcast vs. networked.",
        },
        {
          text: "Whether a symbol resembles what it stands for",
          why: "That’s iconic vs. context-dependent meaning.",
        },
      ],
    },
    {
      id: "u4-q16",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-subculture", "u4-meaning-unifying"],
      stem: "According to the notes, when do subcultures become a real challenge?",
      options: [
        {
          text: "Whenever a subgroup has any norms that differ from the mainstream",
          why: "Having distinctive norms is just what makes a subculture; the notes locate the problem at the extreme.",
        },
        {
          text: "When newcomers adopt the dominant culture too quickly",
          why: "That describes assimilation, not the subculture problem.",
        },
        {
          text: "When subcultures become so distinctive that they can hardly interface with mainstream society",
          correct: true,
          why: "At that point society is so fragmented it may not be coherent enough to call a “society” at all.",
        },
        {
          text: "When culture shifts from networked to broadcast",
          why: "The notes describe the opposite shift (broadcast → networked), and it isn’t the definition of the subculture problem.",
        },
      ],
    },
    {
      id: "u4-q17",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-meaning", "u2-social-construction", "u2-intersubjective"],
      stem: "According to the notes, what is the main reason sociologists care so much about meaning?",
      options: [
        {
          text: "Meaning is the one part of social life that is fully objective",
          why: "The notes treat meaning as subjective (Weber) to intersubjective, at most approaching objectivity (Durkheim).",
        },
        {
          text: "Social constructions rest on shared belief, and meaning explains how people come to share understandings",
          correct: true,
          why: "Unit 2: social constructions exist by shared acceptance. Unit 4: meaning is how that sharing happens — enough to communicate.",
        },
        {
          text: "Meaning lets sociologists skip collecting empirical evidence",
          why: "Nothing in the notes says this; sociology stays an empirical science (Unit 2).",
        },
        {
          text: "Meaning proves that social constructions are fake",
          why: "Social construction doesn’t mean fake (Unit 2), and meaning explains how constructions become real for us.",
        },
      ],
    },
    {
      id: "u4-q18",
      skill: "conceptual",
      format: "tf",
      tier: 2,
      conceptIds: ["u4-meaning-power", "u4-meaning-unifying"],
      stem:
        "True/False: According to the notes, the same culture that binds people together can also be used to divide them or to justify power.",
      options: [
        {
          text: "True",
          correct: true,
          why: "The notes present both sides: meaning makes social order possible, and symbols also differentiate groups and can justify inequality.",
        },
        {
          text: "False",
          why: "The notes explicitly pair “meaning as unifying” with “meaning as a source of conflict and a vector for power.”",
        },
      ],
    },
    {
      id: "u4-q19",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u1-cherished-values", "u4-values", "u1-crisis"],
      stem:
        "Unit 1 introduced cherished values through Mills; Unit 4 returns to values as a dimension of culture. What does Unit 4 add?",
      options: [
        {
          text: "It shows values are really the same thing as norms",
          why: "The opposite: Unit 4 distinguishes them — norms are situational rules, values are general statements of what’s good.",
        },
        {
          text: "It sorts people into well-being, crisis, indifference, or uneasiness",
          why: "That’s Unit 1’s Mills typology, which asks whether values can be articulated and whether they’re threatened.",
        },
        {
          text: "It shows values only matter to people who can articulate them",
          why: "Unit 1 already allowed that people may or may not be aware of cherished values; Unit 4 doesn’t add an awareness requirement.",
        },
        {
          text: "It places values inside culture alongside norms and material culture, and separates them from situational rules",
          correct: true,
          why: "Unit 4 defines values as statements of what’s good, bad, or important and sets them beside norms and material culture as parts of culture.",
        },
      ],
    },
    {
      id: "u4-q20",
      skill: "conceptual",
      format: "tf",
      tier: 2,
      conceptIds: ["u4-social-action"],
      stem:
        "True/False: In Weber’s sense as quoted in the notes, action is “social” when its subjective meaning takes account of the behavior of others and is oriented by it.",
      options: [
        {
          text: "True",
          correct: true,
          why: "That’s Weber’s definition: meaning is subjective, but social action is oriented toward the behavior (and inferred meanings) of others.",
        },
        {
          text: "False",
          why: "This is essentially a direct paraphrase of the Weber passage in the notes.",
        },
      ],
    },
    {
      id: "u4-q21",
      skill: "conceptual",
      format: "tf",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u2-social-construction", "u4-meaning"],
      stem:
        "True/False: Because social constructions depend on shared meaning, the notes imply they are basically fake and individuals can make them into whatever they want.",
      options: [
        {
          text: "True",
          why: "That’s the everyday “it’s just made up” reading. Unit 2 explicitly says social construction does not mean individuals can make up whatever they want or that nothing is real.",
        },
        {
          text: "False",
          correct: true,
          why: "Social constructions are real composites of material stuff and shared meanings; shared meaning is what makes them durable, not arbitrary.",
        },
      ],
    },
    {
      id: "u4-q22",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u4-meaning-power", "u4-writing"],
      stem: "According to the notes, how did writing, as materialized meaning, aid the operation of power?",
      options: [
        {
          text: "It let a central authority use many interchangeable agents across space and time to track and record people at a larger scale",
          correct: true,
          why: "Durable, distributable records meant no one had to remember everything, so societies could grow more complex and stratified, with authorities watching at scale.",
        },
        {
          text: "It immediately made everyone literate and equal",
          why: "The opposite: almost no one outside religious and government officials could read until very recently.",
        },
        {
          text: "It replaced spoken language as a cultural universal",
          why: "Language remains the universal; writing is recent and not universal.",
        },
        {
          text: "It made shared meaning unnecessary for coordination",
          why: "Writing depends on shared meaning; it’s a material form of it, not a replacement.",
        },
      ],
    },

    // ───────────── Application ─────────────
    {
      id: "u4-q23",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-signifier", "u4-signified"],
      stem:
        "You tell your group chat you bombed an exam, and a friend replies with just a thumbs-up emoji. You read it as cold and dismissive. In this exchange, what is the signifier?",
      options: [
        {
          text: "The dismissive attitude you took it to mean",
          why: "That’s the signified — the meaning you read into it.",
        },
        {
          text: "The thumbs-up image itself",
          correct: true,
          why: "The signifier is the perceivable thing doing the representing: the little emoji on your screen.",
        },
        {
          text: "The norm against replying to bad news with emojis",
          why: "A norm may be in play, but the question asks which part of the symbol is doing the representing.",
        },
        {
          text: "Your friend’s actual private feelings",
          why: "Those may differ from what you read; either way, feelings aren’t the signifier.",
        },
      ],
    },
    {
      id: "u4-q24",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-iconic", "u4-signified"],
      stem:
        "A coworker says “fire the new guy,” your cousin says “this playlist is fire,” and the dorm has a “fire drill” at noon. The same word means something different each time. What does this best illustrate?",
      options: [
        {
          text: "An iconic relationship between signifier and signified",
          why: "Iconic means resemblance; here the word looks identical each time, so resemblance can’t be what sets the meaning.",
        },
        {
          text: "Meaning that depends on context among other symbols",
          correct: true,
          why: "The signifier is the same; the signified changes only because of the words around it — the pattern the notes say most modern languages follow.",
        },
        {
          text: "Cultural relativism",
          why: "Relativism is about accepting differences between cultures’ commitments, not how words take meaning.",
        },
        {
          text: "Material culture",
          why: "Material culture is purposeful human intervention in the physical world; spoken words shifting meaning is about symbols and context.",
        },
      ],
    },
    {
      id: "u4-q25",
      skill: "application",
      format: "mc",
      trap: "everyday-meaning",
      tier: 2,
      conceptIds: ["u4-social-action"],
      stem: "Which of these is the best example of social action in Weber’s sense?",
      options: [
        {
          text: "Your eye blinks when dust blows into it",
          why: "A reflex carries no subjective meaning for the person, so for Weber it isn’t action at all.",
        },
        {
          text: "Your stomach growls during a quiet lecture",
          why: "Embarrassing, but not something you do with meaning attached — it’s bodily behavior, not action.",
        },
        {
          text: "You pick your outfit for a job interview based on how you think the interviewer will read it",
          correct: true,
          why: "You attach meaning to your behavior and orient it to others’ expected reactions — Weber’s social action.",
        },
        {
          text: "You shiver while waiting at a cold bus shelter",
          why: "Shivering is physiological, not meaningful action oriented toward others.",
        },
      ],
    },
    {
      id: "u4-q26",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 3,
      conceptIds: ["u4-motivation-justification"],
      stem:
        "After missing three club meetings, Andre tells the club president, “Sorry — my grades have to come first.” He actually skipped to play video games. At the micro level, how is meaning working in Andre’s statement?",
      options: [
        {
          text: "As a justification: it provides a reason for what he did",
          correct: true,
          why: "Vaisey’s justification side: meaning supplies reasons for action — here offered after the fact, whatever actually drove him.",
        },
        {
          text: "As a motivation: it supplied the goal he was pursuing",
          why: "Motivation would mean “grades first” actually drove his behavior; the stem says it didn’t.",
        },
        {
          text: "As a latent function of the club",
          why: "Latent functions are unrecognized functions of an activity for society, not a person’s stated reason.",
        },
        {
          text: "As an iconic symbol",
          why: "Nothing here resembles what it represents; the question is about how meaning relates to action.",
        },
      ],
    },
    {
      id: "u4-q27",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u4-collective-concepts", "u4-social-action"],
      stem:
        "A new slang word spreads across a whole high school. No single student decided what it means, yet anyone who uses it “wrong” gets corrected. Which view from the notes best fits?",
      options: [
        {
          text: "Weber’s view that meaning is attached subjectively by each actor",
          why: "Weber is the micro starting point; the stem stresses that no individual authored the meaning and it constrains individuals.",
        },
        {
          text: "Durkheim’s view that concepts are collective products working downward on individuals",
          correct: true,
          why: "The meaning is the product of anonymous collective elaboration, and it presses down on each student — Durkheim’s macro, emergent view.",
        },
        {
          text: "An iconic relationship between signifier and signified",
          why: "A slang word doesn’t resemble what it means.",
        },
        {
          text: "Material culture",
          why: "A spoken word isn’t purposeful physical intervention in the world.",
        },
      ],
    },
    {
      id: "u4-q28",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-norms", "u4-values"],
      stem:
        "A gym posts a sign: “Wipe down machines after use.” When asked why, members say, “Because it’s important to respect other people.” Which part is the norm?",
      options: [
        {
          text: "“It’s important to respect other people”",
          why: "That’s the value — a general good that holds anywhere, not tied to the gym.",
        },
        {
          text: "The gym’s machines and the printed sign",
          why: "Those are material culture — purposeful physical objects.",
        },
        {
          text: "“Wipe down machines after use”",
          correct: true,
          why: "It can be stated as a rule for a given setting (at the gym, after using equipment) — the notes’ test for a norm.",
        },
        {
          text: "The members’ private feelings about hygiene",
          why: "Personal feelings aren’t a rule-like shared statement about appropriate behavior.",
        },
      ],
    },
    {
      id: "u4-q29",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-values", "u4-norms"],
      stem: "Which of these statements is a value rather than a norm?",
      options: [
        {
          text: "“No phones out during the exam.”",
          why: "This names a behavior and a setting, so it’s a norm.",
        },
        {
          text: "“Honesty matters.”",
          correct: true,
          why: "It states what’s good in general, with no particular situation attached — a value.",
        },
        {
          text: "“Take your shoes off when you enter Grandma’s house.”",
          why: "A situational rule (Grandma’s house) — a norm.",
        },
        {
          text: "“Raise your hand before speaking in seminar.”",
          why: "A rule tied to a setting (seminar) — a norm.",
        },
      ],
    },
    {
      id: "u4-q30",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-material-culture"],
      stem:
        "A sociologist studies a town’s skate park: the concrete ramps the town built, the painted murals, and the rails skaters welded on themselves. Which dimension of culture is she mainly studying?",
      options: [
        {
          text: "Values",
          why: "Values are general statements of what’s good; ramps and murals are physical things.",
        },
        {
          text: "Norms",
          why: "Norms are rules for a setting (e.g., “wait your turn at the bowl”); the stem is about physical structures.",
        },
        {
          text: "The signified",
          why: "The signified is a meaning being represented, not a set of physical objects.",
        },
        {
          text: "Material culture",
          correct: true,
          why: "Purposeful human intervention in the physical world — building, technology, and material symbolic representation.",
        },
      ],
    },
    {
      id: "u4-q31",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u4-material-culture"],
      stem: "Which of these would be the strangest thing to call material culture?",
      options: [
        {
          text: "A hiking trail cut and marked by a park crew",
          why: "People purposefully shaped it — that’s material culture.",
        },
        {
          text: "A rock formation in a remote canyon that no person has ever altered",
          correct: true,
          why: "Material culture requires organized, purposeful human intervention in the physical world; untouched nature doesn’t qualify.",
        },
        {
          text: "The painted road signs along a highway",
          why: "Signs are material symbolic representation that people made on purpose — material culture.",
        },
        {
          text: "A campus chapel",
          why: "A building is a purposeful intervention into the physical world — material culture.",
        },
      ],
    },
    {
      id: "u4-q32",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u4-meaning-unifying", "u2-social-order"],
      stem:
        "In a pickup basketball game among total strangers, everyone stops play when someone yells “foul” and restarts from the sideline without discussion. Which idea from the notes does this best show?",
      options: [
        {
          text: "Meaning as unifying: shared meanings make coordinated interaction possible",
          correct: true,
          why: "Without a shared sense of what “foul” means, strangers couldn’t coordinate at all — meaning as the vector of social order.",
        },
        {
          text: "Meaning as a vector for power",
          why: "Nobody is being ranked, excluded, or tracked; the shared meaning is enabling coordination.",
        },
        {
          text: "Ethnocentrism",
          why: "No one is claiming their culture is superior to another’s.",
        },
        {
          text: "Fragmented subcultures",
          why: "The point is the opposite: strangers share enough meaning to play together.",
        },
      ],
    },
    {
      id: "u4-q33",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u4-meaning-power", "u3-conflict-theory"],
      stem:
        "At an exclusive country club, members use insider jargon and an elaborate dress code, which lets them instantly spot — and quietly freeze out — people who “don’t belong.” Which idea from the notes fits best?",
      options: [
        {
          text: "Meaning as unifying",
          why: "Meaning does unify the members, but the stem stresses using symbols to mark and exclude outsiders.",
        },
        {
          text: "Cultural relativism",
          why: "Relativism is accepting differences; here differences are used to exclude.",
        },
        {
          text: "Meaning as a source of conflict and a vector for power",
          correct: true,
          why: "Symbols carry not only what’s shared but ways to differentiate people — and here that differentiation sustains exclusion.",
        },
        {
          text: "The broadcast model",
          why: "Broadcast is about a central authority deciding what’s represented to consumers, not club dress codes.",
        },
      ],
    },
    {
      id: "u4-q34",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u4-writing", "u4-meaning-power"],
      stem:
        "A national retail chain keeps written performance files on every employee, so a manager at any branch, years later, can see exactly what someone did without ever having met them. Which point from the notes does this illustrate?",
      options: [
        {
          text: "Writing lets a central authority use interchangeable agents across space and time to track people at scale",
          correct: true,
          why: "Durable, distributable records mean anyone in the chain of authority can observe and coordinate people far beyond face-to-face memory.",
        },
        {
          text: "Language is a cultural universal",
          why: "True, but the stem is about written records enabling control, not about spoken language being universal.",
        },
        {
          text: "Networked culture delivers tailored messages",
          why: "Networked culture concerns how cultural content is distributed to audiences, not personnel records.",
        },
        {
          text: "Iconic symbols resemble what they represent",
          why: "Written files don’t work by resemblance.",
        },
      ],
    },
    {
      id: "u4-q35",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-networked", "u4-broadcast"],
      stem:
        "You and your younger brother each watch an hour of videos every night, but your recommended feeds never overlap — his is all speedruns, yours is all cooking. Which concept fits best?",
      options: [
        {
          text: "Broadcast culture",
          why: "Broadcast means one central authority choosing the same product for everyone; here each of you gets something different.",
        },
        {
          text: "Assimilation",
          why: "Assimilation is newcomers adopting mainstream culture, not personalized media feeds.",
        },
        {
          text: "An iconic relationship",
          why: "Nothing here is about symbols resembling what they represent.",
        },
        {
          text: "Networked culture",
          correct: true,
          why: "Culture distributed along many channels with messages tailored to each person — the notes’ networked dynamic.",
        },
      ],
    },
    {
      id: "u4-q36",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-subculture"],
      stem:
        "Competitive speedcubers on campus have their own slang, their own ideas about what makes a solve “clean,” and specialized cubes and timers. What concept best describes this group?",
      options: [
        {
          text: "A subculture",
          correct: true,
          why: "A subgroup with distinctive norms, values, and material culture within a complex society.",
        },
        {
          text: "Multiculturalism",
          why: "Multiculturalism is society accommodating subcultures, not the subgroup itself.",
        },
        {
          text: "A cultural universal",
          why: "Cultural universals are found in every recorded society; speedcubing obviously isn’t.",
        },
        {
          text: "Ethnocentrism",
          why: "Nothing in the stem involves claiming one culture is superior.",
        },
      ],
    },
    {
      id: "u4-q37",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-assimilation", "u4-multiculturalism"],
      stem:
        "A family moves to a new country. Within a few years the kids stop speaking their parents’ language, celebrate only the local holidays, and eat what their classmates eat. Which concept fits best?",
      options: [
        {
          text: "Multiculturalism",
          why: "That would mean society adapting to the family’s culture; here the family is adapting to the mainstream.",
        },
        {
          text: "Assimilation",
          correct: true,
          why: "Newcomers adopting the culture dominant in the mainstream of society.",
        },
        {
          text: "Cultural relativism",
          why: "Relativism is an attitude of accepting cultural differences, not the process of newcomers taking on the dominant culture.",
        },
        {
          text: "Broadcast culture",
          why: "Broadcast is about centrally controlled media, not immigrant integration.",
        },
      ],
    },
    {
      id: "u4-q38",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u4-multiculturalism", "u4-assimilation"],
      stem:
        "A school district adds holidays from several of its students’ communities to the calendar and starts offering cafeteria options that reflect students’ family backgrounds. Which concept fits best?",
      options: [
        {
          text: "Assimilation",
          why: "Assimilation would have the newcomers adopt the mainstream; here the institution is changing.",
        },
        {
          text: "Ethnocentrism",
          why: "The district isn’t claiming one culture is superior; it’s making room for several.",
        },
        {
          text: "Multiculturalism",
          correct: true,
          why: "Society (here, a school system) accommodates and adapts to subcultures, producing multicultural diversity.",
        },
        {
          text: "Fragmented subcultures",
          why: "Fragmentation is when groups can no longer interface with the mainstream; this is the mainstream adapting to include them.",
        },
      ],
    },
    {
      id: "u4-q39",
      skill: "application",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u4-cultural-relativism", "u4-ethnocentrism"],
      stem:
        "A study-abroad student notices her host family eats dinner at 10 p.m. and treats long lunches as sacred. She thinks, “That’s just how they do things here — not better or worse than home.” Which concept fits best?",
      options: [
        {
          text: "Ethnocentrism",
          why: "Ethnocentrism would mean judging the host culture inferior to her own; she explicitly doesn’t.",
        },
        {
          text: "Cultural relativism",
          correct: true,
          why: "She simply accepts the difference between her own and another culture’s commitments.",
        },
        {
          text: "Assimilation",
          why: "She isn’t adopting the dominant culture; she’s evaluating it.",
        },
        {
          text: "Indifference, in Mills’ sense",
          why: "Mills’ indifference (Unit 1) is being unable to articulate your cherished values while they’re not threatened — not an attitude toward other cultures.",
        },
      ],
    },
    {
      id: "u4-q40",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u4-ethnocentrism"],
      stem: "For which situation would “ethnocentrism” be the strangest lens to use?",
      options: [
        {
          text: "A host family insists their holiday customs are the only “civilized” way to celebrate",
          why: "Claiming one’s own cultural commitments are superior — a clear fit for ethnocentrism.",
        },
        {
          text: "A town council describes a neighboring immigrant community’s customs as backward",
          why: "Ranking another culture’s commitments below one’s own — ethnocentrism fits.",
        },
        {
          text: "A tourist complains that every foreign custom is inferior to how things are done back home",
          why: "Textbook ethnocentrism.",
        },
        {
          text: "Your roommate just personally prefers pizza to tacos",
          correct: true,
          why: "A personal taste isn’t a claim that one culture’s commitments are superior to another’s, so ethnocentrism adds no leverage here.",
        },
      ],
    },
    {
      id: "u4-q41",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-symbolic-interactionism", "u3-symbol", "u4-signifier"],
      stem:
        "A sociologist studies how four roommates negotiate chores face to face by trading sticky notes, emojis, and agreed-on code words (“red magnet on the fridge = dishes are yours”) — shared symbols whose meaning they worked out together. Which Unit 3 tradition is she working in?",
      options: [
        {
          text: "Structural functionalism",
          why: "A macro theory about how phenomena contribute to the stability of society as a whole — not face-to-face symbol exchange.",
        },
        {
          text: "Conflict theory",
          why: "A macro tradition centered on conflicting group interests, not the micro exchange of shared symbols.",
        },
        {
          text: "Symbolic interactionism",
          correct: true,
          why: "People coordinate action by interacting through shared symbols — each one a signifier with a signified, in Unit 4’s terms.",
        },
        {
          text: "Field theory",
          why: "Field theory is a meso view of actors struggling over the meaning of shared action in a social space, not a household’s face-to-face exchanges.",
        },
      ],
    },

    // ───────────── Big empirical ─────────────
    {
      id: "u4-q42",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 3,
      conceptIds: ["u4-culture"],
      stem:
        "About how long ago does the best evidence place the origins of sophisticated human culture (rapid changes in burial practices, technology, and collective hunting)?",
      fixedOrder: true,
      options: [
        {
          text: "About 500 years ago (about as old as modern science)",
          why: "Far too recent — modern science is a very late development in human culture.",
        },
        {
          text: "About 5,000 years ago (about when writing appeared)",
          why: "Writing is ≈5,000 years old, but sophisticated culture came tens of thousands of years earlier.",
        },
        {
          text: "About 50,000 years ago",
          correct: true,
          why: "That’s when the notes place the sudden, rapid development of sophisticated culture — the start of a rich human capacity for shared meaning.",
        },
        {
          text: "About 5 million years ago",
          why: "Far too early; the notes date sophisticated culture to around 50,000 years ago.",
        },
      ],
    },
    {
      id: "u4-q43",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 2,
      conceptIds: ["u4-writing"],
      stem: "About how old is writing?",
      fixedOrder: true,
      options: [
        {
          text: "About 50 years old",
          why: "Far too recent — writing is thousands of years old, far older than anyone’s grandparents.",
        },
        {
          text: "About 5,000 years old",
          correct: true,
          why: "First evidence is from Mesopotamia about 5,000 years ago — a recent invention compared with ≈50,000 years of sophisticated culture.",
        },
        {
          text: "About 50,000 years old (as old as sophisticated culture)",
          why: "Sophisticated culture is ≈50,000 years old, but writing came tens of thousands of years later, after settled towns.",
        },
        {
          text: "It dates to last Tuesday, when someone wrote “DO NOT ERASE” on the lecture-hall whiteboard",
          why: "A joke — though that whiteboard note is technically a norm written in material culture.",
        },
      ],
    },
    {
      id: "u4-q44",
      skill: "empirical",
      format: "tf",
      tier: 2,
      conceptIds: ["u4-writing"],
      stem:
        "True/False: According to the notes, the consensus is that writing emerged independently in at least four places, including Mesopotamia and China.",
      options: [
        {
          text: "True",
          correct: true,
          why: "The notes list Mesopotamia, Mesoamerica, China, and Egypt — invented repeatedly, but still not universal like language.",
        },
        {
          text: "False",
          why: "The notes state this directly; writing was not a single invention that spread from one place.",
        },
      ],
    },
    {
      id: "u4-q45",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 2,
      conceptIds: ["u4-writing", "u4-meaning-power"],
      stem:
        "For most of the roughly 5,000-year history of writing, who could actually read and write — and why does that matter for the notes’ argument?",
      options: [
        {
          text: "About half of people, so writing spread power fairly evenly",
          why: "Far too high; mass literacy is very recent.",
        },
        {
          text: "Almost no one outside religious and government officials, so written meaning mostly served authorities",
          correct: true,
          why: "The notes stress this: literacy was concentrated among officials, which is why writing worked as a vector of central power.",
        },
        {
          text: "Nearly everyone in cities, so writing mainly unified people",
          why: "Even in cities, almost no one outside officials was literate until recently.",
        },
        {
          text: "Everyone, since writing is a cultural universal",
          why: "Writing isn’t a cultural universal — language is.",
        },
      ],
    },
    {
      id: "u4-q46",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 3,
      conceptIds: ["u4-culture"],
      stem:
        "About when had human settlements grown to roughly the size of modest towns, giving culture a more durable base?",
      fixedOrder: true,
      options: [
        {
          text: "About 200 years ago, with industrialization",
          why: "Far too recent; industrialization came long after the first towns.",
        },
        {
          text: "About 8,000–6,000 years ago",
          correct: true,
          why: "After the last ice age ended and plants and animals were domesticated, settlements grew to modest-town size — and settled life gave culture a durable base.",
        },
        {
          text: "About 50,000 years ago, as soon as sophisticated culture appeared",
          why: "Sophisticated culture appeared then, but for tens of thousands of years it didn’t produce towns.",
        },
        {
          text: "About 2 million years ago",
          why: "Far too early — before sophisticated culture existed at all.",
        },
      ],
    },
    {
      id: "u4-q47",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 3,
      conceptIds: ["u4-culture"],
      stem:
        "After sophisticated culture first appeared, roughly how long did human life go without major change, until the end of the last ice age allowed settled life?",
      fixedOrder: true,
      options: [
        {
          text: "About 40 years",
          why: "Wildly too short — the gap is measured in tens of thousands of years.",
        },
        {
          text: "About 400 years",
          why: "Still far too short.",
        },
        {
          text: "About 40,000 years",
          correct: true,
          why: "The notes joke that “for about 40,000 years, nothing happened” — culture alone didn’t transform society until climate change enabled domestication and settlement.",
        },
        {
          text: "About 4 million years",
          why: "Far too long — sophisticated culture itself is only about 50,000 years old.",
        },
      ],
    },
    {
      id: "u4-q48",
      skill: "empirical",
      format: "tf",
      tier: 3,
      conceptIds: ["u4-culture"],
      stem:
        "True/False: According to the notes, a key structural effect of industrialization was mechanizing agriculture, which vastly reduced the share of people who had to work growing food for everyone else.",
      options: [
        {
          text: "True",
          correct: true,
          why: "The notes call this industrialization’s key effect for the history of culture: far fewer people needed to farm.",
        },
        {
          text: "False",
          why: "The notes say exactly this, whether industrialization was organized by capitalism or communism.",
        },
      ],
    },
  ],
};
