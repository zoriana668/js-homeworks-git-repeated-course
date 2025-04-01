// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.


let user = {
    id: 1,
    name: 'John',
    surname: 'Snow'
};

let user2 = {
    id: 2,
    name: ' Tyrion',
    surname: 'Lannister',
    shoeSize: undefined,

    drinkAlcohol() {
        console.log('Why haven\'t you poured me ale yet?');
    }
};


let user3 = {
    id: 3,
    name: 'Sercei',
    surname: 'Lannister',
    children: {
        daughter: 'Mircella Baratheon',
        son1: 'Joffrey Baratheon',
        son2: 'Tommen Baratheon'
    },
};

let mainWesterosFamilies = ['Stark', 'Lannister', 'Tally', 'Targaryen', 'Baratheon', 'Tyrrel', ];


//  ==================


const deepCopyFunc = (obj) => {
    if(obj === null) {
        return null;
    }

    if(typeof obj !== 'object') {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};

    for(let key in obj) {
        if(Object.hasOwn(obj, key)) {
            let value = obj[key];

            if(value === undefined || value === null || Number.isNaN(value)) {
                copy[key] = 'default value';
            } else if(typeof value === 'object' && value !== null) {
                copy[key] = deepCopyFunc(value);
            } else {
                copy[key] = value;
            }
        }
    }


    // copying object's functions

    let proto = Object.getPrototypeOf(obj);
    Object.setPrototypeOf(copy, proto);

    return copy;
};




let user2Copy = deepCopyFunc(user2);
console.log(user2Copy);

user2Copy.drinkAlcohol();



let user3Copy = deepCopyFunc(user3);
console.log(user3Copy);

let westerosFamiliesCopy = deepCopyFunc(mainWesterosFamilies);

console.log(westerosFamiliesCopy);
