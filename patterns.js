var N = 9;
var n = Math.ceil(N / 2);
for (let i = 1; i <= n; i++) {
    var temp = "";
    for (let j = 1; j <= n - i; j++) {
        temp += " ";
    }
    console.log(temp);
 
    
    for (let k = 1; k <= i; k++) {
         
        if (k == i)
        temp += k;
    else
        temp += k + "*";
    }
    console.log(temp);
}
n = Math.floor(N / 2);
for (let i = n; i >=1 ; i--) {
    var temp = "";
    for (let j = 1; j <= n - i+1; j++) {
        temp += " ";
    }
    console.log(temp);
 
    
    for (let k = 1; k <= i; k++) {
         
        if (k == i)
        temp += k;
    else
        temp += k + "*";
    }
    console.log(temp);
}
