import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<any> {
    const payload = {
      email: email,
      password: password
    };
    return this.http.post(`${this.baseUrl}/users/login`, payload);
  }

  createUser(payload : any) : Observable<any> {
    return this.http.post(`${this.baseUrl}/users/add`, payload);
  }

  getAllHotels(): Observable<any> {
    return this.http.get(`${this.baseUrl}/hotels/getAll`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/getAll`);
  }

  createDraftBooking(hotelId: number, userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/bookings/create/draftBooking?userId=${userId}&hotelId=${hotelId}`, {});
  }

  
  visitTrackHotel(hotelId: number, userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/visit/track?userId=${userId}&hotelId=${hotelId}`, {});
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
