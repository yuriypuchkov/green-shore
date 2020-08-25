import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './shared/post-service'
import { HttpClientModule } from '@angular/common/http';
import { PostItemComponent } from './post-item/post-item.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule
  ],
  exports:[
    MatExpansionModule
  ],
  providers: [
     PostService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
