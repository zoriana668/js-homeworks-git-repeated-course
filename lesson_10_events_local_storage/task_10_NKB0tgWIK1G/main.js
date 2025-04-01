// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантаженні сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


const objectsArray = [
    { id: 1, name: "Книга", price: 100 },
    { id: 2, name: "Ручка", price: 10 },
    { id: 3, name: "Олівець", price: 5 },
    { id: 4, name: "Зошит", price: 20 },
    { id: 5, name: "Лінійка", price: 15 },
    { id: 6, name: "Гумка", price: 7 },
    { id: 7, name: "Флешка", price: 250 },
    { id: 8, name: "Лампа", price: 300 },
    { id: 9, name: "Годинник", price: 500 },
    { id: 10, name: "Кружка", price: 120 },
    { id: 11, name: "Телефон", price: 7000 },
    { id: 12, name: "Навушники", price: 800 },
    { id: 13, name: "Мікрофон", price: 1500 },
    { id: 14, name: "Ноутбук", price: 25000 },
    { id: 15, name: "Смарт-годинник", price: 5000 },
    { id: 16, name: "Рюкзак", price: 700 },
    { id: 17, name: "Шкарпетки", price: 50 },
    { id: 18, name: "Футболка", price: 300 },
    { id: 19, name: "Штани", price: 600 },
    { id: 20, name: "Кросівки", price: 2000 },
    { id: 21, name: "Планшет", price: 10000 },
    { id: 22, name: "Гітара", price: 6000 },
    { id: 23, name: "Портфель", price: 800 },
    { id: 24, name: "Парасолька", price: 400 },
    { id: 25, name: "Клавіатура", price: 1200 },
    { id: 26, name: "Миша", price: 500 },
    { id: 27, name: "Монітор", price: 7000 },
    { id: 28, name: "Пральна машина", price: 15000 },
    { id: 29, name: "Холодильник", price: 20000 },
    { id: 30, name: "Телевізор", price: 12000 },
    { id: 31, name: "Тостер", price: 900 },
    { id: 32, name: "Чайник", price: 700 },
    { id: 33, name: "Пилосос", price: 5000 },
    { id: 34, name: "Блендер", price: 1200 },
    { id: 35, name: "Праска", price: 1400 },
    { id: 36, name: "Фен", price: 1300 },
    { id: 37, name: "Мікрохвильовка", price: 4000 },
    { id: 38, name: "Морозильник", price: 18000 },
    { id: 39, name: "Камера", price: 15000 },
    { id: 40, name: "Велосипед", price: 9000 },
    { id: 41, name: "Самокат", price: 5000 },
    { id: 42, name: "Автомобіль", price: 500000 },
    { id: 43, name: "Мотоцикл", price: 80000 },
    { id: 44, name: "Електросамокат", price: 12000 },
    { id: 45, name: "Килим", price: 3000 },
    { id: 46, name: "Стіл", price: 4000 },
    { id: 47, name: "Стілець", price: 1200 },
    { id: 48, name: "Шафа", price: 7000 },
    { id: 49, name: "Ліжко", price: 15000 },
    { id: 50, name: "Матрац", price: 5000 },
    { id: 51, name: "Диван", price: 18000 },
    { id: 52, name: "Крісло", price: 9000 },
    { id: 53, name: "Комод", price: 6000 },
    { id: 54, name: "Лампочка", price: 50 },
    { id: 55, name: "Світильник", price: 800 },
    { id: 56, name: "Гітарні струни", price: 300 },
    { id: 57, name: "Мольберт", price: 2500 },
    { id: 58, name: "Фарби", price: 800 },
    { id: 59, name: "Пензлики", price: 400 },
    { id: 60, name: "Полотно", price: 1200 },
    { id: 61, name: "Гаманець", price: 900 },
    { id: 62, name: "Ключі", price: 0 },
    { id: 63, name: "Батарейки", price: 100 },
    { id: 64, name: "Розетка", price: 150 },
    { id: 65, name: "Подушка", price: 800 },
    { id: 66, name: "Ковдра", price: 1200 },
    { id: 67, name: "Рушник", price: 500 },
    { id: 68, name: "Термос", price: 1000 },
    { id: 69, name: "Ланч-бокс", price: 600 },
    { id: 70, name: "Спальний мішок", price: 3000 },
    { id: 71, name: "Намет", price: 8000 },
    { id: 72, name: "Каструля", price: 1200 },
    { id: 73, name: "Сковорідка", price: 1400 },
    { id: 74, name: "Ложка", price: 50 },
    { id: 75, name: "Вилка", price: 50 },
    { id: 76, name: "Ніж", price: 200 },
    { id: 77, name: "Тарілка", price: 150 },
    { id: 78, name: "Чайна ложка", price: 30 },
    { id: 79, name: "Годинник настінний", price: 2000 },
    { id: 80, name: "Настільна гра", price: 700 },
    { id: 81, name: "Конструктор", price: 3000 },
    { id: 82, name: "Лялька", price: 500 },
    { id: 83, name: "Машинка", price: 400 },
    { id: 84, name: "Пазли", price: 800 },
    { id: 85, name: "Скейтборд", price: 4000 },
    { id: 86, name: "Ролики", price: 5000 },
    { id: 87, name: "Гантелі", price: 1500 },
    { id: 88, name: "Килимок для йоги", price: 1000 },
    { id: 89, name: "Скакалка", price: 400 },
    { id: 90, name: "М'яч", price: 600 },
    { id: 91, name: "Книга-розмальовка", price: 300 },
    { id: 92, name: "Фітнес-браслет", price: 2500 },
    { id: 93, name: "Підставка для ноутбука", price: 1300 },
    { id: 94, name: "Маска для сну", price: 400 },
    { id: 95, name: "Чохол для телефону", price: 250 },
    { id: 96, name: "Килимок для миші", price: 300 },
    { id: 97, name: "Блокнот", price: 200 },
    { id: 98, name: "Щоденник", price: 500 },
    { id: 99, name: "Маркер", price: 100 },
    { id: 100, name: "Степлер", price: 600 }
];

document.addEventListener('DOMContentLoaded', (event) => {
    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next');

    let contentBlock = document.querySelector('.content-block');

    let savedLsArray = JSON.parse(localStorage.getItem('paginationArr'));
    if(!savedLsArray) {
        savedLsArray = objectsArray;
        localStorage.setItem('paginationArr', JSON.stringify(objectsArray));
    }

    let currentPage = 0;
    let itemsOnPage = 10;

    const showTenElementsOnPage = () => {
        contentBlock.innerHTML = '';

        let startIndex = currentPage * itemsOnPage;
        let endIndex =  startIndex + itemsOnPage;
        let paginatedItems = savedLsArray.slice(startIndex, endIndex);

        paginatedItems.forEach((item) => {
            let div = document.createElement('div');
            div.classList.add('list-item');

            div.textContent = `${item.id}: Назва товару - ${item.name}, ціна - ${item.price} грн.`;
            contentBlock.appendChild(div);
        });
    };

    showTenElementsOnPage();


    nextBtn.addEventListener('click', (event) => {
        if((currentPage + 1) * itemsOnPage < savedLsArray.length) {
            currentPage++;
            showTenElementsOnPage();
        }
    });

    prevBtn.addEventListener('click', (event) => {
        if(currentPage > 0) {
            currentPage--;
            showTenElementsOnPage();
        }
    })
})
