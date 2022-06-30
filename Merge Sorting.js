//You are given N numbers. Your task is to write MERGE SORT sorting algorithm (from scratch) to sort those N numbers.

function runProgram(input) {
    var input = input.split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    solve(n, arr);

}
function solve(n, arr) {
    
    function mergesort(arr, left, right) {
        if (left == right) //(left>=right)
        {
            return;
        }
        else {
            var mid = Math.floor((left + right) / 2);
            mergesort(arr, left, mid);
            mergesort(arr, mid + 1, right);
            merge(arr, left, right, mid);
            return;
        }
    }

    function merge(arr, left, right, mid) {
        var arr1 = [];
        var arr2 = [];
        for (var i = left; i <= mid; i++) {
            arr1.push(arr[i]);
        }
        for (var j = mid + 1; j <= right; j++) {
            arr2.push(arr[j]);
        }
        var cur = left;
        var l = 0;
        var r = 0;
        while (l < arr1.length && r < arr2.length) {
            if (arr1[l] <= arr2[r]) {
                arr[cur] = arr1[l];
                l++;
                cur++;
            }
            else {
                arr[cur] = arr2[r];
                r++;
                cur++;
            }
        }
        while (l < arr1.length) {
            arr[cur] = arr1[l];
            l++;
            cur++;
        }
        while (r < arr2.length) {
            arr[cur] = arr2[r];
            r++;
            cur++;
        }
        return;
    }

    function bag(arr) {
        var bag = "";
        for (var i = 0; i < arr.length; i++) {
            bag += arr[i] + " ";
        }
        return bag;
    }

    mergesort(arr, 0, arr.length - 1);
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

