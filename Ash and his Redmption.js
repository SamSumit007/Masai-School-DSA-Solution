// Ash is a famous player in the Pokemon universe. He has been trying to defeat his strongest rival Gary but he hasn't been successful till yet. He has played with Gary so much that he now knows everything about Gary and his pokemon and feels he is ready for one more fight.

// Both players have n pokemon and n rounds are going to be played where one pokemon from each team fight with each other.

// Each pokemon have their health points known as HP.

// Gary is a champion so he gets an advantage. Ash wins a round when Ash's pokemon has strictly greater HP than Gary's else he loses that round. Ash wins the match if he wins all the rounds.

// Since he knows everything about his rival, he knows the order of Gary's pokemon and their initial HP.

// Can Ash order his pokemon in order to win the match?

// Print "Ash Finally Wins" if he wins the match else "Train Hard Again".




function runProgram(input){
    var input=input.split("\n");
    var tc=input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var n= +input[line++];
        var ash=input[line++].split(" ").map(Number);
        var gary=input[line++].split(" ").map(Number);
        solve(n,ash,gary);
    }
    function solve(n,ash,gary){
        ash.sort(function(a,b){return a-b;});
        gary.sort(function(a,b){return a-b;});
        var flag=true;
        for(var i=0;i<n;i++){
            if(ash[i]<=gary[i]){
                flag=false;
                console.log("Train Hard Again");
                break;
            }
        }
        if(flag){
            console.log("Ash Finally Wins");
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