function winningTeam(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++)
        if (obj[arr[i]] == undefined)
            obj[arr[i]] = 1;
        else
            obj[arr[i]]++;

    var count = 0;
    var winner;

    for (var i in obj)
        if (obj[i] > count) {
            winner = i;
            count = obj[i];
        }

    return winner;
}

function runProgram(input) {

    var newInput = input.split("\n");
    var scores = newInput.slice(1);
    console.log(winningTeam(scores));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
A
ABA
ABA
A
A`);
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