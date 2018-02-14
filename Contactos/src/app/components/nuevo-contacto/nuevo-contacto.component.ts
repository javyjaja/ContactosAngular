import { Component, OnInit } from '@angular/core';
import { NgForm}  from '@angular/forms';
import { ContactoModel } from '../../models/ContactoModel';
import { ContactosService } from '../../contactos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-nuevo-contacto',
    templateUrl: './nuevo-contacto.component.html',
    styleUrls: ['./nuevo-contacto.component.css']
})

export class NuevoContactoComponent implements OnInit {
    contacto:ContactoModel = {
        nombre:"",
        telefono:""
    };

    nuevo:boolean = false;
    id:string;
    contactos:ContactoModel[] = [];
    
    constructor(
        private _contactoService:ContactosService,
        private router:Router,
        private route:ActivatedRoute    
    ) { 
        this.route.params.subscribe(parametros=>{
            this.id = parametros['id']; 
        });
    }

    ngOnInit() {
        if(this.id=="nuevo")
        {
            this.contacto ={
                nombre:"",
                telefono:""
            };
        }
        else{
            this._contactoService.buscarContacto(this.id)
            .subscribe(data=>{
                this.contacto = data;
            });
        }
    }

    guardar(){
        if(this.id == "nuevo")
        {
            this._contactoService.nuevoContacto(this.contacto).subscribe(data=>{
                alert("Guardado correctamente con id " + data.name);
                this.router.navigate(['contactos']);
            });
        }
        else{
            this._contactoService.actualizarContacto(
                this.contacto,this.id
            ).subscribe(data=>{
                alert("Actualizado correctamente");
                this.router.navigate(['contactos']);
            },
                error=>console.error(error)
            );
        }
    }
}
