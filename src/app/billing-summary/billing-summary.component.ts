import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-billing-summary',
  templateUrl: './billing-summary.component.html',
  styleUrls: ['./billing-summary.component.css'],
})
export class BillingSummaryComponent implements OnInit {
  li: any;
  billing = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // get response from api
    this.http
      .get('https://61c5d0a5c003e70017b79940.mockapi.io/api/platform')
      .subscribe((Response) => {
        console.log(Response);
        this.li = Response;
        this.billing = this.li[0].billing;
        console.log('Billing : ', this.li[0].billing);
      });
  }
}
