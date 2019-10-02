import { Component, OnInit } from '@angular/core';
import { Dish } from '../share/dish';
import { alldish } from '../share/Alldish';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes = alldish;

  selectedDish: Dish;

  constructor() { }

  ngOnInit() {
  }

  OnClick (dish: Dish) {
    this.selectedDish = dish;
  }
}
