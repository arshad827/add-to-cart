import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '..//shared-service.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  protected sampleData = [{
    name: 'oddworld: stranger’s wrath',
    imgUrl: 'card1.png',
    discount: -50,
    price: 9.99,
  },
  {
    name: 'chaos on deponia',
    imgUrl: 'card2.png',
    discount: -40,
    price: 3.99,
  },
  {
    name: 'The settlers 2: gold edition',
    imgUrl: 'card3.png',
    discount: -50,
    price: 8.99,
  },
  {
    name: 'neverwinter nights ',
    imgUrl: 'card4.png',
    discount: -20,
    price: 5.99,
  },
  {
    name: 'assassin’s creed: director’s cut',
    imgUrl: 'card5.png',
    discount: -60,
    price: 4.99,
  }];
  constructor(private sharedSerivce: SharedServiceService) { }

  ngOnInit() {
  }
  addItems(data) {
    data.status = 'IN CART'; // appending a new key status
    this.sharedSerivce.setItemData(data);
  }
}
