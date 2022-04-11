package com.pesol.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pesol.spring.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}
