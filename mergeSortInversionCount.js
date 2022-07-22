let count = 0;

function mergeSort(arr, l, r) {
    if (l < r) {
        let mid = Math.floor((l + r) / 2);
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);
        merge(arr, l, mid, r);
    } //this function only happens after all elements are divided into single element arrays.
    // arr changes take place globally}
}

function merge(arr, l, mid, r) {
    let L = arr.slice(l, mid + 1); //creating left array
    let R = arr.slice(mid + 1, r + 1); //creating right array

    let n1 = L.length;
    let n2 = R.length;

    let i = 0;
    let j = 0;
    let k = l;
    let swap = 0;

    while (i < n1 && j < n2) {
        //merging left and right array after sorting
        if (L[i] < R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
            count += mid + 1 - (l + i);
        }
        k++;
    }

    while (i < n1) {
        //adding remaining elements to global array if missed from above sorting
        arr[k] = L[i];
        k++;
        i++;
    }
    while (j < n2) {
        //adding remaining elements to global array if missed from above sorting
        arr[k] = R[j];
        k++;
        j++;
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);
    let n = Number(newInput[0].trim());
    mergeSort(arr, 0, n - 1);
    console.log(count);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
    8 4 2 1`);
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
