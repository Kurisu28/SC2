import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../share/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  @Input()
  dishdetail: Dish;

  constructor() { }

  ngOnInit() {
  }

}
