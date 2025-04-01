

// #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в
// середині якого є значення "100 грн"
// при перезавантаженні сторінки до значення додається по 10 грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


let number = document.querySelector('.number');

let currentValue = localStorage.getItem('value') ? Number(localStorage.getItem('value')) : 100;

let lastTimeUpdate = localStorage.getItem('lastUpdate') ? Number(localStorage.getItem('lastUpdate')) : 0;

let currentTime = Date.now();

if(currentTime - lastTimeUpdate >= 10000) {
    currentValue+=10;

    localStorage.setItem('value', JSON.stringify(currentValue));
    localStorage.setItem('lastUpdate', JSON.stringify(currentTime));
}

number.innerHTML = `${currentValue} <span>грн</span>`;


