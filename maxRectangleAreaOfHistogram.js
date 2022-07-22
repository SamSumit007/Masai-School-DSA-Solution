let ans = [];

function maxArea(arr) {
    let max = 0;
    let temp;
    for (let i = 0; i < arr.length; i++) {
        let left = 0;
        let right = arr.length - 1;
        temp = i;

        while (temp >= 0) {
            if (arr[temp] < arr[i]) break;
            left = temp;
            temp--;
        }

        temp = i;

        while (temp < arr.length) {
            if (arr[temp] < arr[i]) break;
            right = temp;
            temp++;
        }

        let sum = (right - left + 1) * arr[i];
        max = Math.max(max, sum);
    }
    return max;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        ans.push(maxArea(arr));
    }
    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    4
    2 3 4 5
    6
    7 5 4 3 6 8`);
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
