import { Post } from '../../../shared/model/post.model';

/* NgRx */
import { createAction, props } from '@ngrx/store';

export const loadPostsSuccess = createAction(
  '[Post API] Load Success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  '[Post API] Load Fail',
  props<{ error: string }>()
);
