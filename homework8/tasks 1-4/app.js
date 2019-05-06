// 1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
let buttonShowMsg = document.getElementById('btn-msg');
buttonShowMsg.addEventListener('click', () => alert(buttonShowMsg.dataset.text));


// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, 
// она становится прежнего цвета. Цвет менять можно через добавление класса.
buttonShowMsg.addEventListener('mouseover', () => buttonShowMsg.classList.add('red'));
buttonShowMsg.addEventListener('mouseout', () => buttonShowMsg.classList.remove('red'));

// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
let tagElement = document.getElementById('tag');

document.addEventListener('click', (event) => tagElement.innerHTML = event.target.tagName);

//4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li 
//по списку, т.е Item 3, Item 4 и т.д
let buttonGenerateItem = document.getElementById('btn-generate');
let ulElement = document.querySelector('ul');

buttonGenerateItem.addEventListener('click', function() {
    let liElement = document.createElement('li');
    liElement.innerHTML = 'Item ' + (ulElement.children.length + 1);
    ulElement.appendChild(liElement);
});
