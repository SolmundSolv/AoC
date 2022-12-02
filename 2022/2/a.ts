const input = await Deno.readTextFile("input.txt");
//A - Rock     - 1
//B - Paper    - 2
//C - Scissors - 3

//X - Lose
//Y - Draw
//Z - Win

//Won - 6
//Draw - 3
//Lost - 0

const newInput = input.split("\r\n");
let sum = 0;

//1.
for (let i = 0; i < newInput.length; i++) {
    if (newInput[i][0] == "A") {
        if (newInput[i][2] == "Y") sum += 8;
        if (newInput[i][2] == "X") sum += 4;
        if (newInput[i][2] == "Z") sum += 3;
    }
    if (newInput[i][0] == "B") {
        if (newInput[i][2] == "Z") sum += 9;
        if (newInput[i][2] == "Y") sum += 5;
        if (newInput[i][2] == "X") sum += 1;
    }
    if (newInput[i][0] == "C") {
        if (newInput[i][2] == "X") sum += 7;
        if (newInput[i][2] == "Z") sum += 6;
        if (newInput[i][2] == "Y") sum += 2;
    }
}
console.log("1. " + sum);
sum = 0;

//2.
for (let i = 0; i < newInput.length; i++) {
    if (newInput[i][0] == "A") {
        if (newInput[i][2] == "X") sum += 3;
        if (newInput[i][2] == "Y") sum += 4;
        if (newInput[i][2] == "Z") sum += 8;
    }
    if (newInput[i][0] == "B") {
        if (newInput[i][2] == "X") sum += 1;
        if (newInput[i][2] == "Y") sum += 5;
        if (newInput[i][2] == "Z") sum += 9;
    }
    if (newInput[i][0] == "C") {
        if (newInput[i][2] == "X") sum += 2;
        if (newInput[i][2] == "Y") sum += 6;
        if (newInput[i][2] == "Z") sum += 7;
    }
}
console.log("2. " + sum);
