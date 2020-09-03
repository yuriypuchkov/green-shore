/* NgRx */
import { createAction, props } from '@ngrx/store';
import { Post } from "src/app/shared/model/Post";

export const loadPosts = createAction(
  '[Post Page] Load Posts'
);

export const setCurrentPostId = createAction(
  '[Post Page] Set Current Post Id',
  props<{ postId: number }>()
);
