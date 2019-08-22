import { Component, Output, EventEmitter } from '@angular/core';
import { Photo } from './photo.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { likePhoto } from './store/actions';

@Component({
  selector: 'app-photo-gallery-component',
  template: `
    <h1>Photo Gallery</h1>
    <!-- The grid: four columns -->
        <div class="row">

            <mat-card class="column card-img" *ngFor="let photo of photoURLsArray$ | async">
                <img mat-card-image src="{{photo.url}}" (click)="clickOnGalleryPhoto(photo.url)" />
                <mat-card-actions>
                    <a href=# (click)="likePhoto(photo.id)">
                        <mat-icon color="primary" *ngIf="photo.like">favorite</mat-icon>
                        <mat-icon color="primary" *ngIf="!photo.like">favorite_border</mat-icon>
                    </a>
                    <div class="upload-date">{{photo.date | date: 'medium'}}</div>
                </mat-card-actions>	
            </mat-card>
            
        </div>
  `,
})

export class PhotoGalleryComponent {
    public photoURLsArray$: Observable<Array<Photo>>;

    constructor(private store: Store<{ photos: Array<Photo> }>) {
        this.photoURLsArray$ = store.pipe(select('photos'));
    }

    @Output()
    public clickOnPhotoObserver = new EventEmitter<string>();

    public clickOnGalleryPhoto(photoURL: string): void {
        this.clickOnPhotoObserver.emit(photoURL);
    };

    public likePhoto(photoId: number): void {
        this.store.dispatch(likePhoto({ id: photoId }));
    }
};