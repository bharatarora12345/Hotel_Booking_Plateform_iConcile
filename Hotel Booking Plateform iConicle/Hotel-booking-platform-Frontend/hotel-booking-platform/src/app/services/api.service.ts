import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getAllHotels(): Observable<any> {
    return this.http.get(`${this.baseUrl}/hotels/getAll`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/getAll`);
  }

  createDraftBooking(userId: number, hotelId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/bookings/create/draftBooking?userId=${userId}&hotelId=${hotelId}`, {});
  }

  completeBooking(bookingId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/bookings/complete/${bookingId}`, {});
  }

  getDraftBookings(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/bookings/get/draftsBooking?userId=${userId}`);
  }

  getCompletedBookings(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/bookings/get/completedBooking?userId=${userId}`);
  }
}
