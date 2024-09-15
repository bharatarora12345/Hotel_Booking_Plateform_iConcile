package com.HotelBookingPlateform_iConicle;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.HotelBookingPlateform_iConicle") 
public class HotelBookingPlateformIConicleApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotelBookingPlateformIConicleApplication.class, args);
	}

}
