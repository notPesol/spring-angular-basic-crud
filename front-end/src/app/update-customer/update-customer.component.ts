import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id!: number;
  customer: Customer = new Customer();

  constructor(private customerService: CustomerService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getById(this.id)
      .subscribe(data => {
        console.log(data);
        this.customer = data;
      }, error => {
        console.error(error);
        this.goToCustomerList();
      });
  }

  onSubmit() {
    this.customerService.update(this.id, this.customer)
      .subscribe(data => {
        console.log('Updated value = ', data);
        this.goToCustomerList();
      },
        error => {
          console.log(error);
        });
  }

  private goToCustomerList() {
    this.router.navigate(['/customers']);
  }
}
