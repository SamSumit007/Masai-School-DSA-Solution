//count characters inn string also take input and print along with frequency in alphabatical order

function runProgram(input) {
    var m = new Map();
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    for (i = 0; i < alpha.length; i++) {
        if (m.get(alpha[i]) == undefined) {
            m.set(alpha[i], 0)
        }
    }
    for (i = 0; i < input.length; i++) {
        if (m.get(input[i]) == 0) {
            m.set(input[i], 1)
        }
        else {
            var curr = m.get(input[i])
            m.set(input[i], (curr + 1));
        }
    }
    for (var [key, value] of m) {
        if (m.get(key) > 0) {
            console.log(key + " " + m.get(key));
        }
    }
    //console.log(m)

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