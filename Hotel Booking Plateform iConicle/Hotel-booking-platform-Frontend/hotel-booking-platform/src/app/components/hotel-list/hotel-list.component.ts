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

  constructor(private apiService: ApiService,private router: Router) {}

  ngOnInit(): void {
    this.apiService.getAllHotels().subscribe(data => {
      this.hotels = data;
    });
  }

  viewHotelDetails(hotelId: number): void {
    this.router.navigate(['/hotel', hotelId]);
  }

}
