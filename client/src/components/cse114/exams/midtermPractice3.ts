// Transcribed from "CSE114 Midterm 1 - Practice Problems" (Patov, Spring 2015).
// The PDF ships no answer key, so references/answers below are verified by hand.
// 5 output-prediction MCs + 5 code-writing problems.

import type { ExamSet } from "../types";

export const midtermPractice3: ExamSet = {
  id: "midterm-practice-3",
  title: "Midterm Practice 3",
  examType: "midterm",
  durationMinutes: 90,
  blurb: "Output prediction (types, char arithmetic, ternary, boolean logic) + string/loop algorithms.",
  questions: [
    {
      id: "mp3-q1",
      type: "mc",
      topic: "types-operators",
      gotchas: ["type-promotion", "string-concat-ltr"],
      difficulty: 1,
      points: 4,
      prompt: "What is the output of `System.out.println((2.0 + 3) + 3);`?",
      choices: ["5.03", "8.0", "8", "53", "5.3"],
      correctIndex: 1,
      explanation:
        "These are all numbers, not strings, so it's arithmetic. 2.0 + 3 promotes to the double 5.0; 5.0 + 3 is 8.0. It stays a double the whole way, so it prints 8.0, not 8.",
    },
    {
      id: "mp3-q2",
      type: "mc",
      topic: "char-strings",
      gotchas: ["char-arithmetic", "string-concat-ltr"],
      difficulty: 2,
      points: 4,
      prompt: "What is the output?",
      code: 'for (int c = \'A\'; c < \'F\'; c++) {\n  System.out.print(c + " ");\n}',
      choices: ["A B C D E", "65 66 67 68 69", "There is a compiler error.", "None of the above."],
      correctIndex: 1,
      explanation:
        "`c` is declared `int`, so 'A' is stored as its code 65. Then `c + \" \"` is int + String, which converts the int to its digits — printing \"65 \", \"66 \", … If `c` had been a `char`, you'd see the letters instead.",
    },
    {
      id: "mp3-q3",
      type: "mc",
      topic: "types-operators",
      gotchas: ["integer-division", "cast-truncation"],
      difficulty: 2,
      points: 4,
      prompt: "What is the output?",
      code: "double x = (int)2.0;\ndouble f = (x / (int)3.0);\nSystem.out.println(f);",
      choices: ["0", "0.0", "0.66", "0.6666666666666666", "1"],
      correctIndex: 3,
      explanation:
        "x is a double 2.0. (int)3.0 is the int 3. So it's double ÷ int → the int is promoted to double and you get true division: 2.0 / 3 = 0.6666666666666666. The casts to int don't cause integer division here because x is already a double.",
    },
    {
      id: "mp3-q4",
      type: "mc",
      topic: "methods",
      gotchas: ["ternary-type", "integer-division"],
      difficulty: 2,
      points: 4,
      prompt: "What is returned?",
      code: "public static String oneOfTwo() {\n  int x = (6/4 == 1) ? 2 : 3;\n  return x;\n}",
      choices: ['2', '3', '"2"', '"3"', "Compiler error."],
      correctIndex: 4,
      explanation:
        "The method promises to return a String but `return x;` hands back an int — that's a compile error (incompatible types). Even the value is a trap: 6/4 is integer division = 1, so the ternary WOULD give 2... if it compiled at all.",
    },
    {
      id: "mp3-q5",
      type: "mc",
      topic: "control-flow",
      gotchas: ["short-circuit", "operator-precedence"],
      difficulty: 3,
      points: 4,
      prompt: "What is the output?",
      code:
        "static boolean a = false;\nstatic boolean b = !a;            // true\nstatic boolean c = (25 % 3 == 0 || 2 != 3);  // true\n\n// in main:\nif (a && !a) {\n  if (c) print(\"32\"); else print(\"31\");\n}\nelse if (c || b && a) {\n  if (c) print(\"30\"); else print(\"29\");\n}\nelse print(\"28\");",
      choices: ["32", "31", "30", "29", "28"],
      correctIndex: 2,
      explanation:
        "a && !a is always false (skip first branch). For the else-if: && binds tighter than ||, so it reads c || (b && a) = true || (…) = true. Inside, c is true → print \"30\". (c is true because 2 != 3 makes the || true.)",
    },
    {
      id: "mp3-q6",
      type: "code",
      topic: "char-strings",
      gotchas: ["char-arithmetic", "modulo-negatives"],
      difficulty: 2,
      points: 8,
      prompt:
        'Write `static public String encrypt(String word)` that shifts each lowercase letter two places forward, wrapping the last two letters to the front (\'y\'→\'a\', \'z\'→\'b\'). encrypt("abcdefxyz") → "cdefghzab".',
      referenceSolution:
        'public static String encrypt(String word) {\n  String result = "";\n  for (int i = 0; i < word.length(); i++) {\n    int shifted = (word.charAt(i) - \'a\' + 2) % 26;\n    result += (char)(\'a\' + shifted);\n  }\n  return result;\n}',
      rubric: [
        "Map each letter to 0–25 via (ch - 'a')",
        "Shift +2 then % 26 to wrap z→b",
        "Map back to a char via (char)('a' + n)",
      ],
      explanation:
        "Convert the letter to a 0–25 index (ch − 'a'), add the shift, and `% 26` to wrap past 'z' back to the start. Then `(char)('a' + index)` turns the number back into a letter. Modulo is what makes the alphabet a circle.",
    },
    {
      id: "mp3-q7",
      type: "code",
      topic: "char-strings",
      difficulty: 1,
      points: 6,
      prompt:
        'Write `static public void reverse(String s)` that returns nothing and prints the reverse of the input. reverse("abc") prints "cba".',
      referenceSolution:
        'public static void reverse(String s) {\n  String r = "";\n  for (int i = s.length() - 1; i >= 0; i--)\n    r += s.charAt(i);\n  System.out.println(r);\n}',
      rubric: ["Walks the string from the last index to 0", "Builds/prints the reversed string", "Returns void (prints, doesn't return)"],
      explanation:
        "Walk the string backwards — from length−1 down to 0 — appending each char. The detail the prompt cares about: it returns nothing and PRINTS, so the println is inside the method.",
    },
    {
      id: "mp3-q8",
      type: "code",
      topic: "methods",
      gotchas: ["static-vs-instance"],
      difficulty: 3,
      points: 12,
      prompt:
        "Create class `TriangleNumbers` with `static int genNum(int n)` returning the nth triangle number (1+2+…+n). Then main reads x and prints the first x triangle numbers, where line i holds genNum(i) of them, comma-separated (last line may be partial). x=4 → \"1\" then \"3, 6, 10\".",
      referenceSolution:
        'import java.util.Scanner;\npublic class TriangleNumbers {\n  public static int genNum(int n) {\n    int sum = 0;\n    for (int i = 1; i <= n; i++) sum += i;\n    return sum;\n  }\n  public static void main(String[] args) {\n    Scanner in = new Scanner(System.in);\n    int x = in.nextInt();\n    int printed = 0, line = 1;\n    while (printed < x) {\n      int valsThisLine = genNum(line);\n      for (int k = 0; k < valsThisLine && printed < x; k++) {\n        printed++;\n        System.out.print(genNum(printed));\n        if (k < valsThisLine - 1 && printed < x) System.out.print(", ");\n      }\n      System.out.println();\n      line++;\n    }\n  }\n}',
      rubric: [
        "genNum sums 1..n",
        "x counts TOTAL numbers printed, not lines",
        "Line i holds genNum(i) values; stop when printed reaches x",
        "Commas between values but not trailing",
      ],
      explanation:
        "Two counters: `printed` (how many triangle numbers you've output) drives the stop at x, while `line` decides how many go on the current line (genNum(line) of them). The comma goes between values, not after the last — guard it with both the k check and the printed<x check.",
    },
    {
      id: "mp3-q9",
      type: "code",
      topic: "control-flow",
      difficulty: 3,
      points: 10,
      prompt:
        "Write `static void printHourglass(int n)` that prints an hourglass n wide: full top and bottom rows of stars, with two diagonals crossing in between.",
      referenceSolution:
        "public static void printHourglass(int n) {\n  for (int row = 0; row < n; row++) {\n    String s = \"\";\n    for (int col = 0; col < n; col++) {\n      if (row == 0 || row == n - 1 || col == row || col == n - 1 - row)\n        s += \"*\";\n      else\n        s += \" \";\n    }\n    System.out.println(s);\n  }\n}",
      rubric: [
        "First and last rows are full (n stars)",
        "Star where col == row (one diagonal) or col == n-1-row (the other)",
        "Spaces everywhere else",
      ],
      explanation:
        "An hourglass is two diagonals plus a solid top and bottom. A star goes wherever col equals row (the \\ diagonal) or col equals n−1−row (the / diagonal), plus the full first/last rows. Everything else is a space. (Match the sample's exact spacing when you self-grade.)",
    },
    {
      id: "mp3-q10",
      type: "code",
      topic: "control-flow",
      gotchas: ["modulo-negatives"],
      difficulty: 2,
      points: 6,
      prompt:
        "Project Euler #1: find the sum of all multiples of 3 or 5 below 1000. (Multiples below 10 are 3,5,6,9 → sum 23.) Write a method that returns the answer.",
      referenceSolution:
        "public static int sumMultiples() {\n  int sum = 0;\n  for (int i = 1; i < 1000; i++)\n    if (i % 3 == 0 || i % 5 == 0)\n      sum += i;\n  return sum;   // 233168\n}",
      rubric: ["Loops 1..999", "Keeps i where i%3==0 OR i%5==0", "Returns 233168"],
      explanation:
        "Walk 1 to 999 and add any number divisible by 3 OR 5 (the `||` automatically avoids double-counting 15, 30, … since each number is added at most once). The answer is 233168.",
    },
  ],
};
