var esum=0;
var osum=0;

for(var i=0;i<arr.length;i++)
{
    if(i%2==0)
    {
        esum+=arr[i];
    }
    else
    {
        osum+=arr[i];
    }
}
if(esum>osum)
{
    console.log("Even");
}
else if(esum<osum)
{
    console.log("Odd");
}
else
{
    console.log("Even-Odd");
}