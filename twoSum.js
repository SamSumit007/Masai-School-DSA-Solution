function findIndexes(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var sum = arr[left] + arr[right];
        if (sum == target)
            return left + " " + right;
        else if (sum > target)
            right--;
        else
            left++;
    }
    return "-1 -1";
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t * 2; i += 2) {
        var nb = newInput[i].split(" ").map(Number);
        var target = nb[1];
        var arr = newInput[i + 1].split(" ").map(Number);
        console.log(findIndexes(arr, target));
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 4`);
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