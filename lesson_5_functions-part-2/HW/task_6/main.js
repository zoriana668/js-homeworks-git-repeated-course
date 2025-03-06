// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


const createList = (liText) => {
    document.write(`<ul>`);
        document.write(`
                        <li>${liText}</li>
                        <li>${liText}</li>
                        <li>${liText}</li>
                       `);
    document.write(`</ul>`);
}

createList('Hello World!');