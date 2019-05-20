// ЗАМЫКАНИЯ И МОДУЛИ

// 1. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

const minus = function(x = 0) {
    return function(y = 0) {
        return x - y;
    };
};

console.log(minus(10)(6));

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2); multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3) multiply(10); // 120 (12 * 10)

function multiplyMaker(x = 0) {
    return function(y = 0) {
        return x *= y;
    };
};

const multiply = multiplyMaker(2);
multiply(2);

console.log(multiply(3));

// 3. Реализовать модуль, который работает со строкой и имеет методы: 
    // a. установить строку
        // i. если передано пустое значение, то установить пустую строку
        // ii. если передано число, число привести к строке 
    // b. получить строку
    // c. получить длину строки
    // d. получить строку-перевертыш Пример:
// модуль.установитьСтроку(‘abcde’); модуль.получитьСтроку(); // ‘abcde’ модуль.получитьДлину(); // 5

const string = (function() {
    let string = '';

    function setString(value) {
        if (!value) {
            return string;
        } else {
            if (typeof(value) !== 'string') {
                return string = value.toString();
            } 

            return string = value;
        };
    };

    function getString() {
        return string;
    };

    function getStringLength() {
        return string.length;
    };

    function getUpsideDownString() {
        const upsideDownString = string.split('').reverse().join('');
        return upsideDownString;
    };

    return {
        setString,
        getString,
        getStringLength,
        getUpsideDownString
    };
}());

string.setString(678);
console.log(string.getString());

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. 
// Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calculator = (function() {
    currentValue = 0;

    function setValue(value) {
        currentValue = value;
        return this;
    }

    function addNumber(number) {
        currentValue += number;
        return this;
    };

    function multiplyValue(number) {
        currentValue *= number;
        return this; 
    };

    function subtractValue(number) {
        currentValue -= number;
        return this;
    };

    function divideValue(number) {
        currentValue /= number;
        return this; 
    };

    function powerOfValue(number) {
        currentValue = Math.pow(currentValue, number);
        return this;  
    };

    function getValue() {
        return currentValue;
    };

    return {
        setValue,
        addNumber,
        multiplyValue,
        subtractValue,
        divideValue,
        powerOfValue,
        getValue
    };
}());

console.log(calculator.setValue(10).divideValue(2).getValue());

// КОНСТРУКТОРЫ И КЛАССЫ

// 1. Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины. 
// Конструктор должен иметь метод, который возвращает марку, и второй метод, который возвращает год производства машины 
// (год текущий минус возраст машины, использовать Date для получения текущего года)
// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2017 (2019-2);
// Марка машины всегда должна возвращаться с большой буквы!

function Car(brand, age) {
    this.getBrand = function() {
        const brandName = brand.charAt(0).toUpperCase() + brand.slice(1);
        return brandName;
    };

    this.getYearOfRelease = function() {
        const date = new Date();
        const curentYear = date.getFullYear();

        return curentYear - age;
    };
};

let lexus = new Car('lexus', 2);

console.log(lexus.getYearOfRelease());

// 2. Написать конструктор, который умеет элементарно шифровать строки (например, сделать из строки строку-перевертыш, 
// или заменить все символы их цифровым представлением, или любой другой метод). Конструктор при инициализации получает 
// строку и имеет следующие методы:
// a. показать оригинальную строку
// b. показать зашифрованную строку
// Строки не должны быть доступны через this, только с помощью методов.

function Encryptor(string) {
    this.getOriginalString = function() {
        return string;
    };

    this.getEncryptedString = function() {
        const encryptedString = string.split('').reverse().join('');
        return encryptedString;
    };
};

let encryptedstring1 = new Encryptor('abcdef');
let encryptedstring2 = new Encryptor('jhlkhlk');

console.log(encryptedstring1.getOriginalString());
console.log(encryptedstring1.getEncryptedString());

console.log(encryptedstring2.getOriginalString());
console.log(encryptedstring2.getEncryptedString());
