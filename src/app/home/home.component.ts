import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../share/dish';
import { Promotion } from '../share/promotion';
import { PROMOTIONS } from '../share/promo';
import { PromotionserviceService } from '../services/promotionservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredDish: Dish;
  promotion: Promotion;

  constructor(private dishService: DishService, private promotionservice: PromotionserviceService) { }

  ngOnInit() {
    this.featuredDish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }
}
