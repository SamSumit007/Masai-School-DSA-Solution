let ans = [];

function solve(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].split("").sort().join("");
        if (!obj[str]) {
            ans.push(arr[i]);
            obj[str] = 1;
        }
    }
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput.slice(1).map((el) => el.trim());
    solve(arr);
    console.log(ans.length);
    console.log(ans.sort().join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
    eodc
    odec
    code
    baca
    aabc`);
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
