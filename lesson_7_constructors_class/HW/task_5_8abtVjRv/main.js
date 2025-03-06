// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let array = [
  new Client(351, 'Aria', 'Stark', 'ariastark@gmail.com', '0573750275', ['laptop', 'book', 'bicycle', 'toy for wolf', 'poison', 'mask']),
  new Client(2, 'Bran', 'Stark', 'stark@gmail.com', '057375443275', ['glasses', 'bicycle']),
  new Client(3, 'Daenerys', 'Stormborn', 'da@gmail.com', '099375443275', ['sweatshirt for dragon', 'food for dragons', 'treatments']),
  new Client(24, 'Tyrion', 'Lannister', 'ty@gmail.com', '067375443275', ['whiskey']),
  new Client(5, 'Sercei', 'Lannister', 'Sercei@gmail.com', '057375443275', ['wine', 'nuts', 'dress']),
  new Client(56, 'John', 'Snow',  'Snow@gmail.com', '0737375443275', ['jacket', 'socks']),
  new Client(7,'Kate', 'Stark', 'starkkk@gmail.com', '057375443275', ['lipstick', 'planner', 'jeans', 'bag', 'book']),
  new Client(768,'Jame', 'Lannister', 'lion@gmail.com', '097375443275', ['shoes', 'T-shirt', 'socks', 'tooth brush']),
  new Client(9, 'Sansa', 'Stark', 'sttark@gmail.com', '057375443275', ['car', 'shelf']),
  new Client(6710, 'Eduard', 'Stark', 'stark@gmail.com', '057375443275', ['book']),
];

console.log(array);


let sortedArray = array.sort((a,b) => a.order.length - b.order.length);

console.log(sortedArray);



