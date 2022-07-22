let str = "12:00:00PM";

function timeConversion(s) {
    // Write your code here
    let ans = [];
    
   let arr = s.trim().split(":");
   let t = +arr[0];

       
        let a = arr[2];

        if(t == 12 && a[2] == "P" ){
            ans.push(t);
            ans.push(arr[1]);
            
            let last = a[0] + a[1];
            ans.push(last);
        }else if(t == 12 && a[2] == "A"){
            let ans1 = 12-t;
            ans.push(`0${ans1}`);
            ans.push(arr[1]);
            
            let last = a[0] + a[1];
            ans.push(last);
        } else if(a[2] == undefined){
             
            
            ans.push(t);
            ans.push(arr[1]);
            
            let last = a[0] + a[1];
            ans.push(last);
        }else if( a[2] == "P"){
            
            let ans1 = 12+t;
            ans.push(ans1);
            ans.push(arr[1]);
            
            let last = a[0] + a[1];
            ans.push(last);
        }else{
            ans.push(`0${t}`);
            ans.push(arr[1]);
            
            let last = a[0] + a[1];
            ans.push(last);
        }

   
    
    
   return (ans.join(":"))

}

 console.log( timeConversion(str));