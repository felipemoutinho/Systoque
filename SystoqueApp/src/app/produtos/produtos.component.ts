import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduto } from './produto/produto.model';
import { ProdutosService } from './produtos.service';

import { Router } from '@angular/router';
import { AlertService } from '../shared/alert.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtosForm: FormGroup;
  produto: IProduto;
  errorMessage: string;


  constructor(private formBuider: FormBuilder, private produtoService: ProdutosService,
    private router: Router, private alert: AlertService) { }

  ngOnInit() {
    this.produtosForm = this.formBuider.group({
      cb: ['', [Validators.required]],
      nomeProduto: ['', [Validators.required]],
      valorVenda: ['', [Validators.required]],
      qtdProd: ['', [Validators.required]],
      qtdMinProd: ['', [Validators.required]],
      perecivel: false,
      dataValidade: [''],
      lote: [''],
      prazoGarantia: [''],
    });
  }

  cadastrarProduto(produto: IProduto) {
    this.produtoService.createProduto(produto)
    .subscribe(
      () => this.onSaveComplete(),
      (error: any) => this.errorMessage = <any>error);
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.produtosForm.reset();
    this.alert.Success('Produto Registrado com Sucesso');
    this.router.navigate(['/produtos']);
  }



}
