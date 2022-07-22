function findNumber(i, j) {

    if (i == j)
        return (i * j) - i + 1;

    var max = Math.max(i, j);
    var diff = Math.abs(i - j);
    var base = (max * max) - max + 1;
    //primary diagonal values -/+ difference of index gives the required value
    //base +/- diff = answer


    if (max % 2 == 0) {
        if (i > j)
            return base + diff;
        else
            return base - diff;
    } else {
        if (i > j)
            return base - diff;
        else
            return base + diff;
    }


}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        var ij = newInput[i].split(" ").map(Number);
        console.log(findNumber(ij[0], ij[1]));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
2 3
1 1
4 2`);
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