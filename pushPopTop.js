var arr = new Array();
var top = -1;

function pushing(x) {
    arr[++top] = x;
}

function popping() {
    if (top != -1)
        top--;
}

function peeking() {
    if (top == -1)
        console.log("Empty!");
    else
        console.log(arr[top]);
}



function runProgram(input) {
    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        var inp = newInput[i].split(" ").map(Number);
        if (inp[0] == 1)
            pushing(inp[1]);
        else if (inp[0] == 2)
            popping();
        else if (inp[0] == 3)
            peeking();
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`6
1 15
1 20
2
3
2
3`);
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