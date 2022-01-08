import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  li: any;
  billing = [];
  cards = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // get response from api
    this.http.get('https://61c5d0a5c003e70017b79940.mockapi.io/api/platform').subscribe((Response) => {
      console.log(Response);
      this.li = Response;
      this.billing = this.li[0].billing;
      this.cards = this.li[0].cards;
      console.log(this.li[0].billing)
      console.log(this.li[0].cards)
    });
  }
}
