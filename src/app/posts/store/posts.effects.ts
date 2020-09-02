import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostService } from '../../shared/post.service';


/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostPageActions, PostApiActions } from './actions';

@Injectable()
export class PostsEffects {

  constructor(private actions$: Actions, private postService: PostService) { }

  loadPosts$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(PostPageActions.loadPosts),
        mergeMap(() => this.postService.getAllPosts()
          .pipe(
            map(posts => PostApiActions.loadPostsSuccess({ posts })),
            catchError(error => of(PostApiActions.loadPostsFailure({ error })))
          )
        )
      );
  });

}
