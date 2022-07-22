var N = 5;
var M = 9;
for (let i = 1; i <=N; i++)
{
    var temp = "";
    for (let j = 1; j <= i-1;j++)
    {
        temp += "  ";

    } 
       
    for (let j =  1; j <=  M-2*(i-1);j++)
    {
        temp += "* ";

    }
     
       console.log(temp);
    } 
    for (let i = N-1; i >=1; i--)
    {
        var temp = "";
        for (let j = 1; j <= i-1;j++)
        {
            temp += "  ";
    
        } 
           
        for (let j =  1; j <=  M-2*(i-1);j++)
        {
            temp += "* ";
    
        }
         
           console.log(temp);
        } 