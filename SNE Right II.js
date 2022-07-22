function nextSE(N, arr) {
    var stack = [];
    var ans = [];
    var count = 0;

    for (var i = N - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[i] <= stack[stack.length - 1]) {
            stack.pop();

        } if (stack.length == 0) {
            ans[i] = -1;
            count++;
        } else {
            ans[i] = stack[stack.length - 1]
        }

        stack.push(arr[i])

    }

// console.log(count);

    var c = N - count;
    console.log(c)
    
    // console.log(ans.join(" "));

}

function runProgram(input) {
    var input = input.trim().split("\n");

        var N = +input[0];
        
        var arr = input[1].trim().split(" ").map(Number);
        

        nextSE(N, arr);


    
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`5
4 2 1 3 7`);
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