import { Component, OnInit, Input } from '@angular/core';
import { ContactosService } from '../../contactos.service';
import { ContactoModel } from '../../models/ContactoModel';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  @Input() contacto: ContactoModel;
    constructor(private cotactoService:ContactosService) { }

  ngOnInit() {
  }

}
