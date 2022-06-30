//count subarrays that are increasing or in ascending order

var count=0;
var nt=1;
for(var i=1;i<arr.length;i++)
{
    if(arr[i]>arr[i-1])
    {
        nt++;
    }
    else
    {
        if(count<nt)
        {
            count=nt;
        }
        nt=1;
    }
}
if(count<nt)
{
    count=nt;
}
console.log(count);