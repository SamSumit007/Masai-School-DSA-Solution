//if first char of string is vowel then add hulk at end else thor at end

var fc = str[0];
if (fc == "a" || fc == "e" || fc == "i" || fc == "o" || fc == "u") 
{
    console.log(str + "hulk");
}
else 
{
    console.log(str + "thor");
}