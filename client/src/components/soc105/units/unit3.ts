import type { Unit } from "../types";

export const unit3: Unit = {
  id: "u3",
  number: 3,
  title: "Theor(ies) and Method(s)",
  subtitle: "Six theoretical traditions in three pairs, four methods and the signature limit of each, and a few statistics terms",
  sourceUrl: "https://nhwilson.github.io/chapters/Ch_3_Method.html",

  bigPoints: [
    {
      point: "Sociology has several theories, grouped as three pairs.",
      detail:
        "Two micro traditions (symbolic interactionism, practice theory), two macro traditions (structural functionalism, conflict theory/Marxism), and two “exotic newcomers” (field theory; black, feminist and intersectional theory). Inside each pair, the second tradition partly answers a blind spot of the first. Practice theory adds what people do without words. Conflict theory adds conflict where functionalism saw consensus.",
    },
    {
      point: "To tell the traditions apart, ask two things: what level does it work at, and what does it say drives social life?",
      detail:
        "Micro means face-to-face life: shared symbols and frames, or tacit, embodied practice. Macro means whole societies: consensus and the function each part serves for the whole, or conflict between groups pursuing their interests. Field theory works at the middle (meso) level: actors in a shared social space struggle over what their shared action means. Black, feminist and intersectional theory rejects the “view from nowhere” and treats positioned, lived experience as evidence.",
    },
    {
      point: "The four methods each carry one signature limitation.",
      detail:
        "Ethnography (watching up close) → reflexivity: is what I see typical, and is it happening because I’m here? Experiments (intervene and compare) → ecological validity: a result that holds in the controlled setup may not hold in messy real life. Quantitative modeling (numbers + math relationships) → it can never observe causation, only infer it from correlations, and its data are only as good as how they were collected and operationalized. Historical-comparative (records from the past, compared) → archival silences (the marginalized often left no records) and, on the other side, too much data.",
    },
    {
      point: "Research is messy and mixed, and a few statistics terms are basic public literacy.",
      detail:
        "The steps of the research process (question, design, reading others, analysis) are usually described as separate, but in real work they are deeply intertwined. Mean, median and mode are three different kinds of “middle.” Standard deviation measures spread. A correlation coefficient runs from −1 to 1 and tells you how well knowing one variable lets you guess the other. It does not show causation.",
    },
  ],

  connections: [
    "This unit applies Unit 2’s philosophy of science to real practice. The micro/macro split sorts the theories. Each method is a different form of realism, a different way to reason back from traces you can observe. And the notes’ pluralism explains why no single theory or method wins.",
    "Unit 1’s Du Bois comes back twice. His reflexivity and double-consciousness are the root of black, feminist and intersectional theory, and “reflexivity” also names the ethnographer’s central challenge. That second meaning is related to the first but is not the same concept. Intersectional theory’s rejection of the “view from nowhere” is a direct challenge to Unit 2’s objectivist epistemology.",
    "Symbolic interactionism’s “symbol” is the starting point for Unit 4, which splits a symbol into signifier and signified. Interaction and frames return in Unit 5 (Interaction).",
  ],

  concepts: [
    {
      id: "u3-research-process",
      term: "Research process",
      tier: 2,
      plainIdea:
        "Picture cooking without a recipe. You taste, adjust, read a cookbook halfway through, and change the dish. Real research works like that. Asking the question, planning the study, reading what others found, and analyzing the data happen at the same time and feed back into each other. They are not tidy steps done once, in order.",
      courseDefinition:
        "The research process is a mixture of practices undertaken by scientists to learn about the social and material world. It includes formulating a question that can be answered empirically; designing a procedure to systematically answer the question with appropriate evidence; understanding what other scientists have argued about the question; and analyzing the data collected. These steps are usually treated as distinct, but in practice they are deeply intertwined with one another.",
      freshExample:
        "A student studying why people skip the campus gym starts with a survey. Early answers make her rewrite her question, so she reads more studies, then adds interviews, and her new analysis changes the survey again.",
      notToConfuse:
        "Not the strict, one-step-at-a-time sequence that critics of science demand. The notes stress that the steps are mixed together.",
    },
    {
      id: "u3-symbolic-interactionism",
      term: "Symbolic interactionism",
      tier: 1,
      thinker: "Herbert Blumer (student of George Herbert Mead); Erving Goffman",
      plainIdea:
        "People get things done together by trading signs that everyone understands: words, gestures, pictures. Each encounter has a shared sense of “what’s going on here.” It is a micro view built from pragmatism: people solve practical problems with whatever communication works.",
      courseDefinition:
        "A micro-oriented tradition pioneered by Herbert Blumer (a student of George Herbert Mead at Chicago), drawing on pragmatism. Where people need to coordinate action they do so by interacting, exchanging shared symbols; these interactions are irreducible to any one person’s intentions and are governed by emergent frames that define what the interaction is “about.”",
      freshExample:
        "Studying how strangers in a pickup basketball game work out teams, fouls and “next game” calls through quick words, nods and hand signals everyone understands.",
      notToConfuse:
        "Practice theory, its micro sibling, says shared symbols aren’t enough and you must also watch what people do without words. Tell: does the researcher trust explicit, shared meanings to explain the interaction?",
    },
    {
      id: "u3-interaction",
      term: "Interaction",
      tier: 1,
      plainIdea:
        "An interaction happens when meaning passes between people who share it. A wave that the other person reads as “hi” is one. Two strangers bumping shoulders without either registering anything is just contact.",
      courseDefinition: "Interactions are exchanges of shared meanings.",
      freshExample:
        "Your roommate holds up the empty milk carton and raises an eyebrow. You say “my bad, I’ll buy more.” You just exchanged shared meanings.",
      notToConfuse:
        "Symbol is the thing being traded (the raised carton, the words). Frame is the shared sense of what the whole exchange is about. The interaction is the exchange itself.",
    },
    {
      id: "u3-symbol",
      term: "Symbol",
      tier: 1,
      plainIdea:
        "Anything that stands for something else. A word, a drawing, a gesture, even a built object all count, as long as it points beyond itself.",
      courseDefinition:
        "Symbols are representations of one thing by means of another, including words, pictures, gestures, and material structures.",
      freshExample:
        "A red “X” on a group-project task list stands for “not done yet.” A thumbs-up reaction in a chat stands for “agreed.”",
      notToConfuse:
        "Not only logos or emblems. Ordinary words and gestures are symbols too. Unit 4 splits a symbol into signifier (the thing doing the representing) and signified (the meaning).",
    },
    {
      id: "u3-frame",
      term: "Frame",
      tier: 1,
      thinker: "Erving Goffman",
      plainIdea:
        "The shared answer to “what kind of situation is this?” Is it a joke, a job interview, a con, a game? No single person decides it. It emerges from the interaction, and every interaction has at least one.",
      courseDefinition:
        "Frames are shared meanings that define the nature of a particular set of interactions. For symbolic interactionists, every social interaction must have at least one frame, and frames are emergent, irreducible to the intentions of any one participant.",
      freshExample:
        "Two coworkers trade insults at the register, and everyone nearby laughs because they all understand it as teasing, not a real fight.",
      notToConfuse:
        "Not “framing” someone (planting blame). Not a symbol either: a frame defines the whole situation, while a symbol is one representation traded inside it.",
    },
    {
      id: "u3-practice-theory",
      term: "Practice theory",
      tier: 1,
      thinker: "Pierre Bourdieu",
      plainIdea:
        "Much of what people know lives in their hands and habits, not their words. To understand people you have to watch what they actually do in the material world, not just what they say.",
      courseDefinition:
        "A micro tradition, identified with Pierre Bourdieu, holding that it is inadequate to only study the symbols expressed by people in interactions; one must also observe what they do in the material world. It is a realist argument that there are socialized dispositions towards the world that are expressed, and can only be observed, in nondiscursive ways.",
      freshExample:
        "A line cook can’t explain how she knows the pan is hot enough. She just knows. Interviewing her tells you less than watching her work.",
      notToConfuse:
        "Not “practice” as in rehearsal or drills. Unlike symbolic interactionism, it doesn’t assume everything important can be put into symbols. The dispositions it studies are still socialized.",
    },
    {
      id: "u3-tacit-knowledge",
      term: "Tacit knowledge",
      tier: 3,
      plainIdea:
        "Know-how you can’t fully put into words, like how to keep your balance on a bike. You rely on it, but you can’t articulate it.",
      courseDefinition:
        "Stocks of knowledge that people can’t necessarily articulate, but which form the foundation of social action (Collins; Polanyi). The evidence for it is what motivates practice theory.",
      freshExample:
        "A veteran cashier can sense which customer is about to argue about a coupon before they say a word.",
      notToConfuse:
        "Not a latent function. Tacit knowledge is unspoken know-how inside a person. A latent function is an unnoticed effect of an activity.",
    },
    {
      id: "u3-structural-functionalism",
      term: "Structural functionalism",
      tier: 1,
      thinker: "Émile Durkheim; Talcott Parsons; Robert Merton",
      plainIdea:
        "Think of society as a body. Each part (family, school, religion, jobs) is an organ with a function that keeps the whole healthy and holding together. It is a macro view that emphasizes consensus and stability.",
      courseDefinition:
        "A macro tradition that grew up to explain how modern, complex society “holds together.” Identified with Durkheim, who argued modern societies are held together by an economic division of labor that makes people interdependent. To explain a phenomenon you consider the overall social structure and the function of that phenomenon for the “health” of the structure. Parsons elaborated it in mid-20th-century American sociology; Merton distinguished manifest and latent functions.",
      freshExample:
        "Asking how a town’s volunteer ambulance corps, school board, and Little League all help keep the community integrated and running year after year.",
      notToConfuse:
        "Conflict theory, its macro sibling, sees groups pursuing clashing interests where functionalism sees consensus and the function each part serves for the whole.",
    },
    {
      id: "u3-manifest-function",
      term: "Manifest function",
      tier: 1,
      thinker: "Robert Merton",
      plainIdea: "The purpose everyone involved knows about: the stated, obvious point of the activity.",
      courseDefinition: "A manifest function of an activity is one that participants are aware of.",
      freshExample: "A campus shuttle’s manifest function is getting students from the parking lot to class.",
      notToConfuse:
        "Latent function is the effect participants are not aware of. The tell is awareness, not importance.",
    },
    {
      id: "u3-latent-function",
      term: "Latent function",
      tier: 1,
      thinker: "Robert Merton",
      plainIdea:
        "A side effect of an activity that participants don’t notice, or only see in hindsight. It isn’t a secret plot. It is simply unnoticed.",
      courseDefinition: "A latent function of an activity is one that participants are not aware of.",
      freshExample:
        "The same shuttle becomes the place where commuter students who ride it every morning form friendships, which nobody planned or notices.",
      notToConfuse:
        "Not a hidden sinister motive or conspiracy. A latent function is an unrecognized effect. Also not tacit knowledge, which is unspoken know-how.",
    },
    {
      id: "u3-conflict-theory",
      term: "Conflict theory / Marxism",
      tier: 1,
      thinker: "Karl Marx; C. Wright Mills (the Power Elite)",
      plainIdea:
        "Society is not one team. It is several groups with clashing interests, and whatever looks like stability may just be the strongest group imposing its will or persuading others it’s for their own good.",
      courseDefinition:
        "A macro tradition emphasizing that societies are characterized by ongoing conflict among groups within them. An activity reflects the pursuit of interests of one group, often in conflict with others’. Usually traced to Marx (capitalists vs. the proletariat as the central dynamic of capitalism). Mills’ “Power Elite” extended domination across all relevant institutions, not just economic ones, and neo-Marxists treat domination as a political, cultural and economic process.",
      freshExample:
        "Explaining a city’s new parking rules as a win for downtown business owners at the expense of the workers who commute in.",
      notToConfuse:
        "Not a theory about wars or personal arguments. It is about groups’ structural interests. Structural functionalism, its macro sibling, sees consensus instead.",
    },
    {
      id: "u3-field-theory",
      term: "Field theory",
      tier: 1,
      thinker: "Derived partly from Bourdieu; Martin; Fligstein & McAdam",
      plainIdea:
        "A middle-sized arena, like the world of local restaurants or indie game studios. Players keep an eye on one another without all meeting face to face, and they fight over what counts as doing it “right.” Old-timers (incumbents) defend their position and newcomers push for recognition.",
      courseDefinition:
        "A “meso” or middle-range view of social structure. A field is a social space in which actors (people, organizations, or even states) orient themselves towards one another and, together, struggle over the meaning of their shared action. Fields are populated by incumbents (long-standing, usually dominant) and newcomers (recently entered, struggling for recognition and power).",
      freshExample:
        "New specialty-coffee roasters in a region compete with long-established roasters over what “good coffee” means, and some invent new styles that end up recognized as legitimate.",
      notToConfuse:
        "Not a field of study or a sports field. It is neither face-to-face (symbolic interactionism) nor tied to society as a whole (macro theories).",
    },
    {
      id: "u3-intersectional-theory",
      term: "Black, feminist and intersectional theory",
      tier: 1,
      thinker: "Built from W.E.B. Du Bois’ reflexivity and double-consciousness; Patricia Hill Collins",
      plainIdea:
        "Nobody sees society from nowhere. Where you stand (your race, your gender, and how they combine) shapes what you can see. So science needs many standpoints, policies must consider people’s full combination of categories, and marginalized people’s own experience counts as evidence.",
      courseDefinition:
        "A tradition grouped together by a shared insight often said to be built from Du Bois’ work on reflexivity and double-consciousness. It begins from the emphatic rejection of the “view from nowhere” and criticizes the supposedly “universal” view of mainstream sociology. Three interventions: good sociology needs as diverse a group of sociologists as possible; policy must consider groups along the intersection of all salient social categories; the direct experience of individuals, especially marginalized people, is crucial sociological evidence.",
      freshExample:
        "A student group planning support for “commuter students” realizes that commuter students who are also parents and immigrants face problems the generic plan misses, so it interviews them directly.",
      notToConfuse:
        "Field theory is the other newcomer. It is about struggles within a middle-range arena. This tradition is about standpoint and the intersection of categories.",
    },
    {
      id: "u3-ethnography",
      term: "Ethnography",
      tier: 1,
      plainIdea:
        "Go where the thing is happening and get as close as you can: watch it, join in, interview people, even do what they do.",
      courseDefinition:
        "A method oriented fundamentally around observing social phenomena as they take place, as closely as is feasible for the scholar. It may include observation of or direct participation in interactions, formal interviews, or undertaking the same practices as the people studied to see how their social locations shape their outlooks and behaviors.",
      freshExample:
        "Working a season at a summer camp as a counselor to study how counselors manage homesick kids.",
      notToConfuse:
        "Not an experiment. The ethnographer doesn’t deliberately intervene to compare outcomes with and without a change. Its signature limitation is reflexivity.",
    },
    {
      id: "u3-ethnographic-reflexivity",
      term: "Reflexivity (as an ethnographic challenge)",
      tier: 1,
      plainIdea:
        "When you embed yourself in a scene, two worries follow you. Is what I’m seeing typical, or just this one place? And is it happening partly because I’m here, with the social categories I carry?",
      courseDefinition:
        "A key challenge in ethnography: it can be difficult to tell (1) if what the researcher observes is particular to a given instance of a phenomenon or characteristic of it as a whole, and (2) whether aspects of what they observe are a product of their involvement and the social categories they represent.",
      freshExample:
        "A researcher who joins a high-school robotics team wonders whether the teens avoid swearing and arguing only because an adult is in the room, and whether this team is like other teams.",
      notToConfuse:
        "Related to Unit 1’s reflexivity (Du Bois: seeing yourself through the categories others see you by), but here it names a method problem, not a capacity people have. Not reflexes.",
    },
    {
      id: "u3-experiment",
      term: "Experiment",
      tier: 1,
      plainIdea:
        "Change one thing on purpose and compare what happens with and without the change. Better designs control everything else so only one mechanism is left.",
      courseDefinition:
        "The fundamental logic of an experiment rests on intervening in the world and then observing the difference in outcomes with and without your intervention. More elaborate designs narrow the intervention to a single mechanism by strictly controlling every possible factor. Sociologists conduct them rarely, but increasingly.",
      freshExample:
        "Half the students in a lecture get a reminder text before each quiz and half don’t. The instructor then compares quiz completion.",
      notToConfuse:
        "Not “trying something out” casually. It needs a deliberate intervention and a comparison. Its signature limitation is ecological validity.",
    },
    {
      id: "u3-ecological-validity",
      term: "Ecological validity",
      tier: 1,
      plainIdea:
        "A finding can hold inside the tidy lab setup and still fall apart in messy real life. Stripping a phenomenon down to one mechanism is never neutral, and the setup itself can change who participates and how.",
      courseDefinition:
        "The problem of an experiment’s findings being “valid” (actually a measurement of what you think you are measuring) within the experiment but far more questionable in complex social reality. It arises because it is rarely neutral to analytically reduce a phenomenon to a single mechanism.",
      freshExample:
        "In a quiet lab, students who get a “focus tip” solve more puzzles. In a real dorm with roommates, notifications and noise, the tip may do nothing.",
      notToConfuse:
        "Nothing to do with ecology or the environment. It is about whether results transfer from the controlled setting to real life.",
    },
    {
      id: "u3-quantitative-modeling",
      term: "Quantitative modeling",
      tier: 1,
      plainIdea:
        "Turn social life into numbers, then use math to see which numbers move together. If two things are related, their numbers should “hang together.”",
      courseDefinition:
        "Methods that depend on the quantification of social phenomena and then subjecting that data to modeling, where “modeling” means a formal mathematical statement about the relationship between two measurements in the world (all statistical techniques, from regression and differences in means to Bayesian and random-forest methods).",
      freshExample:
        "Using a national survey of thousands of adults to estimate how hours worked relate to hours slept.",
      notToConfuse:
        "It isn’t automatically the most precise or trustworthy method. The notes call that reputation unearned. Its limits are no directly observed causation and data only as good as its collection.",
    },
    {
      id: "u3-operationalization",
      term: "Operationalization",
      tier: 2,
      plainIdea:
        "Deciding exactly what to count when you want to measure a fuzzy idea. To measure “school spirit,” do you count hoodies, game attendance, or survey answers?",
      courseDefinition:
        "“Just a fancy word for ‘taking a concept and then deciding how to concretely measure it.’”",
      freshExample: "Measuring “popularity” of a student club as the number of members on its email list.",
      notToConfuse:
        "Not the data analysis. It comes before, and bad operationalization can’t be fixed later by any statistical wizardry.",
    },
    {
      id: "u3-quant-limits",
      term: "Limits of quantitative modeling (no observed causation; embedded data)",
      tier: 2,
      plainIdea:
        "Numbers can show that two things move together, but they can never show one thing directly causing the other. The results can only be as good as the survey or measurement that produced them.",
      courseDefinition:
        "Quantitative modeling fundamentally cannot observe actual causation; it is limited to (more or less sophisticated) inference of causal mechanisms given observed correlations. And observed correlations are only as informative as the data collected in the first place: there is no foolproof way to make up for poorly conducted surveys or a badly formulated operationalization of a variable.",
      freshExample:
        "Students who use the campus tutoring center have higher GPAs. That doesn’t show tutoring caused it, since motivated students may seek tutoring. If “used tutoring” was measured by one sign-in sheet that many people skipped, the result is weak however fancy the model is.",
      notToConfuse:
        "Not ecological validity, which is the experiment’s problem of lab vs. real life. Not archival silences, which is the historian’s problem of missing records.",
    },
    {
      id: "u3-historical-comparative",
      term: "Historical and comparative sociology",
      tier: 1,
      plainIdea:
        "Use the past as your data (records, archives, oral histories, historians’ writing), usually comparing at least two cases to explain why they turned out differently or the same.",
      courseDefinition:
        "A family of methods that uses information from the human past (published records, archival materials, oral histories, or the writings of historians) as data. These data can span all of recorded human history, and the method often emphasizes comparing at least two different phenomena to explain why their outcomes were different or similar.",
      freshExample:
        "Comparing two neighboring towns’ 1950s school-board records to explain why one built a new high school and the other merged districts.",
      notToConfuse:
        "Not just “reading history.” It asks a sociological question and usually compares cases. Its signature limitation is archival silences, and sometimes too much data.",
    },
    {
      id: "u3-archival-silences",
      term: "Archival silences (and too much data)",
      tier: 1,
      plainIdea:
        "You can only study what somebody wrote down and kept, and archives often skip marginalized people entirely. The opposite problem also exists: some topics have so much material that you have to decide where to start and where to stop.",
      courseDefinition:
        "Historical sociologists are limited to what archival materials actually exist, and the archival record often does not record marginalized communities directly. On the other hand, they can also have too much data (writing on some events is nearly infinite), so they must decide not only where to start data collection but also where to stop it.",
      freshExample:
        "A researcher studying a 1920s company town finds the owner’s letters and payroll books, but no diaries or accounts from the immigrant laborers who lived there.",
      notToConfuse:
        "Not sampling error or subjective bias. The gap comes from what the past recorded and preserved, not from the researcher’s choices or feelings.",
    },
    {
      id: "u3-central-tendency",
      term: "Measures of central tendency (mean, median, mode)",
      tier: 1,
      plainIdea:
        "Three different answers to “what’s typical?” The mean is the ordinary average. The median is the one in the middle when you line everyone up. The mode is the answer that shows up most often.",
      courseDefinition:
        "Mean: the simple average (sum the numbers, divide by the number of observations). Mode: the most frequently occurring observation. Median: the “middle” observation of a group ordered from lowest to highest.",
      freshExample:
        "In a dorm’s poll of bedtimes, the mode is the time most people chose, the median is the bedtime of the person in the middle of the line, and the mean is the average of all the times.",
      notToConfuse:
        "“Mean” isn’t unkind and “mode” isn’t a phone setting. Standard deviation isn’t a measure of the center at all. It measures spread.",
    },
    {
      id: "u3-standard-deviation",
      term: "Standard deviation (measure of dispersion)",
      tier: 2,
      plainIdea:
        "How spread out the numbers are around the average. Picture a tight cluster of darts (low) versus darts all over the board (high).",
      courseDefinition:
        "A measure of dispersion that essentially refers to how “spread out” the data is around its mean. The higher the standard deviation, the more spread out the data; the lower, the more concentrated around the mean.",
      freshExample:
        "Two sections both average 75 on a quiz. In one, almost everyone scored 70–80 (low SD). In the other, scores ranged from 30 to 100 (high SD).",
      notToConfuse:
        "Nothing to do with “deviance” or deviant behavior. It isn’t a measure of central tendency either.",
    },
    {
      id: "u3-correlation-coefficient",
      term: "Correlation coefficient",
      tier: 2,
      plainIdea:
        "A single number from −1 to 1 that tells you how well knowing one thing lets you guess another. At 1 they rise together perfectly, at −1 one rises exactly as the other falls, and in between the link is real but imperfect.",
      courseDefinition:
        "A single number that describes how reliably you can know the state of one variable if you know the state of the other. Correlations run from −1 (perfectly negatively correlated: an increase in one goes with a perfect decrease in the other) to 1 (perfectly positively correlated); in between, the relationship is imperfect but knowing one tells you something about the other.",
      freshExample:
        "Hours of late-night gaming and hours of sleep among students might have a negative correlation: more of one tends to go with less of the other.",
      notToConfuse:
        "A correlation is not proof of causation. Quantitative modeling can only infer causes from correlations.",
    },
  ],

  contrastSets: [
    {
      id: "u3-cs-micro",
      title: "Symbolic interactionism vs. practice theory (the micro pair)",
      conceptIds: ["u3-symbolic-interactionism", "u3-practice-theory", "u3-tacit-knowledge"],
      axis:
        "Both study face-to-face life. Symbolic interactionism explains it through explicit, shared symbols and frames. Practice theory says that isn’t enough and you must also observe what people do non-verbally in the material world (tacit knowledge).",
      test: "Would this researcher trust what people say and signal, or insist on watching what they do because they can’t put it into words?",
    },
    {
      id: "u3-cs-macro",
      title: "Structural functionalism vs. conflict theory/Marxism (the macro pair)",
      conceptIds: ["u3-structural-functionalism", "u3-conflict-theory"],
      axis:
        "Both study whole societies. Functionalism asks what each part does for the stability and health of the whole (consensus). Conflict theory asks whose interests a pattern serves at the expense of which other group (conflict).",
      test: "Is the phenomenon explained as helping society hold together, or as one group winning over another?",
    },
    {
      id: "u3-cs-newcomers",
      title: "Field theory vs. black, feminist and intersectional theory (the newcomers)",
      conceptIds: ["u3-field-theory", "u3-intersectional-theory"],
      axis:
        "Both claim to fix blind spots of the older four. Field theory adds a meso level: actors in a shared arena, incumbents vs. newcomers, struggling over the meaning of their shared action. Intersectional theory rejects the “view from nowhere” and centers positioned experience and the intersection of all salient categories.",
      test: "Is the argument about a struggle inside a middle-range arena, or about whose standpoint and which combination of categories gets seen?",
    },
    {
      id: "u3-cs-six",
      title: "All six traditions: level and what drives social life",
      conceptIds: [
        "u3-symbolic-interactionism",
        "u3-practice-theory",
        "u3-structural-functionalism",
        "u3-conflict-theory",
        "u3-field-theory",
        "u3-intersectional-theory",
      ],
      axis:
        "Micro: shared symbols and frames (symbolic interactionism) or tacit, embodied doing (practice theory). Macro: consensus and function for the whole (structural functionalism) or conflict between groups’ interests (conflict theory). Meso: struggle over shared meaning within a field (field theory). Black, feminist and intersectional theory is defined by rejecting the view from nowhere, not by a level: positioned experience and intersecting categories.",
      test: "First ask how big the unit is (face-to-face, an arena, or all of society). Then ask what the researcher thinks makes things happen.",
    },
    {
      id: "u3-cs-interaction-symbol-frame",
      title: "Interaction vs. symbol vs. frame",
      conceptIds: ["u3-interaction", "u3-symbol", "u3-frame"],
      axis:
        "Symbol = one representation (a word, gesture, picture). Interaction = the exchange of shared meanings. Frame = the shared meaning that defines what the whole set of interactions is about.",
      test: "Is it the thing being traded (symbol), the trading (interaction), or the shared sense of what kind of situation this is (frame)?",
    },
    {
      id: "u3-cs-manifest-latent",
      title: "Manifest vs. latent function",
      conceptIds: ["u3-manifest-function", "u3-latent-function"],
      axis: "Whether the participants are aware of the function.",
      test: "Would the people doing it name this as what the activity is for?",
    },
    {
      id: "u3-cs-methods-limits",
      title: "Four methods, four signature limitations",
      conceptIds: [
        "u3-ethnography",
        "u3-ethnographic-reflexivity",
        "u3-experiment",
        "u3-ecological-validity",
        "u3-quantitative-modeling",
        "u3-quant-limits",
        "u3-operationalization",
        "u3-historical-comparative",
        "u3-archival-silences",
      ],
      axis:
        "Ethnography → reflexivity (typical or particular? caused by my presence?). Experiment → ecological validity (holds in the setup, not in messy reality). Quantitative → can’t observe causation, and data only as good as collection and operationalization. Historical-comparative → archival silences, and sometimes too much data.",
      test: "Where does the method get its data, and so where can that data mislead you?",
    },
    {
      id: "u3-cs-mean-median-mode",
      title: "Mean vs. median vs. mode",
      conceptIds: ["u3-central-tendency"],
      axis: "Mean = sum ÷ count. Median = the middle one when ordered. Mode = the most frequent one.",
      test: "Are you averaging (mean), lining up and taking the middle (median), or counting which value shows up most (mode)?",
    },
    {
      id: "u3-cs-stats",
      title: "Center vs. spread vs. relationship",
      conceptIds: ["u3-central-tendency", "u3-standard-deviation", "u3-correlation-coefficient"],
      axis:
        "Central tendency describes where one variable’s middle is. Standard deviation describes how spread out it is around the mean. The correlation coefficient describes how two variables move together.",
      test: "How many variables are involved, and are you asking about the middle, the spread, or the link?",
    },
    {
      id: "u3-cs-reflexivity-cross",
      title: "Reflexivity as Du Bois’ insight vs. reflexivity as an ethnographer’s challenge",
      conceptIds: ["u1-reflexivity", "u3-ethnographic-reflexivity"],
      axis:
        "Unit 1: a capacity people have, seeing yourself both as you see yourself and through the social categories others see you by (Du Bois’ double-consciousness, a foundation of the sociological imagination). Unit 3: a method problem, since the ethnographer must ask whether observations are typical and whether their own presence and social categories are shaping them.",
      test: "Is “reflexivity” describing a person’s double vision of themselves (U1), or a researcher’s worry about their own effect on what they observe (U3)?",
      crossUnit: true,
    },
    {
      id: "u3-cs-view-from-nowhere",
      title: "Intersectional theory’s rejection of the “view from nowhere” vs. objectivist epistemology",
      conceptIds: ["u3-intersectional-theory", "u2-objectivist"],
      axis:
        "Objectivist epistemology (U2) aims to eliminate subjective and intersubjective bias and reach a totally independent view of reality. Black, feminist and intersectional theory (U3) starts by rejecting that “view from nowhere”: every view comes from somewhere, so diverse standpoints and marginalized people’s experience become evidence.",
      test: "Is the claim that good knowledge is cleansed of any position (objectivist), or that it has to be built from many positions (intersectional)?",
      crossUnit: true,
    },
    {
      id: "u3-cs-practice-realism",
      title: "Practice theory as a realist argument",
      conceptIds: ["u3-practice-theory", "u2-realism", "u3-symbolic-interactionism"],
      axis:
        "Practice theory claims that socialized dispositions really exist even though people can’t say them. You infer them from observable traces in what people do, which is realism in Unit 2’s sense.",
      test: "Is the researcher reasoning backward from observed doings to an unspoken disposition (realist)?",
      crossUnit: true,
    },
  ],

  falseFriends: [
    {
      id: "u3-ff-practice",
      conceptId: "u3-practice-theory",
      term: "Practice",
      everyday: "Rehearsal or drills, as in “soccer practice” or “piano practice.”",
      course: "What people actually do in the material world, often without being able to put it into words, as opposed to what they say or symbolize.",
      trap: "You pick “practice theory” for anything about rehearsing or training, or you miss it when the stem is about non-verbal, embodied know-how.",
    },
    {
      id: "u3-ff-field",
      conceptId: "u3-field-theory",
      term: "Field",
      everyday: "An academic major (“my field is biology”) or a sports field.",
      course: "A middle-range social space where actors orient to one another and struggle over the meaning of their shared action, with incumbents and newcomers.",
      trap: "You treat “field theory” as a theory about academic disciplines, or miss that it is a meso-level view of struggle.",
    },
    {
      id: "u3-ff-frame",
      conceptId: "u3-frame",
      term: "Frame",
      everyday: "Framing someone for a crime, or a picture frame.",
      course: "The shared meaning that defines what a set of interactions is about (a joke, a con, a lecture).",
      trap: "You look for deception or blame when the question is about how people jointly define a situation.",
    },
    {
      id: "u3-ff-reflexivity",
      conceptId: "u3-ethnographic-reflexivity",
      term: "Reflexivity",
      everyday: "Reflexes: quick automatic reactions, like a knee jerk.",
      course: "For ethnographers: the challenge of telling whether observations are typical and whether your own presence and categories produced them. (In U1: seeing yourself through others’ categories.)",
      trap: "You connect it to reaction speed or instinct instead of self-aware positioning.",
    },
    {
      id: "u3-ff-latent",
      conceptId: "u3-latent-function",
      term: "Latent",
      everyday: "Hidden on purpose, secret, or sinister, like a hidden agenda.",
      course: "Simply not recognized by the participants. It is an unnoticed effect, often a positive one, and nobody is concealing it.",
      trap: "You choose “latent” only when someone is scheming, or reject it because nothing is being hidden.",
    },
    {
      id: "u3-ff-conflict",
      conceptId: "u3-conflict-theory",
      term: "Conflict",
      everyday: "An argument, fight, or war between people.",
      course: "Structural clashes of interest between groups in society (e.g. owners vs. workers), even when things look calm.",
      trap: "You pick conflict theory whenever two people argue, even at the purely face-to-face level, or dismiss it when there’s no visible fighting.",
    },
    {
      id: "u3-ff-ecological",
      conceptId: "u3-ecological-validity",
      term: "Ecological validity",
      everyday: "Something about ecology, nature, or the environment.",
      course: "Whether an experiment’s findings still hold outside the controlled setup, in complex social reality.",
      trap: "You rule it out because the study has nothing to do with the environment.",
    },
    {
      id: "u3-ff-mode",
      conceptId: "u3-central-tendency",
      term: "Mean / mode",
      everyday: "“Mean” = unkind; “mode” = a setting, like dark mode or airplane mode.",
      course: "Mean = the simple average; mode = the most frequently occurring value.",
      trap: "You mix up which “middle” is the most frequent value (mode) and which is the average (mean).",
    },
    {
      id: "u3-ff-deviation",
      conceptId: "u3-standard-deviation",
      term: "Standard deviation",
      everyday: "Deviance: breaking rules or being abnormal.",
      course: "How spread out the data is around its mean.",
      trap: "You read a high standard deviation as “lots of rule-breakers” instead of “values spread widely.”",
    },
    {
      id: "u3-ff-experiment",
      conceptId: "u3-experiment",
      term: "Experiment",
      everyday: "Trying something new to see how it goes (“I’m experimenting with a new haircut”).",
      course: "A deliberate intervention whose outcomes are compared with and without the intervention, ideally isolating one mechanism.",
      trap: "You call any new attempt or casual observation an experiment, even though there is no comparison.",
    },
  ],

  magnitudes: [
    {
      id: "u3-m1",
      prompt: "What range can a correlation coefficient take?",
      answer: "From −1 to 1",
      whyItMatters:
        "The sign tells you the direction (together vs. opposite) and the distance from zero tells you how reliably one variable predicts the other. It never tells you about causation.",
    },
    {
      id: "u3-m2",
      prompt: "How often do sociologists run experiments?",
      answer: "Rarely, but increasingly",
      whyItMatters:
        "Most sociology relies on ethnography, quantitative and historical data. Experiments are growing, but reducing social life to one mechanism raises ecological-validity problems.",
    },
    {
      id: "u3-m3",
      prompt: "When was structural functionalism the dominant approach in American sociology?",
      answer: "The middle of the twentieth century",
      whyItMatters:
        "Conflict theory gained ground partly as a reaction to functionalism’s focus on stability, amid the social conflict that emerged globally in the 20th century.",
    },
    {
      id: "u3-m4",
      prompt: "When did conflict theory’s Marxist heritage become explicit in U.S. sociology?",
      answer: "By the 1970s, after anti-communist fervor faded",
      whyItMatters:
        "The timing tracks the political climate, not the ideas: the notes tie it to anti-communist fervor fading. A concrete case of Unit 2’s point that science is done from inside society, never from a “view from nowhere.”",
    },
    {
      id: "u3-m5",
      prompt: "How much has been written about the most-studied historical events (e.g. the Holocaust, the Russian Revolution)?",
      answer: "Nearly infinite: you could spend your whole life reading about either",
      whyItMatters:
        "Historical sociologists face too much data as well as archival silences, so they have to decide where to start collecting and where to stop.",
    },
    {
      id: "u3-m6",
      prompt: "In Pager’s audit experiment, how did black men with no record fare against white men with a drug arrest?",
      answer: "Black men without a record got fewer callbacks than white men with one",
      whyItMatters:
        "The résumés were identical except for race and record, so the experiment isolates race as a mechanism. It is a powerful example of what experiments can do.",
    },
  ],

  questions: [
    // ---------------- Application: traditions ----------------
    {
      id: "u3-q01",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-symbolic-interactionism", "u3-frame", "u3-symbol"],
      stem:
        "A sociologist studying a campus club argues that members coordinate everything by trading words, emojis, and inside jokes whose meanings they all share, and that every meeting runs on a shared sense of “what kind of situation this is.” Which tradition is she working in?",
      options: [
        {
          text: "Symbolic interactionism",
          correct: true,
          why: "Coordination through exchanged shared symbols, with every interaction governed by a frame, is the core of symbolic interactionism.",
        },
        {
          text: "Practice theory",
          why: "Practice theory would say shared symbols aren’t enough and would push her to watch non-verbal doing and tacit know-how. She is relying on explicit shared symbols.",
        },
        {
          text: "Conflict theory",
          why: "Conflict theory is a macro view about groups pursuing clashing interests. Nothing here is about domination or competing group interests.",
        },
        {
          text: "Field theory",
          why: "Field theory looks at a middle-range arena of actors struggling over shared meaning, not the face-to-face exchange of symbols inside one club meeting.",
        },
      ],
    },
    {
      id: "u3-q02",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-practice-theory", "u3-tacit-knowledge"],
      stem:
        "A researcher studying skateboarders notices they can’t explain how they know when to shift their weight. They say their bodies “just know.” She concludes that interviews will miss most of what matters and that she has to watch them skate. Which tradition fits her approach best?",
      options: [
        {
          text: "Symbolic interactionism",
          why: "Symbolic interactionism leans on explicit, shared symbols that can be expressed. Her whole point is that the key knowledge can’t be put into words.",
        },
        {
          text: "Structural functionalism",
          why: "Functionalism is a macro theory about how parts of society serve the whole. It says nothing about unspoken bodily know-how.",
        },
        {
          text: "Practice theory",
          correct: true,
          why: "Practice theory says you must observe what people do in the material world, because much of their knowledge is tacit and nondiscursive.",
        },
        {
          text: "Black, feminist and intersectional theory",
          why: "That tradition is about rejecting the view from nowhere and centering positioned experience, not about tacit bodily skill.",
        },
      ],
    },
    {
      id: "u3-q03",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-structural-functionalism"],
      stem:
        "A sociologist asks how a small town’s churches, volunteer fire company, and high school each help keep the community integrated and stable over decades. Which tradition is she using?",
      options: [
        {
          text: "Conflict theory/Marxism",
          why: "Conflict theory would ask whose interests these institutions serve at others’ expense. She is asking how they hold the whole together.",
        },
        {
          text: "Structural functionalism",
          correct: true,
          why: "Asking what each part does for the continuity and health of the whole social structure is the functionalist question.",
        },
        {
          text: "Symbolic interactionism",
          why: "Symbolic interactionism zooms in on face-to-face exchanges of symbols, not on how institutions sustain a whole community.",
        },
        {
          text: "Practice theory",
          why: "Practice theory is micro and focuses on non-verbal doing. This question is macro and about social integration.",
        },
      ],
    },
    {
      id: "u3-q04",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-conflict-theory"],
      stem:
        "A sociologist argues that a city’s new housing rules look neutral but actually serve landlords’ interests at the expense of renters, and that renters have been persuaded the rules are good for them too. Which tradition does this reflect?",
      options: [
        {
          text: "Conflict theory/Marxism",
          correct: true,
          why: "One group pursuing its interests against another, and persuading the weaker group that this is in its interest too, is classic conflict theory.",
        },
        {
          text: "Structural functionalism",
          why: "Functionalism would ask how the rules contribute to the city’s overall stability, not whose interests they serve against whom.",
        },
        {
          text: "Field theory",
          why: "Field theory looks at incumbents and newcomers in one arena struggling over what their shared action means, not at one class dominating another in society at large.",
        },
        {
          text: "Symbolic interactionism",
          why: "Symbolic interactionism is micro and about exchanging shared symbols face to face. This is a claim about group interests and domination.",
        },
      ],
    },
    {
      id: "u3-q05",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-field-theory"],
      stem:
        "A researcher studies competitive esports. Long-established teams defend what “real” professional play looks like, while new teams push unusual strategies and fight for recognition. Most players never meet one another, but all of them watch what the others do. Which tradition fits best?",
      options: [
        {
          text: "Symbolic interactionism",
          why: "The players mostly aren’t interacting face to face, so a micro focus on exchanged symbols misses the arena-wide struggle.",
        },
        {
          text: "Structural functionalism",
          why: "Nothing here is about how esports serves the health of society as a whole. The action is a struggle inside one arena.",
        },
        {
          text: "Conflict theory/Marxism",
          why: "The struggle isn’t tied to groups’ interests in society as a whole, such as class. It is about meaning and position within one arena.",
        },
        {
          text: "Field theory",
          correct: true,
          why: "Actors who orient to one another and struggle over the meaning of their shared action, with incumbents and newcomers, make up a field. That is a meso-level view.",
        },
      ],
    },
    {
      id: "u3-q06",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-intersectional-theory"],
      stem:
        "A sociologist argues that her department should hire researchers from as many different backgrounds as possible, because people with different viewpoints are motivated to study things everyone else has overlooked. Which tradition makes this argument?",
      options: [
        {
          text: "Field theory",
          why: "Field theory is about actors struggling within a middle-range arena, not about diversifying researchers’ standpoints.",
        },
        {
          text: "Black, feminist and intersectional theory",
          correct: true,
          why: "This is one of its three interventions: good sociology needs as diverse a group of sociologists as possible, because diverse viewpoints surface overlooked phenomena.",
        },
        {
          text: "Structural functionalism",
          why: "Functionalism asks how parts serve the whole society. It makes no argument about who should be doing the research.",
        },
        {
          text: "Practice theory",
          why: "Practice theory is about observing non-verbal doing. It says nothing about the makeup of the research community.",
        },
      ],
    },
    {
      id: "u3-q07",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-intersectional-theory"],
      stem:
        "A student government designs a “women in engineering” program based only on concerns raised by the majority of women in the major. A critic says immigrant women and women of color in the major face different problems the plan ignores. Which tradition is the critic drawing on?",
      options: [
        {
          text: "Black, feminist and intersectional theory",
          correct: true,
          why: "Groups must be considered along the intersection of all salient social categories, not just the one they supposedly share. That is the tradition’s policy intervention.",
        },
        {
          text: "Structural functionalism",
          why: "Functionalism asks what the program does for the whole system’s stability, not whose combination of categories it overlooks.",
        },
        {
          text: "Symbolic interactionism",
          why: "Symbolic interactionism studies exchanges of shared symbols in interaction. The critic is making a point about intersecting categories.",
        },
        {
          text: "Field theory",
          why: "Field theory is about incumbents and newcomers struggling in an arena, not about overlapping social categories within a group.",
        },
      ],
    },
    {
      id: "u3-q08",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-practice-theory", "u3-symbolic-interactionism"],
      stem:
        "Two researchers study how a busy restaurant kitchen runs. Researcher A says, “We should ask the cooks what their call-outs and hand signals mean.” Researcher B says, “Half of what they know they can’t say. We have to watch how they move around each other.” Which researcher is defending practice theory?",
      fixedOrder: true,
      options: [
        {
          text: "Researcher A",
          why: "Researcher A relies on explicit, shared symbols (call-outs, signals). That is the symbolic interactionist move.",
        },
        {
          text: "Researcher B",
          correct: true,
          why: "Insisting on observing non-verbal doing because the knowledge is tacit is exactly practice theory’s point.",
        },
        {
          text: "Neither researcher",
          why: "Researcher B’s argument is practice theory almost word for word.",
        },
        {
          text: "The dishwasher, who overheard the whole thing and now wants a co-author credit",
          why: "A joke option. He didn’t make an argument, however useful his dishwashing is.",
        },
      ],
    },
    {
      id: "u3-q09",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-structural-functionalism", "u3-conflict-theory"],
      stem:
        "Two sociologists explain why a town’s summer festival has lasted 80 years. Sociologist A: “It reaffirms shared values and ties the community together.” Sociologist B: “It lets the local business association make money and keep control of the town council.” Which one is using conflict theory?",
      fixedOrder: true,
      options: [
        {
          text: "Sociologist A",
          why: "Explaining the festival by what it does for the whole community’s cohesion is structural functionalism.",
        },
        {
          text: "Sociologist B",
          correct: true,
          why: "Explaining the festival as serving one group’s interests and power over others is the conflict-theory move.",
        },
        {
          text: "Both, equally",
          why: "Their explanations point in opposite directions (consensus vs. group interest). Only B treats the festival as serving one group over others.",
        },
        {
          text: "Neither",
          why: "B’s explanation is a textbook conflict account.",
        },
      ],
    },
    {
      id: "u3-q10",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u3-conflict-theory", "u3-symbolic-interactionism", "u3-practice-theory", "u3-frame"],
      stem:
        "A researcher wants to understand how two roommates silently work out whose turn it is to take out the trash, through glances, sighs, and leaving the bag by the door. Which lens would be the STRANGEST choice?",
      options: [
        {
          text: "Marx’s theory of conflict between capitalists and the proletariat",
          correct: true,
          why: "A macro theory of class conflict over the means of production gives little leverage on two roommates’ face-to-face trash negotiation, so this is the odd lens.",
        },
        {
          text: "Symbolic interactionism",
          why: "Glances and a bag by the door are symbols exchanged in interaction, so symbolic interactionism fits this micro scene well.",
        },
        {
          text: "Practice theory",
          why: "A negotiation carried out through unspoken habits and material objects is exactly what practice theory watches for.",
        },
        {
          text: "Analyzing the frame of the interaction",
          why: "Asking what the roommates jointly understand this exchange to be about is a sensible micro tool here.",
        },
      ],
    },
    // ---------------- Application: interaction / symbol / frame / functions ----------------
    {
      id: "u3-q11",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-frame", "u3-symbol", "u3-interaction"],
      stem:
        "Two friends shove each other and trade insults in a hallway. Everyone watching laughs, because they all understand it as play-fighting and not a real fight. What does the shared understanding that “this is play” best illustrate?",
      options: [
        {
          text: "A symbol",
          why: "A symbol is one representation, such as a word or gesture. The shared understanding of what the whole exchange is about is bigger than any one symbol.",
        },
        {
          text: "A frame",
          correct: true,
          why: "A frame is a shared meaning that defines the nature of a set of interactions. Here it defines the exchange as play rather than a fight.",
        },
        {
          text: "A latent function",
          why: "A latent function is an unnoticed effect of an activity. Here everyone is fully aware of what is going on.",
        },
        {
          text: "A field",
          why: "A field is a middle-range arena of actors struggling over meaning, not the definition of one hallway exchange.",
        },
      ],
    },
    {
      id: "u3-q12",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-latent-function", "u3-manifest-function"],
      stem:
        "A campus dining hall exists, as everyone knows, to feed students. Without anyone planning or noticing it, it also becomes the place where students from different majors meet and form lasting friendships. The friendship-forming is best described as a…",
      options: [
        {
          text: "Manifest function",
          why: "A manifest function is one participants are aware of, like feeding students. Nobody notices the friendship-forming.",
        },
        {
          text: "Latent function",
          correct: true,
          why: "An effect of the activity that participants aren’t aware of is a latent function.",
        },
        {
          text: "Frame",
          why: "A frame defines what an interaction is about. This is an unintended effect of an institution.",
        },
        {
          text: "Tacit knowledge",
          why: "Tacit knowledge is know-how a person can’t articulate. This is an unnoticed effect of an activity, not a skill.",
        },
      ],
    },
    {
      id: "u3-q13",
      skill: "application",
      format: "tf",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u3-latent-function"],
      stem:
        "True/False: Everyone at a campus coffee shop knows the job is there to earn money. Without anyone intending it, the job also teaches student workers to stay calm with rude customers. Calling that second effect a latent function is a correct use of the concept.",
      options: [
        {
          text: "True",
          correct: true,
          why: "Latent means participants aren’t aware of it. It doesn’t have to be secret or sinister. An unnoticed effect like learning composure fits exactly.",
        },
        {
          text: "False",
          why: "This is tempting only if you read “latent” in its everyday sense of hidden or scheming. In the course it simply means not recognized by the participants.",
        },
      ],
    },
    // ---------------- Application: methods ----------------
    {
      id: "u3-q14",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-ethnography"],
      stem:
        "A researcher wants to understand how night-shift warehouse workers make sense of their jobs, so she takes a job on the night shift for a year, working alongside them and interviewing them on breaks. Which method is this?",
      options: [
        {
          text: "Experiment",
          why: "An experiment intervenes and compares outcomes with and without the intervention. She is observing and participating, not intervening.",
        },
        {
          text: "Quantitative modeling",
          why: "Quantitative modeling turns phenomena into numbers and models relationships between them. This is close-up observation.",
        },
        {
          text: "Ethnography",
          correct: true,
          why: "Observing a phenomenon as closely as possible, including participating and interviewing, is ethnography.",
        },
        {
          text: "Historical and comparative analysis",
          why: "That method draws on records from the past. She is watching events as they happen.",
        },
      ],
    },
    {
      id: "u3-q15",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-experiment"],
      stem:
        "A researcher randomly picks half the residents of a dorm to get weekly text reminders about free tutoring, gives the other half nothing, and compares how many from each group use tutoring. Which method is this?",
      options: [
        {
          text: "Experiment",
          correct: true,
          why: "Intervening (the texts) and comparing outcomes with and without the intervention is the core logic of an experiment.",
        },
        {
          text: "Ethnography",
          why: "Ethnography observes close up without deliberately setting up an intervention and a comparison group.",
        },
        {
          text: "Historical and comparative analysis",
          why: "That method uses records from the past. This study creates its own intervention in the present.",
        },
        {
          text: "Field theory",
          why: "Field theory is a theoretical tradition, not a method, and it is about struggle within a middle-range arena.",
        },
      ],
    },
    {
      id: "u3-q16",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-historical-comparative"],
      stem:
        "A sociologist uses old newspapers, meeting minutes, and letters to explain why two neighboring towns’ labor unions took very different paths in the 1930s. Which method is she using?",
      options: [
        {
          text: "Ethnography",
          why: "Ethnography observes events as they happen. She is working from records of the past.",
        },
        {
          text: "Experiment",
          why: "No intervention is being made and compared. She is using existing records.",
        },
        {
          text: "Quantitative modeling",
          why: "Nothing here involves quantifying the phenomena and modeling mathematical relationships.",
        },
        {
          text: "Historical and comparative analysis",
          correct: true,
          why: "Using records from the past, and comparing two cases to explain why their outcomes differed, is historical-comparative sociology.",
        },
      ],
    },
    {
      id: "u3-q17",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-quantitative-modeling"],
      stem:
        "A researcher uses a national survey of 20,000 adults to estimate how the number of hours people work each week relates to how many hours they sleep. Which method is this?",
      options: [
        {
          text: "Historical and comparative analysis",
          why: "That method compares cases using records from the past, not a present-day survey modeled with numbers.",
        },
        {
          text: "Quantitative modeling",
          correct: true,
          why: "Quantifying a phenomenon and making a mathematical statement about the relationship between two measurements is quantitative modeling.",
        },
        {
          text: "Ethnography",
          why: "Ethnography observes up close. A 20,000-person survey is the opposite of close-up observation.",
        },
        {
          text: "Experiment",
          why: "No one is intervening and comparing with and without the intervention. The survey just measures existing variation.",
        },
      ],
    },
    {
      id: "u3-q18",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-ethnographic-reflexivity", "u3-ethnography"],
      stem:
        "An ethnographer joins a college marching band for a semester. She starts to wonder whether band members act more formally and politely than usual because a professor-aged outsider is always around, and whether this band is even typical of bands. What challenge is she wrestling with?",
      options: [
        {
          text: "Ecological validity",
          why: "Ecological validity is the experiment’s problem of lab results not holding in real life. She isn’t running an experiment.",
        },
        {
          text: "Archival silences",
          why: "Archival silences are gaps in historical records. She is observing live, in person.",
        },
        {
          text: "Reflexivity",
          correct: true,
          why: "Wondering whether observations are typical and whether her own presence and social categories are shaping them is the ethnographer’s reflexivity challenge.",
        },
        {
          text: "Operationalization",
          why: "Operationalization is deciding how to concretely measure a concept for quantitative work. Her worry is about her effect on the scene.",
        },
      ],
    },
    {
      id: "u3-q19",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-ecological-validity", "u3-experiment"],
      stem:
        "In a tightly controlled lab game, researchers find that people share resources more when they’re told their name will be shown. A critic says real group chats and friend groups involve far too many other factors for the result to carry over. Which problem is the critic raising?",
      options: [
        {
          text: "Ecological validity",
          correct: true,
          why: "A result that holds within the controlled experiment but is questionable in complex social reality is the ecological-validity problem.",
        },
        {
          text: "Reflexivity",
          why: "Reflexivity is the ethnographer’s worry about their own presence and about typicality. This critique is about a lab setup not matching real life.",
        },
        {
          text: "Archival silences",
          why: "Archival silences concern missing historical records, not lab-to-life transfer.",
        },
        {
          text: "The mode",
          why: "The mode is a measure of central tendency (the most frequent value) and has nothing to do with whether findings generalize.",
        },
      ],
    },
    {
      id: "u3-q20",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u3-quant-limits", "u3-correlation-coefficient"],
      stem:
        "A survey finds that students who own a library card tend to have higher GPAs. The researcher announces, “Library cards cause better grades.” What is the most fundamental problem with this claim, according to the notes?",
      options: [
        {
          text: "Historical sociologists can’t find any archival records of these particular students",
          why: "That’s the archival-silences problem of historical work, not the problem of a present-day survey.",
        },
        {
          text: "The lab setting was too artificial",
          why: "That’s the ecological-validity problem of experiments. This was a survey, not a lab experiment.",
        },
        {
          text: "Correlations can suggest a cause but never directly show one",
          correct: true,
          why: "The notes say quantitative modeling fundamentally can’t observe actual causation. A correlation alone doesn’t show that library cards cause grades.",
        },
        {
          text: "The researcher joined the students and changed their behavior",
          why: "That is the ethnographer’s reflexivity worry, and nobody here was observing in person.",
        },
      ],
    },
    {
      id: "u3-q21",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u3-operationalization", "u3-quant-limits"],
      stem:
        "A study measures “community involvement” only by counting how many social-media groups a person has joined. A critic says the whole analysis is shaky no matter how sophisticated the statistics are. What is the critic pointing to?",
      options: [
        {
          text: "A latent function of social media",
          why: "A latent function is an unnoticed effect of an activity. The critic is questioning how the concept was measured.",
        },
        {
          text: "A poor operationalization of the concept",
          correct: true,
          why: "Operationalization means deciding how to concretely measure a concept. The notes say no statistical wizardry can make up for a badly formulated one.",
        },
        {
          text: "Archival silences",
          why: "Archival silences are gaps in historical records, not a questionable choice of present-day measure.",
        },
        {
          text: "A high standard deviation",
          why: "Standard deviation describes how spread out data are. It says nothing about whether the measure fits the concept.",
        },
      ],
    },
    {
      id: "u3-q22",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-archival-silences", "u3-historical-comparative"],
      stem:
        "A historical sociologist studying a 1920s mill town finds the owner’s letters, payroll ledgers, and board minutes, but almost nothing written by or about the immigrant laborers who worked there. What challenge is she facing?",
      options: [
        {
          text: "Ecological validity",
          why: "Ecological validity is about experimental results failing in real life. She isn’t running an experiment.",
        },
        {
          text: "Subjective bias",
          why: "The gap isn’t her personal bias. The archive itself failed to record the workers.",
        },
        {
          text: "Operationalization",
          why: "Operationalization is choosing a concrete measure for a concept. Her problem is that the records don’t exist.",
        },
        {
          text: "Archival silences",
          correct: true,
          why: "Historical researchers are limited to what the archive recorded, and it often doesn’t record marginalized communities directly.",
        },
      ],
    },
    {
      id: "u3-q23",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-archival-silences", "u3-historical-comparative"],
      stem:
        "A historical sociologist is comparing two famous twentieth-century elections. For each one there are thousands of books, memoirs, and newspaper archives, far more than she could read in her career. Which challenge of historical-comparative methods does this illustrate?",
      options: [
        {
          text: "Too much data: deciding where to stop",
          correct: true,
          why: "The notes point out that historical sociologists can have too much data and must decide not just where to start but where to stop.",
        },
        {
          text: "Archival silences about marginalized people",
          why: "That is the opposite problem, too little recorded about some groups. Her problem is an overwhelming amount.",
        },
        {
          text: "Ecological validity",
          why: "Ecological validity belongs to experiments, not archival research.",
        },
        {
          text: "The ethnographer’s reflexivity",
          why: "Reflexivity concerns an observer’s presence in an ongoing scene. She is reading records.",
        },
      ],
    },
    {
      id: "u3-q24",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u3-historical-comparative", "u3-ethnography", "u3-experiment", "u3-quantitative-modeling"],
      stem:
        "A researcher wants to understand how members of a brand-new campus club, founded this week, are working out their norms and routines. Which method would be the STRANGEST choice?",
      options: [
        {
          text: "Ethnography: attending the meetings",
          why: "Watching the club’s meetings as they happen is exactly what ethnography is good for.",
        },
        {
          text: "Historical and comparative analysis of the club’s archives",
          correct: true,
          why: "A club founded this week has essentially no past records to study, so a method built on archives is the odd choice.",
        },
        {
          text: "Interviews and participation as a member",
          why: "Interviewing members and joining in are standard parts of ethnography and fit a live, new group well.",
        },
        {
          text: "A small survey of members’ attitudes",
          why: "A survey could reasonably measure members’ views. It is not the strangest option.",
        },
      ],
    },
    {
      id: "u3-q25",
      skill: "application",
      format: "mc",
      tier: 2,
      conceptIds: ["u3-standard-deviation", "u3-central-tendency"],
      stem:
        "Two sections of the same course both average 78 on the midterm. Section A has a much higher standard deviation than Section B. What does that tell you?",
      options: [
        {
          text: "Section A’s average is really higher than Section B’s",
          why: "The averages are the same. Standard deviation describes spread, not the center.",
        },
        {
          text: "Section A has more students who broke exam rules",
          why: "This is the everyday “deviation = deviance” trap. Standard deviation is about spread, not rule-breaking.",
        },
        {
          text: "Section A’s scores are more spread out around the average",
          correct: true,
          why: "A higher standard deviation means the data are more spread out around the mean. Section A has more very high and very low scores.",
        },
        {
          text: "Section A’s most common score is 78",
          why: "That would be a claim about the mode, and standard deviation tells you nothing about which score is most frequent.",
        },
      ],
    },
    {
      id: "u3-q26",
      skill: "application",
      format: "mc",
      tier: 2,
      conceptIds: ["u3-correlation-coefficient", "u3-quant-limits"],
      stem:
        "Among students, researchers find a correlation of about −0.5 between hours spent on the phone after midnight and GPA. What is the best interpretation?",
      options: [
        {
          text: "More late-night phone time tends to go with lower GPAs, imperfectly",
          correct: true,
          why: "Negative means that as one goes up the other tends to go down. A value between 0 and −1 means the relationship is real but imperfect.",
        },
        {
          text: "Late-night phone use has been proven to directly cause students’ GPAs to drop",
          why: "Correlation alone can’t establish causation. Quantitative modeling can only infer causes.",
        },
        {
          text: "There is no relationship, because the number is negative",
          why: "A negative sign shows the direction of a relationship (opposite movement). It doesn’t mean there is no relationship.",
        },
        {
          text: "Students who use their phones late have higher GPAs",
          why: "That would be a positive correlation. A negative correlation means the two tend to move in opposite directions.",
        },
      ],
    },
    // ---------------- Conceptual ----------------
    {
      id: "u3-q27",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-interaction", "u3-symbol", "u3-frame"],
      stem: "In the notes’ discussion of symbolic interactionism, which term is defined as “exchanges of shared meanings”?",
      options: [
        {
          text: "Symbols",
          why: "Symbols are representations of one thing by means of another. They are what gets exchanged, not the exchange itself.",
        },
        {
          text: "Frames",
          why: "Frames are shared meanings that define the nature of a set of interactions. They define the situation rather than being the exchange.",
        },
        {
          text: "Interactions",
          correct: true,
          why: "The notes define interactions as exchanges of shared meanings.",
        },
        {
          text: "Fields",
          why: "A field is a meso-level social space of actors struggling over the meaning of their shared action.",
        },
      ],
    },
    {
      id: "u3-q28",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-frame", "u3-symbol", "u3-interaction"],
      stem: "What are “shared meanings that define the nature of a particular set of interactions”?",
      options: [
        {
          text: "Frames",
          correct: true,
          why: "That is the notes’ definition of a frame, the shared sense of what an interaction is about.",
        },
        {
          text: "Symbols",
          why: "Symbols are single representations (words, pictures, gestures, material structures), not the definition of a whole set of interactions.",
        },
        {
          text: "Latent functions",
          why: "Latent functions are effects of an activity that participants aren’t aware of.",
        },
        {
          text: "Norms",
          why: "Norms (Unit 4) are rule-like statements about what is appropriate. A frame defines what kind of situation it is.",
        },
      ],
    },
    {
      id: "u3-q29",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u3-field-theory"],
      stem:
        "In field theory, what is a “field”?",
      options: [
        {
          text: "An academic discipline or college major",
          why: "This is the everyday meaning (“my field is biology”). In field theory a field is a social space of struggle.",
        },
        {
          text: "A social space where actors watch one another and struggle over what their shared action means",
          correct: true,
          why: "That is the notes’ definition. Actors can be people, organizations or states, and the field contains incumbents and newcomers.",
        },
        {
          text: "The physical setting, like a village or a workplace, where an ethnographer goes to do fieldwork",
          why: "It is tempting because of “fieldwork,” but field theory’s field is an arena of relations and struggle, not a physical site.",
        },
        {
          text: "The whole of society, understood as one big system in which every part serves a function for the whole",
          why: "That describes structural functionalism’s macro picture. Field theory is deliberately meso, not whole-society.",
        },
      ],
    },
    {
      id: "u3-q30",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-field-theory", "u2-micro", "u2-macro"],
      stem: "At what level of social life does field theory say we should look?",
      options: [
        {
          text: "Micro: face-to-face interaction only",
          why: "In the notes’ influencer example, the frame for your action is not face-to-face. Field theory deliberately goes above the micro level.",
        },
        {
          text: "Macro: society as a whole",
          why: "Field theory says actors’ actions aren’t directly tied to their interests in society as a whole or to society’s overall functioning.",
        },
        {
          text: "Meso: a middle range between micro and macro",
          correct: true,
          why: "The notes say field theory argues for a “meso” or middle-range view of social structure, rather than micro or macro.",
        },
        {
          text: "Only the subjective level of individual minds",
          why: "Field theory studies relations among many actors (people, organizations, states), not private mental states.",
        },
      ],
    },
    {
      id: "u3-q31",
      skill: "conceptual",
      format: "mc",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u3-intersectional-theory", "u1-double-consciousness", "u1-reflexivity"],
      stem:
        "The black, feminist and intersectional tradition is often said to build on whose work on reflexivity and double-consciousness?",
      options: [
        {
          text: "C. Wright Mills",
          why: "Mills gave the second statement of the sociological imagination (troubles vs. issues) and wrote about the Power Elite. Double-consciousness is Du Bois’ idea.",
        },
        {
          text: "W.E.B. Du Bois",
          correct: true,
          why: "The notes say this tradition’s shared insight is often said to be built from Du Bois’ work on reflexivity and double-consciousness.",
        },
        {
          text: "Talcott Parsons",
          why: "Parsons elaborated structural functionalism, the tradition this one criticizes for its supposedly universal view.",
        },
        {
          text: "Herbert Blumer",
          why: "Blumer pioneered symbolic interactionism, a micro tradition, not the standpoint tradition.",
        },
      ],
    },
    {
      id: "u3-q32",
      skill: "conceptual",
      format: "mc",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u3-frame", "u3-symbolic-interactionism"],
      stem:
        "Which thinker showed how interactions can become highly elaborate, from simple eye contact to cons where some people are “keyed in” and others are unwitting “marks,” governed by frames?",
      options: [
        {
          text: "Émile Durkheim",
          why: "Durkheim is identified with structural functionalism and the division of labor holding modern society together.",
        },
        {
          text: "Karl Marx",
          why: "Marx is the root of conflict theory (capitalists vs. proletariat), not frame analysis.",
        },
        {
          text: "Neil Fligstein and Doug McAdam",
          why: "They are field theorists, known for incumbents and newcomers.",
        },
        {
          text: "Erving Goffman",
          correct: true,
          why: "The notes cite Goffman, a symbolic interactionist, for elaborate interactions and cons governed by frames.",
        },
      ],
    },
    {
      id: "u3-q33",
      skill: "conceptual",
      format: "mc",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u3-structural-functionalism"],
      stem:
        "Which thinker is identified with structural functionalism and argued that modern societies are held together by an economic division of labor that makes people interdependent?",
      options: [
        {
          text: "Émile Durkheim",
          correct: true,
          why: "The notes identify structural functionalism with Durkheim and his argument about the division of labor.",
        },
        {
          text: "Karl Marx",
          why: "Marx saw capitalism as driven by conflict between capitalists and workers, not held together by interdependence.",
        },
        {
          text: "Pierre Bourdieu",
          why: "Bourdieu is identified with practice theory, and field theory is partly derived from his work.",
        },
        {
          text: "C. Wright Mills",
          why: "Mills contributed the “Power Elite” to conflict theory. He is not a functionalist.",
        },
      ],
    },
    {
      id: "u3-q34",
      skill: "conceptual",
      format: "mc",
      trap: "not-all",
      tier: 1,
      conceptIds: ["u3-ethnography", "u3-experiment", "u3-quantitative-modeling", "u3-historical-comparative"],
      stem: "Which of the following is NOT a method regularly used by sociologists?",
      fixedOrder: true,
      options: [
        {
          text: "Experiments",
          why: "Sociologists run experiments rarely but increasingly: intervene, then compare outcomes with and without the intervention.",
        },
        {
          text: "Reading horoscopes",
          correct: true,
          why: "Astrology isn’t a method. It isn’t even naturalistic explanation. The real methods are ethnography, experiments, quantitative modeling, and historical-comparative work.",
        },
        {
          text: "Ethnography",
          why: "Ethnography, close observation of phenomena as they happen, is a core sociological method.",
        },
        {
          text: "Quantitative modeling",
          why: "Quantifying phenomena and modeling relationships (including all statistical techniques) is a major family of methods.",
        },
        {
          text: "These are all methods used by sociologists",
          why: "One option (horoscopes) is clearly not a sociological method.",
        },
      ],
    },
    {
      id: "u3-q35",
      skill: "conceptual",
      format: "mc",
      trap: "not-all",
      tier: 1,
      conceptIds: ["u3-intersectional-theory", "u2-objectivist"],
      stem:
        "Which of the following is NOT one of the interventions that black, feminist and intersectional theory makes in sociology?",
      fixedOrder: true,
      options: [
        {
          text: "Good sociology needs as diverse a group of sociologists as possible",
          why: "This is one of the three interventions: diverse viewpoints motivate the study of overlooked phenomena.",
        },
        {
          text: "Policy must consider groups along the intersection of all salient social categories",
          why: "This is one of the three interventions. You can’t assume one subgroup’s concerns stand for everyone’s.",
        },
        {
          text: "The direct experience of marginalized people is crucial sociological evidence",
          why: "This is one of the three interventions.",
        },
        {
          text: "Sociologists should aim for a single, universal “view from nowhere”",
          correct: true,
          why: "The tradition begins by emphatically rejecting the view from nowhere, so this is the opposite of its position.",
        },
        {
          text: "All of these are interventions of this tradition",
          why: "The view-from-nowhere option contradicts the tradition’s starting point.",
        },
      ],
    },
    {
      id: "u3-q36",
      skill: "conceptual",
      format: "mc",
      trap: "not-all",
      tier: 1,
      conceptIds: ["u3-central-tendency", "u3-standard-deviation"],
      stem: "Which of the following is NOT a measure of central tendency?",
      fixedOrder: true,
      options: [
        {
          text: "Mean",
          why: "The mean (sum ÷ number of observations) is a measure of central tendency.",
        },
        {
          text: "Median",
          why: "The median (the middle observation when ordered) is a measure of central tendency.",
        },
        {
          text: "Mode",
          why: "The mode (the most frequent observation) is a measure of central tendency.",
        },
        {
          text: "Standard deviation",
          correct: true,
          why: "Standard deviation is a measure of dispersion, describing how spread out data are around the mean, not where the center is.",
        },
        {
          text: "These are all measures of central tendency",
          why: "Standard deviation measures spread, not the center.",
        },
      ],
    },
    {
      id: "u3-q37",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u3-central-tendency"],
      stem: "Which measure of central tendency is the most frequently occurring observation?",
      options: [
        {
          text: "The mean",
          why: "The mean is the simple average: sum the values and divide by how many there are.",
        },
        {
          text: "The median",
          why: "The median is the middle observation when values are ordered from lowest to highest.",
        },
        {
          text: "The standard deviation",
          why: "Standard deviation isn’t a measure of central tendency. It measures spread.",
        },
        {
          text: "The mode",
          correct: true,
          why: "The mode is the value that shows up most often.",
        },
      ],
    },
    {
      id: "u3-q38",
      skill: "conceptual",
      format: "mc",
      tier: 1,
      conceptIds: ["u3-central-tendency"],
      stem:
        "You line up every student in a class from shortest to tallest and pick the height of the person standing exactly in the middle. Which measure have you found?",
      options: [
        {
          text: "The median",
          correct: true,
          why: "The median is the middle observation of values ordered from lowest to highest.",
        },
        {
          text: "The mean",
          why: "The mean would require adding all the heights and dividing by the number of students.",
        },
        {
          text: "The mode",
          why: "The mode is the most frequently occurring height, not the middle one.",
        },
        {
          text: "The correlation coefficient",
          why: "A correlation coefficient describes how two variables move together. Here there is only one variable.",
        },
      ],
    },
    {
      id: "u3-q39",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-ethnographic-reflexivity"],
      stem: "According to the notes, what is the key challenge of reflexivity in ethnographic research?",
      options: [
        {
          text: "Judging whether what you see is typical, and whether your own presence caused it",
          correct: true,
          why: "These are the two parts of the challenge the notes describe for an embedded researcher.",
        },
        {
          text: "Findings that hold up inside a carefully controlled setting but become questionable in messy social reality",
          why: "That is ecological validity, the signature challenge of experiments.",
        },
        {
          text: "Records that fail to capture marginalized communities",
          why: "That is archival silences, the signature challenge of historical-comparative work.",
        },
        {
          text: "Only being able to infer, never observe, causation",
          why: "That is the fundamental limit of quantitative modeling.",
        },
      ],
    },
    {
      id: "u3-q40",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-frame", "u3-symbolic-interactionism"],
      stem: "What do symbolic interactionists say about frames and social interaction?",
      options: [
        {
          text: "Frames are rare and appear only in formal settings like courtrooms",
          why: "The notes say symbolic interactionists think every social interaction must have at least one frame, not just formal ones.",
        },
        {
          text: "Frames are the private intentions of whoever starts the interaction",
          why: "Frames are emergent and irreducible to the intentions of any one person.",
        },
        {
          text: "Every interaction has at least one frame, and no one person sets it",
          correct: true,
          why: "Interactions are governed by emergent frames that define what they are about, and every interaction has at least one.",
        },
        {
          text: "Frames are the non-verbal habits and bodily know-how that people can’t put into words",
          why: "That describes tacit knowledge, which is practice theory’s focus. Frames are shared meanings.",
        },
      ],
    },
    {
      id: "u3-q41",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-field-theory", "u3-intersectional-theory"],
      stem:
        "Why does the author call field theory and black, feminist and intersectional theory “exotic newcomers”?",
      options: [
        {
          text: "Both were invented within the last decade",
          why: "The notes say they are not temporally new. Both have long intellectual histories.",
        },
        {
          text: "Both study only new phenomena like the internet",
          why: "Nothing limits them to new phenomena. The label is about their place in the discipline.",
        },
        {
          text: "Both come from outside of sociology entirely and reject the discipline’s methods as unscientific",
          why: "They work within sociology and aim to fix its older traditions’ oversights, not to reject sociological method.",
        },
        {
          text: "They tackle the older traditions’ blind spots in new ways and were only recently accepted",
          correct: true,
          why: "Those are the two reasons the notes give. The label is explicitly not about the traditions being new in time.",
        },
      ],
    },
    {
      id: "u3-q42",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u3-research-process"],
      stem: "How do the notes describe the steps of the research process (asking a question, designing a study, reading others’ work, analyzing data)?",
      options: [
        {
          text: "Usually treated as distinct, but in practice deeply intertwined",
          correct: true,
          why: "The notes stress that working scientists rarely obey a strict separation. The steps are mixed together.",
        },
        {
          text: "Strictly sequential: each step must be finished before the next begins",
          why: "That is the view of contemporary critics of science, which the notes explicitly reject.",
        },
        {
          text: "Only the analysis step counts as real science",
          why: "The notes list all of these practices as part of the research process.",
        },
        {
          text: "Personal commitments must never influence which topic is chosen",
          why: "That is one of the strict separations critics demand. The notes take a more pluralist, mixed view.",
        },
      ],
    },
    {
      id: "u3-q43",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u1-reflexivity", "u3-ethnographic-reflexivity"],
      stem:
        "In Unit 1, reflexivity is the ability (tied to Du Bois) to see yourself both through your own eyes and through the social categories others see you by. When the notes discuss ethnography in Unit 3, what does “reflexivity” refer to?",
      options: [
        {
          text: "A person’s quick automatic reactions",
          why: "This is the everyday “reflexes” trap. Neither unit uses the word this way.",
        },
        {
          text: "Whether what the researcher sees is typical, or shaped by their own presence",
          correct: true,
          why: "In ethnography, reflexivity names a method challenge. It is related to Du Bois’ insight (awareness of how your categories matter) but is not the same thing.",
        },
        {
          text: "The “gift of second sight” that people in certain social positions possess, letting them see themselves as others see them",
          why: "That is closer to Du Bois’ double-consciousness in Unit 1, not the method challenge in Unit 3.",
        },
        {
          text: "The gap between lab findings and real-world behavior",
          why: "That is ecological validity, the experimenter’s problem.",
        },
      ],
    },
    {
      id: "u3-q44",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-intersectional-theory", "u2-objectivist"],
      stem:
        "Black, feminist and intersectional theory begins by rejecting the “view from nowhere.” Which Unit 2 epistemology is it most directly rejecting?",
      options: [
        {
          text: "Subjectivist epistemology",
          why: "Subjectivist epistemology focuses on internal mental states. The view from nowhere is the opposite ideal: no standpoint at all.",
        },
        {
          text: "Intersubjectivist epistemology",
          why: "Intersubjectivist epistemology stresses how expert communities shape perspectives. It doesn’t claim a position-free view.",
        },
        {
          text: "Objectivist epistemology",
          correct: true,
          why: "Objectivism seeks to eliminate subjective and intersubjective bias and achieve a totally independent view of reality, which is exactly the view from nowhere.",
        },
        {
          text: "Naturalistic explanation",
          why: "Naturalistic explanation just rules out supernatural causes. Intersectional theory doesn’t reject that.",
        },
      ],
    },
    {
      id: "u3-q45",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u3-practice-theory", "u2-realism"],
      stem:
        "The notes say practice theory argues that socialized dispositions really exist but can only be observed in nondiscursive ways, through what people do. In Unit 2’s terms, what kind of argument is this?",
      options: [
        {
          text: "Analytic reduction",
          why: "Analytic reduction breaks complex phenomena into smaller constituent parts. Practice theory is reasoning from observed doings to a real disposition.",
        },
        {
          text: "A realist argument",
          correct: true,
          why: "The notes call it “the realist argument.” It reasons back from observable traces (practices) to something real that can’t be seen directly.",
        },
        {
          text: "An objectivist argument",
          why: "Objectivism is about removing bias to reach a view from nowhere. That isn’t practice theory’s claim.",
        },
        {
          text: "A subjectivist argument",
          why: "Subjectivism focuses on inner mental states. Practice theory stresses dispositions shown in action, often not consciously articulated.",
        },
      ],
    },
    {
      id: "u3-q46",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u3-practice-theory"],
      stem: "In SOC 105, “practice theory” is centrally about…",
      options: [
        {
          text: "How repeated rehearsal and drills make people better at skills",
          why: "This is the everyday “practice makes perfect” meaning, not the course concept.",
        },
        {
          text: "Watching what people do, not just what they say, because much know-how is unspoken",
          correct: true,
          why: "Practice theory says studying expressed symbols is inadequate and you must also observe people’s nondiscursive doing.",
        },
        {
          text: "How professionals such as doctors, dentists and lawyers run and manage their private practices",
          why: "A play on “medical practice.” The tradition is a general micro theory, not a study of professions.",
        },
        {
          text: "Testing theories in practice before publishing them",
          why: "That confuses “practice” with “putting into practice.” The course meaning is about nondiscursive action.",
        },
      ],
    },
    {
      id: "u3-q47",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: [
        "u3-symbolic-interactionism",
        "u3-practice-theory",
        "u3-structural-functionalism",
        "u3-conflict-theory",
      ],
      stem: "Which pair does the author group together as the macro-oriented theoretical traditions?",
      options: [
        {
          text: "Symbolic interactionism and practice theory",
          why: "Those are the two micro-oriented traditions, focused on face-to-face interaction.",
        },
        {
          text: "Field theory and black, feminist and intersectional theory",
          why: "Those are the two “exotic newcomers.”",
        },
        {
          text: "Structural functionalism and conflict theory/Marxism",
          correct: true,
          why: "These two address macro phenomena and respond to one another: consensus vs. conflict.",
        },
        {
          text: "Practice theory and field theory",
          why: "Both draw on Bourdieu, but one is micro and the other is meso. The notes don’t pair them.",
        },
      ],
    },
    // ---------------- True / False (misattribution & reversal) ----------------
    {
      id: "u3-q48",
      skill: "conceptual",
      format: "tf",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u3-symbolic-interactionism"],
      stem:
        "True/False: Symbolic interactionism was pioneered by Herbert Blumer, who was a student of George Herbert Mead at the University of Chicago.",
      options: [
        {
          text: "True",
          correct: true,
          why: "The notes name Blumer as the pioneer and Mead, a classical theorist at Chicago, as his teacher.",
        },
        {
          text: "False",
          why: "The attribution is correct as stated. Blumer pioneered it, drawing on Mead and pragmatism.",
        },
      ],
    },
    {
      id: "u3-q49",
      skill: "conceptual",
      format: "tf",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u3-practice-theory", "u3-structural-functionalism", "u3-field-theory"],
      stem: "True/False: Pierre Bourdieu is the thinker the notes most associate with structural functionalism.",
      options: [
        {
          text: "True",
          why: "Structural functionalism is identified with Durkheim, with Parsons and Merton later. Bourdieu is the name for practice theory.",
        },
        {
          text: "False",
          correct: true,
          why: "Bourdieu is identified with practice theory, and field theory is partly derived from his work. Durkheim is the functionalist.",
        },
      ],
    },
    {
      id: "u3-q50",
      skill: "conceptual",
      format: "tf",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u3-manifest-function", "u3-latent-function"],
      stem: "True/False: Robert Merton distinguished between manifest and latent functions.",
      options: [
        {
          text: "True",
          correct: true,
          why: "The notes credit Merton with the manifest/latent distinction within structural functionalism.",
        },
        {
          text: "False",
          why: "This is the correct attribution. Merton made the distinction.",
        },
      ],
    },
    {
      id: "u3-q51",
      skill: "conceptual",
      format: "tf",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u3-structural-functionalism", "u3-conflict-theory"],
      stem:
        "True/False: Talcott Parsons was a leading conflict theorist who argued that institutions like the family and schooling mainly reflect clashes between groups.",
      options: [
        {
          text: "True",
          why: "Parsons is on the other side of that debate. He explained institutions by how they integrate people and keep society going.",
        },
        {
          text: "False",
          correct: true,
          why: "Parsons elaborated structural functionalism, accounting for family, schooling, war and more by how they integrate people and contribute to society’s continuity.",
        },
      ],
    },
    {
      id: "u3-q52",
      skill: "conceptual",
      format: "tf",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u3-conflict-theory"],
      stem:
        "True/False: C. Wright Mills’ idea of the “Power Elite” loosened conflict theory’s purely economic focus by describing an elite spanning all relevant social institutions.",
      options: [
        {
          text: "True",
          correct: true,
          why: "The notes cite Mills’ Power Elite as a conflict theory that spans all relevant institutions, not just economic ones.",
        },
        {
          text: "False",
          why: "The Power Elite is Mills’ contribution to conflict theory, and it did extend beyond the economy.",
        },
      ],
    },
    {
      id: "u3-q53",
      skill: "conceptual",
      format: "tf",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u3-field-theory"],
      stem:
        "True/False: Émile Durkheim is the source the notes cite for describing fields as populated by “incumbents” and “newcomers.”",
      options: [
        {
          text: "True",
          why: "Durkheim is the notes’ structural functionalist (division of labor). The incumbents/newcomers language comes from Fligstein and McAdam.",
        },
        {
          text: "False",
          correct: true,
          why: "The notes cite Fligstein and McAdam for incumbents and newcomers in fields.",
        },
      ],
    },
    {
      id: "u3-q54",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 1,
      conceptIds: ["u3-practice-theory"],
      stem:
        "True/False: Practice theory claims that the non-verbal orientations people express in their practices are NOT socialized. They are purely individual instincts.",
      options: [
        {
          text: "True",
          why: "This reverses the notes, which stress that practice theory is not saying these orientations are unsocialized.",
        },
        {
          text: "False",
          correct: true,
          why: "Practice theory argues that there are socialized dispositions, expressed and observable only in nondiscursive ways.",
        },
      ],
    },
    {
      id: "u3-q55",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 2,
      conceptIds: ["u3-research-process"],
      stem:
        "True/False: According to the notes, working scientists usually keep a strict separation between formulating a question, designing a study, collecting data, and drawing conclusions.",
      options: [
        {
          text: "True",
          why: "This is the critics’ ideal that the notes argue against. In practice the steps are intertwined.",
        },
        {
          text: "False",
          correct: true,
          why: "The notes say it is rare for a working scientist to obey that strict separation. The steps are mixed together.",
        },
      ],
    },
    // ---------------- Big empirical ----------------
    {
      id: "u3-q56",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 2,
      conceptIds: ["u3-correlation-coefficient"],
      stem: "A correlation coefficient can take values in what range?",
      fixedOrder: true,
      options: [
        {
          text: "From 0 to 1",
          why: "This leaves out negative correlations, where one variable goes down as the other goes up.",
        },
        {
          text: "From −1 to 1",
          correct: true,
          why: "Correlations run from −1 (perfectly negative) to 1 (perfectly positive). Values in between show imperfect relationships.",
        },
        {
          text: "From −10 to 10",
          why: "The scale stops at −1 and 1, the perfect relationships. Nothing can be more than perfectly correlated.",
        },
        {
          text: "From 0 to 100, like a percentage",
          why: "A correlation is not a percentage, and it can be negative.",
        },
      ],
    },
    {
      id: "u3-q57",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 1,
      conceptIds: ["u3-experiment"],
      stem: "How often do sociologists conduct experiments, according to the notes?",
      fixedOrder: true,
      options: [
        {
          text: "Never. Experiments are impossible with people",
          why: "The notes discuss real sociological experiments, like Pager’s audit study.",
        },
        {
          text: "Rarely, but increasingly",
          correct: true,
          why: "That is the notes’ phrase. Experiments are a small but growing part of sociology.",
        },
        {
          text: "In about half of all studies",
          why: "That overstates it a lot. Most sociology uses ethnography, quantitative, and historical data.",
        },
        {
          text: "In nearly all sociological research",
          why: "Experiments are the least common of the four methods discussed.",
        },
      ],
    },
    {
      id: "u3-q58",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 1,
      conceptIds: ["u3-structural-functionalism", "u3-conflict-theory"],
      stem: "When was structural functionalism the dominant theoretical approach in American sociology?",
      fixedOrder: true,
      options: [
        {
          text: "Only in the last five years",
          why: "Functionalism’s heyday was long ago, and conflict theory rose partly in reaction to it.",
        },
        {
          text: "In the middle of the twentieth century",
          correct: true,
          why: "The notes say functionalism was taken up as the dominant approach mid-century, with Parsons’ elaborate system.",
        },
        {
          text: "About 500 years ago, alongside the birth of modern science",
          why: "Modern science is about 500 years old (Unit 2), but sociology’s theoretical traditions are far more recent.",
        },
        {
          text: "About 10,000 years ago, with settled agriculture",
          why: "Far too early. Sociology as a discipline is a modern creation.",
        },
      ],
    },
    {
      id: "u3-q59",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 1,
      conceptIds: ["u3-conflict-theory"],
      stem:
        "When did conflict theory’s Marxist heritage become openly acknowledged in U.S. sociology?",
      fixedOrder: true,
      options: [
        {
          text: "Immediately in the 1800s, as soon as Marx published, because science is unaffected by politics",
          why: "The notes say the heritage became explicit only much later, precisely because of the political climate.",
        },
        {
          text: "By the 1970s, once anti-communist fervor in the U.S. had faded",
          correct: true,
          why: "The notes say the Marxist heritage only became explicit once anti-communist fervor had faded by the 1970s.",
        },
        {
          text: "Only in the 2020s, because Marx was unknown before then",
          why: "Marx has been famous for well over a century. The timing had to do with politics, not obscurity.",
        },
        {
          text: "Never. Conflict theory has no connection to Marx",
          why: "The notes trace conflict theories to Marx directly.",
        },
      ],
    },
    {
      id: "u3-q60",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 1,
      conceptIds: ["u3-archival-silences", "u3-historical-comparative"],
      stem:
        "Roughly how much has been written about the most-studied historical events, such as the Holocaust or the Russian Revolution?",
      fixedOrder: true,
      options: [
        {
          text: "Almost nothing. The records were lost",
          why: "Those events are among the most documented in history, and the notes use them as examples of too much data.",
        },
        {
          text: "A few dozen articles",
          why: "Far too few. That would make a careful researcher’s job easy.",
        },
        {
          text: "About a shelf you could finish in one semester",
          why: "Still far too small. The notes stress an overwhelming amount.",
        },
        {
          text: "Nearly infinite: a lifetime of reading",
          correct: true,
          why: "That is why historical sociologists must decide where to stop collecting data, as well as where to start.",
        },
      ],
    },
    {
      id: "u3-q61",
      skill: "empirical",
      format: "tf",
      tier: 1,
      conceptIds: ["u3-experiment"],
      stem:
        "True/False: In Devah Pager’s audit experiment discussed in the notes, black men without an arrest record were less likely to get a callback than white men with one.",
      options: [
        {
          text: "True",
          correct: true,
          why: "This is the famous finding. Because the résumés were otherwise identical, it isolates race as a mechanism, which shows what experiments can do.",
        },
        {
          text: "False",
          why: "The notes report exactly this finding, and it is why the study is considered so powerful.",
        },
      ],
    },
  ],
};
