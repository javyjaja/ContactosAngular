import { Component, OnInit, Input } from '@angular/core';
import { ContactosService } from '../../contactos.service';
import { ContactoModel } from '../../models/ContactoModel';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contactos',
    templateUrl: './contactos.component.html',
    styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
    @Input() contacto: ContactoModel;
    @Input() k:string;
    constructor(private _contactoService:ContactosService,
        private router:Router,) { }

    ngOnInit() {
    }

    eliminar(key$:string)
    {
        this._contactoService.eliminar(key$)
        .subscribe(respuesta=>{
            if(respuesta)
            {
                alert(respuesta);
                console.error(respuesta);
            }
            else{
                delete this.contacto[key$];
                alert("Eliminado Correctamente");
                this.router.navigate(['perfil']);
            }
        });
    }
}
