// Fresh, single-purpose drill questions for each of the 19 classic Java gotchas.
// These feed the "Practice by gotcha" chips (TrapDrill in gotcha mode) so every
// trap category has dedicated reps, beyond whatever the real exams happen to cover.

import type { Question } from "../types";

const S = "Gotcha Bank";

export const gotchaBank: Question[] = [
  // ---- integer division ----
  { id: "gb-intdiv-1", type: "short", topic: "types-operators", gotchas: ["integer-division"], difficulty: 1, points: 1, source: S,
    prompt: "What is `7 / 2` in Java?", answer: "3",
    explanation: "Two ints → integer division. The remainder is dropped BEFORE any decimal exists, so 7/2 is 3, not 3.5." },
  { id: "gb-intdiv-2", type: "short", topic: "types-operators", gotchas: ["integer-division"], difficulty: 1, points: 1, source: S,
    prompt: "What does `System.out.println(1 / 2);` print?", answer: "0",
    explanation: "1/2 with two ints is 0 (the 0.5 is thrown away). To get 0.5 you'd need 1.0/2 or 1/2.0." },
  { id: "gb-intdiv-3", type: "short", topic: "types-operators", gotchas: ["integer-division", "type-promotion"], difficulty: 2, points: 1, source: S,
    prompt: "What is `5 / 2.0`?", answer: "2.5",
    explanation: "One operand is a double, so the int is promoted and you get true division: 2.5. Mixing in a single double rescues the fraction." },

  // ---- type promotion ----
  { id: "gb-promo-1", type: "mc", topic: "types-operators", gotchas: ["type-promotion"], difficulty: 1, points: 1, source: S,
    prompt: "What is the type of `3 + 4.0`?", choices: ["int", "double", "float", "long"], correctIndex: 1,
    explanation: "Mixed arithmetic climbs to the widest type present. double wins over int, so the result is a double (7.0)." },
  { id: "gb-promo-2", type: "short", topic: "char-strings", gotchas: ["type-promotion", "char-arithmetic"], difficulty: 1, points: 1, source: S,
    prompt: "What is the type of the expression `'a' + 0`? (one word)", answer: "int",
    explanation: "A char promotes to its int code in arithmetic, so char + int is an int (97). Not a char and not a String." },
  { id: "gb-promo-3", type: "mc", topic: "types-operators", gotchas: ["type-promotion"], difficulty: 2, points: 1, source: S,
    prompt: "byte b = 10; The expression `b + 1` has what type?", choices: ["byte", "int", "short", "double"], correctIndex: 1,
    explanation: "byte and short are promoted to int before arithmetic, so b + 1 is an int. That's why `b = b + 1;` needs a cast but `b += 1;` doesn't." },

  // ---- char arithmetic ----
  { id: "gb-char-1", type: "short", topic: "char-strings", gotchas: ["char-arithmetic"], difficulty: 1, points: 1, source: S,
    prompt: "What does `System.out.println((char)('a' + 3));` print?", answer: "d",
    explanation: "'a' is 97; +3 is 100; casting back to char gives 'd'. Letters are just numbers you can do math on, then cast back." },
  { id: "gb-char-2", type: "short", topic: "char-strings", gotchas: ["char-arithmetic"], difficulty: 1, points: 1, source: S,
    prompt: "What is `'Z' - 'A'`?", answer: "25",
    explanation: "Subtracting two chars subtracts their codes (90 − 65 = 25) — the distance between them in the alphabet." },
  { id: "gb-char-3", type: "short", topic: "char-strings", gotchas: ["char-arithmetic"], difficulty: 2, points: 1, source: S,
    prompt: "What does `System.out.println('B' + 'C');` print?", answer: "133",
    explanation: "No String is involved, so it's int arithmetic: 66 + 67 = 133. To print \"BC\" you'd need to involve a String." },

  // ---- cast truncation ----
  { id: "gb-cast-1", type: "short", topic: "types-operators", gotchas: ["cast-truncation"], difficulty: 1, points: 1, source: S,
    prompt: "What is `(int) 3.99`?", answer: "3",
    explanation: "Casting a double to int chops off the fraction (it does NOT round). 3.99 becomes 3." },
  { id: "gb-cast-2", type: "short", topic: "types-operators", gotchas: ["cast-truncation"], difficulty: 2, points: 1, source: S,
    prompt: "What is `(int) -2.7`?", answer: "-2",
    explanation: "Casting truncates toward ZERO, not toward negative infinity. So -2.7 becomes -2, not -3." },
  { id: "gb-cast-3", type: "short", topic: "types-operators", gotchas: ["cast-truncation", "operator-precedence"], difficulty: 2, points: 1, source: S,
    prompt: "What is `(int) 7.0 / 2`?", answer: "3",
    explanation: "Cast binds tighter than /, so it's ((int)7.0)/2 = 7/2 = 3 (integer division). The cast happens first, then the division." },

  // ---- operator precedence ----
  { id: "gb-prec-1", type: "short", topic: "types-operators", gotchas: ["operator-precedence"], difficulty: 1, points: 1, source: S,
    prompt: "What is `2 + 3 * 4`?", answer: "14",
    explanation: "* before +, so 3*4 = 12, then +2 = 14. Multiplication binds tighter than addition, like in math." },
  { id: "gb-prec-2", type: "mc", topic: "control-flow", gotchas: ["operator-precedence"], difficulty: 2, points: 1, source: S,
    prompt: "What is `true || false && false`?", choices: ["true", "false"], correctIndex: 0,
    explanation: "&& binds tighter than ||, so it's true || (false && false) = true || false = true." },
  { id: "gb-prec-3", type: "short", topic: "types-operators", gotchas: ["operator-precedence"], difficulty: 1, points: 1, source: S,
    prompt: "What is `10 - 2 - 3`?", answer: "5",
    explanation: "Subtraction is left-associative: (10 − 2) − 3 = 8 − 3 = 5. Same-precedence operators run left to right." },

  // ---- short-circuit ----
  { id: "gb-sc-1", type: "short", topic: "control-flow", gotchas: ["short-circuit"], difficulty: 2, points: 1, source: S,
    prompt: "What does `System.out.println(false && (1/0 == 0));` print?", answer: "false",
    explanation: "&& short-circuits: once the left side is false, the right side is never evaluated — so the 1/0 never runs and there's no exception." },
  { id: "gb-sc-2", type: "mc", topic: "control-flow", gotchas: ["short-circuit"], difficulty: 1, points: 1, source: S,
    prompt: "In `a() || b()`, if a() returns true, is b() called?", choices: ["Yes", "No"], correctIndex: 1,
    explanation: "|| stops as soon as something is true. Since a() is true, the whole thing is true and b() is skipped — handy for guarding null checks." },
  { id: "gb-sc-3", type: "output", topic: "control-flow", gotchas: ["short-circuit"], difficulty: 2, points: 1, source: S,
    prompt: "What prints?", code: 'int x = 0;\nif (x != 0 && 10 / x > 1)\n  System.out.println("big");\nelse\n  System.out.println("safe");', answer: "safe",
    explanation: "x != 0 is false, so && short-circuits and 10/x is never evaluated — that's exactly how you avoid a divide-by-zero. Output: safe." },

  // ---- == vs .equals() ----
  { id: "gb-eq-1", type: "mc", topic: "oop-basics", gotchas: ["eq-vs-equals"], difficulty: 2, points: 1, source: S,
    prompt: 'What is `new String("hi") == new String("hi")`?', choices: ["true", "false"], correctIndex: 1,
    explanation: "== compares references. Two `new` Strings are different objects in memory, so == is false even though the text matches. Use .equals() for contents." },
  { id: "gb-eq-2", type: "mc", topic: "oop-basics", gotchas: ["eq-vs-equals"], difficulty: 1, points: 1, source: S,
    prompt: 'What is `"hi".equals("hi")`?', choices: ["true", "false"], correctIndex: 0,
    explanation: ".equals() compares CONTENTS, so identical text is true. This is the right way to compare Strings." },
  { id: "gb-eq-3", type: "mc", topic: "oop-basics", gotchas: ["eq-vs-equals"], difficulty: 2, points: 1, source: S,
    prompt: "To check if two objects have the same CONTENTS, you should use:", choices: ["==", ".equals()", "either one", "!="], correctIndex: 1,
    explanation: "== asks 'same object?'; .equals() asks 'same value?'. For contents (Strings, wrapper objects, your own classes) use .equals()." },

  // ---- ternary type ----
  { id: "gb-tern-1", type: "output", topic: "types-operators", gotchas: ["ternary-type"], difficulty: 3, points: 1, source: S,
    prompt: "What does `System.out.println(true ? 1 : 2.0);` print?", answer: "1.0",
    explanation: "A ternary has ONE result type. With an int and a double branch, both get promoted to double — so even though the true branch is `1`, it prints 1.0." },
  { id: "gb-tern-2", type: "short", topic: "types-operators", gotchas: ["ternary-type", "integer-division"], difficulty: 2, points: 1, source: S,
    prompt: "What is `(6 / 4 == 1) ? 2 : 3`?", answer: "2",
    explanation: "6/4 is integer division = 1, so 1 == 1 is true → the ternary gives 2." },

  // ---- string concat left-to-right ----
  { id: "gb-concat-1", type: "short", topic: "char-strings", gotchas: ["string-concat-ltr"], difficulty: 1, points: 1, source: S,
    prompt: 'What is the result of `1 + 2 + "x"`?', answer: "3x",
    explanation: "Left to right: 1 + 2 is arithmetic (3), then 3 + \"x\" is concatenation → \"3x\". The numbers add up before the String shows up." },
  { id: "gb-concat-2", type: "short", topic: "char-strings", gotchas: ["string-concat-ltr"], difficulty: 1, points: 1, source: S,
    prompt: 'What is the result of `"x" + 1 + 2`?', answer: "x12",
    explanation: "Once a String is on the left, every + after it concatenates: \"x\" + 1 → \"x1\", then + 2 → \"x12\". No addition happens." },
  { id: "gb-concat-3", type: "short", topic: "char-strings", gotchas: ["string-concat-ltr"], difficulty: 2, points: 1, source: S,
    prompt: 'What does `System.out.println(1 + 2 + "x" + 3 + 4);` print?', answer: "3x34",
    explanation: "Left to right: 1+2 = 3, +\"x\" → \"3x\", then +3 → \"3x3\", +4 → \"3x34\". The 3 and 4 are concatenated, not added, because a String already appeared." },

  // ---- modulo with negatives ----
  { id: "gb-mod-1", type: "short", topic: "types-operators", gotchas: ["modulo-negatives"], difficulty: 2, points: 1, source: S,
    prompt: "What is `-7 % 3`?", answer: "-1",
    explanation: "In Java, % takes the sign of the DIVIDEND (left side). -7 % 3 = -1, not 2. (Result = -7 − 3*(-7/3) = -7 − 3*(-2) = -1.)" },
  { id: "gb-mod-2", type: "short", topic: "types-operators", gotchas: ["modulo-negatives"], difficulty: 2, points: 1, source: S,
    prompt: "What is `7 % -3`?", answer: "1",
    explanation: "The sign follows the dividend (7, positive), so the result is +1. The sign of the divisor doesn't matter." },
  { id: "gb-mod-3", type: "short", topic: "types-operators", gotchas: ["modulo-negatives"], difficulty: 3, points: 1, source: S,
    prompt: "What is `-8 % 5`?", answer: "-3",
    explanation: "Dividend is negative, so the result is negative: -8 % 5 = -3. (-8 − 5*(-1) = -3.) Java doesn't wrap to a positive remainder." },

  // ---- pre/post increment ----
  { id: "gb-inc-1", type: "short", topic: "types-operators", gotchas: ["pre-post-increment"], difficulty: 1, points: 1, source: S,
    prompt: "After `int i = 5; int j = i++;`, what is j?", answer: "5",
    explanation: "POST-increment returns the OLD value first, then increments. j gets 5; i becomes 6 afterward." },
  { id: "gb-inc-2", type: "short", topic: "types-operators", gotchas: ["pre-post-increment"], difficulty: 1, points: 1, source: S,
    prompt: "After `int i = 5; int j = ++i;`, what is j?", answer: "6",
    explanation: "PRE-increment increments FIRST, then returns the new value. j gets 6, and i is 6 too." },
  { id: "gb-inc-3", type: "short", topic: "types-operators", gotchas: ["pre-post-increment"], difficulty: 3, points: 1, source: S,
    prompt: "What does `int i = 1; System.out.println(i++ + ++i);` print?", answer: "4",
    explanation: "i++ uses 1 (i→2); ++i makes i 3 and uses 3. So 1 + 3 = 4. Read each ++ in order: post uses-then-bumps, pre bumps-then-uses." },

  // ---- array index out of bounds ----
  { id: "gb-oob-1", type: "mc", topic: "arrays", gotchas: ["array-oob"], difficulty: 1, points: 1, source: S,
    prompt: "`int[] a = new int[5]; a[5] = 1;` causes…", choices: ["a compile error", "an ArrayIndexOutOfBoundsException at runtime", "nothing, it works", "a NullPointerException"], correctIndex: 1,
    explanation: "Valid indices are 0–4; a[5] is out of bounds. The compiler can't catch it, so it's a RUNTIME exception. Length 5 means last index 4." },
  { id: "gb-oob-2", type: "short", topic: "arrays", gotchas: ["array-oob"], difficulty: 1, points: 1, source: S,
    prompt: "For `new int[10]`, what is the highest valid index?", answer: "9",
    explanation: "Indices run 0 to length−1, so a length-10 array goes 0–9. The classic off-by-one is looping with <= length." },
  { id: "gb-oob-3", type: "mc", topic: "arrays", gotchas: ["array-oob"], difficulty: 2, points: 1, source: S,
    prompt: "Is an out-of-bounds array access caught at compile time or run time?", choices: ["Compile time", "Run time"], correctIndex: 1,
    explanation: "The index is usually only known while running, so Java checks at run time and throws ArrayIndexOutOfBoundsException then — not during compilation." },

  // ---- uninitialized local ----
  { id: "gb-uninit-1", type: "mc", topic: "methods", gotchas: ["uninitialized-local"], difficulty: 2, points: 1, source: S,
    prompt: "`int x; System.out.println(x);` (x is a local variable) results in…", choices: ["prints 0", "a compile error", "prints garbage", "a runtime error"], correctIndex: 1,
    explanation: "LOCAL variables have no default — using one before assigning is a compile error ('variable might not have been initialized'). Only FIELDS get defaults." },
  { id: "gb-uninit-2", type: "mc", topic: "oop-basics", gotchas: ["uninitialized-local"], difficulty: 2, points: 1, source: S,
    prompt: "An instance field `int count;` (never assigned) has what value?", choices: ["0", "garbage", "compile error", "null"], correctIndex: 0,
    explanation: "Fields ARE auto-initialized: numeric → 0, boolean → false, objects → null. That's the opposite of local variables, which must be set explicitly." },

  // ---- overloading ----
  { id: "gb-ovl-1", type: "mc", topic: "methods", gotchas: ["overloading"], difficulty: 2, points: 1, source: S,
    prompt: "Can you overload two methods that differ ONLY by return type?", choices: ["Yes", "No"], correctIndex: 1,
    explanation: "Overloading is decided by the PARAMETER list, not the return type. Same name + same parameters but different return type won't compile." },
  { id: "gb-ovl-2", type: "mc", topic: "methods", gotchas: ["overloading"], difficulty: 1, points: 1, source: S,
    prompt: "Are `void f(int x)` and `void f(double x)` valid overloads?", choices: ["Yes", "No"], correctIndex: 0,
    explanation: "Yes — they differ in parameter type, which is exactly what overloading keys on. The compiler picks based on the argument you pass." },

  // ---- reference vs value ----
  { id: "gb-ref-1", type: "mc", topic: "methods", gotchas: ["reference-vs-value"], difficulty: 2, points: 1, source: S,
    prompt: "A method takes an int and reassigns it inside. Does the caller's int change?", choices: ["Yes", "No"], correctIndex: 1,
    explanation: "Primitives are passed by value — the method gets a COPY. Reassigning it can't affect the caller's variable." },
  { id: "gb-ref-2", type: "mc", topic: "arrays", gotchas: ["reference-vs-value"], difficulty: 2, points: 1, source: S,
    prompt: "A method takes an int[] and sets element [0] = 99. Does the caller see the change?", choices: ["Yes", "No"], correctIndex: 0,
    explanation: "The reference is copied, but it still points at the SAME array. Mutating an element changes the shared object, so the caller sees it." },
  { id: "gb-ref-3", type: "mc", topic: "methods", gotchas: ["reference-vs-value"], difficulty: 3, points: 1, source: S,
    prompt: "A method does `arr = new int[3];` to its array parameter. Does the caller's array change?", choices: ["Yes", "No"], correctIndex: 1,
    explanation: "Reassigning the parameter only rebinds the local copy of the reference. The caller's variable still points at the original array — no change." },

  // ---- method dispatch ----
  { id: "gb-disp-1", type: "mc", topic: "polymorphism", gotchas: ["method-dispatch"], difficulty: 2, points: 1, source: S,
    prompt: "`Animal a = new Dog();` where Dog overrides speak(). `a.speak()` runs whose version?", choices: ["Animal's", "Dog's", "compile error", "neither"], correctIndex: 1,
    explanation: "Overridden instance methods dispatch on the ACTUAL object type (Dog), not the declared type (Animal). That's polymorphism — the real object decides." },
  { id: "gb-disp-2", type: "mc", topic: "polymorphism", gotchas: ["method-dispatch"], difficulty: 3, points: 1, source: S,
    prompt: "Which is decided by the ACTUAL (runtime) type, not the declared type?", choices: ["Which overridden method runs", "Which overloaded method is chosen", "A field access", "A static method call"], correctIndex: 0,
    explanation: "Only overridden INSTANCE method calls are dynamically dispatched. Overload resolution, field access, and static calls all use the declared (compile-time) type." },

  // ---- static vs instance ----
  { id: "gb-static-1", type: "mc", topic: "oop-basics", gotchas: ["static-vs-instance"], difficulty: 2, points: 1, source: S,
    prompt: "Can a static method use `this`?", choices: ["Yes", "No"], correctIndex: 1,
    explanation: "A static method belongs to the class, not any object, so there's no `this`. That's why static methods can't touch instance members directly." },
  { id: "gb-static-2", type: "mc", topic: "oop-basics", gotchas: ["static-vs-instance"], difficulty: 2, points: 1, source: S,
    prompt: "Can a static method directly read a non-static (instance) field?", choices: ["Yes", "No, not without an object"], correctIndex: 1,
    explanation: "No — an instance field needs an object, but a static method has no `this`. You'd have to pass in or create an object to reach it." },
  { id: "gb-static-3", type: "mc", topic: "oop-basics", gotchas: ["static-vs-instance"], difficulty: 1, points: 1, source: S,
    prompt: "Can an instance method use a static field?", choices: ["Yes", "No"], correctIndex: 0,
    explanation: "Yes. Instance methods can reach everything — both instance and static members. The restriction only runs the other way (static can't reach instance)." },

  // ---- super & this ----
  { id: "gb-super-1", type: "mc", topic: "inheritance", gotchas: ["super-this"], difficulty: 2, points: 1, source: S,
    prompt: "Where must a `super(...)` call appear in a constructor?", choices: ["The first statement", "The last statement", "Anywhere", "It can't appear in a constructor"], correctIndex: 0,
    explanation: "If you call super(...), it must be the FIRST statement — the parent has to be built before the child adds to it. (If you omit it, Java inserts super() for you.)" },
  { id: "gb-super-2", type: "mc", topic: "inheritance", gotchas: ["super-this"], difficulty: 2, points: 1, source: S,
    prompt: "`this()` inside a constructor does what?", choices: ["Calls the parent constructor", "Calls another constructor in the SAME class", "Creates a new object", "Nothing"], correctIndex: 1,
    explanation: "this() chains to another constructor in the same class (super() chains to the parent's). Both must be the first statement." },

  // ---- exception / catch order ----
  { id: "gb-exc-1", type: "mc", topic: "exceptions", gotchas: ["exception-order"], difficulty: 3, points: 1, source: S,
    prompt: "Catching `Exception` BEFORE `IOException` (a subclass) causes…", choices: ["nothing special", "a compile error: the IOException catch is unreachable", "a runtime error", "both run"], correctIndex: 1,
    explanation: "A broad catch first would swallow everything, leaving the specific catch unreachable — Java flags that at compile time. Order catches most-specific first." },
  { id: "gb-exc-2", type: "mc", topic: "exceptions", gotchas: ["exception-order"], difficulty: 2, points: 1, source: S,
    prompt: "Catch blocks should be ordered…", choices: ["most general to most specific", "most specific to most general", "order doesn't matter", "alphabetically"], correctIndex: 1,
    explanation: "Specific first, general last. Otherwise a parent type (like Exception) catches everything before the specific handlers get a chance." },
  { id: "gb-exc-3", type: "mc", topic: "exceptions", gotchas: ["exception-order"], difficulty: 2, points: 1, source: S,
    prompt: "Does a `finally` block run if the try block throws an exception that IS caught?", choices: ["Yes, always", "No", "Only if there's no catch"], correctIndex: 0,
    explanation: "finally runs no matter what — exception or not, caught or not, even after a return. It's where you put cleanup that must always happen." },
];
