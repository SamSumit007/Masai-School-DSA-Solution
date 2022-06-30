//You are given two sorted arraysAandBof sizeNandM.
//You have to find the list of elements common in both the arrays
//The resultant list should also be sorted.

function runProgram(input) {
    var input = input.split("\n");
    var t = input[0];
    for (var i = 1; i < input.length; i += 4) {
        var n1 = +(input[i]);
        var arr1 = input[i + 1].split(" ").map(Number);
        var n2 = +(input[i + 2]);
        var arr2 = input[i + 3].split(" ").map(Number);
        cindex(n1, arr1, n2, arr2);
    }


}
function cindex(n1, arr1, n2, arr2) {
    var count = 0;
    var bag = "";
    var flag = false;
    var i = 0;
    var j = 0;
    while (i < n1 && j < n2) {
        if (arr1[i] == arr2[j]) {
            flag = true;
            bag += arr1[i] + " ";
            i++;
            j++;

        }
        else if (arr1[i] < arr2[j]) {
            i++;
        }
        else if (arr1[i] > arr2[j]) {
            j++
        }
    }



    if (flag) {
        console.log(bag);
    }
    else {
        console.log(-1)
    }
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
