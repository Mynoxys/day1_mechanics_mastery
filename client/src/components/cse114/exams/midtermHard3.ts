// Authored harder-tier midterm set, Tier 3 of 3 ("Exam-Proof").
// Design: MULTIPLE traps layered in one question, edge cases (negative modulo,
// truncation toward zero, int overflow, compound-assignment narrowing, varargs
// vs fixed-arity resolution), and a capstone class-design problem. If you can do
// these clean, the real exam is downhill.
// Every computed value hand-verified against Java semantics. Midterm scope only
// (no inheritance/polymorphism/exceptions).

import type { ExamSet } from "../types";

export const midtermHard3: ExamSet = {
  id: "midterm-hard-3",
  title: "Harder Midterm III — Exam-Proof",
  examType: "midterm",
  durationMinutes: 100,
  blurb:
    "Tier 3 of 3. Multiple traps stacked per line, the nasty edge cases (negative %, truncation, overflow, byte += narrowing, varargs resolution), and a capstone class. Clear these and the real exam is downhill.",
  questions: [
    {
      id: "mh3-q1",
      type: "mc",
      topic: "char-strings",
      gotchas: ["char-arithmetic", "string-concat-ltr", "operator-precedence"],
      difficulty: 3,
      points: 6,
      prompt: "What is the output?",
      code: "System.out.println('A' + 1 + \"\" + 'B' + 2);",
      choices: ["A1B2", "66B2", "ABB2", "6612"],
      correctIndex: 1,
      explanation:
        "Strictly left to right. (1) `'A' + 1` — both numeric, char promotes to 65, → 66 (an int). (2) `66 + \"\"` — now a String joins, → \"66\". (3) `\"66\" + 'B'` → \"66B\". (4) `\"66B\" + 2` → \"66B2\". The empty string is the hinge: everything BEFORE it is arithmetic, everything AFTER is concatenation.",
    },
    {
      id: "mh3-q2",
      type: "output",
      topic: "types-operators",
      gotchas: ["modulo-negatives", "cast-truncation", "integer-division"],
      difficulty: 3,
      points: 6,
      prompt: "What is the exact output (two lines)?",
      code: "System.out.println(-7 % 3);\nSystem.out.println(-7 / 3);",
      answer: "-1\n-2",
      acceptable: ["-1 -2", "-1\r\n-2"],
      explanation:
        "Both follow Java's 'truncate toward zero' rule. -7 / 3 chops off the fraction toward zero → -2 (not -3). And `%` is defined so that `(a/b)*b + a%b == a`: (-2)*3 = -6, and -6 + (-1) = -7, so -7 % 3 = -1. The remainder takes the sign of the DIVIDEND (the left side), so a negative numerator gives a negative remainder.",
    },
    {
      id: "mh3-q3",
      type: "mc",
      topic: "control-flow",
      gotchas: ["ternary-type", "type-promotion", "char-arithmetic"],
      difficulty: 3,
      points: 6,
      prompt: "What is the output?",
      code: "char c = 'A';\nint n = 66;\nSystem.out.println(true ? c : n);",
      choices: ["A", "65", "66", "B"],
      correctIndex: 1,
      explanation:
        "A ternary must commit to ONE type for both arms before choosing. Here the arms are char and int (and `n` is a variable, not a constant), so they unify by numeric promotion to int. The condition picks `c`, but it's now typed int — so 'A' prints as its code, 65, not as the letter. The arms agreeing on a type is what strips the char-ness off.",
    },
    {
      id: "mh3-q4",
      type: "mc",
      topic: "methods",
      gotchas: ["overloading"],
      difficulty: 3,
      points: 6,
      prompt: "Which overload runs for `h(1, 2)`?",
      code: 'static void h(int... xs)   { System.out.println("varargs"); }\nstatic void h(int a, int b) { System.out.println("two"); }\n\n// in main:\nh(1, 2);',
      choices: ["varargs", "two", "ambiguous", "compiler error"],
      correctIndex: 1,
      explanation:
        "Java only falls back to varargs if nothing else fits. A plain `h(int, int)` matches `h(1, 2)` exactly with no array-packing, so it wins and prints \"two\". Varargs is always the LAST resort in overload resolution — the method that doesn't need to build an array is preferred.",
    },
    {
      id: "mh3-q5",
      type: "mc",
      topic: "types-operators",
      gotchas: ["cast-truncation", "type-promotion"],
      difficulty: 3,
      points: 6,
      prompt: "What is the result?",
      code: "byte b = 10;\nb += 5;\nSystem.out.println(b);",
      choices: ["15", "compiler error", "10", "5"],
      correctIndex: 0,
      explanation:
        "This compiles and prints 15 — the surprise is that it compiles at all. Writing `b = b + 5` would FAIL, because b + 5 is an int and you can't silently shove an int into a byte. But `b += 5` secretly includes a narrowing cast (`b = (byte)(b + 5)`), so the compound operator lets it through. The two forms are not actually equivalent.",
    },
    {
      id: "mh3-q6",
      type: "trace",
      topic: "control-flow",
      gotchas: ["operator-precedence"],
      difficulty: 3,
      points: 7,
      prompt: "Trace the loop. What is `s` after it finishes?",
      code: "int s = 0;\nfor (int i = 0; i < 10; i++) {\n  if (i % 2 == 0) continue;\n  if (i > 7) break;\n  s += i;\n}",
      fields: [{ label: "s", answer: "16" }],
      explanation:
        "`continue` skips the rest of THIS pass; `break` abandons the loop entirely. Even i's are skipped by continue. Odd i's: 1 (s=1), 3 (s=4), 5 (s=9), 7 (s=16). At i=9 the `i > 7` break fires before adding — so 9 never counts. (i=8 is even → continue, so it doesn't reach the break; the break only happens at the next odd, 9.) Final s = 16.",
    },
    {
      id: "mh3-q7",
      type: "mc",
      topic: "arrays",
      gotchas: ["reference-vs-value"],
      difficulty: 3,
      points: 6,
      prompt: "What is the output?",
      code: "int[] a = new int[3];\nint[] b = a;\nb[1] = 5;\nSystem.out.println(a[1] + \" \" + a.length);",
      choices: ["0 3", "5 3", "5 1", "exception"],
      correctIndex: 1,
      explanation:
        "`int[] b = a` does NOT copy the array — it copies the reference, so a and b are two names for the SAME array. Writing `b[1] = 5` is therefore visible as `a[1] == 5`. And `new int[3]` makes length 3 (auto-filled with 0s). So it prints \"5 3\". Assigning an array variable aliases it; it doesn't clone it.",
    },
    {
      id: "mh3-q8",
      type: "mc",
      topic: "char-strings",
      gotchas: ["char-arithmetic"],
      difficulty: 3,
      points: 6,
      prompt: "What is the output?",
      code: "String s = \"\";\nfor (char c = 'c'; c >= 'a'; c--) {\n  s += c;\n}\nSystem.out.println(s);",
      choices: ["abc", "cba", "ccc", "compiler error"],
      correctIndex: 1,
      explanation:
        "A char loop variable counts down by code: 'c'(99) → 'b'(98) → 'a'(97), appending each, giving \"cba\". After 'a' it decrements to '`'(96), which fails `>= 'a'`, so it stops. Chars compare and decrement as their numeric codes — the loop is really 99 down to 97.",
    },
    {
      id: "mh3-q9",
      type: "mc",
      topic: "types-operators",
      gotchas: ["type-promotion"],
      difficulty: 3,
      points: 6,
      prompt: "What is the output?",
      code: "int big = 2_000_000_000;\nSystem.out.println(big + big);",
      choices: ["4000000000", "-294967296", "overflow error", "0"],
      correctIndex: 1,
      explanation:
        "int maxes out near 2.147 billion, so 4 billion doesn't fit — and Java does NOT warn, it silently wraps around (modulo 2³²). 4,000,000,000 − 4,294,967,296 = -294,967,296, a negative number. The trap: arithmetic on two ints stays int even when the true answer is too big — promote one side to `long` (e.g. `(long) big + big`) to avoid it.",
    },
    {
      id: "mh3-q10",
      type: "mc",
      topic: "methods",
      gotchas: ["static-vs-instance"],
      difficulty: 3,
      points: 6,
      prompt: "What is the output?",
      code: "static int x = 10;\nstatic int getX() { return x; }\n\n// in main:\nint x = 20;\nSystem.out.println(getX());",
      choices: ["10", "20", "30", "compiler error"],
      correctIndex: 0,
      explanation:
        "main's local `x = 20` is a brand-new variable that only exists inside main — it does NOT change the class field. getX() can't see main's local; it reads the field, which is still 10. So it prints 10. A local variable shadows the field in its own method, but other methods keep seeing the field.",
    },
    {
      id: "mh3-q11",
      type: "code",
      topic: "arrays",
      difficulty: 3,
      points: 10,
      prompt:
        "Write `static int[] reverse(int[] a)` that returns a NEW array with a's elements in reverse order, leaving `a` unchanged. reverse(new int[]{1, 2, 3}) → {3, 2, 1}.",
      referenceSolution:
        "public static int[] reverse(int[] a) {\n  int[] r = new int[a.length];\n  for (int i = 0; i < a.length; i++) {\n    r[i] = a[a.length - 1 - i];\n  }\n  return r;\n}",
      rubric: [
        "Allocate a fresh array of the same length (don't reverse in place)",
        "Map index i of the result to index (length - 1 - i) of the input",
        "Return the new array; the original `a` is untouched",
      ],
      explanation:
        "The prompt insists on a NEW array, so allocate one and copy — don't swap in place (that would mutate the caller's array). The mirror formula is the crux: position i of the result pulls from position `length - 1 - i` of the input, so the first slot grabs the last element.",
    },
    {
      id: "mh3-q12",
      type: "code",
      topic: "oop-basics",
      gotchas: ["integer-division", "modulo-negatives"],
      difficulty: 3,
      points: 14,
      prompt:
        "Capstone. Write a class `Time` with int fields `hours` and `minutes`, a constructor `Time(int h, int m)`, a method `void addMinutes(int n)` that advances the time and wraps correctly across midnight (and handles negative n), and `toString()` returning \"HH:MM\" zero-padded. After `Time t = new Time(23, 50); t.addMinutes(20);`, `t.toString()` is \"00:10\".",
      referenceSolution:
        'public class Time {\n  int hours;\n  int minutes;\n\n  public Time(int h, int m) {\n    hours = h;\n    minutes = m;\n  }\n\n  public void addMinutes(int n) {\n    int total = hours * 60 + minutes + n;\n    total = ((total % 1440) + 1440) % 1440; // wrap into [0, 1440), even if negative\n    hours = total / 60;\n    minutes = total % 60;\n  }\n\n  public String toString() {\n    return String.format("%02d:%02d", hours, minutes);\n  }\n}',
      rubric: [
        "Fields + constructor that stores h and m",
        "addMinutes converts to total minutes, adds n, then maps back with / 60 and % 60",
        "Wrap with ((total % 1440) + 1440) % 1440 so it stays in a day AND survives negative n",
        'toString zero-pads to two digits each (e.g. "%02d:%02d" or manual padding)',
      ],
      explanation:
        "Collapse everything to one number (total minutes), do the arithmetic there, then rebuild: hours = total / 60 (integer division), minutes = total % 60 (the leftover). The wrap `((total % 1440) + 1440) % 1440` is the careful part — a plain `% 1440` can return a NEGATIVE for negative n, so you add 1440 and mod again to force it back into [0, 1440). 1440 = minutes in a day. Zero-padding is what turns 0:10 into the expected \"00:10\".",
    },
  ],
};
