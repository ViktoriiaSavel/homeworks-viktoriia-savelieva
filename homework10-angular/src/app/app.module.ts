import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoGalleryComponent } from './photo.gallery.component'
import { UploadPhotoComponent } from './upload.photo.component'
import { PhotoService } from './photo.service';

@NgModule({
  declarations: [
    AppComponent,
    PhotoGalleryComponent,
    UploadPhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PhotoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
