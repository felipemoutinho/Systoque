import { Component, OnInit } from '@angular/core';
import { VendedoresService } from '../vendedores/vendedores.service';
import { Vendedor } from '../vendedores/vendedor/vendedor.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutosService } from '../produtos/produtos.service';
import { IProduto } from '../produtos/produto/produto.model';

import { AlertService } from '../shared/alert.service';
import { IRegistroItens } from './venda-item.model';
import { RegistroVendaService } from './registro-venda.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-venda',
  templateUrl: './registro-venda.component.html',
  styleUrls: ['./registro-venda.component.css']
})
export class RegistroVendaComponent implements OnInit {

  vendedores: Vendedor[] = [];
  errorMessage = '';
  vendaForm: FormGroup;
  produto: IProduto;
  itens: IRegistroItens[] = [];
  item: IRegistroItens;
  total: number;

  constructor(private vendedorService: VendedoresService, private fb: FormBuilder, private produtoService: ProdutosService,
    private alert: AlertService, private registroVendaService: RegistroVendaService, private router: Router) { }

  ngOnInit() {
    this.vendedorService.getVendedores()
    .subscribe(vendedores => {this.vendedores = vendedores; },
      error => this.errorMessage = <any>error
    );

    this.vendaForm = this.fb.group({
      dataPedido: this.fb.control('', [Validators.required]),
      dataPrevEntrega: this.fb.control('', [Validators.required]),
      vendedor: this.fb.control('', [Validators.required]),
      valorTotal : this.total,
      codProduto: this.fb.control('', [Validators.required]),
      nomeProduto: this.fb.control({value: '', disabled: true}, [Validators.required]),
      quantidade: this.fb.control('', [Validators.required]),
      valorProduto: this.fb.control({value: '', disabled: true}, [Validators.required])
    });
  }

  procurarProduto(cb: number) {
    this.produtoService.getProduto(cb)
      .subscribe(produto => {
        this.produto = produto;
        if (this.produto[0] === undefined) {
          this.alert.Warning('Produto não encontrado');
        } else { this.updateForm(this.produto[0].nomeproduto, this.produto[0].valorvenda); }
      },
        error => this.errorMessage = <any>error
      );
  }

  updateForm(nomeProd, valorProd) {
    this.vendaForm.patchValue({
      nomeProduto: nomeProd,
      valorProduto: valorProd
    });
  }

  addItens() {
    this.item = {
      codProduto: this.vendaForm.get('codProduto').value,
      nomeProduto: this.vendaForm.get('nomeProduto').value,
      valorUnitario: this.vendaForm.get('valorProduto').value,
      quantidade: this.vendaForm.get('quantidade').value,
      subtotal: this.vendaForm.get('valorProduto').value * this.vendaForm.get('quantidade').value
    };
    this.itens.push(this.item);
    this.total = this.totalGeral();
    this.vendaForm.patchValue({
      codProduto: '',
      nomeProduto: '',
      valorProduto: '',
      quantidade: '',
      valorTotal: this.total
    });
  }

  removerItem(i: IRegistroItens) {
    this.itens.splice(this.itens.indexOf(i), 1);
    this.total = this.totalGeral();
    this.vendaForm.patchValue({
      valorTotal: this.total
    });
  }

  totalGeral(): number {
    return this.itens.map(item => item.subtotal).reduce((prev, value) => prev + value, 0);
  }

  registrarVenda(venda: IRegistroItens) {
    this.vendaForm.patchValue({
      valorTotal: this.total
    });
    this.registroVendaService.createVenda(venda)
      .subscribe(
        () => this.onSaveComplete(),
        (error: any) => this.errorMessage = <any>error);
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.vendaForm.reset();
    this.itens = [];
    this.total = 0;
    this.alert.Success('Venda Registrada com Sucesso');
    this.router.navigate(['/vendas']);
  }

}
