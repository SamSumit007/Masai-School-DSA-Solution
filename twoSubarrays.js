function solve(str) {
    let count = 0;
    let obj = {};
    let left = 0;
    for (let i = 0; i < str.length; i++) {
        let ele = str[i];
        if (obj[ele] === undefined) obj[ele] = 1;
        else obj[ele]++;

        while (obj[ele] > 2) {
            let num = str[left];
            obj[num]--;
            left++;
        }

        count += i - left + 1;
    }

    return count;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    let ans = [];
    for (let i = 1; i < t * 2; i += 2) {
        let str = newInput[i + 1].trim();
        ans.push(solve(str));
    }
    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
    5
    zchmq
    5
    yyhyy
    6
    zolziz
    5
    awzym
    7
    fflmtff`);
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
