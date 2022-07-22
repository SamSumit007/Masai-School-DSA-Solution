function createString(s) {
    var result = "";
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        result += s[i];
        result += s[j];
        i++;
        j--;
    }
    return result;
}

function isPalindrome(s) {
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        if (s[i] != s[j])
            return false;
        i++;
        j--;
    }
    return true;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var s = newInput[1].split("");
    var mainS = createString(s);
    if (isPalindrome(mainS.split("")))
        console.log("yes");
    else
        console.log("no");


}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
abab`);
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