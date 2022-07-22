// const isArmstrong = number => {
//     let num = number;
//     const len = String(num).split("").length;
//     let res = 0;
//     while(num){
//        const last = num % 10;
//        res += Math.pow(last, len);
//        num = Math.floor(num / 10);
//     };
//     return res === number;
//  };
//  const armstrongBetween = (lower, upper) => {
//     const res = [];
//     for(let i = lower; i <= upper; i++){
//        if(isArmstrong(i)){
//           res.push(i);
//        };
//     };
//     return res;
//  };
//  console.log(armstrongBetween(1, 400));

// ---------------2nd----------------------

// program to check an Armstrong number of n digits

//take an input
const number = ("1634");
const numberOfDigits = number.length;
let sum = 0;

// create a temporary variable
let temp = number;

while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}

// ------------------------3rd ---------------------------------------------------------------

// program to check an Armstrong number of three digits

// let sum = 0;
// const number = ('163');

// // create a temporary variable
// let temp = number;
// while (temp > 0) {
//     // finding the one's digit
//     let remainder = temp % 10;

//     sum += remainder * remainder * remainder;

//     // removing last digit from the number
//     temp = parseInt(temp / 10); // convert float into integer
// }
// // check the condition
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }


// ---------------------------- 4th ques -----------------------------------------------------------

// program to find Armstrong number between intervals

// take an input
// const lowNumber = parseInt(prompt('Enter a positive low integer value: '));
// const highNumber = parseInt(prompt('Enter a positive high integer value: '));

// console.log ('Armstrong Numbers:');

// // looping through lowNumber to highNumber
// for (let i = lowNumber; i <= highNumber; i++) {

//     // converting number to string 
//     let numberOfDigits = i.toString().length;

//     let sum = 0;

//     // create a temporary variable
//     let temp = i;

//     /* loop through a number to find if 
//     a number is an Armstrong number */
//     while (temp > 0) {

//         let remainder = temp % 10;
//         sum += remainder ** numberOfDigits;
//         // removing last digit from the number
//         temp = parseInt(temp / 10); // convert float into integer
//     }
 
//     if (sum == i) {
//         console.log(i);
//     }
// }

