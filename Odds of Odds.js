//sum of all odd elements in array then check the sum that it is odd or not

count=0;
for(var i=0;i<n;i++)
{
    if(arr[i]%2!=0)
    {
        count+=arr[i];
    }
}
if(count%2!=0)
{
    console.log("Yes");
}
else
{
    console.log("No");
}