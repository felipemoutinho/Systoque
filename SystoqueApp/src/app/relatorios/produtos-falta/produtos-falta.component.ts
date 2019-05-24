import { Component, OnInit } from '@angular/core';
import { RelatoriosService } from '../relatorios.service';
import { IProduto } from 'src/app/produtos/produto/produto.model';

@Component({
  selector: 'app-produtos-falta',
  templateUrl: './produtos-falta.component.html',
  styleUrls: ['./produtos-falta.component.css']
})
export class ProdutosFaltaComponent implements OnInit {

  produtos: IProduto[] = [];
  errorMessage = '';

  constructor(private relatorioService: RelatoriosService) { }

  ngOnInit() {
  }

  gerarRelatorio() {
    this.relatorioService.getProdutosEmFalta()
      .subscribe(prod => {this.produtos = prod; },
      error => this.errorMessage = <any>error);
  }

}
