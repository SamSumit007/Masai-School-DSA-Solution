//You are excited about your new job and want to move to Bangalore, as soon as possible. 
//You have to transport K units of weight of your stuff to Bangalore, therefore, you hired Masai Packers & Movers to do the job for you. 
//The company has N trucks, each with a certain capacity C. 
//Because of surge in fuel prices, the company has made a new policy that the trucks will be allowed to travelled, 
//only if the truck is completely filled and has no empty spaces. Also, because of some issues, the company has only one driver. 
//Therefore, in one day only a single truck can be used, to transport the things to Bangalore. 
//Print the minimum and the maximum number of days, it will take to transport everything to Bangalore. 
//If it is impossible to transport everything to Bangalore, print -1.


function runProgram(input) {
    var input = input.split("\n");
    var line = input[0].trim().split(" ").map(Number);
    var k = line[0];
    var n = line[1];
    var arr = input[1].trim().split(" ").map(Number);
    solve(k, n, arr);

}
function solve(k, n, arr) {
    var max = undefined;
    var min = undefined;
    function move(k, n, arr, dep) {
        if (k == 0) {
            if (dep > max || max == undefined) {
                max = dep;
            }
            if (dep < min || min == undefined) {
                min = dep;
            }
            return 1;
        }
        else if (k < 0) {
            return;
        }
        else {
            var ans = 0;
            for (var i = 0; i < n; i++) {
                ans += move(k - arr[i], n, arr, dep + 1);
            }
            return ans;
        }
    }

    var ans = move(k, n, arr, 0);
    if (min == undefined && max == undefined) {
        console.log(-1);
    }
    else {
        console.log(min, max);
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

