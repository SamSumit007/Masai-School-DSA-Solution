function solution(roman) {
    // complete the solution by transforming the 
    // string roman numeral into an integer
    
    // console.log(roman.split(""));

    let arr = roman.split("");
    // console.log(arr);


    let obj = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

    let ans = 0;

    for(var i = 0; i < arr.length; i++)
    for(key in obj){
            if(arr[i] == key){
                ans += obj[key]
            }
    }
    // console.log(ans);
   return ans;
}

solution('XXI')
solution('MDCLXVI')
solution('MMVIII')