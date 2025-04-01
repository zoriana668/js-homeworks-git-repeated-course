// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let block = document.createElement('div');
block.id = 'text';
block.style.backgroundColor = '#edb154';
block.style.width = '600px';
block.style.padding = '30px';
block.style.marginBottom = '50px';
block.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic';

document.body.appendChild(block);


let btn = document.createElement('button');
btn.style.width = '150px';
btn.style.height = '40px';
btn.style.backgroundColor = '#ed6060';
btn.innerText = 'delete text block';
document.body.appendChild(btn);


btn.addEventListener('click', (event) => {
    block.remove();
})