import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  li: any;
  cards = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // get response from api
    this.http.get('https://61c5d0a5c003e70017b79940.mockapi.io/api/platform').subscribe((Response) => {
      console.log(Response);
      this.li = Response;
      this.cards = this.li[0].cards;
      console.log("Cards : ",this.li[0].cards)
    });
  }

}
