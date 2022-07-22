var str = "ajiit";
var N = str.length;

var vowel_count = 0;
  //var consonant = 0;
  
  for(var i = 0; i<N; i++){
      if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
          vowel_count++
      }
    //   else{
    //       consonant++;
    //   }
  }
 console.log(vowel_count);
  //console.log(consonant);


  // ------------ 

//   let array = [1,2,3,4];

//   array.push(5);
//   array.unshift(0);
//   console.log(array);
  