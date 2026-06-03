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
      {
        heading: "Immutable objects",
        idea: "An immutable object can't be changed after it's built — like String. You make a class immutable by giving it no way to mutate: the object you get is the object you keep.",
        detail:
          "Three rules: (1) all fields `private`, (2) NO setter/mutator methods, (3) no getter that hands out a reference to a mutable field. A Circle with only a constructor and getRadius() is immutable.",
        code: "public class Circle {\n  private double radius;                  // private, and never reassigned\n  public Circle(double r) { radius = r; }\n  public double getRadius() { return radius; }\n  // no setRadius() — radius can't change after construction\n}",
        trap: "All-private-fields-and-no-setters is NOT automatically immutable: if a getter returns a reference to a mutable field (an array, a Date), the caller can mutate it from outside. Hand back a copy instead.",
      },
      {
        heading: "this(...) — call another constructor",
        idea: "Inside a constructor, `this(...)` calls ANOTHER constructor of the same class. It lets a short constructor delegate to a fuller one so initialization code isn't duplicated.",
        detail:
          "Like `super(...)`, a `this(...)` call must be the FIRST statement of the constructor (and you can't use both in one). A no-arg constructor often calls the main one with default values.",
        code: "public class Rational {\n  private long num, den;\n  public Rational() { this(0, 1); }       // delegate to the 2-arg constructor\n  public Rational(long num, long den) {\n    this.num = num; this.den = den;\n  }\n}",
        trap: "`this.field` (reference a field) and `this(...)` (call a constructor) are two uses of the same word. The constructor-call form must be the FIRST line. See [[super-this]].",
      },
      {
        heading: "Local variables have no default value",
        idea: "A FIELD of a class gets a default (0, false, null, '\\u0000'). A LOCAL variable inside a method does NOT — you must assign it before you read it, or the code won't compile.",
        detail:
          "Java refuses to read a local it can't prove was initialized — that's a compile error, not a garbage value. Unlike fields, locals start as 'definitely unassigned.'",
        code: "int x;                  // a local — no default\nSystem.out.println(x);  // COMPILE ERROR: x might not be initialized\n// a field is different:\nclass Student { int age; }   // age defaults to 0",
        trap: "Fields default; locals don't. 'variable x might not have been initialized' means you read a local before assigning it. Initialize locals at declaration to be safe. See [[uninitialized-local]].",
      },
      {
        heading: "Array of objects",
        idea: "`new Circle[10]` makes an array of 10 REFERENCES, all null. The array exists, but there are no Circle objects in it yet — you must `new` each element before using it.",
        detail:
          "An array of objects is really an array of reference variables (the same way a 2D array is an array of array-references). Touching a slot you haven't filled gives a NullPointerException, because the slot holds null.",
        code: "Circle[] arr = new Circle[10];   // 10 nulls\n// arr[0].getArea();             // NullPointerException — arr[0] is null\narr[0] = new Circle(5);          // now it's a real object\narr[0].getArea();                // OK",
        trap: "After `new Circle[10]` the slots are null, not Circle objects. Calling a method on an unfilled slot throws NullPointerException — fill each with `new` first.",
      },
      {
        heading: "StringBuilder: the mutable string",
        idea: "A String can't be changed — every 'edit' actually makes a brand-new String. When you need to build or modify text repeatedly, use `StringBuilder`: a string you CAN mutate in place.",
        detail:
          "Key methods: `append(x)` adds to the end, `insert(i, x)`, `delete(start, end)`, `reverse()`, `setCharAt(i, ch)`, and `toString()` to get the finished String. (StringBuffer is the thread-safe twin; StringBuilder is the faster everyday choice.)",
        code: 'StringBuilder sb = new StringBuilder();\nsb.append("Java");\nsb.append(" rocks");    // "Java rocks"\nsb.reverse();            // "skcor avaJ"\nString result = sb.toString();',
        trap: "String is immutable; StringBuilder is mutable. Building a long string in a loop with `s = s + x` quietly creates a new String every pass — use a StringBuilder instead.",
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
      { id: "l10-d5", type: "mc", topic: "oop-basics", difficulty: 3, points: 1, source: "Learn L10",
        prompt: "All fields private and no setters — is the class definitely immutable?", choices: ["Yes, always", "No — a getter could return a reference to a mutable field"], correctIndex: 1,
        explanation: "If a getter hands out a reference to a mutable field (array, Date), callers can change it from outside. Return a copy to stay truly immutable." },
      { id: "l10-d6", type: "mc", topic: "oop-basics", gotchas: ["super-this"], difficulty: 2, points: 1, source: "Learn L10",
        prompt: "What does `this(0, 1);` as the first line of a constructor do?", choices: ["Creates two objects", "Calls another constructor of the same class", "Returns 0 and 1", "Sets this to 0"], correctIndex: 1,
        explanation: "this(args) delegates to another constructor of the same class; it must be the first statement." },
      { id: "l10-d7", type: "mc", topic: "oop-basics", gotchas: ["uninitialized-local"], difficulty: 2, points: 1, source: "Learn L10",
        prompt: "Inside a method: `int x; System.out.println(x);` —", choices: ["prints 0", "compile error (x not initialized)", "prints null", "runtime error"], correctIndex: 1,
        explanation: "Local variables have no default. Reading one before assigning is a compile error. (A field would default to 0.)" },
      { id: "l10-d8", type: "mc", topic: "oop-basics", difficulty: 2, points: 1, source: "Learn L10",
        prompt: "After `Circle[] a = new Circle[5];`, what is `a[0]`?", choices: ["a new Circle", "null", "0", "compile error"], correctIndex: 1,
        explanation: "The array holds 5 null references until you assign each with new. Calling a method on a[0] now throws NullPointerException." },
      { id: "l10-d9", type: "mc", topic: "oop-basics", difficulty: 1, points: 1, source: "Learn L10",
        prompt: "Which class lets you modify text in place instead of creating a new object on each edit?", choices: ["String", "StringBuilder", "char", "Integer"], correctIndex: 1,
        explanation: "String is immutable; StringBuilder is mutable (append/insert/reverse). Prefer it for repeated concatenation." },
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
      {
        heading: "Constructor chaining",
        idea: "Building a subclass object first builds its parent — all the way up the family tree. Each constructor's FIRST action is to call its superclass constructor, so construction runs top-down: the most ancestral constructor's body finishes first.",
        detail:
          "If you don't write `super(...)` yourself, Java inserts a no-arg `super()` for you. So `new Faculty()` → Faculty calls Employee calls Person; Person's body runs first, then Employee's, then Faculty's. Constructors are NOT inherited — they're chained.",
        code: 'class Person { Person(){ System.out.print("1 Person "); } }\nclass Employee extends Person { Employee(){ System.out.print("2 Employee "); } }\nclass Faculty extends Employee { Faculty(){ System.out.print("3 Faculty"); } }\nnew Faculty();\n// prints:  1 Person 2 Employee 3 Faculty',
        trap: "The super(...) call happens FIRST, so parent constructor bodies finish BEFORE the child's. 'Predict the output order' = print from the top of the family tree downward. See [[super-this]].",
      },
      {
        heading: "Casting objects: up and down",
        idea: "Within an inheritance tree you can retype a reference. UPcasting (subclass → superclass) is automatic and always safe. DOWNcasting (superclass → subclass) needs an explicit `(Cast)` and can blow up at runtime if the object isn't really that type.",
        detail:
          "`Object o = new Student();` upcasts for free — a Student IS an Object. To call Student-only methods you must downcast: `Student s = (Student) o;`. If `o` weren't actually a Student, that line throws ClassCastException at runtime.",
        code: "Object o = new Student();    // upcast — automatic, always safe\nStudent s = (Student) o;      // downcast — explicit, may fail\n// Object x = new Circle();\n// Student bad = (Student) x; // ClassCastException at runtime",
        trap: "A downcast COMPILES whenever the types are related, but it only SUCCEEDS if the real object is that subclass. Guard it with instanceof first.",
      },
      {
        heading: "The instanceof operator",
        idea: "`obj instanceof Type` asks 'is this object really a Type (or a subclass of it)?' and returns a boolean. Use it to check before a downcast so you never hit a ClassCastException.",
        code: "if (obj instanceof Circle) {\n  Circle c = (Circle) obj;          // safe now\n  System.out.println(c.getArea());\n}",
        trap: "instanceof is the seatbelt for downcasting. `((Circle) obj).getArea()` without first checking `obj instanceof Circle` is the textbook ClassCastException.",
      },
      {
        heading: "ArrayList — the resizable array",
        idea: "An array's size is fixed at creation. `ArrayList` is a LIST that grows and shrinks as you add and remove. Always parameterize the element type with `<...>` so you never need casts.",
        detail:
          "Key methods: `add(o)` append, `add(i, o)` insert, `get(i)` read, `set(i, o)` replace, `remove(i)` / `remove(o)` delete, `size()` count, `contains(o)`, `indexOf(o)`, `isEmpty()`.",
        code: 'import java.util.ArrayList;\nArrayList<String> cities = new ArrayList<>();\ncities.add("London");\ncities.add("Paris");\ncities.add(1, "Rome");   // insert at index 1\ncities.get(0);           // "London"\ncities.size();           // 3\ncities.remove("Paris");',
        trap: "ArrayList uses `size()` (a method, with parens) and `get(i)` — NOT `.length` or `[i]`, which are array-only. And it stores OBJECTS: `ArrayList<int>` is illegal — use `ArrayList<Integer>` (autoboxing, see [[Abstract Classes and Interfaces]]).",
      },
      {
        heading: "The final modifier",
        idea: "`final` means 'this can't change' — but what 'change' means depends on what it's attached to. A final VARIABLE is a constant; a final METHOD can't be overridden; a final CLASS can't be extended.",
        code: "final double PI = 3.14159;   // constant — cannot reassign\nfinal void lock() { ... }     // subclasses cannot override this\nfinal class Math { ... }      // nobody can extend Math",
        trap: "Three meanings, one keyword: final variable = no reassignment; final method = no override; final class = no subclass. (That's exactly why you can't `extends String`.)",
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
      { id: "l11-d5", type: "output", topic: "inheritance", gotchas: ["super-this"], difficulty: 3, points: 1, source: "Learn L11",
        prompt: "What prints?", code: 'class A { A(){ System.out.print("A"); } }\nclass B extends A { B(){ System.out.print("B"); } }\nnew B();', answer: "AB",
        explanation: "B's constructor implicitly calls super() (A) first, so A's body finishes before B's: prints A then B." },
      { id: "l11-d6", type: "mc", topic: "polymorphism", gotchas: ["method-dispatch"], difficulty: 2, points: 1, source: "Learn L11",
        prompt: 'What does `Object o = "hi"; Integer n = (Integer) o;` do?', choices: ["Compiles and runs fine", "Compile error", "ClassCastException at runtime", "Returns null"], correctIndex: 2,
        explanation: "o really holds a String, so the cast to Integer compiles (both are Objects) but throws ClassCastException at runtime. Check with instanceof first." },
      { id: "l11-d7", type: "short", topic: "inheritance", difficulty: 1, points: 1, source: "Learn L11",
        prompt: "For an ArrayList `list`, what expression gives its number of elements?", answer: "list.size()", acceptable: ["size()", "list.size();"],
        explanation: "ArrayList uses the method size() (with parentheses). Arrays use the field .length (no parentheses)." },
      { id: "l11-d8", type: "mc", topic: "inheritance", difficulty: 2, points: 1, source: "Learn L11",
        prompt: "What does `final` on a METHOD mean?", choices: ["It can't be called twice", "Subclasses can't override it", "It returns a constant", "It must be static"], correctIndex: 1,
        explanation: "A final method cannot be overridden by subclasses. (final variable = constant; final class = can't be extended.)" },
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
      {
        heading: "The Throwable hierarchy",
        idea: "Everything you can throw descends from `Throwable`, which splits in two: `Error` (the JVM is broken — out of memory, stack overflow; you don't catch these) and `Exception` (problems your program can handle). `RuntimeException` is a branch of Exception.",
        detail:
          "The checked/unchecked split maps onto the tree: `Error`, `RuntimeException`, and their subclasses are UNCHECKED (compiler doesn't force handling); everything else under `Exception` is CHECKED (must be caught or declared). NullPointerException, ArithmeticException, IndexOutOfBoundsException all live under RuntimeException → unchecked.",
        code: "Throwable\n ├─ Error           (unchecked — JVM/system; don't catch)\n └─ Exception\n     ├─ RuntimeException  (unchecked — bugs: NPE, /0, index OOB)\n     └─ IOException, ... (checked — must handle or declare)",
        trap: "A 'checked' exception is one the compiler forces you to deal with. The rule is positional in the tree: under RuntimeException or Error = unchecked; elsewhere under Exception = checked.",
      },
      {
        heading: "Exceptions propagate up the call stack",
        idea: "When code throws and the current method has no matching catch, the exception doesn't vanish — it pops up to the CALLER, then that method's caller, and so on, until some catch matches. If none does, the program crashes with a stack trace.",
        detail:
          "A catch matches only if the thrown object IS the caught type (or a subtype). A plain `Exception` is NOT an `ArithmeticException` (that's a narrower subtype), so a `catch (ArithmeticException)` lets it sail past and keep unwinding.",
        code: "method3() → throw new Exception();\nmethod2  catch (ArithmeticException)  // no match → keep unwinding\nmethod1  catch (RuntimeException)     // no match → keep unwinding\nmain     catch (Exception)            // MATCH → handled here",
        trap: "Unwinding stops at the FIRST catch whose type is the thrown type or a supertype of it. A catch for a narrower subtype won't catch a broader exception.",
      },
      {
        heading: "Defining a custom exception",
        idea: "When no built-in exception fits, make your own by EXTENDING `Exception` (for a checked one) or `RuntimeException` (unchecked). Pass a message up to `super(...)` so `getMessage()` works, and add any extra data you want to carry.",
        code: 'public class InvalidRadiusException extends Exception {\n  private double radius;\n  public InvalidRadiusException(double r) {\n    super("Invalid radius " + r);   // message for getMessage()\n    this.radius = r;\n  }\n  public double getRadius() { return radius; }\n}\n// throw it:  throw new InvalidRadiusException(-5);',
        trap: "Extend Exception (or a subclass) — you can't throw an arbitrary class. Extending Exception makes it CHECKED (callers must handle/declare it); extending RuntimeException makes it unchecked.",
      },
      {
        heading: "Text I/O: File, Scanner, PrintWriter",
        idea: "A `File` object names a file but doesn't read or write it. To READ, wrap the File in a `Scanner`; to WRITE, wrap it in a `PrintWriter`. Always `close()` when done — closing flushes buffered output to disk.",
        detail:
          "Reading: `new Scanner(new File(name))`, then `hasNext()` / `next()` / `nextInt()`. Writing: `new PrintWriter(new File(name))`, then `print` / `println` / `printf`. These can throw checked IOExceptions, so the method usually declares `throws Exception` or wraps them in try/catch.",
        code: 'import java.util.Scanner;\nimport java.io.*;\nScanner in = new Scanner(new File("scores.txt"));   // READ\nwhile (in.hasNext()) { String name = in.next(); int s = in.nextInt(); }\nin.close();\nPrintWriter out = new PrintWriter(new File("out.txt")); // WRITE\nout.println("Mary 100");\nout.close();   // must close — otherwise output can be lost',
        trap: "A File alone can't read or write — it's just a name/path. You need a Scanner (in) or PrintWriter (out) wrapped around it, and you must close() the writer or buffered output may never reach the file.",
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
      { id: "l12-d4", type: "mc", topic: "exceptions", difficulty: 2, points: 1, source: "Learn L12",
        prompt: "Which class are all Java exceptions and errors descended from?", choices: ["Exception", "Throwable", "RuntimeException", "Error"], correctIndex: 1,
        explanation: "Throwable is the root of all throwables; it splits into Error (system) and Exception (your program). (Throwable's own parent is Object.)" },
      { id: "l12-d5", type: "mc", topic: "exceptions", difficulty: 3, points: 1, source: "Learn L12",
        prompt: "A `new Exception()` is thrown in method3. method2 catches ArithmeticException, method1 catches RuntimeException, main catches Exception. Which catch handles it?", choices: ["method2", "method1", "main", "none — it crashes"], correctIndex: 2,
        explanation: "A plain Exception is NOT an ArithmeticException or RuntimeException (those are narrower subtypes), so those catches skip it. It unwinds up to main, whose catch (Exception) matches." },
      { id: "l12-d6", type: "mc", topic: "exceptions", difficulty: 2, points: 1, source: "Learn L12",
        prompt: "How do you define your own checked exception class?", choices: ["implement Exception", "extend Exception", "extend Error", "throw a String"], correctIndex: 1,
        explanation: "A custom checked exception extends Exception (or a subclass). Its constructor usually calls super(\"message\")." },
      { id: "l12-d7", type: "mc", topic: "exceptions", difficulty: 2, points: 1, source: "Learn L12",
        prompt: "You read a file with a Scanner on a File. To WRITE to a file you use:", choices: ["Scanner", "PrintWriter", "File by itself", "System.in"], correctIndex: 1,
        explanation: "PrintWriter(file) writes (print/println/printf); Scanner(file) reads. Both must be close()d — a File object alone can't read or write." },
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
        detail:
          "A 'strong is-a' (a Student IS A Person) wants class inheritance. A 'weak is-a / is-kind-of' (a String IS comparable, a House IS cloneable) wants an interface. In an interface, fields are implicitly `public static final` constants and methods are implicitly `public abstract`.",
      },
      {
        heading: "The Comparable interface",
        idea: "`Comparable` is the contract for 'objects of this type have a natural order.' Implement its one method, `compareTo`, and tools like `Arrays.sort` can order your objects automatically.",
        detail:
          "Return a NEGATIVE number if `this` comes before the other, 0 if equal, POSITIVE if after — the same sign rule as String.compareTo. String, Integer, Double, and Date already implement it; for your own class you write compareTo (often by comparing one field).",
        code: "public class Box implements Comparable {\n  private int size;\n  public int compareTo(Object o) {\n    return size - ((Box) o).size;   // negative / 0 / positive\n  }\n}\n// now Arrays.sort(boxes) can order them",
        trap: "compareTo returns an int (the SIGN matters), not a boolean. And `Arrays.sort` on YOUR objects only works if the class implements Comparable — otherwise a ClassCastException at runtime.",
      },
      {
        heading: "Wrapper classes & autoboxing",
        idea: "Primitives (`int`, `double`, `char`…) aren't objects, but collections like `ArrayList` only hold objects. Each primitive has a WRAPPER class — `Integer`, `Double`, `Character`, `Boolean`, … — that packages the value as an object.",
        detail:
          "Since Java 5 the conversion is automatic: AUTOBOXING wraps a primitive when an object is needed (`list.add(5)` stores an Integer); UNBOXING unwraps it back (`int x = list.get(0)`). Wrappers are immutable and carry handy statics: `Integer.MAX_VALUE`, `Integer.parseInt(s)`, `Double.parseDouble(s)`.",
        code: 'ArrayList<Integer> nums = new ArrayList<>();\nnums.add(5);              // autobox: int 5 → Integer\nint first = nums.get(0);  // unbox: Integer → int\nint big = Integer.MAX_VALUE;       // 2147483647\nint n = Integer.parseInt("42");    // 42',
        trap: "`ArrayList<int>` is illegal — a generic type argument must be a CLASS, so use `ArrayList<Integer>`. Autoboxing hides the wrapping, but the elements really are Integer objects (compare them with .equals, not ==).",
      },
      {
        heading: "Cloneable: shallow vs deep copy",
        idea: "`clone()` copies an object. By default it's a SHALLOW copy: primitive fields are duplicated, but a reference field (a Date, an array…) is SHARED — both copies point at the same inner object. A DEEP copy also clones those inner objects.",
        detail:
          "To allow cloning, a class implements the empty marker interface `Cloneable` and overrides `clone()`. Shallow is just `super.clone()`; for a deep copy you additionally clone each reference field by hand. The clone and the original are different objects (`==` is false) but equal in content.",
        code: "public Object clone() throws CloneNotSupportedException {\n  House h = (House) super.clone();          // shallow: shares whenBuilt\n  h.whenBuilt = (Date) whenBuilt.clone();   // deep: its own copy\n  return h;\n}",
        trap: "After a shallow copy, changing the shared inner object through one copy changes it for BOTH. Deep-copy any mutable reference field if the copies must be independent. Cloning a non-Cloneable class throws CloneNotSupportedException.",
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
      { id: "l13-d4", type: "mc", topic: "abstract-interfaces", difficulty: 2, points: 1, source: "Learn L13",
        prompt: "To let `Arrays.sort(myObjects)` sort instances of your class, the class must:", choices: ["be final", "implement Comparable (define compareTo)", "be abstract", "override toString"], correctIndex: 1,
        explanation: "Arrays.sort orders objects via compareTo, so the element class must implement Comparable — otherwise a ClassCastException at runtime." },
      { id: "l13-d5", type: "mc", topic: "abstract-interfaces", difficulty: 2, points: 1, source: "Learn L13",
        prompt: "Why is `ArrayList<int>` illegal?", choices: ["int is too big", "Generics need a class type — use ArrayList<Integer>", "ArrayList can't hold numbers", "It's actually legal"], correctIndex: 1,
        explanation: "A generic type argument must be a class, not a primitive. Use the wrapper Integer; autoboxing converts int↔Integer automatically." },
      { id: "l13-d6", type: "mc", topic: "abstract-interfaces", difficulty: 3, points: 1, source: "Learn L13",
        prompt: "After a SHALLOW copy, you mutate an object referenced by a field of the copy. The original:", choices: ["is unaffected", "also changes (they share that inner object)", "throws an exception", "becomes null"], correctIndex: 1,
        explanation: "A shallow copy duplicates the reference, not the inner object, so both point at the same one. A deep copy clones inner objects to keep them independent." },
      { id: "l13-d7", type: "short", topic: "abstract-interfaces", difficulty: 1, points: 1, source: "Learn L13",
        prompt: 'Which wrapper-class method turns the String "42" into the int 42?', answer: "Integer.parseInt", acceptable: ["parseInt", "Integer.parseInt(\"42\")", "Integer.parseInt()"],
        explanation: "Integer.parseInt(\"42\") returns the int 42. (Double.parseDouble does the same for doubles.)" },
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
      {
        heading: "Fibonacci — and why naive recursion is slow",
        idea: "The Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, …) is defined recursively: each number is the sum of the previous two. It translates straight into code with two base cases and a double recursive call.",
        detail:
          "But this naive version is SLOW: `fib(n-1)` and `fib(n-2)` overlap, so the same fib values are recomputed over and over — the work grows exponentially. The fix (called memoization or tabling) is to store each answer in an array the first time and reuse it.",
        code: "public static int fib(int n) {\n  if (n == 0) return 0;            // base case\n  if (n == 1) return 1;            // base case\n  return fib(n - 1) + fib(n - 2);  // two recursive calls (overlap!)\n}",
        trap: "Two recursive calls that overlap = exponential repeated work. fib(40) makes over a billion calls. If a recursion branches and recomputes the same inputs, that's the signal to memoize.",
      },
      {
        heading: "Recursive helper methods",
        idea: "Sometimes the natural recursion needs EXTRA bookkeeping parameters (an index, a low/high range) that the public method shouldn't expose. The trick: a clean public method that calls a private HELPER carrying those extra parameters.",
        detail:
          "Checking a palindrome by repeatedly taking substrings creates a new String every call — wasteful. Instead, pass `low` and `high` indices into a helper and just move them inward. Same idea powers recursive binary search (pass low/high).",
        code: "public static boolean isPalindrome(String s) {\n  return isPalindrome(s, 0, s.length() - 1);    // kick off the helper\n}\npublic static boolean isPalindrome(String s, int low, int high) {\n  if (high <= low) return true;                  // base case\n  if (s.charAt(low) != s.charAt(high)) return false;\n  return isPalindrome(s, low + 1, high - 1);     // shrink inward\n}",
        trap: "The helper carries the 'where am I' state through the calls so you don't rebuild data (new substrings/arrays) each time. Overloading the name keeps the public call simple.",
      },
      {
        heading: "Towers of Hanoi",
        idea: "Move n disks from tower A to B using C as a spare, never putting a bigger disk on a smaller one. The recursive insight: to move n disks, first move the top n−1 out of the way, move the big disk, then move the n−1 back on top.",
        detail:
          "Three steps, two of them recursive: move n−1 from source→aux, move disk n from source→target, move n−1 from aux→target. The base case is a single disk (just move it). It takes 2^n − 1 moves total.",
        code: 'public static void hanoi(int n, char from, char to, char aux) {\n  if (n == 1) {\n    System.out.println("Move disk 1 from " + from + " to " + to);\n  } else {\n    hanoi(n - 1, from, aux, to);   // top n-1 aside\n    System.out.println("Move disk " + n + " from " + from + " to " + to);\n    hanoi(n - 1, aux, to, from);   // n-1 onto the goal\n  }\n}',
        trap: "The two recursive calls SWAP which tower is the spare (`to`/`aux` trade places). Getting that argument order right is the whole puzzle. Total moves grow as 2^n − 1 — 3 disks = 7 moves.",
      },
      {
        heading: "GCD with Euclid's algorithm",
        idea: "The greatest common divisor has a beautiful recursive definition: `gcd(m, n)` is `n` when `n` divides `m` evenly; otherwise it's `gcd(n, m % n)`. Each step replaces the pair with a smaller pair, marching toward the base case.",
        detail:
          "Why it works: any common divisor of m and n also divides the remainder m % n, so the problem shrinks without losing the answer. It reaches the base case fast — far quicker than testing every number from min(m,n) down to 1.",
        code: "public static int gcd(int m, int n) {\n  if (m % n == 0) return n;     // base case: n divides m\n  return gcd(n, m % n);         // shrink toward the base\n}\n// gcd(12, 8) → gcd(8, 4) → 4",
        trap: "The recursive call feeds `(n, m % n)` — the second argument becomes the remainder, not m − n. Each call the numbers get smaller, guaranteeing it terminates.",
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
      { id: "l18-d5", type: "short", topic: "recursion", difficulty: 2, points: 1, source: "Learn L18",
        prompt: "With fib(0)=0, fib(1)=1, fib(n)=fib(n-1)+fib(n-2), what is fib(5)?", answer: "5",
        explanation: "Series: 0, 1, 1, 2, 3, 5 → fib(5) = 5 (fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5)." },
      { id: "l18-d6", type: "mc", topic: "recursion", difficulty: 2, points: 1, source: "Learn L18",
        prompt: "Why is naive recursive Fibonacci slow?", choices: ["Too much memory per call", "It recomputes the same subproblems exponentially", "It never reaches the base case", "Recursion is always slow"], correctIndex: 1,
        explanation: "fib(n-1) and fib(n-2) overlap, so the same fib values get recomputed again and again. Memoization/tabling stores each result once." },
      { id: "l18-d7", type: "short", topic: "recursion", difficulty: 3, points: 1, source: "Learn L18",
        prompt: "Towers of Hanoi with 3 disks takes how many moves?", answer: "7",
        explanation: "It takes 2^n - 1 moves; for n = 3 that's 2^3 - 1 = 7." },
      { id: "l18-d8", type: "short", topic: "recursion", difficulty: 2, points: 1, source: "Learn L18",
        prompt: "Using `gcd(m,n)= n if m%n==0 else gcd(n, m%n)`, what is gcd(12, 8)?", answer: "4",
        explanation: "gcd(12,8): 12%8=4≠0 → gcd(8,4): 8%4=0 → return 4." },
      { id: "l18-d9", type: "mc", topic: "recursion", difficulty: 2, points: 1, source: "Learn L18",
        prompt: "Why add a recursive HELPER method with extra low/high parameters?", choices: ["To carry progress state through the calls without rebuilding data", "To make it run twice", "Helpers are required by Java", "To skip the base case"], correctIndex: 0,
        explanation: "Extra index parameters track where you are, so each call doesn't rebuild a substring/array — far more efficient than slicing every call." },
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
      {
        heading: "Black-box vs white-box testing",
        idea: "Two complementary ways to design test cases. BLACK-BOX tests from the SPECIFICATION — what the method should do — ignoring how it's coded. WHITE-BOX (glass-box) tests from the CODE, making sure every path and branch actually runs.",
        detail:
          "Black-box is where you start: cases come from requirements, so they survive refactoring and can be written by someone who's never seen the code. White-box adds coverage of internal paths (statement, branch) to catch what spec-based cases miss. Testing reveals the PRESENCE of bugs — it can never prove their absence.",
        trap: "Black-box = from the spec (resilient to code changes); white-box = from the code's structure (path coverage). They catch different bugs, so good suites use both.",
      },
      {
        heading: "Test the boundary conditions",
        idea: "Most bugs hide at the EDGES of the valid range, not the middle. A boundary condition is an input right at a limit — so deliberately test the smallest, the largest, and the just-outside values.",
        detail:
          "Classic boundaries: an empty array (size 0), a one-element array (size 1), the maximum allowed size, and the values just below/above a threshold. These expose off-by-one logical errors and runtime errors (overflow, index-out-of-bounds, divide-by-zero).",
        code: "// boundaries worth a test case:\n//   size 0      (empty)\n//   size 1      (smallest non-trivial)\n//   size MAX    (largest allowed)\n//   index 0 and index length-1 (the two ends)",
        trap: "Don't only test 'typical' inputs. The empty case, the single-element case, and the at-the-limit case are exactly where off-by-one and overflow bugs live.",
      },
      {
        heading: "Testing exceptions & setup",
        idea: "Some behavior is 'it should THROW.' `assertThrows(SomeException.class, () -> code())` passes only if running that code raises that exception — the way you test that bad input is properly rejected.",
        detail:
          "Other useful pieces: `assertSame(a, b)` checks the SAME object (==), stricter than assertEquals's equal-contents; a `@BeforeEach` method runs before every test to set up fresh data so tests don't interfere. Keep each @Test focused on one behavior.",
        code: "@Test\nvoid rejectsNegative() {\n  assertThrows(IllegalArgumentException.class,\n               () -> StatCompiler.averageOfPosInts(-1, 2, 3));\n}",
        trap: "`assertThrows` tests that an exception HAPPENS (use it for invalid-input cases). `assertEquals` checks a value; `assertSame` checks object identity (==), which is stricter.",
      },
    ],
    drills: [
      { id: "l99-d1", type: "mc", topic: "methods", difficulty: 1, points: 1, source: "Learn L99",
        prompt: "In `assertEquals(5, result)`, what is 5?", choices: ["the actual value", "the expected value", "a line number", "the test id"], correctIndex: 1,
        explanation: "Convention is assertEquals(expected, actual) — the value you EXPECT comes first." },
      { id: "l99-d2", type: "mc", topic: "methods", difficulty: 1, points: 1, source: "Learn L99",
        prompt: "What annotation marks a JUnit test method?", choices: ["@Run", "@Test", "@Method", "@Check"], correctIndex: 1,
        explanation: "@Test tells JUnit to run that method as a test." },
      { id: "l99-d3", type: "mc", topic: "methods", difficulty: 2, points: 1, source: "Learn L99",
        prompt: "Designing test cases from the SPECIFICATION (ignoring the code) is:", choices: ["white-box testing", "black-box testing", "regression testing", "debugging"], correctIndex: 1,
        explanation: "Black-box testing works from the spec/requirements, so the tests survive refactoring. White-box uses the code's internal structure (path coverage)." },
      { id: "l99-d4", type: "mc", topic: "methods", difficulty: 2, points: 1, source: "Learn L99",
        prompt: "For a method that processes an array, which BOUNDARY case is most important to test?", choices: ["a medium-sized array", "an empty array (size 0)", "a random array", "none of these"], correctIndex: 1,
        explanation: "Edges are where bugs hide. Empty (0), single-element (1), and max-size arrays expose off-by-one and overflow errors that mid-range inputs miss." },
      { id: "l99-d5", type: "mc", topic: "methods", difficulty: 1, points: 1, source: "Learn L99",
        prompt: "Which assertion checks that calling a method THROWS an exception?", choices: ["assertEquals", "assertTrue", "assertThrows", "assertNull"], correctIndex: 2,
        explanation: "assertThrows(SomeException.class, () -> code()) passes only if that code raises the given exception — how you test that bad input is rejected." },
    ],
  },
];
