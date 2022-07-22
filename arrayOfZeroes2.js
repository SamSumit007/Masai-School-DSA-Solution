function sum(ac, x, index) {
    if (index % 2 == 1)
        x = x * -1;
    return ac + x;

}

/*
create pattern
a(2) = a(2) - a(1)
a(3) = a(3) - a(2) + a(1)
a(4) = a(4) - a(3) + a(2) - a(1)
a(n) - a(n - 1) + a(n - 2)....a1
*/


function runProgram(input) {
    var newInput = input.split("\n");
    var arr = newInput[1].split(" ").map(Number);

    var ssum = arr.reduce(sum, 0);
    if (ssum == 0)
        console.log("YES");
    else
        console.log("NO");



}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
1 2`);
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