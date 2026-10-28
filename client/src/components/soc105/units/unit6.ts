import type { Unit } from "../types";

export const unit6: Unit = {
  id: "u6",
  number: 6,
  title: "Structures and Organizations",
  subtitle: "Groups, bureaucracies, and networks: the regular patterns of interaction that bind people into society",
  sourceUrl: "https://nhwilson.github.io/chapters/Ch_6_Structures.html",
  bigPoints: [
    {
      point: "Social structures are the regular patterns of interaction that organize social life. They come in three main varieties: groups, organizations, and networks.",
      detail:
        "Groups grow out of aggregates. An aggregate is people who just happen to share a place. A group passes two tests: ongoing, regular interaction, and a sense of collective identity. Groups can be sorted two ways. By intensity: primary groups are intensive, emotional, and face-to-face; secondary groups are everything else. More generally, every group rests on an in-group/out-group distinction, and what that line gets drawn around is rarely predictable, because groups are social constructions. We also use groups as reference groups (concrete or imagined) to judge our own behavior.",
    },
    {
      point: "Groups have a size paradox, and they exert enormous coercive power on their members.",
      detail:
        "Bigger groups are more stable, since one exit doesn’t dissolve them, but less intense, since there are many more potential relationships. Asch (1951): participants yielded to a group’s false belief about a third of the time. Milgram (1961): in the original experiment, every participant administered 300-volt shocks on an experimenter’s directions.",
    },
    {
      point: "Bureaucracy is the highly formally rationalized organization: the modern mode of organizing complex social life. It’s more effective, and smaller, than its reputation, but it has real dysfunctions.",
      detail:
        "Weber’s ideal type has seven features: defined jurisdictional areas, expert training, clear-cut hierarchy, written rules of conduct and procedure, full-time salaried officials, separation between organizational and private life, and organizational ownership of the means of production. The ideal type works like an index: the more features, the more bureaucratic. Functions: the whole US government is just under 8% of the population, a small staff doing a huge job. Dysfunctions: decoupling (drifting from its designed purpose to pursue other ends) and panopticism (Foucault: a small minority disciplining very large populations through possible observation, especially with technology).",
    },
    {
      point: "Networks are graphs of entities and their ties, and network analysis has five striking findings.",
      detail:
        "Closure: more ties tend to form as networks develop. Homophily: similar entities tie to similar entities. Contagion: behaviors and feelings spread along ties. Brokerage: entities perched between regions have more power. The strength of weak ties: new resources and information come from distant “friends of friends.” Organizations are drawn as vertical hierarchies and networks as horizontal ties, which raises an open question. Is that difference epistemological (just perspective) or ontological (a real difference in social reality)?",
    },
  ],
  connections: [
    "Unit 6 takes “the next step of abstraction” after Unit 5. Interaction and socialization happen face to face; when the same interactions recur in regular patterns, you get social structures, the binding agents that connect people-in-society.",
    "It reuses earlier tools. Unit 2’s structure (patterns we encounter as given), formal rationalization (bureaucracy is its peak), social construction (in-/out-group lines), and ontology vs. epistemology (network vs. organization). Unit 3’s experiments (Asch, Milgram) and functions. Unit 4’s writing as a tool of central authority (written files, panopticism).",
    "It points ahead to discipline and inequality. Panopticism shows how a few can control many, and in-group/out-group distinctions show how groups claim higher status and privilege and justify exclusion or even violence.",
  ],
  concepts: [
    {
      id: "u6-social-structures",
      term: "Social structures",
      tier: 1,
      plainIdea:
        "Zoom out from any single conversation and you see the same people interacting in the same ways, again and again: the same lunch table, the same chain of command, the same circle of friends. Those regular patterns are social structures, the glue that binds individuals into society. They come in three main kinds: groups, organizations, and networks.",
      courseDefinition:
        "The regular patterns of interaction which organize social life: the binding agents connecting people-in-society. Social structures come in three main varieties: groups, organizations, and networks.",
      freshExample:
        "At a grocery store, the same cashiers report to the same shift lead every week, the same regulars chat at the deli counter, and the same delivery drivers show up on Tuesdays. That repeated pattern is the structure, whoever happens to be working.",
      notToConfuse:
        "Not a building or physical framework. It’s close kin to Unit 2’s “structure” (patterned social phenomena we encounter as given); Unit 6 breaks it into groups, organizations, and networks.",
    },
    {
      id: "u6-aggregate",
      term: "Aggregate",
      tier: 1,
      plainIdea:
        "A bunch of people who just happen to be in the same place. They share space, not a bond: they don’t really interact, and they don’t think of themselves as an “us.”",
      courseDefinition:
        "Simple collections of people who happen to be together in a particular place but do not significantly interact or identify with one another.",
      freshExample: "Everyone sitting in an urgent-care waiting room on a Saturday morning.",
      notToConfuse:
        "A group has regular interaction AND a shared identity. Tell: if this crowd scattered, would anyone feel they’d lost an “us”?",
    },
    {
      id: "u6-group",
      term: "Group",
      tier: 1,
      plainIdea:
        "People become a group when two things happen: they keep interacting in regular ways, and they start to feel like an “us.” Groups grow out of aggregates.",
      courseDefinition:
        "Groups regularly interact, share expectations about each others’ behavior, and share at least some sense of common identity. The two key distinctions of “group-ness” are (1) whether there is ongoing, regular interaction and (2) whether members have a sense of collective identity.",
      freshExample:
        "The regulars at Tuesday-night trivia who sit at the same table every week, know each other’s specialties, and have a team name.",
      notToConfuse:
        "An aggregate only shares a place. Being on the same class roster or in the same room doesn’t make a group unless both tests are met.",
    },
    {
      id: "u6-primary-group",
      term: "Primary group",
      tier: 1,
      plainIdea:
        "Your inner-circle groups. You see each other face to face, you feel strongly about each other, and belonging is a big piece of who you are.",
      courseDefinition:
        "Groups that strongly express all of these features: intensive, emotionally-laden, and face-to-face.",
      freshExample:
        "A three-person band that rehearses in a garage four nights a week, fights and makes up, and thinks of itself as “the band” above all.",
      notToConfuse:
        "Not “first” or “most important” in general, and not the same as primary socialization (Unit 5, early childhood). A tight crew of adults can be a primary group.",
    },
    {
      id: "u6-secondary-group",
      term: "Secondary group",
      tier: 1,
      plainIdea:
        "Every group that isn’t strongly intense, emotional, and face-to-face. You belong, you interact, you share an identity, but it’s looser and less central to who you are.",
      courseDefinition:
        "All other kinds of groups: those that do not strongly express the primary group’s features (intensive, emotionally-laden, face-to-face). Some cases are ambiguous and not clearly primary or secondary.",
      freshExample:
        "A 300-member campus hiking club: you go on a few trips a semester, know some faces, and wear the club hoodie, but it isn’t the center of your life.",
      notToConfuse:
        "A secondary group is still a group (regular interaction + shared identity), so don’t downgrade it to an aggregate. It isn’t secondary socialization (Unit 5) either.",
    },
    {
      id: "u6-in-out-group",
      term: "In-group/out-group distinctions",
      tier: 1,
      plainIdea:
        "Every group draws a line, with “us” on one side and “them” on the other. The “us” usually claims more status and privilege, and the line can be used to exclude people, or worse. What the line gets drawn around is surprisingly unpredictable.",
      courseDefinition:
        "At the most general level, all groups depend on the claim that there is some fundamental difference within a population between members of an in-group and those of an out-group. The in-group is usually said to have higher status and privilege, and the distinction can be the basis for exclusion or even violence. Because groups are social constructions, it is rarely predictable what will form the basis of the distinction; it ranges across all possible bases for identity.",
      freshExample:
        "Students in the honors dorm start calling everyone else “regulars” and quietly leave them off party invites.",
      notToConfuse:
        "Primary/secondary sorts groups by intensity; in-group/out-group is the more general boundary every group rests on. Also not homophily, a network finding that similar entities tend to form ties.",
    },
    {
      id: "u6-reference-group",
      term: "Reference group",
      tier: 1,
      plainIdea:
        "A group you hold up as a mirror: “What would they think of this?” You use it as the yardstick for whether your own behavior is OK.",
      courseDefinition:
        "Groups whose membership we use as a standard to judge the propriety of our own behaviors. They can be either concrete or imagined.",
      freshExample:
        "Before deciding whether to quit a part-time job mid-semester, you picture how the rest of the closing-shift crew would react.",
      notToConfuse:
        "What makes it a reference group is using it as a yardstick, not just belonging to it. Unit 5’s generalized other is a more abstract picture of what “people” in general would think.",
    },
    {
      id: "u6-reference-concrete",
      term: "Concrete reference group",
      tier: 1,
      plainIdea:
        "The yardstick is real people you actually know. You can picture their faces when you ask “what would they think?”",
      courseDefinition:
        "A reference group that is concrete: e.g., asking “what would my family think of this decision?”",
      freshExample: "A student weighing whether to switch majors asks, “What would my soccer teammates say?”",
      notToConfuse:
        "An imagined reference group is a category of people you picture (often one you hope to join), not specific people you know.",
    },
    {
      id: "u6-reference-imagined",
      term: "Imagined reference group",
      tier: 1,
      plainIdea:
        "The yardstick is a kind of person you picture, often a group you hope to join, rather than specific people you know.",
      courseDefinition:
        "A reference group that is imagined: e.g., “I want to be a doctor, and what would doctors think of taking this class?”",
      freshExample: "An aspiring chef wonders whether “real chefs” would respect her for using a meal kit.",
      notToConfuse:
        "A concrete reference group is specific people you know. Tell: could you name the people whose reaction you’re picturing? If yes, it’s concrete.",
    },
    {
      id: "u6-group-size-paradox",
      term: "Group size paradox",
      tier: 2,
      plainIdea:
        "Bigger groups are sturdier, because one person leaving doesn’t kill them. But they’re also less tight, because the more members there are, the more possible relationships there are to spread across.",
      courseDefinition:
        "As groups grow larger, they become more stable (if any individual member exits, the group does not dissolve), but also grow less intense (since there are more members, there are many more potential relationships within it).",
      freshExample:
        "A two-person carpool ends the day one driver moves away. A 30-person carpool rotation barely notices a departure, but nobody in it knows everyone well.",
      notToConfuse:
        "It’s a trade-off, not “bigger is better” or “bigger is worse.” Don’t flip it: larger means MORE stable and LESS intense.",
    },
    {
      id: "u6-conformity",
      term: "Conformity and groups (Asch, Milgram)",
      tier: 2,
      thinker: "Solomon Asch; Stanley Milgram",
      plainIdea:
        "Groups push their members hard. People will go along with a group belief they can see is false, and will follow directions they believe are seriously hurting someone.",
      courseDefinition:
        "Groups exert enormous coercive power on their members. Asch (1951): when a participant was led to believe their group held a false belief, they yielded to it about a third of the time. Milgram (1961, New Haven): participants were led to believe they were torturing another participant at the experimenter’s direction, and in the original experiment every participant administered 300-volt shocks.",
      freshExample:
        "In a group-project meeting everyone says the deadline is Friday. You’re sure it’s Thursday, but you nod along anyway.",
      notToConfuse:
        "Not contagion (behaviors spreading along network ties) and not a reference group (a standard you consult). Conformity is a group’s direct pressure on its members.",
    },
    {
      id: "u6-bureaucracy",
      term: "Bureaucracy",
      tier: 1,
      thinker: "Max Weber",
      plainIdea:
        "A bureaucracy is an organization built like a machine for getting things done. Everything about it is arranged so that whatever goal it’s handed gets delivered efficiently and reliably. It’s how modern societies run complex business at scale.",
      courseDefinition:
        "A case of formal organization that has played a special historical role since antiquity and, in the modern era, has become the mode of organizing complex social life. It is distinguished by its very high degree of formal rationalization: the extent to which its features efficiently and effectively deliver any given end.",
      freshExample:
        "A state unemployment office: assigned caseworkers, numbered forms, supervisors you can appeal to, and the same process for everyone.",
      notToConfuse:
        "Not a synonym for “red tape” or “inefficient.” In the course it means a highly formally rationalized organization, efficient by design.",
    },
    {
      id: "u6-ideal-type",
      term: "Ideal type",
      tier: 2,
      thinker: "Max Weber",
      plainIdea:
        "An “ideal type” is not the best version of something. It’s the pure, extreme version you measure real cases against. Think of a checklist score: the more boxes ticked, and the more strongly, the more bureaucratic the organization.",
      courseDefinition:
        "Similar to an index: a bureaucracy is “more of” a bureaucracy the more of Weber’s seven features it fulfills. Not every bureaucracy has every feature to the same degree, but the most extreme bureaucracy we can imagine would have them all and express them intensively.",
      freshExample:
        "A family diner with a written employee handbook but no credentials or org chart is a little bureaucratic; a national airline is far more so.",
      notToConfuse:
        "“Ideal” doesn’t mean good or desirable, and a real organization doesn’t need all seven features to count as bureaucratic.",
    },
    {
      id: "u6-jurisdiction",
      term: "Defined jurisdictional areas",
      tier: 2,
      thinker: "Max Weber",
      plainIdea:
        "Every position has its own turf. Your job is defined by the domain you oversee, and anything outside it is “not your area.”",
      courseDefinition:
        "Bureaucratic organizational positions are defined by the “domains” they oversee; officials cannot automatically act in areas that are “not in their area.”",
      freshExample:
        "A hotel front-desk clerk can change your room but has to send you to the restaurant manager to dispute a dinner charge.",
      notToConfuse:
        "Hierarchy is up and down (who answers to whom); jurisdiction is side to side (which domain is yours).",
    },
    {
      id: "u6-expert-training",
      term: "Expert training",
      tier: 2,
      thinker: "Max Weber",
      plainIdea:
        "You get the position because you’ve shown you’re qualified. And because a big organization can’t personally know everyone, it leans on credentials as proof.",
      courseDefinition:
        "Bureaucratic positions are defined by their holders’ expertise: demonstrated qualification for the position. In complex societies it is usually impossible to verify training through personal networks and direct experience alone, so organizations supplement with credentials.",
      freshExample:
        "A hospital hires only nurses who’ve passed the licensing exam, no matter who vouches for an applicant.",
      notToConfuse:
        "Jurisdiction is about which domain a position covers; expert training is about who is qualified to fill it.",
    },
    {
      id: "u6-hierarchy",
      term: "Clear-cut hierarchy",
      tier: 2,
      thinker: "Max Weber",
      plainIdea:
        "Everyone has a boss, all the way up to the top. So when something goes wrong, there’s a clear path for responsibility and for appeals.",
      courseDefinition:
        "Defined jurisdictional areas carry hierarchies with them: clear lines of authority trace up to the overall leader, giving clear avenues of responsibility and appeal from one person to their supervisor, all the way up to the head of the organization.",
      freshExample:
        "A gym member disputes a fee with the front desk, then the club manager, then the regional office.",
      notToConfuse:
        "Network research emphasizes horizontal ties among entities; hierarchy is vertical. Brokerage power comes from sitting between regions, not from rank.",
    },
    {
      id: "u6-written-rules",
      term: "Written rules of conduct and procedure",
      tier: 2,
      thinker: "Max Weber",
      plainIdea:
        "Write it down. Files let any official pick up anyone’s case without knowing the person, and written procedures let officials be held to account when they go off script.",
      courseDefinition:
        "Bureaucracies rely on writing. Written records let vast inputs and outputs be abstractly represented, so structurally-equivalent officials can deal with the same “case” from its “file” without personal knowledge of its history. Intricate written procedures for officials’ own work mean that when they deviate from prescribed norms, they can be held accountable.",
      freshExample:
        "Any pharmacist on shift can fill your refill from your prescription record. If one skips the required ID check, the written policy is what they’re disciplined under.",
      notToConfuse:
        "Builds on Unit 4’s writing as a tool of central authority. Separation says workers are interchangeable; written records are what let a case move between them.",
    },
    {
      id: "u6-full-time-officials",
      term: "Full-time salaried officials",
      tier: 2,
      thinker: "Max Weber",
      plainIdea:
        "Bureaucrats can master the job because it’s their only job. They aren’t squeezing it in around another position.",
      courseDefinition:
        "Bureaucrats are effective in part because they can concentrate on their jobs, rather than juggling another position, being around only for restricted hours, or devoting comparatively little time to the organization.",
      freshExample:
        "A town replaces its rotating part-time volunteer clerks with a paid full-time permits staff, and wait times drop.",
      notToConfuse:
        "Separation of organizational and private life is about the job not depending on a particular person; full-time is about the person concentrating on the job.",
    },
    {
      id: "u6-separation-private",
      term: "Separation between organizational and private life",
      tier: 2,
      thinker: "Max Weber",
      plainIdea:
        "The job isn’t tied to who you are personally. Any trained, qualified person could step in and do the same work, so the organization never hangs on one individual.",
      courseDefinition:
        "Bureaucracies are most efficient when an individual bureaucrat is “separable” from their job: in principle any qualified and trained candidate could do the same work, so the organization does not depend on the particular characteristics of any one worker.",
      freshExample:
        "An airline gate agent’s shift ends mid-boarding; a new agent steps in and boarding continues without a hitch.",
      notToConfuse:
        "Organizational ownership means the organization supplies the tools, not the person. Separation means the organization doesn’t depend on the person at all.",
    },
    {
      id: "u6-org-ownership",
      term: "Organizational ownership of the means of production",
      tier: 2,
      thinker: "Max Weber",
      plainIdea:
        "The organization owns the tools of the job, so the work doesn’t depend on whether its workers happen to own (and are willing to lend) their own stuff.",
      courseDefinition:
        "Bureaucracies do not depend on any individual bureaucrat’s possessions to function; instead, the organizations supply their own.",
      freshExample:
        "A hospital gives every nurse scrubs, badge scanners, and workstation computers instead of asking them to bring their own.",
      notToConfuse:
        "Not about who owns the company’s stock. The point is that the work doesn’t depend on workers’ personal possessions.",
    },
    {
      id: "u6-org-chart",
      term: "Organizational chart",
      tier: 3,
      plainIdea:
        "The one-page picture of a bureaucracy: boxes for positions, lines for who reports to whom, and labels for who covers what.",
      courseDefinition:
        "The hallmark of bureaucracy. It expresses clear hierarchy and jurisdiction, delimits the expertise required at different ranks, and is itself a written record of the unit’s conduct and procedures that can be referred to if someone is “out of their lane.”",
      freshExample:
        "The diagram in a regional bank’s new-hire packet showing tellers under branch managers under the regional director.",
      notToConfuse:
        "A network map shows horizontal ties of any kind; an org chart shows vertical lines of authority.",
    },
    {
      id: "u6-org-functions",
      term: "Functions of bureaucracy (smaller than its reputation)",
      tier: 3,
      plainIdea:
        "Bureaucracy has a bad reputation, but compare how few people run the government with everything it does. Government at every level is well under a tenth of the US population: a small staff keeping a huge society running.",
      courseDefinition:
        "In mainstream American culture we think of bureaucracies as inefficient and “bad,” but the story is more complicated. The federal government is about 3 million people (excluding the military). Adding state, county, and local employees brings it to a couple dozen million, just under 8% of a population of about 343 million. That is how few people undertake all the functions that keep society functioning.",
      freshExample:
        "A license renewal you finish online in ten minutes is processed, along with millions of others, by a staff that is tiny next to the number of drivers it serves.",
      notToConfuse:
        "The dysfunctions (decoupling, panopticism) are the downside. The functions point is that bureaucracy is impressively effective and smaller than its reputation.",
    },
    {
      id: "u6-decoupling",
      term: "Decoupling",
      tier: 1,
      plainIdea:
        "Bureaucracies are great at pursuing goals, sometimes too great. They can drift away from the goal they were built for and start efficiently chasing a different one. That drift is what people mean when they say an organization has “lost its way.”",
      courseDefinition:
        "Bureaucracies can efficiently pursue given ends, but it can be difficult to get them to stick to the ends they have been given: they can become decoupled from their designed purposes and begin to pursue different ends. Accusing an organization of “losing its way” typically means it was designed for an explicit purpose but has drifted to actually pursuing another.",
      freshExample:
        "A tutoring center founded to help struggling students ends up mostly serving students who already have A’s, because that keeps its success numbers high.",
      notToConfuse:
        "A latent function (Unit 3) is a function participants aren’t aware of; decoupling is drift away from the designed purpose toward a different end. It isn’t panopticism (efficient discipline of many by a few) either.",
    },
    {
      id: "u6-panopticism",
      term: "Panopticism",
      tier: 1,
      thinker: "Michel Foucault",
      plainIdea:
        "If you can’t tell whether you’re being watched, you act as if you always are. That lets a handful of watchers keep huge numbers of people in line, and modern organizations, armed with technology, do this all the time.",
      courseDefinition:
        "Foucault’s term for effective discipline, built from an analogy to prison architecture. Prisoners in cells open to a central guard tower, who couldn’t tell whether the guard was looking, had to behave as though always observed, so very few guards could discipline a very large population. When bureaucracy’s inputs and outputs are people, its value-neutrality and efficiency mean discipline, control, and even violence can be exerted by a small minority on very large populations, especially when enabled by technology.",
      freshExample:
        "A ride-share app rates drivers on every trip using GPS data and passenger reports. Drivers never know which ride will be reviewed, so they drive every ride as if it will be.",
      notToConfuse:
        "Conformity is pressure from a group of peers; panopticism is a few observers disciplining many through the possibility of being watched. The notes call it a “dysfunction” that you might view as a function, depending on your values.",
    },
    {
      id: "u6-networks",
      term: "Networks",
      tier: 1,
      plainIdea:
        "A network is a map of dots and lines. The dots are people or organizations; the lines are the connections between them, like who talks to whom or who works with whom. Any social structure can be drawn this way.",
      courseDefinition:
        "Graphs of entities and their connections to one another. At their most abstract, networks can represent any kind of entity and any kind of tie; in typical social network analysis, the entities are people or organizations and the ties are traces of social interactions.",
      freshExample:
        "Mapping which students in a lecture message each other about homework: each student is a node, each conversation is a tie.",
      notToConfuse:
        "Not “networking” for jobs. And organizations are represented as vertical hierarchies, while network research emphasizes horizontal connections.",
    },
    {
      id: "u6-closure",
      term: "Closure",
      tier: 2,
      plainIdea:
        "Networks tend to fill in over time. As people keep interacting, more and more ties form across the network.",
      courseDefinition:
        "Social networks tend to exhibit patterns of closure: as social network dynamics unfold, more ties will tend to form across different nodes in the network.",
      freshExample:
        "In a new apartment building, residents start out knowing only the super. A year later, a web of neighbor-to-neighbor ties has filled in.",
      notToConfuse:
        "Not emotional “closure,” and not a network shutting itself off. Homophily is about WHO ties to whom (similar with similar); closure is ties accumulating.",
    },
    {
      id: "u6-homophily",
      term: "Homophily",
      tier: 2,
      plainIdea: "Birds of a feather: similar people (or organizations) tend to connect with others like them.",
      courseDefinition: "Similar entities within a network will tend to form ties with other entities like them.",
      freshExample:
        "By the end of orientation week, the commuters have mostly befriended other commuters and the varsity athletes other athletes.",
      notToConfuse:
        "In-group/out-group is a claimed fundamental difference, with status and exclusion; homophily is just similar entities tending to tie. Contagion is something spreading along ties, not who forms them.",
    },
    {
      id: "u6-contagion",
      term: "Contagion",
      tier: 2,
      plainIdea: "Behaviors and feelings can spread from person to person along network ties, the way a cold spreads.",
      courseDefinition:
        "Behaviors and feelings can spread along social network ties (similar to how a disease spreads).",
      freshExample:
        "One coworker starts bringing lunch from home to save money. Within a month, the people she eats with do too, and then their lunch buddies.",
      notToConfuse:
        "Not just disease. And not homophily: contagion is something moving along existing ties; homophily is similar entities forming ties.",
    },
    {
      id: "u6-brokerage",
      term: "Brokerage",
      tier: 2,
      plainIdea:
        "If you’re the bridge between two clusters that otherwise don’t connect, you control what flows between them, and that’s power.",
      courseDefinition:
        "Entities perched between different regions of a network (a brokerage position) tend to have more power than those deeply embedded in one region or another.",
      freshExample:
        "The one employee who works both the day and night shifts becomes the person both crews’ managers rely on to get anything coordinated.",
      notToConfuse:
        "Not a stockbroker taking a fee, and not a boss: brokerage power comes from a position between regions, not from rank in a hierarchy.",
    },
    {
      id: "u6-weak-ties",
      term: "Strength of weak ties",
      tier: 2,
      plainIdea:
        "Your close friends mostly know what you already know. New information and opportunities tend to come from more distant connections: friends of friends.",
      courseDefinition:
        "Networks provide enormous social resources, especially when people leverage the “strength of weak ties”: drawing new resources and information not from entities closely tied to them, but from more distant “friends of friends.”",
      freshExample:
        "You hear about a paid summer research position from someone you’ve talked to twice, a friend of your old lab partner.",
      notToConfuse:
        "“Weak” doesn’t mean useless. Close ties give intensity and support; weak ties are where new resources and information come from.",
    },
    {
      id: "u6-network-vs-organization",
      term: "Network vs. organization: epistemological or ontological?",
      tier: 3,
      plainIdea:
        "Org charts show vertical ladders; network maps show horizontal webs. The open question is whether those are two different kinds of things out in the world, or two different ways of looking at the same thing.",
      courseDefinition:
        "Organizations are represented in terms of strict hierarchies, while network research emphasizes horizontal connections among entities across many kinds of ties. So it is worth asking whether the difference between networks and organizations is one of perspective (epistemological) or a concrete difference in the structure of social reality (ontological).",
      freshExample:
        "The same restaurant can be drawn as an org chart (owner → manager → line cooks) or as a web of who covers whose shifts. Is that two structures, or one structure seen two ways?",
      notToConfuse:
        "Ontological = about what exists; epistemological = about how we know (Unit 2). The notes pose this question; they don’t settle it.",
    },
  ],
  contrastSets: [
    {
      id: "u6-cs-structure-types",
      title: "The three varieties of social structure: groups, organizations, networks",
      conceptIds: ["u6-social-structures", "u6-group", "u6-bureaucracy", "u6-networks"],
      axis:
        "Groups: people who interact regularly and share an identity. Organizations (above all, bureaucracies): formally rationalized, with hierarchy, jurisdiction, and written rules. Networks: any entities and the ties between them, usually drawn horizontally.",
      test: "Is the key fact a shared “us” (group), a chain of formal positions and rules (organization), or a map of who is tied to whom (network)?",
    },
    {
      id: "u6-cs-aggregate-group",
      title: "Aggregate vs. group",
      conceptIds: ["u6-aggregate", "u6-group"],
      axis: "Two tests: ongoing, regular interaction, and a sense of collective identity. An aggregate has neither; it only shares a place.",
      test: "Do these people interact regularly AND think of themselves as an “us”? Both → group. Just sharing a place → aggregate.",
    },
    {
      id: "u6-cs-primary-secondary",
      title: "Primary vs. secondary group",
      conceptIds: ["u6-primary-group", "u6-secondary-group"],
      axis: "How strongly the group is intensive, emotionally-laden, and face-to-face. Primary = all of these, strongly; secondary = every other group.",
      test: "Do members see each other face to face often, feel strongly about each other, and treat belonging as central to who they are? If yes, primary; if not, secondary.",
    },
    {
      id: "u6-cs-in-out",
      title: "In-group vs. out-group (and how it differs from primary vs. secondary)",
      conceptIds: ["u6-in-out-group", "u6-primary-group", "u6-secondary-group", "u6-homophily"],
      axis:
        "In-group/out-group is the most general boundary every group depends on: a claimed fundamental difference, with the in-group usually said to have higher status and privilege. Primary/secondary sorts groups by intensity. Homophily is a network finding about similar entities forming ties, with no claim of rank.",
      test: "Is someone drawing an us/them line with status or exclusion (in/out-group), rating how intense a group is (primary/secondary), or noticing that similar people tend to connect (homophily)?",
    },
    {
      id: "u6-cs-reference",
      title: "Concrete vs. imagined reference group",
      conceptIds: ["u6-reference-group", "u6-reference-concrete", "u6-reference-imagined"],
      axis:
        "Both are groups used as a standard to judge your own behavior. Concrete = specific people you know (“what would my family think?”); imagined = a category of people you picture (“what would doctors think?”).",
      test: "Could you name the actual people whose reaction you’re picturing? Yes → concrete. A type of person you picture or hope to become → imagined.",
    },
    {
      id: "u6-cs-group-size",
      title: "The group size paradox: stability vs. intensity",
      conceptIds: ["u6-group-size-paradox", "u6-group"],
      axis:
        "As a group grows it gains stability (one exit doesn’t dissolve it) and loses intensity (many more potential relationships).",
      test: "Is the point that a bigger group survives departures (stability), or that it feels less close (intensity)? Larger means both: more stable AND less intense.",
    },
    {
      id: "u6-cs-weber-seven",
      title: "Weber’s seven features of the ideal-type bureaucracy",
      conceptIds: [
        "u6-ideal-type",
        "u6-jurisdiction",
        "u6-expert-training",
        "u6-hierarchy",
        "u6-written-rules",
        "u6-full-time-officials",
        "u6-separation-private",
        "u6-org-ownership",
      ],
      axis:
        "Each feature answers a different question. Jurisdiction: which domain is this position’s? Expert training: who is qualified, and how is it proven? Hierarchy: who answers to whom? Written rules: is it on file and in the procedures? Full-time: can officials concentrate on the job? Separation: could any trained person do it? Ownership: who supplies the tools?",
      test: "Ask what the scenario turns on: turf, credentials, chain of command, files and procedures, undivided time, interchangeable workers, or organization-supplied equipment.",
    },
    {
      id: "u6-cs-functions-dysfunctions",
      title: "Bureaucracy’s functions vs. dysfunctions (decoupling, panopticism)",
      conceptIds: ["u6-org-functions", "u6-decoupling", "u6-panopticism"],
      axis:
        "Functions: a small, efficient apparatus delivering given ends. Decoupling: efficiently pursuing the WRONG end, drifting from the designed purpose. Panopticism: efficiency turned on people, so a small minority can discipline very large populations.",
      test: "Is the organization doing its job well with few people (function), drifting to a different goal (decoupling), or controlling many people through the possibility of observation (panopticism)?",
    },
    {
      id: "u6-cs-org-network",
      title: "Organization (vertical hierarchy) vs. network (horizontal ties)",
      conceptIds: ["u6-bureaucracy", "u6-hierarchy", "u6-org-chart", "u6-networks", "u6-network-vs-organization"],
      axis:
        "Organizations are represented as strict hierarchies with lines of authority; network research emphasizes horizontal connections among entities across many kinds of ties.",
      test: "Is the picture a chain of command (organization) or a web of who is tied to whom (network)?",
    },
    {
      id: "u6-cs-network-findings",
      title: "Five findings of network analysis",
      conceptIds: ["u6-closure", "u6-homophily", "u6-contagion", "u6-brokerage", "u6-weak-ties"],
      axis:
        "Closure: ties accumulate as the network develops. Homophily: similar entities tie with similar. Contagion: behaviors and feelings spread along ties. Brokerage: positions between regions bring power. Weak ties: new resources come from distant friends of friends.",
      test: "Is the scenario about ties filling in, who ties to whom, something spreading, a bridge between clusters, or help from a distant acquaintance?",
    },
    {
      id: "u6-cs-primary-group-socialization",
      title: "Primary/secondary GROUP (U6) vs. primary/secondary SOCIALIZATION (U5)",
      conceptIds: ["u6-primary-group", "u6-secondary-group", "u5-primary-socialization", "u5-secondary-socialization"],
      axis:
        "Same adjectives, different axes. Groups are sorted by intensity: primary = intensive, emotional, face-to-face. Socialization is sorted by life stage and source: primary = early childhood into adolescence, usually family and caregivers; secondary = continuing through life, from media, work, peers, and sources you seek out.",
      test: "Is the question how intense and face-to-face a group is (U6), or when and from whom someone learns to be in the world (U5)?",
      crossUnit: true,
    },
    {
      id: "u6-cs-reference-generalized",
      title: "Reference group (U6) vs. Mead’s generalized other (U5)",
      conceptIds: ["u6-reference-concrete", "u6-reference-imagined", "u5-generalized-other"],
      axis:
        "A reference group is a particular group, concrete or imagined, used as a standard to judge your behavior. The generalized other is the abstract, general picture of what “people” would think, which develops as socialization proceeds.",
      test: "Is the yardstick a specific group (family, doctors) or “people” in general?",
      crossUnit: true,
    },
    {
      id: "u6-cs-bureaucracy-rationalization",
      title: "Bureaucracy (U6) and formal vs. substantive rationalization (U2)",
      conceptIds: ["u6-bureaucracy", "u2-formal-rationalization", "u2-substantive-rationalization"],
      axis:
        "Bureaucracy is defined by its very high degree of FORMAL rationalization: means-ends efficiency at delivering any given end. Substantive rationalization is spelling out explicit purposes in more domains of life, which is a different process.",
      test: "Is it about doing a given task as efficiently as possible (formal, the bureaucratic hallmark) or about articulating what the purpose should be (substantive)?",
      crossUnit: true,
    },
    {
      id: "u6-cs-panopticism-writing",
      title: "Writing as a vector of power (U4) vs. panopticism (U6)",
      conceptIds: ["u4-writing", "u6-written-rules", "u6-panopticism"],
      axis:
        "Unit 4: writing lets a central authority track, record, and observe people at large scale. Unit 6 builds on it twice: written files let interchangeable officials process cases, and panopticism shows how efficient, often technology-enabled observation lets a small minority discipline very large populations.",
      test: "Is the point that records make people trackable (writing / written records), or that the possibility of being watched makes people discipline themselves (panopticism)?",
      crossUnit: true,
    },
    {
      id: "u6-cs-decoupling-latent",
      title: "Decoupling (U6) vs. latent function (U3)",
      conceptIds: ["u6-decoupling", "u3-latent-function", "u3-manifest-function"],
      axis:
        "A latent function is a function participants aren’t aware of. Decoupling is an organization drifting from its designed, explicit purpose to actually pursue a different end.",
      test: "Is the point that people don’t notice a side function (latent), or that the organization has swapped its goal (decoupling)?",
      crossUnit: true,
    },
    {
      id: "u6-cs-structures-structure",
      title: "Social structures (U6) vs. structure and agency (U2)",
      conceptIds: ["u6-social-structures", "u2-structure", "u2-agency"],
      axis:
        "Unit 2’s structure is patterned social phenomena we encounter as given and choose within. Unit 6 names the concrete forms those patterns take: regular patterns of interaction organized as groups, organizations, and networks.",
      test: "Is the question about structure vs. choice in general (U2), or about which kind of structure (group, organization, network) you’re looking at (U6)?",
      crossUnit: true,
    },
    {
      id: "u6-cs-network-ontology",
      title: "Network vs. organization as an ontological or epistemological difference (U2)",
      conceptIds: ["u6-network-vs-organization", "u2-ontology", "u2-epistemology"],
      axis:
        "Epistemological: networks and organizations are two perspectives on the same social reality. Ontological: they are concretely different structures in social reality.",
      test: "Is the claim about how we look at and know the structure (epistemological) or about what is really there (ontological)?",
      crossUnit: true,
    },
    {
      id: "u6-cs-conformity-experiment",
      title: "Experiment as a method (U3) vs. conformity as a finding (U6)",
      conceptIds: ["u3-experiment", "u6-conformity"],
      axis:
        "Unit 3’s experiment is a method: intervene, then compare outcomes. Asch and Milgram used experimental designs; what they found (Unit 6) is that groups exert enormous coercive power on their members.",
      test: "Is the question about how the knowledge was produced (method) or what it showed about groups (finding)?",
      crossUnit: true,
    },
  ],
  falseFriends: [
    {
      id: "u6-ff-structure",
      conceptId: "u6-social-structures",
      term: "Structure",
      everyday: "A building, a bridge, or some physical framework.",
      course: "Regular patterns of interaction that organize social life: groups, organizations, and networks.",
      trap: "You may look for something physical. A social structure is a repeated pattern of who interacts with whom and how.",
    },
    {
      id: "u6-ff-group",
      conceptId: "u6-group",
      term: "Group",
      everyday: "Any bunch of people in one place (“a group of people at the bus stop”).",
      course: "People who interact regularly, share expectations, and share some collective identity. Without those, it’s an aggregate.",
      trap: "A crowd that merely shares a place is an aggregate, not a group, even if everyday English calls it one.",
    },
    {
      id: "u6-ff-primary",
      conceptId: "u6-primary-group",
      term: "Primary",
      everyday: "First, or most important.",
      course: "Primary groups are intensive, emotionally-laden, and face-to-face.",
      trap: "A group isn’t primary because it came first in your life or because it matters most on paper (a huge national organization you care about can still be secondary). It also isn’t primary socialization.",
    },
    {
      id: "u6-ff-bureaucracy",
      conceptId: "u6-bureaucracy",
      term: "Bureaucracy",
      everyday: "Red tape, slowness, inefficiency: “the government.”",
      course: "A formal organization with a very high degree of formal rationalization, efficient at delivering given ends. And “the government” is smaller relative to the population than people assume.",
      trap: "You’ll pick an answer equating bureaucracy with inefficiency. In the course, efficiency is its defining trait, and its downsides are decoupling and panopticism.",
    },
    {
      id: "u6-ff-ideal",
      conceptId: "u6-ideal-type",
      term: "Ideal (type)",
      everyday: "The best, most desirable version.",
      course: "A pure, extreme model that works like an index: the more features, expressed more intensely, the more bureaucratic.",
      trap: "An “ideal-type bureaucracy” isn’t being praised. And real bureaucracies needn’t have every feature.",
    },
    {
      id: "u6-ff-rational",
      conceptId: "u6-bureaucracy",
      term: "Rational (formal rationalization)",
      everyday: "Smart, sensible, reasonable.",
      course: "The extent to which an organization’s features efficiently and effectively deliver any given end: means-ends efficiency, whatever the end.",
      trap: "A highly rationalized organization can efficiently pursue a bad or drifting goal (decoupling, panopticism). “Rational” here isn’t a compliment.",
    },
    {
      id: "u6-ff-network",
      conceptId: "u6-networks",
      term: "Network / networking",
      everyday: "Schmoozing at career fairs to get a job.",
      course: "Graphs of entities (usually people or organizations) and their connections (usually traces of social interaction).",
      trap: "A network question is about patterns of ties (closure, homophily, contagion, brokerage, weak ties), not career-fair tips.",
    },
    {
      id: "u6-ff-weak-ties",
      conceptId: "u6-weak-ties",
      term: "Weak ties",
      everyday: "Useless, flimsy acquaintances.",
      course: "Distant “friends of friends” who are often the source of NEW resources and information.",
      trap: "A statement that weak ties matter little, or that new information comes mainly from your closest friends, reverses the finding.",
    },
    {
      id: "u6-ff-contagion",
      conceptId: "u6-contagion",
      term: "Contagion",
      everyday: "A disease spreading.",
      course: "Behaviors and feelings spreading along social network ties. Disease is only the analogy.",
      trap: "A scenario about a habit or mood spreading through friends is contagion, even though nobody is sick.",
    },
    {
      id: "u6-ff-closure",
      conceptId: "u6-closure",
      term: "Closure",
      everyday: "Emotional resolution, or something shutting down.",
      course: "As network dynamics unfold, more ties tend to form across nodes: the network fills in.",
      trap: "Closure isn’t a network ending or closing itself off; it means ties are accumulating.",
    },
    {
      id: "u6-ff-brokerage",
      conceptId: "u6-brokerage",
      term: "Broker / brokerage",
      everyday: "A middleman who takes a fee (stockbroker, real-estate broker).",
      course: "A position between different regions of a network, which tends to bring more power than being embedded in one region.",
      trap: "Brokerage isn’t about commissions or rank. It’s about where you sit in the network.",
    },
  ],
  magnitudes: [
    {
      id: "u6-m-federal",
      prompt: "About how many people work for the US federal government, excluding the military?",
      answer: "About 3 million",
      whyItMatters:
        "For a country of about 343 million, that’s a small staff for everything the federal government does. That’s the notes’ case that bureaucracy is more effective, and less bloated, than its reputation.",
    },
    {
      id: "u6-m-all-levels",
      prompt: "Adding state, county, and local employees, about how many government workers are there in all?",
      answer: "A couple dozen million (the notes give roughly 24–27 million)",
      whyItMatters:
        "Even counting every level, including state employees like SUNY professors, it’s a small minority of the country carrying out the functions that keep society running.",
    },
    {
      id: "u6-m-share",
      prompt: "Government at all levels is about what share of the US population?",
      answer: "Just under 8%: well under a tenth",
      whyItMatters:
        "This is the punchline of the functions argument. The “government bureaucracy” people imagine as huge is a small fraction of the population, which shows how much a formally rationalized organization can do with few people.",
    },
    {
      id: "u6-m-mostly-local",
      prompt: "Are most government workers federal, or state/county/local?",
      answer: "Mostly state, county, and local: federal civilians are about 3 million of the couple dozen million",
      whyItMatters:
        "“The government” isn’t one giant federal office. Most of it is spread across states and localities, and even all together it’s small relative to the population.",
    },
    {
      id: "u6-m-asch",
      prompt: "In Asch’s 1951 experiment, how often did participants yield to the group’s false belief?",
      answer: "About a third of the time",
      whyItMatters:
        "Even about something as checkable as which line is longer, the group won a large share of the time: evidence that groups exert enormous coercive power on their members.",
    },
    {
      id: "u6-m-milgram",
      prompt: "In Milgram’s original 1961 experiment, how many participants administered 300-volt shocks?",
      answer: "Every participant",
      whyItMatters:
        "People who believed they were seriously harming someone still followed directions. It’s the notes’ most dramatic evidence of the coercive power of the social situation.",
    },
  ],
  questions: [
    // ───────────── Conceptual ─────────────
    {
      id: "u6-q1",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u6-social-structures"],
      stem: "In the notes, “social structures” are…",
      options: [
        {
          text: "The buildings and physical spaces where social life takes place",
          why: "That’s the everyday sense of “structure.” The course meaning is about patterns of interaction, not physical frameworks.",
        },
        {
          text: "The regular patterns of interaction which organize social life",
          correct: true,
          why: "That’s the notes’ definition: the binding agents connecting people-in-society, in the forms of groups, organizations, and networks.",
        },
        {
          text: "The formal laws a government writes down",
          why: "Written rules are one feature of bureaucracy, but social structures are much broader: any regular pattern of interaction, most of it unwritten.",
        },
        {
          text: "The choices individuals make free of outside influence",
          why: "That’s closer to agency (Unit 2), which is structure’s counterpart, not structure itself.",
        },
      ],
    },
    {
      id: "u6-q2",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-social-structures", "u6-group", "u6-bureaucracy", "u6-networks"],
      stem: "According to the notes, social structures come in three main varieties. Which list matches?",
      options: [
        {
          text: "Values, norms, and material culture",
          why: "Those are Unit 4’s three dimensions of culture, not the varieties of social structure.",
        },
        {
          text: "Aggregates, crowds, and audiences",
          why: "An aggregate is the thing groups grow out of; it isn’t yet a social structure with regular interaction.",
        },
        {
          text: "Groups, organizations, and networks",
          correct: true,
          why: "The notes name exactly these three, and the chapter is organized around them in that order.",
        },
        {
          text: "Micro, meso, and macro",
          why: "Those are levels of analysis from earlier units, not kinds of social structure.",
        },
      ],
    },
    {
      id: "u6-q3",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-group", "u6-aggregate", "u6-primary-group"],
      stem: "The notes give two key distinctions of “group-ness” that separate a group from an aggregate. What are they?",
      options: [
        {
          text: "Being face-to-face and being emotionally intense",
          why: "Those features separate primary groups from secondary groups. Both are already groups.",
        },
        {
          text: "Having a formal leader and written rules",
          why: "Leaders and written rules point toward organizations and bureaucracy, not the basic test for being a group.",
        },
        {
          text: "Being larger than a few people and lasting more than a year",
          why: "The notes give no size or time cutoff; group size affects stability and intensity, not whether something is a group.",
        },
        {
          text: "Ongoing, regular interaction and a sense of collective identity",
          correct: true,
          why: "These are the two tests. An aggregate lacks both: its members just happen to share a place.",
        },
      ],
    },
    {
      id: "u6-q4",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-primary-group", "u6-secondary-group", "u6-reference-group"],
      stem: "Groups that are strongly intensive, emotionally-laden, and face-to-face are called…",
      options: [
        {
          text: "Primary groups",
          correct: true,
          why: "That’s the definition: groups expressing all of these features strongly.",
        },
        {
          text: "Secondary groups",
          why: "Secondary groups are all the others, the ones that don’t strongly express these features.",
        },
        {
          text: "Reference groups",
          why: "A reference group is defined by its use as a standard for judging your own behavior, not by intensity.",
        },
        {
          text: "In-groups",
          why: "The in-group is one side of the us/them boundary every group depends on; it isn’t defined by face-to-face intensity.",
        },
      ],
    },
    {
      id: "u6-q5",
      skill: "conceptual",
      format: "tf",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u6-secondary-group", "u6-aggregate"],
      stem:
        "True/False: Because secondary groups are not intensive, emotionally-laden, and face-to-face, the notes treat them as aggregates rather than real groups.",
      options: [
        {
          text: "True",
          why: "“Secondary” sounds like “not really a group,” but it isn’t. Secondary groups still interact regularly and share some identity; they’re just less intense.",
        },
        {
          text: "False",
          correct: true,
          why: "Secondary groups are groups. An aggregate lacks regular interaction and collective identity entirely; a secondary group just lacks the primary group’s intensity.",
        },
      ],
    },
    {
      id: "u6-q6",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-in-out-group", "u6-primary-group", "u6-homophily"],
      stem:
        "At the most general level, the notes say all groups depend on the claim that there is a fundamental difference within a population between members and non-members, with members usually said to have higher status. This is…",
      options: [
        {
          text: "Homophily",
          why: "Homophily is a network finding that similar entities tend to form ties. It makes no claim about status or fundamental difference.",
        },
        {
          text: "The in-group/out-group distinction",
          correct: true,
          why: "Right: the in-group is usually said to have higher status and privilege, and the line can be the basis for exclusion or even violence.",
        },
        {
          text: "The primary/secondary distinction",
          why: "Primary/secondary sorts groups by how intense, emotional, and face-to-face they are, not by an us/them status claim.",
        },
        {
          text: "Brokerage",
          why: "Brokerage is about the power of positions between regions of a network.",
        },
      ],
    },
    {
      id: "u6-q7",
      skill: "conceptual",
      format: "tf",
      tier: 1,
      conceptIds: ["u6-in-out-group", "u2-social-construction"],
      stem:
        "True/False: According to the notes, because groups are social constructions, it is rarely predictable exactly what will form the basis of an in-group/out-group distinction.",
      options: [
        {
          text: "True",
          correct: true,
          why: "The notes say exactly this: the bases of in-/out-group lines range across all possible bases for identity, precisely because groups exist through shared belief.",
        },
        {
          text: "False",
          why: "The notes stress unpredictability. Nothing fixed in nature decides where the us/them line falls.",
        },
      ],
    },
    {
      id: "u6-q8",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-reference-group", "u6-primary-group", "u6-in-out-group", "u5-generalized-other"],
      stem: "When we use our membership in a group as a standard to judge the propriety of our own behavior, the notes call that group a…",
      options: [
        {
          text: "Primary group",
          why: "A primary group is defined by intensity (emotional, face-to-face), not by being used as a yardstick, though a primary group can also serve as one.",
        },
        {
          text: "Out-group",
          why: "The out-group is the side excluded by an in-group’s claim of difference.",
        },
        {
          text: "Reference group",
          correct: true,
          why: "Reference groups are the standards we judge ourselves by. They can be concrete or imagined.",
        },
        {
          text: "Generalized other",
          why: "Mead’s generalized other (Unit 5) is an abstract picture of what “people” in general think, not a particular group used as a standard.",
        },
      ],
    },
    {
      id: "u6-q9",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-reference-concrete", "u6-reference-imagined"],
      stem: "What separates a concrete reference group from an imagined one?",
      options: [
        {
          text: "Concrete groups meet in person; imagined groups meet online",
          why: "Tempting, but the notes’ distinction isn’t about the medium. It’s whether the standard is actual people you know or a category you picture.",
        },
        {
          text: "Concrete groups are large and stable; imagined groups are small and intense",
          why: "That borrows the group size paradox, which is unrelated to reference groups.",
        },
        {
          text: "Concrete groups are in-groups; imagined groups are out-groups",
          why: "Both kinds can be groups you identify with; the in/out line is a different distinction.",
        },
        {
          text: "Concrete: specific people you know (“what would my family think?”); imagined: a category you picture (“what would doctors think?”)",
          correct: true,
          why: "That’s the notes’ pair of examples. Imagined reference groups are often groups you hope to join.",
        },
      ],
    },
    {
      id: "u6-q10",
      skill: "conceptual",
      format: "mc",
      trap: "reversal",
      tier: 2,
      conceptIds: ["u6-group-size-paradox"],
      stem: "What is the paradox of group size described in the notes?",
      options: [
        {
          text: "Larger groups become more stable but less intense",
          correct: true,
          why: "More stable because one member leaving doesn’t dissolve the group; less intense because there are many more potential relationships.",
        },
        {
          text: "Larger groups become less stable but more intense",
          why: "This flips both halves. A bigger group survives departures better, and its many potential relationships dilute intensity.",
        },
        {
          text: "Larger groups always turn into bureaucracies",
          why: "The notes make no such claim; bureaucracy is defined by formal rationalization, not size.",
        },
        {
          text: "Larger groups exert less coercive pressure on members",
          why: "The notes don’t tie conformity to size; they say groups in general exert enormous coercive power.",
        },
      ],
    },
    {
      id: "u6-q11",
      skill: "conceptual",
      format: "mc",
      trap: "misattribution",
      tier: 2,
      conceptIds: ["u6-conformity"],
      stem:
        "Whose 1951 experiment found that participants led to believe their group held a false belief yielded to that belief about a third of the time?",
      options: [
        {
          text: "Stanley Milgram",
          why: "Milgram’s 1961 New Haven experiments had participants believe they were harming another participant on an experimenter’s directions, a different design.",
        },
        {
          text: "Michel Foucault",
          why: "Foucault is the source of panopticism, not a conformity experiment.",
        },
        {
          text: "Solomon Asch",
          correct: true,
          why: "Asch (1951) is the false-group-belief study, with yielding about a third of the time.",
        },
        {
          text: "Max Weber",
          why: "Weber outlined the ideal type of bureaucracy; he didn’t run conformity experiments.",
        },
      ],
    },
    {
      id: "u6-q12",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 2,
      conceptIds: ["u6-conformity", "u3-experiment"],
      stem:
        "True/False: The notes present the Asch and Milgram experiments as evidence that most individuals resist group pressure when it conflicts with what they know.",
      options: [
        {
          text: "True",
          why: "This reverses the notes. They use both experiments to show that groups exert enormous coercive power on their members.",
        },
        {
          text: "False",
          correct: true,
          why: "Asch’s participants yielded about a third of the time, and in Milgram’s original experiment every participant administered 300-volt shocks.",
        },
      ],
    },
    {
      id: "u6-q13",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u6-bureaucracy", "u2-formal-rationalization"],
      stem: "According to the notes, what distinguishes a bureaucracy from other kinds of organization?",
      options: [
        {
          text: "Its very high degree of formal rationalization",
          correct: true,
          why: "Formal rationalization is the extent to which an organization’s features efficiently and effectively deliver any given end, and bureaucracy has the most of it.",
        },
        {
          text: "Its red tape and inefficiency",
          why: "That’s the everyday reputation. The notes argue the opposite: bureaucracy is defined by efficiency and is smaller than people assume.",
        },
        {
          text: "Being run by the government",
          why: "Bureaucracy is a kind of formal organization in general; universities, hospitals, and companies can be bureaucratic too.",
        },
        {
          text: "Its dense horizontal ties among equal members",
          why: "Horizontal ties are what network research emphasizes. Bureaucracies are represented as strict vertical hierarchies.",
        },
      ],
    },
    {
      id: "u6-q14",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 2,
      conceptIds: ["u6-ideal-type", "u6-bureaucracy"],
      stem: "In the notes, Weber’s “ideal type” of bureaucracy is best understood as…",
      options: [
        {
          text: "The best, most desirable way to run an organization",
          why: "“Ideal” in everyday English means the best. Here it means the pure, extreme model, with no praise implied.",
        },
        {
          text: "Something like an index: the more of the seven features an organization has, and the more intensely, the more bureaucratic it is",
          correct: true,
          why: "That’s the notes’ gloss. Not every bureaucracy has every feature equally, but the most extreme one we can imagine would have them all.",
        },
        {
          text: "A description that every real bureaucracy matches exactly",
          why: "The notes say the opposite: real bureaucracies fulfill the features to different degrees.",
        },
        {
          text: "The organization chart of a particular office",
          why: "The org chart is the hallmark of bureaucracy, but the ideal type is the abstract model behind it.",
        },
      ],
    },
    {
      id: "u6-q15",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: [
        "u6-jurisdiction",
        "u6-hierarchy",
        "u6-written-rules",
        "u6-org-ownership",
      ],
      stem: "Which of these would run AGAINST one of Weber’s seven features of the ideal-type bureaucracy?",
      options: [
        {
          text: "Positions defined by the domains they oversee",
          why: "That’s defined jurisdictional areas, one of the seven.",
        },
        {
          text: "Clear lines of authority up to the head of the organization",
          why: "That’s clear-cut hierarchy, one of the seven.",
        },
        {
          text: "Officials who must bring their own vehicles and tools to do the work",
          correct: true,
          why: "This is the opposite of organizational ownership of the means of production: bureaucracies supply their own equipment rather than depending on workers’ possessions.",
        },
        {
          text: "Written procedures officials can be held accountable to",
          why: "That’s written rules of conduct and procedure, one of the seven.",
        },
      ],
    },
    {
      id: "u6-q16",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u6-separation-private", "u6-full-time-officials", "u6-expert-training", "u6-org-ownership"],
      stem:
        "“In principle any qualified and trained candidate could do the same work, so the organization does not depend on the particular characteristics of any one worker.” Which of Weber’s features is this?",
      options: [
        {
          text: "Full-time salaried officials",
          why: "Full-time is about officials concentrating on one job, not about whether they can be replaced.",
        },
        {
          text: "Expert training",
          why: "Expert training is about demonstrated qualification and credentials. This quote is about the organization not hanging on any one person.",
        },
        {
          text: "Organizational ownership of the means of production",
          why: "That’s about the organization supplying the equipment, not the worker being interchangeable.",
        },
        {
          text: "Separation between organizational and private life",
          correct: true,
          why: "The bureaucrat is “separable” from the job, so any qualified person could step in.",
        },
      ],
    },
    {
      id: "u6-q17",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-decoupling", "u6-panopticism", "u3-latent-function", "u6-brokerage"],
      stem:
        "When an organization designed for an explicit purpose drifts into actually pursuing different ends (“losing its way”), the notes say it has become…",
      options: [
        {
          text: "Panoptic",
          why: "Panopticism is a few observers disciplining many through the possibility of being watched, not drift from a purpose.",
        },
        {
          text: "Decoupled",
          correct: true,
          why: "Decoupling is the notes’ term for bureaucracies drifting from their designed purposes to pursue different ends.",
        },
        {
          text: "A latent function",
          why: "A latent function (Unit 3) is a function participants aren’t aware of. Decoupling is a change in the end the organization actually pursues.",
        },
        {
          text: "A brokerage position",
          why: "Brokerage is a network position between regions that brings power.",
        },
      ],
    },
    {
      id: "u6-q18",
      skill: "conceptual",
      format: "mc",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u6-panopticism"],
      stem:
        "Which thinker called the effective discipline of large populations by a small minority “panopticism,” building from an analogy to prison architecture?",
      options: [
        {
          text: "Max Weber",
          why: "Weber gave the seven features of the ideal-type bureaucracy. The prison analogy comes from someone else.",
        },
        {
          text: "Solomon Asch",
          why: "Asch ran the 1951 conformity experiment about a group’s false belief.",
        },
        {
          text: "Stanley Milgram",
          why: "Milgram ran the 1961 obedience experiments in New Haven.",
        },
        {
          text: "Michel Foucault",
          correct: true,
          why: "The notes credit the historian and social theorist Michel Foucault with panopticism.",
        },
      ],
    },
    {
      id: "u6-q19",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-panopticism", "u6-conformity", "u6-hierarchy"],
      stem: "According to the notes, why can very few guards discipline a very large population in the panoptic prison?",
      options: [
        {
          text: "Prisoners can’t tell whether they’re being watched, so they must behave as though they’re observed at all times",
          correct: true,
          why: "That’s the mechanism: the possibility of observation does the work, so one guard doesn’t have to watch one prisoner.",
        },
        {
          text: "Prisoners pressure each other into obeying the rules",
          why: "That sounds like group conformity. The notes’ mechanism is observation from a central tower.",
        },
        {
          text: "A long chain of command assigns one guard to watch each prisoner",
          why: "This reverses the point. Panopticism means you don’t need one observer per person.",
        },
        {
          text: "Prisoners are fully separated from any guard’s line of sight",
          why: "The opposite: the cells were open to the central tower, and prisoners just couldn’t tell when the guard was looking.",
        },
      ],
    },
    {
      id: "u6-q20",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u6-networks", "u6-hierarchy", "u6-aggregate"],
      stem: "In sociology, as the notes use the term, “networks” are…",
      options: [
        {
          text: "Meeting people strategically to advance your career",
          why: "That’s everyday “networking.” The course concept is a way of representing any social structure.",
        },
        {
          text: "Chains of command with clear lines of authority",
          why: "That’s clear-cut hierarchy, how the notes represent organizations. Network research emphasizes horizontal ties.",
        },
        {
          text: "Graphs of entities and their connections to one another",
          correct: true,
          why: "That’s the definition. Typically the entities are people or organizations and the ties are traces of social interaction.",
        },
        {
          text: "Collections of people in one place who don’t interact",
          why: "That’s an aggregate, which has no ties at all to map.",
        },
      ],
    },
    {
      id: "u6-q21",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u6-homophily", "u6-closure", "u6-contagion", "u6-brokerage"],
      stem: "The network finding that similar entities tend to form ties with other entities like them is called…",
      options: [
        {
          text: "Closure",
          why: "Closure is that more ties tend to form across nodes as the network develops. It says nothing about similarity.",
        },
        {
          text: "Contagion",
          why: "Contagion is behaviors and feelings spreading along existing ties.",
        },
        {
          text: "Brokerage",
          why: "Brokerage is the extra power of positions between different regions of a network.",
        },
        {
          text: "Homophily",
          correct: true,
          why: "Homophily: like ties to like.",
        },
      ],
    },
    {
      id: "u6-q22",
      skill: "conceptual",
      format: "tf",
      trap: "everyday-meaning",
      tier: 2,
      conceptIds: ["u6-weak-ties"],
      stem:
        "True/False: According to the notes, people draw new resources and information mainly from those closest to them, which is why weak ties matter little.",
      options: [
        {
          text: "True",
          why: "“Weak” sounds useless, but the notes say the reverse: the “strength of weak ties” is drawing new resources from distant friends of friends.",
        },
        {
          text: "False",
          correct: true,
          why: "New resources and information come not from close ties but from more distant “friends of friends.” That’s the strength of weak ties.",
        },
      ],
    },
    {
      id: "u6-q23",
      skill: "conceptual",
      format: "tf",
      trap: "everyday-meaning",
      tier: 2,
      conceptIds: ["u6-contagion"],
      stem: "True/False: In network analysis, “contagion” refers only to the spread of infectious disease along social ties.",
      options: [
        {
          text: "True",
          why: "That’s the everyday meaning. The notes use disease only as an analogy.",
        },
        {
          text: "False",
          correct: true,
          why: "Contagion is behaviors and feelings spreading along network ties, similar to how a disease spreads.",
        },
      ],
    },
    {
      id: "u6-q24",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 1,
      conceptIds: ["u6-network-vs-organization", "u6-networks", "u6-hierarchy"],
      stem:
        "True/False: In the notes, organizations are represented in terms of horizontal connections, while network research emphasizes strict hierarchies.",
      options: [
        {
          text: "True",
          why: "This swaps the two. Organizations are the strict hierarchies; networks are the horizontal ties.",
        },
        {
          text: "False",
          correct: true,
          why: "Organizations are represented as strict (vertical) hierarchies, and network research emphasizes horizontal connections across many kinds of ties.",
        },
      ],
    },
    {
      id: "u6-q25",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 3,
      conceptIds: ["u6-network-vs-organization", "u2-ontology", "u2-epistemology"],
      stem: "The notes end by asking whether the difference between networks and organizations is…",
      options: [
        {
          text: "One of perspective (epistemological) or a concrete difference in social reality (ontological)",
          correct: true,
          why: "That’s the open question. Two ways of seeing one reality, or two different things out there?",
        },
        {
          text: "Micro (face-to-face) or macro (whole-society)",
          why: "The notes’ question is not about level of analysis.",
        },
        {
          text: "A manifest function or a latent function",
          why: "Manifest/latent (Unit 3) is about whether participants are aware of a function. It’s unrelated to this question.",
        },
        {
          text: "Formally or substantively rationalized",
          why: "That pair (Unit 2) is about efficiency logic vs. explicit purposes, not about networks vs. organizations.",
        },
      ],
    },
    {
      id: "u6-q26",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-primary-group", "u5-primary-socialization"],
      stem: "A classmate says, “A primary group is just the group that does your primary socialization in early childhood.” What is the best correction?",
      options: [
        {
          text: "They’re right: the two terms mean the same thing",
          why: "Same adjective, different concepts. One sorts groups by intensity, the other sorts socialization by life stage.",
        },
        {
          text: "A primary group is the first group you ever joined, whatever its character",
          why: "That’s the everyday “first” reading of primary, which isn’t the course definition.",
        },
        {
          text: "A primary group is the most important group in society, like the government",
          why: "“Primary” doesn’t mean most important, and a government is a bureaucracy, not a face-to-face group.",
        },
        {
          text: "A primary group is defined by being intensive, emotional, and face-to-face at any age; primary socialization (Unit 5) is the early-childhood stage of learning to be in the world",
          correct: true,
          why: "Family may be both, but an adult’s tight work crew can be a primary group too. The group term is about intensity, the socialization term about life stage.",
        },
      ],
    },
    {
      id: "u6-q27",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-decoupling", "u3-latent-function", "u3-manifest-function"],
      stem: "How does decoupling (Unit 6) differ from a latent function (Unit 3)?",
      options: [
        {
          text: "They’re the same idea: any outcome nobody planned",
          why: "They overlap loosely, but decoupling is specifically an organization drifting to pursue a different end, while a latent function is about participants’ unawareness.",
        },
        {
          text: "Decoupling is an organization drifting from its designed purpose to pursue different ends; a latent function is one participants aren’t aware of",
          correct: true,
          why: "That keeps the two straight: decoupling is about the goal changing, latent function is about who knows.",
        },
        {
          text: "Decoupling is good for society; latent functions are always harmful",
          why: "The notes list decoupling among bureaucracy’s dysfunctions, and latent functions aren’t defined as harmful.",
        },
        {
          text: "A latent function is a function participants are aware of",
          why: "That’s a manifest function.",
        },
      ],
    },
    {
      id: "u6-q28",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-panopticism", "u4-writing", "u6-decoupling", "u6-group-size-paradox", "u6-reference-imagined"],
      stem:
        "Unit 4 argued that writing lets a central authority track and observe people at a much larger scale. Which Unit 6 idea extends that line of thought most directly?",
      options: [
        {
          text: "The group size paradox",
          why: "That’s about groups trading intensity for stability as they grow, not about authorities monitoring people.",
        },
        {
          text: "Decoupling",
          why: "Decoupling is an organization drifting from its purpose. It isn’t about tracking or disciplining people.",
        },
        {
          text: "Panopticism",
          correct: true,
          why: "Efficient, technology-enabled observation lets a small minority discipline very large populations, Unit 4’s point about central control taken further.",
        },
        {
          text: "Imagined reference groups",
          why: "Those are standards you picture to judge your own behavior, not tools of central authority.",
        },
      ],
    },
    {
      id: "u6-q29",
      skill: "conceptual",
      format: "tf",
      tier: 1,
      conceptIds: ["u6-social-structures", "u2-structure"],
      stem:
        "True/False: Groups, organizations, and networks fit Unit 2’s idea of structure: patterned social phenomena that we encounter as given and must make our choices within.",
      options: [
        {
          text: "True",
          correct: true,
          why: "Unit 6’s social structures are regular patterns of interaction that organize social life. They’re the concrete forms Unit 2’s structure takes.",
        },
        {
          text: "False",
          why: "There’s no conflict: Unit 6 just breaks structure down into its three main varieties.",
        },
      ],
    },

    // ───────────── Application ─────────────
    {
      id: "u6-q30",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-aggregate", "u6-secondary-group", "u6-in-out-group", "u6-networks"],
      stem:
        "Forty passengers wait at the same airport gate for a delayed flight, each scrolling their own phone, never speaking. What are they?",
      options: [
        {
          text: "A secondary group",
          why: "A secondary group still interacts regularly and shares some identity. These passengers do neither.",
        },
        {
          text: "An aggregate",
          correct: true,
          why: "People who happen to be together in a place but don’t significantly interact or identify with one another.",
        },
        {
          text: "An in-group",
          why: "There’s no us/them claim here, and no group for it to define.",
        },
        {
          text: "A network",
          why: "You could draw anything as a network, but with no ties among them there’s nothing to map; the best fit is an aggregate.",
        },
      ],
    },
    {
      id: "u6-q31",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-group", "u6-aggregate", "u6-bureaucracy", "u6-in-out-group"],
      stem:
        "Commuters on the 7:10 train start nodding hello every morning, save each other seats, and make a group chat called “Car 4 Crew.” What has happened, in the notes’ terms?",
      options: [
        {
          text: "They are still an aggregate, since they only share a train car",
          why: "They were an aggregate. Now they interact regularly and have a shared identity (“Car 4 Crew”).",
        },
        {
          text: "They have become a bureaucracy, since the group chat has a name",
          why: "A bureaucracy needs high formal rationalization: jurisdiction, hierarchy, written rules, and so on. A named chat isn’t that.",
        },
        {
          text: "An aggregate has become a group: regular interaction plus a collective identity",
          correct: true,
          why: "Both tests of group-ness are now met. Groups emerge from aggregates in exactly this way.",
        },
        {
          text: "They have become an out-group",
          why: "Out-group is the excluded side of someone else’s us/them line. Nothing here excludes anyone.",
        },
      ],
    },
    {
      id: "u6-q32",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-primary-group", "u6-secondary-group", "u6-aggregate", "u6-reference-imagined"],
      stem:
        "Four roommates have lived together for three years. They cook dinner together nightly, confide in each other, and call the apartment their second family. Which concept fits best?",
      options: [
        {
          text: "Secondary group",
          why: "They are a group, but this one is strongly intensive, emotional, and face-to-face, which makes it primary.",
        },
        {
          text: "Aggregate",
          why: "Aggregates don’t interact or share identity. These roommates do both, intensely.",
        },
        {
          text: "Imagined reference group",
          why: "An imagined reference group is a category you picture judging you, not people you live with.",
        },
        {
          text: "Primary group",
          correct: true,
          why: "Intensive, emotionally-laden, and face-to-face, and central to their identities.",
        },
      ],
    },
    {
      id: "u6-q33",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-secondary-group", "u6-primary-group", "u6-aggregate"],
      stem:
        "A 300-member commuter-student association meets monthly. Members know some but not all of the others, wear the association’s pin, and say it matters a bit but isn’t central to who they are. Which concept fits best?",
      options: [
        {
          text: "Secondary group",
          correct: true,
          why: "They interact regularly and share an identity, so it’s a group, but it isn’t strongly intensive, emotional, and face-to-face.",
        },
        {
          text: "Primary group",
          why: "Members don’t share intense, emotional, face-to-face ties, and it isn’t central to who they are.",
        },
        {
          text: "Aggregate",
          why: "Monthly meetings and a shared identity mean they pass both group tests.",
        },
        {
          text: "Brokerage position",
          why: "Brokerage is about an entity sitting between regions of a network, not about a whole association.",
        },
      ],
    },
    {
      id: "u6-q34",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u6-primary-group", "u6-aggregate"],
      stem: "Which of these would be the strangest thing to call a primary group?",
      options: [
        {
          text: "A three-person band that rehearses four nights a week and fights and makes up like siblings",
          why: "Intensive, emotional, and face-to-face: a textbook primary group.",
        },
        {
          text: "Strangers standing in line together at the DMV",
          correct: true,
          why: "They aren’t even a group; they’re an aggregate, sharing a place without interacting or identifying with one another.",
        },
        {
          text: "A family that eats dinner together every night",
          why: "Close, emotional, face-to-face. This fits primary group well.",
        },
        {
          text: "A firefighter crew that lives at the station in shifts and relies on each other in danger",
          why: "Intense, emotional, and face-to-face, so this fits primary group even though they’re adults.",
        },
      ],
    },
    {
      id: "u6-q35",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-in-out-group", "u6-homophily", "u6-primary-group", "u6-closure"],
      stem:
        "At a high school, kids from the north side of town call themselves “Northies,” insist they’re classier than “south-siders,” and won’t let them sit at their lunch tables. Which concept fits best?",
      options: [
        {
          text: "Homophily",
          why: "Homophily is just similar entities tending to form ties. The stem stresses a claimed fundamental difference, higher status, and exclusion.",
        },
        {
          text: "In-group/out-group distinction",
          correct: true,
          why: "A claimed fundamental difference between “us” and “them,” with the in-group claiming higher status and using it to exclude.",
        },
        {
          text: "Primary group",
          why: "Nothing in the stem is about intense, face-to-face emotional bonds; it’s about the boundary and the status claim.",
        },
        {
          text: "Closure",
          why: "Closure is ties filling in across a network over time, not drawing an exclusionary line.",
        },
      ],
    },
    {
      id: "u6-q36",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-in-out-group", "u2-social-construction", "u6-group-size-paradox"],
      stem:
        "Two physically identical dorms on the same campus develop a fierce rivalry. Each chants that it’s the “real” campus and mocks the other. Which point from the notes does this best illustrate?",
      options: [
        {
          text: "Larger groups are more stable but less intense",
          why: "That’s the group size paradox; the stem isn’t about size.",
        },
        {
          text: "Groups are social constructions, so what forms the basis of an in-group/out-group line is rarely predictable",
          correct: true,
          why: "Nothing physical separates the dorms. The us/them line is built from shared belief, and could have formed around almost anything.",
        },
        {
          text: "Bureaucracies decouple from their designed purposes",
          why: "Dorm residents aren’t a bureaucracy pursuing a designed end.",
        },
        {
          text: "Weak ties bring new information",
          why: "Nothing here involves distant acquaintances supplying resources.",
        },
      ],
    },
    {
      id: "u6-q37",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-reference-concrete", "u6-reference-imagined", "u5-generalized-other", "u6-in-out-group"],
      stem: "Before posting a photo, Maya asks herself, “Would my volleyball teammates think this is cringe?” Which concept fits best?",
      options: [
        {
          text: "Imagined reference group",
          why: "An imagined reference group is a category she pictures (like “influencers”). Her teammates are specific people she knows.",
        },
        {
          text: "Generalized other",
          why: "Mead’s generalized other (Unit 5) is an abstract picture of what “people” in general would think. She is picturing particular people.",
        },
        {
          text: "Concrete reference group",
          correct: true,
          why: "She is using a group of real people she knows as a standard to judge her own behavior.",
        },
        {
          text: "Out-group",
          why: "She belongs to the team; she isn’t on the excluded side of an us/them line.",
        },
      ],
    },
    {
      id: "u6-q38",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-reference-imagined", "u6-reference-concrete", "u6-primary-group", "u6-conformity"],
      stem:
        "A high-school junior who dreams of becoming an airline pilot asks herself, “Would real pilots respect how carelessly I’m driving?” and slows down. Which concept fits best?",
      options: [
        {
          text: "Imagined reference group",
          correct: true,
          why: "She uses a category she hopes to join, pilots, as a standard to judge her behavior, without picturing specific people she knows.",
        },
        {
          text: "Concrete reference group",
          why: "A concrete reference group is specific people she knows, like her family. “Real pilots” is a category she imagines.",
        },
        {
          text: "Primary group",
          why: "She has no intense, face-to-face relationship with pilots.",
        },
        {
          text: "Conformity to group pressure",
          why: "No group is actually present pressuring her. She is consulting an imagined standard.",
        },
      ],
    },
    {
      id: "u6-q39",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u6-group-size-paradox", "u6-decoupling", "u6-closure", "u6-conformity"],
      stem:
        "A four-person study group falls apart when one member drops the class. Meanwhile a 40-person intramural club keeps going after several members quit, but members say it feels less close than it used to. What does this illustrate?",
      options: [
        {
          text: "Decoupling",
          why: "Decoupling is an organization drifting from its designed purpose. Neither group changed its purpose.",
        },
        {
          text: "Closure",
          why: "Closure is ties filling in across a network over time; the stem is about size, stability, and closeness.",
        },
        {
          text: "Conformity",
          why: "Nobody is being pressured to yield to a group belief here.",
        },
        {
          text: "The group size paradox",
          correct: true,
          why: "Bigger is more stable (it survives exits) but less intense (more potential relationships), exactly the two halves shown.",
        },
      ],
    },
    {
      id: "u6-q40",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u6-conformity", "u6-reference-imagined", "u6-brokerage", "u6-aggregate"],
      stem:
        "In a group chat, eight friends rave about a taco place. Jordan got food poisoning there last month, but replies, “yeah, it’s great,” to go along. Which idea from the notes fits best?",
      options: [
        {
          text: "Groups exert coercive power on their members (conformity)",
          correct: true,
          why: "Like Asch’s participants, Jordan yields to a group belief he knows is false.",
        },
        {
          text: "Imagined reference group",
          why: "These are specific friends actively pressing a view, not a category Jordan pictures to judge himself.",
        },
        {
          text: "Brokerage",
          why: "Jordan isn’t bridging separate regions of a network or gaining power.",
        },
        {
          text: "Aggregate",
          why: "Friends in a group chat interact regularly and share an identity, so they’re a group.",
        },
      ],
    },
    {
      id: "u6-q41",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u6-jurisdiction", "u6-hierarchy", "u6-expert-training", "u6-separation-private"],
      stem:
        "At a hospital, a patient asks a radiology technician to change her medication dose. The tech says, “That’s pharmacy’s call, not my area.” Which of Weber’s features is on display?",
      options: [
        {
          text: "Clear-cut hierarchy",
          why: "Hierarchy is about who answers to whom. The tech is pointing sideways to another domain, not up to a boss.",
        },
        {
          text: "Defined jurisdictional areas",
          correct: true,
          why: "Positions are defined by the domains they oversee, so an official can’t automatically act outside their area.",
        },
        {
          text: "Expert training",
          why: "Credentials matter in hospitals, but the stem turns on which domain is whose, not on proving qualification.",
        },
        {
          text: "Separation between organizational and private life",
          why: "That’s about any trained person being able to fill a position, not about where one position’s domain ends.",
        },
      ],
    },
    {
      id: "u6-q42",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u6-expert-training", "u6-jurisdiction", "u6-full-time-officials", "u6-written-rules"],
      stem:
        "A city water department hires only inspectors who hold a state certification, because managers can’t personally verify every applicant’s skills. Which feature is this?",
      options: [
        {
          text: "Defined jurisdictional areas",
          why: "Jurisdiction is which domain a position covers. This is about who qualifies for it.",
        },
        {
          text: "Full-time salaried officials",
          why: "That’s about officials concentrating on one job, not about how qualification is proven.",
        },
        {
          text: "Written rules of conduct and procedure",
          why: "A certificate is a document, but the feature here is demonstrated qualification for the position.",
        },
        {
          text: "Expert training",
          correct: true,
          why: "Positions are filled by demonstrated qualification, and since personal knowledge can’t verify everyone, credentials supplement it.",
        },
      ],
    },
    {
      id: "u6-q43",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u6-hierarchy", "u6-jurisdiction", "u6-brokerage", "u6-org-ownership"],
      stem:
        "Unhappy with a bank teller’s answer, a customer asks for the branch manager, then the regional manager, and finally files a complaint with the corporate office. Which feature makes this path possible?",
      options: [
        {
          text: "Clear-cut hierarchy",
          correct: true,
          why: "Clear lines of authority give avenues of responsibility and appeal from each person to their supervisor, up to the head.",
        },
        {
          text: "Defined jurisdictional areas",
          why: "Jurisdiction is the side-to-side split into domains. The customer is moving up a chain.",
        },
        {
          text: "Brokerage",
          why: "Brokerage is power from sitting between network regions, not climbing a chain of command.",
        },
        {
          text: "Organizational ownership of the means of production",
          why: "That’s about the bank supplying equipment, not about appeals.",
        },
      ],
    },
    {
      id: "u6-q44",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u6-written-rules", "u6-full-time-officials", "u6-org-ownership", "u6-jurisdiction", "u4-writing"],
      stem:
        "At the DMV, whichever clerk calls your number pulls up your record and finishes your license renewal, even though that clerk has never met you. Which feature most directly makes this possible?",
      options: [
        {
          text: "Full-time salaried officials",
          why: "Full-time work helps clerks master the system, but what lets a stranger handle your case is the file.",
        },
        {
          text: "Organizational ownership of the means of production",
          why: "The DMV owning the computers matters less than what’s on them: a written record of your case.",
        },
        {
          text: "Written rules and records",
          correct: true,
          why: "Written records abstractly represent your case, so structurally-equivalent officials can deal with it from the file without personal knowledge of its history.",
        },
        {
          text: "Defined jurisdictional areas",
          why: "Jurisdiction marks which domain a position covers. Here any clerk can handle you, thanks to the record.",
        },
      ],
    },
    {
      id: "u6-q45",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u6-full-time-officials", "u6-separation-private", "u6-expert-training", "u6-hierarchy"],
      stem:
        "A small town’s permit office is staffed by volunteers who each put in two hours a week around their regular jobs. Permits take months because no one ever learns the system. Which Weber feature is most clearly missing?",
      options: [
        {
          text: "Separation between organizational and private life",
          why: "That’s about the organization not depending on any particular person. The problem here is that no one can concentrate on the job.",
        },
        {
          text: "Full-time salaried officials",
          correct: true,
          why: "Bureaucrats are effective partly because they concentrate on one job. Part-timers with other positions can’t master the cases.",
        },
        {
          text: "Expert training",
          why: "Credentials aren’t the issue described; the missing ingredient is time devoted to the job.",
        },
        {
          text: "Clear-cut hierarchy",
          why: "Nothing in the stem concerns lines of authority or appeal.",
        },
      ],
    },
    {
      id: "u6-q46",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u6-org-ownership", "u6-separation-private", "u6-full-time-officials", "u6-written-rules"],
      stem:
        "Delivery company A requires drivers to use their own cars and phones. Company B provides company vans and scanners. Which bureaucratic feature does B have that A lacks?",
      options: [
        {
          text: "Separation between organizational and private life",
          why: "That’s about workers being interchangeable. The difference here is who supplies the equipment.",
        },
        {
          text: "Full-time salaried officials",
          why: "Nothing in the stem says whether drivers are full-time.",
        },
        {
          text: "Written rules of conduct and procedure",
          why: "Neither company’s rules are described; the contrast is about equipment.",
        },
        {
          text: "Organizational ownership of the means of production",
          correct: true,
          why: "B doesn’t depend on whether drivers own (and will use) their own vehicles. It supplies its own.",
        },
      ],
    },
    {
      id: "u6-q47",
      skill: "application",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u6-bureaucracy", "u6-org-functions"],
      stem:
        "Stuck in a slow line at the passport office, a friend groans, “Ugh, such a bureaucracy.” Which reply best reflects the notes?",
      options: [
        {
          text: "“Right: bureaucracy just means waste and red tape.”",
          why: "That’s the everyday meaning the notes push against.",
        },
        {
          text: "“In sociology a bureaucracy is a highly formally rationalized organization built to deliver its ends efficiently, and government is a lot smaller than people think.”",
          correct: true,
          why: "Bureaucracy is defined by formal rationalization, and government at all levels is just under 8% of the population: few people doing a huge job.",
        },
        {
          text: "“It’s only a bureaucracy if it has all seven of Weber’s features.”",
          why: "The ideal type works like an index. Organizations are more or less bureaucratic; they don’t need every feature.",
        },
        {
          text: "“Bureaucracies are networks, so the line is a contagion effect.”",
          why: "This mixes up organizations with networks and misuses contagion.",
        },
      ],
    },
    {
      id: "u6-q48",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u6-ideal-type", "u6-bureaucracy", "u6-networks"],
      stem:
        "A family-run hardware store has a written employee manual and a clear boss, but family members do most jobs and use their own trucks for deliveries. Using Weber’s ideal type, what’s the best conclusion?",
      options: [
        {
          text: "It isn’t bureaucratic at all, since it lacks some of the seven features",
          why: "That treats the ideal type as all-or-nothing. The notes treat it like an index.",
        },
        {
          text: "It is a perfect bureaucracy, since it has written rules and hierarchy",
          why: "Two features don’t make the extreme case; that would need all seven, expressed intensively.",
        },
        {
          text: "It is somewhat bureaucratic: it fulfills some features but not others, so it sits lower on the scale",
          correct: true,
          why: "An organization is “more of” a bureaucracy the more features it fulfills, and more intensely.",
        },
        {
          text: "It is a network rather than an organization, since it’s run by family",
          why: "Family ties don’t make it a network instead of an organization; it has a hierarchy and a manual.",
        },
      ],
    },
    {
      id: "u6-q49",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-bureaucracy", "u2-formal-rationalization", "u2-substantive-rationalization", "u6-decoupling"],
      stem:
        "A fast-food chain redesigns its kitchen so every burger takes the same 90 seconds no matter who makes it. Which idea from the notes does this best show?",
      options: [
        {
          text: "Formal rationalization: features arranged to deliver a given end efficiently and effectively",
          correct: true,
          why: "Means-ends efficiency is the bureaucratic hallmark (Unit 2’s formal rationalization).",
        },
        {
          text: "Substantive rationalization: articulating explicit purposes in more domains of life",
          why: "The chain isn’t debating what its purpose should be; it’s optimizing how to reach a given end.",
        },
        {
          text: "Decoupling: drifting from the designed purpose",
          why: "Making burgers faster is the chain’s purpose, not a drift away from it.",
        },
        {
          text: "Homophily: like ties to like",
          why: "Homophily is a network finding about tie formation, unrelated to kitchen design.",
        },
      ],
    },
    {
      id: "u6-q50",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-decoupling", "u3-latent-function", "u6-panopticism", "u6-brokerage"],
      stem:
        "A campus food pantry founded to feed hungry students gradually spends most of its effort on galas and award applications that polish the university’s image. Which concept fits best?",
      options: [
        {
          text: "Panopticism",
          why: "Nothing here involves a few observers disciplining many people.",
        },
        {
          text: "Latent function",
          why: "Tempting, but the pantry has actively shifted the end it pursues. That’s decoupling, not a side function nobody notices.",
        },
        {
          text: "Decoupling",
          correct: true,
          why: "Designed for an explicit purpose (feeding students), it has drifted to pursuing another (image): “losing its way.”",
        },
        {
          text: "Brokerage",
          why: "The pantry isn’t gaining power from sitting between network regions.",
        },
      ],
    },
    {
      id: "u6-q51",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u6-decoupling"],
      stem: "For which of these organizations would “decoupling” be the WRONG lens?",
      options: [
        {
          text: "A youth sports league founded for fun and exercise that now mostly exists to scout and sell elite players",
          why: "Designed purpose (fun, exercise) replaced by a different end (elite scouting): decoupling fits.",
        },
        {
          text: "A town library founded to lend books that still lends books, efficiently, decades later",
          correct: true,
          why: "Nothing has drifted. It still pursues its designed purpose, so there’s no decoupling to see.",
        },
        {
          text: "A charity founded to fund clean water that now spends most of its budget raising more money",
          why: "Drift from its designed end to a different one, which is decoupling.",
        },
        {
          text: "A student newspaper founded to report campus news that now mainly runs ads for local businesses",
          why: "Its actual pursuit has drifted from its stated purpose, which is decoupling.",
        },
      ],
    },
    {
      id: "u6-q52",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u6-panopticism", "u6-hierarchy", "u6-conformity", "u6-contagion"],
      stem:
        "A warehouse puts cameras in every aisle. Workers never know when a manager is watching the feed, so they all work as if they’re always observed, and two managers oversee 500 workers. Which concept fits best?",
      options: [
        {
          text: "Clear-cut hierarchy",
          why: "There are bosses, but the key mechanism is unseen, possible observation letting a few control many.",
        },
        {
          text: "Panopticism",
          correct: true,
          why: "Like the prison design, uncertainty about being watched makes everyone behave as if observed, so a tiny minority disciplines a large population, enabled by technology.",
        },
        {
          text: "Conformity",
          why: "Conformity is pressure from a group of peers; here control flows from a few observers.",
        },
        {
          text: "Contagion",
          why: "Nothing is spreading from worker to worker along ties.",
        },
      ],
    },
    {
      id: "u6-q53",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u6-panopticism"],
      stem: "For which situation would “panopticism” be the strangest lens?",
      options: [
        {
          text: "An employer’s wellness app that logs workers’ steps and sleep and reports to HR",
          why: "Constant technology-enabled monitoring by an organization fits panopticism well.",
        },
        {
          text: "School-issued laptops running monitoring software students can’t see",
          why: "Students can’t tell when they’re observed, so they act as if always watched. That’s panoptic.",
        },
        {
          text: "A neighborhood book club that meets monthly and keeps no records of members",
          correct: true,
          why: "No observation, no records, no small minority disciplining a large population. Panopticism doesn’t apply.",
        },
        {
          text: "A delivery platform that tracks every driver’s GPS route and timing",
          why: "Few overseers, many drivers, constant possible observation: panoptic.",
        },
      ],
    },
    {
      id: "u6-q54",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u6-contagion", "u6-homophily", "u6-closure", "u6-brokerage"],
      stem:
        "One student on a dorm floor starts doing 6 a.m. runs. Within weeks her friends are joining, and then their friends start too. Which network finding fits best?",
      options: [
        {
          text: "Contagion",
          correct: true,
          why: "A behavior is spreading along existing ties, the way a disease would.",
        },
        {
          text: "Homophily",
          why: "Homophily is about similar people forming ties. Here the ties already exist and a behavior travels along them.",
        },
        {
          text: "Closure",
          why: "Closure is new ties forming across the network. The stem is about a habit spreading, not ties accumulating.",
        },
        {
          text: "Brokerage",
          why: "No one is gaining power from a position between regions.",
        },
      ],
    },
    {
      id: "u6-q55",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u6-brokerage", "u6-hierarchy", "u6-homophily", "u6-weak-ties"],
      stem:
        "Priya is the only person in both the engineering club and the art collective. Whenever the two want to collaborate, they go through her, and she ends up with a lot of influence over both. Which network finding fits best?",
      options: [
        {
          text: "Clear-cut hierarchy",
          why: "Priya has no formal rank over anyone; her influence comes from where she sits, not from authority.",
        },
        {
          text: "Homophily",
          why: "Homophily is like tying to like. Priya’s value is that she links two unlike clusters.",
        },
        {
          text: "Strength of weak ties",
          why: "Weak ties are about someone drawing new resources from distant friends of friends. The stem stresses Priya’s power as the bridge.",
        },
        {
          text: "Brokerage",
          correct: true,
          why: "Entities perched between different regions of a network tend to have more power than those embedded in one region.",
        },
      ],
    },
    {
      id: "u6-q56",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u6-weak-ties", "u6-closure", "u6-homophily", "u6-primary-group"],
      stem:
        "After months of applying with no luck, Sam lands a job through his roommate’s cousin, whom he has met once. Which network finding fits best?",
      options: [
        {
          text: "Closure",
          why: "Closure is ties filling in across a network. The stem is about a distant tie bringing a new resource.",
        },
        {
          text: "Strength of weak ties",
          correct: true,
          why: "A new resource came not from Sam’s close ties but from a distant “friend of a friend.”",
        },
        {
          text: "Homophily",
          why: "Nothing in the stem is about similar people tending to connect.",
        },
        {
          text: "Primary group",
          why: "A cousin of a roommate, met once, is the opposite of an intense, face-to-face primary tie.",
        },
      ],
    },
    {
      id: "u6-q57",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 2,
      conceptIds: ["u6-weak-ties", "u6-primary-group"],
      stem:
        "A student says that getting comfort from her twin sister after a breakup illustrates “the strength of weak ties.” Why is that the wrong lens?",
      options: [
        {
          text: "Because weak ties only matter between organizations, not people",
          why: "Network entities can be people or organizations; that isn’t the problem here.",
        },
        {
          text: "Because the strength of weak ties applies only to disease spreading",
          why: "That confuses weak ties with contagion, and even contagion isn’t only about disease.",
        },
        {
          text: "Because comfort isn’t a social resource at all",
          why: "The issue isn’t the kind of resource; it’s where it came from.",
        },
        {
          text: "Because her twin is a close tie; weak ties are about new resources from distant “friends of friends”",
          correct: true,
          why: "Support from a twin sister comes from an intense, primary-group tie. The weak-ties finding is about distant ties.",
        },
      ],
    },
    {
      id: "u6-q58",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 2,
      conceptIds: ["u6-brokerage", "u6-hierarchy", "u6-networks", "u6-bureaucracy"],
      stem:
        "A classmate describes an army unit (private reports to sergeant, sergeant to lieutenant) as a case of “brokerage.” What is the best correction?",
      options: [
        {
          text: "It’s a vertical chain of command, which is clear-cut hierarchy, how the notes represent organizations; brokerage is power from sitting between regions of a network",
          correct: true,
          why: "The sergeant has power from rank in a hierarchy, not from bridging otherwise disconnected network regions.",
        },
        {
          text: "It’s homophily, since soldiers are similar to each other",
          why: "Similarity isn’t the point of the stem; lines of authority are.",
        },
        {
          text: "It’s an aggregate, since soldiers don’t choose their unit",
          why: "Soldiers in a unit interact regularly and share identity; choice isn’t a group test.",
        },
        {
          text: "It’s contagion, since orders spread down the chain",
          why: "Orders passing down a chain of command are hierarchy, not behaviors spreading along horizontal ties.",
        },
      ],
    },
    {
      id: "u6-q59",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u6-aggregate", "u6-group"],
      stem: "For which of these would “aggregate” be the WRONG label?",
      options: [
        {
          text: "Strangers riding the same elevator to different floors",
          why: "They share a place briefly without interacting or identifying with each other: an aggregate.",
        },
        {
          text: "Shoppers browsing the same mall on a Sunday",
          why: "Co-present but not interacting or sharing an identity: an aggregate.",
        },
        {
          text: "A dorm floor’s intramural team that practices weekly and has its own jerseys",
          correct: true,
          why: "Regular interaction plus a shared identity make this a group, not an aggregate.",
        },
        {
          text: "People watching the same fireworks show from different spots in a park",
          why: "They share a place and an event, but no regular interaction or collective identity: an aggregate.",
        },
      ],
    },
    {
      id: "u6-q60",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 3,
      conceptIds: ["u6-network-vs-organization", "u2-ontology", "u2-epistemology", "u6-org-chart"],
      stem:
        "One researcher studies a company through its org chart; another maps who eats lunch with whom across departments. A third asks, “Are you two seeing different things, or the same thing from two angles?” The third researcher is asking…",
      options: [
        {
          text: "Whether the company is decoupled from its purpose",
          why: "Decoupling is about drift from a designed purpose, not about how to represent structure.",
        },
        {
          text: "Whether the network/organization difference is epistemological (perspective) or ontological (a real difference in social reality)",
          correct: true,
          why: "That’s the notes’ closing question: is the vertical-vs-horizontal difference in how we look, or in what is there?",
        },
        {
          text: "Whether lunch partners show homophily",
          why: "That might be a finding of the second study, but the third researcher’s question is about the two representations.",
        },
        {
          text: "Whether the company is a primary or secondary group",
          why: "The question concerns organizations vs. networks, not group intensity.",
        },
      ],
    },
    {
      id: "u6-q61",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u6-closure", "u6-homophily", "u6-brokerage", "u6-contagion"],
      stem:
        "A new robotics team starts out with members who each know only the captain. By the end of the season, nearly everyone has ties to nearly everyone else. Which network finding fits best?",
      options: [
        {
          text: "Homophily",
          why: "Homophily would be similar members pairing off with each other. The stem stresses ties filling in across everyone.",
        },
        {
          text: "Brokerage",
          why: "At first the captain links everyone, but the stem’s point is that ties then form across the network.",
        },
        {
          text: "Contagion",
          why: "Nothing is spreading along ties; new ties are forming.",
        },
        {
          text: "Closure",
          correct: true,
          why: "As network dynamics unfold, more ties tend to form across different nodes.",
        },
      ],
    },

    // ───────────── Big empirical ─────────────
    {
      id: "u6-q62",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 3,
      conceptIds: ["u6-org-functions"],
      stem: "About how many people make up the US federal government, excluding the military?",
      fixedOrder: true,
      options: [
        {
          text: "About 30,000",
          why: "Far too small. That’s a single large company’s headcount.",
        },
        {
          text: "About 3 million",
          correct: true,
          why: "The notes give about 3 million. For a country of ~343 million, that’s a small staff for everything the federal government does.",
        },
        {
          text: "About 100 million",
          why: "Far too large: that would be nearly a third of the whole population.",
        },
        {
          text: "About 300 million",
          why: "That’s roughly the entire US population.",
        },
      ],
    },
    {
      id: "u6-q63",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 3,
      conceptIds: ["u6-org-functions", "u6-bureaucracy"],
      stem: "Counting federal, state, county, and local employees together, government at all levels is about what share of the US population?",
      fixedOrder: true,
      options: [
        {
          text: "Well under 1 in 100",
          why: "Too small. Government at all levels is a couple dozen million people.",
        },
        {
          text: "Just under 8%: well under a tenth",
          correct: true,
          why: "A couple dozen million out of ~343 million. That small staff keeps society functioning, which is the notes’ case that bureaucracy is smaller and more effective than its reputation.",
        },
        {
          text: "About a third",
          why: "Far too large; that’s the bloated picture the notes argue against.",
        },
        {
          text: "More than half",
          why: "Wildly too large. Government is a small minority of the population.",
        },
      ],
    },
    {
      id: "u6-q64",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 3,
      conceptIds: ["u6-org-functions"],
      stem: "Adding state, county, and local employees to federal civilian workers, about how many government workers are there in the US?",
      fixedOrder: true,
      options: [
        {
          text: "About 3 million",
          why: "That’s the federal civilian workforce alone. Adding states and localities brings it much higher.",
        },
        {
          text: "A couple dozen million",
          correct: true,
          why: "The notes put it at roughly 24–27 million, still a small slice of ~343 million people.",
        },
        {
          text: "About 150 million",
          why: "Far too many: that would be nearly half the country.",
        },
        {
          text: "About 340 million",
          why: "That’s the entire US population.",
        },
      ],
    },
    {
      id: "u6-q65",
      skill: "empirical",
      format: "tf",
      trap: "reversal",
      tier: 3,
      conceptIds: ["u6-org-functions", "u6-bureaucracy"],
      stem:
        "True/False: The notes argue that the government bureaucracy is huge relative to the US population, which is why it is full of red tape.",
      options: [
        {
          text: "True",
          why: "This reverses the notes. They show government at all levels is just under 8% of the population: small for all it does.",
        },
        {
          text: "False",
          correct: true,
          why: "The notes’ point is how few people undertake all the functions that keep society running, so bureaucracy is smaller than its reputation.",
        },
      ],
    },
    {
      id: "u6-q66",
      skill: "empirical",
      format: "tf",
      tier: 3,
      conceptIds: ["u6-org-functions"],
      stem:
        "True/False: Most US government employees work for state, county, and local governments rather than the federal (civilian) government.",
      options: [
        {
          text: "True",
          correct: true,
          why: "Federal civilians are about 3 million of a couple dozen million total, so most are state and local, including SUNY professors, who are state employees.",
        },
        {
          text: "False",
          why: "The federal civilian government is only about 3 million; state, county, and local employees make up most of the couple dozen million.",
        },
      ],
    },
    {
      id: "u6-q67",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 2,
      conceptIds: ["u6-conformity"],
      stem:
        "In Asch’s 1951 experiment, about how often did participants yield to the group’s false belief, and why does that matter?",
      fixedOrder: true,
      options: [
        {
          text: "Almost never (under 1 time in 20), showing that groups have little hold on individuals",
          why: "Far too low, and it reverses the notes’ conclusion.",
        },
        {
          text: "About a third of the time, showing that groups exert enormous coercive power on members",
          correct: true,
          why: "Even on an easily checked question, the group won about a third of the time. That’s the notes’ evidence of the coercive power of groups.",
        },
        {
          text: "About 9 times out of 10, showing that individuals have no judgment of their own",
          why: "Too high. The notes report about a third.",
        },
        {
          text: "Every single time",
          why: "That describes Milgram’s 300-volt finding, not Asch’s.",
        },
      ],
    },
    {
      id: "u6-q68",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 2,
      conceptIds: ["u6-conformity"],
      stem: "In Milgram’s original 1961 experiment, how many participants administered 300-volt shocks?",
      fixedOrder: true,
      options: [
        {
          text: "Very few (under 1 in 20)",
          why: "Far too low. This is the outcome people expect, and the notes report the opposite.",
        },
        {
          text: "About a third",
          why: "“About a third” is Asch’s yielding rate, a different experiment.",
        },
        {
          text: "About half",
          why: "Still too low. The notes report that every participant went to 300 volts.",
        },
        {
          text: "Every participant",
          correct: true,
          why: "In the original experiment every participant administered 300-volt shocks, dramatic evidence of the coercive power of the social situation.",
        },
      ],
    },
    {
      id: "u6-q69",
      skill: "empirical",
      format: "tf",
      trap: "reversal",
      tier: 2,
      conceptIds: ["u6-conformity"],
      stem: "True/False: In Milgram’s original experiment, most participants refused to administer 300-volt shocks.",
      options: [
        {
          text: "True",
          why: "This reverses the result. The notes say every participant administered 300-volt shocks.",
        },
        {
          text: "False",
          correct: true,
          why: "Every participant went to 300 volts, believing they were harming a fellow participant.",
        },
      ],
    },
  ],
};
