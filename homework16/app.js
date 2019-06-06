// 1. Есть класс Planet
// function Planet(name) { this.name = name; this.getName = function () {
// return 'Planet name is ' + this.name; }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет принимать, кроме name, 
// название спутника (satelliteName). Переопределите метод getName для PlanetWithSatellite так, чтобы он возвращал 
// ту же самую строчку + дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon'); earth.getName(); // 'Planet name is earth. The satellite is moon’

function Planet(name) { 
    this.name = name; 
    this.getName = function () {
        return 'Planet name is ' + this.name; 
    };
};

function PlanetWithSatellite (name, satellite) {
    Planet.call(this, name);
    this.satellite = satellite;
    this.getName = function () {
        const original = Planet.getName;
        return (original + ". The satellite is " + this.satellite);
    };
};

 var earth = new PlanetWithSatellite('earth', 'moon'); 
 console.log(earth.getName());

// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и 
// метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 
// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть 
// объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен 
// вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

class Building {
    constructor (name, numberOfFloors) {
        this.name = name; 
        this.numberOfFloors = numberOfFloors;
    };

    get numberOfFloors () {
        return this.numberOfFloors;
    };

    set numberOfFloors (numberOfFloors) {
        this.numberOfFloors = numberOfFloors
    };
};

class House extends Building {
    constructor(name, numberOfFloors, numberOfAptOnFloor) {
        super(name, numberOfFloors);
        this.numberOfAptOnFloor = numberOfAptOnFloor;
    };

    get numberOfFloors() {
        return { 
            floors: super.numberOfFloors(), 
            totalNumberOfApt: super.numberOfFloors() * this.numberOfAptOnFloor
        };
    };
};

class Mall extends Building {
    constructor(name, numberOfFloors, numberOfShopsOnFloor) {
        super(name, numberOfFloors);
        this.numberOfShopsOnFloor = numberOfShopsOnFloor;
    };

    get numberOfFloors() {
        return { 
            floors: super.numberOfFloors(), 
            totalNumberOfShops: super.numberOfFloors() * this.numberOfShopsOnFloor
        };
    };
};

let house = new House('House', 9, 4);
let mall = new Mall('Mall', 3, 21);

console.log(house.numberOfFloors());
console.log(mall.numberOfFloors());

// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя 
// и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: 
// экземпляр “ОфиснаяМебель” и “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих 
// экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен 
// учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

class Furniture {
    constuctor(name, price) {
        this.name = name; 
        this.price = price;
    }
}

Furniture.prototype.getInfo = function () {
    return `Name: ${this.name}. Price: ${this.price}'.`;
};

class FurnitureForOffice extends Furniture {
    constuctor(name, price, isShredder) {
        super(name, price);
        this.isShredder = isShredder;
    };
};

FurnitureForOffice.prototype.getInfo = function () {
    let originResult = Furniture.prototype.getInfo.call(this);
    return originResult + ` Shredder: ${this.isShredder}`;
};

class FurnitureForHome extends Furniture {
    constuctor(name, price, color) {
        super(name, price);
        this.color = color;
    };
};

FurnitureForHome.prototype.getInfo = function () {
    let originResult = Furniture.prototype.getInfo.call(this);
    return originResult + ` Color: ${this.color}`;
};

let furnitureForOffice = new FurnitureForOffice('Table', 320, true);
let furnitureForHome = new FurnitureForHome('Couch', 780, 'grey');

console.log(furnitureForOffice.getInfo());
console.log(furnitureForHome.getInfo());

// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” 
// (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) 
// Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от 
// момента регистрации). У классов-наследников метод “получить информацию” должен так же содержать информацию о 
// дополнительных свойствах (“суперАдмин” и “срокДействия”)

class User {
    constructor(name, dateOfRegistration) {
        this.name = name;
        this.dateOfRegistration = dateOfRegistration;
    };
};

User.prototype.getInfo = function () {
    return `Name: ${this.name}. Date of registration: ${this.dateOfRegistration}'.`
};

class Admin extends User {
    constructor(name, dateOfRegistration, superAdmin) {
        super(name,dateOfRegistration);
        let superAdmin = superAdmin;
    };

    getInfo() {
        let originResult = User.prototype.getInfo.call(this);
        return originResult + `Valid date: ${validDate}'.`
    };
};

class Guest extends User {
    constructor(name, dateOfRegistration, validDate) {
        super(name,dateOfRegistration);
        this.validDate = validDate;
    };
};

Guest.prototype.getInfo = function () {
    let originResult = User.prototype.getInfo.call(this);
    return originResult + `Valid date: ${this.validDate}'.`
};

let admin = new Admin('Nazar', '21/03/2016', true);
let guest = new Guest('Agata', '14/05/2016', '21/05/2016');

console.log(admin.getInfo());
console.log(guest.getInfo());
