import { Comment } from '../../shared/model/comment.model';

export interface CommentsState {
  comments: Comment[];
  error: string;
}
