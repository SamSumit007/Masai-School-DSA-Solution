// var data = [39 , 1, 1,1];
// var str = "asdd"

// function check (str){
//     if(str == "")
//     return 0

//     return check(str.substring(2)) + 1
// }

// console.log(check (str))
// var n = 5;
// var count = 1;
// for (let i = 1; i <= n;i++)
// {
//     var temp = "";
//     for (let j = 1; j <= n-i;j++)
//     {
//         temp += "  ";
      
//     }

//     for (let j = 1; j <= i;j++)
//     {
//         temp += "* ";
      
//     }
//   console.log(temp);
// }
var n=5;
for(let i=n;i>=1;i--)
{   var temp="";
    for(let j=1;j<=i;j++)
    {
       temp+=j+" ";
    }
    console.log(temp);
}

 