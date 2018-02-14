import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../../contactos.service';
import { ContactoModel } from '../../models/ContactoModel';

@Component({
    selector: 'app-lista-contactos',
    templateUrl: './lista-contactos.component.html',
    styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {
    contactos: ContactoModel[];
    constructor(
        private _contactoService:ContactosService
    ) { 
    
    }

    ngOnInit() {
        this.contactos = [];
        this._contactoService.traerTodos().subscribe(data=>{
            this.contactos=data;
        })
    }

    traerTodos(){
        this._contactoService.traerTodos().subscribe(data=>{
          this.contactos=data;
        });
    }
}