import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { RegComponent } from './components/reg.component';
import { CreateComponent } from './components/create.component';
import { MeComponent } from './components/me.component';
import {routing} from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,RegComponent,UserComponent,CreateComponent,MeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
