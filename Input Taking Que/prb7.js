function infinityStones(one, two, three, four, five, six) {
    var sum =0;
    sum = ((two + five + six ) * 2) + ((three + four) *3 ) + one;
    console.log(sum);
}


function runProgram(input) {
    var input = input.split(" ").map(Number)
    var [one,two,three,four,five,six] = input;
    
    infinityStones(one, two, three, four, five, six);
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`1 2 3 4 5 6`);
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