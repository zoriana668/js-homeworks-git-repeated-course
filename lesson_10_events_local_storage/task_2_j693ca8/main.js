// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18,
//     та повідомити про це користувача


// creating elements & styles ---

let parentInputBlock = document.createElement('div');
parentInputBlock.classList.add('parentInputBlock');
parentInputBlock.style.display = 'flex';
parentInputBlock.style.alignItems = 'center';
parentInputBlock.style.padding = '50px';
parentInputBlock.style.backgroundColor = '#ed9160';

document.body.appendChild(parentInputBlock);

let inputAge = document.createElement('input');
inputAge.type = 'number';
inputAge.placeholder = 'Enter your age';
inputAge.style.width = '200px';
inputAge.style.height = '30px';
inputAge.style.marginRight = '30px';


parentInputBlock.appendChild(inputAge);

let btnConfirmation = document.createElement('button');
btnConfirmation.style.backgroundColor = 'green';
btnConfirmation.textContent = 'Confirm your age';
btnConfirmation.style.width = '130px';
btnConfirmation.style.height = '30px';
btnConfirmation.style.cursor = 'pointer';


parentInputBlock.appendChild(btnConfirmation);



// logic ----


btnConfirmation.addEventListener('click', (event) => {
    const age = Number(inputAge.value);

    if (!inputAge.value) {
        console.log('please enter your age');
        return;
    }

    if(age >= 18) {
        console.log(`Hi user, your age is ${inputAge.value}. Check you confirmation on gmail`);
    } else if (age < 18) {
        console.log(`Dear user, your age is ${inputAge.value}, you are very young`);
    }

    inputAge.value = '';
});
