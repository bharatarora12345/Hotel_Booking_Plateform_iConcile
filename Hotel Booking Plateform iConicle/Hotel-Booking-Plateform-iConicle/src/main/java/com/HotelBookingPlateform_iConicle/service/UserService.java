package com.HotelBookingPlateform_iConicle.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HotelBookingPlateform_iConicle.entity.User;
import com.HotelBookingPlateform_iConicle.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId)
                             .orElseThrow(() -> new RuntimeException("User not found with Id: " + userId));
    }

	public Optional<User> loginUser(User user) {
		boolean userAuthentic = authenticate(user.getEmail() , user.getPassword());
		if(userAuthentic) {
			return userRepository.findByEmail(user.getEmail());
		}
		return null;
	}
	
    // improvement need to save the password encrypted and check with encryption
	 public boolean authenticate(String email, String password) {
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            return user.getPassword().equals(password);
        }
        return false;
    }
}
