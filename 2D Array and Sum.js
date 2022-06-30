//given an array matrix of n rows and m columns which contains positive integers and sums.
// X Y Z

//X
//Y
//Z

//X
//  Y
//    Z

//    Z
//  Y
//X

  var count = 0 //counter variable
  for (var i=0;i<n;i++)
  {
   for (var j = 0;j<m;j++)
   {
      if (j<a[i].length-2) 
      {// finding sum along the horizontal direction
        var temp = a[i][j] + a[i][j+1] + a[i][j+2];
        if (temp == sum)
        {
            count++;
        }
      }
     if (i<a.length-2) 
     {//finding the sum along the vertical direction
         var temp = a[i][j] + a[i+1][j] + a[i+2][j];
         if (temp == sum)
         {
             count++;
         }
     }
     if (i<a.length-2 && j<a[j].length-2) 
     {// finding the sum along the diagoanls
         var temp = a[i+2][j] + a[i+1][j+1] + a[i][j+2];
         if (temp == sum)
         {
             count++;
         }
     }
     if (i<a.length-2 && j<a.length-2) 
     {// finding the sum along the diagonals
         var temp = a[i][j] + a[i+1][j+1] + a[i+2][j+2];
         if (temp == sum)
         {
             count++;
         }
     }
   }
  }
  console.log(count);
