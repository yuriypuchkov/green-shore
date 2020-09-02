import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/model/post.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { getCurrentPost, getCurrentPostId } from '../store/posts.selectors';
import { PostPageActions } from '../store/actions';
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post$: Observable<Post>;
  postId$: Observable<number>;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute) {
      this.store.dispatch(PostPageActions.loadPosts());
  }

  ngOnInit(): void {




    this.route.params.subscribe(params => {

      const postId = params.id;
      this.store.dispatch(PostPageActions.setCurrentPostId({ postId }));
      this.post$ =  this.store.select(getCurrentPost);
    });

  }

}
