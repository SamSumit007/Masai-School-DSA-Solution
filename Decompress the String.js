//given str a3b2 then output aaabb

var bag="";
for(var i=1;i<str.length;i+=2)
{
    for(var j=1;j<=str[i];j++)
    {
        bag+=str[i-1];
    }
}
console.log(bag);