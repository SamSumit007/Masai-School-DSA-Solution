function stringToArray(el) {
    return el.split(" ").map(Number);
}

function query(arr, q) {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        if (q % 2 == 1)
            result += arr[i].join(" ") + " ";
        else
            result += arr[i].reverse().join(" ") + " ";
        q++;
    }
    return result;
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
        console.log(query(arr, q));
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
3 3 1
1 2 3
4 5 6
7 8 9
3 3 2
1 2 3
4 5 6
7 8 9`);
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