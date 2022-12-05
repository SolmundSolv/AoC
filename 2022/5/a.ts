const moves = Deno.readTextFileSync("input.txt");
const storage = Deno.readTextFileSync("inputB.txt");
const lines = storage.split("\r\n");
const piles1: string[][] = new Array(9);
for (let i = 0; i < 9; i++) {
    piles1[i] = new Array();
}
const piles2: string[][] = new Array(9);
for (let i = 0; i < 9; i++) {
    piles2[i] = new Array();
}
let z = 0;
for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        // regex to find the Capital letters
        if (/[A-Z]/.test(lines[i][j])) {
            z = Math.floor(j / 4);
            piles1[z].push(lines[i][j]);
            piles2[z].push(lines[i][j]);
        }
    }
}
for (let i = 0; i < 9; i++) {
    piles1[i] = piles1[i].reverse();
    piles2[i] = piles2[i].reverse();
}
const movesArr = moves.split("\r\n");
//find numbers in string
const regex = /\d+/g;
let move: string[] = [];
let movesCounter: number;
let pileBuffer: string[] = [];
let pile1: number;
let pile2: number;
let card: string;
for (let i = 0; i < movesArr.length; i++) {
    //@ts-ignore
    move = movesArr[i].match(regex);
}
// console.log(move);

for (let i = 0; i < move.length / 3; i++) {
    movesCounter = Number(move[i * 3]);
    pile1 = Number(move[i * 3 + 1]);
    pile2 = Number(move[i * 3 + 2]);
    for (let j = 0; j < movesCounter; j++) {
        // @ts-ignore
        card = piles1[pile1 - 1].pop();
        piles1[pile2 - 1].push(card);
    }
}
console.log("1.");
console.log(
    `${piles1[0][piles1[0].length - 1]}${piles1[1][piles1[1].length - 1]}${
        piles1[2][piles1[2].length - 1]
    }${piles1[3][piles1[3].length - 1]}${piles1[4][piles1[4].length - 1]}${
        piles1[5][piles1[5].length - 1]
    }${piles1[6][piles1[6].length - 1]}${piles1[7][piles1[7].length - 1]}${
        piles1[8][piles1[8].length - 1]
    }`
);

for (let i = 0; i < move.length / 3; i++) {
    movesCounter = Number(move[i * 3]);
    pile1 = Number(move[i * 3 + 1]);
    pile2 = Number(move[i * 3 + 2]);
    for (let j = 0; j < movesCounter; j++) {
        // @ts-ignore
        card = piles2[pile1 - 1].pop();
        pileBuffer.push(card);
    }
    for (let j = 0; j < movesCounter; j++) {
        // @ts-ignore
        card = pileBuffer.pop();
        piles2[pile2 - 1].push(card);
    }
}
console.log("2.");
console.log(
    `${piles2[0][piles2[0].length - 1]}${piles2[1][piles2[1].length - 1]}${
        piles2[2][piles2[2].length - 1]
    }${piles2[3][piles2[3].length - 1]}${piles2[4][piles2[4].length - 1]}${
        piles2[5][piles2[5].length - 1]
    }${piles2[6][piles2[6].length - 1]}${piles2[7][piles2[7].length - 1]}${
        piles2[8][piles2[8].length - 1]
    }`
);
