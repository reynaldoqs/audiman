import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: 'about', component: AboutComponent, data: {
      animation: 'aboutPage'
    }
  },
  {
    path: 'services', component: ServicesComponent, data: {
      animation: 'servicesPage'
    }
  },
  {
    path: 'home', component: HomeComponent, data: {
      animation: 'homePage'
    }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
