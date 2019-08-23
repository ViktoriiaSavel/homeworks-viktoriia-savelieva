import { Component } from '@angular/core';
import { PhotoService } from './photo.service';
import { Photo } from './photo.model';

@Component({
  selector: 'app-photo-gallery-component',
  template: `
    <h1>Photo Gallery</h1>

    <!-- The grid: four columns -->
        <div class="row">
            <div class="column" *ngFor="let photo of photoURLsArray">
                <img src="{{photo.url}}" width = 200>
                <span>{{photo.date | date: 'medium'}}</span>
            </div>
        </div>
  `,
})

export class PhotoGalleryComponent {
    public photoURLsArray: Array<Photo>;

    constructor (private photoService: PhotoService) {
        this.photoService.photosSubject.subscribe((photos: Array<Photo>) => {
            this.photoURLsArray = photos;
        })
    } 
};