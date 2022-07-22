let ans = [];

function findAns(arr, k) {
    let sum = 0;
    let left = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        while (sum > k) {
            sum -= arr[left];
            left++;
        }

        if (sum === k) return "Yes";
    }

    return "No";
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let nk = newInput[i].trim().split(" ").map(Number);
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        let k = nk[1];
        ans.push(findAns(arr, k));
    }
    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    8 8
7 4 2 8 1 3 6 5`);
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
