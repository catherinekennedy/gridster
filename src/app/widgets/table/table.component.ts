import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})



export class TableComponent implements OnInit {
  @Input()
  tableData: string;
  @Input()
  something: Function;
  @Output()
  onSomething = new EventEmitter<string>();



  

  
  constructor() { }

  ngOnInit() {
    console.log(this.tableData);
  }

}
