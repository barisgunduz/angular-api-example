import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent implements OnInit {
  li: any;
  cards = {
    primaryCard: {
      bank: '',
      type: '',
      name: '',
      number: '',
      expiry: '',
      ccv: 123,
      active: true,
    },
    expense: {
      current: 0,
      limit: 0
    },
    balance: {
      credit: 0,
      current: 0,
      provisions: 0
    }
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCards();
  }

  // get response from api
  getCards() {
    this.http
      .get('https://61c5d0a5c003e70017b79940.mockapi.io/api/platform')
      .subscribe((Response) => {
        this.li = Response;
        this.cards = this.li[0].cards;
        console.log('Cards : ', this.cards);
      });
  }
}
