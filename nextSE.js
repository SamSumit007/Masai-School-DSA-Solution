function nextSE(N, arr) {
    var stack = [];
    var ans = [];


    for (var i = N - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[i] <= stack[stack.length - 1]) {
            stack.pop();

        } if (stack.length == 0) {
            ans[i] = -1;
        } else {
            ans[i] = stack[stack.length - 1]
        }

        stack.push(arr[i])

    }


    console.log(ans.join(" "));

//     //count the no of element whose NSE is not present=>
// var count = 0;
//     for(var i = 0; i < ans.length; i++){
//         if(ans[i] == "-1"){
//             count++;
//         }
//     }

//     console.log(count);

}

function runProgram(input) {
    var input = input.trim().split("\n");

    var testCases = +input[0];

    var line = 1;
    for (var i = 0; i < testCases; i++) {
        var N = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;

        nextSE(N, arr);


    }
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`1
8
39 27 11 4 24 32 32 1`);
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