// Q1
let arrr = [1, 2, 3, 4, 5];
arr.reverse();

console.log(arrr); 

let arrrr = [1, 2, 3, 4, 5];
console.log(arrrr.pop());  



// Q2
let arr = [1, 2, 3, 4, 5];
let rev=[]
while(arr.length>0){
    rev.push(arr.pop())
}
console.log(rev); 

function printPositive(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            console.log(numbers[i]);
        }
    }
}


printPositive([10, -5, 3, -2, 7, 0]);


// Q3

function palindrome() {
    let arr = [1, 2, 3, 2, 1];
    let original = []; 
    let reverse = [];  

    for (let i = 0; i < arr.length; i++) {
        original.push(arr[i]);
    }

    while (arr.length > 0) {
        reverse.push(arr.pop());
    }

    for (i = 0; i < original.length; i++) {
        if (original[i] !== reverse[i]) {
            return "not a palindrome";
        }
    }

    return "palindrome";
}

console.log(palindrome());

