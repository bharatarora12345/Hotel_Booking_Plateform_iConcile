import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HotelPageComponent } from './components/hotel-page/hotel-page.component';
import { BookingComponent } from './components/booking/booking.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    UserListComponent,
    HotelPageComponent,
    BookingComponent,
    RecommendationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
