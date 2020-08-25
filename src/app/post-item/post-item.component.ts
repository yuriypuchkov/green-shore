import { Component, Input, ViewChild } from '@angular/core';
import { Post } from '../shared/model/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent{

  @Input() post: Post;

  constructor() { }
}
