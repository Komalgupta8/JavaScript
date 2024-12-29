let score="33"

let valuenumber=Number(score)

console.log(typeof valuenumber) // number

let score1="23scv"
let valuenumber1=Number(score1)
console.log(typeof score1) // string
console.log(typeof valuenumber1); // number
console.log(valuenumber1) //NaN  (problem in js)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0




let isLoggedIn = "komal"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); power
// console.log(2/3);
// console.log(2%3);




// console.log("1" + 2);  12
// console.log(1 + "2");  12
// console.log("1" + 2 + 2);   122
// console.log(1 + 2 + "2");   32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //1 
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
