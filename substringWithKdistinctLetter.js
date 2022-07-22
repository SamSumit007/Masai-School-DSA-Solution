function countOfDistinct(s, k) {
    var temp;
    var count = 0;
    for (var i = 0; i + k <= s.length; i++) {
        var flag = true;
        var set = new Set();
        temp = s.slice(i, i + k);
        for (var j = 0; j < k; j++) {
            if (set.has(temp[j])) {
                flag = false;
                break;
            }
            set.add(temp[j]);
        }
        if (flag)
            count++;
    }
    return count;
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var nk = newInput[0].split(" ").map(Number);
    var s = newInput[1];
    var k = nk[1];
    console.log(countOfDistinct(s, k));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`4 2
abcc`);
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