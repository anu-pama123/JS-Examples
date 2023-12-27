// print prime numbers
// 2,3,5,7,11,13 etc

const limit = 10;
let count =0
i =2
for(let i=2; i<= limit; i++) {
    for(let j=2;j<i;j++){
        if(i%j===0){
            count+=1
        }
    }
    if(count==0){
        console.log(i)
    }
    count = 0
}
