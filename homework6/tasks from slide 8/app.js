// Зная структуру html, с помощью изученных методов получить (в консоль):

// 1 head
console.log(document.head);

// 2 body
console.log(document.body);

// 3 все дочерние элементы body и вывести их в консоль.
console.log(document.body.children);

// 4.a первый div и все его дочерние узлы (a. вывести все дочерние узлы в консоль)
let childrenOfFirstDiv = document.querySelector('div').children;

console.log(childrenOfFirstDiv);

// 4.b первый div и все его дочерние узлы (a. вывести в консоль все дочерние узлы, кроме первого и последнего)
for (i = 0; i < childrenOfFirstDiv.length; i++) {
    if (i !== 0 && i !== childrenOfFirstDiv.length - 1) {
        console.log(childrenOfFirstDiv[i]);
    }
}