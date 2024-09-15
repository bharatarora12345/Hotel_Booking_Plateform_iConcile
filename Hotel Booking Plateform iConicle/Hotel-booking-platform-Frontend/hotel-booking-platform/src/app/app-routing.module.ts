import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HotelPageComponent } from './components/hotel-page/hotel-page.component';
import { BookingComponent } from './components/booking/booking.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';

const routes: Routes = [
  { path: 'hotels', component: HotelListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'hotel/:id', component: HotelPageComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: '', redirectTo: '/hotels', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
