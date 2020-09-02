/* NgRx */
import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/shared/model/post.model';

export const loadComments = createAction(
  '[Post Page] Load Comments'
);

