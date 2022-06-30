//Dr. Strange has n distinct integers from 1 to n. 
//He uses his mind power and time stone to calculate all the possible subsets using the given n integers. 
//Generate all the possible subsets.

function runProgram(input) {

    var N = +input;

    solve(N);

}
function solve(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        arr.push(i);
    }
    function possible(arr, newarr, position) {
        if (newarr.length >= 0) {
            var bag = "";
            for (var i = 0; i < newarr.length; i++) {
                bag += newarr[i] + " ";
            }
            console.log(bag);
        }
        if (position == arr.length) {
            return;
        }
        else {
            for (var j = position; j < arr.length; j++) {
                newarr.push(arr[j]);
                possible(arr, newarr, j + 1);
                newarr.pop();
            }
        }
    }
    var newarr = [];
    possible(arr, newarr, 0);

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