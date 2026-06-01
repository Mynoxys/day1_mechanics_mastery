// Authored harder-tier midterm set, Tier 2 of 3 ("Stretch").
// Design: TWO concepts interact per question, and traps that need deliberate
// care — ternary type promotion, short-circuit side effects, overload
// resolution, reference reassignment vs mutation, integer-division-before-widen.
// Every computed value hand-verified against Java semantics. Midterm scope only.

import type { ExamSet } from "../types";

export const midtermHard2: ExamSet = {
  id: "midterm-hard-2",
  title: "Harder Midterm II — Stretch",
  examType: "midterm",
  durationMinutes: 90,
  blurb:
    "Tier 2 of 3. Two concepts collide per question — ternary promotion, short-circuit side effects, overload resolution, reference reassignment vs mutation. These are the traps that need you to slow down.",
  questions: [
    {
      id: "mh2-q1",
      type: "mc",
      topic: "control-flow",
      gotchas: ["ternary-type", "type-promotion"],
      difficulty: 2,
      points: 5,
      prompt: "What is the output of `System.out.println(true ? 1 : 2.0);`?",
      choices: ["1", "1.0", "2.0", "compiler error"],
      correctIndex: 1,
      explanation:
        "A ternary has ONE type for the whole expression, decided before it picks a branch. One branch is int (1), the other double (2.0), so both get promoted to double — the type becomes double. Even though the condition picks the `1`, it's printed as the double `1.0`. The two arms have to agree on a type first.",
    },
    {
      id: "mh2-q2",
      type: "mc",
      topic: "control-flow",
      gotchas: ["short-circuit"],
      difficulty: 2,
      points: 5,
      prompt: "What does this print?",
      code: 'static int count = 0;\nstatic boolean tick() { count++; return count > 2; }\n\n// in main:\nboolean r = tick() || tick() || tick();\nSystem.out.println(count + " " + r);',
      choices: ["3 true", "2 false", "1 true", "3 false"],
      correctIndex: 0,
      explanation:
        "`||` stops the moment something is true. tick() #1: count→1, returns 1>2 = false (keep going). #2: count→2, returns false (keep going). #3: count→3, returns 3>2 = true → STOP, the chain is satisfied. So count is 3 and r is true. Each tick() has a side effect (count++), which is why short-circuiting changes the answer.",
    },
    {
      id: "mh2-q3",
      type: "mc",
      topic: "control-flow",
      gotchas: ["short-circuit"],
      difficulty: 2,
      points: 5,
      prompt: "What is the value of `x` after this runs?",
      code: "static int x = 0;\nstatic boolean bump() { x++; return true; }\n\n// in main:\nif (false && bump()) {\n  System.out.println(\"in\");\n}",
      choices: ["0", "1", "2", "true"],
      correctIndex: 0,
      explanation:
        "`&&` quits as soon as a side is false. The left side is literally `false`, so Java already knows the result is false and NEVER calls bump(). x stays 0. The lesson: code hidden on the right of a short-circuited && can silently not run.",
    },
    {
      id: "mh2-q4",
      type: "mc",
      topic: "methods",
      gotchas: ["overloading", "type-promotion"],
      difficulty: 2,
      points: 5,
      prompt: "Which overload runs for `f('A')`?",
      code: 'static void f(int x)    { System.out.println("int"); }\nstatic void f(double x) { System.out.println("double"); }\nstatic void f(Object x) { System.out.println("Object"); }\n\n// in main:\nf(\'A\');',
      choices: ["int", "double", "Object", "char"],
      correctIndex: 0,
      explanation:
        "There's no f(char), so Java looks for the cheapest conversion. A char widens to int in one small step — cheaper than widening to double, and far cheaper than boxing into Object. So `f(int)` wins and it prints \"int\". Overload resolution prefers the 'closest' parameter type.",
    },
    {
      id: "mh2-q5",
      type: "mc",
      topic: "methods",
      gotchas: ["overloading", "type-promotion"],
      difficulty: 2,
      points: 5,
      prompt: "Which overload runs for `g(5)`?",
      code: 'static void g(long x)    { System.out.println("long"); }\nstatic void g(Integer x) { System.out.println("Integer"); }\n\n// in main:\ng(5);',
      choices: ["long", "Integer", "ambiguous", "int"],
      correctIndex: 0,
      explanation:
        "5 is an int. One option widens it to long (a primitive widening); the other boxes it into Integer. Java does primitive widening BEFORE it considers boxing, so `g(long)` wins and prints \"long\". Boxing is the last resort, not the first.",
    },
    {
      id: "mh2-q6",
      type: "mc",
      topic: "arrays",
      gotchas: ["reference-vs-value"],
      difficulty: 2,
      points: 6,
      prompt: "What does this print?",
      code: "static void change(int[] a) {\n  a[0] = 99;          // (1)\n  a = new int[]{1, 2}; // (2)\n  a[0] = 7;            // (3)\n}\n\n// in main:\nint[] arr = {5, 6};\nchange(arr);\nSystem.out.println(arr[0]);",
      choices: ["5", "99", "7", "1"],
      correctIndex: 1,
      explanation:
        "Line (1) reaches through the reference and MUTATES the caller's array → arr[0] becomes 99. Line (2) re-points the LOCAL copy of the reference at a brand-new array; that doesn't touch arr. Line (3) edits that new local array only. So the caller sees 99. Mutating what a reference points to is visible; reassigning the reference is not.",
    },
    {
      id: "mh2-q7",
      type: "mc",
      topic: "char-strings",
      gotchas: ["char-arithmetic", "type-promotion"],
      difficulty: 2,
      points: 5,
      prompt: "What is the output?",
      code: "char a = 'a';\nchar z = 'z';\nSystem.out.println(z - a);",
      choices: ["z - a", "1", "25", "compiler error"],
      correctIndex: 2,
      explanation:
        "Subtracting two chars promotes them to their int codes: 'z' is 122, 'a' is 97, and 122 − 97 = 25. The result is an int (not a char), so it prints the number 25 — handy for 'how far apart are these letters in the alphabet.'",
    },
    {
      id: "mh2-q8",
      type: "trace",
      topic: "control-flow",
      difficulty: 2,
      points: 6,
      prompt: "Trace the nested loop. What is `total` after it finishes?",
      code: "int total = 0;\nfor (int i = 1; i <= 3; i++) {\n  for (int j = i; j <= 3; j++) {\n    total++;\n  }\n}",
      fields: [{ label: "total", answer: "6" }],
      explanation:
        "The inner loop starts at j = i, so it shrinks as i grows. i=1: j runs 1,2,3 → 3 steps. i=2: j runs 2,3 → 2 steps. i=3: j runs 3 → 1 step. 3+2+1 = 6. The `j = i` start is the trap — it's not a full 3×3 grid (that would be 9).",
    },
    {
      id: "mh2-q9",
      type: "mc",
      topic: "char-strings",
      gotchas: ["eq-vs-equals"],
      difficulty: 2,
      points: 6,
      prompt: "What is the output?",
      code: 'String a = "hi";\nString b = "hi";\nString c = new String("hi");\nSystem.out.println((a == b) + " " + (a == c) + " " + a.equals(c));',
      choices: ["true false true", "true true true", "false false true", "true false false"],
      correctIndex: 0,
      explanation:
        '`==` asks "same object in memory?"; `.equals()` asks "same characters?". a and b are both the pooled literal "hi", so a == b is true. `new String` forces a separate object, so a == c is false. But the text matches, so a.equals(c) is true. Use .equals() for String content — always.',
    },
    {
      id: "mh2-q10",
      type: "mc",
      topic: "types-operators",
      gotchas: ["integer-division", "cast-truncation"],
      difficulty: 2,
      points: 5,
      prompt: "What is the output?",
      code: "double d = 7 / 2;\nSystem.out.println(d);",
      choices: ["3.5", "3.0", "3", "4.0"],
      correctIndex: 1,
      explanation:
        "The right side `7 / 2` is computed FIRST, and both are ints → integer division → 3. Only THEN is that 3 widened to fit the double, giving 3.0. The double on the left arrives too late to save the fraction — it was already gone. To keep it, make the division itself a double: `7 / 2.0`.",
    },
    {
      id: "mh2-q11",
      type: "mc",
      topic: "types-operators",
      gotchas: ["pre-post-increment", "operator-precedence"],
      difficulty: 2,
      points: 6,
      prompt: "What does this print?",
      code: "int i = 1;\nint x = i++ + ++i;\nSystem.out.println(i + \" \" + x);",
      choices: ["3 4", "2 4", "3 5", "2 3"],
      correctIndex: 0,
      explanation:
        "Go left to right. `i++` uses the current 1, then bumps i to 2. `++i` bumps i to 3 first, then uses 3. So x = 1 + 3 = 4, and i ended at 3 → \"3 4\". Post-increment 'use-then-bump,' pre-increment 'bump-then-use' — and both bumps land on the same i.",
    },
    {
      id: "mh2-q12",
      type: "code",
      topic: "arrays",
      difficulty: 2,
      points: 8,
      prompt:
        "Write `static int max(int[] a)` that returns the largest value in `a` (assume a has at least one element). max(new int[]{3, 9, 2, 9, 1}) → 9.",
      referenceSolution:
        "public static int max(int[] a) {\n  int best = a[0];\n  for (int i = 1; i < a.length; i++) {\n    if (a[i] > best) {\n      best = a[i];\n    }\n  }\n  return best;\n}",
      rubric: [
        "Seed `best` with a[0], not 0 (0 fails on all-negative arrays)",
        "Loop from index 1 to a.length - 1",
        "Update best whenever you find something larger",
      ],
      explanation:
        "Seed the 'best so far' with the first ELEMENT, not 0 — seeding with 0 would wrongly win on an all-negative array. Then sweep the rest, upgrading best each time you see something bigger. Starting the loop at i=1 just skips re-checking a[0] against itself.",
    },
    {
      id: "mh2-q13",
      type: "code",
      topic: "control-flow",
      gotchas: ["integer-division"],
      difficulty: 2,
      points: 8,
      prompt:
        "Write `static boolean isPrime(int n)` returning true iff n is prime (n ≥ 2 with no divisor other than 1 and itself). isPrime(2) → true, isPrime(9) → false, isPrime(1) → false.",
      referenceSolution:
        "public static boolean isPrime(int n) {\n  if (n < 2) return false;\n  for (int d = 2; d <= n / d; d++) {\n    if (n % d == 0) return false;\n  }\n  return true;\n}",
      rubric: [
        "Reject n < 2 up front (0, 1, negatives are not prime)",
        "Test divisors with n % d == 0",
        "Stop at √n (here `d <= n / d`) — or at least at d < n — and return true if none divide",
      ],
      explanation:
        "Two interacting ideas: the guard `n < 2` kills the easy non-primes first, then you look for ANY divisor. `n % d == 0` means d divides n evenly. You only need to check up to √n — written here as `d <= n / d` to avoid floating point — because any factor above √n pairs with one below it.",
    },
    {
      id: "mh2-q14",
      type: "output",
      topic: "control-flow",
      gotchas: ["short-circuit", "pre-post-increment"],
      difficulty: 2,
      points: 6,
      prompt: "What is the exact output?",
      code: "int a = 0, b = 0;\nboolean r = (a++ > 0) && (b++ > 0);\nSystem.out.println(a + \" \" + b + \" \" + r);",
      answer: "1 0 false",
      acceptable: ["1 0 false"],
      explanation:
        "`a++ > 0` uses the old a (0), so 0 > 0 is false — but a still bumps to 1 (the ++ always happens). Because the left side is false, `&&` short-circuits and NEVER evaluates `b++ > 0`, so b stays 0. r is false. Two traps at once: post-increment fires even on the failing test, but the right operand never runs.",
    },
  ],
};
