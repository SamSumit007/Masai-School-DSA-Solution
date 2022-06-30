//compare sum with K // string and K is given

var alpha="abcdefghijklmnopqrstuvwxyz";
var sum=0;

for(var i=0;i<str.length;i++)
{
    for(var j=0;j<alpha.length;j++)
    {
        if(str[i]==alpha[j])
        {
            sum+=(j+1);
        }
    }
}
if(sum>K)
{
    console.log("Yes");
}
else
{
    console.log("No");
}