import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BodyGlobalComponent } from './body-global/body-global.component';
import { SobreNosComponent } from './body-global/sobre-nos/sobre-nos.component';
import { FilmesComponent } from './body-global/filmes/filmes.component';
import { InformacoesComponent } from './body-global/informacoes/informacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyGlobalComponent,
    SobreNosComponent,
    FilmesComponent,
    InformacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
