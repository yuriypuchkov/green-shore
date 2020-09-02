import { createReducer, on } from '@ngrx/store';
import { PostPageActions, PostApiActions } from './actions';
import { initialAppState } from 'src/app/state/app.state';
import { PostsState } from './posts.store';

export const postsReducer = createReducer<PostsState>(
  initialAppState.posts,
  on(PostPageActions.setCurrentPostId, (state, action): PostsState => {
    return {
      ...state,
      currentPostId: action.postId
    };
  }),
  on(PostApiActions.loadPostsSuccess, (state, action): PostsState => {
    console.log(state);
    return {
      ...state,
      posts: action.posts,
      error: ''
    };
  }),
  on(PostApiActions.loadPostsFailure, (state, action): PostsState => {
    return {
      ...state,
      posts: [],
      error: action.error
    };
  })
);
