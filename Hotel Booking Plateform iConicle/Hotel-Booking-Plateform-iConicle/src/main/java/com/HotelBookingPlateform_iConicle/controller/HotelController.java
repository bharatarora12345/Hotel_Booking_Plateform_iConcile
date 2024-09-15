package com.HotelBookingPlateform_iConicle.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HotelBookingPlateform_iConicle.entity.Hotel;
import com.HotelBookingPlateform_iConicle.repository.HotelRepository;

@RestController
@RequestMapping("/api/hotels")
@CrossOrigin(origins = "http://localhost:4000")
public class HotelController {
    @Autowired
    private HotelRepository hotelRepository;

    @PostMapping("/add")
    public Hotel addHotel(@RequestBody Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    @GetMapping("/getAll")
    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }
}
