//longest substr that contain only 0

var count=0;
for(var i=0;i<str.length;i++)
{
    for(var j=i;j<str.length;j++)
    {
        var bag="";
        for(var k=i;k<=j;k++)
        {
            bag+=str[k];
        }
        var sum=0;
        for(var a=0;a<bag.length;a++)
        {
            sum+=bag[a];
        }
        if(sum==0)
        {
            if(count<bag.length)
            {
                count=bag.length;
            }
        }
    }
}
console.log(count);