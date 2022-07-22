function ashes(Australia, England){
    if(Australia>England){
        console.log("Australia");
    }else if( Australia < England){
        console.log("England");
    }else{
        console.log("Tie")
    }
}


function runProgram(input) {
    // Write code here
    var input = input.split(" ").map(Number);
    var [Australia, England] = input;
    ashes(Australia, England);

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`46 67`);
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