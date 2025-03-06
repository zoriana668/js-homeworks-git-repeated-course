// - створити функцію яка приймає масив та виводить кожен його елемент


let justArray = ['arr', 1, true, [5, 6 , 7]];


const iterateArray = (arr) => {
    for(let elem of arr) {
        document.write(`<div>${elem}</div>`);
    }
}

iterateArray(justArray);