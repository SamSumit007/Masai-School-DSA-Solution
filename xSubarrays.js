function findCount(arr, k, x) {
    var countAnswer = 0;
    var count = 0;
    for (var i = 0; i < x; i++) {
        if (arr[i] <= k)
            count++;
    }
    if (count == x)
        countAnswer++;

    for (var i = x; i < arr.length; i++) {
        if (count != 0)
            count--;

        if (arr[i] <= k)
            count++;
        else if (arr[i] > k && count != 0)
            count--;

        if (count == x)
            countAnswer++;
    }
    return countAnswer;
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i < t * 2; i += 2) {
        var nkx = newInput[i].split(" ").map(Number);
        var k = nkx[1];
        var x = nkx[2];
        var arr = newInput[i + 1].split(" ").map(Number);
        console.log(findCount(arr, k, x));
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
8 3 1
6 8 6 10 9 5 9 2
5 3 2
1 3 2 5 1`);
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