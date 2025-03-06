// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = +prompt('enter some number from 1 to 31');

if(day >= 1 && day <= 10) {
    console.log('1st decade of month');
} else if( day >= 11 && day <= 20) {
    console.log('2nd decade of month');
} else if(day >= 21 && day <= 31) {
    console.log('3th decade of month');
} else {
    console.log('please type a correct value');
}