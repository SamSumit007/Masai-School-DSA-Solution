var n = 7;
var temp = "";
for (let i = 1; i <=2*n+1;i++)
{
    temp+="* "
}
console.log(temp);

for (let i = 1; i <= n; i++)
{
    var temp = "";
    for (let j = 1; j <= n-i+1;j++)
    {
        temp += "* ";
    }
      
     for (let j = 1; j <= 2*(i)-1;j++){
            temp += "  ";
     } 
    
    for (let j = 1; j <= n-i+1;j++) {
            temp += "* ";
    }
    console.log(temp); 
}

for (let i = n-1; i >=1; i--)
{
    var temp = "";
    for (let j = 1; j <= n-i+1;j++)
    {
        temp += "* ";
    }
      
    for (let j = 1; j <= 2*(i)-1;j++){
        temp += "  ";
 } 
    
    for (let j = 1; j <= n - i+1; j++) 
    {
            temp += "* ";
        
    }
        console.log(temp);  
}
var temp = "";
for (let i = 1; i <=2*n+1;i++)
{
    temp+="* "
}
console.log(temp);