const input = Deno.readTextFileSync("input.txt");
// console.log(input);
const test1 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
const test2 = "nppdvjthqldpwncqszvftbrmjlhg";
const test3 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
const test4 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";

let lastFourLetters = init(input, 4);
let lastFourteenLetters = init(input, 14);

for (let i = 4; i < input.length; i++) {
    if (!hasRepeats(lastFourLetters)) {
        console.log("1. " + i);
        break;
    }
    //slice first letter and add the new one to the end
    lastFourLetters = lastFourLetters.slice(1) + input[i];
}

for (let i = 14; i < input.length; i++) {
    if (!hasRepeats(lastFourteenLetters)) {
        console.log("2. " + i);
        break;
    }
    //slice first letter and add the new one to the end
    lastFourteenLetters = lastFourteenLetters.slice(1) + input[i];
}

function hasRepeats(str: string) {
    return /(.).*\1/.test(str);
}

function init(str: string, length: number) {
    //first 14 letters
    return str.slice(0, length);
}
