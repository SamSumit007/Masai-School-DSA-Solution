function findOcc(arr) {
    let ans = -1;
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) obj[arr[i]] = 1;
        else obj[arr[i]]++;
    }
    let num = Math.floor(arr.length / 2);

    for (let i in obj) {
        if (obj[i] > num) {
            ans = i;
            break;
        }
    }
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(findOcc(arr));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    6
    1 1 1 1 2 3
    5
    1 1 2 2 3`);
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
