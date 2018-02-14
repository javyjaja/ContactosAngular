import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ContactoModel } from './models/ContactoModel';
import { Http,Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ContactosService {
    url:string = 'https://contactosangular.firebaseio.com/.json';
    constructor(
        private http: Http
    ) { }

    nuevoContacto(contacto:ContactoModel){
        let body = JSON.stringify(contacto);
        let headers = new Headers({
            'Content-Type':'application/json'
        });

        return this.http.post(this.url,body,{headers:headers})
        .map(res=>{
            console.log(res.json());
            return res.json();
        });
    }

    traerTodos(){
        return this.http.get(this.url).map(res=>{return res.json();});
    }

    actualizarContacto(contacto:ContactoModel,key$:string)
    {
        let urlContacto = `https://contactosangular.firebaseio.com/${key$}.json`;
        let body = JSON.stringify(contacto);
        let headers = new Headers({
            'Content-Type':'application/json'
        });
        return this.http.put(urlContacto,body,{headers})
        .map(res=>{return res.json();});
    }

    buscarContacto(key$:string)
    {
        let urlContacto = `https://contactosangular.firebaseio.com/${key$}.json`;
        return this.http.get(urlContacto).map(res=>res.json());
    }

    eliminar(key$:string){
        let urlContacto = `https://contactosangular.firebaseio.com/${key$}.json`;
        return this.http.delete(urlContacto)
        .map(res=>{res.json()});
    }
}
