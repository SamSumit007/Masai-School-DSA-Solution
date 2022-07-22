function sumofmul(X, K, Y){
    var sum = 0;
    for ( var i = 1 ; i <= K ; i++){
        if((X*i) % Y == 0 ){
            sum = sum + (X*i);
            
        }
    }
    console.log(sum);
}

function runProgram(input) {
    // Write code here
    var input = input.split(" ").map(Number);
    var [X, K, Y ] = input;
    sumofmul(X, K, Y );

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`3 10 5`);
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