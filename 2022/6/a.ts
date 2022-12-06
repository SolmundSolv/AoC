const input = Deno.readTextFileSync("input.txt");
// console.log(input);
const test1 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
const test2 = "nppdvjthqldpwncqszvftbrmjlhg";
const test3 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
const test4 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";

console.log("1. " + testing(input, 4));
console.log("2. " + testing(input, 14));

function hasRepeats(str: string) {
    return /(.).*\1/.test(str);
}

function init(str: string, length: number) {
    //first 14 letters
    return str.slice(0, length);
}

function testing(input: string, length: number) {
    let lastLetters = init(input, length);
    for (let i = length; i < input.length; i++) {
        if (!hasRepeats(lastLetters)) {
            return i;
        }
        //slice first letter and add the new one to the end
        lastLetters = lastLetters.slice(1) + input[i];
    }
}
