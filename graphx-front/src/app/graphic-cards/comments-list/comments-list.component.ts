import { Comment } from './../../models/comment.model';
import { CommentList } from './../../models/commentList.model';
import { GraphicCardsService } from './../../services/graphic-cards.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'graphx-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  @Input() cardId: number;
  comments: CommentList;

  constructor(private service: GraphicCardsService) { }

  ngOnInit(): void {
    this.updateComments();
  }

  ngOnChanges(): void {
    this.updateComments();
  }

  updateComments() {
    this.service.getComments(this.cardId).subscribe(data => {
      this.comments = data;
    });
  }

  addComment(submittedComment: any) {
    submittedComment.cards = this.cardId;
    let newComment: Comment = new Comment(submittedComment);
    this.service.addComment(newComment).subscribe(data => {
      this.updateComments();
    })
  }

}
