//sorting in acending order by quick sort

function runProgram(input) {
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    solve(arr, N);

}
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
            while (arr[i] <= arr[pivot] && i < high) {
                i++;
            }
            while (arr[j] > arr[pivot] && j > low) {
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
        for (var i = 0; i < arr.length; i++) {
            bag += arr[i] + " ";
        }
        return bag;
    }

    quickSort(arr, 0, N - 1);
    console.log(bag(arr));
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



///by random function

function runProgram(input) {
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    solve(arr, N);

}
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


    function Random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is exclusive and the minimum is inclusive
    }

    function partition(arr, low, high) {
        var index = Random(low, high);
        swap(arr, index, low);
        var pivot = low;
        var i = low;
        var j = high;
        while (i < j) {
            while (arr[i] <= arr[pivot] && i < high) {
                i++;
            }
            while (arr[j] > arr[pivot] && j > low) {
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
        for (var i = 0; i < arr.length; i++) {
            bag += arr[i] + " ";
        }
        return bag;
    }

    quickSort(arr, 0, N - 1);
    console.log(bag(arr));
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