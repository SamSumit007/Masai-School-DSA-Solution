function minOperations(arr) {

    if (arr.length == 1)
        return 0;

    var total = 0;
    var mm = minMax(arr);
    var min = mm[0];
    var max = mm[1];
    var maxIndex = mm[2];
    var total = 0;

    while (min != max) {
        var diff = max - min;
        total += diff;

        for (var i = 0; i < arr.length; i++) {
            if (i != maxIndex)
                arr[i] += diff;
        }

        mm = minMax(arr);
        min = mm[0];
        max = mm[1];
        maxIndex = mm[2];

    }
    return total;
}

function minMax(arr) {
    var min = arr[0];
    var max = arr[0];
    var maxIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];

        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }

    }
    var ans = [min, max, maxIndex];
    return ans;
}




function runProgram(input) {
    var newInput = input.split("\n");
    var arr = newInput[1].split(" ").map(Number);
    console.log(minOperations(arr));
}


if (process.env.USERNAME === "getsu") {
    runProgram(`7
2 6 1 0 5 8 3`);
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