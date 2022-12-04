const input = await Deno.readTextFile("input.txt");
const lines = input.split("\n");
const floor = lines.map((line) => line.split(","));
const floorRange = floor.map((line) => line.map((tile) => tile.split("-")));

// console.log(floorRange);

let sum = 0;

for (let i = 0; i < lines.length; i++) {
    const range = lines[i].split(",");
    const first = range[0].split("-");
    const second = range[1].split("-");
    const startFrist = parseInt(first[0]);
    const endFrist = parseInt(first[1]);
    const startSecond = parseInt(second[0]);
    const endSecond = parseInt(second[1]);

    if (
        (startFrist <= startSecond && endSecond <= endFrist) ||
        (startSecond <= startFrist && endFrist <= endSecond)
    ) {
        sum++;
    }
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
