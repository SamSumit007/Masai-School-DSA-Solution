function merge(arr1, arr2) {
    let ans = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        } else {
            ans.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        ans.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        ans.push(arr2[j]);
        j++;
    }
    return ans.join(" ");
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let arr1 = newInput[1].trim().split(" ").map(Number);
    let arr2 = newInput[2].trim().split(" ").map(Number);

    console.log(merge(arr1, arr2));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
    1 5 7 9
    2 4 6 8`);
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