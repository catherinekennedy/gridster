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
import { BarComponent } from './widgets/bar/bar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridsterPreviewComponent } from './gridster-preview/gridster-preview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Testcase1Component } from './widgets/testcase1/testcase1.component';
import { BreadcrumbsComponent } from './widgets/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './widgets/title/title.component';
import { TabComponent } from './widgets/tab/tab.component';
import { RighttabComponent } from './widgets/righttab/righttab.component';


// import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    TableComponent,
    ImageComponent,
    CardComponent,
    PieComponent,
    BarComponent,
    GridsterPreviewComponent,
    DashboardComponent,
    Testcase1Component,
    BreadcrumbsComponent,
    TitleComponent,
    TabComponent,
    RighttabComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GridsterModule,
    DynamicModule.withComponents([TableComponent,
      ImageComponent,
      CardComponent,
      PieComponent,
      BarComponent,
      Testcase1Component,
      BreadcrumbsComponent,
      TitleComponent,
      TabComponent,
    ]),
    NgZorroAntdModule,
    // MenubarModule ,
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
