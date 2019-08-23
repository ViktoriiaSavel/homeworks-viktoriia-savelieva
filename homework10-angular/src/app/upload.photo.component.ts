import { Component } from '@angular/core';
import { PhotoService } from './photo.service';

@Component({
  selector: 'upload-photo-component',
  template: `
  <input type="file" (change)="onSelectFile($event)"><br><br>
  `
})

export class UploadPhotoComponent {
    constructor (private photoService: PhotoService) {  
    }

    public onSelectFile(event: any): void {
        if (event.target.files[0]) {
            let reader = new FileReader();

            reader.readAsDataURL(event.target.files[0]);

            reader.onload = (e: any): void => { // called once readAsDataURL is completed
                this.photoService.addPhoto(e.target.result);
            }
        }
    }
};