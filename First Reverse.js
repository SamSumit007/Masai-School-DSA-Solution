//reverse given string

function FirstReverse(str) {

    // code goes here
    var str1 = "";
    for (var i = str.length - 1; i >= 0; i--) {
        str1 += str[i];
    }
    return str1;

}

// keep this function call here 
console.log(FirstReverse(readline()));
