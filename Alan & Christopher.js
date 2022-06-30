//if # come in string then delete recent element that added in stack

function runProgram(input) {
    var input = input.split("\n");
    for (var i = 1; i < input.length; i++) {
        solve(input[i], input[i].length);
    }

}
function solve(str, N) {
    var stack = [];
    for (var i = 0; i < N; i++) {
        if (str[i] == "#") {
            stack.pop();
        }
        else {
            stack.push(str[i]);
        }
    }
    var bag = "";
    for (var i = 0; i < stack.length; i++) {
        bag += stack[i];
    }
    console.log(bag)
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