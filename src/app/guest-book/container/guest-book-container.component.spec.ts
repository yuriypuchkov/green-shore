import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestBookContainerComponent } from './guest-book-container.component';
import * as model from '../../shared/model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { getGuestBookEntries } from '../store/guest-book.selectors';
import { MatDialog } from '@angular/material/dialog';
import {  of } from 'rxjs';

export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of({})
    };
  }
}

describe('ContainerComponent', () => {
  let component: GuestBookContainerComponent;
  let fixture: ComponentFixture<GuestBookContainerComponent>;
  let mockStore: MockStore;
  let mockCommentsSelector: MemoizedSelector<State, model.GuestBookEntry[]>;
  let entries: model.GuestBookEntry[];

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      providers: [
        provideMockStore(),
        {provide: MatDialog, useClass: MatDialogMock}],
      declarations: [ GuestBookContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestBookContainerComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);

    entries = [
      {id: 1, message: 'Guest messge', author: {name: 'john', email: 'john@mail.com', website: '', phone: '123321'}},
      {id: 2, message: 'Guest second messge', author: {name: 'bob', email: 'bob@mail.com', website: 'aa.com', phone: '555123321'}},
    ];

    mockCommentsSelector = mockStore.overrideSelector(
    getGuestBookEntries,  entries);
  });

  it('[Guest book container] comments initialized', () => {
    component.ngOnInit();
    component.items$.toPromise().then(result =>
      {
        expect(result).toEqual(entries);
      });
  });
});
