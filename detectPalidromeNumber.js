function findIfPalindrome(n) {
    var temp = n;
    var sum = 0;
    while (temp != 0) {
        var digit = temp % 10;
        sum = (sum * 10) + digit;
        temp = Math.floor(temp / 10);
    }
    if (sum == n)
        return "Yes"
    else
        return "No"
}

function runProgram(input) {
    var n = Number(input);
    console.log(findIfPalindrome(n));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1221`);
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