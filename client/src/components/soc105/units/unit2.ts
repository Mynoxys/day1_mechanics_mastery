import type { Unit } from "../types";

export const unit2: Unit = {
  id: "u2",
  number: 2,
  title: "Discipline",
  subtitle: "Science, sociology, and their core concepts",
  sourceUrl: "https://nhwilson.github.io/chapters/Ch_2_Discipline.html",

  bigPoints: [
    {
      point: "Every science answers two questions: what exists (ontology) and how we know it (epistemology).",
      detail:
        "Think of a detective: “what actually happened in this room?” is ontology; “what evidence would convince me?” is epistemology. Over the roughly 500 years of modern science, a strong consensus has formed around two epistemological commitments: explain things only through other things in the world (naturalistic explanation), and put every claim through the hardest scrutiny a community of experts can manage (the skeptical attitude).",
    },
    {
      point: "Sciences split along three tensions, and sociology sits in a particular spot on each.",
      detail:
        "(1) Realism vs. empiricism: do you trust only what you can directly see, or do you reason backwards from traces to something real you can’t see? Instruments bridge the two. (2) Analytic reduction vs. emergence: do you break things into their smallest parts, or study the new properties that show up at a higher level? (3) Subjective / intersubjective / objective: people are hard to study because of their inner states, their coordination, and the huge forces acting on them. Sociology mostly leans realist, studies emergent levels, and is usually about intersubjective phenomena.",
    },
    {
      point: "A perfectly neutral “view from nowhere” is impossible for social science, but careful knowledge is not.",
      detail:
        "Studying people is different from studying rocks because people react to what they understand about themselves (reflexivity), and there is no seat outside society to study it from. Knowledge can be biased by one person’s view (subjectivist), or by a closed-off expert community (intersubjectivist). The fix isn’t pretending to be nobody; it’s aspiring to be as objective as possible — reporting results you didn’t want and letting outside voices into the conversation. This is also why the notes reject the idea that there’s one “undistorted” account of society that a law could simply mandate.",
    },
    {
      point: "A starter kit of sociology concepts that come back all semester.",
      detail:
        "Social construction (real because we share belief in it — not “fake”), micro vs. macro (face-to-face scale vs. bigger-than-face-to-face scale), agency vs. structure (making a difference vs. patterns that set outcomes), social order vs. social change (patterned life keeps coming back, yet specific structures shift), and two big historical trends: capitalism (selling things as commodities for profit) and rationalization (calculation spreading into more of life — formal = efficiency, substantive = explicit purposes).",
    },
  ],

  connections: [
    "Unit 1 gave you the sociological imagination — seeing social forces behind personal life, including Du Bois’ reflexivity. Unit 2 asks what kind of science could study those forces, and uses reflexivity to explain why people can’t be studied exactly like rocks or planets.",
    "The three tensions here are the toolkit for Unit 3: the micro traditions (symbolic interactionism, practice theory) and macro traditions (functionalism, conflict theory) are split along the micro/macro line, and the notes describe every research method as a different variety of realism that departs from naive empiricism.",
    "Unit 4 (Meaning) picks up social construction directly — shared meaning is how anything can be “constructed” — and studies culture at the micro and macro levels introduced here. Weber, who theorized rationalization, reappears there.",
  ],

  concepts: [
    {
      id: "u2-science",
      term: "Science (modern)",
      tier: 2,
      thinker: "Shapin (dating); Merton (skepticism)",
      plainIdea:
        "Science isn’t a pile of facts — it’s a particular way of hunting for them that people agreed on over the last few centuries: explain the world only by the world, and try as hard as possible to prove yourself wrong.",
      courseDefinition:
        "To say what a science is, the notes first ask what makes up the world (ontology) and how we know it (epistemology). Since modern science emerged about 500 years ago, a strong consensus has grown around two epistemological commitments: naturalistic explanation and a (more-or-less) skeptical attitude.",
      freshExample:
        "A school nurse wondering why half a class got sick looks for a shared cafeteria meal or a virus going around — not bad luck or a curse — and then checks whether the kids who skipped lunch stayed healthy.",
      notToConfuse:
        "Not the same as “anything a scientist says.” Science is defined by its commitments (naturalism + skepticism), not by who is speaking.",
    },
    {
      id: "u2-ontology",
      term: "Ontology",
      tier: 1,
      plainIdea:
        "The “what’s in the box?” question: what are the basic pieces of the world, and how do they combine into everything else? Like asking what Lego bricks the universe is built from.",
      courseDefinition:
        "Ontology (sometimes called “metaphysics”) is the study of the basic building blocks of the natural world — what the smallest, most basic parts of the world are, and how those parts combine into all of the things that exist.",
      freshExample:
        "Arguing whether a college “friend group” is a real thing in its own right or just a list of individual friendships is an ontological argument.",
      notToConfuse:
        "Epistemology asks HOW we know; ontology asks WHAT exists. Reduction vs. emergence and subjective/intersubjective/objective are ontological.",
    },
    {
      id: "u2-epistemology",
      term: "Epistemology",
      tier: 1,
      plainIdea:
        "The “how do you know?” question — the rules of evidence. A juror asking what would count as proof is doing epistemology.",
      courseDefinition:
        "Epistemology is the study of ways of knowing about and verifying the accuracy of our knowledge about the world.",
      freshExample:
        "Two roommates debating whether a group-chat screenshot is good enough proof of who ate the leftovers are arguing about epistemology.",
      notToConfuse:
        "Ontology asks what exists. Naturalism, skepticism, realism vs. empiricism, and subjectivist/intersubjectivist/objectivist are all epistemological.",
    },
    {
      id: "u2-naturalistic-explanation",
      term: "Naturalistic explanation",
      tier: 1,
      plainIdea:
        "Explain things in the world only with other things in the world. If the lights flicker, look for a loose wire, not a ghost.",
      courseDefinition:
        "Naturalistic explanation is a key aspect of scientific epistemology. It dictates that all phenomena subject to scientific description and explanation should relate only to processes and things in the world, not to supernatural forces.",
      freshExample:
        "When a group chat suddenly goes silent, you look for a reason in the world — finals week, a dead phone, an awkward message — rather than an omen.",
      notToConfuse:
        "The skeptical attitude is the OTHER consensus commitment: it’s about scrutinizing claims, not about what kinds of causes are allowed.",
    },
    {
      id: "u2-skeptical-attitude",
      term: "Skeptical attitude",
      tier: 1,
      thinker: "Merton",
      plainIdea:
        "Don’t believe a claim just because someone important or scary said it — have experts try their hardest to break it first, like engineers stress-testing a bridge.",
      courseDefinition:
        "In scientific epistemology, the skeptical attitude is a commitment held by scientists to subject potential descriptions and explanations about the world to the most rigorous examination possible to verify them. It does not mean anyone is qualified to question findings; communities of trained scientists do the scrutinizing.",
      freshExample:
        "A new finding about teen sleep isn’t accepted until several independent research teams try to poke holes in it and can’t.",
      notToConfuse:
        "Not everyday cynicism or “anyone can doubt anything.” And not naturalism, which is about which causes are allowed.",
    },
    {
      id: "u2-empiricism",
      term: "Empiricism",
      tier: 1,
      plainIdea:
        "Know it by checking it with your own senses — touch the stove to see if it’s hot, look out the window to see if it’s raining.",
      courseDefinition:
        "Empiricism is the epistemological approach of observing things directly with our senses — seeing, hearing, feeling, touching, tasting what we want to know about.",
      freshExample:
        "Wondering whether the dining hall line is long, you walk over and look.",
      notToConfuse:
        "Realism reasons backwards from traces to things you CAN’T directly observe. Empiricism sticks to what you directly sense.",
    },
    {
      id: "u2-realism",
      term: "Realism",
      tier: 1,
      plainIdea:
        "Some real things can’t be seen whole — so you read their footprints. Like knowing wind is there by watching leaves move, then working out how strong it must be.",
      courseDefinition:
        "Realism is the scientific approach of reasoning backwards from observable traces of a phenomenon to assess its structure and general effects in the world.",
      freshExample:
        "Seeing which songs a campus radio station never plays, and which DJs quietly quit, a researcher infers an unwritten station policy nobody will state out loud.",
      notToConfuse:
        "Not “being realistic.” And realism/empiricism are about HOW we know (epistemology), not about WHAT exists (reduction/emergence).",
    },
    {
      id: "u2-instrumentation",
      term: "Instrumentation",
      tier: 2,
      plainIdea:
        "Reliable tools and procedures that stretch your senses — the bridge between “what I can see” and “what’s real but invisible.”",
      courseDefinition:
        "Scientists use instrumentation — reliable machines and procedures — to gather more precise measurements and observations about the operation of phenomena that are not ordinarily available to human senses.",
      freshExample:
        "A town library’s anonymous checkout logs, tallied across years, reveal which neighborhoods read most — something no librarian could see from the front desk.",
      notToConfuse:
        "Instrumentation is the BRIDGE between empiricism and realism, not a third camp. Surveys count as instruments too, not just machines.",
    },
    {
      id: "u2-analytic-reduction",
      term: "Analytic reduction",
      tier: 1,
      plainIdea:
        "Take the clock apart: explain the whole by its smallest pieces. Physics goes all the way down to a handful of fundamental particles.",
      courseDefinition:
        "Analytic reduction is the assertion that complex phenomena are actually collections of constituent parts, and therefore best studied in terms of those smaller components.",
      freshExample:
        "Trying to explain why a choir sounds great purely by measuring each singer’s vocal cords and lung capacity one at a time.",
      notToConfuse:
        "Emergence studies the new properties at a higher level without going down the ladder. Both are ONTOLOGICAL stances, not ways of gathering evidence.",
    },
    {
      id: "u2-emergence",
      term: "Emergence",
      tier: 1,
      plainIdea:
        "Some properties only exist at the level of the whole — a wave in a stadium crowd isn’t in any one fan. You can study the wave without studying anyone’s cells.",
      courseDefinition:
        "Emergence is the unfolding of new properties and higher levels of ontological complexity, which can be apprehended and studied without reference to subsidiary ontological levels.",
      freshExample:
        "A dorm floor known for being the “quiet floor” keeps that reputation year after year even as every resident is replaced.",
      notToConfuse:
        "Not “emergency,” and not “something newly appearing” in the casual sense. Its opposite is analytic reduction.",
    },
    {
      id: "u2-subjective",
      term: "Subjective (ontology)",
      tier: 1,
      plainIdea:
        "What’s going on inside one person’s head — their private feelings, beliefs, plans. Hard to observe, like trying to see someone’s daydream.",
      courseDefinition:
        "A subjective ontology emphasizes people’s interior states of mind, beliefs, and intentions about the world around them.",
      freshExample:
        "A new employee’s private worry that her manager dislikes her, and her silent resolve to work late to prove herself.",
      notToConfuse:
        "“Subjectivist” is the EPISTEMOLOGY word (knowledge that depends on one perspective — a bias risk). “Subjective” is a KIND OF THING that exists.",
    },
    {
      id: "u2-intersubjective",
      term: "Intersubjective (ontology)",
      tier: 1,
      plainIdea:
        "What exists between people who swap meanings and line up their actions — like a group project plan that exists only because everyone agreed on it.",
      courseDefinition:
        "An intersubjective ontology concentrates on the shared beliefs, goals, and intentions held by groups of people coordinating their action. Sociology as a whole is usually concerned with intersubjective phenomena.",
      freshExample:
        "A study group agreeing that whoever books the room also brings snacks — and everyone sticking to it.",
      notToConfuse:
        "“Intersubjectivist” is the EPISTEMOLOGY word (how expert communities shape knowledge). Intersubjective is about what exists; it can be micro OR macro in scale.",
    },
    {
      id: "u2-objective",
      term: "Objective (ontology)",
      tier: 1,
      plainIdea:
        "Forces so large or material that they hit whole populations no matter what anyone believes or agrees on — like an earthquake or a whole population getting older.",
      courseDefinition:
        "An objective ontology emphasizes how non-human material and large-scale social forces affect society and individual people — forces beyond the reach of even the most elaborate coordinated action.",
      freshExample:
        "An earthquake knocking out power across a region, affecting every household regardless of their plans.",
      notToConfuse:
        "Not “unbiased” — that’s the objectivist EPISTEMOLOGY. Objective here names a kind of thing in the world.",
    },
    {
      id: "u2-subjectivist",
      term: "Subjectivist epistemology",
      tier: 1,
      plainIdea:
        "Knowledge that runs through one person’s (or one group’s) point of view. Risky — like judging a whole restaurant from your one bad night — but, used reflexively, your own vantage point can also reveal things others miss.",
      courseDefinition:
        "A subjectivist epistemology focuses on people’s internal mental states and how they influence people’s actions and beliefs about the world. Scientists usually try to avoid purely subjectivist interpretations that depend on an individual’s perspective (or one social category’s), though subjectivity used reflexively can be a key mode of gathering knowledge.",
      freshExample:
        "A researcher who worked retail for years notices, from her own experience, how shoppers treat cashiers differently depending on their accent — then checks whether others see the pattern too.",
      notToConfuse:
        "“Subjective” (ontology) names inner states as things that exist; “subjectivist” (epistemology) is about knowledge filtered through a perspective.",
    },
    {
      id: "u2-intersubjectivist",
      term: "Intersubjectivist epistemology",
      tier: 1,
      plainIdea:
        "Knowledge is shaped by the expert community talking among itself. Good: only trained people can really check hard claims. Bad: a tight club can develop blinders, like a friend group that never hears outside opinions.",
      courseDefinition:
        "An intersubjectivist epistemology emphasizes how scientific perspectives, topics of inquiry, and interpretations are shaped by disciplinary experts in communication with one another. Only a tiny proportion of people are qualified to skeptically examine scientific claims, and communities locked into one perspective can leave crucial phenomena unstudied.",
      freshExample:
        "If every expert on families had trained in the same two schools and all assumed one household type was “normal,” other family forms could go unstudied for years.",
      notToConfuse:
        "“Intersubjective” (ontology) = shared coordination as a thing that exists. “Intersubjectivist” = how expert communities steer what counts as knowledge.",
    },
    {
      id: "u2-objectivist",
      term: "Objectivist epistemology",
      tier: 1,
      thinker: "Nagel (“view from nowhere”)",
      plainIdea:
        "The dream of seeing society from a camera floating outside of it, with no one’s biases. The minimum version is practical (report results you didn’t want); the maximum version — a “view from nowhere” — is impossible, because there is no seat outside society.",
      courseDefinition:
        "An objectivist epistemology seeks to eliminate subjective and intersubjective bias from inquiry, and ultimately achieve a totally independent view of reality. At a minimum: reporting findings even if they show the opposite of what you hoped, and protecting work on unpopular topics. At maximum: a “view from nowhere” (Nagel).",
      freshExample:
        "A research team studying youth sports promises to publish their results even if they show that a program they love doesn’t help kids.",
      notToConfuse:
        "“Objective” (ontology) = large material/social forces that exist. “Objectivist” = a goal for how knowledge should be produced.",
    },
    {
      id: "u2-social-construction",
      term: "Social construction",
      tier: 1,
      thinker: "Hacking",
      plainIdea:
        "Some things are real because we all believe in them and act like they are — a team captain, a wedding anniversary, a class rank. Not fake: the belief is what makes them work, and they have real effects.",
      courseDefinition:
        "Social construction is when a phenomenon is constituted by shared belief in its existence — it exists because of shared belief and people behaving as though it exists. This does not mean individuals can make up whatever they want or that nothing is “real”; most of what we treat as real is a composite of material matter and the meanings we attach to it.",
      freshExample:
        "A varsity letter: it’s just felt, but because everyone at school treats it as meaningful, it really affects status and even college applications.",
      notToConfuse:
        "Not “fake” or “made up by one person.” A private fantasy is subjective; a social construction is shared.",
    },
    {
      id: "u2-micro",
      term: "Micro-level analysis",
      tier: 1,
      plainIdea:
        "Zoom in: people face to face, and the stuff right in front of them — a handshake, a glare, an argument at the table.",
      courseDefinition:
        "Micro-level analysis focuses on face-to-face interactions with other people and interactions with the immediately present world.",
      freshExample:
        "Two strangers at a crowded coffee-shop door doing the “you go first — no, you go” shuffle.",
      notToConfuse:
        "Micro/macro is about SCALE. Subjective/intersubjective/objective is about KIND of thing. A face-to-face chat is micro AND intersubjective.",
    },
    {
      id: "u2-macro",
      term: "Macro-level analysis",
      tier: 1,
      plainIdea:
        "Zoom out: patterns bigger than any face-to-face moment, that keep going even when individual pieces drop out — like a school district that stays a district when one teacher quits.",
      courseDefinition:
        "Macro-level analysis focuses on scales of phenomena beyond the level of face-to-face, direct interaction with the world.",
      freshExample:
        "A national youth-sports league whose age-group rules shape practices in thousands of towns, no matter which coaches come and go.",
      notToConfuse:
        "Macro ≠ objective. Macro is a scale; many macro things (like organizations) are still intersubjective.",
    },
    {
      id: "u2-agency",
      term: "Agency",
      tier: 1,
      plainIdea:
        "The ability to make a difference — to steer. Individuals have it, and so do groups acting together.",
      courseDefinition:
        "Agency is the capacity of some entity to make a difference in the world; the entities doing so are agents. Groups organized collectively can have agency too.",
      freshExample:
        "A club treasurer pushes through a new budget rule that changes which events the club can afford.",
      notToConfuse:
        "Not “an agency” (like a government office). Its partner is structure — the patterns that constrain and set outcomes.",
    },
    {
      id: "u2-structure",
      term: "Structure",
      tier: 1,
      plainIdea:
        "The patterned setup you’re handed and have to choose within — like the board and rules of a game you didn’t design.",
      courseDefinition:
        "Structures are patterned social phenomena that determine individual or collective outcomes — factors we encounter as given, not chosen, and then must make our choices within.",
      freshExample:
        "Whether your high school offered any advanced courses shapes which college majors look possible to you, however hard you work.",
      notToConfuse:
        "Not a building. And not the same as “macro”: structure is about patterns that set outcomes; macro is about scale.",
    },
    {
      id: "u2-social-order",
      term: "Social order",
      tier: 2,
      plainIdea:
        "Patterned group life keeps growing back, like grass through cracks. Even after a disaster, people quickly form some shared routine.",
      courseDefinition:
        "Social order seems generally resilient, or at least resistant, to total destruction: no matter the war, disaster, or calamity, some form of patterned collective activity based on a shared understanding of the situation seems to emerge.",
      freshExample:
        "After a hospital cafeteria closes for renovation, staff quickly settle into a shared routine of who orders food for whom and where people eat.",
      notToConfuse:
        "Not “law and order” or obedience. Its partner is social change: specific structures do shift, sometimes fast.",
    },
    {
      id: "u2-social-change",
      term: "Social change",
      tier: 3,
      plainIdea:
        "Specific structures do shift — sometimes slowly, sometimes within a few years — even though patterned life as a whole persists.",
      courseDefinition:
        "Specific social structures sometimes change, and sometimes they do so quite rapidly. The notes flag two world-historical changes: the rise of capitalism and rationalization.",
      freshExample:
        "Over a few years, a neighborhood’s kids stop playing pickup games in the street and start meeting mostly in online games.",
      notToConfuse:
        "Social order = patterned life is resilient; social change = particular patterns get replaced.",
    },
    {
      id: "u2-commodity",
      term: "Commodity",
      tier: 3,
      plainIdea:
        "Something made to be sold for profit. Capitalism’s trick is turning more and more things into sellable products.",
      courseDefinition:
        "Things produced, marketed, and sold at a profit; the spread of new technologies required the ability to sell them as commodities, part of the long-term rise to dominance of capitalism.",
      freshExample:
        "A knitting hobby becomes an online shop selling scarves for profit.",
      notToConfuse:
        "Not only raw goods like wheat or oil (the finance meaning). In the notes it marks the capitalist logic of producing for profit.",
    },
    {
      id: "u2-rationalization",
      term: "Rationalization",
      tier: 2,
      thinker: "Weber (named in Unit 4)",
      plainIdea:
        "Calculation creeping into more and more corners of life — timing, measuring, and spelling out purposes where people used to just do things.",
      courseDefinition:
        "Rationalization is a world-historical process, loosely related to capitalism, involving the use of calculation to think about an increasing number of aspects of our lives. It entails both formal rationalization and substantive rationalization.",
      freshExample:
        "A friend group that once hung out whenever now uses a shared calendar, a poll for dates, and a spreadsheet for splitting costs.",
      notToConfuse:
        "Not “making excuses” (the psychology/everyday sense). Two kinds: formal (efficiency) vs. substantive (explicit purposes).",
    },
    {
      id: "u2-formal-rationalization",
      term: "Formal rationalization",
      tier: 2,
      plainIdea:
        "The stopwatch side of rationalization: making action as efficient as possible for a given goal.",
      courseDefinition:
        "Formal rationalization is the subjection of action to means-ends efficiency logic.",
      freshExample:
        "A warehouse measures how many seconds each packing step takes and redesigns the line to cut the slowest steps.",
      notToConfuse:
        "Substantive rationalization is about spelling out WHAT the action is for, not how efficiently it’s done.",
    },
    {
      id: "u2-substantive-rationalization",
      term: "Substantive rationalization",
      tier: 2,
      plainIdea:
        "The mission-statement side of rationalization: writing down explicit purposes for things that used to just happen.",
      courseDefinition:
        "Substantive rationalization is the articulation of explicit purposes for action in more and more domains of life.",
      freshExample:
        "A youth soccer league publishes a statement that its games exist “to build friendship and confidence,” not just to win.",
      notToConfuse:
        "Formal rationalization is about efficiency (means to an end); substantive is about naming the ends themselves.",
    },
  ],

  contrastSets: [
    {
      id: "u2-cs-ont-epi",
      title: "Ontology vs. epistemology",
      conceptIds: ["u2-ontology", "u2-epistemology"],
      axis: "What exists vs. how we know (and verify) what exists.",
      test: "Is the question “what is it made of / is it real?” (ontology) or “what evidence would convince us?” (epistemology)?",
    },
    {
      id: "u2-cs-consensus",
      title: "The two consensus commitments: naturalism vs. skeptical attitude",
      conceptIds: ["u2-naturalistic-explanation", "u2-skeptical-attitude"],
      axis: "Naturalism limits WHICH causes are allowed (only things in the world); skepticism is about HOW HARD claims get tested (most rigorous scrutiny, by qualified communities). Both are epistemological.",
      test: "Is someone rejecting a supernatural cause (naturalism), or refusing to accept a claim just because of who said it (skepticism)?",
    },
    {
      id: "u2-cs-realism-empiricism",
      title: "Realism vs. empiricism (with instrumentation as the bridge)",
      conceptIds: ["u2-empiricism", "u2-realism", "u2-instrumentation"],
      axis: "Directly sensing the thing (empiricism) vs. reasoning backwards from observable traces to a real thing you can’t see whole (realism). Instruments extend observation to what senses can’t reach, bridging the two.",
      test: "Could one person see/touch the whole thing? Yes → empiricism. No, only its traces → realism. Using a reliable tool or procedure to get at it → instrumentation.",
    },
    {
      id: "u2-cs-reduction-emergence",
      title: "Analytic reduction vs. emergence",
      conceptIds: ["u2-analytic-reduction", "u2-emergence"],
      axis: "Explain the whole through its smallest parts vs. study the new properties that appear at a higher level, without going down to lower levels.",
      test: "Is the person saying “break it into its components” (reduction) or “this level has its own properties worth studying directly” (emergence)?",
    },
    {
      id: "u2-cs-ontology-levels",
      title: "Subjective / intersubjective / objective (ONTOLOGY)",
      conceptIds: ["u2-subjective", "u2-intersubjective", "u2-objective"],
      axis: "What level of reality: inside one mind vs. shared and coordinated between people vs. material and large-scale forces beyond coordinated action.",
      test: "Where does the thing live — in one head, in people’s shared agreement and coordination, or in forces that hit everyone regardless of belief?",
    },
    {
      id: "u2-cs-epistemology-positions",
      title: "Subjectivist / intersubjectivist / objectivist (EPISTEMOLOGY)",
      conceptIds: ["u2-subjectivist", "u2-intersubjectivist", "u2-objectivist"],
      axis: "Whose view produces knowledge (and bias): one individual’s or one group’s perspective vs. the expert community in conversation vs. an attempt to strip away both toward a “view from nowhere.”",
      test: "Is the worry (or strength) one person’s vantage point, a disciplinary community’s shared blinders, or the goal of eliminating both?",
    },
    {
      id: "u2-cs-subjective-subjectivist",
      title: "Subjective (ontology) vs. subjectivist (epistemology)",
      conceptIds: ["u2-subjective", "u2-subjectivist"],
      axis: "“Subjective” names a KIND OF THING that exists (inner states). “Subjectivist” names a WAY OF KNOWING that runs through one perspective.",
      test: "Is the sentence about what someone feels/intends (subjective) or about how a researcher’s perspective shapes the knowledge produced (subjectivist)?",
      crossUnit: true,
    },
    {
      id: "u2-cs-ist-pairs",
      title: "Intersubjective vs. intersubjectivist; objective vs. objectivist",
      conceptIds: ["u2-intersubjective", "u2-intersubjectivist", "u2-objective", "u2-objectivist"],
      axis: "Plain adjective = a level of reality (ontology). The “-ist” form = a stance on how knowledge is produced (epistemology).",
      test: "Does the “-ist” ending appear? Then it’s about knowing, not about what exists.",
      crossUnit: true,
    },
    {
      id: "u2-cs-tensions",
      title: "Realism/empiricism (how we know) vs. reduction/emergence (what exists)",
      conceptIds: ["u2-realism", "u2-empiricism", "u2-analytic-reduction", "u2-emergence"],
      axis: "Realism vs. empiricism is heavily epistemological (can we trust unobservables inferred from traces?). Reduction vs. emergence is ontological (which level of reality is fundamental?).",
      test: "Is the disagreement about what counts as evidence (realism/empiricism) or about which level things really exist at (reduction/emergence)?",
      crossUnit: true,
    },
    {
      id: "u2-cs-scale-vs-kind",
      title: "Micro/macro (scale) vs. subjective/intersubjective/objective (kind of thing)",
      conceptIds: ["u2-micro", "u2-macro", "u2-subjective", "u2-intersubjective", "u2-objective"],
      axis: "Micro/macro = how big the scale is (face-to-face vs. beyond it). Subjective/intersubjective/objective = what kind of reality it is. Sociology’s usual object, intersubjective phenomena, occurs at BOTH scales.",
      test: "Ask two separate questions: “Is it face-to-face?” (micro/macro) and “Is it in a head, between people, or a material/large-scale force?”",
      crossUnit: true,
    },
    {
      id: "u2-cs-micro-macro",
      title: "Micro vs. macro",
      conceptIds: ["u2-micro", "u2-macro"],
      axis: "Face-to-face interaction and the immediately present world vs. phenomena at scales beyond direct interaction.",
      test: "Would the thing keep existing if any one face-to-face encounter disappeared? If yes, you’re looking at macro.",
    },
    {
      id: "u2-cs-agency-structure",
      title: "Agency vs. structure",
      conceptIds: ["u2-agency", "u2-structure"],
      axis: "Capacity to make a difference vs. patterned phenomena, encountered as given, that determine outcomes.",
      test: "Is the story about someone (or some group) changing things, or about a pattern that set the options before anyone chose?",
    },
    {
      id: "u2-cs-order-change",
      title: "Social order vs. social change",
      conceptIds: ["u2-social-order", "u2-social-change"],
      axis: "Patterned collective life is resilient and re-emerges after calamity vs. specific structures get replaced, sometimes quickly.",
      test: "Is the point that shared patterns come back / persist (order) or that a particular pattern shifted (change)?",
    },
    {
      id: "u2-cs-rationalization",
      title: "Formal vs. substantive rationalization",
      conceptIds: ["u2-formal-rationalization", "u2-substantive-rationalization", "u2-rationalization"],
      axis: "Means-ends efficiency logic vs. spelling out explicit purposes for action in more domains of life.",
      test: "Is calculation being used to do it FASTER/CHEAPER (formal) or to state WHAT IT’S FOR (substantive)?",
    },
    {
      id: "u2-cs-construction-subjective",
      title: "Social construction vs. merely subjective belief",
      conceptIds: ["u2-social-construction", "u2-subjective", "u2-intersubjective"],
      axis: "A social construction is constituted by SHARED belief and people acting on it; one person’s private belief is subjective and doesn’t construct anything by itself.",
      test: "If only one person believed in it, would it still work? If not, and it works because many do, it’s a social construction.",
    },
    {
      id: "u2-cs-u1-troubles-micro",
      title: "Troubles/issues (Unit 1) vs. micro/macro (Unit 2)",
      conceptIds: ["u1-troubles", "u1-issues", "u2-micro", "u2-macro"],
      axis: "Troubles/issues describe how the effects of social forces are perceived — as personal psychological effects vs. at the level of social categories. Micro/macro describe the scale of the phenomenon being analyzed.",
      test: "Is it about how someone experiences the effects of social forces (troubles/issues), or about face-to-face vs. beyond-face-to-face scale (micro/macro)?",
      crossUnit: true,
    },
    {
      id: "u2-cs-u1-force-structure",
      title: "Social force (Unit 1) vs. structure and agency (Unit 2)",
      conceptIds: ["u1-social-force", "u2-structure", "u2-agency"],
      axis: "A social force is an action (by a person or group) that brings about a state of affairs an individual perceives as external. Structure is the patterned phenomenon that determines outcomes; agency is the capacity to make a difference.",
      test: "Is it a specific action felt as outside pressure (social force), a durable pattern setting outcomes (structure), or a capacity to change things (agency)?",
      crossUnit: true,
    },
    {
      id: "u2-cs-u1-reflexivity-objectivist",
      title: "Reflexivity (Unit 1) and the limits of objectivism",
      conceptIds: ["u1-reflexivity", "u2-objectivist", "u2-subjectivist"],
      axis: "Because people react to their understandings of the world (reflexivity) and no one stands outside society, a complete “view from nowhere” is impossible; a researcher’s own position, used reflexively, can instead be a source of knowledge.",
      test: "Does the claim assume the researcher can stand outside society (objectivist maximum) or use their position deliberately (reflexive subjectivity)?",
      crossUnit: true,
    },
  ],

  falseFriends: [
    {
      id: "u2-ff-construction",
      conceptId: "u2-social-construction",
      term: "Social construction",
      everyday: "Something fake, made up, or “just a social construct” so it doesn’t matter.",
      course: "A real phenomenon constituted by shared belief in its existence and people acting as though it exists — with very real effects.",
      trap: "You’ll pick answers saying a social construction “isn’t real” or that individuals can “just decide” it away. The notes explicitly reject both.",
    },
    {
      id: "u2-ff-structure",
      conceptId: "u2-structure",
      term: "Structure",
      everyday: "A building, a physical framework, or an outline.",
      course: "Patterned social phenomena that determine individual or collective outcomes — the givens you make choices within.",
      trap: "Picturing bricks or an org chart makes you miss that class background, national origin, or local job availability are structures.",
    },
    {
      id: "u2-ff-social-order",
      conceptId: "u2-social-order",
      term: "Social order",
      everyday: "Law and order; police; people obeying the rules.",
      course: "Patterned collective activity based on a shared understanding of the situation — resilient, re-emerging even after calamities.",
      trap: "You may choose options about enforcement or obedience. Order in the notes is about patterned coordination re-forming, not punishment.",
    },
    {
      id: "u2-ff-realism",
      conceptId: "u2-realism",
      term: "Realism",
      everyday: "Being realistic, practical, or pessimistic about your chances.",
      course: "Reasoning backwards from observable traces of a phenomenon to assess its structure and general effects.",
      trap: "A question about inferring an invisible pattern from its traces is realism — even if nobody in it is being “realistic.”",
    },
    {
      id: "u2-ff-agency",
      conceptId: "u2-agency",
      term: "Agency",
      everyday: "An organization like a talent agency, travel agency, or government agency.",
      course: "The capacity of some entity to make a difference in the world.",
      trap: "Seeing “agency” and thinking of an office. It’s a capacity — though a group acting together can have it.",
    },
    {
      id: "u2-ff-emergence",
      conceptId: "u2-emergence",
      term: "Emergence",
      everyday: "An emergency, or something coming into view (“the sun emerged”).",
      course: "New properties arising at a higher level of complexity that can be studied without reference to lower levels.",
      trap: "Emergence is an ontological stance opposed to analytic reduction, not a crisis or a sudden appearance.",
    },
    {
      id: "u2-ff-rationalization",
      conceptId: "u2-rationalization",
      term: "Rationalization",
      everyday: "Making excuses for something you did (“you’re just rationalizing”).",
      course: "The spread of calculation into more and more aspects of life — formal (efficiency) and substantive (explicit purposes).",
      trap: "A stem about timing, measuring, or writing mission statements is rationalization; a stem about someone excusing themselves is not.",
    },
    {
      id: "u2-ff-objective",
      conceptId: "u2-objective",
      term: "Objective",
      everyday: "Unbiased, fair, neutral.",
      course: "As ONTOLOGY: non-human material and large-scale social forces affecting society. The “unbiased” idea belongs to the objectivist EPISTEMOLOGY.",
      trap: "Mixing the two makes you call an earthquake “unbiased” or a neutral researcher an “objective ontology.”",
    },
    {
      id: "u2-ff-subjective",
      conceptId: "u2-subjective",
      term: "Subjective",
      everyday: "Just an opinion, so it doesn’t count.",
      course: "People’s interior states of mind, beliefs, and intentions — a real (if hard-to-observe) level of reality.",
      trap: "Calling something subjective doesn’t make it unimportant or unstudiable; it names where it exists.",
    },
    {
      id: "u2-ff-skeptical",
      conceptId: "u2-skeptical-attitude",
      term: "Skeptical attitude",
      everyday: "Cynicism; doubting everything; “do your own research.”",
      course: "Communities of scientists subjecting claims to the most rigorous examination possible — not anyone being equally qualified to question findings.",
      trap: "Options saying skepticism means every person should second-guess scientists are wrong: only a tiny proportion are qualified.",
    },
    {
      id: "u2-ff-macro",
      conceptId: "u2-macro",
      term: "Macro",
      everyday: "Macronutrients, macroeconomics, a keyboard shortcut — or just “big.”",
      course: "Scales of phenomena beyond face-to-face, direct interaction with the world.",
      trap: "Macro isn’t just “important” or “objective”; it’s about scale beyond face-to-face encounters.",
    },
    {
      id: "u2-ff-commodity",
      conceptId: "u2-commodity",
      term: "Commodity",
      everyday: "A raw good traded in bulk, like oil or wheat, or anything cheap and interchangeable.",
      course: "Something produced, marketed, and sold at a profit — marking capitalism’s spread.",
      trap: "A high-tech product or a service can be a commodity in the notes’ sense if it’s produced to sell for profit.",
    },
  ],

  magnitudes: [
    {
      id: "u2-mag-science-age",
      prompt: "About how old is modern science?",
      answer: "About 500 years (depending on how you count).",
      whyItMatters:
        "Science is a recent, historically specific way of knowing, not a timeless one — its consensus on naturalism and skepticism had to grow over a few centuries.",
    },
    {
      id: "u2-mag-particles",
      prompt: "How many fundamental particles does physics recognize, per the notes?",
      answer: "A small handful — seventeen.",
      whyItMatters:
        "This is analytic reduction at its extreme: everything everywhere is made of fewer than twenty kinds of thing. Yet climbing back up from them to something like a social institution is so hard that sciences study emergent levels instead.",
    },
    {
      id: "u2-mag-qualified",
      prompt: "What share of the population is qualified to skeptically examine cutting-edge scientific claims?",
      answer: "A tiny proportion.",
      whyItMatters:
        "Skepticism is a community practice of trained experts, not something everyone can do equally — which is exactly why intersubjectivist blinders are a real risk.",
    },
    {
      id: "u2-mag-ladder",
      prompt: "Of the steps from quantum particles up to a complex social phenomenon, how many are well understood?",
      answer: "Almost none — the notes say only one of the six (atoms → molecules).",
      whyItMatters:
        "Going all the way up would exhaust a lifetime for a single phenomenon, which is why disciplines settle at an emergent level.",
    },
    {
      id: "u2-mag-observable",
      prompt: "How much of a world-spanning social structure can one person directly observe?",
      answer: "Only parts and traces — never the whole.",
      whyItMatters:
        "That’s why sociology leans on realism and instrumentation rather than pure empiricism.",
    },
  ],

  questions: [
    // ───────────── CONCEPTUAL ─────────────
    {
      id: "u2-q01",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-ontology", "u2-epistemology"],
      stem: "A philosopher asks: “What are the smallest, most basic parts of the world, and how do they combine into everything that exists?” What kind of question is this?",
      options: [
        { text: "Ontology", correct: true, why: "Ontology is the study of the world’s basic building blocks and how they combine — exactly the “what exists?” question." },
        { text: "Epistemology", why: "Epistemology asks how we know and verify what exists. This question is about what exists, not about evidence." },
        { text: "Empiricism", why: "Empiricism is one epistemological approach (direct sensory observation), not the general question of what the world is made of." },
        { text: "Instrumentation", why: "Instrumentation means the tools and procedures used to measure hard-to-observe things, not a philosophical question about the world’s parts." },
      ],
    },
    {
      id: "u2-q02",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-epistemology", "u2-ontology"],
      stem: "Two researchers agree a campus has a “hookup culture,” but argue about whether a survey, interviews, or watching parties would give trustworthy evidence of it. Their disagreement is mainly one of…",
      options: [
        { text: "Ontology", why: "They already agree the thing exists. Ontology would be the argument over whether and at what level it exists." },
        { text: "Epistemology", correct: true, why: "They’re arguing about ways of knowing and verifying — which evidence is trustworthy. That’s epistemology." },
        { text: "Analytic reduction", why: "Reduction is an ontological claim that wholes are best studied through their parts; no one here is breaking the culture into components." },
        { text: "Social order", why: "Social order is about patterned collective life re-forming and persisting, not about which research method is trustworthy." },
      ],
    },
    {
      id: "u2-q03",
      skill: "conceptual",
      format: "mc",
      trap: "not-all",
      tier: 1,
      conceptIds: ["u2-naturalistic-explanation", "u2-skeptical-attitude", "u2-analytic-reduction", "u2-science"],
      stem: "According to the notes, a strong consensus has grown around two epistemological commitments since modern science emerged. Which of the following is NOT one of them?",
      fixedOrder: true,
      options: [
        { text: "Naturalistic explanation", why: "This IS one of the two: explain things only by other things and processes in the world, not supernatural forces." },
        { text: "A skeptical attitude toward existing explanations about the world", why: "This IS one of the two: subject claims to the most rigorous scrutiny possible." },
        { text: "Analytic reduction of everything to fundamental particles", correct: true, why: "Reduction is an ontological stance that different sciences take or reject — it’s one side of a tension within science, not a consensus commitment." },
        { text: "These are all consensus commitments of modern science", why: "Only two are consensus commitments. Reduction vs. emergence is described as a divergence among sciences, not a point of agreement." },
      ],
    },
    {
      id: "u2-q04",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-realism", "u2-empiricism", "u2-emergence"],
      stem: "Which term names the scientific approach of reasoning backwards from observable traces of a phenomenon to assess its structure and general effects in the world?",
      options: [
        { text: "Empiricism", why: "Empiricism relies on directly sensing the thing itself, not inferring an unobservable thing from its traces." },
        { text: "Emergence", why: "Emergence is an ontological idea about new properties at higher levels, not a method of inference from traces." },
        { text: "Realism", correct: true, why: "This is the notes’ definition of realism: the thing is real because it has observable effects, and you work backwards from them." },
        { text: "Naturalistic explanation", why: "Naturalism says explanations must stay within the natural world; it doesn’t specify reasoning backwards from traces." },
      ],
    },
    {
      id: "u2-q05",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u2-instrumentation", "u2-realism", "u2-empiricism"],
      stem: "The notes describe a large gulf between what we can directly observe and real processes we can’t observe. What do they say is a key way scientists bridge that gap?",
      options: [
        { text: "Instrumentation", correct: true, why: "The notes call instrumentation the bridge between the directly observable (empiricism) and real-but-unobservable processes (realism)." },
        { text: "Naturalistic explanation", why: "Naturalism rules out supernatural causes, but doesn’t by itself let you measure unobservable things." },
        { text: "Analytic reduction", why: "Reduction breaks wholes into parts — an ontological stance, not a bridge between observation and inference." },
        { text: "An objectivist view from nowhere", why: "The view from nowhere is the maximal (and impossible) goal of objectivist epistemology, not the practical bridge the notes describe." },
      ],
    },
    {
      id: "u2-q06",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-emergence", "u2-analytic-reduction", "u2-macro"],
      stem: "“The unfolding of new properties and higher levels of complexity, which can be studied without reference to lower levels.” Which concept is this?",
      options: [
        { text: "Analytic reduction", why: "Reduction is the opposite: it says complex things are best studied through their smaller components." },
        { text: "Macro-level analysis", why: "Macro is about scale beyond face-to-face interaction. Emergence is the broader ontological idea that any higher level can have its own properties." },
        { text: "Social construction", why: "Social construction is about a phenomenon existing through shared belief, not about levels of complexity in general." },
        { text: "Emergence", correct: true, why: "This is the notes’ definition of emergence — you can study the higher level on its own terms." },
      ],
    },
    {
      id: "u2-q07",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-realism", "u2-empiricism", "u2-analytic-reduction", "u2-emergence", "u2-epistemology", "u2-ontology"],
      stem: "The notes describe realism vs. empiricism and reduction vs. emergence as two tensions within science. Which pairing correctly describes what each tension is mainly about?",
      options: [
        { text: "Realism vs. empiricism is mainly epistemological; reduction vs. emergence is mainly ontological", correct: true, why: "Realism/empiricism is about how we can know (direct senses vs. inference from traces); reduction/emergence is about which level of reality is fundamental." },
        { text: "Realism vs. empiricism is mainly ontological; reduction vs. emergence is mainly epistemological", why: "This flips them. Whether you trust inference from traces is a question of knowing; which level is fundamental is a question of being." },
        { text: "Both are mainly about researcher bias", why: "Researcher bias is the subjectivist/intersubjectivist/objectivist discussion, a different part of the notes." },
        { text: "Both are mainly about whether supernatural causes are allowed", why: "That’s naturalism, which all sciences agree on — it isn’t one of the tensions." },
      ],
    },
    {
      id: "u2-q08",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-intersubjective", "u2-intersubjectivist", "u2-subjective", "u2-macro"],
      stem: "Which term do the notes use for an ONTOLOGY that concentrates on the shared beliefs, goals, and intentions of groups of people coordinating their action?",
      options: [
        { text: "Intersubjectivist", why: "Close, but the “-ist” form is the EPISTEMOLOGY — how expert communities shape knowledge. The question asks about a level of reality." },
        { text: "Subjective", why: "Subjective ontology is about one person’s interior states, not shared coordination." },
        { text: "Intersubjective", correct: true, why: "Intersubjective ontology = shared beliefs and coordination between people, the level sociology usually studies." },
        { text: "Macro", why: "Macro is a scale (beyond face-to-face). Shared coordination can be micro or macro." },
      ],
    },
    {
      id: "u2-q09",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-objectivist", "u2-objective", "u2-skeptical-attitude", "u2-subjectivist"],
      stem: "Which epistemology seeks to eliminate subjective and intersubjective bias from inquiry and, ultimately, to achieve a totally independent view of reality?",
      options: [
        { text: "An objective ontology", why: "Objective ONTOLOGY names material and large-scale forces as a level of reality — it’s not a goal for knowledge." },
        { text: "An objectivist epistemology", correct: true, why: "That’s the notes’ definition: strip out both kinds of bias, at maximum reaching a “view from nowhere.”" },
        { text: "A subjectivist epistemology", why: "Subjectivist knowledge runs THROUGH a perspective — the opposite of trying to eliminate perspective." },
        { text: "The skeptical attitude", why: "Skepticism means rigorously testing claims; it doesn’t claim to reach a perspective-free view of reality." },
      ],
    },
    {
      id: "u2-q10",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-intersubjectivist", "u2-intersubjective", "u2-subjectivist", "u2-objectivist"],
      stem: "Which epistemology emphasizes how scientific perspectives, topics, and interpretations are shaped by disciplinary experts communicating with one another?",
      options: [
        { text: "Subjectivist", why: "Subjectivist is about one individual’s (or one category’s) perspective, not a community of experts." },
        { text: "Objectivist", why: "Objectivist tries to eliminate community steering, not emphasize it." },
        { text: "Intersubjective", why: "Intersubjective (no “-ist”) is the ontology of shared coordination in general, not the epistemology of expert communities." },
        { text: "Intersubjectivist", correct: true, why: "That’s the notes’ definition — knowledge shaped by experts in conversation, with both the benefit (expert scrutiny) and risk (blinders)." },
      ],
    },
    {
      id: "u2-q11",
      skill: "conceptual",
      format: "mc",
      trap: "reversal",
      tier: 1,
      conceptIds: ["u2-objectivist", "u1-reflexivity"],
      stem: "According to the notes, why is the maximal objectivist goal — a completely detached “view from nowhere” — unreachable for social science?",
      options: [
        { text: "Because there’s no position outside society to study it from", correct: true, why: "The notes say plainly there is no such position, and many social phenomena are only accessible from particular social positions." },
        { text: "Because social scientists don’t yet have precise enough instruments", why: "The problem isn’t instrument precision; better tools don’t lift anyone out of society." },
        { text: "Because social phenomena aren’t real, so there’s nothing to view", why: "The notes insist social phenomena are real (e.g., social constructions) — the issue is the viewer’s position, not the object’s reality." },
        { text: "Because naturalistic explanation forbids trying to be neutral", why: "Naturalism only rules out supernatural causes; it says nothing against neutrality." },
      ],
    },
    {
      id: "u2-q12",
      skill: "conceptual",
      format: "mc",
      tier: 2,
      conceptIds: ["u2-objectivist", "u2-intersubjectivist"],
      stem: "Faced with the objection that no one can stand outside society, what do defenders of objectivism typically respond, according to the notes?",
      options: [
        { text: "That researchers should give up on objectivity entirely and simply state their personal opinions", why: "The notes reject this: social science is not “asserting opinions and calling them facts.”" },
        { text: "That we should aspire to be as objective as possible and welcome outsider views", correct: true, why: "This is the defenders’ response in the notes — aim for objectivity and widen the intersubjective conversation." },
        { text: "That only a single discipline should be allowed to judge findings", why: "That would deepen intersubjectivist blinders — the opposite of the response." },
        { text: "That a state law should define the correct account of society", why: "The notes argue that mandating an “undistorted” account is itself ideological and biasing." },
      ],
    },
    {
      id: "u2-q13",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u2-social-construction"],
      stem: "In the notes’ sense, calling something a “social construction” means that…",
      options: [
        { text: "It is fake — a made-up idea with no real effects on anyone’s life or choices", why: "This is the everyday reading the notes explicitly reject. Constructed things are real and consequential." },
        { text: "Any individual can make it mean whatever they want", why: "The notes say construction does NOT mean individuals can make up whatever they want — it depends on SHARED belief." },
        { text: "It exists through shared belief in it, and people acting as though it exists", correct: true, why: "That’s the definition: shared belief plus behavior makes the thing exist and work." },
        { text: "It was physically built by construction workers", why: "A joke reading of “construction” — the concept is about belief and meaning, not buildings." },
      ],
    },
    {
      id: "u2-q14",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-macro", "u2-micro", "u2-objective", "u2-structure"],
      stem: "Which concept names analysis focused on scales of phenomena beyond the level of face-to-face, direct interaction with the world?",
      options: [
        { text: "Micro-level analysis", why: "Micro is the face-to-face level — the opposite." },
        { text: "Objective ontology", why: "Objective names a KIND of reality (material and large-scale forces), not a scale of analysis. Many macro things are intersubjective." },
        { text: "Macro-level analysis", correct: true, why: "This is the notes’ definition of macro." },
        { text: "Structure", why: "Structures are patterned phenomena that determine outcomes; they can be analyzed at various scales. The definition given is about scale." },
      ],
    },
    {
      id: "u2-q15",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-agency", "u2-structure", "u1-social-force", "u2-social-change"],
      stem: "Which concept is defined in the notes as “the capacity of some entity to make a difference in the world”?",
      options: [
        { text: "Structure", why: "Structure is the opposite pole: patterned phenomena that determine outcomes." },
        { text: "Agency", correct: true, why: "That’s the definition of agency; the entities doing it — individuals or groups — are agents." },
        { text: "Social force (Unit 1)", why: "A social force is an action that brings about a state of affairs an individual perceives as external — it’s about how pressure is felt, not the capacity itself." },
        { text: "Social change", why: "Social change is structures shifting over time, not a capacity of an entity." },
      ],
    },
    {
      id: "u2-q16",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u2-structure", "u2-agency"],
      stem: "When sociologists talk about “structures,” what do the notes mean?",
      options: [
        { text: "Buildings and physical infrastructure", why: "Everyday meaning. The notes’ structures are patterned SOCIAL phenomena, like social class or national origin." },
        { text: "The written organizational chart that shows who reports to whom in a company", why: "Too narrow and formal — structures include things no one wrote down, like the class you’re born into." },
        { text: "Patterned social phenomena that determine individual or collective outcomes", correct: true, why: "That’s the definition: givens we don’t choose that shape outcomes and within which we choose." },
        { text: "The capacity of people to make a difference in the world", why: "That’s agency, structure’s partner concept." },
      ],
    },
    {
      id: "u2-q17",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 2,
      conceptIds: ["u2-social-order", "u2-social-change"],
      stem: "What do the notes mean when they say social order is “generally resilient”?",
      options: [
        { text: "Police, courts, and schools usually manage to keep most people obeying the laws and rules of society", why: "That’s the everyday “law and order” reading. The notes don’t talk about enforcement here." },
        { text: "Specific social structures never change", why: "The notes say the opposite: specific structures sometimes change, even quickly." },
        { text: "After wars or disasters, patterned shared activity re-emerges", correct: true, why: "That’s the notes’ point: patterned, shared coordination keeps re-forming." },
        { text: "People generally feel their cherished values are unthreatened", why: "That’s Mills’ “well-being” cell from Unit 1, about individuals’ values, not social order." },
      ],
    },
    {
      id: "u2-q18",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 2,
      conceptIds: ["u2-rationalization", "u2-formal-rationalization", "u2-substantive-rationalization"],
      stem: "In the notes, “rationalization” refers to…",
      options: [
        { text: "Making up excuses to justify something you already did", why: "That’s the everyday/psychology meaning — a classic false friend." },
        { text: "Calculation applied to more and more aspects of life", correct: true, why: "That’s the notes’ world-historical process, which has a formal (efficiency) and substantive (explicit purposes) side." },
        { text: "Becoming calmer and less emotional over time", why: "Rationalization isn’t a mood or personality change; it’s calculation spreading into social life." },
        { text: "Turning goods and services into things sold for profit", why: "That’s commodification under capitalism — related, but a separate trend in the notes." },
      ],
    },
    {
      id: "u2-q19",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u2-formal-rationalization", "u2-substantive-rationalization"],
      stem: "Which condition is “the articulation of explicit purposes for action in more and more domains of life”?",
      options: [
        { text: "Formal rationalization", why: "Formal rationalization is means-ends efficiency logic — how to reach a goal most efficiently, not spelling out the goal." },
        { text: "Substantive rationalization", correct: true, why: "Substantive = stating explicit purposes (the ends themselves) in more areas of life." },
        { text: "Social construction", why: "Social construction is about things existing by shared belief, not about spelling out purposes." },
        { text: "Naturalistic explanation", why: "Naturalism is a scientific commitment about causes, unrelated to articulating purposes." },
      ],
    },
    {
      id: "u2-q20",
      skill: "conceptual",
      format: "mc",
      tier: 1,
      conceptIds: ["u2-ontology", "u2-analytic-reduction", "u2-emergence"],
      stem: "According to the notes, what partly defines the difference between scientific disciplines (like physics, psychology, and sociology)?",
      options: [
        { text: "Which ontological level each assumes is fundamental to its studies", correct: true, why: "The notes say disciplines are partly defined by the ontological level they treat as fundamental — “centers of gravity” their work orbits." },
        { text: "Whether they accept naturalistic explanation", why: "All sciences share naturalism; it’s a point of consensus, not a divider." },
        { text: "Whether they use any instruments at all", why: "Instruments appear in every science (the notes compare a survey with a space telescope)." },
        { text: "Which one has discovered the single correct view of reality for all time", why: "The author refuses to say any level is “right”; his stance is pragmatic." },
      ],
    },
    {
      id: "u2-q21",
      skill: "conceptual",
      format: "mc",
      trap: "reversal",
      tier: 1,
      conceptIds: ["u2-emergence", "u2-analytic-reduction"],
      stem: "What is the author’s stated position on whether reduction or emergence is the correct approach?",
      options: [
        { text: "Reduction is always correct, since everything is made of fundamental particles", why: "The author calls reduction powerful but never says it’s always best — it makes some phenomena harder to study." },
        { text: "Emergence is always correct, since sociology studies higher levels", why: "He explicitly says he has not asserted that either is always best." },
        { text: "Pragmatic: different ontological perspectives are useful for different things", correct: true, why: "He says the question is what each allows and forbids, not which is correct for all time." },
        { text: "The question is meaningless because ontology isn’t part of science", why: "The notes build science on ontology and epistemology; ontology is central." },
      ],
    },
    {
      id: "u2-q22",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-social-construction", "u2-subjective", "u2-intersubjective"],
      stem: "What separates a social construction from a purely subjective belief?",
      options: [
        { text: "A social construction must be written into law", why: "Many constructions (a birthday tradition, a friendship) aren’t legal at all." },
        { text: "It rests on SHARED belief and action; a subjective belief lives in one mind", correct: true, why: "Sharing is the key word: construction works because many believe and behave accordingly." },
        { text: "A social construction is fake while a subjective belief is real", why: "Both halves are wrong: constructions are real in their effects, and the distinction is about shared vs. private, not fake vs. real." },
        { text: "A social construction is always macro-level, while subjective beliefs are always micro-level", why: "Micro/macro is about scale; constructions can exist between two people or across a nation." },
      ],
    },
    {
      id: "u2-q23",
      skill: "conceptual",
      format: "mc",
      tier: 2,
      conceptIds: ["u2-social-change", "u2-commodity", "u2-rationalization"],
      stem: "The notes single out two world-historical changes that sociologists trace through the course. Which pair is it?",
      options: [
        { text: "Capitalism’s rise and rationalization", correct: true, why: "The notes name capitalism’s long-term rise to dominance and the loosely related process of rationalization." },
        { text: "The invention of the telescope and the discovery of fundamental particles", why: "These appear as science examples, not as the world-historical social changes." },
        { text: "The spread of naturalism and the decline of skepticism", why: "Naturalism and skepticism are both consensus scientific commitments, and skepticism hasn’t “declined” in the notes." },
        { text: "The rise of micro-level analysis and the fall of macro-level analysis", why: "Micro and macro are levels of analysis, both still used — not historical changes." },
      ],
    },
    {
      id: "u2-q24",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-subjectivist", "u2-intersubjectivist", "u2-objectivist"],
      stem: "A critic worries that a whole research field has become locked into a single collective perspective, so its expertise has turned into blinders. Which kind of bias is the critic describing?",
      options: [
        { text: "Subjectivist bias", why: "That’s knowledge distorted by one person’s (or one category’s) perspective, not a whole field’s." },
        { text: "Intersubjectivist bias", correct: true, why: "The notes warn that expert communities locked into one perspective can leave crucial phenomena unstudied — an intersubjectivist problem." },
        { text: "Objectivist bias", why: "Objectivism is the attempt to REMOVE subjective and intersubjective bias, not a type of bias." },
        { text: "Empiricist bias", why: "Empiricism is about direct observation; the problem here is community perspective, not observation method." },
      ],
    },

    // ───────────── APPLICATION ─────────────
    {
      id: "u2-q25",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-empiricism", "u2-realism", "u2-instrumentation"],
      stem: "A new RA wants to know whether her building’s laundry room is crowded on Sunday nights, so she walks down at 9 p.m. and looks. Which approach to knowing is she using?",
      options: [
        { text: "Realism", why: "Realism infers something you can’t observe from its traces. She can just see the whole laundry room." },
        { text: "Empiricism", correct: true, why: "She verifies directly with her senses — the defining feature of empiricism." },
        { text: "Instrumentation", why: "No tool or procedure extends her senses here; she’s simply looking." },
        { text: "Analytic reduction", why: "Reduction is an ontological stance about breaking wholes into parts, not a way of checking a room." },
      ],
    },
    {
      id: "u2-q26",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-realism", "u2-empiricism"],
      stem: "A sociologist notices that at one high school, the same small set of families’ kids end up as team captains, prom organizers, and student-council officers year after year. No one can point to a rule, but she concludes there must be an unseen network shaping who gets chosen, and works out how it would have to operate to produce these patterns. What approach is she using?",
      options: [
        { text: "Empiricism", why: "She can’t directly see the network — only its effects — so she’s not relying on direct observation alone." },
        { text: "Realism", correct: true, why: "She reasons backwards from observable traces (who gets chosen) to a real but unobservable structure — that’s realism." },
        { text: "Naturalistic explanation", why: "Her explanation is natural, sure, but the specific move of inferring an unseen thing from its traces is realism." },
        { text: "Subjectivist epistemology", why: "She isn’t relying on her own private perspective; she’s inferring from public patterns." },
      ],
    },
    {
      id: "u2-q27",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u2-instrumentation", "u2-empiricism", "u2-realism"],
      stem: "A university wants to know how sleep-deprived its 20,000 students are overall. It runs a carefully sampled, anonymous online sleep survey each semester. In the notes’ terms, the survey is best described as…",
      options: [
        { text: "Instrumentation", correct: true, why: "A reliable procedure that measures a general property no one could see directly — just as the notes treat a national price survey as an instrument." },
        { text: "Pure empiricism", why: "No one can directly sense the whole student body’s sleep; the survey is a tool extending observation." },
        { text: "Analytic reduction", why: "The survey isn’t breaking sleep down to biology; it measures a population-level pattern." },
        { text: "Social construction", why: "Sleep deprivation isn’t constituted by shared belief, and the survey is a measurement tool, not a construction." },
      ],
    },
    {
      id: "u2-q28",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-analytic-reduction", "u2-emergence"],
      stem: "Two students argue about a jazz band’s “chemistry.” Student A says: “Chemistry is just each player’s skill and reaction time added up — measure each musician separately and you’ve explained it.” Student B says: “The chemistry exists at the level of the group; you can study how they play together without measuring anyone individually.” Which student is defending analytic reduction?",
      fixedOrder: true,
      options: [
        { text: "Student A", correct: true, why: "A treats the whole as a collection of constituent parts best studied through those parts — analytic reduction." },
        { text: "Student B", why: "B defends emergence: a group-level property studied on its own terms." },
        { text: "Neither student", why: "A’s “just the parts added up” is textbook reduction." },
        { text: "The drummer, who hasn’t said anything and is just vibing", why: "A joke option — the drummer took no position." },
      ],
    },
    {
      id: "u2-q29",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-emergence", "u2-analytic-reduction", "u2-subjective"],
      stem: "An online gaming guild has a reputation for being welcoming to beginners. Five years later, none of the founding members are left, yet the reputation — and the welcoming behavior — continues. A researcher studies the guild’s culture directly without looking at any individual member’s psychology. Which idea fits her approach best?",
      options: [
        { text: "Analytic reduction", why: "She’s deliberately NOT breaking the guild into its members; reduction would do exactly that." },
        { text: "Emergence", correct: true, why: "The guild’s culture is a higher-level property that persists as members change and can be studied without reference to lower levels." },
        { text: "Subjective ontology", why: "Subjective ontology is about individuals’ inner states — the one level she’s not studying." },
        { text: "Empiricism", why: "Her approach is defined by which level she treats as real, not by whether she observes directly." },
      ],
    },
    {
      id: "u2-q30",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u2-analytic-reduction", "u2-emergence", "u2-intersubjective", "u2-micro"],
      stem: "A sociologist wants to understand why a group of friends slowly stopped inviting one member to their weekend plans. Which approach would be the STRANGEST choice for this question?",
      options: [
        { text: "Analyzing the organic chemistry of each friend’s brain cells", correct: true, why: "Reducing a social pattern to molecules would require climbing a ladder of levels nobody understands — the notes’ reason sciences settle at emergent levels." },
        { text: "Studying the shared understandings and expectations the group developed", why: "Very fitting: this is the intersubjective level sociology usually studies." },
        { text: "Looking at the micro-level, face-to-face interactions among the friends", why: "Fitting: exclusion plays out in face-to-face moments like who gets asked." },
        { text: "Treating the group’s norms as an emergent property of the group", why: "Fitting: the group’s patterns can be studied without reference to lower levels." },
      ],
    },
    {
      id: "u2-q31",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-subjective", "u2-intersubjective", "u2-objective"],
      stem: "Before her first seminar presentation, a transfer student feels a private wave of dread and secretly plans to speak as fast as possible to get it over with. At what ontological level does this phenomenon mainly live?",
      options: [
        { text: "Subjective", correct: true, why: "Her interior feelings and intentions are the defining content of a subjective ontology." },
        { text: "Intersubjective", why: "Nothing here is shared or coordinated with others yet — it’s all inside her head." },
        { text: "Objective", why: "Objective refers to material and large-scale forces beyond coordinated action, not private dread." },
        { text: "Macro", why: "Macro is a scale of analysis, not a level of reality, and this is about as close-up as it gets." },
      ],
    },
    {
      id: "u2-q32",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-intersubjective", "u2-subjective", "u2-objective"],
      stem: "Four roommates sit down, agree on a rotating chore chart, and then actually follow it for the whole semester. Which ontological level best describes the chore arrangement?",
      options: [
        { text: "Subjective", why: "The chart isn’t in any one person’s head — it exists because they agreed on it together." },
        { text: "Objective", why: "Objective refers to material or large-scale forces beyond coordination; this arrangement IS coordination." },
        { text: "Intersubjective", correct: true, why: "Shared goals and coordinated action among a group — the definition of intersubjective." },
        { text: "Objectivist", why: "Objectivist is an epistemology (a goal for knowledge), not a level of reality." },
      ],
    },
    {
      id: "u2-q33",
      skill: "application",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u2-objective", "u2-intersubjective", "u2-objectivist"],
      stem: "A strong earthquake knocks out power and water across a whole region, hitting every neighborhood regardless of what residents believe or plan. A sociologist examining how this shapes people’s lives is focusing on which ontological level?",
      options: [
        { text: "Intersubjective", why: "The earthquake isn’t constituted by people’s coordination — it hits regardless of shared plans." },
        { text: "Objective", correct: true, why: "Non-human material forces acting on whole populations beyond the reach of coordinated action are what the notes call objective." },
        { text: "Objectivist", why: "Objectivist is about unbiased knowledge, not about earthquakes. Watch the “-ist.”" },
        { text: "Subjective", why: "People have feelings about it, but the phenomenon itself is a material force, not an inner state." },
      ],
    },
    {
      id: "u2-q34",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-subjectivist", "u2-intersubjectivist", "u2-objectivist"],
      stem: "A researcher studying students’ part-time jobs only interviews members of her own sorority and trusts her own impressions of what “everyone” experiences. What is the main risk in her approach?",
      options: [
        { text: "Subjectivist bias: it rests on one narrow perspective", correct: true, why: "The notes say scientists try to avoid interpretations that depend on one individual’s perspective or one social category’s." },
        { text: "Intersubjectivist bias — a whole discipline has developed blinders", why: "Nothing here involves a disciplinary community steering the research; it’s one researcher and one group." },
        { text: "Objectivist bias — she’s too detached from society", why: "She’s the opposite of detached; she’s leaning on her own position." },
        { text: "Analytic reduction — she’s reducing jobs to particles", why: "Reduction is about ontological levels; her problem is whose perspective she’s using." },
      ],
    },
    {
      id: "u2-q35",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-intersubjectivist", "u2-subjectivist", "u2-skeptical-attitude"],
      stem: "For two decades, every researcher in one subfield trained in the same few departments, reviewed each other’s papers, and agreed online gaming communities weren’t “serious” enough to study. As a result, almost nothing was known about them. Which epistemological problem does this illustrate?",
      options: [
        { text: "Subjectivist bias", why: "The problem isn’t one person’s perspective; it’s a whole expert community’s shared one." },
        { text: "Too much skepticism", why: "Skepticism is rigorous scrutiny of claims; here the problem is which topics never got studied at all." },
        { text: "Intersubjectivist blinders", correct: true, why: "An expert community locked into one collective perspective left a phenomenon unstudied — the downside the notes describe." },
        { text: "Naive empiricism", why: "The issue isn’t reliance on direct observation; it’s what a community decided was worth studying." },
      ],
    },
    {
      id: "u2-q36",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-objectivist", "u2-subjectivist", "u2-intersubjectivist"],
      stem: "Before collecting any data, a student research team publicly commits to reporting their findings about a beloved campus tradition even if the results make it look bad, and their department promises not to penalize them for studying an unpopular topic. Which epistemology are they putting into practice?",
      options: [
        { text: "Subjectivist", why: "They’re trying to keep their own hopes from shaping results — the reverse of relying on one perspective." },
        { text: "Intersubjectivist", why: "They’re trying to prevent community steering (the department promises not to punish unpopular topics), not embracing it." },
        { text: "Objectivist (in its minimum form)", correct: true, why: "The notes list exactly these as the minimum of objectivism: report findings opposite to what you hoped, and protect unpopular topics." },
        { text: "Empiricist", why: "Empiricism is about direct sensing; the commitments here are about eliminating bias." },
      ],
    },
    {
      id: "u2-q37",
      skill: "application",
      format: "mc",
      tier: 1,
      conceptIds: ["u2-subjectivist", "u2-objectivist", "u1-reflexivity"],
      stem: "A sociologist who spent years working as a warehouse picker notices, from her own experience of being tracked by handheld scanners, how workers quietly help each other hit quotas. She uses that insight to design her study. How do the notes view this use of her own perspective?",
      options: [
        { text: "As pure personal bias that good science should always eliminate entirely", why: "The notes say subjectivity can be a bias, but NOT always — used reflexively, it can be a key way of gathering knowledge." },
        { text: "As reflexive use of her position — a key mode of gathering knowledge", correct: true, why: "The notes say one’s subjectivity, used reflexively, can be a key mode of knowing — and some phenomena are only accessible from particular social positions." },
        { text: "As an example of the objectivist “view from nowhere”", why: "She’s using a very specific view from somewhere, not a detached one." },
        { text: "As an example of analytic reduction", why: "Reduction is about ontological levels, not about using a researcher’s own experience." },
      ],
    },
    {
      id: "u2-q38",
      skill: "application",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u2-social-construction", "u2-subjective"],
      stem: "On a Discord server, a member with the “Moderator” role mutes someone, and everyone accepts it. The role has power only because members believe in it and act accordingly. What leverage does the concept of social construction give here?",
      options: [
        { text: "It shows the role is fake, so sociologists can ignore it", why: "The everyday trap. Constructed things are real — the mute actually happened." },
        { text: "Shared belief makes the role real in its effects", correct: true, why: "That’s the concept’s payoff: things constituted by shared belief are real and consequential." },
        { text: "It shows the moderator privately imagined the role into being", why: "One person’s imagination is subjective; construction requires SHARED belief." },
        { text: "It shows the role is an objective, material force like the weather", why: "Objective forces work regardless of belief; this role works only because of belief." },
      ],
    },
    {
      id: "u2-q39",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-micro", "u2-macro"],
      stem: "At a busy grocery checkout, two cashiers silently work out, through glances and gestures, who scans and who bags. A sociologist studying this moment is doing what level of analysis?",
      options: [
        { text: "Macro-level analysis", why: "Macro is beyond face-to-face interaction; this is face-to-face." },
        { text: "Micro-level analysis", correct: true, why: "Face-to-face interaction with people and the immediately present world is the definition of micro." },
        { text: "Objective ontology", why: "Objective is a kind of reality (material/large-scale forces), not a scale, and this coordination is intersubjective." },
        { text: "Structural analysis of the world grocery system", why: "That would zoom far out; the stem zooms in on one face-to-face moment." },
      ],
    },
    {
      id: "u2-q40",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-macro", "u2-micro", "u2-structure"],
      stem: "A state requires every public high school student to pass two years of a world language to graduate. Hundreds of schools rebuild their schedules, and the rule continues no matter which students or teachers come and go. Which level of analysis fits best?",
      options: [
        { text: "Micro-level analysis", why: "No single face-to-face encounter is at stake; the rule operates across hundreds of schools." },
        { text: "Subjective ontology", why: "The requirement isn’t anyone’s private mental state." },
        { text: "Macro-level analysis", correct: true, why: "The phenomenon operates beyond face-to-face interaction and persists as individuals come and go — macro." },
        { text: "Empiricism", why: "Empiricism is a way of knowing, not a level of analysis." },
      ],
    },
    {
      id: "u2-q41",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-agency", "u2-structure", "u2-social-order"],
      stem: "Frustrated by early closing times, a group of students organizes a petition, meets with administrators, and wins 24-hour library access during finals. Which concept best captures what the students exercised?",
      options: [
        { text: "Structure", why: "Structure is the constraint (the old closing time); the students changed it." },
        { text: "Agency", correct: true, why: "They made a difference in the world, acting collectively — groups can have agency too." },
        { text: "Social order", why: "Social order is about patterned life persisting; this story is about a group changing a rule." },
        { text: "Formal rationalization", why: "Nothing here is about means-ends efficiency logic; it’s about making a difference." },
      ],
    },
    {
      id: "u2-q42",
      skill: "application",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u2-structure", "u2-agency"],
      stem: "Two equally motivated 15-year-olds want a first job. One lives in a town with a busy boardwalk full of summer employers; the other lives where no business hires anyone under 18. Which concept explains why their outcomes differ?",
      options: [
        { text: "Agency", why: "Both have the same motivation and capacity to try; the difference is in what they were handed." },
        { text: "Structure", correct: true, why: "A patterned social phenomenon they didn’t choose (local job availability, hiring-age rules) determines their outcomes." },
        { text: "Emergence", why: "Emergence is an ontological stance about levels, not the concept for constraints on outcomes." },
        { text: "Subjectivist bias", why: "No researcher’s perspective is at issue; this is about constraints on the teens." },
      ],
    },
    {
      id: "u2-q43",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u2-social-order", "u2-social-change", "u2-agency"],
      stem: "A dorm loses power for two days during finals. Within an hour, residents have posted a sign-up sheet for the one working outlet, agreed on a quiet zone, and set up a shared flashlight bin. Which concept does this illustrate?",
      options: [
        { text: "Social order", correct: true, why: "Even after disruption, patterned collective activity based on a shared understanding of the situation re-emerges — the notes’ resilience point." },
        { text: "Social change", why: "No lasting structure was replaced; people rebuilt patterned coordination in a crisis." },
        { text: "Structure", why: "Structures determine outcomes as givens; here people are actively creating shared patterns on the spot." },
        { text: "Crisis (Unit 1)", why: "Mills’ crisis is a cell in his typology — articulated values felt to be under threat — not a power outage." },
      ],
    },
    {
      id: "u2-q44",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 3,
      conceptIds: ["u2-social-change", "u2-social-order"],
      stem: "Over about ten years, a small town’s Friday nights shift from packed bowling-alley leagues to nearly everyone staying home to stream shows. The bowling alley closes. Which concept best fits?",
      options: [
        { text: "Social order", why: "Social order is about patterned life persisting through disruption; here a specific pattern was replaced." },
        { text: "Social change", correct: true, why: "A specific social structure shifted over time — social change." },
        { text: "Micro-level analysis", why: "This is a town-wide shift over a decade, beyond single face-to-face moments." },
        { text: "Naturalistic explanation", why: "Naturalism is a scientific commitment, not a description of a town’s habits." },
      ],
    },
    {
      id: "u2-q45",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u2-formal-rationalization", "u2-substantive-rationalization"],
      stem: "A pizza chain starts timing every delivery to the second, redesigns driver routes with software, and removes any step that slows orders down. Which process is this?",
      options: [
        { text: "Formal rationalization", correct: true, why: "Subjecting action to means-ends efficiency logic — the stopwatch side of rationalization." },
        { text: "Substantive rationalization", why: "Substantive is about stating explicit purposes; the chain isn’t spelling out what pizza is for, it’s maximizing speed." },
        { text: "Social construction", why: "Delivery times aren’t constituted by shared belief; this is about calculation for efficiency." },
        { text: "Agency", why: "The chain makes a difference, but what defines the example is efficiency calculation." },
      ],
    },
    {
      id: "u2-q46",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u2-substantive-rationalization", "u2-formal-rationalization"],
      stem: "A family that used to just have Sunday dinner writes an explicit statement of what the dinners are for — “so everyone checks in once a week and no one feels left out” — and pins it to the fridge. Which process is this?",
      options: [
        { text: "Formal rationalization", why: "They aren’t making dinner more efficient; they’re naming its purpose." },
        { text: "Substantive rationalization", correct: true, why: "Articulating explicit purposes for action in a domain of life where they used to go unstated." },
        { text: "Rationalization in the sense of making excuses", why: "No one is excusing anything — that’s the everyday false friend." },
        { text: "Commodification", why: "Nothing is being produced or sold for profit." },
      ],
    },
    {
      id: "u2-q47",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 2,
      conceptIds: ["u2-formal-rationalization", "u2-micro", "u2-intersubjective"],
      stem: "Three friends grab guitars on a porch and play whatever comes to mind for hours — no goals, no timing, no plan. Which concept would be the strangest lens for describing this jam session?",
      options: [
        { text: "Micro-level analysis", why: "Fitting: it’s face-to-face interaction in the immediately present world." },
        { text: "Intersubjective coordination", why: "Fitting: they’re exchanging meaning and aligning with each other as they play." },
        { text: "Formal rationalization", correct: true, why: "Strange fit: formal rationalization means subjecting action to means-ends efficiency logic, and nothing here is being calculated or optimized." },
        { text: "Agency", why: "Reasonable: they’re choosing and making a difference in what happens." },
      ],
    },
    {
      id: "u2-q48",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-naturalistic-explanation", "u2-skeptical-attitude"],
      stem: "A high school team’s coach blames a six-game losing streak on a curse from an angry spirit. A sociologist instead looks at injuries, travel schedules, and roster changes. Which scientific commitment is the sociologist following?",
      options: [
        { text: "Naturalistic explanation", correct: true, why: "Explaining events only through processes and things in the world, not supernatural forces." },
        { text: "Skeptical attitude", why: "Skepticism is about rigorously testing claims; the specific move here is ruling out supernatural causes." },
        { text: "Analytic reduction", why: "She’s not breaking the team into particles; she’s swapping a supernatural cause for natural ones." },
        { text: "Subjectivist epistemology", why: "Her approach doesn’t rest on her own perspective; it rests on observable causes." },
      ],
    },
    {
      id: "u2-q49",
      skill: "application",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u2-skeptical-attitude", "u2-intersubjectivist"],
      stem: "A research lab finds a surprising result. Before announcing it, they send all their data to a rival lab and ask them to try as hard as possible to find mistakes. Which commitment does this illustrate?",
      options: [
        { text: "The skeptical attitude", correct: true, why: "A community of scientists subjecting a claim to the most rigorous scrutiny they can — exactly the notes’ skepticism." },
        { text: "Naturalistic explanation", why: "Nothing here concerns supernatural vs. natural causes." },
        { text: "Intersubjectivist blinders", why: "This is the opposite of blinders — inviting outside scrutiny." },
        { text: "Empiricism", why: "Empiricism is direct sensory observation; this is about testing a claim through expert scrutiny." },
      ],
    },
    {
      id: "u2-q50",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-subjective", "u2-subjectivist"],
      stem: "A student writes: “Loneliness is subjective, so any study of loneliness is automatically subjectivist and biased.” What is the main mistake?",
      options: [
        { text: "Mixing up ontology (what loneliness is) with epistemology (how we know about it)", correct: true, why: "A subjective thing can be studied without subjectivist bias; the two words live on different axes." },
        { text: "Nothing — loneliness is actually objective, since almost everyone feels it at some point", why: "Being widespread doesn’t make it a material/large-scale force; it’s still an inner state." },
        { text: "Subjectivist studies are always the most reliable kind", why: "The notes say scientists usually try to avoid purely subjectivist interpretations." },
        { text: "Loneliness is macro, so it can’t be subjective", why: "Micro/macro is scale, not kind of reality; the sentence’s error is mixing ontology and epistemology." },
      ],
    },
    {
      id: "u2-q51",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-realism", "u2-empiricism", "u2-analytic-reduction", "u2-emergence"],
      stem: "Two researchers disagree about a campus’s student clubs. One says: “I only trust what I can see at the club fair.” The other says: “We can infer the hidden pecking order among clubs from who gets funding and prime meeting rooms.” Which tension are they arguing about?",
      options: [
        { text: "Analytic reduction vs. emergence", why: "Nobody is debating which level of reality is fundamental; they’re debating what counts as evidence." },
        { text: "Realism vs. empiricism", correct: true, why: "Direct observation vs. reasoning backwards from traces — an epistemological tension." },
        { text: "Agency vs. structure", why: "They aren’t arguing about whether people make a difference or are constrained." },
        { text: "Social order vs. social change", why: "Neither is claiming the clubs’ patterns are persisting or shifting." },
      ],
    },
    {
      id: "u2-q52",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u2-micro", "u2-intersubjective", "u2-macro", "u2-objective"],
      stem: "Two siblings argue at the dinner table and finally agree on a schedule for who does the dishes each night. Which pairing best describes this — first by SCALE, then by KIND of reality?",
      options: [
        { text: "Macro scale; objective", why: "It’s face-to-face (not macro) and it’s built from their shared agreement (not a force beyond coordination)." },
        { text: "Micro scale; intersubjective", correct: true, why: "Face-to-face = micro; shared agreement and coordination = intersubjective. Sociology’s usual object, at the small scale." },
        { text: "Micro scale; objective", why: "Scale is right, but a negotiated schedule is coordination, not a material force." },
        { text: "Macro scale; intersubjective", why: "Kind is right, but a dinner-table argument is face-to-face — micro." },
      ],
    },
    {
      id: "u2-q53",
      skill: "application",
      format: "mc",
      tier: 3,
      conceptIds: ["u2-commodity", "u2-rationalization"],
      stem: "A student who makes beautiful color-coded study guides turns them into a paid monthly subscription for other students, advertising on campus and pricing it to earn a profit. Which concept from the notes fits best?",
      options: [
        { text: "Substantive rationalization", why: "She isn’t spelling out explicit purposes for a domain of life; she’s producing something to sell for profit." },
        { text: "Commodity", correct: true, why: "Producing, marketing, and selling something at a profit — the capitalist logic the notes tie to commodities." },
        { text: "Social order", why: "Social order is about patterned life persisting through disruption, not selling study guides." },
        { text: "Instrumentation", why: "Instruments measure hard-to-observe phenomena; a study guide for sale isn’t a measuring tool." },
      ],
    },

    // ───────────── BIG EMPIRICAL ─────────────
    {
      id: "u2-q54",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 2,
      conceptIds: ["u2-science"],
      stem: "Roughly how long ago did modern science emerge, according to the notes?",
      fixedOrder: true,
      options: [
        { text: "About 50 years ago (roughly since personal computers)", why: "Far too recent — the notes date modern science to centuries ago." },
        { text: "About 500 years ago", correct: true, why: "The notes say modern science emerged about 500 years ago (depending on how you count) — a recent, specific historical development." },
        { text: "About 50,000 years ago (roughly as old as sophisticated human culture)", why: "That’s the age of sophisticated human culture from Unit 4, not modern science." },
        { text: "About 2 million years ago", why: "Wildly too old — modern science is a recent institution, not an ancient human trait." },
      ],
    },
    {
      id: "u2-q55",
      skill: "empirical",
      format: "mc",
      tier: 2,
      conceptIds: ["u2-science", "u2-naturalistic-explanation", "u2-skeptical-attitude"],
      stem: "Why does it matter that modern science is only about 500 years old?",
      options: [
        { text: "Science is a recent, historically specific way of knowing, not a timeless one", correct: true, why: "The notes date the consensus “since the emergence of modern science”: it’s a human achievement with a history." },
        { text: "It proves that scientific knowledge is unreliable and ultimately just another kind of opinion", why: "The notes reject this: social science isn’t just “opinions called facts,” and science’s age says nothing about unreliability." },
        { text: "It means sociology must be older than physics", why: "Nothing in the notes supports this; the age of science isn’t about disciplines’ ranking." },
        { text: "It shows humans only began to have language 500 years ago", why: "Language and culture are vastly older; the date is specific to modern science." },
      ],
    },
    {
      id: "u2-q56",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 1,
      conceptIds: ["u2-analytic-reduction"],
      stem: "At the extreme of analytic reduction, how many fundamental particles do the notes say physics recognizes — the building blocks of literally everything?",
      fixedOrder: true,
      options: [
        { text: "Just one", why: "Too few — physics recognizes a small handful, not a single particle." },
        { text: "Under twenty (seventeen)", correct: true, why: "The notes cite seventeen — the most reductive ontology with widespread scientific consensus." },
        { text: "Roughly a thousand", why: "Far too many — the point is how FEW basic pieces everything reduces to." },
        { text: "Billions — one for each kind of object", why: "That would be the opposite of reduction." },
      ],
    },
    {
      id: "u2-q57",
      skill: "empirical",
      format: "mc",
      tier: 1,
      conceptIds: ["u2-analytic-reduction", "u2-emergence"],
      stem: "The notes point out that everything is made of a small handful of fundamental particles, yet only one of the six steps from particles up to a complex social institution is well understood. Why does that matter for sociology?",
      options: [
        { text: "It explains why many sciences study emergent levels instead", correct: true, why: "Working all the way up would exhaust a lifetime for one phenomenon, so disciplines settle at emergent levels." },
        { text: "It proves social phenomena aren’t real, since they aren’t made of their own particles", why: "The notes treat social phenomena as real; being hard to reduce doesn’t make something unreal." },
        { text: "It proves reduction is useless", why: "The notes call reduction extremely powerful — it’s just harder to use for some phenomena." },
        { text: "It means sociologists must become physicists first", why: "The opposite: sociology can study its level without reference to lower levels." },
      ],
    },
    {
      id: "u2-q58",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 1,
      conceptIds: ["u2-intersubjectivist", "u2-skeptical-attitude"],
      stem: "Because contributing to modern science often takes years of specialized training, what share of the overall population is qualified to skeptically examine cutting-edge scientific claims?",
      fixedOrder: true,
      options: [
        { text: "A tiny proportion", correct: true, why: "The notes say only a tiny proportion is qualified — which is why skepticism is a community practice and why intersubjectivist blinders matter." },
        { text: "About half", why: "Far too many — years of specialized training limit it to a small group." },
        { text: "Almost everyone with a high-school diploma", why: "The notes stress that skepticism doesn’t mean anyone is qualified to question findings." },
        { text: "Everyone — that’s what the skeptical attitude means", why: "This is the everyday “do your own research” reading the notes reject." },
      ],
    },
    {
      id: "u2-q59",
      skill: "empirical",
      format: "mc",
      tier: 1,
      conceptIds: ["u2-realism", "u2-empiricism", "u2-instrumentation"],
      stem: "How much of a world-spanning social structure can any single person directly observe, and why does that matter?",
      options: [
        { text: "All of it, if they travel widely enough — so direct observation is enough for sociology", why: "The notes say there is literally no way to observe the whole thing; only parts and traces." },
        { text: "Only parts and traces — which is why sociologists lean on realism and instrumentation", correct: true, why: "You can see bits of a huge structure, but only reasoning backwards from traces, with instruments, gets at the whole." },
        { text: "None of it, because social structures aren’t real", why: "The notes say such structures are real because they have observable effects." },
        { text: "About half — enough to generalize safely", why: "No individual gets anywhere near half of a world-spanning structure." },
      ],
    },

    // ───────────── TRUE / FALSE ─────────────
    {
      id: "u2-q60",
      skill: "conceptual",
      format: "tf",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u2-social-construction"],
      stem: "True/False: According to the notes, if a school’s honor roll is a social construction, then it isn’t really real and has no real consequences for students.",
      options: [
        { text: "True", why: "This is the everyday “just a social construct” reading. The notes say construction does NOT mean nothing is real." },
        { text: "False", correct: true, why: "Constructed things exist through shared belief and behavior and have real effects — the honor roll really shapes transcripts and opportunities." },
      ],
    },
    {
      id: "u2-q61",
      skill: "conceptual",
      format: "tf",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u2-objectivist"],
      stem: "True/False: The phrase “view from nowhere,” describing the maximal goal of objectivist epistemology, comes from C. Wright Mills.",
      options: [
        { text: "True", why: "Mills (Unit 1) gave us the sociological imagination and troubles/issues, not the view from nowhere." },
        { text: "False", correct: true, why: "The notes attribute the “view from nowhere” to Thomas Nagel." },
      ],
    },
    {
      id: "u2-q62",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 1,
      conceptIds: ["u2-naturalistic-explanation", "u2-skeptical-attitude", "u2-epistemology"],
      stem: "True/False: The notes describe naturalistic explanation and the skeptical attitude as the two consensus ONTOLOGICAL commitments of modern science.",
      options: [
        { text: "True", why: "They are consensus commitments, but the notes call them EPISTEMOLOGICAL — about how to explain and verify, not what exists." },
        { text: "False", correct: true, why: "The notes call them epistemological commitments. Ontology comes in with reduction vs. emergence." },
      ],
    },
    {
      id: "u2-q63",
      skill: "conceptual",
      format: "tf",
      tier: 1,
      conceptIds: ["u1-reflexivity", "u2-science"],
      stem: "True/False: According to the notes, people in society need to be studied differently than rocks, planets, and pathogens partly because people react to their understandings about the world.",
      options: [
        { text: "True", correct: true, why: "The notes say exactly this — people react to what they understand (Du Bois’ reflexivity), so social science can’t work like the study of rocks." },
        { text: "False", why: "This is one of the notes’ central claims about why social science differs, so it is true." },
      ],
    },
    {
      id: "u2-q64",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 1,
      conceptIds: ["u2-emergence", "u2-analytic-reduction"],
      stem: "True/False: The author of the notes argues that emergence is always a better scientific approach than analytic reduction.",
      options: [
        { text: "True", why: "He explicitly says he hasn’t asserted that reduction or emergence is always best." },
        { text: "False", correct: true, why: "His position is pragmatic: different ontological perspectives are useful for different things, and reduction is extremely powerful." },
      ],
    },
    {
      id: "u2-q65",
      skill: "conceptual",
      format: "tf",
      tier: 1,
      conceptIds: ["u2-intersubjective", "u2-micro", "u2-macro"],
      stem: "True/False: According to the notes, sociology as a whole is usually concerned with intersubjective phenomena, which can take place at both micro and macro scales.",
      options: [
        { text: "True", correct: true, why: "The notes open the micro/macro section with exactly this claim — intersubjectivity happens face-to-face and beyond." },
        { text: "False", why: "This is how the notes introduce micro and macro, so it’s true." },
      ],
    },
    {
      id: "u2-q66",
      skill: "application",
      format: "tf",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u2-skeptical-attitude"],
      stem: "True/False: A person who has never studied immunology but reads a few blog posts is exercising the scientific skeptical attitude, in the notes’ sense, when they reject a new vaccine study.",
      options: [
        { text: "True", why: "The notes say the skeptical attitude does NOT mean anyone is qualified to question findings." },
        { text: "False", correct: true, why: "In the notes, skepticism is communities of trained scientists applying the most rigorous scrutiny they can — not individual doubt." },
      ],
    },
    {
      id: "u2-q67",
      skill: "empirical",
      format: "tf",
      tier: 1,
      conceptIds: ["u2-intersubjectivist"],
      stem: "True/False: The notes say that, because meaningful scientific contribution often requires years of specialized training, only a tiny proportion of the population is qualified to skeptically examine scientific claims.",
      options: [
        { text: "True", correct: true, why: "That’s the notes’ claim, and it’s the upside and downside of intersubjectivist knowledge: real expertise, but a small community that can develop blinders." },
        { text: "False", why: "The notes say exactly this in the intersubjectivist section." },
      ],
    },
    {
      id: "u2-q70",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 3,
      conceptIds: ["u2-social-change", "u2-social-order"],
      stem: "According to the notes, how quickly can specific social structures change?",
      fixedOrder: true,
      options: [
        { text: "Never — social order is permanent", why: "Social order is resilient as a whole, but the notes say specific structures do change." },
        { text: "Sometimes quite rapidly — even within a single generation’s lifetime", correct: true, why: "The notes point to major changes in how people interact happening within students’ own lifetimes." },
        { text: "Only over tens of thousands of years", why: "Far too slow — the notes stress that change can be quick." },
        { text: "Only after a society has been totally destroyed by war or natural disaster", why: "The notes say total destruction is what social order resists; change happens without it." },
      ],
    },
  ],
};
