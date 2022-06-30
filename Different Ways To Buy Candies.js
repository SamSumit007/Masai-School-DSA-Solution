//Betty loves candies, so she went to the store to buy some. She has some coins and she wants to spend all of them. 
//The store has N distinct candies each having some cost and there are infinite amount of each candy in the store. 
//Betty can choose the same candy any number of times as long as she have coins greater than or equal to the cost of that candy. 
//Find and display the unique combinations in which she can buy candies such that the sum of cost of all the candies is equal to number of coins she has.
//Two combinations are unique if the frequency of at least one of the chosen candies is different.
//The input array is sorted in ascending order.
//if no ways available then outut is -1

//method 1
function runProgram(input) {
    var input = input.split("\n");
    var size = input[0].split(" ").map(Number);
    var N = size[0];
    var K = size[1];
    var arr = input[1].trim().split(" ").map(Number);
    solve(N, K, arr);

}
function solve(N, target, arr) {

    var res = [];
    function recur(remain, idx, cur) {
        if (remain < 0) {
            return;
        }
        if (remain == 0) {
            res.push(cur.slice());
        }
        for (var i = idx; i < arr.length; i++) {
            cur.push(arr[i]);
            recur(remain - arr[i], i, cur);
            cur.pop();
        }
    };
    recur(target, 0, []);
    if (res.length == 0) {
        console.log(-1);
    }
    else {
        for (var i = 0; i < res.length; i++) {
            var bag = "";
            for (var j = 0; j < res[i].length; j++) {
                bag += res[i][j] + " ";
            }
            console.log(bag);
        }
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


