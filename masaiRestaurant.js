var arr = new Array();
var top = -1;

function serveFood() {
    if (top == -1)
        console.log("No Food");
    else
        console.log(arr[top--]);
}

function addFood(x) {
    arr[++top] = x;

}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        var inp = newInput[i].split(" ").map(Number);
        if (inp[0] == 1)
            serveFood();
        else if (inp[0] == 2)
            addFood(inp[1]);
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`6
1
2 5
2 7
2 9
1
1`);
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