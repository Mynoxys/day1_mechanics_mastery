// Midterm chapters — L01–L09. Built to the Summer 2026 lecture decks; concepts
// taught "explain, don't tell" with the trap each one hides, then drills.

import type { Lecture } from "./types";

export const midtermLectures: Lecture[] = [
  // ===================================================================== L01
  {
    id: "l01",
    code: "L01",
    title: "Introduction to Programming",
    examScope: "midterm",
    topic: "types-operators",
    oneLiner: "What a program is, and how Java runs it",
    bigPicture:
      "A program is a recipe a computer follows exactly — no guessing, no common sense. Java's twist: you write source, the compiler translates it to bytecode, and the JVM runs that bytecode anywhere. Understanding this compile-then-run pipeline is what makes error messages make sense.",
    sections: [
      {
        heading: "Compile, then run",
        idea: "You write `.java` source; `javac` checks it and produces `.class` bytecode; the JVM executes the bytecode. Two separate steps — and errors can happen at either one.",
        detail:
          "Because compiling and running are separate, an error caught while compiling (a typo, a missing semicolon, a type mismatch) NEVER lets the program run at all. An error that only appears while running (dividing by zero, going off the end of an array) compiled just fine.",
        code: "javac Hello.java   // compile  → Hello.class (bytecode)\njava Hello         // run     → JVM executes it",
        trap:
          "Exam questions love to ask 'syntax error, runtime error, or logic error?' Syntax = compiler rejects it (never runs). Runtime = crashes while running. Logic = runs fine but gives the wrong answer.",
      },
      {
        heading: "The shape of a Java program",
        idea: "Code lives inside a class; execution starts in `public static void main(String[] args)`. The JVM looks for exactly that method to begin.",
        code: 'public class Hello {\n  public static void main(String[] args) {\n    System.out.println("Hello, world");\n  }\n}',
        codeCaption:
          "`main` is the entry point. println prints its argument and adds a newline; print leaves the cursor on the same line.",
      },
      {
        heading: "Comments and case-sensitivity",
        idea: "`//` comments to end of line, `/* ... */` spans lines. Java is case-sensitive: `Main`, `main`, and `MAIN` are three different names.",
        trap:
          "`System.out.println` must be spelled and capitalized exactly. A capitalization slip is the #1 cause of a 'cannot find symbol' compile error.",
      },
    ],
    drills: [
      { id: "l01-d1", type: "mc", topic: "types-operators", difficulty: 1, points: 1, source: "Learn L01",
        prompt: "Dividing by zero with ints — what kind of error?", choices: ["Compile (syntax) error", "Runtime error", "Logic error", "No error"], correctIndex: 1,
        explanation: "It compiles fine; the crash (ArithmeticException) only happens when that line actually runs → runtime error." },
      { id: "l01-d2", type: "mc", topic: "methods", difficulty: 1, points: 1, source: "Learn L01",
        prompt: "Where does a Java program start executing?", choices: ["The top of the file", "The first class", "The main method", "The first println"], correctIndex: 2,
        explanation: "The JVM looks specifically for public static void main(String[] args) and starts there." },
      { id: "l01-d3", type: "short", topic: "types-operators", difficulty: 1, points: 1, source: "Learn L01",
        prompt: "What command turns Hello.java into bytecode? (one word)", answer: "javac", acceptable: ["javac hello.java"],
        explanation: "javac is the compiler; `java` then runs the resulting bytecode." },
    ],
  },

  // ===================================================================== L02
  {
    id: "l02",
    code: "L02",
    title: "Elementary Programming",
    examScope: "midterm",
    topic: "types-operators",
    oneLiner: "Variables, primitive types, and the arithmetic that trips everyone",
    bigPicture:
      "This is the single most heavily-tested chapter on the midterm. Almost every 'what is the output' trick lives here: integer division, type promotion, and casting. Get these three reflexes solid and you've defused most of the exam's traps.",
    gotchas: ["integer-division", "type-promotion", "cast-truncation", "pre-post-increment", "operator-precedence"],
    sections: [
      {
        heading: "Variables and primitive types",
        idea: "A variable is a named box of a fixed type. The common primitives: `int` (whole numbers), `double` (decimals), `boolean` (true/false), `char` (one character), plus `long`, `float`, `byte`, `short`.",
        code: "int count = 5;\ndouble price = 9.99;\nboolean done = false;\nchar grade = 'A';",
        codeCaption: "char literals use single quotes ('A'); String literals use double quotes (\"A\"). They are NOT the same type.",
      },
      {
        heading: "Integer division — the #1 trap",
        idea: "When BOTH operands are ints, `/` does integer division: it throws away the remainder. So `5 / 2` is 2, not 2.5. The decimal never even gets computed.",
        code: "int a = 5 / 2;        // 2  (not 2.5)\ndouble b = 5 / 2;     // 2.0 — division was int FIRST, then widened\ndouble c = 5.0 / 2;   // 2.5 — one double makes it real division",
        codeCaption: "Line b is the classic miss: the division happens in int (=2) BEFORE the result is stored in a double.",
        trap:
          "If you want a real (decimal) answer, at least one operand must be a double. `(double)sum / count` works; `(double)(sum / count)` does NOT — the damage is already done inside the parens.",
      },
      {
        heading: "Type promotion",
        idea: "Mix types in an expression and Java promotes everything to the widest one present. int + double → double; anything + a double → double.",
        code: "int x = 3;\ndouble y = 2;\n// x + y  →  double  (3.0 + 2.0 = 5.0)",
        trap: "byte and short get promoted to int before arithmetic — that's why `byte b = b + 1;` needs a cast but `b += 1;` doesn't.",
      },
      {
        heading: "Casting truncates (it doesn't round)",
        idea: "`(int)` chops off the fractional part toward zero. `(int)3.99` is 3; `(int)-2.7` is -2 (toward zero, not -3).",
        code: "(int) 3.99   // 3\n(int) -2.7   // -2\n(int) 7.0 / 2  // ((int)7.0)/2 = 7/2 = 3  (cast binds tighter than /)",
        trap: "Casting rounds toward zero, never to nearest. Use Math.round() if you actually want rounding.",
      },
      {
        heading: "Increment, compound assignment, precedence",
        idea: "`x++` uses the old value then adds 1; `++x` adds 1 then uses the new value. `x += 5` is just `x = x + 5`. Precedence: `* / %` before `+ -`, and arithmetic before comparisons.",
        code: "int i = 5;\nint j = i++;   // j = 5, then i becomes 6\nint k = ++i;   // i becomes 7, k = 7\n// 2 + 3 * 4  →  14  (× before +)",
        trap: "Post vs pre matters only when you USE the value in the same expression. `i++` alone and `++i` alone both just add 1.",
      },
    ],
    drills: [
      { id: "l02-d1", type: "short", topic: "types-operators", gotchas: ["integer-division"], difficulty: 1, points: 1, source: "Learn L02",
        prompt: "What is `9 / 4`?", answer: "2", explanation: "Two ints → integer division drops the remainder: 9/4 = 2." },
      { id: "l02-d2", type: "short", topic: "types-operators", gotchas: ["integer-division", "type-promotion"], difficulty: 2, points: 1, source: "Learn L02",
        prompt: "What does `double d = 7 / 2;` store in d?", answer: "3.0", acceptable: ["3"],
        explanation: "7/2 is int division = 3 FIRST, then widened to 3.0. The double type can't rescue division that already happened in int." },
      { id: "l02-d3", type: "short", topic: "types-operators", gotchas: ["cast-truncation"], difficulty: 1, points: 1, source: "Learn L02",
        prompt: "What is `(int) 8.99`?", answer: "8", explanation: "Casting truncates toward zero — the .99 is dropped, giving 8 (not 9)." },
      { id: "l02-d4", type: "mc", topic: "types-operators", gotchas: ["type-promotion"], difficulty: 1, points: 1, source: "Learn L02",
        prompt: "What type is `5 + 2.0`?", choices: ["int", "double", "float", "long"], correctIndex: 1,
        explanation: "A double in the mix promotes the whole expression to double (7.0)." },
      { id: "l02-d5", type: "short", topic: "types-operators", gotchas: ["pre-post-increment"], difficulty: 2, points: 1, source: "Learn L02",
        prompt: "After `int i = 4; int j = i++;`, what is j?", answer: "4",
        explanation: "Post-increment hands back the OLD value (4) first, then i becomes 5." },
      { id: "l02-d6", type: "code", topic: "types-operators", gotchas: ["integer-division", "cast-truncation"], difficulty: 2, points: 1, source: "Learn L02",
        prompt: "Given ints `sum` and `n`, write one line storing their true (decimal) average in a double `avg`.",
        referenceSolution: "double avg = (double) sum / n;",
        rubric: ["Casts to double before dividing", "Not (double)(sum/n)"],
        explanation: "Cast one operand first so the division runs in floating point. (double)(sum/n) would integer-divide first, then widen — too late." },
    ],
  },

  // ===================================================================== L03
  {
    id: "l03",
    code: "L03",
    title: "Selections",
    examScope: "midterm",
    topic: "control-flow",
    oneLiner: "if / else, boolean logic, switch — and short-circuiting",
    bigPicture:
      "Selections are how a program makes decisions. The exam tests whether you can trace boolean logic precisely (operator precedence, short-circuiting) and whether you know the syntax traps: dangling else, switch fall-through, and = vs ==.",
    gotchas: ["short-circuit", "operator-precedence", "eq-vs-equals"],
    sections: [
      {
        heading: "Booleans and relational operators",
        idea: "Conditions evaluate to a boolean (true/false). Relational operators: `<  >  <=  >=  ==  !=`. Use `==` to compare PRIMITIVES; never use `=` (assignment) where you mean `==`.",
        code: "int x = 5;\nif (x == 5) { ... }   // comparison\n// if (x = 5)         // ERROR: that's assignment, not a boolean",
        trap: "`if (x = 5)` is a compile error in Java (an int isn't a boolean) — a small mercy compared to C. But `==` vs `.equals()` for OBJECTS is the real trap (see L04).",
      },
      {
        heading: "Logical operators and short-circuiting",
        idea: "`&&` (and), `||` (or), `!` (not). They short-circuit: `&&` stops at the first false, `||` stops at the first true — the rest is never evaluated.",
        code: "if (x != 0 && 10 / x > 1) { ... }   // safe: if x==0, the division is skipped",
        codeCaption: "Short-circuiting lets you guard a risky operation with a cheap check on its left.",
        trap: "Precedence: `&&` binds TIGHTER than `||`. So `a || b && c` means `a || (b && c)`, not `(a || b) && c`.",
      },
      {
        heading: "if / else and the dangling else",
        idea: "Without braces, an `else` attaches to the nearest unmatched `if`, and only ONE statement belongs to an if/else. Always use braces to be safe.",
        code: 'if (x > 0)\n  System.out.print("pos");\nSystem.out.print("!");   // NOT part of the if — always runs',
        trap: "A statement after an unbraced if/else is not controlled by it. That second print runs no matter what x is.",
      },
      {
        heading: "switch and fall-through",
        idea: "`switch` jumps to the matching `case`. Without a `break`, execution FALLS THROUGH into the cases below it until a break or the end.",
        code: 'switch (n) {\n  case 1: System.out.print("one");\n  case 2: System.out.print("two"); break;\n  default: System.out.print("other");\n}\n// n == 1 prints "onetwo" (no break after case 1!)',
        trap: "Missing breaks cause fall-through. If a switch prints more than you expect, count the missing breaks.",
      },
    ],
    drills: [
      { id: "l03-d1", type: "mc", topic: "control-flow", gotchas: ["operator-precedence"], difficulty: 2, points: 1, source: "Learn L03",
        prompt: "What is `true || false && false`?", choices: ["true", "false"], correctIndex: 0,
        explanation: "&& first: false && false = false; then true || false = true." },
      { id: "l03-d2", type: "short", topic: "control-flow", gotchas: ["short-circuit"], difficulty: 2, points: 1, source: "Learn L03",
        prompt: "Output of `System.out.println(false && (1/0 == 0));`?", answer: "false",
        explanation: "&& short-circuits on the false left side, so 1/0 never runs — no exception. Prints false." },
      { id: "l03-d3", type: "output", topic: "control-flow", difficulty: 2, points: 1, source: "Learn L03",
        prompt: "What prints?", code: 'int n = 1;\nswitch (n) {\n  case 1: System.out.print("a");\n  case 2: System.out.print("b"); break;\n  default: System.out.print("c");\n}', answer: "ab",
        explanation: "case 1 has no break, so it falls through into case 2 (prints b) which then breaks. Output: ab." },
      { id: "l03-d4", type: "output", topic: "control-flow", difficulty: 2, points: 1, source: "Learn L03",
        prompt: "What prints?", code: 'int x = -3;\nif (x > 0)\n  System.out.print("P");\nSystem.out.print("Q");', answer: "Q",
        explanation: "x>0 is false so P is skipped, but the unbraced Q is not part of the if — it always prints. Output: Q." },
    ],
  },

  // ===================================================================== L04
  {
    id: "l04",
    code: "L04",
    title: "Math, Characters, and Strings",
    examScope: "midterm",
    topic: "char-strings",
    oneLiner: "Math methods, char-as-number, and immutable Strings",
    bigPicture:
      "Two big ideas: a char is secretly a number (its Unicode code), so you can do arithmetic on letters; and a String is an immutable object you compare with .equals(), not ==. Both are exam favorites.",
    gotchas: ["char-arithmetic", "eq-vs-equals", "string-concat-ltr"],
    sections: [
      {
        heading: "Math methods and Math.random()",
        idea: "`Math.pow(a,b)`, `Math.sqrt`, `Math.abs`, `Math.round`, `Math.max/min`. `Math.random()` returns a double in [0, 1).",
        code: "// random int in [low, high] inclusive:\nint r = (int)(Math.random() * (high - low + 1)) + low;",
        codeCaption: "Multiply by the COUNT of values (high − low + 1), cast to int, then shift up by low.",
      },
      {
        heading: "A char is a number",
        idea: "Each char has a Unicode code ('A' is 65, 'a' is 97). In arithmetic, a char promotes to its int code. So 'A' + 1 is 66 (an int), not 'B'.",
        code: "char c = 'A';\nint code = c + 1;          // 66 (int)\nchar next = (char)(c + 1); // 'B' — cast back to see a letter\nint gap = 'Z' - 'A';       // 25 — distance in the alphabet",
        trap: "`System.out.println('A' + 1)` prints 66, not B. To get a letter you must cast back to char. And ('a' - 'a') = 0 lets you turn a letter into a 0–25 index.",
      },
      {
        heading: "Strings are objects — compare with .equals()",
        idea: "A String is an object. `==` asks 'same object in memory?'; `.equals()` asks 'same characters?'. For content, always use `.equals()`.",
        code: 'String a = new String("hi");\nString b = new String("hi");\na == b        // false (two objects)\na.equals(b)   // true  (same text)',
        trap: "Using == on Strings sometimes 'works' (for literals that share one interned object) and sometimes doesn't (for new Strings). That inconsistency is exactly why you must use .equals().",
      },
      {
        heading: "Useful String methods + concatenation",
        idea: "`length()`, `charAt(i)`, `substring(begin)`, `substring(begin,end)` (end exclusive), `indexOf`, `toUpperCase`. The `+` operator concatenates left-to-right.",
        code: '"Abraham".substring(3)      // "aham" (index 3 to end)\n"Abraham".substring(3, 5)   // "ah"  (3 up to but not 5)\n1 + 2 + "x"                 // "3x"  (1+2 first, then concat)\n"x" + 1 + 2                 // "x12" (String first → all concat)',
        trap: "Concatenation goes strictly left to right. Once a String appears, everything after it is glued on as text — numbers stop adding.",
      },
    ],
    drills: [
      { id: "l04-d1", type: "short", topic: "char-strings", gotchas: ["char-arithmetic"], difficulty: 1, points: 1, source: "Learn L04",
        prompt: "What does `System.out.println('A' + 1);` print? ('A' is 65)", answer: "66",
        explanation: "char promotes to its int code: 65 + 1 = 66. Prints the number, not 'B'." },
      { id: "l04-d2", type: "short", topic: "char-strings", gotchas: ["char-arithmetic"], difficulty: 2, points: 1, source: "Learn L04",
        prompt: "What is `(char)('a' + 2)`?", answer: "c", explanation: "'a' is 97; +2 = 99; cast back to char = 'c'." },
      { id: "l04-d3", type: "mc", topic: "char-strings", gotchas: ["eq-vs-equals"], difficulty: 2, points: 1, source: "Learn L04",
        prompt: 'Best way to test if two Strings have the same text:', choices: ["s1 == s2", "s1.equals(s2)", "s1 = s2", "s1 - s2 == 0"], correctIndex: 1,
        explanation: "== compares object identity; .equals() compares contents. Use .equals() for text." },
      { id: "l04-d4", type: "short", topic: "char-strings", gotchas: ["string-concat-ltr"], difficulty: 2, points: 1, source: "Learn L04",
        prompt: 'Result of `1 + 2 + "x" + 3`?', answer: "3x3",
        explanation: "Left to right: 1+2=3, +\"x\"→\"3x\", +3→\"3x3\". The 3 is appended, not added." },
      { id: "l04-d5", type: "short", topic: "char-strings", difficulty: 2, points: 1, source: "Learn L04",
        prompt: 'What is `"Abraham".substring(3)`?', answer: "aham",
        explanation: "substring(3) returns from index 3 to the end: A(0)b(1)r(2)a(3)... → \"aham\"." },
    ],
  },

  // ===================================================================== L05
  {
    id: "l05",
    code: "L05",
    title: "Loops",
    examScope: "midterm",
    topic: "control-flow",
    oneLiner: "while, do-while, for — and not going off by one",
    bigPicture:
      "Loops repeat work. The exam tests loop TRACING (run it in your head and report the final value/output) and the boundary details: do-while runs at least once, and `<=` vs `<` decides whether you overshoot by one.",
    gotchas: ["pre-post-increment", "array-oob"],
    sections: [
      {
        heading: "The three loops",
        idea: "`while` checks first (may run zero times). `do-while` runs the body once THEN checks (always at least one run). `for` packs init, condition, and update on one line.",
        code: "for (int i = 0; i < 5; i++) { ... }   // runs for i = 0,1,2,3,4\nint i = 0;\nwhile (i < 5) { ...; i++; }           // same\nint j = 0;\ndo { ...; j++; } while (j < 5);       // body runs, THEN tests",
        trap: "do-while always executes at least once, even if the condition is false from the start. while/for can run zero times.",
      },
      {
        heading: "Tracing a loop precisely",
        idea: "To trace, write down the variable after EACH pass and exactly when the condition is checked. With `i++` in the condition, the increment still happens on the failing check.",
        code: "int count = 0;\ndo {\n  // body\n} while (count++ < 9);\n// count++ tests 9<9 (false) then still increments → count ends at 10",
        codeCaption: "The post-increment fires even on the final, failing test — so count finishes at 10, not 9.",
        trap: "`while (count++ < 9)` increments count one extra time on the exit check. Track the value at the moment of each comparison.",
      },
      {
        heading: "Nested loops and off-by-one",
        idea: "A loop inside a loop runs the inner one fully for each step of the outer. The classic bug is `<=` vs `<`: looping `i <= n.length` walks one index too far.",
        code: "for (int row = 0; row < 3; row++)\n  for (int col = 0; col < 3; col++)\n    System.out.print(row + \",\" + col + \" \");\n// inner runs 3× for every row → 9 prints",
        trap: "Array indices run 0..length−1, so loop with `i < arr.length` (NOT `<=`). `<=` gives ArrayIndexOutOfBoundsException at the last step.",
      },
      {
        heading: "break and continue",
        idea: "`break` exits the loop immediately; `continue` skips to the next iteration. Both apply to the innermost loop.",
      },
    ],
    drills: [
      { id: "l05-d1", type: "short", topic: "control-flow", gotchas: ["pre-post-increment"], difficulty: 2, points: 1, source: "Learn L05",
        prompt: "Final value of count?", code: "int count = 0;\ndo { } while (count++ < 9);", answer: "10",
        explanation: "Tests with the current value but increments each time; the failing test (9<9) still bumps count to 10." },
      { id: "l05-d2", type: "short", topic: "control-flow", difficulty: 1, points: 1, source: "Learn L05",
        prompt: "How many times does the body run? `for (int i = 1; i <= 5; i++)`", answer: "5",
        explanation: "i = 1,2,3,4,5 → 5 iterations (stops when i becomes 6)." },
      { id: "l05-d3", type: "mc", topic: "control-flow", difficulty: 1, points: 1, source: "Learn L05",
        prompt: "Which loop always runs its body at least once?", choices: ["while", "for", "do-while", "none"], correctIndex: 2,
        explanation: "do-while checks AFTER the body, so the body runs once before the condition is ever tested." },
      { id: "l05-d4", type: "short", topic: "control-flow", difficulty: 2, points: 1, source: "Learn L05",
        prompt: "How many stars print?", code: "for (int i = 0; i < 3; i++)\n  for (int j = 0; j < 4; j++)\n    System.out.print('*');", answer: "12",
        explanation: "Inner runs 4× for each of the 3 outer passes: 3 × 4 = 12." },
    ],
  },

  // ===================================================================== L06
  {
    id: "l06",
    code: "L06",
    title: "Methods",
    examScope: "midterm",
    topic: "methods",
    oneLiner: "Reusable blocks, return values, and pass-by-value",
    bigPicture:
      "Methods package code so you call it by name. The exam's favorite method topics: pass-by-value (a method can't change your int), overloading (same name, different parameters), and matching the return type. Pass-by-value is the one that decides a dozen trace questions.",
    gotchas: ["reference-vs-value", "overloading"],
    sections: [
      {
        heading: "Defining and calling",
        idea: "A method has a return type, a name, and a parameter list. `void` means it returns nothing; otherwise every path must `return` a value of the declared type.",
        code: "public static int square(int n) {\n  return n * n;\n}\n// call:  int r = square(5);   // r = 25",
        trap: "If the declared return type is `String` but you `return` an int, that's a compile error — the returned value's type must match.",
      },
      {
        heading: "Pass-by-value — the big one",
        idea: "Java copies the ARGUMENT into the parameter. For a primitive, the method gets a copy of the value — changing the parameter cannot change the caller's variable.",
        code: "static void bump(int x) { x = x + 1; }\nint a = 5;\nbump(a);\n// a is still 5 — bump changed only its own copy",
        trap: "A method can never reassign your int/double/char. If a trace question 'swaps' two primitives via a method, the caller's values do NOT change.",
      },
      {
        heading: "...but references are copied too",
        idea: "For an object/array, the COPY is a copy of the reference — it still points at the same object. So the method can MUTATE the shared object (visible to the caller), but REASSIGNING the parameter is not.",
        code: "static void zero(int[] arr) { arr[0] = 0; }   // caller SEES this\nstatic void swap(int[] arr) { arr = new int[3]; } // caller does NOT see this",
        codeCaption: "Mutating through the reference is visible; rebinding the reference is local. This distinction decides array trace questions.",
        trap: "See [[reference-vs-value]]: 'changes the object' (visible) vs 'reassigns the parameter' (invisible). Read the method carefully to tell which it does.",
      },
      {
        heading: "Overloading",
        idea: "Two methods can share a name if their PARAMETER lists differ (count, types, or order). The compiler picks by the arguments. Return type alone is NOT enough to overload.",
        code: "static void print(int x) { ... }\nstatic void print(double x) { ... }   // OK, different param type\n// static int print(int x)             // ERROR: same params, only return differs",
        trap: "You cannot overload by return type only. `int f(int)` and `String f(int)` collide.",
      },
    ],
    drills: [
      { id: "l06-d1", type: "mc", topic: "methods", gotchas: ["reference-vs-value"], difficulty: 2, points: 1, source: "Learn L06",
        prompt: "A method takes an int and does `x = x + 100;`. Does the caller's variable change?", choices: ["Yes", "No"], correctIndex: 1,
        explanation: "Primitives are passed by value — the method edits its own copy. The caller is unaffected." },
      { id: "l06-d2", type: "mc", topic: "methods", gotchas: ["reference-vs-value"], difficulty: 2, points: 1, source: "Learn L06",
        prompt: "A method takes an int[] and does `arr[0] = 99;`. Does the caller see the change?", choices: ["Yes", "No"], correctIndex: 0,
        explanation: "The reference points at the same array, so mutating an element is visible to the caller." },
      { id: "l06-d3", type: "mc", topic: "methods", gotchas: ["overloading"], difficulty: 2, points: 1, source: "Learn L06",
        prompt: "Can you overload two methods that differ ONLY in return type?", choices: ["Yes", "No"], correctIndex: 1,
        explanation: "Overloading is decided by the parameter list, not the return type — same name + same params won't compile." },
      { id: "l06-d4", type: "code", topic: "methods", difficulty: 1, points: 1, source: "Learn L06",
        prompt: "Write a method `static int max(int a, int b)` returning the larger value.",
        referenceSolution: "public static int max(int a, int b) {\n  if (a > b) return a;\n  else return b;\n}",
        rubric: ["Returns an int on every path", "Compares a and b and returns the larger"],
        explanation: "Every path returns an int matching the declared type. (return a > b ? a : b; also works.)" },
    ],
  },

  // ===================================================================== L07
  {
    id: "l07",
    code: "L07",
    title: "Arrays",
    examScope: "midterm",
    topic: "arrays",
    oneLiner: "Fixed-size lists, indexed 0..length-1, that live as references",
    bigPicture:
      "An array holds many values of one type under one name, reached by index. Two things the exam checks: indices run 0 to length−1 (off-by-one → exception), and arrays are objects you pass by reference (so methods can change them).",
    gotchas: ["array-oob", "reference-vs-value"],
    sections: [
      {
        heading: "Declare, create, default values",
        idea: "`int[] a = new int[5];` makes a 5-slot array. `new` is what allocates it. Numeric slots start at 0, booleans at false, object slots at null.",
        code: "int[] a = new int[5];        // [0, 0, 0, 0, 0]\nint[] b = {10, 20, 30};      // length 3, given values\nString[] s = new String[3];  // [null, null, null]",
        trap: "An array of objects starts full of nulls — only the array exists, not the objects inside. Using s[0] before assigning a real String throws NullPointerException." ,
      },
      {
        heading: "Indexing and length",
        idea: "Valid indices are 0 to length−1. `a.length` (a field, no parentheses) gives the size. Looping should use `i < a.length`.",
        code: "for (int i = 0; i < a.length; i++)\n  System.out.println(a[i]);",
        trap: "`a.length` (array, no parens) vs `s.length()` (String, with parens). And `i <= a.length` overshoots by one → ArrayIndexOutOfBoundsException.",
      },
      {
        heading: "Arrays are references (aliasing)",
        idea: "An array variable holds a reference to the array object. Assigning one array variable to another makes BOTH point at the same array — changing one changes the other.",
        code: "int[] x = {1, 2, 3};\nint[] y = x;      // same array, not a copy\ny[0] = 99;        // x[0] is now 99 too",
        trap: "`y = x` does NOT copy the array — it copies the reference. To truly copy, loop or use Arrays.copyOf." ,
      },
      {
        heading: "Passing arrays to methods",
        idea: "Because the reference is passed, a method can change the array's elements and the caller sees it. (Reassigning the parameter to a new array does not escape the method.)",
      },
    ],
    drills: [
      { id: "l07-d1", type: "short", topic: "arrays", gotchas: ["array-oob"], difficulty: 1, points: 1, source: "Learn L07",
        prompt: "For `new int[8]`, what is the highest valid index?", answer: "7",
        explanation: "Indices are 0..length−1, so a length-8 array goes 0–7." },
      { id: "l07-d2", type: "mc", topic: "arrays", gotchas: ["array-oob"], difficulty: 2, points: 1, source: "Learn L07",
        prompt: "`int[] a = new int[3]; a[3] = 1;` does what?", choices: ["Works fine", "Compile error", "ArrayIndexOutOfBoundsException at runtime", "NullPointerException"], correctIndex: 2,
        explanation: "Index 3 is out of bounds (valid 0–2). The compiler can't catch it; it throws at runtime." },
      { id: "l07-d3", type: "output", topic: "arrays", gotchas: ["reference-vs-value"], difficulty: 2, points: 1, source: "Learn L07",
        prompt: "What prints?", code: "int[] x = {1, 2, 3};\nint[] y = x;\ny[0] = 99;\nSystem.out.println(x[0]);", answer: "99",
        explanation: "y = x copies the reference, not the array. x and y are the same object, so y[0]=99 changes x[0] too." },
      { id: "l07-d4", type: "short", topic: "arrays", difficulty: 1, points: 1, source: "Learn L07",
        prompt: "How do you get an array's size? Write the expression for array `a`.", answer: "a.length", acceptable: ["a.length;"],
        explanation: "Arrays use the field `.length` (no parentheses). Strings use the method `.length()`." },
    ],
  },

  // ===================================================================== L08
  {
    id: "l08",
    code: "L08",
    title: "Multi-Dimensional Arrays",
    examScope: "midterm",
    topic: "arrays",
    oneLiner: "Arrays of arrays — grids, indexed [row][col]",
    bigPicture:
      "A 2D array is really an array whose elements are themselves arrays (the rows). You walk it with nested loops. The detail to nail: how to get the number of rows vs the number of columns.",
    gotchas: ["array-oob"],
    sections: [
      {
        heading: "An array of arrays",
        idea: "`int[][] grid = new int[3][4];` is 3 rows, each a 4-element array. Access with `grid[row][col]`.",
        code: "int[][] grid = new int[3][4];\ngrid[0][0] = 5;     // row 0, col 0\nint[][] m = {\n  {1, 2, 3},\n  {4, 5, 6}\n};                  // 2 rows, 3 cols",
        codeCaption: "First index is the row, second is the column.",
      },
      {
        heading: "Rows vs columns",
        idea: "`grid.length` is the number of ROWS. `grid[i].length` is the number of columns in row i.",
        code: "int rows = grid.length;        // 3\nint cols = grid[0].length;     // 4",
        trap: "`grid.length` = rows, `grid[r].length` = columns of that row. Mixing them up is the classic 2D off-by-one.",
      },
      {
        heading: "Nested-loop traversal",
        idea: "Outer loop over rows, inner over columns. To visit every cell in order, nest the column loop inside the row loop.",
        code: "for (int r = 0; r < grid.length; r++)\n  for (int c = 0; c < grid[r].length; c++)\n    System.out.print(grid[r][c] + \" \");",
        codeCaption: "Using grid[r].length (not a fixed number) handles ragged arrays where rows differ in length.",
      },
    ],
    drills: [
      { id: "l08-d1", type: "short", topic: "arrays", difficulty: 1, points: 1, source: "Learn L08",
        prompt: "For `int[][] g = new int[3][5];`, what is `g.length`?", answer: "3",
        explanation: "g.length is the number of rows = 3. The columns are g[i].length = 5." },
      { id: "l08-d2", type: "short", topic: "arrays", difficulty: 2, points: 1, source: "Learn L08",
        prompt: "For `int[][] g = new int[3][5];`, what is `g[0].length`?", answer: "5",
        explanation: "g[0] is the first row, a 5-element array, so its length is 5 (the column count)." },
      { id: "l08-d3", type: "short", topic: "arrays", difficulty: 2, points: 1, source: "Learn L08",
        prompt: "How many total cells does `new int[3][4]` have?", answer: "12",
        explanation: "3 rows × 4 columns = 12 cells." },
    ],
  },

  // ===================================================================== L09
  {
    id: "l09",
    code: "L09",
    title: "Enumerated Types",
    examScope: "midterm",
    topic: "enums",
    oneLiner: "A type whose values are a fixed, named set",
    bigPicture:
      "An enum defines a type that can only be one of a fixed set of named constants — like Day.MONDAY or Suit.HEARTS. It's safer and clearer than using int codes, and it plays nicely with switch.",
    sections: [
      {
        heading: "Declaring and using an enum",
        idea: "An enum lists its allowed values. A variable of that type can only hold one of them — the compiler rejects anything else.",
        code: "enum Day { MON, TUE, WED, THU, FRI }\nDay d = Day.WED;\nif (d == Day.WED) { ... }   // == is fine for enum constants",
        codeCaption: "Each constant is a single shared object, so == works for comparing enums.",
      },
      {
        heading: "Why enums beat int constants",
        idea: "With `int MON = 0; int TUE = 1;` nothing stops you from assigning 47. With an enum, only the listed values are possible — illegal states won't even compile.",
        trap: "Enums give compile-time safety. Using raw ints for categories lets garbage values slip in unnoticed.",
      },
      {
        heading: "values(), ordinal(), name()",
        idea: "`Day.values()` returns an array of all constants (great for looping). `d.ordinal()` is its position (0-based). `d.name()` is its text.",
        code: "for (Day day : Day.values())\n  System.out.println(day.ordinal() + \": \" + day.name());\n// 0: MON, 1: TUE, ...",
        trap: "ordinal() is 0-based: the FIRST constant has ordinal 0, not 1.",
      },
      {
        heading: "Enums in switch",
        idea: "switch on an enum lets you handle each constant; you write the bare constant name in each case (no `Day.` prefix).",
        code: "switch (d) {\n  case MON: ...; break;   // not case Day.MON\n  case FRI: ...; break;\n}",
      },
    ],
    drills: [
      { id: "l09-d1", type: "short", topic: "enums", difficulty: 1, points: 1, source: "Learn L09",
        prompt: "For `enum Color { RED, GREEN, BLUE }`, what is `Color.GREEN.ordinal()`?", answer: "1",
        explanation: "ordinal() is 0-based: RED=0, GREEN=1, BLUE=2." },
      { id: "l09-d2", type: "mc", topic: "enums", difficulty: 1, points: 1, source: "Learn L09",
        prompt: "What does `Color.values()` return?", choices: ["a String", "an array of all the enum constants", "the number of constants", "the first constant"], correctIndex: 1,
        explanation: "values() gives an array of every constant in declaration order — handy for looping." },
      { id: "l09-d3", type: "mc", topic: "enums", difficulty: 2, points: 1, source: "Learn L09",
        prompt: "Main advantage of an enum over `int` constants?", choices: ["Runs faster", "Only the listed values are possible (compile-time safety)", "Uses less memory", "Allows decimals"], correctIndex: 1,
        explanation: "An enum variable can only hold a declared constant — illegal values are caught at compile time, unlike loose ints." },
    ],
  },
];
