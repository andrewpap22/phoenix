import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LHCbComponent } from './sections/lhcb/lhcb.component';
import { PhoenixUIModule } from 'phoenix-ui-components';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

let routes: Routes;

if (environment?.singleEvent) {
  routes = [
    { path: '', component: LHCbComponent }
  ];
} else {
  routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'lhcb', component: LHCbComponent }
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LHCbComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: environment?.singleEvent ? false : true }),
    BrowserAnimationsModule,
    PhoenixUIModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

