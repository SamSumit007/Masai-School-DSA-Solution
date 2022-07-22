var n = 9;
 
for (let i=1; i <= n;i++)
{
    var temp = "";
    for (let j = 1; j <= n;j++)
    {
        if (i == j||j==1||j==n||(i+j)==(n+1))
            temp += "*";
            
        else
            temp += " ";
    }
    console.log(temp);
}                                 
 
    