
function countSameChar(str)
{   
  var temp = "";
  
 // var temp1 = "";
  for (let i = 0; i < str.length;i++)
  {
    
    var tempCount = 0;
    var countChar = 1;
    for (let k = 0; k < temp.length;k++)
    {
      if (str[i] == temp[k])
      {
        tempCount++;
      }
    }
     
   
    if (tempCount==0)
    {
      temp += str[i];
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] == str[j])
          countChar++; 
      }
     // temp1 += countChar;
       
    }
  }
  console.log(temp);
 //console.log(temp1);

}

countSameChar("acacbbndf");   // will count the number of same character in a string
countSameChar("zzaabb") // ------output = zab 