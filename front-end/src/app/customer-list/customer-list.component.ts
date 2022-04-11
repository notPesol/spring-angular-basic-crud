import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    const result: Observable<Customer[]> = this.customerService.getAll();
    result.subscribe(data => {
      this.customers = data;
    },
      error => {
        console.error(error);
      });
  }

  update(id: number) {
    this.router.navigate(['update-customer', id])
  }

  delete(id: number) {
    this.customerService.deleteById(id)
      .subscribe(data => {
        console.log(data);
        // get
        this.getEmployees();
      },
        error => {
          console.log(error);
        });
  }

  detail(id: number) {
    this.router.navigate(['customer-detail', id]);
  }
}
