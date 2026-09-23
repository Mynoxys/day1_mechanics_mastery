import type { Unit } from "../types";

// Unit 1: Imagination. Source: https://nhwilson.github.io/chapters/Ch_1_Imagination.html
// Every definition, thinker, and number here is taken from the course notes.

export const unit1: Unit = {
  id: "u1",
  number: 1,
  title: "Imagination",
  subtitle: "The sociological imagination: moving from personal troubles to social forces",
  sourceUrl: "https://nhwilson.github.io/chapters/Ch_1_Imagination.html",

  bigPoints: [
    {
      point: "The sociological imagination means stepping back from purely personal explanations and looking for social ones.",
      detail:
        "Stuck in traffic? You could just blame “these jerks on the road.” Or you could ask why so many people have to drive at the same time: weak public transit, and a Long Island built around cars after World War II. Going from “me” to “the social forces that shaped my situation” is the move this whole course trains.",
    },
    {
      point: "The notes give two versions of the sociological imagination: Du Bois’s and Mills’s.",
      detail:
        "W.E.B. Du Bois (The Souls of Black Folk) starts from social categories. Other people see you through a category, and you end up seeing yourself through their eyes. He called this double-consciousness, and it also gives you a kind of “second-sight.” Today we usually call that ability reflexivity. C. Wright Mills (The Sociological Imagination, 1959) starts from social forces. Your choices are your own, but social forces decide which choices you get. The same forces can be felt as private troubles or seen as issues shared by whole groups.",
    },
    {
      point: "Mills’s cherished-values typology: two yes/no questions give four states.",
      detail:
        "Cherished values are deeply held goals or states of affairs you may or may not be aware of. Mills asks two things. Can you put your values into words? Are they being threatened by social change? The four answers are well-being (can say them, not threatened), crisis (can say them, threatened), indifference (can’t say them, not threatened), and uneasiness (can’t say them, threatened).",
    },
    {
      point: "Big, painful problems like addiction or disaster are personal troubles and also social issues, and the numbers show it.",
      detail:
        "Opioid prescribing in the US in 2015 was about three times the 1999 level and nearly four times Europe’s. Drug-company marketing and hospital cost-cutting drove that, not a sudden wave of weak-willed people. Heavy-rain days along Long Island Sound are up about a quarter since 1940, and sea level has risen more than a foot in about 150 years. A “1,000-year” storm is not bad luck; it is tied to carbon emissions from human activity.",
    },
  ],

  connections: [
    "Unit 1 is the course’s starting move. Before any theory or method, you learn to ask what social forces lie behind a personal situation.",
    "Reflexivity comes back right away. Unit 2 uses it to explain why the social sciences can’t study people like rocks: people react to how they understand the world. Unit 3 traces the Black, feminist, and intersectional tradition to Du Bois’s ideas of reflexivity and double-consciousness, and it makes reflexivity a key challenge in ethnography.",
    "Mills’s idea that “your choices are yours, but the menu is social” sets up Unit 2’s agency vs. structure. His cherished values set up the values dimension of culture in Unit 4. Social categories (gender, race, class, and so on) become the building blocks of the later units on identity and inequality.",
  ],

  concepts: [
    {
      id: "u1-social",
      term: "The social (social domain)",
      tier: 1,
      plainIdea:
        "Anything that only works because people share meanings or have to line up their actions with each other. A pickup game, a group chat’s inside jokes, and a class schedule all count. A rock rolling down a hill with nobody around does not.",
      courseDefinition:
        "The social domain is any set of actions, interactions, beliefs, or material structures that draw from shared meanings or require coordinating people.",
      freshExample:
        "Your friend group settling on a time for weekly game night is social. It depends on shared meanings (“game night” means something) and on coordinating several people’s schedules.",
      notToConfuse:
        "Not “social” as in sociable or partying. A lonely person filling out a tax form is still acting in the social domain, because the form only makes sense through shared meanings and coordination.",
    },
    {
      id: "u1-sociological-imagination",
      term: "Sociological imagination",
      tier: 1,
      thinker: "W.E.B. Du Bois and C. Wright Mills (two phrasings)",
      plainIdea:
        "Zooming out from “why is this happening to me?” to “what social forces set this up for me and for lots of people like me?” It’s like realizing the long line at the store isn’t bad luck: they cut the number of cashiers.",
      courseDefinition:
        "The sociological imagination is the capacity to analyze phenomena in terms of the social forces that shape and constitute them.",
      freshExample:
        "You’re stressed about a $900 textbook bill. Then you notice that required online access codes have spread across your whole college. You’ve moved from a private money problem to a question about how publishers and schools set up course materials.",
      notToConfuse:
        "Not the same as reflexivity. Reflexivity is seeing yourself through the categories others use for you, and it is one ingredient of the sociological imagination. The imagination as a whole is about explaining things through social forces. It is also not “imagination” in the sense of daydreaming or making things up.",
    },
    {
      id: "u1-social-category",
      term: "Social category",
      tier: 1,
      thinker: "W.E.B. Du Bois",
      plainIdea:
        "A label that a whole society uses to sort people into groups or split them apart. You can spot one when many different people keep giving you the same reason for how they treat you.",
      courseDefinition:
        "A social category is a shared basis for grouping people together or dividing them apart. Social categories include gender, race, ethnicity, national origin, ability, appearance, and class.",
      freshExample:
        "At a job fair, several recruiters guess that you won’t be interested in management because of your accent. National origin is working as a social category: it’s a shared basis that many people use to sort you.",
      notToConfuse:
        "Social force: a category is a sorting label (what you’re seen as). A social force is an action by a person or group that shapes your situation (something that happens to you). It is also not a one-off, idiosyncratic reason that only one person uses.",
    },
    {
      id: "u1-double-consciousness",
      term: "Double-consciousness",
      tier: 2,
      thinker: "W.E.B. Du Bois",
      plainIdea:
        "Always seeing yourself in two ways at once: as you know yourself, and as others see you through a category, often with contempt. It’s like constantly feeling someone judging you over your shoulder, while that same view lets you notice things others miss (“second-sight”).",
      courseDefinition:
        "In The Souls of Black Folk, Du Bois describes double-consciousness as “this sense of always looking at one’s self through the eyes of others, of measuring one’s soul by the tape of a world that looks on in amused contempt and pity.” It comes with a “gift” of “second-sight”: a distinctive view of the world.",
      freshExample:
        "The only woman on a robotics team keeps checking how every comment she makes will be read by teammates who assume she’s there for the paperwork. She also spots dynamics on the team that nobody else notices.",
      notToConfuse:
        "Reflexivity: double-consciousness is Du Bois’s own term for a particular experience, the state of Black Americans seen through a veil of contempt. Reflexivity is today’s general name for the ability to see yourself through others’ categories, which the sociological imagination tries to build in everyone.",
    },
    {
      id: "u1-reflexivity",
      term: "Reflexivity",
      tier: 1,
      thinker: "Du Bois (as the notes present it)",
      plainIdea:
        "Being able to hold two pictures of yourself at once: how you see yourself, and how others might file you under a category. Picture a mirror and a security camera watching you at the same time.",
      courseDefinition:
        "Reflexivity is people’s ability to see themselves simultaneously in terms of their own self-perception, but also in terms of the social categories through which others might perceive them.",
      freshExample:
        "Before a group-project meeting, a transfer student thinks: “To me I’m just quiet. To them I’m probably ‘the transfer who doesn’t know anyone,’ so they may not hand me the big tasks.” She speaks up early because of it.",
      notToConfuse:
        "Not reflexes, and not just “reflecting” on your day. It specifically means seeing yourself through the social categories others use. Compare double-consciousness (Du Bois’s term for one particular, painful version of this).",
    },
    {
      id: "u1-social-force",
      term: "Social force",
      tier: 1,
      thinker: "C. Wright Mills",
      plainIdea:
        "Something people did, on purpose or not, that changed the world around you and feels like it came from outside you. Social forces don’t pick your choices for you; they write the menu you pick from.",
      courseDefinition:
        "A social force is any action taken by a person or group, intentional or unintentional, that brings about a state of affairs in the world, and which an individual perceives as external to themselves.",
      freshExample:
        "Your campus dining service switches to an app-only ordering system. You didn’t choose it and it feels external to you, but it now shapes when, where, and what you eat.",
      notToConfuse:
        "Social category: a force is an action that brings something about. A category is a shared label for grouping people. Also not a physical force or the police. And it doesn’t have to be intentional.",
    },
    {
      id: "u1-troubles",
      term: "Troubles",
      tier: 1,
      thinker: "C. Wright Mills",
      plainIdea:
        "How social forces feel from the inside: sadness, anxiety, joy. You’re looking only at yourself, so it seems like a pain nobody else has ever felt.",
      courseDefinition:
        "Troubles are the effects of social forces, limited to the perception of psychological effects like happiness, joy, sadness, and anxiety.",
      freshExample:
        "After your part-time hours get cut, you lie awake worrying and feel like a failure. Experienced this way, it’s a trouble.",
      notToConfuse:
        "Issues: both are effects of social forces. Troubles stop at your own psychological experience. Issues look at the same effects across social categories and groups of people.",
    },
    {
      id: "u1-issues",
      term: "Issues",
      tier: 1,
      thinker: "C. Wright Mills",
      plainIdea:
        "The same pain seen from above. You notice it’s happening to lots of people who are like you, and you ask which social forces are producing it.",
      courseDefinition:
        "Issues are the effects of social forces, when considered at the level of social categories and groups of people.",
      freshExample:
        "You find out that part-time workers across the whole mall chain had their hours cut the same month, mostly students under 22. Now your cut hours are part of an issue.",
      notToConfuse:
        "Not “issues” as in “she has issues” (a personal problem), and not just any controversial topic in the news. It means effects of social forces viewed at the level of groups and categories. Compare troubles (the same effects, felt only psychologically).",
    },
    {
      id: "u1-cherished-values",
      term: "Cherished values",
      tier: 1,
      thinker: "C. Wright Mills",
      plainIdea:
        "The deep “this is how things should turn out” beliefs you pick up just by living in a society. Sometimes you can name them. Sometimes you only feel a tug that something matters.",
      courseDefinition:
        "Cherished values are deeply-held, meaningful desires, goals, or states of affairs about which people may or may not be aware, and which, depending on circumstance, they may or may not perceive to be under threat.",
      freshExample:
        "Not getting a summer internship stings partly because of a widely shared value: “hard work in college should lead to a good first job.” The rejection seems to break that promise.",
      notToConfuse:
        "Not just things you consciously love or treasure. You may be unable to put a cherished value into words. Whether you can is one of the two axes of Mills’s typology. Unit 4’s “values” build on this idea.",
    },
    {
      id: "u1-well-being",
      term: "Well-being (Mills’s typology)",
      tier: 1,
      thinker: "C. Wright Mills",
      plainIdea:
        "You know what matters to you, and nothing in the changing world is threatening it. Solid ground under your feet.",
      courseDefinition:
        "In Mills’s typology of cherished values in changing times: you can articulate your cherished values and they are not threatened.",
      freshExample:
        "A nursing student can clearly say she values caring for people and having a stable career. The local hospital is hiring steadily, so nothing feels endangered.",
      notToConfuse:
        "Crisis has the same “can articulate” but the values are threatened. Indifference has the same “not threatened” but you can’t articulate them. Also not a general health or wellness score.",
    },
    {
      id: "u1-crisis",
      term: "Crisis (Mills’s typology)",
      tier: 1,
      thinker: "C. Wright Mills",
      plainIdea:
        "You can name exactly what matters to you, and you can see social change coming for it. It’s like watching a clearly labeled thing you love get taken away.",
      courseDefinition:
        "In Mills’s typology: you can articulate your cherished values and they are threatened.",
      freshExample:
        "A local bookstore owner says: “What I care about is a place where people browse and talk about books, and online retail is wiping that out.”",
      notToConfuse:
        "Uneasiness is also “threatened,” but you can’t say what’s at stake. Not “crisis” in the everyday sense of any emergency or panic: it’s a cell of Mills’s 2×2, defined by articulate + threatened.",
    },
    {
      id: "u1-indifference",
      term: "Indifference (Mills’s typology)",
      tier: 1,
      thinker: "C. Wright Mills",
      plainIdea:
        "You can’t really say what matters to you, and nothing seems to be threatening it anyway. Life just rolls along without you thinking about it.",
      courseDefinition:
        "In Mills’s typology: you cannot articulate your cherished values and they are not threatened.",
      freshExample:
        "Asked what he wants out of college, a sophomore shrugs: “Never really thought about it. Things are fine.” Nothing in his world is pushing on whatever he values.",
      notToConfuse:
        "Not cold, uncaring, or apathetic toward other people. It is the “can’t articulate + not threatened” cell. Compare uneasiness (can’t articulate, but threatened).",
    },
    {
      id: "u1-uneasiness",
      term: "Uneasiness (Mills’s typology)",
      tier: 1,
      thinker: "C. Wright Mills",
      plainIdea:
        "Something you value is being threatened by social change, but you can’t put your finger on what it is. A vague “something’s off and I don’t know why.”",
      courseDefinition:
        "In Mills’s typology: you cannot articulate your cherished values and they are threatened.",
      freshExample:
        "As more of her friendships move into group chats, a student feels a nagging sense that something is being lost, but can’t say what.",
      notToConfuse:
        "Crisis is also “threatened,” but there you can name the value. Not ordinary nerves, jitters, or awkwardness: it is a cell of Mills’s typology about cherished values under social change.",
    },
  ],

  contrastSets: [
    {
      id: "u1-cs-mills-typology",
      title: "Mills’s typology: well-being vs. crisis vs. indifference vs. uneasiness",
      conceptIds: ["u1-well-being", "u1-crisis", "u1-indifference", "u1-uneasiness", "u1-cherished-values"],
      axis:
        "Two separate yes/no questions about your cherished values. (1) Can you articulate them (put them into words)? (2) Are they under threat from social change? Articulate + not threatened = well-being. Articulate + threatened = crisis. Can’t articulate + not threatened = indifference. Can’t articulate + threatened = uneasiness.",
      test:
        "First ask “Could this person say what they value?” (top row: well-being/crisis; bottom row: indifference/uneasiness). Then ask “Is social change threatening it?” (left column: well-being/indifference; right column: crisis/uneasiness).",
    },
    {
      id: "u1-cs-troubles-issues",
      title: "Troubles vs. issues",
      conceptIds: ["u1-troubles", "u1-issues"],
      axis:
        "Both are effects of social forces. The difference is the level you look at: your own psychological experience (troubles) versus social categories and groups of people (issues).",
      test: "Is the focus on how it feels to me (trouble), or on how it hits many people like me (issue)?",
    },
    {
      id: "u1-cs-category-force",
      title: "Social category vs. social force",
      conceptIds: ["u1-social-category", "u1-social-force"],
      axis:
        "A category is a shared label for sorting people (gender, race, class, and so on). A force is an action by a person or group, intentional or not, that brings about a state of affairs you experience as external.",
      test: "Is it something people get sorted by (category), or something someone did that changed your situation (force)?",
    },
    {
      id: "u1-cs-dc-reflexivity",
      title: "Double-consciousness vs. reflexivity",
      conceptIds: ["u1-double-consciousness", "u1-reflexivity"],
      axis:
        "Double-consciousness is Du Bois’s term for one particular experience: always seeing yourself through a contemptuous world’s eyes, tied to a social position (Black Americans behind the “veil”). Reflexivity is today’s general name for the ability to see yourself both through your own eyes and through the categories others use. Sociology tries to build that ability in everyone.",
      test: "Is it Du Bois’s specific, imposed, often painful experience (double-consciousness), or the general, teachable ability anyone can develop (reflexivity)?",
    },
    {
      id: "u1-cs-dubois-mills",
      title: "Du Bois’s phrasing vs. Mills’s phrasing of the sociological imagination",
      conceptIds: ["u1-double-consciousness", "u1-reflexivity", "u1-social-category", "u1-troubles", "u1-issues", "u1-cherished-values"],
      axis:
        "Du Bois (1868–1963, The Souls of Black Folk, wrote on slavery and race) starts from social categories and how they shape the way you see yourself. His ideas are double-consciousness, second-sight, and reflexivity. Mills (1916–1962, The Sociological Imagination, 1959) starts from social forces and how they set your choices. His ideas are troubles vs. issues, cherished values, the four-state typology, and “biography and history.”",
      test: "Is the idea about being seen through a category (Du Bois), or about social forces, troubles/issues, and cherished values (Mills)?",
    },
  ],

  falseFriends: [
    {
      id: "u1-ff-issues",
      conceptId: "u1-issues",
      term: "Issues",
      everyday: "A personal problem (“he has issues”) or a hot political topic.",
      course: "The effects of social forces, viewed at the level of social categories and groups of people.",
      trap: "If you read “issue” as “personal problem,” you’ll mix it up with troubles, which is exactly the opposite end of Mills’s contrast.",
    },
    {
      id: "u1-ff-indifference",
      conceptId: "u1-indifference",
      term: "Indifference",
      everyday: "Not caring; being cold or apathetic.",
      course: "The cell of Mills’s typology where you can’t articulate your cherished values and they aren’t threatened.",
      trap: "A calm, content person who just can’t name their values is in indifference. That doesn’t mean they are uncaring, and picking “indifference” because someone seems unkind is wrong.",
    },
    {
      id: "u1-ff-crisis",
      conceptId: "u1-crisis",
      term: "Crisis",
      everyday: "Any emergency, panic, or disaster.",
      course: "The cell of Mills’s typology where you can articulate your cherished values and they are threatened.",
      trap: "A calm person who clearly explains what social change is taking from them is in crisis. Someone panicking but unable to say what’s at stake is closer to uneasiness.",
    },
    {
      id: "u1-ff-uneasiness",
      conceptId: "u1-uneasiness",
      term: "Uneasiness",
      everyday: "Feeling nervous, jittery, or awkward.",
      course: "The cell of Mills’s typology where cherished values are threatened but you can’t articulate them.",
      trap: "Pre-exam jitters or caffeine shakes aren’t Mills’s uneasiness. It needs cherished values under threat from social change.",
    },
    {
      id: "u1-ff-reflexivity",
      conceptId: "u1-reflexivity",
      term: "Reflexivity",
      everyday: "Reflexes (fast automatic reactions), or just “reflecting” on your day.",
      course: "The ability to see yourself at once through your own self-perception and through the social categories others might see you through.",
      trap: "Answers about quick reactions or general self-reflection miss the key part: the social categories others use to see you.",
    },
    {
      id: "u1-ff-imagination",
      conceptId: "u1-sociological-imagination",
      term: "Imagination",
      everyday: "Making things up, daydreaming, fantasy.",
      course: "The capacity to analyze phenomena in terms of the social forces that shape and constitute them.",
      trap: "The sociological imagination isn’t inventing stories about society. It is a disciplined move from personal explanations to social ones.",
    },
    {
      id: "u1-ff-social",
      conceptId: "u1-social",
      term: "Social",
      everyday: "Sociable, outgoing, partying, or “social media.”",
      course: "Any actions, interactions, beliefs, or material structures that draw from shared meanings or require coordinating people.",
      trap: "An introvert paying rent alone is still doing something social in the course sense. Don’t rule something out just because nobody is hanging out.",
    },
    {
      id: "u1-ff-social-force",
      conceptId: "u1-social-force",
      term: "Social force",
      everyday: "Physical force, peer pressure, or the police “using force.”",
      course: "Any action by a person or group, intentional or unintentional, that brings about a state of affairs an individual perceives as external to themselves.",
      trap: "It doesn’t have to be coercive, physical, or even intended. A company’s decision you never notice can be a social force.",
    },
  ],

  magnitudes: [
    {
      id: "u1-m-commute",
      prompt: "In Suffolk County, roughly how do people get to work?",
      answer:
        "About three-quarters drive alone. About 1 in 10 work from home, fewer than 1 in 10 carpool, and only about 1 in 20 take public transit.",
      whyItMatters:
        "It turns “I’m stuck in traffic” into an issue. The jam isn’t a few bad drivers; almost everyone has to drive alone because there are so few other options.",
    },
    {
      id: "u1-m-suffolk-boom",
      prompt: "How did Suffolk County’s population change after World War II?",
      answer: "It exploded, growing about fivefold, from roughly a quarter million (1950) to over a million (1975).",
      whyItMatters:
        "This fast growth came with the nationwide suburban boom and its car-centered ideal (house, yard, car). Planning was built around cars, not transit. That history is a social force still shaping today’s commutes.",
    },
    {
      id: "u1-m-transit-score",
      prompt: "How does Suffolk County’s public-transit score compare with New York City’s?",
      answer: "Far lower: well under half of NYC’s (under 4 vs. nearly 10, on a 10-point scale).",
      whyItMatters: "Few, infrequent, expensive transit options are one of the social causes behind a traffic jam that feels personal.",
    },
    {
      id: "u1-m-ny-traffic",
      prompt: "How bad is traffic in the New York metro area?",
      answer: "Among the worst anywhere: the worst in the US in 2023, and around 20th worst in the world.",
      whyItMatters:
        "When a whole region stands out that much, the cause can’t just be individual drivers. It points to how the region was built and organized.",
    },
    {
      id: "u1-m-sea-level",
      prompt: "About how much has sea level risen around Long Island over roughly the last 150 years?",
      answer: "More than a foot.",
      whyItMatters:
        "Rising seas make storms more damaging. A flooded basement is a trouble, but it sits inside a long-term, human-driven change, which makes it an issue.",
    },
    {
      id: "u1-m-heavy-rain",
      prompt: "How has the frequency of heavy-rain days along Long Island Sound changed since careful measurement began in 1940?",
      answer: "Up by about a quarter (roughly 25%).",
      whyItMatters:
        "It shows that calling a storm a “1,000-year event” is misleading. Big storms aren’t spread out at random; climate change, driven by human CO₂ output, is making them more common.",
    },
    {
      id: "u1-m-opioid-rx",
      prompt: "How did US opioid prescribing in 2015 compare with 1999 and with Europe?",
      answer: "About three times the 1999 level, and nearly four times the European level in 2015.",
      whyItMatters:
        "Differences that big across time and place can’t come from individual weakness. They point to social forces: drug makers marketing opioids to doctors, and hospitals using outpatient prescriptions to cut costs.",
    },
    {
      id: "u1-m-overdose-trend",
      prompt: "Which way have opioid overdose deaths gone since about 2020?",
      answer: "Down significantly.",
      whyItMatters:
        "The drop is linked to social changes: easy access to naloxone and possibly regulatory changes that cut the supply of illicit fentanyl. Social forces can make things worse, and they can also make things better.",
    },
  ],

  questions: [
    // ---------------- CONCEPTUAL ----------------
    {
      id: "u1-q01",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u1-sociological-imagination", "u1-reflexivity", "u1-social-category", "u1-cherished-values"],
      stem: "Which concept do the notes define as “the capacity to analyze phenomena in terms of the social forces that shape and constitute them”?",
      options: [
        {
          text: "Reflexivity",
          why: "Reflexivity is seeing yourself through your own eyes and through the social categories others use. It’s one ingredient of the sociological imagination, not the general capacity to explain things through social forces.",
        },
        {
          text: "The sociological imagination",
          correct: true,
          why: "Right. The key words are “in terms of the social forces”: moving from personal explanations to social ones.",
        },
        {
          text: "Social category",
          why: "A social category is a shared basis for grouping people together or dividing them apart. It’s a label, not a way of analyzing things.",
        },
        {
          text: "Cherished values",
          why: "Cherished values are deeply held goals or states of affairs people may or may not be aware of. They’re something the imagination can analyze, not the capacity itself.",
        },
      ],
    },
    {
      id: "u1-q02",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u1-social-force", "u1-social-category", "u1-issues", "u1-cherished-values"],
      stem: "A sociologist describes “any action taken by a person or group, intentional or unintentional, that brings about a state of affairs in the world, and which an individual perceives as external to themselves.” Which term is she defining?",
      options: [
        {
          text: "Issue",
          why: "Issues are the effects of social forces seen at the level of groups. This definition describes the force itself, the action that brings things about.",
        },
        {
          text: "Social category",
          why: "A social category is a shared basis for grouping or dividing people (gender, class, etc.). It’s a sorting label, not an action.",
        },
        {
          text: "Social force",
          correct: true,
          why: "Right. The telltale parts are “action by a person or group” (intentional or not) and “perceived as external.”",
        },
        {
          text: "Cherished value",
          why: "A cherished value is a deeply held desire or goal inside people. This definition is about an outside action that changes the world.",
        },
      ],
    },
    {
      id: "u1-q03",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u1-uneasiness", "u1-crisis", "u1-indifference", "u1-well-being"],
      stem: "In Mills’s typology, which state describes feeling that your cherished values are under threat from social change, while being unable to say what those values actually are?",
      options: [
        {
          text: "Crisis",
          why: "Crisis is also “threatened,” but in crisis you can articulate your values. The inability to name them points elsewhere.",
        },
        {
          text: "Indifference",
          why: "Indifference is the “can’t articulate” row, but with values not threatened.",
        },
        {
          text: "Well-being",
          why: "Well-being is the opposite corner: you can articulate your values and they aren’t threatened.",
        },
        {
          text: "Uneasiness",
          correct: true,
          why: "Right. Can’t articulate + threatened = uneasiness: a vague sense that something that matters is slipping away.",
        },
      ],
    },
    {
      id: "u1-q04",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u1-crisis", "u1-uneasiness", "u1-indifference", "u1-well-being"],
      stem: "Which of Mills’s conditions best describes calmly and clearly explaining which of your values matter most, while recognizing that social change is threatening them?",
      options: [
        {
          text: "Uneasiness",
          why: "Uneasiness is threatened values you can’t articulate. Here the person can explain them clearly.",
        },
        {
          text: "Crisis",
          correct: true,
          why: "Right. Articulate + threatened = crisis. Don’t let the word “calmly” fool you: in Mills’s sense crisis isn’t about panic, it’s this cell of the table.",
        },
        {
          text: "Well-being",
          why: "Well-being has articulated values too, but they are not threatened.",
        },
        {
          text: "Indifference",
          why: "Indifference is can’t articulate + not threatened. It is the opposite corner from this description.",
        },
      ],
    },
    {
      id: "u1-q05",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u1-well-being", "u1-crisis", "u1-indifference", "u1-uneasiness", "u1-cherished-values"],
      stem: "Mills’s four states (well-being, crisis, indifference, uneasiness) come from crossing two questions about cherished values. Which two?",
      options: [
        {
          text: "Can the person articulate their values? Are the values threatened by social change?",
          correct: true,
          why: "Right. Articulation sets the row (well-being/crisis vs. indifference/uneasiness), and threat sets the column (well-being/indifference vs. crisis/uneasiness).",
        },
        {
          text: "Are the values morally good? Does the whole society share them?",
          why: "Mills’s typology doesn’t grade values as good or bad, and it doesn’t ask whether they’re universal. It asks about awareness and threat.",
        },
        {
          text: "Is the person experiencing a trouble? Is the person experiencing an issue?",
          why: "Troubles and issues are Mills’s other distinction: two levels at which you can see the effects of social forces. They aren’t the axes of this table.",
        },
        {
          text: "Does the person have double-consciousness? Do they have reflexivity?",
          why: "Those are Du Bois-inspired ideas about seeing yourself through others’ categories, not the dimensions of Mills’s typology.",
        },
      ],
    },
    {
      id: "u1-q06",
      skill: "conceptual",
      format: "mc",
      trap: "reversal",
      tier: 1,
      conceptIds: ["u1-troubles", "u1-issues", "u1-social-force"],
      stem: "According to the notes, what is the key difference between troubles and issues?",
      options: [
        {
          text: "Troubles are caused by individuals’ own choices and personalities; issues are the ones caused by larger social forces.",
          why: "This is the common mistake. Both are effects of social forces. What differs is the level at which you perceive those effects.",
        },
        {
          text: "Troubles are small problems; issues are big problems.",
          why: "Size isn’t the difference. A devastating loss can be experienced as a trouble, and a minor inconvenience can be studied as an issue.",
        },
        {
          text: "Troubles are felt as psychological effects on you; issues are the same effects seen across social categories and groups.",
          correct: true,
          why: "Right. Both come from social forces. Troubles stop at feelings like sadness or anxiety, while issues look at the effects across groups of people.",
        },
        {
          text: "Troubles concern cherished values; issues concern social categories only.",
          why: "Cherished values help explain why troubles hurt, but that isn’t how the two are defined. Both are effects of social forces, seen at different levels.",
        },
      ],
    },
    {
      id: "u1-q07",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u1-issues", "u1-troubles"],
      stem: "A classmate says, “My roommate has a lot of issues, so I guess that’s Mills’s concept.” What does Mills actually mean by an issue?",
      options: [
        {
          text: "A personal emotional problem someone is struggling with",
          why: "That’s the everyday meaning. In Mills’s terms, a problem experienced only as your own emotions is closer to a trouble.",
        },
        {
          text: "The effects of social forces, considered at the level of social categories and groups of people",
          correct: true,
          why: "Right. An issue is seen across groups. It asks what’s happening to many people like you, and why.",
        },
        {
          text: "Any controversial political topic that gets heavily debated in the news and across social media",
          why: "Mills’s term isn’t about controversy or news coverage. It’s about the level (groups and categories) at which you view the effects of social forces.",
        },
        {
          text: "A cherished value that you cannot put into words",
          why: "That’s part of Mills’s typology (it would be indifference or uneasiness, depending on threat), not the definition of an issue.",
        },
      ],
    },
    {
      id: "u1-q08",
      skill: "conceptual",
      format: "mc",
      trap: "sibling",
      tier: 1,
      fixedOrder: true,
      conceptIds: ["u1-reflexivity", "u1-double-consciousness", "u1-sociological-imagination", "u1-social-force"],
      stem: "Which term do the notes use for people’s general ability to see themselves at the same time through their own self-perception and through the social categories others might use to perceive them, an ability the sociological imagination tries to build in everyone?",
      options: [
        {
          text: "Double-consciousness",
          why: "Close, but double-consciousness is Du Bois’s term for a specific experience tied to a social position: looking at yourself through a world that sees you with contempt. The general, teachable ability has a different name.",
        },
        {
          text: "Social force",
          why: "A social force is an action by a person or group that brings about a state of affairs. It isn’t a way of seeing yourself.",
        },
        {
          text: "Reflexivity",
          correct: true,
          why: "Right. Reflexivity is the general name for seeing yourself two ways at once, and the notes say it is one of the most common labels today.",
        },
        {
          text: "The sociological imagination",
          why: "Reflexivity is a foundational part of the sociological imagination, but the imagination as a whole is analyzing phenomena through social forces.",
        },
        {
          text: "Knee-jerk reflexes, like when the doctor taps your knee with a little hammer",
          why: "A joke option playing on the everyday sound-alike. Reflexivity has nothing to do with physical reflexes.",
        },
      ],
    },
    {
      id: "u1-q09",
      skill: "conceptual",
      format: "mc",
      tier: 2,
      conceptIds: ["u1-double-consciousness", "u1-reflexivity"],
      stem: "In The Souls of Black Folk, Du Bois calls double-consciousness a “gift” of “second-sight.” What do the notes say he means by that?",
      options: [
        {
          text: "Seeing yourself through others’ eyes can also give a distinctive view of the world that other people can’t see",
          correct: true,
          why: "Right. Besides the painful side (others’ expectations becoming part of how you see yourself), double-consciousness can give you a distinctive view of the world.",
        },
        {
          text: "Black Americans literally had supernatural abilities to predict the future",
          why: "“Second-sight” is a metaphor. The notes read it as a distinctive perspective on social life, not a supernatural power.",
        },
        {
          text: "Being seen through social categories has no effect on how people see themselves",
          why: "The opposite. Du Bois stresses that others’ expectations come to be part of how you see yourself.",
        },
        {
          text: "People should simply ignore how others perceive them and focus only on developing their own individual personality and talents",
          why: "Du Bois describes being unable to escape others’ perceptions. Nothing in the passage recommends ignoring them.",
        },
      ],
    },
    {
      id: "u1-q10",
      skill: "conceptual",
      format: "mc",
      trap: "not-all",
      tier: 1,
      fixedOrder: true,
      conceptIds: ["u1-social-category"],
      stem: "Which of the following is NOT listed in the notes as an example of a social category?",
      options: [
        { text: "Gender", why: "Gender is on the notes’ list of social categories." },
        { text: "Ability", why: "Ability is on the notes’ list of social categories." },
        { text: "Appearance", why: "Appearance is on the notes’ list. It’s a shared basis people use to group or divide one another." },
        { text: "Class", why: "Class is on the notes’ list of social categories." },
        {
          text: "These are all listed as social categories",
          correct: true,
          why: "Right. The notes list gender, race, ethnicity, national origin, ability, appearance, and class. Each is a shared basis for grouping people together or dividing them apart.",
        },
      ],
    },
    {
      id: "u1-q11",
      skill: "conceptual",
      format: "mc",
      trap: "reversal",
      tier: 1,
      conceptIds: ["u1-social-force", "u1-sociological-imagination"],
      stem: "What do the notes, following Mills, say about individual choices?",
      options: [
        {
          text: "Individual choices are an illusion; social forces completely decide everything that each of us does.",
          why: "Too strong. The notes say our specific choices are under our control and we are held responsible for them.",
        },
        {
          text: "Our choices are our own, but social forces set which choices we have.",
          correct: true,
          why: "Right. This is Mills’s duality: you pick from the menu, but social forces write the menu, and it differs across time and social and physical space.",
        },
        {
          text: "Only wealthy people really make choices; everyone else just follows social categories.",
          why: "The notes don’t say that. Everyone chooses, but social forces give different people different options.",
        },
        {
          text: "Choices depend only on personality, so sociology should leave them to psychology.",
          why: "This drops the social side altogether. The notes stress that social forces shape which options you even have.",
        },
      ],
    },
    {
      id: "u1-q12",
      skill: "conceptual",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u1-cherished-values", "u1-uneasiness", "u1-indifference"],
      stem: "According to the notes, must you be consciously aware of a value, and able to put it into words, for it to count as one of your cherished values?",
      options: [
        {
          text: "Yes. If you can’t say it, it isn’t a cherished value.",
          why: "The definition explicitly allows values people “may or may not be aware” of. Two of Mills’s four states depend on not being able to put them into words.",
        },
        {
          text: "No. You may only vaguely sense that something matters.",
          correct: true,
          why: "Right. Whether you can articulate them is one of the two axes of Mills’s typology. That’s why indifference and uneasiness exist.",
        },
        {
          text: "Yes, but only if the value is threatened by social change.",
          why: "Threat is the other axis of the typology, and it has nothing to do with whether you can articulate the value.",
        },
        {
          text: "No, because cherished values are the same thing as social categories.",
          why: "Social categories are bases for grouping people (race, class, etc.). Cherished values are deeply held desires or goals. They’re different concepts.",
        },
      ],
    },
    {
      id: "u1-q13",
      skill: "conceptual",
      format: "mc",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u1-double-consciousness", "u1-troubles", "u1-issues", "u1-reflexivity"],
      stem: "A student is sorting ideas from Unit 1 by thinker. Which idea belongs with W.E.B. Du Bois rather than C. Wright Mills?",
      options: [
        {
          text: "Troubles versus issues",
          why: "That distinction comes from Mills’s The Sociological Imagination (1959).",
        },
        {
          text: "Double-consciousness and the “veil”",
          correct: true,
          why: "Right. Du Bois describes double-consciousness and the veil in The Souls of Black Folk, starting from his own childhood memory.",
        },
        {
          text: "The typology of well-being, crisis, indifference, and uneasiness",
          why: "That typology of cherished values in changing times is Mills’s.",
        },
        {
          text: "“The interplay of man and society, of biography and history”",
          why: "That famous line is from Mills’s first chapter, “The Promise.”",
        },
      ],
    },
    // ---------- CONCEPTUAL T/F (misattribution / reversal) ----------
    {
      id: "u1-q14",
      skill: "conceptual",
      format: "tf",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u1-well-being", "u1-crisis", "u1-indifference", "u1-uneasiness"],
      stem: "True/False: W.E.B. Du Bois developed the typology of well-being, crisis, indifference, and uneasiness to describe people’s cherished values in changing times.",
      options: [
        {
          text: "True",
          why: "It’s tempting because Du Bois is the other thinker in this unit, but the cherished-values typology comes from C. Wright Mills.",
        },
        {
          text: "False",
          correct: true,
          why: "Correct. The typology is Mills’s, from The Sociological Imagination. Du Bois’s contribution is double-consciousness, social categories, and (as later named) reflexivity.",
        },
      ],
    },
    {
      id: "u1-q15",
      skill: "conceptual",
      format: "tf",
      trap: "misattribution",
      tier: 2,
      conceptIds: ["u1-double-consciousness"],
      stem: "True/False: The idea of double-consciousness, “always looking at one’s self through the eyes of others,” comes from W.E.B. Du Bois’s The Souls of Black Folk.",
      options: [
        {
          text: "True",
          correct: true,
          why: "Correct. Du Bois describes double-consciousness in The Souls of Black Folk. The notes present it as one phrasing of the sociological imagination.",
        },
        {
          text: "False",
          why: "This one is accurately attributed: double-consciousness is Du Bois’s idea, not Mills’s.",
        },
      ],
    },
    {
      id: "u1-q16",
      skill: "conceptual",
      format: "tf",
      trap: "misattribution",
      tier: 1,
      conceptIds: ["u1-sociological-imagination", "u1-social-force"],
      stem: "True/False: C. Wright Mills’s famous phrase about “the interplay of man and society, of biography and history, of self and world” appears in his 1959 book The Sociological Imagination.",
      options: [
        {
          text: "True",
          correct: true,
          why: "Correct. The line is from “The Promise,” the first chapter of The Sociological Imagination. Its point is that social forces act on the fate of our lives.",
        },
        {
          text: "False",
          why: "This is correctly attributed. It’s Mills, not Du Bois, and it’s from The Sociological Imagination.",
        },
      ],
    },
    {
      id: "u1-q17",
      skill: "conceptual",
      format: "tf",
      trap: "misattribution",
      tier: 2,
      conceptIds: ["u1-sociological-imagination", "u1-double-consciousness"],
      stem: "True/False: According to the notes, C. Wright Mills was the first Black man to earn a Ph.D. from Harvard and spent his career writing about the legacies of slavery and race in the United States.",
      options: [
        {
          text: "True",
          why: "Tempting because both men wrote about the sociological imagination, but this biography belongs to Du Bois.",
        },
        {
          text: "False",
          correct: true,
          why: "Correct. That describes W.E.B. Du Bois (1868–1963). Mills (1916–1962) is best known for The Sociological Imagination and its troubles/issues distinction.",
        },
      ],
    },
    {
      id: "u1-q18",
      skill: "conceptual",
      format: "tf",
      trap: "reversal",
      tier: 1,
      conceptIds: ["u1-social-force"],
      stem: "True/False: For something to count as a social force, the person or group behind it must have intended the outcome it produces.",
      options: [
        {
          text: "True",
          why: "The definition explicitly says “intentional or unintentional.” Side effects nobody planned count too.",
        },
        {
          text: "False",
          correct: true,
          why: "Correct. A social force is any action, intentional or unintentional, that brings about a state of affairs an individual perceives as external. Intent isn’t required.",
        },
      ],
    },

    // ---------------- APPLICATION ----------------
    {
      id: "u1-q19",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      fixedOrder: true,
      conceptIds: ["u1-sociological-imagination", "u1-reflexivity", "u1-indifference", "u1-social-category"],
      stem: "Priya is furious that she has to work 25 hours a week at a campus café just to pay rent. Then she starts asking why rents near campus doubled in a decade, why her financial aid hasn’t kept pace, and why so many of her classmates work similar hours. What is Priya exercising?",
      options: [
        {
          text: "Reflexivity",
          why: "Reflexivity is seeing yourself through the categories others use to see you. Priya isn’t thinking about how others see her; she’s tracing social causes.",
        },
        {
          text: "The sociological imagination",
          correct: true,
          why: "Right. She moves from a purely personal frustration to the social forces (housing costs, aid policy) shaping her situation and many others’.",
        },
        {
          text: "Indifference",
          why: "Indifference is Mills’s state of not being able to articulate values that aren’t threatened. It has nothing to do with explaining causes, and Priya clearly cares.",
        },
        {
          text: "A social category",
          why: "A social category is a basis for grouping people (class, gender, etc.). It’s a label, not the analytical move Priya is making.",
        },
        {
          text: "Her legal right to one free latte per shift",
          why: "A joke option. This names no course concept, and Priya is analyzing social causes, not claiming perks.",
        },
      ],
    },
    {
      id: "u1-q20",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u1-troubles", "u1-issues", "u1-crisis", "u1-social-category"],
      stem: "Marcus’s grocery chain replaces most cashiers with self-checkout kiosks, and he loses his job. He can’t sleep, feels ashamed, and keeps asking what he did wrong. As long as he sees it only this way, what would Mills call his experience?",
      options: [
        {
          text: "An issue",
          why: "An issue would mean looking at the effects across a group (for example, all the cashiers displaced by kiosks). Marcus is stuck inside his own feelings.",
        },
        {
          text: "A social category",
          why: "A social category is a shared basis for grouping people. Marcus’s shame and sleeplessness aren’t a grouping label.",
        },
        {
          text: "A trouble",
          correct: true,
          why: "Right. Troubles are effects of social forces (here, the chain’s automation decision) perceived only as psychological effects like anxiety and shame.",
        },
        {
          text: "Crisis",
          why: "Crisis requires clearly articulating a cherished value that’s under threat. Marcus is only blaming himself and hasn’t named a value.",
        },
      ],
    },
    {
      id: "u1-q21",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u1-issues", "u1-troubles", "u1-reflexivity", "u1-well-being"],
      stem: "A researcher interviews hundreds of former cashiers replaced by self-checkout kiosks. She finds they are mostly older workers without college degrees in a handful of regions. In Mills’s terms, she is treating job loss as…",
      options: [
        {
          text: "…a trouble",
          why: "A trouble stays at one person’s psychological experience. She’s looking across a whole group defined by age, education, and region.",
        },
        {
          text: "…an issue",
          correct: true,
          why: "Right. She is looking at the effects of a social force (automation) at the level of social categories and groups. That’s exactly what an issue is.",
        },
        {
          text: "…a form of reflexivity",
          why: "Reflexivity is about seeing yourself through others’ categories. The researcher is mapping a pattern across groups, not reflecting on her own self-image.",
        },
        {
          text: "…a state of well-being",
          why: "Well-being is Mills’s state of articulated values that aren’t threatened. It isn’t a way of framing a problem.",
        },
      ],
    },
    {
      id: "u1-q22",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u1-crisis", "u1-uneasiness", "u1-well-being", "u1-indifference"],
      stem: "Ray has run a family hardware store for 40 years. A big-box chain opened nearby and sales are collapsing. He tells a reporter: “What I care about is being my own boss and knowing my customers by name, and that’s disappearing.” Which of Mills’s states fits Ray best?",
      fixedOrder: true,
      options: [
        {
          text: "Well-being",
          why: "Ray can articulate his values, but they are clearly threatened, so this isn’t well-being.",
        },
        {
          text: "Crisis",
          correct: true,
          why: "Right. He names his cherished values (independence, knowing customers) and sees social change (the chain) threatening them. Articulate + threatened = crisis.",
        },
        {
          text: "Indifference",
          why: "Indifference is can’t articulate + not threatened. Ray is the opposite on both counts.",
        },
        {
          text: "Uneasiness",
          why: "Uneasiness is threatened but not articulated. Ray says exactly what he values.",
        },
        {
          text: "Seawolf-mascot syndrome",
          why: "Not a real concept. Mills’s typology has exactly four cells.",
        },
      ],
    },
    {
      id: "u1-q23",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u1-uneasiness", "u1-crisis", "u1-indifference", "u1-well-being"],
      stem: "Devon has played the same online game for years. After it switches to a pay-to-win model, he feels that something important about the game is being ruined, but when friends ask what exactly, he can’t explain it. Which of Mills’s states fits Devon?",
      options: [
        {
          text: "Crisis",
          why: "Crisis needs the value to be articulated. Devon can’t say what he values.",
        },
        {
          text: "Well-being",
          why: "Well-being requires values that are articulated and not threatened. Devon has neither.",
        },
        {
          text: "Indifference",
          why: "Indifference is also “can’t articulate,” but the values aren’t threatened. Devon clearly feels something is under attack.",
        },
        {
          text: "Uneasiness",
          correct: true,
          why: "Right. Values threatened by a change + unable to say what they are = uneasiness.",
        },
      ],
    },
    {
      id: "u1-q24",
      skill: "application",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u1-indifference", "u1-well-being", "u1-uneasiness", "u1-crisis"],
      stem: "Asked what he really wants out of life, Tyler, a friendly and helpful teammate, shrugs: “Honestly, I’ve never thought about it. Things are fine.” Nothing in his life seems to be changing or under pressure. Which of Mills’s states best describes him?",
      options: [
        {
          text: "Indifference",
          correct: true,
          why: "Right. He can’t articulate his values and they aren’t threatened. In Mills’s sense this has nothing to do with being cold or uncaring (Tyler is friendly and helpful).",
        },
        {
          text: "Well-being",
          why: "Well-being also has no threat, but it requires being able to articulate your values. Tyler can’t.",
        },
        {
          text: "Uneasiness",
          why: "Uneasiness is can’t articulate + threatened. Nothing threatens Tyler’s values.",
        },
        {
          text: "Crisis",
          why: "Crisis is articulated values under threat. Tyler has neither.",
        },
      ],
    },
    {
      id: "u1-q25",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u1-well-being", "u1-crisis", "u1-cherished-values"],
      stem: "Lena can clearly say that what matters most to her is her close-knit family and a stable teaching career. Her district is hiring, and her family lives nearby. Which state fits her?",
      options: [
        {
          text: "Crisis",
          why: "She articulates her values, but nothing threatens them, so it isn’t crisis.",
        },
        {
          text: "Uneasiness",
          why: "Uneasiness is vague, unarticulated values under threat. Lena is clear, and nothing is threatening her values.",
        },
        {
          text: "Well-being",
          correct: true,
          why: "Right. Articulate + not threatened = well-being.",
        },
        {
          text: "Double-consciousness",
          why: "Double-consciousness is Du Bois’s idea of seeing yourself through others’ contemptuous eyes. It isn’t part of Mills’s typology at all.",
        },
      ],
    },
    {
      id: "u1-q26",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u1-uneasiness", "u1-cherished-values"],
      stem: "Jas feels shaky and anxious after drinking four energy drinks before an exam. A friend says, “That’s Mills’s uneasiness.” What’s the best response?",
      options: [
        {
          text: "Right: any anxious or nervous feeling, whatever its cause, counts as Mills’s uneasiness.",
          why: "This uses the everyday meaning. Mills’s uneasiness is a specific combination: cherished values threatened by social change that you can’t articulate.",
        },
        {
          text: "Not a good fit: uneasiness is about cherished values threatened by social change, not jitters.",
          correct: true,
          why: "Right. The typology is about cherished values and social change. A chemical buzz before a test has nothing to do with either.",
        },
        {
          text: "Wrong term: it’s actually crisis, because Jas is really anxious.",
          why: "Crisis also isn’t about how intense a feeling is. It means clearly articulated values under threat, and none of that is here.",
        },
        {
          text: "Wrong term: it’s double-consciousness, because Jas feels two ways at once.",
          why: "Double-consciousness is seeing yourself through others’ eyes, via social categories. It isn’t about mixed physical sensations.",
        },
      ],
    },
    {
      id: "u1-q27",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u1-social-force"],
      stem: "Which of the following would be the strangest thing to call a social force?",
      options: [
        {
          text: "A national chain deciding to close all its stores in small towns",
          why: "This is an action by a group that brings about a state of affairs local residents experience as external, so it is a social force.",
        },
        {
          text: "A lightning strike that knocks down a tree in an uninhabited forest",
          correct: true,
          why: "Right. A social force has to be an action taken by a person or group. A lightning strike with nobody involved isn’t one.",
        },
        {
          text: "A university switching all required readings to paid online access codes",
          why: "An action by an organization that shapes students’ options from outside: a clear social force.",
        },
        {
          text: "Many parents independently deciding to sign their kids up for travel sports",
          why: "Even without coordination or intent to change anything, many people’s actions can add up to a state of affairs others feel as external (like costlier, more competitive youth sports). The definition allows unintended effects.",
        },
      ],
    },
    {
      id: "u1-q28",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u1-social-category", "u1-social-force"],
      stem: "Ana is a first-generation college student. This year her college cut the mentoring program for first-generation students. In this situation, which is the social category and which is the social force?",
      fixedOrder: true,
      options: [
        {
          text: "Being first-generation is the social category; the college’s decision to cut the program is the social force.",
          correct: true,
          why: "Right. “First-generation” is a shared basis for grouping people. The college’s cut is an action by a group that changes Ana’s situation from outside.",
        },
        {
          text: "The college’s decision is the social category; being first-generation is the social force.",
          why: "Backwards. A decision is an action (a force). A grouping label like “first-generation” is a category.",
        },
        {
          text: "Both are social categories, since both involve groups of students.",
          why: "Only one is a grouping label. The cut is an action that brings about a new state of affairs, so it is a force.",
        },
        {
          text: "Neither: these are purely personal troubles.",
          why: "A trouble is how the effects of social forces feel psychologically. The question is about the category and the force themselves, and both are clearly present.",
        },
      ],
    },
    {
      id: "u1-q29",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u1-social-category", "u1-cherished-values", "u1-social-force", "u1-troubles"],
      stem: "At a summer internship, several different managers separately assume that Mei, who has a Chinese last name, will want the data-analysis tasks rather than client presentations. What is shaping how they perceive her?",
      options: [
        {
          text: "A cherished value",
          why: "Cherished values are deeply held goals or states of affairs. What’s at work here is a shared way of sorting Mei into a group.",
        },
        {
          text: "A trouble",
          why: "Troubles are psychological effects like sadness or anxiety that Mei might feel. The managers’ assumptions come from a grouping label.",
        },
        {
          text: "A social category",
          correct: true,
          why: "Right. When many different people treat you the same way for the same reason, it’s probably a social category, here ethnicity or national origin. It is a shared basis for grouping people.",
        },
        {
          text: "Well-being",
          why: "Well-being is one of Mills’s four states about cherished values, not something that shapes how others perceive you.",
        },
      ],
    },
    {
      id: "u1-q30",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u1-social-category"],
      stem: "One teammate starts calling Omar “Pickles” because he once dropped a pickle jar at a team dinner. Nobody else uses the nickname or treats him differently. Is this a good example of a social category?",
      options: [
        {
          text: "Yes: any reason someone gives for treating you differently is a social category.",
          why: "The notes contrast idiosyncratic reasons with social categories. A category is a shared basis many people use.",
        },
        {
          text: "Yes, because it’s about his appearance.",
          why: "The nickname comes from a one-time mishap, not how he looks. Even appearance only works as a social category when it’s a shared basis many people use for grouping.",
        },
        {
          text: "Yes, because a nickname is a shared meaning, and anything built on shared meanings is a social category.",
          why: "Shared meanings make something part of the social domain, but a social category is narrower: a shared basis that many people use to group or divide others. One teammate’s joke isn’t that.",
        },
        {
          text: "No: it’s an idiosyncratic reason from one person, not a shared basis for grouping or dividing people.",
          correct: true,
          why: "Right. Social categories show up when the same reasons come from many different people (gender, race, class…). One teammate’s joke is idiosyncratic.",
        },
      ],
    },
    {
      id: "u1-q31",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 2,
      conceptIds: ["u1-double-consciousness", "u1-cherished-values", "u1-troubles", "u1-well-being"],
      stem: "Andre is one of very few Black students in his engineering program. He describes constantly measuring himself by how classmates and professors, who seem to doubt he belongs, might see him, as if always judged through their eyes. Which idea from Du Bois fits best?",
      options: [
        {
          text: "Double-consciousness",
          correct: true,
          why: "Right. “Always looking at one’s self through the eyes of others,” measured by a world that looks on with doubt or contempt, is Du Bois’s double-consciousness.",
        },
        {
          text: "Cherished values",
          why: "Cherished values are deeply held goals or states of affairs, and the idea is Mills’s. Andre’s experience is about seeing himself through others’ eyes.",
        },
        {
          text: "Troubles",
          why: "Andre may well feel troubles, but troubles are Mills’s concept. The question asks for Du Bois’s idea about seeing yourself through others’ eyes.",
        },
        {
          text: "Well-being",
          why: "Well-being is Mills’s state of articulated, unthreatened values, and it doesn’t describe being judged through others’ eyes.",
        },
      ],
    },
    {
      id: "u1-q32",
      skill: "application",
      format: "mc",
      trap: "everyday-meaning",
      tier: 1,
      conceptIds: ["u1-reflexivity", "u1-sociological-imagination", "u1-social-force", "u1-crisis"],
      stem: "Before joining a new club, Jordan thinks: “To me I’m just quiet. But the older members will probably see me as ‘the freshman who doesn’t know anything,’ so I should speak up early.” What is Jordan displaying?",
      options: [
        {
          text: "Crisis",
          why: "Crisis is Mills’s state of clearly articulated cherished values under threat. Jordan is thinking about how others will categorize him.",
        },
        {
          text: "A social force",
          why: "A social force is an action that brings about a state of affairs. Jordan’s thought is a way of seeing himself.",
        },
        {
          text: "Reflexivity",
          correct: true,
          why: "Right. He holds his own self-perception (“just quiet”) alongside a social category others will use (“freshman”). That’s reflexivity, which has nothing to do with physical reflexes.",
        },
        {
          text: "Indifference",
          why: "Indifference is Mills’s state of unarticulated, unthreatened values. Jordan is thinking carefully about how he’ll be seen.",
        },
      ],
    },
    {
      id: "u1-q33",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u1-sociological-imagination"],
      stem: "At one college, a large share of students work 30+ hours a week while in school. Which explanation shows the LEAST sociological imagination?",
      options: [
        {
          text: "Tuition and living costs have risen faster than financial aid.",
          why: "This points to social forces (pricing, aid policy) shaping many students’ options, which is the sociological imagination at work.",
        },
        {
          text: "Many students come from families that can’t cover college costs.",
          why: "This brings in social class, a social category that shapes students’ situations, so it is a social explanation.",
        },
        {
          text: "They just have strong work-ethic personalities.",
          correct: true,
          why: "Right. This stays entirely at the level of individual personality and ignores the social forces setting up the pattern.",
        },
        {
          text: "Local employers have built their schedules around cheap student labor.",
          why: "This is an action by employers (a social force) shaping students’ options, so it shows the sociological imagination.",
        },
      ],
    },
    {
      id: "u1-q34",
      skill: "application",
      format: "mc",
      trap: "wrong-lens",
      tier: 1,
      conceptIds: ["u1-social"],
      stem: "Which of these falls OUTSIDE the social domain as the notes define it?",
      options: [
        {
          text: "A friend group agreeing on a time for weekly game night",
          why: "This requires coordinating people and draws on shared meanings, so it’s social.",
        },
        {
          text: "A boulder rolling down a hill where no one lives or watches",
          correct: true,
          why: "Right. There are no shared meanings and no people being coordinated, so it’s outside the social domain.",
        },
        {
          text: "An introvert filling out a lease application alone at home",
          why: "It’s done alone, but a lease only makes sense through shared meanings and coordination (landlord, law, money). “Social” in the course sense doesn’t mean sociable.",
        },
        {
          text: "The rules of a campus club’s constitution",
          why: "A club’s rules draw on shared meanings and coordinate members, so they are clearly social.",
        },
      ],
    },
    {
      id: "u1-q35",
      skill: "application",
      format: "mc",
      tier: 1,
      conceptIds: ["u1-issues", "u1-troubles", "u1-sociological-imagination"],
      stem: "Sam feels like a failure because, a year after graduating, he still lives with his parents. What leverage does treating this as an issue, rather than only a trouble, give him?",
      options: [
        {
          text: "It proves that his situation is entirely his own fault.",
          why: "The opposite. Seeing it as an issue points to social forces acting on many people, not only personal blame.",
        },
        {
          text: "It shows that his feelings don’t matter and aren’t real.",
          why: "Seeing an issue doesn’t erase the trouble. The notes treat both as real effects of social forces, seen at different levels.",
        },
        {
          text: "It links his experience to many similar young people and to forces like rents and wages.",
          correct: true,
          why: "Right. An issue views the effects of social forces across social categories and groups, which opens up the causes behind a feeling that seemed purely private.",
        },
        {
          text: "It lets him diagnose exactly which of his own personality traits and bad decisions caused him to fall behind his peers.",
          why: "That stays at the individual level. It’s the move the sociological imagination asks us to go beyond.",
        },
      ],
    },
    {
      id: "u1-q36",
      skill: "application",
      format: "mc",
      trap: "sibling",
      tier: 1,
      conceptIds: ["u1-cherished-values", "u1-social-category", "u1-double-consciousness", "u1-issues"],
      stem: "Kayla is crushed after being cut from her high school’s varsity soccer team. Part of why it hurts so much is a widely shared belief that making varsity shows you’re talented and worth something. What concept from Mills helps explain why the cut is so painful?",
      options: [
        {
          text: "Double-consciousness",
          why: "Double-consciousness is Du Bois’s idea about seeing yourself through others’ contemptuous eyes via social categories, and it isn’t from Mills.",
        },
        {
          text: "Cherished values",
          correct: true,
          why: "Right. Living in a society, we absorb deep beliefs about how things should turn out. Getting cut breaks one of those, which is why it stings.",
        },
        {
          text: "Social category",
          why: "A social category is a shared basis for grouping people, like gender or class. The pain here comes from a belief about what outcomes should happen.",
        },
        {
          text: "Issue",
          why: "An issue is the effects of social forces viewed across groups. The question asks why the cut hurts Kayla, which points to the values she has absorbed.",
        },
      ],
    },

    // ---------------- BIG EMPIRICAL ----------------
    {
      id: "u1-q37",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 1,
      fixedOrder: true,
      conceptIds: ["u1-issues", "u1-sociological-imagination"],
      stem: "According to the notes’ Census data, roughly what share of Suffolk County commuters drive to work alone?",
      options: [
        {
          text: "About 1 in 20",
          why: "Far too low. About 1 in 20 is roughly the share that takes public transit.",
        },
        {
          text: "About a quarter",
          why: "Too low. Driving alone is by far the most common way Suffolk commuters get to work.",
        },
        {
          text: "About three-quarters",
          correct: true,
          why: "Right. Roughly three in four drive alone. When almost everyone has to drive alone, a traffic jam is an issue, not just a personal annoyance.",
        },
        {
          text: "Essentially everyone (over 99%)",
          why: "Too high. Some people carpool (fewer than 1 in 10), work from home (about 1 in 10), or take transit (about 1 in 20).",
        },
      ],
    },
    {
      id: "u1-q38",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 2,
      fixedOrder: true,
      conceptIds: ["u1-social-force", "u1-issues"],
      stem: "Roughly what share of Suffolk County commuters use public transit to get to work?",
      options: [
        {
          text: "About 1 in 20",
          correct: true,
          why: "Right. Only about 5% take transit, consistent with Suffolk’s low transit score. The lack of options is a social force pushing people into cars.",
        },
        {
          text: "About 1 in 3",
          why: "Far too high for Suffolk. Transit there is few, infrequent, and expensive.",
        },
        {
          text: "About half",
          why: "That might fit a dense city, but in Suffolk most people drive alone.",
        },
        {
          text: "About 9 in 10",
          why: "Way off. About three-quarters of Suffolk commuters drive alone.",
        },
      ],
    },
    {
      id: "u1-q39",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 2,
      fixedOrder: true,
      conceptIds: ["u1-social-force", "u1-sociological-imagination"],
      stem: "How did Suffolk County’s population change in the quarter-century after World War II (about 1950 to 1975)?",
      options: [
        {
          text: "It shrank by about half",
          why: "The opposite. Suffolk boomed after the war.",
        },
        {
          text: "It stayed about the same",
          why: "The notes stress that very few people lived in Suffolk until just after WWII, and then the population exploded.",
        },
        {
          text: "It grew about fivefold",
          correct: true,
          why: "Right. From roughly a quarter million to over a million. The boom was part of nationwide suburban expansion, planned around cars, which is why transit is still weak.",
        },
        {
          text: "It grew about a hundredfold",
          why: "Too extreme. The growth was dramatic (around fivefold), but not a hundredfold.",
        },
      ],
    },
    {
      id: "u1-q40",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 2,
      fixedOrder: true,
      conceptIds: ["u1-issues", "u1-social-force"],
      stem: "About how much has sea level risen around Long Island over the last 150 years or so?",
      options: [
        {
          text: "Not measurably at all",
          why: "The notes say the opposite: sea level has clearly risen, which is part of why storms are becoming more damaging.",
        },
        {
          text: "More than a foot",
          correct: true,
          why: "Right. Over about 150 years, more than a foot. Individual flood damage is a trouble, but this long-term rise makes it an issue tied to climate change.",
        },
        {
          text: "About 20 feet",
          why: "Far too high. That would have drowned much of Long Island’s coast already.",
        },
        {
          text: "About 100 feet",
          why: "Wildly too high. That’s on the scale of ice-age changes, not the last 150 years.",
        },
      ],
    },
    {
      id: "u1-q41",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 2,
      fixedOrder: true,
      conceptIds: ["u1-issues", "u1-sociological-imagination"],
      stem: "Since careful measurement began around 1940, how has the frequency of heavy-rain days along Long Island Sound changed?",
      options: [
        {
          text: "Fallen sharply",
          why: "The opposite. Heavy-rain days have become more common.",
        },
        {
          text: "Stayed the same, as random chance would predict",
          why: "This is exactly the assumption the notes call misleading. Heavy rain isn’t randomly spread over time.",
        },
        {
          text: "Risen by about a quarter",
          correct: true,
          why: "Right. Up about 25% on average. That’s why calling a storm a “1,000-year event” misleads: the odds are shifting because of climate change.",
        },
        {
          text: "Risen about tenfold",
          why: "Too extreme. The increase is real but on the order of a quarter, not ten times.",
        },
      ],
    },
    {
      id: "u1-q42",
      skill: "empirical",
      format: "mc",
      trap: "magnitude",
      tier: 1,
      fixedOrder: true,
      conceptIds: ["u1-social-force", "u1-issues"],
      stem: "According to the notes, how did the US opioid prescription rate in 2015 compare with the rate in 1999?",
      options: [
        {
          text: "It was much lower",
          why: "The opposite. Prescribing rose dramatically between 1999 and 2015.",
        },
        {
          text: "It was roughly the same",
          why: "No. The notes describe a huge spike in outpatient prescribing.",
        },
        {
          text: "It was roughly three times as high",
          correct: true,
          why: "Right. About three times the 1999 level (and nearly four times Europe’s). A jump that big points to social forces (aggressive marketing, hospital cost-cutting), not a sudden rise in individual weakness.",
        },
        {
          text: "It was roughly 300 times as high",
          why: "Far too extreme. The increase was several-fold, not hundreds-fold.",
        },
      ],
    },
    {
      id: "u1-q43",
      skill: "empirical",
      format: "mc",
      tier: 1,
      conceptIds: ["u1-issues", "u1-troubles", "u1-social-force"],
      stem: "The notes stress that in 2015 the US was prescribing nearly four times as many opioids per person as Europe. Why does this comparison matter for the sociological imagination?",
      options: [
        {
          text: "It shows that Americans, as individuals, are simply much more prone to addiction than Europeans are, whatever the circumstances.",
          why: "That’s a purely individual explanation. The notes point instead to social forces, like marketing to doctors and hospitals cutting costs, that differ across places.",
        },
        {
          text: "A gap that big between places suggests addiction is also an issue produced by social forces, not only a personal trouble.",
          correct: true,
          why: "Right. When rates differ several-fold across societies, something social (how drugs are marketed, prescribed, and paid for) is at work, and addiction is an issue as well as a trouble.",
        },
        {
          text: "It proves that opioid addiction is not really harmful to individuals.",
          why: "The notes are clear that addiction is an engine of troubles: it destroys health and relationships. The comparison adds the issue level; it doesn’t erase the harm.",
        },
        {
          text: "It shows that European data can’t be compared with American data.",
          why: "The notes use the comparison precisely because it is meaningful. It highlights how social forces differ between societies.",
        },
      ],
    },
    {
      id: "u1-q44",
      skill: "empirical",
      format: "mc",
      tier: 2,
      conceptIds: ["u1-social-force", "u1-sociological-imagination"],
      stem: "The notes point out that Suffolk County’s population exploded after World War II as part of a nationwide wave of suburban expansion. Why does this history matter for understanding someone’s daily frustrations today?",
      options: [
        {
          text: "It doesn’t. History is irrelevant to present-day personal experience.",
          why: "The notes argue the opposite: past social forces set up the options people have today.",
        },
        {
          text: "It shows that population growth is always good for a region.",
          why: "The notes don’t evaluate growth as good or bad. The point is how it shaped options.",
        },
        {
          text: "It shows that people in Suffolk chose to live there purely because of their own personal tastes and personalities, nothing more.",
          why: "That’s a purely individual explanation. The notes stress a shared suburban ideal and car-centered planning, which are social forces.",
        },
        {
          text: "Planning built around cars and low-density housing during that boom is a social force that still shapes the choices people have now.",
          correct: true,
          why: "Right. Your choices are your own, but social forces, including decades-old planning decisions, create the set of choices you have.",
        },
      ],
    },
    // ---------- EMPIRICAL T/F ----------
    {
      id: "u1-q45",
      skill: "empirical",
      format: "tf",
      trap: "reversal",
      tier: 2,
      conceptIds: ["u1-social-force", "u1-issues"],
      stem: "True/False: According to the notes, opioid overdose deaths have continued to rise steeply every year since about 2020.",
      options: [
        {
          text: "True",
          why: "This reverses the notes. Deaths rose for years, but the recent trend is down.",
        },
        {
          text: "False",
          correct: true,
          why: "Correct. Overdose deaths have fallen significantly since about 2020. This is linked to easy access to naloxone and possibly to regulatory changes that cut the supply of illicit fentanyl. Social forces can improve things too.",
        },
      ],
    },
    {
      id: "u1-q46",
      skill: "empirical",
      format: "tf",
      tier: 2,
      conceptIds: ["u1-sociological-imagination", "u1-issues"],
      stem: "True/False: According to the notes, the New York metropolitan area had the worst traffic in the United States in 2023.",
      options: [
        {
          text: "True",
          correct: true,
          why: "Correct. It had the worst traffic in the US, and around the 20th worst in the world. A regional pattern that extreme points to social causes, not just individual drivers.",
        },
        {
          text: "False",
          why: "The notes open with exactly this fact: NY metro had the worst traffic in the US in 2023.",
        },
      ],
    },
    {
      id: "u1-q47",
      skill: "empirical",
      format: "tf",
      tier: 2,
      conceptIds: ["u1-issues", "u1-sociological-imagination"],
      stem: "True/False: The notes argue that calling a severe local storm a “1,000-year rain event” is misleading, because heavy-rain days have been getting more frequent rather than being randomly distributed over time.",
      options: [
        {
          text: "True",
          correct: true,
          why: "Correct. The label assumes storms are random over 1,000 years, but heavy-rain days along Long Island Sound are up about 25% since 1940. The storm is part of an issue, not just bad luck.",
        },
        {
          text: "False",
          why: "The notes make exactly this argument: the odds aren’t fixed, because climate change is making heavy rain more common.",
        },
      ],
    },
  ],
};
