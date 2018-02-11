import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
    HomeComponent
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
