function runProgram(input) {
    var arr = input.trim().split("\n");
    var size = Number(arr[0]);
    var array = arr[1].split(" ").map(Number);

    var bag = "";
    for (i = 0; i < array.length; i++) {
        bag += (array[i] + 1) + " ";
    }
    console.log(bag);
}

if (process.env.USER === "") {
    runProgram(``);
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
