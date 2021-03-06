import { Component, OnInit, Input } from '@angular/core';
import { Post } from "../../shared/model/Post";

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.css']
})
export class PostsListItemComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

  ngOnInit(): void {
  }

}
