import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upload-photo-component',
  template: `
  <input type="file" (change)="onSelectFile($event)"><br><br>
  `
})

export class UploadPhotoComponent {
    public url: string;

    @Output()
    public onSelectFileObserver = new EventEmitter<string>();

    public onSelectFile(event: any): void {
        if (event.target.files[0]) {
            let reader = new FileReader();

            reader.readAsDataURL(event.target.files[0]);

            reader.onload = (e: any): void => { // called once readAsDataURL is completed
                this.onSelectFileObserver.emit(e.target.result);
            }
        }
    }
};