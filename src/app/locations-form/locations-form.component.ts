import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-locations-form',
  templateUrl: './locations-form.component.html',
  styleUrls: ['./locations-form.component.css'],
})
export class LocationsFormComponent {
  locationForm = new FormGroup({
    branchName: new FormControl(''),
    licenceNeeded: new FormControl(''),
    enrollmentDate: new FormControl(''),
    modules: new FormControl(''),
  });
}

