import { Component, OnInit } from '@angular/core';
import { RelatoriosService } from '../relatorios.service';
import { IProduto } from 'src/app/produtos/produto/produto.model';

@Component({
  selector: 'app-produto-em-estoque',
  templateUrl: './produto-em-estoque.component.html',
  styleUrls: ['./produto-em-estoque.component.css']
})
export class ProdutoEmEstoqueComponent implements OnInit {

  produtos: IProduto[] = [];
  errorMessage = '';

  constructor(private relatorioService: RelatoriosService) { }

  ngOnInit() {
  }

  gerarRelatorio() {
    this.relatorioService.getProdutosEmEstoque()
      .subscribe(prod => {this.produtos = prod; },
      error => this.errorMessage = <any>error);
  }

}
