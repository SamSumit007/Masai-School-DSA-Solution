// Given a time in

// 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    var time="";
    if(s.includes('PM')&&s.slice(0,2)!="12"){
        time+=(+s.slice(0,2)+12);
        time+=s.slice(2,8);
        return(time);
    }
    if(s.includes('PM')&&s.slice(0,2)=="12"){
        time+=s.slice(0,8);
        return(time);
    }

    if(s.includes('AM')){
        if(+s.slice(0,2)<12)
        {
           //time+="0"+Math.abs(+s.slice(0,2)-12);
           time+=s.slice(0,8);
           return(time);
        }
        else{
          time+="00";
          time+=s.slice(2,8);
          return(time);
        }
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
