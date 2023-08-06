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

import {MenuItem} from 'primeng/api';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>=[];
  itemToPush: GridsterItemComponent;
  private resizeEvent: EventEmitter<any> = new EventEmitter<any>();
  private configureEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  items: MenuItem[];


  barForm:FormGroup;
  

  constructor(private localStore: LocalStorageService,private router: Router,) { }
  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }


  ngOnInit() {

    this.items = [
     
      {
          label:'Edit',
          icon:'pi pi-fw pi-pencil',
          items:[
              {
                  label:'Card',
                  icon:'pi pi-fw pi-align-left',
                  
              
              },
              {
                  label:'Pie',
                  icon:'pi pi-fw pi-align-right'
              },
              {
                  label:'Bar/Line',
                  icon:'pi pi-fw pi-align-center'
              },
              {
                  label:'Image',
                  icon:'pi pi-fw pi-align-justify'
              },

          ]
      },
     
  ];

    this.barForm = new FormGroup({
      'chartType' : new FormControl(null),
      'chartId' : new FormControl(null)
    })

    this.options = {
      gridType: GridType.ScrollVertical,
      compactType: CompactType.None,
      // pushItems: true,
      // outerMargin:false,
      swap: true,
      swapWhileDragging: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };
     this.dashboard = this.localStore.jsonparse(this.localStore.getData("dashboardData"));
    // this.dashboard = [
    //   {cols: 2, rows: 1, y: 0, x: 0},
    
    //   // {cols: 1, rows: 1, y: 4, x: 5},
    //   // {cols: 1, rows: 1, y: 2, x: 1},
    //   // {cols: 2, rows: 2, y: 5, x: 5},
    //   // {cols: 2, rows: 2, y: 3, x: 2},
    //   // {cols: 2, rows: 1, y: 2, x: 2},
    //   // {cols: 1, rows: 1, y: 3, x: 4},
    //   // {cols: 1, rows: 1, y: 0, x: 6}
    // ];
  }


  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }
  add($event, item,items){
    console.log($event);
    console.log(item);
    console.log(items);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }

  addTable() {
    this.dashboard.push({
      id: "1",
      name: "Table",
      componentName: "TableComponent",
      componentType: TableComponent,
      inputs:{tableData:[
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park'
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park'
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park'
        }
      ]},
      cols: 2,
      rows: 1,
      y: 0,
      x: 0,
    });
  
  }
  addImage() {
    this.dashboard.push({
      id: "2",
      name: "Image",
      cols: 1,
      rows: 1,
      y: 0,
      x: 0,
      componentName:"ImageComponent",
      componentType: ImageComponent,
      inputs:{imageData:[
        {
          url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          width: '100px',
          height: '100px',
        }
      ]},
     
    });
  
  }
  // addCard() {
  //   this.dashboard.push({
  //     id: "2",
  //     name: "Card",
  //     componentName: "card",
  //     cols: 2,
  //     rows: 1,
  //     y: 0,
  //     x: 0,
  //     componentType: CardComponent,
  //     inputs:{cardData:[
  //       {
  //         title: 'Card Title',
  //         content: [{
  //           text:'cat'
  //         },
  //         {
  //           text:'Dog'
  //         },
  //         {
  //           text:'Bat'
  //         }]
  //       }
  //     ]},
     
  //   });
  
  // }

  addCard() {
    this.dashboard.push({
      id: "2",
      name: "Card",
      componentName: "CardComponent",
      cols: 2,
      rows: 1,
      y: 0,
      x: 0,
      minItemRows: 1,
      minItemCols: 2,
      componentType: CardComponent,
      inputs:{cardData:[
        {
          title: 'Card Title',
          subTitle: 'subtitle',
          content:'Some quick example text to build on the card title and make up the bulk of the card'
        }
      ]},
     
    });
  
  }
  numId = 0;
  barId = 0;
  addPie() {
   
    this.dashboard.push({
      id: "2",
      name: "Pie",
      componentName: "PieComponent",
      cols: 2,
      rows: 2,
      y: 0,
      x: 0,
      minItemRows: 2,
      minItemCols: 2,
      componentType: PieComponent,
      inputs:{
        pieOption : {
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
    id: 'main'+this.numId},
    
    });
    this.numId= this.numId +1; 
    console.log(this.numId);
  
  }

  addTestCase(){
    this.dashboard.push({
      id: "2",
      name: "Pie",
      componentName: "Testcase1Component",
      cols: 2,
      rows: 2,
      y: 0,
      x: 0,
      componentType: Testcase1Component,
      
    
    });

  }

  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(e): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    console.log(e);
    console.log(this.barId);
    // e.reset();
   
    this.dashboard.push({
      id: "2",
      name: "bar",
      componentName: 'BarComponent',
      cols: 2,
      rows: 2,
      y: 0,
      x: 0,
      minItemRows: 2,
      minItemCols: 2,
      componentType: BarComponent,
      inputs:{
        barOption : 
        {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: e.value.chartType,
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              }
            }
          ]
        },
    id: e.value.chartId},
    
    });
    this.barId= this.barId +1; 
    console.log(this.barId);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  onSubmit(e) {
    console.log(e);
    // e.reset();
   
    this.dashboard.push({
      id: "2",
      name: "bar",
      componentName: "BarComponent",
      cols: 2,
      rows: 2,
      y: 0,
      x: 0,
      minItemRows: 2,
      minItemCols: 2,
      componentType: BarComponent,
      inputs:{
        barOption : 
        {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: e.value.chartType,
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              }
            }
          ]
        },
    id: 'barcomp'+this.barId},
    
    });
    this.numId= this.numId +1; 
    console.log(this.numId);
  
  }
  initItem(item: GridsterItem, itemComponent: GridsterItemComponent) {
    this.itemToPush = itemComponent;
  }

  pushItem() {
    const push = new GridsterPush(this.itemToPush); // init the service
    this.itemToPush.$item.rows += 4; // move/resize your item
    if (push.pushItems(push.fromNorth)) { // push items from a direction
      push.checkPushBack(); // check for items can restore to original position
      push.setPushedItems(); // save the items pushed
      this.itemToPush.setSize();
      this.itemToPush.checkItemChanges(this.itemToPush.$item, this.itemToPush.item);
    } else {
      this.itemToPush.$item.rows -= 4;
      push.restoreItems(); // restore to initial state the pushed items
    }
    push.destroy(); // destroy push instance
    // similar for GridsterPushResize and GridsterSwap

    
  }
  showPreview(){
    // JSON.stringify
    this.localStore.saveData('dashboardData',JSON.stringify(this.dashboard));
    // localStorage.setItem('token',JSON.stringify(this.dashboard));
    console.log(this.dashboard);
    console.log(this.localStore.getData('dashboardData'));
    this.router.navigate(['preview']);
  }

  
 
}
