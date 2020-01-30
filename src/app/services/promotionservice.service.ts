import { Injectable } from '@angular/core';
import { Promotion } from '../share/promotion';
import { PROMOTIONS } from '../share/promo';   

@Injectable({
  providedIn: 'root'
})
export class PromotionserviceService {

  constructor() { }

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getSpecificPromotion(id: string): Promotion {
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promo) => (promo.featured))[0];
  }
}
