

function binaryER(N) {
    // console.log(N);

    var binaryNo = ""
    function binaryER1(N) {


        if (N == 0 || N == 1) {
            return binaryNo += N;
        }

        binaryNo += N % 2;

        return binaryER1(Math.floor(N / 2));
    }
    binaryER1(N)
    var ans = binaryNo.split("").reverse();
    console.log(ans.join(""));
}


function runProgram(input) {
    var input = input.trim().split("\n");
    var testCases = +input[0];

    var line = 1;
    for (var i = 0; i < testCases; i++) {

        var N = +input[line];
        line++;

        binaryER(N);



    }

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
15
128`);
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