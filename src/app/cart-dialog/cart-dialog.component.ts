import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {
  protected sampleData = [];
  constructor(private sharedSerivce: SharedServiceService) { }

  ngOnInit() {
    this.sharedSerivce.getItemData().subscribe(res => {
      this.sampleData = res;
    })
  }
  removeData(data) {
    this.sharedSerivce.deleteItemData(data);
  }
  clearCart() {
    this.sharedSerivce.clearData();
  }
}
