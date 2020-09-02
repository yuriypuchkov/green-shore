import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommentsState } from './comments.store';

 // Selector functions
const getCommentsFeatureState = createFeatureSelector<CommentsState>('comments');

export const getComments = createSelector(
  getCommentsFeatureState,
    state => state.comments
);

export const getCommentsByPostId = createSelector(
  getCommentsFeatureState,
    (state: CommentsState, props) => state.comments.filter(f => f.postId === props.postId)
);

export const getCommentById = createSelector(
  getCommentsFeatureState,
  (state: CommentsState, props) => {
    return state.comments.find(f => f.id === props.id);
  }
);
