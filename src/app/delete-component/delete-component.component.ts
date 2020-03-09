import { Component, OnInit } from '@angular/core';
import { Customer } from './customer/customer.component';

@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-component.component.html',
  styleUrls: ['./delete-component.component.css']
})
export class DeleteComponentComponent implements OnInit {
  progress: number = 0;
  customers: Customer[];

  constructor() { }

  ngOnInit() {
    this.customers = JSON.parse(localStorage.getItem("customers"));
  }

  addPayload(): void {
    const customers: Customer[] = [
      { name: "Amy", email: "my@gmail.com" },
      { name: "Richard", email: "rich@rich.com" },
      { name: "Christie", email: "Christir@yahoo.com" }
    ];

    localStorage.setItem("customers", JSON.stringify(customers));
  }

}
