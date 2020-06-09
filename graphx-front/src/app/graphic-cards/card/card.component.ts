import { Card } from './../../models/card.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'graphx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() gradeChange: EventEmitter<Card> = new EventEmitter();
  @Output() commentsToggle: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeGrade(action: string) {
    if (action == '+') {
      this.card.grade++;
    } else if (action == '-') {
      this.card.grade--;
    }
    this.gradeChange.emit(this.card);
  }

  toggleComments() {
    this.commentsToggle.emit(this.card._id);
  }

}
