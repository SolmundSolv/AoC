const input = await Deno.readTextFile("input.txt");

const sum = input.split("\r\n");
const sum2: number[] = [];
let sum3 = 0;

sum.map((x) => {
    if (x == "") {
        sum2.push(sum3);
        sum3 = 0;
    } else {
        sum3 += parseInt(x);
    }
});

const max = Math.max(...sum2);
console.log("1. " + max);

const topThree = sum2.sort((a, b) => b - a).slice(0, 3);
const topThreeProduct = topThree.reduce((a, b) => a + b);
console.log("2. " + topThreeProduct);
