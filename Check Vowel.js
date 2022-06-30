//string is given

var vowel=0;
for(var i=0;i<str.length;i++)
{
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u")
    {
        vowel++;
    }
}
if(vowel>=1)
{
    console.log("true");
}
else
{
    console.log("false");
}