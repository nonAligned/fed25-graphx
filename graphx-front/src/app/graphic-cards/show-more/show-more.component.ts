import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'graphx-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit {
  @Input() description: string;
  @Input() length: number;
  visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleVisible(action: string) {
    if (action == "show") {
      this.visible = true;
    } else if (action == "hide") {
      this.visible = false;
    }
  }

}
