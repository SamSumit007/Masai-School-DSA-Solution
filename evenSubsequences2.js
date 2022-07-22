let count;

function subset(arr, low, high, ans, k) {
    if (low <= high + 1 && ans.length != 0) {
        let num = 0;
        for (let i = 0; i < ans.length; i++) {
            if (ans[i] % 2 == 0) num++;
            if (num >= k) {
                count++;
                break;
            }
        }
    }
    for (let i = low; i <= high; i++) {
        let temp = ans.slice(0);
        temp.push(arr[i]);
        console.log(temp);
        subset(arr, i + 1, high, temp, k);
    }
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let nk = newInput[i].trim().split(" ").map(Number);
        let k = nk[1];
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        count = 0;
        subset(arr, 0, arr.length - 1, [], k);
        console.log(count);
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    4 2
    4 3 2 1
    2 1
    2 3`);
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
