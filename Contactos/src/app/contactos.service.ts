import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactoModel } from './components/contactos/contactoModel';

@Injectable()
export class ContactosService {

  constructor(
    private http: HttpClient
  ) { }

  getContactos(success: (contactos: ContactoModel[]) => void,
  error: (message: string) => void
) {

  let url = 'https://baas.kinvey.com/appdata/kid_ByzNdhm8z/movies';
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic a2lkX0J5ek5kaG04ejo4NDg3NTE5MGQwZDE0NWJkOGU4OGZlOTQ0ZDYyNjIxNg==',
    'X-Kinvey-API-Version': '3'
  };

  this.http.get(url, { headers: headers }).subscribe(
    data => {
      let contactos: ContactoModel[] = [];

      for (let contactoJson of data as Array<any>) {
        const contacto:ContactoModel = {
          identifier: contactoJson._id,
          nombre:contactoJson.titulo,
          telefono:contactoJson.descripcion
        };
        contactos.push(contacto);
      }
      success(contactos);
    },
    err => {
      error('Ocurrio un error al consultar la lista de peliculas');
    });

}

}
