var n = 5;
var count = 0;
for (let i = 1; i <= n; i++) 
{
    var temp = "";
    
    for (let j = 1; j <= (n - i) * 2;j++)
    {
        temp += " ";
    }


    for (let j = 1; j <= i; j++)
    {
        count++;
        temp += count + " ";
        
    }
    for (let j = 1; j < i; j++)
    {
        count--;
        temp += count + " ";
        
    }
    console.log(temp);

}