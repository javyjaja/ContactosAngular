import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

//Routes
import{ APP_ROUTING } from './app.routes';

//Services

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NuevoContactoComponent } from './components/nuevo-contacto/nuevo-contacto.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactosService } from './contactos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PerfilComponent,
    NuevoContactoComponent,
    ContactosComponent,
    FooterComponent,
    ListaContactosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [ContactosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
