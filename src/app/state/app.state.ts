import { Comment } from '../shared/model/comment.model';
import { User } from '../shared/model/user.model';
import { PostsState } from '../posts/store/posts.store';
import { CommentsState } from '../comments/store/comments.store';
import { GuestBookState } from '../guest-book/store/guest-book.store';

export const initialAppState: State = {
  posts: {
    posts: [],
    currentPostId: null,
    error: ''
  } as PostsState,
  comments: {
    comments: [],
    error: ''
  } as CommentsState,
  guestBook: {
    entries: [],
    currentEntryId: null,
  } as GuestBookState
};

export interface State {
  posts: PostsState;
  comments: CommentsState;
  guestBook: GuestBookState;
}
