package com.HotelBookingPlateform_iConicle.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HotelBookingPlateform_iConicle.entity.Hotel;

@Repository
public interface HotelRepository extends JpaRepository<Hotel,Long>{

}
