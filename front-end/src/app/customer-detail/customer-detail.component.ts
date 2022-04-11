import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.customerService.getById(this.route.snapshot.params['id'])
      .subscribe(data => {
        this.customer = data;
      },
        error => {
          console.log(error);
          this.router.navigate(['customers']);
        });
  }

}
