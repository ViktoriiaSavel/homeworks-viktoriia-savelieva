// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой
// callback)
// Первая функция возвращает строку “New value: ” и результат обработки:
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity” \
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,” 
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) → “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
// Подсказка: secondFunc должна быть представлена функцией, которая принимает один аргумент (каждый элемент массива) и возвращает результат его обработки

let arrayOfData1 = ['my', 'name', 'is', 'Trinity'];
let arrayOfData2 = [10, 20, 30];
let arrayOfData3 = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}];
let arrayOfData4 = ['abc', '123'];

function createStringFromArray (array, callback) {
    let string = '';

    for (index in array) {
        string += callback(array[index]);
    }
    return ('New value: ' + string);
}

function handler1 (currentEl) {
    return currentEl[0].toUpperCase() + currentEl.slice(1);
}

function handler2 (currentEl) {
    return ' ' + currentEl * 10 + ',';
}

function handler3 (currentEl) {
    return (` ${currentEl.name} is ${currentEl.age},`);
}
function handler4 (currentEl) {
    let revertedString = '';

    for (let i = currentEl.length - 1; i >= 0; i--) {
        revertedString += currentEl[i];
    }
    return ' ' + revertedString + ',';
}

console.log(createStringFromArray(arrayOfData2, handler2));

// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел 
// (обязательно проверьте что передан массив) вторым аргументом callback - функция должна возвращать true или false в 
// зависимости от результата вызова callback (проверить число больше 5). Callback должен принимать один элемент массива, 
// его индекс в массиве и весь массив.

let arrayOfNumbers = [12, 14, 50, 3, 88, 18, 40];

function checkEveryElOfArray (array, callback) {
    if (array) {
        let result = true;

        for (i = 0; i < array.length; i++) {
            if (callback(array[i]) !== true) {
                result = false;
                break;
            }
        }
        return result;
    } else {
        return 'Array is not defined in the function!'
    }
}

function checkNumber (currentEl) {
    return (currentEl > 5);
};

console.log(checkEveryElOfArray(arrayOfNumbers, checkNumber));

// 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности: 
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

let array = [1, 2, 3, 5, 8, 9, 10];

let arrayWithOdd = array.map(function(currentEl) {
    return ({'digit': currentEl, 'odd': currentEl % 2 !== 0});
});

console.log(arrayWithOdd);


// 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.

let arrayWithZero = [12, 4, 50, 0, 9, 18, 40];

let isZero = arrayWithZero.every(function(currentEl) {
    return !(currentEl === 0);
});

console.log('This array does not contain any zero elements: ' + isZero);


// 3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. 
// Если да - вернуть true

let arrayWordLength = ['yes', 'hello', 'no', 'easycode', 'what']

let isThreeLetterWord = arrayWordLength.some(function(currentEl) {
    return currentEl.length > 3;
});

console.log('This array has words with more then three letters: ' + isThreeLetterWord);


// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке 
// {буква: “a”, позиция_в_предложении: 1}:
// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2}, {char:"N",index:6}, 
// {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0}, {char:"e",index:11}, {char:"a",index:1}, 
// {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
// Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. 
// Например: [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
// Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения строки

let arrayOfLetters = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2}, {char:"N",index:6}, 
{char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0}, {char:"e",index:11}, {char:"a",index:1}, 
{char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

function createStringFromLetters (array){
    let sortedArrayOfLetters = array.sort(function(prev, next) {
        return prev.index - next.index;
    })

    let combinedString = sortedArrayOfLetters.reduce(function(string, current) {
        return string + current.char;
    }, '');
    return combinedString;
}

console.log(createStringFromLetters(arrayOfLetters));


// 1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): 
// [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

let arrayToSort = [[14, 45], [1, 7, '15', 5, 8], ['a']];

let sortedArray = arrayToSort.sort(function(prev, next) {
    return prev.length - next.length;
});

console.log(sortedArray);

// 2. Есть массив объектов:
// [{cpu: 'intel', info: {cores:2, сache: 3}}, {cpu: 'intel', info: {cores:4, сache: 4}}, 
//{cpu: 'amd', info: {cores:1, сache: 1}}, {cpu: 'intel', info: {cores:3, сache: 2}}, {cpu: 'amd', info: {cores:4, сache: 2}}]
// Отсортировать их по возрастающему количеству ядер (cores).

let arrayToSortCores = [{cpu: 'intel', info: {cores:2, сache: 3}}, {cpu: 'intel', info: {cores:4, сache: 4}}, 
{cpu: 'amd', info: {cores:1, сache: 1}}, {cpu: 'intel', info: {cores:3, сache: 2}}, {cpu: 'amd', info: {cores:4, сache: 2}}];

let sortedCoresArray = arrayToSortCores.sort(function(prev, next) {
    return prev.info.cores - next.info.cores;
});

console.log(sortedCoresArray);

// 3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых 
// находится в указанном диапазоне, и сортировать от дешевых к дорогим:
// let products = [{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18}, {title: 'prod3', price: 15}, 
//{title: 'prod4', price: 25}, {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8}, {title: 'prod7', price: 19}, 
//{title: 'prod8', price: 63}];
// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

let products = [{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18}, {title: 'prod3', price: 15}, 
{title: 'prod4', price: 25}, {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8}, {title: 'prod7', price: 19}, 
{title: 'prod8', price: 63}];

let minPrice = 15;
let maxPrice = 30;

function getProductsInCostRange (array, minPrice, maxPrice) {
    let arrayInPriceRange = array.filter(function(currentEl) {
        return (currentEl.price >= minPrice) && (currentEl.price <= maxPrice);
    })

    let sortedInRangeArray = arrayInPriceRange.sort(function(prev,next) {
        return prev.price - next.price;
    });
    return sortedInRangeArray;
}

console.log(getProductsInCostRange(products, minPrice, maxPrice));