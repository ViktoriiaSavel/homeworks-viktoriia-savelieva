import { createReducer, on} from '@ngrx/store';
import { addPhoto, likePhoto } from './actions';
import { Photo } from '../photo.model';

export const initialState: Array<Photo> = [];

export const reducer = createReducer(initialState,
  on(addPhoto, (state, props) => {
    state.push({ id: state.length + 1, url: props.url, date: new Date(), like: false});
    return state;
  }),
  on(likePhoto, (state, props) => {
    const photo = state.find(p=> p.id === props.id);
    photo.like = !photo.like;
    return state;
  }),
);