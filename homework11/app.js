
// Прототип. Классы ES6.
 
// 1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):
// function Component(tagName) {
// this.tagName = tagName || 'div';
// this.node = document.createElement(tagName);
// }
// Пример вызова:
// const comp = new Component('span');

class Component {
    constructor(tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
}

const comp = new Component('span');

console.log(comp);

// 2. Реализовать конструктор и методы в ES6 синтаксисе:
// function Component(tagName) {
// this.tagName = tagName || 'div';
// this.node = document.createElement(tagName);
// }
// Component.prototype.setText = function (text) { this.node.textContent = text;
// };

class Component1 {
    constructor(tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
    setText(text) {
        return this.node.textContent = text;
    }
}

const comp1 = new Component1('span');

console.log(comp1.setText('Olala'));


// 3. Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, 
// умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с 
// которым производятся вычисления.

class Calculator {
    constructor(startValue = 0) {
        this.currentValue = startValue;
    }

    set currentVal(value) {
        this.currentValue = value;
    }

    addNumber(number) {
        return this.currentValue += number;
    };

    multiplyValue(number) {
        return this.currentValue *= number;
    };

    subtractValue(number) {
        return this.currentValue -= number;
    };

    divideValue(number) {
        return this.currentValue /= number;
    };

    get currentVal() {
        return this.currentValue;
    };
};

const calc1 = new Calculator(10);
calc1.multiplyValue(5);
calc1.addNumber(7);

console.log(calc1.currentVal);

// AJAX

// 1. Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com используя класс созданный на занятии. 
// Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном 
// месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.