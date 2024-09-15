import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent{

  constructor(private apiService: ApiService) {}

  initiateDraftBooking(userId: number, hotelId: number) {
    this.apiService.createDraftBooking(userId, hotelId).subscribe(() => {
      alert('Draft booking created!');
    });
  }

  completeBooking(bookingId: number) {
    this.apiService.completeBooking(bookingId).subscribe(() => {
      alert('Booking completed!');
    });
  }

}
