import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'graphx-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() cardCount: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter();
  numberOfPages: number;
  page: number = 1;
  pageSize: number = 5;
  firstPage: boolean;
  lastPage: boolean;

  constructor() { }

  ngOnInit(): void {
    this.calculatePages();
  }

  calculatePages() {
    this.numberOfPages = Math.ceil(this.cardCount / this.pageSize);
    if (this.cardCount <= this.pageSize) {
      this.firstPage = true;
      this.lastPage = true;
    } else {
      this.firstPage = true;
      this.lastPage = false;
    }
  }

  changePage(direction: string) {
    if (direction == "next") {
      this.page++;
    } else if (direction == "prev") {
      this.page--;
    }
    if (this.page == 1) {
      this.firstPage = true;
      this.lastPage = false;
    } else if (this.page == this.numberOfPages) {
      this.lastPage = true;
      this.firstPage = false;
    } else {
      this.firstPage = false;
      this.lastPage = false;
    }
    this.pageChange.emit(this.page);
  }

  changePageSize(newPageSize: number) {
    this.pageSize =newPageSize;
    this.pageSizeChange.emit(this.pageSize);
    this.page = 1;
    this.pageChange.emit(this.page);
    this.calculatePages();
  }

}
