// 1. Написать пайпу, которая будет переводить буквы в инпуте в символы азбуки морзе https://ru.wikipedia.org/wiki/Азбука_Морзе
// 2. Создать компонент, отображающий часы -> данные по времени должны находиться в дочернем компоненте.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{text | morseCode}}</h1>
    <input [(ngModel)]='text'>
    <h1>Current time:</h1>
    <h2>{{clock | date: 'mediumTime'}}</h2>
    <app-clock-component (clockObserver)= "clockSubscriber($event)"></app-clock-component>
    
  `
})

export class AppComponent {
    public text: string = "This is a sentence containing numbers: 1 2 3 4 5";
    public clock: Date;

    public clockSubscriber($event): void {
      this.clock = $event;
    }
};