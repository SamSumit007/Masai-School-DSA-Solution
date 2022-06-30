  // * * * * *
  // *       *
  // *       *
  // *       *
  // * * * * *
// pattern like this

var num =10;

for(var i=1; i<=num;i++)
{
  var bag = "";
  for(var j=1; j<=num; j++)
  {
    if(i==1 || i==num)
    {
      bag = bag +"*" + " ";
    }
    else if(j==1 || j==10)
    {
      bag = bag + "*" + " ";
    }
    else
    {
      bag = bag + "  ";
    }
  }
  console.log(bag);
}