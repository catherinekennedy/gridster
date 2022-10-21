import { Component, Input, OnInit } from '@angular/core';
import * as echarts from "echarts";
declare var $: any;

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})


export class PieComponent implements OnInit {
  @Input()
  pieOption: any;
  @Input()
  id: any;
  
  
  
  //  myChart;
  constructor() { }
  // echartInstance: any;
  // initOpts: { renderer: string; width: number; height: number; cursor: string; };
  // options: any = {};
  //  numId = 0;
  ngOnInit() {
    console.log(this.pieOption);
    console.log(this.id);
    var pieid = "#"+this.id;
    console.log(pieid);
    $("#"+this.id).append("<p>hiworks!</p>");
    $(pieid).append("<div id='pie"+ this.id+"'  class='main' style='width: 500px;height: 500px;'></div>");
    type  EChartsOption = echarts.EChartsOption;
   
    var option: EChartsOption;
    var chartDom = document.getElementById("pie"+this.id)!;
    // this.numId = this.numId +1;
    console.log(document.getElementById("pie"+this.id));
    
    var myChart = echarts.init(chartDom);
    option = this.pieOption;
    option && myChart.setOption(option);
    
    // var elemId="main"+this.id;
    // console.log(elemId);
    
 
    
  }
  ngAfterViewInit(){
    $("#"+this.id).append("<p>hiworks!</p>");
    $("#"+this.id).append("<div id='pie"+ this.id+"'  class='main' style='width: 500px;height: 500px;'></div>");
    type  EChartsOption = echarts.EChartsOption;
   
    var option: EChartsOption;
    var chartDom = document.getElementById("pie"+this.id)!;
    // this.numId = this.numId +1;
    console.log(document.getElementById("pie"+this.id));
    
    var myChart = echarts.init(chartDom);
    option = this.pieOption;
    option && myChart.setOption(option);
   

 

  }
 
  // ngAfterViewInit(): void {

  //   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   //Add 'implements AfterViewInit' to the class.
  // //   this.initOpts = {
  // //     renderer: "svg",
  // //     width: 300,
  // //     height: 200,
  // //     cursor: 'default',
  // //   };
  // //   // const echarts: any = config.variables.echarts;
  // //   this.options = this.pieOption;
  // // //  this.options && myChart.setOption(option);
  
  // }
  // onChartInit(e, number) {
  //   this.echartInstance = e;
  //   console.log(e);
  //   this.echartInstance.resize();
  // }
  


  
  
  
  
}
