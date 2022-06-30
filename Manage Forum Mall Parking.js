// Assume forum mall has K parking slots and in the next 24 hours there are many vehicles that are going to visit the mall. Luckily, you know the arrival and departure time of each vehicle coming to visit the mall. You are the parking manager of forum and you want to maintain the reputation of Forum mall. Since you know the arrival and departure time of each vehicle and also number of parking slots that you have, comment if it is possible to accommodate all vehicles or not.

// If it is possible, print "Possible"

// In case it is not possible, print "Not Possible"

function runProgram(input){
    var input=input.split("\n");
    var k=+input[0];
    var arrival=input[1].split(" ").map(Number);
    var departure=input[2].split(" ").map(Number);
    solve(k,arrival,departure);
    
}
function solve(k,arrival,departure){
    //arrival.sort(function(a,b){return a-b;});
    //departure.sort(function(a,b){return a-b;});
    var plat=1;
    //var max=1;
    var i=1;
    var j=0;
    var flag=true;
    while(i<arrival.length){
        if(arrival[i]>=departure[j]){
            plat--;
            
            j++;
        }
        else{
            plat++;
            i++;
        }
       // max=Math.max(max,plat);
       if(plat>k){
           flag=false;
           console.log("Not Possible");
           break;
       }
    }
    //console.log(plat)
    if(flag){
        console.log("Possible");
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