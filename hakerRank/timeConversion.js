// Given a time 12 in -hour AM / PM format, convert it to military(24 - hour) time.

//     Note: - 12: 00: 00AM on a 12 - hour clock is 00: 00: 00 on a 24 - hour clock.
// - 12: 00: 00PM on a 12 - hour clock is 12: 00: 00 on a 24 - hour clock.




function timeConversion(s) {
    // Write your code here 11:11:11AM
    const format = s.substring(s.length - 2);
    console.log(format)
    let hour = s.substring(0, 2);
    const minusSecond = s.substring(2, 8);
    if (format == "AM") {
        hour = hour == 12 ? '00' : hour;
    }
    if (format == "PM") {
        hour = +hour + 12 < 24 ? +hour + 12 : '12';
    }
    return hour + "" + minusSecond;
}