import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardDetailsComponent } from './card-details/card-details.component';
import { BillingSummaryComponent } from './billing-summary/billing-summary.component';
import { LocationsComponent } from './locations/locations.component';
import { ModuleUsageComponent } from './module-usage/module-usage.component';

@NgModule({
  declarations: [
    AppComponent,
    CardDetailsComponent,
    BillingSummaryComponent,
    LocationsComponent,
    ModuleUsageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
