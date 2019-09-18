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
        date: '2012-10-16T17:57:28.556094Z'
    },
    {
        rate: 4,
        comment: 'comment for 2',
        author: 'arthesis2',
        date: '2014-09-05T17:57:28.556094Z'
    },
    {
        rate: 3,
        comment: 'comment for 3',
        author: 'arthesis3',
        date: '2015-02-13T17:57:28.556094Z'
    },
    {
        rate: 2,
        comment: 'comment for 4',
        author: 'arthesis4',
        date: '2013-12-02T17:57:28.556094Z'
    },
    {
        rate: 1,
        comment: 'comment for 5',
        author: 'arthesis5',
        date: '2011-12-02T17:57:28.556094Z'
    },
  ]
};

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  select = new MenuComponent();
  selected = this.select.selectedDish;

  dishdescribe = DISH;
  descomment = this.dishdescribe.conmments;

  constructor() { }

  ngOnInit() {
  }

}
