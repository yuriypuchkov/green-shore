import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListComponent } from './posts-list.component';
import { State } from 'src/app/state/app.state';
import * as model from '../../shared/model';
import { MemoizedSelector } from '@ngrx/store';
import { getPosts } from '../store/posts.selectors';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;
  let mockStore: MockStore;
  let mockCommentsSelector: MemoizedSelector<State, model.Post[]>;
  let posts: model.Post[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ provideMockStore()],
      declarations: [ PostsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;

    mockStore = TestBed.inject(MockStore);
    posts = [
      { userId: 1, id: 1, title: 'Fats', body: 'Fats go slow'},
      { userId: 2, id: 2, title: 'Zombie', body: 'Zombies hate fast food'}];

    mockCommentsSelector = mockStore.overrideSelector(
    getPosts,  posts);
  });

  it('[PostList] initialize Posts on init', () => {
    component.ngOnInit();
    component.posts$.toPromise().then(result =>
      {
        expect(result).toEqual(posts);
      });
  });
});
