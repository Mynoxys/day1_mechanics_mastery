// Transcribed verbatim from "CSE114 Final Practice 2" (+ official solutions).
// 6 code-writing problems, 120-minute / 100-point exam. All self-graded against
// the reference. Heavy on loops-vs-recursion, OOP design, inheritance, sorting.

import type { ExamSet } from "../types";

export const finalPractice2: ExamSet = {
  id: "final-practice-2",
  title: "Final Practice 2",
  examType: "final",
  durationMinutes: 120,
  blurb: "Pattern printing (loops & recursion), class design, inheritance, and sorting.",
  questions: [
    {
      id: "fp2-q1",
      type: "code",
      topic: "control-flow",
      gotchas: ["ternary-type"],
      difficulty: 2,
      points: 10,
      prompt:
        "Write `tartan(int n)` using for-loops. It prints an n×n grid alternating n and n-1, starting with n in the top-left, separated by spaces.\ntartan(3):\n3 2 3\n2 3 2\n3 2 3",
      referenceSolution:
        'public class YoungMcJava {\n  public static void main(String[] args) {\n    tartan(3);\n    tartan(4);\n  }\n  public static void tartan(int n) {\n    for (int i = 1; i <= n; i++) {       // rows\n      for (int j = 1; j <= n; j++)        // columns\n        System.out.print(((i + j) % 2 == 0 ? n : n - 1) + " ");\n      System.out.println();\n    }\n  }\n}',
      rubric: ["Nested row/column for-loops", "Cell value chosen by (i+j) parity", "println after each row"],
      explanation:
        "A checkerboard is a parity problem: whether a cell shows n or n−1 depends on whether (row+column) is even or odd. The ternary `(i+j)%2==0 ? n : n-1` captures that in one expression; the outer loop ends each row with a newline.",
    },
    {
      id: "fp2-q2",
      type: "code",
      topic: "recursion",
      difficulty: 3,
      points: 10,
      prompt: "Reimplement tartan(n) from Q1 WITHOUT any loops — recursion only.",
      referenceSolution:
        "public static void tartan(int n) {\n  tartanRows(1, n);\n}\n// recurse over rows\npublic static void tartanRows(int i, int n) {\n  if (i == n + 1) return;            // base case: past the last row\n  tartanOneRow(i, 1, n);\n  tartanRows(i + 1, n);\n}\n// recurse over columns of one row\npublic static void tartanOneRow(int i, int j, int n) {\n  if (j > n) { System.out.println(); return; }   // base case: row done\n  System.out.print(((i + j) % 2 == 0 ? n : n - 1) + \" \");\n  tartanOneRow(i, j + 1, n);\n}",
      rubric: ["Two recursive methods: one over rows, one over columns", "Each has a base case (i past last row / j past last column)", "Same (i+j) parity rule for the value"],
      explanation:
        "Each loop becomes a recursive method: the row recursion stops at i == n+1, the column recursion stops at j > n (and prints the newline there). Recursion replaces a loop by calling itself with the counter advanced by one until the base case.",
    },
    {
      id: "fp2-q3",
      type: "code",
      topic: "oop-basics",
      gotchas: ["char-arithmetic", "exception-order"],
      difficulty: 3,
      points: 20,
      prompt:
        "Write class `IPAddress` storing a private int `intIP`. Include: (a) empty + int constructors, accessor/mutator; (b) `byte[] extractIPaddressBytes()` that prints and returns the 4 bytes (e.g. 839391568 → 50.8.25.80); (c) `setIntIP(byte[])` packing 4 bytes into the int, throwing if length != 4, plus a byte[] constructor; (d) a test main.",
      referenceSolution:
        'public class IPAddress {\n  private int intIP;\n  public IPAddress() {}\n  public IPAddress(int intIP) { this.intIP = intIP; }\n  public IPAddress(byte[] bs) throws Exception { setIntIP(bs); }\n\n  public int getIntIP() { return intIP; }\n  public void setIntIP(int intIP) { this.intIP = intIP; }\n\n  public byte[] extractIPaddressBytes() {\n    System.out.println("IP Address in single int: " + intIP);\n    byte[] bs = new byte[4];\n    bs[3] = (byte)(intIP % 256);\n    int v = intIP / 256;\n    bs[2] = (byte)(v % 256);  v = v / 256;\n    bs[1] = (byte)(v % 256);\n    bs[0] = (byte)(v / 256);\n    System.out.println("IP Address: " + bs[0] + "." + bs[1] + "." + bs[2] + "." + bs[3]);\n    return bs;\n  }\n\n  public void setIntIP(byte[] bs) throws Exception {\n    if (bs.length != 4) throw new Exception("Not enough arguments");\n    intIP = ((bs[0] * 256 + bs[1]) * 256 + bs[2]) * 256 + bs[3];\n  }\n\n  public static void main(String[] args) throws Exception {\n    IPAddress ip1 = new IPAddress(839391568);\n    IPAddress ip2 = new IPAddress(new byte[]{50, 8, 25, 81});\n    ip1.extractIPaddressBytes();\n    ip2.extractIPaddressBytes();\n    byte[] bs3 = {50, 8, 25, 82};\n    ip1.setIntIP(bs3); ip2.setIntIP(bs3);\n  }\n}',
      rubric: [
        "Private intIP with empty + int (+ byte[]) constructors and get/set",
        "Extract bytes via repeated % 256 and / 256 (256 = one byte)",
        "Pack with ((b0*256+b1)*256+b2)*256+b3",
        "setIntIP(byte[]) throws when length != 4",
      ],
      explanation:
        "An IP is four bytes stuffed into one int. % 256 peels off the lowest byte, / 256 shifts to the next — repeat four times to extract. Packing is the reverse: build the int by ((b0*256+b1)*256+b2)*256+b3. The 'not enough arguments' case is what the throws/exception is for.",
    },
    {
      id: "fp2-q4",
      type: "code",
      topic: "oop-basics",
      gotchas: ["array-oob", "integer-division"],
      difficulty: 3,
      points: 20,
      prompt:
        "Write class `Person` (private name + date of birth from a \"mm/dd/yyyy\" string; constructors, accessors, toString). Add `static int calculateAverageAge(Person[] ps)` returning the average age rounded to the nearest whole number — and the array may have NULL gaps. Include a test main.",
      referenceSolution:
        'import java.util.*;\npublic class Person {\n  private String name;\n  private Calendar dob;\n  public Person() {}\n  public Person(String name, String dob) {\n    this.name = name;\n    this.dob = new GregorianCalendar(\n      Integer.parseInt(dob.substring(6, 10)),   // yyyy\n      Integer.parseInt(dob.substring(0, 2)),    // mm\n      Integer.parseInt(dob.substring(3, 5)));   // dd\n  }\n  public int getAge() {\n    Calendar now = new GregorianCalendar();\n    int age = now.get(Calendar.YEAR) - dob.get(Calendar.YEAR);\n    if (now.get(Calendar.MONTH) < dob.get(Calendar.MONTH)) age--;\n    return age;\n  }\n  public static int calculateAverageAge(Person[] ps) {\n    int sum = 0, count = 0;\n    for (int i = 0; i < ps.length; i++)\n      if (ps[i] != null) { sum += ps[i].getAge(); count++; }\n    return count != 0 ? (int) Math.round(((double) sum) / count) : 0;\n  }\n  public static void main(String[] args) {\n    Person[] ps = new Person[5];\n    ps[0] = new Person("Paul", "01/01/1940");\n    ps[2] = new Person("John", "01/01/1940");   // gaps at 1,3,4\n    System.out.println(calculateAverageAge(ps));\n  }\n}',
      rubric: [
        "Parses mm/dd/yyyy with substring + parseInt",
        "calculateAverageAge SKIPS null slots (the 'gaps')",
        "Average cast to double then Math.round (so .5 rounds up)",
        "Counts only non-null people, avoids divide-by-zero",
      ],
      explanation:
        "Two traps: the array isn't packed, so you must `if (ps[i] != null)` before touching it (else NullPointerException), and you count only the real people. For correct rounding, divide as a double and Math.round — int division would truncate and never round up.",
    },
    {
      id: "fp2-q5",
      type: "code",
      topic: "inheritance",
      gotchas: ["super-this"],
      difficulty: 3,
      points: 20,
      prompt:
        'Write `Employee extends Person` with a `long salary`. The constructor takes name, date "12/12/1990", and salary as a string with commas ("150,000"). toString prints like "Employee: John Doe 11 12, 1990($150,000)" — parse the commas, and re-insert them in output. (Make Person\'s fields protected.)',
      referenceSolution:
        'public class Employee extends Person {\n  private long salary;\n  public Employee(String name, String d, String s) {\n    super(name, d);                 // parent does the date parsing\n    String[] parts = s.split(",");\n    salary = 0;\n    for (int i = 0; i < parts.length; i++)\n      salary = salary * 1000 + Integer.parseInt(parts[i]);\n  }\n  public String toString() {\n    return "Employee: " + super.toString() + "($" + withCommas(salary) + ")";\n  }\n  private String withCommas(long l) {\n    if (l < 1000) return "" + l;\n    long rest = l % 1000;\n    String tail = rest > 99 ? "" + rest : rest > 9 ? "0" + rest : "00" + rest;\n    return withCommas(l / 1000) + "," + tail;\n  }\n}',
      rubric: [
        "super(name, d) chains to Person's constructor",
        "Parse: split on ',' and rebuild via salary*1000 + nextGroup",
        "toString calls super.toString() and re-inserts commas",
        "Comma re-insertion pads groups to 3 digits (e.g. 150,000 not 150,0)",
      ],
      explanation:
        "Two halves: stripping commas (split on ',', then fold each 3-digit group in with *1000) and putting them back (recurse on l/1000, pad the trailing group to 3 digits). `super(...)` reuses the parent's date parsing instead of duplicating it.",
    },
    {
      id: "fp2-q6",
      type: "code",
      topic: "arrays",
      difficulty: 3,
      points: 20,
      prompt:
        'Write class `Cards` with `static String[] sortCards(String[])` sorting by suit (Clubs < Diamonds < Hearts < Spades) then by rank (A < 2 < … < 10 < J < Q < K). e.g. ["8H","10H","QD","JD","4S"] → ["JD","QD","8H","10H","4S"].',
      referenceSolution:
        'public class Cards {\n  public static String[] sortCards(String[] s) {        // selection sort\n    for (int i = s.length - 1; i >= 1; i--) {\n      int maxIdx = 0;\n      for (int j = 1; j <= i; j++)\n        if (cardLessThan(s[maxIdx], s[j])) maxIdx = j;\n      String tmp = s[i]; s[i] = s[maxIdx]; s[maxIdx] = tmp;\n    }\n    return s;\n  }\n  static boolean cardLessThan(String a, String b) {\n    char sa = a.charAt(a.length() - 1);     // suit char: C<D<H<S in Unicode too\n    char sb = b.charAt(b.length() - 1);\n    if (sa != sb) return sa < sb;\n    return rank(a) < rank(b);\n  }\n  static int rank(String card) {\n    String r = card.substring(0, card.length() - 1);\n    if (r.equals("A")) return 1;\n    if (r.equals("J")) return 11;\n    if (r.equals("Q")) return 12;\n    if (r.equals("K")) return 13;\n    return Integer.parseInt(r);\n  }\n}',
      rubric: [
        "A comparator that splits each card into suit (last char) and rank (the rest)",
        "Suit ordered C<D<H<S (their chars already sort that way)",
        "Rank maps A→1, J/Q/K→11/12/13, digits via parseInt",
        "Any correct sort (selection sort shown) using that comparator",
      ],
      explanation:
        "Split the comparison: compare suits first, and only break ties by rank. The suit letters C, D, H, S already sort in the right order as chars, so `sa < sb` works; rank needs a small lookup since A/J/Q/K aren't digits. Wrap any sort (selection sort here) around that comparator.",
    },
  ],
};
