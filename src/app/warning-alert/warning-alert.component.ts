import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  // styleUrls: ['./warning-alert.component.css']
  styles: [
    `
    p
    {
      padding:10px;
      background-color:lightcoral;
      border:1px solid red;
    }
    `
  ]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
