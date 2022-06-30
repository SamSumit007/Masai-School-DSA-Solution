//You are given an array of N-1 integers and integers are in the range of 1 to N. 
//There are no duplicates in the array. One of the integers is missing in the array. Find the missing integer

function runProgram(input) {
    var input = input.split(" ").map(Number);
    solve(input);

}
function solve(arr) {
    arr.sort(function (a, b) { return a - b });
    var start = 1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != start) {
            console.log(start);
            break;
        }
        start++;
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