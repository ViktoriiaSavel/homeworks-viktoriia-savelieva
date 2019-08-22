//Написать по методологии TTD - функцию. Функция принимает количество цифр из ряда фибоначи и возвращает массив и цифры фибоначи

function getFibonacci(n) {
    if (n < 0) {
        throw new RangeError('Please enter a number more than or equal to 0.');
    } else {
        if (n === 0 || n === 1) {
            return [n];
        } else {
            let fibonacciArr = [0, 1];

            for(let i = 2; i < n; i++) {
            fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
            }
            return fibonacciArr;
        }
    }
}

module.exports = {
    getFibonacci,
}