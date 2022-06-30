//   1
//   1 2
//   1 2 3
//   1 2 3 4
//   1 2 3 4 5
//  pattern like this

var num = 5;

for(var i =1; i<=num; i++)
{
  var bag = "";
  for(var j = 1; j<=i; j++)
  {
    bag = bag + j + " ";
  }
  console.log(bag);
}