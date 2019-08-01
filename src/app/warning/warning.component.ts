import { Component } from '@angular/core';

@Component({
  selector: 'Warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css'],
})
export class Warning {
  message: String = 'This is an error';
}
