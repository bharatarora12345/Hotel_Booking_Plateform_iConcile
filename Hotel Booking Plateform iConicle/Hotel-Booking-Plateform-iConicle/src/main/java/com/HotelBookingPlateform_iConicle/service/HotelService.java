package com.HotelBookingPlateform_iConicle.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HotelBookingPlateform_iConicle.entity.Hotel;
import com.HotelBookingPlateform_iConicle.repository.HotelRepository;

@Service
public class HotelService {
	
	@Autowired
	private HotelRepository hotelRepository;
	
	

    public Hotel getHotelById(Long hotelId) {
        return hotelRepository.findById(hotelId)
                             .orElseThrow(() -> new RuntimeException("Hotel not found with Id: " + hotelId));
    }
}
