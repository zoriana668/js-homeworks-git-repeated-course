// - створити функцію яка приймає масив та виводить кожен його елемент


let justArray = ['arr', 1, true, [5, 6 , 7]];

function printer(array) {
    for(let item of array) {
        document.write(`<div>${item}</div>`);
    }
}

printer(justArray);