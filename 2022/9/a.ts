const input = Deno.readTextFileSync("input.txt");
const moves = input.split("\n").map((line) => line.split(" "));
// console.log(moves);
//create array andn fill it with [0,0]
let shortSnake = Array.from({ length: 2 }, () => [0, 0]);
let longSnake = Array.from({ length: 10 }, () => [0, 0]);
const tailsWitchTailTouch1: number[][] = [];
const tailsWitchTailTouch2: number[][] = [];
let tailTouch = false;
function moveHead(snake: number[][], move: string, length: number) {
    const head = snake[0];
    for (let i = 0; i < length; i++) {
        // console.log(snake);
        if (move === "U") {
            head[1]++;
        } else if (move === "D") {
            head[1]--;
        } else if (move === "R") {
            head[0]++;
        } else if (move === "L") {
            head[0]--;
        }
        for (let j = 0; j < snake.length - 1; j++) {
            followTail(snake[j], snake[j + 1]);
        }
        BetterSet(snake[1], tailsWitchTailTouch1);
        BetterSet(snake[snake.length - 1], tailsWitchTailTouch2);
    }
}
for (let i = 0; i < moves.length; i++) {
    moveHead(longSnake, moves[i][0], Number(moves[i][1]));
}
console.log("1. " + tailsWitchTailTouch1.length);
console.log("2. " + tailsWitchTailTouch2.length);

function BetterSet(tail: number[], set: number[][]) {
    tailTouch = true;
    for (let i = 0; i < set.length; i++) {
        if (tail[0] == set[i][0] && tail[1] == set[i][1]) tailTouch = false;
    }
    // console.log([tail[0], tail[1]]);
    if (tailTouch) set.push([tail[0], tail[1]]);
}

function followTail(head: number[], tail: number[]) {
    if (head[0] >= tail[0] + 2 && head[1] > tail[1]) {
        // x = "1";
        tail[0]++;
        tail[1]++;
    }
    if (head[0] >= tail[0] + 2 && head[1] < tail[1]) {
        // x = "2";
        tail[0]++;
        tail[1]--;
    }
    if (head[0] <= tail[0] - 2 && head[1] > tail[1]) {
        // x = "3";
        tail[0]--;
        tail[1]++;
    }
    if (head[0] <= tail[0] - 2 && head[1] < tail[1]) {
        // x = "4";
        tail[0]--;
        tail[1]--;
    }
    if (head[0] > tail[0] && head[1] >= tail[1] + 2) {
        // x = "5";
        tail[0]++;
        tail[1]++;
    }
    if (head[0] < tail[0] && head[1] >= tail[1] + 2) {
        // x = "6";
        tail[0]--;
        tail[1]++;
    }
    if (head[0] > tail[0] && head[1] <= tail[1] - 2) {
        // x = "7";
        tail[0]++;
        tail[1]--;
    }
    if (head[0] < tail[0] && head[1] <= tail[1] - 2) {
        // x = "8";
        tail[0]--;
        tail[1]--;
    }
    if (head[0] >= tail[0] + 2 && head[1] == tail[1]) {
        // x = "9";
        tail[0]++;
    }
    if (head[0] <= tail[0] - 2 && head[1] == tail[1]) {
        // x = "A";
        tail[0]--;
    }
    if (head[0] == tail[0] && head[1] >= tail[1] + 2) {
        // x = "B";
        tail[1]++;
    }
    if (head[0] == tail[0] && head[1] <= tail[1] - 2) {
        // x = "C";
        tail[1]--;
    }
}
