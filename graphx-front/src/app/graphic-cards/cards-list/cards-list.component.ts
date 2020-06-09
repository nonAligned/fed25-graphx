import { Card } from './../../models/card.model';
import { GraphicCardsService } from './../../services/graphic-cards.service';
import { CardList } from './../../models/cardList.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {
  cardList: CardList;
  parameters = {
    page: 1,
    pageSize: 5
  }
  showComments: boolean = false;
  cardId: number;

  constructor(private service: GraphicCardsService) { }

  ngOnInit(): void {
    this.updateCards();
  }

  updateCards() {
    this.service.getAllCards(this.parameters).subscribe(data => {
      this.cardList = data;
    });
  }

  updatePage(newPage: number) {
    this.parameters.page = newPage;
    this.updateCards();
  }

  updatePageSize(newPageSize: number) {
    this.parameters.pageSize = newPageSize;
    this.updateCards();
  }

  updateGrade(updatedCard: Card) {
    this.service.updateCard(updatedCard).subscribe(data => {
      this.updateCards();
    });
  }

  toggleComments(cardId: number) {
    if (cardId == this.cardId) {
      this.showComments = !this.showComments;
    } else {
      this.showComments = true;
      this.cardId = cardId;
    }
  }

}
