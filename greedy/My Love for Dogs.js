function runProgram(input) {
   var input = input.trim().split("\n");

   var N = +input[0];

   var sum = 0;
   var hrLine = 0;

        var arr1 = input[1].trim().split(" ").map(Number).sort((a,b)=> a-b);

        var arr2 = input[2].trim().split(" ").map(Number).sort((a,b)=> a-b);

        // console.log(arr1);

        while( hrLine < N){

            var S = +arr1[hrLine];
            var C = +arr2[hrLine];
            // console.log(S)

            sum += (S * C);

            hrLine++;
        }

        
   console.log(sum);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`4
857 739 918 211 679 506 340 568 868 16 940 263 593 449 991 310 355 68 431 580 757 218 934 328 676 355 221 80 922 545 511 67 467 674 691 504 835 34 965 980 221 895 501 152 325 731 302 153 896 22 489 399 607 466 432 502 968 333 475 792 84 10 694 328 354 712 409 480 643 121 951 492 420 197 607 925 167 717 438 200 986 104 483 620 806 881 858 559 553 502 554 962 325 435 279 464 327 549 832 595 
4 3 5 1`);
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