import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {AboutUsComponent} from './components/about-us/about-us.component';

const appRoutes: Routes = [
    { 
        path: '', 
        component: HomeComponent
    },
    { 
        path: 'aboutus', 
        component: AboutUsComponent
    },    
     { path: '**', component: HomeComponent }
  ];
  

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
