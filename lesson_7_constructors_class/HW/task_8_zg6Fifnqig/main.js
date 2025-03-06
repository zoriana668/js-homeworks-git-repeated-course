// #zg6Fifnqig
// // - створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('Oksana', 27, 37),
    new Cinderella('Valentyna', 34, 39),
    new Cinderella('Stefania', 32, 36),
    new Cinderella('Liliya', 39, 37),
    new Cinderella('Bohdana', 24, 39),
    new Cinderella('Ilona', 19, 40),
    new Cinderella('Orysya', 28, 36),
    new Cinderella('Viktoria', 31, 39),
    new Cinderella('Ksenia', 27, 37),
    new Cinderella('Valeria', 26, 41)
];

console.log(cinderellas);



class Prince  {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let prince = new Prince('Severin', 31, 37);

console.log(prince);

console.log(prince.foundShoe);


for(let cinderella of cinderellas) {
    if(cinderella.footSize === prince.foundShoe) {
        console.log(`${cinderella.name} is the perfect match for ${prince.name}`);
        break;
    }
}

let cinderellaFinder = cinderellas.find((cinderella) => cinderella.footSize === prince.foundShoe);

if(cinderellaFinder) {
    console.log(`${cinderellaFinder.name} is the perfect match for ${prince.name}`);
} else {
    console.log(`No match found for ${prince.name}`);
}
