//You are given four integers a, b, c, and d. 
//If the sum of any two integers is equal to the sum of other two elements then print Yes otherwise print No

function runProgram(input) {
    var input = input.split(" ").map(Number);
    solve(input);

}
function solve(arr) {
    var flag = false;
    if (arr[0] + arr[1] == arr[2] + arr[3] || arr[0] + arr[2] == arr[1] + arr[3] || arr[0] + arr[3] == arr[1] + arr[2]) {
        flag = true;
    }
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