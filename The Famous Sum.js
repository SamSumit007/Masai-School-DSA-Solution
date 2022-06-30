//You are given two numbers nand k. The number p iscreated by concatenating the string n k times.
//we need to find thesuper digit ofthe integer p
//We definesuperdigit of an integer pusing the following rules:
//If p has only 1 digit, then itssuperdigit is 1.
//Otherwise, thesuperdigit of p is equal to thesuperdigit of the sum of the digits of p.

function runProgram(input) {
    var input = input.trim().split(" ");
    var str = input[0];
    var k = +input[1];
    solve(str, k);

}
function solve(string, k) {

    function superdigit(string) {
        if (string.length == 1) {
            return Number(string);
        }
        else {
            var sum = 0;
            for (var i = 0; i < string.length; i++) {
                sum += (+string[i]);
            }
            var string1 = "" + sum;
            return superdigit(string1);
        }
    }
    var ans = "" + ((superdigit(string)) * k);
    console.log(superdigit(ans));
}


if (process.env.USER === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}