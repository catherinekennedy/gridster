import { Component, Input, OnInit } from '@angular/core';
import * as echarts from "echarts";
declare var $: any;

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @Input()
  barOption: any;
  @Input()
  id: any;

  constructor() {
   
   }

  ngOnInit() {
    console.log(this.barOption);
    console.log(this.id);
  }
  ngAfterViewInit(){
    $("#"+this.id).append("<p>hiworks!</p>");
    $("#"+this.id).append("<div id='bar"+ this.id+"'  class='main' style='width: 500px;height: 500px;'></div>");
    type  EChartsOption = echarts.EChartsOption;
   
    var option: EChartsOption;
    var chartDom = document.getElementById("bar"+this.id)!;
    // this.numId = this.numId +1;
    console.log(document.getElementById("bar"+this.id));
    
    var myChart = echarts.init(chartDom);
    option = this.barOption;
    option && myChart.setOption(option);
   

 

  }

}
