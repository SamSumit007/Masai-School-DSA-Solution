function rotatebyk(N, k, arr){
   k = k%N;
   var left = 0;
   var right = N-1;

   while(left<right){
       var temp = arr[right];
       arr[right] = arr[left];
       arr[left] = temp;
       right--;
       left++;
   }
   
        var M = k - 1;
        var S = 0;
             while(S<M){
            var temp1 = arr[S];
            arr[S] = arr[M];
            arr[M] = temp1;
            S++;
            M--;
        }
        
        var A = k;
        var B = N-1;
            while(A<B){
                var temp2 = arr[A];
                arr[A] = arr[B];
                arr[B] = temp2;
                A++;
                B--;
            }

            console.log(arr);
   
}


function runProgram(input) {
    var input = input.split("\n")
    var testCases = +input[0];
    //  console.log(testCases)
    var line = 1;
    for (var i = 0; i < testCases; i++) {
        var arr1 = input[line].split(" ").map(Number);
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;

        var N = arr1[0];
        var k = arr1[1];

        rotatebyk(N, k, arr)
       

    }

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`3
2 1
1 2
2 2
1 2
3 1
1 2 3`);
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