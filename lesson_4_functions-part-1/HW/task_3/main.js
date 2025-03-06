// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

function calculateCylinderArea(h, r) {
    return 2 * 3.14 * r * (r + h);
}

console.log(calculateCylinderArea(7, 5)); // 376.8
