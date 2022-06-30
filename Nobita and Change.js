//convert all upper case char in lower case in string

var lower="abcdefghijklmnopqrstuvwxyz";
var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var newstr="";
for(var i=0;i<str.length;i++)
{
    for(var j=0;j<upper.length;j++)
    {
        if(str[i]==upper[j])
        {
            newstr+=lower[j];
        }
        else if(str[i]==lower[j])
        {
            newstr+=str[i];
        }
    }
}
console.log(newstr);