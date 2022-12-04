const input = await Deno.readTextFile("input.txt");
const lines = input.split("\n");
const floor = lines.map((line) => line.split(","));
const floorRange = floor.map((line) => line.map((tile) => tile.split("-")));

// console.log(floorRange);

let overlap = false;
let sum = 0;
let one = " ";
let two = " ";

// console.log(floorRange[999][1][0]);
for (let i = 0; i < lines.length; i++) {
    for (let k = parseInt(floorRange[i][0][0]); k <= parseInt(floorRange[i][0][1]); k++) {
        one += k.toString() + ", ";
    }
    for (let k = parseInt(floorRange[i][1][0]); k <= parseInt(floorRange[i][1][1]); k++) {
        two += k.toString() + ", ";
    }
    //check if one string contains the other
    if (one.includes(two) || two.includes(one)) {
        sum += 1;
    }
    one = " ";
    two = " ";
}
console.log("1. " + sum);
sum = 0;

for (let i = 0; i < lines.length; i++) {
    for (let k = parseInt(floorRange[i][0][0]); k <= parseInt(floorRange[i][0][1]); k++) {
        if (parseInt(floorRange[i][1][0]) <= k && k <= parseInt(floorRange[i][1][1])) {
            sum += 1;
            break;
        }
    }
}

console.log("2. " + sum);
