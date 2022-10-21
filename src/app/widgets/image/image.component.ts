import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input()
  imageData: string;
  @Output()
  onSomething = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.imageData);
  }

}
