var n = 5;
for (let i = 1; i <= n; i++)
{
    var temp = "";
    for (let j = 1; j <= i;j++)
    {
        temp += "*";
 
    }

    for (let j = 1; j <=2*n-i*2;j++)
    {
        temp += " ";
         
    }

    for (let j = 1; j <= i;j++)
    {
        temp += "*";
 
    }
    console.log(temp);
}

for (let i = n; i >=1; i--)
{
    var temp = "";
    for (let j = 1; j <= i;j++)
    {
        temp += "*";
 
    }

    for (let j = 1; j <=2*n-i*2;j++)
    {
        temp += " ";
         
    }

    for (let j = 1; j <= i;j++)
    {
        temp += "*";
 
    }
    console.log(temp);
}