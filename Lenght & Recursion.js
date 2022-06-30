//find length of an string by recursion

function runProgram(input) {
    solve(input);

}

function solve(str) {

    function length(str, i) {
        if (str[i] == undefined) {
            return 0;
        }
        else {
            return 1 + length(str, i + 1);
        }
    }
    console.log(length(str, 0))
}

if (process.env.USER === "") {
    runProgram(``);
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