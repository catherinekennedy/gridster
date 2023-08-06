import { Injectable } from '@angular/core';

import { TableComponent } from '../widgets/table/table.component';
import { ImageComponent } from '../widgets/image/image.component';
import { CardComponent } from '../widgets/card/card.component';
import { PieComponent } from '../widgets/pie/pie.component';
import { BarComponent } from '../widgets/bar/bar.component';
import { Testcase1Component } from '../widgets/testcase1/testcase1.component';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  public saveData(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
  public jsonparse(data:string){
    var jparse = JSON.parse(data);
    jparse.forEach(element => {
     
      console.log(element);
      console.log(element.componentType);
      console.log(element.componentName);
     //  console.log(JSON.parse(element.componentName));
      
      console.log(typeof(element.componentName) );
     
      
     // test();
     //  element.componentType = class{componentName};
   //  var cat = "cather";
   //   console.log(typeof(cat));
   //   console.log(typeof(class{cat}));
 //  var  comp = element.componentName;
 //   element.componentType = {comp};
     //  if(element.componentName == "BarComponent"){
     //   element.componentType = BarComponent
     //   console.log(typeof(element.componentType));
     //  }
      switch(element.componentName){
       case "BarComponent"  :{
         element.componentType = BarComponent;
         break;
       }
       case "TableComponent"  :{
         element.componentType = TableComponent;
         break;
       }
       case "ImageComponent"  :{
         element.componentType = ImageComponent;
         break;
       }
       case "CardComponent"  :{
         element.componentType = CardComponent;
         break;
       }
       case "PieComponent"  :{
         element.componentType = PieComponent;
         break;
       }
       case "Testcase1Component"  :{
        element.componentType = Testcase1Component;
        break;
      }
      }
 });   
    return jparse;
  }
}
