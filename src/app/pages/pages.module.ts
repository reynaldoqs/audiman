import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './information/about/about.component';
import { ServicesComponent } from './information/services/services.component';
import { HomeComponent } from './information/home/home.component';
import { PagesRoutingModule } from './pages.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DesignComponent } from './galleries/design/design.component';
import { DevelopComponent } from './galleries/develop/develop.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    PagesComponent,
    AboutComponent,
    ServicesComponent,
    HomeComponent,
    DesignComponent,
    DevelopComponent
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
