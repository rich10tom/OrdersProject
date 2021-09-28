import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {

  interval: any;

  allOrders: number[] = [];

  constructor() {  }

  ngOnInit(): void {

  }

  startWorkDay() {
    this.interval = setInterval(() =>{
      this.allOrders.push(this.allOrders.length + 1);
    },2000)
  }

  endWorkDay() {
    clearInterval(this.interval);
  }

}
