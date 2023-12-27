//Print all number from 1 to n but then it should not be divisible by 5

let n=10;
for(let i=1; i<=n; i++) {
    if(i % 5 != 0) {
        console.log(i)
    }
}

// Write a program to print the sum of the digits of a number.

let number = 153
let sum = 0;

while(number > 0) {
    sum = sum + number % 10;
    number = parseInt(number / 10);
}

console.log(sum,'=========sum')

// Write a program to print the reverse digits of a number.

let temp = 0;
let number1 = 153

while(number1 > 0) {
    let reminder = number1 % 10;
    temp = reminder + temp * 10;
    number1 =  parseInt(number1 / 10);
}

console.log(temp, "=====reverse")