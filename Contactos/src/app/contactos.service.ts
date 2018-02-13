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

  getContactos(){
    let url = 'https://contactosangular.firebaseio.com/.json';
    let headers = {
        'Content-Type': 'application/json'
    };
    //return this.http.get(url,{ headers: headers }).toPromise();
  }


  getContactos2() {
      let url = 'https://contactosangular.firebaseio.com/.json';
      let headers = {
          'Content-Type': 'application/json'
      };

     // this.http.get(url).subscribe(
       // data => {
         //   let contactos: ContactoModel[] = [];

           // for (let contactoJson of data as Array<any>) {
             //   const contacto:ContactoModel = {
               //     id: contactoJson.id,
                 //   nombre:contactoJson.nombre,
                   // telefono:contactoJson.telefono
               // };
                //contactos.push(contacto);
            //};
      //return (contactos);
    //},
   // );

}

}
