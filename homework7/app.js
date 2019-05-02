// 1. Найти параграф и получить его текстовое содержимое (только текст!)
let pElement = document.querySelector('p');

console.log(pElement.textContent);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию
//(в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0). 
let ulElement = document.querySelector('ul'); 

function getNodeInfo(node) {
    let type = node.nodeType;
    let name = node.nodeName;
    let childrenLength = node.children.length;

    return {type, name, childrenLength};
}

console.log(getNodeInfo(ulElement));

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка:
//getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

function getTextFromUl(ul) {
    let linksInUl = ul.querySelectorAll('a');
    let arrayOfLinkTexts = [];

    for (element of linksInUl) {
        arrayOfLinkTexts.push(element.textContent);
    }

    return arrayOfLinkTexts;
}

console.log(getTextFromUl(ulElement));

//4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). 
// Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
let pElementChildNodes = document.querySelector('p').childNodes;

Array.from(pElementChildNodes).forEach(el => {if (el.nodeType === 3) {
    el.textContent = '-text-';
    }
});

// 1. Найти в коде список ul и добавить класс “list”
//let ulElement = document.querySelector('ul');

ulElement.classList.add('list');

// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link 
let aElementAfterUl = document.querySelector('ul ~ a');

aElementAfterUl.setAttribute('id', 'link');

// 3. На li через один (начиная с самого первого) установить класс “item”
let liElement = document.querySelectorAll('li');

for (let i = 0; i < liElement.length; i++) {
    if(i % 2 === 0) {
        liElement[i].classList.add('item');
    }
};

// 4. На все ссылки в примере установить класс “custom-link”
let allLinks = document.links;
let arrayOfLinks = Array.from(allLinks);

arrayOfLinks.forEach(el => {el.classList.add('custom-link')});


// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
let fragmentWithLi = document.createDocumentFragment();

for (let i = liElement.length + 1; i < liElement.length + 4; i++) {
    let newLiElement = document.createElement('li');

    newLiElement.classList.add('new-item');
    newLiElement.textContent = 'item ' + i;
    fragmentWithLi.appendChild(newLiElement);
}

ulElement.appendChild(fragmentWithLi);

//2. В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).
let linksInUl = document.querySelectorAll('ul a');
let arrayOfLinksInUl = Array.from(linksInUl);

arrayOfLinksInUl.forEach(el => {el.innerHTML = '<strong>' + el.textContent});

//3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). 
//В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
let newImageElement = document.createElement('img');

newImageElement.setAttribute('src', 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg');
newImageElement.setAttribute('alt', 'some text');

document.body.insertAdjacentElement('afterbegin', newImageElement);
//document.body.appendChild(newImageElement);

//4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
let markElement = document.querySelector('mark');

markElement.textContent += ' green';
markElement.classList.add('green');

//5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
let fragmentSortLi = document.createDocumentFragment();
let liInUl = document.querySelectorAll('li');

for (let i = liInUl.length; i > 0; i--) {
    fragmentSortLi.appendChild(liInUl[i - 1]);
}

ulElement.appendChild(fragmentSortLi);


