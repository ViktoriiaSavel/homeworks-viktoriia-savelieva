import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-gallery-component',
  template: `
    <h1>Photo Gallery</h1>

    <!-- The grid: four columns -->
        <div class="row">
            <div class="column" *ngFor="let imgURL of houseURLs">
                <img src="{{imgURL}}" width = 200 alt="House">
            </div>
        </div>
  `,
})
export class PhotoGalleryComponent {
    public houseURLs = [
        "/../assets/house1.jpg",
        "/../assets/house2.jpg",
        "/../assets/house3.jpg",
        "/../assets/house4.jpg",
        "/../assets/house5.jpg"
    ]
    
}