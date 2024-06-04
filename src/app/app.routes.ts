import { Routes } from '@angular/router';
import { MainPageComponent } from './transformer/pages/main-page/main-page.component';

export const routes: Routes = [
  {
    path:'home',
    component:MainPageComponent
  },
  {
    path:'**',
    redirectTo:'home'
  }
];
