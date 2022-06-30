// 1 2 3
// 1 2 3
// 1 2 3
// pattern like this

var num = 5;

for(var i =1; i<=num; i++)
{
  var bag = "";
  for(var j = 1; j<=num; j++)
  {
    bag = bag + j + " ";
  }
  console.log(bag);
}