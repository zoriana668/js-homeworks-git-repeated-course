// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиться цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1



let block = document.createElement('div');
block.style.width = '400px';
block.style.height = '200px';
block.style.backgroundColor = 'orange';
block.style.margin = '0 auto';
block.style.padding = '40px';

document.body.appendChild(block);


let number = document.createElement('div');
number.style.width = '170px';
number.style.height = '110px';
number.style.backgroundColor = '#fff';
number.style.margin = '0 auto';
number.style.padding = '15px';
number.style.fontSize = '50px';
number.style.fontFamily = 'Arial';
number.style.textAlign = 'center';





// localStorage ----

let count = JSON.parse(localStorage.getItem('counter')) || 0;

count++;

localStorage.setItem('counter', JSON.stringify(count));

number.textContent = count;

block.appendChild(number);



