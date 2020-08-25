import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post-service';
import { Observable } from 'rxjs';
import { Post } from '../shared/model/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
  }

}
