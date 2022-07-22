let arr;
let cache;

function findAns(i, j) {
    if (i == arr.length) return 0;

    if (j != 0 && cache[i + 1][j - 1] == -1)
        cache[i + 1][j - 1] = findAns(i + 1, j - 1);

    if (cache[i + 1][j] == -1) cache[i + 1][j] = findAns(i + 1, j);

    if (j != arr[0].length - 1 && cache[i + 1][j + 1] == -1)
        cache[i + 1][j + 1] = findAns(i + 1, j + 1);

    cache[i][j] =
        arr[i][j] +
        Math.max(cache[i + 1][j - 1], cache[i + 1][j], cache[i + 1][j + 1]);
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    let ind = 1;
    while (t-- > 0) {
        let hw = newInput[ind].trim().split(" ").map(Number);
        arr = newInput.slice(ind + 1, ind + 1 + hw[0]);

        for (let i = 0; i < arr.length; i++)
            arr[i] = arr[i].trim().split(" ").map(Number);

        cache = new Array(hw[0]).fill(-1).map(() => Array(hw[1]).fill(-1));

        ind += hw[0] + 1;

        console.log(findAns(0, 0));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    6 5
    3 1 7 4 2
    2 1 3 1 1
    1 2 2 1 8
    2 2 1 5 3
    2 1 4 4 4
    5 2 7 5 1`);
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
