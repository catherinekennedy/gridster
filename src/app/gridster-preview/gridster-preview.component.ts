import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation,EventEmitter} from '@angular/core';
import {CompactType, GridsterConfig, GridsterItem, GridsterItemComponent, GridsterPush, GridType} from 'angular-gridster2';
declare var $: any;

import { TableComponent } from '../widgets/table/table.component';
import { ImageComponent } from '../widgets/image/image.component';
import { CardComponent } from '../widgets/card/card.component';
import { PieComponent } from '../widgets/pie/pie.component';
import { BarComponent } from '../widgets/bar/bar.component';
import { Testcase1Component } from '../widgets/testcase1/testcase1.component';

import { FormControl, FormGroup } from '@angular/forms';

import { LocalStorageService } from '../services/local-storage.service';


@Component({
  selector: 'app-gridster-preview',
  templateUrl: './gridster-preview.component.html',
  styleUrls: ['./gridster-preview.component.css']
})
export class GridsterPreviewComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  itemToPush: GridsterItemComponent;
  private resizeEvent: EventEmitter<any> = new EventEmitter<any>();
  private configureEvent: EventEmitter<boolean> = new EventEmitter<boolean>();


  barForm:FormGroup;
  

  constructor(private localStore: LocalStorageService) { }



  ngOnInit() {

  
    this.options = {
      gridType: GridType.ScrollVertical,
      compactType: CompactType.None,
      // pushItems: true,
      // outerMargin:false,
      // swap: true,
      swapWhileDragging: true,
      // draggable: {
      //   enabled: true
      // },
      // resizable: {
      //   enabled: true
      // }
    };
    console.log(this.localStore.getData('dashboardData'));
    // var previewData = JSON.parse(this.localStore.getData('dashboardData')) ;
    var previewData = this.localStore.jsonparse(this.localStore.getData('dashboardData')) ;
    console.log(previewData);
//     console.log(typeof(previewData));
//     previewData.forEach(element => {
     
//      console.log(element);
//      console.log(element.componentType);
//      console.log(element.componentName);
     
//      console.log(typeof(element.componentName) );
    

//      switch(element.componentName){
//       case "BarComponent"  :{
//         element.componentType = BarComponent;
//         break;
//       }
//       case "TableComponent"  :{
//         element.componentType = TableComponent;
//         break;
//       }
//       case "ImageComponent"  :{
//         element.componentType = ImageComponent;
//         break;
//       }
//       case "CardComponent"  :{
//         element.componentType = CardComponent;
//         break;
//       }
//       case "PieComponent"  :{
//         element.componentType = PieComponent;
//         break;
//       }
//       case "Testcase1Component"  :{
//         element.componentType = Testcase1Component;
//         break;
//       }
//      }
// });    
// console.log(previewData);

    // this.dashboard = [
    //   {cols: 2, rows: 1, y: 0, x: 0},
    //   {cols: 2, rows: 1, y: 0, x: 2},
    //   {cols: 1, rows: 1, y: 0, x: 4},
    // ];

    this.dashboard = previewData;
  }


 


  
 
}
