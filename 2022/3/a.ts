const input = await Deno.readTextFile("input.txt");
const lines = input.split("\r\n");
const firstHalfLines = lines.map((line) => line.slice(0, line.length / 2));
const secondHalfLines = lines.map((line) => line.slice(line.length / 2));

const numberMap = new Map();
numberMap.set("a", 1);
numberMap.set("b", 2);
numberMap.set("c", 3);
numberMap.set("d", 4);
numberMap.set("e", 5);
numberMap.set("f", 6);
numberMap.set("g", 7);
numberMap.set("h", 8);
numberMap.set("i", 9);
numberMap.set("j", 10);
numberMap.set("k", 11);
numberMap.set("l", 12);
numberMap.set("m", 13);
numberMap.set("n", 14);
numberMap.set("o", 15);
numberMap.set("p", 16);
numberMap.set("q", 17);
numberMap.set("r", 18);
numberMap.set("s", 19);
numberMap.set("t", 20);
numberMap.set("u", 21);
numberMap.set("v", 22);
numberMap.set("w", 23);
numberMap.set("x", 24);
numberMap.set("y", 25);
numberMap.set("z", 26);
numberMap.set("A", 27);
numberMap.set("B", 28);
numberMap.set("C", 29);
numberMap.set("D", 30);
numberMap.set("E", 31);
numberMap.set("F", 32);
numberMap.set("G", 33);
numberMap.set("H", 34);
numberMap.set("I", 35);
numberMap.set("J", 36);
numberMap.set("K", 37);
numberMap.set("L", 38);
numberMap.set("M", 39);
numberMap.set("N", 40);
numberMap.set("O", 41);
numberMap.set("P", 42);
numberMap.set("Q", 43);
numberMap.set("R", 44);
numberMap.set("S", 45);
numberMap.set("T", 46);
numberMap.set("U", 47);
numberMap.set("V", 48);
numberMap.set("W", 49);
numberMap.set("X", 50);
numberMap.set("Y", 51);
numberMap.set("Z", 52);

let sum = 0;
// 1.
for (let i = 0; i < firstHalfLines.length; i++) {
    const firstHalfLine = firstHalfLines[i];
    const secondHalfLine = secondHalfLines[i];
    const firstHalfLineChars = firstHalfLine.split("");
    const secondHalfLineChars = secondHalfLine.split("");
    const firstHalfLineCharsSet = new Set(firstHalfLineChars);
    const secondHalfLineCharsSet = new Set(secondHalfLineChars);
    const intersection = new Set(
        [...firstHalfLineCharsSet].filter((x) => secondHalfLineCharsSet.has(x))
    );
    sum += numberMap.get(intersection.values().next().value);
    // console.log(numberMap.get(intersection.values().next().value));
}
console.log("1. " + sum);

// 2.
sum = 0;

for (let i = 0; i < lines.length / 3; i++) {
    const firstLine = lines[i * 3];
    const secondLine = lines[i * 3 + 1];
    const thirdLine = lines[i * 3 + 2];
    const firstLineChars = firstLine.split("");
    const secondLineChars = secondLine.split("");
    const thirdLineChars = thirdLine.split("");
    const firstLineCharsSet = new Set(firstLineChars);
    const secondLineCharsSet = new Set(secondLineChars);
    const thirdLineCharsSet = new Set(thirdLineChars);
    const intersection = new Set([...firstLineCharsSet].filter((x) => secondLineCharsSet.has(x)));
    const intersection2 = new Set([...intersection].filter((x) => thirdLineCharsSet.has(x)));
    sum += numberMap.get(intersection2.values().next().value);
    // console.log(numberMap.get(intersection2.values().next().value));
}
console.log("2. " + sum);
