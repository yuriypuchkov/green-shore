import { createReducer, on } from '@ngrx/store';
import { CommentsState } from './comments.store';
import { CommentsApiActions } from './actions';
import { initialAppState } from 'src/app/state/app.state';

export const commentsReducer = createReducer<CommentsState>(
  initialAppState.comments,
  on(CommentsApiActions.loadCommentsSuccess, (state, action): CommentsState => {
    return {
      ...state,
      comments: action.comments,
      error: ''
    };
  }),
  on(CommentsApiActions.loadCommentsFailure, (state, action): CommentsState => {
    return {
      ...state,
      comments: [],
      error: action.error
    };
  })
);
