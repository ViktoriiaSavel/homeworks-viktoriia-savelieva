import { Component } from '@angular/core';
import { addPhoto }  from './store/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'upload-photo-component',
  template: `
    <h2> Please select a photo below </h2>
    <input type="file" (change)="onSelectFile($event)"><br><br>
  `
})

export class UploadPhotoComponent {
    constructor (private store: Store<{ count: number }>) {  
    }

    public onSelectFile(event: any): void {
        if (event.target.files[0]) {
            let reader = new FileReader();

            reader.readAsDataURL(event.target.files[0]);

            reader.onload = (e: any): void => { 
                this.store.dispatch(addPhoto({ url: e.target.result }));
            }
        }
    }
};