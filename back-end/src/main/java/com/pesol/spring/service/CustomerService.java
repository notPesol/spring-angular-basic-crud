package com.pesol.spring.service;

import java.util.List;

import com.pesol.spring.entity.Customer;

public interface CustomerService {

	List<Customer> getAll();
	
	Customer getById(Integer id);
	
	void save(Customer customer);
		
	void delete(Integer id);
}
