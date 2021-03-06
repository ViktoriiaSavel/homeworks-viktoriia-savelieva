
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
        this.currentValue += number;
        return this;
    };

    multiplyValue(number) {
        this.currentValue *= number;
        return this;
    };

    subtractValue(number) {
        this.currentValue -= number;
        return this;
    };

    divideValue(number) {
        this.currentValue /= number;
        return this;
    };

    get currentVal() {
        return this.currentValue.toFixed(2);
    };
};

const calc1 = new Calculator(10);
// calc1.multiplyValue(5);
// calc1.addNumber(7);

console.log(calc1.multiplyValue(5).addNumber(9).divideValue(3).currentVal);
