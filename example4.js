//7.Print the following pattern 

// *****

// ****

// ***

// **

// *

let str = ''
const limit = 5;
for(let i=limit; i>0; i--) {
    for(let j=i; j>0; j--) {
        str += '*' 
    }
    str += '\n'
}

console.log(str)
console.log('=================pattern1')

// *    *
// **   **
// ***  ***
// **** ****
// **********

let string = '';

for(let i=1; i<=5; i++) {
    for(let k=1; k<=i+5; k++) {
        if(k>=6) {
            string += '*';
        } else if(k>i){
            string += ' ';
        } else {
            string += '*';
        }
    }
    string += '\n';
}

console.log(string)
console.log('=========pattern2')

// **********
// ****  ****
// ***    ***
// **      **
// *        *

let str1 = '';
for(let i=5; i>=1; i--) {
    for(let j=1; j<=10; j++) {
        if(j <= i) {
            str1 += '*'
        } else if(j > 10-i) {
            str1 += '*';
        } else {
            console.log(j)

            str1 += ' '
        }
    }
    str1 += '\n'
}

console.log(str1, '===========3')



// ******
// *****
// ***
// **
// *
// **
// ***
// ****
// *****

let str3 = '';
for(let i=1; i<=9; i++) {
    for(let j=1; j<=6; j++) {
        if(i <= 5) {
            if(j <= 6-i) {
                str3 += '*'
            }
        } else {
            console.log(j)
            if(j >= 2) {
                if(j <= i-5) {
                    str3 += '*'
                } 
            }

        }
    }
    str3 += '\n';
}

console.log(str3, '=======pattern4')



// 1
// 22
// 333
// 4444
// 55555
//5 mits


let str2 = '';
for(let i=1; i<=5; i++) {
    for(let j=1; j<=i; j++) {
        str2 += i;
    }

    str2 += '\n';
}

console.log('========= pattern5')
console.log(str2)


// *
// **
// ***
// ****
// *****
// *****
// ****
// ***
// **
// *

let str5 = '';
let count = 1;

for(let i=1; i<=10; i++) {
    if(i <= 5) {
        for(let j=1; j<=i; j++) {
            str5 += '*'
        }
        str5 += '\n'
    } else {
        console.log(count)
        for(let j=1; j<=i-count; j++) {
            str5 += '*'
        }
        count += 2
        str5 += '\n'

    }
}

console.log(str5)

// *
// **
// ***
// ****
let str10 = '';

console.log('=====================10')
for(let i=1; i<=4; i++) {
    for(let j=0; j<i; j++) {
        str10 = str10 + '*'
    }
    str10 += '\n';
}
console.log(str10)


//   *
//  * *
// * * *
//* * * *
// let str11 ="";

// for(let i = 0;i<4;i++){
//     for(let k =0;k<3-i;k++){
//         str11+=" ";
//     }
//     for(let j = 0;j<=i;j++){
//         str11+='*'
//         str11+=" "
//     }
//     str11+='\n'
// }

// console.log(str11)

//---*---
//--*-*--
//-*-*-*-
//*-*-*-*


let str11 = '';
console.log('=====================11')
let value = 1;

for(let i=1; i<=4; i++) {
    for(let j=0; j<i; j++) {
        if(j=== 0) {
            for(let k=0; k<=4-i; k++) {
                str11 += ' ';
            }
        } else {
            str11 += ' ';
        }
        str11 += '*';
    }
    str11 += '\n'
}
console.log(str11)
