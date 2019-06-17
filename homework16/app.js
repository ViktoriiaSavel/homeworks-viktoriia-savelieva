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
    const parentGetNameResult = this.getName();

    this.getName = function () {
        return parentGetNameResult + ". The satellite is " + this.satellite;
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

    getNumberOfFloors () {
        return this.numberOfFloors;
    };

    setNumberOfFloors (numberOfFloors) {
        this.numberOfFloors = numberOfFloors;
    };
};

class House extends Building {
    constructor(name, numberOfFloors, numberOfAptOnFloor) {
        super(name, numberOfFloors);
        this.numberOfAptOnFloor = numberOfAptOnFloor;
    };

    getNumberOfFloors() {
        return { 
            floors: super.getNumberOfFloors(), 
            totalNumberOfApt: super.getNumberOfFloors() * this.numberOfAptOnFloor
        };
    };
};

class Mall extends Building {
    constructor(name, numberOfFloors, numberOfShopsOnFloor) {
        super(name, numberOfFloors);
        this.numberOfShopsOnFloor = numberOfShopsOnFloor;
    };

    getNumberOfFloors() {
        return { 
            floors: super.getNumberOfFloors(), 
            totalNumberOfShops: super.getNumberOfFloors() * this.numberOfShopsOnFloor
        };
    };
};

let house = new House('House', 9, 4);
let mall = new Mall('Mall', 3, 21);

console.log(house.getNumberOfFloors());
console.log(mall.getNumberOfFloors());

// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя 
// и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: 
// экземпляр “ОфиснаяМебель” и “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих 
// экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен 
// учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

function Furniture(name, price) {
    this.name = name; 
    this.price = price;
;}

Furniture.prototype.getInfo = function () {
    return `Name: ${this.name}. Price: ${this.price}.`;
};

function FurnitureForOffice(name, price, isShredder) {
    Furniture.call(this, name, price);
    this.isShredder = isShredder;
};

FurnitureForOffice.prototype = Object.create(Furniture.prototype);
FurnitureForOffice.prototype.constructor = FurnitureForOffice;

FurnitureForOffice.prototype.getInfo = function () {
    const parentGetInfoResult = Furniture.prototype.getInfo.call(this);
    return parentGetInfoResult + ` Shredder: ${this.isShredder}`;
};

function FurnitureForHome (name, price, color) {
    Furniture.call(this, name, price);
    this.color = color;
};

FurnitureForHome.prototype = Object.create(Furniture.prototype);
FurnitureForHome.prototype.constructor = FurnitureForHome;

FurnitureForHome.prototype.getInfo = function () {
    let parentGetInfoResult = Furniture.prototype.getInfo.call(this);
    return parentGetInfoResult + ` Color: ${this.color}.`;
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

function User(name, dateOfRegistration) {
    this.name = name;
    this.dateOfRegistration = dateOfRegistration;
};

User.prototype.getInfo = function () {
    return `Name: ${this.name}. Date of registration: ${this.dateOfRegistration}.`
};

function Admin(name, dateOfRegistration, superAdmin) {
    User.call(this, name, dateOfRegistration);
    this._isSuperAdmin = superAdmin;
};

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.getInfo = function () {
    let parentGetInfoResult = User.prototype.getInfo.call(this);
    return parentGetInfoResult + ` Valid date: ${this._isSuperAdmin}.`;
};

function Guest(name, dateOfRegistration, validDate) {
    User.call(this, name, dateOfRegistration);
    this.validDate = validDate;
};

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

Guest.prototype.getInfo = function () {
    let parentGetInfoResult = User.prototype.getInfo.call(this);
    return parentGetInfoResult + ` Valid date: ${this.validDate}.`
};

let admin = new Admin('Nazar', '21/03/2016', true);
let guest = new Guest('Agata', '14/05/2016', '21/05/2016');

console.log(admin.getInfo());
console.log(guest.getInfo());
