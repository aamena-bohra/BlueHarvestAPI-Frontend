import { Component, OnInit } from '@angular/core';
import { BankingService } from '../../services/banking.service';
import { NgFor, NgIf, CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, CommonModule],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  accounts: any[] = [];
  customer: any;
  name = '';
  surname = '';
  customerId: number = 0;
  customerAvailable: boolean = false;  
  initialDeposit: number = 0;

  constructor(private bankingService: BankingService) {}

  ngOnInit() {}

  createDummyCustomer() {
    this.bankingService.createDummyCustomer().subscribe();
  }

  getCustomerDetails() {
    this.bankingService.getCustomerDetails(this.customerId).subscribe(
      (data) => {
        if (data) {
          this.customer = data;
          this.accounts = data.accounts || [];
          this.name = data.name;
          this.surname = data.surname;
          this.customerAvailable = true;  
        } else {
          this.customerAvailable = false; 
        }
      },
      (error) => {
        console.error("Error fetching customer:", error);
        this.customerAvailable = false; 
      }
    );
  }

  openCurrentAccount(customerId: number, initialDeposit: number) {
    if (!this.customerAvailable) return; 

    this.bankingService.openCurrentAccount(customerId, initialDeposit).subscribe(
      () => {
        console.log('Account created successfully');
        this.getCustomerDetails(); 
      },
      (error) => console.error('Error creating account:', error)
    );
  }
}
