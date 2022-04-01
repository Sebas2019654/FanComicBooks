import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent} from './header/header.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { ClienteInicioSesionComponent } from './cliente-inicio-sesion/cliente-inicio-sesion.component';
import { YoutubeComponent } from './youtube/youtube.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { PdfComponent } from './pdf/pdf.component';
const routes:Routes = [
  {path: '', redirectTo:'', pathMatch:'full'},
  {path: 'directivas',component: DirectivaComponent},
  {path: 'clientes',component: ClientesComponent},
  {path: 'inicio',component: InicioComponent},
  {path: 'proveedores',component: ProveedoresComponent},
  {path: 'clientes/form',component: FormComponent},
  {path: 'clientes/form/:Nick_Name',component: FormComponent},
  {path: 'inicioSesion',component: ClienteInicioSesionComponent},
  {path: 'youtube',component: YoutubeComponent},
  {path: 'pdf',component: PdfComponent}

];




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    ProveedoresComponent,
    FormComponent,
    InicioComponent,
    ClienteInicioSesionComponent,
    YoutubeComponent,
    PdfComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
