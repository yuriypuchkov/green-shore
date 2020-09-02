import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.store';

 // Selector functions
const getPostsFeatureState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(
  getPostsFeatureState,
    state => state.posts
);

export const getCurrentPostId = createSelector(
  getPostsFeatureState,
  state => state.currentPostId
);

export const getCurrentPost = createSelector(
  getPostsFeatureState,
  getCurrentPostId,
  (state, currentPostId) => {
    console.log(`getCurrentPost ${currentPostId}`);
    return state.posts.find(x => +x.id === +currentPostId);
    });


