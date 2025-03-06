// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}km на годину`);
    };

    info() {
        document.write(
            `
                        <div>
                            <p>Model - ${this.model}</p>
                            <p>Manufacturer - ${this.manufacturer}</p>
                            <p>Year - ${this.year}</p>
                            <p>Max Speed - ${this.maxSpeed}</p>
                            <p>Engine Capacity - ${this.engineCapacity}</p>
                        </div>
                        `);
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver (driver) {
        this.driver = driver;
    }
}


let car1 = new Car('renegade', 'jeep', 2018, 160, 2.4);

console.log(car1);

car1.drive();

car1.info();

car1.increaseMaxSpeed(35);

car1.changeYear(2023);

car1.addDriver({name: 'Bran', surname: 'Stark', age: 18, drivingCategory: 'B'});

console.log(car1);