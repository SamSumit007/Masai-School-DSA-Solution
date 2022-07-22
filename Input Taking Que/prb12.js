function divK(num, K){
    for(var i = 1 ; i< num ; i++){
        if(i % K == 0){
            console.log(i);
        }
    }
}

function runProgram(input) {
    // Write code here
    var input = input.split(" ").map(Number);
    var [num, K] = input;
        divK(num, K);
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`7 2`);
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