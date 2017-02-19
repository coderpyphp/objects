import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-object',
  templateUrl: 'object.html'
})
export class ObjectPage implements OnInit {
  private maxHeight: number;

  constructor(public navCtrl: NavController) {
    window.setTimeout(this.tick, 10000);
    this.maxHeight = 4711;
  }

  ngOnInit() {
     this.maxHeight = window.innerHeight;
  }

  tick() {
    alert(this.maxHeight);
  }
}
