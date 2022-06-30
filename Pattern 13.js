// 1
// 2 1
// 3 2 1
// pattern like this

var num = 5;

for(var i =1; i<=num; i++)
{
  var bag = "";
  for(var j = i; j>=1; j--)
  {
    bag = bag + j + " ";
  }
  console.log(bag);
}