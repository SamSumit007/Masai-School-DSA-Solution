function frequency(s) {
    var arr = [];
    for (var i = 0; i < 26; i++)
        arr[i] = 0;

    for (var i = 0; i < s.length; i++) {
        var index = s.charCodeAt(i) - 97;
        arr[index]++;
    }


    for (var i = 0; i < 26; i++) {
        if (arr[i] != 0)
            console.log(String.fromCharCode(i + 97) + "-" + arr[i]);
    }



}

function runProgram(input) {
    var newInput = input.split("\n");
    var s = newInput[1];
    frequency(s);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
amanaz`);
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