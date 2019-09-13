import { Component, OnInit } from '@angular/core';
import { MenuComponent }  from '../menu/menu.component';

const DISH = {
  id: '0',
  name: 'Uthappizza',
  image: '/assets/images/uthappizza.png',
  category: 'mains',
  featured: true,
  label: 'Hot',
  price: '4.99',
  description: 'oufdhaoisjfosahfisaojf',
  conmments: [
    {
        rate: 5,
        comment: 'coment for 1',
        author: 'arthesis',
        date: '1 2019'
    },
    {
        rate: 4,
        comment: 'comment for 2',
        author: 'arthesis2',
        date: '2 2019'
    },
    {
        rate: 3,
        comment: 'comment for 3',
        author: 'arthesis3',
        date: '3 2019'
    },
    {
        rate: 2,
        comment: 'comment for 4',
        author: 'arthesis4',
        date: '4 2019'
    },
  ]
};

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  
  dishdescribe = DISH;

  constructor() { }

  ngOnInit() {
  }

}
