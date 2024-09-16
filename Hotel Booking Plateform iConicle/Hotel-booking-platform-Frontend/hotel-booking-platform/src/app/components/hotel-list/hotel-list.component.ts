import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: any[] = [];
  userId: any;

  constructor(private apiService: ApiService,private router: Router) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    console.log('userIdd ' , this.userId);
    this.apiService.getAllHotels().subscribe(data => {
      this.hotels = data;
    });
  }

  viewHotelDetails(hotelId: number): void {
    this.apiService.visitTrackHotel(this.userId,hotelId).subscribe(data => {
      console.log('succeffuly visit the hotel');
    })
    this.router.navigate(['/hotel', hotelId]);
  }

  initiateDraftBooking(hotelId: number) {
    this.apiService.createDraftBooking(this.userId, hotelId).subscribe(() => {
      alert('Draft booking created!');
    });
  }

  completeBooking(bookingId: number) {
    this.apiService.completeBooking(bookingId).subscribe(() => {
      alert('Booking completed!');
    });
  }

}
