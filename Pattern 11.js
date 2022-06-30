// 3 2 1
// 3 2
// 3
// pattern like this

var num = 3;

for(var i=1; i<=num; i++)
{
  var bag = " ";
  for(var j=num; j>=i; j--)
  {
    bag = bag + j+ " ";
  }
  console.log(bag);
}


//another methhod
var num = 5;

for(var i =num; i>=1; i--)
{
  var bag = "";
  for(var j = i; j>=1; j--)
  {
    bag = bag + j + " ";
  }
  console.log(bag);
}