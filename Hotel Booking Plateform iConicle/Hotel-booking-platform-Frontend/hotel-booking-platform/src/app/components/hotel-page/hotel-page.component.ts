import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.css']
})
export class HotelPageComponent implements OnInit {
  @Input() hotelId!: number;
  visits: any[] = [];
  draftBookings: any[] = [];
  completedBookings: any[] = [];

  constructor(private apiService: ApiService,    
    private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const hotelId = +params.get('id')!;
      this.loadHotelDetails(hotelId);
    });
  }


  loadHotelDetails(hotelId: number): void {

    this.apiService.getDraftBookings(hotelId).subscribe(data => {
      this.draftBookings = data;
    }, error => {
      console.error('Error fetching draft bookings', error);
    });
    this.apiService.getCompletedBookings(hotelId).subscribe(data => {
      this.completedBookings = data;
    }, error => {
      console.error('Error fetching completed bookings', error);
    });
  }


}
