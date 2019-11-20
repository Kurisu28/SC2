import { Injectable } from '@angular/core';
import { alldish } from '../share/Alldish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getAlldish() { 
    return alldish;
  }
}
