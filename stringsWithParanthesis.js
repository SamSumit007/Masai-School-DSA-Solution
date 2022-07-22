function balancedOrNot(arr) {
    let stack = [];
    let obj = {
        '}': '{',
        ')': '(',
        ']': '['
    };
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '(' || arr[i] == '[' || arr[i] == '{')
            stack.push(arr[i]);
        else if (arr[i] == ')' || arr[i] == ']' || arr[i] == '}') {
            let ele = obj[arr[i]];
            if (stack[stack.length - 1] == ele)
                stack.pop();
            else
                return "unbalanced";
        }
    }
    if (stack.length == 0)
        return "balanced"
    else
        return "unbalanced";
}

function runProgram(input) {
    let arr = input.trim().split("");
    console.log(balancedOrNot(arr));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`(((((((((())))))))))`);
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