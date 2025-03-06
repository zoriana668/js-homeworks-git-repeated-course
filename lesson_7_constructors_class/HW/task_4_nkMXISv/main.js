// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let array = [
  new Client(351, 'Aria', 'Stark', 'ariastark@gmail.com', '0573750275', ['laptop', 'book']),
  new Client(2, 'Bran', 'Stark', 'stark@gmail.com', '057375443275', ['glasses', 'bicycle']),
  new Client(3, 'Daenerys', 'Stormborn', 'da@gmail.com', '099375443275', ['sweatshirt for dragon']),
  new Client(24, 'Tyrion', 'Lannister', 'ty@gmail.com', '067375443275', ['whiskey']),
  new Client(5, 'Sercei', 'Lannister', 'Sercei@gmail.com', '057375443275', ['wine', 'nuts']),
  new Client(56, 'John', 'Snow',  'Snow@gmail.com', '0737375443275', ['jacket', 'socks']),
  new Client(7,'Kate', 'Stark', 'starkkk@gmail.com', '057375443275', ['lipstick', 'planner']),
  new Client(768,'Jame', 'Lannister', 'lion@gmail.com', '097375443275', ['shoes', 'T-shirt']),
  new Client(9, 'Sansa', 'Stark', 'sttark@gmail.com', '057375443275', ['car', 'shelf']),
  new Client(6710, 'Eduard', 'Stark', 'stark@gmail.com', '057375443275', ['book']),
];

console.log(array);




