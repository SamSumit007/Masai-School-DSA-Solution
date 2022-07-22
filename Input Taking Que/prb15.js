function productof6(one, two, three, four, five, six){
    console.log(one*two*three*four*five* six)
}

function runProgram(input) {
    // Write code here
    var input = input.split(" ").map(Number);
    var[one, two, three, four, five, six] = input;
    productof6(one, two, three, four, five, six);

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