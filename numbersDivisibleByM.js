function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t * 2; i += 2) {
        var temp = newInput[i].split(" ").map(Number);
        var m = temp[1];
        var arr = newInput[i + 1].split(" ").map(Number);
        for (var j = 0; j < arr.length; j++)
            if (arr[j] % m == 0)
                arr[j] = -1;

        console.log(arr.join(" "));

    }

}




if (process.env.USERNAME === "getsu") {
    runProgram(`2
3 3
1 3 2
5 3
3 3 2 9 7`);
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