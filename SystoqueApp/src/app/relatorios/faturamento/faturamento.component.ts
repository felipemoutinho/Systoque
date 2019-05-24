import { Component, OnInit } from '@angular/core';
import { RelatoriosService } from '../relatorios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IExtrato } from '../extrato-comissao/extrato.model';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit {

  faturamento: IExtrato[] = [];
  faturamentoForm: FormGroup;
  errorMessage = '';

  constructor(private relatorioService: RelatoriosService, private fb: FormBuilder) { }

  ngOnInit() {
    this.faturamentoForm = this.fb.group({
      dataInicio: this.fb.control('', [Validators.required]),
      dataFinal: this.fb.control('', [Validators.required])
    });
  }

  getFaturamento(faturamento) {
    this.relatorioService.getFaturamento(faturamento)
      .subscribe(fat => {this.faturamento = fat; },
        error => this.errorMessage = <any>error);
  }

  totalGeral(): number {
    return this.faturamento.map(item => item.TotalVenda).reduce((prev, value) => prev + value, 0);
  }

}
