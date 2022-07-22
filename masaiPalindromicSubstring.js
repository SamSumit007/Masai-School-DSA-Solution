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
    var l = 0;
    for (var i = 0; i < input.length; i++)
        for (var j = i + 1; j < input.length + 1; j++) {
            var s = input.substring(i, j);
            if (s.length > l && isPalindrome(s))
                l = s.length;
        }

    console.log(l);

}
if (process.env.USERNAME === "") {
    runProgram(`thisracecarisgood`);
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