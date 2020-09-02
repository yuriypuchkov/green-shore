import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GuestBookEntry } from 'src/app/shared/model/guest-book-entry.model';
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state';
import { getGuestBookEntries } from '../store/guest-book.selectors';
import { setGuestBookCurrentEntryId } from '../store/guest-book.actions';
import { User } from 'src/app/shared/model/user.model';
import { MatDialog } from '@angular/material/dialog';
import { GuestBookNewEntryComponent } from '../guest-book-new-entry/guest-book-new-entry.component';
import { GuestBookPageActions } from '../store';
import { GuestBookAuthorInfoComponent } from '../guest-book-author-info/guest-book-author-info.component';

@Component({
  selector: 'app-container',
  templateUrl: './guest-book-container.component.html',
  styleUrls: ['./guest-book-container.component.css']
})
export class GuestBookContainerComponent implements OnInit {

  constructor(private store: Store<State>,
              private dialog: MatDialog) {}

  subscription: Subscription;
  items$: Observable<GuestBookEntry[]>;

  ngOnInit(): void {
    this.items$ = this.store.select(getGuestBookEntries);
  }


  newEntry(): void {

    const dialogRef = this.dialog.open(GuestBookNewEntryComponent, {
      width: '450px',
      data: this.createEntryEntity()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.store.dispatch(GuestBookPageActions.addGuestBookEntry({ newEntry: result}));
      }
    });
  }


  showAuthor(author: User){
    console.log(author);
    const dialogRef = this.dialog.open(GuestBookAuthorInfoComponent, {
      width: '450px',
      data: author
    });
  }

  private createEntryEntity(): GuestBookEntry{
    return {
      id: 0,
      message: '',
      author: {
        name: '',
        website: '',
        email: '',
        phone: ''
      }
    };
  }

}
