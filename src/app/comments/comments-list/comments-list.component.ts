import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment} from '../../shared/model/comment.model';
import { CommentsPageActions } from '../store/actions';

import { Store } from '@ngrx/store';
import { State} from '../../state/app.state';
import { getCommentsByPostId} from '../store/comments.selectors';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  comments$: Observable<Comment[]>;
  @Input() postId: number;
  constructor(
    private store: Store<State>) { }

  ngOnInit(): void {
    this.comments$ = this.store.select(getCommentsByPostId, { postId: this.postId });
    this.store.dispatch(CommentsPageActions.loadComments());
  }

}
