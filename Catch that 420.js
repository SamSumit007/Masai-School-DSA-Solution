//by inbuilt..
if(arr.includes(420))
{
    console.log("Yes");
}
else
{
    console.log("No");
}

//another method

var flag=false;
for(var i=0;i<str.length;i++)
{
    for(var j=i;j<str.length;j++)
    {
        var bag="";
        for(var m=i;m<=j;m++)
        {
            bag+=str[m]
        }
        if(bag.length==3)
        {
            if(bag==420)
            {
                flag=true;
                break;
            }
        }
    }
}
if(flag)
{
    console.log("Yes");
}
else
{
    console.log("No");
}