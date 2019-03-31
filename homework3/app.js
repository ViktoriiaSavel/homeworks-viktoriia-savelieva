// 1. Записать в виде switch case следующее условие:
// if (a === ‘block’) { console.log(‘block’)
// } else if (a === ‘none’) { console.log(‘none’)
// } else if (a === ‘inline’) { console.log(‘inline’)
// } else { console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно
// значение.

let a = 'inline';

switch (a){
    case 'block': 
        console.log('block'); break;
    case 'none':
        console.log('none'); break;
    case 'inline': 
        console.log('inline'); break;
    default: console.log('other');
}

// 2. Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.

//1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let b = 'visible';

b === 'hidden' ? b = 'visible' : b = 'hidden';

console.log(b);

//2. Используя if, записать условие:
//a. b. c.
//если переменная равна нулю, присвоить ей 1;
//если меньше нуля - строку “less then zero”;
//если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let someLet = 0;

someLet === 0 ? someLet = 1 
    : someLet < 0 ? someLet = 'less then zero'
    : someLet *= 10; 

console.log(someLet);


//3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
//Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' 
//и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = { name: 'Lexus', age: 7, create: 2008, needRepair: false };

car.age > 5 ? ( 
    console.log('Need Repair!'), car.needRepair = true
) : (
    car.needRepair = false, console.log('Repair is NOT needed!')
);





// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в 
//верхнем регистре. Использовать for или while.

let stringA = 'i am in the easycode';
let revertStringA = '';

for (i = 0; i < stringA.length; i++){
    if ((i === 0) || (stringA[i - 1] === ' ')) {
        revertStringA += stringA[i].toUpperCase();
    } else {
        revertStringA += stringA[i]
    }
}

console.log(revertStringA);

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится 
//первой, предпоследняя - второй итд).

let stringB = 'tseb eht ma i';
let revertStringB = '';

for (i = 0; i < stringB.length; i++) {
    revertStringB += stringB[stringB.length - i - 1];
}

console.log(revertStringB);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. 
//С помощью циклов вычислить факториал числа 10. Использовать for.

let n = 7;
let factorial = 1;

for (i = 1; i <= n; i++) {
    factorial *= i;
}

console.log(factorial);


// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается 
//с большой буквы, а пробелы удалены. Использовать for.

let stringC = 'JavaScript is a pretty good language';
let revertStringC = '';

for (i = 0; i < stringC.length; i++) {
    if (stringC[i] === ' '){
        if (stringC[i + 1] !== ' ') {
            revertStringC += stringC[i + 1].toUpperCase();
            i++;
        } else {
            i++;
        }
    } else {
        revertStringC += stringC[i];
    }
}

console.log(revertStringC);

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив 
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let element of array) {
    if (element % 2 != 0){
        console.log(element);
    }
}


// 6. Дан объект:
// let list = { name: ‘denis’, work: ‘easycode’, age: 29 }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.


let list = { name: 'denis', work: 'easycode', age: 29 }

for (let prop in list) {
    if (typeof(list[prop]) === 'string') {
        list[prop] = list[prop].toUpperCase();
        console.log(list[prop]);
    }
}