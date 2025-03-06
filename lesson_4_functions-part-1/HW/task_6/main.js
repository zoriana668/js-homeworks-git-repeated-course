// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


function createList(text) {
    document.write(
                `<ul>
                    <li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>
                </ul>`);
}

createList('Hello world');