import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about.component';
import { UserComponent } from './components/user.component';
import { RegComponent } from './components/reg.component';
import { AppComponent } from './app.component';
const appRoutes:Routes =[
     {
       path:'',
       component:UserComponent
    },
    {
       path:'about',
       component:AboutComponent
    },
    {
        path:'reg',
        component:RegComponent
    }
]
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);