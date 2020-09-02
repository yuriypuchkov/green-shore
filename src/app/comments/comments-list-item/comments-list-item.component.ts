import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../shared/model/comment.model';

@Component({
  selector: 'app-comments-list-item',
  templateUrl: './comments-list-item.component.html',
  styleUrls: ['./comments-list-item.component.css']
})
export class CommentItemComponent implements OnInit {

  @Input() comment: Comment;
  constructor() { }

  ngOnInit(): void {
  }

}
