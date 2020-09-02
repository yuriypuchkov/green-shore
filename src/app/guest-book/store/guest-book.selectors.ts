import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GuestBookState } from './guest-book.store';

 // Selector functions
const getGuestBookFeatureState = createFeatureSelector<GuestBookState>('guest-book');

export const getGuestBookEntries = createSelector(
  getGuestBookFeatureState,
    state => state.entries
);

