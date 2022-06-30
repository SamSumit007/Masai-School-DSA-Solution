//There is a stack of integers which is currently empty. 
//You are given an integer n and there are n operations that you need to perform on the stack.
//The next n line contains one of the following 3 operations:
//1 x : Push x to the top of the stack.
//2 : Pop an element from the top of the stack. If the stack is empty, do nothing.
//3 : Print the top element of the stack (if stack is empty, print "Empty!" (without quotes)).

function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var stack = [];
    for (var i = 1; i <= t; i++) {
        var line = input[i].trim().split(" ").map(Number);
        if (line[0] == 1) {
            push(stack, line[1]);
        }
        if (line[0] == 2) {
            pop(stack);
        }
        if (line[0] == 3) {
            if (top == -1) {
                console.log("Empty!")
            }
            else {
                console.log(peek(stack));
            }
        }
    }

}
var top = -1;
function push(array, data) {
    top++;
    array[top] = data;
}

function pop(array) {
    ans = array[top];
    top--;
    return ans;
}
function peek(array) {
    return array[top];
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