// 1. сделать компонент для загрузки в него фотографии.
// 2. Берем путь фотографии и отображаем ее в верхнем (родительском ) компоненте галереи.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <upload-photo-component (onSelectFileObserver)="onSelectFile($event)"></upload-photo-component>
    <img src={{url}} height="300">
  `
})

export class AppComponent {
    public url: string;

    public onSelectFile(event: string): void {
        this.url = event;
    };
};
