import { Component, OnInit } from '@angular/core';
import { Dish } from '../share/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.getAlldish();
    // 用inject方式处理时需要对selectedDish进行赋值this.selectedDish = this.dishes[0];
  }

  /*inject方式处理的函数
  onClick (dish: Dish) {
    this.selectedDish = dish;
  }*/
}
