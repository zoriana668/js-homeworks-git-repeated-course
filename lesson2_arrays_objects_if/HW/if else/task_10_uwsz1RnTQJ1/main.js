// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох.
//     Також потрібно врахувати коли введені рівні числа.


let firstNum = +prompt('enter some digit');

let secondNum = +prompt('please enter again some digit');

if(firstNum > secondNum) {
    console.log(`the bigger num is ${firstNum}`);
} else if(firstNum < secondNum) {
    console.log(`the bigger num is ${secondNum}`);
} else if (firstNum === secondNum) {
    console.log('numbers are equal');
} else {
    console.log('please write correct values');
}