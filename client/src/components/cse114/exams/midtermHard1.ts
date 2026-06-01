// Authored harder-tier midterm set, Tier 1 of 3 ("On-Level").
// Design: ONE trap per question, single concept, clean values — builds fluency
// before Tier 2 (interacting concepts) and Tier 3 (layered traps + edge cases).
// Every computed value hand-verified against Java semantics. Midterm scope only
// (types/operators, control flow, methods, arrays, char/strings — no
// inheritance/polymorphism/exceptions).

import type { ExamSet } from "../types";

export const midtermHard1: ExamSet = {
  id: "midterm-hard-1",
  title: "Harder Midterm I — On-Level",
  examType: "midterm",
  durationMinutes: 75,
  blurb:
    "Tier 1 of 3. One clean trap per question — integer division, char arithmetic, concat order, pre/post increment, loop tracing. Build fluency before the Stretch and Exam-Proof sets.",
  questions: [
    {
      id: "mh1-q1",
      type: "mc",
      topic: "types-operators",
      gotchas: ["integer-division"],
      difficulty: 1,
      points: 4,
      prompt: "What is the output of `System.out.println(7 / 2);`?",
      choices: ["3", "3.5", "3.0", "4"],
      correctIndex: 0,
      explanation:
        "Both 7 and 2 are ints, so `/` is INTEGER division — it throws away the fraction (no rounding). 7 ÷ 2 = 3 remainder 1, and you keep the 3. You'd only get 3.5 if one side were a double.",
    },
    {
      id: "mh1-q2",
      type: "mc",
      topic: "types-operators",
      gotchas: ["type-promotion", "integer-division"],
      difficulty: 1,
      points: 4,
      prompt: "What is the output of `System.out.println(7 / 2.0);`?",
      choices: ["3", "3.5", "3.0", "4"],
      correctIndex: 1,
      explanation:
        "One operand is a double (2.0), so the int 7 is promoted to 7.0 and you get true division: 3.5. A single double anywhere in the expression switches the whole thing to floating-point.",
    },
    {
      id: "mh1-q3",
      type: "mc",
      topic: "char-strings",
      gotchas: ["char-arithmetic"],
      difficulty: 1,
      points: 4,
      prompt: "What is the output?",
      code: "char c = 'A';\nSystem.out.println((char)(c + 1));",
      choices: ["A", "B", "66", "C"],
      correctIndex: 1,
      explanation:
        "'A' is code 65. `c + 1` does the math as ints → 66, but the `(char)` cast turns 66 back into a letter, and 66 is 'B'. Without the cast it would print the number 66 instead. Letters are just numbers wearing a costume.",
    },
    {
      id: "mh1-q4",
      type: "mc",
      topic: "char-strings",
      gotchas: ["string-concat-ltr"],
      difficulty: 1,
      points: 4,
      prompt: 'What is the output of `System.out.println("Sum: " + 3 + 4);`?',
      choices: ["Sum: 7", "Sum: 34", "Sum: 12", "34"],
      correctIndex: 1,
      explanation:
        'Read it left to right. `"Sum: " + 3` is String + int → glues on the digit → "Sum: 3". Then `"Sum: 3" + 4` → "Sum: 34". Once a String enters the chain, every later `+` is concatenation, not addition.',
    },
    {
      id: "mh1-q5",
      type: "mc",
      topic: "types-operators",
      gotchas: ["string-concat-ltr"],
      difficulty: 1,
      points: 4,
      prompt: 'What is the output of `System.out.println(3 + 4 + " total");`?',
      choices: ["34 total", "7 total", "total 7", "12 total"],
      correctIndex: 1,
      explanation:
        'Same left-to-right rule, opposite result. `3 + 4` happens FIRST while both are still ints → 7. Then `7 + " total"` → "7 total". The String is on the right this time, so the addition runs before any concatenation. Position is everything.',
    },
    {
      id: "mh1-q6",
      type: "mc",
      topic: "types-operators",
      gotchas: ["integer-division"],
      difficulty: 1,
      points: 4,
      prompt: "What is the value of `10 % 3`?",
      choices: ["0", "1", "3", "3.33"],
      correctIndex: 1,
      explanation:
        "`%` is the remainder. 10 ÷ 3 is 3 with 1 left over, so 10 % 3 = 1. Think of it as 'what's stuck on the end after you fit in as many 3s as you can.'",
    },
    {
      id: "mh1-q7",
      type: "output",
      topic: "control-flow",
      difficulty: 1,
      points: 5,
      prompt: "What is the exact output?",
      code: "int sum = 0;\nfor (int i = 1; i <= 4; i++) {\n  sum += i;\n}\nSystem.out.println(sum);",
      answer: "10",
      explanation:
        "The loop adds 1, then 2, then 3, then 4 (it stops AFTER 4 because the test is `i <= 4`). 1+2+3+4 = 10. Watch the boundary: `<= 4` includes 4; `< 4` would stop at 3 and give 6.",
    },
    {
      id: "mh1-q8",
      type: "output",
      topic: "types-operators",
      gotchas: ["pre-post-increment"],
      difficulty: 1,
      points: 5,
      prompt: "What is the exact output (two lines)?",
      code: "int i = 5;\nSystem.out.println(i++);\nSystem.out.println(i);",
      answer: "5\n6",
      acceptable: ["5 6", "5\r\n6"],
      explanation:
        "`i++` is POST-increment: it hands back the OLD value (5) for printing, THEN bumps i to 6. So the first line is 5, and by the second line i has become 6. The ++ 'happens after you've already used the value.'",
    },
    {
      id: "mh1-q9",
      type: "trace",
      topic: "control-flow",
      difficulty: 1,
      points: 6,
      partialCredit: true,
      prompt: "Trace the loop. Give the values of `n` and `count` after it finishes.",
      code: "int n = 1, count = 0;\nwhile (n < 20) {\n  n = n * 2;\n  count++;\n}",
      fields: [
        { label: "n", answer: "32" },
        { label: "count", answer: "5" },
      ],
      explanation:
        "Double n each pass and tally: 1→2 (count 1), 2→4 (2), 4→8 (3), 8→16 (4), 16→32 (5). Now n=32, the test `32 < 20` is false, so it stops. The key subtlety: the body runs fully on the pass that pushes n past 20, so n ends at 32, not 16.",
    },
    {
      id: "mh1-q10",
      type: "mc",
      topic: "arrays",
      gotchas: ["array-oob"],
      difficulty: 1,
      points: 4,
      prompt: "What is the output?",
      code: "int[] a = {2, 4, 6, 8};\nSystem.out.println(a[2]);",
      choices: ["4", "6", "8", "index out of bounds"],
      correctIndex: 1,
      explanation:
        "Indexes start at 0, so a[0]=2, a[1]=4, a[2]=6. `a[2]` is the THIRD element, 6 — not the second. The off-by-one feeling is the whole point: 'index 2' means 'two steps from the start.'",
    },
    {
      id: "mh1-q11",
      type: "output",
      topic: "arrays",
      difficulty: 1,
      points: 5,
      prompt: "What is the exact output?",
      code: "int[] a = {3, 1, 4};\nint s = 0;\nfor (int x : a) {\n  s += x;\n}\nSystem.out.println(s);",
      answer: "8",
      explanation:
        "The for-each visits each element in turn (3, then 1, then 4) and adds it to s. 3+1+4 = 8. `for (int x : a)` reads as 'for each value x inside a' — you get the values, not the indexes.",
    },
    {
      id: "mh1-q12",
      type: "mc",
      topic: "methods",
      difficulty: 1,
      points: 5,
      prompt: "What is the output?",
      code: "static int twice(int x) {\n  return x * 2;\n}\n\n// in main:\nSystem.out.println(twice(twice(3)));",
      choices: ["6", "9", "12", "36"],
      correctIndex: 2,
      explanation:
        "Work from the inside out. The inner `twice(3)` returns 6; that 6 becomes the argument to the outer call, `twice(6)` → 12. Nested calls evaluate innermost-first, just like (parentheses) in algebra.",
    },
    {
      id: "mh1-q13",
      type: "mc",
      topic: "control-flow",
      gotchas: ["short-circuit"],
      difficulty: 1,
      points: 4,
      prompt: "What is the value of `(5 > 3) && (2 > 4)`?",
      choices: ["true", "false", "compiler error", "0"],
      correctIndex: 1,
      explanation:
        "`&&` is true only when BOTH sides are true. 5 > 3 is true, but 2 > 4 is false, so the whole thing is false. One false drags an `&&` down with it — like a chain that's only as strong as its weakest link.",
    },
    {
      id: "mh1-q14",
      type: "code",
      topic: "methods",
      gotchas: ["integer-division"],
      difficulty: 1,
      points: 8,
      prompt:
        "Write `static int factorial(int n)` that returns n! (1·2·…·n), with factorial(0) returning 1. factorial(4) → 24.",
      referenceSolution:
        "public static int factorial(int n) {\n  int result = 1;\n  for (int i = 2; i <= n; i++) {\n    result *= i;\n  }\n  return result;\n}",
      rubric: [
        "Start the accumulator at 1 (not 0 — you're multiplying)",
        "Multiply by each i from 2 up to n",
        "factorial(0) and factorial(1) both return 1 (loop never runs)",
      ],
      explanation:
        "Multiplying, so the running total starts at 1 — starting at 0 would zero out everything. The loop folds in 2, 3, …, n. The clean edge case: for n=0 or 1 the loop body never executes and you correctly return the starting 1.",
    },
    {
      id: "mh1-q15",
      type: "code",
      topic: "char-strings",
      gotchas: ["char-arithmetic"],
      difficulty: 1,
      points: 8,
      prompt:
        "Write `static int countChar(String s, char target)` that returns how many times `target` appears in `s`. countChar(\"banana\", 'a') → 3.",
      referenceSolution:
        "public static int countChar(String s, char target) {\n  int count = 0;\n  for (int i = 0; i < s.length(); i++) {\n    if (s.charAt(i) == target) {\n      count++;\n    }\n  }\n  return count;\n}",
      rubric: [
        "Loop index from 0 to s.length() - 1",
        "Compare s.charAt(i) == target with == (chars are primitives)",
        "Increment a counter on each match and return it",
      ],
      explanation:
        "Walk every position with charAt(i) and bump a counter on each hit. Chars are primitives, so `==` is the right comparison (that's the one place `==` is correct for 'text'). Return the tally at the end, not inside the loop.",
    },
  ],
};
