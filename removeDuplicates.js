function removeDuplicates(s) {
    if (s.length == 0)
        return "Empty String";
    else if (s.length == 1)
        return s;

    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (i == 0 && s[i] != s[i + 1])
            result += s[i];
        else if (i == s.length - 1 && s[i] != s[i - 1])
            result += s[i];
        else if (s[i] != s[i - 1] && s[i] != s[i + 1])
            result += s[i];
    }

    if (s.length == result.length)
        return result;
    else
        return removeDuplicates(result)

}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let s = newInput[i].trim();
        console.log(removeDuplicates(s));
    }


}
if (process.env.USERNAME === "A") {
    runProgram(`4
    qpaaaaadaaaaadprq
    caaabbbaac
    gghhg
    aaaacddddcappp`);
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