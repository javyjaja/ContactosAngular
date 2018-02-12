import{ RouterModule,Routes} from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NuevoContactoComponent } from './components/nuevo-contacto/nuevo-contacto.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';

const APP_ROUTES:Routes = [
{path:'perfil',component:PerfilComponent},
{path:'nuevo',component:NuevoContactoComponent},
{path:'contactos',component:ListaContactosComponent},
{path:'**', pathMatch:'full',redirectTo:'perfil'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);