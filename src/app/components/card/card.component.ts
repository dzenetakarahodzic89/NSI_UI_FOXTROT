import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  @Input() onClick: any;
  @Input() parameters: any;

  click() {
    console.log("aaaa", typeof this.onClick)
    if (this.onClick && this.parameters)
      this.onClick(this.parameters)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
