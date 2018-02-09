import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fechaActual="";
  horaActual ="";
  constructor() {
    let f = new Date();
    this.fechaActual = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
    this.horaActual = f.getHours() + ":" +f.getMinutes();
   }

  ngOnInit() {
  }

}
