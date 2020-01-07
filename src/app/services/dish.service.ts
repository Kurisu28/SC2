import { Injectable } from '@angular/core';
import { alldish } from '../share/Alldish';
import { Dish } from '../share/dish'

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getAlldish() { 
    return alldish;
  }

  getSpecificDish(id: string): Dish{
    return alldish.filter((selection)=>(selection.id === id))[0];
  }

  getFeaturedDish(): Dish{
    return alldish.filter((selection)=>(selection.featured))[0];
  }
}
