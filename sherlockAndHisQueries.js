function findOdd(arr) {
    let ans = 0;
    for (let i = 0; i < arr.length; i++)
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] % 2 !== 0) ans++;
        }

    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);

    for (let i = 1; i < t * 2; i += 2) {
        let nm = newInput[i].trim().split(" ").map(Number);
        let n = nm[0];
        let m = nm[1];
        let q = Number(newInput[i + 1]);
        let queries = newInput.splice(i + 2, q);
        let arr = Array.from(Array(n), () => Array(m).fill(0));

        for (let j = 0; j < queries.length; j++) {
            let ti = queries[j].trim().split(" ").map(Number);
            if (ti[0] === 0) {
                for (let k = 0; k < m; k++) {
                    arr[ti[1]][k]++;
                }
            } else {
                for (let k = 0; k < n; k++) {
                    arr[k][ti[1]]++;
                }
            }
        }
        console.log(findOdd(arr));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    2 2
    4
    0 1
    0 0
    0 0
    1 1
    4 4
    10 
    0 1
    0 2
    0 0
    0 1
    0 1
    0 1
    1 1
    1 1
    1 3
    1 0`);
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
