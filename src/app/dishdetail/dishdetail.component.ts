import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../share/dish';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  /* inject方式的函数
  @Input()
  */
  dishdetail: Dish;
  
  constructor(private route: ActivatedRoute,
    private location: Location, private dishservice: DishService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.dishdetail = this.dishservice.getSpecificDish(id);
  }

  goBack(): void{
    this.location.back();
  }

}
