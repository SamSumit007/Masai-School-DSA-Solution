//Tom and Nick are good friends.Once Tom asked Nick exactly N rupees, but Nick has only 1 rupee in his bank account.
//Nick wants to help his friend so he wrote two hacks First hack can multiply the amount of money he owns by 10,while the second can multiply it by 20. 
//These hacks can be used any number of times.Can Nick help Tom with his hacks?

function runProgram(input) {
    var input = input.split("\n");
    var tc = +input[0];
    var line = 1;
    for (var i = 0; i < tc; i++) {
        var target = +input[line];
        line++;
        solve(target);
    }

}
function solve(target) {
    function hack(target, t) {
        if (target == t) {
            return true;
        }
        else if (t > target) {
            return false;
        }
        else {
            return (hack(target, t * 10) || hack(target, t * 20));
        }
    }
    var flag = hack(target, 1);
    if (flag) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
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