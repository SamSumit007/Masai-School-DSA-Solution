function bubbleSort(arr) {
    var temp;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function findPair(arr, k) {
    var left = 0;
    var right = arr.length - 1;
    var biggest = -1;
    while (left < right) {
        var temp = arr[left] + arr[right];
        if (temp < k) {
            if (temp > biggest)
                biggest = temp;
            left++;
        } else {
            right--;
        }

    }
    return biggest;


}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i < t * 3; i += 3) {
        var arr = newInput[i + 1].split(" ").map(Number);
        var k = Number(newInput[i + 2]);
        console.log(findPair(bubbleSort(arr), k));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
5
1 2 3 4 5
7
3
30 10 20
15`);
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