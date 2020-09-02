import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostComponent } from './posts/post/post.component';
import { GuestBookContainerComponent } from './guest-book/container/guest-book-container.component';


const routes: Routes = [
  {path: 'guest-book', component: GuestBookContainerComponent},
  {path: 'posts/:id', component: PostComponent},
  {path: 'posts', component: PostsListComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
