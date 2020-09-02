import { Post } from '../../shared/model/post.model';

export interface PostsState {
  posts: Post[];
  currentPostId: number | null;
  error: string;
}
