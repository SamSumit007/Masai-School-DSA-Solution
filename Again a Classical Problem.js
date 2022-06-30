//brackets balancing problem

function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var str = input[line].trim();
        var N = str.length;
        line++;
        solve(str, N);
    }

}
function solve(str, N) {
    var stack = [];
    var flag = true;
    for (var i = 0; i < N; i++) {
        if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
            stack.push(str[i])
        }
        else {
            if (stack.length == 0) {
                flag = false;
                break;
            }
            else {
                var n = stack.length
                if (str[i] == ")" && stack[n - 1] != "(" || str[i] == "}" && stack[n - 1] != "{" || str[i] == "]" && stack[n - 1] != "[") {
                    flag = false;
                    break;
                }
                else {
                    stack.pop();
                }
            }
        }
    }
    if (!flag) {
        console.log("not balanced");
    }
    else {
        if (stack.length == 0) {
            console.log("balanced")
        }
        else {
            console.log("not balanced")
        }
    }
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