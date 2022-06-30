//string is given

var lower="abcdefghijklmnopqrstuvwxyz";
var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var bag="";
for(var i=0;i<str.length;i++)
{
    for(var j=0;j<upper.length;j++)
    {
        if(str[i]==upper[j])
        {
            continue;
        }
        else if(str[i]==lower[j])
        {
            bag+=lower[j];
        }
    }
}
console.log(bag);