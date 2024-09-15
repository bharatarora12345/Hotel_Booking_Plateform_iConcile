package com.HotelBookingPlateform_iConicle.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.HotelBookingPlateform_iConicle.entity.Booking;
import com.HotelBookingPlateform_iConicle.entity.Hotel;
import com.HotelBookingPlateform_iConicle.entity.User;

import jakarta.transaction.Transactional;

public interface BookingRepository extends JpaRepository<Booking,Long>{

	List<Booking> findByUserAndIsCompletedFalse(User user);

	List<Booking> findByUserAndIsCompletedTrue(User user);

	List<Booking> findByUserAndIsDraftTrue(User user);
	
    
    @Transactional
    @Modifying
    @Query("UPDATE Booking b SET b.isDraft = false, b.isCompleted = true WHERE b.id = :bookingId")
    void completeBooking(Long bookingId);
    

}
