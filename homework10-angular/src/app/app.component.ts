// Создать компонент, который будет постоянно учитывать время добавления какой-либо фотографии в вашу галерею. 
// Он должен лежать в корне галереи. Он должен возвращать каждой фотографии ее дату загрузки в галерею. 
// Использовать сервис для переброса данных в компонент.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <upload-photo-component></upload-photo-component>
    <app-photo-gallery-component></app-photo-gallery-component>
  `
})

export class AppComponent {

};
