function smallerNeighbours(arr) {
    let stack = [];
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        let smallest = -1;
        while (stack.length != 0) {
            if (arr[i] > stack[stack.length - 1]) {
                smallest = stack[stack.length - 1];
                break;
            } else
                stack.pop();
        }
        ans.push(smallest);
        stack.push(arr[i]);

    }
    return ans.join(" ");


}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var arr = newInput[1].split(" ").map(Number);
    console.log(smallerNeighbours(arr));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`8
39 27 11 4 24 32 32 1`);
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