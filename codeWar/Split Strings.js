// Complete the solution so that it splits the string into pairs of two characters.If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').

function solution(str) {
var arr = [];
    if(str.length % 2 == 1){
        str = str + "_";
    }
    // console.log(str);

    for(var i = 0; i < str.length; i++){
        arr.push(str[i]+str[i+1]);
        i++;
    }

    console.log(arr);
}

solution("abcdef")
solution("abcdefg")