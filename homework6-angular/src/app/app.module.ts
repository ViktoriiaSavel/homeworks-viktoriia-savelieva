import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoGalleryComponent } from './photo.gallery.component'
import { SelectedPhotoComponent } from './selected.photo.component'

@NgModule({
  declarations: [
    AppComponent,
    PhotoGalleryComponent,
    SelectedPhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
