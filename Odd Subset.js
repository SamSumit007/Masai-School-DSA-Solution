//Given an integer array, return the count of all the subsets of the array, 
//where the sum of all the elements in the subset is odd.

function runProgram(input) {
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    solve(N, arr);

}
function solve(N, arr) {
    var array = [];
    function sub(arr, newarr, position) {
        if (newarr.length > 0) {
            var bag = [];
            for (var i = 0; i < newarr.length; i++) {
                bag.push(newarr[i]);
            }
            array.push(bag);
        }
        if (position == arr.length) {
            return;
        }
        else {
            for (var i = position; i < arr.length; i++) {
                newarr.push(arr[i]);
                sub(arr, newarr, i + 1);
                newarr.pop();
            }
        }
    }
    var newarr = [];
    sub(arr, newarr, 0);
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        var sum = 0;
        for (var j = 0; j < array[i].length; j++) {
            sum += array[i][j];
        }
        if (sum % 2 != 0) {
            count++;
        }
    }
    console.log(count);
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