//1. Дана кнопка на форме. Каждые четыре клика выводить алерт.(fromEvent)
//2. Сверстать компонент с галереей для фото ателье

import { Component, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <button class="button">Click me 4 times!</button>
    <app-photo-gallery-component></app-photo-gallery-component>
  `,
})
export class AppComponent implements AfterViewInit {
     
    ngAfterViewInit() {
      let fourTimesClickButton = document.querySelector('button');
      let fourTimesClickObserver = fromEvent(fourTimesClickButton, 'click').pipe(bufferCount(4));

      let fourTimesClickSubscriber = fourTimesClickObserver.subscribe(
        () => {
            alert('You clicked 4 times!');
        }
      )
    }    
}
