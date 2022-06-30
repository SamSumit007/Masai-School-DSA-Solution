//Given a string of lowercase characters in range ascii[‘a’..’z’].
//You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.
//For instance, the string aab could be shortened to b in one operation.
//Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).
//Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).

function runProgram(input) {
    var str = input.trim();
    var N = input.length;
    solve(str, N);

}
function solve(str, N) {
    var i = 0;
    var bag = "";
    while (i < N) {
        if (str[i] == str[i + 1]) {
            i += 2;
        }
        else {
            bag += str[i];
            i++;
        }
    }
    if (bag.length == 0) {
        console.log("Empty String");
    }
    else {
        console.log(bag);
    }
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