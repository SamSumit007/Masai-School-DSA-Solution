function runProgram(input) {
    var newInput = input.split(" ").map(Number);
    var n = (newInput[0]);
    var m = (newInput[1]);
    var count = 0;
    for (var x = 0; x * x <= n; x++)
        if ((n - x ** 2) ** 2 + x == m)
            count++;

    console.log(count);

    //x^2 + y = n
    //y^2 + x = m

    //y = n - x^2
    //(n-x^2)^2 + x = m


}
if (process.env.USERNAME === "getsu") {
    runProgram(`451 121`);
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