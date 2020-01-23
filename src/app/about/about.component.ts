import { Component, OnInit } from '@angular/core';
import { LEADERS } from '../share/Leaders';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  LEADER = LEADERS;

  constructor() { }

  ngOnInit() {
  }

}
