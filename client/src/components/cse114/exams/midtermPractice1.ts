// Transcribed verbatim from "CSE114 Midterm Practice - 1" (+ official solutions).
// The 9-question exam is split into 11 atomically-gradable items (q3 and q4 each
// had two parts). Points sum to 100. Conceptual / code-writing items use the
// self-graded "code" type (you mark yourself against the reference).

import type { ExamSet } from "../types";

export const midtermPractice1: ExamSet = {
  id: "midterm-practice-1",
  title: "Midterm Practice 1",
  examType: "midterm",
  durationMinutes: 150,
  blurb: "Sample Midterm Exam I — types, reference semantics, methods, OOP basics.",
  questions: [
    {
      id: "mp1-q1",
      type: "code",
      topic: "methods",
      gotchas: ["char-arithmetic"],
      difficulty: 2,
      points: 15,
      prompt:
        "Write the body of `binaryToDecimal` so it takes a String of a positive binary number and returns its decimal value as an int.\n\nYou MAY use `Math.pow(double, double)`, `String.charAt(int)`, and `String.length()`. You may NOT use any other JDK methods.",
      code: "public static int binaryToDecimal(String num)\n{\n\n}",
      referenceSolution:
        "public static int binaryToDecimal(String num)\n{\n  int decimal = 0, multiple;\n  for (int i = 0; i < num.length(); i++)\n  {\n    if (num.charAt(num.length() - 1 - i) == '0')\n      multiple = 0;\n    else\n      multiple = 1;\n    decimal += (Math.pow(2, i) * multiple);\n  }\n  return decimal;\n}",
      rubric: [
        "Loops over every character of the string",
        "Reads digits from the right (least-significant) end",
        "Weights each '1' by 2^position and sums",
        "Returns an int",
      ],
      explanation:
        "Each binary digit is worth a power of two, biggest on the left. Walk from the right end (the 1s place, 2^0) leftward; every time you see a '1', add 2^position. Reading right-to-left is what lets `i` double as the exponent. Note `Math.pow` returns a double, but adding into an int variable truncates back to a whole number, which is fine here.",
    },
    {
      id: "mp1-q2",
      type: "code",
      topic: "methods",
      difficulty: 1,
      points: 6,
      prompt:
        'Name 2 possible reasons the compiler gives you a "cannot resolve symbol" error.',
      referenceSolution:
        "Any two of:\n1) A spelling/typo in the name.\n2) The class being used was never imported.\n3) A variable is used that is out of scope (or never declared).",
      rubric: ["Gave two distinct, valid reasons"],
      explanation:
        '"Cannot resolve symbol" means the compiler reached a name it has never been introduced to. So the cause is always "this name isn\'t visible here": you misspelled it, you forgot the import that brings the class into view, or you\'re using a variable outside the block where it lives.',
    },
    {
      id: "mp1-q3a",
      type: "output",
      topic: "methods",
      gotchas: ["reference-vs-value"],
      difficulty: 2,
      points: 6,
      prompt:
        "The `swap` method below does NOT work. What output results from running the PasswordTester `main` method?",
      code: 'public static void main(String[] args)\n{\n  String s = "TopSecret";\n  Password p = new Password("NoneOfYourBusiness");\n\n  swap(s, p);\n  System.out.println(s + "\\n" + p.password);\n}\n\npublic static void swap(String a, Password b)\n{\n  String temp = a;\n  a = b.password;\n  b.password = temp;\n}',
      answer: "TopSecret\nTopSecret",
      acceptable: ["TopSecret TopSecret"],
      explanation:
        "Java passes everything by value — including the reference `a`. Reassigning `a` inside swap only changes the local copy, so `s` back in main never moves off \"TopSecret\". But `b` and `p` point at the SAME Password object, so `b.password = temp` really does change `p.password` to \"TopSecret\". Result: both lines print TopSecret.",
    },
    {
      id: "mp1-q3b",
      type: "code",
      topic: "methods",
      gotchas: ["reference-vs-value"],
      difficulty: 3,
      points: 6,
      prompt:
        "Without changing or adding any variable/parameter declarations, make `s` and `p.password` actually swap. (You may change the swap and main methods.)",
      referenceSolution:
        "// The catch: a method CANNOT reassign main's local `s`, because the\n// reference is passed by value and Strings are immutable. So the real swap\n// has to finish in main, using p (the object you CAN reach). One way:\n\npublic static void main(String[] args)\n{\n  String s = \"TopSecret\";\n  Password p = new Password(\"NoneOfYourBusiness\");\n\n  String temp = s;\n  s = p.password;\n  p.password = temp;\n\n  System.out.println(s + \"\\n\" + p.password);\n}",
      rubric: [
        "Recognized you can't swap `s` from inside swap() (pass-by-value)",
        "Performed the swap where `s` is in scope (main), or via a returned value",
        "Result: s = \"NoneOfYourBusiness\", p.password = \"TopSecret\"",
      ],
      explanation:
        "This question is a trap that teaches pass-by-value. Since main's `s` lives in main and Java hands the method only a COPY of the reference, no method can reassign `s` for you. The honest fix does the three-line swap in main itself, where `s` is actually in scope.",
    },
    {
      id: "mp1-q4a",
      type: "code",
      topic: "oop-basics",
      gotchas: ["overloading"],
      difficulty: 1,
      points: 3,
      prompt: "What is the purpose of overloading a method when defining a class?",
      referenceSolution:
        "It lets the same method name accept different parameter lists, so callers use one familiar name for the same conceptual operation on different inputs — making the class more convenient to use.",
      rubric: ["Mentions same name, different parameters", "Mentions convenience/usability"],
      explanation:
        "Overloading is about kindness to the caller. Instead of remembering print, printInt, printDouble, you give them one name — print — and let the compiler pick the right version from the argument types. Same idea, different inputs, one name to remember.",
    },
    {
      id: "mp1-q4b",
      type: "code",
      topic: "oop-basics",
      difficulty: 1,
      points: 3,
      prompt: "What is the reason for enforcing complete information hiding when defining a class?",
      referenceSolution:
        "To prevent misuse: by keeping fields private and forcing access through methods, the class controls and validates what values its data can ever take (e.g. an exam score stays within 0–100).",
      rubric: ["Mentions preventing misuse / protecting invariants", "Mentions controlling/validating values"],
      explanation:
        "If anyone can reach in and set a field directly, they can set it to garbage (a grade of 5000, a negative age). Hiding the data behind setters means every change goes through a checkpoint you wrote — so the object can refuse illegal values and stay consistent.",
    },
    {
      id: "mp1-q5",
      type: "trace",
      topic: "types-operators",
      gotchas: ["pre-post-increment"],
      difficulty: 1,
      points: 6,
      partialCredit: true,
      prompt:
        "Rewrite each line WITHOUT using ++, --, +=, -=, *=, or /=. Write the equivalent plain assignment.",
      fields: [
        { label: "x *= 5;", answer: "x = x * 5", acceptable: ["x = x * 5;"] },
        { label: "y--;", answer: "y = y - 1", acceptable: ["y = y - 1;"] },
        { label: "i /= 10;", answer: "i = i / 10", acceptable: ["i = i / 10;"] },
      ],
      explanation:
        "The compound operators are pure shorthand: `a OP= b` always means `a = a OP b`. `y--` is just `y = y - 1`. Spelling them out is a good habit when an expression gets confusing — there's no hidden behavior, only fewer keystrokes.",
    },
    {
      id: "mp1-q6",
      type: "output",
      topic: "oop-basics",
      gotchas: ["reference-vs-value", "eq-vs-equals"],
      difficulty: 3,
      points: 8,
      prompt:
        "Trace the program, minding the reference properties of objects. What does it print? (Uses the Password class with a public String `password`.)",
      code:
        'Password email = new Password("MyEmailPwd");\nPassword sparky = new Password("MySparkyPwd");\nPassword guess = copy(email);   // copy() returns new Password(template.password)\nsparky.password = "Junk";\nguess.password = "Junk";\n\nif (email == guess) System.out.print("A");\nif (sparky == guess) System.out.print("B");\nif (email.password == guess.password) System.out.print("C");\nif (sparky.password == guess.password) System.out.print("D");',
      answer: "D",
      explanation:
        "`==` on objects asks \"same object in memory?\", not \"same contents?\". copy() builds a BRAND NEW Password, so email, sparky, and guess are three different objects — A and B are false. For C and D, `==` compares the String references inside: email.password is still \"MyEmailPwd\" (≠ guess's \"Junk\"), so C is false. But sparky.password and guess.password were BOTH set to the literal \"Junk\", and Java interns identical string literals into one shared object — so that reference IS the same. Only D prints.",
    },
    {
      id: "mp1-q7",
      type: "trace",
      topic: "types-operators",
      gotchas: ["integer-division", "cast-truncation", "type-promotion"],
      difficulty: 2,
      points: 6,
      partialCredit: true,
      prompt:
        'For each assignment, write the value of the assigned variable. If the line is a syntax error, write "ERROR". Treat each line independently.',
      fields: [
        { label: "int sumGrades = 5/2;", answer: "2" },
        { label: "sumGrades = 5.0/2.0;", answer: "ERROR" },
        { label: "sumGrades = (int)(5.0/2.0);", answer: "2" },
        { label: "int ratio = 50/100;", answer: "0" },
        { label: "double ratio2 = 50/100;", answer: "0.0" },
        { label: "float avg = (long)(5.0/2);", answer: "2.0" },
      ],
      explanation:
        "Two int operands → integer division, which throws away the remainder BEFORE any decimal exists: 5/2 = 2, 50/100 = 0. (b) is ERROR because 5.0/2.0 is a double (2.5) and you can't drop a double into an int without a cast. (c) casts first: (int)2.5 = 2. (e) 50/100 is still int division = 0, THEN widened to 0.0. (f) (long)(2.5) = 2, then widened to a float 2.0. Order matters: the division happens in its operands' type, the cast/assignment happens after.",
    },
    {
      id: "mp1-q8",
      type: "code",
      topic: "oop-basics",
      difficulty: 2,
      points: 16,
      prompt:
        "Pluto is 3,670,000,000 miles away; a human runs 15 mph nonstop. Print how many YEARS the trip takes. You may use NO primitive variables — only BigInteger objects.\n\nAPI: `new BigInteger(String)`, `a.divide(b)`, `a.multiply(b)` (all return BigInteger).",
      code: "public static void main(String[] args)\n{\n\n}",
      referenceSolution:
        'public static void main(String[] args)\n{\n  BigInteger speed = new BigInteger("15");\n  BigInteger distance = new BigInteger("3670000000");\n  BigInteger time = distance.divide(speed);          // hours\n  BigInteger daysInYear = new BigInteger("365");\n  BigInteger hoursInDay = new BigInteger("24");\n  BigInteger hoursInYear = daysInYear.multiply(hoursInDay);\n  time = time.divide(hoursInYear);                    // years\n  System.out.println(time);\n}',
      rubric: [
        "All quantities are BigInteger objects (no int/double/long)",
        "distance ÷ speed gives hours",
        "Divides hours by (365 × 24) to get years",
        "Prints the result",
      ],
      explanation:
        "The lesson is method-style arithmetic on objects: BigInteger has no `+ - * /` operators, so you call `.divide()` and `.multiply()` and capture the returned object. The math itself is unit-cancellation: miles ÷ (miles/hour) = hours, then hours ÷ (hours/year) = years.",
    },
    {
      id: "mp1-q9",
      type: "code",
      topic: "oop-basics",
      gotchas: ["overloading"],
      difficulty: 3,
      points: 25,
      prompt:
        "Define the GradedStudent class in full:\n• HAS-A Person (the student) plus two exam scores (whole numbers 0–100), with complete information hiding; exams mutable only with legal values.\n• Two constructors, every instance variable assigned, no redundant code.\n• A method returning the average (a real number) and one returning the higher score.\n• A toString() returning e.g. \"Name: Joe Shmo\\nAverage: 87.5\".\n\nPerson API: `Person(String name)`, `String getName()`, `int getAge()`, `void setAge(int)`.",
      code: "public class GradedStudent\n{\n\n}",
      referenceSolution:
        'public class GradedStudent\n{\n  private Person student;\n  private int exam1 = 0;\n  private int exam2 = 0;\n\n  public Person getStudent() { return student; }\n  public int getExam1() { return exam1; }\n  public int getExam2() { return exam2; }\n\n  public void setStudent(Person initStudent) { student = initStudent; }\n\n  public void setExam1(int initExam1)\n  {\n    if ((initExam1 >= 0) && (initExam1 <= 100))\n      exam1 = initExam1;\n  }\n\n  public void setExam2(int initExam2)\n  {\n    if ((initExam2 >= 0) && (initExam2 <= 100))\n      exam2 = initExam2;\n  }\n\n  public GradedStudent() { student = new Person("UNKNOWN"); }\n\n  public GradedStudent(String initStudent) { student = new Person(initStudent); }\n\n  public double calculateAverage()\n  {\n    return (((double)exam1) + ((double)exam2)) / 2.0;\n  }\n\n  public int calculateMax()\n  {\n    if (exam1 > exam2) return exam1;\n    else return exam2;\n  }\n\n  public String toString()\n  {\n    String summary = "Name: " + student.getName();\n    summary += "\\nAverage: " + calculateAverage();\n    return summary;\n  }\n}',
      rubric: [
        "Private Person + two private ints (information hiding)",
        "Setters reject scores outside 0–100",
        "Two constructors; fields default-initialized so there's no redundant code",
        "Average cast to double BEFORE dividing (else integer division)",
        "calculateMax returns the larger score; toString matches the sample format",
      ],
      explanation:
        "The graded ideas: (1) private fields + validating setters = real encapsulation; (2) initializing exam1/exam2 to 0 at declaration means each constructor only has to set what it knows, killing redundancy; (3) the classic average trap — cast to double FIRST, because (exam1 + exam2) / 2 with ints would integer-divide and lose the .5.",
    },
  ],
};
