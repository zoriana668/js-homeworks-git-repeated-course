// - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список


const primitiveArray = [42, 'Привіт', true, null, undefined, 'Hello world'];

let justArray = ['arr', 1, true, 'qwerty'];

function createList(arr) {
    document.write(`<ul>`);
    for(let elem of arr) {
        document.write(`<li>${elem}</li>`);
    }
    document.write(`</ul>`);
}

createList(primitiveArray);

createList(justArray);