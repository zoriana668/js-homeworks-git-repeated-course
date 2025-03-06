//
//
// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список


let myArray = [2, 6433, 'hello', 'java script', true];


const createList = (arr) => {
    document.write(`<ul>`);
        for(let elem of arr) {
            document.write(`<li>${elem}</li>`);
        }
    document.write(`</ul>`);
}

createList(myArray);
