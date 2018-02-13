import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './information/about/about.component';
import { ServicesComponent } from './information/services/services.component';
import { HomeComponent } from './information/home/home.component';
import { DesignComponent } from './galleries/design/design.component';
import { DevelopComponent } from './galleries/develop/develop.component';
const routes: Routes = [
  { path: '', redirectTo: '/(gallery:design//information:home)', pathMatch: 'full' },
  {
    path: 'about', component: AboutComponent, outlet: 'information', data: {
      animation: 'aboutPage'
    }
  },
  {
    path: 'services', component: ServicesComponent, outlet: 'information', data: {
      animation: 'servicesPage'
    }
  },
  {
    path: 'home', component: HomeComponent, outlet: 'information', data: {
      animation: 'homePage'
    }
  },
  // for second router outlet
  {
    path: 'design', component: DesignComponent, outlet: 'gallery', data: {
      animation: 'designPage'
    }
  },
  {
    path: 'develop', component: DevelopComponent, outlet: 'gallery', data: {
      animation: 'developPage'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
