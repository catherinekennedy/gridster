import {  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  EventEmitter} from '@angular/core';
import {CompactType, GridsterConfig, GridsterItem, GridsterItemComponent, GridsterPush, GridType,DisplayGrid} from 'angular-gridster2';
declare var $: any;

import { TableComponent } from '../widgets/table/table.component';
import { ImageComponent } from '../widgets/image/image.component';
import { CardComponent } from '../widgets/card/card.component';
import { PieComponent } from '../widgets/pie/pie.component';
import { BarComponent } from '../widgets/bar/bar.component';
import { Testcase1Component } from '../widgets//testcase1/testcase1.component';
import { BreadcrumbsComponent } from '../widgets/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from '../widgets/title/title.component';
import { TabComponent } from '../widgets/tab/tab.component';
// import { TitleComponent } from '../widgets/title/title.component';

import { FormControl, FormGroup } from '@angular/forms';

import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  itemToPush: GridsterItemComponent;
  private resizeEvent: EventEmitter<any> = new EventEmitter<any>();
  private configureEvent: EventEmitter<boolean> = new EventEmitter<boolean>();


  barForm:FormGroup;
  

  constructor(private localStore: LocalStorageService) { }



  ngOnInit() {

  
    // this.options = {
    //   gridType: GridType.ScrollVertical,
    //   compactType: CompactType.None,
    //   // setGridSize: true,
    //   // fixedColWidth: 10,
    //   // fixedRowHeight: 10,
    //   // minRows:20,
    //   // margin:2,
    //   pushItems: true,
    //   outerMargin:false,
    //   swap: true,
    //   swapWhileDragging: true,
    //   draggable: {
    //     enabled: true
    //   },
    //   resizable: {
    //     enabled: true
    //   }
    // };
    
    this.options = {
      gridType: GridType.Fit,
      // compactType: CompactType.None,
      displayGrid: DisplayGrid.OnDragAndResize,
      minRows:25,
      margin:0,
      
      
      
      // pushItems: true,
      // outerMargin:false,
      // swap: true,
      // allowMultiLayer: true,
      // defaultLayerIndex: 1,
      // baseLayerIndex: 2,
      // maxLayerIndex: 2,
      swapWhileDragging: false,
      draggable: {
        enabled: true,
        dragHandleClass:".my-class",
      },
      resizable: {
        enabled: true
      }
    };
      
    
    

    this.dashboard = [
      // {
      // name: "testcase",
      // componentName: 'Testcase1Component',
      // cols: 5,
      // rows: 4,
      // y: 0,
      // x: 0,
      // minItemRows: 2,
      // minItemCols: 2,
      // componentType: Testcase1Component,
      // },
      {
        name: "breadcrumbs",
        componentName: 'BreadcrumbsComponent',
        cols: 5,
        rows: 1,
        y: 0,
        x: 0,
        componentType: BreadcrumbsComponent,
        },
        {
          name: "title",
          componentName: 'TitleComponent ',
          cols: 5,
          rows: 1,
          y: 0,
          x: 0,
          layerIndex: 2,
          componentType: TitleComponent ,
          
          },
          {
            name: "tab",
            componentName: 'TabComponent ',
            cols: 5,
            rows: 1,
            y: 0,
            x: 4,
            componentType: TabComponent ,
            }
    ];
  }


 


  
 
}

