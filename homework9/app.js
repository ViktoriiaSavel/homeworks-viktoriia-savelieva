// 1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и 
// возвращает объект, содержащий первый аргумент и массив из остатка:
// func(‘a’, ‘b’, ‘c’, ‘d’) → {
// first: ‘a’,
// other: [‘b’, ‘c’, ‘d’] }

function getObject(first, ...other) {
    return {
        first, 
        other
    };
};

console.log(getObject('a', 'b', 'c', 'd'));


// 2. Организовать функцию getInfo, которая принимает объект вида { name: ..., info: { employees: [...], partners: [ ... ] } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners.

const organisation = { 
    name: 'Google',
    info: { 
        employees: ['Vlad', 'Olga'],
        partners: ['Microsoft', 'Facebook', 'Xing'] 
    }
};

function getInfo({ name = 'Unknown', info: { partners: [partner1, partner2] }}) {
    return `Name: ${name} \nPartners: ${partner1}, ${partner2}`;
}

console.log(getInfo(organisation));


// 1. Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):
// function sum() {
// const params = Array.prototype.slice.call(arguments);
// if (!params.length) return 0;
// return params.reduce(function (prev, next) { return prev + next; }); }
// sum(1, 2, 3, 4); // 10 sum(); // 0

const sum = (...params) => {
    return params.length ? params.reduce((prev, next) => prev + next) : 0;
};

console.log(sum(1, 2, 3, 4, 9));

// 1. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры: 

const rectangle = {
    width: 7, 
    height: 3, 
    getSquare: function () { return this.width * this.height }
};

console.log(rectangle.getSquare());

// 2. Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для 
// расчета цены с учетом скидки 

const price = {
    price: 10,
    discount: '15%', 
    getPrice: function () { return this.price },
    getPriceWithDiscount: function () { return this.price - this.price * parseFloat(this.discount) * 0.01 }
};

console.log(price.getPrice()); // 10
console.log(price.getPriceWithDiscount()); // 8.5


// 3. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. 
// Метод должен возвращать новую высоту: object.height = 10;
const someObject = {
    height: 10,
    incrementHight: function () { return ++this.height }
}

someObject.incrementHight(); // придумать свое название для метода
console.log(someObject.height); // 11;

// 4. Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, 
// “отнять один”. Методы можно вызывать через точку, образуя цепочку методов. 
const numerator = { 
    value: 1, 
    double: function () { 
        this.value *= 2; 
        return this;
    }, 
    plusOne: function () {
        ++this.value; 
        return this;
    }, 
    minusOne: function () {
        this.value--; 
        return this;
    }
};

numerator.double().plusOne().plusOne().minusOne(); 
console.log(numerator.value) // 3

// 1. Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения 
// общей стоимости всех товаров (цена * количество продуктов)

const products = {
    price: 10,
    quantity: 5,
    getFullPrice: function () { return this.price * this.quantity }
}

console.log(products.getFullPrice());

// 2. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и 
// цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции 
// и методы. Для этого “позаимствуйте” метод из предыдущего объекта.

const components = {
    price: 5,
    quantity: 7
}

const fullComponentsPrice = products.getFullPrice.call(components);

console.log(fullComponentsPrice);

// 3. Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

let sizes = { width: 5, height: 10 },
getSquare = function () { return this.width * this.height };

console.log(getSquare.call(sizes));

// 4.
// let element = {
// height: 25,
// getHeight: function () {return this.height;} };
// let getElementHeight = element.getHeight; getElementHeight(); // undefined
// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.

let element = {
    height: 25,
    getHeight: function () { return this.height; } 
};

let getElementHeight = element.getHeight.bind(element);

console.log(getElementHeight()); 
