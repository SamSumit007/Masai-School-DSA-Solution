let ans = [];

function findAns(temp, q) {
    let arr = [0, ...temp]; //adding a 0 to start of the array
    let sumArr = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        sumArr.push(sum); //finding running sum of array
    }

    for (let i = 0; i < q.length; i++) {
        let lr = q[i].trim().split(" ").map(Number);
        let r = lr[1];
        let l = lr[0] - 1;
        ans.push(sumArr[r] - sumArr[l]);
    }
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    let q = newInput.slice(3);

    findAns(arr, q);

    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
    3 2 1 5
    4
    1 3
    2 4
    1 4
    3 3`);
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
