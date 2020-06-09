import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { CardsListComponent } from './graphic-cards/cards-list/cards-list.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CardComponent } from './graphic-cards/card/card.component';
import { PaginationComponent } from './graphic-cards/pagination/pagination.component';
import { CommentsListComponent } from './graphic-cards/comments-list/comments-list.component';
import { CommentComponent } from './graphic-cards/comment/comment.component';
import { AddCommentComponent } from './graphic-cards/add-comment/add-comment.component';
import { ShowMoreComponent } from './graphic-cards/show-more/show-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsListComponent,
    NavbarComponent,
    CardComponent,
    PaginationComponent,
    CommentsListComponent,
    CommentComponent,
    AddCommentComponent,
    ShowMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
