import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-gallery-component',
  template: `
    <h1>Photo Gallery</h1>

    <!-- The grid: four columns -->
        <div class="row">
            <div class="column" *ngFor="let photoURL of photoURLsArray">
                <img src="{{photoURL}}" (click)="clickOnGalleryPhoto(photoURL)" width = 200 alt="House">
            </div>
        </div>
  `,
})

export class PhotoGalleryComponent {

    @Input()
    public photoURLsArray: Array<string>;

    @Output()
    public clickOnPhotoObserver = new EventEmitter<string>();

    public clickOnGalleryPhoto(photoURL: string): void {
        this.clickOnPhotoObserver.emit(photoURL);
    };
};