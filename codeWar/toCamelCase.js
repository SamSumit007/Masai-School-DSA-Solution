// Complete the method / function so that it converts dash / underscore delimited words into camel casing.The first word within the output should be capitalized only if the original word was capitalized(known as Upper Camel Case, also often referred to as Pascal case).


function toCamelCase(str) {

    var str1 = "";
    
    for(var i = 0; i < str.length ; i++){

        if (str[i] == "-" || str[i] == "_"){

            str1 += str[i + 1].toUpperCase();
            i++;
            
        }else{
            str1 += str[i];
        }
       

    }
    return str1;
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));