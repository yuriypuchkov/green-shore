import { createAction, props } from '@ngrx/store';
import { GuestBookEntry } from 'src/app/shared/model/guest-book-entry.model';


export const setGuestBookCurrentEntryId = createAction(
  '[Guest book Page] Set Current Entry Id',
  props<{ currentEntryId: number }>()
);

export const resetGuestBookCurrentEntryId = createAction(
  '[Guest book Page] Reset Current Entry Id'
);

export const addGuestBookEntry = createAction(
  '[Guest book Page] Add Entry to GuestBook',
  props<{ newEntry: GuestBookEntry }>()
);


