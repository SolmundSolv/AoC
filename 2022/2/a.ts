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
    for (let j = 0; j < 2; j++) {
        if (newInput[i][j] == "A") {
            if (newInput[i][j + 2] == "Y") {
                // console.log(newInput[i][j] + " < " + newInput[i][j + 2] + " = 8");
                sum += 8;
            } else if (newInput[i][j + 2] == "X") {
                // console.log(newInput[i][j] + " = " + newInput[i][j + 2] + " = 4");
                sum += 4;
            } else if (newInput[i][j + 2] == "Z") {
                // console.log(newInput[i][j] + " > " + newInput[i][j + 2] + " = 3");
                sum += 3;
            }
        } else if (newInput[i][j] == "B") {
            if (newInput[i][j + 2] == "Z") {
                // console.log(newInput[i][j] + " < " + newInput[i][j + 2] + " = 9");
                sum += 9;
            } else if (newInput[i][j + 2] == "Y") {
                // console.log(newInput[i][j] + " = " + newInput[i][j + 2] + " = 5");
                sum += 5;
            } else if (newInput[i][j + 2] == "X") {
                // console.log(newInput[i][j] + " > " + newInput[i][j + 2] + " = 1");
                sum += 1;
            }
        } else if (newInput[i][j] == "C") {
            if (newInput[i][j + 2] == "X") {
                // console.log(newInput[i][j] + " < " + newInput[i][j + 2] + " = 7");
                sum += 7;
            } else if (newInput[i][j + 2] == "Z") {
                // console.log(newInput[i][j] + " = " + newInput[i][j + 2] + " = 6");
                sum += 6;
            } else if (newInput[i][j + 2] == "Y") {
                // console.log(newInput[i][j] + " > " + newInput[i][j + 2] + " = 2");
                sum += 2;
            }
        }
    }
}
console.log("1. " + sum);
sum = 0;

//2.
for (let i = 0; i < newInput.length; i++) {
    for (let j = 0; j < 2; j++) {
        if (newInput[i][j] == "A") {
            if (newInput[i][j + 2] == "X") {
                // console.log("A - X - Rock - Sicssors - Lose - 0, Scissors - 3");
                sum += 3;
            } else if (newInput[i][j + 2] == "Y") {
                // console.log("A - Y - Rock - Rock - Draw - 3, Rock - 1");
                sum += 4;
            } else if (newInput[i][j + 2] == "Z") {
                // console.log("A - Z - Rock - Paper - Win - 6, Paper - 2");
                sum += 8;
            }
        } else if (newInput[i][j] == "B") {
            if (newInput[i][j + 2] == "X") {
                // console.log("B - X - Paper - Rock - Lose - 0, Rock - 1");
                sum += 1;
            } else if (newInput[i][j + 2] == "Y") {
                // console.log("B - Y - Paper - Paper - Draw - 3, Paper - 2");
                sum += 5;
            } else if (newInput[i][j + 2] == "Z") {
                // console.log("B - Z - Paper - Scissors - Win - 6, Scissors - 3");
                sum += 9;
            }
        } else if (newInput[i][j] == "C") {
            if (newInput[i][j + 2] == "X") {
                // console.log("C - X - Scissors - Paper - Lose - 0, Paper - 2");
                sum += 2;
            } else if (newInput[i][j + 2] == "Y") {
                // console.log("C - Y - Scissors - Scissors - Draw - 3, Scissors - 3");
                sum += 6;
            } else if (newInput[i][j + 2] == "Z") {
                // console.log("C - Z - Scissors - Rock - Win - 6, Rock - 1");
                sum += 7;
            }
        }
    }
}
console.log("2. " + sum);
