function solve(arr) {
    let ans = 0;
    let left = 0;
    let right = arr.length - 1;
    let count = 1;

    while (left < right) {
        if (arr[left] < arr[right]) {
            ans += count * arr[left];
            left++;
        } else if (arr[right] < arr[left]) {
            ans += count * arr[right];
            right--;
        } else {
            let tempLeft = left;
            let tempRight = right;
            while (tempLeft < tempRight) {
                if (arr[tempLeft] < arr[tempRight]) {
                    ans += count * arr[left];
                    left++;
                    break;
                } else if (arr[tempRight] < arr[tempLeft]) {
                    ans += count * arr[right];
                    right--;
                    break;
                } else {
                    left++;
                    right--;
                }
            }
        }

        count++;
    }
    ans += count * arr[right];
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        arr = arr.filter((el) => el !== 0);

        console.log(solve(arr));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    5
    12  5  2  45  1
    2
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
