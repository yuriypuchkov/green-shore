import { GuestBookEntry } from 'src/app/shared/model/guest-book-entry.model';

export interface GuestBookState {
  entries: GuestBookEntry[];
  currentEntryId: number | null;
}
