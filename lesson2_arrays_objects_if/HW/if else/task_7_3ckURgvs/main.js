// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('enter some digit from 0 to 59');

if(time >= 0 && time <= 14) {
    console.log('1st part of hour');
}
    else if(time >= 15 && time <= 29) {
    console.log('2nd part of hour');
}
    else if(time >= 30 && time <= 44) {
    console.log('3th part of hour');
}
    else if(time >= 45 && time <= 59) {
    console.log('4th part of hour');
}
    else {
    console.log('please enter correct data');
}