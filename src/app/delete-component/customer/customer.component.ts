import { Component, OnInit, Input } from '@angular/core';

export type Customer = { name: string, email: string };

@Component({
  selector: 'app-customer',
  template: `
    <hr>
    <em> {{ customer.name }}</em>
    <p> {{ customer.email }}</p>

    <button type="button" Holdable (holdTime)="deleteCustomer($event, customer)" [disabled]="disable">
    Click Me
    </button>
    <br><br>
    <progress [value]="progress" max="100"></progress>
  `,
  styles: []
})
export class CustomerComponent implements OnInit {
  @Input() customer: Customer;
  @Input() customers: Customer[];
  disable: boolean = false;
  progress: number = 0;

  constructor() { }

  ngOnInit() {
  }

  deleteCustomer(event, customer: Customer): void {
    this.progress = event / 10;
    if(this.progress > 100){
      //fire Delete here 
      const custs = this.customers.length > 1 ? this.customers.filter(c => c.name !== customer.name) : [];
      localStorage.setItem("customers", JSON.stringify(custs));
      this.disable = true;
      console.log("Payload Deleted");
    }
  }
}
