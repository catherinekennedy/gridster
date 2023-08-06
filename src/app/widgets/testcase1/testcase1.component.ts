import { Component, OnInit } from '@angular/core';
import {
  AUTO_STYLE,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-testcase1',
  templateUrl: './testcase1.component.html',
  styleUrls: ['./testcase1.component.css'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out')),
    ]),
  ],
})
export class Testcase1Component implements OnInit {
  isVisibleMiddle = false;
  constructor() { }

  ngOnInit() {
  }
  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }
  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }


}
