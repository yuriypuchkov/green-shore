import { Comment } from '../../../shared/model/comment.model';

/* NgRx */
import { createAction, props } from '@ngrx/store';

export const loadCommentsSuccess = createAction(
  '[Comments API] Load Success',
  props<{ comments: Comment[] }>()
);

export const loadCommentsFailure = createAction(
  '[Comments API] Load Fail',
  props<{ error: string }>()
);
