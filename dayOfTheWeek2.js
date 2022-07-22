function findDayAfterNdays(day, n) {
    var obj = {
        "Monday": 0,
        "Tuesday": 1,
        "Wednesday": 2,
        "Thursday": 3,
        "Friday": 4,
        "Saturday": 5,
        "Sunday": 6
    };
    var m = obj[day];
    var ans = (m + n) % 7;

    for (var i in obj)
        if (obj[i] == ans)
            return i;


}

function runProgram(input) {
    var newInput = input.split("\n");
    var day = newInput[0];
    var n = Number(newInput[1]);
    console.log(findDayAfterNdays(day, n));

}
if (process.env.USERNAME === "getsu") {
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