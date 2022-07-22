function printGrade(total){
    if(total == 100){
        console.log("A");
    }else if ( total >= 90 ){
        console.log("B");
    }else if ( total >= 80) {
        console.log("C");
    }else {
        console.log("F")
    }
}

function runProgram(input) {
    var N = +(input);
    printGrade(input);

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`100`);
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