//Определить переменные для всех примитивом джавасткрипта
let a: number = 13;
let b: string = 'text';
let c: boolean = true;
let d: null;

//Написать функцию принимающую число и возвращающую его факториал по всем правилам тайпскрипта
function getFactorial(num: number):number{
    let factorial: number = 1;

    for(let i = num; i > 1; i--){
        factorial *= i;
    }
    return factorial;
} 

console.log(getFactorial(8));

//Написать функцию принимающую число и возврашающую массив с числами фибоначи до этого порядкового числа
function getFibonacci(n:number):Array<number> {
    let fibonacciArr: Array<number> = [0, 1];

    for(let i = 2; i < n; i++) {
        fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
    }
    return fibonacciArr;
}

console.log(getFibonacci(7));