import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './shared/post.service'
import { HttpClientModule } from '@angular/common/http';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { CommentItemComponent } from './comments/comments-list-item/comments-list-item.component';
import { PostsListItemComponent } from './posts/posts-list-item/posts-list-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { PostComponent } from './posts/post/post.component';
import { UserInfoComponent } from './user/user-info/user-info.component';


import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './shared/menu/menu.component';
import { MatDialogModule } from '@angular/material/dialog';
/* NgRx */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { postsReducer } from './posts/store/posts.reducer';
import { PostsEffects } from './posts/store/posts.effects';
import { commentsReducer } from './comments/store/comments.reducer';
import { CommentsEffects } from './comments/store/comments.effects';
import { GuestBookContainerComponent } from './guest-book/container/guest-book-container.component';
import { GuestBookItemComponent } from './guest-book/guest-book-item/guest-book-item.component';
import { guestBookReducer } from './guest-book/store/guest-book.reducer';
import { GuestBookNewEntryComponent } from './guest-book/guest-book-new-entry/guest-book-new-entry.component';
import { GuestBookAuthorInfoComponent } from './guest-book/guest-book-author-info/guest-book-author-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    CommentsListComponent,
    CommentItemComponent,
    PostsListItemComponent,
    PostComponent,
    UserInfoComponent,
    MenuComponent,
    GuestBookContainerComponent,
    GuestBookItemComponent,
    GuestBookNewEntryComponent,
    GuestBookAuthorInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25
    }),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('guest-book', guestBookReducer),
    StoreModule.forFeature('posts', postsReducer),
    StoreModule.forFeature('comments', commentsReducer),
    EffectsModule.forFeature([PostsEffects, CommentsEffects])
  ],
  providers: [
     PostService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
