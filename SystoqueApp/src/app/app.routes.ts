import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { RegistroVendaComponent } from './registro-venda/registro-venda.component';
import { ExtratoComissaoComponent } from './relatorios/extrato-comissao/extrato-comissao.component';
import { ProdutosFaltaComponent } from './relatorios/produtos-falta/produtos-falta.component';
import { ProdutoEmEstoqueComponent } from './relatorios/produto-em-estoque/produto-em-estoque.component';
import { FaturamentoComponent } from './relatorios/faturamento/faturamento.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'vendedores', component: VendedoresComponent},
    {path: 'produtos', component: ProdutosComponent},
    {path: 'vendas', component: RegistroVendaComponent},
    {path: 'extrato-comissao', component: ExtratoComissaoComponent},
    {path: 'produtos-em-falta', component: ProdutosFaltaComponent},
    {path: 'produtos-em-estoque', component: ProdutoEmEstoqueComponent},
    {path: 'faturamento', component: FaturamentoComponent}
];
