//count number of pair that sum is equal to K

var count=0;
for(var i=0;i<arr.length;i++)
{
    for(var j=i+1;j<arr.length;j++)
    {
        if(arr[i]+arr[j]==K)
        {
            count++;
        }
    }
}
console.log(count);