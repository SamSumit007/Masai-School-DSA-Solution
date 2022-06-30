//You love food. Hence, you took up position of a manager at Masai restaurant that serves people with delicious food packages. 
//It is a very famous place and people are always queuing up to have one of those packages. Each package has a cost associated with it. 
//The packages are kept as a pile. The job of a manager is very difficult. You need to handle two types of queries:
//1) Customer Query:
//When a customer demands a package, the food package on the top of the pile is given and the customer is charged according to the cost of the package. 
//This reduces the height of the pile by 1.
//In case the pile is empty, the customer goes away empty-handed.
//2) Chef Query:
//The chef prepares a food package and adds it on top of the pile. And reports the cost of the package to the Manager.
//Help him manage the process.

function runProgram(input) {
    var input = input.split("\n");
    var n = +input[0];
    var arr = [];
    for (var i = 1; i <= n; i++) {
        var line = input[i].split(" ").map(Number);
        if (line[0] == 1) {
            if (top == -1) {
                console.log("No Food");
            }
            else {
                console.log(pop(arr));
            }
        }
        if (line[0] == 2) {
            push(arr, line[1]);
        }
    }

}
var top = -1;
function push(array, data) {
    top++;
    array[top] = data;
}

function pop(array) {
    ans = array[top];
    top--;
    return ans;
}
function peek(array) {
    return array[top];
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