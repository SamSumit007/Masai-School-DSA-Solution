// Betty loves candies, so she went to the store to buy some. She has some coins C and she wants to spend all of them. 
// The store has N distinct candies each having some cost.
// Find and display the unique combinations  of costs in which she can buy candies such that the sum of cost of all the candies is equal to number of coins she has.

// Two combinations are unique if the frequency of at least one of the chosen candies is different.

// The input array is sorted in ascending order.

function runProgram(input){
    var input=input.split("\n");
    var size=input[0].split(" ").map(Number);
    var N=size[0];
    var K=size[1];
    var arr=input[1].trim().split(" ").map(Number);
    solve(N,K,arr);
    
}
function solve(N,target,arr)
{
    
      var res=[];
    function recur(remain,idx,cur){
        if(remain<0){
            return;
        }
        if(remain==0){
            res.push(cur.slice());
        }
        for(var i=idx;i<arr.length;i++){
            cur.push(arr[i]);
            recur(remain-arr[i],i+1,cur);
            cur.pop();
        }
    };
    recur(target,0,[]);
    if(res.length==0){
        console.log(-1);
    }
    else{
        var map=new Map();
        for(var i=0;i<res.length;i++){
            var bag="";
            for(var j=0;j<res[i].length;j++){
                bag+=res[i][j]+" ";
            }
            
            if(map.has(bag)){
                map.set(bag,map.get(bag)+1);
            }
            else{
                map.set(bag,1);
            }
        }
        for(var [key,value] of map){
            console.log(key);
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