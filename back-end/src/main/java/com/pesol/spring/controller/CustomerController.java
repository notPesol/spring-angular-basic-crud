package com.pesol.spring.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pesol.spring.entity.Customer;
import com.pesol.spring.service.CustomerService;

@CrossOrigin(origins = {
		"http://localhost:4200"
})
@RestController
@RequestMapping("/api/v1/")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	// get all customers
	@GetMapping("/customers")
	public List<Customer> getAllCustomer() {
		return customerService.getAll();
	}
	
	// create a customer
	@PostMapping("/customers")
	public Customer createCustomer(@RequestBody Customer customer) {
		customerService.save(customer);
		return customer;
	}
	
	// get customer by id
	@GetMapping("/customers/{id}")
	public Customer getCustomer(@PathVariable int id) {
		return customerService.getById(id);
	}
	
	// update customer by id
	@PutMapping("/customers/{id}")
	public Customer updateCustomer(@PathVariable int id, @RequestBody Customer tempCustomer) {
		Customer customer = customerService.getById(id);
		
		customer.setFirstName(tempCustomer.getFirstName());
		customer.setLastName(tempCustomer.getLastName());
		customer.setEmail(tempCustomer.getEmail());
		
		customerService.save(customer);

		return customer;
	}
	
	// delete customer by id
	@DeleteMapping("/customers/{id}")
	public Customer deleteCustomer(@PathVariable int id) {
		Customer customer = customerService.getById(id);
		
		customerService.delete(customer.getId());
		
		return customer;
	}
}
