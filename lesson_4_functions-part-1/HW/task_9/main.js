// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.


let users = [

{
    id: 1,
    name: 'John',
    age: 32
},

{
    id: 5,
    name: 'Jane',
    age: 31
}

];


function showElems (arr) {
    for(let obj of arr) {
        document.write(`<div>`);
            for(let info in obj) {
                document.write(`<p>${info}: ${obj[info]}</p>`);
            }
        document.write(`</div>`);
    }
}

showElems(users);