var n = 9;
for (let i = 1; i <= n; i++)
{
    var temp = "";
    for (let j = 1; j <= n-i;j++)
    {
        temp += " ";

    }
    for (let j = 1; j <= 1;j++)
    {
        temp += "*";
 
    }
    for (let j = 1; j <= i-1;j++)
    {
        temp += "  ";
 
    }
    if(i>1 )
    {for (let j = 1; j <= 1;j++)
    {
        temp += "*";
 
    }}
    console.log(temp);
}

for (let i = n; i >=1; i--)
{
    var temp = "";
    for (let j = 1; j <= n-i;j++)
    {
        temp += " ";

    }
    for (let j = 1; j <= 1;j++)
    {
        temp += "*";
 
    }
    for (let j = 1; j <= i-1;j++)
    {
        temp += "  ";
 
    }
    if(i>1 )
    {for (let j = 1; j <= 1;j++)
    {
        temp += "*";
 
    }}
    console.log(temp);
}