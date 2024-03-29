import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {
  li: any;
  locations = [
    {
      image: '',
      licences: 0,
      name: '',
      products: {
        monitoring: true,
        exams: true,
        applicationLibrary: true,
      },
      enrollmentDate: 1629198614,
    },
  ];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    this.http
      .get('https://61c5d0a5c003e70017b79940.mockapi.io/api/platform')
      .subscribe((Response) => {
        this.li = Response;
        this.locations = this.li[0].locations;
        console.log('locations : ', this.locations);
      });
  }
}
