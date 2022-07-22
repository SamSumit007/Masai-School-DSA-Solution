function stringToArray(el) {
    return el.split(" ").map(Number);
}

function q1(arr) {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0)
            for (var j = 0; j < arr[i].length; j++)
                result += arr[i][j] + " ";
        else
            for (var j = arr[i].length - 1; j >= 0; j--)
                result += arr[i][j] + " ";
    }
    return result.trim();
}

function q2(arr) {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0)
            for (var j = arr[i].length - 1; j >= 0; j--)
                result += arr[i][j] + " ";
        else
            for (var j = 0; j < arr[i].length; j++)
                result += arr[i][j] + " ";

    }
    return result.trim();
}


function runProgram(input) {
    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    var index = 1;
    while (t-- > 0) {
        var nmq = newInput[index].split(" ").map(Number);
        var rows = nmq[0];
        var q = nmq[2];
        var arr_lines = newInput.slice(index + 1, index + 1 + rows);
        var arr = arr_lines.map(stringToArray);
        index += 1 + rows;
        if (q == 1)
            console.log(q1(arr));
        else if (q == 2)
            console.log(q2(arr));
    }

}
if (process.env.USERNAME === "") {
    runProgram(`1
7 2 1
31 60
69 91
99 14
79 21
55 71
90 58
65 6 `);
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