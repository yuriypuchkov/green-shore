import { Post } from "../../shared/model/Post";

export interface PostsState {
  posts: Post[];
  currentPostId: number | null;
  error: string;
}
