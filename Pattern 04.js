//   1
//   2 2
//   3 3 3
//   4 4 4 4
//   5 5 5 5 5
//  pattern like this

var num = 5;

for(var i =1; i<=num; i++)
{
  var bag = "";
  for(var j = 1; j<=i; j++)
  {
    bag = bag + i + " ";
  }
  console.log(bag);
}