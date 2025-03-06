// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';

function stringToArray(string) {
    return string.split(' ');
}

let arr = stringToArray(str);

console.log(arr);           // ['Ревуть', 'воли', 'як', 'ясла', 'повні']

