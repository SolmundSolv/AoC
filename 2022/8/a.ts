const input = Deno.readTextFileSync("input.txt");
// console.log(input);
const lines = input.split("\n");
const length = lines.length;
const width = lines[0].length;
//1.
let visible = true;
let count = (length + width - 2) * 2;
for (let i = 1; i < lines.length - 1; i++) {
    for (let j = 1; j < lines[i].length - 1; j++) {
        visible = true;
        // console.log("Checking: " + i + " " + j);
        for (let k = 0; k < i; k++) {
            // console.log("Top: " + k);
            if (lines[k][j] >= lines[i][j]) {
                visible = false;
                break;
            }
        }
        if (visible) {
            // console.log("Visible from top: " + i + " " + j);
            count++;
            continue;
        }
        visible = true;
        for (let k = i + 1; k < lines.length; k++) {
            // console.log("Bot: " + k + " " + j);
            if (lines[k][j] >= lines[i][j]) {
                visible = false;
                break;
            }
        }
        if (visible) {
            // console.log("Visible from bot: " + i + " " + j);
            count++;
            continue;
        }
        visible = true;
        for (let k = 0; k < j; k++) {
            // console.log("Right: " + k);
            if (lines[i][k] >= lines[i][j]) {
                visible = false;
                break;
            }
        }
        if (visible) {
            // console.log("Visible from right: " + i + " " + j);
            count++;
            continue;
        }
        visible = true;
        for (let k = j + 1; k < lines[0].length; k++) {
            // console.log("Left: " + i + " " + k);
            if (lines[i][k] >= lines[i][j]) {
                visible = false;
                break;
            }
        }
        if (visible) {
            // console.log("Visible from left: " + i + " " + j);
            count++;
            continue;
        }
    }
}
console.log("1. " + count);
let top = 0;
let bot = 0;
let left = 0;
let right = 0;
let sum = 0;
const views = [];
for (let i = 1; i < lines.length - 1; i++) {
    for (let j = 1; j < lines[i].length - 1; j++) {
        // console.log("Checking: " + i + " " + j);
        for (let k = i - 1; k >= 0; k--) {
            // console.log("Top: " + k);
            top++;
            if (lines[k][j] >= lines[i][j]) {
                break;
            }
        }
        for (let k = i + 1; k < lines.length; k++) {
            // console.log("Bot: " + k + " " + j);
            bot++;
            if (lines[k][j] >= lines[i][j]) {
                break;
            }
        }
        for (let k = j - 1; k >= 0; k--) {
            // console.log("Left: " + k);
            left++;
            if (lines[i][k] >= lines[i][j]) {
                break;
            }
        }
        for (let k = j + 1; k < lines[0].length; k++) {
            // console.log("Right: " + i + " " + k);
            right++;
            if (lines[i][k] >= lines[i][j]) {
                break;
            }
        }
        // console.log("Top: " + top);
        // console.log("Bot: " + bot);
        // console.log("Left: " + left);
        // console.log("Right: " + right);
        sum = top * bot * left * right;
        // console.log("Sum: " + sum);
        views.push(sum);
        top = 0;
        bot = 0;
        left = 0;
        right = 0;
    }
}
// console.log(views);
console.log("2. " + Math.max(...views));
