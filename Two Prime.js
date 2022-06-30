// if both are prime then print true

function checkprime(a)
{
    var count=0;
    for(var i=1;i<=a;i++)
    {
        if(a%i==0)
        {
            count++;
        }
    }
    if(count==2)
    {
        return true;
    }
    else
    {
        return false;
    }
}

if(checkprime(one) && checkprime(two))
{
    console.log("true");
}
else
{
    console.log("false");
}