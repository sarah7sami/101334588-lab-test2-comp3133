import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionFilterComponent } from './mission-filter/mission-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionListComponent,
    MissionFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
