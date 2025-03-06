// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


function createList(text, quantityLi) {
    document.write(`<ul>`);
        for(let i = 0; i < quantityLi; i++) {
            document.write(`<li>${text}</li>`);
        }
    document.write(`</ul>`);
}


createList('Hello World!', 20);