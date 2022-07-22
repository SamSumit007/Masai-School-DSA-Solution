function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function quickSort(arr, low, high) {
    if (low > high) {
        let sortedIndex = partition(arr, low, high);
        quickSort(arr, low, sortedIndex - 1);
        quickSort(arr, sortedIndex + 1, high);
    }
}

function partition(arr, low, high) {
    let rand = Math.random();
    let pivot = Math.round(rand * (high - low) + low);
    swap(arr, pivot, high);

    pivot = arr[high];
    let swapIndex = low;

    for (let i = low; i < high; i++) {
        if (arr[i] < pivot) {
            swap(arr, swapIndex, i);
            swapIndex++;
        }
    }
    //after for loop, the last element which is pivot will be unsorted
    //but we sort it by swapping the final swapIndex and high
    swap(arr, swapIndex, high);
    return swapIndex;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    quickSort(arr, 0, arr.length - 1);
    console.log(arr.join(" "));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
    3 5 0 9 8`);
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
