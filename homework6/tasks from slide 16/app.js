//1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли 
//первый элемент родителем для второго

//let parent = document.body.children[0];
//let child = document.querySelector('mark');

let parent = document.querySelector('ul');
let child = document.querySelector('mark');

function isParent(parent, child) {
    return parent.contains(child); //  или можно с помощью element.closest
}

console.log(isParent(parent, child));

//2. Получить список всех ссылок, которые не находятся внутри списка ul

let allDocumentLinks = document.links;
let linksOutsideUl = [];

for (let el of allDocumentLinks) {
    if (!el.closest('ul')) {
        linksOutsideUl.push(el);
    }
}

console.log(linksOutsideUl);

//3. Найти элемент, который находится перед и после списка ul
console.log(document.querySelector('ul').previousElementSibling);
console.log(document.querySelector('ul').nextElementSibling);

//4. Посчитать количество элементов li в списке
console.log(document.querySelectorAll('ul li').length);