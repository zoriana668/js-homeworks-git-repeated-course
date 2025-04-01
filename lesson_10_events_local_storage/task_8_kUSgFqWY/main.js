// #kUSgFqWY
// Створити 3 інпута та кнопку.
// Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.

// При натисканні кнопки, вся ця інформація зчитується
// і формується табличка, з відповідним вмістом.



// creating and styles ---------------------------------------------

let form = document.createElement('form');

form.style.marginBottom = '50px';

// спроба зробити функцію для створення інпутів та плейсхолдерів -----------------------

const createPlaceholderAndInput = (placeholderText, inputType) => {
    let input = document.createElement('input');
    input.placeholder = placeholderText;

    input.type = inputType;

    return input;
}

let inputNumberOfRows = createPlaceholderAndInput('Введіть кількість рядків', 'number');

let inputNumberOfCells = createPlaceholderAndInput('Введіть кількість ячеєк', 'number');

let inputContent = createPlaceholderAndInput('Введіть вміст ячеєк', 'text');


document.body.appendChild(form);

form.append(inputNumberOfRows, inputNumberOfCells, inputContent);



let inputs = document.getElementsByTagName('input');
for(let input of inputs) {
    input.style.marginRight = '30px';
    input.style.width = '180px';
    input.style.height = '40px';
    input.style.padding = '3px 5px';
    input.style.borderRadius = '5px';
    input.style.border = 'none';
}


let btn = document.createElement('button');
btn.textContent = 'CREATE';
btn.type = 'button';


btn.style.padding = '15px 20px';
btn.style.backgroundColor = '#46b60a';
btn.style.border = 'none';
btn.style.cursor = 'pointer';
btn.style.borderRadius = '5px';

form.appendChild(btn);


btn.addEventListener('mouseover', (event) => {
    btn.style.backgroundColor = '#2e9500'
});

btn.addEventListener('mouseout', (event) => {
    btn.style.backgroundColor = '#46b60a';
})



// logic -------------------------------------------------------------------

btn.addEventListener('click', (event) => {
    let rows = parseInt(inputNumberOfRows.value);
    let cols = parseInt(inputNumberOfCells.value);
    let content = inputContent.value;

    if(isNaN(rows) || rows <= 0 || isNaN(cols) || cols <= 0) {
        alert('Введіть будь ласка коректні числові значення для кількості рядків та клітинок');
        return;
    }


    // deleting previous table ----------------------------------

    let oldTable = document.querySelector('table');
    if(oldTable) {
        oldTable.remove();
    }

    // creating table ---------------------------------------------------

    let table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.margin = '0 auto';


    // filling the table ------------------------------------------------

    for(let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');

        for(let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.textContent = content;
            td.style.border = '2px solid #000';
            td.style.padding = '12px';
            td.style.textAlign = 'center';
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    document.body.appendChild(table);


});

