package com.HotelBookingPlateform_iConicle.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.HotelBookingPlateform_iConicle.entity.Booking;
import com.HotelBookingPlateform_iConicle.entity.Hotel;
import com.HotelBookingPlateform_iConicle.entity.User;
import com.HotelBookingPlateform_iConicle.service.BookingService;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/iConicleDummyApi")
    public String dummyApi() {
    	return "Hello i am iConicleDummyApi";
    }
    
    
    
    @PostMapping("/create/draftBooking")
    public Booking createDraft(@RequestParam Long userId, @RequestParam Long hotelId) {
        User user = new User();
        user.setId(userId);
        Hotel hotel = new Hotel();
        hotel.setId(hotelId);
        return bookingService.createDraftBooking(user, hotel);
    }

    @PostMapping("/complete/{bookingId}")
    public void completeBooking(@PathVariable Long bookingId) {
        bookingService.completeBooking(bookingId);
    }
    
    
    @GetMapping("/get/draftsBooking")
    public List<Booking> getDraftBookings(@RequestParam Long userId) {
        User user = new User();
        user.setId(userId);
        return bookingService.getDraftBookings(user);
    }

    @GetMapping("/get/completedBooking")
    public List<Booking> getCompletedBookings(@RequestParam Long userId) {
        User user = new User();
        user.setId(userId);
        return bookingService.getCompletedBookings(user);
    }

}
