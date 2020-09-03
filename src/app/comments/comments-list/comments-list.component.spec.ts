import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CommentsListComponent } from './comments-list.component';
import {  MemoizedSelector } from '@ngrx/store';
import { getComments } from '../store/comments.selectors';
import { State } from 'src/app/state/app.state';
import * as model from '../../shared/model';

describe('CommentsListComponent', () => {
  let component: CommentsListComponent;
  let fixture: ComponentFixture<CommentsListComponent>;
  let mockStore: MockStore;
  let mockCommentsSelector: MemoizedSelector<State, model.Comment[]>;
  let comments: model.Comment[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [ CommentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsListComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);

    comments = [{
      postId: 1,
      id: 1,
      name: 'john',
      email: 'john@mail.com',
      body: 'ssssssssssss'}];

    mockCommentsSelector = mockStore.overrideSelector(
    getComments,  comments);
  });

  it('[Component List] comments initialized', () => {
    component.ngOnInit();
    component.comments$.toPromise().then(result =>
      {
        expect(result).toEqual(comments);
      });
  });
});
