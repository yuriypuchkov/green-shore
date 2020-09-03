import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from "../../shared/model/Post";
import { PostPageActions } from '../store/actions';

import { Store } from '@ngrx/store';
import { State} from '../../state/app.state';
import { getPosts} from '../store/posts.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {

    this.posts$ = this.store.select(getPosts);

    this.store.dispatch(PostPageActions.loadPosts());
  }

}
