// Модернизировать код, данный на занятии, таким образом, чтобы увеличивать число можно было только до 21, 
// а уменьшать только до -9 (шаг туда и сюда 1). Добавить кнопку REset, которая будет скидывать счетчик в ноль.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-decrement></app-decrement>
    <app-counter></app-counter>
    <app-increment></app-increment>
    <app-reset></app-reset>
  `
})
export class AppComponent {
  title = 'Redux';
}