import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from '../customers/customer';

@Component({
  selector: 'app-customer-tmplFrm',
  templateUrl: './customerTmpltFrm.component.html',
  styleUrls: ['./customerTmpltFrm.component.css']
})
export class CustomerTmpltFrmComponent implements OnInit {
  customer = new Customer();

  constructor() { }

  ngOnInit() {
  }

  save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
}
