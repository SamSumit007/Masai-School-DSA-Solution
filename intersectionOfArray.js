function runProgram(input) {
    var input = input.split("\n");
    var arr1 = input[1].split(" ").map(Number);
    var arr2 = input[2].split(" ").map(Number);

    for (var i = 0; i < arr1.length; i++)
        for (var j = 0; j < arr2.length; j++)
            if (arr1[i] == arr2[j]) {
                console.log(arr1[i]);
                break;
            }


}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
4 5 7
9 2 5`);
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