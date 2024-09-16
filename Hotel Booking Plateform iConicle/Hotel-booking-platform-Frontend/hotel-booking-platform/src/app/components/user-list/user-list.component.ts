import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

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
