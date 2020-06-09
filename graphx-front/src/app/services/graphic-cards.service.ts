import { CommentList } from './../models/commentList.model';
import { Comment } from './../models/comment.model';
import { CardList } from './../models/cardList.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from '../models/card.model';

const URL: string = "http://localhost:3000/api/cards";

@Injectable({
  providedIn: 'root'
})
export class GraphicCardsService {

  constructor(private http: HttpClient) { }

  getAllCards(parameters?: any): Observable<CardList> {
    let queryParams = {};
    if (parameters) {
      queryParams = {
        params: new HttpParams()
        .set("page", parameters.page && parameters.page.toString() || "")
        .set("pageSize", parameters.pageSize && parameters.pageSize.toString() || "")
      }
    }

    return this.http.get(URL, queryParams).pipe(map(data => {
      return new CardList(data);
    }));
  }

  updateCard(updatedCard: Card): Observable<Card> {
    return this.http.put(URL + "/" + updatedCard._id, updatedCard).pipe(map(data => {
      return new Card(data);
    }));
  }

  getComments(id: number): Observable<CommentList> {
    return this.http.get(URL + "/" + id + "/comments").pipe(map(data => {
      return new CommentList(data);
    }));
  }

  addComment(newComment: Comment): Observable<Comment> {
    return this.http.post(URL + "/" + newComment.cards + "/comments", newComment).pipe(map(data => {
      return new Comment(data);
    }));
  }
}
