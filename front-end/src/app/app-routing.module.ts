import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {path: 'customers', component: CustomerListComponent},
  {path: 'create-customer', component: CreateCustomerComponent },
  {path: 'update-customer/:id', component: UpdateCustomerComponent},
  {path: 'customer-detail/:id', component: CustomerDetailComponent},
  {path: '', redirectTo: 'customers', pathMatch: 'full'},
  {path: '**', redirectTo: 'customers', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
