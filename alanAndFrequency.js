function frequency(s) {
    var obj = {};
    s = s.split("");
    s.sort();

    for (var i = 0; i < s.length; i++) {
        if (obj[s[i]] == undefined)
            obj[s[i]] = 1;
        else
            obj[s[i]]++;
    }

    for (key in obj) {
        console.log(key + "-" + obj[key]);
    }


}

function runProgram(input) {
    var newInput = input.split("\n");
    var s = newInput[1];
    frequency(s);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
aman`);
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