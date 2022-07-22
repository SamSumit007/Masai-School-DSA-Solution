function stackGame(arr, nm) {
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "(") stack.push(arr[i]);
        else {
            if (stack.length === 0) return "no";
            stack.pop();
        }
    }
    if (stack.length % 2 === 1) return "yes";
    else return "no";
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let nm = newInput[i].trim().split(" ").map(Number);
        let arr = newInput[i + 1].trim().split("");
        console.log(stackGame(arr, nm));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
    4 3
    ()(())(
    1 1
    ()
    1 2
    ())`);
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
