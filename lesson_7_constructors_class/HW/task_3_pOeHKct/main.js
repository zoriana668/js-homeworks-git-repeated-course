// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let array = [
    new User(351, 'Aria', 'Stark', 'ariastark@gmail.com', '0573750275'),
    new User(2, 'Bran', 'Stark', 'stark@gmail.com', '057375443275'),
    new User(345, 'Daenerys', 'Stormborn', 'da@gmail.com', '099375443275'),
    new User(24, 'Tyrion', 'Lannister', 'ty@gmail.com', '067375443275'),
    new User(5, 'Sercei', 'Lannister', 'Sercei@gmail.com', '057375443275'),
    new User(56, 'John', 'Snow',  'Snow@gmail.com', '0737375443275'),
    new User(7,'Kate', 'Stark', 'starkkk@gmail.com', '057375443275'),
    new User(768,'Jame', 'Lannister', 'lion@gmail.com', '097375443275'),
    new User(9, 'Sansa', 'Stark', 'sttark@gmail.com', '057375443275'),
    new User(6710, 'Eduard', 'Stark', 'stark@gmail.com', '057375443275')
];

console.log(array);

let sortedArray = array.sort((a, b) => {
    return a.id - b.id;
});

console.log(sortedArray);
