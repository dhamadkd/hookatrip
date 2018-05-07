import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {RajasthanToursComponent} from './components/rajasthan-tours/rajasthan-tours.component';
import {HimachalToursComponent} from './components/himachal-tours/himachal-tours.component';
import {AllPackagesComponent} from './components/all-packages/all-packages.component';

const appRoutes: Routes = [
    { 
        path: '', 
        component: HomeComponent
    },
    { 
        path: 'packages', 
        component: AllPackagesComponent
    },
    { 
        path: 'about_us', 
        component: AboutUsComponent
    },
    { 
        path: 'rajasthan_tours', 
        component: RajasthanToursComponent
    },
    { 
        path: 'himachal_tours', 
        component: HimachalToursComponent
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
