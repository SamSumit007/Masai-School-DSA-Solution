function sortSwap(arr, k) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            //find minimum in the array
            if (j - i > k) break; //if number of swaps are greater than swaps available, then break

            if (arr[j] < arr[min]) min = j;
        }
        for (let m = min; m > i; m--) {
            //start swapping after finding the minimum
            let temp = arr[m];
            arr[m] = arr[m - 1];
            arr[m - 1] = temp;
            k--;
        }
    }
    return arr.join(" ");
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let nk = newInput[i].trim().split(" ").map(Number);
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        let k = nk[1];

        console.log(sortSwap(arr, k));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    3 2
    5 3 1
    5 3
    8 9 11 2 1`);
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
