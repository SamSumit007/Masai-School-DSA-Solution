Given an integer n, find out whether an integer is odd, even, or not skewed.

An integer is oddly skewed if it has more number of odd divisors than even divisors and vice versa for evenly skewed.

If the number of odd and even divisors are equal, then it is not skewed.



function CheckSkewness(n) {
    let even_div = 0, odd_div = 0;

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
 
          
            if (Math.floor(n / i) == i) {
 
                if (i % 2 == 0) {
                    even_div++;
                }
 
                else {
                    odd_div++;
                }
            }
 
         
            else {
 
                if (i % 2 == 0) {
                    even_div++;
                }
                else {
                    odd_div++;
                }
 
                if (Math.floor(n / i) % 2 == 0) {
                    even_div++;
                }
                else {
                    odd_div++;
                }
            }
        }
    }
 
   
    if (even_div == odd_div){
        return "Not Skewed";
    } else if(even_div > odd_div){
        return "Even Skewed";
    }else if(even_div < odd_div){
        return "Odd Skewed";
    } else {
        return "Skewed";
    }
}




function runProgram(input) {
  // Write code here
 input = input.split("\n");
  var tc = +input[0];
  var line = 1;
  
  for(var i = 0; i < tc; i++){
      var n = +input[line++];
   
     console.log(CheckSkewness(n));  
   
}}
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
