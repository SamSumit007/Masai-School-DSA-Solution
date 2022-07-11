// Quickly Sort it 
// Description

// You are given an array of N integers. Write QUICK SORT ALGORITHM to sort the numbers in ascending order

// DO NOT USE ANY BUILTIN FUNCTION TO SORT

// ALSO, YOU MUST NOT USE ANY OTHER ALGORITH


function solve(arr, N) {
    function quickSort(arr, low, high) {
        if (low >= high) {
            return;
        }
        else {
            var pivot = partition(arr, low, high);
            quickSort(arr, low, pivot - 1);
            quickSort(arr, pivot + 1, high);
        }
    }

    function partition(arr, low, high) {
        var pivot = low;
        var i = low;
        var j = high;
        while (i < j) {
            while (arr[i] >= arr[pivot] && i < high) {
                i++;
            }
            while (arr[j] < arr[pivot] && j > low) {
                j--;
            }
            if (i < j) {
                swap(arr, i, j);
            }
        }
        swap(arr, j, pivot);
        return j;
    }

    function swap(arr, a, b) {
        temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        return;
    }

    function bag(arr) {
        var bag = "";
       for (var i = arr.length - 1; i >= 0; i--)  {
            bag += arr[i] + " ";
        }
        return bag;
    }

    quickSort(arr, 0, N - 1);
    console.log(bag(arr));
}

function runProgram(input) {
     input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    solve(arr, N);

}

if (process.env.USER === "") {
    runProgram(``);
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
