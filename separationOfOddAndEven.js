function findOrder(arr, first) {
    arr.sort((a, b) => a - b);
    let mod = 1;
    if (first == 1) mod = 0;

    let result = "";
    let result2 = "";
    for (let i = 0; i < arr.length; i++)
        if (arr[i] % 2 == mod) result += arr[i] + " ";
        else result2 += arr[i] + " ";

    return result + result2;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 3; i += 3) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        let first = Number(newInput[i + 2]);
        console.log(findOrder(arr, first));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    6
    1 3 5 2 7 4
    1
    6 
    1 3 5 2 7 4
    2`);
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
