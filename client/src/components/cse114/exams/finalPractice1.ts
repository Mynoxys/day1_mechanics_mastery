// Transcribed verbatim from "CSE114 Final Practice 1" (+ official solutions).
// 20 questions + bonus, 300 points. Multi-part questions are split into atomic
// items. Covers inheritance, polymorphism, exceptions, strings, references, I/O.

import type { ExamSet } from "../types";

export const finalPractice1: ExamSet = {
  id: "final-practice-1",
  title: "Final Practice 1",
  examType: "final",
  durationMinutes: 150,
  blurb: "Sample Final — OOP terminology, inheritance & dispatch, exceptions, strings, references.",
  questions: [
    {
      id: "fp1-q1",
      type: "trace",
      topic: "inheritance",
      gotchas: ["eq-vs-equals", "array-oob"],
      difficulty: 1,
      points: 21,
      partialCredit: true,
      prompt: "Fill in the blanks.",
      fields: [
        { label: "Keyword to inherit a parent's data & methods", answer: "extends" },
        { label: "Primitive requiring the most memory", answer: "double", acceptable: ["long"] },
        { label: "Ancestor class of all Java classes", answer: "Object" },
        { label: "Command-line args are passed to the ___", answer: "main", acceptable: ["main method", "main()"] },
        { label: "Array of length N: lowest index", answer: "0" },
        { label: "Array of length N: highest index", answer: "N-1", acceptable: ["n-1"] },
        { label: "Method that determines object equality", answer: "equals", acceptable: ["equals()", ".equals()"] },
      ],
      explanation:
        "Core vocabulary: `extends` for inheritance, `Object` as the universal root, `main` as the program entry point, arrays indexed 0..N−1, and `equals()` (not ==) for comparing object CONTENTS. double and long both take 8 bytes; the expected answer is double.",
    },
    {
      id: "fp1-q2",
      type: "trace",
      topic: "types-operators",
      gotchas: ["type-promotion", "cast-truncation"],
      difficulty: 2,
      points: 12,
      partialCredit: true,
      prompt: "For `long newVariable = originalVariable;` …",
      fields: [
        { label: "A type for originalVariable that does NOT error (not long)", answer: "int", acceptable: ["char", "byte", "short"] },
        { label: "A type that WOULD cause a syntax error", answer: "double", acceptable: ["float"] },
        { label: "Fix it (keep newVariable a long), if originalVariable is that type", answer: "long newVariable = (long)originalVariable;", acceptable: ["long newVariable = (long) originalVariable"] },
      ],
      explanation:
        "Anything that widens INTO long is automatic (int/char/byte/short). A floating type (float/double) into long would lose the fraction, so Java refuses it without an explicit `(long)` cast that says 'yes, truncate it'.",
    },
    {
      id: "fp1-q3a",
      type: "output",
      topic: "control-flow",
      gotchas: ["short-circuit"],
      difficulty: 2,
      points: 7,
      prompt: "What is the output?",
      code:
        'int x = 3;\nboolean status = true;\nif ((x > 0) && (status) && !(x > 0))\n  System.out.println("Hello");\nelse\n  System.out.print("Goodbye");\nSystem.out.print("?");',
      answer: "Goodbye?",
      explanation:
        "(x>0) and !(x>0) can't both be true, so the && chain is false → the else runs, printing \"Goodbye\". The final `print(\"?\")` is NOT part of the else (no braces), so it always runs → \"Goodbye?\". Watch unbraced if/else with trailing statements.",
    },
    {
      id: "fp1-q3b",
      type: "output",
      topic: "methods",
      gotchas: ["reference-vs-value"],
      difficulty: 2,
      points: 8,
      prompt: "What is the output? (main calls t.foo(y) with int y = 3, but ignores the return.)",
      code:
        'public int foo(int y) {\n  int z = 1;\n  y = y + 1;\n  System.out.println("In foo, y is " + y);\n  return (z + y);\n}\n// main: int y = 3; t.foo(y); System.out.println("In main y is " + y);',
      answer: "In foo, y is 4\nIn main y is 3",
      explanation:
        "`y` is an int, passed by value — foo gets a COPY. Incrementing it inside foo prints 4, but main's own y was never touched, so it's still 3. Primitives never come back changed from a method.",
    },
    {
      id: "fp1-q4",
      type: "code",
      topic: "inheritance",
      gotchas: ["super-this"],
      difficulty: 2,
      points: 12,
      prompt: 'Explain the difference between "super" and "super()", and between "this" and "this()".',
      referenceSolution:
        "super   → a reference to the parent portion of this object; use it to call a parent METHOD or field, e.g. super.showme().\nsuper() → a CALL to the parent's constructor (first line of a constructor).\n\nthis    → a reference to the current object; this.field / this.method().\nthis()  → a CALL to another constructor in the SAME class (constructor chaining).",
      rubric: ["super/this = references to objects (parent part / current object)", "super()/this() = constructor CALLS"],
      explanation:
        "The pattern is the same for both: the bare word is a REFERENCE you dot into (super.x, this.x); adding parentheses turns it into a CONSTRUCTOR CALL — super() runs the parent's constructor, this() runs a sibling constructor in the same class.",
    },
    {
      id: "fp1-q5a",
      type: "output",
      topic: "control-flow",
      difficulty: 3,
      points: 5,
      prompt: "What is printed? (Note the missing breaks → fall-through.)",
      code:
        'int i = 1;\nfor (int j = 0; j < 5; j = j + 2) {\n  i = (i * i) + j;\n}\nswitch (i) {\n  case 3:   System.out.println("zero"); break;\n  case 13:  System.out.println("one");\n  case 175: System.out.println("two");\n  default:  System.out.println("default");\n}',
      answer: "one\ntwo\ndefault",
      explanation:
        "Loop: j=0→i=1; j=2→i=1+2=3; j=4→i=9+4=13; stop. switch(13) enters case 13 and, with no break, FALLS THROUGH into 175 and default. So it prints one, two, default. A missing break keeps executing the cases below it.",
    },
    {
      id: "fp1-q5b",
      type: "short",
      topic: "control-flow",
      difficulty: 1,
      points: 5,
      prompt: 'How many times does this print "Hello"?',
      code:
        'int x = 3;\nint y = 10;\nwhile (x < y) {\n  System.out.println("Hello");\n  x = x + 1;\n  y = y - 1;\n}',
      answer: "4",
      explanation:
        "x and y march toward each other by 1 each: (3,10)(4,9)(5,8)(6,7) print, then (7,6) fails x<y. Four prints. When two counters close in from both ends, they meet in half the steps.",
    },
    {
      id: "fp1-q5c",
      type: "short",
      topic: "control-flow",
      difficulty: 2,
      points: 5,
      prompt: "What is the output?",
      code:
        "int sum = 0;\nint j = 1;\ndo {\n  if (j % 5 < 2) sum += j;\n  j = j + 1;\n} while (j <= 5);\nSystem.out.println(sum);",
      answer: "6",
      explanation:
        "j runs 1..5. j%5<2 is true for j=1 (1<2) and j=5 (0<2); false for 2,3,4. So sum = 1 + 5 = 6.",
    },
    {
      id: "fp1-q6a",
      type: "short",
      topic: "char-strings",
      gotchas: ["string-concat-ltr", "char-arithmetic"],
      difficulty: 2,
      points: 5,
      prompt: 'Output? `String one = "Abe"; String two = "A" + one.charAt(2) + 1.0; print(two);`',
      answer: "Ae1.0",
      explanation:
        "Left to right: \"A\" + 'e' is String + char → \"Ae\"; then \"Ae\" + 1.0 → \"Ae1.0\". Once a String is on the left, everything after just gets appended as text.",
    },
    {
      id: "fp1-q6b",
      type: "short",
      topic: "char-strings",
      gotchas: ["char-arithmetic", "string-concat-ltr"],
      difficulty: 3,
      points: 5,
      prompt: 'Output? `String oneb = "Abe"; String twob = "A" + (oneb.charAt(0) + "OL").length(); print(twob);`',
      answer: "A3",
      explanation:
        "Inside the parens: 'A' + \"OL\" is char + String → \"AOL\" (length 3). Then \"A\" + 3 → \"A3\". The parentheses force the char-to-String concat to happen first.",
    },
    {
      id: "fp1-q6c",
      type: "short",
      topic: "char-strings",
      difficulty: 3,
      points: 5,
      prompt: 'Output? `String onec = "Abraham"; onec = onec.substring(3); String twoc = onec.substring(3) + onec; print(twoc);`',
      answer: "maham",
      explanation:
        '"Abraham".substring(3) = "aham" (index 3 to the end). Then "aham".substring(3) = "m", and "m" + "aham" = "maham". substring(3) means "from index 3 onward".',
    },
    {
      id: "fp1-q6d",
      type: "short",
      topic: "char-strings",
      gotchas: ["string-concat-ltr"],
      difficulty: 1,
      points: 5,
      prompt: 'Output? `String ron = "4"; String guidry = "9"; print(ron + guidry);`',
      answer: "49",
      explanation:
        'Both are Strings, so + concatenates the text: "4" + "9" = "49", not 13. The quotes make them text, not numbers.',
    },
    {
      id: "fp1-q7",
      type: "code",
      topic: "oop-basics",
      difficulty: 2,
      points: 15,
      prompt:
        "Why do we use information hiding (encapsulation)? Define a simple class that does NOT use it and show how that leads to unexpected errors.",
      referenceSolution:
        "Encapsulation (private fields + public methods) lets a class VALIDATE every change, so its data can never enter an illegal state.\n\n// No encapsulation — public field, no checks:\npublic class Clock {\n  public int hour;   // anyone can set this\n}\n// Misuse compiles and runs, then breaks logic later:\nClock c = new Clock();\nc.hour = 99;        // nonsense, but allowed\n\n// Encapsulated version refuses it:\npublic class Clock {\n  private int hour;\n  public void setHour(int h) { if (h >= 0 && h < 24) hour = h; }\n}",
      rubric: ["States encapsulation protects/validates data", "Shows a public field being set to an illegal value", "Shows the setter version rejecting it"],
      explanation:
        "A public field is an open door: any code can set it to garbage (hour = 99), and nothing complains until that bad value blows up somewhere far away. A private field with a validating setter slams that door — illegal values are rejected at the source.",
    },
    {
      id: "fp1-q8",
      type: "output",
      topic: "methods",
      gotchas: ["reference-vs-value"],
      difficulty: 3,
      points: 16,
      prompt:
        "Trace it. swapContents reassigns its OWN parameter v1 to a new Vector, then appends temp's items to v2. (nassau = [5,1,6], suffolk = [6,3,1].) What prints?",
      code:
        "public static void swapContents(Vector v1, Vector v2) {\n  Vector temp = v1;\n  v1 = new Vector();              // reassigns the LOCAL copy of v1\n  for (int i = 0; i < v2.size(); i++) v1.add(v2.get(i));\n  for (int j = 0; j < temp.size(); j++) v2.add(temp.get(j));\n}\n// main prints nassauVector then suffolkVector after swapContents(nassau, suffolk)",
      answer: "[5, 1, 6]\n[6, 3, 1, 5, 1, 6]",
      explanation:
        "`v1 = new Vector()` only rebinds the local parameter, so nassau (in main) is untouched → still [5,1,6]. But temp still points at nassau, and the second loop ADDS nassau's items onto suffolk (the real object both v2 and suffolk share) → [6,3,1,5,1,6]. Reassigning a parameter is invisible to the caller; mutating the object it points to is not.",
    },
    {
      id: "fp1-q9",
      type: "code",
      topic: "exceptions",
      gotchas: ["array-oob"],
      difficulty: 2,
      points: 12,
      prompt:
        "Write code that uses an array, COMPILES, but throws a NullPointerException at run time.",
      referenceSolution:
        'String[] words = new String[5];   // elements default to null\nSystem.out.println(words[0].length());  // null.length() → NullPointerException\n\n// (Or an array of arrays:)\nint[][] grid = new int[3][];       // inner arrays are null\ngrid[0][0] = 1;                    // null[0] → NullPointerException',
      rubric: ["Array of objects (or 2-D array) whose elements default to null", "Calls a method / indexes through a null element", "Compiles fine — the NPE is a run-time event"],
      explanation:
        "An array of OBJECTS starts full of nulls (only the array exists, not the things inside). Calling a method on one of those nulls compiles fine but throws NPE at run time. Same with `new int[3][]` — the outer array exists, the inner rows are null.",
    },
    {
      id: "fp1-q10",
      type: "code",
      topic: "methods",
      gotchas: ["overloading"],
      difficulty: 2,
      points: 16,
      prompt:
        "Add four more methods named `nothing` to DoNothing — all do nothing, all take exactly 2 parameters, with signatures that don't collide.",
      referenceSolution:
        "public void nothing() {}\npublic void nothing(int a, int b) {}\npublic void nothing(double a, double b) {}\npublic void nothing(int a, double b) {}\npublic void nothing(String a, char b) {}",
      rubric: ["All named `nothing`", "Each takes 2 parameters", "Every parameter-type LIST is distinct (overloading is by parameters, not return type)"],
      explanation:
        "Overloads must differ by their PARAMETER LIST (types/order/count). Four 2-parameter versions are legal as long as no two have the identical type sequence — (int,double) and (double,int) count as different.",
    },
    {
      id: "fp1-q11",
      type: "output",
      topic: "polymorphism",
      gotchas: ["method-dispatch", "overloading", "integer-division"],
      difficulty: 3,
      points: 16,
      prompt:
        "Output? Base has inc(int){n*=value} and inc(int,int){n = n*(value/scale)}; Derived OVERRIDES inc(int,int) with {n = n + value/scale}. Both start n=100.",
      code:
        "Base b = new Base();      Derived d = new Derived();\nb.inc(3);     b.showme();   // inc(int):     n = 100*3\nb.inc(10, 3); b.showme();   // Base inc(int,int): n = n*(10/3)\nd.inc(2);     d.showme();   // inherited inc(int): n = 100*2\nd.inc(10, 3); d.showme();   // Derived inc(int,int): n = n + 10/3",
      answer: "n = 300\nn = 900\nn = 200\nn = 203",
      explanation:
        "b: 100*3=300; then 300*(10/3) where 10/3 is integer division = 3 → 900. d: inherits inc(int) → 100*2=200; then the OVERRIDDEN inc(int,int) → 200 + 10/3 = 200+3 = 203. Which inc(int,int) runs depends on the object's real type (Derived), not the variable's declared type.",
    },
    {
      id: "fp1-q12",
      type: "code",
      topic: "polymorphism",
      gotchas: ["type-promotion"],
      difficulty: 2,
      points: 14,
      prompt:
        "Give 2 examples of legal automatic type conversion — one with primitives, one with objects. Then name a time polymorphism was used in your assignments.",
      referenceSolution:
        "Primitive widening:  double d = 5;          // int → double, automatic\nObject upcasting:    Object o = new String(\"hi\");  // String → Object, automatic\n\nPolymorphism example: storing different shape objects (Circle, Square) in a\nShape[] and calling shape.area() — each runs its own overridden version.",
      rubric: ["Primitive: a narrower type assigned to a wider one (int→double)", "Object: a subclass reference assigned to a superclass type (upcast)", "A real polymorphism use (overridden method via a parent reference)"],
      explanation:
        "Automatic conversion always goes in the 'safe' direction: a small primitive into a bigger one (int→double), and a specific object into a more general type (String→Object). Both are guaranteed not to lose anything, so Java does them silently.",
    },
    {
      id: "fp1-q13",
      type: "multi",
      topic: "oop-basics",
      gotchas: ["static-vs-instance"],
      difficulty: 3,
      points: 15,
      prompt:
        "UnderwaterBasketWeaving has `private String design` (instance) and `private static double tolerance`. Select the method definitions that cause a SYNTAX error.",
      code:
        'a) static UnderwaterBasketWeaving make() { return new UnderwaterBasketWeaving("Thatched"); }\nb) static void resetDesign() { design = "none"; }\nc) void resetTolerance() { tolerance = 0.0; }\nd) static void reset() { resetTolerance(); }',
      choices: [
        "a) make() — returns a new object",
        "b) resetDesign() — static, sets `design`",
        "c) resetTolerance() — instance, sets `tolerance`",
        "d) reset() — static, calls resetTolerance()",
      ],
      correctIndices: [1, 3],
      explanation:
        "A static method has no `this`, so it can't touch instance members. (b) sets the instance field `design` from a static method → error. (d) calls the instance method resetTolerance() from a static method with no object → error. (a) is fine, and (c) is fine because an instance method CAN reach a static field.",
    },
    {
      id: "fp1-q14",
      type: "output",
      topic: "arrays",
      gotchas: ["reference-vs-value"],
      difficulty: 3,
      points: 12,
      prompt:
        "Output? superMystery takes (int x, int[] y); inside it does `c = y;` then zeroes c. (a={1,2,3,4}, b={5,7,9,10}; call is superMystery(b[3], a).)",
      code:
        'public void superMystery(int x, int[] y) {\n  x = x + 1;\n  int[] c = {2,4,6,8};\n  c = y;                 // c now points at the SAME array as y (and a)\n  for (int i = 0; i < 4; i++) c[i] = 0;\n  System.out.println("y[1] = " + y[1]);\n}\n// main: superMystery(b[3], a); print "b[2] = "+b[2]; print "a[3] = "+a[3];',
      answer: "y[1] = 0\nb[2] = 9\na[3] = 0",
      explanation:
        "`c = y` copies the REFERENCE, so c, y, and a are all the same array. Zeroing c zeros a. So y[1]=0, and back in main a[3]=0. b was never passed (only b[3]'s int value was), so b[2] is still 9. Arrays are shared through references; an int argument is just a copy.",
    },
    {
      id: "fp1-q15",
      type: "code",
      topic: "arrays",
      difficulty: 2,
      points: 15,
      prompt:
        "In plain English, give complete step-by-step instructions for an algorithm that sorts an int array in DECREASING order. Name the algorithm.",
      referenceSolution:
        "Selection sort (descending):\n1. For each position i from 0 to length−2:\n2.   Assume the element at i is the largest of the rest.\n3.   Scan j from i+1 to the end; if a[j] is larger than the current max, remember its index.\n4.   After scanning, swap the largest found into position i.\n5. When i reaches the end, the array is sorted largest-to-smallest.",
      rubric: ["Repeatedly selects the largest remaining element", "Places it at the front of the unsorted region (swap)", "Names a real algorithm (selection/bubble/insertion)"],
      explanation:
        "Selection sort is the easiest to describe: each pass finds the biggest value still unsorted and swaps it to the front. For DEcreasing order you keep the LARGEST each pass (for increasing you'd keep the smallest).",
    },
    {
      id: "fp1-q16",
      type: "code",
      topic: "exceptions",
      gotchas: ["exception-order"],
      difficulty: 2,
      points: 12,
      prompt:
        "What important property of RuntimeException should every Java programmer know? Is a thrown exception the same thing as a runtime error? Explain.",
      referenceSolution:
        "RuntimeException (and its subclasses) is UNCHECKED: the compiler does not force you to catch it or declare it with throws. It signals a programming bug (null deref, bad index, /0).\n\nNot the same: a thrown exception is a controlled Java object you can catch and recover from; a 'runtime error' loosely means any failure while running. An uncaught exception BECOMES a runtime crash, but a caught one need not.",
      rubric: ["RuntimeException is unchecked (no required catch/throws)", "Distinguishes a catchable exception object from a general run-time failure"],
      explanation:
        "Unchecked = the compiler trusts you to avoid it, so RuntimeExceptions compile without try/catch. They usually mean a bug, not a recoverable condition — and an exception only becomes a crash if nobody catches it.",
    },
    {
      id: "fp1-q17a",
      type: "mc",
      topic: "exceptions",
      gotchas: ["array-oob"],
      difficulty: 2,
      points: 4,
      prompt: "What kind of error?",
      code: "int nums[] = new int[5];\nfor (int i = 0; i <= nums.length; i++)\n  nums[i] = 5;",
      choices: ["Syntax error", "Runtime error", "Logical error"],
      correctIndex: 1,
      explanation:
        "It compiles fine, but `i <= nums.length` lets i reach 5, and nums[5] is out of bounds (valid indices are 0–4) → ArrayIndexOutOfBoundsException at run time. The classic off-by-one: use < length, not <=.",
    },
    {
      id: "fp1-q17b",
      type: "mc",
      topic: "exceptions",
      gotchas: ["uninitialized-local"],
      difficulty: 2,
      points: 4,
      prompt: "What kind of error?",
      code:
        "try {\n  int[] nums = new int[5];\n  nums[0] = 5;\n} catch (Exception e) {}\nSystem.out.println(nums[0]);",
      choices: ["Syntax error", "Runtime error", "Logical error"],
      correctIndex: 0,
      explanation:
        "`nums` is declared INSIDE the try block, so it doesn't exist on the println line — 'cannot find symbol'. That's caught by the compiler, so it's a syntax (compile) error. A variable only lives within the braces it's declared in.",
    },
    {
      id: "fp1-q17c",
      type: "mc",
      topic: "control-flow",
      difficulty: 3,
      points: 4,
      prompt: "What kind of error?",
      code:
        "public static int factorial(int n) {\n  int fact = n;\n  while (fact >= n) {\n    n--;\n    fact *= n;\n  }\n  return fact;\n}",
      choices: ["Syntax error", "Runtime error", "Logical error"],
      correctIndex: 2,
      explanation:
        "It compiles and runs, but the logic is broken: fact starts at n and gets multiplied, so it keeps growing while n shrinks — `fact >= n` essentially never becomes false. An infinite loop is a logical error, not a crash the compiler or JVM flags.",
    },
    {
      id: "fp1-q18",
      type: "code",
      topic: "methods",
      difficulty: 3,
      points: 18,
      prompt:
        "Given a singly linked list (CharListManager with head): explain in plain English what method1(char c) does and what method2() does. Also: name one operation that's more efficient on a linked list than an array, and why.",
      referenceSolution:
        "method1(char c): walks to the LAST node and appends a new node holding c. (If the list is empty, c becomes the head.) → adds to the end.\n\nmethod2(): finds the second-to-last node, then moves the LAST node to the front and makes it the new head. → rotates the tail to the head.\n\nLinked list win: INSERTING/DELETING in the middle is O(1) once you're at the spot — just relink a couple of pointers. An array would have to shift up to 1000 elements (or rebuild) to make room.",
      rubric: ["method1: appends a node to the end", "method2: moves the last node to the head", "Insert/delete is cheaper on a list (pointer relink vs shifting array elements)"],
      explanation:
        "Reading pointer code: method1's while-loop runs until getNext() is null (the end), then links a new node there. method2 stops one before the end, then rewires the last node to become the head. Linked lists shine at insert/delete because you relink pointers instead of shifting a whole array.",
    },
    {
      id: "fp1-q19",
      type: "code",
      topic: "exceptions",
      difficulty: 3,
      points: 12,
      prompt:
        "Inside writePaidPersonsBinary, write the loop that saves every PaidPerson's data (char initial, int age, double rate) to the DataOutputStream `dos`.",
      referenceSolution:
        "for (int i = 0; i < array.length; i++) {\n  dos.writeChar(array[i].initial);\n  dos.writeInt(array[i].age);\n  dos.writeDouble(array[i].rate);\n}\ndos.close();",
      rubric: ["Loops over array.length (not an infinite for(;;))", "writeChar / writeInt / writeDouble for each field", "Reads the public fields off each object"],
      explanation:
        "DataOutputStream has a typed write per primitive: writeChar, writeInt, writeDouble. Loop the array and write the three fields of each object in a fixed order (the reader must read them back in the SAME order).",
    },
    {
      id: "fp1-q19b",
      type: "short",
      topic: "exceptions",
      difficulty: 2,
      points: 4,
      prompt:
        "How many bytes will output.dat use after writing 10 PaidPerson objects? (writeChar = 2 bytes, writeInt = 4, writeDouble = 8.)",
      answer: "140",
      acceptable: ["140 bytes"],
      explanation:
        "Each object writes 2 + 4 + 8 = 14 bytes (char is 2 bytes in Java's binary format, not 1). 14 × 10 = 140 bytes. The char being 2 bytes is the easy thing to miss.",
    },
    {
      id: "fp1-q20",
      type: "trace",
      topic: "inheritance",
      gotchas: ["static-vs-instance"],
      difficulty: 2,
      points: 12,
      partialCredit: true,
      prompt: "Answer yes/no.",
      fields: [
        { label: "ClassA extends ClassB — can A directly use B's PRIVATE fields?", answer: "no" },
        { label: "ClassA extends ClassB — can B directly use A's private fields?", answer: "no" },
        { label: "ClassC contains a ClassD — can C directly use D's private fields?", answer: "no" },
      ],
      explanation:
        "private means private — period. Subclasses, parents, and container classes all must go through public/protected accessors. Inheritance and composition give you a reference to the other object, not a key to its private data.",
    },
    {
      id: "fp1-q20d",
      type: "code",
      topic: "oop-basics",
      difficulty: 1,
      points: 4,
      prompt: "What is the difference between a class and an object?",
      referenceSolution:
        "A class is the BLUEPRINT/template — it defines the fields and methods. An object is a concrete INSTANCE built from that blueprint with `new`, holding its own values. One class, many objects.",
      rubric: ["Class = template/definition", "Object = an instance created with new, with its own state"],
      explanation:
        "Class is the cookie cutter; objects are the cookies. The class is written once; each `new` makes another independent object with its own copy of the instance fields.",
    },
    {
      id: "fp1-bonus",
      type: "mc",
      topic: "oop-basics",
      gotchas: ["eq-vs-equals"],
      difficulty: 2,
      points: 5,
      prompt:
        "An empty class ObjectToPrint is printed with System.out.println(otp). What does the output look like?",
      choices: [
        "the class name, an @, and a hex hash code (e.g. ObjectToPrint@1b6d3586)",
        "null",
        "an empty line",
        "a compiler error",
        "ObjectToPrint{}",
      ],
      correctIndex: 0,
      explanation:
        "With no toString() of its own, it inherits Object's default: getClass().getName() + \"@\" + hex hashcode → something like ObjectToPrint@1b6d3586. Overriding toString() is what gives you readable output instead.",
    },
  ],
};
