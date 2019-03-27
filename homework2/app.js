
/*
Чему равно а, почему?
let a = 0 || 'string'; // a = 'string',  так как || движется по условиям пока не встретит true
let a = 1 && 'string'; // a = 'string', так как && движется по условиям пока не встретит false, а false тут нет и остановился перебор на 'string'
let a = null || 25; // a = '25' , так как || движется по условиям пока не встретит true
let a = null && 25; // a = null, так как && движется по условиям пока не встретит false
let a = null || 0 || 35; // a = 35, так как || движется по условиям пока не встретит true 
let a = null && 0 && 35; // a = null, так как && движется по условиям пока не встретит false

12 + 14 + '12' // '2612', так как сначала выполняется операция сложения (по приоритету), а потом переводится все в string, потому-что стоит '+' перед строкой 12
3 + 2 - '1' // 4, так как сначала выполняется операция сложения (по приоритету), а потом '1' преобразуется в число (потому-что стоит '-' перед ним) и операция вычетания
'3' + 2 - 1 // 31, так как сначала выполняется операция вычетания (по приоритету), а потом переводится все в string
true + 2 // 3, так как true преобразуется в число 1
+'10' + 1 // 11, так как 10 преобразуется в число потомучто перед ним стоит +
undefined + 2 // NaN, так как undefined невозможно преобразовать в число
null + 5 // 5, так как null преобразуется в число 0
true + undefined // NaN, так как undefined невозможно преобразовать в число
*/




//1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let b = 'hidden';

if (b === 'hidden'){
	b = 'visible';
}
else {
	b = 'hidden';
}

console.log(b);

//2. Используя if, записать условие:
//a. b. c.
//если переменная равна нулю, присвоить ей 1;
//если меньше нуля - строку “less then zero”;
//если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let someLet = -3;

if (someLet === 0){
	someLet = 1;
} 
else if (someLet < 0){
	someLet = 'less then zero';
}
else if (someLet > 0){
	someLet *= 10;
}

console.log(someLet);


//3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
//Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' 
//и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = { name: 'Lexus', age: 3, create: 2008, needRepair: false };

if (car.age > 5){
	console.log('Need Repair!');
	car.needRepair = true;
}
else {
	car.needRepair = false;
	console.log('Repair is NOT needed!');
}


//4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
//Написать условие если у item есть поле discount и там есть значение то в объекте item создать 
//поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что 
//поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount 
//нет то вывести просто поле price в консоль.

let item = { name: 'Intel core i7', price: '100$', discount: '15%' }

if (item.discount){
	item.priceWithDiscount = parseFloat(item.price) - (parseFloat(item.price) * (parseFloat(item.discount) / 100));
	console.log(item.priceWithDiscount);
}
else {
	console.log(item.price);
}

//5. Дан следующий код:
//let product = { name: “Яблоко”, price: “10$”};
//let min = 10; // минимальная цена
//let max = 20; // максимальная цена
//Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в 
//консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = { name: 'Яблоко', price: '10$' };
let min = 10; // минимальная цена
let max = 20; // максимальная цена

if ((parseFloat(product.price) >= min) && (parseFloat(product.price) <= max)){
	console.log(product.name);

}
else{
	console.log('Products are not found!');
}



//1. Создать объект с полем product, равным ‘iphone’
let someObject = {product: 'iphone'};

//2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
someObject.price = 1000;
someObject.currency = 'dollar';

//3. Добавить поле details, которое будет содержать объект с полями model и color
someObject.details = {model: '', color: ''};
console.log(someObject);
