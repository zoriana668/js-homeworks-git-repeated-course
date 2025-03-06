// - створити функцію sortNums(direction), яка приймає масив чисел,
// та сортує його від більшого до меншого, або навпаки залежно від значення аргументу direction.

//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]



let nums = [11,21,3];

function sortNums(arr, direction) {
    if(direction === 'ascending') {
       return arr.sort((a, b) => a - b);
    }

    else if(direction === 'descending') {
        return arr.sort((a, b) => b - a);
    }
}

console.log(sortNums(nums, 'ascending'));       // [3, 11, 21]

console.log(sortNums(nums, 'descending'));      // [21, 11, 3]