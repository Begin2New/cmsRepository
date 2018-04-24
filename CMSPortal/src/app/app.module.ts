import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { CmsPortalComponent } from './components/cms-portal/cms-portal.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CmsPortalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
