let final = [];

function findDiff(a, b) {
    if (a >= b) return a - b;
    else return b - a;
}

function findAns(arr, k) {
    if (arr.length < 3) return 0;
    let ans = arr[0] + arr[1] + arr[2];
    let diff = findDiff(ans, k);

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            let calculatedDiff = findDiff(sum, k);
            if (calculatedDiff < diff) {
                diff = calculatedDiff;
                ans = sum;
            } else if (calculatedDiff == diff) if (sum > ans) ans = sum;

            if (diff == 0) break;

            if (sum > k) right--;
            else left++;
        }
        if (diff == 0) break;
    }

    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let nk = newInput[i].trim().split(" ").map(Number);
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        let k = nk[1];
        arr.sort((a, b) => a - b);
        final.push(findAns(arr, k));
    }
    console.log(final.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    4 1
    -1 2 1 -4
    3 1
    0 0 0`);
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
