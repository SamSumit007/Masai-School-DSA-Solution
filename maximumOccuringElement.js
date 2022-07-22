function findMaximum(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var ele = arr[i];
        if (obj[ele] == undefined)
            obj[ele] = 1;
        else
            obj[ele]++;
    }

    var count = 0;
    var maxEle = -1;

    for (var i in obj)
        if (obj[i] > count) {
            count = obj[i];
            maxEle = i;
        }

    return maxEle;
}

function runProgram(input) {

    var newInput = input.split("\n");
    var arr = newInput[1].split(" ").map(Number);
    console.log(findMaximum(arr));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
0 2 0 6 9`);
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