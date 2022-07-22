function compare(a, b) {
    return a - b;
}

function isPairPresent(arr, k) {
    var left = 0;
    var right = arr.length - 1;
    arr.sort(compare);
    while (left < right) {
        var temp = arr[left] + arr[right];
        if (temp == k)
            return 1;
        else if (temp > k)
            right--;
        else
            left++;
    }
    return -1;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i < t * 2; i += 2) {
        var nk = newInput[i].split(" ").map(Number);
        var k = nk[1];
        var arr = newInput[i + 1].split(" ").map(Number);
        console.log(isPairPresent(arr, k));

    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
5 2
3 4 0 2 7`);
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