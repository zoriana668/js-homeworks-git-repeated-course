// - створити функцію яка приймає масив об'єктів
// з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.


const users = [
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


const showObjectsFromArr = (arr) => {
    for(let obj of arr) {
        document.write(`<div>`);
        for(let info in obj) {
            document.write(`<p>${info}: ${obj[info]}</p>`);
        }
        document.write(`</div>`);
    }
}

showObjectsFromArr(users);
