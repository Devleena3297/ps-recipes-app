import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { RegComponent } from './components/reg.component';
import {routing} from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,RegComponent,UserComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }