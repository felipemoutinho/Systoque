import { Component, OnInit } from '@angular/core';
import { Vendedor } from 'src/app/vendedores/vendedor/vendedor.model';
import { VendedoresService } from 'src/app/vendedores/vendedores.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RelatoriosService } from '../relatorios.service';
import { IExtrato } from './extrato.model';


@Component({
  selector: 'app-extrato-comissao',
  templateUrl: './extrato-comissao.component.html',
  styleUrls: ['./extrato-comissao.component.css']
})
export class ExtratoComissaoComponent implements OnInit {

  vendedores: Vendedor[] = [];
  errorMessage = '';
  extratoForm: FormGroup;
  extrato: IExtrato[] = [];
  constructor(private vendedorService: VendedoresService, private fb: FormBuilder, private relatorioService: RelatoriosService) { }

  ngOnInit() {
    this.vendedorService.getVendedores()
    .subscribe(vendedores => {this.vendedores = vendedores; },
      error => this.errorMessage = <any>error
    );

    this.extratoForm = this.fb.group({
      dataInicio: this.fb.control('', [Validators.required]),
      dataFinal: this.fb.control('', [Validators.required]),
      vendedor: this.fb.control('', [Validators.required])
    });
  }

  getExtrato(extrato) {
    this.relatorioService.getExtratoComissao(extrato)
      .subscribe(extrat => {this.extrato = extrat; },
        error => this.errorMessage = <any>error);
  }

  totalGeral(): number {
    return this.extrato.map(item => item.ComissaoTotal).reduce((prev, value) => prev + value, 0);
  }

}
