package com.HotelBookingPlateform_iConicle.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.HotelBookingPlateform_iConicle.entity.User;
import com.HotelBookingPlateform_iConicle.repository.UserRepository;

public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Create new user
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
