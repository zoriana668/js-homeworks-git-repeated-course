// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname, email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


let array = [];

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, 'Aria', 'Stark', 'ariastark@gmail.com', '0573750275');

let user2 = new User(2, 'Bran', 'Stark', 'stark@gmail.com', '057375443275');

let user3 = new User(3, 'Daenerys', 'Stormborn', 'da@gmail.com', '099375443275');

let user4 = new User(4, 'Tyrion', 'Lannister', 'ty@gmail.com', '067375443275');

let user5 = new User(5, 'Sercei', 'Lannister', 'Sercei@gmail.com', '057375443275');

let user6 = new User(6, 'John', 'Snow',  'Snow@gmail.com', '0737375443275');

let user7 = new User(7,'Kate', 'Stark', 'starkkk@gmail.com', '057375443275');

let user8 = new User(8,'Jame', 'Lannister', 'lion@gmail.com', '097375443275');

let user9 = new User(9, 'Sansa', 'Stark', 'sttark@gmail.com', '057375443275');

let user10 = new User(10, 'Eduard', 'Stark', 'stark@gmail.com', '057375443275');

array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

console.log(array);