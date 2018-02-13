import { Component, OnInit } from '@angular/core';
import { NgForm}  from '@angular/forms';
import { ContactoModel } from '../../models/ContactoModel';
import { ContactosService } from '../../contactos.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nuevo-contacto',
    templateUrl: './nuevo-contacto.component.html',
    styleUrls: ['./nuevo-contacto.component.css']
})

export class NuevoContactoComponent implements OnInit {
    contacto:ContactoModel = {
      nombre:"",
      telefono:""
    }
    constructor(private _contactoService:ContactosService,private router:Router) { }

    ngOnInit() {
    
    }

    guardar(){
        this._contactoService.nuevoContacto(this.contacto).subscribe(data=>{
        alert("Guardado correctamente con id " + data.name);
        this.router.navigate(['perfil']);
      });
  }

}
