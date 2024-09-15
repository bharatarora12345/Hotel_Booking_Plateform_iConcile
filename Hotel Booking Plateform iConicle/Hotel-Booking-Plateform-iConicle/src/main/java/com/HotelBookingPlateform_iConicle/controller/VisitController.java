package com.HotelBookingPlateform_iConicle.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.HotelBookingPlateform_iConicle.entity.Hotel;
import com.HotelBookingPlateform_iConicle.entity.User;
import com.HotelBookingPlateform_iConicle.service.HotelService;
import com.HotelBookingPlateform_iConicle.service.UserService;
import com.HotelBookingPlateform_iConicle.service.VisitService;

@CrossOrigin(origins = "http://localhost:4000")
public class VisitController {
	 @Autowired
	 private VisitService visitService;
	 
	 @Autowired
	 private UserService userService;
	 
	 @Autowired
	 private HotelService hotelService;

    @PostMapping("/track")
    public ResponseEntity<String> trackVisit(@RequestParam Long userId, @RequestParam Long hotelId) {
        // Assuming you have a service to get user and hotel by ID
        User user = userService.getUserById(userId);
        Hotel hotel = hotelService.getHotelById(hotelId);
        visitService.trackVisit(user, hotel);
        return ResponseEntity.ok("Visit tracked successfully");
    }
    
    
    
}
