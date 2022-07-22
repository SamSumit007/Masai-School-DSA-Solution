function maxSubstring(s) {
    var maxSub = "";
    for (var i = 0; i < s.length; i++) {
        var sub = s.substring(i);
        if (sub > maxSub)
            maxSub = sub;
    }
    return maxSub;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var s = newInput[1];
    console.log(maxSubstring(s));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`105
zzzzazzzzxzzzzbzzzzpzzzzgzzzzozzzzyzzzzxzzzzozzzzdzzzzyzzzzuzzzzlzzzzszzzzfzzzzazzzzrzzzztzzzzgzzzztzzzzz`);
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