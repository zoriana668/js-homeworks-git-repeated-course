// #Jg0gPO00
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут.

//     При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок






// creation elements and theis styles ---

let h1 = document.createElement('h1');
h1.textContent = 'Конвертер ваги з кілограм у фунти';
h1.style.textAlign = 'center';
h1.style.fontFamily = 'Arial';
h1.style.color = '#fff';
h1.style.margin = '60px 0';

document.body.appendChild(h1);


let main = document.createElement('div');
main.style.backgroundColor = '#c1bbbb';
main.style.width = '500px';
main.style.height = '250px';
main.style.borderRadius = '12px';
main.style.fontFamily = 'Arial';

main.style.margin = '0 auto';
main.style.padding = '30px';

main.style.display = 'flex';
main.style.justifyContent = 'space-between';

document.body.appendChild(main);


let input = document.createElement('input');

input.type = 'number';
input.placeholder = 'КГ'

input.style.width = '150px';
input.style.height = '40px';
input.style.border = 'none';
input.style.padding = '7px';
input.style.borderRadius = '9px';

main.appendChild(input);



let convertBlock = document.createElement('div');
convertBlock.style.width = '250px';
convertBlock.style.height = '23px';
convertBlock.style.padding = '15px';
convertBlock.style.backgroundColor = '#fff';
convertBlock.style.borderRadius = '9px';
convertBlock.style.fontSize = '26px';

main.appendChild(convertBlock);



// logic -----

input.addEventListener('input', (event) => {

    let kg = Number(input.value);
    let pounds = kg * 2.20462;

    convertBlock.textContent = pounds.toFixed(2);
});

