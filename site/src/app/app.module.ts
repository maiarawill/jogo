import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrosselComponent } from './Carrossel/carrossel.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { RodapeComponent } from './Rodape/Rodape.component';
import {BundaoComponent} from './ISRAEL/bundao.component';
import { PainelComponent } from './painel/painel.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { ImagemIndexComponent } from './imagem-index/imagem-index.component'

@NgModule({
  declarations: [
    AppComponent,
    CarrosselComponent,
    NavBarComponent,
    RodapeComponent,
    BundaoComponent,
    PainelComponent,
    ConteudoComponent,
    ImagemIndexComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
