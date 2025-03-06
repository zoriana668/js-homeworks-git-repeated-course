// - створити функцію яка повертає найменше число з масиву


let digits = [2, 444, 6, 7543, 0.5];

const findMinDigit = (arr) => {
    let min = arr[0];
    for(let i = 0 ; i < arr.length; i++){
        if(min > arr[i]) {
            min = arr[i];
        }
    }

    return min;
}

console.log(findMinDigit(digits));      // 0.5