import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'graphx-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  author: string;
  text: string;
  @Output() commentSubmit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    let currentDate = new Date();
    let comment = {
      author: this.author,
      text: this.text,
      date: currentDate.toISOString(),
      cards: null
    }
    this.commentSubmit.emit(comment);
    this.author = "";
    this.text = "";
  }

}
