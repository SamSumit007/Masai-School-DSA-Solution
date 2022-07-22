function newSorting(arr, k) {
    var temp;
    for (var i = 0; i < arr.length - 1; i++) {
        var noOfSwaps = 0;
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] % k > arr[j + 1] % k) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noOfSwaps++;
            }
        }
        if (noOfSwaps == 0)
            break;
    }
    return arr.join(" ");
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var nk = newInput[0].split(" ").map(Number);
    var arr = newInput[1].split(" ").map(Number);
    var k = nk[1];
    console.log(newSorting(arr, k));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`5 6
12 18 17 65 46`);
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