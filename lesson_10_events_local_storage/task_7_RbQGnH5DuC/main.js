// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію,
//     які дістає потрібний вам масив з localStorage та додає в нього об'єкт

// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void




function addToLocalStorage(arrayName, objToAdd) {
    try {
    let arrayFromLS = JSON.parse(localStorage.getItem(arrayName));

    if(!Array.isArray(arrayFromLS)) {
        arrayFromLS = [];
    }

    if(typeof objToAdd === 'object' && objToAdd !== null) {
        arrayFromLS.push(objToAdd);
    } else {
        console.warn('Переданий об\'єкт має некоректний формат');
    }

    localStorage.setItem(arrayName, JSON.stringify(arrayFromLS));
} catch(error) {
        console.error('Помилка в local Storage' - error);
    }
}


// ---------------------------------------------------------------------------------

addToLocalStorage('trickyArray', null);

addToLocalStorage('users', {name: 'John', surname: 'Snow'});

addToLocalStorage('trainings', {type: 'Cycling', durationInMinutes: '45', level: 'junior'});


