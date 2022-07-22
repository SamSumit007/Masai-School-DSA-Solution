function minCost(a, b, asc, dsc) {
    let cost = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= b[i]) cost += (b[i] - a[i]) * asc;
        else cost += (a[i] - b[i]) * dsc;
    }
    return cost;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    let index = 1;
    while (t-- > 0) {
        let a = [];
        let b = [];
        let num = Number(newInput[index]);
        let arr = newInput.slice(index + 1, index + num + 2 + 1);
        let asc = Number(arr[0]);
        let dsc = Number(arr[1]);
        let temp = arr.slice(2);
        for (let j = 0; j < temp.length; j++) {
            let ele = temp[j].trim().split(" ").map(Number);
            a.push(ele[0]);
            b.push(ele[1]);
        }
        a.sort((c, d) => c - d);
        b.sort((c, d) => c - d);
        console.log(minCost(a, b, asc, dsc));

        index = index + num + 2 + 1;
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    3
    6
    4
    3 1
    1 2
    1 2`);
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
