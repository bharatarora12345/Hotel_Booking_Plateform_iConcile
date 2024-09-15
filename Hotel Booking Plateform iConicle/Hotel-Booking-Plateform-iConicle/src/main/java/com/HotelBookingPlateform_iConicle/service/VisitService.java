package com.HotelBookingPlateform_iConicle.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;

import com.HotelBookingPlateform_iConicle.entity.Hotel;
import com.HotelBookingPlateform_iConicle.entity.User;
import com.HotelBookingPlateform_iConicle.entity.Visit;
import com.HotelBookingPlateform_iConicle.repository.VisitRepository;

public class VisitService {

	
	
	 @Autowired
	 private VisitRepository visitRepository;

    public void trackVisit(User user, Hotel hotel) {
	    Visit visit = new Visit();
	    visit.setUser(user);
	    visit.setHotel(hotel);
	    visit.setVisitTime(LocalDateTime.now());
	    visitRepository.save(visit);
    }
}
