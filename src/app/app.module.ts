import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionFilterComponent } from './mission-filter/mission-filter.component';
import { YearFilterPipe } from './year-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MissionListComponent,
    MissionFilterComponent,
    YearFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
