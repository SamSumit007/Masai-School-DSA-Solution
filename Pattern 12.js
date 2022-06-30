// 1 2 3
// 1 2
// 1
// pattern like this

var num = 5;

for(var i =num; i>=1; i--)
{
  var bag = "";
  for(var j = 1; j<=i; j++)
  {
    bag = bag + j + " ";
  }
  console.log(bag);
}