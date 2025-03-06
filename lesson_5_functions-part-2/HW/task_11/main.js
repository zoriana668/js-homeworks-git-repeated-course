// - створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13



const sum = (arr) => {
    let suma = 0;

    for(let i = 0; i < arr.length; i++) {
        suma = suma + arr[i];
    }
    return suma;
}

console.log(sum([1,2,10])); // 13


