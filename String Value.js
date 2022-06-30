//if string aba  then a=1 b=2 then total of this is 4 then output is 4

var alpha ="abcdefghijklmnopqrstuvwxyz";
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
console.log(sum);