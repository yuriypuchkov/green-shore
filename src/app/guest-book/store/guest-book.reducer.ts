import { createReducer, on } from '@ngrx/store';
import { GuestBookState } from './guest-book.store';
import { GuestBookPageActions } from '.';
import { initialAppState } from 'src/app/state/app.state';

export const guestBookReducer = createReducer<GuestBookState>(
  initialAppState.guestBook,
  on(GuestBookPageActions.addGuestBookEntry, (state, action): GuestBookState => {
    const newId = state.entries.length > 0 ? Math.max.apply(Math, state.entries.map(x => x.id )) + 1 : 1;
    const newEntry = {...action.newEntry};
    newEntry.id = newId;
    return {
      ...state,
       entries: [...state.entries, newEntry]
    };
  }),
  on(GuestBookPageActions.setGuestBookCurrentEntryId, (state, action): GuestBookState => {
    console.log(state);
    return {
      ...state,
      currentEntryId: action.currentEntryId
    };
  }),
  on(GuestBookPageActions.resetGuestBookCurrentEntryId, (state): GuestBookState => {
    return {
      ...state,
      currentEntryId: null
    };
  })
);

