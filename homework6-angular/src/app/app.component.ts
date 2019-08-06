// 1. Создать компонент галереи, в который в качестве инпутов будут прокидываться url картинок.
// 2. Создать компонет "выбранная картинка", в который прокидывать как инпут url выбранной картинки.
// 3. Сделать главный компонент, содержащий галерею и большую картинку, так, чтобы когда вы кликните по галерее вам отобразилась та картинка, по которой вы кликнули.
// Сделать это все нужно через output.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-photo-gallery-component [photoURLsArray]="photoURLsArray" (clickOnPhotoObserver)="clickOnGallaryPhoto($event)"></app-photo-gallery-component>
    <app-selected-photo-component [photoURL]="selectedPhotoURL"></app-selected-photo-component>
  `
})

export class AppComponent {
    
    public photoURLsArray = [
      "/../assets/house1.jpg",
      "/../assets/house2.jpg",
      "/../assets/house3.jpg",
      "/../assets/house4.jpg",
      "/../assets/house5.jpg"
      ]
      public selectedPhotoURL: string = this.photoURLsArray[0];
    
      public clickOnGallaryPhoto($event: string): void {
          this.selectedPhotoURL = $event;
      };
};
