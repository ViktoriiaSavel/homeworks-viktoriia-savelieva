// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply () {
    if (arguments.length) {
        let multiply = 1;

        for (let i = 0; i < arguments.length; i++) {
        multiply *= arguments[i];
        }
    return multiply;
    } else {
        return 0;
    }  
}

console.log(multiply (1, 2, 3));

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш:
// reverseString(‘test’) // “tset”.
let stringToRevert = '987654321';

function revertString (someString) {
    let newString = '';

    for (let i = someString.length - 1 ; i >= 0; i--) {
        newString += someString[i];
    }
    return newString;
}

console.log(revertString(stringToRevert));

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и 
// заменен на юникод-значение символа:
// getCodeStringFromText(‘hello’) // “104 101 108 108 111”
// подсказка: для получения кода используйте специальный метод

let stringToUpdate = 'hello';

function getCodeStringFromText(string) {
    let stringWithCodes = '';
    let arrayWithCodes = [];

    for (i = 0; i < string.length; i++) {
        arrayWithCodes[i] = string.charCodeAt(i);
    }
    stringWithCodes = arrayWithCodes.join(' ');
    return stringWithCodes;
} 

console.log(getCodeStringFromText(stringToUpdate));


// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). 
// Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то 
// “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

let numberFromUser = 7;

function guessNumber (number) {
    if (number <= 10 && number > 0) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;

        if (number === randomNumber) {
            return('CONGRATS! You won the game!');

        } else {
            return('You have not guessed - your number is ' + number + ' and random number was ' + randomNumber);
        }
    } else {
        return('The number you entered is too small/big... Please enter a number in the range from 1 to 10.');
    }
}

console.log(guessNumber (numberFromUser));


// 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); 
// 1,2,3,4,5,6,7,8,9,10]

let n = 7;

function getArray(n) {
    let arrayOfNumbers = [];

    for (let i = 1; i <= n; i++) {
        arrayOfNumbers = arrayOfNumbers.concat(i);
    }
    return arrayOfNumbers;
}

console.log(getArray(n));

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

let arrayToDouble = [1, 2, 3];

function doubleArray (initialArr) {
    let cloneArray = initialArr.slice(0);
    let doubledArray = initialArr.concat(cloneArray);

    return doubledArray;
}

console.log(doubleArray(arrayToDouble));

// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, 
// а возвращает массив из оставшихся значений:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

let arrayA = [1,2,3];
let arrayB = ['a', 'b', 'c'];
let arrayC = ['t', 5, 'n', 7];

function changeCollection() {
    for (i = 0; i < arguments.length; i++) {
        arguments[i].splice(0,1);
    }
    return arguments;
}
 
console.log(changeCollection(arrayA, arrayB, arrayC));

// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. 
// Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

let users = [{name: 'Denis', age: 29, gender: 'male'}, {name: 'Vira', age: 23, gender: 'female'}, {name: 'Ivan', age: 20, gender: 'male'}];

function funcGetUsers(usersArray, fieldToCheck, valueToCheck) {
    if (usersArray && fieldToCheck && valueToCheck) {
        let getUsersArray = [];

        for (i = 0; i < usersArray.length; i++){
            if (usersArray[i][fieldToCheck] === valueToCheck){
                getUsersArray = getUsersArray.concat(usersArray[i]);
            }
        }
        return (getUsersArray);
    } else {
        return('Please enter all the arguments in funcGetUsers function');
    }
}

console.log(funcGetUsers(users, 'age', 29));