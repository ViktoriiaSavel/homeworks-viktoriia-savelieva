import { createAction, props } from '@ngrx/store';

export const addPhoto = createAction('ADDPHOTO', props<{ url: string; }>());

export const likePhoto = createAction('LIKEPHOTO', props<{ id: number; }>());

export default {
    addPhoto,
    likePhoto
};
