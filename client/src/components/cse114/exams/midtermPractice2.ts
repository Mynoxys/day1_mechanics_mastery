// Transcribed verbatim from "CSE114 Midterm Practice - 2" (solutions embedded).
// 21 questions, 80-minute exam. Objective items ("what is the value/output")
// auto-grade; "write a statement/method" items are self-graded code.

import type { ExamSet } from "../types";

export const midtermPractice2: ExamSet = {
  id: "midterm-practice-2",
  title: "Midterm Practice 2",
  examType: "midterm",
  durationMinutes: 80,
  blurb: "21 questions — the type system, operators, control flow, arrays, and string algorithms.",
  questions: [
    {
      id: "mp2-q1",
      type: "mc",
      topic: "types-operators",
      gotchas: ["type-promotion"],
      difficulty: 1,
      points: 4,
      prompt: "If you add an int, a byte, a long, and a double, the result is a ______ value.",
      choices: ["double", "byte", "long", "int", "float"],
      correctIndex: 0,
      explanation:
        "Mixed arithmetic promotes everything to the widest type present. double is the widest here, so the whole expression becomes a double. Java always climbs UP to the biggest type so no information is lost.",
    },
    {
      id: "mp2-q2",
      type: "short",
      topic: "types-operators",
      gotchas: ["modulo-negatives"],
      difficulty: 1,
      points: 4,
      prompt: "What is the value of `25 % 7`?",
      answer: "4",
      explanation:
        "% is the remainder after integer division. 7 goes into 25 three times (21), leaving 25 − 21 = 4.",
    },
    {
      id: "mp2-q3",
      type: "multi",
      topic: "types-operators",
      difficulty: 1,
      points: 4,
      prompt: "Select every line that would add `number` to `sum` (i.e. leave sum increased by number).",
      choices: [
        "number += sum;",
        "number = sum + number;",
        "sum = sum + number;",
        "sum += number;",
        "sum = number + sum;",
      ],
      correctIndices: [2, 3, 4],
      explanation:
        "The result has to land back in `sum`. A and B store the total into `number`, changing the wrong variable. C, D, and E all assign sum + number into sum — D is just shorthand for C.",
    },
    {
      id: "mp2-q4",
      type: "short",
      topic: "char-strings",
      gotchas: ["char-arithmetic"],
      difficulty: 1,
      points: 4,
      prompt: "Unicode for 'A' is 65. What does `System.out.print('A' + 1);` output?",
      answer: "66",
      explanation:
        "A char in arithmetic is promoted to its int code. 'A' becomes 65, plus 1 is 66 — an int, so it prints the NUMBER 66, not the letter 'B'. You'd need a cast back to char to see a letter.",
    },
    {
      id: "mp2-q5",
      type: "mc",
      topic: "types-operators",
      difficulty: 1,
      points: 4,
      prompt: "In Java, the word `true` is ______.",
      choices: [
        "a Boolean literal",
        "same as value 0",
        "a Java keyword",
        "same as value 1",
        "any positive integer",
      ],
      correctIndex: 0,
      explanation:
        "`true` is one of the two boolean literal values (it's also a reserved keyword, but the answer they want is 'literal'). Unlike C, Java booleans are NOT numbers — true is not 1 and false is not 0.",
    },
    {
      id: "mp2-q6",
      type: "multi",
      topic: "types-operators",
      gotchas: ["cast-truncation", "type-promotion"],
      difficulty: 2,
      points: 5,
      prompt:
        "Given `short A; float B; long C; int D; double E; char F;` (all = 0), select the assignments that cause COMPILATION errors.",
      choices: ["F = D;", "D = A;", "E = C;", "F = E;", "C = D;", "D = B;"],
      correctIndices: [0, 3, 5],
      explanation:
        "Assignment is only automatic when it WIDENS (small type into big). Errors happen when you'd narrow without a cast: F=D (int→char), F=E (double→char), D=B (float→int). The others widen (short→int, long→double, int→long), which Java does silently.",
    },
    {
      id: "mp2-q7",
      type: "short",
      topic: "char-strings",
      gotchas: ["char-arithmetic"],
      difficulty: 1,
      points: 4,
      prompt: "What is the output of `System.out.println('M' - 'D');`?",
      answer: "9",
      explanation:
        "Both chars become their codes: 'M' is 77, 'D' is 68. 77 − 68 = 9. Subtracting two letters gives the DISTANCE between them in the alphabet — a handy trick.",
    },
    {
      id: "mp2-q8",
      type: "code",
      topic: "methods",
      difficulty: 2,
      points: 4,
      prompt: "Write a statement storing a random integer in the range 15–25 (inclusive) in a variable `rand`.",
      referenceSolution: "int rand = (int)(Math.random() * 11 + 15);",
      rubric: ["Math.random() * 11 spans 0–10 (11 values)", "+ 15 shifts the range to 15–25", "cast to int"],
      explanation:
        "Math.random() gives [0,1). Multiply by the COUNT of values you want (25−15+1 = 11) to get [0,11), cast to int for 0–10, then add the low end 15. The width is always (high − low + 1).",
    },
    {
      id: "mp2-q9",
      type: "code",
      topic: "types-operators",
      gotchas: ["integer-division", "cast-truncation"],
      difficulty: 2,
      points: 4,
      prompt:
        "Given integer values `sum` and `count`, write code storing the floating-point quotient of sum/count in a double `quotient`.",
      referenceSolution: "double quotient = (double) sum / count;",
      rubric: ["Casts to double BEFORE dividing", "Avoids int/int integer division"],
      explanation:
        "The trap: `sum / count` with two ints divides as integers and throws away the fraction BEFORE it's stored. Cast one operand to double first so the division happens in floating point.",
    },
    {
      id: "mp2-q10",
      type: "code",
      topic: "arrays",
      difficulty: 1,
      points: 4,
      prompt: "Write a statement that declares and creates an array of 200 chars in a variable `letters`.",
      referenceSolution: "char[] letters = new char[200];",
      rubric: ["Declares a char[] reference", "Uses new char[200] to allocate it"],
      explanation:
        "Two halves: `char[] letters` declares a reference that can point at a char array; `new char[200]` actually allocates the 200-slot array on the heap. Declaring alone gives you null — you need `new` to get storage.",
    },
    {
      id: "mp2-q11",
      type: "multi",
      topic: "control-flow",
      difficulty: 2,
      points: 5,
      prompt: "Select the Boolean expressions with INCORRECT Java syntax.",
      choices: [
        "(true) && (3 => 4)",
        "(x != 0) || (x = 0)",
        "!(x > 0) && (x > 0)",
        "(x > 0) || (x < 0)",
        "(-10 < x < 0)",
      ],
      correctIndices: [0, 1, 4],
      explanation:
        "A uses `=>` which isn't an operator (it's `>=`). B has `x = 0` (assignment giving an int) where a boolean is required. E tries to chain comparisons like math — Java evaluates `-10 < x` to a boolean, then can't compare that to 0. C and D are valid syntax (C is always false, but that's logic, not syntax).",
    },
    {
      id: "mp2-q12",
      type: "short",
      topic: "control-flow",
      difficulty: 2,
      points: 4,
      prompt: "What is the output?",
      code:
        "char ch = 'a';\nswitch (Character.toUpperCase(ch)) {\n  case 'A': System.out.print(ch); break;\n  case 'B': System.out.print(ch); break;\n  case 'C': System.out.print(ch); break;\n  case 'D': System.out.print(ch); break;\n  default:  System.out.println(ch);\n}",
      answer: "a",
      explanation:
        "The switch tests the UPPERCASED copy ('A'), so it lands in case 'A'. But it prints `ch`, which is still the original lowercase 'a'. toUpperCase returns a new value; it doesn't change ch.",
    },
    {
      id: "mp2-q13",
      type: "mc",
      topic: "control-flow",
      difficulty: 2,
      points: 4,
      prompt:
        "Code 1: `if (number % 2 == 0) even = true; else even = false;`\nCode 2: `boolean even = (number % 2 == 0);`\nWhich statement is correct?",
      choices: [
        "Only Code 1 has syntax errors.",
        "Only Code 2 has syntax errors.",
        "Both have syntax errors.",
        "Both are syntactically correct but have logic errors.",
        "Both are syntactically and logically correct.",
      ],
      correctIndex: 4,
      explanation:
        "Both do the same thing. Code 2 just assigns the boolean result of the comparison directly — which is exactly what the if/else in Code 1 spells out the long way. `if (cond) x = true; else x = false;` is always reducible to `x = cond;`.",
    },
    {
      id: "mp2-q14",
      type: "mc",
      topic: "control-flow",
      difficulty: 2,
      points: 4,
      prompt:
        "Analyze: `if (x < 100) && (x > 10) System.out.println(\"...\");` — which is correct?",
      choices: [
        "Syntax error: the whole condition (x<100) && (x>10) must be inside parentheses.",
        "Syntax error: condition must be parenthesized AND the println must be in a block.",
        "Syntactically correct, but a run-time error.",
        "Syntactically correct, but a logical error.",
        "Syntactically and logically correct.",
      ],
      correctIndex: 0,
      explanation:
        "`if` needs ONE parenthesized condition. Here only `(x < 100)` is the if-condition; the `&& (x > 10)` dangles outside as a syntax error. It must be `if ((x < 100) && (x > 10))`.",
    },
    {
      id: "mp2-q15",
      type: "short",
      topic: "control-flow",
      gotchas: ["pre-post-increment"],
      difficulty: 2,
      points: 4,
      prompt: "What value is saved in `count` after this runs?",
      code:
        'int count = 0;\ndo {\n  System.out.println("Welcome to Java");\n} while (count++ < 9);\nSystem.out.println(count);',
      answer: "10",
      explanation:
        "`count++` tests the CURRENT value, then increments. The test fails when count is 9 (9 < 9 is false), but the ++ still fires that last time, bumping count from 9 to 10. So the loop body runs 10 times and count ends at 10.",
    },
    {
      id: "mp2-q16",
      type: "code",
      topic: "control-flow",
      difficulty: 2,
      points: 5,
      prompt: "Rewrite the do-loop from the previous question using a for-loop (same output, same final count).",
      referenceSolution:
        'int count = 0;\nfor (; count <= 9; count++)\n  System.out.println("Welcome to Java");\nSystem.out.println(count);',
      rubric: ["Runs the body 10 times", "Leaves count == 10 afterward"],
      explanation:
        "A for-loop's three parts are optional. Leaving the init empty (count already 0) and looping while count <= 9 with count++ reproduces the same 10 iterations and the same ending value of 10.",
    },
    {
      id: "mp2-q17",
      type: "code",
      topic: "methods",
      difficulty: 2,
      points: 8,
      prompt:
        "Write a method that computes and returns (as a double) the series 1/3 + 2/5 + 3/7 + … + i/(2i+1). The upper bound i is a parameter.",
      referenceSolution:
        "public static double m(int i) {\n  double m = 0;\n  for (int j = 1; j <= i; j++)\n    m = m + ((double) j) / (2 * j + 1);\n  return m;\n}",
      rubric: ["Loops j from 1 to i", "Each term is j/(2j+1) with a double cast", "Returns the running sum"],
      explanation:
        "Term j is j/(2j+1). The must-do is the (double) cast — without it, j/(2j+1) is integer division and every term is 0. Accumulate into a double.",
    },
    {
      id: "mp2-q18",
      type: "code",
      topic: "control-flow",
      difficulty: 2,
      points: 6,
      prompt: "Write a method printing the numbers 1 to n, 7 per line, separated by one space.",
      referenceSolution:
        'public static void displayNumbers(int n) {\n  for (int i = 1; i <= n; i++)\n    if (i % 7 == 0)\n      System.out.println(i);\n    else\n      System.out.print(i + " ");\n}',
      rubric: ["Loops 1..n", "Newline after every 7th number (i % 7 == 0)", "Space between others"],
      explanation:
        "Printing 7-per-line is a modulo job: every i divisible by 7 ends the line with println; everyone else prints with a trailing space. The count of items per line is what you mod by.",
    },
    {
      id: "mp2-q19",
      type: "code",
      topic: "control-flow",
      difficulty: 3,
      points: 8,
      prompt:
        "Write a loop that displays this pattern:\n12345678987654321\n 234567898765432\n  3456789876543\n   45678987654\n    567898765\n     6789876\n      78987\n       898\n        9",
      referenceSolution:
        "for (int row = 1; row <= 9; row++) {\n  for (int column = 1; column < row; column++)\n    System.out.print(\" \");\n  for (int column = row; column <= 9; column++)\n    System.out.print(column);\n  for (int column = 8; column >= row; column--)\n    System.out.print(column);\n  System.out.println();\n}",
      rubric: ["Leading spaces increase with the row", "Ascending run row..9", "Descending run 8..row", "One println per row"],
      explanation:
        "Each row is three pieces: (row−1) leading spaces, an ascending run from row up to 9, then a descending run from 8 back down to row. Nesting the spaces and the two number-runs in separate inner loops keeps each piece simple.",
    },
    {
      id: "mp2-q20",
      type: "code",
      topic: "arrays",
      difficulty: 3,
      points: 8,
      prompt:
        "Write `static int[] buildHistogram(int[] nums)` where nums holds values 0–100. Return 10 counts for ranges 0–9, 10–19, …, 90–100. Example: {5,88,6,17,39,31,100,99,19,4,98,22,77,10} → {3,3,1,2,0,0,0,1,1,3}.",
      referenceSolution:
        "public static int[] buildHistogram(int[] nums) {\n  final int NUM_BINS = 10;\n  int[] result = new int[NUM_BINS];\n  for (int num : nums) {\n    int bin = num / 10;\n    if (num == 100) bin = 9;\n    result[bin]++;\n  }\n  return result;\n}",
      rubric: ["bin = num / 10 maps a value to its decade", "Special-cases 100 into bin 9", "Increments result[bin]"],
      explanation:
        "Integer division by 10 is the perfect bucketer: 0–9 → 0, 10–19 → 1, … But 100/10 = 10 would overflow the 10-slot array, so 100 is folded into the last bin (9). Off-by-one at the boundary is the whole trick.",
    },
    {
      id: "mp2-q21",
      type: "code",
      topic: "char-strings",
      difficulty: 2,
      points: 7,
      prompt:
        "Write `static String stripDigits(String str)` returning a copy of str with all digit characters removed. Handle special cases.",
      referenceSolution:
        'public static String stripDigits(String str) {\n  String result = "";\n  if (str == null)\n    return null;\n  for (int i = 0; i < str.length(); i++) {\n    if (!Character.isDigit(str.charAt(i)))\n      result += str.charAt(i);\n  }\n  return result;\n}',
      rubric: ["Null check (the 'special case')", "Walks each char", "Keeps only non-digits via Character.isDigit"],
      explanation:
        "Build a new string keeping only the characters that AREN'T digits (Character.isDigit tells you which). The special case to remember is a null input — guard it before calling .length() or you'll throw a NullPointerException.",
    },
  ],
};
