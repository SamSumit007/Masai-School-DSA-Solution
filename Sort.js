function runProgram(input) {
    var input = input.split("\n");
    var arr = input[1].split(" ").map(Number);
    print(sortIt(arr));

}

function sortIt(arr) {
    var small = arr[0];
    var index = 0;
    var temp;

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[j] < small) {
                small = arr[j];
                index = j;
            }
        }
        temp = arr[i];
        arr[i] = small;
        arr[index] = temp;
        small = arr[i + 1];
        index = i + 1;

    }
    return arr;
}

function print(arr) {
    var result = "";
    for (var i = 0; i < arr.length; i++)
        result += arr[i] + " ";

    console.log(result);
}


if (process.env.USERNAME === "getsu") {
    runProgram(`5
3 5 0 9 8`);
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