// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    var upperArr = ["A","B","C","D","E",'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    var arr = [];
    
    for(var i = string.length-1; i >= 0; i--){
        for(var j = 0; j < upperArr.length; j++){
            if (string[i] == upperArr[j] ){
                arr.push(string[i]);
                arr.push(' ');
               i--;
            }
        }

        
            arr.push(string[i])
        
        
    }
    return arr.reverse().join("");
}

solution("camelCasing");
solution("camelCasingTest");
