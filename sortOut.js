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

function sortOut(arr) {
    var result = "";
    var temp = arr.slice(0);
    temp = bubbleSort(temp);

    for (var i = 0; i < temp.length; i++) {
        var ele = temp[i];
        result += arr.indexOf(ele) + " ";
        arr[arr.indexOf(ele)] = -1;
    }
    return result.trim();

}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var arr = newInput[1].split(" ").map(Number);
    console.log(sortOut(arr));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
4 5 3 7 1`);
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