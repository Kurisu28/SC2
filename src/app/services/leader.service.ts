import { Injectable } from '@angular/core';
import { Leader } from '../share/leader';
import { LEADERS } from '../share/Leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getSpecificLeader(id: string): Leader{
    return LEADERS.filter((selection)=>(selection.id === id))[0];
  }

  getFeaturedLeader(): Leader{
    return LEADERS.filter((selection)=>(selection.featured))[0];
  }
}
