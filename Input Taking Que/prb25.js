function worldTest(IndPoints, AusPoints, IndMatches, AusMatches){
    if(IndPoints>AusPoints){
        console.log("India");
    } else if (IndPoints < AusPoints) {
        console.log("Australia");
    } else if (IndMatches < AusMatches) {
        console.log("India");
    } else if (IndMatches > AusMatches) {
        console.log("Australia");
    }else if(IndPoints==AusPoints && IndMatches == AusMatches){
        console.log("Play another game!")
    }
}


function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var IndPoints = +input[0];
    var AusPoints = +input[1];
    var IndMatches = +input[2];
    var AusMatches = +input[3];
    worldTest(IndPoints, AusPoints, IndMatches,AusMatches);
    

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`580
500
12
10`);
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