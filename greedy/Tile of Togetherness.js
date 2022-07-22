
function tileOfT(R, H){
  
  myset = new Set();
  myset.add(H);
  
  while(R <= H){
    if( myset.has(R)) return R;

    let temp = R.toString().split("").map(Number).reduce(sum, 0);
    let temp2 = H.toString().split("").map(Number).reduce(sum, 0);
    
    // console.log(temp2);

    R = R + temp;
    H = H + temp2;
    
    myset.add(H);
 
  }
 return -1;
    
}
function sum(a, b){

  return a + b;

}
function runProgram(input) {
   var [A, B] = input.trim().split(" ").map(Number);
    let R,H
//    console.log(A, B);

    if( A < B){
        R = A;
        H = B
    }else{
        R = B;
        H = A;
    }
    
    

   console.log( tileOfT(R, H));
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`45069 89672`);
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