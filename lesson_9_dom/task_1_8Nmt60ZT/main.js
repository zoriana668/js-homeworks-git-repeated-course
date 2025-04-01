// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


let block = document.createElement('div');

block.classList.add('wrap', 'collapse', 'alpha', 'beta');

block.innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets cont';

block.style.backgroundColor = '#edb154';
block.style.color = '#0161cd';
block.style.fontSize = '22px';


// clone block ---

let blockClone = block.cloneNode(true);

let h1 = document.createElement('h1');

h1.innerText = 'This is block clone';

blockClone.appendChild(h1);

document.body.appendChild(blockClone);