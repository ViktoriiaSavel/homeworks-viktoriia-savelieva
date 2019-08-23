import { Subject } from 'rxjs';
import { Photo } from './photo.model';

export class PhotoService {
    private photos: Array<Photo> = [];
    public photosSubject: Subject<Array<Photo>> = new Subject<Array<Photo>>();

    public addPhoto(newUrl: string): void {
        this.photos.push({ url: newUrl, date: new Date() })
        this.photosSubject.next(this.photos)
    }
}