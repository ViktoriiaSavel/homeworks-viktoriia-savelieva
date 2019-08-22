//Написать приложение фото стока.
// Принимать фотографии (локально с файловой системы).
// Принятые фотографии должны отображаться в галерее.
// В галерее можно выбрать фото и просмотреть его в полноразмерном режиме.
// Можно лайкнуть фото - и на нем остается лайк.
// Использовать materialUI для стайлинга компонентов.
// Использовать postcsss.
// Использовать ngrx store.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <upload-photo-component></upload-photo-component>
    <app-photo-gallery-component (clickOnPhotoObserver)="clickOnGallaryPhoto($event)"></app-photo-gallery-component>
    <app-selected-photo-component [photoURL]="selectedPhotoURL"></app-selected-photo-component>
  `
})

export class AppComponent {
  public selectedPhotoURL: string = '';
    
  public clickOnGallaryPhoto($event: string): void {
      this.selectedPhotoURL = $event;
  };
};
