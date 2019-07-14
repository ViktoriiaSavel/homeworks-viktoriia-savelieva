//Определить переменные для всех примитивом джавасткрипта
let numberVar: number = 13;
let stringVar: string = 'text';
let booleanVar: boolean = true;
let nullVar: null;

//Написать функцию принимающую число и возвращающую его факториал по всем правилам тайпскрипта
function getFactorial(num: number):number{
    if (num < 0) {
        console.log("Please enter a number more than or equal to 0.");
    } else {
        let factorial: number = 1;

        for(let i = num; i > 1; i--){
            factorial *= i;
        }
        return factorial;
    }
} 

console.log(getFactorial(-2));

//Написать функцию принимающую число и возврашающую массив с числами фибоначи до этого порядкового числа
function getFibonacci(n:number):Array<number> {
    if (n < 0) {
        console.log("Please enter a number more than or equal to 0.");
    } else {
        if (n === 0 || n === 1) {
            return [n];
        } else {
            let fibonacciArr: Array<number> = [0, 1];

            for(let i = 2; i < n; i++) {
            fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
            }
            return fibonacciArr;
        }
    }
}

console.log(getFibonacci(-2));