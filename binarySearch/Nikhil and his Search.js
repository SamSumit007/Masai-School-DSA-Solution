function nikhilS(N, arr, x, q, countO, countZ){

    // console.log(N,arr, x , q);


    let low = 0;
    let high = N-1;
    let ans = 0;

    while( low <= high){

        let mid = Math.floor( low + (high - low)/2);

        if( arr[mid] == x){

            if( q == 1){
                var arrO = arr.slice(mid+1, N)
                return arrO.length;
            }else{
                var arrZ = arr.slice(mid, N);
                return arrZ.length;
            }

        }

        if( arr[mid] > x){

            high = mid -1;

        }else{
            low = mid + 1;
        }

    }

   


    return ans;
}


function runProgram(input) {
   var input = input.trim().split("\n");

    var N = +input[0];

    var arr = input[1].trim().split(" ").map(Number);

    var testCases = +input[2];

    var line = 3;
    

    for(var i = 0; i < testCases; i++){
        arr.sort()

        var arr1 = input[line].trim().split(" ").map(Number);

        var q = +arr1[0];
        var x = +arr1[1];

        var countO = 0;
        var countZ = 0;

        line++;

       console.log( nikhilS(N, arr, x, q, countO, countZ));
    }

   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`4
1 2 3 4
3
0 5
1 3
0 3`);
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
      process.exit(0) ;
    });
  }