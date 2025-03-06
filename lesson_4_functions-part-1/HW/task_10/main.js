// - створити функцію яка повертає найменьше число з масиву


let digitsArray = [61, 2, 4, 55, 6, 7, 8, 2.1, 342, 22];

function minDigit(arr) {
    let min = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log(minDigit(digitsArray));



// function findMinDigit(arr) {
//     return Math.min(...arr);
// }
//
// console.log(findMinDigit(digitsArray)); // 2