import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-support',
  templateUrl: './admin-support.component.html',
  styleUrls: ['./admin-support.component.css'],
})
export class AdminSupportComponent implements OnInit {
  li: any;
  administrators = [
    {
      name: '',
      image: ''
    }
  ];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAdministrators();
  }
  // get response from api
  getAdministrators() {
    this.http
      .get('https://61c5d0a5c003e70017b79940.mockapi.io/api/platform')
      .subscribe((Response) => {
        this.li = Response;
        this.administrators = this.li[0].administrators;
        console.log('administrators : ', this.administrators);
      });
  }
}
