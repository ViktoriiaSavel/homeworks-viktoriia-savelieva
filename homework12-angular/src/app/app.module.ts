import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoGalleryComponent } from './photo.gallery.component'
import { UploadPhotoComponent } from './upload.photo.component'
import { SelectedPhotoComponent } from './selected.photo.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    PhotoGalleryComponent,
    UploadPhotoComponent,
    SelectedPhotoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ photos: reducer }), 
    MatCardModule,
    MatIconModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
