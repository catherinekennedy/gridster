import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GridComponent } from './grid/grid.component';
import { GridsterModule } from 'angular-gridster2';
import { TableComponent } from './widgets/table/table.component';

import { DynamicModule } from "ng-dynamic-component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { ImageComponent } from './widgets/image/image.component';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';




@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    TableComponent,
    ImageComponent,
    CardComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule,
    DynamicModule.withComponents([TableComponent,ImageComponent,CardComponent,PieComponent]),
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
