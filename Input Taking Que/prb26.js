function moneyM(expenses, N, salary){
    var sum = 0;
    for( var i = 0 ;i < N.length; i++){
        sum = sum + N[i];
    
    }
        
    if(sum > salary){
        console.log("Debt");
    } else if (sum < salary) {
        console.log("Save");
    } else if(sum == salary) {
        console.log("Neutral")
    }
}

function runProgram(input) {
    // Write code here
    var input= input.split("\n");
    var expenses = +input[0];
    var N = input[1].split(" ").map(Number)
    var salary = +input[2];
        moneyM(expenses,N,salary);

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`5
1 2 3 4 5
16`);
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