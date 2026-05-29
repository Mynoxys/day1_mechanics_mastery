// Final chapters — L10–L18 (+ L99 JUnit). The OOP half of the course: objects,
// inheritance, polymorphism, exceptions, recursion. Same teaching shape as the
// midterm chapters.

import type { Lecture } from "./types";

export const finalLectures: Lecture[] = [
  // ===================================================================== L10
  {
    id: "l10",
    code: "L10",
    title: "Objects & Object-Oriented Thinking",
    examScope: "final",
    topic: "oop-basics",
    oneLiner: "Classes as blueprints, objects as instances, encapsulation",
    bigPicture:
      "OOP bundles data and the behavior that acts on it into objects. A class is the blueprint; an object is one thing built from it with `new`. The exam's core OOP skills start here: constructors, encapsulation (private fields + validating setters), and the static-vs-instance distinction.",
    gotchas: ["static-vs-instance", "overloading", "eq-vs-equals"],
    sections: [
      {
        heading: "Class vs object",
        idea: "A class is the cookie cutter; objects are the cookies. The class is written once; each `new` builds another independent object with its own copy of the instance fields.",
        code: "Person p1 = new Person(\"Ada\");\nPerson p2 = new Person(\"Alan\");\n// one Person class, two separate objects with their own name",
      },
      {
        heading: "Instance variables, methods, and this",
        idea: "Instance variables hold each object's state; instance methods act on it. `this` refers to the object the method was called on — used to disambiguate a field from a parameter of the same name.",
        code: "public class Person {\n  private String name;\n  public Person(String name) {\n    this.name = name;   // this.name = field; name = parameter\n  }\n}",
        codeCaption: "`this.name = name` copies the parameter into the field they happen to share a name with.",
      },
      {
        heading: "Constructors",
        idea: "A constructor initializes a new object. It has the class's name and NO return type. You can overload constructors (different parameter lists); initializing fields at declaration kills redundant code.",
        code: "private int exam1 = 0;   // default, so each constructor sets only what it knows\npublic GradedStudent() { student = new Person(\"UNKNOWN\"); }\npublic GradedStudent(String n) { student = new Person(n); }",
        trap: "A constructor has no return type — not even void. `public void Person()` is a normal method, NOT a constructor.",
      },
      {
        heading: "Encapsulation: private fields + validating setters",
        idea: "Make fields `private` and expose `public` getters/setters. The setter is a checkpoint where you reject illegal values, so the object can never enter a bad state.",
        code: "private int score;\npublic void setScore(int s) {\n  if (s >= 0 && s <= 100) score = s;   // refuse garbage\n}\npublic int getScore() { return score; }",
        trap: "A public field is an open door — anyone can set score = 5000. Hiding it behind a setter is the whole point of encapsulation.",
      },
      {
        heading: "Static vs instance",
        idea: "An instance member belongs to each object; a static (class) member is shared by all and reached via the class. A static method has no `this`, so it CANNOT touch instance members directly.",
        code: "public static int count;     // shared by every object\npublic int id;               // each object's own\n// a static method can't read `id` — there's no object to read it from",
        trap: "See [[static-vs-instance]]: static can't use `this` or instance fields; instance methods CAN use static members. The restriction only runs one way.",
      },
      {
        heading: "toString() and equals()",
        idea: "Override `toString()` for readable printing and `equals()` to compare contents. Without your own toString, printing an object shows `ClassName@hexhash` (Object's default).",
        code: "public String toString() { return \"Person: \" + name; }",
        trap: "Default `equals()` (inherited from Object) compares references like ==. To compare CONTENTS you must override equals()." ,
      },
    ],
    drills: [
      { id: "l10-d1", type: "mc", topic: "oop-basics", gotchas: ["static-vs-instance"], difficulty: 2, points: 1, source: "Learn L10",
        prompt: "Can a static method directly use an instance field?", choices: ["Yes", "No — there's no object (no `this`)"], correctIndex: 1,
        explanation: "Static methods belong to the class, not an object, so they have no `this` and can't reach instance fields directly." },
      { id: "l10-d2", type: "mc", topic: "oop-basics", difficulty: 2, points: 1, source: "Learn L10",
        prompt: "Which is true of a constructor?", choices: ["It has return type void", "It has no return type and matches the class name", "It must be static", "It returns the class"], correctIndex: 1,
        explanation: "Constructors share the class name and declare NO return type. Adding a return type makes it an ordinary method." },
      { id: "l10-d3", type: "mc", topic: "oop-basics", difficulty: 1, points: 1, source: "Learn L10",
        prompt: "Why make a field private with a setter?", choices: ["It runs faster", "So the setter can validate/control the value", "To save memory", "Required by Java"], correctIndex: 1,
        explanation: "Encapsulation: the setter is a checkpoint that rejects illegal values, protecting the object's state." },
      { id: "l10-d4", type: "code", topic: "oop-basics", difficulty: 2, points: 1, source: "Learn L10",
        prompt: "Write a `private int age;` field with a getter and a setter that only accepts ages 0–150.",
        referenceSolution: "private int age;\npublic int getAge() { return age; }\npublic void setAge(int a) {\n  if (a >= 0 && a <= 150) age = a;\n}",
        rubric: ["private field", "public getter returns it", "setter guards the 0–150 range"],
        explanation: "The validating setter is the encapsulation pattern: illegal values are silently rejected, so age stays sane." },
    ],
  },

  // ===================================================================== L11
  {
    id: "l11",
    code: "L11",
    title: "Inheritance",
    examScope: "final",
    topic: "inheritance",
    oneLiner: "extends, super, overriding, and which method actually runs",
    bigPicture:
      "Inheritance lets a subclass reuse and extend a superclass (an IS-A relationship: a Dog IS-An Animal). The exam tests `super`, the difference between overriding and overloading, and dynamic dispatch — which version of a method runs when the declared and actual types differ.",
    gotchas: ["super-this", "method-dispatch", "overloading"],
    sections: [
      {
        heading: "extends and IS-A",
        idea: "`class Dog extends Animal` means Dog inherits Animal's (non-private) fields and methods and can add its own. Use it only for a true IS-A relationship.",
        code: "public class Animal { public void eat() { ... } }\npublic class Dog extends Animal {\n  public void bark() { ... }   // Dog has eat() AND bark()\n}",
      },
      {
        heading: "super",
        idea: "`super.method()` calls the parent's version; `super(args)` calls the parent's CONSTRUCTOR and must be the first statement in the child constructor.",
        code: "public Employee(String name, double salary) {\n  super(name);          // build the Person part first\n  this.salary = salary;\n}",
        trap: "See [[super-this]]: `super` is a reference (super.x); `super(...)` is a constructor call that must come FIRST. If you omit it, Java inserts a no-arg super() for you.",
      },
      {
        heading: "Overriding vs overloading",
        idea: "OVERRIDE = a subclass redefines a method with the SAME signature (replaces the parent's). OVERLOAD = same name, DIFFERENT parameters (a separate method). Totally different things.",
        code: "class Base { void inc(int v) {...}  void inc(int v,int s){...} }  // overloaded\nclass Derived extends Base { void inc(int v,int s){...} }        // OVERRIDES the 2-arg one",
        trap: "Overload = different parameter lists (resolved at compile time). Override = same signature in a subclass (resolved at runtime by actual type)." ,
      },
      {
        heading: "Dynamic dispatch — which method runs",
        idea: "For an overridden instance method, the ACTUAL object type decides which version runs — not the declared type of the variable. That's polymorphism.",
        code: "Animal a = new Dog();\na.speak();   // runs Dog's speak() if Dog overrides it",
        codeCaption: "Even though `a` is declared Animal, the real object is a Dog, so Dog's override runs.",
        trap: "See [[method-dispatch]]: overridden methods dispatch on the runtime type; fields and static methods use the DECLARED type. Trace questions hinge on this." ,
      },
      {
        heading: "private vs protected, and Object",
        idea: "A subclass cannot directly touch the parent's `private` fields (use `protected` or accessors). Every class ultimately extends `Object` (giving toString, equals, etc.).",
        trap: "private means private even to subclasses. If a subclass needs a parent field, it goes through a getter/setter or the field is protected." ,
      },
    ],
    drills: [
      { id: "l11-d1", type: "mc", topic: "polymorphism", gotchas: ["method-dispatch"], difficulty: 3, points: 1, source: "Learn L11",
        prompt: "`Animal a = new Dog();` Dog overrides speak(). `a.speak()` runs whose version?", choices: ["Animal's", "Dog's", "Neither", "Compile error"], correctIndex: 1,
        explanation: "Overridden instance methods dispatch on the ACTUAL type (Dog), not the declared type (Animal)." },
      { id: "l11-d2", type: "mc", topic: "inheritance", gotchas: ["super-this"], difficulty: 2, points: 1, source: "Learn L11",
        prompt: "Where must `super(...)` appear in a constructor?", choices: ["The first statement", "Anywhere", "The last statement", "It can't"], correctIndex: 0,
        explanation: "The parent must be constructed first, so super(...) must be the first statement of the child constructor." },
      { id: "l11-d3", type: "mc", topic: "inheritance", gotchas: ["overloading"], difficulty: 2, points: 1, source: "Learn L11",
        prompt: "A subclass method with the SAME name and SAME parameters as the parent's is:", choices: ["overloading", "overriding", "an error", "shadowing a field"], correctIndex: 1,
        explanation: "Same signature in a subclass = overriding (replaces the parent's version). Different params would be overloading." },
      { id: "l11-d4", type: "mc", topic: "inheritance", gotchas: ["super-this"], difficulty: 2, points: 1, source: "Learn L11",
        prompt: "Can a subclass directly read a `private` field declared in its parent?", choices: ["Yes", "No"], correctIndex: 1,
        explanation: "private is private even to subclasses. Use a getter/setter, or declare the field protected." },
    ],
  },

  // ===================================================================== L12
  {
    id: "l12",
    code: "L12",
    title: "Exceptions and Text I/O",
    examScope: "final",
    topic: "exceptions",
    oneLiner: "try / catch / finally, the exception hierarchy, and catch order",
    bigPicture:
      "Exceptions are how Java signals and handles errors without littering code with status checks. The exam tests the try/catch/finally flow, checked vs unchecked exceptions, and the rule that catch blocks must go most-specific first.",
    gotchas: ["exception-order"],
    sections: [
      {
        heading: "try / catch / finally",
        idea: "Code that might fail goes in `try`; `catch` handles a thrown exception; `finally` runs no matter what (exception or not, even after a return) — perfect for cleanup.",
        code: "try {\n  risky();\n} catch (IOException e) {\n  System.out.println(\"failed: \" + e.getMessage());\n} finally {\n  cleanup();   // always runs\n}",
        trap: "finally runs even if the try or catch returns or throws. It's the one block you can count on." ,
      },
      {
        heading: "Checked vs unchecked",
        idea: "Checked exceptions (e.g. IOException) MUST be caught or declared with `throws`. Unchecked exceptions (RuntimeException and its subclasses — NullPointerException, ArrayIndexOutOfBounds, ArithmeticException) need neither; they usually mean a bug.",
        trap: "RuntimeException is UNCHECKED — the compiler won't force you to handle it. That's the property to remember about it." ,
      },
      {
        heading: "Catch order: specific before general",
        idea: "A catch for a parent type would intercept its subclasses, so you must list the most specific exceptions first. Putting `catch (Exception e)` before a more specific catch makes the specific one unreachable — a COMPILE error.",
        code: "try { ... }\ncatch (FileNotFoundException e) { ... }   // specific first\ncatch (IOException e) { ... }\ncatch (Exception e) { ... }                // most general last",
        trap: "See [[exception-order]]: general-before-specific = 'exception already caught' compile error. Order them narrowest to widest." ,
      },
      {
        heading: "throw, throws, and Text I/O",
        idea: "`throw new Exception(\"msg\")` raises one; `throws` in a method header declares it might. Reading/writing text uses Scanner (in) and PrintWriter / File (out); close streams when done.",
        code: "public void setIP(byte[] bs) throws Exception {\n  if (bs.length != 4) throw new Exception(\"need 4 bytes\");\n}",
      },
    ],
    drills: [
      { id: "l12-d1", type: "mc", topic: "exceptions", gotchas: ["exception-order"], difficulty: 3, points: 1, source: "Learn L12",
        prompt: "Catching `Exception` BEFORE a more specific `IOException` causes:", choices: ["nothing special", "a compile error (IOException unreachable)", "a runtime error", "both run"], correctIndex: 1,
        explanation: "The broad catch would grab everything first, leaving the specific catch unreachable — flagged at compile time." },
      { id: "l12-d2", type: "mc", topic: "exceptions", difficulty: 2, points: 1, source: "Learn L12",
        prompt: "When does a `finally` block run?", choices: ["Only if no exception", "Only if an exception", "Always", "Only if you return"], correctIndex: 2,
        explanation: "finally always runs — exception or not, caught or not, even after a return. It's for guaranteed cleanup." },
      { id: "l12-d3", type: "mc", topic: "exceptions", difficulty: 2, points: 1, source: "Learn L12",
        prompt: "Which is an UNCHECKED exception (no catch/throws required)?", choices: ["IOException", "FileNotFoundException", "NullPointerException", "All of them"], correctIndex: 2,
        explanation: "NullPointerException is a RuntimeException → unchecked. The IO ones are checked and must be handled or declared." },
    ],
  },

  // ===================================================================== L13
  {
    id: "l13",
    code: "L13",
    title: "Abstract Classes and Interfaces",
    examScope: "final",
    topic: "abstract-interfaces",
    oneLiner: "Contracts and partial blueprints that power polymorphism",
    bigPicture:
      "Abstract classes and interfaces let you program to a TYPE without knowing the exact class — the heart of polymorphism. An abstract class is a partial blueprint you can't instantiate; an interface is a pure contract a class promises to fulfill.",
    gotchas: ["method-dispatch"],
    sections: [
      {
        heading: "Abstract classes",
        idea: "An `abstract` method has no body — just a signature. A class with any abstract method must be `abstract` and CANNOT be instantiated. Subclasses must implement the abstract methods (or be abstract themselves).",
        code: "public abstract class Shape {\n  public abstract double area();   // no body — subclasses must define it\n}\n// new Shape()  → ERROR: can't instantiate an abstract class",
        trap: "You cannot `new` an abstract class. You instantiate a concrete subclass that fills in the abstract methods.",
      },
      {
        heading: "Interfaces",
        idea: "An interface is a pure contract: a list of methods a class promises to provide via `implements`. A class can implement MANY interfaces (but extend only one class).",
        code: "public interface Drawable { void draw(); }\npublic class Circle implements Drawable {\n  public void draw() { ... }   // must fulfill the contract\n}",
      },
      {
        heading: "Polymorphism: program to the supertype",
        idea: "Hold objects by their abstract/interface type and call the shared method — each runs its own version. One line of code, many behaviors.",
        code: "Shape[] shapes = { new Circle(3), new Square(4) };\nfor (Shape s : shapes)\n  System.out.println(s.area());   // each shape's own area() runs",
        codeCaption: "The loop doesn't know or care which concrete shape it has — dynamic dispatch picks the right area().",
        trap: "This is the same dynamic dispatch as overriding ([[method-dispatch]]): the ACTUAL object decides which method body runs.",
      },
      {
        heading: "Abstract class vs interface",
        idea: "Use an abstract class to share common CODE/state among related classes; use an interface to declare a CAPABILITY many unrelated classes can promise. A class extends one abstract class but can implement many interfaces.",
      },
    ],
    drills: [
      { id: "l13-d1", type: "mc", topic: "abstract-interfaces", difficulty: 2, points: 1, source: "Learn L13",
        prompt: "Can you create an object of an abstract class directly with `new`?", choices: ["Yes", "No"], correctIndex: 1,
        explanation: "Abstract classes are incomplete (they have unimplemented methods), so you instantiate a concrete subclass instead." },
      { id: "l13-d2", type: "mc", topic: "abstract-interfaces", difficulty: 2, points: 1, source: "Learn L13",
        prompt: "How many interfaces can one class implement?", choices: ["Exactly one", "At most one", "As many as it wants", "None"], correctIndex: 2,
        explanation: "A class can implement many interfaces (but extend only one class). Interfaces are capabilities you can stack." },
      { id: "l13-d3", type: "mc", topic: "polymorphism", gotchas: ["method-dispatch"], difficulty: 2, points: 1, source: "Learn L13",
        prompt: "Looping over a `Shape[]` and calling `s.area()` — which area() runs for each element?", choices: ["Shape's", "The actual subclass's", "The first one", "Compile error"], correctIndex: 1,
        explanation: "Polymorphism / dynamic dispatch: each element's actual type (Circle, Square…) supplies the area() that runs." },
    ],
  },

  // ===================================================================== L18
  {
    id: "l18",
    code: "L18",
    title: "Recursion",
    examScope: "final",
    topic: "recursion",
    oneLiner: "A method that calls itself, shrinking toward a base case",
    bigPicture:
      "Recursion solves a problem by solving a smaller version of itself. Every recursion needs two things: a BASE CASE that stops, and a RECURSIVE CASE that moves toward it. Miss the base case and you get infinite recursion (StackOverflowError).",
    sections: [
      {
        heading: "Base case + recursive case",
        idea: "The base case is the smallest problem you can answer directly (no further calls). The recursive case calls the method on a SMALLER input and builds on the result.",
        code: "public static int factorial(int n) {\n  if (n <= 1) return 1;          // base case\n  return n * factorial(n - 1);   // recursive case (smaller n)\n}",
        codeCaption: "factorial(4) = 4 * factorial(3) = 4*3*factorial(2) = ... = 24. Each call shrinks n toward 1.",
      },
      {
        heading: "The call stack",
        idea: "Each call pauses and waits for the call it made to return, stacking up. When the base case returns, the stack unwinds and the waiting calls finish in reverse order.",
        trap: "If the recursive case doesn't move toward the base case (or there's no base case), calls stack forever → StackOverflowError." ,
      },
      {
        heading: "Recursion vs loops",
        idea: "Anything a loop does, recursion can do (and vice-versa). Recursion shines on naturally self-similar problems — trees, nested structures, divide-and-conquer.",
        code: "// sum 1..n recursively:\npublic static int sum(int n) {\n  if (n == 0) return 0;       // base\n  return n + sum(n - 1);      // recursive\n}",
      },
    ],
    drills: [
      { id: "l18-d1", type: "short", topic: "recursion", difficulty: 2, points: 1, source: "Learn L18",
        prompt: "What does factorial(4) return? `factorial(n){ if(n<=1) return 1; return n*factorial(n-1);}`", answer: "24",
        explanation: "4*3*2*1 = 24. Each call multiplies n by the factorial of n−1 until the base case (1)." },
      { id: "l18-d2", type: "mc", topic: "recursion", difficulty: 1, points: 1, source: "Learn L18",
        prompt: "What does every recursive method need to avoid running forever?", choices: ["A loop", "A base case that stops the recursion", "A static field", "Two parameters"], correctIndex: 1,
        explanation: "A base case is the stopping condition. Without one (or without shrinking toward it) you get infinite recursion → StackOverflowError." },
      { id: "l18-d3", type: "mc", topic: "recursion", difficulty: 2, points: 1, source: "Learn L18",
        prompt: "Missing or unreachable base case causes:", choices: ["a compile error", "a StackOverflowError at runtime", "the method returns 0", "nothing"], correctIndex: 1,
        explanation: "Calls keep stacking with no way to stop, exhausting the call stack → StackOverflowError at runtime." },
      { id: "l18-d4", type: "short", topic: "recursion", difficulty: 2, points: 1, source: "Learn L18",
        prompt: "What does sum(3) return? `sum(n){ if(n==0) return 0; return n+sum(n-1);}`", answer: "6",
        explanation: "3 + 2 + 1 + 0 = 6. It adds n to the sum of everything below it down to the base case 0." },
    ],
  },

  // ===================================================================== L99
  {
    id: "l99",
    code: "L99",
    title: "Testing with JUnit",
    examScope: "final",
    topic: "methods",
    oneLiner: "Automated checks that catch bugs before the grader does",
    bigPicture:
      "A unit test is code that checks your code: call a method with known input and assert the output is what you expect. JUnit runs these automatically, so a change that breaks something is caught immediately.",
    sections: [
      {
        heading: "A test is just an assertion",
        idea: "Mark a method `@Test` and use assertions to state what should be true. If an assertion fails, JUnit reports exactly which test and why.",
        code: "@Test\npublic void testAdd() {\n  assertEquals(5, calc.add(2, 3));   // expected, actual\n}",
        codeCaption: "assertEquals(expected, actual) — the expected value goes FIRST.",
      },
      {
        heading: "Common assertions",
        idea: "`assertEquals(expected, actual)`, `assertTrue(cond)`, `assertFalse(cond)`, `assertNull(x)`. Each fails the test if its claim isn't true.",
      },
      {
        heading: "Arrange, act, assert",
        idea: "A clean test sets up inputs (arrange), calls the method (act), then checks the result (assert). One behavior per test keeps failures easy to read.",
      },
    ],
    drills: [
      { id: "l99-d1", type: "mc", topic: "methods", difficulty: 1, points: 1, source: "Learn L99",
        prompt: "In `assertEquals(5, result)`, what is 5?", choices: ["the actual value", "the expected value", "a line number", "the test id"], correctIndex: 1,
        explanation: "Convention is assertEquals(expected, actual) — the value you EXPECT comes first." },
      { id: "l99-d2", type: "mc", topic: "methods", difficulty: 1, points: 1, source: "Learn L99",
        prompt: "What annotation marks a JUnit test method?", choices: ["@Run", "@Test", "@Method", "@Check"], correctIndex: 1,
        explanation: "@Test tells JUnit to run that method as a test." },
    ],
  },
];
