package com.pesol.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pesol.spring.entity.Customer;
import com.pesol.spring.exception.ResourceNotFoundException;
import com.pesol.spring.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
	private CustomerRepository customerRepository;

	@Override
	public List<Customer> getAll() {
		
		return customerRepository.findAll();
	}

	@Override
	public Customer getById(Integer id) {
		
		return customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not exist!"));
	}

	@Override
	public void save(Customer customer) {
		
		customerRepository.save(customer);
	}


	@Override
	public void delete(Integer id) {
		customerRepository.deleteById(id);
		
	}

}
