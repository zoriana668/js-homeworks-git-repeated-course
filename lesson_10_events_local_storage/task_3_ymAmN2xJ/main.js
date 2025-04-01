// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою.
//     При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ.
// Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом


let form = document.createElement('form');

document.body.appendChild(form);


let inputUserName = document.createElement('input');
inputUserName.type = 'text';
inputUserName.placeholder = 'name';

let inputUserSurname = document.createElement('input');
inputUserSurname.type = 'text';
inputUserSurname.placeholder = 'surname';

let inputUserAge = document.createElement('input');
inputUserAge.type = 'number';
inputUserAge.placeholder = 'age';

let btn = document.createElement('button');
btn.textContent = 'Save data';
btn.style.color = '#fff';
btn.style.cursor = 'pointer';


form.append(inputUserName, inputUserSurname, inputUserAge, btn);


// logic ----


let info = document.createElement('div');
document.body.appendChild(info);

btn.addEventListener('click', (event) => {
    event.preventDefault();

    if(!inputUserName.value || !inputUserSurname.value || !inputUserAge.value) {
        alert('Please fill in all fields');
        return;
    }

    info.style.backgroundColor = '#ea8b14';

    let user = {
        name: inputUserName.value,
        surname: inputUserSurname.value,
        age: Number(inputUserAge.value)
    };

    console.log(user);

    info.innerHTML = '';

    let userName = document.createElement('p');
    userName.textContent = `User name - ${inputUserName.value}`;

    let userSurname = document.createElement('p');

    userSurname.textContent = `User surname - ${inputUserSurname.value}`;

    let userAge = document.createElement('p');
    userAge.textContent = `User age - ${inputUserAge.value}`;

    info.append(userName, userSurname, userAge);

    inputUserName.value = '';
    inputUserSurname.value = '';
    inputUserAge.value = '';

});



