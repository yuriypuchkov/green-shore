import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommentsService } from '../../shared/comments.service';


/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CommentsPageActions, CommentsApiActions } from './actions';

@Injectable()
export class CommentsEffects {

  constructor(private actions$: Actions, private commentsService: CommentsService) { }

  loadComments$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(CommentsPageActions.loadComments),
        mergeMap(() => this.commentsService.getAllComments()
          .pipe(
            map(comments => CommentsApiActions.loadCommentsSuccess({ comments })),
            catchError(error => of(CommentsApiActions.loadCommentsFailure({ error })))
          )
        )
      );
  });
}
