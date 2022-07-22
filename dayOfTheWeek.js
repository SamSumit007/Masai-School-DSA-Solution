function findDay(day, n) {
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var indexOfDay;
    for (var i = 0; i < days.length; i++)
        if (days[i] == day) {
            indexOfDay = i;
            break;
        }
    var indexRequired = (indexOfDay + n) % 7;
    // (2 + 8) % 7 = 3]
    // days[3] = Thursday
    return days[indexRequired];
}

function runProgram(input) {
    var newInput = input.split("\n");
    var day = newInput[0];
    var n = Number(newInput[1]);
    console.log(findDay(day, n));

}
if (process.env.USERNAME === "") {
    runProgram(`Wednesday
8`);
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