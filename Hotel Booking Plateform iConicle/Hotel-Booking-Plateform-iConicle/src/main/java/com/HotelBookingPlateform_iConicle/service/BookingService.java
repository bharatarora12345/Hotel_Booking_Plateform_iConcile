package com.HotelBookingPlateform_iConicle.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HotelBookingPlateform_iConicle.entity.Booking;
import com.HotelBookingPlateform_iConicle.entity.Hotel;
import com.HotelBookingPlateform_iConicle.entity.User;
import com.HotelBookingPlateform_iConicle.repository.BookingRepository;

import jakarta.transaction.Transactional;

@Service
public class BookingService {


    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getDraftBookings(User user) {
        return bookingRepository.findByUserAndIsDraftTrue(user);
    }

    public List<Booking> getCompletedBookings(User user) {
        return bookingRepository.findByUserAndIsCompletedTrue(user);
    }
    
    @Transactional
    public Booking createDraftBooking(User user, Hotel hotel) {
        Booking booking = new Booking();
        booking.setUser(user);
        booking.setHotel(hotel);
        booking.setDraft(true);
        return bookingRepository.save(booking); 
    }

    public void completeBooking(Long bookingId) {
    	bookingRepository.completeBooking(bookingId);
    }
}