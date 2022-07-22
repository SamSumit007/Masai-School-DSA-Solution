function runProgram(input) {
    var newInput = input.trim().split("\n");
    var stack = [];
    for (var i = 1; i < newInput.length; i++) {
        var q = newInput[i].trim().split(" ").map(Number);
        if (q[0] == 1) {
            stack.push(q[1]);
        } else if (q[0] == 2) {
            if (stack.length != 0)
                console.log(stack.pop());
            else
                console.log("No Books");
        } else if (q[0] == 3) {
            if (stack.length != 0)
                console.log(stack[stack.length - 1]);
            else
                console.log("No Books");
        }
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`6
1 1
2 
1 2
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