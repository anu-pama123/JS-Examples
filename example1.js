// find maximum number in an array

let arr = [3,6,2,22,4,7];
let max = 0;

for(let i=0; i<arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i];
    }
}

console.log(max, '=======maximum')

// find minimum number in an array

let min = arr[1];
for(let i=0; i<arr.length; i++) {
    if(arr[i] < min) {
        min = arr[i];
    }
}

console.log(min, '=======minimum')