import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { ListarAutosComponent } from './listar-autos/listar-autos.component';
import { CrearAutosComponent } from './crear-autos/crear-autos.component';

//Para la gestión de Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Peticiones que le haremos al BackEnd
import { HttpClientModule } from '@angular/common/http';

// Servicio
import { AutosService } from './autos.service'; 

@NgModule({
  declarations: [
    AppComponent,
    ListarAutosComponent,
    CrearAutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [
    AutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
