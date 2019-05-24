import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { VendedorComponent } from './vendedores/vendedor/vendedor.component';

import { VendedoresService } from './vendedores/vendedores.service';
import { AlertService } from './shared/alert.service';


import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { ProdutosService } from './produtos/produtos.service';
import { RegistroVendaComponent } from './registro-venda/registro-venda.component';
import { RegistroVendaService } from './registro-venda/registro-venda.service';
import { ExtratoComissaoComponent } from './relatorios/extrato-comissao/extrato-comissao.component';
import { ProdutosFaltaComponent } from './relatorios/produtos-falta/produtos-falta.component';
import { ProdutoEmEstoqueComponent } from './relatorios/produto-em-estoque/produto-em-estoque.component';
import { FaturamentoComponent } from './relatorios/faturamento/faturamento.component';
import { InputComponent } from './shared/input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SobreComponent,
    VendedoresComponent,
    VendedorComponent,
    ProdutosComponent,
    ProdutoComponent,
    RegistroVendaComponent,
    ExtratoComissaoComponent,
    ProdutosFaltaComponent,
    ProdutoEmEstoqueComponent,
    FaturamentoComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [VendedoresService, AlertService, ProdutosService, RegistroVendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
